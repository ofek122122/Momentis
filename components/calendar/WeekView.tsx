'use client'

import { useState, useMemo, useCallback } from 'react'
import {
  startOfWeek, endOfWeek, eachDayOfInterval,
  format, isSameDay, isToday, setHours,
} from 'date-fns'
import type { CalendroEvent, EventColor } from '@/types'
import { EVENT_COLORS, CATEGORY_TO_COLOR } from '@/types'

const HOUR_HEIGHT = 60 // px per hour
const START_HOUR = 6
const END_HOUR = 24

interface WeekViewProps {
  events: CalendroEvent[]
  currentDate: Date
  onEventClick: (event: CalendroEvent) => void
  onTimeSlotClick: (date: Date) => void
  onDropEvent: (event: CalendroEvent, targetDate: Date) => void
}

export function WeekView({ events, currentDate, onEventClick, onTimeSlotClick, onDropEvent }: WeekViewProps) {
  const [dragOverSlot, setDragOverSlot] = useState<string | null>(null)

  const weekDays = useMemo(() => eachDayOfInterval({
    start: startOfWeek(currentDate),
    end: endOfWeek(currentDate),
  }), [currentDate])

  const hours = useMemo(() => {
    const hrs: number[] = []
    for (let h = START_HOUR; h < END_HOUR; h++) hrs.push(h)
    return hrs
  }, [])

  const eventsOnDay = useCallback(
    (day: Date) => events.filter(e => isSameDay(new Date(e.start), day)),
    [events]
  )

  function getEventStyle(event: CalendroEvent): React.CSSProperties {
    const start = new Date(event.start)
    const end = new Date(event.end)
    const startMin = start.getHours() * 60 + start.getMinutes()
    const endMin = end.getHours() * 60 + end.getMinutes()
    const top = ((startMin - START_HOUR * 60) / 60) * HOUR_HEIGHT
    const height = Math.max(((endMin - startMin) / 60) * HOUR_HEIGHT, 20)
    return { top: `${top}px`, height: `${height}px` }
  }

  // Current time indicator
  const now = new Date()
  const nowMin = now.getHours() * 60 + now.getMinutes()
  const nowTop = ((nowMin - START_HOUR * 60) / 60) * HOUR_HEIGHT
  const isThisWeek = weekDays.some(d => isSameDay(d, now))

  function handleDrop(e: React.DragEvent, day: Date, hour: number) {
    e.preventDefault()
    setDragOverSlot(null)
    const data = e.dataTransfer.getData('application/json')
    if (!data) return
    try {
      const event: CalendroEvent = JSON.parse(data)
      const target = new Date(day)
      target.setHours(hour, 0, 0, 0)
      onDropEvent(event, target)
    } catch { /* invalid data */ }
  }

  return (
    <div className="flex flex-col h-full" role="grid" aria-label="Week view">
      {/* Day headers */}
      <div className="flex border-b border-border sticky top-0 bg-background z-10">
        <div className="w-16 shrink-0" /> {/* Time column spacer */}
        {weekDays.map(day => (
          <div
            key={day.toISOString()}
            className={`flex-1 text-center py-2 border-l border-border ${isToday(day) ? 'bg-gold/5' : ''}`}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/60 block">
              {format(day, 'EEE')}
            </span>
            <span className={`font-mono text-sm ${isToday(day) ? 'text-gold font-bold' : 'text-foreground'}`}>
              {format(day, 'd')}
            </span>
          </div>
        ))}
      </div>

      {/* Time grid */}
      <div className="flex-1 overflow-y-auto relative">
        <div className="flex" style={{ minHeight: `${(END_HOUR - START_HOUR) * HOUR_HEIGHT}px` }}>
          {/* Time labels */}
          <div className="w-16 shrink-0 relative">
            {hours.map(h => (
              <div
                key={h}
                className="absolute w-full pr-2 text-right"
                style={{ top: `${(h - START_HOUR) * HOUR_HEIGHT}px` }}
              >
                <span className="font-mono text-[10px] text-muted-foreground/50">
                  {format(setHours(new Date(), h), 'ha')}
                </span>
              </div>
            ))}
          </div>

          {/* Day columns */}
          {weekDays.map(day => {
            const dayEvents = eventsOnDay(day)
            return (
              <div
                key={day.toISOString()}
                className={`flex-1 border-l border-border relative ${isToday(day) ? 'bg-gold/3' : ''}`}
              >
                {/* Hour gridlines */}
                {hours.map(h => (
                  <div
                    key={h}
                    className={`absolute w-full border-t border-border/50 cursor-pointer hover:bg-gold/5 transition-colors ${
                      dragOverSlot === `${day.toISOString()}-${h}` ? 'bg-gold/10' : ''
                    }`}
                    style={{ top: `${(h - START_HOUR) * HOUR_HEIGHT}px`, height: `${HOUR_HEIGHT}px` }}
                    onClick={() => {
                      const d = new Date(day)
                      d.setHours(h, 0, 0, 0)
                      onTimeSlotClick(d)
                    }}
                    onDragOver={e => { e.preventDefault(); setDragOverSlot(`${day.toISOString()}-${h}`) }}
                    onDragLeave={() => setDragOverSlot(null)}
                    onDrop={e => handleDrop(e, day, h)}
                  />
                ))}

                {/* Events */}
                {dayEvents.map((event, i) => {
                  const colorKey: EventColor = event.color ?? CATEGORY_TO_COLOR[event.category ?? 'other'] ?? 'zinc'
                  const colors = EVENT_COLORS[colorKey]
                  return (
                    <div
                      key={event.id ?? event.sourceId ?? i}
                      className="absolute left-0.5 right-0.5 z-10"
                      style={getEventStyle(event)}
                    >
                      <button
                        onClick={() => onEventClick(event)}
                        draggable
                        onDragStart={ev => {
                          ev.dataTransfer.setData('application/json', JSON.stringify(event))
                          ev.dataTransfer.effectAllowed = 'move'
                        }}
                        className={`w-full h-full rounded-md border-l-2 ${colors.border} ${colors.bg} hover:brightness-110 text-left px-1.5 py-0.5 overflow-hidden transition-colors cursor-pointer`}
                      >
                        <p className={`text-[10px] font-mono ${colors.text} opacity-70`}>{format(new Date(event.start), 'h:mm a')}</p>
                        <p className={`text-xs font-medium ${colors.text} truncate`}>{event.title}</p>
                        {event.location && <p className="text-[9px] text-muted-foreground truncate">{event.location}</p>}
                      </button>
                    </div>
                  )
                })}

                {/* Current time indicator */}
                {isToday(day) && isThisWeek && nowMin >= START_HOUR * 60 && (
                  <div
                    className="absolute left-0 right-0 z-20 pointer-events-none"
                    style={{ top: `${nowTop}px` }}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-500 -ml-1" />
                      <div className="flex-1 h-px bg-red-500" />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
