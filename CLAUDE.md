# CLAUDE.md

This file guides Claude Code when working in this repository.

The full project guide lives in [AGENTS.md](./AGENTS.md). Read it first. It
covers the stack, commands, project layout, and conventions.

## Quick reminders

- Run `pnpm check` before finishing a change.
- No `src/` directory; code lives at the repository root.
- All user-facing copy is bilingual: edit `i18n/dictionaries/{en,fr}.ts` or
  the `Localized<T>` values in `content/`, never hard-code strings.
- Server components by default; add `"use client"` only when needed.
- Keep the static export constraint in mind (`output: "export"`).
- Conventional Commits, no co-author trailers, no decorative comments.
