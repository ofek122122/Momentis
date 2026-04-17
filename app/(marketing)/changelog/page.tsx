import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { CHANGELOG as MONTHS, type ChangeType } from '@/lib/changelog'
import { Sparkles, Wrench, Bug, Shield, Zap, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Changelog — What we shipped',
  description: 'Every update to Calendro. Notes written by the engineers who shipped them.',
  alternates: { canonical: '/changelog' },
  openGraph: {
    title: 'Calendro Changelog',
    description: 'Every update, in chronological order.',
    url: '/changelog',
  },
}

const TYPE_META: Record<ChangeType, { label: string; Icon: typeof Sparkles; color: string }> = {
  new: { label: 'New', Icon: Sparkles, color: 'text-gold border-gold/30 bg-gold/10' },
  improved: { label: 'Improved', Icon: Wrench, color: 'text-sky-300 border-sky-400/30 bg-sky-500/10' },
  fixed: { label: 'Fixed', Icon: Bug, color: 'text-emerald-300 border-emerald-400/30 bg-emerald-500/10' },
  security: { label: 'Security', Icon: Shield, color: 'text-rose-300 border-rose-400/30 bg-rose-500/10' },
  performance: { label: 'Performance', Icon: Zap, color: 'text-violet-300 border-violet-400/30 bg-violet-500/10' },
}

export default function ChangelogPage() {
  return (
    <>
      <PageHero
        eyebrow="Changelog"
        title={
          <>
            What we <em className="not-italic text-gold">shipped</em>.
          </>
        }
        lede="A chronological record of every change to Calendro. No marketing gloss. Just the engineering notes."
        crumbs={[{ label: 'Changelog' }]}
      />

      <section className="py-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto space-y-20">
          {MONTHS.map((group) => (
            <div key={group.month}>
              <Reveal>
                <div className="sticky top-16 z-10 -mx-5 md:-mx-8 px-5 md:px-8 py-3 mb-8 bg-[#0c0c0f]/95 backdrop-blur-lg border-b border-border">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
                    {group.month}
                  </p>
                </div>
              </Reveal>
              <div className="space-y-14">
                {group.entries.map((entry, ei) => (
                  <Reveal key={entry.version} delay={ei * 80}>
                    <article className="grid md:grid-cols-[160px_1fr] gap-6">
                      <div>
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold font-mono text-[11px]">
                          v{entry.version}
                        </div>
                        <div className="mt-2 font-mono text-[11px] text-muted-foreground">
                          {new Date(entry.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-border lux-card p-6">
                        <Link
                          href={`/changelog/${entry.version}`}
                          className="group inline-flex items-center gap-2 mb-5"
                        >
                          <h2 className="font-display text-2xl font-bold text-foreground tracking-tight group-hover:text-gold transition-colors">
                            {entry.title}
                          </h2>
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                        </Link>
                        <ul className="space-y-3">
                          {entry.changes.map((change, ci) => {
                            const meta = TYPE_META[change.type]
                            return (
                              <li key={ci} className="flex items-start gap-3">
                                <span
                                  className={`shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-mono uppercase tracking-wider ${meta.color}`}
                                >
                                  <meta.Icon className="h-3 w-3" />
                                  {meta.label}
                                </span>
                                <span className="text-sm text-foreground/90 leading-relaxed">
                                  {change.text}
                                </span>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="Want to see what's next?"
        subtitle="Our public roadmap shows everything we're working on, from early ideas to shipped-this-week."
        primary={{ label: 'See the roadmap', href: '/roadmap' }}
        secondary={{ label: 'Subscribe to updates', href: '/blog' }}
      />
    </>
  )
}
