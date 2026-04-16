'use client'

import { useState, useEffect } from 'react'
import { X, Keyboard } from 'lucide-react'

interface ShortcutGroup {
  title: string
  shortcuts: { keys: string[]; description: string }[]
}

const SHORTCUT_GROUPS: ShortcutGroup[] = [
  {
    title: 'Navigation',
    shortcuts: [
      { keys: ['←'], description: 'Previous period' },
      { keys: ['→'], description: 'Next period' },
      { keys: ['T'], description: 'Jump to today' },
    ],
  },
  {
    title: 'Views',
    shortcuts: [
      { keys: ['M'], description: 'Month view' },
      { keys: ['W'], description: 'Week view' },
      { keys: ['D'], description: 'Day view' },
    ],
  },
  {
    title: 'Actions',
    shortcuts: [
      { keys: ['Ctrl', 'K'], description: 'Search events' },
      { keys: ['Enter'], description: 'Submit input' },
      { keys: ['Esc'], description: 'Close dialog / search' },
      { keys: ['?'], description: 'Toggle this help' },
    ],
  },
  {
    title: 'Calendar',
    shortcuts: [
      { keys: ['Double-click'], description: 'Create event on day' },
      { keys: ['Drag'], description: 'Move event to another day' },
    ],
  },
]

export function KeyboardShortcuts() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) return

      if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault()
        setOpen(prev => !prev)
      }
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className="relative w-full max-w-md mx-4 rounded-2xl border border-border bg-card shadow-2xl animate-fade-up overflow-hidden"
        style={{ animationDuration: '0.15s' }}
        role="dialog"
        aria-label="Keyboard shortcuts"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
              <Keyboard className="h-4 w-4 text-gold" />
            </div>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Keyboard Shortcuts
            </h2>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close keyboard shortcuts"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Shortcuts */}
        <div className="px-5 py-4 space-y-5 max-h-[60vh] overflow-y-auto">
          {SHORTCUT_GROUPS.map(group => (
            <div key={group.title}>
              <h3 className="font-mono text-[10px] tracking-widest uppercase text-gold/60 mb-2">
                {group.title}
              </h3>
              <div className="space-y-1.5">
                {group.shortcuts.map(shortcut => (
                  <div
                    key={shortcut.description}
                    className="flex items-center justify-between py-1"
                  >
                    <span className="text-sm text-foreground/80">
                      {shortcut.description}
                    </span>
                    <div className="flex items-center gap-1">
                      {shortcut.keys.map((key, i) => (
                        <span key={i}>
                          {i > 0 && (
                            <span className="text-[10px] text-muted-foreground mx-0.5">+</span>
                          )}
                          <kbd className="inline-flex items-center justify-center min-w-[1.75rem] px-1.5 py-0.5 rounded-md border border-border bg-muted/50 font-mono text-[11px] text-muted-foreground">
                            {key}
                          </kbd>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-border">
          <p className="text-[10px] text-muted-foreground/50 font-mono text-center tracking-wider">
            Press <kbd className="px-1 py-0.5 rounded border border-border bg-muted/50 text-muted-foreground mx-0.5">?</kbd> to toggle · <kbd className="px-1 py-0.5 rounded border border-border bg-muted/50 text-muted-foreground mx-0.5">Esc</kbd> to close
          </p>
        </div>
      </div>
    </div>
  )
}
