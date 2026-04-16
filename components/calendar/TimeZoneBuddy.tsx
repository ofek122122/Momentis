'use client'

import { useState, useMemo } from 'react'
import { Globe, Plus, X, Clock } from 'lucide-react'

interface TimeZoneEntry {
  id: string
  name: string
  label: string
  offset: number // hours from UTC
}

const POPULAR_TIMEZONES: TimeZoneEntry[] = [
  { id: 'utc', name: 'UTC', label: 'UTC', offset: 0 },
  { id: 'est', name: 'US/Eastern', label: 'New York', offset: -5 },
  { id: 'cst', name: 'US/Central', label: 'Chicago', offset: -6 },
  { id: 'pst', name: 'US/Pacific', label: 'Los Angeles', offset: -8 },
  { id: 'gmt', name: 'Europe/London', label: 'London', offset: 0 },
  { id: 'cet', name: 'Europe/Paris', label: 'Paris', offset: 1 },
  { id: 'ist', name: 'Asia/Jerusalem', label: 'Israel', offset: 2 },
  { id: 'jst', name: 'Asia/Tokyo', label: 'Tokyo', offset: 9 },
  { id: 'aest', name: 'Australia/Sydney', label: 'Sydney', offset: 10 },
  { id: 'cst-cn', name: 'Asia/Shanghai', label: 'Shanghai', offset: 8 },
]

export function TimeZoneBuddy() {
  const [selected, setSelected] = useState<TimeZoneEntry[]>([
    POPULAR_TIMEZONES[1], // New York
    POPULAR_TIMEZONES[5], // Paris
    POPULAR_TIMEZONES[7], // Tokyo
  ])
  const [showPicker, setShowPicker] = useState(false)

  const now = useMemo(() => new Date(), [])

  function getTimeInZone(offset: number): string {
    const utc = now.getTime() + now.getTimezoneOffset() * 60_000
    const zoneTime = new Date(utc + offset * 3600_000)
    const h = zoneTime.getHours()
    const m = zoneTime.getMinutes()
    const ampm = h >= 12 ? 'PM' : 'AM'
    const hour = h % 12 || 12
    return `${hour}:${String(m).padStart(2, '0')} ${ampm}`
  }

  function isWorkingHours(offset: number): boolean {
    const utc = now.getTime() + now.getTimezoneOffset() * 60_000
    const zoneTime = new Date(utc + offset * 3600_000)
    const h = zoneTime.getHours()
    return h >= 9 && h < 18
  }

  function addZone(zone: TimeZoneEntry) {
    if (!selected.find(s => s.id === zone.id)) {
      setSelected(prev => [...prev, zone])
    }
    setShowPicker(false)
  }

  function removeZone(id: string) {
    setSelected(prev => prev.filter(z => z.id !== id))
  }

  return (
    <div className="rounded-xl border border-border bg-card p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-gold" />
          <span className="text-sm font-medium text-foreground">Time Zones</span>
        </div>
        <button
          onClick={() => setShowPicker(!showPicker)}
          className="text-xs text-muted-foreground hover:text-gold flex items-center gap-1 transition-colors"
          aria-label="Add timezone"
        >
          <Plus className="h-3 w-3" />
        </button>
      </div>

      {/* Time zone list */}
      <div className="space-y-2">
        {selected.map(zone => {
          const working = isWorkingHours(zone.offset)
          return (
            <div
              key={zone.id}
              className="flex items-center justify-between group py-1"
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className={`w-2 h-2 rounded-full ${working ? 'bg-emerald-500' : 'bg-zinc-600'}`} />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-foreground truncate">{zone.label}</p>
                  <p className="text-[10px] text-muted-foreground font-mono">UTC{zone.offset >= 0 ? '+' : ''}{zone.offset}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`font-mono text-sm ${working ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {getTimeInZone(zone.offset)}
                </span>
                <button
                  onClick={() => removeZone(zone.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                  aria-label={`Remove ${zone.label}`}
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Zone picker */}
      {showPicker && (
        <div className="border-t border-border pt-2 space-y-1">
          <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Add timezone</p>
          {POPULAR_TIMEZONES.filter(z => !selected.find(s => s.id === z.id)).map(zone => (
            <button
              key={zone.id}
              onClick={() => addZone(zone)}
              className="w-full flex items-center justify-between py-1.5 px-2 rounded-md text-xs hover:bg-gold/5 transition-colors"
            >
              <span className="text-foreground/80">{zone.label}</span>
              <span className="font-mono text-muted-foreground text-[10px]">
                UTC{zone.offset >= 0 ? '+' : ''}{zone.offset}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Working hours legend */}
      <div className="flex items-center gap-3 pt-1">
        <span className="flex items-center gap-1 text-[9px] text-muted-foreground/60">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Working hours
        </span>
        <span className="flex items-center gap-1 text-[9px] text-muted-foreground/60">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> Off hours
        </span>
      </div>
    </div>
  )
}
