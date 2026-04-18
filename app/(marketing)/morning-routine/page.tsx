import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Sun, Clock, Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Morning Routine on Calendar — Why your morning belongs on your schedule',
  description:
    'A morning routine that isn\'t on your calendar isn\'t a routine — it\'s an intention. Learn how to block your morning, protect it from early meetings, and build the first hour that sets the tone for everything after it.',
  alternates: { canonical: '/morning-routine' },
  openGraph: {
    title: 'Morning Routine on Calendar — Momenties',
    description: 'Block your morning. Protect it. Make it non-negotiable.',
    url: '/morning-routine',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Sun,
    title: 'Morning block that signals unavailability',
    desc: 'A blocked morning on your calendar tells collaborators — and scheduling tools — that the time is taken. "Morning routine 6:30-8am" is as real as a 9am meeting. Treat it that way.',
  },
  {
    icon: Shield,
    title: 'No-meeting-before-10am protection',
    desc: 'Block 9-10am as a buffer. Most calendars allow meetings at any time. The morning buffer block prevents the 8am "quick call" from eating the only unstructured time you have.',
  },
  {
    icon: Zap,
    title: 'Daily Brief before email',
    desc: 'See the day before the inbox does. Daily Brief shows your schedule for the next 24 hours — all blocked time, key meetings, deadlines approaching. Two minutes of awareness before the day begins.',
  },
  {
    icon: Clock,
    title: 'Recurring morning blocks in 10 seconds',
    desc: '"Morning routine 6:30am daily." "Exercise block 7am Mon Wed Fri." "Journal 6am weekdays." Recurring morning blocks set in one voice command. The routine is on calendar forever.',
  },
]

const MORNING_STRUCTURES = [
  {
    type: 'Quiet morning',
    blocks: ['6:00 — Journal / reflection', '6:30 — Exercise or walk', '7:30 — Shower + prep', '8:00 — Breakfast', '8:30 — Daily Brief + planning', '9:00 — First work block'],
  },
  {
    type: 'Early riser',
    blocks: ['5:00 — Exercise', '6:00 — Shower + prep', '6:30 — Breakfast + reading', '7:00 — Deep work (before distractions)', '9:00 — First meeting available'],
  },
  {
    type: 'Parent morning',
    blocks: ['6:00 — Personal time before household wakes', '7:00 — Kids\' morning routine', '8:00 — School / drop-off', '9:00 — Work begins, energy intact'],
  },
]

const WHY_ON_CALENDAR = [
  'What\'s on calendar gets done — what\'s only in intention doesn\'t',
  'Calendar blocks block meetings from taking the time first',
  'Recurring blocks mean no decision fatigue about whether to follow through',
  'The routine becomes visible to anyone scheduling you — morning is protected',
  'Analytics shows how often morning blocks actually happen vs. get cancelled',
]

export default function MorningRoutinePage() {
  return (
    <>
      <PageHero
        eyebrow="Morning Routine"
        title={
          <>
            Block the morning.
            <br />
            <em className="not-italic text-gold">Protect what starts the day.</em>
          </>
        }
        lede="A morning routine that lives only in intention gets cancelled the moment a 7am request arrives. When it's on your calendar — blocked, recurring, visible to anyone scheduling you — it becomes as defensible as a meeting. The calendar is what makes the routine real."
        crumbs={[{ label: 'Morning Routine' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Block your morning <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/daily-brief"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Daily Brief
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How Momenties supports morning routines</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four calendar tools for the first hour.</h2>
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

      {/* Morning structures */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Structures</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Three morning structures for different lives.</h2>
          </Reveal>
          <div className="space-y-4">
            {MORNING_STRUCTURES.map((structure, i) => (
              <Reveal key={structure.type} delay={i * 60}>
                <div className="rounded-xl border border-border/50 p-5">
                  <h3 className="text-sm font-medium text-foreground mb-3">{structure.type}</h3>
                  <div className="space-y-1.5">
                    {structure.blocks.map((block, j) => (
                      <p key={j} className="text-xs font-mono text-muted-foreground">{block}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why on calendar */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Why the calendar matters</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Why your morning routine belongs on your calendar.</h2>
          </Reveal>
          <div className="space-y-3">
            {WHY_ON_CALENDAR.map((item, i) => (
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
        title="Block the morning before anything else does."
        subtitle="Recurring morning blocks, Daily Brief, and focus protection. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Daily Brief', href: '/daily-brief' }}
      />
    </>
  )
}
