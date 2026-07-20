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

1. Research profile: infer from the request, otherwise use `viggle-graphics`. Use `general-ai` for the original AI/KOL/paper/open-source/finance workflow, or `investing-markets` for filing-first A-share/Hong Kong/U.S. stock research.
2. Industry anchors: only apply to `general-ai`; infer from the request, otherwise keep the existing `config/industry.yaml` values.
3. Output language: infer from the user's language, otherwise use `zh`; support `zh`, `en`, and `bilingual`.
4. Push behavior: only enable push when the user explicitly wants it and a webhook is already configured or provided locally.
5. Schedule time: infer from the request, otherwise use `08:30`.
6. Agent execution mode: if the user wants the agent itself to run daily and the current agent host has native recurring tasks/automations, create that agent-native daily task. Otherwise install the local OS schedule with `scripts/install_schedule.py`.

For agent-native schedules, the recurring task should open this repository, read this skill, run `python3 scripts/run_daily.py --date today --profile <selected-profile>` plus `--push` only when push is configured, then run `python3 scripts/validate_digest.py --date latest --profile <selected-profile>`. Do not store secrets in the task definition.

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
   - `python3 scripts/init.py --profile viggle-graphics`
   - Use `--profile general-ai` to switch to the original workflow.
   - Use `--profile investing-markets` for the separate investing and stocks workflow covering A shares, Hong Kong and U.S. equities.
   - With `general-ai`, use `--anchors ai-crypto,ai-finance` or another comma-separated list for non-interactive setup.
   - Use `--language zh`, `--language en`, or `--language bilingual` to choose digest output language.
3. Generate or validate a daily digest:
   - `python3 scripts/run_daily.py --date today --profile viggle-graphics`
   - If an agent command is configured, the script creates a research prompt and invokes that command.
   - If no agent command is configured, the script writes a handoff prompt under `.daily-intel/runs/<date>/<profile-id>/research_prompt.md`.
4. Validate the generated output:
   - `python3 scripts/validate_digest.py --date latest --profile viggle-graphics`
5. Start the local dashboard:
   - `python3 scripts/serve.py --port 4318`
6. Push the digest only when the user has configured a webhook:
   - `python3 scripts/push_lark.py YYYY-MM-DD --profile <profile-id>`
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

Write each new output to `data/YYYY/MM/DD/<profile-id>/digest.js` and update `data/manifest.js`. Legacy date-root digests remain readable. The frontend expects:

- `date`, `date_cn`, `generated_at`, `profile`
- `dimensions`: profile-defined summaries with `key/cn/en/icon/color/overview/notes`
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

1. Resolve the profile in CLI → `config/runtime.yaml` → `general-ai` order, read its `profile.json`, then read every YAML path declared under `config`.
2. Before generic search, run the research-radar pass:
   - Researcher longform / X Articles: especially Anthropic Claude Code and OpenAI/alignment researchers.
   - Official research pages: Anthropic Research, OpenAI Research, OpenAI Alignment, Google DeepMind Research.
   - Chinese frontier labs: DeepSeek, Kimi/Moonshot, Z.ai/GLM, Qwen. Check official pages, Hugging Face model cards, and GitHub technical reports.
   - Open-source finance/quant agents: discover from X discussion plus GitHub topics, not GitHub stars alone.
3. Build the profile-defined research tracks. For `viggle-graphics`, use video, graphics, systems, eval, and ecosystem; treat papers as a cross-track `content_type`, not a standalone track. For `investing-markets`, use market, companies, catalysts, valuation, and risk, and prioritize official filings over commentary.
4. Search with English keywords first, then use Chinese sources for local context when configured.
5. For the KOL views track, run an X-first pass before newsletters: use the handles in `config/kol.yaml`, query `site:x.com/<handle>/status`, `site:x.com/<handle>/article`, public X status/profile pages, configured Gate-News `news_feed_search_x`, X API, or local browser providers, and prefer public X status/profile/article URLs as `items[].url` or `items[].x_src`.
6. Target at least 60% of KOL-view items with X evidence. If the public/provider path cannot reach that ratio, document the limitation in `dimensions[].notes` and only then fall back to AINews, Latent Space, Interconnects, blogs, or media summaries.
7. Prefer primary sources: official blogs, research pages, arXiv, GitHub, Hugging Face model cards, project docs, public X status/profile/article pages, reputable media.
8. Filter aggressively: remove marketing, duplicated reposts, job posts, unverifiable claims, and stale content. Do not drop a high-signal researcher article merely because it is not viral yet.
9. For longform or research items, set `content_type` and usually `depth: deep`. Include `detail`, `key_points`, `examples`, `product_implications`, and `limitations` so the dashboard is useful without opening the source. Viggle items must also include `relevance`, `impact`, and `next_action`; include `experiment` when a concrete evaluation is warranted.
10. Write a temporary canonical JSON file matching `references/data-schema.md`.
11. Convert it into dashboard format. New outputs are stored under `data/YYYY/MM/DD/<profile-id>/digest.js`, so several profiles may share one date; legacy `data/YYYY/MM/DD/digest.js` files remain readable:
   - `python3 scripts/run_daily.py --date YYYY-MM-DD --profile viggle-graphics --from-json /path/to/digest.json --push`
12. Validate and serve locally. When pushing one of several same-day profiles, always pass both date and profile to `scripts/push_lark.py`.

## Scheduling

Use `scripts/install_schedule.py` for local schedules. On macOS it writes a LaunchAgent. On Linux it writes a marked crontab line. The scheduled script is intentionally local-first and reads configuration from `config/runtime.yaml` plus environment variables.

Keep schedule setup separate from account setup. A schedule may run without X login, API keys, or push bots; it should create a research prompt or validate existing data rather than failing destructively.

## Push Safety

Push only after the user configures `config/push.yaml` or passes a webhook override. Do not commit real webhook URLs. For Lark/Feishu, `scripts/push_lark.py` uses only the Python standard library and sends an interactive card.

## Useful Resources

- `references/data-schema.md` - Digest schema and canonical JSON format.
- `references/source-providers.md` - Public web, Chrome, extension, API, and fallback provider strategy.
- `config/research_radar.yaml` - Researcher longform, lab research, Chinese frontier lab, and finance/quant agent radar.
- `docs/调研方法论与Loop设计.md` - Product and research methodology.
