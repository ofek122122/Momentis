# BACKLOG.md — Momenties Task Backlog

This is the authoritative task list for the Ralph loop. Each iteration picks ONE task from here, completes it fully, marks it done, and commits. Tasks are ordered by priority within each category.

## How to use this file

- `[ ]` = not started
- `[~]` = in progress (only one task can be in progress at a time)
- `[x]` = complete
- `[SKIP]` = genuinely impossible — include a reason

When picking a task, mark it `[~]`. When done, mark it `[x]` and add a ✅ note on the next line.

---

## P0 — Bug Hunting

- [ ] **BUG-001** — Run the full app in dev mode, click through every page, identify runtime errors in the browser console. Fix each one.
- [ ] **BUG-002** — Run `npm run build` and fix any TypeScript/build warnings (not just errors — warnings too).
- [ ] **BUG-003** — Check every API route for missing error handling. Wrap all async operations in try/catch, return consistent error shapes.
- [ ] **BUG-004** — Audit all forms: required fields marked, validation errors show inline, submit disabled while loading, success feedback on submit.
- [ ] **BUG-005** — Audit all modals/dialogs: focus trap, escape closes, click-outside closes, focus returns to trigger on close.
- [ ] **BUG-006** — Find any `console.log`, `console.error`, or `debugger` statements in production code. Replace with structured logger or remove.
- [ ] **BUG-007** — Audit all `useEffect` hooks for missing cleanup functions (event listeners, intervals, subscriptions).
- [ ] **BUG-008** — Find any unhandled promise rejections. Add `.catch()` or try/catch to every async operation.
- [ ] **BUG-009** — Verify all `Date` operations respect user's timezone from UserPreference (not server timezone or UTC by default).
- [ ] **BUG-010** — Audit drag-and-drop: test at boundaries (first/last day of month, across month boundary), with recurring events, on mobile.

## P1 — Security Hardening

- [ ] **SEC-001** — Audit all API routes for missing auth checks. Every non-public route must verify session.
- [ ] **SEC-002** — Audit all Prisma queries for missing `where: { userId }` clauses. Users must never access another user's data.
- [ ] **SEC-003** — Verify CSP headers don't have `unsafe-inline` or `unsafe-eval` in production. Fix any violations.
- [ ] **SEC-004** — Add CSRF protection on all state-changing API routes (POST/PATCH/DELETE).
- [ ] **SEC-005** — Sanitize all user-generated content before rendering (event titles, descriptions, locations) to prevent XSS.
- [ ] **SEC-006** — Verify rate limits on every API route (parse: 20/min, events: 30/min, image: 5/min, voice: 10/min, search: 60/min).
- [ ] **SEC-007** — Audit image upload: verify magic bytes, max file size, allowed extensions, strip EXIF metadata.
- [ ] **SEC-008** — Audit OAuth flow for open redirect vulnerabilities. All redirect URLs on domain whitelist.
- [ ] **SEC-009** — Verify all secrets come from env vars, never hardcoded. Grep for `sk_`, `api_`, obvious key patterns.
- [ ] **SEC-010** — Add security.txt and robots.txt to /public.

## P2 — Performance

- [ ] **PERF-001** — Run Lighthouse on landing page mentally. Identify and fix issues. Target: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 100.
- [ ] **PERF-002** — Same for calendar page.
- [ ] **PERF-003** — Lazy load the charts on /analytics using dynamic imports — they're heavy.
- [ ] **PERF-004** — Add React.memo to CalendarGrid, EventChip, and other components that re-render frequently.
- [ ] **PERF-005** — Optimize all images in /public: convert PNG to WebP where appropriate, add width/height to prevent layout shift.
- [ ] **PERF-006** — Add `loading="lazy"` to below-the-fold images on landing page.
- [ ] **PERF-007** — Audit bundle size with `next build` output. Investigate any suspiciously large chunks.
- [ ] **PERF-008** — Cache Prisma queries where safe (user preferences, calendar lists). Use Next.js `unstable_cache` or React `cache()`.
- [ ] **PERF-009** — Virtualize the events list in search results and notification dropdown if they grow long.
- [ ] **PERF-010** — Add pagination or infinite scroll to analytics if they fetch >1000 events.

## P3 — UI/UX Polish

