import { parseWithChrono } from './chrono'
import { parseWithGemini } from './gemini'
import { log } from '@/lib/logger'
import type { ParseResult } from '@/types'

export async function parseText(text: string): Promise<ParseResult> {
  // Try chrono first (free, fast, no API cost)
  const chronoResult = parseWithChrono(text)

  if (chronoResult.confidence === 'high' && chronoResult.events.length > 0) {
    return chronoResult
  }

  // Fall back to Gemini for ambiguous, multi-event, or complex inputs
  try {
    return await parseWithGemini(text)
  } catch (err) {
    log.apiError('parser/gemini', err)

    // If Gemini fails, return whatever chrono found (graceful degradation)
    if (chronoResult.events.length > 0) {
      return chronoResult
    }

    // Nothing worked — return empty result instead of throwing
    return {
      events: [],
      confidence: 'low',
      method: 'chrono',
      raw: text,
    }
  }
}
