#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Profile discovery and validation for the intelligence workbench."""

import json
import re
from pathlib import Path

from common import ROOT, read_text, runtime_config


PROFILE_ID_RE = re.compile(r"^[a-z0-9][a-z0-9-]*$")
DEFAULT_PROFILE = "general-ai"


def available_profiles(root=ROOT):
    base = Path(root) / "config" / "profiles"
    if not base.exists():
        return []
    return sorted(
        path.parent.name
        for path in base.glob("*/profile.json")
        if path.is_file()
    )


def active_profile_id(override=None, runtime=None):
    if override:
        return override.strip()
    cfg = runtime if runtime is not None else runtime_config()
    return (cfg.get("active_profile") or DEFAULT_PROFILE).strip()


def _inside_root(path, root):
    path = Path(path).resolve()
    root = Path(root).resolve()
    return path == root or root in path.parents


def load_profile(profile_id=None, root=ROOT, runtime=None):
    root = Path(root)
    selected = active_profile_id(profile_id, runtime)
    if not PROFILE_ID_RE.match(selected):
        raise ValueError("无效 profile id: %s" % selected)

    path = root / "config" / "profiles" / selected / "profile.json"
    if not path.exists():
        choices = ", ".join(available_profiles(root)) or "(none)"
        raise ValueError("未知 profile=%s；可选: %s" % (selected, choices))

    try:
        payload = json.loads(read_text(path))
    except json.JSONDecodeError as exc:
        raise ValueError("profile.json 不是有效 JSON: %s" % exc)

    if payload.get("id") != selected:
        raise ValueError("profile id 与目录不一致: %s" % path)

    dimensions = payload.get("dimensions") or []
    if not dimensions:
        raise ValueError("profile 缺少 dimensions: %s" % selected)
    keys = [str(dim.get("key") or "") for dim in dimensions]
    if any(not re.match(r"^[a-z][a-z0-9_]*$", key) for key in keys):
        raise ValueError("dimension key 仅允许小写字母、数字和下划线: %s" % keys)
    if len(keys) != len(set(keys)):
        raise ValueError("dimension key 重复: %s" % keys)
    for dim in dimensions:
        for field in ("key", "cn", "en", "icon", "color", "overview", "notes"):
            if not dim.get(field):
                raise ValueError("dimension 缺少 %s: %s" % (field, dim))
        if not re.match(r"^#[0-9a-fA-F]{6}$", str(dim["color"])):
            raise ValueError("dimension color 必须是 #RRGGBB: %s" % dim["color"])

    resolved = {}
    for name, raw_path in (payload.get("config") or {}).items():
        candidate = (root / raw_path).resolve()
        if not _inside_root(candidate, root):
            raise ValueError("profile 配置路径越界: %s" % raw_path)
        if not candidate.exists():
            raise ValueError("profile 配置不存在: %s" % raw_path)
        resolved[name] = candidate

    payload["_path"] = path.resolve()
    payload["_config_paths"] = resolved
    return payload


def public_dimensions(profile):
    return [dict(dim) for dim in profile.get("dimensions") or []]


def profile_config_lines(profile):
    rows = []
    for name, path in sorted((profile.get("_config_paths") or {}).items()):
        rows.append("- %s: `%s`" % (name, path))
    return "\n".join(rows)
