import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Heart, Calendar, Users, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shared Calendar for Couples — Coordinate your life without the friction',
  description:
    'Couples need a shared calendar that syncs with whatever apps they already use. Momenties overlays both schedules, finds free evenings together, and lets either person add events in seconds with natural language.',
  alternates: { canonical: '/calendar-for-couples' },
  openGraph: {
    title: 'Shared Calendar for Couples — Momenties',
    description: 'Both schedules in one view. No more "when are you free?"',
    url: '/calendar-for-couples',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Users,
    title: 'Both schedules in one view',
    desc: 'Overlay both calendars. Color-coded by person. See each other\'s busy times instantly. Find free evenings together without a back-and-forth negotiation.',
  },
  {
    icon: Heart,
    title: 'Add shared events in seconds',
    desc: '"Date night saturday 7pm." "Dinner with Sarah\'s parents friday." "Vet appointment tuesday 3pm for Max." Natural language from either person, on both calendars.',
  },
  {
    icon: Calendar,
    title: 'Works with your existing apps',
    desc: 'Syncs bidirectionally with Google Calendar and Apple Calendar. Whatever apps you each prefer — Momenties overlays them. No one has to switch.',
  },
  {
    icon: Clock,
    title: 'Daily brief for both of you',
    desc: 'Both people see the same Daily Brief — what\'s on today, who has commitments when, and where the free time is. Fewer "oh, I didn\'t know you had that" moments.',
  },
]

const MOMENTS = [
  { input: '"date night friday 8pm"', result: 'Date night · Fri 8:00 PM — added to shared calendar' },
  { input: '"dentist appointment tuesday 10am for Maya"', result: 'Maya dentist · Tue 10:00 AM' },
  { input: '"James work conference next weekend all day"', result: 'James: Work conference · Sat–Sun all day — partners see immediately' },
  { input: '"dinner Mike and Amanda saturday 7:30pm"', result: 'Dinner — Mike & Amanda · Sat 7:30 PM' },
  { input: '"car registration renewal thursday morning"', result: 'Car registration renewal · Thu 9:00 AM' },
]

export default function CalendarForCouplesPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar for Couples"
        title={
          <>
            Both schedules.
            <br />
            <em className="not-italic text-gold">One view.</em>
          </>
        }
        lede="The biggest calendar problem for couples isn't the app — it's that nobody wants to maintain yet another system. Momenties overlays your existing calendars, lets either person add shared events in seconds, and keeps everyone on the same page."
        crumbs={[{ label: 'Calendar for Couples' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/teams"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Shared calendars
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free plan includes personal calendar · Shared overlay on Team plan</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How it works</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Coordination without the friction.</h2>
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

      {/* Input examples */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Natural language</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Add shared events as fast as you think of them.</h2>
          </Reveal>
          <div className="space-y-3">
            {MOMENTS.map((ex, i) => (
              <Reveal key={ex.input} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <div className="flex-1">
                      <p className="font-mono text-xs text-muted-foreground/70 mb-1">You say</p>
                      <p className="font-mono text-sm text-foreground">{ex.input}</p>
                    </div>
                    <div className="hidden sm:block text-gold/30 text-lg">→</div>
                    <div className="flex-1">
                      <p className="font-mono text-xs text-muted-foreground/70 mb-1">Calendar shows</p>
                      <p className="text-sm text-foreground/90">{ex.result}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why couples fail at shared calendars */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Why shared calendars usually fail.</h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Most couples try a shared Google Calendar, keep it for two weeks, and abandon it. The friction of adding events — opening the app, tapping through the form, setting the time, inviting the other person — means it only gets used for the most important things. The rest stays in texts.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Momenties reduces that friction to near zero. Either person can add anything in 5 seconds by voice or text. The event appears on both calendars immediately. No invitation workflow, no back-and-forth. The shared calendar becomes the natural place to put things because it's the fastest place to put things.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <div className="space-y-2">
                {[
                  'One person adds — both see it immediately',
                  'Works with your existing Google or Apple Calendar',
                  'Voice input means hands-free while cooking, driving, or in bed',
                  'Daily Brief keeps both of you aware of the day ahead',
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
        title="Stop texting schedule questions. Just look at the calendar."
        subtitle="Shared overlay, AI input, Daily Brief. Two people. One view."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Shared calendar details', href: '/shared-calendar' }}
      />
    </>
  )
}
