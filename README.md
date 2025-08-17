# Blitz-Insights Website (TypeScript + Next.js App Router)

Production-grade rebuild of the Blitz-Insights marketing site in TypeScript with strong typing, performance, accessibility, and maintainability.

## Scope (Pages)
- Home (/)
- Services (/services)
- About (/about)
- Case Studies (/case-studies)
- Blog (/blog) and Post Detail (/blog/[slug]) with ≥3 MDX posts
- Contact (/contact) with working form (client+server validation) writing JSON to `data/leads/`
- Global 404, shared Header/Footer, sticky navigation

## Tech Stack (Mandatory)
- Framework: Next.js 13 App Router + TypeScript ("strict": true)
- Styling: Tailwind CSS (+ tailwind-merge)
- Components: shadcn/ui (Radix-based)
- Forms: React Hook Form + Zod (client + server)
- Content: MDX (front-matter via gray-matter), local JSON/TS data
- State/Data: async server components and filesystem loaders in `lib/`
- Analytics: lightweight pageview stub (replaceable with Plausible/GA)
- Tooling: ESLint (TS rules), Prettier, Husky + lint-staged, Vitest
- Animations: Framer Motion (route transitions + section/hover micro-interactions)

## Why These Libraries
- Next.js App Router: server-first rendering, simple file routing, RSC perf
- Tailwind + shadcn/ui: consistent, accessible UI primitives with a small surface area
- RHF + Zod: ergonomic forms with end-to-end validation and strict types
- MDX + gray-matter: flexible content with typed front-matter
- Framer Motion: declarative animations without sacrificing performance
- Vitest: fast tests with V8 coverage

## Features (Mapping to Requirements)
- Pixel-close UI across devices (mobile/tablet/desktop); sticky header
- Contact form (name, email, company, message)
  - Client validation via Zod; server route re-validates
  - Persists a JSON lead to `data/leads/*.json` and logs to console
- Blog
  - MDX with front-matter (title, excerpt, date, tags, author, image, slug)
  - List with pagination and tag filter; post detail with TOC and next/prev links
- Accessibility: semantic HTML, aria-labels, visible focus, color contrast
- Performance: static generation, minimal client JS, metadataBase configured
- Dark mode: `next-themes` with persisted preference (system/light/dark)
- Animations: route transitions, section reveals, hover/tap micro-interactions

## Architecture
```
app/
  api/contact/route.ts     # Zod-validated API route, writes JSON lead
  blog/                    # Blog list and post detail
  layout.tsx               # Root layout, Theme/Motion/Analytics providers
  globals.css              # Tokens, base styles
components/
  blog/                    # TOC, tag filter
  forms/                   # Contact form
  layout/                  # Header, Footer
  providers/               # theme-provider, motion-provider, analytics
  ui/                      # shadcn/ui components + small custom
content/blog/              # MDX posts (3+)
data/                      # JSON content and leads/
lib/                       # blog utils, validations, constants
types/                     # domain types (Service, CaseStudy, Post, Lead)
```

### Key Files
- `components/ui/section.tsx`: shared section wrapper with padding/container + in-view reveal
- `components/providers/motion-provider.tsx`: route transitions with AnimatePresence
- `components/providers/analytics.tsx`: console-based pageview stub (swap for Plausible/GA)
- `app/api/contact/route.ts`: validates input with Zod, writes `data/leads/*.json`
- `lib/blog.ts`: loads/filters/paginates MDX posts and derives tags

## Getting Started
Prereqs: Node 18+

Install & run:
```bash
npm install
npm run dev
# http://localhost:3000
```

Production:
```bash
npm run build
npm start
```

Type-check & lint:
```bash
npm run type-check
npm run lint
```

Tests (Vitest):
```bash
npm run test
npm run test:coverage
```

## Content & Data
### Add a Blog Post
Create `content/blog/my-post.mdx`:
```mdx
---
title: "Your Post Title"
excerpt: "Brief description"
date: "2025-01-01"
tags: ["Tag1", "Tag2"]
author: "Author Name"
image: "/path-or-url.jpg"
slug: "your-post-slug"
---

Content here...
```

### Edit Services / Team / Case Studies
- `data/services.json`
- `data/team.json`
- `data/case-studies.json`

### Leads (Contact Submissions)
- Written to `data/leads/*.json` by `/api/contact`

## Accessibility
- Semantic landmarks, keyboard-friendly UI, visible focus
- Motion respects reduced-motion; color contrast checked

## Deployment (Vercel)
1. Push to GitHub
2. Import to Vercel (Next.js). Static export ready
3. Configure domain/preview as desired

## Lighthouse
- Run against Home and a Blog post; expect 95+ Performance and 100 A11y/SEO depending on host and images

## Acceptance Criteria Checklist
- Builds locally with `npm install && npm run dev`
- Vercel preview deploys successfully
- Contact form validates client+server; writes JSON lead
- Blog renders ≥3 MDX posts with tags and proper metadata
- TypeScript strict + ESLint pass; tests green

## ADRs (Brief)
- MDX on filesystem for simplicity; can migrate to Contentlayer/CMS later
- shadcn/ui for accessible, composable primitives + Tailwind
- Framer Motion limited to tasteful transitions and micro-interactions

## Scripts
- `dev`, `build`, `start`, `lint`, `type-check`, `test`, `test:watch`, `test:coverage`

---
Built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.
