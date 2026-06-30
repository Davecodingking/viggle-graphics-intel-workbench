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


def digest_path_for(date_value):
    return ROOT / "data" / slash_date(date_value) / "digest.js"


def manifest_path():
    return ROOT / "data" / "manifest.js"


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


def extract_latest_from_manifest():
    path = manifest_path()
    if not path.exists():
        return None
    text = read_text(path)
    m = re.search(r'latest:\s*"([^"]+)"', text)
    return m.group(1) if m else None
