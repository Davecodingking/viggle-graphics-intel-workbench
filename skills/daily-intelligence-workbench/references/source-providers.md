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
- Keep Chrome login-state scraping optional and local.
- Avoid any promise of "anti-ban" behavior. Use low-frequency, read-only, user-owned access and graceful fallbacks.
