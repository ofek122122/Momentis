import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Bell, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar Notifications — How to use them to arrive prepared, not just on time',
  description:
    'A calendar notification that fires 10 minutes before a meeting tells you the meeting starts in 10 minutes. A notification system built to prepare tells you what to review, who\'s attending, and what decision you\'re there to make. Here\'s the difference.',
  alternates: { canonical: '/calendar-notifications' },
  openGraph: {
    title: 'Calendar Notifications — Momenties',
    description: 'Build a notification system that prepares you, not just alerts you.',
    url: '/calendar-notifications',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Bell,
    title: 'Daily Brief instead of 10-minute pings',
    desc: 'A morning Daily Brief surfaces the day\'s events, context, and priorities before the day begins. You arrive at each meeting having seen it — not discovering it at the notification sound.',
  },
  {
    icon: Clock,
    title: 'Notification timing by event type',
    desc: 'A 10-minute alert for a routine standup. A 60-minute alert for a board meeting. A 24-hour alert for a flight. Set notification timing by event type — not the same 10-minute default for everything.',
  },
  {
    icon: Shield,
    title: 'Prep blocks as the real notification',
    desc: 'The most reliable notification is a prep block 30 minutes before an important meeting. "Prep — investor call, 1:30pm." Not just a ping — a protected window that guarantees preparation happens.',
  },
  {
    icon: BarChart3,
    title: 'Deadline reminders 60 days early',
    desc: 'Compliance renewals, contract deadlines, and license expirations surface in Daily Brief 60 days before they\'re due. Not a notification that fires once when you\'re in another meeting — persistent visibility.',
  },
]

const NOTIFICATION_TYPES = [
  { type: 'Daily Brief', timing: 'Every morning', purpose: 'Surface the full day — events, prep needed, deadlines approaching. Review before the inbox opens.' },
  { type: 'Prep block', timing: '30 min before important meetings', purpose: 'Protected time for review, context gathering, and mental prep. The real notification.' },
  { type: '60-day deadline alert', timing: '60 days before renewal/deadline', purpose: 'License renewals, contract deadlines, and compliance dates visible before urgency forces reaction.' },
  { type: 'Travel prep alert', timing: '24–48 hours before travel', purpose: 'Flight confirmation review, hotel check-in details, and arrival logistics. Not 90 minutes before departure.' },
  { type: 'Meeting 15-min alert', timing: '15 min before meeting', purpose: 'For routine meetings — a final context check, not a surprise announcement.' },
  { type: 'Focus block notification', timing: 'At block start', purpose: 'Signal the transition into deep work. Short tone, not a disruption. The block begins with intention.' },
]

const NOTIFICATION_PROBLEMS = [
  { problem: 'Notification blindness', solution: 'Too many notifications means all are ignored. Set fewer, higher-signal alerts. The Daily Brief replaces a dozen 10-minute pings.' },
  { problem: 'Same lead time for everything', solution: 'A 5-minute alert for a quarterly review and a weekly standup is the same wrong system. Match lead time to preparation need.' },
  { problem: 'Notifications without context', solution: 'A notification that says "Meeting in 10 min" is less useful than a Daily Brief that says what the meeting is for and who\'s attending.' },
  { problem: 'Important deadlines alongside routine events', solution: 'A license renewal deadline should not compete for attention with a Tuesday standup. Separate channels, separate urgency signals.' },
]

export default function CalendarNotificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar Notifications"
        title={
          <>
            Arrive prepared.
            <br />
            <em className="not-italic text-gold">Not just on time.</em>
          </>
        }
        lede="A notification that fires 10 minutes before a meeting tells you the meeting is starting — not what it's about or what you need to review. A notification system built for preparation gives you context before every event, surfaces deadlines 60 days early, and uses prep blocks as the real alert mechanism."
        crumbs={[{ label: 'Calendar Notifications' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/daily-brief"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Daily Brief
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Better notification design</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four ways Momenties redesigns calendar alerts.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Six notification types</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A notification system matched to preparation need.</h2>
          </Reveal>
          <div className="space-y-3">
            {NOTIFICATION_TYPES.map((item, i) => (
              <Reveal key={item.type} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-28 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{item.timing}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">{item.type}</p>
                    <p className="text-xs text-muted-foreground">{item.purpose}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four common problems</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Why most notification systems fail — and what to fix.</h2>
          </Reveal>
          <div className="space-y-3">
            {NOTIFICATION_PROBLEMS.map((item, i) => (
              <Reveal key={item.problem} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-2">{item.problem}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.solution}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What Momenties provides</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Notification and preparation features in Momenties.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Daily Brief every morning — full day view',
                'Prep blocks auto-generated from templates',
                'Deadline visibility 60 days in advance',
                'Per-event-type notification lead times',
                'Focus block start signal',
                'Travel prep alerts before departure',
                'Weekly planning review block',
                'No notification noise for low-priority events',
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
        title="Prepared before every meeting. Never surprised by a deadline."
        subtitle="Daily Brief, prep blocks, deadline visibility, and intelligent notifications. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Daily Brief', href: '/daily-brief' }}
      />
    </>
  )
}
