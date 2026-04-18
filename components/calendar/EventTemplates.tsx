'use client'

import { useState } from 'react'
import { BookTemplate, Plus, Trash2, Clock, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import type { MomentiesEvent } from '@/types'

interface EventTemplate {
  id: string
  name: string
  title: string
  duration: number // minutes
  category: MomentiesEvent['category']
  location?: string
  description?: string
}

const DEFAULT_TEMPLATES: EventTemplate[] = [
  { id: 'standup', name: 'Daily Standup', title: 'Daily Standup', duration: 15, category: 'work' },
  { id: 'gym', name: 'Gym Session', title: 'Gym', duration: 60, category: 'health', location: 'Gym' },
  { id: '1on1', name: '1:1 Meeting', title: '1:1 Meeting', duration: 30, category: 'work' },
  { id: 'lunch', name: 'Lunch Break', title: 'Lunch', duration: 60, category: 'personal' },
  { id: 'focus', name: 'Focus Block', title: 'Focus Time', duration: 120, category: 'work' },
  { id: 'date', name: 'Date Night', title: 'Date Night', duration: 180, category: 'social' },
]

interface EventTemplatesProps {
  onCreateFromTemplate: (event: MomentiesEvent) => void
}

export function EventTemplates({ onCreateFromTemplate }: EventTemplatesProps) {
  const [templates, setTemplates] = useState<EventTemplate[]>(DEFAULT_TEMPLATES)
  const [showCreate, setShowCreate] = useState(false)
  const [newName, setNewName] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newDuration, setNewDuration] = useState(60)
  const [newCategory, setNewCategory] = useState<MomentiesEvent['category']>('other')

  function createFromTemplate(template: EventTemplate) {
    const now = new Date()
    const start = new Date(now)
    start.setMinutes(start.getMinutes() + 30) // Start 30 min from now
    start.setMinutes(0, 0, 0) // Round to hour
    if (start <= now) start.setHours(start.getHours() + 1)

    const end = new Date(start.getTime() + template.duration * 60_000)

    onCreateFromTemplate({
      title: template.title,
      start,
      end,
      category: template.category,
      location: template.location,
      description: template.description,
    })
  }

  function addTemplate() {
    if (!newName.trim() || !newTitle.trim()) return
    const template: EventTemplate = {
      id: `custom-${Date.now()}`,
      name: newName,
      title: newTitle,
      duration: newDuration,
      category: newCategory,
    }
    setTemplates(prev => [...prev, template])
    setNewName('')
    setNewTitle('')
    setShowCreate(false)
  }

  function removeTemplate(id: string) {
    setTemplates(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookTemplate className="h-4 w-4 text-gold" />
          <span className="text-sm font-medium text-foreground">Templates</span>
        </div>
        <button
          onClick={() => setShowCreate(!showCreate)}
          aria-label={showCreate ? 'Cancel new template' : 'Create new template'}
          className="text-xs text-muted-foreground hover:text-gold flex items-center gap-1 transition-colors"
        >
          <Plus className="h-3 w-3" />
          New
        </button>
      </div>

      {/* Template grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {templates.map(t => (
          <div
            key={t.id}
            className="group relative rounded-lg border border-border p-2.5 hover:border-gold/30 hover:bg-gold/5 transition-all cursor-pointer"
            onClick={() => createFromTemplate(t)}
          >
            <p className="text-xs font-medium text-foreground truncate">{t.name}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                <Clock className="h-2.5 w-2.5" />
                {t.duration}m
              </span>
              <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground capitalize">
                <Tag className="h-2.5 w-2.5" />
                {t.category}
              </span>
            </div>
            {!DEFAULT_TEMPLATES.find(d => d.id === t.id) && (
              <button
                onClick={e => { e.stopPropagation(); removeTemplate(t.id) }}
                aria-label={`Delete ${t.name} template`}
                className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 p-1 rounded text-muted-foreground hover:text-destructive transition-all"
              >
                <Trash2 className="h-2.5 w-2.5" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Create template form */}
      {showCreate && (
        <div className="rounded-lg border border-border bg-muted/30 p-3 space-y-2">
          <Input
            placeholder="Template name"
            value={newName}
            onChange={e => setNewName(e.target.value)}
            className="h-8 text-xs"
          />
          <Input
            placeholder="Event title"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            className="h-8 text-xs"
          />
          <div className="flex gap-2">
            <select
              value={newDuration}
              onChange={e => setNewDuration(+e.target.value)}
              className="h-8 rounded-md border border-border bg-background px-2 text-xs text-foreground flex-1"
            >
              <option value={15}>15 min</option>
              <option value={30}>30 min</option>
              <option value={60}>1 hour</option>
              <option value={90}>1.5 hours</option>
              <option value={120}>2 hours</option>
            </select>
            <select
              value={newCategory}
              onChange={e => setNewCategory(e.target.value as MomentiesEvent['category'])}
              className="h-8 rounded-md border border-border bg-background px-2 text-xs text-foreground flex-1"
            >
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="health">Health</option>
              <option value="education">Education</option>
              <option value="social">Social</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex gap-2">
            <Button size="sm" onClick={addTemplate} className="bg-gold text-[#0c0c0f] hover:bg-gold/90 text-xs h-7">
              Create
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setShowCreate(false)} className="text-xs h-7">
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
