# CLAUDE.md — Momenties

## Project Identity

Momenties is a zero-friction AI-powered calendar web app. Users create events by typing naturally, speaking via voice, or photographing schedules. AI parses everything into calendar events automatically.

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
- shadcn/ui as base, customize to match Momenties aesthetic
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