import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, BarChart3, Shield, Sun, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Productivity System — Calendar-first productivity that actually works',
  description:
    'The most reliable productivity system is one built on your calendar. Momenties makes calendar-based productivity work: fast capture, time analytics, focus protection, and a morning brief that starts the day right.',
  alternates: { canonical: '/productivity-system' },
  openGraph: {
    title: 'Productivity System — Momenties',
    description: 'Calendar-first productivity. Fast capture. Analytics. Focus.',
    url: '/productivity-system',
    type: 'website',
  },
}

const SYSTEM_PILLARS = [
  {
    icon: Zap,
    number: '01',
    title: 'Capture everything instantly',
    desc: 'A productivity system fails when capture is slow. Momenties adds anything to the calendar in under 2 seconds — text, voice, or photo. When capture is frictionless, nothing falls through.',
  },
  {
    icon: Shield,
    number: '02',
    title: 'Protect what matters',
    desc: 'Deep work, exercise, family time — if it\'s not on the calendar and protected, it gets displaced. Focus mode enforces blocks. The calendar becomes a commitment, not a suggestion.',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Review with data, not intuition',
    desc: 'Weekly analytics shows what actually happened: hours in deep work, meetings, personal time. Most people discover their intentions and their calendar are out of sync. Data changes that.',
  },
  {
    icon: Sun,
    number: '04',
    title: 'Brief every morning',
    desc: 'Daily Brief: what\'s on today, what conflicts exist, what tomorrow looks like. The morning review that sets up the day. Under 2 minutes. Before any email or Slack.',
  },
]

const FRAMEWORKS = [
  {
    name: 'GTD (Getting Things Done)',
    how: 'Use Momenties as the "calendar" and "tickler" buckets. Natural language captures next actions in the moment. Analytics shows if scheduled time matches committed tasks.',
  },
  {
    name: 'Time blocking',
    how: 'Block every hour of the work day. AI input makes it fast enough to actually do. Focus mode enforces blocks. Analytics confirms the plan was executed.',
  },
  {
    name: 'Deep work',
    how: 'Schedule 90-minute deep work blocks daily. Protect them with Focus mode. Analytics tracks how many deep work hours you logged each week vs. the goal.',
  },
  {
    name: 'Eat the frog',
    how: 'Block 8-10am every day for the hardest task. Focus mode silences distractions. Daily Brief reminds you of the morning block before you open email.',
  },
]

export default function ProductivitySystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Productivity System"
        title={
          <>
            The calendar is
            <br />
            <em className="not-italic text-gold">the productivity system.</em>
          </>
        }
        lede="Every serious productivity methodology — GTD, time blocking, deep work — eventually reduces to: put it on the calendar and protect it. Momenties makes both steps fast enough to actually work. Capture in 2 seconds. Protect with Focus mode. Review with analytics."
        crumbs={[{ label: 'Productivity System' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/deep-work"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Deep work system
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Analytics on Pro · Focus mode on Pro trial</p>
      </PageHero>

      {/* Four pillars */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The system</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four pillars that make it work.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {SYSTEM_PILLARS.map((p, i) => (
              <Reveal key={p.number} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center">
                      <p.icon className="h-4 w-4 text-gold" />
                    </div>
                    <span className="font-mono text-[10px] text-gold/50">{p.number}</span>
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How Momenties fits frameworks */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Popular frameworks</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties fits your existing system.</h2>
          </Reveal>
          <div className="space-y-4">
            {FRAMEWORKS.map((f, i) => (
              <Reveal key={f.name} delay={i * 60}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-1.5">{f.name}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.how}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why calendar-first works */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Why calendar-first productivity outlasts every other approach.</h2>
          </Reveal>
          <div className="space-y-4 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Task managers and to-do lists work until you have too much to do. At that point they become anxiety generators — a list that grows faster than you can clear it. The calendar is different: it has a hard constraint. Only 24 hours in a day. What you put in the calendar, you actually do.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                The failure mode of calendar-based productivity is the same as task managers: the system stops being used when updating it is slow. Momenties solves that problem directly — 2-second input means the calendar stays current, and a current calendar is a system you can trust.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <div className="space-y-2">
                {[
                  'Calendar has a hard constraint — only 24 hours available',
                  'Scheduled work actually happens; unscheduled work often doesn\'t',
                  'Analytics shows if your priorities match your time allocation',
                  'Focus mode makes the calendar an enforcer, not just a reminder',
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Build the system on your calendar. Make it stick."
        subtitle="Capture fast. Protect hard. Review with data. Start free."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See time analytics', href: '/features/analytics' }}
      />
    </>
  )
}
