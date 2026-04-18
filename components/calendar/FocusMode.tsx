'use client'

import { useState, useEffect, useCallback } from 'react'
import { Focus, Play, Pause, RotateCcw, Timer, Coffee, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

type FocusState = 'idle' | 'focusing' | 'break' | 'paused'

const FOCUS_DURATION = 25 * 60 // 25 minutes in seconds
const BREAK_DURATION = 5 * 60 // 5 minutes
const LONG_BREAK = 15 * 60 // 15 minutes

export function FocusMode() {
  const [state, setState] = useState<FocusState>('idle')
  const [timeLeft, setTimeLeft] = useState(FOCUS_DURATION)
  const [sessions, setSessions] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const reset = useCallback(() => {
    setState('idle')
    setTimeLeft(FOCUS_DURATION)
  }, [])

  useEffect(() => {
    if (state !== 'focusing' && state !== 'break') return

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          if (state === 'focusing') {
            const newSessions = sessions + 1
            setSessions(newSessions)
            setState('break')
            // Long break every 4 sessions
            return newSessions % 4 === 0 ? LONG_BREAK : BREAK_DURATION
          } else {
            setState('idle')
            return FOCUS_DURATION
          }
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [state, sessions])

  // Send notification when session ends
  useEffect(() => {
    if (state === 'break' && timeLeft === (sessions % 4 === 0 ? LONG_BREAK : BREAK_DURATION)) {
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Momenties Focus', {
          body: 'Focus session complete! Time for a break.',
          icon: '/logo.png',
        })
      }
    }
  }, [state, timeLeft, sessions])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const breakDuration = sessions % 4 === 0 && sessions > 0 ? LONG_BREAK : BREAK_DURATION
  const progress = state === 'focusing'
    ? ((FOCUS_DURATION - timeLeft) / FOCUS_DURATION) * 100
    : state === 'break'
      ? ((breakDuration - timeLeft) / breakDuration) * 100
      : 0

  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        aria-label="Open focus mode timer"
        className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border text-xs text-muted-foreground hover:text-foreground hover:border-gold/30 transition-all"
      >
        <Focus className="h-3 w-3" />
        <span className="hidden sm:inline font-mono">Focus</span>
        {state !== 'idle' && (
          <span className="text-gold font-mono">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
        )}
      </button>
    )
  }

  return (
    <div className="fixed bottom-24 right-4 z-50 w-72 rounded-2xl border border-border bg-card shadow-2xl overflow-hidden animate-fade-up" style={{ animationDuration: '0.2s' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Focus className="h-4 w-4 text-gold" />
          <span className="text-sm font-medium text-foreground">Focus Mode</span>
        </div>
        <button onClick={() => setIsExpanded(false)} className="text-muted-foreground hover:text-foreground" aria-label="Close focus mode">
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Timer */}
      <div className="p-6 text-center">
        {/* Progress ring */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-border" />
            <circle
              cx="50" cy="50" r="45" fill="none"
              stroke="currentColor" strokeWidth="3"
              className={state === 'break' ? 'text-emerald-500' : 'text-gold'}
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 1s linear' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-mono text-3xl font-bold text-foreground">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-1">
              {state === 'idle' ? 'Ready' : state === 'focusing' ? 'Focusing' : state === 'break' ? 'Break' : 'Paused'}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          {state === 'idle' && (
            <Button
              onClick={() => { setState('focusing'); setTimeLeft(FOCUS_DURATION) }}
              className="bg-gold text-[#0c0c0f] hover:bg-gold/90"
              size="sm"
            >
              <Play className="h-3 w-3 mr-1.5" />
              Start Focus
            </Button>
          )}
          {state === 'focusing' && (
            <>
              <Button
                onClick={() => setState('paused')}
                variant="outline"
                size="sm"
              >
                <Pause className="h-3 w-3 mr-1.5" />
                Pause
              </Button>
              <Button onClick={reset} variant="ghost" size="sm" aria-label="Reset timer">
                <RotateCcw className="h-3 w-3" />
              </Button>
            </>
          )}
          {state === 'paused' && (
            <>
              <Button
                onClick={() => setState('focusing')}
                className="bg-gold text-[#0c0c0f] hover:bg-gold/90"
                size="sm"
              >
                <Play className="h-3 w-3 mr-1.5" />
                Resume
              </Button>
              <Button onClick={reset} variant="ghost" size="sm" aria-label="Reset timer">
                <RotateCcw className="h-3 w-3" />
              </Button>
            </>
          )}
          {state === 'break' && (
            <div className="flex items-center gap-2 text-emerald-400">
              <Coffee className="h-4 w-4" />
              <span className="text-xs font-mono">Take a break!</span>
            </div>
          )}
        </div>

        {/* Session counter */}
        <div className="mt-4 flex items-center justify-center gap-1">
          {[0, 1, 2, 3].map(i => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < (sessions % 4) ? 'bg-gold' : 'bg-border'
              }`}
            />
          ))}
          <span className="text-[10px] text-muted-foreground font-mono ml-2">
            {sessions} session{sessions !== 1 ? 's' : ''}
          </span>
        </div>
      </div>
    </div>
  )
}
