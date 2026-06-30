#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Validate a generated digest.js and manifest.js using lightweight checks."""

import argparse
import re
import sys

from common import ROOT, digest_path_for, extract_latest_from_manifest, read_text, slash_date


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

    item_ids = re.findall(r'\bid\s*:\s*"([^"]+)"', raw)
    dims = re.findall(r'\bkey\s*:\s*"([^"]+)"', raw)
    hot_topics = re.findall(r'\btitle\s*:\s*"([^"]+)"[^{}\n]*\bheat\s*:', raw)
    urls = re.findall(r'\burl\s*:\s*"([^"]+)"', raw)

    if len(item_ids) < 1:
        errors.append("items 里未识别到 id")
    if len(dims) < 1:
        errors.append("dimensions 里未识别到 key")
    if len(urls) < max(1, len(item_ids) // 2):
        warnings.append("URL 数量偏少：%d urls / %d items" % (len(urls), len(item_ids)))

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
