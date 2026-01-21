## Damien Christian — Personal Website

Modern résumé-style site for showcasing front-end and applied-AI projects. Built with the Next.js App Router and tuned for accessibility, performance, and deploy-ready SEO.

### Highlights

- Responsive hero, projects, skills, and contact sections.
- Light/dark theming that stays in sync with the OS.
- SEO polish: canonical metadata, Open Graph/Twitter cards, JSON-LD Person schema, sitemap, and robots directives.
- Security-conscious defaults using a strict CSP, HSTS, and other hardened headers.

### Tech Stack

- Next.js 14 (App Router, Server Components)
- TypeScript
- PostCSS-powered global styles (no utility framework)
- ESLint + TypeScript config from Next.js

### Local Development

```bash
npm install
npm run dev
```

### Quality Checks

```bash
npm run lint   # ESLint with TypeScript rules
npm run build  # next build (CI/CD parity)
```

Run `npm run build` before deploying to verify the exact artifact Vercel will produce.
