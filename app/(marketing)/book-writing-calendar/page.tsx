import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book Writing Calendar — How to schedule a book so the draft is finished before the deadline, not after',
  description:
    'A book writing calendar works backward from the submission deadline to place a complete draft date, chapter milestones, a structural edit window, and a copy edit pass before the manuscript leaves your hands. Most books miss deadlines not because writers are slow but because the writing calendar was never built — every week the chapter exists in a vague "I need to write" state rather than a specific "Chapter 4 draft due Friday" state.',
  alternates: { canonical: '/book-writing-calendar' },
  openGraph: {
    title: 'Book Writing Calendar — Momenties',
    description: 'Schedule a book so the draft is finished before the deadline, not after.',
    url: '/book-writing-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Chapter milestones placed at submission, not when writing begins',
    desc: '"Chapter 4 draft complete — Friday, March 14." Chapter milestones placed at the start of the project — not scheduled as you go. Milestones placed at project start give each chapter a fixed due date that creates forward pressure. Milestones scheduled as you go are scheduled after writing falls behind — the new date reflects current pace, not required pace. Chapter due dates placed at project start and rescheduled only when necessary is categorically different from due dates discovered as you approach them.',
  },
  {
    icon: Clock,
    title: 'Complete draft date placed 4 weeks before submission deadline',
    desc: '"Complete draft — 4 weeks before submission deadline." Complete first draft placed 4 weeks before the submission deadline — not the week before. The 4 weeks between complete draft and submission contain: a structural read for argument flow and chapter transitions, a copy edit pass for sentence-level quality, and a final read as a reader rather than a writer. Manuscripts submitted without a structural edit after the draft are structurally different products than ones edited. 4-week gap is the edit window.',
  },
  {
    icon: BarChart3,
    title: 'Weekly word count milestone placed every Monday',
    desc: '"Weekly writing milestone — Monday, 2,000 words." Weekly word count milestone placed as a standing Monday event. Weekly milestone converts the book from a single large project into a 52-week series of small deliverables. Books without weekly milestones are written in sprints and gaps — productive bursts followed by weeks where the manuscript does not move. Weekly milestone not met triggers a catch-up calculation: how many additional words per day to reach the chapter target by Friday.',
  },
  {
    icon: Shield,
    title: 'Beta reader feedback window placed before the structural edit, not after',
    desc: '"Beta reader feedback due — 6 weeks before submission." Beta reader feedback placed 6 weeks before submission — not after the structural edit. Beta readers read the book as readers, not as editors. Their feedback surfaces structural problems — chapters that don&apos;t land, arguments that lose the reader, endings that don&apos;t satisfy — that are best addressed before the structural edit. Beta reader feedback incorporated into the structural edit produces a structurally stronger manuscript. Beta reader feedback after the structural edit is advisory; before, it is actionable.',
  },
]

const BOOK_STEPS = [
  {
    step: 'Place the complete manuscript due date and work backward to place all milestones',
    detail: '"Submission deadline: [date]. Complete draft: [date - 4 weeks]. Structural edit complete: [date - 2 weeks]. Copy edit complete: [date - 1 week]." Every milestone placed on day one, working backward from the submission deadline. Chapter milestones placed between project start and complete draft date divided by chapter count. Working backward establishes what pace is required. Working forward discovers that pace was wrong at the deadline.',
  },
  {
    step: 'Calculate chapter word counts and place chapter milestones',
    detail: '"Chapter 1 — 4,000 words, due [date]. Chapter 2 — 3,500 words, due [date]..." Chapter milestones placed at the start of the project with target word counts. Estimated chapter length allows weekly milestone calculation: 4,000-word chapter over 2 weeks = 400 words/day (5 days/week). Daily word count target derived from chapter milestone gives a concrete daily number — not "I need to write today" but "I need 400 words today to hit the Chapter 1 milestone."',
  },
  {
    step: 'Place weekly writing milestones as standing Monday events',
    detail: '"Monday: weekly writing milestone — [word count target]." Weekly writing milestone placed as a standing recurring Monday event. Monday placement gives the full week to recover from a slow start. Friday milestone placement means a slow Tuesday through Thursday creates a Friday deadline sprint. Weekly milestone written as a cumulative manuscript word count — not "write 2,000 words" but "manuscript at 14,000 words by end of week 7."',
  },
  {
    step: 'Schedule beta readers at project start with feedback due 6 weeks before submission',
    detail: '"Beta reader recruitment: [project start + 2 weeks]. Manuscript to beta readers: [submission - 10 weeks]. Beta reader feedback due: [submission - 6 weeks]." Beta readers scheduled at project start — not when the draft is complete. Beta readers who agree before the draft is done have calendar space for the read window. Beta readers recruited after the draft is done fit the read window into their existing calendar, which compresses the feedback window when their schedule is full.',
  },
  {
    step: 'Place the structural edit window between beta reader feedback and copy edit',
    detail: '"Structural edit window: [beta feedback due] to [structural edit complete]." Structural edit placed as a dedicated 2-week window after beta reader feedback is consolidated. Structural edit covers: chapter order, argument flow, chapter transitions, opening and closing strength, and any structural problem surfaced by beta readers. Structural edit window placed as a protected calendar block — no new writing during this window. Structural edit done on a complete manuscript, not in progress.',
  },
  {
    step: 'Place the copy edit pass as a final read before submission',
    detail: '"Copy edit pass — [submission - 1 week]." Copy edit placed as a dedicated week before submission. Copy edit covers: sentence-level clarity, paragraph transitions, word choice, and consistency. Copy edit done after the structural edit — copy-editing before structural changes means editing sentences that may be cut or moved. Final read as a reader placed 2-3 days before submission: read from start to finish without stopping to edit, noting only things that must change before it leaves your hands.',
  },
]

