# Zelvoraq — Website

Production Next.js (App Router) codebase for the Zelvoraq marketing/lead-gen site,
built from the approved Phase 1 (architecture) and Phase 2 (design system) documents.

## Ownership & deployment (read first)

This codebase is designed to be deployed under **your own** GitHub and Vercel accounts —
it has no dependency on any Claude-owned account or service.

1. Push this folder to a new **private GitHub repository under your own GitHub account.**
2. Import that repository into **your own Vercel account** (or connect it via the Vercel
   dashboard: New Project → Import Git Repository).
3. In Vercel's Project → Settings → Environment Variables, add the variables listed in
   `.env.example`. None of them are required for the site to build and run — the AI
   assistant and lead-capture form both degrade gracefully into a clearly labeled demo
   mode without them.
4. Connect your production domain in Vercel's Domains settings once ready.

No API keys or secrets are committed anywhere in this repository.

## What's fully built in this pass

- Full design-token system (`app/globals.css`, `tailwind.config.ts`) — matches the
  approved Phase 2 style guide exactly. Swapping the final brand colors/logo is a
  single edit to the `:root` block in `globals.css`.
- Shared component library: Navbar (with Solutions dropdown + mobile menu), Footer,
  Button, SectionHeading, ServiceCard, DemoCard, FAQAccordion, CTASection, Badge,
  the signature WorkflowDiagram visual, the Zelvoraq AI chat widget, the 6-step AI
  Opportunity Assessment, and the lead-capture form.
- Pages: Home, Solutions (hub), the 4 solution pages (`/solutions/[slug]`, data-driven
  from `lib/solutions-data.ts`), How It Works, Work (demo projects), About, Insights
  (index/structure only — see below), Contact, Privacy Policy, Terms of Service, 404.
- SEO foundation: per-page metadata via `lib/seo.ts`, JSON-LD via `lib/schema.ts`
  (Organization, WebSite, BreadcrumbList, Service — FAQPage schema is ready in
  `lib/schema.ts` and just needs wiring to a page's visible FAQ), `app/sitemap.ts`,
  `app/robots.ts`.
- API routes: `app/api/chat/route.ts` (Zelvoraq AI — live if `ANTHROPIC_API_KEY` is
  set, otherwise an honestly-labeled demo responder) and `app/api/lead/route.ts`
  (server-side validated, optional CRM webhook forwarding).

## Deliberately not built yet

- **Insights articles.** The index page and topic/category structure exist; individual
  article pages are intentionally not generated in bulk, per the "no thin AI-generated
  pages" requirement. Add them under `app/insights/[slug]/page.tsx` as they're written.
- **Real logo/brand assets.** `components/ui/Icons.tsx` → `BrandMark` is a placeholder
  mark (three connected nodes, no robot/brain/circuit imagery). Replace it there once
  final brand assets exist — nothing else in the codebase references its shape.
- **Legal page content.** `/privacy-policy` and `/terms-of-service` are structured with
  clearly marked placeholder sections — they need a legal review before launch.
- **OG image.** `lib/seo.ts` points at `/og-default.png`, which doesn't exist yet — add
  a real 1200×630 image at `public/og-default.png`.
- **Analytics.** `NEXT_PUBLIC_GA4_ID` is defined in `.env.example` but not yet wired
  into `app/layout.tsx` — add the GA4 script once the property exists.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in what you have; all vars are optional locally
npm run dev
```

## Architecture notes

- **Design tokens live in one place**: `app/globals.css` (`:root` CSS variables) +
  `tailwind.config.ts` (maps those variables to Tailwind utility classes). No component
  hardcodes a hex value.
- **Solutions are data-driven**: `lib/solutions-data.ts` is the single source of truth
  for the 4 service pillars — the nav dropdown, homepage cards, Solutions hub, and the
  individual `/solutions/[slug]` pages all read from it. Add a 5th solution there and
  it propagates everywhere automatically.
- **The Zelvoraq AI assistant** is a real, functional feature end-to-end — the frontend
  always calls a real API route. Without `ANTHROPIC_API_KEY` set, that route returns a
  small rule-based response and flags `demo: true`, which the widget surfaces to the
  user as a visible "Demo mode" note rather than pretending to be a live model.
