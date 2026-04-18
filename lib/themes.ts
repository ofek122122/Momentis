export interface MomentiesTheme {
  id: string
  name: string
  description: string
  isPro: boolean
  colors: {
    background: string
    foreground: string
    card: string
    gold: string
    primary: string
    muted: string
    mutedForeground: string
    border: string
  }
}

export const THEMES: MomentiesTheme[] = [
  {
    id: 'midnight-gold',
    name: 'Midnight Gold',
    description: 'The signature Momenties look',
    isPro: false,
    colors: {
      background: '#0c0c0f',
      foreground: '#f0ece3',
      card: '#131318',
      gold: '#c5a35c',
      primary: '#c5a35c',
      muted: '#1a1a22',
      mutedForeground: '#6b6880',
      border: 'rgba(255, 255, 255, 0.07)',
    },
  },
  {
    id: 'ocean-blue',
    name: 'Ocean Blue',
    description: 'Deep sea serenity',
    isPro: true,
    colors: {
      background: '#0a0f1a',
      foreground: '#e8edf5',
      card: '#111827',
      gold: '#60a5fa',
      primary: '#60a5fa',
      muted: '#1e293b',
      mutedForeground: '#64748b',
      border: 'rgba(96, 165, 250, 0.1)',
    },
  },
  {
    id: 'forest-green',
    name: 'Forest Green',
    description: 'Natural and calm',
    isPro: true,
    colors: {
      background: '#0a120e',
      foreground: '#e8f0ec',
      card: '#111f18',
      gold: '#4ade80',
      primary: '#4ade80',
      muted: '#1a2e22',
      mutedForeground: '#5c7a6b',
      border: 'rgba(74, 222, 128, 0.1)',
    },
  },
  {
    id: 'sunset-purple',
    name: 'Sunset Purple',
    description: 'Vibrant and creative',
    isPro: true,
    colors: {
      background: '#0f0a18',
      foreground: '#f0ecf8',
      card: '#1a1128',
      gold: '#a78bfa',
      primary: '#a78bfa',
      muted: '#221a30',
      mutedForeground: '#7c6b99',
      border: 'rgba(167, 139, 250, 0.1)',
    },
  },
  {
    id: 'rose-gold',
    name: 'Rose Gold',
    description: 'Elegant and refined',
    isPro: true,
    colors: {
      background: '#120c0e',
      foreground: '#f5e8ec',
      card: '#1f1318',
      gold: '#f472b6',
      primary: '#f472b6',
      muted: '#2a1a22',
      mutedForeground: '#99607a',
      border: 'rgba(244, 114, 182, 0.1)',
    },
  },
]

export function getTheme(id: string): MomentiesTheme {
  return THEMES.find(t => t.id === id) ?? THEMES[0]
}

export function applyTheme(theme: MomentiesTheme): void {
  const root = document.documentElement
  root.style.setProperty('--background', theme.colors.background)
  root.style.setProperty('--foreground', theme.colors.foreground)
  root.style.setProperty('--card', theme.colors.card)
  root.style.setProperty('--card-foreground', theme.colors.foreground)
  root.style.setProperty('--gold', theme.colors.gold)
  root.style.setProperty('--primary', theme.colors.primary)
  root.style.setProperty('--primary-foreground', theme.colors.background)
  root.style.setProperty('--muted', theme.colors.muted)
  root.style.setProperty('--muted-foreground', theme.colors.mutedForeground)
  root.style.setProperty('--border', theme.colors.border)
  root.style.setProperty('--ring', theme.colors.gold)
  root.style.setProperty('--popover', theme.colors.muted)
  root.style.setProperty('--popover-foreground', theme.colors.foreground)
  root.style.setProperty('--secondary', theme.colors.muted)
  root.style.setProperty('--secondary-foreground', theme.colors.foreground)
  root.style.setProperty('--accent', theme.colors.muted)
  root.style.setProperty('--accent-foreground', theme.colors.foreground)
}
