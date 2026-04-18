import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import {
  AMBASSADORS,
  PERKS,
  PRINCIPLES,
  ASK,
  CONTENT,
  FAQ,
  PROGRAM_STATS,
  type Content,
} from '@/lib/ambassadors'
import {
  Sparkles,
  ArrowUpRight,
  Check,
  X,
  HandHeart,
  UserCheck,
  Mic,
  Newspaper,
  PenSquare,
  Presentation,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ambassadors — A small program for the quiet evangelists',
  description:
    "A capped, hand-picked program of fifty people who write, talk, and post about Momenties without being paid to. Perks, principles, current ambassadors, and how to join.",
  alternates: { canonical: '/ambassadors' },
  openGraph: {
    title: 'Momenties Ambassadors',
    description:
      'A capped, hand-picked program of fifty people who talk about Momenties without being paid to.',
    url: '/ambassadors',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momenties Ambassadors',
    description: 'A small program for the quiet evangelists.',
  },
}

const CONTENT_ICON: Record<Content['kind'], typeof Mic> = {
  essay: PenSquare,
  talk: Presentation,
  podcast: Mic,
  newsletter: Newspaper,
}

export default function AmbassadorsPage() {
  const filled = PROGRAM_STATS.current
  const cap = PROGRAM_STATS.capacity
  const fillPct = Math.min(100, Math.round((filled / cap) * 100))

  return (
    <>
      <PageHero
        eyebrow="Ambassadors"
        title={
          <>
            A small program for the{' '}
            <em className="not-italic text-gold">quiet evangelists</em>.
          </>
        }
        lede="Fifty ambassadors worldwide — hand-picked, not applied-in. No monthly post quotas, no affiliate codes, no tracking pixels. The only thing we ask is that you keep writing the paragraphs you would have written anyway."
        crumbs={[{ label: 'Ambassadors' }]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/contact?subject=Ambassadors"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            <HandHeart className="h-3.5 w-3.5" aria-hidden />
            Nominate someone (or yourself)
          </Link>
          <Link
            href="/affiliates"
            className="inline-flex items-center gap-1.5 h-10 px-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Looking for the paid referral program?
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </PageHero>

      {/* Capacity strip */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10">
          <div className="rounded-2xl border border-border bg-[#131318] p-5 md:p-6">
            <div className="flex items-start justify-between gap-6 flex-wrap mb-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-1">
                  Cohort status
                </p>
                <h2 className="font-display text-xl md:text-2xl text-foreground tracking-tight">
                  {filled} of {cap} seats filled · next cohort opens {PROGRAM_STATS.cohortOpen}
                </h2>
              </div>
              <div className="text-right text-[12px] font-mono text-muted-foreground">
                {PROGRAM_STATS.countries} countries represented
              </div>
            </div>
            <div className="h-1 rounded-full bg-white/[0.04] overflow-hidden">
              <div
                className="h-full bg-gold"
                style={{ width: `${fillPct}%` }}
                aria-label={`${fillPct}% full`}
              />
            </div>
            <p className="mt-3 text-[12px] text-muted-foreground">
              The cap is deliberate. We&apos;d rather have fifty ambassadors we know by name than five thousand we
              can&apos;t remember.
            </p>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                What ambassadors get
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Six things, chosen on purpose. Nothing that looks good in a deck.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              No dashboards, no badges, no gamification. The perks we offer are the ones we would want ourselves.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PERKS.map((p, i) => (
              <Reveal key={p.n} delay={i * 50}>
                <article className="h-full rounded-2xl border border-border bg-[#131318] p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[11px] text-gold tracking-[0.25em]">
                      {p.n}
                    </span>
                    <span className="flex-1 h-px bg-border" />
                  </div>
                  <h3 className="font-display text-xl text-foreground tracking-tight leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] text-muted-foreground leading-relaxed flex-1">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Current ambassadors */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border bg-[#0a0a0e]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-10">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/25 flex items-center justify-center">
                <UserCheck className="h-5 w-5 text-gold" aria-hidden />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-2">
                  The current cohort · {AMBASSADORS.length} of {PROGRAM_STATS.capacity}
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  Eight of the fifty. The rest are listed on request.
                </h2>
              </div>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Some ambassadors prefer to appear anonymously. The public list below is a subset — the full one is
              shared with each cohort for introductions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {AMBASSADORS.map((a, i) => (
              <Reveal key={a.slug} delay={i * 40}>
                <article className="h-full rounded-2xl border border-border bg-[#131318] p-6 flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold/25 to-gold/5 border border-gold/25 flex items-center justify-center font-mono text-sm text-gold">
                    {a.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display text-lg text-foreground tracking-tight">
                        {a.name}
                      </h3>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-border text-[10px] font-mono text-muted-foreground">
                        since {a.since}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[12px] font-mono text-muted-foreground">
                      {a.role}
                      <span className="text-muted-foreground/40"> · </span>
                      <span className="text-foreground/70">{a.location}</span>
                    </p>
                    <p className="mt-3 font-display italic text-[14.5px] text-foreground/90 leading-relaxed">
                      &ldquo;{a.quote}&rdquo;
                    </p>
                    {a.link && (
                      <Link
                        href={a.link.href}
                        className="mt-3 inline-flex items-center gap-1 text-[12px] text-gold hover:underline"
                      >
                        {a.link.label} <ArrowUpRight className="h-3 w-3" aria-hidden />
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/25 flex items-center justify-center shrink-0">
              <Sparkles className="h-5 w-5 text-gold" aria-hidden />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-2">
                How we pick
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Three principles. Applied strictly.
              </h2>
            </div>
          </div>
          <ol className="grid md:grid-cols-3 gap-4">
            {PRINCIPLES.map((p, i) => (
              <li
                key={p.title}
                className="rounded-2xl border border-border bg-[#131318] p-6 h-full"
              >
                <span className="font-mono text-[11px] text-gold/70 tracking-[0.25em] mb-3 inline-block">
                  Principle {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl text-foreground tracking-tight leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-[13.5px] text-muted-foreground leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What we ask / what we won't */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border bg-[#0a0a0e]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-emerald-300/25 bg-gradient-to-br from-emerald-400/[0.04] to-transparent p-6 md:p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-emerald-400/10 border border-emerald-300/30 flex items-center justify-center">
                <Check className="h-4 w-4 text-emerald-300" aria-hidden />
              </div>
              <h3 className="font-display text-xl text-emerald-200 tracking-tight">What we ask</h3>
            </div>
            <ul className="space-y-3">
              {ASK.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-foreground/90">
                  <span className="w-1 h-1 rounded-full bg-emerald-300 mt-2.5 shrink-0" aria-hidden />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-300/25 bg-gradient-to-br from-rose-400/[0.04] to-transparent p-6 md:p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-rose-400/10 border border-rose-300/30 flex items-center justify-center">
                <X className="h-4 w-4 text-rose-300" aria-hidden />
              </div>
              <h3 className="font-display text-xl text-rose-200 tracking-tight">What we will never ask</h3>
            </div>
            <ul className="space-y-3 text-[14px] text-muted-foreground">
              {[
                'A minimum number of posts, tweets, or mentions per month.',
                'Access to analytics on the posts you do make.',
                'Exclusivity with Momenties or any other calendar tool.',
                'Participation in engagement-farming threads or "launch amplification" posts.',
                "Any kind of review, positive or otherwise, we didn't earn.",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-rose-300 mt-2.5 shrink-0" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Content ambassadors have made */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Ambassador-produced
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              A short, honest sample of what they&apos;ve made.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              None of these were commissioned or edited by us. We list them here because they were written, spoken, or
              published freely.
            </p>
          </div>
          <ul className="divide-y divide-border/70 border-y border-border/70">
            {CONTENT.map((c, i) => {
              const Icon = CONTENT_ICON[c.kind]
              return (
                <li key={i} className="py-5 flex items-start gap-5 group">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/20 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-gold" aria-hidden />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="inline-flex items-center h-5 px-2 rounded-full border border-border text-[9px] font-mono uppercase tracking-wider text-muted-foreground">
                        {c.kind}
                      </span>
                      <h3 className="font-display text-lg text-foreground tracking-tight">{c.title}</h3>
                    </div>
                    <p className="mt-1.5 text-[12px] font-mono text-muted-foreground">
                      <span className="text-foreground/80">{c.by}</span>
                      <span className="text-muted-foreground/40"> · </span>
                      {c.where}
                      <span className="text-muted-foreground/40"> · </span>
                      {c.at}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Ambassador FAQ
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Four things people ask before applying.
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-border bg-[#131318] p-5 md:p-6 open:border-gold/30 open:bg-[#15151b]"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-[15px] font-medium text-foreground">
                  <span className="pr-4">{f.q}</span>
                  <span className="shrink-0 mt-1 w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted-foreground group-open:rotate-45 transition-transform">
                    <X className="h-3 w-3 rotate-45" aria-hidden />
                  </span>
                </summary>
                <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Know someone who should be on this wall?"
        subtitle="Nominate them. Nominate yourself. We read every note — replies are usually within 48 hours."
        primary={{ label: 'Nominate for the program', href: '/contact?subject=Ambassadors' }}
        secondary={{ label: 'See the Wall of Love', href: '/wall-of-love' }}
      />
    </>
  )
}
