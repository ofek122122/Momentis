import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { NewsletterForm } from '@/components/marketing/NewsletterForm'
import { Smartphone, Mic2, Camera, Bell, Wifi, Lock, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile app waitlist — Momenties for iOS & Android',
  description:
    'Momenties for iOS and Android is coming Q4 2026. Join the waitlist for early access, beta invites, and launch-day pricing.',
  alternates: { canonical: '/waitlist' },
  openGraph: {
    title: 'Momenties Mobile Waitlist',
    description: 'Join the waitlist for Momenties iOS & Android — Q4 2026.',
    url: '/waitlist',
    type: 'website',
  },
}

const FEATURES = [
  { icon: Mic2, title: 'Voice-first input', desc: 'Tap the mic, say the thing. That\'s it. Works offline for local events.' },
  { icon: Camera, title: 'Snap to calendar', desc: 'Point your camera at any schedule, poster, or whiteboard. One tap to add all events.' },
  { icon: Bell, title: 'Calm notifications', desc: 'Smart batching keeps your lock screen quiet. One summary instead of seven pings.' },
  { icon: Wifi, title: 'Offline-first', desc: 'All your events, all the time — with or without signal. CRDT-based sync when you reconnect.' },
  { icon: Lock, title: 'Biometric lock', desc: 'Face ID or fingerprint before your calendar opens. Your schedule is yours alone.' },
  { icon: Smartphone, title: 'Native widgets', desc: 'Home-screen and lock-screen widgets show your day at a glance. No unlock required.' },
]

const TIMELINE = [
  { label: 'Q2 2026', desc: 'Internal alpha — core features, rough edges', done: true },
  { label: 'Q3 2026', desc: 'Private beta — waitlist members first', done: false, current: true },
  { label: 'Q4 2026', desc: 'Public launch on App Store and Google Play', done: false },
  { label: '2027', desc: 'Android wear OS + Apple Watch complications', done: false },
]

export default function WaitlistPage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile app · Q4 2026"
        title={
          <>
            Momenties,
            <br />
            <em className="not-italic text-gold">in your pocket.</em>
          </>
        }
        lede="The same AI calendar you use on the web, rebuilt native for iOS and Android. Offline-first, camera-powered, voice-first. Join the waitlist for early access and launch-day pricing."
        crumbs={[{ label: 'Mobile waitlist' }]}
      >
        <div className="mt-2 max-w-sm">
          <NewsletterForm source="mobile-waitlist" />
        </div>
        <p className="text-xs text-muted-foreground mt-2">No spam · Unsubscribe any time · Beta invites sent in order</p>
      </PageHero>

      {/* Phone mockup + features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Phone mockup */}
            <Reveal>
              <div className="max-w-xs mx-auto">
                <div className="relative w-64 mx-auto">
                  <div className="w-64 h-[520px] rounded-[3rem] border-4 border-foreground/10 bg-[#0f0f14] overflow-hidden shadow-2xl shadow-black/60 relative">
                    {/* Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-background z-10" />
                    {/* Status bar */}
                    <div className="px-6 pt-10 pb-3 flex items-center justify-between border-b border-border">
                      <span className="font-mono text-[9px] text-muted-foreground">9:41 AM</span>
                      <span className="font-mono text-[9px] text-gold">Mon, Apr 21</span>
                    </div>
                    {/* Calendar */}
                    <div className="p-4">
                      <p className="font-display text-sm font-semibold text-foreground mb-3">Today</p>
                      <div className="space-y-2">
                        {[
                          { time: '9:00', title: 'Team standup', color: 'bg-sky-500/30 border-sky-500/40', dur: '30m' },
                          { time: '11:00', title: 'Investor call', color: 'bg-gold/20 border-gold/30', dur: '1h' },
                          { time: '14:30', title: 'Deep work', color: 'bg-violet-500/20 border-violet-500/30', dur: '2h' },
                          { time: '17:00', title: 'Gym', color: 'bg-emerald-500/20 border-emerald-500/30', dur: '1h' },
                        ].map((ev) => (
                          <div key={ev.time} className={`rounded-lg border px-3 py-2 ${ev.color}`}>
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-medium text-foreground">{ev.title}</span>
                              <span className="text-[9px] font-mono text-muted-foreground">{ev.dur}</span>
                            </div>
                            <span className="text-[9px] font-mono text-muted-foreground">{ev.time}</span>
                          </div>
                        ))}
                      </div>

                      {/* Input bar */}
                      <div className="mt-4 rounded-full border border-gold/20 bg-gold/5 px-4 py-2.5 flex items-center justify-between">
                        <span className="text-[10px] text-muted-foreground/60">Add event or tap mic…</span>
                        <Mic2 className="h-3.5 w-3.5 text-gold" />
                      </div>
                    </div>
                  </div>
                  {/* Home indicator */}
                  <div className="w-24 h-1 rounded-full bg-foreground/20 mx-auto mt-2" />
                </div>
              </div>
            </Reveal>

            {/* Features list */}
            <div className="space-y-4">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i * 50}>
                  <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                    <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center shrink-0">
                      <f.icon className="h-4 w-4 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-foreground">{f.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Timeline</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Where we are in the build.
            </h2>
          </Reveal>
          <div className="relative pl-8">
            <div className="absolute left-3 top-3 bottom-3 w-px bg-border" aria-hidden />
            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.label} delay={i * 60}>
                  <div className="relative">
                    <div
                      className={`absolute -left-8 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        t.done
                          ? 'border-gold bg-gold/20'
                          : t.current
                          ? 'border-gold bg-gold/10 animate-pulse'
                          : 'border-border bg-[#0c0c0f]'
                      }`}
                    >
                      {t.done && <CheckCircle2 className="h-3 w-3 text-gold" />}
                      {t.current && <div className="w-2 h-2 rounded-full bg-gold" />}
                    </div>
                    <div>
                      <p className="font-mono text-xs text-gold/70 mb-1">{t.label}</p>
                      <p className="text-sm text-foreground/90">{t.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-gold/25 bg-gold/5 p-8 text-center">
              <Smartphone className="h-8 w-8 text-gold mx-auto mb-4" />
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Get in line for beta.</h2>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
                Beta invites go out in Q3 2026, in waitlist order. Leave your email and we&apos;ll reach you when your slot opens.
              </p>
              <div className="max-w-sm mx-auto mb-4">
                <NewsletterForm source="mobile-waitlist-bottom" />
              </div>
              <p className="text-xs text-muted-foreground">
                Already a Momenties user?{' '}
                <Link href="/login" className="text-gold hover:text-gold/80 transition-colors">
                  Log in to join the waitlist automatically →
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
