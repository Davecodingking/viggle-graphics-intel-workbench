# AI Intel Workbench

[English](README.md) | [中文](README.zh-CN.md)

AI Intel Workbench is a **local-first, open-source daily intelligence workflow for agents**. It helps Codex, Claude Code, or any skill-capable agent collect and structure daily AI + user-defined industry signals, then review them in a visual local dashboard.

The default `viggle-graphics` profile targets video generation, human animation, graphics/3D/4D, inference systems and GPU pipelines, evaluation/safety, and the surrounding ecosystem. The author's original workflow and source files remain intact as the `general-ai` profile.

Use it to track AI lab updates, X-first KOL opinions, frontier papers, open-source projects, and AI x finance / crypto / any configured industry. It includes configurable sources, a 59-person default KOL seed list, a research radar for researcher longform and lab papers, industry anchors, structured digests, output-language selection, a zero-dependency HTML workbench, optional Lark/Feishu bot pushes, and local scheduled runs.

![English dashboard](assets/screenshots/dashboard-en.png)

## What It Does

- Builds a visual local dashboard for daily AI + industry intelligence.
- Lets users define industry anchors such as AI + crypto, AI + finance, AI + healthcare, or AI + robotics.
- Produces structured daily digest files that are easy for agents to write, validate, archive, and reuse.
- Supports Chinese, English, or bilingual output.
- Works as a Codex local plugin, a Claude Code repository workflow, or plain local Python scripts.
- Supports optional Lark/Feishu push bots and local scheduling through macOS LaunchAgent or Linux cron.
- Uses X-first KOL tracking by default; Gate-News `news_feed_search_x` is the recommended optional dependency for X/Twitter discussion aggregation when available.
- Runs `config/research_radar.yaml` before generic search to catch researcher X Articles, Anthropic/OpenAI research posts, Chinese frontier-lab model cards, and finance/quant agent repositories.

No personal webhook, cookie, token, API key, or X/Twitter session state is committed by default.

## Quick Start

```bash
git clone https://github.com/weishao831/ai-intel-workbench.git
cd ai-intel-workbench

# Initialize the default Viggle graphics profile.
python3 scripts/init.py --profile viggle-graphics

# Switch to the original workflow; industry anchors apply to general-ai.
python3 scripts/init.py --profile general-ai --anchors ai-crypto,ai-finance --language en --bot none

# Start the local dashboard.
python3 scripts/serve.py --port 4318
# Open http://127.0.0.1:4318/

# Validate bundled sample data.
python3 scripts/validate_digest.py --date latest --profile viggle-graphics

# Generate today's research task.
python3 scripts/run_daily.py --date today --profile viggle-graphics
```

If no agent command is configured, `run_daily.py` writes:

```text
.daily-intel/runs/YYYY-MM-DD/research_prompt.md
```

Give that prompt to Codex, Claude Code, or another agent runtime. The agent should research, produce canonical JSON, and write it back with `run_daily.py --from-json`.

## Profiles and Paper Discovery

Profile precedence is CLI `--profile`, then `config/runtime.yaml` `active_profile`, then the backward-compatible `general-ai` default. The Viggle profile uses five topical dimensions—video, graphics, systems, eval, and ecosystem—while papers remain a cross-topic `content_type` filter.

Its radar checks arXiv `cs.CV/cs.GR/cs.LG`, official research/project pages, and Hugging Face daily; major graphics, vision, ML, multimedia, and systems venues weekly or around conference cycles; and TPAMI, IJCV, TVCG, TMM, and Computer Graphics Forum monthly or on keyword triggers. The source lists and problem × method × engineering-constraint query matrix live under `config/profiles/viggle-graphics/`.

## Testing

Run automated and compatibility checks without modifying archived data:

```bash
python3 -m unittest discover -s tests -v
python3 -m py_compile scripts/*.py
python3 scripts/validate_digest.py --date 2026-06-29 --profile general-ai
python3 scripts/validate_digest.py --date latest
```

For the full temporary-copy dashboard smoke test and UI checklist, see [Testing in the full English guide](README.en.md#testing) or [中文测试说明](README.zh-CN.md#如何测试).

## Output Language

```bash
python3 scripts/init.py --language zh
python3 scripts/init.py --language en
python3 scripts/init.py --language bilingual

python3 scripts/run_daily.py --date today --language en
```

Language modes:

- `zh`: Simplified Chinese output.
- `en`: English output.
- `bilingual`: Chinese-first bilingual output.

The dashboard UI can also be opened as:

```text
http://127.0.0.1:4318/?lang=en
http://127.0.0.1:4318/?lang=zh
```

## Research Radar and Deep Summaries

Daily AI research is often published outside ordinary company blogs: researcher X Articles, Anthropic Research, OpenAI Alignment, Hugging Face model cards, GitHub technical reports, or Chinese frontier-lab project pages.

`config/research_radar.yaml` makes these sources first-class:

- `researcher_longform_watchlist`: researcher X Articles and longform posts.
- `lab_research_watchlist`: Anthropic Research, OpenAI Research, OpenAI Alignment, Google DeepMind Research.
- `chinese_frontier_lab_watchlist`: DeepSeek, Kimi/Moonshot, Z.ai/GLM, Qwen.
- `open_source_finance_quant_watchlist`: finance agents, quant agents, AI stock-research agents, backtesting and broker/exchange integrations.

For important longform or research items, agents should set `content_type`, `depth: deep`, `key_points`, `examples`, `product_implications`, and `limitations`. The dashboard is designed to show enough structure that users can understand most of the original article without opening it.

## Agent Usage

Any agent runtime that can read a skill or instruction file, run local scripts, and trigger or install scheduled tasks can use this repository.

You can also set it up through natural language. For example:

```text
Set up AI Intel Workbench for AI + crypto and AI + finance, use English output, do not push yet, and schedule your daily run at 08:30.
```

```text
Initialize this workbench, track AI + finance, push to Lark if a webhook is configured, and run it every weekday morning.
```

The agent should read the skill, initialize config, choose the requested output language, and either create its own native recurring task when supported or install the local OS schedule with `scripts/install_schedule.py`.

Codex should read:

```text
.codex-plugin/plugin.json
skills/daily-intelligence-workbench/SKILL.md
```

Claude Code should read:

```text
CLAUDE.md
skills/daily-intelligence-workbench/SKILL.md
docs/调研方法论与Loop设计.md
```

## Documentation

- [Changelog](CHANGELOG.md)
- [Full English README](README.en.md)
- [中文说明](README.zh-CN.md)

## Repository Layout

```text
ai-intel-workbench/
├── .codex-plugin/plugin.json
├── AGENTS.md
├── CLAUDE.md
├── index.html
├── config/
├── data/
├── docs/
├── scripts/
└── skills/daily-intelligence-workbench/
```

## License

MIT
