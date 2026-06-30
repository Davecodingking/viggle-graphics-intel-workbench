---
name: daily-intelligence-workbench
description: This skill should be used when the user asks to run daily AI intelligence, generate today's AI news digest, initialize or configure the daily intelligence workbench, set up a visual local AI intelligence dashboard, install or create a daily schedule, ask the agent to run this workflow every day, configure X/Twitter collection, or push the daily digest to Lark/Feishu.
---

# Daily Intelligence Workbench

Operate the local daily AI intelligence workbench. The workbench turns configurable sources, industry anchors, optional X/Twitter providers, and an agent-assisted research loop into a structured `digest.js`, a local HTML dashboard, and optional bot pushes.

## Natural Language Setup Mode

When the user asks in natural language, do the setup rather than only listing commands. Examples:

- "Set this up for AI + crypto and AI + finance, English output, no push, and run it every morning."
- "帮我初始化每日资讯工作台，关注 AI+加密和 AI+金融，每天 8:30 自动生成。"
- "Use this repo as your daily task and push the digest to Lark when configured."

Translate the request into this decision set:

1. Industry anchors: infer from the request, otherwise default to `ai-crypto,ai-finance`.
2. Output language: infer from the user's language, otherwise use `zh`; support `zh`, `en`, and `bilingual`.
3. Push behavior: only enable push when the user explicitly wants it and a webhook is already configured or provided locally.
4. Schedule time: infer from the request, otherwise use `08:30`.
5. Agent execution mode: if the user wants the agent itself to run daily and the current agent host has native recurring tasks/automations, create that agent-native daily task. Otherwise install the local OS schedule with `scripts/install_schedule.py`.

For agent-native schedules, the recurring task should open this repository, read this skill, run `python3 scripts/run_daily.py --date today` plus `--push` only when push is configured, then run `python3 scripts/validate_digest.py --date latest`. Do not store secrets in the task definition.

For local OS schedules, run:

```bash
python3 scripts/install_schedule.py install --time HH:MM
python3 scripts/install_schedule.py install --time HH:MM --push
```

Use the second command only when push is configured. After setup, report the exact anchors, language, push mode, schedule mode, schedule time, and the command or native task that will run.

## Core Workflow

1. Inspect the repository root. Confirm these paths exist:
   - `index.html`
   - `config/`
   - `data/manifest.js`
   - `scripts/`
2. Initialize local configuration when needed:
   - `python3 scripts/init.py`
   - Use `--anchors ai-crypto,ai-finance` or another comma-separated list for non-interactive setup.
   - Use `--language zh`, `--language en`, or `--language bilingual` to choose digest output language.
3. Generate or validate a daily digest:
   - `python3 scripts/run_daily.py --date today`
   - If an agent command is configured, the script creates a research prompt and invokes that command.
   - If no agent command is configured, the script writes a handoff prompt under `.daily-intel/runs/<date>/research_prompt.md`.
4. Validate the generated output:
   - `python3 scripts/validate_digest.py --date latest`
5. Start the local dashboard:
   - `python3 scripts/serve.py --port 4318`
6. Push the digest only when the user has configured a webhook:
   - `python3 scripts/push_lark.py`
7. Install or inspect schedules:
   - `python3 scripts/install_schedule.py install --time 08:30 --push`
   - `python3 scripts/install_schedule.py status`
   - `python3 scripts/install_schedule.py uninstall`

## X/Twitter Provider Discipline

Treat X/Twitter collection as a provider, not a hard dependency.

- Use public web/status/profile reads as the default. Public status pages and public profiles can often be read without login, while X search often requires login.
- Use Chrome login state, browser extensions, X API, or third-party providers only when the user explicitly configures them locally.
- Never inspect, copy, export, or store cookies, session storage, passwords, or tokens.
- Do not describe the workflow as "anti-ban" or guaranteed to avoid rate limits. Prefer "low-frequency, read-only, user-owned provider".
- Record provider limitations in digest notes when a source could not be verified directly.

For detailed provider strategy, read `references/source-providers.md`.

## Digest Contract

Write each daily output to `data/YYYY/MM/DD/digest.js` and update `data/manifest.js`. The frontend expects:

- `date`, `date_cn`, `generated_at`
- `dimensions`: five or more dimension summaries
- `hot_topics_today`: cross-dimensional topics
- `items`: structured intelligence entries
- Optional: `kol_list`, `practice_list`, `market_mood`

Honor `config/runtime.yaml` `output_language` when creating user-facing fields. Supported values are:

- `zh`: Simplified Chinese output with technical terms and URLs preserved.
- `en`: English output with source names, project names, tickers, and URLs preserved.
- `bilingual`: Simplified Chinese first, with concise English equivalents for titles and key summaries where useful.

For the complete schema and validation expectations, read `references/data-schema.md`.

## Agent Research Procedure

When no structured JSON has been provided, run the research loop manually in the current agent:

1. Read `config/industry.yaml`, `config/sources.yaml`, `config/keywords.yaml`, and `config/kol.yaml`.
2. Build five research tracks: AI labs, KOL views, papers, open source, and AI x finance.
3. Search with English keywords first, then use Chinese sources for local context when configured.
4. Prefer primary sources: official blogs, arXiv, GitHub, project docs, public X status/profile pages, reputable media.
5. Filter aggressively: remove marketing, duplicated reposts, job posts, unverifiable claims, and stale content.
6. Write a temporary canonical JSON file matching `references/data-schema.md`.
7. Convert it into dashboard format:
   - `python3 scripts/run_daily.py --date YYYY-MM-DD --from-json /path/to/digest.json --push`
8. Validate and serve locally.

## Scheduling

Use `scripts/install_schedule.py` for local schedules. On macOS it writes a LaunchAgent. On Linux it writes a marked crontab line. The scheduled script is intentionally local-first and reads configuration from `config/runtime.yaml` plus environment variables.

Keep schedule setup separate from account setup. A schedule may run without X login, API keys, or push bots; it should create a research prompt or validate existing data rather than failing destructively.

## Push Safety

Push only after the user configures `config/push.yaml` or passes a webhook override. Do not commit real webhook URLs. For Lark/Feishu, `scripts/push_lark.py` uses only the Python standard library and sends an interactive card.

## Useful Resources

- `references/data-schema.md` - Digest schema and canonical JSON format.
- `references/source-providers.md` - Public web, Chrome, extension, API, and fallback provider strategy.
- `docs/调研方法论与Loop设计.md` - Product and research methodology.
