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

### Iteration 16
- **Task:** Build `/launch-week-1` — a Raycast / Linear-style launch week recap page.
- **Status:** Completed
- **Summary:** Added `lib/launch-week.ts` with 5 days of shipped features (smarter hybrid parser, voice in 28 languages, image parser 2.0, keyboard kit + command palette, workspaces + SSO), each with icon, tone, 3 shipped items, per-day stats, and a team or user quote. Built `app/(marketing)/launch-week-1/page.tsx` with an immersive gradient hero, sticky-style day navigation grid, alternating-band day sections with oversized numeral, scroll-reveal shipped-item cards, per-day stats strip, featured quote of the week, subscribe-for-next-launch hookup using the NewsletterForm, and a closing CTA. Colored tone per day (gold/violet/emerald/sky/rose) via a TONE_CLASSES map. Linked from site header (Resources), footer (Resources, badged "New"), HTML sitemap, and sitemap.xml. Build clean.

### Iteration 17
- **Task:** Build `/method` — an essay-style "how we work" page as the execution companion to `/manifesto`.
- **Status:** Completed
- **Summary:** Built `app/(marketing)/method/page.tsx` as a long-form essay with four numbered sections (Decide, Write, Ship, Measure), each with italic lede + 3 paragraphs + 3 principle cards. Also added: weekly cadence strip (5-day grid with Mon/Tue/Wed/Thu/Fri and short notes), "a small stack used deliberately" tool list (6 items), an anti-method section with rose-accent header listing six things we deliberately don't do, and a signed-by-the-team closing quote. Alternating-band layout, icons per section (Compass / PenLine / Ship / LineChart), scroll-reveal. Linked from header (Company), footer (Company), HTML sitemap, and sitemap.xml. Build clean.

### Iteration 18
- **Task:** Build `/uses` — a hand-crafted founder "what I use" page.
- **Status:** Completed
- **Summary:** Added `lib/uses.ts` with two founder setups (Iris Koval — Design, Oren Weiss — AI & Engineering), each with a 2-paragraph personal essay and three categorized item lists (Hardware, Software, Desk & Ritual) with 'since' year badges. Also added a shared team stack (Team tools + Research & writing), a six-book reading shelf, and four rotating monthly additions (Apr 2026 Kaweco Sport, Mar 2026 Ghostty, Feb 2026 Lamy 2000, Jan 2026 BenQ ScreenBar Halo). Built `app/(marketing)/uses/page.tsx` with a quiet hero, per-founder workspace blocks featuring a monogram portrait card and alternating bands, divider-style item rows with italic notes, a two-column shared-stack grid, a numbered ordered-list reading shelf, rotating-items cards, and a pinned-above-the-door closing quote. Linked from header (Company), footer (Company), HTML sitemap, and sitemap.xml. Build clean.

### Iteration 19
- **Task:** Build `/labs` — a transparency-first beta-features page with active / graduated / retired sections.
- **Status:** Completed
- **Summary:** Added `lib/labs.ts` with 5 active experiments (conversational parser, calendar memory, location-aware suggestions, Calendro CLI, handwriting-first image parser), 4 graduated features (voice Nova-3, command palette, templates, workspaces), and 3 deliberately retired features with reasoning (AI advisor, public shareable calendars, webhook relay). Built `app/(marketing)/labs/page.tsx` with a 4-stat hero strip, a 2-col grid of active-experiment cards each showing status dot (planning/testing/ready tone), progress bar, lead/ships/testers/risk meta, and an opt-in link; a numbered ordered list of graduated features with emerald accent; a 3-col grid of retired features with rose accent + explicit "why we killed it" rationale; a three-way opt-in block (Settings → Labs, CLI command, forum & email), and a gold "Labs promise" callout (no silent defaults, no training on lab data, 30-day data deletion on opt-out, rollback-before-fix). Linked from header (Resources), footer (Resources, badged "Beta"), HTML sitemap, and sitemap.xml. Build clean.

### Iteration 20
- **Task:** Build `/pricing/calculator` — an interactive ROI calculator with transparent methodology.
- **Status:** Completed
- **Summary:** Built a client `ROICalculator` component with three range sliders (hours/week, loaded hourly cost, team size) and four live-updating output tiles (hours saved/year, dollars saved/year, ROI multiple, payback period). Calculation combines a defensible 22% context-switch reduction with a 9 min/week tool-consolidation saving, over a 47-week year. Auto-selects Pro / Team / Enterprise plan based on team size and surfaces a plan-specific CTA. Added custom-styled gold range sliders to globals.css. Built `app/(marketing)/pricing/calculator/page.tsx` with hero, calculator card (2-column: inputs + outputs), a 3-card real-world proof strip with metric + quote + customer, a 4-point Methodology section explaining the assumptions on purpose, an inline formula callout, and a 3-column plan comparison grid with Pro/Team/Enterprise features and CTAs. Linked from header (Product), footer (Product), HTML sitemap, and sitemap.xml. Build clean.

