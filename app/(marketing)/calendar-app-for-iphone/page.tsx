import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, Smartphone, Mic, Camera, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best calendar app for iPhone 2026 — AI input, voice, photo',
  description:
    'The best iPhone calendar app understands what you say, reads your photos, and syncs with Apple Calendar. Momenties mobile (Q4 2026) is built voice-first for how iPhone users actually work.',
  alternates: { canonical: '/calendar-app-for-iphone' },
  openGraph: {
    title: 'Best calendar app for iPhone',
    description: 'Voice-first, photo-smart, Apple Calendar sync.',
    url: '/calendar-app-for-iphone',
    type: 'website',
  },
}

const IPHONE_FEATURES = [
  {
    icon: Mic,
    title: 'Voice-first input',
    desc: 'Say "lunch with James next Thursday at 1" while walking between meetings. The event is parsed and added before you unlock your phone.',
  },
  {
    icon: Camera,
    title: 'Snap your schedule',
    desc: 'Point your camera at a printed timetable, a conference agenda, or a class schedule. All events extracted automatically.',
  },
  {
    icon: Zap,
    title: 'Apple Calendar sync',
    desc: 'Full bidirectional sync with Apple Calendar. Siri, Spotlight, Apple Watch, CarPlay — all see your events because they sync through native Calendar.',
  },
  {
    icon: Smartphone,
    title: 'Calm notifications',
    desc: 'Only the notifications you actually need: upcoming event reminders and daily brief. No badge anxiety. No streak counters.',
  },
]

const COMPARISON_APPS = [
  { name: 'Fantastical', input: 'Good NLP', ai: 'Limited', sync: 'Apple native', price: '$5/mo' },
  { name: 'Calendars 5', input: 'Forms + basic NLP', ai: 'None', sync: 'Apple native', price: '$7/mo' },
  { name: 'Apple Calendar', input: 'Forms only', ai: 'None', sync: 'Apple native', price: 'Free' },
  { name: 'Momenties (Q4 2026)', input: 'AI + voice + photo', ai: 'Full', sync: 'Apple + Google', price: 'Free / $12mo Pro' },
]

export default function CalendarAppForIphonePage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar app for iPhone"
        title={
          <>
            Voice, photo, AI.
            <br />
            <em className="not-italic text-gold">Built for iPhone.</em>
          </>
        }
        lede="The Momenties mobile app is coming Q4 2026 and it's being built voice-first — because iPhone users add events on the go, between tasks, without time to open a form. Add your email to be first in."
        crumbs={[{ label: 'iPhone calendar app' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Join mobile waitlist <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Use web app now
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Mobile Q4 2026 · Web app available now · Free forever</p>
      </PageHero>

      {/* iPhone-specific features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Mobile features</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Built for how you actually use your iPhone.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {IPHONE_FEATURES.map((f, i) => (
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

      {/* Why iPhone specifically */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Mobile-first design</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              Most calendar apps are desktop apps with mobile ports.
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Apple Calendar, Google Calendar, and even Fantastical were designed with a desktop-first mental model: you sit at a computer, you open the app, you fill in a form. The mobile version is that same experience, smaller.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                iPhone users add events in different contexts: on the train, between meetings, while walking. The interaction that works on a desktop — type in a field, select a date with a picker — is friction on a phone. You need to be able to say it or snap it and have it done.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Momenties mobile is being built with voice as the primary interaction mode, not a secondary one. The default screen when you want to add an event will be a microphone, not a form. Apple Calendar sync (bidirectional via CalDAV) means your events show up everywhere Apple puts them: Lock Screen, Spotlight, Siri, Apple Watch.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* iPhone app comparison */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">iPhone calendar apps</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">How the iPhone options compare.</h2>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-[#0c0c0f]">
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">App</th>
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Event input</th>
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">AI</th>
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Apple sync</th>
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_APPS.map((app, i) => (
                    <tr
                      key={app.name}
                      className={`border-b border-border/40 last:border-0 ${app.name.includes('Momenties') ? 'bg-gold/5' : ''}`}
                    >
                      <td className="px-4 py-3 font-medium text-foreground">
                        {app.name}
                        {app.name.includes('Momenties') && (
                          <span className="ml-2 text-[9px] font-mono text-gold bg-gold/10 rounded-full px-1.5 py-0.5">Us</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-foreground/70 text-xs">{app.input}</td>
                      <td className="px-4 py-3 text-foreground/70 text-xs">{app.ai}</td>
                      <td className="px-4 py-3 text-foreground/70 text-xs">{app.sync}</td>
                      <td className="px-4 py-3 text-foreground/70 text-xs font-mono">{app.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Web app bridge */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border/50 p-6">
              <h3 className="text-sm font-medium text-foreground mb-2">Using Momenties on iPhone now</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The mobile app is in development (Q4 2026). In the meantime, the web app works well on iPhone Safari — all AI parsing and voice features are available in the browser. Add it to your Home Screen as a PWA for an app-like experience.
              </p>
              <div className="space-y-1.5">
                {[
                  'Full AI text parsing on mobile browser',
                  'Voice input works in Safari on iOS 16+',
                  'Add to Home Screen (PWA) for app-like experience',
                  'Google Calendar sync keeps Apple Calendar updated',
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-foreground/70">
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
        title="Be first when the iPhone app ships."
        subtitle="iOS app Q4 2026. Join the waitlist to get early access."
        primary={{ label: 'Join mobile waitlist', href: '/waitlist' }}
        secondary={{ label: 'Use web app now', href: '/login' }}
      />
    </>
  )
}
