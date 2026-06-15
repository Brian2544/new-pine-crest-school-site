# Pine Crest School Website

Modern, SEO-optimized website for [Pine Crest School](https://pinecrestschool.sc.ke) — Ruiru, Kenya.

## Tech Stack

- **Next.js 16** (App Router, React Server Components)
- **TypeScript** + **Tailwind CSS v4**
- **Framer Motion** (stat counters)
- **React Hook Form** + **Zod** (form validation)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

### Deploy to Vercel (recommended)

1. Push this project to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Set custom domain: `pinecrestschool.sc.ke`
4. Vercel provides global CDN, HTTPS, and edge caching automatically

### Post-launch SEO checklist

- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Claim/update [Google Business Profile](https://business.google.com)
- [ ] Set up 301 redirects from old WordPress URLs
- [ ] Replace placeholder gallery images with real school photos
- [ ] Update stats in `src/lib/constants.ts` with accurate numbers

## Project Structure

```
src/
├── app/           # Pages & API routes
├── components/    # UI, layout, sections, forms
└── lib/           # Constants, SEO, validation, schema
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure optional services.
