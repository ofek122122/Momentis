# CLAUDE.md — Calendro

## Project Identity

Calendro is a zero-friction AI-powered calendar web app. Users create events by typing naturally, speaking via voice, or photographing schedules. AI parses everything into calendar events automatically.

**Tagline:** "Just say it. It's scheduled."

---

## Current Status

- Phases 1-5 complete (bugs fixed, features built, mobile polished)
- 76 tests passing across 12 test files
- Zero build errors
- See `PROJECT_STATUS.md` for full current state
- See `BACKLOG.md` for remaining work
- See `PROGRESS.md` for iteration history

---

## Tech Stack

- **Framework:** Next.js 16.2.2 (App Router, Turbopack)
- **Language:** TypeScript 5 (strict mode — never use `any`)
- **UI:** React 19, Tailwind CSS 4, shadcn/ui (base-nova theme)
- **Auth:** NextAuth v5 (beta), Google OAuth
- **Database:** PostgreSQL via Supabase + Prisma 7 ORM
- **AI — Text/Image:** Google Gemini 2.5 Flash
- **AI — Voice:** Deepgram Nova-3
- **NLP:** chrono-node (local date parsing)
- **Calendar sync:** googleapis (Google Calendar), tsdav (Apple CalDAV)
- **Validation:** Zod
- **Testing:** Vitest 4.1.3 + React Testing Library
- **Fonts:** Playfair Display (headings), DM Sans (body), JetBrains Mono (code/data)

---

## Design System — MUST follow strictly

| Token | Value |
|-------|-------|
| Background | `#0c0c0f` |
| Card surfaces | `#131318` |
| Foreground text | `#f0ece3` |
| Accent gold | `#c5a35c` |
| Borders | `rgba(255,255,255,0.07)` |
| Muted text | `#8b8b8b` |
| Success | emerald-500 |
| Warning | amber-500 |
| Error | red-500 |

- Always dark mode (except Clean White Pro theme)
- Fonts: Playfair Display (display), DM Sans (body), JetBrains Mono (mono)
- Border radius: `rounded-xl` cards, `rounded-lg` buttons/inputs, `rounded-full` avatars/badges
- Shadows: subtle and dark only
- Animations: fast (150-300ms), CSS transitions preferred
- Spacing: follow existing Tailwind scale

---

## Commands

```bash
npm run dev          # Dev server → http://localhost:3000
npm run build        # Production build (must pass with zero errors)
npm run test:run     # All tests (must all pass)
npm run test         # Watch mode
npx prisma db push   # Sync schema
npx prisma generate  # Regenerate client
```

---

## Architecture Rules

1. **Server Components** for data fetching. `'use client'` only when interactivity is required.
2. **Zod validation** on every API route input.
3. **Auth check** on every non-public API route (verify session).
4. **Rate limiting** on every API route (DB-backed via Prisma RateLimit model).
5. **Structured logging** via `lib/logger.ts` — JSON to stdout.
6. **User scoping** — every Prisma query that touches user data must include `where: { userId }`.
7. **Graceful degradation** — if Gemini fails, chrono results returned. If Apple fails, Google continues.
8. **Hybrid parsing** — chrono-node first (free, fast), Gemini fallback (AI, costly).

---

## Coding Conventions

### TypeScript
- Strict mode, no `any`, no `@ts-ignore`, no `as unknown as X`
- Explicit types on function params and returns
- `interface` for object shapes, `type` for unions/intersections
- `const` preferred, never `var`

### React
- Functional components only
- Destructure props in signature
- Hooks in `hooks/` directory if shared
- Prefer server state + React state; no Redux/Zustand

### File naming
- Components: `PascalCase.tsx`
- Utilities: `kebab-case.ts`
- Tests: `__tests__/filename.test.ts` colocated with module

### API routes
- Zod validate → auth check → rate limit → logic → structured response
- Response shape: `{ success: boolean, data?: T, error?: { code, message } }`
- Proper HTTP status codes
- Never expose internal error details to client

### Styling
- Tailwind utilities only, no inline styles
- shadcn/ui as base, customize to match Calendro aesthetic
- Mobile-first (test 375px, 768px, 1024px, 1440px)

### Testing
- Every change needs tests
- Mock external APIs (Gemini, Deepgram, Google, Apple, Supabase)
- Clear `describe`/`it` names
- Colocate tests with modules

---

## Safety Rules

- Never modify `.env.local` or commit secrets
- Never delete or overwrite `prisma/schema.prisma` carelessly
- Never disable failing tests to "fix" them — actually fix the issue
- Never introduce new dependencies without strong justification
- Never change design tokens (colors, fonts, spacing) without explicit instruction

---

## Git Workflow (mandatory)

After any meaningful change, **commit and push to a properly-named branch**, then open a PR. Don't accumulate uncommitted work — commit logical units as you finish them. This authorization is durable: do not ask for per-action confirmation on standard commit/push/PR-open.

### Branch naming

- **Never commit directly to `master` or `main`.** Always create a branch first.
- Format: `<type>/<short-kebab-case-description>`
- Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `perf`, `ci`, `style`
- Examples:
  - `feat/event-templates-pro`
  - `fix/google-token-refresh-race`
  - `chore/cleanup-stale-md-files`
  - `docs/git-workflow-rules`
  - `refactor/extract-parser-module`

### Commit messages (Conventional Commits)

- Format: `<type>(<optional-scope>): <subject>`
- Subject: imperative mood, lowercase, under 72 chars, no trailing period
- Body (optional but encouraged): wrap at 72 chars, explain *why* not *what*
- Examples:
  - `feat(parser): detect vague event times and trigger ai suggestions`
  - `fix(google-calendar): mutex around oauth token refresh`
  - `chore: remove stale ralph loop docs`
  - `docs(claude-md): add mandatory git workflow rules`

### Push & PR flow

1. `git checkout -b <type>/<desc>` **before** starting work
2. Make the change
3. Run quality gates — `npm run test:run` and `npm run build` must both pass
4. `git add` the specific files (never `git add -A` blindly — secrets risk)
5. `git commit` with a Conventional Commit message
6. `git push -u origin <branch>`
7. Open a PR to `master` with `gh pr create` — title is the commit subject, body is a one-line summary + bullet list of changes + test plan
8. **Stop there.** The user reviews and merges. Never merge a PR yourself.

### What this rule does NOT authorize

The following still require explicit per-action confirmation:
- `git push --force` / `git push --force-with-lease`
- `git reset --hard`, `git checkout --`, `git clean -f`
- Deleting branches (local or remote)
- Merging PRs
- Amending or rewriting published commits
- Skipping hooks (`--no-verify`, `--no-gpg-sign`)