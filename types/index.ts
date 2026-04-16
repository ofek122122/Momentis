export type EventColor =
  | 'blue'
  | 'violet'
  | 'emerald'
  | 'amber'
  | 'pink'
  | 'red'
  | 'cyan'
  | 'gold'
  | 'zinc'

export type EventPriority = 'low' | 'medium' | 'high' | 'urgent'

export type RecurrenceFrequency = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'custom'

export interface RecurrenceRule {
  frequency: RecurrenceFrequency
  interval?: number // every N days/weeks/months
  daysOfWeek?: number[] // 0=Sun, 1=Mon, ..., 6=Sat (for weekly)
  dayOfMonth?: number // for monthly
  endDate?: string // ISO date string
  count?: number // number of occurrences
}

export interface CalendroEvent {
  id?: string
  title: string
  start: Date
  end: Date
  location?: string
  description?: string
  category?: 'work' | 'personal' | 'health' | 'education' | 'social' | 'other'
  color?: EventColor
  priority?: EventPriority
  sourceId?: string
  sourceCalendarId?: string
  recurrence?: RecurrenceRule
  recurringEventId?: string // links instance to parent recurring event
  isRecurringInstance?: boolean
}

export interface ParseResult {
  events: CalendroEvent[]
  confidence: 'high' | 'medium' | 'low'
  method: 'chrono' | 'gemini' | 'hybrid'
  raw: string
}

export interface UserPreferences {
  defaultReminderMinutes: number
  morningBriefingTime: string
  timezone: string
  workingHoursStart: string
  workingHoursEnd: string
}

// ── Color mappings for UI ───────────────────────────────────────────

export const EVENT_COLORS: Record<EventColor, { border: string; text: string; bg: string; label: string }> = {
  blue:    { border: 'border-blue-400/70',    text: 'text-blue-200',    bg: 'bg-blue-500/20',    label: 'Blue' },
  violet:  { border: 'border-violet-400/70',  text: 'text-violet-200',  bg: 'bg-violet-500/20',  label: 'Violet' },
  emerald: { border: 'border-emerald-400/70', text: 'text-emerald-200', bg: 'bg-emerald-500/20', label: 'Green' },
  amber:   { border: 'border-amber-400/70',   text: 'text-amber-200',   bg: 'bg-amber-500/20',   label: 'Amber' },
  pink:    { border: 'border-pink-400/70',    text: 'text-pink-200',    bg: 'bg-pink-500/20',    label: 'Pink' },
  red:     { border: 'border-red-400/70',     text: 'text-red-200',     bg: 'bg-red-500/20',     label: 'Red' },
  cyan:    { border: 'border-cyan-400/70',    text: 'text-cyan-200',    bg: 'bg-cyan-500/20',    label: 'Cyan' },
  gold:    { border: 'border-yellow-400/70',  text: 'text-yellow-200',  bg: 'bg-yellow-500/20',  label: 'Gold' },
  zinc:    { border: 'border-zinc-500/50',    text: 'text-zinc-300',    bg: 'bg-zinc-500/20',    label: 'Gray' },
}

export const PRIORITY_CONFIG: Record<EventPriority, { label: string; icon: string; color: string }> = {
  low:    { label: 'Low',    icon: '○', color: 'text-zinc-400' },
  medium: { label: 'Medium', icon: '◑', color: 'text-blue-400' },
  high:   { label: 'High',   icon: '●', color: 'text-amber-400' },
  urgent: { label: 'Urgent', icon: '◉', color: 'text-red-400' },
}

export const CATEGORY_TO_COLOR: Record<string, EventColor> = {
  work: 'blue',
  personal: 'violet',
  health: 'emerald',
  education: 'amber',
  social: 'pink',
  other: 'zinc',
}
