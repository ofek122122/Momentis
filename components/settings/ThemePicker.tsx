'use client'

import { useState, useEffect } from 'react'
import { Check, Crown, Palette } from 'lucide-react'
import { THEMES, getTheme, applyTheme } from '@/lib/themes'
import type { CalendroTheme } from '@/lib/themes'
import { ProBadge } from '@/components/ui/pro-badge'

interface ThemePickerProps {
  isPro: boolean
  currentThemeId?: string
}

export function ThemePicker({ isPro, currentThemeId = 'midnight-gold' }: ThemePickerProps) {
  const [selected, setSelected] = useState(currentThemeId)

  useEffect(() => {
    const theme = getTheme(selected)
    applyTheme(theme)
  }, [selected])

  function handleSelect(theme: CalendroTheme) {
    if (theme.isPro && !isPro) return
    setSelected(theme.id)
    // Persist to preferences
    fetch('/api/preferences', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ theme: theme.id }),
    }).catch(() => {})
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-2">
        <Palette className="h-4 w-4 text-gold" />
        <span className="text-sm font-medium text-foreground">Theme</span>
        {!isPro && <ProBadge />}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {THEMES.map(theme => {
          const locked = theme.isPro && !isPro
          const isSelected = selected === theme.id
          return (
            <button
              key={theme.id}
              onClick={() => handleSelect(theme)}
              disabled={locked}
              className={`relative rounded-xl border p-3 text-left transition-all ${
                isSelected
                  ? 'border-gold/50 ring-2 ring-gold/20'
                  : locked
                    ? 'border-border/50 opacity-50 cursor-not-allowed'
                    : 'border-border hover:border-gold/30'
              }`}
            >
              {/* Color preview */}
              <div className="flex gap-1 mb-2">
                <div className="w-4 h-4 rounded-full" style={{ background: theme.colors.background, border: '1px solid rgba(255,255,255,0.1)' }} />
                <div className="w-4 h-4 rounded-full" style={{ background: theme.colors.gold }} />
                <div className="w-4 h-4 rounded-full" style={{ background: theme.colors.card, border: '1px solid rgba(255,255,255,0.1)' }} />
              </div>
              <p className="text-xs font-medium text-foreground">{theme.name}</p>
              <p className="text-[10px] text-muted-foreground">{theme.description}</p>
              {isSelected && (
                <div className="absolute top-2 right-2">
                  <Check className="h-3.5 w-3.5 text-gold" />
                </div>
              )}
              {locked && (
                <div className="absolute top-2 right-2">
                  <Crown className="h-3 w-3 text-muted-foreground" />
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
