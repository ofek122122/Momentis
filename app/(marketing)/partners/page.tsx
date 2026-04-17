import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Handshake, BookOpen, Wrench, DollarSign, Check, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partners — Agencies, consultancies, and accelerators',
  description: 'Calendro partner program for agencies, SI consultancies, accelerators, and professional communities. Revenue share, co-marketing, and early access.',
  alternates: { canonical: '/partners' },
  openGraph: {
    title: 'Calendro Partners',
    description: 'For agencies, accelerators, and communities.',
    url: '/partners',
  },
}

const TIERS = [
  {
    icon: BookOpen,
    title: 'Solution partners',
    desc: 'Consultancies and agencies who deploy Calendro for their clients. Volume discounts, co-branded onboarding, dedicated support channel.',
    bullets: ['15% revenue share', 'Co-branded onboarding kit', 'Dedicated Slack Connect', 'Quarterly partner briefings'],
    cta: 'Apply as solution partner',
  },
  {
    icon: Handshake,
    title: 'Accelerator partners',
    desc: 'For YC, EF, Techstars, SPC, and other programs whose portfolio companies would benefit. Free seats + fast-track support for your cohorts.',
    bullets: ['10 free seats per portfolio company', '90% off for year two', 'Direct line to our founders', 'Co-marketing support'],
    cta: 'Onboard your cohort',
  },
  {
    icon: Wrench,
    title: 'Technology partners',
    desc: 'Software companies building on our API, integrating with our platform, or bundling Calendro with their own product.',
    bullets: ['Dedicated API sandbox', 'Co-listing on /integrations', 'Joint product launches', 'Revenue share for bundled deals'],
    cta: 'Discuss integration',
  },
  {
    icon: DollarSign,
    title: 'Community partners',
    desc: 'Newsletters, podcasts, YouTube creators, and professional communities whose audience overlaps with ours. Paid collaborations, not affiliate spam.',
    bullets: ['Fixed-fee sponsorships (not CPA)', 'Full editorial control', 'Custom promo codes for your audience', 'First look at new features'],
    cta: 'Pitch a collab',
  },
]

const LOGOS = [
  'Y Combinator', 'Entrepreneur First', 'Techstars', 'South Park Commons',
  '500 Global', 'Pioneer', 'Atelier Ventures', 'Day One', 'Mercury',
]

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner program"
        title={
          <>
            Build <em className="not-italic text-gold">with us</em>, not on top of us.
          </>
        }
        lede="Four partnership tracks, each designed around what you actually do. Real revenue share, real editorial freedom, real support."
        crumbs={[{ label: 'Partners' }]}
      >
        <a
          href="mailto:partners@calendro.app"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
        >
          partners@calendro.app
        </a>
      </PageHero>

      {/* Current partners */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 text-center mb-8">
            Already partnered with
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 opacity-60">
            {LOGOS.map((name) => (
              <span key={name} className="font-display italic text-base md:text-lg text-center text-foreground/60">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              Four tracks
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Pick the one that fits.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {TIERS.map((t, i) => (
              <Reveal key={t.title} delay={(i % 2) * 80}>
                <div className="rounded-2xl border border-border lux-card p-7 h-full flex flex-col">
                  <t.icon className="h-5 w-5 text-gold mb-5" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t.desc}</p>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                        <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:partners@calendro.app"
                    className="inline-flex items-center justify-center gap-1.5 h-10 rounded-full border border-border hover:border-gold/30 hover:text-gold transition-colors text-sm font-medium text-foreground"
                  >
                    {t.cta} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              How onboarding works.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { n: '01', t: 'Reach out', d: 'Email partners@calendro.app with two sentences about what you do and what you\'d like to build together.' },
              { n: '02', t: '30-min call', d: 'One of our founders, no sales people. We want to understand fit before anything else.' },
              { n: '03', t: 'Pilot agreement', d: 'A short, plain-English agreement. No 40-page MSA. Usually signed same-week.' },
              { n: '04', t: 'Ship together', d: 'We align on a measurable outcome for quarter one, meet monthly, and keep score honestly.' },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <span className="font-mono text-xs text-gold/50">{s.n}</span>
                  <h3 className="text-sm font-medium text-foreground mt-3 mb-2">{s.t}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Let's do something good together."
        subtitle="We work with a small number of partners deeply. If you're a good fit, we'll know within a call."
        primary={{ label: 'partners@calendro.app', href: 'mailto:partners@calendro.app' }}
        secondary={{ label: 'See the affiliate program', href: '/affiliates' }}
      />
    </>
  )
}
