'use client'

import { useState, useEffect } from 'react'
import { Sun, Coffee, AlertTriangle, Clock, Sparkles, ChevronDown, ChevronUp } from 'lucide-react'
import { format, isToday, isBefore, addMinutes, differenceInMinutes } from 'date-fns'
import type { MomentiesEvent } from '@/types'

interface DailyBriefingProps {
  events: MomentiesEvent[]
}

export function DailyBriefing({ events }: DailyBriefingProps) {
  const [expanded, setExpanded] = useState(true)
  const [greeting, setGreeting] = useState('')

  const todayEvents = events
    .filter(e => isToday(new Date(e.start)))
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good morning')
    else if (hour < 17) setGreeting('Good afternoon')
    else setGreeting('Good evening')
  }, [])

  // Generate insights
  const insights: string[] = []

  // Back-to-back meetings check
  for (let i = 0; i < todayEvents.length - 1; i++) {
    const gap = differenceInMinutes(
      new Date(todayEvents[i + 1].start),
      new Date(todayEvents[i].end)
    )
    if (gap < 15 && gap >= 0) {
      insights.push(`Back-to-back: ${todayEvents[i].title} → ${todayEvents[i + 1].title}. Consider adding a break.`)
      break
    }
  }

  // Busy day warning
  if (todayEvents.length >= 5) {
    insights.push(`Packed day with ${todayEvents.length} events. Pace yourself!`)
  }

  // Free morning
  const morningEvents = todayEvents.filter(e => new Date(e.start).getHours() < 12)
  if (morningEvents.length === 0 && todayEvents.length > 0) {
    insights.push('Your morning is free — great time for focused work.')
  }

  // Calculate total meeting time
  const totalMinutes = todayEvents.reduce((acc, e) => {
    return acc + differenceInMinutes(new Date(e.end), new Date(e.start))
  }, 0)
  const totalHours = Math.round(totalMinutes / 60 * 10) / 10

  if (todayEvents.length === 0) return null

  return (
    <div className="rounded-xl border border-border bg-card/50 backdrop-blur overflow-hidden mb-4">
      <button
        onClick={() => setExpanded(!expanded)}
        aria-label={expanded ? 'Collapse daily briefing' : 'Expand daily briefing'}
        aria-expanded={expanded}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-gold/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
            <Sun className="h-4 w-4 text-gold" />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-foreground">{greeting}</p>
            <p className="text-xs text-muted-foreground">
              {todayEvents.length} event{todayEvents.length !== 1 ? 's' : ''} today · {totalHours}h scheduled
            </p>
          </div>
        </div>
        {expanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-3">
          {/* Insights */}
          {insights.length > 0 && (
            <div className="space-y-1.5">
              {insights.map((insight, i) => (
                <div key={i} className="flex items-start gap-2 text-xs">
                  <Sparkles className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{insight}</span>
                </div>
              ))}
            </div>
          )}

          {/* Today's schedule */}
          <div className="space-y-1">
            {todayEvents.slice(0, 5).map((event, i) => {
              const start = new Date(event.start)
              const isPast = isBefore(start, new Date())
              return (
                <div
                  key={event.id ?? i}
                  className={`flex items-center gap-3 py-1.5 ${isPast ? 'opacity-50' : ''}`}
                >
                  <span className="font-mono text-[10px] text-gold/60 w-14 shrink-0">
                    {format(start, 'h:mm a')}
                  </span>
                  <span className="text-xs text-foreground truncate">{event.title}</span>
                  {event.location && (
                    <span className="text-[10px] text-muted-foreground/60 truncate hidden sm:inline">
                      · {event.location}
                    </span>
                  )}
                </div>
              )
            })}
            {todayEvents.length > 5 && (
              <p className="text-[10px] text-muted-foreground/50 font-mono pl-14">
                +{todayEvents.length - 5} more
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
