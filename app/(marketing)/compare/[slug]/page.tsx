import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { COMPETITORS, getCompetitor } from '@/lib/competitors'
import { Check, X, Minus, ArrowUpRight } from 'lucide-react'

export async function generateStaticParams() {
  return COMPETITORS.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const c = getCompetitor(slug)
  if (!c) return { title: 'Comparison not found' }
  return {
    title: `Calendro vs. ${c.name}`,
    description: c.tagline,
    alternates: { canonical: `/compare/${c.slug}` },
    openGraph: {
      title: `Calendro vs. ${c.name}`,
      description: c.tagline,
      url: `/compare/${c.slug}`,
    },
  }
}

function Cell({ v }: { v: 'yes' | 'no' | 'partial' }) {
  if (v === 'yes') return <Check className="h-4 w-4 text-gold mx-auto" />
  if (v === 'no') return <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />
  return <Minus className="h-4 w-4 text-amber-400/70 mx-auto" />
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const c = getCompetitor(slug)
  if (!c) notFound()

  return (
    <>
      <PageHero
        eyebrow={`Calendro vs. ${c.short}`}
        title={
          <>
            How we&apos;re <em className="not-italic text-gold">different</em> from {c.name}.
          </>
        }
        lede={c.tagline}
        crumbs={[
          { label: 'Compare', href: '/compare' },
          { label: c.name },
        ]}
      />

      {/* Hero context */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="font-display text-xl md:text-2xl italic text-foreground leading-snug">
              {c.hero}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
              Feature comparison
            </h2>
          </Reveal>
          <div className="rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.02] border-b border-border">
                <tr>
                  <th className="text-left px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Feature
                  </th>
                  <th className="px-4 py-4 font-display text-base text-gold w-28">Calendro</th>
                  <th className="px-4 py-4 font-display text-base text-muted-foreground w-28">
                    {c.short}
                  </th>
                  <th className="text-left px-4 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hidden md:table-cell">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.012]'}`}
                  >
                    <td className="px-5 py-3.5 text-foreground/90">{row.feature}</td>
                    <td className="px-4 py-3.5 text-center">
                      <Cell v={row.us} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <Cell v={row.them} />
                    </td>
                    <td className="px-4 py-3.5 text-xs text-muted-foreground hidden md:table-cell">
                      {row.note ?? ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center gap-4 flex-wrap text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-gold" /> Yes
            </span>
            <span className="flex items-center gap-1.5">
              <Minus className="h-3.5 w-3.5 text-amber-400/70" /> Partial
            </span>
            <span className="flex items-center gap-1.5">
              <X className="h-3.5 w-3.5 text-muted-foreground/50" /> No
            </span>
          </div>
        </div>
      </section>

      {/* Strengths / weaknesses / verdict */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          <Reveal>
            <div className="rounded-2xl border border-border lux-card p-6 h-full">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-3">
                Where {c.short} wins
              </p>
              <ul className="space-y-2.5">
                {c.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-border lux-card p-6 h-full">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-3">
                Where we beat them
              </p>
              <ul className="space-y-2.5">
                {c.weaknesses.map((w) => (
                  <li key={w} className="flex items-start gap-2 text-sm text-foreground/90">
                    <span className="text-gold mt-0.5 shrink-0">✦</span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <div className="max-w-3xl mx-auto mt-10 rounded-2xl border border-gold/25 bg-gradient-to-b from-gold/5 to-transparent p-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-3">
            Our honest verdict
          </p>
          <p className="text-base text-foreground leading-relaxed">{c.verdict}</p>
        </div>
      </section>

      {/* Other comparisons */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6">
            Compare with others
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {COMPETITORS.filter((o) => o.slug !== c.slug).map((o) => (
              <Link
                key={o.slug}
                href={`/compare/${o.slug}`}
                className="group block rounded-xl border border-border lux-card p-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/60 mb-2">
                  vs. {o.short}
                </p>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                  {o.name}
                </h3>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-gold opacity-70 group-hover:opacity-100">
                  Read comparison <ArrowUpRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title={`Try Calendro — see for yourself.`}
        subtitle="Free forever tier. No card. 90-second setup. If it's not an improvement, keep using what you had."
        primary={{ label: 'Get started free', href: '/login' }}
        secondary={{ label: 'Browse all features', href: '/features' }}
      />
    </>
  )
}
