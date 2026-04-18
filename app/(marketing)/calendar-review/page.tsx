import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Calendar, Clock, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar Review — Daily, weekly, and monthly reviews that keep your calendar accurate',
  description:
    'A calendar review practice ensures your calendar reflects reality: upcoming commitments are confirmed, old entries are cleared, and the week ahead is prepared before it starts. Here\'s how to build a review cadence that keeps your calendar worth trusting.',
  alternates: { canonical: '/calendar-review' },
  openGraph: {
    title: 'Calendar Review — Momenties',
    description: 'Daily, weekly, and monthly calendar reviews that keep your schedule accurate and useful.',
    url: '/calendar-review',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Calendar,
    title: 'Daily Brief as the morning review',
    desc: 'The Daily Brief is an automated morning calendar review: today\'s schedule, upcoming deadlines, and approaching commitments surfaced before the day starts. The daily review happens without a separate habit — it\'s the first thing opened every morning.',
  },
  {
    icon: Clock,
    title: 'Weekly review before the week begins',
    desc: 'A 15-minute Friday review prepares the week ahead: confirm all next week\'s commitments are on the calendar, add anything discovered during the week, check for overloaded days, and review approaching deadlines. Monday starts prepared, not reactive.',
  },
  {
    icon: BarChart3,
    title: 'Monthly analytics review',
    desc: 'At the end of each month, analytics review: time per project, meeting load, deep work hours, goal progress. The month-end review answers: did the calendar reflect priorities? What patterns need to change? Data drives the next month\'s planning.',
  },
  {
    icon: Shield,
    title: 'Quarterly calendar audit',
    desc: 'Once per quarter, review every recurring event on the calendar. Which recurring meetings are still valuable? Which can be cancelled or changed to a different cadence? Which weekly commitments have become obsolete? Recurring calendar bloat removed quarterly.',
  },
]

const REVIEW_CADENCES = [
  {
    cadence: 'Daily (5 minutes)',
    when: 'Every morning before work begins',
    what: ['Open Daily Brief', 'Confirm today\'s schedule is complete', 'Check for any same-day changes needed', 'Know the day\'s most important commitment'],
  },
  {
    cadence: 'Weekly (15 minutes)',
    when: 'Friday 4:30pm or Monday 8am',
    what: ['Review full next week\'s calendar', 'Add anything missing from the week', 'Confirm all commitments are prepared for', 'Check for overloaded or underplanned days'],
  },
  {
    cadence: 'Monthly (30 minutes)',
    when: 'Last friday of the month',
    what: ['Analytics review: time per project and goal', 'Review upcoming month\'s major deadlines', 'Add any new commitments discovered', 'Assess goal progress vs. calendar allocation'],
  },
  {
    cadence: 'Quarterly (60 minutes)',
    when: 'First week of the new quarter',
    what: ['Audit all recurring events — remove obsolete', 'Review goal milestone progress', 'Load the new quarter\'s major deadlines', 'Evaluate calendar structure: is it serving priorities?'],
  },
]

const REVIEW_QUESTIONS = [
  { period: 'Daily', questions: ['What\'s my most important commitment today?', 'Am I prepared for today\'s meetings?', 'Is anything missing from today\'s calendar?', 'What\'s the single most important thing to produce today?'] },
  { period: 'Weekly', questions: ['What are next week\'s non-negotiable commitments?', 'Are goal-related blocks on the calendar?', 'Which days look overloaded — what can move?', 'Are all known deadlines on the calendar?'] },
  { period: 'Monthly', questions: ['How many hours went to each priority last month?', 'Did deep work time match the stated commitment?', 'Which goals fell behind? Why?', 'What\'s the single most important change for next month?'] },
  { period: 'Quarterly', questions: ['Are all recurring meetings still worth the time?', 'Is the calendar structure serving my actual priorities?', 'What\'s on the calendar that shouldn\'t be?', 'What should be on the calendar that isn\'t?'] },
]

export default function CalendarReviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar Review"
        title={
          <>
            A calendar worth
            <br />
            <em className="not-italic text-gold">trusting every day.</em>
          </>
        }
        lede="An unreviewed calendar becomes stale quickly: outdated entries, missing commitments, overloaded days discovered too late. A review practice — daily, weekly, monthly, quarterly — keeps the calendar accurate and useful. Here's the cadence that makes your calendar a reliable system instead of a rough guess at your schedule."
        crumbs={[{ label: 'Calendar Review' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/weekly-review"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Weekly review guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four review levels</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports each review cadence.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Review cadences</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What each review covers and when to do it.</h2>
          </Reveal>
          <div className="space-y-3">
            {REVIEW_CADENCES.map((cadence, i) => (
              <Reveal key={cadence.cadence} delay={i * 50}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-sm font-medium text-foreground">{cadence.cadence}</h3>
                    <span className="font-mono text-[10px] text-gold/60 uppercase tracking-wide shrink-0">{cadence.when}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {cadence.what.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-gold/60 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Review questions</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Questions to ask at each review level.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {REVIEW_QUESTIONS.map((item, i) => (
              <Reveal key={item.period} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <h3 className="text-xs font-mono text-gold/70 uppercase tracking-wide mb-3">{item.period} review</h3>
                  <ul className="space-y-1.5">
                    {item.questions.map((q) => (
                      <li key={q} className="text-xs text-muted-foreground leading-relaxed">{q}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Review analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties surfaces for each review level.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Daily Brief — today\'s complete schedule',
                'Upcoming deadlines — 7, 30, 90 days',
                'Weekly time allocation by category',
                'Meeting load trend',
                'Deep work hours vs. target',
                'Goal milestone progress',
                'Monthly time per project',
                'Quarterly recurring meeting audit',
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
        title="Calendar accurate. Reviews consistent. Priorities protected."
        subtitle="Daily Brief, weekly analytics, and quarterly calendar audit. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Weekly review guide', href: '/weekly-review' }}
      />
    </>
  )
}
