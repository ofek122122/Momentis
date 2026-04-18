import type { LucideIcon } from 'lucide-react'
import {
  Sparkles,
  Mic,
  Link as LinkIcon,
  MessageSquare,
  Brain,
  MapPin,
  TerminalSquare,
  Calendar,
  Users,
  Eye,
  Image as ImageIcon,
  Zap,
} from 'lucide-react'

export type LabStatus = 'planning' | 'testing' | 'ready'
export type LabRisk = 'low' | 'medium' | 'high'

export type ActiveLab = {
  id: string
  title: string
  oneLiner: string
  body: string
  status: LabStatus
  progress: number // 0–100
  risk: LabRisk
  icon: LucideIcon
  lead: string
  expectedShip: string
  testers: number
}

export type GraduatedLab = {
  id: string
  title: string
  body: string
  icon: LucideIcon
  enteredLabs: string
  graduatedOn: string
}

export type RetiredLab = {
  id: string
  title: string
  body: string
  reason: string
  icon: LucideIcon
  retiredOn: string
}

export const STATUS_COPY: Record<LabStatus, { label: string; hint: string }> = {
  planning: { label: 'Planning', hint: 'Designs only. No user sees this yet.' },
  testing: { label: 'Testing', hint: 'Available to opted-in testers behind a flag.' },
  ready: { label: 'Ready', hint: 'Likely to graduate in the next release.' },
}

export const RISK_COPY: Record<LabRisk, string> = {
  low: 'Low risk',
  medium: 'Medium risk',
  high: 'High risk',
}

export const ACTIVE_LABS: ActiveLab[] = [
  {
    id: 'conversational-parser',
    title: 'Conversational parser',
    oneLiner:
      'Keep a short conversation with the calendar — clarify, correct, commit — without leaving the input bar.',
    body:
      'Instead of auto-creating an event when the parse is ambiguous, we ask a single follow-up question. "Which Thursday did you mean?" "Is this in your local timezone?" You answer in one tap or one phrase. Internal tests suggest 43% fewer incorrect events on ambiguous input.',
    status: 'testing',
    progress: 62,
    risk: 'low',
    icon: MessageSquare,
    lead: 'Oren',
    expectedShip: 'Q2 2026',
    testers: 184,
  },
  {
    id: 'memory',
    title: 'Calendar memory',
    oneLiner:
      'Let Momenties remember your previous intents — "same as last Tuesday" — without mining your data.',
    body:
      "A tightly scoped, on-device memory layer that caches your last ~50 parsed events. The model never sees the memory. Only the parser's local arbiter does, and it's used exclusively to resolve ambiguous references like 'the usual team standup'. Everything stays in your browser.",
    status: 'planning',
    progress: 18,
    risk: 'medium',
    icon: Brain,
    lead: 'Iris',
    expectedShip: 'Q3 2026',
    testers: 0,
  },
  {
    id: 'location-aware',
    title: 'Location-aware suggestions',
    oneLiner:
      'When you say "coffee," offer to add the café you went to last time — without asking your whereabouts.',
    body:
      "An on-device store of venue names you've typed or accepted before, paired with event categories. No GPS, no IP-based inference. Only the places you've already entered show up as suggestions.",
    status: 'planning',
    progress: 22,
    risk: 'medium',
    icon: MapPin,
    lead: 'Oren',
    expectedShip: 'Q3 2026',
    testers: 0,
  },
  {
    id: 'momenties-cli',
    title: 'Momenties CLI',
    oneLiner: 'A terminal binary for power users. Parse events from stdin, pipe iCal out.',
    body:
      "`momenties add 'dentist thu 3pm'` from your shell. Pipes. Composability with `cron`, `at`, and your own scripts. Builds available for macOS (arm64), Linux (x86_64), and Windows (x86_64). Signed binaries. OSS license expected.",
    status: 'ready',
    progress: 91,
    risk: 'low',
    icon: TerminalSquare,
    lead: 'Oren',
    expectedShip: 'May 2026',
    testers: 318,
  },
  {
    id: 'image-handwriting',
    title: 'Handwriting-first image parser',
    oneLiner:
      'A dedicated model path for scanned or photographed handwritten notes. Family calendars, napkin lists, teacher notes.',
    body:
      "Today our image parser assumes typeset input. This lab adds a pre-pass that detects handwriting and routes to a dedicated prompt and model. Early results: 31% more events extracted from handwritten inputs, with a visible 'handwritten' tag on every extracted event so you can double-check.",
    status: 'testing',
    progress: 71,
    risk: 'medium',
    icon: ImageIcon,
    lead: 'Iris',
    expectedShip: 'Q2 2026',
    testers: 92,
  },
]

