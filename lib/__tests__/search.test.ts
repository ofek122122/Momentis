import { describe, it, expect } from 'vitest'
import type { CalendroEvent } from '@/types'

// Test the client-side search logic (same as SearchBar uses)
function searchEvents(events: CalendroEvent[], query: string): CalendroEvent[] {
  if (!query.trim()) return []
  const lower = query.toLowerCase()
  return events.filter(e =>
    e.title.toLowerCase().includes(lower) ||
    (e.description?.toLowerCase().includes(lower) ?? false) ||
    (e.location?.toLowerCase().includes(lower) ?? false)
  )
}

const events: CalendroEvent[] = [
  { title: 'Team Standup', start: new Date('2026-04-10T09:00:00'), end: new Date('2026-04-10T09:30:00'), location: 'Zoom', category: 'work' },
  { title: 'Gym Session', start: new Date('2026-04-10T07:00:00'), end: new Date('2026-04-10T08:00:00'), category: 'health' },
  { title: 'Lunch with Sarah', start: new Date('2026-04-10T12:00:00'), end: new Date('2026-04-10T13:00:00'), location: 'Cafe Milano', category: 'social' },
  { title: 'Project Review', start: new Date('2026-04-10T14:00:00'), end: new Date('2026-04-10T15:00:00'), description: 'Q2 roadmap review with team', category: 'work' },
]

describe('searchEvents', () => {
  it('finds events by title', () => {
    const results = searchEvents(events, 'gym')
    expect(results).toHaveLength(1)
    expect(results[0].title).toBe('Gym Session')
  })

  it('finds events by location', () => {
    const results = searchEvents(events, 'zoom')
    expect(results).toHaveLength(1)
    expect(results[0].title).toBe('Team Standup')
  })

  it('finds events by description', () => {
    const results = searchEvents(events, 'roadmap')
    expect(results).toHaveLength(1)
    expect(results[0].title).toBe('Project Review')
  })

  it('returns empty for no matches', () => {
    const results = searchEvents(events, 'xyznotfound')
    expect(results).toHaveLength(0)
  })

  it('returns empty for empty query', () => {
    const results = searchEvents(events, '')
    expect(results).toHaveLength(0)
  })

  it('is case-insensitive', () => {
    const results = searchEvents(events, 'STANDUP')
    expect(results).toHaveLength(1)
  })
})
