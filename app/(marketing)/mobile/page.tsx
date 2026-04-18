import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { NewsletterForm } from '@/components/marketing/NewsletterForm'
import {
  Smartphone, Bell, Wifi, Mic, Camera, Zap, Lock, Battery, ArrowUpRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile App — Momenties for iOS & Android',
  description:
    'The Momenties mobile app is coming. Native iOS and Android with offline-first editing, widget support, and the same AI parsing you love on web.',
  alternates: { canonical: '/mobile' },
  openGraph: {
    title: 'Momenties Mobile App',
    description: 'iOS and Android. Offline-first. Launching Q4 2026.',
    url: '/mobile',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momenties Mobile — Coming Q4 2026',
    description: 'Native iOS and Android. Offline-first. Widget support. AI parsing in your pocket.',
  },
}

const FEATURES = [
  {
    icon: Mic,
    title: 'Voice from anywhere',
    desc: 'Lock-screen voice add. Tap, speak, done — without unlocking your phone. Powered by Deepgram Nova-3.',
  },
  {
    icon: Camera,
    title: 'Point-and-parse',
    desc: 'Aim your camera at any printed schedule, poster, or whiteboard. Gemini Vision extracts every event.',
  },
  {
    icon: Wifi,
    title: 'Offline first',
    desc: 'Create and edit events without signal. Syncs automatically when you reconnect. CRDT-based conflict resolution.',
  },
  {
    icon: Bell,
    title: 'Smart notifications',
    desc: 'Only the pings that matter. Travel time, meeting changes, and weather delays — nothing else.',
  },
  {
    icon: Zap,
    title: 'Home screen widget',
    desc: 'A quiet glanceable strip showing your next three events. Dark mode, configurable density, no ads.',
  },
  {
    icon: Lock,
    title: 'Private by default',
    desc: 'No background location tracking. Biometric lock for sensitive calendars. Local AI parsing stays on-device.',
  },
  {
    icon: Battery,
    title: 'Battery-conscious',
    desc: 'Background sync limited to 60-second windows. We obsessed over battery in our beta testing. Significantly lighter than the competition.',
  },
  {
    icon: Smartphone,
    title: 'Native, not wrapped',
    desc: 'Swift + SwiftUI on iOS. Kotlin + Compose on Android. No Electron, no React Native. Proper platform feel.',
  },
]

const TIMELINE = [
  { q: 'Q2 2026', event: 'iOS TestFlight opens for Pro subscribers', done: false, active: true },
  { q: 'Q3 2026', event: 'Android early access via Play Store beta', done: false, active: false },
  { q: 'Q3 2026', event: 'Widget + lock-screen shortcut ship', done: false, active: false },
  { q: 'Q4 2026', event: 'Public launch — iOS App Store + Android', done: false, active: false },
  { q: '2027', event: 'Apple Watch & Wear OS companion apps', done: false, active: false },
]

export default function MobilePage() {
  return (
    <>
      <PageHero
        eyebrow="Coming Q4 2026"
        title={
          <>
            Momenties in your pocket.
            <br />
            <em className="not-italic text-gold">Offline-first. Native.</em>
          </>
        }
        lede="A true native app for iOS and Android. Offline editing, lock-screen voice add, smart widgets, and the same AI parsing engine as the web — optimized for the phone's form factor."
        crumbs={[{ label: 'Mobile' }]}
      >
        <div className="max-w-md">
          <p className="text-xs text-muted-foreground mb-3 font-mono">
            Join the TestFlight waitlist — ships Q2 2026 for Pro users.
          </p>
          <NewsletterForm source="mobile-waitlist" />
        </div>
      </PageHero>

      {/* Features */}
      <section className="py-24 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              What&apos;s coming
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Built for how you actually use a phone.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 50}>
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

      {/* Phone mockup section */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
                Design principle
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-5">
                The phone version of quiet.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Mobile has unique constraints. The screen is smaller, attention is shorter, interruptions are constant. We&apos;re designing the app to match: less surface area, smarter defaults, and a widget that tells you what you need without opening anything.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-7">
                The gold thread throughout: every interaction should feel like it takes less effort than writing on a physical calendar. If it doesn&apos;t, we haven&apos;t done it right.
              </p>
              <Link
                href="/manifesto"
                className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
              >
                Read our design manifesto <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>

            <Reveal delay={100}>
              {/* Phone frame mockup */}
              <div className="flex justify-center">
                <div className="relative w-64 h-[520px] rounded-[2.5rem] border-[3px] border-white/10 bg-[#0c0c0f] shadow-2xl shadow-black/60 overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
                  {/* Screen content */}
                  <div className="absolute inset-0 p-5 pt-10 flex flex-col gap-3">
                    <div className="text-[10px] font-mono text-muted-foreground mt-2">
                      Thursday · April 18
                    </div>
                    <div className="text-lg font-display font-semibold text-foreground">
                      Today
                    </div>
                    {/* Event cards */}
                    {[
                      { time: '9:00', title: 'Standup', duration: '15m', color: 'border-gold/30 bg-gold/5' },
                      { time: '11:00', title: 'Product review', duration: '1h', color: 'border-sky-500/30 bg-sky-500/5' },
                      { time: '14:30', title: '1:1 with Iris', duration: '1h', color: 'border-violet-500/30 bg-violet-500/5' },
                      { time: '18:00', title: 'Dinner with Elena', duration: '2h', color: 'border-emerald-500/30 bg-emerald-500/5' },
                    ].map((e) => (
                      <div key={e.title} className={`rounded-xl border p-3 ${e.color}`}>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-muted-foreground">{e.time}</span>
                          <span className="font-mono text-[10px] text-muted-foreground">{e.duration}</span>
                        </div>
                        <div className="text-xs font-medium text-foreground mt-0.5">{e.title}</div>
                      </div>
                    ))}
                    {/* Input bar */}
                    <div className="mt-auto rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2.5 flex items-center gap-2">
                      <span className="text-xs text-muted-foreground/60 flex-1">Add event...</span>
                      <Mic className="h-3.5 w-3.5 text-gold/60" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Timeline
            </p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              When to expect it.
            </h2>
          </Reveal>

          <div className="relative pl-6 border-l border-border space-y-8">
            {TIMELINE.map((t, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="relative">
                  <div className={`absolute -left-[25px] w-4 h-4 rounded-full border-2 ${t.active ? 'border-gold bg-gold/30' : 'border-border bg-background'}`} />
                  <div className="flex items-start gap-4">
                    <span className={`font-mono text-[11px] uppercase tracking-[0.1em] flex-shrink-0 ${t.active ? 'text-gold' : 'text-muted-foreground/60'}`}>
                      {t.q}
                    </span>
                    <p className={`text-sm ${t.active ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                      {t.event}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Be first on iOS TestFlight."
        subtitle="Pro subscribers get early access in Q2 2026. Sign up above to hold your spot."
        primary={{ label: 'Join waitlist', href: '#' }}
        secondary={{ label: 'Try the web app', href: '/login' }}
      />
    </>
  )
}
