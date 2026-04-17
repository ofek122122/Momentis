import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BreadcrumbJsonLd } from '@/components/marketing/StructuredData'
import { allEntries, getRelease, type ChangeType } from '@/lib/changelog'
import { Sparkles, Wrench, Bug, Shield, Zap, ArrowLeft, ArrowUpRight } from 'lucide-react'

export async function generateStaticParams() {
  return allEntries().map((e) => ({ version: e.version }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ version: string }>
}): Promise<Metadata> {
  const { version } = await params
  const entry = getRelease(version)
  if (!entry) return { title: 'Release not found' }
  return {
    title: `v${entry.version} — ${entry.title}`,
    description: entry.summary,
    alternates: { canonical: `/changelog/${entry.version}` },
    openGraph: {
      type: 'article',
      title: `Calendro v${entry.version} — ${entry.title}`,
      description: entry.summary,
      url: `/changelog/${entry.version}`,
      publishedTime: entry.date,
    },
  }
}

const TYPE_META: Record<ChangeType, { label: string; Icon: typeof Sparkles; color: string }> = {
  new: { label: 'New', Icon: Sparkles, color: 'text-gold border-gold/30 bg-gold/10' },
  improved: { label: 'Improved', Icon: Wrench, color: 'text-sky-300 border-sky-400/30 bg-sky-500/10' },
  fixed: { label: 'Fixed', Icon: Bug, color: 'text-emerald-300 border-emerald-400/30 bg-emerald-500/10' },
  security: { label: 'Security', Icon: Shield, color: 'text-rose-300 border-rose-400/30 bg-rose-500/10' },
  performance: { label: 'Performance', Icon: Zap, color: 'text-violet-300 border-violet-400/30 bg-violet-500/10' },
}

export default async function ReleasePage({
  params,
}: {
  params: Promise<{ version: string }>
}) {
  const { version } = await params
  const entry = getRelease(version)
  if (!entry) notFound()

  const all = allEntries()
  const index = all.findIndex((e) => e.version === version)
  const next = index > 0 ? all[index - 1] : null
  const prev = index < all.length - 1 ? all[index + 1] : null

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Changelog', url: '/changelog' },
          { name: `v${entry.version}`, url: `/changelog/${entry.version}` },
        ]}
      />
      <section className="px-5 md:px-8 pt-10 md:pt-14 pb-2">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Changelog', href: '/changelog' },
              { label: `v${entry.version}` },
            ]}
          />
        </div>
      </section>

      <header className="px-5 md:px-8 pb-12 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold font-mono text-xs mb-5">
            v{entry.version}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
            {entry.title}
          </h1>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-2xl">
            {entry.summary}
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Released · {new Date(entry.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </header>

      {/* Changes */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-foreground tracking-tight mb-6">
              Full changelog
            </h2>
          </Reveal>
          <ul className="space-y-4">
            {entry.changes.map((change, i) => {
              const meta = TYPE_META[change.type]
              return (
                <Reveal key={i} delay={i * 30}>
                  <li className="rounded-xl border border-border lux-card p-5">
                    <div className="flex items-start gap-3">
                      <span
                        className={`shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-mono uppercase tracking-wider ${meta.color}`}
                      >
                        <meta.Icon className="h-3 w-3" />
                        {meta.label}
                      </span>
                      <span className="text-sm text-foreground/90 leading-relaxed">{change.text}</span>
                    </div>
                  </li>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Prev / next nav */}
      <section className="py-10 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/changelog/${prev.version}`}
              className="group block rounded-xl border border-border lux-card p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                ← Previous release
              </p>
              <h3 className="font-display text-base font-semibold text-foreground group-hover:text-gold transition-colors">
                v{prev.version} — {prev.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/changelog/${next.version}`}
              className="group block rounded-xl border border-border lux-card p-5 text-right"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                Next release →
              </p>
              <h3 className="font-display text-base font-semibold text-foreground group-hover:text-gold transition-colors">
                v{next.version} — {next.title}
              </h3>
            </Link>
          ) : (
            <Link
              href="/roadmap"
              className="group block rounded-xl border border-border lux-card p-5 text-right"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                What&apos;s next →
              </p>
              <h3 className="font-display text-base font-semibold text-foreground group-hover:text-gold transition-colors">
                See the roadmap
              </h3>
            </Link>
          )}
        </div>
        <div className="max-w-3xl mx-auto mt-6 flex items-center justify-center">
          <Link
            href="/changelog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All releases
          </Link>
        </div>
      </section>

      <CTA
        title="Stay close to the work."
        subtitle="Subscribe via RSS or newsletter to get each release the day it ships."
        primary={{ label: 'Subscribe via RSS', href: '/feed.xml' }}
        secondary={{ label: 'Read the blog', href: '/blog' }}
      />
    </article>
  )
}
