import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Calendar, Mic, Camera, Brain, Clock, Globe, BarChart3,
  Palette, Users, Zap, Shield, Sparkles, ArrowRight, Check,
} from 'lucide-react'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { SoftwareApplicationJsonLd } from '@/components/marketing/StructuredData'
import { HeroDemo } from '@/components/marketing/HeroDemo'
import { Testimonials } from '@/components/marketing/Testimonials'
import { LogoMarquee } from '@/components/marketing/LogoMarquee'
import { StatCounter } from '@/components/marketing/StatCounter'
import { CTA } from '@/components/marketing/CTA'
import { Reveal } from '@/components/marketing/Reveal'

export const metadata: Metadata = {
  title: 'Momenties — Just say it. It\'s scheduled.',
  description: 'The zero-friction AI calendar. Type, speak or snap a photo — Momenties parses your words and fills your calendar automatically. No date pickers. No friction.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Momenties — Just say it. It\'s scheduled.',
    description: 'AI-powered calendar. Type, speak or snap a photo to add events instantly.',
    type: 'website',
    url: '/',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momenties — Just say it. It\'s scheduled.',
    description: 'AI-powered calendar. Type, speak or snap a photo. Zero friction.',
  },
}

export default async function Home() {
  const session = await auth()
  if (session) redirect('/calendar')

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SoftwareApplicationJsonLd />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-50" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(50% 40% at 50% 0%, rgba(197,163,92,0.16) 0%, transparent 60%)',
            }}
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 text-[11px] font-mono uppercase tracking-[0.2em] text-gold/90 animate-fade-up">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Now in public beta
              </div>
              <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-[104px] font-bold leading-[0.95] tracking-tight text-foreground animate-fade-up animate-fade-up-2">
                Just say it.
                <br />
                <em className="not-italic text-gold">It&apos;s scheduled.</em>
              </h1>
              <p className="mt-7 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed animate-fade-up animate-fade-up-3">
                Type it. Speak it. Snap a photo. Momenties&apos;s AI parses your words and
                fills your calendar — no date pickers, no form fields, no friction.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 items-center justify-center animate-fade-up animate-fade-up-4">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-xl shadow-gold/10"
                >
                  Get started free
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 h-11 px-5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Try live demo →
                </Link>
              </div>
              <p className="mt-5 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60 animate-fade-up animate-fade-up-4">
                Free forever plan · No credit card · 90-second setup
              </p>
            </div>

            <div className="mt-16 md:mt-20 animate-fade-up animate-fade-up-4">
              <HeroDemo />
            </div>
          </div>
        </section>

        <LogoMarquee />

        {/* PRESS QUOTES */}
        <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
          <div className="max-w-6xl mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/40 text-center mb-8">
              As seen in
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { pub: 'The Verge', quote: '"The first calendar app that respects your attention."' },
                { pub: 'TechCrunch', quote: '"A rare piece of calm, confident consumer AI."' },
                { pub: 'Wired', quote: '"Momenties made me fall back in love with my calendar."' },
              ].map((q) => (
                <Reveal key={q.pub}>
                  <div className="rounded-xl border border-border p-5 lux-card">
                    <p className="text-sm text-foreground/80 italic leading-relaxed mb-3">{q.quote}</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-gold/70">{q.pub}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 px-5 md:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <Reveal className="text-center mb-16">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
                How it works
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                Three ways in.<br />
                <em className="not-italic text-gold">One calendar, sorted.</em>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: Calendar,
                  step: '01',
                  title: 'Type naturally',
                  desc: '“Dentist thursday 3pm” lands on your calendar in a second. Plain English, every time.',
                  sample: 'dentist thursday 3pm',
                },
                {
                  icon: Mic,
                  step: '02',
                  title: 'Speak freely',
                  desc: 'Hold the mic. Dump your week out loud. Deepgram + AI turn rambling into structured events.',
                  sample: '“Standup every weekday 9 for 15 minutes”',
                },
                {
                  icon: Camera,
                  step: '03',
                  title: 'Snap any schedule',
                  desc: 'Photo of an exam timetable? All 20 dates extracted at once. Gemini Vision sees everything.',
                  sample: '📷 → 20 events added',
                },
              ].map((f, i) => (
                <Reveal key={f.step} delay={i * 100}>
                  <div className="group rounded-2xl border border-border lux-card p-7 md:p-8 h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                        <f.icon className="h-5 w-5 text-gold" />
                      </div>
                      <span className="font-mono text-xs text-gold/50">{f.step}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {f.desc}
                    </p>
                    <div className="rounded-lg border border-border bg-white/[0.02] px-3 py-2.5 font-mono text-xs text-foreground/80">
                      {f.sample}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-20 px-5 md:px-8 border-t border-border relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(50% 60% at 50% 50%, rgba(197,163,92,0.05) 0%, transparent 70%)',
            }}
          />
          <div className="relative max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCounter value={50000} suffix="+" label="Events scheduled" />
            <StatCounter value={120} suffix="+" label="Countries" />
            <StatCounter value={98} suffix="%" label="Parse accuracy" />
            <StatCounter value={2} suffix="s" label="Avg. parse time" />
          </div>
        </section>

        {/* FEATURE GRID */}
        <section className="py-24 px-5 md:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <Reveal className="text-center mb-14">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
                Everything you need
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                More than a calendar.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                A quiet, deliberate toolkit for the way you actually work. No clutter, no ads, no dark patterns.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Brain, title: 'AI Parsing', desc: 'Gemini 2.5 parses your text, voice, or photos into perfect events.' },
                { icon: Clock, title: 'Smart time slots', desc: 'Momenties finds the gap that fits — respects meetings, focus, and sleep.' },
                { icon: BarChart3, title: 'Insights', desc: 'See where your hours go. Meeting load, deep-work ratio, weekly rhythm.' },
                { icon: Globe, title: 'Unified calendars', desc: 'Google, Apple, and Outlook (soon) in one elegant grid.' },
                { icon: Palette, title: 'Themeable', desc: 'Five hand-tuned themes, all sharing the same quiet confidence.' },
                { icon: Users, title: 'Teams', desc: 'Share calendars, schedule together, find overlap in a single click.' },
                { icon: Zap, title: 'Focus mode', desc: 'Pomodoro timer that actually respects your deep work window.' },
                { icon: Sparkles, title: 'Daily briefing', desc: 'A warm morning summary — not a 40-point checklist.' },
                { icon: Shield, title: 'Private by design', desc: 'Your data stays yours. End-to-end encrypted sync. No ads, ever.' },
              ].map((f, i) => (
                <Reveal key={f.title} delay={(i % 3) * 80}>
                  <div className="rounded-xl border border-border lux-card p-6 h-full group">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors">
                      <f.icon className="h-4 w-4 text-gold" />
                    </div>
                    <h3 className="text-sm font-medium text-foreground mb-1.5">{f.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/features"
                className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors font-medium"
              >
                See every feature <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURE DEEP DIVE — alternating layout */}
        <section className="py-24 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
          <div className="max-w-6xl mx-auto space-y-24">
            {[
              {
                eyebrow: 'Natural language',
                title: 'Talk the way you think.\nWe handle the calendar.',
                desc: 'No form fields. No date pickers. Just type "lunch with Maya tuesday noon" and watch Momenties create the event — with title, time, attendee, and a smart end time — in under a second.',
                side: 'right' as const,
                demo: (
                  <div className="rounded-2xl border border-border bg-[#0f0f14] p-6 font-mono text-sm space-y-4">
                    <div className="space-y-1.5">
                      <div className="text-muted-foreground text-xs">You typed</div>
                      <div className="text-foreground px-3 py-2 rounded-lg border border-gold/20 bg-gold/5">
                        lunch with Maya tuesday noon at her office
                      </div>
                    </div>
                    <div className="hairline" />
                    <div className="space-y-1.5">
                      <div className="text-muted-foreground text-xs">Momenties parsed</div>
                      <div className="text-xs leading-relaxed space-y-1">
                        <div><span className="text-gold">title</span> <span className="text-foreground/80">Lunch with Maya</span></div>
                        <div><span className="text-gold">when </span> <span className="text-foreground/80">Tuesday 12:00 – 13:00</span></div>
                        <div><span className="text-gold">where</span> <span className="text-foreground/80">Maya&apos;s office</span></div>
                        <div><span className="text-gold">with  </span> <span className="text-foreground/80">Maya (from contacts)</span></div>
                        <div className="pt-1"><span className="text-emerald-400 text-[10px]">✓ Added to Google Calendar</span></div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                eyebrow: 'Smart scheduling',
                title: 'Finds the slot.\nYou just say when.',
                desc: 'Tell Momenties "I need 2 hours of deep work this week" and it scans your calendar, avoids your blocked focus windows, and suggests three open slots — ranked by quality, not just availability.',
                side: 'left' as const,
                demo: (
                  <div className="rounded-2xl border border-border bg-[#0f0f14] p-6 space-y-3">
                    <div className="text-xs font-mono text-muted-foreground mb-2">Suggested slots for &ldquo;2h deep work&rdquo;</div>
                    {[
                      { time: 'Tue 7:00 – 9:00 AM', quality: '★ Best', note: 'Before any meetings. Peak focus window.' },
                      { time: 'Wed 2:00 – 4:00 PM', quality: 'Good', note: 'After lunch. No adjacent meetings.' },
                      { time: 'Thu 6:00 – 8:00 AM', quality: 'Good', note: 'Early start. Uninterrupted.' },
                    ].map((s, i) => (
                      <div key={i} className={`flex items-start gap-3 rounded-xl border p-3.5 transition-colors ${i === 0 ? 'border-gold/30 bg-gold/5' : 'border-border hover:border-gold/15'}`}>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-sm font-medium text-foreground">{s.time}</span>
                            <span className={`text-[10px] font-mono ${i === 0 ? 'text-gold' : 'text-muted-foreground'}`}>{s.quality}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{s.note}</p>
                        </div>
                        {i === 0 && (
                          <span className="text-xs text-gold border border-gold/25 bg-gold/8 rounded px-2 py-0.5 flex-shrink-0 font-mono">Use this</span>
                        )}
                      </div>
                    ))}
                  </div>
                ),
              },
            ].map((f) => (
              <Reveal key={f.eyebrow}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${f.side === 'left' ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">{f.eyebrow}</p>
                    <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground whitespace-pre-line mb-4">
                      {f.title}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                  <div>{f.demo}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Testimonials />

        {/* PRICING PREVIEW */}
        <section className="py-24 px-5 md:px-8 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <Reveal className="text-center mb-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
                Honest pricing
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                Free to start.<br />
                <em className="not-italic text-gold">Worth it when you scale.</em>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  name: 'Free',
                  price: '$0',
                  tagline: 'For anyone who schedules.',
                  features: ['Unlimited events', 'Type & voice input', 'Google Calendar sync', '5 photos / day'],
                  cta: 'Start free',
                  highlight: false,
                },
                {
                  name: 'Pro',
                  price: '$8',
                  per: '/mo',
                  tagline: 'For people whose time matters.',
                  features: ['Everything in Free', 'Unlimited photos', 'Apple Calendar sync', 'AI briefings & insights', 'Priority parsing'],
                  cta: 'Start Pro trial',
                  highlight: true,
                },
                {
                  name: 'Team',
                  price: '$12',
                  per: '/user/mo',
                  tagline: 'For the whole company.',
                  features: ['Everything in Pro', 'Shared calendars', 'Team scheduling links', 'Admin & SSO', 'Priority support'],
                  cta: 'Talk to us',
                  highlight: false,
                },
              ].map((p) => (
                <div
                  key={p.name}
                  className={`relative rounded-2xl border p-7 flex flex-col ${
                    p.highlight
                      ? 'border-gold/40 bg-gradient-to-b from-gold/5 to-transparent shadow-2xl shadow-gold/5'
                      : 'border-border lux-card'
                  }`}
                >
                  {p.highlight && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 inline-flex items-center px-2.5 py-0.5 rounded-full bg-gold text-[#0c0c0f] text-[10px] font-mono uppercase tracking-wider">
                      Most popular
                    </span>
                  )}
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-display text-4xl font-bold text-foreground">{p.price}</span>
                    {p.per && <span className="text-xs text-muted-foreground font-mono">{p.per}</span>}
                  </div>
                  <div className="font-display text-lg font-semibold text-foreground mt-1">{p.name}</div>
                  <p className="text-sm text-muted-foreground mt-1 mb-5">{p.tagline}</p>
                  <ul className="space-y-2.5 mb-7 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                        <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/pricing"
                    className={`h-10 rounded-full text-sm font-medium inline-flex items-center justify-center transition-all press ${
                      p.highlight
                        ? 'bg-gold text-[#0c0c0f] hover:bg-gold/90'
                        : 'border border-border text-foreground hover:border-gold/30'
                    }`}
                  >
                    {p.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA
          title="Your calendar, but gentler."
          subtitle="Ninety seconds to set up. Three ways in. One quieter day."
          primary={{ label: 'Get started free', href: '/login' }}
          secondary={{ label: 'Watch a 60s demo', href: '/demo' }}
        />
      </main>
      <SiteFooter />
    </div>
  )
}
