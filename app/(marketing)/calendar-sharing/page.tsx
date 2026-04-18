import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Shield, BarChart3, Globe, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar Sharing — Share your availability without sharing your schedule',
  description:
    'Calendar sharing that works means others can see when you\'re free without seeing everything you\'ve blocked. Shared availability, team overlaps, and focus time signaled — without surrendering your privacy.',
  alternates: { canonical: '/calendar-sharing' },
  openGraph: {
    title: 'Calendar Sharing — Momenties',
    description: 'Share availability, protect privacy, and coordinate teams with calendar sharing.',
    url: '/calendar-sharing',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Users,
    title: 'Availability sharing without full calendar access',
    desc: 'Share a link that shows free/busy status — not event titles, not details. Colleagues and clients see when you\'re available. They don\'t see what you\'re doing. Availability shared. Privacy kept.',
  },
  {
    icon: Shield,
    title: 'Focus blocks visible as unavailable',
    desc: 'Deep work blocks, focus sessions, and personal commitments all show as busy to others. The signal is clear: this time is taken. No explanation required. No meeting invited over your protected time.',
  },
  {
    icon: BarChart3,
    title: 'Team availability as a layer',
    desc: 'View your team\'s calendars as an availability overlay — see who\'s free, who\'s in meetings, who has focus blocks. Find the overlap window without five Slack messages. Schedule into actual availability.',
  },
  {
    icon: Globe,
    title: 'Shared calendars for teams and families',
    desc: 'Create a shared calendar: team events, family schedule, project milestones. All members see the same events. Changes sync instantly. The shared view without merging everyone\'s private calendars.',
  },
]

const SHARING_SCENARIOS = [
  {
    scenario: 'Sharing with colleagues',
    approach: 'Free/busy sharing. They see availability blocks — not event titles. Book into free slots. Deep work blocks, personal appointments, and confidential meetings all show as busy.',
  },
  {
    scenario: 'Sharing with clients',
    approach: 'Public availability link for scheduling. Client sees open slots in your timezone. Books directly. No back-and-forth. You control which hours are bookable.',
  },
  {
    scenario: 'Team shared calendar',
    approach: 'One shared calendar for team events: standups, retrospectives, company holidays, team outings. Everyone contributes. All see the team layer alongside their personal calendar.',
  },
  {
    scenario: 'Family shared calendar',
    approach: 'Family calendar for pickups, dinners, appointments, and events. Both partners see the family layer. No scheduling conflicts between work and family commitments.',
  },
  {
    scenario: 'Project milestone calendar',
    approach: 'Shared project calendar for all stakeholders: launch dates, review deadlines, external meetings. All parties see the same milestone view. Status update meetings become optional.',
  },
]

export default function CalendarSharingPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar Sharing"
        title={
          <>
            Availability shared.
            <br />
            <em className="not-italic text-gold">Privacy kept.</em>
          </>
        }
        lede="Calendar sharing that works means others can see when you're free — not everything you've blocked. Share your availability without surrendering your schedule. Set team availability layers for coordinated scheduling. Create shared calendars for teams and families without merging personal calendars."
        crumbs={[{ label: 'Calendar Sharing' }]}
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

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How calendar sharing works</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four types of calendar sharing in Momenties.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Five sharing scenarios</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">The right sharing approach for every context.</h2>
          </Reveal>
          <div className="space-y-3">
            {SHARING_SCENARIOS.map((item, i) => (
              <Reveal key={item.scenario} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-2">{item.scenario}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.approach}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Privacy controls</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What others see — and what they don&apos;t.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Free/busy sharing without event titles',
                'Granular permissions per person or group',
                'Revoke access anytime',
                'Personal events hidden by default',
                'Focus blocks show as busy, no details',
                'No personal data in shared links',
                'GDPR-compliant sharing infrastructure',
                'Google Calendar sync preserves permissions',
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
        title="Share availability. Keep your schedule private."
        subtitle="Free/busy sharing, team availability layers, and shared calendars. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Team calendar', href: '/team-calendar' }}
      />
    </>
  )
}
