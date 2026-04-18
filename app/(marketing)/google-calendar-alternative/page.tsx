import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { CheckCircle2, XCircle, ArrowRight, Zap, Mic2, Camera, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Google Calendar alternative — Momenties',
  description:
    'Looking for a Google Calendar alternative with AI event creation, voice input, and smart scheduling? Momenties syncs with Google Calendar and adds everything it lacks.',
  alternates: { canonical: '/google-calendar-alternative' },
  openGraph: {
    title: 'The Google Calendar alternative with AI built in',
    description: 'Momenties works with Google Calendar and adds AI, voice, photo, and analytics.',
    url: '/google-calendar-alternative',
    type: 'website',
  },
}

const WHY_SWITCH = [
  {
    icon: Zap,
    title: 'AI event creation',
    google: 'Type every field manually',
    momenties: 'Type naturally: "dentist thursday 3pm" → done',
  },
  {
    icon: Mic2,
    title: 'Voice input',
    google: 'Not available',
    momenties: 'Speak your event. It\'s on your calendar in 440ms.',
  },
  {
    icon: Camera,
    title: 'Photo-to-calendar',
    google: 'Not available',
    momenties: 'Snap a schedule. All events added in one tap.',
  },
  {
    icon: BarChart3,
    title: 'Calendar analytics',
    google: 'Not available',
    momenties: 'Meeting/focus ratio, busiest days, patterns over time.',
  },
]

const COMPARISON_ROWS = [
  ['Natural language event creation', false, true],
  ['Voice add', false, true],
  ['Photo-to-calendar', false, true],
  ['Calendar analytics', false, true],
  ['AI morning brief', false, true],
  ['Smart time suggestions', false, true],
  ['Focus mode / DND', false, true],
  ['Custom templates', false, true],
  ['Google Calendar sync', true, true],
  ['Apple Calendar sync', false, 'Pro'],
  ['Multiple calendar support', true, true],
  ['Web app', true, true],
  ['Free tier', true, true],
]

export default function GoogleCalendarAlternativePage() {
  return (
    <>
      <PageHero
        eyebrow="Google Calendar alternative"
        title={
          <>
            Google Calendar,
            <br />
            <em className="not-italic text-gold">but actually useful.</em>
          </>
        }
        lede="Momenties syncs with your Google Calendar and adds everything it was never designed to have: natural language input, voice add, photo parsing, analytics, and smart scheduling."
        crumbs={[{ label: 'vs Google Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free for 14 days <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/switch"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Import from Google Calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">No credit card · Your existing Google Calendar data stays exactly where it is</p>
      </PageHero>

      {/* Key differences */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What you get</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What Google Calendar doesn&apos;t have.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHY_SWITCH.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <item.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-3">{item.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <XCircle className="h-3.5 w-3.5 text-muted-foreground/40 shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground">{item.google}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                      <p className="text-xs text-foreground/90">{item.momenties}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full comparison table */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Feature by feature.
            </h2>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-[#0f0f14] border-b border-border text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
                <div className="px-5 py-3">Feature</div>
                <div className="px-4 py-3 text-center">Google Calendar</div>
                <div className="px-4 py-3 text-center text-gold">Momenties</div>
              </div>
              {COMPARISON_ROWS.map(([feat, google, momenties], i) => (
                <div key={String(feat)} className={`grid grid-cols-3 border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.015]'}`}>
                  <div className="px-5 py-3 text-sm text-foreground/85">{feat}</div>
                  <div className="px-4 py-3 flex items-center justify-center">
                    {google === true ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    ) : google === false ? (
                      <span className="w-4 h-px bg-muted-foreground/30 block" />
                    ) : (
                      <span className="font-mono text-xs text-muted-foreground">{String(google)}</span>
                    )}
                  </div>
                  <div className="px-4 py-3 flex items-center justify-center">
                    {momenties === true ? (
                      <CheckCircle2 className="h-4 w-4 text-gold" />
                    ) : momenties === false ? (
                      <span className="w-4 h-px bg-muted-foreground/30 block" />
                    ) : (
                      <span className="font-mono text-xs text-gold">{String(momenties)}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* How migration works */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Switching</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              You don&apos;t leave Google Calendar. You add Momenties on top.
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Momenties is not a replacement for Google Calendar — it&apos;s a layer on top. Your events stay in Google Calendar. Your colleagues, shared calendars, and integrations work exactly as before.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                What changes is how you interact with your calendar. Instead of navigating to a form and filling in five fields, you type &ldquo;dentist thursday at 3pm for an hour&rdquo; and it&apos;s done. The event lands in Google Calendar. Nothing breaks.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                If you decide Momenties isn&apos;t for you, your data is still in Google Calendar. We&apos;ve never trapped anyone, and we&apos;re not starting now.
              </p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/switch"
                className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors press"
              >
                Set up Momenties <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/compare/google-calendar"
                className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
              >
                Full comparison
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Your Google Calendar, upgraded."
        subtitle="Sign up with Google. Your existing calendar appears in 30 seconds."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See how it works', href: '/product' }}
      />
    </>
  )
}
