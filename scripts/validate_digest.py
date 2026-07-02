#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Validate a generated digest.js and manifest.js using lightweight checks."""

import argparse
import json
import re
import sys

from common import ROOT, digest_path_for, extract_latest_from_manifest, read_text, slash_date


def load_strict_payload(raw):
    m = re.search(r'window\.__DAILY__\[[^\]]+\]\s*=\s*(\{.*\})\s*;?\s*$', raw, re.S)
    if not m:
        return None
    try:
        return json.loads(m.group(1))
    except json.JSONDecodeError:
        return None


def prop(name):
    return r'(?:"%s"|%s)\s*:\s*' % (re.escape(name), re.escape(name))


def validate_digest(date_value):
    if date_value == "latest":
        latest = extract_latest_from_manifest()
        if not latest:
            raise SystemExit("[validate] manifest.js 未找到 latest")
        date_value = latest
    key = slash_date(date_value)
    path = digest_path_for(key)
    if not path.exists():
        raise SystemExit("[validate] 未找到 digest: %s" % path)

    raw = read_text(path)
    errors = []
    warnings = []

    if 'window.__DAILY__' not in raw:
        errors.append("缺少 window.__DAILY__ 赋值")
    if key not in raw:
        errors.append("digest 中未包含日期 key %s" % key)
    if not re.search(r'\bdate\s*:\s*"%s"' % re.escape(key.replace("/", "-")), raw) and key.replace("/", "-") not in raw:
        warnings.append("未显式找到 date=%s" % key.replace("/", "-"))

    payload = load_strict_payload(raw)
    if payload:
        item_ids = [item.get("id", "") for item in payload.get("items", [])]
        dims = [dim.get("key", "") for dim in payload.get("dimensions", [])]
        hot_topics = [topic.get("title", "") for topic in payload.get("hot_topics_today", [])]
        urls = [item.get("url", "") for item in payload.get("items", []) if item.get("url")]
    else:
        item_ids = re.findall(prop("id") + r'"([^"]+)"', raw)
        dims = re.findall(prop("key") + r'"([^"]+)"', raw)
        hot_topics = re.findall(prop("title") + r'"([^"]+)"[^{}\n]*' + prop("heat"), raw)
        urls = re.findall(prop("url") + r'"([^"]+)"', raw)

    if len(item_ids) < 1:
        errors.append("items 里未识别到 id")
    if len(dims) < 1:
        errors.append("dimensions 里未识别到 key")
    if len(urls) < max(1, len(item_ids) // 2):
        warnings.append("URL 数量偏少：%d urls / %d items" % (len(urls), len(item_ids)))
    if payload:
        kol_items = [item for item in payload.get("items", []) if item.get("dim") == "kol"]
        x_kol = [
            item for item in kol_items
            if "x.com/" in (item.get("url", "") + " " + " ".join(item.get("x_src") or []))
            or str(item.get("source", "")).lower().startswith(("x", "twitter"))
        ]
        if kol_items:
            ratio = len(x_kol) / float(len(kol_items))
            print("[validate] kol_x_sources=%d/%d (%.0f%%)" % (len(x_kol), len(kol_items), ratio * 100))
            if ratio < 0.5:
                warnings.append("KOL 维度 X 来源占比偏低：%d/%d；请优先补公开 X status/profile 或 x_src" % (len(x_kol), len(kol_items)))

    manifest = read_text(ROOT / "data" / "manifest.js")
    if 'latest: "%s"' % key not in manifest and '"%s"' % key not in manifest:
        warnings.append("manifest.js 未显式标记 latest=%s" % key)
    if path.name not in "digest.js":
        warnings.append("digest 文件名异常")

    print("[validate] date=%s items=%d dimensions=%d hot_topics~=%d urls=%d" % (
        key, len(item_ids), len(set(dims)), len(hot_topics), len(urls)
    ))
    for w in warnings:
        print("[validate][warn]", w)
    if errors:
        for e in errors:
            print("[validate][error]", e)
        return 1
    print("[validate] OK", path)
    return 0


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--date", default="latest", help="YYYY-MM-DD, YYYY/MM/DD, today, or latest")
    args = parser.parse_args()
    sys.exit(validate_digest(args.date))


if __name__ == "__main__":
    main()
