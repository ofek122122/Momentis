# PROJECT_STATUS.md — Calendro

## Current State (as of this Ralph loop start)

**Version:** Post-Phase 5 polish complete
**Tests:** 76 passing across 12 test files
**Build:** Zero errors
**Branch:** main

## What's Built

### Pages
- `/` — Landing page with hero, features, CTA, footer
- `/login` — Google OAuth sign-in
- `/calendar` — Month/Week/Day calendar views
- `/settings` — Profile, connections, preferences, themes, templates
- `/pricing` — Free vs Pro comparison
- `/analytics` — Category breakdown, stats, productivity (Pro-gated)
- `/privacy`, `/terms` — Legal pages
- `/onboarding` — 4-step new user wizard

### Features
- Text/voice/image event creation with AI parsing
- Recurring events (RRULE), conflict detection, reminders
- Google Calendar + Apple Calendar sync, ICS import/export
- Pro membership system, feature gates, pricing page
- 5 color themes, theme picker
- AI Daily Briefing, Focus Mode with Pomodoro, Habit Tracker
- Time Zone Buddy, Notification bell, Cmd+K search
- Mobile bottom nav, full-screen sheets, safe areas
- SEO meta tags, Open Graph, PWA, security headers

### Infrastructure
- Zod validation on all APIs
- DB-backed rate limiting (Prisma RateLimit model)
- Structured JSON logging
- 76 tests, zero build errors

## Tech Stack

Next.js 16.2.2 · TypeScript 5 strict · React 19 · Tailwind CSS 4 · shadcn/ui · NextAuth v5 · Prisma 7 · Supabase · Gemini 2.5 Flash · Deepgram Nova-3 · chrono-node · tsdav · googleapis · Zod · Vitest 4

## Design System

- Background `#0c0c0f`, cards `#131318`, text `#f0ece3`, accent gold `#c5a35c`
- Borders `rgba(255,255,255,0.07)`, muted `#8b8b8b`
- Fonts: Playfair Display (display), DM Sans (body), JetBrains Mono (mono)
- Always dark mode (except Clean White Pro theme)

## Commands

```bash
npm run dev           # http://localhost:3000
npm run build         # Production build — must pass with zero errors
npm run test:run      # All 76+ tests — all must pass
npm run test          # Watch mode
npx prisma db push    # Sync schema to Supabase
npx prisma generate   # Regen Prisma client
```