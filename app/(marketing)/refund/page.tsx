import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowUpRight, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Refund Policy — Momenties',
  description:
    'Our refund policy is simple: if you\'re not happy within 30 days, we\'ll refund your payment. No forms, no questions.',
  alternates: { canonical: '/refund' },
  openGraph: {
    title: 'Momenties Refund Policy',
    description: '30-day no-questions refund for all paid plans.',
    url: '/refund',
  },
}

export default function RefundPage() {
  return (
    <>
      <PageHero
        eyebrow="Refund policy"
        title={
          <>
            30 days.
            <br />
            <em className="not-italic text-gold">No questions.</em>
          </>
        }
        lede="If Momenties isn't right for you, we'll refund your payment within 30 days of purchase. One email, done."
        crumbs={[{ label: 'Refund policy' }]}
      />

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-2xl mx-auto">

          <Reveal>
            <div className="flex items-start gap-4 rounded-2xl border border-gold/20 bg-gold/5 p-6 mb-10">
              <RefreshCw className="h-6 w-6 text-gold shrink-0 mt-0.5" />
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                  The short version
                </h2>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  Email <a href="mailto:billing@momenties.app" className="text-gold hover:text-gold/80 transition-colors">billing@momenties.app</a> within 30 days of your charge. We&apos;ll process the refund to your original payment method within 5 business days. That&apos;s it.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-10 text-[15px] leading-[1.78] text-foreground/85 font-light">

            <Reveal delay={40}>
              <h2 className="font-display text-2xl font-bold text-foreground tracking-tight">What qualifies</h2>
              <ul className="mt-4 space-y-3">
                {[
                  'Any Pro or Team subscription, within 30 days of the initial charge',
                  'Annual plans: prorated refund for unused months if requested within 30 days of the annual renewal',
                  'Accidental double-charges: immediate refund, same business day',
                  'Charges after a cancellation you made before the renewal date: full refund, no questions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-1.5">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={40}>
              <h2 className="font-display text-2xl font-bold text-foreground tracking-tight">What doesn&apos;t qualify</h2>
              <ul className="mt-4 space-y-3">
                {[
                  'Requests more than 30 days after the charge date',
                  'Abuse of the refund policy (more than two refunds per account)',
                  'Enterprise contracts — governed by your specific contract terms',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-muted-foreground/60 mt-1.5">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={40}>
              <h2 className="font-display text-2xl font-bold text-foreground tracking-tight">How to request</h2>
              <p className="mt-4">
                Email <a href="mailto:billing@momenties.app" className="text-gold hover:text-gold/80 transition-colors">billing@momenties.app</a> from the email address on your account. Subject: &ldquo;Refund request.&rdquo; No explanation needed — though if you want to tell us why, we do read every note.
              </p>
              <p className="mt-4">
                Refunds process within 5 business days. The time it takes to appear on your statement depends on your card issuer — typically 3–7 additional business days.
              </p>
            </Reveal>

            <Reveal delay={40}>
              <h2 className="font-display text-2xl font-bold text-foreground tracking-tight">Why we do this</h2>
              <p className="mt-4">
                We don&apos;t want your money if the product isn&apos;t working for you. Full stop. A generous refund policy costs us a small amount in edge cases and earns an enormous amount of trust everywhere else. It&apos;s a good trade.
              </p>
            </Reveal>

            <Reveal delay={40}>
              <h2 className="font-display text-2xl font-bold text-foreground tracking-tight">Questions</h2>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="mailto:billing@momenties.app"
                  className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
                >
                  billing@momenties.app <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <Link
                  href="/help"
                  className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
                >
                  Help center <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
                >
                  Contact us <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={40}>
              <p className="font-mono text-[11px] text-muted-foreground/60 pt-4 border-t border-border">
                Last updated: April 2026. This policy applies to individual Pro and Team subscriptions. Enterprise contracts are governed by separate terms.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Still not sure? Try free first."
        subtitle="The free plan has no expiry. Upgrade only when you know you love it."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See pricing', href: '/pricing' }}
      />
    </>
  )
}
