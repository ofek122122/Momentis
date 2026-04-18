import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import {
  YEAR,
  HEADLINE_STATS,
  MOMENTS,
  BUILT,
  KILLED,
  NOTEWORTHY,
  COMING,
  type Moment,
} from '@/lib/year-in-review'
import { ArrowUpRight, Heart, Check, Minus } from 'lucide-react'

export const metadata: Metadata = {
  title: `${YEAR.label} — A year in review`,
  description:
    "Twelve months at Calendro: events parsed, features shipped, things killed on purpose, and thank-yous sent. A quiet annual recap.",
  alternates: { canonical: '/year-in-review' },
  openGraph: {
    title: `Calendro · ${YEAR.label} in review`,
    description:
      'A quiet year in numbers and moments — and what we plan for the next one.',
    url: '/year-in-review',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Calendro · ${YEAR.label} in review`,
    description: 'A year in a quiet calendar.',
  },
}

const TONE: Record<Moment['tone'], { bg: string; fg: string; ring: string }> = {
  gold: { bg: 'from-gold/20 to-gold/5', fg: 'text-gold', ring: 'border-gold/25' },
  violet: { bg: 'from-violet-400/15 to-violet-400/5', fg: 'text-violet-300', ring: 'border-violet-300/25' },
  emerald: { bg: 'from-emerald-400/15 to-emerald-400/5', fg: 'text-emerald-300', ring: 'border-emerald-300/25' },
  sky: { bg: 'from-sky-400/15 to-sky-400/5', fg: 'text-sky-300', ring: 'border-sky-300/25' },
  rose: { bg: 'from-rose-400/15 to-rose-400/5', fg: 'text-rose-300', ring: 'border-rose-300/25' },
}

export default function YearInReviewPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(55% 65% at 50% 0%, rgba(197,163,92,0.16) 0%, rgba(197,163,92,0) 60%)',
          }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-25" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-2">
          <Breadcrumbs items={[{ label: `${YEAR.label} in review` }]} />
        </div>
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
          <p className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.3em] text-gold/80 mb-5">
            {YEAR.label} · A Calendro annual report · Jan 5 — Dec 19
          </p>
          <h1 className="animate-fade-up animate-fade-up-2 font-display font-bold leading-[0.92] tracking-tight text-foreground">
            <span className="block text-[72px] sm:text-[108px] md:text-[168px] text-gold">
              {YEAR.label}
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl mt-2">
              {YEAR.subtitle}.
            </span>
          </h1>
          <p className="animate-fade-up animate-fade-up-3 mt-8 font-display italic text-xl md:text-2xl text-foreground/90 leading-snug max-w-3xl">
            {YEAR.tagline}
          </p>
          <div className="animate-fade-up animate-fade-up-4 mt-8 flex flex-wrap items-center gap-4 text-[12px] font-mono text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Heart className="h-3 w-3 text-gold" aria-hidden />
              Sent with gratitude to the 50,000 of you who kept the calendar open.
            </span>
          </div>
        </div>
      </section>

      {/* Headline stats */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
            {HEADLINE_STATS.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.label} delay={i * 40}>
                  <div className="bg-[#0c0c0f] p-6 md:p-7 flex flex-col gap-3 h-full">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">
                        {s.label}
                      </p>
                      <Icon className="h-4 w-4 text-gold/70" aria-hidden />
                    </div>
                    <div className="font-display text-4xl md:text-5xl text-gold font-semibold leading-none">
                      {s.value}
                    </div>
                    <p className="mt-auto text-[12px] text-muted-foreground/90 leading-relaxed">
                      {s.note}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* The year, month by month */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                Twelve moments
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                One per month. Not because we&apos;re completists — because that&apos;s the cadence.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              We ship every Tuesday. Big things get named. Small things go into the changelog without ceremony.
            </p>
          </div>

          <ol className="relative border-l border-border/70 ml-4 md:ml-6 space-y-5">
            {MOMENTS.map((m, i) => {
              const Icon = m.icon
              const tone = TONE[m.tone]
              return (
                <Reveal key={m.month} delay={Math.min(i, 8) * 40}>
                  <li className="relative pl-8 md:pl-10">
                    <span className="absolute -left-[11px] top-3 w-5 h-5 rounded-full bg-[#0c0c0f] border-2 border-gold flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden />
                    </span>
                    <div className="rounded-2xl border border-border bg-[#131318] p-5 md:p-6">
                      <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-xl bg-gradient-to-br ${tone.bg} border ${tone.ring} flex items-center justify-center`}
                          >
                            <Icon className={`h-4 w-4 ${tone.fg}`} aria-hidden />
                          </div>
                          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70">
                            {m.month} · {YEAR.label}
                          </p>
                        </div>
                        <span className="font-display text-[36px] md:text-[44px] text-muted-foreground/15 font-semibold leading-none select-none">
                          {String(m.monthIdx).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-tight leading-snug">
                        {m.title}
                      </h3>
                      <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground max-w-3xl">
                        {m.body}
                      </p>
                      {m.linkLabel && m.linkHref && (
                        <Link
                          href={m.linkHref}
                          className="mt-4 inline-flex items-center gap-1 text-sm text-gold hover:underline"
                        >
                          {m.linkLabel}
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                        </Link>
                      )}
                    </div>
                  </li>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </section>

      {/* What we built */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border bg-[#0a0a0e]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              What we built
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Twenty-six features. Three categories. Every one shipped to everyone.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {BUILT.map((group, gi) => (
              <Reveal key={group.title} delay={gi * 80}>
                <div className="h-full rounded-2xl border border-border bg-[#131318] p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4">
                    {group.title}
                  </p>
                  <ul className="space-y-2.5">
                    {group.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-[13.5px] text-foreground/90">
                        <Check className="h-3.5 w-3.5 text-gold/70 mt-1 shrink-0" aria-hidden />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we killed */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-400/15 to-rose-400/5 border border-rose-400/20 flex items-center justify-center shrink-0">
              <Minus className="h-5 w-5 text-rose-300" aria-hidden />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-rose-300/80 mb-2">
                What we killed · on purpose
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                The deliberate deletions.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                We kill more features than we ship. We think this is the discipline. The year&apos;s three deletions:
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {KILLED.map((k) => (
              <article
                key={k.title}
                className="h-full rounded-2xl border border-border bg-[#131318] p-6 flex flex-col"
              >
                <h3 className="font-display text-xl text-foreground tracking-tight">{k.title}</h3>
                <p className="mt-3 text-[13.5px] text-muted-foreground italic leading-relaxed flex-1">
                  {k.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Thank-yous */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border bg-[#0a0a0e]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Thank you, specifically
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Six people without whom the year would have been smaller.
            </h2>
          </div>
          <ul className="divide-y divide-border/70 border-y border-border/70">
            {NOTEWORTHY.map((n, i) => (
              <li key={n.who} className="py-5 flex items-start gap-6">
                <span className="font-mono text-[11px] text-muted-foreground/60 w-10 shrink-0 pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <div className="font-display text-lg text-foreground tracking-tight">
                    {n.who}
                  </div>
                  <p className="mt-1 text-[13.5px] text-muted-foreground italic leading-relaxed">
                    {n.note}
                  </p>
                </div>
                <Heart className="h-3.5 w-3.5 text-gold/50 mt-2 shrink-0" aria-hidden />
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground italic">
              And to the 50,000 of you who keep the calendar open — thank you for your attention, always, but in
              particular this year.
            </p>
          </div>
        </div>
      </section>

      {/* Coming in 2027 */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
            2027 · the shortlist
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.05]">
            {COMING.title}
          </h2>
          <ul className="mt-10 space-y-4">
            {COMING.lines.map((l, i) => (
              <li
                key={i}
                className="flex items-start gap-5 border-b border-border/60 pb-4 last:border-0 last:pb-0"
              >
                <span className="font-mono text-[11px] text-gold/70 w-8 shrink-0 pt-2 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[16px] leading-[1.75] text-foreground/90">{l}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl border border-gold/25 bg-gold/[0.04] p-5 md:p-6">
            <p className="text-[14px] text-foreground/90 italic leading-relaxed">
              &ldquo;The best annual report is the one that reads like it was written in a single afternoon by people
              who actually made the things in it. We tried, as usual, to write that one.&rdquo;
            </p>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-gold/80">
              — Iris &amp; Oren
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="The next year, as always, starts on a Tuesday."
        subtitle="Try the calendar we spent a year on. Free forever for individuals. No card, no drip, no pixel tracking."
        primary={{ label: 'Start using Calendro', href: '/login' }}
        secondary={{ label: 'Read the roadmap', href: '/roadmap' }}
      />
    </>
  )
}
