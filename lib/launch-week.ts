import type { LucideIcon } from 'lucide-react'
import {
  Zap,
  Mic,
  Sparkles,
  Image as ImageIcon,
  Lock,
  Keyboard,
  Calendar,
  Bell,
  Users,
  Globe,
  Wand2,
  TerminalSquare,
} from 'lucide-react'

export type LaunchDay = {
  n: number
  slug: string
  date: string
  weekday: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
  eyebrow: string
  title: string
  lede: string
  body: string
  headline: { label: string; icon: LucideIcon; tone: 'gold' | 'violet' | 'emerald' | 'rose' | 'sky' }
  shipped: { icon: LucideIcon; title: string; note: string }[]
  teamNote: { name: string; role: string; quote: string }
  stats: { label: string; value: string }[]
}

export const LAUNCH_WEEK = {
  n: 1,
  title: 'Launch Week 01',
  tagline: 'Five days. Five quiet, serious upgrades. No ad spend.',
  start: '2026-04-14',
  end: '2026-04-18',
  commits: 217,
  prsMerged: 41,
  countries: 37,
  quoteOfTheWeek: {
    quote:
      "I didn't know a launch week could feel calm. You shipped 5 things and I noticed exactly 5 things. That's a rare ratio.",
    author: 'Mei Lin',
    role: 'Essayist, The Slow Page',
  },
}

