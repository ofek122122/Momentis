import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Sun, BarChart3, Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Weekly Planner — AI-powered weekly planning in under 5 minutes',
  description:
    'A weekly planner powered by AI. Add the week\'s events in natural language, protect deep work blocks, review last week\'s analytics, and start every week with a complete plan. Free to start.',
  alternates: { canonical: '/weekly-planner' },
  openGraph: {
    title: 'Weekly Planner — Momenties',
    description: 'Plan the week in 5 minutes. Understand it in analytics.',
    url: '/weekly-planner',
    type: 'website',
  },
}

const WEEKLY_RITUAL = [
  {
    step: 'Sunday evening (5 min)',
    actions: [
      'Review last week\'s analytics — how many hours in deep work, meetings, personal?',
      'Adjust for next week: protect more focus time, reduce reactive blocks',
      'Voice-add any new events for the week: "dentist tuesday 3pm, quarterly review thursday 10am"',
      'Confirm recurring blocks are all present — gym, 1:1s, team standup',
    ],
  },
  {
    step: 'Monday morning (2 min)',
    actions: [
      'Open Daily Brief — complete view of the week ahead',
      'Notice any conflicts or over-scheduled days',
      'Voice-add missing blocks: "prep for quarterly review wednesday 5pm 45 mins"',
      'Week is planned. Start working.',
    ],
  },
]

const PLANNING_FEATURES = [
  {
    icon: Sun,
    title: 'Daily Brief with weekly context',
    desc: 'Every morning: today\'s full schedule, tomorrow\'s overview, week-at-a-glance. Start the day with awareness instead of calendar anxiety.',
  },
  {
    icon: Zap,
    title: 'AI input for the whole week at once',
    desc: '"Team sync monday 9am, 1:1 tuesday 2pm, deep work blocks wednesday and thursday 9-12am, retrospective friday 3pm." One input — five events.',
  },
  {
    icon: BarChart3,
    title: 'Last week\'s analytics inform this week',
    desc: 'See how last week actually went: deep work hours, meeting time, personal/work balance. Most people make one adjustment — then the week goes better.',
  },
  {
    icon: Shield,
    title: 'Protect the week\'s most important work',
    desc: 'Focus mode enforces deep work blocks against interruptions and meeting requests. What you protect is what gets done.',
  },
]

const SAMPLE_WEEK = [
  { day: 'Mon', blocks: ['Team sync 9–9:30am', 'Deep work 10am–12pm', 'Lunch 12–1pm', 'Reviews 1–3pm', '1:1 3–3:30pm'] },
  { day: 'Tue', blocks: ['Deep work 9–11am', 'Meetings 11am–1pm', 'Lunch', 'Client work 2–5pm'] },
  { day: 'Wed', blocks: ['Focus work 9am–12pm', 'Team 1:30pm', 'Async 3–5pm'] },
  { day: 'Thu', blocks: ['Deep work 9–11am', 'Prep 11–12pm', 'Quarterly review 1–3pm'] },
  { day: 'Fri', blocks: ['Clear inbox 9–10am', 'Work blocks 10am–3pm', 'Retrospective 3pm', 'Week wrap 4–5pm'] },
]

export default function WeeklyPlannerPage() {
  return (
    <>
      <PageHero
        eyebrow="Weekly Planner"
        title={
          <>
            Plan the week
            <br />
            <em className="not-italic text-gold">in under 5 minutes.</em>
          </>
        }
        lede="The best weekly planning system is the one you actually do. Momenties makes it fast enough to happen: AI input for the whole week at once, analytics from last week to inform this one, and Daily Brief to start each morning right."
        crumbs={[{ label: 'Weekly Planner' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · Weekly planning built in · No extra app needed</p>
      </PageHero>

      {/* Planning features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Features</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features that make weekly planning stick.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PLANNING_FEATURES.map((f, i) => (
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

      {/* Weekly ritual */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The ritual</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">The 7-minute weekly planning ritual.</h2>
          </Reveal>
          <div className="space-y-5">
            {WEEKLY_RITUAL.map((phase, i) => (
              <Reveal key={phase.step} delay={i * 60}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-3">{phase.step}</p>
                  <div className="space-y-1.5">
                    {phase.actions.map((action, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                        <p className="text-xs text-muted-foreground">{action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sample week visual */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">A structured week, at a glance.</h2>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-xl border border-border">
              <div className="min-w-[500px] p-4 grid grid-cols-5 gap-3">
                {SAMPLE_WEEK.map((day) => (
                  <div key={day.day}>
                    <p className="font-mono text-[10px] text-gold/60 uppercase tracking-wider mb-2 text-center">{day.day}</p>
                    <div className="space-y-1">
                      {day.blocks.map((b) => (
                        <div key={b} className="rounded bg-white/[0.04] border border-border/40 px-2 py-1.5">
                          <p className="text-[10px] text-foreground/70 leading-tight">{b}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Stop winging the week. Plan it in 5 minutes."
        subtitle="AI input, last-week analytics, Daily Brief. Everything a weekly planner needs."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
