import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, BarChart3, Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar for Managers — How effective managers use their calendar differently',
  description:
    'Managers live in back-to-back meetings without time to think or lead. Here\'s how effective managers use their calendar to protect strategic thinking time, structure 1:1s, track team health, and lead instead of just attend.',
  alternates: { canonical: '/calendar-for-managers' },
  openGraph: {
    title: 'Calendar for Managers — Momenties',
    description: 'How effective managers protect thinking time and lead through their calendar.',
    url: '/calendar-for-managers',
    type: 'website',
  },
}

const MANAGER_FEATURES = [
  {
    icon: Shield,
    title: 'Thinking time protected like a board meeting',
    desc: 'Managers who don\'t block thinking time become reactive operators. The calendar is where the decision to lead gets made — or abandoned. Block strategic thinking before the week books itself.',
  },
  {
    icon: Users,
    title: '1:1 structure that surfaces what\'s actually happening',
    desc: 'Every direct report: weekly 1:1 on the calendar with a standing agenda block. Not just a check-in — the meeting where problems surface before they become crises. Templated so the structure is consistent.',
  },
  {
    icon: BarChart3,
    title: 'Team health visible in analytics',
    desc: 'Tag 1:1s, team syncs, performance reviews, and skip-levels. Analytics shows the ratio of time spent on people vs. on output. Managers who spend too little time on people often don\'t know until it\'s too late.',
  },
  {
    icon: Zap,
    title: 'Delegation created in the meeting it\'s decided',
    desc: '"Follow-up with Alex about the API timeline, wednesday." Voice-added during the planning sync. The action is on the calendar before the meeting room clears. Zero delegation slippage.',
  },
]

const MANAGER_PATTERNS = [
  {
    pattern: 'Strategy before email',
    detail: 'Monday morning: 30-minute strategy block before inbox opens. What does this week need to accomplish? The question is answered from intention, not from what arrived overnight.',
  },
  {
    pattern: '1:1s templated and protected',
    detail: 'Each direct report gets a weekly 1:1, same time, templated with a standard structure. Protected from being moved. The consistency is the signal — you show up for your people.',
  },
  {
    pattern: 'Meeting-free window for deep work',
    detail: 'Two hours per day with no meetings. Not aspirational — blocked on the calendar. Thinking, writing, reviewing work. The output of the team depends on the manager having space to actually lead.',
  },
  {
    pattern: 'Skip-levels once per quarter',
    detail: 'Every skip-level on calendar the day Q1 ends. Scheduled for the next quarter before the current one finishes. Skip-levels that wait for the "right moment" don\'t happen.',
  },
  {
    pattern: 'Analytics reviewed monthly',
    detail: 'How much time this month went to: 1:1s, team coordination, deep work, admin, meetings? The ratio tells the story. Effective managers see the pattern before their team does.',
  },
]

export default function CalendarForManagersPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar for Managers"
        title={
          <>
            Lead the team.
            <br />
            <em className="not-italic text-gold">Not just attend the meetings.</em>
          </>
        }
        lede="Most managers have calendars full of meetings and no time to actually manage. Effective managers use their calendar differently — protecting thinking time, structuring 1:1s, tracking team health through analytics, and creating the space to make decisions before crises force them."
        crumbs={[{ label: 'Calendar for Managers' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/team-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Team calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Team plan from $9/person/month</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How effective managers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four calendar tools for people managers.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {MANAGER_FEATURES.map((f, i) => (
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

      {/* Patterns */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Five patterns</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Five calendar patterns of effective managers.</h2>
          </Reveal>
          <div className="space-y-3">
            {MANAGER_PATTERNS.map((item, i) => (
              <Reveal key={item.pattern} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-2">{item.pattern}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What it tracks */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What managers track</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What a manager's calendar analytics shows.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Hours per direct report (1:1 coverage)',
                'Manager-to-output ratio by week',
                'Meeting load vs. strategic work',
                'Skip-level frequency',
                'Team sync time vs. individual coaching',
                'Admin burden relative to leadership time',
                'Focus time completed vs. planned',
                'Weekly trend — are you getting more meetings over time?',
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
        title="Lead the team. Not just the calendar."
        subtitle="1:1 templates, focus time protection, team analytics, and voice scheduling. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Team features', href: '/team-calendar' }}
      />
    </>
  )
}
