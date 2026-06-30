# Daily Intelligence Workbench

This repository can be used from Claude Code as a local-first daily AI intelligence workflow.

Start by reading `skills/daily-intelligence-workbench/SKILL.md`, then use the scripts in `scripts/`:

- `python3 scripts/init.py`
- `python3 scripts/init.py --language zh|en|bilingual`
- `python3 scripts/run_daily.py --date today --language zh|en|bilingual`
- `python3 scripts/serve.py --port 4318`
- `python3 scripts/install_schedule.py install --time 08:30 --push`
- `python3 scripts/validate_digest.py --date latest`

Do not store browser cookies, X/Twitter session tokens, API keys, or webhook URLs in committed files. Keep user-specific secrets in local config files or environment variables.

Honor `config/runtime.yaml` `output_language` when generating user-facing digest fields. Supported values are `zh`, `en`, and `bilingual`.
