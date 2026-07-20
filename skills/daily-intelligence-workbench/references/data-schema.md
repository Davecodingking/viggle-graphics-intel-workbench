# Digest Data Schema

The workbench stores new profile-aware digests at:

```text
data/YYYY/MM/DD/<profile-id>/digest.js
```

Legacy `data/YYYY/MM/DD/digest.js` files remain supported. Profile-aware files use the JavaScript key `YYYY/MM/DD::<profile-id>`, allowing several profiles on the same date.

The frontend loads it through:

```javascript
window.__DAILY__ = window.__DAILY__ || {};
window.__DAILY__["YYYY/MM/DD"] = { ... };
```

The deterministic writer also accepts canonical JSON:

```json
{
  "date": "2026-06-29",
  "date_cn": "2026年6月29日 · 周一",
  "generated_at": "2026-06-29",
  "profile": "viggle-graphics",
  "language": "zh",
  "refresh_note": "Short generation note",
  "market_mood": "Optional market/context paragraph",
  "dimensions": [
    {
      "key": "video",
      "cn": "视频生成与人物动画",
      "en": "Video Generation & Human Animation",
      "icon": "video",
      "color": "#8b5cf6",
      "overview": "Dimension overview",
      "notes": "Source quality notes"
    }
  ],
  "hot_topics_today": [
    {
      "title": "Topic title",
      "heat": "high",
      "dims": ["lab", "kol"],
      "summary": "Why this matters",
      "related": ["lab-1", "kol-1"]
    }
  ],
  "items": [
    {
      "id": "video-1",
      "dim": "video",
      "title": "Chinese title",
      "orig": "Original title",
      "source": "Source name",
      "url": "https://example.com/source",
      "date": "2026-06-29",
      "heat": "high",
      "tags": ["tag"],
      "summary": "Plain Chinese summary",
      "detail": "Detailed explanation",
      "method": "What the paper or report actually changes",
      "evidence": "Datasets, baselines, hardware, metrics, or other supporting evidence",
      "viggle_relation": "Why this is direct, transferable, systems-relevant, or only worth watching",
      "why": "Why it matters",
      "why_now": "Why now",
      "buzz": "Community discussion",
      "x_src": ["https://x.com/.../status/..."],
      "content_type": "news | x_status | x_article | official_research | paper | technical_report | model_card | github_repo | analysis | filing | earnings | market_data | macro_release",
      "depth": "normal | deep",
      "key_points": ["Point 1", "Point 2"],
      "examples": ["Concrete example"],
      "product_implications": ["Product or workflow implication"],
      "limitations": ["What not to over-infer"],
      "relevance": "direct | transferable | systems | watch",
      "impact": ["quality | controllability | latency | throughput | memory | cost | reliability | developer_velocity | safety | data"],
      "next_action": "deep_read | reproduce | prototype | watch",
      "experiment": "Optional concrete experiment",
      "meta": {}
    }
  ],
  "kol_list": [],
  "practice_list": []
}
```

## Required Fields

- Root: `date`, `date_cn`, `generated_at`, `profile`, `dimensions`, `hot_topics_today`, `items`
- Dimension: `key`, `cn`, `en`, `icon`, `color`, `overview`, `notes`
- Hot topic: `title`, `summary`, `related`
- Item: `id`, `dim`, `title`, `source`, `url`, `date`, `summary`, `detail`

For `viggle-graphics`, each item also requires `content_type`, `relevance`, `impact`, and `next_action`. Paper and technical-report entries require an original URL, publication date, and `meta.venue` or `meta.arxiv`.

For `investing-markets`, each item requires `content_type`, `relevance`, `impact`, `next_action`, `meta.market`, `meta.source_tier`, `thesis`, `evidence`, `invalidation`, `watch_trigger`, and either `limitations` or `risks`. Company and valuation entries also require `meta.ticker`; every digest covers A shares, Hong Kong and U.S. equities. Allowed investing actions are `review_filing`, `update_thesis`, `watch_catalyst`, `portfolio_review`, and `watch`. The profile never executes trades or promises returns.

Legacy digests without `profile` or the newer decision fields remain readable and are interpreted with `general-ai` compatibility defaults; they do not need to be migrated.

## Longform / Research Item Expectations

For `content_type` in `x_article`, `official_research`, `paper`, `technical_report`, or `model_card`, set `depth` to `deep` when the source is an important long article or research note.

Deep items should include:

- `summary`: 2-3 plain-language sentences.
- `detail`: normally 650-1400 Chinese characters for Chinese output. The goal is that the user can understand the article "七七八八" without opening the original.
- `key_points`: 3-6 bullet-like strings capturing the actual argument, not generic labels.
- `examples`: 1-3 concrete examples or analogies when the content is abstract.
- `product_implications`: what this means for AI product, agent engineering, evaluation, open-source adoption, or the configured industry anchors.
- `limitations`: caveats, uncertainties, or where the author may be overclaiming.

For papers and technical reports, also prefer `method`, `evidence`, `viggle_relation`, and `experiment` so the detail modal separates the claim, its support, product relevance, and the smallest useful verification.

Do not compress a high-value longform item into a short news blurb. If the item is included because of a long article, the dashboard should preserve enough structure to be useful offline.

## Language

Set root `language` to one of:

- `zh`: Simplified Chinese user-facing fields.
- `en`: English user-facing fields.
- `bilingual`: Chinese-first bilingual fields.

Language-sensitive fields include `refresh_note`, `market_mood`, `dimensions[].overview`, `dimensions[].notes`, `hot_topics_today[].title`, `hot_topics_today[].summary`, `items[].title`, `items[].summary`, `items[].detail`, `items[].why`, `items[].why_now`, `items[].buzz`, and `practice_list[]`.

Keep technical names, source names, product names, tickers, and URLs unchanged unless an official localized name exists.

## Validation Rules

- `date` must match `YYYY-MM-DD`.
- Manifest key must match `YYYY/MM/DD`.
- Every `hot_topics_today[].related` id should exist in `items[].id`.
- Every item should have a reachable or intentionally marked URL.
- Every item should include a dimension present in `dimensions[].key`.
- `dimensions[].key` values and item IDs must be unique.
- `content_type`, `relevance`, `impact`, and `next_action` must use the allowed values shown above.
- A `viggle-graphics` digest must cover all five profile dimensions and include paper coverage in video, graphics, and systems.
- Public claims that are single-source, stale, or approximate should be disclosed in `notes`, `buzz`, or `detail`.

## Writing Files

Prefer:

```bash
python3 scripts/run_daily.py --date 2026-06-29 --profile viggle-graphics --from-json out/digest.json
```

Then validate:

```bash
python3 scripts/validate_digest.py --date 2026/06/29 --profile viggle-graphics
```
