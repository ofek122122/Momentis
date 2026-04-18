import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { NewsletterForm } from '@/components/marketing/NewsletterForm'
import { EPISODES, PLATFORMS, SHOW, TAG_TONE } from '@/lib/podcast'
import {
  getEpisodeDetail,
  findEpisode,
  relatedEpisodes,
  navEpisodes,
} from '@/lib/podcast-details'
import {
  Play,
  Clock,
  Calendar,
  Mic,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Rss,
  Quote,
  Headphones,
} from 'lucide-react'

export async function generateStaticParams() {
  return EPISODES.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const ep = findEpisode(slug)
  if (!ep) return { title: 'Episode not found' }
  return {
    title: `${ep.title} — ${SHOW.title}`,
    description: ep.teaser,
    alternates: { canonical: `/podcast/${ep.slug}` },
    openGraph: {
      type: 'article',
      title: `${ep.title} · ${SHOW.title}`,
      description: ep.teaser,
      url: `/podcast/${ep.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${ep.title} · ${SHOW.title}`,
      description: ep.teaser,
    },
  }
}

function formatDate(d: string): string {
  const [y, m, day] = d.split('-').map((p) => parseInt(p, 10))
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[m - 1]} ${day}, ${y}`
}

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const ep = findEpisode(slug)
  if (!ep) notFound()

  const detail = getEpisodeDetail(slug)
  const related = relatedEpisodes(slug)
  const { prev, next } = navEpisodes(slug)
  const tone = TAG_TONE[ep.tag]

  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(55% 60% at 50% 0%, rgba(197,163,92,0.10) 0%, rgba(197,163,92,0) 60%)',
          }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-2">
          <Breadcrumbs items={[{ label: 'Podcast', href: '/podcast' }, { label: `Episode ${ep.n}` }]} />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold/80 mb-4 inline-flex items-center gap-2">
            <Mic className="h-3 w-3" aria-hidden />
            {SHOW.title} · Episode {ep.n.toString().padStart(2, '0')}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-foreground">
            {ep.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-[12px] font-mono text-muted-foreground">
            <span
              className={`inline-flex items-center h-6 px-2.5 rounded-full border uppercase tracking-wider text-[10px] ${tone.ring} ${tone.fg}`}
            >
              {ep.tag}
            </span>
            <span className="text-foreground/80">{ep.guest}</span>
            <span className="text-muted-foreground/40">·</span>
            <span>{ep.role}</span>
            <span className="text-muted-foreground/40">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden />
              {ep.durationMin} min
            </span>
            <span className="text-muted-foreground/40">·</span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" aria-hidden />
              {formatDate(ep.publishedAt)}
            </span>
            {detail?.recordedIn && (
              <>
                <span className="text-muted-foreground/40">·</span>
                <span className="italic">Recorded at {detail.recordedIn}</span>
              </>
            )}
          </div>

          <p className="mt-8 font-display italic text-xl md:text-2xl text-foreground/90 leading-relaxed max-w-3xl">
            {ep.teaser}
          </p>

          <button
            type="button"
            disabled
            aria-label="Play this episode"
            className="mt-8 group inline-flex items-center gap-3 rounded-2xl border border-border bg-[#131318] p-4 pr-6"
          >
            <span className="w-11 h-11 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/20">
              <Play className="h-4 w-4 text-[#0c0c0f] fill-current" aria-hidden />
            </span>
            <span className="text-left">
              <span className="block text-sm text-foreground font-medium">Play episode</span>
              <span className="block text-[11px] font-mono text-muted-foreground">
                {ep.durationMin}:00 · streaming via your podcast app
              </span>
            </span>
          </button>
        </div>
      </section>

      {/* Highlights */}
      {detail && detail.highlights.length > 0 && (
        <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-6">
              Highlights · pull-quotes
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {detail.highlights.map((h, i) => (
                <Reveal key={i} delay={i * 60}>
                  <figure className="h-full rounded-2xl border border-border bg-[#131318] p-5 md:p-6 flex flex-col">
                    <Quote className="h-4 w-4 text-gold/70 mb-3" aria-hidden />
                    <blockquote className="font-display italic text-[15px] text-foreground/90 leading-relaxed flex-1">
                      &ldquo;{h.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-4 pt-3 border-t border-border/70 text-[11px] font-mono text-muted-foreground inline-flex items-center gap-1.5">
                      <Clock className="h-3 w-3 text-gold/70" aria-hidden />
                      Jump to {h.at}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Transcript highlights + chapters */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              From the episode
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6">
              A summary, not a transcript.
            </h2>
            <div className="space-y-5">
              {detail?.transcript.map((p, i) => (
                <p key={i} className="text-[15px] leading-[1.78] text-foreground/85 font-light">
                  {p}
                </p>
              ))}
              {!detail && (
                <p className="text-[15px] leading-[1.78] text-foreground/85 font-light">
                  {ep.description}
                </p>
              )}
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-border bg-[#131318] p-5 md:p-6 sticky top-20">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-3 inline-flex items-center gap-1.5">
                <Headphones className="h-3 w-3" aria-hidden />
                Chapters
              </p>
              <ol className="space-y-0.5 divide-y divide-border/60">
                {ep.chapters.map((c, i) => (
                  <li key={i} className="py-2.5 flex items-start gap-4">
                    <span className="font-mono text-[11px] text-gold/70 w-11 shrink-0 pt-0.5 tabular-nums">
                      {c.at}
                    </span>
                    <span className="text-[13px] text-foreground/90 leading-snug flex-1 pr-1">
                      {c.t}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground/60 shrink-0 pt-0.5">
                      #{String(i + 1).padStart(2, '0')}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-5 pt-4 border-t border-border/60">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 mb-2.5">
                  Listen on
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {PLATFORMS.map((p) => (
                    <li key={p.name}>
                      <a
                        href={p.url}
                        className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-full border border-border text-[11px] font-mono text-muted-foreground hover:border-gold/30 hover:text-gold transition-colors"
                      >
                        <span>{p.initials}</span>
                        <span>{p.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/podcast/feed.xml"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-gold hover:underline"
                >
                  <Rss className="h-3 w-3" aria-hidden />
                  RSS feed
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border bg-[#0a0a0e]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                Related episodes
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                If you liked this one, these are the two we&apos;d queue next.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {related.map((r) => {
                const rTone = TAG_TONE[r.tag]
                return (
                  <Link
                    key={r.slug}
                    href={`/podcast/${r.slug}`}
                    className="group rounded-2xl border border-border bg-[#131318] p-6 flex items-start gap-5 hover:border-gold/30 hover:-translate-y-0.5 transition-all"
                  >
                    <span className="font-display text-[40px] text-gold/50 font-semibold leading-none shrink-0 tabular-nums">
                      {r.n.toString().padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1.5">
                        <span
                          className={`inline-flex items-center h-5 px-2 rounded-full border text-[10px] font-mono uppercase tracking-wider ${rTone.ring} ${rTone.fg}`}
                        >
                          {r.tag}
                        </span>
                        <span className="text-[11px] font-mono text-muted-foreground inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" aria-hidden />
                          {r.durationMin} min
                        </span>
                      </div>
                      <h3 className="font-display text-xl text-foreground tracking-tight leading-snug group-hover:text-gold transition-colors">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] text-muted-foreground italic leading-relaxed line-clamp-3">
                        {r.teaser}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next */}
      <section className="py-10 md:py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-4">
          <div>
            {prev ? (
              <Link
                href={`/podcast/${prev.slug}`}
                className="group block rounded-2xl border border-border bg-[#131318] p-5 hover:border-gold/30 transition-colors"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 mb-1.5 inline-flex items-center gap-1.5">
                  <ArrowLeft className="h-3 w-3" aria-hidden />
                  Previous episode
                </p>
                <p className="font-display text-[15px] text-foreground tracking-tight leading-snug group-hover:text-gold transition-colors">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div className="hidden md:block" />
            )}
          </div>
          <div>
            {next ? (
              <Link
                href={`/podcast/${next.slug}`}
                className="group block rounded-2xl border border-border bg-[#131318] p-5 text-right hover:border-gold/30 transition-colors"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 mb-1.5 inline-flex items-center gap-1.5 justify-end w-full">
                  Next episode
                  <ArrowRight className="h-3 w-3" aria-hidden />
                </p>
                <p className="font-display text-[15px] text-foreground tracking-tight leading-snug group-hover:text-gold transition-colors">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div className="hidden md:block" />
            )}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
            Season 2 · fall 2026
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Get a note when the next one drops.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
            One email per episode, no more. Unsubscribe in one click.
          </p>
          <div className="mt-7 flex justify-center">
            <NewsletterForm source={`podcast:${ep.slug}`} variant="blog" />
          </div>
          <div className="mt-6">
            <Link
              href="/podcast"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              Back to all episodes <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <CTA
        title="Enjoyed this one? Try the product it came from."
        subtitle="Calendro is free forever for individuals. Same principles, different medium."
        primary={{ label: 'Use Calendro', href: '/login' }}
        secondary={{ label: 'Read the manifesto', href: '/manifesto' }}
      />
    </>
  )
}
