import { auth } from '@/lib/auth'
import { listUpcomingEvents } from '@/lib/google-calendar'
import { listAppleEvents, isAppleLinked } from '@/lib/apple-calendar'
import { CalendarGrid } from '@/components/calendar/CalendarGrid'
import { InputBar } from '@/components/input/InputBar'
import { KeyboardShortcuts } from '@/components/calendar/KeyboardShortcuts'
import { redirect } from 'next/navigation'
import type { MomentiesEvent } from '@/types'

export default async function CalendarPage() {
  const session = await auth()
  if (!session?.user) redirect('/login')

  let events: MomentiesEvent[] = []

  // Fetch Google Calendar events
  try {
    events = await listUpcomingEvents(session.user.id)
  } catch {
    // Google Calendar not yet linked or token expired
  }

  // Fetch Apple Calendar events if linked
  try {
    const appleLinked = await isAppleLinked(session.user.id)
    if (appleLinked) {
      const from = new Date('2020-01-01T00:00:00Z')
      const to = new Date()
      to.setFullYear(to.getFullYear() + 1)
      const appleEvents = await listAppleEvents(session.user.id, from, to)
      events = [...events, ...appleEvents]
    }
  } catch {
    // Apple Calendar not available
  }

  // Sort all events by start time
  events.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())

  return (
    <div className="flex flex-col h-full">
      {/* Calendar takes all available space */}
      <div className="flex-1 overflow-auto p-3 md:p-6">
        <CalendarGrid events={events} />
      </div>

      {/* Input bar — always at bottom, centered, prominent */}
      <InputBar existingEvents={events} />

      {/* Keyboard shortcuts overlay (press ?) */}
      <KeyboardShortcuts />
    </div>
  )
}
