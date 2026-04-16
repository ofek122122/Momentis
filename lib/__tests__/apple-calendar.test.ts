import { describe, it, expect } from 'vitest'
import { unfoldICS, parseICSDate } from '@/lib/apple-calendar'

describe('unfoldICS (Bug 4 fix)', () => {
  it('unfolds lines with CRLF + space', () => {
    const folded = 'SUMMARY:This is a very\r\n long summary'
    // RFC 5545: CRLF + space is the folding indicator, both CRLF and space are removed
    expect(unfoldICS(folded)).toBe('SUMMARY:This is a verylong summary')
  })

  it('unfolds lines with LF + space', () => {
    const folded = 'DESCRIPTION:Line one\n continues here'
    // RFC 5545: the space/tab after CRLF is the folding indicator, removed on unfold
    expect(unfoldICS(folded)).toBe('DESCRIPTION:Line onecontinues here')
  })

  it('unfolds lines with CRLF + tab', () => {
    const folded = 'LOCATION:Room\r\n\t123'
    expect(unfoldICS(folded)).toBe('LOCATION:Room123')
  })

  it('does not unfold normal line breaks', () => {
    const normal = 'SUMMARY:First\nDTSTART:20260410T090000Z'
    expect(unfoldICS(normal)).toBe(normal)
  })
})

describe('parseICSDate (Bug 8 fix)', () => {
  it('parses UTC date (ending with Z)', () => {
    const date = parseICSDate('20260410T090000Z')
    expect(date.getTime()).toBe(new Date(Date.UTC(2026, 3, 10, 9, 0, 0)).getTime())
  })

  it('parses date with US/Eastern TZID', () => {
    const date = parseICSDate('20260410T090000', 'US/Eastern')
    // US/Eastern is -5, so UTC should be 14:00
    expect(date.getTime()).toBe(new Date(Date.UTC(2026, 3, 10, 14, 0, 0)).getTime())
  })

  it('parses date with Europe/London TZID', () => {
    const date = parseICSDate('20260410T090000', 'Europe/London')
    // London is +0, so UTC stays 09:00
    expect(date.getTime()).toBe(new Date(Date.UTC(2026, 3, 10, 9, 0, 0)).getTime())
  })

  it('parses date with Asia/Tokyo TZID', () => {
    const date = parseICSDate('20260410T090000', 'Asia/Tokyo')
    // Tokyo is +9, so UTC should be 00:00
    expect(date.getTime()).toBe(new Date(Date.UTC(2026, 3, 10, 0, 0, 0)).getTime())
  })

  it('parses date-only format', () => {
    const date = parseICSDate('20260410')
    expect(date.getFullYear()).toBe(2026)
    expect(date.getMonth()).toBe(3) // April
    expect(date.getDate()).toBe(10)
  })
})
