#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Daily Intelligence Workbench runner.

This script is intentionally deterministic. It can validate an existing digest,
write a digest from canonical JSON, copy bundled sample data for smoke tests,
or create an agent handoff prompt for Claude Code / Codex to complete research.
"""

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

from common import (
    ROOT,
    date_label,
    digest_path_for,
    js_string,
    load_json,
    normalize_date,
    read_text,
    runtime_config,
    slash_date,
    write_text,
)
from profiles import load_profile, profile_config_lines, public_dimensions


LANGUAGE_INSTRUCTIONS = {
    "zh": "最终 digest 的标题、摘要、详细解释、热点、维度概览与 practice_list 使用简体中文；技术术语、公司名、项目名、URL 保留原文。",
    "en": "Write the final digest titles, summaries, details, hot topics, dimension overviews, and practice_list in English. Keep source names, project names, tickers, and URLs unchanged.",
    "bilingual": "Write the final digest in bilingual form: prioritize Simplified Chinese, and include concise English equivalents for titles and key summaries where useful. Keep source names, project names, tickers, and URLs unchanged.",
}


def js_value(obj, indent=2):
    return json.dumps(obj, ensure_ascii=False, indent=indent)


def load_config_kol_list(profile):
    path = (profile.get("_config_paths") or {}).get("kol")
    if not path:
        return []
    if not path.exists():
        return []
    items = []
    for line in read_text(path).splitlines():
        line = line.strip()
        if not line.startswith("- {") or "handle:" not in line:
            continue
        row = {}
        for key, quoted, bare in re.findall(r'(\w+):\s*(?:"([^"]*)"|([^,}]+))', line):
            row[key] = (quoted or bare).strip()
        if row.get("handle") and row.get("name"):
            items.append({
                "handle": row.get("handle", ""),
                "name": row.get("name", ""),
                "field": row.get("field", ""),
                "platform": row.get("platform", ""),
                "status": row.get("status", ""),
            })
    return items


def apply_persistent_config(payload, profile):
    config_kol = load_config_kol_list(profile)
    if config_kol and len(payload.get("kol_list") or []) < len(config_kol):
        payload["kol_list"] = config_kol
    return payload


def merge_dimensions(payload_dimensions, profile):
    configured = {dim["key"]: dim for dim in public_dimensions(profile)}
    if not payload_dimensions:
        return list(configured.values())
    merged = []
    for raw in payload_dimensions:
        dim = dict(configured.get(raw.get("key"), {}))
        dim.update(raw)
        merged.append(dim)
    return merged


def write_digest_from_json(date_value, json_path, language_override=None, profile_override=None):
    date_iso = normalize_date(date_value)
    key = slash_date(date_iso)
    cfg = runtime_config()
    language = (language_override or cfg.get("output_language") or "zh").strip()
    if language not in LANGUAGE_INSTRUCTIONS:
        language = "zh"
    try:
        profile = load_profile(profile_override)
    except ValueError as exc:
        raise SystemExit(str(exc))
    payload = load_json(json_path)
    source_date = payload.get("date")
    payload["date"] = date_iso
    payload["language"] = language
    if source_date != date_iso or not payload.get("date_cn"):
        payload["date_cn"] = date_label(date_iso)
    payload["generated_at"] = date_iso
    payload.setdefault("refresh_note", "由 Daily Intelligence Workbench 生成。")
    payload["profile"] = profile["id"]
    payload["dimensions"] = merge_dimensions(payload.get("dimensions"), profile)
    payload.setdefault("hot_topics_today", [])
    payload.setdefault("items", [])
    payload.setdefault("kol_list", [])
    payload.setdefault("practice_list", [])
    payload = apply_persistent_config(payload, profile)

    out = digest_path_for(date_iso)
    text = [
        "// 当日聚合数据（由 Daily Intelligence Workbench 生成）。",
        "window.__DAILY__ = window.__DAILY__ || {};",
        'window.__DAILY__[%s] = %s;' % (js_string(key), js_value(payload, indent=2)),
        "",
    ]
    write_text(out, "\n".join(text))
    update_manifest(date_iso, len(payload.get("items", [])), profile["id"])
    print("[run] 已写入", out)
    return out


def update_manifest(date_value, count, profile_id="general-ai"):
    date_iso = normalize_date(date_value)
    key = slash_date(date_iso)
    manifest = ROOT / "data" / "manifest.js"
    manifest.parent.mkdir(parents=True, exist_ok=True)

    entries = []
    if manifest.exists():
        raw = read_text(manifest)
        for m in __import__("re").finditer(r'\{([^{}]+)\}', raw):
            block = m.group(1)
            date_match = __import__("re").search(r'date:\s*"([^"]+)"', block)
            label_match = __import__("re").search(r'label:\s*"([^"]+)"', block)
            count_match = __import__("re").search(r'count:\s*(\d+)', block)
            file_match = __import__("re").search(r'file:\s*"([^"]+)"', block)
            if not all((date_match, label_match, count_match, file_match)):
                continue
            profile_match = __import__("re").search(r'profile:\s*"([^"]+)"', block)
            entries.append({
                "date": date_match.group(1),
                "label": label_match.group(1),
                "count": int(count_match.group(1)),
                "file": file_match.group(1),
                "profile": profile_match.group(1) if profile_match else "general-ai",
            })
    entries = [e for e in entries if e["date"] != key]
    entries.append({
        "date": key,
        "label": date_label(date_iso),
        "count": int(count),
        "file": "data/%s/digest.js" % key,
        "profile": profile_id,
    })
    entries.sort(key=lambda e: e["date"])
    latest = entries[-1]["date"]
    body = ",\n".join(
        '    { date: "%s", label: "%s", count: %d, file: "%s", profile: "%s" }' %
        (e["date"], e["label"], e["count"], e["file"], e.get("profile", "general-ai"))
        for e in entries
    )
    write_text(manifest, "\n".join([
        "// 数据清单：记录已有哪些日期的调研数据。每天调研后追加一条。",
        "window.__MANIFEST__ = {",
        '  generated_at: "%s",' % date_iso,
        '  latest: "%s",' % latest,
        "  dates: [",
        body,
        "  ]",
        "};",
        "",
    ]))
    print("[run] 已更新 manifest latest=%s" % latest)


def copy_sample(date_value, sample_date):
    src = digest_path_for(sample_date)
    if not src.exists():
        raise SystemExit("[run] 样例 digest 不存在: %s" % src)
    dst = digest_path_for(date_value)
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(src, dst)
    raw = read_text(dst)
    date_iso = normalize_date(date_value)
    old_key = slash_date(sample_date)
    new_key = slash_date(date_iso)
    raw = raw.replace('["%s"]' % old_key, '["%s"]' % new_key)
    raw = raw.replace('date: "%s"' % normalize_date(sample_date), 'date: "%s"' % date_iso)
    raw = raw.replace('generated_at: "%s"' % normalize_date(sample_date), 'generated_at: "%s"' % date_iso)
    write_text(dst, raw)
    item_count = len(__import__("re").findall(r'\bid\s*:\s*"([^"]+)"', raw))
    update_manifest(date_iso, item_count, "general-ai")
    print("[run] 已复制样例 %s -> %s" % (old_key, new_key))


def create_research_prompt(date_value, language_override=None, profile_override=None):
    date_iso = normalize_date(date_value)
    cfg = runtime_config()
    language = (language_override or cfg.get("output_language") or "zh").strip()
    if language not in LANGUAGE_INSTRUCTIONS:
        language = "zh"
    try:
        profile = load_profile(profile_override)
    except ValueError as exc:
        raise SystemExit(str(exc))
    language_instruction = LANGUAGE_INSTRUCTIONS[language]
    run_dir = ROOT / ".daily-intel" / "runs" / date_iso
    prompt_path = run_dir / "research_prompt.md"
    dimensions = "\n".join(
        "- `{key}`: {cn} / {en}".format(**dim)
        for dim in profile["dimensions"]
    )
    instructions = "\n".join(
        "%d. %s" % (index, instruction)
        for index, instruction in enumerate(profile.get("research_instructions") or [], 1)
    )
    prompt = """# Daily Intelligence Research Task

