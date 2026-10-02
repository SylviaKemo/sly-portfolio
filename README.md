# Sylvia Kemo — Portfolio

Single-page portfolio for Sylvia Kemo, fullstack developer based in Nairobi.
Built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> On machines with little free memory, Turbopack can run out of RAM.
> Use webpack instead: `npx next dev --webpack` / `npx next build --webpack`.

## Project structure

```
app/
  layout.tsx            fonts (Jost, Instrument Serif) and metadata
  page.tsx              puts the sections together
  globals.css           theme colours, animations, base styles
  api/contact/route.ts  contact form → email (Resend)
components/
  ui/                   small reusable pieces (Section, SectionTitle, ArrowButton, …)
  Nav/                  floating pill navigation
  Hero/                 hero section, blob, typing speech bubble, badges
  Journey/              experience timeline, squiggle line, toolkit bubbles
  Work/                 projects carousel
  Services/             services accordion
  Contact/              contact info and form
  About.tsx, Testimonials.tsx, Footer.tsx
data/                   all site content — edit these files to update text
public/images/          portrait and avatar
```

## Updating content

All text lives in `data/`, so you rarely need to touch components:

| File | What it holds |
| --- | --- |
| `data/profile.ts` | name, contact details, social links, **CV link** |
| `data/experience.ts` | timeline entries (placeholders — replace) |
| `data/tools.ts` | toolkit bubbles |
| `data/projects.ts` | carousel projects (placeholders — add `image` for screenshots) |
| `data/services.ts` | accordion rows |
| `data/testimonials.ts` | quotes (placeholders — replace) |
| `data/tech.ts` | every tech logo (Simple Icons slug + colour) |

## Contact form

The form posts to `/api/contact`, which sends an email through [Resend](https://resend.com).
Copy `.env.example` to `.env.local` and set:

```
RESEND_API_KEY=...
CONTACT_EMAIL=Sylviakemo@gmail.com
```

Set the same variables in your hosting provider (e.g. Vercel). Without them, local
development just logs messages and production returns an error.

## Theme

Colours are CSS variables in `app/globals.css` (Midnight plum) and are available as
Tailwind utilities: `bg-accent`, `text-muted`, `border-line2`, `bg-s1`, …
