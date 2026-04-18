import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, Mic, Camera, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Smart Calendar App — AI-powered scheduling that understands natural language',
  description:
    'A smart calendar understands how you communicate — natural language, voice, and photos — and gives you analytics to understand how you spend time. Momenties is the AI calendar that works at the speed of thought.',
  alternates: { canonical: '/smart-calendar' },
  openGraph: {
    title: 'Smart Calendar App — Momenties',
    description: 'AI-powered scheduling that understands natural language, voice, and photos.',
    url: '/smart-calendar',
    type: 'website',
  },
}

const SMART_FEATURES = [
  {
    icon: Zap,
    title: 'Natural language that actually works',
    desc: '"Board meeting with investors next thursday 2pm 90 mins, downtown office." Parsed correctly. Time zone inferred. Duration set. No form filling — just the words you\'d say to a person.',
  },
  {
    icon: Mic,
    title: 'Voice input for zero-friction capture',
    desc: 'Running between meetings. Driving. Walking the dog. Tap the mic, say the event, done. Voice scheduling is the only input fast enough to capture the moment you decide something, wherever that moment is.',
  },
  {
    icon: Camera,
    title: 'Photo parsing for printed schedules',
    desc: 'Conference agenda, class timetable, printed workout plan, handwritten schedule on a whiteboard — photograph it. AI extracts all events in 30 seconds. Zero manual entry.',
  },
  {
    icon: BarChart3,
    title: 'Analytics that understand your week',
    desc: 'A smart calendar doesn\'t just show events — it shows patterns. Hours by category, meeting load by day, focus time vs. reactive time, week-over-week trends. The data changes how you schedule.',
  },
  {
    icon: Shield,
    title: 'Focus protection that enforces the plan',
    desc: 'Block deep work. Focus mode silences distractions. The smart calendar protects the time you designated — not just displays it. The difference between a schedule and a commitment.',
  },
]

const HOW_SMART_WORKS = [
  {
    input: '"Sprint planning monday 10am 2 hours, engineering team"',
    parsed: 'Event: Sprint planning · Mon · 10:00 AM · 2h · Tag: engineering',
    engine: 'chrono-node — 18ms',
  },
  {
    input: '"Dentist appointment next thursday afternoon"',
    parsed: 'Event: Dentist · Thu · ~2:00 PM · Reminder: 1 day before',
    engine: 'Gemini 2.5 Flash — 290ms',
  },
  {
    input: 'Voice: "Team offsite september 14-16, venue TBD"',
    parsed: 'Event: Team offsite · Sep 14–16 · 3 days · Note: venue TBD',
    engine: 'Deepgram + chrono-node — 340ms',
  },
  {
    input: 'Photo of conference schedule',
    parsed: '12 events extracted, dates and times parsed, all added to calendar',
    engine: 'Gemini Vision — 2.1s',
  },
]

export default function SmartCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Smart Calendar"
        title={
          <>
            Scheduling at the
            <br />
            <em className="not-italic text-gold">speed of thought.</em>
          </>
        }
        lede="A smart calendar understands natural language, listens to your voice, reads photos of schedules, and shows you analytics about where your time goes. Momenties is the AI calendar that works the way you already think — not the way form fields demand."
        crumbs={[{ label: 'Smart Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try it free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/ai-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            AI calendar features
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Works with Google Calendar</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What makes it smart</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Five capabilities that define a smart calendar.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {SMART_FEATURES.map((f, i) => (
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

      {/* How AI parsing works */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Under the hood</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties parses what you say.</h2>
          </Reveal>
          <div className="space-y-3">
            {HOW_SMART_WORKS.map((item, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-xs font-mono text-muted-foreground mb-3 p-3 bg-white/[0.02] rounded-lg border border-border/30">
                    &ldquo;{item.input}&rdquo;
                  </p>
                  <p className="text-xs text-foreground/80 mb-2">{item.parsed}</p>
                  <span className="font-mono text-[9px] text-gold/60 bg-gold/5 px-2 py-0.5 rounded-full border border-gold/20">{item.engine}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Full capability list</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Everything a smart calendar should do.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Natural language event creation',
                'Voice scheduling from any device',
                'Photo and document parsing',
                'Intelligent time zone handling',
                'Recurring event creation from natural language',
                'Focus mode and distraction blocking',
                'Weekly analytics and time breakdown',
                'Team availability overlay',
                'Calendar templates for any repeatable workflow',
                'Daily Brief — day-ahead awareness',
                'Google Calendar native sync',
                'Apple Calendar support (CalDAV)',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3 w-3 text-gold shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="The calendar that thinks ahead."
        subtitle="Natural language, voice, photos, analytics, and focus protection. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See AI features', href: '/ai-calendar' }}
      />
    </>
  )
}
