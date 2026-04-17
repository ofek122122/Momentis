import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { COMPETITORS } from '@/lib/competitors'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Compare — Calendro vs. the alternatives',
  description: 'Honest, side-by-side comparisons between Calendro and Google Calendar, Calendly, Notion Calendar, and Superhuman.',
  alternates: { canonical: '/compare' },
  openGraph: {
    title: 'Compare Calendro',
    description: 'Honest comparisons with the alternatives.',
    url: '/compare',
  },
}

export default function CompareIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Side by side"
        title={
          <>
            Calendro vs. <em className="not-italic text-gold">the alternatives</em>.
          </>
        }
        lede="Honest comparisons. We don't pretend to be better at everything — we tell you where we win, where we tie, and where the other tool might still be right for you."
        crumbs={[{ label: 'Compare' }]}
      />

      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {COMPETITORS.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 80}>
              <Link
                href={`/compare/${c.slug}`}
                className="group block rounded-2xl border border-border lux-card p-7 h-full"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold/70">
                    Calendro vs. {c.short}
                  </p>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground group-hover:text-gold transition-colors">
                  {c.name}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.tagline}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA
        title="Not sure which is right?"
        subtitle="Read the full comparison, then try Calendro free for as long as you like."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See all features', href: '/features' }}
      />
    </>
  )
}
