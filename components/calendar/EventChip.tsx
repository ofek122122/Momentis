'use client'

import { format } from 'date-fns'
import type { CalendroEvent, EventColor } from '@/types'
import { EVENT_COLORS, CATEGORY_TO_COLOR, PRIORITY_CONFIG } from '@/types'

interface EventChipProps {
  event: CalendroEvent
  onClick?: () => void
  hasConflict?: boolean
  draggable?: boolean
  onDragStart?: (e: React.DragEvent) => void
}

export function EventChip({ event, onClick, hasConflict, draggable, onDragStart }: EventChipProps) {
  const colorKey: EventColor = event.color ?? CATEGORY_TO_COLOR[event.category ?? 'other'] ?? 'zinc'
  const colors = EVENT_COLORS[colorKey]
  const priority = event.priority ? PRIORITY_CONFIG[event.priority] : null
  const timeStr = format(new Date(event.start), 'h:mm a')
  const tooltip = `${event.title} — ${timeStr}${event.location ? ` at ${event.location}` : ''}${priority ? ` [${priority.label}]` : ''}`

  return (
    <button
      onClick={onClick}
      title={tooltip}
      draggable={draggable}
      onDragStart={onDragStart}
      aria-label={`${event.title} at ${timeStr}${hasConflict ? ' (schedule conflict)' : ''}`}
      className={`
        w-full text-left text-[10px] pl-1.5 pr-1 py-[3px] rounded-[4px]
        border-l-2 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-150
        truncate leading-tight cursor-pointer
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/50
        ${colors.border} ${colors.text}
        ${hasConflict ? 'ring-1 ring-amber-500/50' : ''}
        ${draggable ? 'active:opacity-50 active:cursor-grabbing' : ''}
      `}
    >
      {priority && event.priority !== 'medium' && (
        <span className={`mr-0.5 ${priority.color}`} aria-hidden="true">{priority.icon}</span>
      )}
      <span className="font-mono opacity-70">
        {format(new Date(event.start), 'h:mm')}
      </span>
      {' '}
      <span className="font-medium">{event.title}</span>
      {hasConflict && (
        <span className="ml-1 text-amber-400" aria-hidden="true">!</span>
      )}
    </button>
  )
}
