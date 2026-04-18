import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Link2, Calendar, Clock, Users, CheckCircle2, ArrowRight, Zap, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Scheduling links — Share your availability, instantly',
  description:
    'Momenties scheduling links let anyone book time with you without back-and-forth. Customise buffer time, meeting types, and availability. Ships Q3 2026.',
  alternates: { canonical: '/schedule' },
  openGraph: {
    title: 'Momenties scheduling links',
    description: 'Share your real availability. Skip the back-and-forth.',
    url: '/schedule',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Calendar,
    title: 'Reads your real calendar',
    desc: 'Shows availability from every connected calendar — Google, Apple, and Momenties events — so double-bookings are impossible.',
  },
  {
    icon: Clock,
    title: 'Buffer time built-in',
    desc: 'Set before/after buffers per meeting type. Prep time for deep-work, decompression time after calls. Automatically enforced.',
  },
  {
    icon: Users,
    title: 'Team availability mode',
    desc: 'Share a link that only shows slots where your whole team is free. No Doodle polls, no spreadsheets.',
  },
  {
    icon: Zap,
    title: 'Instant confirmation',
    desc: 'Guest books a slot, both calendars update in seconds. No email confirmation loop. No manual acceptance.',
  },
  {
    icon: Globe,
    title: 'Timezone-aware',
    desc: 'Guests see slots in their local timezone. No "please convert 10am PST to your timezone" in the invite notes.',
  },
  {
    icon: Link2,
    title: 'One link per meeting type',
    desc: 'Create separate links for 15-minute intros, 45-minute calls, or 2-hour workshops — each with its own rules.',
  },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Set your availability',
    desc: 'Define working hours, blocked days, and minimum notice time. Momenties syncs with your connected calendars in real time.',
  },
  {
    step: '02',
    title: 'Create meeting types',
    desc: 'Name each type ("Coffee chat", "Product demo", "Interview"), set the duration, add buffer time, and choose which calendar receives bookings.',
  },
  {
    step: '03',
    title: 'Share your link',
    desc: 'Copy your link or embed the picker on your website. Guests see your real availability without needing a Momenties account.',
  },
  {
    step: '04',
    title: 'Booking lands automatically',
    desc: 'Guest selects a slot, fills a short form, and the event lands on your calendar. You get a notification. Nothing more required.',
  },
]

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Coming Q3 2026"
        title={
          <>
            Share your availability.
            <br />
            <em className="not-italic text-gold">Skip the back-and-forth.</em>
          </>
        }
        lede="Momenties scheduling links read your real calendar and let anyone book time without a single email. Buffer time, meeting types, team overlap, timezone detection — all built in."
        crumbs={[{ label: 'Schedule' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Join the waitlist <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/roadmap"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            See roadmap
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Pro and Team plan feature · Available Q3 2026</p>
      </PageHero>

      {/* Mockup */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              {/* Header */}
              <div className="bg-[#0f0f14] border-b border-border px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-muted-foreground/60 mb-0.5">momenties.app/s/iris</p>
                  <p className="font-medium text-sm text-foreground">Iris — 30 min call</p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gold border border-gold/20 bg-gold/5 px-2 py-1 rounded-full">
                  1 slot left this week
                </span>
              </div>

              {/* Calendar grid mock */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-sm font-medium text-foreground">April 2026</p>
                  <p className="text-xs text-muted-foreground font-mono">Your timezone: UTC+2</p>
                </div>

                <div className="grid grid-cols-5 gap-3 mb-6">
                  {['Mon 21', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'].map((day) => (
                    <div key={day} className="text-center">
                      <p className="text-[10px] font-mono text-muted-foreground/60 mb-2">{day}</p>
                      <div className="space-y-1.5">
                        {day === 'Mon 21' && (
                          <>
                            <button className="w-full text-xs py-2 rounded-lg border border-gold/30 bg-gold/10 text-gold hover:bg-gold/20 transition-colors font-mono">09:00</button>
                            <button className="w-full text-xs py-2 rounded-lg border border-border bg-transparent text-muted-foreground/30 cursor-not-allowed font-mono line-through">11:00</button>
                            <button className="w-full text-xs py-2 rounded-lg border border-gold/30 bg-gold/10 text-gold hover:bg-gold/20 transition-colors font-mono">14:00</button>
                          </>
                        )}
                        {day === 'Tue 22' && (
                          <>
                            <button className="w-full text-xs py-2 rounded-lg border border-border bg-transparent text-muted-foreground/30 cursor-not-allowed font-mono line-through">09:00</button>
                            <button className="w-full text-xs py-2 rounded-lg border border-border bg-transparent text-muted-foreground/30 cursor-not-allowed font-mono line-through">11:00</button>
                            <button className="w-full text-xs py-2 rounded-lg border border-gold/30 bg-gold/10 text-gold hover:bg-gold/20 transition-colors font-mono">15:30</button>
                          </>
                        )}
                        {day === 'Wed 23' && (
                          <>
                            <div className="w-full text-xs py-2 rounded-lg border border-border/30 bg-white/[0.02] text-muted-foreground/20 font-mono text-center">—</div>
                            <div className="w-full text-xs py-2 rounded-lg border border-border/30 bg-white/[0.02] text-muted-foreground/20 font-mono text-center">—</div>
                            <div className="w-full text-xs py-2 rounded-lg border border-border/30 bg-white/[0.02] text-muted-foreground/20 font-mono text-center">—</div>
                          </>
                        )}
                        {day === 'Thu 24' && (
                          <>
                            <button className="w-full text-xs py-2 rounded-lg border border-gold/30 bg-gold/10 text-gold hover:bg-gold/20 transition-colors font-mono">10:00</button>
                            <button className="w-full text-xs py-2 rounded-lg border border-gold/30 bg-gold/10 text-gold hover:bg-gold/20 transition-colors font-mono">11:00</button>
                            <button className="w-full text-xs py-2 rounded-lg border border-gold/30 bg-gold/10 text-gold hover:bg-gold/20 transition-colors font-mono">14:00</button>
                          </>
                        )}
                        {day === 'Fri 25' && (
                          <>
                            <button className="w-full text-xs py-2 rounded-lg border border-gold/30 bg-gold/10 text-gold hover:bg-gold/20 transition-colors font-mono">09:00</button>
                            <div className="w-full text-xs py-2 rounded-lg border border-border/30 bg-white/[0.02] text-muted-foreground/20 font-mono text-center">—</div>
                            <button className="w-full text-xs py-2 rounded-lg border border-gold/30 bg-gold/10 text-gold hover:bg-gold/20 transition-colors font-mono">16:00</button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-5 text-[11px] font-mono text-muted-foreground/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded border border-gold/30 bg-gold/10" />
                    Available
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded border border-border/30 bg-white/[0.02]" />
                    Booked / blocked
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-border/30" />
                    Off
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Built-in</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Everything you wished Calendly had.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 50}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-1.5">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How it works</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Four steps to never scheduling again.
            </h2>
          </Reveal>
          <div className="space-y-4">
            {HOW_IT_WORKS.map((step, i) => (
              <Reveal key={step.step} delay={i * 60}>
                <div className="flex items-start gap-5 rounded-xl border border-border/50 p-5">
                  <div className="w-9 h-9 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs text-gold/70">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-gold/25 bg-gold/5 p-8 text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">Ships Q3 2026</div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-3">Get early access.</h2>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                Scheduling links ship to Pro and Team users in Q3 2026. Sign up or log in to join the waitlist.
              </p>
              <div className="space-y-2 mb-6">
                {['Available on Pro and Team plans', 'No separate tool needed', 'Integrates with Google & Apple Calendar'].map((item) => (
                  <div key={item} className="flex items-center justify-center gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 h-11 px-8 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press"
              >
                Join waitlist <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="The scheduling tool is already your calendar."
        subtitle="Momenties unifies event creation, calendar sync, and — soon — availability sharing in one place."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'See all Pro features', href: '/pro' }}
      />
    </>
  )
}
