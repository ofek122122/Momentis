import * as chrono from 'chrono-node'
import type { MomentiesEvent, ParseResult } from '@/types'

function extractTitle(raw: string, matchedText: string): string {
  return raw
    .replace(matchedText, '')
    .replace(/^[,;\s]+|[,;\s]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim() || 'New Event'
}

function scoreConfidence(results: chrono.ParsedResult[]): 'high' | 'medium' | 'low' {
  if (results.length === 0) return 'low'
  const allHaveTime = results.every(r => r.start.isCertain('hour'))
  if (allHaveTime) return 'high'
  const allHaveDate = results.every(r => r.start.isCertain('day'))
  return allHaveDate ? 'medium' : 'low'
}

export function parseWithChrono(text: string, referenceDate: Date = new Date()): ParseResult {
  const results = chrono.parse(text, referenceDate, { forwardDate: true })

  const events: MomentiesEvent[] = results.map(r => {
    const start = r.start.date()
    const end = r.end ? r.end.date() : new Date(start.getTime() + 60 * 60 * 1000)
    const title = extractTitle(text, r.text)
    return { title, start, end }
  })

  return {
    events,
    confidence: scoreConfidence(results),
    method: 'chrono',
    raw: text,
  }
}
