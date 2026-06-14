# GitHub Copilot instructions

This repository is the static, bilingual (English/French) personal site of
Ibrahima Sylla, built with Next.js 16 (App Router, static export),
TypeScript 6, Tailwind CSS v4, and shadcn/ui.

See [AGENTS.md](../AGENTS.md) for the complete guide. Key points:

- No `src/` directory — code lives at the repository root.
- All user-facing text is bilingual: edit `i18n/dictionaries/{en,fr}.ts` or
  the `Localized<T>` values in `content/`. Never hard-code copy.
- Prefer server components; add `"use client"` only for interactivity.
- The site is exported statically (`output: "export"`) — avoid server-only
  features and `next/image` optimization.
- Keep animations subtle and respect `prefers-reduced-motion`.
- Match the existing style: double quotes, semicolons, no decorative comments.
- Use Conventional Commits without co-author trailers.
- Run `pnpm check` to validate changes.