- [ ] **UX-001** — Landing page: add a "How it works" section with 3-step visual (type → AI parses → calendar event created).
- [ ] **UX-002** — Landing page: add animated demo showing someone typing "lunch tuesday noon" and seeing the event appear.
- [ ] **UX-003** — Calendar month view: cap visible chips at 3, show "+N more" button that opens a popover with the rest.
- [ ] **UX-004** — Calendar week view: verify current time indicator updates every minute.
- [ ] **UX-005** — Event creation flow: show a success toast with "Undo" button (5 sec window) after creating an event.
- [ ] **UX-006** — Create illustrated empty states for: no events this week, no search results, no notifications, no templates, no habits tracked.
- [ ] **UX-007** — Verify every async component has a skeleton that matches its final layout shape (no layout shift).
- [ ] **UX-008** — Every error message should be friendly, actionable, with a "Try again" button where possible.
- [ ] **UX-009** — Add a "?" modal that shows all available keyboard shortcuts. Press "?" anywhere to open.
- [ ] **UX-010** — Extend Cmd+K command palette beyond search: include quick actions (create event, go to settings, toggle theme, etc).
- [ ] **UX-011** — Add staggered fade-in for calendar events when month loads.
- [ ] **UX-012** — Smooth transition when switching month/week/day views — no jarring layout flash.
- [ ] **UX-013** — Pricing page: add FAQ accordion at bottom with 6-8 common questions.
- [ ] **UX-014** — Pricing page: add testimonials section (use realistic placeholder quotes).
- [ ] **UX-015** — Settings: confirmation dialog before disconnecting a calendar.
- [ ] **UX-016** — Settings: organize into tabs (Account, Calendars, Preferences, Themes, Templates, Billing) to reduce scrolling.
- [ ] **UX-017** — Mobile: verify bottom nav has active state indicator and smooth tab switching.
- [ ] **UX-018** — Mobile: swipe gestures on calendar (swipe left/right to change month/week/day).
- [ ] **UX-019** — Mobile: pull-to-refresh on calendar page.
- [ ] **UX-020** — Verify all toasts consistent (same position, duration, styling). Create a shared Toast component if not already.

## P4 — Accessibility

- [ ] **A11Y-001** — Audit landing page with screen reader lens. Fix missing aria-labels, broken heading hierarchy, unlabeled buttons.
- [ ] **A11Y-002** — Same for calendar page.
- [ ] **A11Y-003** — Verify WCAG AA color contrast: gold on black, muted text on dark, all event colors on dark backgrounds.
- [ ] **A11Y-004** — Every icon-only button needs an aria-label.
- [ ] **A11Y-005** — Every form input needs an associated label (visible or sr-only).
- [ ] **A11Y-006** — Calendar grid must be keyboard navigable with arrow keys.
- [ ] **A11Y-007** — Modals must trap focus and return focus to trigger on close.
- [ ] **A11Y-008** — All interactive elements must have visible focus rings (gold accent ring).
- [ ] **A11Y-009** — Add `prefers-reduced-motion` support — disable heavy animations for users who prefer reduced motion.
- [ ] **A11Y-010** — Every image must have meaningful alt text.

## P5 — Refactoring

- [ ] **REF-001** — Audit for duplicated code. Extract shared logic into hooks or utilities.
- [ ] **REF-002** — Any file in `lib/` over 300 lines should be split by responsibility.
- [ ] **REF-003** — Any component over 200 lines should be split.
- [ ] **REF-004** — Audit all `'use client'` components — move data fetching to server components where possible.
- [ ] **REF-005** — Consolidate all Zod schemas into `lib/validation.ts` or `lib/schemas/`. No schemas defined inline in API routes.
- [ ] **REF-006** — Consolidate all types into `types/` directory. No cross-file type definitions scattered around.
- [ ] **REF-007** — Replace any `any` types with proper types. Use `unknown` if truly unknown.
- [ ] **REF-008** — Replace any `@ts-ignore` or `@ts-expect-error` with proper fixes.
- [ ] **REF-009** — Ensure all API routes return consistent shape: `{ success: boolean, data?: T, error?: { code, message } }`.
- [ ] **REF-010** — User-friendly server error messages — never expose internal details.

## P6 — Test Coverage

- [ ] **TEST-001** — Add tests for every API route that doesn't have them (events, parse, voice, image, apple, search, suggest, membership, preferences).
- [ ] **TEST-002** — Component tests for CalendarGrid (rendering, event click, drag-drop, navigation).
- [ ] **TEST-003** — Component tests for EventDetailDialog (edit flow, delete flow, recurrence controls).
- [ ] **TEST-004** — Component tests for InputBar (text input, voice button state, image upload).
- [ ] **TEST-005** — Tests for RRULE expansion engine with edge cases (leap years, DST transitions, timezone changes).
- [ ] **TEST-006** — Tests for timezone handling across the app.
- [ ] **TEST-007** — Tests for Pro feature gates — verify free users hit the paywall correctly.
- [ ] **TEST-008** — Tests for search filter combinations (color + category + priority + date range).
- [ ] **TEST-009** — Tests for Pomodoro timer state machine (focus → break → long break cycles).
- [ ] **TEST-010** — Raise total test count from 76 to 120+. Report the final count.

## P7 — Planned New Features

