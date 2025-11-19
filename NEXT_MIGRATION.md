# Next.js Migration Guide — Casewise Solutions

This repository currently contains a Vite + React codebase. I added a Next.js `app/` scaffold and made the following changes to help you run the app in Next mode alongside Vite for incremental migration.

What changed:
- Added `next.config.js` and a minimal `app/` router scaffold (`layout.tsx`, `page.tsx`, `case-review/page.tsx`, `not-found.tsx`).
- Converted key components (`HeroSection`, `CaseReview`, `CTABanner`, `WhyChooseUs`, `VehicleAccidentSection`, `LegalCategories`) to use Next router from `next/navigation`.
- Converted `Navbar` to use `next/link` and `usePathname` for active styling.
- Switched Supabase client to rely on `process.env.NEXT_PUBLIC_*` variables.
- Added global `app/globals.css` and included Tailwind directives.
- Updated `package.json` with `next` dependency and add scripts to run Next.

How to run Next dev server:
1. Install dependencies
```powershell
npm install
```
2. Create `.env.local` and add keys
```
NEXT_PUBLIC_SUPABASE_URL=https://your.supabase.url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-public-key
NEXT_PUBLIC_GA_ID=G-XXXXX
```
3. Run Next dev server
```powershell
npm run dev:next
```

Notes:
- This migration is incremental — the Vite app remains intact. You can keep using the Vite dev server with `npm run dev` while adding Next pages.
- The `src` directory still contains many `react-router-dom` usages; you can remove or refactor them as you convert features to Next.
- The browser routing and Link behavior will differ from Vite. Make sure to test form submissions and Typeform redirects.

Suggested next steps:
- Convert remaining routes/pages and components to Next.
- Convert server data fetching for resources and blog posts to Next server components using Supabase.
- Add `site` and OG metadata per page using `metadata` in the `app` router.
