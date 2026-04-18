import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { CheckCircle2, Mic, Camera, Zap, Bell, Globe, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free Calendar App — Momenties Free Plan',
  description:
    'Momenties is free. Natural language add, voice input, photo-to-calendar, Google Calendar sync — all on the free tier. No credit card required.',
  alternates: { canonical: '/free' },
  openGraph: {
    title: 'Momenties — Free Calendar App',
    description: 'AI-powered calendar. Free forever. No credit card.',
    url: '/free',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momenties Free — AI Calendar App',
    description: 'Natural language, voice, and photo add. Free forever.',
  },
}

const FREE_FEATURES = [
  { icon: Zap, text: 'Natural language input — unlimited' },
  { icon: Mic, text: 'Voice add (Deepgram Nova-3)' },
  { icon: Camera, text: 'Photo-to-calendar (Gemini Vision)' },
  { icon: Globe, text: 'Google Calendar sync (2-way)' },
  { icon: Bell, text: 'Smart reminders' },
  { icon: CheckCircle2, text: '3 active calendars' },
  { icon: CheckCircle2, text: 'All keyboard shortcuts' },
  { icon: CheckCircle2, text: 'Web app + mobile web' },
]

const COMPARE = [
  { feature: 'Natural language add', free: true, pro: true },
  { feature: 'Voice add', free: true, pro: true },
  { feature: 'Photo-to-calendar', free: true, pro: true },
  { feature: 'Google Calendar sync', free: true, pro: true },
  { feature: 'Apple Calendar sync', free: false, pro: true },
  { feature: 'Unlimited calendars', free: false, pro: true },
  { feature: 'Smart scheduling suggestions', free: false, pro: true },
  { feature: 'Focus time protection', free: false, pro: true },
  { feature: 'Home screen widget (mobile)', free: false, pro: true },
  { feature: 'Priority support', free: false, pro: true },
  { feature: 'Team shared calendars', free: false, pro: true },
  { feature: 'API access', free: false, pro: true },
]

export default function FreePage() {
  return (
    <>
      <PageHero
        eyebrow="Free plan"
        title={
          <>
            A real calendar.
            <br />
            <em className="not-italic text-gold">Actually free.</em>
          </>
        }
        lede="Not a 7-day trial. Not a crippled version. Momenties Free is a fully functional AI calendar — natural language, voice, photo-to-calendar — at no cost, with no expiry."
        crumbs={[{ label: 'Free plan' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start for free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            See all plans
          </Link>
        </div>
      </PageHero>

      {/* What's free */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What's included</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Everything that makes Momenties, Momenties.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
              The three core input modes — text, voice, photo — are free. The AI parsing engine is free. Google Calendar sync is free. These aren&apos;t limited previews. They&apos;re the product.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {FREE_FEATURES.map((f, i) => (
              <Reveal key={f.text} delay={(i % 4) * 40}>
                <div className="flex items-start gap-3 rounded-xl border border-border/60 p-4">
                  <f.icon className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/85 leading-snug">{f.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Pro comparison */}
      <section className="py-24 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Free vs Pro</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              What you get — and what you get more of.
            </h2>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-[#0f0f14] border-b border-border">
                <div className="col-span-1 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Feature
                </div>
                <div className="px-4 py-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Free
                </div>
                <div className="px-4 py-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                  Pro · $12/mo
                </div>
              </div>
              {/* Rows */}
              {COMPARE.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.015]'}`}
                >
                  <div className="col-span-1 px-5 py-3 text-sm text-foreground/85">{row.feature}</div>
                  <div className="px-4 py-3 flex items-center justify-center">
                    {row.free ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <span className="w-4 h-px bg-muted-foreground/30 block" />
                    )}
                  </div>
                  <div className="px-4 py-3 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
              >
                Start free
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
              >
                See full pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why we have a free tier */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">Why free?</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-5">
              We want people to use this, not just pay for it.
            </h2>
            <div className="space-y-4 text-[15px] leading-[1.78] text-foreground/80 font-light">
              <p>
                The free tier exists because we believe Momenties should be accessible to people who can&apos;t or won&apos;t pay for a calendar. Students. People between jobs. People who are just curious. The core product should be available to everyone.
              </p>
              <p>
                We&apos;re also honest about the business case: free users become Pro users. When someone uses Momenties for three months and realizes they want Apple Calendar sync or shared team calendars, they upgrade. This is a fine model and we&apos;re not embarrassed about it.
              </p>
              <p>
                What we will not do: put features behind a paywall that makes the free tier feel broken. The core experience — add an event, see your calendar, sync to Google — is free and always will be.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Student / education callout */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5">
          <Reveal>
            <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-2">Students</p>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Pro, free with a .edu</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                If you&apos;re a student, you get the full Pro plan for free — forever — with a valid university email address.
              </p>
              <Link
                href="/education"
                className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
              >
                Learn about student access →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-400/70 mb-2">Startups</p>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Free for seed-stage teams</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Building something? Seed-stage teams (pre-Series A, under 10 people) get the Team plan free for one year.
              </p>
              <Link
                href="/startups"
                className="inline-flex items-center gap-1.5 text-sm text-sky-400 hover:text-sky-300 transition-colors"
              >
                Learn about startup access →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="No card. No expiry. No catch."
        subtitle="Create an account in 30 seconds and start scheduling the way you think."
        primary={{ label: 'Get started free', href: '/login' }}
        secondary={{ label: 'Read about Pro', href: '/pricing' }}
      />
    </>
  )
}
