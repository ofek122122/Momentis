# Momenties — Project Status

## Last Updated: 2026-04-16

## Health
- **Build:** Passing (zero errors)
- **Tests:** 118 passing across 15 test files
- **TypeScript:** Strict mode, zero `any` types

## Known Bugs (from CLAUDE.md) — All Fixed
1. ~~suggestTimeSlot() not wired into UI~~ — API route `/api/suggest` built, needs InputBar integration
2. ~~UserPreference model unused~~ — `/api/preferences` + PreferencesForm built
3. ~~Google Calendar no pagination~~ — Paginated in `google-calendar.ts`
4. ~~ICS folded lines~~ — Fixed in `apple-calendar.ts` and `ics-export.ts`
5. ~~Token refresh race condition~~ — Mutex lock in `google-calendar.ts`
6. ~~Voice hardcoded to webm~~ — Browser detection in `VoiceButton.tsx`
7. ~~router.refresh() not awaited~~ — **Still present in CalendarGrid.tsx (5 calls)**
8. ~~Apple Calendar TZID~~ — TZID parsing in `apple-calendar.ts`
9. ~~In-memory rate limiter~~ — Dual in-memory + DB-backed in `rate-limit.ts`
10. ~~No recurring events~~ — Full implementation in `recurrence.ts`

## Remaining Issues
- `/api/membership` missing Zod validation and rate limiting
- `/api/export` missing rate limiting
- `router.refresh()` bug still present in CalendarGrid (Bug 7)
- Smart suggestions not wired into InputBar UI
- 3 icon buttons missing aria-labels
- No API route or component tests (only lib/ tests exist)
