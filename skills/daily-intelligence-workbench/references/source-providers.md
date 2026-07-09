# Source Provider Strategy

The workbench is designed for open-source distribution, so source collection must not depend on a single user's browser session.

## Provider Tiers

### Tier 0: Public Web Provider

Use by default.

- Search the open web for source URLs.
- Read official blogs, arXiv, GitHub, Hugging Face, project docs, reputable media, and public X status/profile pages.
- Treat X search as best-effort because it often redirects to login.
- Cache discovered URLs and avoid repeated requests.

### Tier 1: Local Browser Provider

Use only when the user opts in.

- Read public pages through a local browser session.
- If a Chrome/extension bridge is available, it may reuse the user's logged-in X session.
- Do not read cookies, local storage, passwords, or account settings.
- Do not follow, like, post, send messages, solve CAPTCHAs, or bypass safety interstitials.

### Tier 2: Official API Provider

Use when the user provides credentials.

- X API, news APIs, financial data APIs, or other paid/free API sources may be configured in local env files.
- Store API keys outside version-controlled files.
- Record rate-limit and coverage limitations in the digest.

### Tier 3: User-Supplied Export Provider

Use when the user supplies CSV/JSON/bookmarks.

- Accept local files under a configured workspace.
- Normalize into the canonical digest JSON schema.

## X/Twitter Notes

Observed behavior in Codex's in-app browser:

- Public status pages can expose post text, author, timestamp, view count, quoted post snippets, and links without login.
- Public profiles can expose biography, follower counts, pinned posts, recent post snippets, reposts, and status URLs.
- X search can redirect to the login/onboarding page without a logged-in provider.

Design implications:

- Discover X URLs via web search, RSS-like third-party sources, curated KOL handles, or configured provider APIs.
- Read the final status/profile URL as a public page whenever possible.
- For the KOL views dimension, run X discovery before newsletter/blog fallbacks. A healthy daily digest should normally have a majority of KOL-view items backed by `x.com/.../status/...` URLs or `x_src` evidence.
- If X discovery fails or returns only aggregate summaries, keep the aggregate as a signal but mark the limitation in `dimensions[].notes` and avoid presenting it as tweet-level evidence.
- Keep Chrome login-state scraping optional and local.
- Avoid any promise of "anti-ban" behavior. Use low-frequency, read-only, user-owned access and graceful fallbacks.

## Research Radar Notes

Some of the most valuable daily AI signals are not published as normal product news. They appear as:

- X Articles by researchers or engineers.
- Official research pages outside a company blog, such as `anthropic.com/research`.
- Alignment or safety sub-sites, such as `alignment.openai.com`.
- Hugging Face model cards and GitHub technical-report repositories from frontier labs.
- Project pages from Chinese labs such as Kimi/Moonshot, DeepSeek, Z.ai/GLM, and Qwen.

Provider discipline:

- Run `config/research_radar.yaml` before generic news search.
- Treat official research pages, model cards, and GitHub technical reports as primary sources.
- For X Articles, keep the public article/status URL in `url` or `x_src`; if only a search snippet is reachable, mark the limitation in `dimensions[].notes`.
- For Chinese frontier labs, scan both English and Chinese terms. Many useful releases are model-card or repository updates rather than press releases.
- For OpenAI, scan both `openai.com/research` and `alignment.openai.com`; important alignment articles may not appear on the normal product blog.
- For Anthropic, scan `anthropic.com/research` in addition to `anthropic.com/news`.

Longform handling:

- Do not treat a long article as a normal tweet.
- If a source is a long article, official research note, technical report, or model card, set `content_type` and usually `depth: deep`.
- The item should include enough `detail`, `key_points`, examples, implications, and limitations for the dashboard to be useful without opening the original page.
