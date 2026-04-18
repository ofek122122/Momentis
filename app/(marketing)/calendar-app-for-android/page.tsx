import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, Mic, Camera, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Calendar App for Android — Fast, voice-powered, and Google Calendar native',
  description:
    'The best Android calendar app adds events as fast as you think of them: voice input, natural language typing, and photo scheduling all on mobile. Momenties works natively with Google Calendar and is free.',
  alternates: { canonical: '/calendar-app-for-android' },
  openGraph: {
    title: 'Best Calendar App for Android — Momenties',
    description: 'Voice input, natural language, and photo scheduling on Android.',
    url: '/calendar-app-for-android',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Mic,
    title: 'Voice scheduling — the fastest Android input',
    desc: 'Tap the mic. Say "dentist friday 3pm." Event added before you put your phone down. Faster than any keyboard input, usable while walking or driving, zero screen time required.',
  },
  {
    icon: Zap,
    title: 'Natural language input from the keyboard',
    desc: '"Team lunch next thursday noon" → parsed and added. No tapping through fields. No date picker. No time wheel. Type the way you think — Momenties figures out the rest.',
  },
  {
    icon: Camera,
    title: 'Photo scheduling for printed schedules',
    desc: 'Conference agenda, class timetable, gym schedule on the wall — photograph it. AI extracts all events and adds them in 30 seconds. The fastest way to get a printed schedule into a calendar.',
  },
  {
    icon: BarChart3,
    title: 'Weekly analytics on mobile',
    desc: 'Open the analytics view from your Android browser. See hours per category, meeting load, and focus time for the week. The same insights as desktop, sized for your phone.',
  },
]

const ANDROID_INPUTS = [
  { method: 'Voice', example: '"Board meeting tuesday 10am 2 hours"', speed: '3 seconds', best_when: 'Hands occupied, in transit, quick capture' },
  { method: 'Natural language', example: '"Gym tomorrow 7am recurring Mon Wed Fri"', speed: '6 seconds', best_when: 'Sitting, precise details, familiar routine' },
  { method: 'Photo', example: 'Photo of printed conference schedule', speed: '30 seconds', best_when: 'Multiple events from a printed source' },
]

const ANDROID_FREE = [
  'Unlimited events — no cap',
  'Voice event creation',
  'Natural language input',
  'Photo schedule import',
  'Google Calendar sync',
  'Daily Brief',
  'Recurring event support',
  'PWA — works offline',
]

export default function CalendarAppForAndroidPage() {
  return (
    <>
      <PageHero
        eyebrow="Android Calendar App"
        title={
          <>
            Fastest calendar
            <br />
            <em className="not-italic text-gold">on Android.</em>
          </>
        }
        lede="The best calendar app for Android is the one you actually use in real moments — while a call just confirmed a meeting, while walking between appointments, while photographing a schedule on a wall. Momenties is built for speed on mobile, with voice, typing, and photo input all tuned for Android."
        crumbs={[{ label: 'Calendar App for Android' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Get Momenties free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/voice-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Voice scheduling
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No download required · Add to home screen</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Input methods</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Three ways to schedule faster on Android.</h2>
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

      {/* Input comparison */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Input guide</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Which input to use on Android.</h2>
          </Reveal>
          <div className="space-y-3">
            {ANDROID_INPUTS.map((item, i) => (
              <Reveal key={item.method} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs font-bold text-gold">{item.method}</span>
                    <span className="font-mono text-[9px] text-emerald-400/70 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">{item.speed}</span>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground mb-2">e.g. {item.example}</p>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-foreground/50">Best when: </span>{item.best_when}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Free plan */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border/50 p-6">
              <h3 className="text-sm font-medium text-foreground mb-1.5">Free forever on Android. Everything included.</h3>
              <p className="text-xs text-muted-foreground mb-4">No download required. Open in Chrome, add to home screen, use like a native app.</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {ANDROID_FREE.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                    <CheckCircle2 className="h-3 w-3 text-gold shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="The Android calendar that works at your speed."
        subtitle="Voice, natural language, and photo input. Google Calendar native. Free forever."
        primary={{ label: 'Open in Android browser', href: '/login' }}
        secondary={{ label: 'Voice scheduling', href: '/voice-calendar' }}
      />
    </>
  )
}
