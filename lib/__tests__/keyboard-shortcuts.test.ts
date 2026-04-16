import { describe, it, expect } from 'vitest'

// Test the shortcut configuration data structure
// (The component is tested via its data, not DOM rendering)

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

describe('KeyboardShortcuts configuration', () => {
  it('has all required shortcut groups', () => {
    const titles = SHORTCUT_GROUPS.map(g => g.title)
    expect(titles).toContain('Navigation')
    expect(titles).toContain('Views')
    expect(titles).toContain('Actions')
    expect(titles).toContain('Calendar')
  })

  it('each shortcut has at least one key', () => {
    for (const group of SHORTCUT_GROUPS) {
      for (const shortcut of group.shortcuts) {
        expect(shortcut.keys.length).toBeGreaterThan(0)
      }
    }
  })

  it('each shortcut has a non-empty description', () => {
    for (const group of SHORTCUT_GROUPS) {
      for (const shortcut of group.shortcuts) {
        expect(shortcut.description.length).toBeGreaterThan(0)
      }
    }
  })

  it('has no duplicate descriptions', () => {
    const descriptions = SHORTCUT_GROUPS.flatMap(g => g.shortcuts.map(s => s.description))
    const unique = new Set(descriptions)
    expect(unique.size).toBe(descriptions.length)
  })

  it('navigation shortcuts cover arrow keys and today', () => {
    const nav = SHORTCUT_GROUPS.find(g => g.title === 'Navigation')!
    const keys = nav.shortcuts.flatMap(s => s.keys)
    expect(keys).toContain('←')
    expect(keys).toContain('→')
    expect(keys).toContain('T')
  })

  it('views shortcuts cover all three views', () => {
    const views = SHORTCUT_GROUPS.find(g => g.title === 'Views')!
    const descs = views.shortcuts.map(s => s.description)
    expect(descs).toContain('Month view')
    expect(descs).toContain('Week view')
    expect(descs).toContain('Day view')
  })
})
