import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { ROICalculator } from '@/components/marketing/ROICalculator'
import { CTA } from '@/components/marketing/CTA'
import { Reveal } from '@/components/marketing/Reveal'
import { Calculator, LineChart, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing calculator — Is Momenties worth it for your team?',
  description:
    "A conservative ROI calculator. Three sliders, live numbers. Hours saved, dollars saved, ROI multiple, and payback period — with transparent methodology.",
  alternates: { canonical: '/pricing/calculator' },
  openGraph: {
    title: 'Momenties pricing calculator',
    description:
      'Three sliders. Live numbers. A transparent, conservative ROI calculator for teams of any size.',
    url: '/pricing/calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momenties pricing calculator',
    description: 'Three sliders. Live numbers. Transparent methodology.',
  },
}

const METHODOLOGY: { label: string; body: string }[] = [
  {
    label: 'We only count what we can defend',
    body:
      "Our savings estimate combines two effects: a 22% reduction in scheduling-related context switching (the larger of the two), and a ~9 min/week saving from retiring overlapping tools. We deliberately exclude speculative effects like 'better decisions' or 'fewer missed meetings' because we can't measure them honestly.",
  },
  {
    label: '47-week year, not 52',
    body:
      "We calculate savings over 47 weeks, not 52. That bakes in five weeks of leave per person — holidays, sickness, sabbaticals. Most ROI calculators quietly use 52 and inflate their numbers by 10%. We think the number should land when you actually work.",
  },
  {
    label: 'Loaded cost, not base salary',
    body:
      "The hourly-rate slider is meant to be your loaded cost — salary, taxes, benefits, software. If you want to be strict, use 1.3 × annual base ÷ 2,000. If you run at a design studio or agency, use your billed rate.",
  },
  {
    label: 'Plan selection is a hint',
    body:
      "We suggest a plan based on team size: Pro for solo, Team for 2–49, Enterprise for 50+. You can always run the numbers on any plan by changing the team size slider. Nothing locks you into our suggestion.",
  },
]

const PROOF = [
  {
    metric: '41 min',
    label: 'reclaimed per week',
    quote:
      "I replaced a 45-minute Sunday 'schedule the week' ritual with a 4-minute chat. I got 41 minutes back, every week.",
    who: 'Tomás Levi · Indie founder',
  },
  {
    metric: '3 tools',
    label: 'retired',
    quote:
      'Momenties replaced three scheduling apps I was paying for. My team adopted it in a week with zero training.',
    who: 'Amira Okafor · Head of Design, Stratify',
  },
  {
    metric: '24 people',
    label: 'across 3 cities',
    quote:
      "I ran the whole offsite off Momenties — 24 people, 3 cities, 2 time zones. Nothing dropped, nobody asked me 'when was that again?'",
    who: 'Pauline Rivera · Chief of Staff',
  },
]

