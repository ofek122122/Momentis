import type { LucideIcon } from 'lucide-react'
import {
  Sparkles,
  Mic,
  Image as ImageIcon,
  Users,
  Keyboard,
  FlaskConical,
  GraduationCap,
  Trash2,
  Globe,
  Heart,
  BookOpen,
  Mail,
} from 'lucide-react'

export const YEAR = {
  label: '2026',
  subtitle: 'A year in a quiet calendar',
  tagline:
    'Twelve months. One manifesto. Four tracks of lessons. Eight podcast episodes. Three features we killed on purpose. And a small team that, for the first time, could introduce itself as a company instead of a project.',
  start: '2026-01-05',
  end: '2026-12-19',
}

export const HEADLINE_STATS: { label: string; value: string; note: string; icon: LucideIcon }[] = [
  {
    label: 'Events parsed',
    value: '1.82M',
    note: 'up from 0.4M last year · 86% handled by the local parser',
    icon: Sparkles,
  },
  {
    label: 'Voice dictations',
    value: '312k',
    note: 'Deepgram Nova-3 · 28 languages live · 41% accuracy lift on commutes',
    icon: Mic,
  },
  {
    label: 'Photos → events',
    value: '48k',
    note: 'Image parser 2.0 · handwriting support shipped in Launch Week 01',
    icon: ImageIcon,
  },
  {
    label: 'Countries live',
    value: '37',
    note: 'active weekly users in each · Nova Scotia to Nusantara',
    icon: Globe,
  },
  {
    label: 'Workspaces',
    value: '1,204',
    note: 'shared team calendars · SSO available on Enterprise',
    icon: Users,
  },
  {
    label: 'Testers in Labs',
    value: '594',
    note: 'across 5 active experiments · 4 graduated · 3 retired',
    icon: FlaskConical,
  },
]

export type Moment = {
  month: string
  monthIdx: number
  title: string
  body: string
  icon: LucideIcon
  linkLabel?: string
  linkHref?: string
  tone: 'gold' | 'violet' | 'emerald' | 'sky' | 'rose'
}

export const MOMENTS: Moment[] = [
  {
    month: 'January',
    monthIdx: 1,
    title: 'We published the manifesto.',
    body: 'Three months of editing, eight theses, zero edits after publishing. It became the shape of every argument we had for the rest of the year.',
    icon: BookOpen,
    linkLabel: 'Read the manifesto',
    linkHref: '/manifesto',
    tone: 'gold',
  },
  {
    month: 'February',
    monthIdx: 2,
    title: 'Templates landed.',
    body: 'Weekly rhythms as reusable blocks. Stamp them onto any week, edit them in place, delete them without ceremony.',
    icon: Keyboard,
    linkLabel: 'See templates',
    linkHref: '/templates',
    tone: 'violet',
  },
  {
    month: 'March',
    monthIdx: 3,
    title: 'We killed the AI advisor.',
    body: "The feature shipped in Labs for six weeks. Users were unanimous: they wanted a parser, not an advisor. So we respected the feedback and retired it without a replacement.",
    icon: Trash2,
    linkLabel: 'The retired features',
    linkHref: '/labs',
    tone: 'rose',
  },
  {
    month: 'April',
    monthIdx: 4,
    title: 'Launch Week 01 happened.',
    body: "Five days, five upgrades, zero marketing emails. The hybrid parser got 3× faster, voice went multilingual, image parsing 2.0 shipped, the command palette arrived, and workspaces graduated to the main app.",
    icon: Sparkles,
    linkLabel: 'Revisit Launch Week',
    linkHref: '/launch-week-1',
    tone: 'gold',
  },
  {
    month: 'May',
    monthIdx: 5,
    title: 'The CLI binary reached beta.',
    body: 'Signed binaries for macOS, Linux, and Windows. Pipe events in from your shell. Pipe iCal out. Composes with cron, at, and your own scripts.',
    icon: FlaskConical,
    linkLabel: 'Labs: Momenties CLI',
    linkHref: '/labs#momenties-cli',
    tone: 'sky',
  },
  {
    month: 'June',
    monthIdx: 6,
    title: 'We crossed 50,000 weekly active calendars.',
    body: "Half the growth came from word-of-mouth. The other half came from customers bringing their teams. We kept our /open page updated every Friday with the exact number.",
    icon: Users,
    linkLabel: 'See the /open dashboard',
    linkHref: '/open',
    tone: 'emerald',
  },
  {
    month: 'July',
    monthIdx: 7,
    title: 'The Quiet Hours pilot released.',
    body: 'An eight-episode podcast. Iris hosts, mixes, and edits. No sponsors, no affiliate links, no intro jingle longer than three seconds.',
    icon: Mic,
    linkLabel: 'Listen to the podcast',
    linkHref: '/podcast',
    tone: 'violet',
  },
  {
    month: 'August',
    monthIdx: 8,
    title: 'Method was written down.',
    body: 'Four numbered sections (Decide, Write, Ship, Measure), a weekly cadence, and a public list of things we refuse to do. A working document, not a declaration.',
    icon: BookOpen,
    linkLabel: 'Read the method',
    linkHref: '/method',
    tone: 'sky',
  },
  {
    month: 'September',
    monthIdx: 9,
    title: 'We graduated workspaces to Enterprise.',
    body: "SAML SSO with Okta, Azure AD, and Google Workspace. 90-day audit log export. A concierge migration program with five slots a week worldwide.",
    icon: Users,
    linkLabel: 'Enterprise',
    linkHref: '/enterprise',
    tone: 'emerald',
  },
  {
    month: 'October',
    monthIdx: 10,
    title: 'Launch Week 02 is planned.',
    body: "Conversational parser out of Labs. Calendar memory into public beta. Location-aware suggestions, opt-in only. The preview went live on /roadmap at the start of Q4.",
    icon: Sparkles,
    linkLabel: 'The roadmap',
    linkHref: '/roadmap',
    tone: 'gold',
  },
  {
    month: 'November',
    monthIdx: 11,
    title: 'Our first hire arrives.',
    body: "An engineer from an old Linear cohort joined as our first beyond-the-founders hire. Our hiring test was a reference call with the junior person, not the VP. The signal was unambiguous.",
    icon: GraduationCap,
    linkLabel: 'Our hiring method',
    linkHref: '/method#ship',
    tone: 'gold',
  },
  {
    month: 'December',
    monthIdx: 12,
    title: 'We paused.',
    body: "Three weeks off, agreed in writing at the start of the year. Nothing shipped from Dec 12 to Jan 5. The /open page stayed live, as always.",
    icon: Heart,
    linkLabel: 'What we believe',
    linkHref: '/manifesto',
    tone: 'rose',
  },
]

