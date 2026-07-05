# rrpn.org — Responsible and Resilient Planning Network

Static site built with [Astro](https://astro.build) + Tailwind CSS 4, adapted from the
Cosmic Themes "Space Coast" theme (licensed copy; pristine original in `../space-coast-main/`).

## Quick start

```bash
npm install    # .npmrc sets legacy-peer-deps=true
npm run dev    # http://localhost:4321
npm run build  # static output in dist/
```

## Where things live

- **Pages:** `src/pages/` (home, about, projects, get-involved, press, contact)
- **Content collections:** `src/data/publications/`, `src/data/news/`, `src/data/updates/`,
  `src/data/otherPages/` (privacy policy) — plain Markdown/MDX files
- **Brand palette & fonts:** `src/styles/tailwind-theme.css` (colors), `src/styles/fonts.css`
- **Nav & site metadata:** `src/config/en/navData.json.ts`, `src/config/en/siteData.json.ts`
- **Newsletter placeholder (EmailOctopus TODO):** `src/components/newsletter/NewsletterSignup.astro`

Entry frontmatter supports `reviewStatus: "draft"` (visible DRAFT badge) and
`draft: true` (excluded from the build).

See `../BUILD-NOTES.md` for the full list of placeholders, DRAFT pages, and deploy steps
(Cloudflare Pages: build `npm run build`, output `dist`).

&copy; 2026 Responsible and Resilient Planning Network
