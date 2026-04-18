import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { NewsletterForm } from '@/components/marketing/NewsletterForm'
import { DAYS, LAUNCH_WEEK, TONE_CLASSES } from '@/lib/launch-week'
import { Quote, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Launch Week 01 — Five quiet, serious upgrades',
  description:
    "April 14–18, 2026. Momenties's first Launch Week: a smarter hybrid parser, voice in 28 languages, image parsing 2.0, a command palette, and teams with SSO.",
  alternates: { canonical: '/launch-week-1' },
  openGraph: {
    title: 'Momenties · Launch Week 01',
    description:
      'Five days. Five quiet, serious upgrades. No ad spend. April 14–18, 2026.',
    url: '/launch-week-1',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momenties · Launch Week 01',
    description: 'Five days. Five quiet, serious upgrades. No ad spend.',
  },
}

function formatDate(d: string): string {
  const [y, m, day] = d.split('-').map((p) => parseInt(p, 10))
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return `${months[m - 1]} ${day}, ${y}`
}

export default function LaunchWeek1Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(55% 55% at 50% 0%, rgba(197,163,92,0.14) 0%, rgba(197,163,92,0) 65%)',
          }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-20 md:pb-24">
          <Breadcrumbs items={[{ label: 'Launch Week 01' }]} />
          <p className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.3em] text-gold/80 mb-4">
            April 14 — April 18, 2026 · {LAUNCH_WEEK.title}
          </p>
          <h1 className="animate-fade-up animate-fade-up-2 font-display text-5xl sm:text-6xl md:text-[84px] font-bold leading-[0.98] tracking-tight text-foreground max-w-4xl">
            Five days.{' '}
            <em className="not-italic text-gold">Five quiet</em>,{' '}
            <em className="not-italic text-gold">serious</em> upgrades.
          </h1>
          <p className="animate-fade-up animate-fade-up-3 mt-7 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {LAUNCH_WEEK.tagline} A smarter hybrid parser, voice in 28 languages, image parsing 2.0, a command palette, and
            teams with SSO — all shipped during the week, none shipped with a press release.
          </p>

          {/* Day nav */}
          <nav
            className="animate-fade-up animate-fade-up-4 mt-12 grid grid-cols-5 gap-3 md:gap-4"
            aria-label="Launch week days"
          >
            {DAYS.map((d) => {
              const Icon = d.headline.icon
              const tone = TONE_CLASSES[d.headline.tone]
              return (
                <a
                  key={d.slug}
                  href={`#${d.slug}`}
                  className={`group rounded-xl md:rounded-2xl border bg-[#131318] p-3 md:p-5 flex flex-col gap-3 transition-all hover:-translate-y-0.5 hover:border-gold/30 ${tone.ring}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em]">
                      {d.weekday.toUpperCase()}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground/60">0{d.n}</span>
                  </div>
                  <div
                    className={`w-8 h-8 md:w-9 md:h-9 rounded-lg bg-gradient-to-br ${tone.bg} border ${tone.ring} flex items-center justify-center`}
                  >
                    <Icon className={`h-4 w-4 ${tone.fg}`} aria-hidden />
                  </div>
                  <div className="text-[11px] md:text-sm text-foreground/90 leading-tight font-medium">
                    {d.headline.label}
                  </div>
                </a>
              )
            })}
          </nav>
        </div>
      </section>

      {/* Week stats */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
            {[
              { label: 'Commits shipped', value: LAUNCH_WEEK.commits.toString() },
              { label: 'Pull requests merged', value: LAUNCH_WEEK.prsMerged.toString() },
              { label: 'Countries live', value: LAUNCH_WEEK.countries.toString() },
              { label: 'Marketing emails sent', value: '0' },
            ].map((s) => (
              <div key={s.label} className="bg-[#0c0c0f] p-5">
                <div className="font-display text-3xl md:text-4xl text-gold font-semibold leading-none">
                  {s.value}
                </div>
                <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Days */}
      {DAYS.map((day, i) => {
        const tone = TONE_CLASSES[day.headline.tone]
        const Icon = day.headline.icon
        return (
          <section
            key={day.slug}
            id={day.slug}
            className={`py-20 md:py-28 px-5 md:px-8 border-b border-border scroll-mt-20 ${
              i % 2 === 1 ? 'bg-[#0a0a0e]' : ''
            }`}
          >
            <div className="max-w-6xl mx-auto">
              {/* Day header */}
              <div className="flex items-start justify-between gap-6 flex-wrap mb-8">
                <div className="flex items-start gap-5">
                  <div
                    className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${tone.bg} border ${tone.ring} flex items-center justify-center`}
                  >
                    <Icon className={`h-6 w-6 ${tone.fg}`} aria-hidden />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold/70">
                      {day.eyebrow} · {formatDate(day.date)}
                    </p>
                    <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-tight max-w-3xl">
                      {day.title}
                    </h2>
                  </div>
                </div>
                <div className={`font-display text-[96px] md:text-[140px] leading-none ${tone.fg} opacity-25 select-none`}>
                  0{day.n}
                </div>
              </div>

              <Reveal>
                <p className="font-display italic text-xl md:text-2xl text-foreground/90 leading-snug max-w-3xl">
                  {day.lede}
                </p>
              </Reveal>

              <Reveal delay={80}>
                <p className="mt-6 text-[15px] leading-[1.78] text-foreground/80 max-w-3xl font-light">
                  {day.body}
                </p>
              </Reveal>

              {/* Shipped items */}
              <Reveal delay={120}>
                <div className="mt-12 grid md:grid-cols-3 gap-4">
                  {day.shipped.map((s, idx) => {
                    const SIcon = s.icon
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-border bg-[#131318] p-5 flex flex-col gap-3"
                      >
                        <div
                          className={`w-9 h-9 rounded-xl bg-gradient-to-br ${tone.bg} border ${tone.ring} flex items-center justify-center`}
                        >
                          <SIcon className={`h-4 w-4 ${tone.fg}`} aria-hidden />
                        </div>
                        <div className="font-display text-lg text-foreground tracking-tight">{s.title}</div>
                        <div className="text-sm text-muted-foreground leading-relaxed">{s.note}</div>
                      </div>
                    )
                  })}
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-8 grid md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
                  {day.stats.map((s) => (
                    <div key={s.label} className="bg-[#0c0c0f] p-5">
                      <div className="font-display text-2xl md:text-3xl text-foreground font-semibold leading-none">
                        {s.value}
                      </div>
                      <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground/80">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Team / user note */}
              <Reveal delay={200}>
                <figure className="mt-10 rounded-2xl border border-border bg-[#131318] p-6 md:p-8 flex items-start gap-5">
                  <Quote className={`h-5 w-5 ${tone.fg} shrink-0 mt-0.5`} aria-hidden />
                  <div>
                    <blockquote className="font-display italic text-lg md:text-xl text-foreground/90 leading-snug">
                      &ldquo;{day.teamNote.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-3 text-xs text-muted-foreground font-mono">
                      <span className="text-foreground">{day.teamNote.name}</span>
                      <span className="text-muted-foreground/40">·</span>
                      <span>{day.teamNote.role}</span>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            </div>
          </section>
        )
      })}

      {/* Quote of the week */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-5">
            Quote of the week
          </p>
          <p className="font-display italic text-2xl md:text-3xl text-foreground leading-snug">
            &ldquo;{LAUNCH_WEEK.quoteOfTheWeek.quote}&rdquo;
          </p>
          <div className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
            — {LAUNCH_WEEK.quoteOfTheWeek.author} · {LAUNCH_WEEK.quoteOfTheWeek.role}
          </div>
        </div>
      </section>

      {/* Subscribe for next launch week */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
            Launch Week 02 · Q3 2026
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Get a quiet email when the next one starts.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
            One email the day before. One recap the Friday after. No drip sequences, no pixel tracking.
          </p>
          <div className="mt-8 flex justify-center">
            <NewsletterForm source="launch-week-1" variant="blog" />
          </div>
          <div className="mt-6">
            <Link
              href="/changelog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              Read the full changelog <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <CTA
        title="Built during Launch Week. Free to try today."
        subtitle="Every feature above is live in the app right now. No waitlist, no beta form, no credit card."
        primary={{ label: 'Start using Momenties', href: '/login' }}
        secondary={{ label: 'See the roadmap', href: '/roadmap' }}
      />
    </>
  )
}
