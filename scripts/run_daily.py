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


DEFAULT_DIMENSIONS = [
    {"key": "lab", "cn": "AI 大厂动态"},
    {"key": "kol", "cn": "KOL 观点"},
    {"key": "paper", "cn": "前沿论文"},
    {"key": "oss", "cn": "开源项目"},
    {"key": "fin", "cn": "AI × 金融"},
]
LANGUAGE_INSTRUCTIONS = {
    "zh": "最终 digest 的标题、摘要、详细解释、热点、维度概览与 practice_list 使用简体中文；技术术语、公司名、项目名、URL 保留原文。",
    "en": "Write the final digest titles, summaries, details, hot topics, dimension overviews, and practice_list in English. Keep source names, project names, tickers, and URLs unchanged.",
    "bilingual": "Write the final digest in bilingual form: prioritize Simplified Chinese, and include concise English equivalents for titles and key summaries where useful. Keep source names, project names, tickers, and URLs unchanged.",
}


def js_value(obj, indent=2):
    return json.dumps(obj, ensure_ascii=False, indent=indent)


def load_config_kol_list():
    path = ROOT / "config" / "kol.yaml"
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


def apply_persistent_config(payload):
    config_kol = load_config_kol_list()
    if config_kol and len(payload.get("kol_list") or []) < len(config_kol):
        payload["kol_list"] = config_kol
    return payload


def write_digest_from_json(date_value, json_path, language_override=None):
    date_iso = normalize_date(date_value)
    key = slash_date(date_iso)
    cfg = runtime_config()
    language = (language_override or cfg.get("output_language") or "zh").strip()
    if language not in LANGUAGE_INSTRUCTIONS:
        language = "zh"
    payload = load_json(json_path)
    payload.setdefault("date", date_iso)
    payload.setdefault("language", language)
    payload.setdefault("date_cn", date_label(date_iso))
    payload.setdefault("generated_at", date_iso)
    payload.setdefault("refresh_note", "由 Daily Intelligence Workbench 生成。")
    payload.setdefault("dimensions", DEFAULT_DIMENSIONS)
    payload.setdefault("hot_topics_today", [])
    payload.setdefault("items", [])
    payload.setdefault("kol_list", [])
    payload.setdefault("practice_list", [])
    payload = apply_persistent_config(payload)

    out = digest_path_for(date_iso)
    text = [
        "// 当日聚合数据（由 Daily Intelligence Workbench 生成）。",
        "window.__DAILY__ = window.__DAILY__ || {};",
        'window.__DAILY__[%s] = %s;' % (js_string(key), js_value(payload, indent=2)),
        "",
    ]
    write_text(out, "\n".join(text))
    update_manifest(date_iso, len(payload.get("items", [])))
    print("[run] 已写入", out)
    return out