### Iteration 21
- **Task:** Build `/podcast` — "The Quiet Hours", a Calendro-produced podcast landing.
- **Status:** Completed
- **Summary:** Added `lib/podcast.ts` with 8 season-1 episodes (Mei Lin on quiet software, Pauline Rivera on hiring, Oren on the hybrid parser, Isabelle Moreau on typography, Tomás Levi on the walk-home ritual, Iris on the manifesto, Jonas Berg on notebooks, and the pilot), each with guest, role, teaser, 4–5 chapter markers, duration, publish date, and a color-tagged category (Design/Engineering/Writing/Business/Life). Built `app/(marketing)/podcast/page.tsx` with a hero, featured episode card (3-column: artwork + title/chapters), a 6-platform "listen on" strip (Apple Podcasts, Spotify, Overcast, Pocket Casts, YouTube Music, RSS), a divider-style episode list with oversized numerals + color tag + chapter count + play-affordance hover, an About-the-show + host-bio block, a "Season 2" newsletter hook, and a closing CTA. Linked from header (Resources), footer (Resources), HTML sitemap, and sitemap.xml. Build clean.

### Iteration 22
- **Task:** Build `/switch` — a consolidated migration landing aggregating competitors and importers.
- **Status:** Completed
- **Summary:** Built `app/(marketing)/switch/page.tsx` with: 4-stat hero strip (median migration time 8 min, 94% self-serve rate, 5 concierge slots/week, no lock-in); a 4-card grid of "switching from" comparisons sourced from `lib/competitors.ts` (Google, Calendly, Notion, Superhuman) that link to each full `/compare/[slug]`; a 4-card direct-importer grid for Apple (CalDAV), Outlook (Graph), Fantastical (.ics), and any .ics file; a 5-step migration timeline rendered as a border-left anchored ordered list with per-step minute badge; a Keep / Gain / Leave-behind accounting table (5 rows across 4 columns with emerald/gold/rose accent headers); an Enterprise concierge section with 6-item checklist and gold-bordered panel (60-min migration call, bulk .ics imports, SSO config, 5-user pilot, 30-day white-glove); a 5-Q migration FAQ using `<details>` with rotating icon; and a closing CTA. Linked from header (Product), footer (Product), HTML sitemap, and sitemap.xml. Build clean.

### Iteration 23
- **Task:** Build `/podcast/[slug]` — 8 individual podcast episode detail pages prerendered via `generateStaticParams`.
- **Status:** Completed
- **Summary:** Added `lib/podcast-details.ts` with per-episode extension data for all 8 season-1 episodes: 2–3 pull-quote highlights with timecode deep-links, a 3-paragraph summary (not a full transcript, by design), a recording location, and 2 related-episode slugs. Built `app/(marketing)/podcast/[slug]/page.tsx` with: per-episode breadcrumbs + metadata + OG/Twitter tags; hero with color-tagged category, guest + role + duration + published date + recording location, italic teaser, and a disabled play affordance; a 3-card highlights grid with jump-to timecode; a 2-column layout with summary paragraphs + a sticky sidebar containing chapters list, "listen on" platform pills, and RSS link; a 2-card related-episodes grid using the related slugs; prev/next navigation; a Season-2 newsletter sign-up; and a closing CTA. Made the `/podcast` index episode list clickable (links to detail pages). Added episodes to sitemap.xml via generateStaticParams. Build clean, all 8 routes prerendered as static.

### Iteration 24
- **Task:** Build `/year-in-review` — a premium 2026 annual report synthesizing the year.
- **Status:** Completed
- **Summary:** Added `lib/year-in-review.ts` with 6 headline stats (1.82M events parsed, 312k voice dictations, 48k photos parsed, 37 countries, 1,204 workspaces, 594 labs testers), 12 monthly moments (Jan: manifesto published, Feb: templates, Mar: AI advisor killed, Apr: Launch Week 01, May: CLI beta, Jun: 50k WAU, Jul: podcast pilot, Aug: method written, Sep: workspaces to Enterprise, Oct: LW2 planned, Nov: first hire, Dec: paused), 26 shipped features across 3 categories (Everyone / Developers / Teams), 3 deliberate deletions with rationale, 6 specific thank-yous, and a 6-line 2027 shortlist. Built `app/(marketing)/year-in-review/page.tsx` with: oversized 2026 numeral hero, 6-stat headline strip (grid with per-stat icon + contextual note), a 12-item border-left timeline with tonally colored month icons + oversized month number watermark + link-out per moment, a 3-column "what we built" grid with 26 Check-bulleted items, a 3-card deliberate-deletions section with rose accent, a numbered 6-thank-you divider list plus a blanket thank-you note, a numbered 6-line 2027 shortlist, and a gold-bordered founder-signed pullquote. Linked from header (Resources), footer (Resources), HTML sitemap, and sitemap.xml. Build clean, prerendered static.
