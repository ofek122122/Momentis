'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, Save, Clock, Globe, Bell, Calendar } from 'lucide-react'

interface Preferences {
  timezone: string
  defaultReminderMinutes: number
  defaultEventDuration: number
  workingHoursStart: string
  workingHoursEnd: string
  morningBriefingTime: string
  defaultCalendarView: string
}

const TIMEZONES = [
  'UTC', 'US/Eastern', 'US/Central', 'US/Mountain', 'US/Pacific',
  'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Helsinki',
  'Asia/Jerusalem', 'Asia/Tokyo', 'Asia/Shanghai', 'Asia/Hong_Kong',
  'Australia/Sydney', 'America/New_York', 'America/Chicago',
  'America/Denver', 'America/Los_Angeles',
]

const REMINDER_OPTIONS = [
  { value: 0, label: 'None' },
  { value: 5, label: '5 minutes' },
  { value: 15, label: '15 minutes' },
  { value: 30, label: '30 minutes' },
  { value: 60, label: '1 hour' },
  { value: 1440, label: '1 day' },
]

const DURATION_OPTIONS = [
  { value: 15, label: '15 min' },
  { value: 30, label: '30 min' },
  { value: 45, label: '45 min' },
  { value: 60, label: '1 hour' },
  { value: 90, label: '1.5 hours' },
  { value: 120, label: '2 hours' },
]

export function PreferencesForm() {
  const [prefs, setPrefs] = useState<Preferences | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/preferences')
      .then(r => r.json())
      .then(data => { setPrefs(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  async function handleSave() {
    if (!prefs) return
    setSaving(true)
    setError(null)
    setSaved(false)
    try {
      const res = await fetch('/api/preferences', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(prefs),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error ?? 'Failed to save')
        return
      }
      const updated = await res.json()
      setPrefs(updated)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch {
      setError('Network error')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground py-4">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span className="text-sm">Loading preferences...</span>
      </div>
    )
  }

  if (!prefs) return null

  return (
    <div className="space-y-5">
      {/* Timezone */}
      <div>
        <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5">
          <Globe className="h-3 w-3" /> Timezone
        </label>
        <select
          value={prefs.timezone}
          onChange={e => setPrefs({ ...prefs, timezone: e.target.value })}
          className="w-full h-9 rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-gold/20"
        >
          {TIMEZONES.map(tz => (
            <option key={tz} value={tz}>{tz}</option>
          ))}
        </select>
      </div>

      {/* Working Hours */}
      <div>
        <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5">
          <Clock className="h-3 w-3" /> Working hours
        </label>
        <div className="flex items-center gap-2">
          <Input
            type="time"
            value={prefs.workingHoursStart}
            onChange={e => setPrefs({ ...prefs, workingHoursStart: e.target.value })}
            className="h-9 text-sm flex-1"
          />
          <span className="text-muted-foreground text-xs">to</span>
          <Input
            type="time"
            value={prefs.workingHoursEnd}
            onChange={e => setPrefs({ ...prefs, workingHoursEnd: e.target.value })}
            className="h-9 text-sm flex-1"
          />
        </div>
      </div>

      {/* Default Reminder */}
      <div>
        <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5">
          <Bell className="h-3 w-3" /> Default reminder
        </label>
        <div className="flex flex-wrap gap-1.5">
          {REMINDER_OPTIONS.map(opt => (
            <button
              key={opt.value}
              onClick={() => setPrefs({ ...prefs, defaultReminderMinutes: opt.value })}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all border ${
                prefs.defaultReminderMinutes === opt.value
                  ? 'text-gold border-gold/40 bg-gold/10'
                  : 'text-muted-foreground border-border hover:border-muted-foreground/50'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Default Event Duration */}
      <div>
        <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5">
          <Calendar className="h-3 w-3" /> Default event duration
        </label>
        <div className="flex flex-wrap gap-1.5">
          {DURATION_OPTIONS.map(opt => (
            <button
              key={opt.value}
              onClick={() => setPrefs({ ...prefs, defaultEventDuration: opt.value })}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all border ${
                prefs.defaultEventDuration === opt.value
                  ? 'text-gold border-gold/40 bg-gold/10'
                  : 'text-muted-foreground border-border hover:border-muted-foreground/50'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Default Calendar View */}
      <div>
        <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5">
          <Calendar className="h-3 w-3" /> Default calendar view
        </label>
        <div className="flex gap-1.5">
          {(['month', 'week', 'day'] as const).map(view => (
            <button
              key={view}
              onClick={() => setPrefs({ ...prefs, defaultCalendarView: view })}
              className={`px-3 py-1.5 rounded-md text-xs font-mono capitalize transition-all border ${
                prefs.defaultCalendarView === view
                  ? 'text-gold border-gold/40 bg-gold/10'
                  : 'text-muted-foreground border-border hover:border-muted-foreground/50'
              }`}
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      {/* Morning Briefing Time */}
      <div>
        <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5">
          <Clock className="h-3 w-3" /> Morning briefing time
        </label>
        <Input
          type="time"
          value={prefs.morningBriefingTime}
          onChange={e => setPrefs({ ...prefs, morningBriefingTime: e.target.value })}
          className="h-9 text-sm max-w-[160px]"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-2">
        <Button
          size="sm"
          onClick={handleSave}
          disabled={saving}
          className="bg-gold text-[#0c0c0f] hover:bg-gold/90 font-medium press"
        >
          {saving ? (
            <><Loader2 className="h-3 w-3 animate-spin mr-1.5" />Saving...</>
          ) : (
            <><Save className="h-3 w-3 mr-1.5" />Save preferences</>
          )}
        </Button>
        {saved && <span className="text-xs text-emerald-400 font-mono">Saved!</span>}
        {error && <span className="text-xs text-destructive font-mono">{error}</span>}
      </div>
    </div>
  )
}
