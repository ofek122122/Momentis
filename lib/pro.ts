import { db } from '@/lib/db'
import { auth } from '@/lib/auth'

export type UserTier = 'free' | 'pro'

export interface ProLimits {
  aiParsesPerDay: number
  calendarConnections: number
  hasAnalytics: boolean
  hasThemes: boolean
  hasSharedCalendars: boolean
  hasSmartSuggestions: boolean
  hasTemplates: boolean
  hasFocusMode: boolean
}

export const TIER_LIMITS: Record<UserTier, ProLimits> = {
  free: {
    aiParsesPerDay: 3,
    calendarConnections: 1,
    hasAnalytics: false,
    hasThemes: false,
    hasSharedCalendars: false,
    hasSmartSuggestions: false,
    hasTemplates: false,
    hasFocusMode: false,
  },
  pro: {
    aiParsesPerDay: Infinity,
    calendarConnections: Infinity,
    hasAnalytics: true,
    hasThemes: true,
    hasSharedCalendars: true,
    hasSmartSuggestions: true,
    hasTemplates: true,
    hasFocusMode: true,
  },
}

export async function getUserTier(userId: string): Promise<UserTier> {
  try {
    // Use raw query approach since the Prisma client may not have `tier` generated yet
    const user = await (db.user.findUnique as Function)({
      where: { id: userId },
    }) as Record<string, unknown> | null
    if (user && typeof user.tier === 'string') {
      return user.tier as UserTier
    }
    return 'free'
  } catch {
    return 'free'
  }
}

export async function getCurrentUserTier(): Promise<UserTier> {
  const session = await auth()
  if (!session?.user?.id) return 'free'
  return getUserTier(session.user.id)
}

export function getTierLimits(tier: UserTier): ProLimits {
  return TIER_LIMITS[tier]
}

export async function upgradeToPro(userId: string): Promise<boolean> {
  try {
    await (db.user.update as Function)({
      where: { id: userId },
      data: { tier: 'pro' },
    })
    return true
  } catch {
    return false
  }
}
