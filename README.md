# Mehtab Singh Sidhu — Graduate Portfolio

A production-ready Next.js 15 portfolio for AI / Data Analytics / Decision
Intelligence graduate school applications, built with TypeScript, Tailwind
CSS, shadcn-style components, and Framer Motion.

## Stack

- Next.js 15 (App Router) + React 18 + TypeScript
- Tailwind CSS with a custom design-token palette
- Framer Motion for scroll-reveal micro-interactions (respects `prefers-reduced-motion`)
- lucide-react icons
- Static generation, SEO metadata, Open Graph, Twitter cards, `schema.org` JSON-LD, sitemap, robots.txt

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata, JSON-LD
  page.tsx           Section assembly
  globals.css         Design tokens / base styles
  sitemap.ts / robots.ts
components/
  ui/                 button.tsx, card.tsx, badge.tsx (shadcn-style primitives)
  hero.tsx, about.tsx, education.tsx, research.tsx, publications.tsx,
  projects.tsx, experience.tsx, tech-stack.tsx, leadership.tsx,
  certifications.tsx, skills.tsx, github-section.tsx, blog.tsx,
  contact.tsx, footer.tsx, nav.tsx, reveal.tsx, section-heading.tsx
lib/
  data.ts             All content — edit this file to update the site
  utils.ts
public/
  resume-placeholder.pdf   A generated placeholder — replace with your real resume,
                              keeping the same filename
```

## Adding real content

Everything text-based lives in `lib/data.ts`. Update the exported objects
(`profile`, `about`, `education`, `publications`, `projects`, `experience`,
`techStack`, `leadership`, `certifications`, `skills`, `githubConfig`,
`blogPosts`) — the components re-render automatically, no design changes
needed.

To replace placeholder images:
- Add a real headshot and reference it inside `components/hero.tsx`.
- Add real project screenshots and swap the placeholder block in
  `components/projects.tsx`.
- Replace `public/resume-placeholder.pdf` with your actual resume, keeping
  the same filename (Nav/Hero already link to it) — or rename it and update
  `resumeUrl` in `lib/data.ts`.

## Wiring up live data

- **Contact form**: `components/contact.tsx` has a placeholder submit
  handler — connect it to a serverless route, Formspree, or Resend.
- **GitHub section**: `components/github-section.tsx` uses static data in
  `lib/data.ts`. Swap in a fetch to the GitHub REST API
  (`/users/{username}/repos`) inside a server component or route handler for
  live pinned repos and contribution data.
- **Publications**: citation/download/view counts are placeholders — connect
  to a Google Scholar scraper, Semantic Scholar API, or Zenodo API if you
  want live numbers.

## Deployment (Vercel)

```bash
npm install -g vercel   # if not already installed
vercel                  # first-time deploy, follow prompts
vercel --prod            # subsequent production deploys
```

Or connect the GitHub repo directly at vercel.com/new — Vercel auto-detects
Next.js and needs no additional configuration.

Before going live:
1. Update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`
   to your real domain.
2. Add a real Open Graph image at `public/og-image.png` (1200×630).
3. Add a real `public/favicon.ico`.
4. Replace all `href="#"` placeholders in `lib/data.ts` with real links.

## Performance & accessibility

- Fonts are self-hosted via `next/font` (no layout shift, no external requests).
- All interactive elements are keyboard-navigable with visible focus rings.
- Motion respects `prefers-reduced-motion`.
- Semantic HTML landmarks (`header`, `main`, `section`, `footer`) throughout.
