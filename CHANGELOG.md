# Changelog

## 0.1.2 - 2026-07-02

- Added X-first KOL research rules: the KOL views track should first search public X status/profile URLs, configured X providers, and Gate-News `news_feed_search_x` before falling back to newsletters or blogs.
- Added `kol_x_sources` validation so generated digests warn when KOL-view items are not backed by enough X evidence.
- Added optional multi-bot Lark/Feishu push support through local environment variables, plus `--dry-run` and masked webhook logging.
- Declared Gate-News as the recommended dependency for X/Twitter discussion aggregation.
- Shipped the 55-person default KOL seed list in `config/kol.yaml` for out-of-the-box tracking.
