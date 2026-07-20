#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Validate generated digests, including profile-aware dynamic dimensions."""

import argparse
import json
import re
import sys

from common import ROOT, digest_path_for, extract_latest_from_manifest, read_text, slash_date
from profiles import load_profile


CONTENT_TYPES = {
    "paper", "technical_report", "model_card", "github_repo", "news",
    "x_status", "x_article", "official_research", "analysis", "long_blog",
}
RELEVANCE_VALUES = {"direct", "transferable", "systems", "watch"}
NEXT_ACTION_VALUES = {"deep_read", "reproduce", "prototype", "watch"}
IMPACT_VALUES = {
    "quality", "controllability", "latency", "throughput", "memory", "cost",
    "reliability", "developer_velocity", "safety", "data",
}


def load_strict_payload(raw):
    match = re.search(r'window\.__DAILY__\[[^\]]+\]\s*=\s*(\{.*\})\s*;?\s*$', raw, re.S)
    if not match:
        return None
    try:
        return json.loads(match.group(1))
    except json.JSONDecodeError:
        return None


def prop(name):
    return r'(?:(?:"%s")|%s)\s*:\s*' % (re.escape(name), re.escape(name))


def _profile_for_payload(payload, override):
    embedded = (payload or {}).get("profile")
    selected = override or embedded or "general-ai"
    profile = load_profile(selected)
    if override and embedded and override != embedded:
        raise ValueError("digest profile=%s 与 --profile=%s 不一致" % (embedded, override))
    return profile


def _validate_strict_payload(payload, profile, errors, warnings):
    for field in ("date", "date_cn", "generated_at", "dimensions", "hot_topics_today", "items"):
        if field not in payload:
            errors.append("根字段缺失: %s" % field)
    if profile["id"] == "viggle-graphics" and payload.get("profile") != profile["id"]:
        errors.append("Viggle digest 根字段 profile 必须为 viggle-graphics")
    if payload.get("date") and not re.match(r"^\d{4}-\d{2}-\d{2}$", str(payload["date"])):
        errors.append("根字段 date 格式应为 YYYY-MM-DD")

    dimensions = payload.get("dimensions") or []
    dim_keys = [dim.get("key") for dim in dimensions]
    if len(dim_keys) != len(set(dim_keys)):
        errors.append("dimension key 重复")
    for dim in dimensions:
        for field in ("key", "cn", "overview"):
            if not dim.get(field):
                errors.append("dimension %s 缺少 %s" % (dim.get("key", "(unknown)"), field))
        if profile["id"] == "viggle-graphics":
            for field in ("en", "icon", "color", "notes"):
                if not dim.get(field):
                    errors.append("Viggle dimension %s 缺少 %s" % (dim.get("key", "(unknown)"), field))

    expected_dims = {dim["key"] for dim in profile["dimensions"]}
    actual_dims = set(filter(None, dim_keys))
    if profile["id"] == "viggle-graphics" and actual_dims != expected_dims:
        errors.append("Viggle dimensions 应为 %s，实际为 %s" % (sorted(expected_dims), sorted(actual_dims)))

    items = payload.get("items") or []
    item_ids = [item.get("id") for item in items]
    if len(item_ids) != len(set(item_ids)):
        errors.append("items.id 重复")
    known_ids = set(filter(None, item_ids))

    for index, item in enumerate(items, 1):
        label = item.get("id") or "item#%d" % index
        for field in ("id", "dim", "title", "source", "url", "date", "summary", "detail"):
            if not item.get(field):
                errors.append("%s 缺少 %s" % (label, field))
        if item.get("dim") not in actual_dims:
            errors.append("%s dim=%s 不在 dimensions 中" % (label, item.get("dim")))
        url = str(item.get("url") or "")
        if url and not url.startswith(("http://", "https://", "mcp://")):
            errors.append("%s URL 协议无效" % label)

        content_type = item.get("content_type")
        if content_type and content_type not in CONTENT_TYPES:
            errors.append("%s content_type=%s 无效" % (label, content_type))

        relevance = item.get("relevance")
        if relevance is not None and relevance not in RELEVANCE_VALUES:
            errors.append("%s relevance=%s 无效" % (label, relevance))
        next_action = item.get("next_action")
        if next_action is not None and next_action not in NEXT_ACTION_VALUES:
            errors.append("%s next_action=%s 无效" % (label, next_action))
        impacts = item.get("impact")
        if impacts is not None:
            if not isinstance(impacts, list) or not impacts:
                errors.append("%s impact 必须是非空数组" % label)
            elif any(value not in IMPACT_VALUES for value in impacts):
                errors.append("%s impact 含无效值: %s" % (label, impacts))

        if profile["id"] == "viggle-graphics":
            if item.get("date") and not re.match(r"^\d{4}-\d{2}-\d{2}$", str(item["date"])):
                errors.append("%s date 格式应为 YYYY-MM-DD" % label)
            if not content_type:
                errors.append("%s 缺少 content_type" % label)
            if relevance is None:
                errors.append("%s 缺少 relevance" % label)
            if next_action is None:
                errors.append("%s 缺少 next_action" % label)
            if impacts is None:
                errors.append("%s 缺少 impact" % label)

        if profile["id"] == "viggle-graphics" and content_type in {"paper", "technical_report"}:
            meta = item.get("meta") or {}
            if not meta.get("venue") and not meta.get("arxiv_id") and not meta.get("arxiv"):
                errors.append("%s 论文/技术报告缺少 meta.venue、meta.arxiv_id 或 meta.arxiv" % label)
        if item.get("depth") == "deep" and len(str(item.get("detail") or "")) < 500:
            warnings.append("深度条目 detail 偏短: %s" % label)

    for topic in payload.get("hot_topics_today") or []:
        for field in ("title", "summary", "related"):
            if field not in topic or topic.get(field) in (None, ""):
                errors.append("热点条目缺少 %s: %s" % (field, topic.get("title", "(unknown)")))
        missing = [item_id for item_id in topic.get("related") or [] if item_id not in known_ids]
        if missing:
            errors.append("热点 %s 引用了不存在的 items: %s" % (topic.get("title"), missing))
        unknown_dims = [key for key in topic.get("dims") or [] if key not in actual_dims]
        if unknown_dims:
            errors.append("热点 %s 引用了不存在的 dimensions: %s" % (topic.get("title"), unknown_dims))

    if profile["id"] == "viggle-graphics":
        covered = {item.get("dim") for item in items}
        missing_dims = expected_dims - covered
        if missing_dims:
            errors.append("Viggle 样例/简报未覆盖维度: %s" % sorted(missing_dims))
        paper_dims = {
            item.get("dim") for item in items
            if item.get("content_type") in {"paper", "technical_report"}
        }
        for required in ("video", "graphics", "systems"):
            if required not in paper_dims:
                warnings.append("Viggle 论文覆盖缺少 %s 维度" % required)

    if profile["id"] == "general-ai":
        kol_items = [item for item in items if item.get("dim") == "kol"]
        x_kol = [
            item for item in kol_items
            if "x.com/" in (item.get("url", "") + " " + " ".join(item.get("x_src") or []))
            or str(item.get("source", "")).lower().startswith(("x", "twitter"))
        ]
        if kol_items:
            ratio = len(x_kol) / float(len(kol_items))
            print("[validate] kol_x_sources=%d/%d (%.0f%%)" % (len(x_kol), len(kol_items), ratio * 100))
            if ratio < 0.5:
                warnings.append("KOL 维度 X 来源占比偏低：%d/%d" % (len(x_kol), len(kol_items)))

    return item_ids, dim_keys, [item.get("url") for item in items if item.get("url")]