- [ ] **FEAT-001** — **Natural language meeting scheduler** — "Find 30 min with me and john@example.com next week" — scans both calendars, suggests slots.
- [ ] **FEAT-002** — **Event attachments** — attach files (PDFs, images, links). Store metadata, link to external files.
- [ ] **FEAT-003** — **Location autocomplete** — when typing a location, suggest addresses via a free geocoding API.
- [ ] **FEAT-004** — **Weather on events** — show weather forecast for events happening in the next 7 days with a location.
- [ ] **FEAT-005** — **Calendar printing** — print-friendly CSS for month view, optional export to PDF.
- [ ] **FEAT-006** — **Event sharing** — generate a shareable link for an event that anyone can view (no account needed).
- [ ] **FEAT-007** — **Integrations page** — `/integrations` showing all connectable services with logos and connect buttons.
- [ ] **FEAT-008** — **Keyboard-first mode** — toggle that hides mouse cursor and shows keyboard hints everywhere.
- [ ] **FEAT-009** — **Weekly review** — Sunday evening prompt: review the past week, plan next week with AI suggestions.
- [ ] **FEAT-010** — **Goal tracking** — set monthly goals, link events to goals, see progress. Integrates with existing Habit Tracker.
- [ ] **FEAT-011** — **Referral system** — "Invite 3 friends, get 1 month Pro free" — generate referral links, track signups.
- [ ] **FEAT-012** — **Shortcuts documentation page** — `/shortcuts` documenting all keyboard shortcuts with searchable list.

---

## P8 — OPEN-ENDED: Self-Directed Improvement Mode

**This section has no predefined tasks. When every task above is `[x]` or `[SKIP]`, do NOT stop the loop. Instead, spend each iteration inventing and building a NEW feature or improvement that makes Momenties more useful, more beautiful, or more monetizable.**

### How to generate a new task in this section

At the start of an iteration (after all P0-P7 tasks are complete), do this:

1. Read the entire BACKLOG.md and PROGRESS.md so you know what's been built.
2. Think deeply about what Momenties is missing. Consider these angles:
   - **User delight** — what would make users say "wow"?
   - **Retention** — what would make users open the app every day?
   - **Monetization** — what new Pro feature would justify the subscription?
   - **Virality** — what would make users tell their friends?
   - **Competitive edge** — what does Google Calendar / Fantastical / Cron / Notion Calendar NOT have?
   - **Workflow depth** — what power-user feature would delight prosumers?
   - **Polish** — what subtle detail would elevate the whole product?
3. Pick ONE new feature/improvement idea. Write it as a new task in this section using the format below.
4. Mark it `[~]` and implement it.
5. When done, mark `[x]` with a ✅ note describing what was built and why.

### Task format for self-generated tasks

```
- [x] **IDEA-XXX** — [Short title]
  **Why:** [One sentence on user value]
  **What:** [What was built]
  ✅ [Built summary, files changed, tests added]
```

### Rules for self-directed mode

- Stay within the current tech stack. Don't add new major dependencies without strong justification.
- Stay within the design system. Gold on black, Playfair Display + DM Sans, dark luxury-minimal.
- Every new feature must include tests.
- Every new feature must work on mobile.
- Pro-tier features are encouraged (with proper feature gates).
- Prefer features that are SHIPPABLE and POLISHED in one iteration over massive features that would need 5 iterations.
- If you come up with an idea that's too big for one iteration, break it down — do the smallest valuable version first, add a follow-up IDEA-XXX task for expansion.
- Do NOT repeat an idea that's already in the backlog or completed.
- Do NOT stop. Keep generating ideas forever until the loop is manually stopped or max-iterations is reached.

### Inspiration buckets (pick from different angles to avoid repetition)

- **Productivity features** — batch editing, quick capture, templates expansion, bulk actions
- **AI features** — AI assistant chat, email-to-calendar, smart descriptions, auto-categorization
- **Social features** — shared calendars evolution, team scheduling, availability links (Calendly-style)
- **Data features** — import from other calendars (Outlook, Notion, Apple Reminders), export formats
- **Visualization** — timeline view, year view, quarter view, Gantt view, agenda view
- **Reminders & focus** — smart reminders, location-based reminders, travel time estimates
- **Integrations** — Zapier-style webhook/automation system, Slack status sync, Spotify focus playlists
- **Customization** — custom event colors beyond the 9, custom fonts for Pro, layout density options
- **Analytics depth** — meeting load trends, time-of-day patterns, "energy" tracking
- **Onboarding/growth** — public template gallery, shareable calendar themes, public event pages
- **Accessibility deep dive** — voice control commands, high-contrast mode, dyslexia-friendly font option
- **Power user** — URL protocol handler (momenties://), Raycast-style launcher, CLI companion
- **Monetization** — team plans, annual discount, gift Pro, lifetime license page

Rotate through these buckets — don't build 5 AI features in a row. Variety keeps the product well-rounded.

---

## Notes for every iteration

- Read PROJECT_STATUS.md and CLAUDE.md first.
- Pick ONE task. Do it fully.
- Quality gates: `npm run test:run` AND `npm run build` must pass before marking `[x]`.
- If a task reveals a new bug, add a new BUG-XXX entry at the top of P0.
- Commit with message: `{TASK-ID}: {short description}`
- Update PROGRESS.md with a short entry per iteration.
- After P0-P7 are done, move to P8 and generate your own tasks — forever.