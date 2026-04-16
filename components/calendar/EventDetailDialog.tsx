'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, Trash2, MapPin, AlignLeft, Clock, Tag, Palette, Flag } from 'lucide-react'
import type { CalendroEvent, EventColor, EventPriority } from '@/types'
import { EVENT_COLORS, PRIORITY_CONFIG, CATEGORY_TO_COLOR } from '@/types'

interface EventDetailDialogProps {
  event: CalendroEvent | null
  open: boolean
  onClose: () => void
  onSave: (updated: CalendroEvent) => Promise<void>
  onDelete: (eventId: string) => Promise<void>
}

export function EventDetailDialog({
  event,
  open,
  onClose,
  onSave,
  onDelete,
}: EventDetailDialogProps) {
  const [title, setTitle] = useState('')
  const [startDate, setStartDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endDate, setEndDate] = useState('')
  const [endTime, setEndTime] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [color, setColor] = useState<EventColor>('blue')
  const [priority, setPriority] = useState<EventPriority>('medium')
  const [category, setCategory] = useState<CalendroEvent['category']>('other')
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)

  // Populate fields when event changes
  const populateFromEvent = (e: CalendroEvent) => {
    setTitle(e.title)
    const s = new Date(e.start)
    const en = new Date(e.end)
    setStartDate(format(s, 'yyyy-MM-dd'))
    setStartTime(format(s, 'HH:mm'))
    setEndDate(format(en, 'yyyy-MM-dd'))
    setEndTime(format(en, 'HH:mm'))
    setLocation(e.location ?? '')
    setDescription(e.description ?? '')
    setColor(e.color ?? CATEGORY_TO_COLOR[e.category ?? 'other'] ?? 'zinc')
    setPriority(e.priority ?? 'medium')
    setCategory(e.category ?? 'other')
  }

  // Reset on open
  if (event && open && title === '' && event.title !== '') {
    populateFromEvent(event)
  }

  async function handleSave() {
    if (!event || !title.trim()) return
    setSaving(true)
    try {
      await onSave({
        ...event,
        title,
        start: new Date(`${startDate}T${startTime}`),
        end: new Date(`${endDate}T${endTime}`),
        location: location || undefined,
        description: description || undefined,
        color,
        priority,
        category,
      })
      handleClose()
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete() {
    const id = event?.id ?? event?.sourceId
    if (!id) return
    setDeleting(true)
    try {
      await onDelete(id)
      handleClose()
    } finally {
      setDeleting(false)
    }
  }

  function handleClose() {
    setTitle('')
    setStartDate('')
    setStartTime('')
    setEndDate('')
    setEndTime('')
    setLocation('')
    setDescription('')
    onClose()
  }

  const busy = saving || deleting

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md border-border bg-card max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Edit event</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Title */}
          <div>
            <label htmlFor="edit-title" className="text-xs font-medium text-muted-foreground mb-1 block">
              Title
            </label>
            <Input
              id="edit-title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="h-9 text-sm"
              disabled={busy}
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="edit-start-date" className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1">
                <Clock className="h-3 w-3" /> Start
              </label>
              <Input id="edit-start-date" type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="h-9 text-sm" disabled={busy} />
              <Input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} className="h-9 text-sm mt-1" disabled={busy} />
            </div>
            <div>
              <label htmlFor="edit-end-date" className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1">
                <Clock className="h-3 w-3" /> End
              </label>
              <Input id="edit-end-date" type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="h-9 text-sm" disabled={busy} />
              <Input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} className="h-9 text-sm mt-1" disabled={busy} />
            </div>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="edit-location" className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Location
            </label>
            <Input id="edit-location" value={location} onChange={e => setLocation(e.target.value)} placeholder="Optional" className="h-9 text-sm" disabled={busy} />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="edit-desc" className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1">
              <AlignLeft className="h-3 w-3" /> Description
            </label>
            <textarea
              id="edit-desc"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Optional"
              rows={3}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-gold/20 resize-none"
              disabled={busy}
            />
          </div>

          {/* Color */}
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
              <Palette className="h-3 w-3" /> Color
            </label>
            <div className="flex flex-wrap gap-1.5">
              {(Object.entries(EVENT_COLORS) as [EventColor, typeof EVENT_COLORS[EventColor]][]).map(
                ([key, cfg]) => (
                  <button
                    key={key}
                    onClick={() => setColor(key)}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${cfg.bg} ${
                      color === key
                        ? `${cfg.border} scale-110 ring-2 ring-offset-1 ring-offset-background ring-gold/30`
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    title={cfg.label}
                    aria-label={`${cfg.label} color${color === key ? ' (selected)' : ''}`}
                    disabled={busy}
                  />
                )
              )}
            </div>
          </div>

          {/* Priority */}
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
              <Flag className="h-3 w-3" /> Priority
            </label>
            <div className="flex gap-1.5">
              {(Object.entries(PRIORITY_CONFIG) as [EventPriority, typeof PRIORITY_CONFIG[EventPriority]][]).map(
                ([key, cfg]) => (
                  <button
                    key={key}
                    onClick={() => setPriority(key)}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all border ${
                      priority === key
                        ? `${cfg.color} border-current bg-white/5`
                        : 'text-muted-foreground border-border hover:border-muted-foreground/50'
                    }`}
                    disabled={busy}
                  >
                    <span className="mr-1">{cfg.icon}</span>
                    {cfg.label}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
              <Tag className="h-3 w-3" /> Category
            </label>
            <div className="flex flex-wrap gap-1.5">
              {(['work', 'personal', 'health', 'education', 'social', 'other'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono capitalize transition-all border ${
                    category === cat
                      ? 'text-gold border-gold/40 bg-gold/10'
                      : 'text-muted-foreground border-border hover:border-muted-foreground/50'
                  }`}
                  disabled={busy}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2 mt-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDelete}
            disabled={busy || !event?.id}
            className="text-destructive hover:text-destructive mr-auto"
          >
            {deleting ? <Loader2 className="h-3 w-3 animate-spin mr-1.5" /> : <Trash2 className="h-3 w-3 mr-1.5" />}
            Delete
          </Button>
          <Button variant="ghost" size="sm" onClick={handleClose} disabled={busy}>
            Cancel
          </Button>
          <Button
            size="sm"
            className="bg-gold text-[#0c0c0f] hover:bg-gold/90 font-medium press"
            onClick={handleSave}
            disabled={busy || !title.trim()}
          >
            {saving ? <><Loader2 className="h-3 w-3 animate-spin mr-1.5" />Saving...</> : 'Save changes'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
