'use client'

import { SearchBar } from './SearchBar'
import { NotificationBell } from './NotificationBell'
import type { CalendroEvent } from '@/types'

interface CalendarHeaderProps {
  events: CalendroEvent[]
}

export function CalendarHeader({ events }: CalendarHeaderProps) {
  function handleEventSelect(event: CalendroEvent) {
    // Scroll to or highlight the event — for now just log
    // In a full implementation, this would communicate with CalendarGrid
    console.log('Selected event:', event.title)
  }

  return (
    <div className="flex items-center justify-between px-4 md:px-6 pt-4 pb-2">
      <div className="flex items-center gap-2">
        <SearchBar events={events} onEventSelect={handleEventSelect} />
      </div>
      <div className="flex items-center gap-1">
        <NotificationBell events={events} />
      </div>
    </div>
  )
}
