'use server'

import { headers } from 'next/headers'
import { z } from 'zod'
import { log } from '@/lib/logger'
import { rateLimit } from '@/lib/rate-limit'

const newsletterSchema = z.object({
  email: z.string().trim().email('Please enter a valid email').max(320),
  source: z.string().max(64).optional(),
  // Honeypot
  fullname: z.string().max(0).optional(),
})

export type NewsletterResult = { ok: true } | { ok: false; error: string }

export async function subscribeToNewsletter(
  formData: FormData
): Promise<NewsletterResult> {
  const raw = {
    email: formData.get('email')?.toString() ?? '',
    source: formData.get('source')?.toString() ?? 'footer',
    fullname: formData.get('fullname')?.toString() ?? '',
  }

  if (raw.fullname && raw.fullname.length > 0) {
    log.info('newsletter.honeypot_triggered', { source: raw.source })
    return { ok: true }
  }

  const headerList = await headers()
  const ip =
    headerList.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headerList.get('x-real-ip') ||
    'unknown'
  const key = `newsletter:${ip}`
  const limit = rateLimit(key, 5, 60 * 60 * 1000)
  if (!limit.allowed) {
    return { ok: false, error: 'Too many submissions. Try again later.' }
  }

  const parsed = newsletterSchema.safeParse(raw)
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0].message }
  }

  log.info('newsletter.subscribed', {
    email: parsed.data.email,
    source: parsed.data.source,
  })

  return { ok: true }
}
