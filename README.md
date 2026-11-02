# Roushan Kumar Portfolio

Portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Vercel serves the frontend and the `api/` serverless functions.

## Project structure

- `src/pages/` — route-level pages and case studies
- `src/components/` — reusable UI and interaction components
- `src/hooks/` — shared React hooks, including navigation and scroll behavior
- `src/data/` — portfolio and case study content
- `src/types/` and `src/types.ts` — shared browser globals and application types
- `src/assets/` — imported images and videos processed by Vite
- `public/` — static files referenced by URL, SEO documents, and project media
- `api/` — Vercel serverless endpoints
- `scripts/` — build-time SEO page generation and local cleanup

Large design exports and source animation files are kept outside the runtime source tree. Generated output belongs in `dist/` and is not committed.

## Commands

- `npm run dev` — start the Vite development server
- `npm run lint` — run TypeScript checks
- `npm run build` — create the production bundle and SEO route documents
- `npm run preview` — serve the production bundle locally
- `npm run clean` — remove only generated `dist/` output

## Environment

Set `GEMINI_API_KEY` in Vercel for the `/api/chat` endpoint. See `.env.example` for the supported environment variables.
