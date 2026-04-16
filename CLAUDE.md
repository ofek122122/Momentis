# Calendro — Project Context for AI Agents

## What Is This?

Calendro is a zero-friction AI-powered calendar web app. Users create events by typing naturally ("dentist thursday 3pm"), speaking via voice, or snapping a photo of a schedule. AI parses everything into Google Calendar events.

**Tagline:** "Just say it. It's scheduled."

## Tech Stack

- **Framework:** Next.js 16.2.2 (App Router, Turbopack)
- **Language:** TypeScript 5 (strict)
- **UI:** React 19, Tailwind CSS 4, shadcn/ui (base-nova style)
- **Auth:** NextAuth v5 beta (Google OAuth)
- **Database:** PostgreSQL via Supabase + Prisma 7
- **AI Text/Image:** Google Gemini 2.5 Flash
- **AI Voice:** Deepgram Nova-3
- **NLP:** chrono-node (local date parsing)
- **Apple Calendar:** tsdav (CalDAV)
- **Google Calendar:** googleapis
- **Validation:** Zod
- **Testing:** Vitest 4.1.3 + React Testing Library

## Design System

- Background: `#0c0c0f` (near-black)
- Foreground: `#f0ece3` (cream)
- Accent: `#c5a35c` (gold)
- Borders: `rgba(255,255,255,0.07)`
- Cards: `#131318`
- Fonts: Playfair Display (display), DM Sans (body), JetBrains Mono (mono)
- Always dark mode. No light theme.

## Commands

```bash
npm run dev          # Dev server at http://localhost:3000
npm run build        # Production build
npm run test:run     # Run all tests (26 currently)
npm run test         # Watch mode
npx prisma db push   # Sync schema to Supabase
npx prisma generate  # Regenerate Prisma client
```

## Key Entry Points

| File | Role |
|------|------|
| `app/layout.tsx` | Root layout, fonts, metadata, PWA |
| `app/(app)/calendar/page.tsx` | Main calendar server component |
| `components/calendar/CalendarGrid.tsx` | Calendar grid, drag-drop, edit/create |
| `components/input/InputBar.tsx` | Primary input (text + voice + image) |
| `lib/parser/index.ts` | Unified parse engine (chrono -> Gemini) |
| `lib/google-calendar.ts` | Google Calendar API wrapper |
| `lib/apple-calendar.ts` | Apple CalDAV wrapper |
| `lib/auth.ts` | NextAuth configuration |
| `app/api/events/route.ts` | Event CRUD API |
| `types/index.ts` | All shared types, color/priority configs |

## Architecture Patterns

- Server Components for data fetching, `'use client'` for interactivity
- Zod validation on all API inputs
- Hybrid parsing: chrono-node first (free, fast), Gemini fallback (AI, costly)
- Graceful degradation: if Gemini fails, chrono results returned
- Structured JSON logging to stdout (`lib/logger.ts`)
- In-memory rate limiting per user+route (`lib/rate-limit.ts`)
- Components organized by feature: `calendar/`, `input/`, `settings/`, `ui/`

## Database Models (Prisma)

- **User** — id, name, email, image, accounts[], sessions[], preference?, appleCalendar?
- **Account** — OAuth tokens (Google), linked to User
- **Session** — NextAuth sessions
- **VerificationToken** — unused (Google OAuth only)
- **UserPreference** — timezone, reminders, working hours (exists but NOT implemented in UI)
- **AppleCalendar** — CalDAV credentials (appleId, appPassword, enabled)

## Environment Variables

```
DATABASE_URL     — Supabase transaction pooler (port 6543)
DIRECT_URL       — Supabase direct connection (port 5432, for migrations)
AUTH_SECRET      — NextAuth secret
AUTH_GOOGLE_ID   — Google OAuth client ID
AUTH_GOOGLE_SECRET — Google OAuth client secret
GEMINI_API_KEY   — Google AI Studio key
DEEPGRAM_API_KEY — Deepgram key
```

## Known Bugs (10)

1. `suggestTimeSlot()` in smart-schedule.ts exists but not wired into UI
2. `UserPreference` model never read/written (timezone, reminders, working hours unused)
3. Google Calendar maxResults capped at 250 (no pagination)
4. ICS parser doesn't handle folded lines (RFC 5545)
5. Token refresh race condition on concurrent requests
6. Voice recording hardcoded to audio/webm (no browser support detection)
7. `router.refresh()` not awaited — rapid clicks can duplicate events
8. Apple Calendar TZID not parsed (assumes UTC)
9. In-memory rate limiter resets on serverless cold starts
10. No recurring event support

## External APIs

| Service | Purpose | Free Tier |
|---------|---------|-----------|
| Supabase | PostgreSQL | 500MB |
| Google OAuth | Auth | Free |
| Google Calendar API | Event CRUD | 1M req/day |
| Gemini 2.5 Flash | Text/image parsing | 15 RPM |
| Deepgram Nova-3 | Voice transcription | $200 credit |
| Apple CalDAV | Apple Calendar sync | Free |
