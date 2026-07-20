#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Shared helpers for the Daily Intelligence Workbench scripts."""

import datetime as _dt
import json
import os
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read_text(path):
    return Path(path).read_text(encoding="utf-8")


def write_text(path, text):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def today_date():
    return _dt.date.today().isoformat()


def normalize_date(value):
    if not value or value == "today":
        value = today_date()
    value = value.strip()
    if re.match(r"^\d{4}/\d{2}/\d{2}$", value):
        return value.replace("/", "-")
    if not re.match(r"^\d{4}-\d{2}-\d{2}$", value):
        raise SystemExit("日期格式应为 YYYY-MM-DD、YYYY/MM/DD 或 today")
    return value


def slash_date(value):
    return normalize_date(value).replace("-", "/")


def digest_path_for(date_value, profile_id=None):
    """Return a digest path.

    Legacy digests live directly under the date folder. New profile-aware
    digests use a profile subfolder so several profiles can share one date.
    """
    base = ROOT / "data" / slash_date(date_value)
    return base / profile_id / "digest.js" if profile_id else base / "digest.js"


def manifest_path():
    return ROOT / "data" / "manifest.js"


def manifest_entries():
    """Read the small JavaScript manifest with the standard library only."""
    path = manifest_path()
    if not path.exists():
        return []
    entries = []
    for match in re.finditer(r"\{([^{}]+)\}", read_text(path)):
        block = match.group(1)
        fields = {}
        for name in ("date", "label", "file", "profile"):
            value = re.search(r'%s:\s*"([^"]+)"' % name, block)
            if value:
                fields[name] = value.group(1)
        count = re.search(r"count:\s*(\d+)", block)
        if fields.get("date") and fields.get("file") and count:
            fields["count"] = int(count.group(1))
            fields.setdefault("label", fields["date"])
            fields.setdefault("profile", "general-ai")
            entries.append(fields)
    return entries


def manifest_entry(date_value=None, profile_id=None):
    entries = manifest_entries()
    if date_value and date_value != "latest":
        key = slash_date(date_value)
        entries = [entry for entry in entries if entry["date"] == key]
    if profile_id:
        entries = [entry for entry in entries if entry["profile"] == profile_id]
    return entries[-1] if entries else None


def existing_digest_path(date_value, profile_id=None):
    """Resolve manifest-backed data first, then new and legacy locations."""
    entry = manifest_entry(date_value, profile_id)
    if entry:
        path = ROOT / entry["file"]
        if path.exists():
            return path
    if profile_id:
        path = digest_path_for(date_value, profile_id)
        if path.exists():
            return path
    path = digest_path_for(date_value)
    if not path.exists():
        return None
    if not profile_id:
        return path
    raw = read_text(path)
    embedded = re.search(r'(?:(?:"profile")|profile)\s*:\s*"([^"]+)"', raw)
    embedded_profile = embedded.group(1) if embedded else "general-ai"
    return path if embedded_profile == profile_id else None


def parse_simple_yaml(path):
    """Parse simple top-level YAML key/value pairs without external deps."""
    data = {}
    path = Path(path)
    if not path.exists():
        return data
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or ":" not in line or raw.startswith(" "):
            continue
        key, value = line.split(":", 1)
        value = re.split(r"\s+#", value, 1)[0].strip().strip('"').strip("'")
        data[key.strip()] = value
    return data


def runtime_config():
    cfg = parse_simple_yaml(ROOT / "config" / "runtime.yaml")
    env_cmd = os.environ.get("DAILY_INTEL_AGENT_CMD", "").strip()
    if env_cmd:
        cfg["agent_command"] = env_cmd
    return cfg


def load_json(path):
    return json.loads(read_text(path))


def js_string(value):
    return json.dumps(value, ensure_ascii=False)


def date_label(date_value):
    dt = _dt.date.fromisoformat(normalize_date(date_value))
    return dt.strftime("%Y年%m月%d日")


def extract_latest_from_manifest(profile_id=None):
    if profile_id:
        entry = manifest_entry("latest", profile_id)
        return entry["date"] if entry else None
    path = manifest_path()
    if not path.exists():
        return None
    text = read_text(path)
    m = re.search(r'latest:\s*"([^"]+)"', text)
    return m.group(1) if m else None
