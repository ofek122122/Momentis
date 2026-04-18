'use server'

import { headers } from 'next/headers'
import { z } from 'zod'
import { log } from '@/lib/logger'
import { rateLimit } from '@/lib/rate-limit'

const SUBJECTS = [
  'General question',
  'Support',
  'Sales / Enterprise',
  'Press',
  'Partnership',
  'Something else',
] as const

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name').max(120),
  email: z.string().trim().email('Please enter a valid email').max(320),
  subject: z.enum(SUBJECTS),
  message: z
    .string()
    .trim()
    .min(10, 'Message should be at least 10 characters')
    .max(4000, 'Message cannot exceed 4000 characters'),
  // Honeypot — real users leave this empty. Bots fill it.
  website: z.string().max(0).optional(),
})

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string; field?: keyof z.infer<typeof contactSchema> }

export async function submitContact(formData: FormData): Promise<ContactResult> {
  const raw = {
    name: formData.get('name')?.toString() ?? '',
    email: formData.get('email')?.toString() ?? '',
    subject: formData.get('subject')?.toString() ?? '',
    message: formData.get('message')?.toString() ?? '',
    website: formData.get('website')?.toString() ?? '',
  }

  // Honeypot check — silently pretend to succeed for bots so they don't retry.
  if (raw.website && raw.website.length > 0) {
    log.info('contact.honeypot_triggered', { email: raw.email })
    return { ok: true }
  }

  // Rate limit — 3 submissions per hour per IP (best-effort via headers).
  const headerList = await headers()
  const ip =
    headerList.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headerList.get('x-real-ip') ||
    'unknown'
  const key = `contact:${ip}`
  const limit = rateLimit(key, 3, 60 * 60 * 1000)
  if (!limit.allowed) {
    log.warn('contact.rate_limited', { ip, retryAfterMs: limit.retryAfterMs })
    return {
      ok: false,
      error: 'Too many submissions. Please try again in an hour.',
    }
  }

  const parsed = contactSchema.safeParse(raw)
  if (!parsed.success) {
    const issue = parsed.error.issues[0]
    const field = issue.path[0] as keyof z.infer<typeof contactSchema>
    return { ok: false, error: issue.message, field }
  }

  // In production this would persist to a table and optionally email the team.
  // For now, structured log is enough to demonstrate the pipeline.
  log.info('contact.submitted', {
    name: parsed.data.name,
    email: parsed.data.email,
    subject: parsed.data.subject,
    messageLength: parsed.data.message.length,
  })

  return { ok: true }
}
