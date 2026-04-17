'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

type Language = 'curl' | 'node' | 'python'

const LABELS: Record<Language, string> = {
  curl: 'cURL',
  node: 'Node',
  python: 'Python',
}

export function CodeTabs({
  examples,
}: {
  examples: Record<Language, string>
}) {
  const languages = Object.keys(examples) as Language[]
  const [active, setActive] = useState<Language>(languages[0])
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(examples[active])
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // swallow — clipboard API may be unavailable
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-[#0a0a0d] overflow-hidden">
      <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-border">
        <div className="flex items-center gap-1">
          {languages.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setActive(l)}
              className={cn(
                'px-3 h-7 rounded-lg text-xs font-mono transition-colors',
                active === l
                  ? 'bg-white/5 text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {LABELS[l]}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 px-2.5 h-7 rounded-lg text-[11px] font-mono text-muted-foreground hover:text-gold transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="p-5 font-mono text-[12.5px] leading-[1.7] text-foreground/90 overflow-x-auto whitespace-pre">
        {examples[active]}
      </pre>
    </div>
  )
}
