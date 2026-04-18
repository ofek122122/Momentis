import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { WallMasonry } from '@/components/marketing/WallMasonry'
import { CTA } from '@/components/marketing/CTA'
import { WALL_QUOTES, WALL_STATS } from '@/lib/wall-of-love'
import { Heart, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wall of Love — What people say about Momenties',
  description:
    'A quiet corner of the internet where we keep every kind thing anyone has ever said about our calendar. Filterable by role. Updated weekly.',
  alternates: { canonical: '/wall-of-love' },
  openGraph: {
    title: 'The Momenties Wall of Love',
    description:
      'Every kind thing anyone has ever said about our calendar, kept in one quiet place.',
    url: '/wall-of-love',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Momenties Wall of Love',
    description:
      'Every kind thing anyone has ever said about our calendar, kept in one quiet place.',
  },
}

const FIGURES = [
  { label: 'Quotes on this wall', value: WALL_STATS.total.toString() },
  { label: 'Roles represented', value: '8' },
  { label: 'Sources (X, LinkedIn, email, reviews, calls)', value: WALL_STATS.sources.toString() },
  { label: 'Featured this week', value: WALL_STATS.featured.toString() },
]

const LATEST = [...WALL_QUOTES]
  .sort((a, b) => b.postedAt.localeCompare(a.postedAt))
  .slice(0, 3)

function formatPostedAt(d: string): string {
  const [y, m] = d.split('-')
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[parseInt(m, 10) - 1]} ${y}`
}

export default function WallOfLovePage() {
  return (
    <>
      <PageHero
        eyebrow="Wall of love"
        title={
          <>
            The quiet corner of the internet where we keep every{' '}
            <em className="not-italic text-gold">kind thing</em> anyone has said about our calendar.
          </>
        }
        lede="We're not going to pretend we don't read every tweet, email, and review. We do. We keep the ones that make us want to keep building. Filterable by who sent it. Updated every Friday."
        crumbs={[{ label: 'Wall of love' }]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/contact?subject=Press"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/40 hover:text-gold transition-colors"
          >
            <Heart className="h-4 w-4" aria-hidden />
            Share your story
          </Link>
          <Link
            href="/customers"
            className="inline-flex items-center gap-1.5 h-10 px-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Read case studies <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </PageHero>

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
            {FIGURES.map((f) => (
              <div key={f.label} className="bg-[#0c0c0f] p-5">
                <div className="font-display text-3xl md:text-4xl text-gold font-semibold leading-none">
                  {f.value}
                </div>
                <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground/80 leading-snug">
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <WallMasonry />
        </div>
      </section>

      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                Latest additions
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                Freshly pinned, freshly grateful.
              </h2>
            </div>
            <p className="hidden md:block text-sm text-muted-foreground max-w-xs text-right">
              We curate this wall every Friday. Think of it as our founders&apos; version of a gratitude journal.
            </p>
          </div>
          <ol className="divide-y divide-border/70 border-y border-border/70">
            {LATEST.map((q, i) => (
              <li key={q.id} className="py-6 flex items-start gap-6">
                <div className="font-mono text-[11px] text-muted-foreground/60 w-10 shrink-0 pt-1">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display text-lg md:text-xl text-foreground/90 leading-snug">
                    &ldquo;{q.quote}&rdquo;
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-muted-foreground/80">
                    <span className="text-foreground/80">{q.name}</span>
                    <span className="text-muted-foreground/40">·</span>
                    <span>{q.role}</span>
                    <span className="text-muted-foreground/40">·</span>
                    <span>{formatPostedAt(q.postedAt)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA
        title="The best thing on this wall is the one you haven't sent yet."
        subtitle="Mention us, email us, or just try the product. Every one of these started somewhere."
        primary={{ label: 'Start using Momenties', href: '/login' }}
        secondary={{ label: 'Read the manifesto', href: '/manifesto' }}
      />
    </>
  )
}
