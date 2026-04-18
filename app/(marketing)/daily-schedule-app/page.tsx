import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Sun, Zap, BarChart3, Bell, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Daily Schedule App — AI input, morning brief, and time analytics',
  description:
    'The best daily schedule app adds events in under 2 seconds, briefs you every morning with the full day\'s view, and shows you how you actually spent your time. Free to start. Works with Google Calendar.',
  alternates: { canonical: '/daily-schedule-app' },
  openGraph: {
    title: 'Daily Schedule App — Momenties',
    description: 'Add events in 2 seconds. Morning brief. Daily analytics.',
    url: '/daily-schedule-app',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Zap,
    title: 'Add to your day in under 2 seconds',
    desc: '"Coffee with Sam 10am." "Dentist thursday 3pm." "Team lunch friday noon." Each event added the moment you think of it. No form, no field-filling, no friction.',
  },
  {
    icon: Sun,
    title: 'Morning brief with full-day awareness',
    desc: 'First thing each morning: today\'s events, potential conflicts, and tomorrow\'s overview. Start the day with complete awareness — never surprised mid-meeting.',
  },
  {
    icon: Bell,
    title: 'Smart reminders at the right time',
    desc: 'Reminders set automatically based on event type. Meetings get a 15-minute heads-up. Deadlines get the day before. Location-based events get travel buffer time.',
  },
  {
    icon: BarChart3,
    title: 'End-of-day analytics',
    desc: 'See how the day actually went: hours in meetings, deep work time, personal commitments. One number changes most people\'s next-day planning.',
  },
]

const DAILY_INPUTS = [
  '"Client call 2pm 45 minutes" → event created, reminder set',
  '"Move yoga to thursday 7am" → existing event rescheduled',
  '"Lunch with Maria friday 12:30, Nobu" → event with location',
  '"Budget review biweekly thursdays 3pm starting next week" → recurring',
  '"Block 9-11am tomorrow for deep work" → focus block created',
]

export default function DailyScheduleAppPage() {
  return (
    <>
      <PageHero
        eyebrow="Daily Schedule App"
        title={
          <>
            Your day, organized
            <br />
            <em className="not-italic text-gold">before it starts.</em>
          </>
        }
        lede="A daily schedule app should tell you what the day looks like before you've started it, let you update it in seconds when plans change, and show you how the day actually went. Momenties does all three — free."
        crumbs={[{ label: 'Daily Schedule App' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/daily-brief"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Daily Brief
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Morning brief included · Works with Google Calendar</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What it does</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features that make daily scheduling work.</h2>
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

      {/* Daily input examples */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Input examples</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Update your day as fast as plans change.</h2>
          </Reveal>
          <div className="space-y-3">
            {DAILY_INPUTS.map((ex, i) => (
              <Reveal key={ex} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-4 font-mono text-sm text-foreground/80">
                  {ex}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What makes a great daily schedule app */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What a great daily schedule app gets right.</h2>
          </Reveal>
          <div className="space-y-4 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Most calendar apps are designed for planning future events. A daily schedule app needs to be optimized for today — what's on, what's changed, and what you need to know to get through the next 8 hours.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                That means three things: fast event capture (under 2 seconds), a morning view that tells you everything without searching, and enough intelligence to surface what matters — conflicts, heavy meeting days, back-to-back sessions without a break.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <div className="space-y-2">
                {[
                  'Morning brief surfaces conflicts before the day starts',
                  'AI input captures schedule changes as fast as you hear about them',
                  'Daily analytics shows whether your day matched your intentions',
                  'Voice input updates the schedule hands-free from anywhere',
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
        title="Own your day before it owns you."
        subtitle="Morning brief, fast input, daily analytics. Free forever — no card needed."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See Daily Brief', href: '/daily-brief' }}
      />
    </>
  )
}
