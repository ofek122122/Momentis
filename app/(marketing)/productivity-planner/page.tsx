import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Sun, Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Productivity Planner — The calendar-based planning system that actually works',
  description:
    'A productivity planner built on your calendar is one you\'ll actually use. Momenties combines daily planning, weekly review, time analytics, and focus protection into a single system — all driven by your real schedule.',
  alternates: { canonical: '/productivity-planner' },
  openGraph: {
    title: 'Productivity Planner — Momenties',
    description: 'Daily planning, weekly review, and time analytics in one calendar.',
    url: '/productivity-planner',
    type: 'website',
  },
}

const PLANNER_FEATURES = [
  {
    icon: Sun,
    title: 'Daily planning with the Daily Brief',
    desc: 'Every morning: a 60-second view of the day\'s schedule, upcoming deadlines, and blocked time. See what the day holds before the inbox does. Plan adjustments in real time, not in retrospect.',
  },
  {
    icon: BarChart3,
    title: 'Weekly review driven by data',
    desc: 'What did you plan? What actually happened? Analytics shows the delta. Time by category, meeting load, focus hours completed. The review is grounded in what the calendar recorded, not what you remember.',
  },
  {
    icon: Shield,
    title: 'Focus time built into the plan',
    desc: 'Effective planning puts deep work on the calendar before meetings fill the day. Block focus time at plan time. Focus mode protects it when the day arrives. Plan and execution are connected.',
  },
  {
    icon: Zap,
    title: 'Plan from any context',
    desc: 'Voice-add next week\'s priorities while commuting. Type "deep work block monday 9am 3 hours." Photo-import a printed schedule. The planning input is as fast as the thought that precedes it.',
  },
]

const PLANNING_RITUAL = [
  {
    phase: 'Sunday evening (10 minutes)',
    steps: [
      'Open weekly analytics: what happened last week?',
      'Review next week\'s fixed commitments',
      'Block deep work for the 2-3 highest-priority projects',
      'Block protected personal time (exercise, family, recovery)',
      'Note one thing to start Monday with',
    ],
  },
  {
    phase: 'Monday morning (5 minutes)',
    steps: [
      'Daily Brief: confirm the day\'s structure',
      'Any last-minute adjustments to priorities',
      'Voice-add any new events that arrived over the weekend',
      'Begin with the first focus block',
    ],
  },
  {
    phase: 'Daily (2 minutes)',
    steps: [
      'Daily Brief before opening email',
      'Add any events that come up during the day immediately',
      'Note anything that should move to next week',
    ],
  },
]

const WHY_CALENDAR_FIRST = [
  'Paper planners don\'t capture time commitments — the calendar does',
  'Calendar-based planning forces realistic scheduling (there are only 24 hours)',
  'Analytics feedback loop shows whether the plan matched reality',
  'Calendar blocks are visible to collaborators — paper plans are not',
  'Recurring events, templates, and voice input make daily updates take seconds',
  'The plan and the schedule are the same document — no system to maintain separately',
]

export default function ProductivityPlannerPage() {
  return (
    <>
      <PageHero
        eyebrow="Productivity Planner"
        title={
          <>
            Plan on the calendar.
            <br />
            <em className="not-italic text-gold">Execute on the calendar.</em>
          </>
        }
        lede="The most effective productivity planners are the ones connected to where time actually lives. Paper planners capture intentions; calendar-based planners capture commitments. Momenties combines daily planning, weekly review, and time analytics in a single system — all driven by your real schedule."
        crumbs={[{ label: 'Productivity Planner' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start planning <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/weekly-planner"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Weekly planner
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Planning system components</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four tools that make planning stick.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PLANNER_FEATURES.map((f, i) => (
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

      {/* Planning ritual */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Planning ritual</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">The 15-minute weekly planning ritual.</h2>
          </Reveal>
          <div className="space-y-4">
            {PLANNING_RITUAL.map((phase, i) => (
              <Reveal key={phase.phase} delay={i * 60}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-3">{phase.phase}</p>
                  <div className="space-y-1.5">
                    {phase.steps.map((step, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                        <p className="text-xs text-muted-foreground">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why calendar-first */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Why calendar-first wins</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Why calendar-based planning outlasts everything else.</h2>
          </Reveal>
          <div className="space-y-3">
            {WHY_CALENDAR_FIRST.map((item, i) => (
              <Reveal key={i} delay={i * 30}>
                <div className="flex items-start gap-3 rounded-xl border border-border/50 p-4">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/90">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Plan the week. Track the hours. Adjust the system."
        subtitle="Daily Brief, weekly analytics, focus blocking, and voice input. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Weekly planner', href: '/weekly-planner' }}
      />
    </>
  )
}
