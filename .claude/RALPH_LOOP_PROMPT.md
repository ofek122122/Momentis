You are running inside a Ralph loop. Each iteration you have a fresh context. Your job is to pick ONE task from the backlog, complete it fully, and commit. Then this iteration ends and a fresh one starts.
 
**IMPORTANT: This loop is designed to NEVER stop on its own. When the predefined backlog runs out, you move into self-directed mode where you invent new features yourself.**
 
## Step 1 — Load context
 
Read these files in order:
1. `CLAUDE.md` — project context, tech stack, design system, coding conventions
2. `PROJECT_STATUS.md` — current state of the project
3. `BACKLOG.md` — task backlog (source of truth)
4. `PROGRESS.md` — log of what previous iterations completed
## Step 2 — Pick or generate a task
 
### If there are any `[ ]` or `[~]` tasks in P0-P7:
 
Pick the FIRST task marked `[ ]` in priority order (P0 → P1 → P2 → P3 → P4 → P5 → P6 → P7). If a `[~]` task exists (leftover from a previous iteration), pick that one instead.
 
Mark it `[~]` in BACKLOG.md before starting work.
 
### If ALL P0-P7 tasks are `[x]` or `[SKIP]`:
 
Enter **SELF-DIRECTED MODE** (P8). Do NOT stop the loop. Instead:
 
1. Read the entire BACKLOG.md and PROGRESS.md to know what's been built.
2. Think hard about what Momenties is missing. Consider: user delight, retention, monetization, virality, competitive edge, workflow depth, polish. Look at the inspiration buckets in P8.
3. Invent ONE new feature or improvement. It should be:
   - Genuinely valuable to users (not filler)
   - Shippable and polished in one iteration (not a massive multi-day project)
   - Different from what's already built (rotate through inspiration buckets)
   - On-brand with the dark luxury-minimal aesthetic
4. Add it to the P8 section of BACKLOG.md as a new `IDEA-XXX` task with a Why and What description.
5. Mark it `[~]` and proceed.
## Step 3 — Do the work
 
Complete the task fully. Follow all conventions in CLAUDE.md:
- TypeScript strict, no `any`, no `@ts-ignore`
- Match the dark luxury-minimal design system exactly
- Zod validation on every API input
- Auth check + rate limiting on every API route
- Server Components for data fetching, `'use client'` only for interactivity
- Write tests for any logic or UI change
- Accessibility (ARIA, keyboard nav, focus management)
- Mobile-first responsive
If a task is ambiguous, make the best decision yourself. Do NOT ask questions.
 
If you discover new bugs, add them as new BUG-XXX entries at the top of P0 in BACKLOG.md.
 
## Step 4 — Quality gates (MUST pass before marking done)
 
Run these. All must pass:
 
```bash
npm run test:run     # All tests must pass
npm run build        # Zero errors
```
 
If either fails, fix the issue before marking the task complete. Never skip or disable failing tests to make them pass.
 
## Step 5 — Update state
 
In `BACKLOG.md`:
- Change the task from `[~]` to `[x]`
- Add a ✅ note on the next line
Example:
```
- [x] **UX-003** — Calendar month view: cap visible chips at 3...
  ✅ Added overflow popover. Capped visible chips at 3, "+N more" button opens popover with hidden events. Added 3 component tests.
```
 
In `PROGRESS.md`, append:
```
## Iteration [N] — [TASK-ID]
 
**Task:** [Title]
**Files changed:** [list]
**Tests added:** [count]
**Notes:** [1-2 sentence summary]
---
```
 
## Step 6 — Commit
 
```
git add -A
git commit -m "{TASK-ID}: {short description}"
```
 
## Step 7 — Exit (loop continues)
 
Output a one-line summary of what you did, then exit. The loop starts a fresh iteration.
 
**DO NOT output `<promise>PROJECT_COMPLETE</promise>` or any completion signal. The loop should never self-terminate. It only stops when the user manually kills it (Ctrl+C) or max-iterations is reached.**
 
## Rules
 
- ONE task per iteration. Do not try to do two tasks at once.
- Do NOT ask questions. Make all decisions yourself.
- Do NOT stop the loop, ever. Even after all predefined tasks are done, keep inventing new ones.
- Do NOT modify `.env.local`, `.git/`, or `prisma/schema.prisma` carelessly.
- Do NOT introduce new dependencies without strong justification.
- Do NOT change design system tokens (colors, fonts, spacing).
- Do NOT skip quality gates.
- Do NOT repeat an IDEA-XXX you've already built.
- If a task is genuinely impossible (requires a paid API you don't have), mark it `[SKIP]` with a reason.
- If you get stuck, leave the task `[~]` with a blocking note. Next iteration will retry.
## Self-Directed Mode Quality Bar
 
When inventing new features in P8:
- Think like a product designer at a $10M startup.
- Every feature must have a clear user-value story.
- Rotate through inspiration buckets — don't build 5 AI features in a row.
- Prefer features that show off well in screenshots (visual, interactive, delightful).
- Pro-tier features are encouraged when they justify the subscription.
- If uncertain whether an idea is good, pick a smaller, more polished version of it instead.
Begin now.
 