const BOOK_FAILURES = [
  { failure: 'Writing begins without chapter milestones placed on calendar', consequence: 'Books written without chapter milestones are written in a state where the chapter always exists in a vague "I need to write this" state rather than "Chapter 4 draft is due Friday." The absence of chapter due dates removes the forward pressure that makes weekly progress rates legible. Most authors who miss book deadlines were not slow writers — they lacked a chapter milestone structure that would have revealed pace problems in week 3 rather than week 18.' },
  { failure: 'Complete draft deadline placed the week before submission', consequence: 'A draft completed the week before submission has no structural edit window and no copy edit pass. Manuscripts submitted without structural editing after the draft have a different argument structure than ones that went through a structural edit. Structural editing is not the same as proofreading — it addresses whether chapters are in the right order, whether the book&apos;s argument is coherent, and whether the reader is served by the current structure. That work requires time the week-before schedule does not contain.' },
  { failure: 'Beta reader window scheduled after the draft is complete rather than at project start', consequence: 'Beta readers recruited after the draft is done fit the read into their existing calendar. Available beta reader time after a draft is complete is whatever happens to be open in their schedule — typically 3-4 weeks. Beta readers recruited at project start have confirmed time available 10 weeks before submission. Confirmed time produces earlier feedback. Earlier feedback is structural feedback that can be incorporated into the structural edit rather than noted after it.' },
  { failure: 'Daily writing not tracked — only the deadline is visible', consequence: 'Books written without daily or weekly word count milestones have a deadline and a blank calendar between today and that deadline. The blank calendar does not reveal whether current pace produces the manuscript before the deadline. Weekly milestone tracking converts the blank interval into a series of checkable milestones that reveal pace problems 12 weeks before the deadline rather than 2 weeks before. The book with a deadline and no milestones is managed by anxiety. The book with weekly milestones is managed by data.' },
]

export default function BookWritingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Writing Calendar"
        title={
          <>
            Draft complete before the deadline.
            <br />
            <em className="not-italic text-gold">Structural edit done. Beta feedback incorporated.</em>
          </>
        }
        lede="Most books miss deadlines not because writers are slow but because the writing calendar was never built. A book writing calendar works backward from the submission deadline to place a complete draft date 4 weeks early, distributes chapter milestones across the writing window, places weekly word count milestones as standing Monday events, schedules beta readers at project start rather than when the draft is done, and protects the structural edit window before copy editing — so the manuscript that leaves your hands has been edited, not just finished."
        crumbs={[{ label: 'Book Writing Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/writers"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for writers
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures book writing so deadlines are met and manuscripts are edited.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Six steps</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a book writing calendar where the draft is done before the deadline and the manuscript has been edited.</h2>
          </Reveal>
          <div className="space-y-3">
            {BOOK_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-6 shrink-0 pt-0.5 text-center">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">{item.step}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Common failures</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four book writing patterns that produce missed deadlines and unedited manuscripts.</h2>
          </Reveal>
          <div className="space-y-3">
            {BOOK_FAILURES.map((item, i) => (
              <Reveal key={item.failure} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <h3 className="text-sm font-medium text-foreground mb-1">{item.failure}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.consequence}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Book writing analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for book writing discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Weekly word count milestone completion rate',
                'Chapter milestone completion vs. project timeline',
                'Cumulative manuscript word count vs. required pace',
                'Beta reader feedback received by target date',
                'Structural edit window completion before copy edit',
                'Days between complete draft and submission',
                'Writing days per week (actual vs. planned)',
                'Chapter average word count vs. estimated',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Draft complete before the deadline."
        subtitle="Chapter milestones, weekly word count tracking, beta reader scheduling, structural edit window, and copy edit pass. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for writers', href: '/for/writers' }}
      />
    </>
  )
}
