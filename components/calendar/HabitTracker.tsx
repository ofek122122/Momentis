'use client'

import { useState, useMemo } from 'react'
import { Flame, Plus, Trash2, Check } from 'lucide-react'
import { format, isToday, subDays, isSameDay } from 'date-fns'
import { Input } from '@/components/ui/input'

interface Habit {
  id: string
  name: string
  color: string
  completedDates: string[] // ISO date strings
}

const DEFAULT_HABITS: Habit[] = [
  { id: 'exercise', name: 'Exercise', color: 'bg-emerald-500', completedDates: [] },
  { id: 'meditate', name: 'Meditate', color: 'bg-violet-500', completedDates: [] },
  { id: 'journal', name: 'Journal', color: 'bg-amber-500', completedDates: [] },
]

const HABIT_COLORS = [
  'bg-emerald-500', 'bg-blue-500', 'bg-violet-500', 'bg-amber-500',
  'bg-pink-500', 'bg-cyan-500', 'bg-red-500',
]

export function HabitTracker() {
  const [habits, setHabits] = useState<Habit[]>(DEFAULT_HABITS)
  const [showAdd, setShowAdd] = useState(false)
  const [newName, setNewName] = useState('')
  const [selectedColor, setSelectedColor] = useState(HABIT_COLORS[0])

  const last7Days = useMemo(() => {
    const days: Date[] = []
    for (let i = 6; i >= 0; i--) {
      days.push(subDays(new Date(), i))
    }
    return days
  }, [])

  function toggleHabit(habitId: string, date: Date) {
    const dateStr = format(date, 'yyyy-MM-dd')
    setHabits(prev => prev.map(h => {
      if (h.id !== habitId) return h
      const has = h.completedDates.includes(dateStr)
      return {
        ...h,
        completedDates: has
          ? h.completedDates.filter(d => d !== dateStr)
          : [...h.completedDates, dateStr],
      }
    }))
  }

  function addHabit() {
    if (!newName.trim()) return
    setHabits(prev => [...prev, {
      id: `habit-${Date.now()}`,
      name: newName,
      color: selectedColor,
      completedDates: [],
    }])
    setNewName('')
    setShowAdd(false)
  }

  function removeHabit(id: string) {
    setHabits(prev => prev.filter(h => h.id !== id))
  }

  function getStreak(habit: Habit): number {
    let streak = 0
    let day = new Date()
    const dateStr = format(day, 'yyyy-MM-dd')
    if (!habit.completedDates.includes(dateStr)) {
      day = subDays(day, 1)
    }
    while (habit.completedDates.includes(format(day, 'yyyy-MM-dd'))) {
      streak++
      day = subDays(day, 1)
    }
    return streak
  }

  return (
    <div className="rounded-xl border border-border bg-card p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="h-4 w-4 text-gold" />
          <span className="text-sm font-medium text-foreground">Daily Habits</span>
        </div>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="text-xs text-muted-foreground hover:text-gold flex items-center gap-1 transition-colors"
          aria-label="Add habit"
        >
          <Plus className="h-3 w-3" />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid gap-1" style={{ gridTemplateColumns: 'minmax(80px, 1fr) repeat(7, 28px) 40px' }}>
        <div />
        {last7Days.map(day => (
          <div key={day.toISOString()} className="text-center">
            <span className={`font-mono text-[9px] ${isToday(day) ? 'text-gold font-bold' : 'text-muted-foreground/50'}`}>
              {format(day, 'EE').charAt(0)}
            </span>
          </div>
        ))}
        <div className="text-center">
          <span className="font-mono text-[9px] text-muted-foreground/50">🔥</span>
        </div>
      </div>

      {/* Habit rows */}
      {habits.map(habit => (
        <div
          key={habit.id}
          className="grid gap-1 items-center group"
          style={{ gridTemplateColumns: 'minmax(80px, 1fr) repeat(7, 28px) 40px' }}
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <div className={`w-2 h-2 rounded-full ${habit.color} shrink-0`} />
            <span className="text-xs text-foreground truncate">{habit.name}</span>
            <button
              onClick={() => removeHabit(habit.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
              aria-label={`Remove ${habit.name}`}
            >
              <Trash2 className="h-2.5 w-2.5 text-muted-foreground hover:text-destructive" />
            </button>
          </div>
          {last7Days.map(day => {
            const dateStr = format(day, 'yyyy-MM-dd')
            const completed = habit.completedDates.includes(dateStr)
            return (
              <button
                key={dateStr}
                onClick={() => toggleHabit(habit.id, day)}
                className={`w-7 h-7 rounded-md border transition-all flex items-center justify-center ${
                  completed
                    ? `${habit.color} border-transparent`
                    : 'border-border hover:border-gold/30'
                }`}
              >
                {completed && <Check className="h-3 w-3 text-white" />}
              </button>
            )
          })}
          <span className="text-center font-mono text-xs text-gold/70">
            {getStreak(habit)}
          </span>
        </div>
      ))}

      {/* Add habit form */}
      {showAdd && (
        <div className="flex items-center gap-2 pt-1">
          <div className="flex gap-1">
            {HABIT_COLORS.slice(0, 4).map(c => (
              <button
                key={c}
                onClick={() => setSelectedColor(c)}
                className={`w-4 h-4 rounded-full ${c} ${selectedColor === c ? 'ring-2 ring-gold/50 ring-offset-1 ring-offset-background' : 'opacity-50'}`}
              />
            ))}
          </div>
          <Input
            value={newName}
            onChange={e => setNewName(e.target.value)}
            placeholder="Habit name"
            className="h-7 text-xs flex-1"
            onKeyDown={e => e.key === 'Enter' && addHabit()}
          />
          <button onClick={addHabit} className="text-xs text-gold hover:text-gold/80 font-mono">
            Add
          </button>
        </div>
      )}
    </div>
  )
}