export const DAYS: LaunchDay[] = [
  {
    n: 1,
    slug: 'day-one',
    date: '2026-04-14',
    weekday: 'Mon',
    eyebrow: 'Day one',
    title: 'The hybrid parser, redesigned.',
    lede: 'Chrono-node first. Gemini only when it earns it. 3× faster on common phrases, and a visible gold dot when the AI gets involved.',
    body: 'Momenties has always used a hybrid parser — local NLP for the obvious cases, AI for the ambiguous ones. Today we rewrote the arbiter that decides when to call the model. The result: 86% of events never touch the AI, which means faster parses, lower costs, and a meaningfully quieter network tab.',
    headline: { label: 'Smarter parser', icon: Sparkles, tone: 'gold' },
    shipped: [
      { icon: Sparkles, title: 'Arbiter v2', note: 'New confidence scorer picks local vs AI path per token.' },
      { icon: Zap, title: '3× faster median', note: 'From 410ms to 130ms on common event phrasing.' },
      { icon: Wand2, title: 'AI source indicator', note: 'A gold dot appears in the preview when the AI contributed.' },
    ],
    teamNote: {
      name: 'Oren Weiss',
      role: 'Cofounder & AI lead',
      quote:
        "We spent three weeks measuring the parser instead of fixing it. Turns out you can't fix what you haven't measured. The fix took one afternoon.",
    },
    stats: [
      { label: 'p50 parse time', value: '130ms' },
      { label: 'AI calls avoided', value: '86%' },
      { label: 'Cost per event', value: '−71%' },
    ],
  },
  {
    n: 2,
    slug: 'day-two',
    date: '2026-04-15',
    weekday: 'Tue',
    eyebrow: 'Day two',
    title: 'Voice, in any language, at 30 km/h.',
    lede: 'Deepgram Nova-3 under the hood, adaptive codec negotiation, and a new noise-cancellation pre-pass for noisy sidewalks and trains.',
    body: "We heard it too many times to ignore: 'I love voice input but it fails on my commute.' So we added adaptive codec detection — Safari gets AAC, Chrome gets Opus, Firefox gets Opus-in-WebM — and a small noise-cancellation pre-pass. Dictated events from walks, trains, and cars are now 41% more accurate, measured on a 400-sample internal set.",
    headline: { label: 'Voice anywhere', icon: Mic, tone: 'violet' },
    shipped: [
      { icon: Mic, title: 'Adaptive codec', note: 'Browser-aware audio format selection. No more 400s on Safari.' },
      { icon: Globe, title: '28 languages', note: 'Swedish, Hindi, and Brazilian Portuguese included at launch.' },
      { icon: Zap, title: 'Noise pre-pass', note: 'A small onboard filter runs before the upload.' },
    ],
    teamNote: {
      name: 'Iris Koval',
      role: 'Cofounder & Design',
      quote:
        "The best voice experiences don't feel like voice. They feel like the calendar heard you correctly on the first try.",
    },
    stats: [
      { label: 'Accuracy gain', value: '+41%' },
      { label: 'Languages', value: '28' },
      { label: 'Mean audio length', value: '7.8s' },
    ],
  },
  {
    n: 3,
    slug: 'day-three',
    date: '2026-04-16',
    weekday: 'Wed',
    eyebrow: 'Day three',
    title: 'Snap a photo. Ship a week.',
    lede: 'The image parser now reads school calendars, conference agendas, doctor\'s notes, and wedding invites. Every date on the page, every time.',
    body: "Image parsing is where Gemini 2.5 Flash earns its keep. We expanded our internal fixture set from 80 images to 312, fixed the three most common failure modes (low contrast, handwritten corrections, non-Latin scripts), and added a review step so you always see everything before it's on your calendar.",
    headline: { label: 'Image parser 2.0', icon: ImageIcon, tone: 'emerald' },
    shipped: [
      { icon: ImageIcon, title: 'Batch preview', note: 'See every event a photo produced before committing.' },
      { icon: Calendar, title: 'Smart dedup', note: 'We match your calendar and only add what\'s new.' },
      { icon: Wand2, title: 'Handwriting support', note: 'Notes from a Sharpie now parse as well as laser prints.' },
    ],
    teamNote: {
      name: 'Akinyi Osei',
      role: 'Early beta user, parent of two',
      quote:
        "I snapped a term sheet from my daughter's school. 47 events. Every one landed. I put the phone down and cried a little.",
    },
    stats: [
      { label: 'Fixture set', value: '312 images' },
      { label: 'Success rate', value: '97.4%' },
      { label: 'Events per photo', value: '14.8 avg' },
    ],
  },
  {
    n: 4,
    slug: 'day-four',
    date: '2026-04-17',
    weekday: 'Thu',
    eyebrow: 'Day four',
    title: 'A keyboard you can feel through the screen.',
    lede: '9 new shortcuts. A command palette. And a printable cheatsheet PDF that fits on one page at A4.',
    body: "Power users were already using Momenties fast. Today we made them faster. The command palette (⌘K) surfaces every action in one place. The new shortcuts cover focus mode, the voice recorder, templates, and recurring rules. The cheatsheet PDF is downloadable from the new /learn page — and we sent a printed one to the first 500 annual subscribers.",
    headline: { label: 'Keyboard kit', icon: Keyboard, tone: 'sky' },
    shipped: [
      { icon: TerminalSquare, title: 'Command palette', note: '⌘K opens a fuzzy finder over every action.' },
      { icon: Keyboard, title: '9 new shortcuts', note: 'Focus, voice, templates, and recurring rules.' },
      { icon: Bell, title: 'Press ?', note: 'Shortcuts overlay now shows inline tutorials.' },
    ],
    teamNote: {
      name: 'Hana Kobayashi',
      role: 'iOS engineer',
      quote:
        "The command palette is the thing that made me delete two other calendar tools from my dock. Clean, no onboarding cost, keyboard-first.",
    },
    stats: [
      { label: 'New shortcuts', value: '9' },
      { label: 'Palette actions', value: '47' },
      { label: 'Cheatsheets mailed', value: '500' },
    ],
  },
  {
    n: 5,
    slug: 'day-five',
    date: '2026-04-18',
    weekday: 'Fri',
    eyebrow: 'Day five',
    title: 'Teams, quietly. And SSO for the serious ones.',
    lede: 'Workspaces with per-member privacy scopes, SAML SSO, audit logs, and a quiet new Enterprise tier.',
    body: "We held this one for the end of the week because it's the biggest. Workspaces let teams share calendars without sharing lives — busy-only views, scoped invites, revocable tokens. SAML SSO ships today for accounts on the Enterprise plan, along with read-only audit logs and a 90-day export window. Our goal: teams get the benefit of Momenties without giving up any of the privacy individuals already had.",
    headline: { label: 'Momenties for teams', icon: Users, tone: 'rose' },
    shipped: [
      { icon: Users, title: 'Workspaces', note: 'Shared calendars with per-member privacy scopes.' },
      { icon: Lock, title: 'SAML SSO', note: 'Okta, Azure AD, and Google Workspace, all on Enterprise.' },
      { icon: TerminalSquare, title: 'Audit logs', note: '90-day export window, JSON and CSV.' },
    ],
    teamNote: {
      name: 'Pauline Rivera',
      role: 'Chief of Staff, design-forward Series B',
      quote:
        "You shipped a team product and I didn't get a marketing email about it. That tells me everything about how you'll treat our company.",
    },
    stats: [
      { label: 'SSO providers', value: '3' },
      { label: 'Audit log retention', value: '90 days' },
      { label: 'Workspace seats', value: 'Unlimited' },
    ],
  },
]

export function dayBySlug(slug: string): LaunchDay | undefined {
  return DAYS.find((d) => d.slug === slug)
}

export const TONE_CLASSES: Record<LaunchDay['headline']['tone'], { bg: string; fg: string; ring: string }> = {
  gold: { bg: 'from-gold/25 to-gold/5', fg: 'text-gold', ring: 'border-gold/25' },
  violet: { bg: 'from-violet-400/20 to-violet-400/5', fg: 'text-violet-300', ring: 'border-violet-300/20' },
  emerald: { bg: 'from-emerald-400/20 to-emerald-400/5', fg: 'text-emerald-300', ring: 'border-emerald-300/20' },
  sky: { bg: 'from-sky-400/20 to-sky-400/5', fg: 'text-sky-300', ring: 'border-sky-300/20' },
  rose: { bg: 'from-rose-400/20 to-rose-400/5', fg: 'text-rose-300', ring: 'border-rose-300/20' },
}
