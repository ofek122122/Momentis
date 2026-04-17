'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search, X, ArrowUpRight } from 'lucide-react'
import type { SearchRecord } from '@/lib/search-index'
import { cn } from '@/lib/utils'

const TYPE_LABEL: Record<SearchRecord['type'], string> = {
  page: 'Page',
  blog: 'Blog',
  customer: 'Customer',
  compare: 'Compare',
  integration: 'Integration',
  job: 'Role',
  help: 'Help',
  author: 'Author',
  release: 'Release',
}

function rank(record: SearchRecord, needle: string): number {
  const t = record.title.toLowerCase()
  const d = record.description.toLowerCase()
  if (t === needle) return 1000
  if (t.startsWith(needle)) return 700
  if (t.includes(` ${needle}`)) return 500
  if (t.includes(needle)) return 300
  if (d.includes(needle)) return 100
  const words = needle.split(/\s+/).filter(Boolean)
  if (words.length > 1 && words.every((w) => t.includes(w) || d.includes(w))) return 200
  return 0
}

export function SiteSearch({ records }: { records: SearchRecord[] }) {
  const [q, setQ] = useState('')
  const [typeFilter, setTypeFilter] = useState<SearchRecord['type'] | 'all'>('all')

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase()
    if (!needle) return [] as { record: SearchRecord; score: number }[]
    return records
      .map((record) => ({ record, score: rank(record, needle) }))
      .filter((r) => r.score > 0)
      .filter((r) => typeFilter === 'all' || r.record.type === typeFilter)
      .sort((a, b) => b.score - a.score)
      .slice(0, 40)
  }, [q, typeFilter, records])

  const types = useMemo(() => {
    const set = new Set(records.map((r) => r.type))
    return Array.from(set)
  }, [records])

  return (
    <div>
      {/* Input */}
      <div className="relative">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoFocus
          placeholder="Search pages, posts, integrations, help..."
          className="w-full h-14 pl-14 pr-14 rounded-2xl bg-white/[0.04] border border-border text-base text-foreground placeholder:text-muted-foreground/60 focus:border-gold/40 focus:bg-white/[0.06] focus:outline-none transition-colors"
        />
        {q && (
          <button
            type="button"
            onClick={() => setQ('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full hover:bg-white/5 text-muted-foreground"
            aria-label="Clear"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Type filter */}
      <div className="mt-5 flex items-center gap-2 overflow-x-auto scrollbar-none">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 shrink-0 mr-2">
          Filter:
        </span>
        <button
          type="button"
          onClick={() => setTypeFilter('all')}
          className={cn(
            'shrink-0 px-3 h-8 inline-flex items-center rounded-full text-xs transition-colors',
            typeFilter === 'all'
              ? 'bg-gold text-[#0c0c0f] border border-gold'
              : 'border border-border hover:border-gold/30 hover:text-gold text-muted-foreground'
          )}
        >
          Everything
        </button>
        {types.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTypeFilter(t)}
            className={cn(
              'shrink-0 px-3 h-8 inline-flex items-center rounded-full text-xs transition-colors',
              typeFilter === t
                ? 'bg-gold text-[#0c0c0f] border border-gold'
                : 'border border-border hover:border-gold/30 hover:text-gold text-muted-foreground'
            )}
          >
            {TYPE_LABEL[t]}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="mt-8">
        {!q.trim() ? (
          <div className="rounded-2xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground">
            Start typing to search across {records.length} pages, essays, and articles.
          </div>
        ) : results.length === 0 ? (
          <div className="rounded-2xl border border-border lux-card p-12 text-center">
            <p className="font-display text-xl text-foreground mb-2">No matches.</p>
            <p className="text-sm text-muted-foreground">
              Try a simpler phrase, or{' '}
              <a href="/contact" className="text-gold hover:underline">
                write us
              </a>
              {' '}— we read every email.
            </p>
          </div>
        ) : (
          <ul className="space-y-2">
            {results.map((r, i) => (
              <li key={`${r.record.url}-${i}`}>
                <Link
                  href={r.record.url}
                  className="group flex items-start justify-between gap-4 rounded-xl border border-border lux-card p-5 hover:border-gold/25 transition-colors"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold/70 px-2 py-0.5 rounded-full border border-gold/20">
                        {TYPE_LABEL[r.record.type]}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground/60 truncate">
                        {r.record.url}
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                      {r.record.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {r.record.description}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
