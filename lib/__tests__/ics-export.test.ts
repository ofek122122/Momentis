import { describe, it, expect } from 'vitest'
import { eventsToICS, parseICSFeed } from '@/lib/ics-export'
import type { MomentiesEvent } from '@/types'

describe('eventsToICS', () => {
  it('generates valid ICS content', () => {
    const events: MomentiesEvent[] = [{
      id: 'test-1',
      title: 'Team Meeting',
      start: new Date('2026-04-10T10:00:00Z'),
      end: new Date('2026-04-10T11:00:00Z'),
      location: 'Room 42',
    }]

    const ics = eventsToICS(events)
    expect(ics).toContain('BEGIN:VCALENDAR')
    expect(ics).toContain('END:VCALENDAR')
    expect(ics).toContain('BEGIN:VEVENT')
    expect(ics).toContain('SUMMARY:Team Meeting')
    expect(ics).toContain('LOCATION:Room 42')
  })

  it('escapes special characters', () => {
    const events: MomentiesEvent[] = [{
      title: 'Meet; discuss, plan',
      start: new Date('2026-04-10T10:00:00Z'),
      end: new Date('2026-04-10T11:00:00Z'),
    }]

    const ics = eventsToICS(events)
    expect(ics).toContain('SUMMARY:Meet\\; discuss\\, plan')
  })
})

describe('parseICSFeed', () => {
  it('parses ICS content into events', () => {
    const ics = [
      'BEGIN:VCALENDAR',
      'BEGIN:VEVENT',
      'UID:test-1',
      'DTSTART:20260410T100000Z',
      'DTEND:20260410T110000Z',
      'SUMMARY:Parsed Event',
      'LOCATION:Office',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n')

    const events = parseICSFeed(ics)
    expect(events).toHaveLength(1)
    expect(events[0].title).toBe('Parsed Event')
    expect(events[0].location).toBe('Office')
  })

  it('handles multiple events', () => {
    const ics = [
      'BEGIN:VCALENDAR',
      'BEGIN:VEVENT',
      'DTSTART:20260410T090000Z',
      'DTEND:20260410T100000Z',
      'SUMMARY:Event 1',
      'END:VEVENT',
      'BEGIN:VEVENT',
      'DTSTART:20260410T110000Z',
      'DTEND:20260410T120000Z',
      'SUMMARY:Event 2',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n')

    const events = parseICSFeed(ics)
    expect(events).toHaveLength(2)
  })

  it('defaults to 1 hour duration when no end time', () => {
    const ics = [
      'BEGIN:VCALENDAR',
      'BEGIN:VEVENT',
      'DTSTART:20260410T090000Z',
      'SUMMARY:No End',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n')

    const events = parseICSFeed(ics)
    expect(events[0].end.getTime() - events[0].start.getTime()).toBe(3600000)
  })
})
