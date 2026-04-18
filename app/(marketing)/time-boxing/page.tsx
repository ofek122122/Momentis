import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Time Boxing — Schedule every task in a fixed time box and get more done',
  description:
    'Time boxing assigns fixed durations to tasks on the calendar rather than working until done. The fixed container focuses effort, prevents tasks from expanding infinitely, and makes the day\'s work visible before it starts. Here\'s how to build a time-boxed calendar.',
  alternates: { canonical: '/time-boxing' },
  openGraph: {
    title: 'Time Boxing — Momenties',
    description: 'Fixed-duration task scheduling that makes every work block focused and finite.',
    url: '/time-boxing',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Clock,
    title: 'Fixed container prevents scope creep',
    desc: 'Parkinson\'s Law: work expands to fill available time. A task with no time box takes as long as however much time you have. A task with a 90-minute box gets done in 90 minutes. The fixed container creates urgency, focus, and a defined stopping point.',
  },
  {
    icon: Shield,
    title: 'Day planned before it starts',
    desc: 'Time boxing requires placing tasks on the calendar as specific blocks before the day begins. The result: a day planned in advance, with every hour accounted for. Compare this to a to-do list — you\'ll know which tasks are on the calendar and which are aspirational.',
  },
  {
    icon: BarChart3,
    title: 'Time box analytics reveal estimation accuracy',
    desc: 'Tag events by task type and intended vs. actual duration. Analytics shows average estimation accuracy. Which task types take longer than boxed? Which tasks consistently complete early? The data calibrates future boxes to be more accurate.',
  },
  {
    icon: Zap,
    title: 'Overflow box for incomplete tasks',
    desc: 'When a time box ends, the task either finishes or continues in an explicitly rescheduled box. No invisible overflow. "Review document — continued, wednesday 2pm." The continuation is on the calendar, visible and committed. Nothing silently runs over.',
  },
]

const BOX_SIZES = [
  {
    size: '15–30 minutes',
    best_for: 'Email processing, quick responses, short reviews, daily check-ins',
    tips: 'Use for communication batches and admin tasks. Short boxes for short tasks — don\'t give email an hour.',
  },
  {
    size: '60 minutes',
    best_for: 'Meetings, structured analysis, writing first drafts, code reviews',
    tips: 'Standard meeting length. Good for focused collaborative work and structured single-topic analysis.',
  },
  {
    size: '90 minutes',
    best_for: 'Deep work sessions, complex analysis, writing, design, coding',
    tips: 'Matches natural ultradian rhythm (90-min focus cycles). The ideal deep work box before a break.',
  },
  {
    size: '2–3 hours',
    best_for: 'Creative projects, complex deliverables, major writing or design sessions',
    tips: 'For work requiring extended focus. Protect with a hard boundary before and after. Use sparingly.',
  },
]

const BOXING_STEPS = [
  { step: '1', title: 'Plan the day the night before', detail: 'Place every task on the calendar with a fixed duration before the workday begins. An unboxed task is an unplanned task. The plan may change, but you start with a complete, intentional day — not an empty calendar and a to-do list.' },
  { step: '2', title: 'Match box size to task complexity', detail: 'Email gets 30 minutes, not two hours. Deep work gets 90 minutes, not 20. Calibrating box size to task type is a skill that improves with data. Analytics will show your estimation accuracy — use it.' },
  { step: '3', title: 'Stop when the box ends', detail: 'The discipline of time boxing is stopping when the box ends. Not "five more minutes," not "I\'m almost done." The box ends, the task pauses or completes. An overflow continuation is scheduled explicitly. This is the hard part.' },
  { step: '4', title: 'Schedule the box explicitly', detail: 'A time box in your head is not a time box. It must be on the calendar with a start time, end time, and a clear task label. "Review Q3 report — 2pm-3:30pm." Visible, committed, and protected from other bookings.' },
  { step: '5', title: 'Review and calibrate weekly', detail: 'Once a week, review box accuracy. Which tasks regularly overflow their box? Which complete early? Adjust future box sizes based on historical data, not optimism. Over time, your day becomes more accurately planned.' },
]

export default function TimeBoxingPage() {
  return (
    <>
      <PageHero
        eyebrow="Time Boxing"
        title={
          <>
            Fixed time.
            <br />
            <em className="not-italic text-gold">Focused work.</em>
          </>
        }
        lede="Time boxing assigns a fixed duration to every task before you start working on it. The container creates focus, prevents scope creep, and makes the day's work visible before it starts. Without a box, work expands. With a box, work fits. Here's how to build a time-boxed calendar that makes every hour count."
        crumbs={[{ label: 'Time Boxing' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/time-blocking"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Time blocking guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports time boxing.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Box size guide</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How long should a time box be?</h2>
          </Reveal>
          <div className="space-y-3">
            {BOX_SIZES.map((box, i) => (
              <Reveal key={box.size} delay={i * 50}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-sm font-medium text-foreground">{box.size}</h3>
                  </div>
                  <p className="text-xs text-foreground/80 mb-2">{box.best_for}</p>
                  <p className="text-xs text-muted-foreground italic">{box.tips}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Five steps</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a time-boxed calendar system.</h2>
          </Reveal>
          <div className="space-y-3">
            {BOXING_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-5">
                  <span className="font-mono text-lg font-bold text-gold/40 w-8 shrink-0 leading-tight">{item.step}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1.5">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Time box analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for time boxing.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Box estimation accuracy by task type',
                'Tasks completed within box vs. overflow',
                'Average box size per day',
                'Time boxed vs. unstructured per week',
                'Overflow frequency by task category',
                'Day planning completion rate (boxes set night before)',
                'Weekly time boxed trend over time',
                'Box adherence — stop on time rate',
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
        title="Every task boxed. Every hour planned. Work done."
        subtitle="Time-boxed scheduling, estimation analytics, and day planning. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Time blocking guide', href: '/time-blocking' }}
      />
    </>
  )
}
