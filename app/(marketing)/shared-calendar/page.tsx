import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Calendar, Eye, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shared Calendar — Team availability, overlays, and coordination at a glance',
  description:
    'Momenties shared calendars let teams see each other\'s availability in real time, find meeting windows without back-and-forth, and coordinate schedules across time zones. Team plan from $9/person/month.',
  alternates: { canonical: '/shared-calendar' },
  openGraph: {
    title: 'Shared Calendar — Momenties Teams',
    description: 'Team availability at a glance. No more scheduling back-and-forth.',
    url: '/shared-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Eye,
    title: 'Availability overlay',
    desc: 'See every team member\'s free/busy status on a single calendar view. Color-coded by person. Filter by who you need. Find a shared window in seconds.',
  },
  {
    icon: Users,
    title: 'Multi-person scheduling',
    desc: '"Team sync 5 people, 1 hour, this week." AI finds the first available slot across all 5 calendars and creates the event. No Doodle polls.',
  },
  {
    icon: Calendar,
    title: 'Shared team calendars',
    desc: 'Create calendars that appear on every team member\'s view. Company holidays, sprint ceremonies, launch dates — visible to everyone automatically.',
  },
  {
    icon: Zap,
    title: 'Fast group event creation',
    desc: '"All-hands next Friday 10am, all 12 people." Natural language handles the attendee list when you\'ve linked your team. One input, everyone scheduled.',
  },
]

const USE_CASES = [
  {
    label: 'Small teams (2–10)',
    desc: 'Overlay all calendars. Know at a glance who\'s free when. No "when are you free?" pings.',
  },
  {
    label: 'Remote teams',
    desc: 'Timezone-aware availability. See 9am Tokyo vs 9am London on the same view. Find the window that works across continents.',
  },
  {
    label: 'Project teams',
    desc: 'Shared sprint calendar visible to all engineers, designers, and PMs. Stand-ups, reviews, and retrospectives created once, seen by all.',
  },
  {
    label: 'Executive assistants',
    desc: 'Manage multiple executives\' calendars from one view. See all availability at once. Schedule with natural language across all of them.',
  },
]

const PLAN_COMPARISON = [
  { feature: 'Personal calendar', free: true, pro: true, team: true },
  { feature: 'AI natural language input', free: true, pro: true, team: true },
  { feature: 'Calendar analytics', free: false, pro: true, team: true },
  { feature: 'Team availability overlay', free: false, pro: false, team: true },
  { feature: 'Shared team calendars', free: false, pro: false, team: true },
  { feature: 'Multi-person scheduling', free: false, pro: false, team: true },
  { feature: 'Admin controls', free: false, pro: false, team: true },
]

export default function SharedCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Shared Calendar"
        title={
          <>
            Team availability,
            <br />
            <em className="not-italic text-gold">instantly visible.</em>
          </>
        }
        lede="Momenties team calendars overlay everyone's schedules in one view. Find meeting windows across any number of people without a single Slack message. AI scheduling suggests the first open slot across the whole team."
        crumbs={[{ label: 'Shared Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/teams"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            See Team plan <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Start free
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Team plan from $9/person/month · Shared calendars require Team plan</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Team features</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Everything your team needs to coordinate.</h2>
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

      {/* Who uses shared calendars */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Use cases</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Who uses shared calendars.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.label} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-1.5">{uc.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Plan comparison */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What's in each plan.</h2>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-[#0a0a0d]">
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Feature</th>
                    <th className="text-center px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Free</th>
                    <th className="text-center px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Pro</th>
                    <th className="text-center px-4 py-3 text-xs font-mono text-gold/60 uppercase tracking-wider">Team</th>
                  </tr>
                </thead>
                <tbody>
                  {PLAN_COMPARISON.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-border/40 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                      <td className="px-4 py-2.5 text-sm text-foreground/80">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center">
                        {row.free ? <CheckCircle2 className="h-4 w-4 text-foreground/40 mx-auto" /> : <XCircle className="h-4 w-4 text-red-400/30 mx-auto" />}
                      </td>
                      <td className="px-4 py-2.5 text-center">
                        {row.pro ? <CheckCircle2 className="h-4 w-4 text-foreground/40 mx-auto" /> : <XCircle className="h-4 w-4 text-red-400/30 mx-auto" />}
                      </td>
                      <td className="px-4 py-2.5 text-center">
                        {row.team ? <CheckCircle2 className="h-4 w-4 text-gold mx-auto" /> : <XCircle className="h-4 w-4 text-red-400/30 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Stop asking when people are free. Just see it."
        subtitle="Team plan gives everyone availability overlays, shared calendars, and AI multi-person scheduling."
        primary={{ label: 'See Team plan', href: '/teams' }}
        secondary={{ label: 'Start free', href: '/login' }}
      />
    </>
  )
}
