# Daily Intelligence Workbench

This repository can be used from Claude Code as a local-first daily AI intelligence workflow.

Start by reading `skills/daily-intelligence-workbench/SKILL.md`, then use the scripts in `scripts/`:

- `python3 scripts/init.py --profile viggle-graphics`
- `python3 scripts/init.py --profile general-ai`
- `python3 scripts/init.py --language zh|en|bilingual`
- `python3 scripts/run_daily.py --date today --profile viggle-graphics --language zh|en|bilingual`
- `python3 scripts/serve.py --port 4318`
- `python3 scripts/install_schedule.py install --time 08:30 --push`
- `python3 scripts/validate_digest.py --date latest --profile viggle-graphics`

Users may ask in natural language instead of giving commands, for example:

- "Set this up for AI + crypto and AI + finance, English output, no push, and run it every morning."
- "Initialize this workbench, track AI + finance, and schedule your daily run at 08:30."
- "Push to Lark if a webhook is configured; otherwise just update the local dashboard."

In that case, do not stop at explaining commands. Read the skill's Natural Language Setup Mode, infer safe defaults, select `viggle-graphics` unless the user requests the original `general-ai` workflow, run initialization, configure output language and push behavior, then create a native recurring agent task if Claude Code or the host environment supports it. If native scheduling is not available, use `scripts/install_schedule.py` to install launchd / cron.

Do not store browser cookies, X/Twitter session tokens, API keys, or webhook URLs in committed files. Keep user-specific secrets in local config files or environment variables.

Honor `config/runtime.yaml` `output_language` when generating user-facing digest fields. Supported values are `zh`, `en`, and `bilingual`.

For `general-ai`, keep KOL views X-first: start from the profile's KOL config, search public X status/profile URLs, and use Gate-News MCP `news_feed_search_x` when available before falling back to newsletters or blogs. Preserve X URLs in `items[].url` or `items[].x_src`. For `viggle-graphics`, read every YAML path declared by `config/profiles/viggle-graphics/profile.json` and treat papers as a cross-topic content type.
