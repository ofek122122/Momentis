import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, BarChart3, Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Team Productivity — How high-performing teams use their calendar differently',
  description:
    'Team productivity isn\'t about working harder — it\'s about coordinating more cleanly. See how high-performing teams use shared calendars, availability overlays, and time analytics to eliminate scheduling waste.',
  alternates: { canonical: '/team-productivity' },
  openGraph: {
    title: 'Team Productivity — Momenties',
    description: 'How high-performing teams schedule, coordinate, and protect focus time.',
    url: '/team-productivity',
    type: 'website',
  },
}

const PATTERNS = [
  {
    icon: Users,
    title: 'Shared availability, not shared chaos',
    desc: 'Teams that use availability overlay stop emailing "when are you free?" The overlay shows meeting windows instantly. Scheduling friction drops by 80%. Meetings happen because they make sense, not because someone finally found a time.',
  },
  {
    icon: Shield,
    title: 'Team-wide focus time agreements',
    desc: '"No meetings before 10am." "Deep work Thursdays." "No back-to-back without buffer." These team norms, enforced on calendar, create predictable focus time for everyone. Individual protection scales to team protection.',
  },
  {
    icon: BarChart3,
    title: 'Meeting load analytics per person',
    desc: 'Meeting creep is invisible until it\'s at 60% of the week. Team analytics surfaces the trend at 45%. Managers see who is overloaded before burnout. Teams can redistribute before it becomes a retention problem.',
  },
  {
    icon: Zap,
    title: 'Template-first meeting culture',
    desc: 'Every repeatable meeting — sprint ceremonies, 1:1s, retrospectives, standups — as a template. New team members get fully structured weeks in minutes, not days. Onboarding becomes a template application.',
  },
]

const MEETING_AUDIT = [
  { type: 'Standup', question: 'Could this be async?', frequency: 'Daily', flag: true },
  { type: 'Weekly 1:1', question: 'Is there a standing agenda?', frequency: 'Weekly', flag: false },
  { type: 'Team sync', question: 'Is the output documented?', frequency: 'Weekly', flag: true },
  { type: 'Sprint planning', question: 'Is the right prep done first?', frequency: 'Bi-weekly', flag: false },
  { type: 'Status update', question: 'Could this be a Slack message?', frequency: 'Weekly', flag: true },
  { type: 'Retrospective', question: 'Are action items tracked?', frequency: 'Bi-weekly', flag: false },
]

const TEAM_HABITS = [
  'Every meeting has an agenda or it doesn\'t happen',
  'Buffer blocks between meetings are non-negotiable',
  'Recurring meetings have an end date and review trigger',
  'Focus time is blocked and visible to the whole team',
  'Analytics reviewed monthly to catch meeting creep',
  'New meetings are scheduled with a stated purpose and expected output',
]

export default function TeamProductivityPage() {
  return (
    <>
      <PageHero
        eyebrow="Team Productivity"
        title={
          <>
            Better coordination.
            <br />
            <em className="not-italic text-gold">Less scheduling friction.</em>
          </>
        }
        lede="Team productivity lives and dies by how well time is coordinated. The highest-performing teams don't work more hours — they waste less of them. Shared calendars, availability visibility, and meeting analytics are the infrastructure behind that difference."
        crumbs={[{ label: 'Team Productivity' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try team plan <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/team-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Team calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Team plan from $9/person/month · Free trial</p>
      </PageHero>

      {/* Patterns */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What high-performing teams do differently</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four calendar patterns that separate teams.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PATTERNS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <p.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting audit */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Meeting health check</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Questions every team should ask about recurring meetings.</h2>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-mono text-[10px] text-muted-foreground uppercase tracking-wide">Meeting</th>
                    <th className="text-left py-3 pr-4 font-mono text-[10px] text-muted-foreground uppercase tracking-wide">The question to ask</th>
                    <th className="text-left py-3 pr-4 font-mono text-[10px] text-muted-foreground uppercase tracking-wide">Frequency</th>
                    <th className="text-left py-3 font-mono text-[10px] text-muted-foreground uppercase tracking-wide">Review?</th>
                  </tr>
                </thead>
                <tbody>
                  {MEETING_AUDIT.map((row) => (
                    <tr key={row.type} className="border-b border-border/30">
                      <td className="py-3 pr-4 text-foreground/90">{row.type}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.question}</td>
                      <td className="py-3 pr-4 text-muted-foreground font-mono text-[10px]">{row.frequency}</td>
                      <td className="py-3">
                        <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded-full border ${row.flag ? 'text-amber-400/80 bg-amber-400/10 border-amber-400/20' : 'text-emerald-400/80 bg-emerald-400/10 border-emerald-400/20'}`}>
                          {row.flag ? 'worth asking' : 'likely fine'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team calendar habits */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Team calendar norms</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Six habits of high-performing team calendars.</h2>
          </Reveal>
          <div className="space-y-3">
            {TEAM_HABITS.map((h, i) => (
              <Reveal key={i} delay={i * 30}>
                <div className="flex items-start gap-3 rounded-xl border border-border/50 p-4">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/90">{h}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Better team coordination starts with the calendar."
        subtitle="Availability overlay, team analytics, and meeting templates. From $9/person/month."
        primary={{ label: 'Start team trial', href: '/login' }}
        secondary={{ label: 'Team calendar features', href: '/team-calendar' }}
      />
    </>
  )
}