def update_manifest(date_value, count):
    date_iso = normalize_date(date_value)
    key = slash_date(date_iso)
    manifest = ROOT / "data" / "manifest.js"
    manifest.parent.mkdir(parents=True, exist_ok=True)

    entries = []
    if manifest.exists():
        raw = read_text(manifest)
        for m in __import__("re").finditer(
            r'\{\s*date:\s*"([^"]+)",\s*label:\s*"([^"]+)",\s*count:\s*(\d+),\s*file:\s*"([^"]+)"\s*\}',
            raw,
        ):
            entries.append({
                "date": m.group(1),
                "label": m.group(2),
                "count": int(m.group(3)),
                "file": m.group(4),
            })
    entries = [e for e in entries if e["date"] != key]
    entries.append({
        "date": key,
        "label": date_label(date_iso),
        "count": int(count),
        "file": "data/%s/digest.js" % key,
    })
    entries.sort(key=lambda e: e["date"])
    latest = entries[-1]["date"]
    body = ",\n".join(
        '    { date: "%s", label: "%s", count: %d, file: "%s" }' %
        (e["date"], e["label"], e["count"], e["file"])
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
    update_manifest(date_iso, item_count)
    print("[run] 已复制样例 %s -> %s" % (old_key, new_key))


def create_research_prompt(date_value, language_override=None):
    date_iso = normalize_date(date_value)
    cfg = runtime_config()
    language = (language_override or cfg.get("output_language") or "zh").strip()
    if language not in LANGUAGE_INSTRUCTIONS:
        language = "zh"
    language_instruction = LANGUAGE_INSTRUCTIONS[language]
    run_dir = ROOT / ".daily-intel" / "runs" / date_iso
    prompt_path = run_dir / "research_prompt.md"
    prompt = """# Daily Intelligence Research Task

日期：{date_iso}
工作区：{root}
产出语言：{language} — {language_instruction}

请基于本仓库的 `skills/daily-intelligence-workbench/SKILL.md` 和 `docs/调研方法论与Loop设计.md` 生成当日 AI 情报。

执行要求：

1. 读取 `config/industry.yaml`、`config/sources.yaml`、`config/keywords.yaml`、`config/kol.yaml`、`config/research_radar.yaml`。
2. 先执行 `config/research_radar.yaml` 的高优先级雷达，再做普通五维度搜索。雷达必须覆盖：
   - 研究员长文 / X Articles：尤其 Anthropic Claude Code、OpenAI/alignment 研究员；
   - 官方研究页：Anthropic Research、OpenAI Research、OpenAI Alignment、Google DeepMind Research；
   - 国产前沿实验室：DeepSeek、Kimi/Moonshot、Z.ai/GLM、Qwen；检查 official page、Hugging Face model card、GitHub technical report；
   - 开源金融/量化 Agent：从 X 讨论 + GitHub topics 双入口发现，不只看 stars。
3. 按五维度调研：AI 大厂动态、KOL 观点、前沿论文、开源项目、AI × 金融。研究雷达发现可进入任一维度。
4. KOL 观点维度必须执行 X-first 流程：先从 `config/kol.yaml` 取重点 handle，用 `site:x.com/<handle>/status`、`site:x.com/<handle>/article`、公开 X status/profile/article、已配置的 Gate-News `news_feed_search_x` / X API / 本机 provider 发现近 7 天帖子；目标是 KOL 维度至少 60% 条目来自 X status/profile/article 或带 `x_src` 的 X 证据。若达不到，必须在 `dimensions[].notes` 写明 provider 限制和 fallback 来源。
5. 优先英文关键词与一手来源；X/Twitter 只用可访问的公开 status/profile/article 或用户本地显式配置的 provider，不读取 cookie/token。
6. 对 DeepSeek、Kimi/Moonshot、智谱/Z.ai、Qwen 的文章、论文、模型卡、GitHub release 提升优先级；即使它们不是当天最大舆论，也要纳入候选池并给出是否入选的判断。
7. 开源项目额外关注金融 Agent、量化 Agent、AI 投研、回测/券商/交易所接口、自动推送、风控闭环；星少但机制新、X 讨论早期升温的项目可标 `potential=潜力新星`。
8. 过滤营销、招聘、重复与不可验证信息；保留来源 URL、日期和可信度说明。不要因为高价值研究员长文暂时不够病毒传播就直接丢弃。
9. 长文/研究项写作规则：若 `content_type` 是 `x_article`、`official_research`、`paper`、`technical_report`、`model_card`，通常设置 `depth=deep`，`detail` 至少约 650 个中文字符，并补充 `key_points`、`examples`、`product_implications`、`limitations`。目标是用户不跳原文也能了解七七八八。
10. 按“产出语言”要求组织 `title`、`summary`、`detail`、`why`、`buzz`、`dimensions.overview`、`hot_topics_today.summary`、`practice_list` 等面向用户字段。
11. 产出 canonical JSON，字段参考 `skills/daily-intelligence-workbench/references/data-schema.md`。
12. 写入后运行：

```bash
python3 scripts/run_daily.py --date {date_iso} --from-json <canonical-json-path>
python3 scripts/validate_digest.py --date {date_iso}
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
    args = parser.parse_args()

    date_iso = normalize_date(args.date)

    if args.from_json:
        write_digest_from_json(date_iso, args.from_json, args.language)
    elif args.sample:
        copy_sample(date_iso, args.sample_date)
    elif digest_path_for(date_iso).exists():
        print("[run] 当日 digest 已存在:", digest_path_for(date_iso))
    else:
        prompt_path = create_research_prompt(date_iso, args.language)
        rc = maybe_run_agent(date_iso, prompt_path)
        if rc != 0:
            sys.exit(rc)
        if not digest_path_for(date_iso).exists() and args.strict:
            raise SystemExit("[run] 未生成 digest: %s" % digest_path_for(date_iso))

    if digest_path_for(date_iso).exists():
        rc = subprocess.call([sys.executable, "scripts/validate_digest.py", "--date", date_iso], cwd=str(ROOT))
        if rc != 0:
            sys.exit(rc)
        if args.push:
            sys.exit(subprocess.call([sys.executable, "scripts/push_lark.py"], cwd=str(ROOT)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
