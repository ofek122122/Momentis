'use client'

import { useMemo, useState } from 'react'
import { Quote, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  WALL_CATEGORIES,
  WALL_QUOTES,
  categoryCounts,
  initials,
  type WallCategory,
  type WallQuote,
  type WallSource,
} from '@/lib/wall-of-love'

function SourceBadge({ source }: { source: WallSource }) {
  const map: Record<WallSource, string> = {
    twitter: 'x',
    linkedin: 'in',
    email: '✉',
    review: '★',
    call: '☏',
  }
  const label: Record<WallSource, string> = {
    twitter: 'X / Twitter',
    linkedin: 'LinkedIn',
    email: 'Email',
    review: 'Review',
    call: 'Call',
  }
  return (
    <span
      className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/[0.05] border border-border text-[10px] font-mono text-muted-foreground"
      aria-label={label[source]}
      title={label[source]}
    >
      {map[source]}
    </span>
  )
}

function QuoteCard({ q, idx }: { q: WallQuote; idx: number }) {
  const tone = idx % 3
  return (
    <article
      className={cn(
        'group relative break-inside-avoid mb-5 rounded-2xl border border-border bg-[#131318] p-6 transition-all hover:border-gold/25 hover:-translate-y-0.5',
        q.featured && 'ring-1 ring-gold/20'
      )}
    >
      {q.featured && (
        <div className="absolute -top-2 left-5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold text-[#0c0c0f] text-[9px] font-mono uppercase tracking-wider">
          <Heart className="h-2.5 w-2.5 fill-current" aria-hidden />
          Featured
        </div>
      )}
      <Quote
        className={cn(
          'h-4 w-4 mb-3',
          tone === 0 ? 'text-gold/70' : tone === 1 ? 'text-gold/50' : 'text-gold/40'
        )}
        aria-hidden
      />
      <p className="font-display text-[16px] md:text-[17px] leading-[1.55] text-foreground/90">
        {q.quote}
      </p>
      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 flex items-center justify-center text-[10px] font-mono text-gold">
            {initials(q.name)}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-medium text-foreground truncate">{q.name}</div>
            <div className="text-[11px] text-muted-foreground font-mono truncate">
              {q.handle ? (
                <span className="text-gold/70">{q.handle}</span>
              ) : null}
              {q.handle ? <span className="mx-1.5 text-muted-foreground/40">·</span> : null}
              <span>{q.role}</span>
            </div>
          </div>
        </div>
        <SourceBadge source={q.source} />
      </div>
    </article>
  )
}

export function WallMasonry() {
  const [active, setActive] = useState<WallCategory | 'all'>('all')
  const counts = useMemo(() => categoryCounts(), [])

  const quotes = useMemo(() => {
    if (active === 'all') return WALL_QUOTES
    return WALL_QUOTES.filter((q) => q.categories.includes(active))
  }, [active])

  return (
    <div>
      <div
        className="sticky top-[64px] z-10 -mx-5 md:mx-0 px-5 md:px-0 py-4 bg-[#0c0c0f]/85 backdrop-blur border-b border-border/60 mb-10"
        role="tablist"
        aria-label="Filter testimonials by role"
      >
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {WALL_CATEGORIES.map((c) => {
            const count = counts[c.id] ?? 0
            const selected = active === c.id
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(c.id)}
                className={cn(
                  'shrink-0 inline-flex items-center gap-2 h-9 px-4 rounded-full border text-sm transition-colors',
                  selected
                    ? 'bg-gold text-[#0c0c0f] border-gold'
                    : 'bg-white/[0.03] border-border text-muted-foreground hover:text-foreground hover:border-gold/30'
                )}
              >
                <span>{c.label}</span>
                <span
                  className={cn(
                    'text-[10px] font-mono',
                    selected ? 'text-[#0c0c0f]/70' : 'text-muted-foreground/60'
                  )}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {quotes.length === 0 ? (
        <div className="rounded-2xl border border-border bg-white/[0.02] p-12 text-center">
          <p className="font-display text-xl text-foreground">
            Nothing in this corner of the wall yet.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            We&apos;re still collecting. Check back in a week.
          </p>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {quotes.map((q, i) => (
            <QuoteCard key={q.id} q={q} idx={i} />
          ))}
        </div>
      )}
    </div>
  )
}
