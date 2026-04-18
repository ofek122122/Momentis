import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, BarChart3, Shield, Moon, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Personal Calendar App — AI input, time analytics, and focus protection',
  description:
    'The best personal calendar app adds AI to what you already do: adding events, protecting time, and understanding your week. Momenties is free, works everywhere, and syncs with Google and Apple Calendar.',
  alternates: { canonical: '/personal-calendar' },
  openGraph: {
    title: 'Personal Calendar App — Momenties',
    description: 'AI input. Analytics. Focus protection. Free.',
    url: '/personal-calendar',
    type: 'website',
  },
}

const WHY_UPGRADE = [
  {
    icon: Zap,
    title: 'Add events in seconds, not minutes',
    desc: '"Dentist thursday 3pm" → on your calendar in under 2 seconds. No form. No tapping through fields. Natural language, voice, or photo — all parsed instantly.',
  },
  {
    icon: BarChart3,
    title: 'Understand how you actually spend your time',
    desc: 'Analytics shows hours per category per week. Work vs. personal. Deep work vs. meetings. Exercise vs. admin. Most people adjust their calendars the moment they see the data.',
  },
  {
    icon: Shield,
    title: 'Protect the time that matters',
    desc: 'Focus mode marks blocks as protected. Notifications pause. Meeting requests get a warning. Your gym session, your writing time, your family dinner — all defended.',
  },
  {
    icon: Moon,
    title: 'A brief every morning',
    desc: 'Daily Brief: first thing in the morning, a summary of today\'s events, tomorrow\'s events, and any schedule conflicts. Never start the day surprised.',
  },
]

const DAILY_MOMENTS = [
  { input: '"gym 7am tomorrow"', result: 'Created: Gym · Tue 7:00–8:00 AM' },
  { input: '"dinner with mom saturday 7pm"', result: 'Created: Dinner with mom · Sat 7:00 PM' },
  { input: '"call landlord about lease monday morning"', result: 'Created: Call landlord re lease · Mon 9:00 AM' },
  { input: '"date night friday 8pm, 2 hours"', result: 'Created: Date night · Fri 8:00–10:00 PM' },
  { input: '"car service next tuesday 11am"', result: 'Created: Car service · Tue 11:00 AM' },
]

export default function PersonalCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Personal Calendar"
        title={
          <>
            Your whole life,
            <br />
            <em className="not-italic text-gold">organized in seconds.</em>
          </>
        }
        lede="A personal calendar should take less than 5 seconds to update and give you a complete picture of your week. Momenties adds AI input, time analytics, and focus protection to whatever calendar you already use."
        crumbs={[{ label: 'Personal Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            All features
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Syncs with Google Calendar and Apple Calendar</p>
      </PageHero>

      {/* What makes a great personal calendar */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Why Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What a great personal calendar does.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHY_UPGRADE.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <item.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Natural language input</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Just type what it is.</h2>
          </Reveal>
          <div className="space-y-3">
            {DAILY_MOMENTS.map((ex, i) => (
              <Reveal key={ex.input} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <div className="flex-1">
                      <p className="font-mono text-xs text-muted-foreground/70 mb-1">You type</p>
                      <p className="font-mono text-sm text-foreground">{ex.input}</p>
                    </div>
                    <div className="hidden sm:block text-gold/30 text-lg">→</div>
                    <div className="flex-1">
                      <p className="font-mono text-xs text-muted-foreground/70 mb-1">Calendar gets</p>
                      <p className="text-sm text-foreground/90">{ex.result}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Free plan callout */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border/50 p-6">
              <h3 className="text-sm font-medium text-foreground mb-3">Free plan includes</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  'Unlimited events',
                  'Natural language input',
                  'Voice event creation',
                  'Photo-to-calendar',
                  'Google Calendar sync',
                  'Daily Brief',
                  'Mobile web app',
                  'Keyboard shortcuts',
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                    <CheckCircle2 className="h-3 w-3 text-gold shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">Analytics and Focus mode available on Pro ($12/month)</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="The personal calendar you actually want to use."
        subtitle="Free, fast, and syncs with everything. No friction between your life and your calendar."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See all features', href: '/features' }}
      />
    </>
  )
}
