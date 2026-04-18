import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, Sun, BarChart3, Mic, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Daily Planner — Natural language planning that actually works',
  description:
    'An AI daily planner that adds events from text, voice, or photos in under 2 seconds. Generates a Daily Brief each morning. Analyzes how you actually spend your time. No task auto-scheduling — you stay in control.',
  alternates: { canonical: '/ai-daily-planner' },
  openGraph: {
    title: 'AI Daily Planner — Momenties',
    description: 'Plan your day in seconds. Understand it in analytics.',
    url: '/ai-daily-planner',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Zap,
    title: 'Add anything in under 2 seconds',
    desc: 'Type, speak, or photograph your schedule. AI parses every format instantly. "Coffee with Alex 10am" → on your calendar before you finish the sentence.',
  },
  {
    icon: Sun,
    title: 'Morning Daily Brief',
    desc: 'Every morning: a personalized brief of today\'s events, potential conflicts, and what tomorrow looks like. Start the day with complete awareness instead of calendar anxiety.',
  },
  {
    icon: BarChart3,
    title: 'Analytics that change behavior',
    desc: 'See the week in hours by category. Deep work vs. meetings. Work vs. personal. Most people look once and adjust their calendar immediately.',
  },
  {
    icon: Mic,
    title: 'Voice planning while you move',
    desc: 'Walking to a meeting. Driving to a client. Mid-workout thought about tomorrow. Voice-add from anywhere. The plan updates before you stop moving.',
  },
]

const PLANNING_EXAMPLES = [
  {
    scenario: 'Morning planning (60 seconds)',
    steps: [
      'Open Daily Brief — today\'s full schedule in one view',
      'Notice the 2pm slot is free',
      '"Deep work block 2-4pm" — voice-added, focus mode will activate',
      '"Call back Sarah re contract 11am" — added mid-coffee',
    ],
  },
  {
    scenario: 'Reactive replanning (30 seconds)',
    steps: [
      'Meeting gets cancelled at 3pm',
      '"Focus block 3-5pm" — immediately claim the time',
      'Afternoon is now productive instead of wasted on low-priority tasks',
    ],
  },
  {
    scenario: 'Weekly review (2 minutes)',
    steps: [
      'Analytics: 32 hours work, 14 in meetings, 8 in deep work',
      'Deep work is lower than target — protect more blocks next week',
      '"Daily deep work 9-11am every weekday" — recurring, protected',
    ],
  },
]

const HOW_DIFFERENT = [
  { claim: 'AI that parses natural language instantly', available: true },
  { claim: 'AI that auto-schedules your tasks', available: false, note: 'You stay in control' },
  { claim: 'Morning brief with full-day context', available: true },
  { claim: 'Analytics showing time by category', available: true },
  { claim: 'Voice input that works hands-free', available: true },
  { claim: 'Habit tracking separate from calendar', available: false, note: 'Calendar is the system' },
  { claim: 'Focus mode for protecting blocks', available: true },
  { claim: 'Free plan with full AI features', available: true },
]

export default function AiDailyPlannerPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Daily Planner"
        title={
          <>
            Plan your day
            <br />
            <em className="not-italic text-gold">in under 60 seconds.</em>
          </>
        }
        lede="An AI daily planner should be faster than thinking. Momenties adds events from text, voice, and photos in under 2 seconds — then generates a morning brief, protects focus blocks, and shows you what your time actually looks like."
        crumbs={[{ label: 'AI Daily Planner' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/daily-brief"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Daily Brief
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · AI input included · No task auto-scheduling</p>
      </PageHero>

      {/* Core features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How it works</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four ways AI makes daily planning faster.</h2>
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

      {/* Planning scenarios */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Planning in practice</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Three real planning scenarios.</h2>
          </Reveal>
          <div className="space-y-4">
            {PLANNING_EXAMPLES.map((ex, i) => (
              <Reveal key={ex.scenario} delay={i * 60}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-3">{ex.scenario}</p>
                  <div className="space-y-1.5">
                    {ex.steps.map((step, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="font-mono text-[10px] text-gold/50 shrink-0 mt-0.5 w-4">{j + 1}.</span>
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

      {/* What it is and isn't */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What the AI does — and doesn't do.</h2>
          </Reveal>
          <Reveal>
            <div className="space-y-2">
              {HOW_DIFFERENT.map((item) => (
                <div key={item.claim} className="flex items-start gap-3 py-2 border-b border-border/30 last:border-0">
                  <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${item.available ? 'text-gold' : 'text-muted-foreground/30'}`} />
                  <div>
                    <p className={`text-sm ${item.available ? 'text-foreground/90' : 'text-muted-foreground/60'}`}>{item.claim}</p>
                    {item.note && <p className="text-[11px] text-muted-foreground mt-0.5">{item.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="The fastest daily planner isn't a planner. It's a calendar with AI."
        subtitle="Text, voice, or photo — events in under 2 seconds. Morning brief. Analytics. Free."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See all features', href: '/features' }}
      />
    </>
  )
}
