import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, Target, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Annual Planning Calendar — Build the year before the year builds itself',
  description:
    'Annual planning done in January prevents a reactive year. Here\'s how to load your goals, deadlines, professional commitments, and personal priorities onto the calendar before the first urgent request arrives — so the year is shaped by your intentions, not other people\'s.',
  alternates: { canonical: '/annual-planning-calendar' },
  openGraph: {
    title: 'Annual Planning Calendar — Momenties',
    description: 'Load the year before it loads you — the annual planning calendar approach.',
    url: '/annual-planning-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Calendar,
    title: 'All known deadlines loaded in January',
    desc: 'Tax deadlines, license renewals, conference registrations, performance reviews, contract renewals, certification expirations — all known well in advance. Load them in January. The year\'s immovable commitments visible before anything else fills those dates.',
  },
  {
    icon: Target,
    title: 'Goal milestones placed before operational calendar',
    desc: 'Annual goals broken into quarterly milestones and placed on the calendar before operational work fills every gap. "Q1 product launch — march 31." "Revenue goal Q2 — june 30." Milestones treated as real deadlines, surfaced 90 days in advance.',
  },
  {
    icon: Shield,
    title: 'Personal and family commitments blocked first',
    desc: 'Vacations, school events, anniversaries, family visits — blocked before the professional calendar is shared with anyone. What matters personally must be claimed before work fills every available date. The calendar only protects what\'s already on it.',
  },
  {
    icon: BarChart3,
    title: 'Year-in-review analytics before planning next year',
    desc: 'Before planning the next year, review the last: time per project, time per goal category, meetings vs. deep work ratio, goal completion rate. Annual planning informed by how the previous year actually went — not how you remember it.',
  },
]

const ANNUAL_SECTIONS = [
  {
    section: 'Professional deadlines',
    items: ['Tax filings and estimated payment dates', 'License and certification renewal dates', 'Contract and subscription renewal dates', 'Performance review cycle dates'],
  },
  {
    section: 'Strategic commitments',
    items: ['Quarterly goal milestones', 'Product or project launch targets', 'Revenue and growth milestones', 'Annual planning and strategy retreat dates'],
  },
  {
    section: 'Professional development',
    items: ['Conferences and industry events', 'Course and certification study blocks', 'CE or CME completion targets', 'Networking events and speaking engagements'],
  },
  {
    section: 'Personal and recovery',
    items: ['Vacation and travel dates', 'Family events and school calendars', 'Recovery and rest periods', 'Personal health and fitness commitments'],
  },
]

const PLANNING_STEPS = [
  { month: 'December / January', action: 'Annual review: analytics from the previous year. Time per project, goal completion rate, what moved the needle vs. what was noise. Plan the coming year with data, not wishful thinking.' },
  { month: 'January week 1', action: 'Load all known deadlines: tax dates, license renewals, certification expirations, contract renewals, performance review cycles. Immovable dates claimed before anything else fills the calendar.' },
  { month: 'January week 2', action: 'Personal commitments blocked: vacation requests submitted and calendar entries created, family events from school calendars, anniversaries, recurring personal commitments. Personal dates non-negotiable.' },
  { month: 'January week 3', action: 'Professional development calendar: conference registrations, course blocks, CE or CME completion targets per quarter. Development time scheduled before the operational calendar fills those windows.' },
  { month: 'January week 4', action: 'Goal milestones placed: annual goals broken into quarterly targets with specific calendar entries. Each milestone treated as a real deadline with 90-day advance alert. Goals on the calendar, not just the notebook.' },
  { month: 'Ongoing', action: 'Quarterly reviews: analytics vs. plan. On track? What needs adjusting? Each quarter reviewed at the start with data. The annual plan is a living document, refined by what the calendar actually shows.' },
]

export default function AnnualPlanningCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Annual Planning Calendar"
        title={
          <>
            Build the year
            <br />
            <em className="not-italic text-gold">before it builds itself.</em>
          </>
        }
        lede="A reactive year happens by default — it's what you get when you don't plan first. An intentional year requires loading goals, deadlines, personal commitments, and professional milestones onto the calendar in January, before anything urgent arrives. Here's the system for planning the year you want instead of managing the year you got."
        crumbs={[{ label: 'Annual Planning Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/quarter-planning"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Quarter planning guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four pillars</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports annual calendar planning.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What to load in January</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four categories of annual calendar commitments.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {ANNUAL_SECTIONS.map((sec, i) => (
              <Reveal key={sec.section} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <h3 className="text-xs font-mono text-gold/70 uppercase tracking-wide mb-3">{sec.section}</h3>
                  <ul className="space-y-1.5">
                    {sec.items.map((item) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Planning sequence</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build the annual calendar in January.</h2>
          </Reveal>
          <div className="space-y-3">
            {PLANNING_STEPS.map((step, i) => (
              <Reveal key={step.month} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-28 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.month}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Annual analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties shows for annual review.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Time per project — full year trend',
                'Goal milestone hit rate',
                'Deep work vs. meetings ratio annual view',
                'Credential and deadline completion rate',
                'Professional development hours per year',
                'Vacation and recovery days taken',
                'Quarterly pace — which quarter was most productive',
                'Year-over-year time allocation comparison',
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
        title="Year planned. Deadlines tracked. Goals on the calendar."
        subtitle="Annual deadline management, goal milestone tracking, and year-in-review analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Quarter planning guide', href: '/quarter-planning' }}
      />
    </>
  )
}
