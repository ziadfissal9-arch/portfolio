# Ziad Fissal — Portfolio

Personal portfolio site — a single-page introduction, a curated set of five full-stack projects with live demos and source links, and a one-click downloadable CV. Built with Next.js and TypeScript.

**Live site:** https://ziad-fissal.vercel.app

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-black)

## Features

- **Hero, About, Skills, Projects and Contact** sections on a single scrollable page with a sticky nav.
- **Downloadable CV** — a one-click "Resume" / "Download CV" button serves a print-ready PDF straight from `public/cv`.
- **Project showcase** — five real, deployed full-stack projects, each linking out to its live demo and public GitHub repository.
- **Scroll-reveal animations** via `IntersectionObserver`, and a `prefers-reduced-motion`-friendly default (content is fully readable without motion).
- **Accessible basics** — a skip-to-content link and labelled icon-only social links.
- **Responsive** down to small phone widths.

## Tech stack

| Layer      | Choice                                   |
| ---------- | ----------------------------------------- |
| Framework  | Next.js 16 (App Router)                  |
| UI         | React 19, TypeScript                     |
| Styling    | Tailwind CSS v4 + hand-written design tokens |
| Icons      | lucide-react + hand-drawn brand SVGs     |
| Deployment | Vercel                                   |

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

Other scripts:

```bash
npm run build     # production build
npm run start     # serve the production build
npm run lint      # run ESLint
```

## Project structure

```
src/
├── app/               # Next.js App Router entry (layout, page, global styles)
├── components/         # Navbar, Hero, About, Skills, Projects, Contact, BrandIcons
├── data.ts             # Project list and skill groups
├── hooks.ts            # useReveal (scroll-in animation)
└── types.ts             # Shared Project / SkillGroup types
public/
├── images/ziad.png     # Profile photo
└── cv/Ziad-Fissal-CV.pdf
```

## Deployment

The project is configured for [Vercel](https://vercel.com) as a standard Next.js app — push to a Vercel-linked Git repo or run `vercel --prod`.

## License

MIT — see [LICENSE](./LICENSE).
