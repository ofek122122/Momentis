import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { NewsletterForm } from '@/components/marketing/NewsletterForm'
import {
  EPISODES,
  SHOW,
  PLATFORMS,
  TAG_TONE,
  featuredEpisode,
  otherEpisodes,
  SHOW_STATS,
} from '@/lib/podcast'
import {
  Play,
  Headphones,
  Mic,
  ArrowUpRight,
  Clock,
  Calendar,
  Rss,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Quiet Hours — A Calendro podcast',
  description:
    "A podcast about time, software, and the small decisions that make both of them feel larger than they are. Eight episodes, every other Tuesday.",
  alternates: { canonical: '/podcast' },
  openGraph: {
    title: 'The Quiet Hours — a Calendro podcast',
    description:
      "Eight episodes on time, software, and small decisions. Hosted by Iris Koval. Every other Tuesday.",
    url: '/podcast',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Quiet Hours',
    description: 'A Calendro podcast about time, software, and small decisions.',
  },
}

function formatDate(d: string): string {
  const [y, m, day] = d.split('-').map((p) => parseInt(p, 10))
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[m - 1]} ${day}, ${y}`
}

export default function PodcastPage() {
  const featured = featuredEpisode()
  const rest = otherEpisodes()

  return (
    <>
      <PageHero
        eyebrow="The Quiet Hours · a Calendro podcast"
        title={
          <>
            A podcast about time, software, and the small decisions that make both of them feel{' '}
            <em className="not-italic text-gold">larger than they are</em>.
          </>
        }
        lede={`${SHOW.episodes}. Hosted by ${SHOW.host}. Published ${SHOW.cadence.toLowerCase()}. We release one season of eight episodes, then we rest.`}
        crumbs={[{ label: 'Podcast' }]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#latest"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            <Play className="h-3.5 w-3.5 fill-current" aria-hidden />
            Play latest episode
          </a>
          <a
            href="/podcast/feed.xml"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/40 hover:text-gold transition-colors"
          >
            <Rss className="h-3.5 w-3.5" aria-hidden />
            RSS
          </a>
        </div>
      </PageHero>

      {/* Featured episode */}
      <section id="latest" className="py-16 md:py-20 px-5 md:px-8 border-b border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Artwork */}
            <div className="lg:col-span-1">
              <div className="relative aspect-square rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/15 via-[#131318] to-[#0c0c0f] overflow-hidden">
                <div aria-hidden className="absolute inset-0 dot-grid opacity-40" />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(60% 60% at 80% 20%, rgba(197,163,92,0.18) 0%, rgba(197,163,92,0) 65%)',
                  }}
                />
                <div className="relative h-full flex flex-col p-8">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gold/80">
                    <Mic className="h-3 w-3" aria-hidden />
                    The Quiet Hours
                  </div>
                  <div className="mt-auto">
                    <div className="font-display text-[96px] md:text-[128px] text-gold font-bold leading-none select-none">
                      {SHOW.artwork}
                    </div>
                    <div className="mt-4 font-mono text-[11px] text-muted-foreground">
                      Season 1 · {SHOW_STATS.episodes} episodes · ~{Math.round(SHOW_STATS.totalMinutes / 10) * 10}+ min
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured details */}
            <div className="lg:col-span-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3 inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" aria-hidden />
                Latest episode · {featured.n.toString().padStart(2, '0')}
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.05]">
                {featured.title}
              </h2>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-[12px] font-mono text-muted-foreground">
                <span
                  className={`inline-flex items-center h-6 px-2.5 rounded-full border uppercase tracking-wider text-[10px] ${TAG_TONE[featured.tag].ring} ${TAG_TONE[featured.tag].fg}`}
                >
                  {featured.tag}
                </span>
                <span>{featured.guest} · {featured.role}</span>
                <span className="text-muted-foreground/40">·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" aria-hidden />
                  {featured.durationMin} min
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" aria-hidden />
                  {formatDate(featured.publishedAt)}
                </span>
              </div>

              <p className="mt-6 font-display italic text-lg md:text-xl text-foreground/90 leading-relaxed">
                {featured.teaser}
              </p>

              <p className="mt-5 text-[14px] text-muted-foreground leading-relaxed max-w-3xl">
                {featured.description}
              </p>

              <button
                type="button"
                disabled
                aria-label="Play latest episode"
                className="mt-8 group inline-flex items-center gap-3 rounded-2xl border border-border bg-[#131318] p-4 pr-6 opacity-95 hover:opacity-100 transition-all"
              >
                <span className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/20">
                  <Play className="h-4 w-4 text-[#0c0c0f] fill-current" aria-hidden />
                </span>
                <span className="text-left">
                  <span className="block text-sm text-foreground font-medium">Play episode</span>
                  <span className="block text-[11px] font-mono text-muted-foreground">
                    {featured.durationMin}:00 · streaming via your podcast app
                  </span>
                </span>
              </button>

              <div className="mt-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-3">Chapters</p>
                <ol className="divide-y divide-border/70 border-y border-border/70">
                  {featured.chapters.map((c, i) => (
                    <li key={i} className="py-2.5 flex items-center gap-4">
                      <span className="font-mono text-[11px] text-gold/60 w-12 shrink-0">{c.at}</span>
                      <span className="text-sm text-foreground/90 flex-1 truncate">{c.t}</span>
                      <span className="text-[10px] text-muted-foreground/60 font-mono shrink-0">
                        #{String(i + 1).padStart(2, '0')}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listen on */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-2">
                Listen on
              </p>
              <h2 className="font-display text-xl md:text-2xl text-foreground tracking-tight">
                Your usual podcast app, your usual ritual.
              </h2>
            </div>
            <Link
              href="/podcast/feed.xml"
              className="inline-flex items-center gap-1.5 text-sm text-gold hover:underline"
            >
              <Rss className="h-3.5 w-3.5" aria-hidden />
              Subscribe via RSS
            </Link>
          </div>
          <ul className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {PLATFORMS.map((p) => (
              <li key={p.name}>
                <a
                  href={p.url}
                  className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-[#131318] p-4 hover:border-gold/30 hover:-translate-y-0.5 transition-all"
                >
                  <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/20 flex items-center justify-center font-mono text-[13px] text-gold">
                    {p.initials}
                  </span>
                  <span className="text-[11px] font-mono text-muted-foreground group-hover:text-foreground transition-colors text-center">
                    {p.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Episode list */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                The rest of season one
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                {rest.length} episodes. {Math.round(SHOW_STATS.totalMinutes / 10) * 10}+ quiet minutes, all told.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              We pick guests we would call on our own time, not guests who would boost downloads. The difference is
              usually audible in the first minute.
            </p>
          </div>
          <ol className="divide-y divide-border/70 border-y border-border/70">
            {rest.map((e, i) => (
              <Reveal key={e.slug} delay={i * 30}>
                <li className="py-6 flex items-start gap-5 group">
                  <span className="font-display text-[28px] md:text-[36px] text-gold/50 font-semibold leading-none w-14 shrink-0 pt-1 tabular-nums">
                    {e.n.toString().padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display text-xl md:text-2xl text-foreground tracking-tight leading-snug">
                        {e.title}
                      </h3>
                      <span
                        className={`inline-flex items-center h-5 px-2 rounded-full border text-[10px] font-mono uppercase tracking-wider ${TAG_TONE[e.tag].ring} ${TAG_TONE[e.tag].fg}`}
                      >
                        {e.tag}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground font-mono">
                      {e.guest} · <span className="text-foreground/70">{e.role}</span>
                    </p>
                    <p className="mt-3 text-[14px] text-foreground/85 italic leading-relaxed max-w-3xl">
                      {e.teaser}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-[11px] font-mono text-muted-foreground/80">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden />
                        {e.durationMin} min
                      </span>
                      <span className="text-muted-foreground/30">·</span>
                      <span>{formatDate(e.publishedAt)}</span>
                      <span className="text-muted-foreground/30">·</span>
                      <span>{e.chapters.length} chapters</span>
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="hidden md:inline-flex shrink-0 w-10 h-10 rounded-full border border-border bg-[#131318] items-center justify-center text-gold group-hover:border-gold/40 group-hover:bg-gold/5 transition-colors"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* About the show + host */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border bg-[#0a0a0e]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl border border-border bg-[#131318] p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center">
                <Headphones className="h-4 w-4 text-gold" aria-hidden />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70 mb-1">
                  About the show
                </p>
                <h3 className="font-display text-2xl text-foreground tracking-tight">
                  {SHOW.title}
                </h3>
              </div>
            </div>
            <p className="text-[15px] leading-relaxed text-foreground/85 font-light">
              {SHOW.tagline} We aim for the length of a commute, not the length of a long-haul flight. Episodes end
              when they have said what they have to say — some are 18 minutes, some are 52.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/85 font-light">
              No ads, no sponsors, no affiliate links. If we can&apos;t afford to make it at the quality we want,
              we&apos;ll stop. Season 1 is eight episodes and then we rest.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-[#131318] p-6 flex flex-col">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/25 flex items-center justify-center font-mono text-gold text-xl mb-4">
              IK
            </div>
            <div className="font-display text-xl text-foreground tracking-tight">{SHOW.host}</div>
            <div className="text-[12px] font-mono text-muted-foreground">{SHOW.hostRole}</div>
            <p className="mt-4 text-[13px] text-muted-foreground leading-relaxed flex-1">
              Iris hosts, edits, and mixes every episode from a small room in London. No engineer, no producer, no
              intro jingle longer than three seconds.
            </p>
            <Link
              href="/uses#iris"
              className="mt-5 inline-flex items-center gap-1 text-sm text-gold hover:underline"
            >
              See what she uses <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Get notified */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
            Season 2 · fall 2026
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Get a note when we come back.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
            One email the day the next season starts. That&apos;s it. No drip sequences, no pixel tracking.
          </p>
          <div className="mt-8 flex justify-center">
            <NewsletterForm source="podcast" variant="blog" />
          </div>
        </div>
      </section>

      <CTA
        title="If the podcast was a product, it would be Calendro."
        subtitle="Same principles, different medium. Free forever for individuals. Try it in the time between episodes."
        primary={{ label: 'Start using Calendro', href: '/login' }}
        secondary={{ label: 'Read the manifesto', href: '/manifesto' }}
      />
    </>
  )
}
