'use client'

import { useState } from 'react'
import { Zap, Check, X, Loader2 } from 'lucide-react'

interface QuickAction {
  type: 'cancel' | 'move' | 'query' | 'clear'
  description: string
  confirmed: boolean
}

interface QuickActionsProps {
  onActionComplete?: () => void
}

export function QuickActions({ onActionComplete }: QuickActionsProps) {
  const [action, setAction] = useState<QuickAction | null>(null)
  const [processing, setProcessing] = useState(false)

  const suggestions = [
    { label: 'What do I have tomorrow?', icon: '📋' },
    { label: 'Cancel my 3pm meeting', icon: '❌' },
    { label: 'Move standup to 10am', icon: '↗️' },
    { label: 'Clear Friday afternoon', icon: '🧹' },
  ]

  async function executeAction(text: string) {
    setProcessing(true)
    try {
      const res = await fetch('/api/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      if (res.ok) {
        setAction({
          type: 'query',
          description: `Processed: "${text}"`,
          confirmed: true,
        })
        onActionComplete?.()
      }
    } finally {
      setProcessing(false)
      setTimeout(() => setAction(null), 3000)
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 mb-1">
        <Zap className="h-3 w-3 text-gold" />
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Quick actions</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {suggestions.map((s, i) => (
          <button
            key={i}
            onClick={() => executeAction(s.label)}
            disabled={processing}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground hover:border-gold/30 hover:bg-gold/5 transition-all disabled:opacity-50"
          >
            <span>{s.icon}</span>
            <span className="font-mono">{s.label}</span>
          </button>
        ))}
      </div>
      {action && (
        <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono animate-fade-up">
          <Check className="h-3 w-3" />
          {action.description}
        </div>
      )}
    </div>
  )
}
