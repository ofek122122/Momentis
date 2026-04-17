export type ChangeType = 'new' | 'improved' | 'fixed' | 'security' | 'performance'
export type Change = { type: ChangeType; text: string }
export type ReleaseEntry = {
  version: string
  date: string
  title: string
  summary: string
  changes: Change[]
}
export type MonthGroup = { month: string; entries: ReleaseEntry[] }

export const CHANGELOG: MonthGroup[] = [
  {
    month: 'April 2026',
    entries: [
      {
        version: '1.4.0',
        date: '2026-04-12',
        title: 'Smart time suggestions',
        summary:
          'AI now proposes optimal slots when you omit the time, accuracy is up to 98%, and keyboard shortcuts are one keystroke away.',
        changes: [
          { type: 'new', text: 'AI now proposes optimal time slots when you omit the time — based on your meetings, focus hours, and timezone.' },
          { type: 'new', text: 'Keyboard shortcuts help overlay — press ? from anywhere in the app.' },
          { type: 'improved', text: 'Parse accuracy improved to 98% across English, Spanish, French, and German.' },
          { type: 'fixed', text: 'Events created near midnight no longer roll into the next day in edge timezones.' },
        ],
      },
      {
        version: '1.3.2',
        date: '2026-04-03',
        title: 'A quieter Monday',
        summary:
          'Morning briefings summarize the week, Apple Calendar respects TZID, and the grid renders faster on mobile Safari.',
        changes: [
          { type: 'improved', text: 'Monday morning briefings now summarize the week, not just the day.' },
          { type: 'fixed', text: 'Apple Calendar events with TZID no longer default to UTC.' },
          { type: 'performance', text: 'Calendar grid now renders 40% faster on mobile Safari.' },
        ],
      },
    ],
  },
  {
    month: 'March 2026',
    entries: [
      {
        version: '1.3.0',
        date: '2026-03-20',
        title: 'Accessibility overhaul',
        summary:
          'Full WCAG 2.2 AA compliance, audit-logged sessions for enterprise, and a skip-to-content link on every page.',
        changes: [
          { type: 'new', text: 'Full WCAG 2.2 AA compliance across all primary surfaces.' },
          { type: 'new', text: 'Skip-to-content link and improved keyboard navigation in the sidebar.' },
          { type: 'improved', text: 'Aria-labels added to every icon button.' },
          { type: 'security', text: 'Audit-logged session handling for enterprise tier.' },
        ],
      },
      {
        version: '1.2.5',
        date: '2026-03-06',
        title: 'Voice gets better',
        summary:
          'Deepgram Nova-3, sub-second voice transcription, and multi-event dictation in a single recording.',
        changes: [
          { type: 'improved', text: 'Deepgram Nova-3 upgraded; voice transcription latency down to ~0.9s.' },
          { type: 'improved', text: 'Voice now handles multi-event dictation in one recording.' },
          { type: 'fixed', text: 'Voice recording no longer silently fails on Firefox for Android.' },
        ],
      },
    ],
  },
  {
    month: 'February 2026',
    entries: [
      {
        version: '1.2.0',
        date: '2026-02-21',
        title: 'Daily briefings & weekly insights',
        summary:
          'A warm morning summary lands in your inbox. A weekly insights panel shows your meeting rhythm. Drag-drop is smoother on touch.',
        changes: [
          { type: 'new', text: 'AI daily briefing lands in your inbox (or app) every morning at 7.' },
          { type: 'new', text: 'Weekly insights panel in Analytics — meeting load, focus ratio, rhythm charts.' },
          { type: 'improved', text: 'Dragging events is now buttery on touch devices.' },
        ],
      },
      {
        version: '1.1.0',
        date: '2026-02-08',
        title: 'Apple Calendar arrives',
        summary:
          'Full CalDAV sync with iCloud — unified view, two-way sync, race-free token refresh.',
        changes: [
          { type: 'new', text: 'Full CalDAV sync with iCloud Calendar. Works with app passwords.' },
          { type: 'new', text: 'Unified calendar view — Google and Apple events side by side.' },
          { type: 'fixed', text: 'Token refresh race condition on concurrent API calls.' },
        ],
      },
    ],
  },
  {
    month: 'January 2026',
    entries: [
      {
        version: '1.0.0',
        date: '2026-01-15',
        title: 'Calendro is open to the world',
        summary:
          'Public beta: three input methods, Google Calendar sync, and five hand-tuned themes.',
        changes: [
          { type: 'new', text: 'Public beta launches.' },
          { type: 'new', text: 'Three input methods: type, voice, photo.' },
          { type: 'new', text: 'Google Calendar two-way sync.' },
          { type: 'new', text: 'Five hand-tuned themes: Obsidian, Paper, Harvest, Botanical, Aurora.' },
        ],
      },
    ],
  },
]

export function allEntries(): ReleaseEntry[] {
  return CHANGELOG.flatMap((g) => g.entries)
}

export function getRelease(version: string) {
  return allEntries().find((e) => e.version === version) ?? null
}
