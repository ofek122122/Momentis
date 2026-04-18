import type { LucideIcon } from 'lucide-react'
import {
  Zap,
  Mic,
  Image as ImageIcon,
  Sparkles,
  Keyboard,
  Link as LinkIcon,
  Calendar,
  Compass,
  Users,
  Lock,
  FileDown,
  Coffee,
} from 'lucide-react'

export type LessonKind = 'read' | 'try' | 'watch'
export type TrackId = 'quickstart' | 'voice' | 'ai' | 'power'

export type Lesson = {
  id: string
  title: string
  summary: string
  minutes: number
  kind: LessonKind
  track: TrackId
  icon: LucideIcon
  badge?: 'new' | 'popular' | 'short'
}

export type Track = {
  id: TrackId
  label: string
  tag: string
  description: string
  minutes: number
  icon: LucideIcon
}

export const TRACKS: Track[] = [
  {
    id: 'quickstart',
    label: 'Quickstart',
    tag: 'Start here',
    description:
      "The 7-minute tour. By the end you'll have your calendar connected, one event parsed from plain text, and a shortcut bound.",
    minutes: 7,
    icon: Compass,
  },
  {
    id: 'voice',
    label: 'Voice-first scheduling',
    tag: '10 min',
    description:
      'Dump your week on a walk and arrive home to a planned schedule. We cover Deepgram, noisy environments, and multilingual input.',
    minutes: 10,
    icon: Mic,
  },
  {
    id: 'ai',
    label: 'AI parsing, quietly',
    tag: '15 min',
    description:
      "How our hybrid parser blends chrono-node with Gemini 2.5 Flash. Where it's fast and free, where it calls the model, and how it degrades gracefully.",
    minutes: 15,
    icon: Sparkles,
  },
  {
    id: 'power',
    label: 'Power user',
    tag: '30 min',
    description:
      "Keyboard shortcuts, templates, recurring rules, focus blocks, and the smart-suggest engine. Everything that doesn't fit on the homepage.",
    minutes: 30,
    icon: Zap,
  },
]

export const LESSONS: Lesson[] = [
  {
    id: 'connect-google',
    title: 'Connect your Google Calendar',
    summary: 'OAuth flow, scopes we request (and the ones we don\'t), and how to revoke.',
    minutes: 3,
    kind: 'read',
    track: 'quickstart',
    icon: LinkIcon,
    badge: 'short',
  },
  {
    id: 'first-event',
    title: 'Create your first event from plain text',
    summary: 'Type "dentist thursday 3pm" and watch chrono-node pick the right Thursday.',
    minutes: 2,
    kind: 'try',
    track: 'quickstart',
    icon: Calendar,
    badge: 'popular',
  },
  {
    id: 'shortcut-cheatsheet',
    title: 'The 9-shortcut cheatsheet',
    summary: 'M, W, D, T, arrows, and the magical `?`. Learn it once, keep it forever.',
    minutes: 2,
    kind: 'read',
    track: 'quickstart',
    icon: Keyboard,
    badge: 'short',
  },

  {
    id: 'voice-basics',
    title: 'Voice input from your phone',
    summary: 'Web-standard permissions, audio codecs, and how we pick the right format per browser.',
    minutes: 4,
    kind: 'watch',
    track: 'voice',
    icon: Mic,
  },
  {
    id: 'voice-walks',
    title: 'The walk-home planning ritual',
    summary: "A three-paragraph technique for dumping a week's worth of commitments into Calendro in one pass.",
    minutes: 3,
    kind: 'read',
    track: 'voice',
    icon: Coffee,
    badge: 'popular',
  },
  {
    id: 'voice-noisy',
    title: 'Noisy rooms, multi-lingual, accented speech',
    summary: 'What Deepgram Nova-3 handles well, and the three situations where you should switch to text.',
    minutes: 3,
    kind: 'read',
    track: 'voice',
    icon: Mic,
  },

  {
    id: 'ai-hybrid',
    title: 'Hybrid parsing: chrono first, Gemini second',
    summary: 'Why we don\'t call the AI for "tomorrow at 3pm". How we know when to escalate.',
    minutes: 5,
    kind: 'read',
    track: 'ai',
    icon: Sparkles,
    badge: 'new',
  },
  {
    id: 'ai-image',
    title: 'Parse a printed schedule from a photo',
    summary: 'School calendars, doctor\'s notes, conference agendas. The image parser in 90 seconds.',
    minutes: 4,
    kind: 'try',
    track: 'ai',
    icon: ImageIcon,
    badge: 'popular',
  },
  {
    id: 'ai-limits',
    title: 'When the AI gets it wrong (and what to do)',
    summary: 'The three failure modes we\'ve documented. How to correct them in one click without losing your place.',
    minutes: 4,
    kind: 'read',
    track: 'ai',
    icon: Compass,
  },

  {
    id: 'power-templates',
    title: 'Template your week',
    summary: 'Weekly rhythms as reusable blocks. Monday standups, Friday reviews, founder dinners.',
    minutes: 6,
    kind: 'try',
    track: 'power',
    icon: Calendar,
  },
  {
    id: 'power-recurrence',
    title: 'Recurring events, the rare-but-important ones',
    summary: 'RRULE-level control without touching RFC 5545. Every-other-Tuesday, the last Friday of each quarter.',
    minutes: 8,
    kind: 'read',
    track: 'power',
    icon: Zap,
  },
  {
    id: 'power-sharing',
    title: 'Share a calendar without sharing your life',
    summary: 'Scoped tokens, busy-only views, and the quiet diplomacy of saying "I\'m unavailable" beautifully.',
    minutes: 7,
    kind: 'read',
    track: 'power',
    icon: Users,
  },
  {
    id: 'power-privacy',
    title: 'Privacy primer for shared workspaces',
    summary: "We collect as little as possible. Here's exactly what the AI sees and when.",
    minutes: 6,
    kind: 'read',
    track: 'power',
    icon: Lock,
    badge: 'new',
  },
]

export const LEARNING_PATHS = [
  {
    id: 'new-to-calendro',
    title: 'Brand new to Calendro',
    minutes: 12,
    lessons: ['connect-google', 'first-event', 'shortcut-cheatsheet'],
    note: 'Run this in one sitting with a coffee. Bring a real event you\'re avoiding.',
  },
  {
    id: 'founder-workflow',
    title: 'Founder workflow',
    minutes: 20,
    lessons: ['voice-walks', 'ai-image', 'power-templates', 'power-recurrence'],
    note: 'Designed around the founders in our first 500 accounts. Voice input ends up being the star.',
  },
  {
    id: 'ops-and-chief-of-staff',
    title: 'Ops & chief of staff',
    minutes: 24,
    lessons: ['ai-hybrid', 'power-templates', 'power-sharing', 'power-privacy'],
    note: 'Shared calendars, privacy boundaries, and templating one-off rhythms.',
  },
]

export function lessonsByTrack(track: TrackId): Lesson[] {
  return LESSONS.filter((l) => l.track === track)
}

export function findLesson(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id)
}

export const KIND_LABEL: Record<LessonKind, string> = {
  read: 'Read',
  try: 'Try it',
  watch: 'Watch',
}

export const LEARN_STATS = {
  lessons: LESSONS.length,
  tracks: TRACKS.length,
  totalMinutes: LESSONS.reduce((a, b) => a + b.minutes, 0),
  paths: LEARNING_PATHS.length,
}
