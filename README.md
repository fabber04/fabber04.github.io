# Fab Lashidi — Portfolio

Live: **https://fabber04.github.io/**

Vite + React + TypeScript + Tailwind v4. Dark systems aesthetic with
Fraunces, IBM Plex, and a status.log boot sequence.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

- `src/data.ts` — projects and hero boot-log lines
- `src/App.tsx` — sections, copy, social links
- `src/ContactForm.tsx` — contact form (FormSubmit → your email)
- `src/index.css` — color tokens under `@theme`

## Deploy (GitHub Pages)

Pushes to `main` deploy via `.github/workflows/deploy-pages.yml` to the
user site repo `fabber04.github.io`.

After the first form submission, confirm FormSubmit’s email so contact
messages actually arrive.
