'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { Bell, BellRing, X, Clock, CheckCheck } from 'lucide-react'
import { format, differenceInMinutes, isBefore, addMinutes } from 'date-fns'
import type { CalendroEvent } from '@/types'

interface Notification {
  id: string
  event: CalendroEvent
  type: 'upcoming' | 'now' | 'reminder'
  message: string
  time: Date
  read: boolean
}

interface NotificationBellProps {
  events: CalendroEvent[]
  defaultReminderMinutes?: number
}

export function NotificationBell({ events, defaultReminderMinutes = 30 }: NotificationBellProps) {
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [dismissed, setDismissed] = useState<Set<string>>(new Set())

  // Generate notifications for upcoming events
  const generateNotifications = useCallback(() => {
    const now = new Date()
    const newNotifs: Notification[] = []

    for (const event of events) {
      const start = new Date(event.start)
      const minutesUntil = differenceInMinutes(start, now)
      const eventKey = event.id ?? event.sourceId ?? event.title

      // Skip past events
      if (isBefore(start, addMinutes(now, -5))) continue

      // Happening now (within 5 minutes)
      if (minutesUntil >= -5 && minutesUntil <= 0) {
        const id = `now-${eventKey}`
        if (!dismissed.has(id)) {
          newNotifs.push({
            id,
            event,
            type: 'now',
            message: `${event.title} is happening now`,
            time: start,
            read: false,
          })
        }
      }

      // Reminder (configurable minutes before)
      if (minutesUntil > 0 && minutesUntil <= defaultReminderMinutes) {
        const id = `reminder-${eventKey}`
        if (!dismissed.has(id)) {
          newNotifs.push({
            id,
            event,
            type: 'reminder',
            message: `${event.title} in ${minutesUntil} minute${minutesUntil !== 1 ? 's' : ''}`,
            time: start,
            read: false,
          })
        }
      }

      // Upcoming today (within 2 hours)
      if (minutesUntil > defaultReminderMinutes && minutesUntil <= 120) {
        const id = `upcoming-${eventKey}`
        if (!dismissed.has(id)) {
          newNotifs.push({
            id,
            event,
            type: 'upcoming',
            message: `${event.title} at ${format(start, 'h:mm a')}`,
            time: start,
            read: false,
          })
        }
      }
    }

    setNotifications(newNotifs.sort((a, b) => a.time.getTime() - b.time.getTime()))
  }, [events, defaultReminderMinutes, dismissed])

  // Check for notifications every 60 seconds
  useEffect(() => {
    generateNotifications()
    const interval = setInterval(generateNotifications, 60_000)
    return () => clearInterval(interval)
  }, [generateNotifications])

  // Request browser notification permission
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission()
    }
  }, [])

  // Send browser notification for reminders
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'granted') {
      for (const notif of notifications) {
        if (notif.type === 'reminder' || notif.type === 'now') {
          try {
            new Notification('Calendro', {
              body: notif.message,
              icon: '/logo.png',
              tag: notif.id, // prevents duplicates
            })
          } catch {
            // Notifications not supported in this context
          }
        }
      }
    }
  }, [notifications])

  function dismissNotification(id: string) {
    setDismissed(prev => new Set(prev).add(id))
  }

  function dismissAll() {
    setDismissed(prev => {
      const next = new Set(prev)
      for (const n of notifications) next.add(n.id)
      return next
    })
  }

  const unreadCount = notifications.length

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
        aria-label={`Notifications${unreadCount > 0 ? ` (${unreadCount} new)` : ''}`}
      >
        {unreadCount > 0 ? (
          <BellRing className="h-4 w-4 text-gold" />
        ) : (
          <Bell className="h-4 w-4" />
        )}
        {unreadCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold text-[#0c0c0f] text-[9px] font-bold flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-80 z-50 bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-fade-up" style={{ animationDuration: '0.15s' }}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <h3 className="text-sm font-medium text-foreground">Notifications</h3>
              {notifications.length > 0 && (
                <button
                  onClick={dismissAll}
                  className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <CheckCheck className="h-3 w-3" />
                  Clear all
                </button>
              )}
            </div>

            <div className="max-h-72 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="py-8 text-center">
                  <Bell className="h-6 w-6 text-muted-foreground/30 mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">No upcoming notifications</p>
                </div>
              ) : (
                notifications.map(notif => (
                  <div
                    key={notif.id}
                    className={`flex items-start gap-3 px-4 py-3 border-b border-border/50 hover:bg-gold/5 transition-colors ${
                      notif.type === 'now' ? 'bg-gold/5' : ''
                    }`}
                  >
                    <Clock className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${
                      notif.type === 'now' ? 'text-gold' : 'text-muted-foreground'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-medium ${
                        notif.type === 'now' ? 'text-gold' : 'text-foreground'
                      }`}>
                        {notif.message}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-0.5 font-mono">
                        {format(notif.time, 'h:mm a')}
                        {notif.event.location && ` · ${notif.event.location}`}
                      </p>
                    </div>
                    <button
                      onClick={() => dismissNotification(notif.id)}
                      className="text-muted-foreground hover:text-foreground shrink-0"
                      aria-label="Dismiss notification"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
