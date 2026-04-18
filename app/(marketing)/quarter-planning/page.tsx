import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, BarChart3, Shield, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quarter Planning — How to plan a quarter on the calendar in under 2 hours',
  description:
    'A quarterly plan that lives only in a document doesn\'t survive contact with the first busy week. A quarterly plan built into the calendar — key dates blocked, milestones visible, reviews scheduled — stays active through the whole quarter.',
  alternates: { canonical: '/quarter-planning' },
  openGraph: {
    title: 'Quarter Planning — Momenties',
    description: 'Build a quarterly plan directly into the calendar — milestones, reviews, and time allocation.',
    url: '/quarter-planning',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Calendar,
    title: 'Quarter milestones on the calendar',
    desc: 'Every quarterly goal gets a milestone date on the calendar. "Q3 revenue target check — september 15." "Product launch — july 31." "Performance reviews — week of august 12." The goal has a date. The date has a block.',
  },
  {
    icon: Shield,
    title: 'Time allocation blocked at the start',
    desc: 'A quarterly plan without time allocation is a wish list. Block time by priority at the start of the quarter: deep project work, key meetings, planning reviews. The calendar commits the time before the quarter fills itself.',
  },
  {
    icon: BarChart3,
    title: 'Mid-quarter analytics review',
    desc: 'At week 6: analytics shows actual time allocation vs. plan. Is the most important project getting the most calendar time? Or has the quarter been captured by reactive work? The review happens while there\'s still time to correct.',
  },
  {
    icon: Clock,
    title: 'Quarterly review scheduled at the start',
    desc: '"Q3 review and Q4 planning — september 30 afternoon." Scheduled at the start of Q3. Protected before the quarter ends. The review doesn\'t get squeezed by September sprint — it was already on the calendar.',
  },
]

const QUARTER_PROCESS = [
  { step: '1', title: 'Set 3 quarterly outcomes (30 min)', detail: 'What must this quarter accomplish? Three outcomes — no more. Not a project list, not a goal list. Three clear outcomes with measurable completion criteria.' },
  { step: '2', title: 'Block key dates and milestones (20 min)', detail: 'Each outcome gets key dates on the calendar. Milestones, deliverable deadlines, review checkpoints. Visible before the quarter begins.' },
  { step: '3', title: 'Allocate time by priority (30 min)', detail: 'Block weekly time for each outcome in proportion to priority. The most important outcome gets the most calendar time. Block before the quarter begins — not as leftover.' },
  { step: '4', title: 'Schedule mid-quarter review (5 min)', detail: 'Week 6 review block. "Q3 midpoint — am I on track?" On the calendar now. Analytics will be ready. The review happens while adjustment is still possible.' },
  { step: '5', title: 'Schedule quarterly review (5 min)', detail: 'Final week of the quarter: review and next-quarter planning. Half-day block. On the calendar the day the quarter begins. The transition is planned — not scrambled.' },
  { step: '6', title: 'Weekly — check the calendar (ongoing)', detail: 'Each Monday: is this week\'s calendar aligned with quarterly priorities? Not a separate review — 3 minutes while planning the week. The quarter stays visible in weekly planning.' },
]

const QUARTER_ANALYTICS = [
  'Time per quarterly priority vs. plan',
  'Deep work hours per week trend',
  'Milestone completion rate',
  'Meeting load vs. project time ratio',
  'Week-over-week progress toward outcomes',
  'Unplanned reactive time percentage',
  'Calendar alignment with stated priorities',
  'Quarter-over-quarter velocity comparison',
]

export default function QuarterPlanningPage() {
  return (
    <>
      <PageHero
        eyebrow="Quarter Planning"
        title={
          <>
            Plan the quarter.
            <br />
            <em className="not-italic text-gold">Into the calendar.</em>
          </>
        }
        lede="A quarterly plan that lives only in a document doesn't survive the first busy week. A quarterly plan built into the calendar — milestones on real dates, time allocation blocked in advance, mid-quarter review scheduled, and end-of-quarter transition planned — stays active through the whole quarter."
        crumbs={[{ label: 'Quarter Planning' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Plan your quarter free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/weekly-review"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Weekly review
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Why calendar-based planning works</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four reasons quarterly plans survive on the calendar.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Six-step process</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Plan a quarter in under 2 hours.</h2>
          </Reveal>
          <div className="space-y-3">
            {QUARTER_PROCESS.map((step, i) => (
              <Reveal key={step.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-5">
                  <span className="font-mono text-lg font-bold text-gold/40 w-8 shrink-0 leading-tight">{step.step}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">{step.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Quarter analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What quarterly planning analytics shows.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {QUARTER_ANALYTICS.map((item) => (
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
        title="Quarter planned. Milestones on the calendar. Time allocated."
        subtitle="Quarterly milestone scheduling, mid-quarter analytics, and transition planning. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Weekly review guide', href: '/weekly-review' }}
      />
    </>
  )
}
