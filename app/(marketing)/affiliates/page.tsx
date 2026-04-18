import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { FAQPageJsonLd } from '@/components/marketing/StructuredData'
import { DollarSign, Share2, Gift, Check, ArrowUpRight, Users, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Affiliates — Earn by sharing Momenties',
  description: 'Refer Momenties and earn 30% recurring revenue for a year. No minimums, no dark patterns, real cash via Stripe.',
  alternates: { canonical: '/affiliates' },
  openGraph: {
    title: 'Momenties Affiliate Program',
    description: '30% recurring for 12 months. Paid via Stripe.',
    url: '/affiliates',
  },
}

const STEPS = [
  {
    icon: Users,
    title: 'Apply to the program',
    desc: 'Short form, honest screen. We approve most applicants within 48 hours.',
  },
  {
    icon: Share2,
    title: 'Share your link',
    desc: 'Your unique referral URL. Also works in YouTube videos, blog posts, newsletters — anywhere.',
  },
  {
    icon: DollarSign,
    title: 'Get paid monthly',
    desc: '30% of each referred customer\'s subscription. For twelve months. Paid via Stripe.',
  },
]

const TIERS = [
  { level: 'Standard', payout: '30%', duration: '12 months', threshold: 'Any referrals', perks: ['Real-time dashboard', 'Branded link', 'Monthly payouts'] },
  { level: 'Gold', payout: '35%', duration: '18 months', threshold: '20+ referrals / quarter', perks: ['All Standard perks', 'Co-marketing opportunities', 'Early access to features'] },
  { level: 'Platinum', payout: '40%', duration: '24 months', threshold: '100+ referrals / quarter', perks: ['All Gold perks', 'Direct slack with our CEO', 'Custom landing pages', 'Exclusive swag'] },
]

const FAQS = [
  {
    q: 'How much can I actually make?',
    a: 'On a Pro plan ($8/mo), 30% is $2.40/user/month. A mid-size newsletter with 100 converted referrals earns ~$2,880/yr. A top-tier affiliate with 1,000 can earn $28,800+/yr.',
  },
  {
    q: 'When do you pay?',
    a: 'The 5th of every month, for the prior month\'s earnings. Stripe Connect, Wise, or bank transfer — your call. Minimum $50 accrued.',
  },
  {
    q: 'Can I buy Momenties through my own link?',
    a: 'No. Self-referrals are forbidden and will disqualify your account. It\'s the cheapest way to lose a good program.',
  },
  {
    q: 'What\'s not allowed?',
    a: 'Incentivized signups (e.g., cashback sites), spam, paid search bidding on our brand keywords, impersonating Momenties. Full terms in the agreement.',
  },
  {
    q: 'What\'s the cookie window?',
    a: 'Ninety days. If a user clicks your link and purchases within 90 days, credit goes to you — even if they close the browser in between.',
  },
  {
    q: 'Do you work with agencies?',
    a: 'Yes. Agencies and consultancies get custom terms. Email partners@momenties.app to open a conversation.',
  },
]

export default function AffiliatesPage() {
  return (
    <>
      <FAQPageJsonLd items={FAQS} />
      <PageHero
        eyebrow="Affiliate program"
        title={
          <>
            Earn 30% recurring <em className="not-italic text-gold">for a year</em>, for every referral.
          </>
        }
        lede="Honest payouts, transparent reporting, real money. If Momenties has been good to you, share it — and get paid properly for the favor."
        crumbs={[{ label: 'Affiliates' }]}
      >
        <Link
          href="#apply"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
        >
          Apply now
        </Link>
      </PageHero>

      {/* Hero numbers */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '30%', label: 'Recurring payout' },
            { value: '12 months', label: 'Revenue share window' },
            { value: '90 days', label: 'Cookie attribution' },
            { value: '$50', label: 'Minimum payout' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div>
                <div className="font-display text-3xl md:text-4xl font-bold shimmer-text">{s.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              How it works
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Three steps to earning.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="rounded-2xl border border-border lux-card p-7 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-gold" />
                    </div>
                    <span className="font-mono text-xs text-gold/50">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              Tiers
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Grow with us. Earn more.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TIERS.map((t, i) => (
              <Reveal key={t.level} delay={i * 100}>
                <div
                  className={`relative rounded-2xl border p-6 h-full ${
                    i === 1
                      ? 'border-gold/40 bg-gradient-to-b from-gold/5 to-transparent'
                      : 'border-border lux-card'
                  }`}
                >
                  {i === 1 && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 inline-flex items-center px-2.5 py-0.5 rounded-full bg-gold text-[#0c0c0f] text-[10px] font-mono uppercase tracking-wider">
                      Most popular
                    </span>
                  )}
                  <div className="font-display text-lg font-semibold text-foreground">{t.level}</div>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-gold">{t.payout}</span>
                    <span className="text-xs text-muted-foreground">recurring</span>
                  </div>
                  <div className="text-xs font-mono text-muted-foreground mt-1">for {t.duration}</div>
                  <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
                    Threshold: <span className="text-foreground/80">{t.threshold}</span>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {t.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-foreground/90">
                        <Check className="h-3.5 w-3.5 text-gold mt-1 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 px-5 md:px-8 border-b border-border relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{ background: 'radial-gradient(50% 60% at 50% 50%, rgba(197,163,92,0.06) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto">
          <Reveal className="text-center mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              Rough math
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              What you could earn.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { referrals: 10, yearly: 288 },
              { referrals: 100, yearly: 2880 },
              { referrals: 1000, yearly: 28800 },
            ].map((row, i) => (
              <Reveal key={row.referrals} delay={i * 100}>
                <div className="rounded-2xl border border-border lux-card p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Users className="h-4 w-4 text-gold" />
                    <span className="font-mono text-sm text-foreground">{row.referrals} referrals</span>
                  </div>
                  <div className="font-display text-4xl font-bold shimmer-text">
                    ${row.yearly.toLocaleString()}
                  </div>
                  <div className="text-xs font-mono text-muted-foreground mt-2">per year · recurring</div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6 max-w-xl mx-auto">
            Based on Pro plan ($8/mo) × 30% × 12 months. Real earnings vary by plan mix and retention.
          </p>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <Gift className="h-10 w-10 text-gold mx-auto mb-5 float-y" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Ready to start?
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Apply takes three minutes. We approve most applicants within 48 hours. New payouts begin the following month.
          </p>
          <a
            href="mailto:partners@momenties.app"
            className="mt-8 inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            Apply to the program
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8 text-center">
            FAQ
          </h2>
          <div className="space-y-2">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <details className="group rounded-xl border border-border lux-card overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                    <span className="text-sm font-medium text-foreground">{f.q}</span>
                    <Zap className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90 shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Share quietly. Earn properly."
        subtitle="Momenties is a product worth talking about — let's make it worth your time."
        primary={{ label: 'Apply now', href: 'mailto:partners@momenties.app' }}
        secondary={{ label: 'Read the terms', href: '/terms' }}
      />
    </>
  )
}
