# Digest Data Schema

The workbench stores one daily digest at:

```text
data/YYYY/MM/DD/digest.js
```

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
  "language": "zh",
  "refresh_note": "Short generation note",
  "market_mood": "Optional market/context paragraph",
  "dimensions": [
    {
      "key": "lab",
      "cn": "AI 大厂动态",
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
      "id": "lab-1",
      "dim": "lab",
      "title": "Chinese title",
      "orig": "Original title",
      "source": "Source name",
      "url": "https://example.com/source",
      "date": "2026-06-29",
      "heat": "high",
      "tags": ["tag"],
      "summary": "Plain Chinese summary",
      "detail": "Detailed explanation",
      "why": "Why it matters",
      "why_now": "Why now",
      "buzz": "Community discussion",
      "x_src": ["https://x.com/.../status/..."],
      "meta": {}
    }
  ],
  "kol_list": [],
  "practice_list": []
}
```

## Required Fields

- Root: `date`, `date_cn`, `generated_at`, `dimensions`, `hot_topics_today`, `items`
- Dimension: `key`, `cn`, `overview`
- Hot topic: `title`, `summary`, `related`
- Item: `id`, `dim`, `title`, `source`, `url`, `date`, `summary`, `detail`

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
- Public claims that are single-source, stale, or approximate should be disclosed in `notes`, `buzz`, or `detail`.

## Writing Files

Prefer:

```bash
python3 scripts/run_daily.py --date 2026-06-29 --from-json out/digest.json
```

Then validate:

```bash
python3 scripts/validate_digest.py --date 2026/06/29
```
