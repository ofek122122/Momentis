import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CheckCircle2, ArrowRight, Heart, Download, Clock, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cancel your subscription — Momenties',
  description:
    'Cancel Momenties Pro or Team without friction. Your data stays yours. Export everything before you go.',
  alternates: { canonical: '/cancel' },
  robots: { index: false },
}

const BEFORE_YOU_GO = [
  {
    icon: Download,
    title: 'Export your data',
    desc: 'Download all your events, templates, and settings as JSON, iCal, or CSV before cancelling.',
    href: '/data',
    cta: 'Go to data export',
  },
  {
    icon: Clock,
    title: 'Pause instead of cancel',
    desc: 'If you\'re just going through a quiet period, you can pause billing for up to 3 months.',
    href: '/login',
    cta: 'Pause subscription',
  },
  {
    icon: RefreshCw,
    title: 'Switch to annual',
    desc: 'If cost is the issue, annual billing saves 20% — that\'s $2.40/month back in your pocket.',
    href: '/pricing',
    cta: 'See annual pricing',
  },
  {
    icon: Heart,
    title: 'Stay on free',
    desc: 'Downgrading keeps all your events and Google Calendar sync — just without the Pro features.',
    href: '/login',
    cta: 'Downgrade to free',
  },
]

const WHAT_HAPPENS = [
  { step: '01', title: 'Access continues until period ends', desc: 'You keep Pro features until your current billing period ends. No immediate downgrade.' },
  { step: '02', title: 'Events and calendars stay', desc: 'All your events, history, and Google Calendar connections remain. Nothing is deleted.' },
  { step: '03', title: 'Apple Calendar sync pauses', desc: 'If you were using Apple Calendar sync (Pro-only), new syncs stop. Existing events remain on both sides.' },
  { step: '04', title: 'AI parsing reverts to 3/day', desc: 'The free tier allows 3 AI parses per day. Type-ahead and manual entry remain unlimited.' },
  { step: '05', title: 'Analytics and themes turn off', desc: 'Pro analytics, premium themes, and focus mode features become unavailable.' },
  { step: '06', title: 'Data is never deleted', desc: 'We never delete your account data for cancelling. To fully delete your account, go to Settings → Account → Delete.' },
]

const REASONS = [
  { label: 'Too expensive', resolution: 'We offer a 30-day refund and annual plans save 20%.' },
  { label: 'Not using it enough', resolution: 'The free tier might be a better fit — no need to cancel fully.' },
  { label: 'Missing a feature', resolution: 'Tell us at feedback@momenties.app — we may already have it on the roadmap.' },
  { label: 'Switching to a competitor', resolution: 'We\'d love to know why. Your feedback genuinely shapes what we build.' },
  { label: 'Company shutting down', resolution: 'Team plan? We can cancel with a full refund for unused seats.' },
  { label: 'Technical issues', resolution: 'Let support@momenties.app fix it first — most issues resolve in under an hour.' },
]

export default function CancelPage() {
  return (
    <>
      <PageHero
        eyebrow="Account"
        title={
          <>
            Before you cancel,
            <br />
            <em className="not-italic text-gold">let&apos;s be clear.</em>
          </>
        }
        lede="You can cancel any time. No dark patterns, no guilt. Your data stays yours, your events stay intact. Here's exactly what happens when you cancel — and a few alternatives worth knowing."
        crumbs={[{ label: 'Cancel' }]}
      />

      {/* Alternatives */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Before you go</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Four things to try first.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {BEFORE_YOU_GO.map((item, i) => (
              <Reveal key={item.title} delay={i * 50}>
                <div className="rounded-xl border border-border lux-card p-6 h-full flex flex-col">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <item.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">{item.desc}</p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold/80 transition-colors"
                  >
                    {item.cta} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What actually happens */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What changes</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Exactly what happens when you cancel.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {WHAT_HAPPENS.map((step, i) => (
              <Reveal key={step.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-5">
                  <div className="font-mono text-[11px] text-gold/40 w-6 shrink-0 mt-0.5">{step.step}</div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={WHAT_HAPPENS.length * 40}>
            <div className="mt-4 flex items-start gap-3 rounded-xl border border-gold/20 bg-gold/5 p-5">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/90 leading-relaxed">
                <strong className="font-medium">30-day money-back guarantee.</strong> If you cancel within 30 days of a charge, contact{' '}
                <a href="mailto:support@momenties.app" className="text-gold hover:text-gold/80 transition-colors">support@momenties.app</a>{' '}
                for a full refund, no questions asked.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Common reasons */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Reasons to cancel</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Common reasons — and what we can do.
            </h2>
          </Reveal>
          <div className="space-y-2">
            {REASONS.map((r, i) => (
              <Reveal key={r.label} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-1">{r.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.resolution}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Actual cancel CTA */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-border p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Ready to cancel?</h2>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                Cancel directly from your account settings. It takes 30 seconds and there are no confirmation loops or hidden steps.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-white/5 border border-border text-sm text-foreground hover:bg-white/10 transition-colors"
                >
                  Go to account settings <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Or email{' '}
                <a href="mailto:support@momenties.app" className="text-gold hover:text-gold/80 transition-colors">
                  support@momenties.app
                </a>{' '}
                and we&apos;ll cancel within 1 business day.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
