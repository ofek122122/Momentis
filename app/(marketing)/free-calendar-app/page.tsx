import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free Calendar App — AI input, voice scheduling, and Google Calendar sync',
  description:
    'Momenties free plan includes AI natural language input, voice scheduling, photo-to-calendar, Google Calendar sync, and Daily Brief. No credit card. No time limit. Genuinely free.',
  alternates: { canonical: '/free-calendar-app' },
  openGraph: {
    title: 'Free Calendar App — Momenties',
    description: 'AI input, voice, and Google sync. Genuinely free forever.',
    url: '/free-calendar-app',
    type: 'website',
  },
}

const FREE_FEATURES = [
  { name: 'Natural language event input', included: true },
  { name: 'Voice input (AI-parsed)', included: true },
  { name: 'Photo-to-calendar', included: true },
  { name: 'Google Calendar sync', included: true },
  { name: 'Apple Calendar sync (CalDAV)', included: false, note: 'Pro plan' },
  { name: 'Daily Brief', included: true },
  { name: 'Recurring events', included: true },
  { name: 'Calendar templates', included: true, note: 'Up to 3 templates' },
  { name: 'Time analytics', included: false, note: 'Pro plan' },
  { name: 'Focus mode', included: false, note: 'Pro trial included' },
  { name: 'Keyboard shortcuts', included: true },
  { name: 'Mobile web app', included: true },
  { name: 'Multiple calendars', included: true },
  { name: 'Event tags and categories', included: true },
  { name: 'Team availability overlay', included: false, note: 'Team plan' },
  { name: 'Unlimited events', included: true },
]

const WHY_FREE = [
  {
    heading: 'Actually free — not "free trial"',
    body: 'No 14-day limit. No credit card required. No degraded experience after the trial. The free plan is a real product that works forever.',
  },
  {
    heading: 'Upgrade only when it makes sense',
    body: 'Analytics and Focus mode are Pro-only because they require more infrastructure. Everything else — AI input, voice, photos, sync — is free because we want everyone to have fast scheduling.',
  },
  {
    heading: 'How we make money',
    body: 'Pro plan ($12/month) and Team plan ($9/person/month) for analytics, Focus mode, Apple Calendar sync, and team features. No advertising, no data sales.',
  },
]

export default function FreeCalendarAppPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Calendar App"
        title={
          <>
            AI scheduling.
            <br />
            <em className="not-italic text-gold">Genuinely free forever.</em>
          </>
        }
        lede="Momenties free plan includes natural language input, voice scheduling, photo-to-calendar, and Google Calendar sync — with no trial period, no credit card, and no time limit. Fast scheduling shouldn't cost anything."
        crumbs={[{ label: 'Free Calendar App' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free — no card needed <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            See all plans
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card · No trial countdown</p>
      </PageHero>

      {/* Feature list */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Free plan</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What's free — and what's not.</h2>
          </Reveal>
          <Reveal>
            <div className="rounded-xl border border-border overflow-hidden">
              {FREE_FEATURES.map((f, i) => (
                <div key={f.name} className={`flex items-center gap-3 px-4 py-3 border-b border-border/40 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                  {f.included
                    ? <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    : <XCircle className="h-4 w-4 text-red-400/40 shrink-0" />}
                  <span className={`text-sm flex-1 ${f.included ? 'text-foreground/90' : 'text-muted-foreground/60'}`}>{f.name}</span>
                  {f.note && <span className="text-[10px] font-mono text-muted-foreground/50">{f.note}</span>}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why free */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Why so much is free.</h2>
          </Reveal>
          <div className="space-y-6">
            {WHY_FREE.map((item, i) => (
              <Reveal key={item.heading} delay={i * 60}>
                <div className="border-l-2 border-gold/30 pl-5">
                  <h3 className="text-sm font-medium text-foreground mb-1.5">{item.heading}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Pro comparison */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">When to upgrade to Pro.</h2>
          </Reveal>
          <Reveal>
            <div className="space-y-3">
              {[
                { reason: 'You want to see how many hours per week you\'re in meetings', upgrade: 'Analytics — Pro' },
                { reason: 'You want notifications to stop during deep work', upgrade: 'Focus mode — Pro' },
                { reason: 'You use Apple Calendar and want full sync', upgrade: 'CalDAV sync — Pro' },
                { reason: 'You want more than 3 calendar templates', upgrade: 'Unlimited templates — Pro' },
                { reason: 'You want your team to share availability', upgrade: 'Team overlay — Team plan' },
              ].map((item) => (
                <div key={item.reason} className="flex items-start gap-3 rounded-xl border border-border/50 p-4">
                  <div className="flex-1">
                    <p className="text-sm text-foreground/80">{item.reason}</p>
                  </div>
                  <span className="font-mono text-[10px] text-gold/70 shrink-0">{item.upgrade}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Start free. Upgrade if you want more."
        subtitle="AI input, voice, photos, and Google sync — all free forever. No pressure to upgrade."
        primary={{ label: 'Start free — no card', href: '/login' }}
        secondary={{ label: 'Compare plans', href: '/pricing' }}
      />
    </>
  )
}