日期：{date_iso}
工作区：{root}
产出语言：{language} — {language_instruction}
Profile：`{profile_id}` — {profile_label}

请基于本仓库的 `skills/daily-intelligence-workbench/SKILL.md`、当前 profile 和调研方法论生成当日情报。

## 当前配置

{config_lines}

维度：
{dimensions}

Profile 规则：
{instructions}

## 执行要求

1. 先读 profile.json 与上述配置文件，先跑 radar，再按 sources 与 keywords 搜索。
2. 英文关键词优先；主 URL 优先使用顶会、期刊、arXiv、官方研究页、项目页、GitHub 或 Hugging Face。社媒主要用于发现和讨论证据。
3. 过滤营销、招聘、重复、不可验证与超时间窗口内容；每条保留 URL、日期和可信度备注。
4. 每个 item 的 `dim` 必须来自当前维度；`content_type` 使用 `paper/technical_report/model_card/github_repo/news/x_status/x_article/official_research/analysis`。
5. 每个 item 填写 `relevance`（direct/transferable/systems/watch）、`impact` 数组、`next_action`（deep_read/reproduce/prototype/watch）；可验证时填写 `experiment`。
6. 论文或技术报告在 `meta.venue` 或 `meta.arxiv_id` 中保留身份信息，并填写 `method/evidence/viggle_relation/limitations/experiment`，写清方法、证据、局限、与 Viggle 的关系和最小实验。
7. 重要研究项通常设置 `depth=deep`，中文 detail 目标 650-1400 字，并补 `key_points/examples/product_implications/limitations`。
8. 产出 canonical JSON，字段参考 `skills/daily-intelligence-workbench/references/data-schema.md`，根字段写 `profile: {profile_id}`。
9. 写入后运行：

