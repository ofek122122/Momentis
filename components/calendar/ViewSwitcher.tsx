'use client'

import { Calendar, LayoutGrid, CalendarDays } from 'lucide-react'

export type CalendarViewType = 'month' | 'week' | 'day'

interface ViewSwitcherProps {
  view: CalendarViewType
  onViewChange: (view: CalendarViewType) => void
}

const VIEWS: { type: CalendarViewType; icon: typeof Calendar; label: string; shortcut: string }[] = [
  { type: 'month', icon: LayoutGrid, label: 'Month', shortcut: 'M' },
  { type: 'week', icon: CalendarDays, label: 'Week', shortcut: 'W' },
  { type: 'day', icon: Calendar, label: 'Day', shortcut: 'D' },
]

export function ViewSwitcher({ view, onViewChange }: ViewSwitcherProps) {
  return (
    <div className="flex items-center rounded-lg border border-border bg-muted/30 p-0.5" role="tablist" aria-label="Calendar view">
      {VIEWS.map(v => (
        <button
          key={v.type}
          role="tab"
          aria-selected={view === v.type}
          onClick={() => onViewChange(v.type)}
          title={`${v.label} view (${v.shortcut})`}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
            view === v.type
              ? 'bg-gold/15 text-gold border border-gold/20'
              : 'text-muted-foreground hover:text-foreground border border-transparent'
          }`}
        >
          <v.icon className="h-3 w-3" />
          <span className="hidden sm:inline">{v.label}</span>
        </button>
      ))}
    </div>
  )
}