def validate_digest(date_value, profile_override=None):
    if date_value == "latest":
        date_value = extract_latest_from_manifest()
        if not date_value:
            raise SystemExit("[validate] manifest.js 未找到 latest")
    key = slash_date(date_value)
    path = digest_path_for(key)
    if not path.exists():
        raise SystemExit("[validate] 未找到 digest: %s" % path)

    raw = read_text(path)
    errors, warnings = [], []
    if "window.__DAILY__" not in raw:
        errors.append("缺少 window.__DAILY__ 赋值")
    if key not in raw:
        errors.append("digest 中未包含日期 key %s" % key)

    payload = load_strict_payload(raw)
    try:
        profile = _profile_for_payload(payload, profile_override)
    except ValueError as exc:
        errors.append(str(exc))
        profile = load_profile("general-ai")

    if payload:
        item_ids, dims, urls = _validate_strict_payload(payload, profile, errors, warnings)
        hot_topics = payload.get("hot_topics_today") or []
        if str(payload.get("date") or "").replace("-", "/") != key:
            errors.append("digest 根字段 date 与文件日期 %s 不一致" % key)
    else:
        item_ids = re.findall(prop("id") + r'"([^"]+)"', raw)
        dims = re.findall(prop("key") + r'"([^"]+)"', raw)
        urls = re.findall(prop("url") + r'"([^"]+)"', raw)
        hot_topics = re.findall(prop("related"), raw)
        if profile_override and profile_override != "general-ai":
            errors.append("legacy JavaScript digest 只能按 general-ai 校验")

    if not item_ids:
        errors.append("items 里未识别到 id")
    if not dims:
        errors.append("dimensions 里未识别到 key")
    if len(urls) < max(1, len(item_ids) // 2):
        warnings.append("URL 数量偏少：%d urls / %d items" % (len(urls), len(item_ids)))

    manifest = read_text(ROOT / "data" / "manifest.js")
    if key not in manifest:
        warnings.append("manifest.js 未包含 %s" % key)

    print("[validate] profile=%s date=%s items=%d dimensions=%d hot_topics=%d urls=%d" % (
        profile["id"], key, len(item_ids), len(set(dims)), len(hot_topics), len(urls)
    ))
    for warning in warnings:
        print("[validate][warn]", warning)
    if errors:
        for error in errors:
            print("[validate][error]", error)
        return 1
    print("[validate] OK", path)
    return 0


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--date", default="latest", help="YYYY-MM-DD, YYYY/MM/DD, today, or latest")
    parser.add_argument("--profile", help="Expected profile id; digest profile is used when omitted")
    args = parser.parse_args()
    return validate_digest(args.date, args.profile)


if __name__ == "__main__":
    sys.exit(main())
