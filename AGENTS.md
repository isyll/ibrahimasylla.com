# Agent guide

Guidance for AI coding agents (Claude Code, GitHub Copilot, Codex, and
others) working in this repository. Humans are welcome to read it too.

## What this is

The personal website of Ibrahima Sylla — a static, bilingual (English and
French), single-page site deployed at <https://ibrahimasylla.com>. It is
intentionally small, calm, and editorial. Keep it that way.

## Tech stack

- **Next.js 16** (App Router) exported as a fully static site
  (`output: "export"`)
- **TypeScript 6** in strict mode
- **Tailwind CSS v4** with **shadcn/ui** (Base UI primitives)
- **motion** for animation, **next-themes** for light/dark
- **pnpm** as the package manager (pinned via `packageManager`)
- **Vitest** + Testing Library, **ESLint 10** (flat config), **Prettier**

## Commands

```bash
pnpm dev            # start the dev server
pnpm build          # produce the static export in ./out
pnpm check          # typecheck + lint + format + spell + markdown + test
pnpm test           # run the test suite
pnpm lint           # ESLint
pnpm format         # Prettier write
```

Run `pnpm check` before considering any change complete.

## Project layout

- `app/` — App Router. `app/[lang]/` holds the localized routes; `app/page.tsx`
  redirects `/` to a locale.
- `components/` — `sections/` (page sections), `layout/` (header, footer,
  section primitives), `motion/`, `providers/`, `ui/` (shadcn).
- `content/` — structured data (experience, projects, education, skills).
- `i18n/` — locale config, dictionaries (`en`, `fr`), and helpers.
- `config/site.ts` — site constants, driven by `NEXT_PUBLIC_*` env vars.

## Conventions

- **No `src/` directory.** Application code lives at the repository root.
- **Bilingual by construction.** Every user-facing string lives in
  `i18n/dictionaries/{en,fr}.ts`, or as a `Localized<T>` (`{ en, fr }`) value
  in `content/`. Never hard-code copy in components. `en.ts` is the typed
  source of truth; `fr.ts` must match its shape.
- **Server components by default.** Add `"use client"` only when a component
  needs interactivity (header scroll state, theme/locale toggles, motion).
- **Static-export safe.** No server actions, no runtime APIs, no
  `next/image` optimization. Routes that generate files need
  `export const dynamic = "force-static"`.
- **Animation is restrained.** Use the `Reveal` component; respect
  `prefers-reduced-motion`; keep content visible without JavaScript.
- **No decorative comments.** Write code that reads clearly on its own.
- **Conventional Commits.** e.g. `feat(ui): ...`, `fix: ...`, `chore: ...`.
  Do not add co-author trailers.

## Design intent

Mature, quiet, and professional — editorial typography on a warm neutral
palette with a single restrained accent. Avoid gradients, glassmorphism,
particle effects, emoji, and anything that reads as a generic template.
