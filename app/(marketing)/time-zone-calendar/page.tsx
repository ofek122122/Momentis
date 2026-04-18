import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Globe, Clock, Users, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Time Zone Calendar — Schedule across time zones without the math',
  description:
    'Scheduling across time zones shouldn\'t require a world clock, a calculator, and three Slack messages. Momenties converts time zones automatically, shows your team\'s local times, and captures cross-time-zone events in natural language.',
  alternates: { canonical: '/time-zone-calendar' },
  openGraph: {
    title: 'Time Zone Calendar — Momenties',
    description: 'Cross-time-zone scheduling, natural language, and team timezone visibility.',
    url: '/time-zone-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Globe,
    title: 'Natural language with time zone context',
    desc: '"Sync with London team tuesday 9am their time." Momenties converts to your local time automatically. No mental arithmetic. No "is that 2pm or 3pm for them?" — just schedule.',
  },
  {
    icon: Clock,
    title: 'Time zone displayed per event',
    desc: 'Every event shows the local time for all participants. "Standup 9am PT / 12pm ET / 5pm GMT." The time is visible at a glance — no clicking to verify, no embarrassing missed calls.',
  },
  {
    icon: Users,
    title: 'Team time zones in one view',
    desc: 'See your distributed team\'s business hours as a layer on your calendar. Schedule in the overlap window. Color-coded by who\'s available. Find the slot without five Slack messages.',
  },
  {
    icon: Zap,
    title: 'Voice capture across time zones',
    desc: '"Add call with Tokyo office, thursday 8am Japan Standard Time." Voice-added while reviewing the email. Calendar converts and places it in your local time. Correct for every participant.',
  },
]

const TZ_EXAMPLES = [
  { input: 'Call with London 9am their time monday', parsed: 'Monday 4am ET / 9am GMT / 10am CET', note: 'Converts to your local automatically' },
  { input: 'Sync with SF office 2pm Pacific tuesday', parsed: 'Tuesday 2pm PT / 5pm ET / 10pm GMT', note: 'Multi-zone display on the event' },
  { input: 'Tokyo standup thursday 9am JST', parsed: 'Thursday 9am JST / 1am GMT / 8pm ET (Wed)', note: 'Overnight crossing handled' },
  { input: 'Sydney team friday end of their day', parsed: 'Friday 5pm AEST / 8am CET / 7am GMT', note: 'Natural language time reference' },
]

const DISTRIBUTED_PATTERNS = [
  {
    pattern: 'Show team availability before booking',
    detail: 'Before scheduling a cross-timezone call, view your team\'s calendar layer. See who\'s in core hours, who\'s at end of day, who\'s starting their morning. Book into the overlap window.',
  },
  {
    pattern: 'Anchor recurring calls to one timezone',
    detail: 'Recurring cross-timezone calls rotate who gets the bad time. Momenties tracks which timezone the meeting anchors to, so you can rotate fairly across quarters.',
  },
  {
    pattern: 'Label events with all relevant zones',
    detail: 'For international calls, add the time zones of all participants as part of the event title: "Investor call 3pm ET / 9pm CET." Everyone reads their own time at a glance.',
  },
  {
    pattern: 'Block international travel preparation',
    detail: 'Flying to a different timezone? Add a "timezone adjustment" block on arrival day. Block that day\'s afternoon — no calls, no commitments. Jet lag is a calendar problem first.',
  },
]

export default function TimeZoneCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Time Zone Calendar"
        title={
          <>
            Schedule globally.
            <br />
            <em className="not-italic text-gold">No mental arithmetic.</em>
          </>
        }
        lede="Cross-timezone scheduling shouldn't require a world clock, a calculator, and a Slack thread. Momenties converts time zones in natural language, displays every participant's local time on each event, and shows your distributed team's availability before you pick a slot."
        crumbs={[{ label: 'Time Zone Calendar' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How it works</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for distributed scheduling.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Parsing examples</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Say it in any timezone. It lands correctly.</h2>
          </Reveal>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-mono text-[10px] text-gold/60 uppercase tracking-wide">You say</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] text-gold/60 uppercase tracking-wide">Calendar shows</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] text-gold/60 uppercase tracking-wide hidden sm:table-cell">How</th>
                </tr>
              </thead>
              <tbody>
                {TZ_EXAMPLES.map((ex, i) => (
                  <tr key={i} className="border-b border-border/30 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-xs font-mono text-foreground/80">&ldquo;{ex.input}&rdquo;</td>
                    <td className="py-3 px-4 text-xs text-foreground/90">{ex.parsed}</td>
                    <td className="py-3 px-4 text-xs text-muted-foreground hidden sm:table-cell">{ex.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four patterns</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How distributed teams manage time zones on the calendar.</h2>
          </Reveal>
          <div className="space-y-3">
            {DISTRIBUTED_PATTERNS.map((item, i) => (
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

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Supported</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties handles for distributed teams.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Natural language timezone references ("their time", "my time")',
                'IANA timezone names and abbreviations (PT, CET, JST)',
                'Overnight date crossings handled automatically',
                'Multi-participant timezone display on every event',
                'Team availability layer across timezones',
                'Recurring cross-timezone meeting management',
                'Voice input with timezone conversion',
                'Google Calendar sync preserves timezone data',
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
        title="Schedule globally. No math. No missed calls."
        subtitle="Time zone conversion, distributed team scheduling, and cross-timezone natural language. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Remote team calendar', href: '/calendar-for-remote-teams' }}
      />
    </>
  )
}
