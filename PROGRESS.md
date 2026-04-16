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
