# SG_portfolio

Personal portfolio site for **Shrishty G** — a terminal / GitHub-dark themed single page built with Next.js.

## Stack

- [Next.js](https://nextjs.org/) (App Router) + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) (mostly for tooling; the UI theme lives in plain CSS)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) via `next/font`

## Prerequisites

- [Node.js](https://nodejs.org/) LTS (includes `npm`)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Stop the dev server with `Ctrl+C`.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Dev server (Turbopack)   |
| `npm run build` | Production build        |
| `npm run start` | Run production server   |
| `npm run lint`  | ESLint                  |

## Customize content

Almost all copy and links live in **`lib/site.ts`** (name, bio chunks, projects, skills, contact, typing phrases, etc.).

- **Layout / sections:** `app/page.tsx`
- **Global theme (colors, terminal chrome):** `app/globals.css`
- **Site metadata (title, description):** `app/layout.tsx` reads from `lib/site.ts`

Add **`public/resume.pdf`** if you use the resume link, or change the `href` in `contactCells` in `lib/site.ts`.

## Live GitHub contribution graph

The activity heatmap can show your **real** last 24 weeks (GitHub’s own colors).

1. Copy **`.env.example`** to **`.env.local`**.
2. Create a [classic personal access token](https://github.com/settings/tokens) with the **`read:user`** scope.
3. Put it in `.env.local` as `GITHUB_TOKEN=...`.
4. Set **`githubLogin`** in **`lib/site.ts`** to your GitHub username (default: `SG-TRINITY`).

Without a token, the site keeps the **decorative** random grid. On Vercel, add `GITHUB_TOKEN` under **Project → Settings → Environment Variables** (never commit the real token).

## Deploy

The usual path is push to GitHub and deploy on [Vercel](https://vercel.com) (import repo → it runs `npm run build` automatically).

## Cursor / Windows: `node` not found in the integrated terminal

If `node` works in an external terminal but not inside Cursor, restart Cursor after installing Node, or use the workspace setting in **`.vscode/settings.json`** that prepends `C:\Program Files\nodejs` to `Path` for new integrated terminals.
