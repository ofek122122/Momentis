'use client'

import { useState, useMemo, useCallback, useEffect, useTransition } from 'react'
import {
  startOfMonth, endOfMonth, startOfWeek, endOfWeek,
  eachDayOfInterval, format, isSameMonth, isToday,
  isSameDay, addMonths, subMonths, addWeeks, subWeeks,
  addDays, subDays, differenceInMilliseconds,
} from 'date-fns'
import { ChevronLeft, ChevronRight, CalendarPlus, Plus } from 'lucide-react'
import { EventChip } from './EventChip'
import { EventDetailDialog } from './EventDetailDialog'
import { NewEventDialog } from './NewEventDialog'
import { WeekView } from './WeekView'
import { DayView } from './DayView'
import { ViewSwitcher, type CalendarViewType } from './ViewSwitcher'
import { SearchBar } from './SearchBar'
import { NotificationBell } from './NotificationBell'
import type { CalendroEvent } from '@/types'
import { useRouter } from 'next/navigation'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

interface CalendarGridProps {
  events: CalendroEvent[]
  defaultView?: CalendarViewType
}

export function CalendarGrid({ events: serverEvents, defaultView = 'month' }: CalendarGridProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState<CalendarViewType>(defaultView)
  const [selectedEvent, setSelectedEvent] = useState<CalendroEvent | null>(null)
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [showNewDialog, setShowNewDialog] = useState(false)
  const [newEventDate, setNewEventDate] = useState<Date | undefined>()
  const [dragOverDay, setDragOverDay] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [optimisticEvents, setOptimisticEvents] = useState<CalendroEvent[]>([])
  const [removedIds, setRemovedIds] = useState<Set<string>>(new Set())
  const [isRefreshing, startTransition] = useTransition()
  const router = useRouter()

  // Clear optimistic state when server data arrives after refresh
  useEffect(() => {
    if (!isRefreshing) {
      setOptimisticEvents([])
      setRemovedIds(new Set())
    }
  }, [isRefreshing, serverEvents])

  // Merge server events with optimistic state
  const events = [
    ...serverEvents.filter(e => !removedIds.has(e.id ?? e.sourceId ?? '')),
    ...optimisticEvents,
  ]

  // Month view days
  const monthDays = useMemo(() => eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentDate)),
    end: endOfWeek(endOfMonth(currentDate)),
  }), [currentDate])

  const eventsOn = useCallback(
    (day: Date) => events.filter(e => isSameDay(new Date(e.start), day)),
    [events]
  )

  const isEmpty = events.length === 0

  // Keyboard shortcuts
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Don't trigger if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) return

      switch (e.key.toLowerCase()) {
        case 'm':
          setView('month')
          break
        case 'w':
          setView('week')
          break
        case 'd':
          setView('day')
          break
        case 't':
          setCurrentDate(new Date())
          break
        case 'arrowleft':
          navigatePrev()
          break
        case 'arrowright':
          navigateNext()
          break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view])

  function navigatePrev() {
    setCurrentDate(prev => {
      switch (view) {
        case 'month': return subMonths(prev, 1)
        case 'week': return subWeeks(prev, 1)
        case 'day': return subDays(prev, 1)
      }
    })
  }

  function navigateNext() {
    setCurrentDate(prev => {
      switch (view) {
        case 'month': return addMonths(prev, 1)
        case 'week': return addWeeks(prev, 1)
        case 'day': return addDays(prev, 1)
      }
    })
  }

  function getHeaderTitle(): string {
    switch (view) {
      case 'month':
        return format(currentDate, 'MMMM')
      case 'week': {
        const start = startOfWeek(currentDate)
        const end = endOfWeek(currentDate)
        return `${format(start, 'MMM d')} – ${format(end, 'MMM d')}`
      }
      case 'day':
        return format(currentDate, 'EEEE, MMM d')
    }
  }

  function handleEventClick(event: CalendroEvent) {
    setSelectedEvent(event)
    setShowEditDialog(true)
  }

  function handleDayClick(day: Date) {
    setNewEventDate(day)
    setShowNewDialog(true)
  }

  function handleTimeSlotClick(date: Date) {
    setNewEventDate(date)
    setShowNewDialog(true)
  }

  function refreshEvents() {
    startTransition(() => {
      router.refresh()
    })
  }

  async function handleSaveEvent(updated: CalendroEvent) {
    if (busy || isRefreshing) return
    const id = updated.id ?? updated.sourceId
    if (!id) return

    // Optimistic update: replace the event in optimistic state
    setRemovedIds(prev => new Set(prev).add(id))
    setOptimisticEvents(prev => [...prev, { ...updated }])

    setBusy(true)
    try {
      await fetch('/api/events', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          title: updated.title,
          start: updated.start,
          end: updated.end,
          location: updated.location,
          description: updated.description,
        }),
      })
      refreshEvents()
    } finally {
      setBusy(false)
    }
  }

  async function handleDeleteEvent(eventId: string) {
    if (busy || isRefreshing) return

    // Optimistic: hide the event immediately
    setRemovedIds(prev => new Set(prev).add(eventId))

    setBusy(true)
    try {
      await fetch(`/api/events?id=${eventId}`, { method: 'DELETE' })
      refreshEvents()
    } finally {
      setBusy(false)
    }
  }

  async function handleCreateEvent(event: CalendroEvent) {
    if (busy || isRefreshing) return
    setBusy(true)
    const tempId = `temp-${Date.now()}`
    setOptimisticEvents(prev => [...prev, { ...event, id: tempId }])
    try {
      await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
      })
      refreshEvents()
    } finally {
      setBusy(false)
    }
  }

  async function handleDropEvent(e: React.DragEvent, targetDay: Date) {
    e.preventDefault()
    setDragOverDay(null)
    if (busy || isRefreshing) return

    const data = e.dataTransfer.getData('application/json')
    if (!data) return

    let event: CalendroEvent
    try {
      event = JSON.parse(data)
    } catch {
      return
    }

    const id = event.id ?? event.sourceId
    if (!id) return

    const oldStart = new Date(event.start)
    const oldEnd = new Date(event.end)
    const duration = differenceInMilliseconds(oldEnd, oldStart)

    const newStart = new Date(targetDay)
    newStart.setHours(oldStart.getHours(), oldStart.getMinutes(), 0, 0)
    const newEnd = new Date(newStart.getTime() + duration)

    // Optimistic: move the event immediately
    setRemovedIds(prev => new Set(prev).add(id))
    setOptimisticEvents(prev => [...prev, { ...event, start: newStart, end: newEnd }])

    setBusy(true)
    try {
      await fetch('/api/events', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, start: newStart, end: newEnd }),
      })
      refreshEvents()
    } finally {
      setBusy(false)
    }
  }

  async function handleDropEventFromView(event: CalendroEvent, targetDate: Date) {
    if (busy || isRefreshing) return
    const id = event.id ?? event.sourceId
    if (!id) return

    const oldStart = new Date(event.start)
    const oldEnd = new Date(event.end)
    const duration = differenceInMilliseconds(oldEnd, oldStart)

    const newEnd = new Date(targetDate.getTime() + duration)

    // Optimistic: move the event immediately
    setRemovedIds(prev => new Set(prev).add(id))
    setOptimisticEvents(prev => [...prev, { ...event, start: targetDate, end: newEnd }])

    setBusy(true)
    try {
      await fetch('/api/events', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, start: targetDate, end: newEnd }),
      })
      refreshEvents()
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="flex flex-col h-full" role="region" aria-label="Calendar">
      {/* Header row 1: Title + Search + Notifications */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground">
            {getHeaderTitle()}
          </h2>
          <p className="font-mono text-xs text-gold/60 tracking-widest mt-0.5">
            {format(currentDate, 'yyyy')}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <SearchBar events={events} onEventSelect={handleEventClick} />
          <NotificationBell events={events} />
        </div>
      </div>

      {/* Header row 2: View switcher + Nav + Add event */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <ViewSwitcher view={view} onViewChange={setView} />
        <div className="flex items-center gap-1" role="group" aria-label="Calendar navigation">
          <button
            onClick={() => { setNewEventDate(undefined); setShowNewDialog(true) }}
            className="mr-1 px-3 py-1.5 rounded-lg text-xs font-mono text-gold border border-gold/30 hover:bg-gold/10 transition-all flex items-center gap-1.5 press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
          >
            <Plus className="h-3 w-3" />
            <span className="hidden sm:inline">Add event</span>
          </button>
          <button
            onClick={navigatePrev}
            aria-label="Previous"
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="px-3 py-1.5 rounded-md text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all tracking-wider uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
          >
            Today
          </button>
          <button
            onClick={navigateNext}
            aria-label="Next"
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Calendar views */}
      {view === 'month' && (
        <>
          {/* Day headers */}
          <div className="grid grid-cols-7 mb-1" role="row">
            {DAYS.map(d => (
              <div key={d} className="py-1.5 text-center" role="columnheader">
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/60">
                  {d}
                </span>
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-7 flex-1 rounded-lg overflow-hidden border border-border" role="grid">
            {monthDays.map(day => {
              const dayEvents = eventsOn(day)
              const inMonth = isSameMonth(day, currentDate)
              const todayFlag = isToday(day)
              const dayKey = day.toISOString()
              const isDragOver = dragOverDay === dayKey

              return (
                <div
                  key={dayKey}
                  role="gridcell"
                  aria-label={`${format(day, 'EEEE, MMMM d')}${dayEvents.length > 0 ? `, ${dayEvents.length} event${dayEvents.length > 1 ? 's' : ''}` : ''}`}
                  className={`calendar-day border-r border-b border-border p-1.5 min-h-[5.5rem] transition-colors ${
                    !inMonth ? 'opacity-30' : ''
                  } ${isDragOver ? 'bg-gold/10' : ''}`}
                  onDoubleClick={() => handleDayClick(day)}
                  onDragOver={e => { e.preventDefault(); setDragOverDay(dayKey) }}
                  onDragLeave={() => setDragOverDay(null)}
                  onDrop={e => handleDropEvent(e, day)}
                >
                  <div className="mb-1 flex justify-start">
                    <button
                      onClick={() => { setCurrentDate(day); setView('day') }}
                      className={`
                        font-mono text-xs w-5 h-5 flex items-center justify-center rounded-full
                        hover:bg-gold/20 transition-colors
                        ${todayFlag ? 'bg-gold text-[#0c0c0f] font-bold' : 'text-muted-foreground'}
                      `}
                    >
                      {format(day, 'd')}
                    </button>
                  </div>

                  {/* Full chips on desktop */}
                  <div className="space-y-0.5 hidden sm:block">
                    {dayEvents.slice(0, 3).map((e, i) => (
                      <EventChip
                        key={e.id ?? e.sourceId ?? i}
                        event={e}
                        onClick={() => handleEventClick(e)}
                        draggable
                        onDragStart={ev => {
                          ev.dataTransfer.setData('application/json', JSON.stringify(e))
                          ev.dataTransfer.effectAllowed = 'move'
                        }}
                      />
                    ))}
                    {dayEvents.length > 3 && (
                      <p className="font-mono text-[9px] text-gold/50 pl-0.5">
                        +{dayEvents.length - 3} more
                      </p>
                    )}
                  </div>
                  {/* Dots on mobile */}
                  {dayEvents.length > 0 && (
                    <div className="flex gap-0.5 flex-wrap sm:hidden">
                      {dayEvents.slice(0, 4).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                      ))}
                      {dayEvents.length > 4 && (
                        <span className="text-[8px] text-gold/40 font-mono">+{dayEvents.length - 4}</span>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </>
      )}

      {view === 'week' && (
        <div className="flex-1 rounded-lg overflow-hidden border border-border">
          <WeekView
            events={events}
            currentDate={currentDate}
            onEventClick={handleEventClick}
            onTimeSlotClick={handleTimeSlotClick}
            onDropEvent={handleDropEventFromView}
          />
        </div>
      )}

      {view === 'day' && (
        <div className="flex-1 rounded-lg overflow-hidden border border-border">
          <DayView
            events={events}
            currentDate={currentDate}
            onEventClick={handleEventClick}
            onTimeSlotClick={handleTimeSlotClick}
            onDropEvent={handleDropEventFromView}
          />
        </div>
      )}

      {/* Empty state */}
      {isEmpty && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center space-y-3 animate-fade-up">
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto">
              <CalendarPlus className="h-8 w-8 text-gold/40" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-foreground/60">
                Your calendar is empty
              </p>
              <p className="text-sm text-muted-foreground mt-1 max-w-xs mx-auto">
                Type an event below, use voice, snap a photo, or click &ldquo;Add event&rdquo;.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Edit dialog */}
      <EventDetailDialog
        event={selectedEvent}
        open={showEditDialog}
        onClose={() => { setShowEditDialog(false); setSelectedEvent(null) }}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent}
      />

      {/* New event dialog */}
      <NewEventDialog
        open={showNewDialog}
        onClose={() => setShowNewDialog(false)}
        onCreate={handleCreateEvent}
        defaultDate={newEventDate}
      />
    </div>
  )
}