```bash
python3 scripts/run_daily.py --date {date_iso} --profile {profile_id} --from-json <canonical-json-path>
python3 scripts/validate_digest.py --date {date_iso} --profile {profile_id}
```

可选：

```bash
python3 scripts/push_lark.py
```
""".format(
        date_iso=date_iso,
        root=ROOT,
        language=language,
        language_instruction=language_instruction,
        profile_id=profile["id"],
        profile_label=profile.get("label_zh", profile["id"]),
        config_lines=profile_config_lines(profile),
        dimensions=dimensions,
        instructions=instructions,
    )
    write_text(prompt_path, prompt)
    print("[run] 已生成 agent 调研提示:", prompt_path)
    return prompt_path


def maybe_run_agent(date_value, prompt_path):
    cfg = runtime_config()
    cmd = (cfg.get("agent_command") or "").strip()
    if not cmd:
        print("[run] 未配置 agent_command；请把上面的 research_prompt.md 交给 Claude Code / Codex 执行。")
        return 0
    replacements = {
        "{date}": normalize_date(date_value),
        "{root}": str(ROOT),
        "{prompt}": str(prompt_path),
    }
    for k, v in replacements.items():
        cmd = cmd.replace(k, v)
    print("[run] 调用 agent_command:", cmd)
    return subprocess.call(cmd, shell=True, cwd=str(ROOT))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--date", default="today", help="YYYY-MM-DD, YYYY/MM/DD, or today")
    parser.add_argument("--from-json", help="Canonical digest JSON to write into data/YYYY/MM/DD/digest.js")
    parser.add_argument("--sample", action="store_true", help="Copy bundled sample data for a smoke run")
    parser.add_argument("--sample-date", default="2026-06-29", help="Sample date to copy when --sample is used")
    parser.add_argument("--push", action="store_true", help="Push after successful validation")
    parser.add_argument("--strict", action="store_true", help="Exit non-zero when no digest is generated")
    parser.add_argument("--language", choices=sorted(LANGUAGE_INSTRUCTIONS), help="Override runtime.yaml output_language for this run")
    parser.add_argument("--profile", help="Profile id; overrides config/runtime.yaml active_profile")
    args = parser.parse_args()

    date_iso = normalize_date(args.date)
    try:
        profile = load_profile(args.profile)
    except ValueError as exc:
        raise SystemExit(str(exc))

    if args.from_json:
        write_digest_from_json(date_iso, args.from_json, args.language, profile["id"])
    elif args.sample:
        if profile["id"] != "general-ai":
            raise SystemExit("[run] 内置 --sample 属于 general-ai；Viggle 样例请使用 tests/fixtures/viggle_digest.json")
        copy_sample(date_iso, args.sample_date)
    elif digest_path_for(date_iso).exists():
        print("[run] 当日 digest 已存在:", digest_path_for(date_iso))
    else:
        prompt_path = create_research_prompt(date_iso, args.language, profile["id"])
        rc = maybe_run_agent(date_iso, prompt_path)
        if rc != 0:
            sys.exit(rc)
        if not digest_path_for(date_iso).exists() and args.strict:
            raise SystemExit("[run] 未生成 digest: %s" % digest_path_for(date_iso))

    if digest_path_for(date_iso).exists():
        rc = subprocess.call([
            sys.executable, "scripts/validate_digest.py", "--date", date_iso,
            "--profile", profile["id"],
        ], cwd=str(ROOT))
        if rc != 0:
            sys.exit(rc)
        if args.push:
            sys.exit(subprocess.call([sys.executable, "scripts/push_lark.py"], cwd=str(ROOT)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
