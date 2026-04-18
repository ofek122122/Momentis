import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Users, DollarSign, Globe, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Investors — Backing quiet software',
  description: 'A small, thoughtful cap table backing Momenties: Index Ventures, a few angels, and the two founders.',
  alternates: { canonical: '/investors' },
  openGraph: {
    title: 'Momenties Investors',
    description: 'The people backing quieter software.',
    url: '/investors',
  },
}

const INVESTORS = [
  { name: 'Index Ventures', role: 'Lead · Series A (2026)', note: 'Led our $12M Series A. Sarah Cannon sits on the board.' },
  { name: 'Homebrew', role: 'Seed lead (2024)', note: 'Led our $3M seed. Hunter Walk has been writing us notes since week 4.' },
  { name: 'Naval Ravikant', role: 'Angel · 2024', note: 'Small check, large influence. Encouraged us to stay small and deliberate.' },
  { name: 'Tim Ferriss', role: 'Angel · 2025', note: 'Wrote us after using Momenties for a month. Called voice-entry "a life upgrade."' },
  { name: 'Chelsea Apple', role: 'Angel · 2025', note: 'Former Superhuman exec. Weekly product feedback; often brutal; always right.' },
  { name: 'Jack Altman', role: 'Angel · 2025', note: 'Co-founder of Lattice. Introduced us to most of our first enterprise customers.' },
]

const METRICS = [
  { icon: TrendingUp, v: '12×', l: 'YoY growth' },
  { icon: Users, v: '28k', l: 'Weekly active users' },
  { icon: DollarSign, v: 'cash-flow', l: 'Profitable Q1 2026' },
  { icon: Globe, v: '120+', l: 'Countries served' },
]

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="For investors"
        title={
          <>
            Backing <em className="not-italic text-gold">quiet software</em>.
          </>
        }
        lede="A small, deliberately chosen cap table. We raise from people we'd happily share a long dinner with. Here's who believed early."
        crumbs={[{ label: 'Investors' }]}
      />

      {/* Metrics */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {METRICS.map((m, i) => (
            <Reveal key={m.l} delay={i * 70}>
              <div>
                <m.icon className="h-5 w-5 text-gold mx-auto mb-3" />
                <div className="font-display text-3xl md:text-4xl font-bold shimmer-text">{m.v}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
                  {m.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Thesis */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto space-y-6 text-[15px] leading-[1.75] text-foreground/85 font-light">
          <Reveal>
            <p className="font-display text-2xl md:text-3xl italic text-foreground leading-snug">
              &ldquo;Calm software will win — eventually — because attention is the most expensive currency we spend.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Momenties is a bet that the next generation of productivity software will be quieter,
              more thoughtful, and more respectful of the people who use it. We raise from investors
              who share that thesis — and who are comfortable with a company that won&apos;t ship
              features just to fill a quarter.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p>
              Our Series A closed in April 2026. We&apos;re profitable on a cash-flow basis and
              don&apos;t plan to raise again until we have a concrete reason to — probably around
              international expansion in 2027.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cap table */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-10">
              The people on our cap table
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {INVESTORS.map((inv, i) => (
              <Reveal key={inv.name} delay={(i % 2) * 80}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">{inv.name}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mt-1">
                    {inv.role}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{inv.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-8 w-8 text-gold mx-auto mb-5" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Interested in talking?
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            We&apos;re not actively raising, but we always take notes from thoughtful investors. Reach our founders directly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:iris@momenties.app"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
            >
              iris@momenties.app
            </a>
            <Link
              href="/press"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
            >
              Press kit
            </Link>
          </div>
        </div>
      </section>

      <CTA
        title="Try the product we're building."
        subtitle="The best due diligence is a week of use."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Read our blog', href: '/blog' }}
      />
    </>
  )
}