export const GRADUATED: GraduatedLab[] = [
  {
    id: 'voice-nova',
    title: 'Voice with Deepgram Nova-3',
    body: 'The voice input pipeline started in Labs as "voice v2." It graduated to everyone during Launch Week 01.',
    icon: Mic,
    enteredLabs: 'Jan 2026',
    graduatedOn: 'Apr 15, 2026',
  },
  {
    id: 'command-palette',
    title: 'Command palette (⌘K)',
    body: 'A fuzzy finder over every action in the app. Graduated in Launch Week 01 after 8 weeks of testing.',
    icon: TerminalSquare,
    enteredLabs: 'Feb 2026',
    graduatedOn: 'Apr 17, 2026',
  },
  {
    id: 'templates',
    title: 'Weekly templates',
    body: 'Save a week as a reusable template and stamp it onto future weeks. Now in the main app under /templates.',
    icon: Calendar,
    enteredLabs: 'Nov 2025',
    graduatedOn: 'Feb 2026',
  },
  {
    id: 'workspaces',
    title: 'Workspaces',
    body: 'Shared calendars with per-member scopes. Graduated in Launch Week 01 day five.',
    icon: Users,
    enteredLabs: 'Jan 2026',
    graduatedOn: 'Apr 18, 2026',
  },
]

export const RETIRED: RetiredLab[] = [
  {
    id: 'ai-advisor',
    title: 'The AI advisor',
    body: 'A tab that suggested when to schedule deep work, social time, exercise. It shipped in Labs for six weeks.',
    reason:
      'Our users did not want an advisor. They wanted a parser. The feedback was unanimous, and we respected it. Killed the feature without a replacement. No regret.',
    icon: Sparkles,
    retiredOn: 'March 2026',
  },
  {
    id: 'shared-public-cal',
    title: 'Public shareable calendars',
    body: 'A one-click "share this calendar publicly" button, like a Google Calendar embed.',
    reason:
      'Too many cases of accidental oversharing during the test period. We decided the risk to the least-careful user outweighed the convenience for the most-technical. Killed it and designed a safer scoped-link flow instead.',
    icon: Eye,
    retiredOn: 'February 2026',
  },
  {
    id: 'webhook-relay',
    title: 'Instant webhook relay',
    body: 'A server that re-broadcast Google Calendar events to your Slack, Discord, or HTTP endpoint.',
    reason:
      "Perfectly fine feature. But we were building the wrong product adjacent to the one we care about. Open-sourced the prototype as 'Momenties-relay' and handed it to the community.",
    icon: Zap,
    retiredOn: 'January 2026',
  },
]

export const LABS_STATS = {
  active: ACTIVE_LABS.length,
  graduated: GRADUATED.length,
  retired: RETIRED.length,
  totalTesters: ACTIVE_LABS.reduce((a, b) => a + b.testers, 0),
}

export function statusTone(status: LabStatus): { bg: string; fg: string; ring: string } {
  switch (status) {
    case 'planning':
      return { bg: 'from-sky-400/15 to-sky-400/5', fg: 'text-sky-300', ring: 'border-sky-300/20' }
    case 'testing':
      return { bg: 'from-gold/20 to-gold/5', fg: 'text-gold', ring: 'border-gold/25' }
    case 'ready':
      return { bg: 'from-emerald-400/20 to-emerald-400/5', fg: 'text-emerald-300', ring: 'border-emerald-300/20' }
  }
}

export const OPT_IN = {
  command: 'momenties labs enable conversational-parser',
  url: '/settings#labs',
  forumUrl: '/community',
  emailUrl: '/contact?subject=Labs',
}

export const ICON_FALLBACK: LucideIcon = LinkIcon