export default function PricingCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing calculator"
        title={
          <>
            Three sliders. <em className="not-italic text-gold">Live numbers</em>. No sales call required.
          </>
        }
        lede="Enter hours, enter cost, enter team size. We'll show you hours saved per year, dollars saved per year, ROI multiple, and payback period — based on two effects we can actually defend, not seven we can't."
        crumbs={[{ label: 'Pricing', href: '/pricing' }, { label: 'Calculator' }]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/40 hover:text-gold transition-colors"
          >
            See plans & pricing <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
          <Link
            href="#methodology"
            className="inline-flex items-center gap-2 h-10 px-5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How we calculated this →
          </Link>
        </div>
      </PageHero>

      {/* Calculator */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <ROICalculator />
        </div>
      </section>

      {/* Real-world proof */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border bg-[#0a0a0e]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4 mb-10 flex-wrap">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-emerald-400/5 border border-emerald-300/20 flex items-center justify-center">
              <LineChart className="h-5 w-5 text-emerald-300" aria-hidden />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300/80 mb-2">
                Proof in the field
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                The sliders are an estimate. These are real customers.
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {PROOF.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <article className="h-full rounded-2xl border border-border bg-[#131318] p-6 flex flex-col">
                  <div className="font-display text-4xl md:text-5xl text-gold font-semibold leading-none">
                    {p.metric}
                  </div>
                  <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground/80">
                    {p.label}
                  </div>
                  <p className="mt-5 font-display italic text-[15px] text-foreground/90 leading-relaxed">
                    &ldquo;{p.quote}&rdquo;
                  </p>
                  <div className="mt-auto pt-4 text-[11px] font-mono text-muted-foreground">{p.who}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section
        id="methodology"
        className="py-16 md:py-24 px-5 md:px-8 border-b border-border scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center shrink-0">
              <Calculator className="h-5 w-5 text-gold" aria-hidden />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-2">
                Methodology
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Four choices we made on purpose.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-xl">
                Most ROI calculators inflate. We preferred the smaller, truer number. Here is what we did and did not
                include — in plain English.
              </p>
            </div>
          </div>
          <ol className="space-y-6">
            {METHODOLOGY.map((m, i) => (
              <li key={m.label} className="rounded-2xl border border-border bg-[#131318] p-6 flex items-start gap-5">
                <div className="shrink-0 w-8 h-8 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center font-mono text-xs text-gold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl text-foreground tracking-tight">{m.label}</h3>
                  <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-2xl border border-border bg-[#0c0c0f] p-5 md:p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-2 inline-flex items-center gap-1.5">
              <Clock className="h-3 w-3" aria-hidden /> The math, in one line
            </p>
            <code className="block mt-2 text-[13px] font-mono text-foreground/90 leading-relaxed">
              hoursSavedPerYear = (hoursPerWeek × 0.22 + 9 min/week) × 47 × teamSize
            </code>
            <code className="block mt-2 text-[13px] font-mono text-foreground/90 leading-relaxed">
              dollarsSavedPerYear = hoursSavedPerYear × hourlyRate
            </code>
          </div>
        </div>
      </section>

      {/* What's included at each tier */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
            What&apos;s included
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-10">
            Every plan ships the same calendar. The difference is scale.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                plan: 'Pro',
                price: '$8/mo',
                unit: 'per user',
                features: [
                  'Unlimited AI parses',
                  'Voice + image input',
                  'All calendar views',
                  'Keyboard kit',
                  'Labs access',
                ],
                cta: 'Start with Pro',
                href: '/pricing',
              },
              {
                plan: 'Team',
                price: '$12/mo',
                unit: 'per user · 2–49 seats',
                features: [
                  'Everything in Pro',
                  'Shared calendars',
                  'Scoped share links',
                  'Template libraries',
                  'Team analytics',
                ],
                cta: 'Compare Team & Pro',
                href: '/pricing',
                featured: true,
              },
              {
                plan: 'Enterprise',
                price: 'Custom',
                unit: '50+ seats',
                features: [
                  'Everything in Team',
                  'SAML SSO',
                  'Audit logs (90 days)',
                  'Dedicated support',
                  '30-day pilot, no card',
                ],
                cta: 'Talk to sales',
                href: '/enterprise',
              },
            ].map((p) => (
              <div
                key={p.plan}
                className={`relative h-full rounded-2xl border p-6 md:p-7 ${
                  p.featured ? 'border-gold/40 bg-gradient-to-br from-gold/[0.05] via-[#131318] to-[#131318]' : 'border-border bg-[#131318]'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-2 left-5 px-2 py-0.5 rounded-full bg-gold text-[#0c0c0f] text-[9px] font-mono uppercase tracking-wider">
                    Most teams
                  </span>
                )}
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-2xl text-foreground tracking-tight">{p.plan}</h3>
                  <span className="font-mono text-[11px] text-muted-foreground">{p.unit}</span>
                </div>
                <div className="mt-2 font-display text-3xl text-gold font-semibold">{p.price}</div>
                <ul className="mt-5 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="h-4 w-4 text-gold/70 mt-0.5 shrink-0" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className={`mt-6 inline-flex items-center justify-center gap-1.5 w-full h-10 rounded-full text-sm font-medium transition-colors ${
                    p.featured
                      ? 'bg-gold text-[#0c0c0f] hover:bg-gold/90'
                      : 'border border-border text-foreground hover:border-gold/40 hover:text-gold'
                  }`}
                >
                  {p.cta}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to stop scheduling?"
        subtitle="Free forever for individuals. Pilot for 30 days on Enterprise. No credit card to try any plan."
        primary={{ label: 'Start using Momenties', href: '/login' }}
        secondary={{ label: 'Talk to sales', href: '/enterprise' }}
      />
    </>
  )
}
