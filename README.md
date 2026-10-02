# ibrahimasylla.com

The personal website of **Ibrahima Sylla**, a static, bilingual, single-page
site built with Next.js and exported as plain HTML. Live at
**[ibrahimasylla.com](https://www.ibrahimasylla.com)**.

[![CI](https://github.com/isyll/ibrahimasylla.com/actions/workflows/ci.yml/badge.svg)](https://github.com/isyll/ibrahimasylla.com/actions/workflows/ci.yml)

## Overview

A deliberately small, editorial single-page site: little copy, original
illustrations, technology logos and a single portrait.

- **Fully static**: exported to HTML/CSS/JS (`output: "export"`), deployable
  anywhere, with no server runtime.
- **Bilingual**: English and French, served from separate, indexable URLs
  (`/en`, `/fr`) with a correct `<html lang>` and `hreflang` alternates.
- **Light & dark themes**: system-aware, with no flash on load.
- **Original artwork**: an isometric diagram (network, systems, interface),
  project covers and a logo mark, all drawn as SVG in this repository.
- **SEO-complete**: per-locale metadata, canonical links, sitemap, robots,
  web manifest, JSON-LD, and generated OpenGraph images.
- **Accessible & resilient**: keyboard-friendly, reduced-motion aware, and
  fully readable without JavaScript.
- **Open typefaces**: Newsreader, Hanken Grotesk and JetBrains Mono.

## Tech stack

| Area            | Choice                                                         |
| --------------- | -------------------------------------------------------------- |
| Framework       | Next.js 16 (App Router, static export)                         |
| Language        | TypeScript 7 (strict)                                          |
| Styling         | Tailwind CSS v4                                                |
| Icons           | Phosphor (interface), Simple Icons (technology logos)          |
| Theming         | next-themes                                                    |
| Analytics       | Vercel Analytics & Speed Insights, Google Analytics (optional) |
| Tooling         | Biome, cspell, markdownlint, Vitest                            |
| Package manager | pnpm 12 on Node 24                                             |

## Getting started

Prerequisites: **Node.js** (see [`.nvmrc`](./.nvmrc)) and **pnpm** (enable via
`corepack enable`).

```bash
pnpm install      # install dependencies
pnpm dev          # start the dev server at http://localhost:3000
pnpm build        # build the static export into ./out
pnpm start        # serve ./out locally
```

## Scripts

| Script           | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| `pnpm dev`       | Start the development server                                |
| `pnpm build`     | Build the static export to `./out`                          |
| `pnpm start`     | Serve the static export locally                             |
| `pnpm check`     | Every quality gate: types, Biome, spelling, Markdown, tests |
| `pnpm fix`       | Apply Biome lint fixes, formatting and import sorting       |
| `pnpm test`      | Run the test suite                                          |
| `pnpm typecheck` | Type-check with TypeScript                                  |

## Configuration

Runtime configuration is provided through environment variables. Copy
[`.env.example`](./.env.example) to `.env.local` for local development.

| Variable                    | Required | Description                              |
| --------------------------- | -------- | ---------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`      | no       | Canonical site URL (no trailing slash)   |
| `NEXT_PUBLIC_CONTACT_EMAIL` | no       | Public contact email                     |
| `NEXT_PUBLIC_GA_ID`         | no       | Google Analytics 4 ID; disabled if unset |

All values fall back to sensible defaults, so the site builds without any
configuration.

## Project structure

```text
app/            App Router; localized routes live under app/[lang]
components/     sections, layout, illustrations, brand
content/        structured data: experience, projects, education, skills, tech
i18n/           locale config, dictionaries (en/fr), helpers
config/         site-wide configuration (env-driven)
lib/            fonts, metadata, isometric helpers, utilities
public/         portrait, illustrations, icons, résumés
tests/          Vitest + Testing Library specs
```

Content and copy are separated from presentation: edit the dictionaries in
`i18n/` and the data in `content/` to update the site.

## Quality

Every pull request, and every push to `main`, runs the full `pnpm check` suite
and a production build in CI. Commits follow
[Conventional Commits](https://www.conventionalcommits.org) and are validated
by Git hooks (Husky, commitlint, lint-staged).

## AI agents

[`AGENTS.md`](./AGENTS.md) is the single source of truth for coding agents.
`CLAUDE.md` and `.github/copilot-instructions.md` are symbolic links to it.

## Deployment

The site deploys to [Vercel](https://vercel.com). Pushing to `main` runs the
[deploy workflow](./.github/workflows/deploy.yml), which verifies the project,
then builds and promotes a production deployment. Because the output is a
static export, the contents of `./out` can also be served by any static host.

## License

© Ibrahima Sylla. All rights reserved.
