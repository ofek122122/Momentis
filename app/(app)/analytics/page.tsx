import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { listUpcomingEvents } from '@/lib/google-calendar'
import { getUserTier } from '@/lib/pro'
import { AnalyticsDashboard } from '@/components/calendar/AnalyticsDashboard'
import { HabitTracker } from '@/components/calendar/HabitTracker'
import { TimeZoneBuddy } from '@/components/calendar/TimeZoneBuddy'
import { UpgradePrompt } from '@/components/ui/pro-badge'
import type { MomentiesEvent } from '@/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Analytics',
}

export default async function AnalyticsPage() {
  const session = await auth()
  if (!session?.user) redirect('/login')

  const tier = await getUserTier(session.user.id)

  let events: MomentiesEvent[] = []
  try {
    events = await listUpcomingEvents(session.user.id)
  } catch {
    // continue with empty events
  }

  return (
    <div className="flex-1 overflow-auto p-4 md:p-6 max-w-4xl mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight font-display">Analytics</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Insights into how you spend your time.
        </p>
      </div>

      <div className="space-y-6">
        {tier === 'pro' ? (
          <AnalyticsDashboard events={events} />
        ) : (
          <UpgradePrompt feature="Calendar Analytics" />
        )}

        <div className="grid md:grid-cols-2 gap-4">
          <HabitTracker />
          <TimeZoneBuddy />
        </div>
      </div>
    </div>
  )
}
