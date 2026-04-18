'use client'

import { useMemo } from 'react'
import { differenceInMinutes, format, startOfWeek, getDay, isThisWeek, isThisMonth } from 'date-fns'
import { BarChart3, Clock, TrendingUp, Flame, Calendar } from 'lucide-react'
import type { MomentiesEvent } from '@/types'

interface AnalyticsDashboardProps {
  events: MomentiesEvent[]
}

export function AnalyticsDashboard({ events }: AnalyticsDashboardProps) {
  const stats = useMemo(() => {
    const thisWeekEvents = events.filter(e => isThisWeek(new Date(e.start)))
    const thisMonthEvents = events.filter(e => isThisMonth(new Date(e.start)))

    // Category breakdown
    const categoryMap: Record<string, number> = {}
    for (const e of thisMonthEvents) {
      const cat = e.category ?? 'other'
      const mins = differenceInMinutes(new Date(e.end), new Date(e.start))
      categoryMap[cat] = (categoryMap[cat] ?? 0) + mins
    }

    // Busiest day
    const dayMap: Record<number, number> = {}
    for (const e of thisMonthEvents) {
      const day = getDay(new Date(e.start))
      dayMap[day] = (dayMap[day] ?? 0) + 1
    }
    const busiestDay = Object.entries(dayMap).sort(([, a], [, b]) => b - a)[0]
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    // Total hours this week
    const weekHours = thisWeekEvents.reduce((acc, e) => {
      return acc + differenceInMinutes(new Date(e.end), new Date(e.start))
    }, 0) / 60

    // Focus time (hours without meetings, 9-5)
    const workHours = 8
    const focusHours = Math.max(0, workHours * 5 - weekHours)

    // Productivity score (events completed / events total)
    const pastEvents = thisWeekEvents.filter(e => new Date(e.end) < new Date())
    const score = thisWeekEvents.length > 0
      ? Math.round((pastEvents.length / thisWeekEvents.length) * 100)
      : 100

    return {
      weekEvents: thisWeekEvents.length,
      monthEvents: thisMonthEvents.length,
      weekHours: Math.round(weekHours * 10) / 10,
      focusHours: Math.round(focusHours * 10) / 10,
      busiestDay: busiestDay ? dayNames[+busiestDay[0]] : 'N/A',
      score,
      categoryMap,
    }
  }, [events])

  const categoryColors: Record<string, string> = {
    work: 'bg-blue-500',
    personal: 'bg-violet-500',
    health: 'bg-emerald-500',
    education: 'bg-amber-500',
    social: 'bg-pink-500',
    other: 'bg-zinc-500',
  }

  const totalCategoryMins = Object.values(stats.categoryMap).reduce((a, b) => a + b, 0)

  return (
    <div className="space-y-4">
      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard icon={Calendar} label="This week" value={`${stats.weekEvents} events`} />
        <StatCard icon={Clock} label="Scheduled" value={`${stats.weekHours}h`} />
        <StatCard icon={TrendingUp} label="Focus time" value={`${stats.focusHours}h`} />
        <StatCard icon={Flame} label="Productivity" value={`${stats.score}%`} accent />
      </div>

      {/* Category breakdown */}
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 className="h-4 w-4 text-gold" />
          <h3 className="text-sm font-medium text-foreground">Time by category</h3>
          <span className="text-xs text-muted-foreground ml-auto font-mono">This month</span>
        </div>

        {totalCategoryMins === 0 ? (
          <p className="text-xs text-muted-foreground text-center py-4">No data yet this month</p>
        ) : (
          <div className="space-y-2.5">
            {Object.entries(stats.categoryMap)
              .sort(([, a], [, b]) => b - a)
              .map(([category, minutes]) => {
                const pct = Math.round((minutes / totalCategoryMins) * 100)
                const hours = Math.round(minutes / 60 * 10) / 10
                return (
                  <div key={category}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs capitalize text-foreground/80">{category}</span>
                      <span className="text-[10px] font-mono text-muted-foreground">{hours}h · {pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full ${categoryColors[category] ?? 'bg-zinc-500'} transition-all duration-500`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                )
              })}
          </div>
        )}
      </div>

      {/* Busiest day */}
      <div className="rounded-xl border border-border bg-card p-4">
        <p className="text-xs text-muted-foreground">Busiest day this month</p>
        <p className="text-lg font-display font-bold text-foreground mt-1">{stats.busiestDay}</p>
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, accent }: {
  icon: typeof Clock
  label: string
  value: string
  accent?: boolean
}) {
  return (
    <div className={`rounded-xl border bg-card p-4 ${accent ? 'border-gold/30' : 'border-border'}`}>
      <div className="flex items-center justify-between mb-2">
        <Icon className={`h-4 w-4 ${accent ? 'text-gold' : 'text-muted-foreground'}`} />
      </div>
      <p className={`text-xl font-bold font-mono ${accent ? 'text-gold' : 'text-foreground'}`}>{value}</p>
      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{label}</p>
    </div>
  )
}
