import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Inbox Zero + Calendar — How to connect email management to calendar blocking',
  description:
    'Inbox zero fails when email cleanup creates scheduling commitments that go back into the inbox. The missing piece is the calendar. Here\'s how to close the loop between email processing and calendar blocking so commitments land on the calendar — not back in the inbox.',
  alternates: { canonical: '/inbox-zero-calendar' },
  openGraph: {
    title: 'Inbox Zero + Calendar — Momenties',
    description: 'Close the loop between email inbox processing and calendar blocking.',
    url: '/inbox-zero-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Clock,
    title: 'Email processing as a calendar block',
    desc: 'Inbox zero isn\'t a mindset — it\'s a time block. "Inbox processing — 8:45am 15 mins, 1pm 15 mins, 5pm 15 mins." Three sessions. Outside those sessions, the inbox is closed. Email expands to fill the time given.',
  },
  {
    icon: Zap,
    title: 'Voice-capture commitments while processing',
    desc: 'Reading an email: "I can do Tuesday 3pm." Voice-add before replying: "Meeting with James, tuesday 3pm 45 mins." On the calendar before the reply is sent. The reply confirms what\'s already in the system.',
  },
  {
    icon: Shield,
    title: 'Deep work blocked before email time',
    desc: 'Deep work before inbox processing. Never in reverse. Morning deep work at 9am. Inbox at 11am. The highest-value work happens before the reactive work has a chance to re-prioritize the day.',
  },
  {
    icon: BarChart3,
    title: 'Email time vs. work time analytics',
    desc: 'Tag email processing blocks separately. Analytics shows actual email time per week. Is it 30 minutes total or 3 hours? The number changes behavior. Most knowledge workers are shocked when they see it.',
  },
]

const SYSTEM = [
  { step: '1', title: 'Block email sessions (not email "time")', detail: 'Three 15-minute sessions: morning, midday, end of day. Outside these blocks, the inbox is closed. Not "I\'ll check email less" — specific, time-bounded blocks on the calendar.' },
  { step: '2', title: 'Process, not browse', detail: 'Each session: action every email. Reply, delegate, add to calendar, or archive. Nothing stays in the inbox after processing. The inbox is not a storage system.' },
  { step: '3', title: 'Calendar first, reply second', detail: 'Any email that requires a meeting: voice-add to calendar before replying. Reply confirms what\'s already scheduled. The calendar is always ahead of the inbox.' },
  { step: '4', title: 'Protect deep work from email', detail: 'Deep work blocks are inviolable. No email during deep work. Not "I\'ll just check one thing." The calendar block signals unavailability — to yourself and to others.' },
  { step: '5', title: 'Measure email time weekly', detail: 'Analytics: how many hours per week went to email processing? The number is the target. Not zero — but not 3 hours of daily fragmentation either.' },
]

export default function InboxZeroCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Inbox Zero + Calendar"
        title={
          <>
            Email processed.
            <br />
            <em className="not-italic text-gold">Commitments on the calendar.</em>
          </>
        }
        lede="Inbox zero fails when commitments from email land back in the inbox instead of on the calendar. The fix is the connection: process email in timed sessions, voice-capture every scheduling commitment before replying, and protect deep work from email interruption. Here's how to close the loop."
        crumbs={[{ label: 'Inbox Zero + Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/focus-time"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Focus time guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four pieces of the system</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How the calendar closes the inbox zero loop.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Five-step system</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Connect inbox zero to the calendar.</h2>
          </Reveal>
          <div className="space-y-3">
            {SYSTEM.map((step, i) => (
              <Reveal key={step.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-5">
                  <span className="font-mono text-lg font-bold text-gold/40 w-8 shrink-0 leading-tight">{step.step}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">{step.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What the system achieves</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What calendar-connected inbox zero looks like.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Email processed in defined sessions, not continuously',
                'Every scheduling commitment on calendar before reply sent',
                'Deep work never interrupted by email',
                'Email time visible as analytics — measured and managed',
                'No meetings lost in the inbox',
                'Inbox as input, calendar as the system of record',
                'Voice capture while reading email — instant scheduling',
                'Total email time under 45 minutes per day',
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
        title="Email processed. Commitments on the calendar. Deep work protected."
        subtitle="Email session blocking, voice capture, and time analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Focus time guide', href: '/focus-time' }}
      />
    </>
  )
}