export const BUILT: { title: string; items: string[] }[] = [
  {
    title: 'Shipped to everyone',
    items: [
      'Arbiter v2 · hybrid parser rewritten for 3× speed',
      'Voice input in 28 languages (Deepgram Nova-3)',
      'Image parser 2.0 · handwriting support',
      'Command palette (⌘K) with 47 actions',
      '9 new keyboard shortcuts · printable cheatsheet',
      'Workspaces with per-member privacy scopes',
      'SAML SSO · Okta / Azure AD / Google Workspace',
      '90-day audit log export (JSON + CSV)',
      'Recurring events with RRULE-level control',
      'Smart time-slot suggestions in the input bar',
      'Drag-and-drop rescheduling with optimistic UI',
      'RSS feed for the blog and for launch-week updates',
    ],
  },
  {
    title: 'Shipped for developers',
    items: [
      'Public REST API with 12 endpoints',
      'CLI binaries (macOS arm64, Linux x86_64, Windows x86_64)',
      'Open metrics page (/open)',
      'Signed CLI binaries with provenance',
      'Per-endpoint OpenGraph images on /api-docs',
      'Two-way sync via Google Calendar and Microsoft Graph',
      'CalDAV support for Apple Calendar',
      'Webhooks in Labs (retired, open-sourced)',
    ],
  },
  {
    title: 'Shipped for teams',
    items: [
      'Shared calendars with scoped invites',
      'Busy-only views for privacy',
      'Team analytics in Enterprise',
      'Concierge migration with an engineer',
      '30-day white-glove support window',
      'Revocable scoped share links',
    ],
  },
]

export const KILLED: { title: string; body: string }[] = [
  {
    title: 'The AI advisor',
    body: 'Users wanted a parser, not an advisor. We killed it in March without a replacement.',
  },
  {
    title: 'Public shareable calendars',
    body: 'Too many accidental-oversharing cases in testing. Replaced with scoped share links.',
  },
  {
    title: 'The webhook relay service',
    body: "A perfectly fine feature adjacent to the wrong product. Open-sourced as 'Momenties-relay'.",
  },
]

export const NOTEWORTHY: { who: string; note: string }[] = [
  {
    who: 'Mei Lin',
    note: 'The essay "An Exhale, At 9pm" is what the podcast is named after.',
  },
  {
    who: 'Pauline Rivera',
    note: 'Ran a 24-person offsite on Momenties and then talked about it for 38 minutes on the podcast.',
  },
  {
    who: 'Tomás Levi',
    note: 'Gave us the four-paragraph walk-home dictation technique.',
  },
  {
    who: 'Akinyi Osei',
    note: 'Sent us a thank-you voice note that made the whole team cry on a Tuesday.',
  },
  {
    who: 'Hana Kobayashi',
    note: 'Found the one bug in the keyboard palette that made us drop everything and fix it.',
  },
  {
    who: 'Isabelle Moreau',
    note: 'Designed the podcast logo and argued for a lighter typeface than we picked.',
  },
]

export const COMING = {
  title: 'What we plan to ship in 2027',
  lines: [
    'Conversational parser out of Labs, into the main app.',
    'Calendar memory, if we can build it without surprising anyone.',
    'One Launch Week per quarter, each under one week long, each with five things.',
    'Season 2 of The Quiet Hours, in the fall.',
    "A second hire. Possibly a third, if we're honest about what we need.",
    "One new market. We haven't decided which, but the decision is on the Shortlist.",
  ],
}
