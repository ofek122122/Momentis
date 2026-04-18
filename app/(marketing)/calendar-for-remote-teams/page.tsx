import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Globe, Clock, Users, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar for remote teams — Schedule across timezones without the chaos',
  description:
    'Remote teams waste hours every week on timezone math and scheduling back-and-forth. Momenties shows your whole team\'s availability, handles timezone conversion automatically, and syncs across calendars.',
  alternates: { canonical: '/calendar-for-remote-teams' },
  openGraph: {
    title: 'Calendar for remote teams',
    description: 'Schedule across timezones without the chaos.',
    url: '/calendar-for-remote-teams',
    type: 'website',
  },
}

const PROBLEMS = [
  {
    icon: Globe,
    problem: 'Timezone math before every cross-timezone meeting',
    fix: 'Momenties displays every team member\'s availability in their local time, converted automatically. No mental arithmetic, no missed conversions.',
  },
  {
    icon: Clock,
    problem: 'Finding overlap hours when the team is spread across 3+ timezones',
    fix: 'Team availability overlay highlights the overlap window — the hours where everyone is in reasonable working hours. Book in there first.',
  },
  {
    icon: Users,
    problem: 'Async updates get lost; nobody knows what\'s on the calendar',
    fix: 'Shared team events propagate to everyone\'s calendar instantly. One person creates the all-hands; all twelve people have it within seconds.',
  },
  {
    icon: Zap,
    problem: 'New hires in different regions can\'t tell when core team is available',
    fix: 'Onboarding includes team calendar access from day one. The availability overlay is the answer to "when can I reach the Paris office?"',
  },
]

const TIMEZONES = [
  { city: 'New York', tz: 'EST (UTC-5)', overlap: '2pm–5pm ET · optimal' },
  { city: 'London', tz: 'BST (UTC+1)', overlap: '7pm–10pm · late but workable' },
  { city: 'Berlin', tz: 'CEST (UTC+2)', overlap: '8pm–11pm · evening' },
  { city: 'Singapore', tz: 'SGT (UTC+8)', overlap: '2am–5am · async recommended' },
  { city: 'San Francisco', tz: 'PST (UTC-8)', overlap: '11am–2pm PT · optimal' },
]

const ASYNC_TIPS = [
  'Mark events as "async-friendly" — attendees can review the recording instead of attending live.',
  'Scheduling links (Q3 2026) let anyone book against your real availability without timezone confusion.',
  'Set working hours per calendar so others see you as unavailable outside your timezone\'s day.',
  'The Daily Brief adjusts to your local timezone — events always shown in your context.',
]

export default function CalendarForRemoteTeamsPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar for remote teams"
        title={
          <>
            Schedule across timezones
            <br />
            <em className="not-italic text-gold">without the chaos.</em>
          </>
        }
        lede="Remote teams lose 3–5 hours a week to timezone math, scheduling back-and-forth, and 'what time is that for you?' messages. Momenties makes that friction disappear."
        crumbs={[{ label: 'Calendar for remote teams' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free trial <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/teams"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Team plan
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Pro trial · 14 days · Team plan from $9/person/mo</p>
      </PageHero>

      {/* Problems */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What we solve</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four remote team scheduling problems.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PROBLEMS.map((item, i) => (
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

      {/* Timezone overlap visualization */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Timezone overlap</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              Find the window. Book in it.
            </h2>
            <p className="text-sm text-muted-foreground mt-2">Example: US–Europe team optimal overlap (9am New York = 3pm Berlin)</p>
          </Reveal>
          <Reveal>
            <div className="rounded-xl border border-border overflow-hidden bg-[#0f0f14]">
              <div className="border-b border-border px-5 py-3">
                <span className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wider">Team locations</span>
              </div>
              <div className="divide-y divide-border/50">
                {TIMEZONES.map((tz) => (
                  <div key={tz.city} className="flex items-center px-5 py-3 gap-4">
                    <span className="text-sm font-medium text-foreground w-24 shrink-0">{tz.city}</span>
                    <span className="text-xs font-mono text-muted-foreground w-32 shrink-0">{tz.tz}</span>
                    <span className={`text-xs ${tz.overlap.includes('optimal') ? 'text-gold' : tz.overlap.includes('async') ? 'text-muted-foreground/40' : 'text-foreground/60'}`}>
                      {tz.overlap}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border/50 bg-gold/5 px-5 py-3">
                <p className="text-xs text-gold">Best overlap window: 2pm–5pm ET (7pm–10pm London, 8pm–11pm Berlin)</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Remote-async tips */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Async-friendly</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Working well across timezones.</h2>
          </Reveal>
          <div className="space-y-3">
            {ASYNC_TIPS.map((tip, i) => (
              <Reveal key={i} delay={i * 35}>
                <div className="flex items-start gap-3 rounded-xl border border-border/50 p-4">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/85">{tip}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team plan callout */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-gold/20 bg-gold/5 p-7">
              <p className="text-[9px] font-mono uppercase tracking-widest text-gold mb-3">Team plan</p>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Built for distributed teams.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Team plan ($9/person/month for 5+ seats) includes team calendar overlays, overload warnings, admin controls, shared event templates, and team analytics.
              </p>
              <div className="grid sm:grid-cols-2 gap-2 mb-5">
                {[
                  'Unlimited team members',
                  'Timezone-aware availability',
                  'Overload warnings',
                  'Team analytics',
                  'Shared event templates',
                  'Admin controls + SSO',
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-3 w-3 text-gold shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <Link
                href="/teams"
                className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press"
              >
                See Team plan <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Your team is everywhere. Your calendar should keep up."
        subtitle="Team calendar, timezone overlaps, shared events. From day one."
        primary={{ label: 'Start free trial', href: '/login' }}
        secondary={{ label: 'Team plan details', href: '/teams' }}
      />
    </>
  )
}
