import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { FOUNDERS, SHARED_STACK, READING, ROTATING, type FounderSetup } from '@/lib/uses'
import { ArrowUpRight, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Uses — What we work with, by hand',
  description:
    'The desks, editors, keyboards, and rituals of the Calendro team. Updated monthly. Long-form on purpose.',
  alternates: { canonical: '/uses' },
  openGraph: {
    title: 'What we use at Calendro',
    description:
      'The desks, editors, keyboards, and rituals of our two founders. Updated monthly, long-form on purpose.',
    url: '/uses',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What we use at Calendro',
    description: 'The desks, editors, keyboards, and rituals of our team.',
  },
}

function FounderBlock({ f, idx }: { f: FounderSetup; idx: number }) {
  return (
    <section
      id={f.slug}
      className={`py-20 md:py-28 px-5 md:px-8 border-b border-border scroll-mt-20 ${
        idx % 2 === 1 ? 'bg-[#0a0a0e]' : ''
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Portrait + bio */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <Reveal>
            <div className="shrink-0 w-32 h-40 md:w-40 md:h-52 rounded-2xl border border-border bg-gradient-to-br from-gold/15 via-[#131318] to-[#0c0c0f] flex items-end justify-center relative overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 dot-grid opacity-40"
              />
              <div className="relative pb-5 text-center">
                <div className="font-mono text-[42px] md:text-[56px] text-gold/80 tracking-[0.15em] leading-none">
                  {f.initials}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70">
                  portrait
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="flex-1 min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-2">
              Workspace #{String(idx + 1).padStart(2, '0')}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.05]">
              {f.name}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground font-mono">
              {f.role} · <span className="text-foreground/70">{f.location}</span>
            </p>
            <div className="mt-6 space-y-5">
              {f.essay.map((p, i) => (
                <p key={i} className="text-[15px] leading-[1.78] text-foreground/85 font-light">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Categories */}
        <div className="mt-12 space-y-10">
          {f.categories.map((cat) => (
            <Reveal key={cat.label} delay={80}>
              <div>
                <div className="flex items-baseline gap-4 mb-5">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
                    {cat.label}
                  </h3>
                  <span className="flex-1 h-px bg-border" />
                  <span className="font-mono text-[10px] text-muted-foreground/60">
                    {cat.items.length} items
                  </span>
                </div>
                <ul className="divide-y divide-border/70 border-y border-border/70">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="py-4 flex items-start justify-between gap-6 group"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="font-display text-[17px] text-foreground tracking-tight">
                            {item.name}
                          </span>
                          {item.since && (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-mono text-muted-foreground border border-border">
                              since {item.since}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[13px] text-muted-foreground leading-relaxed italic">
                          {item.note}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function UsesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(50% 60% at 50% 0%, rgba(197,163,92,0.10) 0%, rgba(197,163,92,0) 60%)',
          }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-2">
          <Breadcrumbs items={[{ label: 'Uses' }]} />
        </div>
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-5">
            What we use · updated monthly
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
            The desks, editors, keyboards, and{' '}
            <em className="not-italic text-gold">rituals</em> of two people building a quiet calendar.
          </h1>
          <p className="mt-7 font-display italic text-xl md:text-2xl text-foreground/90 leading-snug max-w-2xl">
            A long-form /uses page in the tradition of the web we grew up with. Hand-written, slow to change, and
            honest about the things that aren&apos;t pretty.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            {FOUNDERS.map((f) => (
              <a
                key={f.slug}
                href={`#${f.slug}`}
                className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-foreground hover:border-gold/40 hover:text-gold transition-colors"
              >
                {f.name}&apos;s setup <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Founder blocks */}
      {FOUNDERS.map((f, i) => (
        <FounderBlock key={f.slug} f={f} idx={i} />
      ))}

      {/* Shared stack */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              The shared stack
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              What the company runs on, day to day.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-xl">
              We prefer long-term relationships with tools to short-term enthusiasms. Every item on this list has
              survived at least one migration attempt.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {SHARED_STACK.map((cat) => (
              <div key={cat.label}>
                <div className="flex items-baseline gap-4 mb-5">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
                    {cat.label}
                  </h3>
                  <span className="flex-1 h-px bg-border" />
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex items-baseline gap-4">
                      <span className="font-display text-[15px] text-foreground tracking-tight shrink-0">
                        {item.name}
                      </span>
                      <span className="text-[13px] text-muted-foreground italic">— {item.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reading list */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              The reading shelf
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Six books that shape the rest of this page.
            </h2>
          </div>
          <ol className="divide-y divide-border/70 border-y border-border/70">
            {READING.map((b, i) => (
              <li key={b.title} className="py-5 flex items-start gap-6">
                <span className="font-mono text-[11px] text-muted-foreground/60 w-8 shrink-0 pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="font-display italic text-lg text-foreground tracking-tight">
                      {b.title}
                    </span>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      — {b.author}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13px] text-muted-foreground/90 leading-relaxed">
                    {b.note}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Rotating items (monthly) */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              The rotating page
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              What we&apos;ve added or replaced, recently.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-xl">
              The /uses page is updated on the first Friday of every month. We keep four months of history visible for
              your own comparison shopping.
            </p>
          </div>
          <div className="space-y-4">
            {ROTATING.map((r) => (
              <div
                key={r.month}
                className="rounded-2xl border border-border bg-[#131318] p-5 md:p-6 flex items-start gap-5"
              >
                <div className="shrink-0 flex items-center gap-2 font-mono text-[11px] text-gold">
                  <Calendar className="h-3.5 w-3.5" aria-hidden />
                  {r.month}
                </div>
                <div className="flex-1">
                  <div className="font-display text-[17px] text-foreground tracking-tight">
                    {r.item}
                  </div>
                  <p className="mt-1 text-[13px] text-muted-foreground italic">{r.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display italic text-xl md:text-2xl text-foreground leading-snug">
            &ldquo;Tell me what is on your desk and I will tell you more about you than your résumé could. The things we
            choose to keep close are a kind of signature.&rdquo;
          </p>
          <div className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
            — a note we pinned above the office door
          </div>
          <div className="mt-8 text-[13px] text-muted-foreground/80">
            Thinking of your own /uses page? Tell us about it at{' '}
            <Link href="/contact" className="text-gold hover:underline">
              /contact
            </Link>
            . We read every one.
          </div>
        </div>
      </section>

      <CTA
        title="Using Calendro is on this list. It should be on yours."
        subtitle="Free forever for individuals. No credit card, no drip sequence, no pixel tracking."
        primary={{ label: 'Start using Calendro', href: '/login' }}
        secondary={{ label: 'Read the method', href: '/method' }}
      />
    </>
  )
}
