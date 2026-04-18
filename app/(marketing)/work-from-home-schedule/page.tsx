import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Home, BarChart3, Shield, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Work From Home Schedule — Structure your remote day with AI calendar tools',
  description:
    'Working from home blurs boundaries between work and life. Momenties helps remote workers structure deep work blocks, separate personal from professional time, and track the actual hours worked.',
  alternates: { canonical: '/work-from-home-schedule' },
  openGraph: {
    title: 'Work From Home Schedule — Momenties',
    description: 'Structure your remote day. Protect your off-time.',
    url: '/work-from-home-schedule',
    type: 'website',
  },
}

const REMOTE_PROBLEMS = [
  {
    icon: Clock,
    problem: 'Work bleeds into evenings because there\'s no clear end to the day',
    fix: 'Set a hard "end of work" block at 6pm. Focus mode enforces it. Tag everything after 6pm as "personal." Analytics shows if work is creeping into off-hours.',
  },
  {
    icon: Home,
    problem: 'Deep work keeps getting interrupted by Slack, emails, and ad-hoc calls',
    fix: 'Block deep work 9–11am every day. Focus mode pauses notifications, marks you as busy to teammates, and rejects meeting requests during the block.',
  },
  {
    icon: BarChart3,
    problem: 'No visibility into whether you\'re working more or less than in-office',
    fix: 'Tag all work events. Analytics shows hours per week trending over time. See if remote work is expanding or contracting your actual working hours.',
  },
  {
    icon: Shield,
    problem: 'Lunch, exercise, and family time keep getting scheduled over',
    fix: '"Lunch 12:30pm every day." Recurring, protected, tagged "personal." Teammates see you as busy. Focus mode keeps you from one-more-slack.',
  },
]

const REMOTE_DAY = [
  { time: '8:30 AM', action: 'Daily Brief: what\'s on today, what carries over from yesterday, any schedule conflicts.' },
  { time: '9–11 AM', action: 'Deep work block. Focus mode active. Notifications paused. Marked as busy to team.' },
  { time: '11 AM–12:30 PM', action: 'Meetings and async. All scheduled with natural language as they appear on Slack.' },
  { time: '12:30–1:15 PM', action: 'Lunch block. Protected. Recurs daily. No one can book over it.' },
  { time: '1:15–5:30 PM', action: 'Collaboration, reviews, more meetings. Voice-add ad-hoc tasks as they come up.' },
  { time: '6 PM+', action: 'Work calendar ends. Personal time tagged separately. Analytics confirm the boundary held.' },
]

const STATS = [
  { value: '2.5h', label: 'Average overtime per day for WFH workers, vs 1.4h in-office (Harvard Business Review)' },
  { value: '67%', label: 'Remote workers report difficulty switching off at end of workday' },
  { value: '3×', label: 'More likely to experience burnout without structured work-day boundaries' },
]

export default function WorkFromHomeSchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Work From Home Schedule"
        title={
          <>
            Structure your remote day.
            <br />
            <em className="not-italic text-gold">Protect your off-time.</em>
          </>
        }
        lede="Remote work without structure expands to fill all available time. Momenties gives your home workday the same boundaries as the office — hard start, protected deep work, real lunch breaks, and a clear end-of-day line."
        crumbs={[{ label: 'Work From Home Schedule' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/focus-mode"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Focus mode
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Focus mode on Pro trial</p>
      </PageHero>

      {/* Stats */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {STATS.map((s, i) => (
              <Reveal key={s.value} delay={i * 60}>
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-gold mb-2">{s.value}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Remote problems */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What we solve</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four WFH calendar problems.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {REMOTE_PROBLEMS.map((item, i) => (
              <Reveal key={item.problem} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <item.icon className="h-4 w-4 text-gold" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">Problem</p>
                  <p className="text-sm text-muted-foreground mb-3">{item.problem}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 leading-relaxed">{item.fix}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal remote day */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Day structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A structured remote day.</h2>
          </Reveal>
          <div className="space-y-3">
            {REMOTE_DAY.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-20 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Remote work with office-level structure."
        subtitle="Protected deep work, hard boundaries, time analytics. Build the day you want to have."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See Focus mode', href: '/focus-mode' }}
      />
    </>
  )
}
