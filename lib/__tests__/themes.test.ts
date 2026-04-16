import { describe, it, expect } from 'vitest'
import { THEMES, getTheme } from '@/lib/themes'

describe('themes', () => {
  it('has at least 5 themes', () => {
    expect(THEMES.length).toBeGreaterThanOrEqual(5)
  })

  it('has midnight-gold as default', () => {
    const defaultTheme = THEMES[0]
    expect(defaultTheme.id).toBe('midnight-gold')
    expect(defaultTheme.isPro).toBe(false)
  })

  it('getTheme returns the correct theme', () => {
    const theme = getTheme('ocean-blue')
    expect(theme.name).toBe('Ocean Blue')
    expect(theme.isPro).toBe(true)
  })

  it('getTheme returns default for unknown id', () => {
    const theme = getTheme('nonexistent')
    expect(theme.id).toBe('midnight-gold')
  })

  it('all themes have required color fields', () => {
    for (const theme of THEMES) {
      expect(theme.colors.background).toBeDefined()
      expect(theme.colors.foreground).toBeDefined()
      expect(theme.colors.gold).toBeDefined()
      expect(theme.colors.card).toBeDefined()
    }
  })

  it('only midnight-gold is free', () => {
    const freeThemes = THEMES.filter(t => !t.isPro)
    expect(freeThemes).toHaveLength(1)
    expect(freeThemes[0].id).toBe('midnight-gold')
  })
})
