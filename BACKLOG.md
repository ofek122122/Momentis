# Calendro — Backlog

## P0 — Security & Data Integrity

- [x] SEC-001: Add Zod validation to `/api/membership` POST endpoint
- [x] SEC-002: Add rate limiting to `/api/membership` POST endpoint
- [x] SEC-003: Add rate limiting to `/api/export` GET endpoint

## P1 — High Priority Bugs

- [x] BUG-007: Fix `router.refresh()` in CalendarGrid — replaced with useTransition + optimistic updates to prevent duplicate events on rapid clicks

## P2 — Feature Completeness

- [ ] FEAT-001: Wire `suggestTimeSlot` into InputBar UI — when user input has no explicit time, offer AI-suggested time slots

## P3 — Accessibility

- [x] A11Y-001: Add missing aria-labels to icon buttons in DailyBriefing, FocusMode, and EventTemplates

## P4 — Test Coverage

- [ ] TEST-001: Add API route tests for `/api/events` (POST, PATCH, DELETE)
- [ ] TEST-002: Add API route tests for `/api/voice`, `/api/image`, `/api/export`
- [ ] TEST-003: Add API route tests for `/api/membership`, `/api/preferences`, `/api/search`

## P5–P7 — Reserved

(No items currently)

## P8 — Self-Directed Ideas

(Ideas will be added here as P0–P7 tasks are completed)
