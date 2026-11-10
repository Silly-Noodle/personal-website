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
- `components/portfolio.tsx`: shared theme shell and reduced-motion configuration.
- `components/portfolio/`: hero with theme control, about section, project gallery, cards, and modal.
- `app/styles/`: base styles, section styles, and shared responsive overrides, imported by `app/globals.css`.
- `data/`: content separated from presentation.
- `public/images/`: place project images here as you add them.

## Design notes

The hero uses the image in `public/images/`; project artwork uses CSS placeholders. The dark theme reuses the existing hero image with a darker filter until a dedicated illustration is available. The project gallery supports category filtering and previous/next navigation. The modal supports Escape, keyboard focus containment, focus restoration, and scroll locking.

## Where to make changes

- Page section order: `app/page.tsx`.
- Shared theme: `components/portfolio.tsx`.
- Section markup and interactions: the corresponding file in `components/portfolio/`.
- Colors, shared controls, and typography defaults: `app/styles/base.css`.
- Section appearance: the corresponding stylesheet in `app/styles/`.
- Tablet and phone overrides: `app/styles/responsive.css` (hero-specific mobile rules live in `hero.css`).
- Project descriptions and experience: `data/projects.ts` and `data/experience.ts`.

Sections are composed by the server page. The theme shell, hero theme control, and project gallery are client components; gallery state stays inside `WorkSection`. All text uses Figtree except the hero name, which uses Jura.
