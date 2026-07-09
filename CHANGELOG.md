# Changelog

## 0.1.3 - 2026-07-09

- Added `config/research_radar.yaml` as a mandatory discovery layer before generic daily search. It tracks researcher X Articles / longform, Anthropic Research, OpenAI Research / Alignment, DeepSeek, Kimi/Moonshot, Z.ai/GLM, Qwen, and finance/quant agent repositories.
- Upgraded `sources.yaml`, `keywords.yaml`, `industry.yaml`, and `kol.yaml` so high-value research posts, Chinese frontier-lab model cards, technical reports, and AI finance/quant agent projects are prioritized.
- Expanded the default KOL seed list from 55 to 59 entries, adding `@trq212`, `@OpenAI`, `@jietang`, and `@Kimi_Moonshot`.
- Extended the digest schema with `content_type`, `depth`, `key_points`, `examples`, `product_implications`, and `limitations` for longform/research items.
- Updated `run_daily.py` prompts to require the research-radar pass and deep longform summaries before writing canonical JSON.
- Updated `validate_digest.py` to warn when a digest has no research-radar hits, has short deep-item details, or lacks finance/quant OSS coverage while AI+finance/AI+crypto anchors are active.
- Updated `index.html` to render key points, examples, product implications, and limitations in item detail modals.

## 0.1.2 - 2026-07-02

- Added X-first KOL research rules: the KOL views track should first search public X status/profile URLs, configured X providers, and Gate-News `news_feed_search_x` before falling back to newsletters or blogs.
- Added `kol_x_sources` validation so generated digests warn when KOL-view items are not backed by enough X evidence.
- Added optional multi-bot Lark/Feishu push support through local environment variables, plus `--dry-run` and masked webhook logging.
- Declared Gate-News as the recommended dependency for X/Twitter discussion aggregation.
- Shipped the 55-person default KOL seed list in `config/kol.yaml` for out-of-the-box tracking.
