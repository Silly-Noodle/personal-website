# Eric Huang — Editorial Portfolio Starter

A static, editorial-style portfolio built with Next.js App Router, TypeScript, CSS, and Motion.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in Cursor or VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open `http://localhost:3000`.

## First things to personalize

Search the project for `TODO` and `example.com`.

- Update your email, LinkedIn, and GitHub URLs in `components/portfolio.tsx`.
- Verify the education dates and experience descriptions in `data/experience.ts`.
- Rewrite the project descriptions, tags, and links in `data/projects.ts`.
- Replace the CSS-generated project artwork with real screenshots when ready.
- Replace the abstract hero artwork in `components/portfolio.tsx` / `app/globals.css` with a licensed image or your own illustration.

## Architecture

- `app/`: Next.js routes, layout, and global styles.
- `components/portfolio.tsx`: interactive homepage and project modal.
- `data/`: content separated from presentation.
- `public/images/`: place project images here as you add them.

## Design notes

The current hero and project artwork are intentionally CSS-based placeholders. This keeps the starter self-contained while the visual direction is being refined. The modal supports previous/next navigation, category filtering, a theme toggle, and responsive layouts.
