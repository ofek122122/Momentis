import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, BarChart3, Clock, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Energy Management Calendar — Schedule to your energy, not just the clock',
  description:
    'Time management assumes all hours are equal. Energy management recognizes they\'re not. Here\'s how to build a calendar that matches your highest-energy hours to your most demanding work — and uses analytics to verify it\'s actually working.',
  alternates: { canonical: '/energy-management-calendar' },
  openGraph: {
    title: 'Energy Management Calendar — Momenties',
    description: 'Match your best work to your best hours — energy-based calendar scheduling.',
    url: '/energy-management-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Shield,
    title: 'High-energy hours blocked for deep work',
    desc: 'Most people\'s peak cognitive performance is 9–11am. That window should hold your most demanding work — not email, not meetings, not admin. Block it first. Put the hardest, most valuable work in the peak window before anything else gets there.',
  },
  {
    icon: Clock,
    title: 'Energy-matched meeting scheduling',
    desc: 'Routine meetings — status updates, quick check-ins, team syncs — scheduled in energy valleys: post-lunch 1–2pm, or mid-afternoon 3–4pm. High-stakes meetings — negotiations, presentations, critical decisions — in peak hours only.',
  },
  {
    icon: BarChart3,
    title: 'Analytics reveal your actual energy pattern',
    desc: 'Tag events by energy demand: high (deep work), medium (collaborative), low (admin). Track completion rate and output quality by time block. The data shows your real energy pattern — not the assumed one. Adjust the schedule to match.',
  },
  {
    icon: Zap,
    title: 'Recovery time built into the calendar',
    desc: 'Energy management isn\'t just about peak hours — it\'s about recovery. Block 10-minute recovery windows after high-intensity meetings. Block lunch without meetings. Block transition time between context-switches. The calendar holds the recovery infrastructure.',
  },
]

const ENERGY_BLOCKS = [
  {
    level: 'Peak energy (9–11am for most)',
    work: 'Deep work: complex analysis, creative output, writing, strategy, coding, design',
    avoid: 'Routine meetings, email, admin, status updates, low-stakes decisions',
  },
  {
    level: 'Secondary peak (late morning)',
    work: 'Collaboration: workshops, brainstorming, important meetings, high-stakes decisions',
    avoid: 'Shallow admin, routine email, tasks that don\'t need cognitive load',
  },
  {
    level: 'Energy valley (early afternoon)',
    work: 'Low-stakes meetings, routine check-ins, email processing, administrative tasks',
    avoid: 'Deep analytical work, complex decisions, creative output requiring concentration',
  },
  {
    level: 'Secondary recovery (mid-afternoon)',
    work: 'Review work, proofing, planning, light creative tasks, professional development reading',
    avoid: 'Entirely new complex problems requiring full cognitive bandwidth',
  },
]

const ENERGY_PRINCIPLES = [
  { principle: 'Audit before optimizing', detail: 'Track one week without changing anything. Tag events by energy demand. See where deep work is actually happening. The gap between assumed and actual is usually surprising.' },
  { principle: 'Peak hours are non-negotiable', detail: 'If peak hours regularly hold routine meetings, the calendar isn\'t managed — it\'s reactive. Protecting peak hours requires saying no to routine meetings in that window. Every time.' },
  { principle: 'Recovery isn\'t laziness', detail: 'A 10-minute break after an intensive meeting produces more output than grinding through the next task at 40% capacity. Recovery time on the calendar is an output multiplier, not a luxury.' },
  { principle: 'Batch similar energy demands', detail: 'Don\'t alternate between deep work and shallow meetings all day. Batch deep work in the morning. Batch meetings in the afternoon. Batch admin at end of day. Context-switching has an energy cost.' },
  { principle: 'Measure to optimize', detail: 'Energy management without measurement is guesswork. Tag work by demand. Track completion and quality. After 4 weeks, adjust the schedule based on what the data shows, not what you assumed.' },
]

export default function EnergyManagementCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Energy Management Calendar"
        title={
          <>
            Best work in
            <br />
            <em className="not-italic text-gold">best hours.</em>
          </>
        }
        lede="Time management assumes all hours are equal. Energy management recognizes they're not — your 9am is not the same as your 3pm, and your Monday is not the same as your Friday afternoon. Here's how to build a calendar that matches your most demanding work to your highest-energy hours, and uses analytics to verify it's working."
        crumbs={[{ label: 'Energy Management Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/focus-time"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Focus time guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports energy-based scheduling.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Energy schedule guide</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What to schedule in each energy window.</h2>
          </Reveal>
          <div className="space-y-3">
            {ENERGY_BLOCKS.map((block, i) => (
              <Reveal key={block.level} delay={i * 50}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <h3 className="text-xs font-mono text-gold/70 uppercase tracking-wide mb-3">{block.level}</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] font-mono text-emerald-400/70 uppercase tracking-wide mb-1.5">Do</p>
                      <p className="text-xs text-foreground/80">{block.work}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-amber-400/70 uppercase tracking-wide mb-1.5">Avoid</p>
                      <p className="text-xs text-muted-foreground">{block.avoid}</p>
                    </div>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Five principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to make energy management work in practice.</h2>
          </Reveal>
          <div className="space-y-3">
            {ENERGY_PRINCIPLES.map((item, i) => (
              <Reveal key={item.principle} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-2">{item.principle}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Energy analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for energy management.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'High-demand work in peak hours (% of total)',
                'Meeting load in energy valleys',
                'Recovery time per week',
                'Deep work completion rate by time of day',
                'Context-switch frequency per day',
                'Admin time — when and how much',
                'Peak hours captured vs. surrendered to meetings',
                'Weekly energy efficiency trend',
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
        title="Best work in best hours. Recovery built in. Analytics verify it."
        subtitle="Energy-based scheduling, peak hour protection, and time quality analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Focus time guide', href: '/focus-time' }}
      />
    </>
  )
}
