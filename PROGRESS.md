# Calendro — Progress Log

## 2026-04-16

### Iteration 1
- **Task:** Project audit and backlog creation
- **Status:** Completed
- **Summary:** Audited entire codebase. All 10 original bugs are fixed. Created BACKLOG.md, PROGRESS.md, PROJECT_STATUS.md. Identified 9 remaining tasks across security (3), bugs (1), features (1), accessibility (1), and testing (3).

### Iteration 2
- **Task:** SEC-001, SEC-002, SEC-003 — API security hardening
- **Status:** Completed
- **Summary:** Added Zod validation schema (`membershipActionSchema`) and rate limiting to `/api/membership` POST. Added rate limiting to `/api/export` GET. Added structured logging for auth failures and rate limit hits on both routes. 76 tests pass, build clean.

### Iteration 3
- **Task:** BUG-007 — Fix router.refresh() in CalendarGrid
- **Status:** Completed
- **Summary:** Replaced 5 fire-and-forget `router.refresh()` calls with `useTransition`-wrapped refresh. Added `isRefreshing` guard to all handlers alongside `busy`. Implemented full optimistic updates: saves show updated event instantly, deletes hide event instantly, drag-drop moves event instantly, creates show temp event. Optimistic state clears automatically when server data arrives via transition completion. 76 tests pass, build clean.

### Iteration 4
- **Task:** A11Y-001 — Add missing aria-labels
- **Status:** Completed
- **Summary:** Added aria-labels to: DailyBriefing expand/collapse button (with aria-expanded), FocusMode expand button and reset timer buttons, EventTemplates new/cancel button and delete template buttons. 76 tests pass, build clean.

### Iteration 5
- **Task:** FEAT-001 — Wire suggestTimeSlot into InputBar UI
- **Status:** Completed
- **Summary:** Added `hasVagueTime` detector (extracted to `lib/parser/vague-time.ts`). After parse, if time is vague (midnight/9am), InputBar auto-fetches `/api/suggest` for smart AI time slots. EventPreviewCard now shows gold-accented suggestion cards with "Use this" action. Users can accept a suggestion to replace the parsed time. Added 7 tests for vague time detection. 83 tests pass, build clean.

### Iteration 6
- **Task:** TEST-001/002/003 — API route schema tests
- **Status:** Completed
- **Summary:** Added `api-schemas.test.ts` with 29 tests covering: updateEventSchema (10 tests: valid updates, invalid categories/colors/priorities, nullable fields, length limits), membershipActionSchema (5 tests: valid/invalid actions, missing/empty/non-string), searchSchema (5 tests: valid queries, filters, empty/missing/long queries), updatePrefsSchema (9 tests: valid preferences, time format validation, range limits, optional fields). 112 tests pass, build clean.

### Iteration 7 (P8 Self-Directed)
- **Task:** IDEA-001 — Keyboard shortcuts help overlay
- **Status:** Completed
- **Summary:** Created `KeyboardShortcuts.tsx` — press `?` to toggle a dark luxury-styled overlay showing all keyboard shortcuts organized by category (Navigation, Views, Actions, Calendar). Features gold accent, kbd elements, backdrop blur, smooth animation. Added to calendar page. 6 tests for shortcut configuration. 118 tests pass, build clean.

## 2026-04-18

### Iteration 14
- **Task:** Wire contact + newsletter forms to real server actions, and build `/wall-of-love` page.
- **Status:** Completed
- **Summary:** (a) Added `app/(marketing)/_actions/contact.ts` and `newsletter.ts` — Zod-validated server actions with IP-scoped rate limiting, honeypot fields, and structured logging. Refactored `ContactForm` to `useTransition` with field-level error surfacing; extracted a shared `NewsletterForm` used by footer and blog. (b) Built `/wall-of-love` — a curated filterable masonry of 24 testimonials across 8 role categories (founders, designers, engineers, operators, freelancers, writers, students, parents), each with source badge (X / LinkedIn / email / review / call), featured ring, sticky filter chips, latest-three highlights, and a 4-stat hero metrics row. Linked from site header, footer, HTML sitemap, and sitemap.xml. Added `.no-scrollbar` utility to globals. 118 tests pass, build clean.

### Iteration 15
- **Task:** Build `/learn` — a premium learning hub in the Linear / Notion style.
- **Status:** Completed
- **Summary:** Added `lib/learn.ts` with 4 tracks (Quickstart 7m, Voice 10m, AI 15m, Power User 30m), 13 lessons across read/try/watch kinds, and 3 curated learning paths (brand-new-to-Calendro, founder-workflow, ops-and-chief-of-staff). Built `app/(marketing)/learn/page.tsx` with: hero + 4-stat strip, track overview cards (icon + tag + lesson preview), a 13-card lesson grid with scroll-reveal and new/popular/short badges, a curated-paths section with numbered ordered list and per-lesson minute/kind metadata, and a manifesto pullquote. Linked from site header (Resources), footer (Resources, badged "New"), HTML sitemap, and sitemap.xml. Build clean.
