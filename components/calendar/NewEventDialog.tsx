'use client'

import { useState } from 'react'
import { format, addHours } from 'date-fns'
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, MapPin, AlignLeft, Clock, Tag, Palette, Flag } from 'lucide-react'
import type { MomentiesEvent, EventColor, EventPriority } from '@/types'
import { EVENT_COLORS, PRIORITY_CONFIG } from '@/types'

interface NewEventDialogProps {
  open: boolean
  onClose: () => void
  onCreate: (event: MomentiesEvent) => Promise<void>
  defaultDate?: Date
}

export function NewEventDialog({ open, onClose, onCreate, defaultDate }: NewEventDialogProps) {
  const now = defaultDate ?? new Date()
  const defaultStart = addHours(new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1), 0)
  const defaultEnd = addHours(defaultStart, 1)

  const [title, setTitle] = useState('')
  const [startDate, setStartDate] = useState(format(defaultStart, 'yyyy-MM-dd'))
  const [startTime, setStartTime] = useState(format(defaultStart, 'HH:mm'))
  const [endDate, setEndDate] = useState(format(defaultEnd, 'yyyy-MM-dd'))
  const [endTime, setEndTime] = useState(format(defaultEnd, 'HH:mm'))
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [color, setColor] = useState<EventColor>('blue')
  const [priority, setPriority] = useState<EventPriority>('medium')
  const [category, setCategory] = useState<MomentiesEvent['category']>('other')
  const [saving, setSaving] = useState(false)

  async function handleCreate() {
    if (!title.trim()) return
    setSaving(true)
    try {
      await onCreate({
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

  function handleClose() {
    setTitle('')
    setLocation('')
    setDescription('')
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md border-border bg-card max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">New event</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Title */}
          <div>
            <label htmlFor="new-title" className="text-xs font-medium text-muted-foreground mb-1 block">
              Title
            </label>
            <Input
              id="new-title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="What's happening?"
              className="h-9 text-sm"
              autoFocus
              disabled={saving}
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1">
                <Clock className="h-3 w-3" /> Start
              </label>
              <Input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="h-9 text-sm" disabled={saving} />
              <Input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} className="h-9 text-sm mt-1" disabled={saving} />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1">
                <Clock className="h-3 w-3" /> End
              </label>
              <Input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="h-9 text-sm" disabled={saving} />
              <Input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} className="h-9 text-sm mt-1" disabled={saving} />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Location
            </label>
            <Input value={location} onChange={e => setLocation(e.target.value)} placeholder="Optional" className="h-9 text-sm" disabled={saving} />
          </div>

          {/* Description */}
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1">
              <AlignLeft className="h-3 w-3" /> Description
            </label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Optional"
              rows={3}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-gold/20 resize-none"
              disabled={saving}
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
                    disabled={saving}
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
                    disabled={saving}
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
                  disabled={saving}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2 mt-2">
          <Button variant="ghost" size="sm" onClick={handleClose} disabled={saving}>
            Cancel
          </Button>
          <Button
            size="sm"
            className="bg-gold text-[#0c0c0f] hover:bg-gold/90 font-medium press"
            onClick={handleCreate}
            disabled={saving || !title.trim()}
          >
            {saving ? <><Loader2 className="h-3 w-3 animate-spin mr-1.5" />Creating...</> : 'Create event'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
