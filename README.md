# talkischeap.io

**Enterprise UCaaS without the enterprise price.** Marketing site for Talk Is Cheap — an all-in-one business communications platform: cloud voice, SMS/unified inbox, video meetings, AI receptionist, contact center, integrations, and analytics.

## Stack

- Vite + React 18 + TypeScript (SWC)
- Tailwind CSS + shadcn-style design tokens (`components.json` included)
- react-router-dom v6, react-helmet-async
- Lovable-compatible (lovable-tagger wired into `vite.config.ts`, dev server on `:8080`)

## Develop

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production build to dist/
```

## Site map

- `/` — cinematic home (animated waveform hero, feature bento, pricing preview)
- `/features` + 7 detail pages: cloud-voice, messaging, video-meetings, ai-receptionist, contact-center, integrations, analytics
- `/pricing` — 3 tiers with monthly/annual toggle + honest-cost comparison
- `/industries` + 4 detail pages: healthcare, legal, real-estate, home-services
- `/blog` + 12 SEO/AEO articles (guides, compliance, how-to, buyer guides), `/faq`, `/about`, `/contact`, `/privacy`, `/terms`

## SEO / GEO / AEO

- Per-route titles, descriptions, canonicals, OG/Twitter cards (`src/components/SEO.tsx`)
- JSON-LD: Organization, WebSite, SoftwareApplication (index.html); FAQPage, Product/Offers, Article, BreadcrumbList (per page)
- `public/sitemap.xml`, `public/robots.txt` (AI crawlers explicitly allowed), `public/llms.txt` for answer engines
- Semantic HTML, single H1 per page, descriptive anchors

## Deploy notes

SPA routing: host must rewrite all paths to `index.html` (Lovable does this automatically). Update `SITE_URL` in `src/data/site.ts` if the domain ever changes.
