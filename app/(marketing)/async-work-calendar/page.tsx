import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Globe, Shield, BarChart3, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Async Work Calendar — How async-first teams use the calendar differently',
  description:
    'Async-first teams don\'t eliminate the calendar — they use it differently. Deep work blocks replace default meetings. Time zone availability replaces assumed synchrony. Shared context replaces status meetings. Here\'s how the calendar supports async work.',
  alternates: { canonical: '/async-work-calendar' },
  openGraph: {
    title: 'Async Work Calendar — Momenties',
    description: 'How async-first teams use the calendar — deep work blocks, time zones, and shared context.',
    url: '/async-work-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Shield,
    title: 'Deep work blocks replace default meetings',
    desc: 'In an async-first culture, the calendar is an availability signal — not a scheduling default. Deep work blocks from 9–11am signal: this person is in focus mode. Team members respect the signal because it\'s on the shared calendar.',
  },
  {
    icon: Globe,
    title: 'Time zone availability as a shared layer',
    desc: 'Async teams in multiple time zones share availability windows — not full calendars. The overlap window is visible: this is when real-time communication is possible. Everything else is async. The calendar makes the constraint explicit.',
  },
  {
    icon: Clock,
    title: 'Defined synchronous windows',
    desc: '"Real-time available: 10am–12pm PT." A defined window for synchronous communication — calls, decisions, urgent items. Outside that window: async. The calendar defines both — and the team knows the rules.',
  },
  {
    icon: BarChart3,
    title: 'Async analytics reveal meeting debt',
    desc: 'Async teams use analytics to track meeting hours per week. The target: fewer than 8 hours per week in synchronous meetings. Analytics shows whether the team is trending toward synchrony or maintaining async discipline.',
  },
]

const ASYNC_PATTERNS = [
  {
    pattern: 'Default to async, calendar for exceptions',
    detail: 'Most communication doesn\'t require real-time synchrony. The calendar holds only what does: decisions that need debate, complex collaborations, relationship-building. Everything else: async docs, recorded video, written context.',
  },
  {
    pattern: 'Deep work blocks as team infrastructure',
    detail: 'Team-wide deep work windows — agreed in advance. "Tuesday and Thursday mornings: no meetings, no Slack responses expected." Shared calendar blocks signal the commitment. The team protects the window together.',
  },
  {
    pattern: 'Time zone overlap as explicit availability',
    detail: 'A distributed team marks their real-time availability window on the shared calendar: "Available for sync 10am–1pm ET." Outside that window, the expectation is async response. No assumptions. No late-night calls by accident.',
  },
  {
    pattern: 'Meeting-free days for the whole team',
    detail: 'Wednesday: no internal meetings. Full day of deep work, async progress, and individual output. Marked on the team calendar. New requests check the calendar before booking. The day holds.',
  },
  {
    pattern: 'Status replaced by calendar transparency',
    detail: 'Status meetings exist to share context that the calendar could surface directly. What is everyone working on this week? It\'s on the calendar. Deep work blocks, project milestones, and external commitments — all visible to the team.',
  },
]

export default function AsyncWorkCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Async Work Calendar"
        title={
          <>
            Async by default.
            <br />
            <em className="not-italic text-gold">Synchrony by choice.</em>
          </>
        }
        lede="Async-first teams don't eliminate the calendar — they use it to signal availability instead of scheduling obligations. Deep work blocks replace default meetings. Defined synchronous windows replace assumed real-time availability. Shared context on the calendar replaces status meetings. Here's how."
        crumbs={[{ label: 'Async Work Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/calendar-for-remote-teams"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Remote team calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Team plan from $9/person/month</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four async calendar principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How async teams use the calendar differently.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Five patterns</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Calendar patterns for async-first teams.</h2>
          </Reveal>
          <div className="space-y-3">
            {ASYNC_PATTERNS.map((item, i) => (
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

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Async team features</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties provides for async teams.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Time zone availability display per team member',
                'Team-wide deep work block coordination',
                'Meeting-free day enforcement on shared calendar',
                'Meeting load analytics per person and team',
                'Synchronous window definition and sharing',
                'Individual focus time visibility to the team',
                'Natural language scheduling across time zones',
                'Meeting minutes and action items as calendar events',
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
        title="Async by default. Deep work protected. Time zones handled."
        subtitle="Async team calendar, deep work coordination, and meeting analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Remote team calendar', href: '/calendar-for-remote-teams' }}
      />
    </>
  )
}
