'use client'

import { useState, useMemo } from 'react'
import {
  format, isSameDay, isToday, setHours,
} from 'date-fns'
import type { MomentiesEvent } from '@/types'
import { EVENT_COLORS, CATEGORY_TO_COLOR, PRIORITY_CONFIG } from '@/types'
import type { EventColor } from '@/types'

const HOUR_HEIGHT = 80 // px per hour - more spacious in day view
const START_HOUR = 6
const END_HOUR = 24

interface DayViewProps {
  events: MomentiesEvent[]
  currentDate: Date
  onEventClick: (event: MomentiesEvent) => void
  onTimeSlotClick: (date: Date) => void
  onDropEvent: (event: MomentiesEvent, targetDate: Date) => void
}

export function DayView({ events, currentDate, onEventClick, onTimeSlotClick, onDropEvent }: DayViewProps) {
  const [dragOverSlot, setDragOverSlot] = useState<string | null>(null)

  const dayEvents = useMemo(
    () => events.filter(e => isSameDay(new Date(e.start), currentDate)),
    [events, currentDate]
  )

  const hours = useMemo(() => {
    const hrs: number[] = []
    for (let h = START_HOUR; h < END_HOUR; h++) hrs.push(h)
    return hrs
  }, [])

  function getEventStyle(event: MomentiesEvent): React.CSSProperties {
    const start = new Date(event.start)
    const end = new Date(event.end)
    const startMin = start.getHours() * 60 + start.getMinutes()
    const endMin = end.getHours() * 60 + end.getMinutes()
    const top = ((startMin - START_HOUR * 60) / 60) * HOUR_HEIGHT
    const height = Math.max(((endMin - startMin) / 60) * HOUR_HEIGHT, 30)
    return { top: `${top}px`, height: `${height}px` }
  }

  // Current time indicator
  const now = new Date()
  const nowMin = now.getHours() * 60 + now.getMinutes()
  const nowTop = ((nowMin - START_HOUR * 60) / 60) * HOUR_HEIGHT

  function handleDrop(e: React.DragEvent, hour: number) {
    e.preventDefault()
    setDragOverSlot(null)
    const data = e.dataTransfer.getData('application/json')
    if (!data) return
    try {
      const event: MomentiesEvent = JSON.parse(data)
      const target = new Date(currentDate)
      target.setHours(hour, 0, 0, 0)
      onDropEvent(event, target)
    } catch { /* invalid data */ }
  }

  return (
    <div className="flex flex-col h-full" role="grid" aria-label="Day view">
      {/* Day header */}
      <div className="border-b border-border py-3 px-4 sticky top-0 bg-background z-10 flex items-center justify-between">
        <div className="flex items-baseline gap-3">
          <span className={`font-display text-lg ${isToday(currentDate) ? 'text-gold font-bold' : 'text-foreground'}`}>
            {format(currentDate, 'EEEE, MMMM d')}
          </span>
          <span className="font-mono text-xs text-muted-foreground/60">
            {format(currentDate, 'yyyy')}
          </span>
        </div>
        <span className="font-mono text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
          {dayEvents.length} event{dayEvents.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Time grid */}
      <div className="flex-1 overflow-y-auto relative">
        <div className="flex" style={{ minHeight: `${(END_HOUR - START_HOUR) * HOUR_HEIGHT}px` }}>
          {/* Time labels */}
          <div className="w-20 shrink-0 relative">
            {hours.map(h => (
              <div
                key={h}
                className="absolute w-full pr-3 text-right"
                style={{ top: `${(h - START_HOUR) * HOUR_HEIGHT}px` }}
              >
                <span className="font-mono text-xs text-muted-foreground/50">
                  {format(setHours(new Date(), h), 'h:mm a')}
                </span>
              </div>
            ))}
          </div>

          {/* Event column */}
          <div className="flex-1 relative border-l border-border">
            {/* Hour gridlines */}
            {hours.map(h => (
              <div
                key={h}
                className={`absolute w-full border-t border-border/50 cursor-pointer hover:bg-gold/5 transition-colors ${
                  dragOverSlot === `${h}` ? 'bg-gold/10' : ''
                }`}
                style={{ top: `${(h - START_HOUR) * HOUR_HEIGHT}px`, height: `${HOUR_HEIGHT}px` }}
                onClick={() => {
                  const d = new Date(currentDate)
                  d.setHours(h, 0, 0, 0)
                  onTimeSlotClick(d)
                }}
                onDragOver={e => { e.preventDefault(); setDragOverSlot(`${h}`) }}
                onDragLeave={() => setDragOverSlot(null)}
                onDrop={e => handleDrop(e, h)}
              />
            ))}

            {/* Events */}
            {dayEvents.map((event, i) => {
              const colorKey: EventColor = event.color ?? CATEGORY_TO_COLOR[event.category ?? 'other'] ?? 'zinc'
              const colors = EVENT_COLORS[colorKey]
              const priority = event.priority ? PRIORITY_CONFIG[event.priority] : null

              return (
                <div
                  key={event.id ?? event.sourceId ?? i}
                  className="absolute left-1 right-4 z-10"
                  style={getEventStyle(event)}
                >
                  <button
                    onClick={() => onEventClick(event)}
                    draggable
                    onDragStart={ev => {
                      ev.dataTransfer.setData('application/json', JSON.stringify(event))
                      ev.dataTransfer.effectAllowed = 'move'
                    }}
                    className={`w-full h-full rounded-lg border-l-3 ${colors.border} ${colors.bg} hover:brightness-110 text-left px-3 py-2 overflow-hidden transition-all cursor-pointer`}
                  >
                    <div className="flex items-center gap-2">
                      <p className={`text-xs font-mono ${colors.text} opacity-80`}>
                        {format(new Date(event.start), 'h:mm a')} – {format(new Date(event.end), 'h:mm a')}
                      </p>
                      {priority && (
                        <span className={`text-[10px] ${priority.color}`}>{priority.icon} {priority.label}</span>
                      )}
                    </div>
                    <p className={`text-sm font-medium ${colors.text} mt-0.5`}>{event.title}</p>
                    {event.location && <p className="text-xs text-muted-foreground mt-0.5">{event.location}</p>}
                    {event.description && <p className="text-[11px] text-muted-foreground/70 mt-1 line-clamp-2">{event.description}</p>}
                    {event.category && (
                      <span className="inline-block font-mono text-[9px] tracking-widest uppercase text-gold/50 border border-gold/20 rounded px-1.5 py-0.5 mt-1.5">
                        {event.category}
                      </span>
                    )}
                  </button>
                </div>
              )
            })}

            {/* Current time indicator */}
            {isToday(currentDate) && nowMin >= START_HOUR * 60 && (
              <div
                className="absolute left-0 right-0 z-20 pointer-events-none"
                style={{ top: `${nowTop}px` }}
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 -ml-1.5" />
                  <div className="flex-1 h-[2px] bg-red-500" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
