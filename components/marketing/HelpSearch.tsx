'use client'

import { useState, useMemo } from 'react'
import { Search, X } from 'lucide-react'

type Cat = {
  slug: string
  label: string
  articles: { title: string; excerpt: string }[]
}

export function HelpSearch({ categories }: { categories: Cat[] }) {
  const [q, setQ] = useState('')

  const results = useMemo(() => {
    if (!q.trim()) return []
    const needle = q.toLowerCase()
    return categories.flatMap((c) =>
      c.articles
        .filter(
          (a) =>
            a.title.toLowerCase().includes(needle) ||
            a.excerpt.toLowerCase().includes(needle)
        )
        .map((a) => ({ ...a, category: c.label }))
    )
  }, [q, categories])

  return (
    <div className="relative max-w-xl">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search the help center..."
          className="w-full h-12 pl-11 pr-11 rounded-full bg-white/[0.04] border border-border text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-gold/40 focus:bg-white/[0.06] focus:outline-none transition-colors"
        />
        {q && (
          <button
            type="button"
            onClick={() => setQ('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-7 w-7 flex items-center justify-center rounded-full hover:bg-white/5 text-muted-foreground"
            aria-label="Clear search"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {q && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-border bg-[#0f0f14]/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden z-30">
          {results.length === 0 ? (
            <div className="p-5 text-sm text-muted-foreground text-center">
              No matches. Try a different phrase or{' '}
              <a href="/contact" className="text-gold hover:underline">
                ask a human
              </a>
              .
            </div>
          ) : (
            <ul className="max-h-[360px] overflow-y-auto py-2">
              {results.slice(0, 8).map((r, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-start gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
                  >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold/70 mt-0.5 shrink-0">
                      {r.category}
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm text-foreground truncate">{r.title}</div>
                      <div className="text-xs text-muted-foreground truncate">{r.excerpt}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
