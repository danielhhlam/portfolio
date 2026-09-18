# Daniel Lam — Portfolio

Personal portfolio built with Next.js (App Router), React, Tailwind CSS v4 and `next-themes`.
It is fully static: no API routes and no database. Projects and search data live in `data/`.

Live at https://danielhhlam.me

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command         | What it does                      |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server              |
| `npm run build` | Production build                  |
| `npm run start` | Serve the production build        |
| `npm run lint`  | Type-check with `tsc --noEmit`    |

## Structure

```
app/            Routes (/ and /projects), layout, global styles and theme tokens
components/     Header, Footer, search palette, projects browser, icons
data/           projects.ts and search-index.ts — edit these to add content
public/         Favicons
```

## Editing content

- **Add a project:** add an entry to `data/projects.ts`.
- **Update search results:** edit `data/search-index.ts`.
- **Home page text:** `app/page.tsx`.
- **Colors:** monochrome tokens at the top of `app/globals.css` (dark by default, light via `data-theme="light"`).

## Deploying

The site deploys on Vercel. Import the GitHub repo at vercel.com/new and keep the default
Next.js settings; every push to `main` redeploys. For the custom domain, add it under
Project → Settings → Domains and create the DNS records Vercel shows at your registrar.
