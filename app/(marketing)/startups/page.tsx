import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Rocket, Gift, Check, ArrowUpRight, Users, Clock, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendro for Startups — 90% off for your first year',
  description: 'Seed-stage startups get Calendro Team free for 10 seats for 12 months. Apply in three minutes. Keep your focus, not your scheduling headaches.',
  alternates: { canonical: '/startups' },
  openGraph: {
    title: 'Calendro for Startups',
    description: '90% off for seed-stage founders.',
    url: '/startups',
  },
}

const PERKS = [
  { icon: Gift, title: '10 seats, free for 12 months', desc: 'Full Calendro Team — unlimited events, shared calendars, AI briefings, for your whole founding team.' },
  { icon: Sparkles, title: '90% off into year two', desc: 'When your free year ends, you get 90% off your next year. No pressure, no auto-upgrade shenanigans.' },
  { icon: Users, title: 'Direct Slack with our founders', desc: 'A shared channel with Iris and Oren. Bug reports answered in hours. Feature requests considered seriously.' },
  { icon: Clock, title: 'Priority onboarding', desc: 'A 30-min call with our Head of Product to set your team up. Optional. No sales pitch.' },
  { icon: Rocket, title: 'Introductions on request', desc: 'Backed by Index, Homebrew, and a thoughtful angel pool. We\'ll warm-intro where we can help.' },
]

const REQS = [
  'Raised less than $5M in funding to date.',
  'Fewer than 20 full-time employees.',
  'Incorporated in the last 3 years.',
  'You\'re actually going to use it — not stockpile credits.',
]

const FAQS = [
  {
    q: 'What counts as seed-stage?',
    a: 'Pre-seed, seed, and seed-extension rounds. If you\'ve raised a Series A already, you\'re past the program — but we have generous year-one discounts for Series A too.',
  },
  {
    q: 'Is Calendro affiliated with any accelerator?',
    a: 'We partner with Y Combinator, Techstars, Entrepreneur First, South Park Commons, and about a dozen others. If your program is on the list, you get a faster approval path.',
  },
  {
    q: 'What happens after year one?',
    a: '90% off for year two, 50% off for year three, standard pricing after that. If you\'re on the standard plan by then, you\'re probably big enough not to care about a scheduling discount.',
  },
  {
    q: 'Can I use it for personal + company calendars?',
    a: 'Yes. Each seat is a full Calendro account. Connect your personal Google, your company Workspace, and a client calendar or two — all in one view.',
  },
]

export default function StartupsPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendro for Startups"
        title={
          <>
            Free for your first year. <em className="not-italic text-gold">Because your runway matters.</em>
          </>
        }
        lede="Seed-stage teams get 10 seats of Calendro Team free for 12 months, then 90% off for year two. We don't think a calendar should cost more than your team's first laptop."
        crumbs={[{ label: 'For startups' }]}
      >
        <Link
          href="#apply"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
        >
          Apply now
        </Link>
      </PageHero>

      {/* Value strip */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: '$1,440', l: 'Saved year one' },
            { v: '10', l: 'Seats included' },
            { v: '12 mo', l: 'Free period' },
            { v: '90%', l: 'Off year two' },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-4xl font-bold shimmer-text">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">What you get</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Five real benefits.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PERKS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 80}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center mb-5">
                    <p.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-8 text-center">
              Who qualifies.
            </h2>
          </Reveal>
          <ul className="space-y-3">
            {REQS.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm text-foreground/90 rounded-xl border border-border lux-card p-4">
                <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <Rocket className="h-10 w-10 text-gold mx-auto mb-5 float-y" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Ready to apply?
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            Email us a one-sentence description of your company, your round size, and an ops email. We respond within 48 hours.
          </p>
          <a
            href="mailto:startups@calendro.app"
            className="mt-8 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            startups@calendro.app <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8 text-center">
            Quick answers
          </h2>
          <div className="space-y-2">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <details className="group rounded-xl border border-border lux-card overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                    <span className="text-sm font-medium text-foreground">{f.q}</span>
                    <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Save a meeting. Save a week."
        subtitle="The startups using Calendro run 27% fewer meetings in their first quarter. That's dozens of hours back, at zero cost."
        primary={{ label: 'Apply to the program', href: 'mailto:startups@calendro.app' }}
        secondary={{ label: 'See customer stories', href: '/customers' }}
      />
    </>
  )
}
