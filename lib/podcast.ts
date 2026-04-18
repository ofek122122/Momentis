export type Episode = {
  n: number
  slug: string
  title: string
  guest: string
  role: string
  teaser: string
  description: string
  durationMin: number
  publishedAt: string
  tag: 'Design' | 'Engineering' | 'Writing' | 'Business' | 'Life'
  chapters: { t: string; at: string }[]
  featured?: boolean
}

export const SHOW = {
  title: 'The Quiet Hours',
  tagline:
    'A podcast about time, software, and the small decisions that make both of them feel larger than they are.',
  host: 'Iris Koval',
  hostRole: 'Cofounder · Calendro',
  cadence: 'Every other Tuesday, Europe time',
  episodes: 'Season 1 · 8 episodes',
  artwork: 'TQH',
}

export const PLATFORMS: { name: string; url: string; initials: string }[] = [
  { name: 'Apple Podcasts', url: '#', initials: 'AP' },
  { name: 'Spotify', url: '#', initials: 'Sp' },
  { name: 'Overcast', url: '#', initials: 'Oc' },
  { name: 'Pocket Casts', url: '#', initials: 'PC' },
  { name: 'YouTube Music', url: '#', initials: 'YT' },
  { name: 'RSS', url: '/podcast/feed.xml', initials: '·)' },
]

export const EPISODES: Episode[] = [
  {
    n: 8,
    slug: 'when-the-software-gets-out-of-the-way',
    title: 'When the software finally gets out of the way',
    guest: 'Mei Lin',
    role: 'Essayist, The Slow Page',
    teaser:
      'On the paradox of tools that disappear: why the best product wins by becoming invisible, and what disappears along with it.',
    description:
      "We talk with Mei Lin about the essay 'An Exhale, At 9pm' and why she stopped writing about software until Calendro. We cover the design principle of restraint, the attention economy in reverse, and why Mei deletes her calendar every December.",
    durationMin: 41,
    publishedAt: '2026-04-07',
    tag: 'Writing',
    featured: true,
    chapters: [
      { t: 'Cold open: the December-calendar ritual', at: '00:00' },
      { t: 'Why software should lower your heart rate', at: '04:12' },
      { t: "The editor's test for a good tool", at: '12:40' },
      { t: 'Quiet software and the attention economy', at: '22:05' },
      { t: 'Closing: what Mei reads before bed', at: '34:11' },
    ],
  },
  {
    n: 7,
    slug: 'hiring-for-people-who-finish-things',
    title: 'Hiring for people who finish things',
    guest: 'Pauline Rivera',
    role: 'Chief of Staff',
    teaser:
      "Pauline's unusual hiring test: one reference call, zero whiteboards, and a request to send us something you've shipped.",
    description:
      "How Pauline ran an offsite for 24 people across 3 cities using Calendro, and what that taught her about hiring. We compare pipelines, reject the 'rockstar' framing, and talk about the references she actually reads.",
    durationMin: 38,
    publishedAt: '2026-03-24',
    tag: 'Business',
    chapters: [
      { t: 'The no-whiteboard rule', at: '00:00' },
      { t: 'Reference calls that actually work', at: '07:22' },
      { t: 'Offsite logistics as a hiring signal', at: '18:40' },
      { t: "Why we don't write job ladders", at: '28:11' },
    ],
  },
  {
    n: 6,
    slug: 'the-hybrid-parser-in-detail',
    title: 'The hybrid parser, in embarrassing detail',
    guest: 'Oren Weiss',
    role: 'Cofounder · Calendro',
    teaser:
      'The technical episode. Why 86% of events never touch the AI, how the arbiter works, and what broke the week we shipped v2.',
    description:
      "A deep dive into the Calendro parser pipeline. We cover the local NLP pass, the confidence scorer, the Gemini fallback prompt, and the three-week misadventure that ended in the v2 shipped during Launch Week 01.",
    durationMin: 52,
    publishedAt: '2026-03-10',
    tag: 'Engineering',
    chapters: [
      { t: 'Why we did not start with the LLM', at: '00:00' },
      { t: 'The chrono-node local path', at: '06:40' },
      { t: 'Arbiter v1 vs v2', at: '18:11' },
      { t: 'The three-week misadventure', at: '32:05' },
      { t: 'What we would do differently', at: '44:20' },
    ],
  },
  {
    n: 5,
    slug: 'typography-as-trust',
    title: 'Typography as trust',
    guest: 'Isabelle Moreau',
    role: 'Design Director, Folio Studio',
    teaser:
      'Why the typefaces you pick for a product change how much a user is willing to share with it. With a small defense of serif.',
    description:
      "We geek out on Playfair Display, the difference between display and body serif, and why the wrong italic tells the wrong story. Includes a short history of Calendro's four typographic rejections.",
    durationMin: 33,
    publishedAt: '2026-02-24',
    tag: 'Design',
    chapters: [
      { t: 'Serif, sans-serif, trust', at: '00:00' },
      { t: 'The Playfair decision', at: '09:14' },
      { t: "Four rejected typefaces, and why", at: '20:02' },
      { t: 'One small defense of italics', at: '28:40' },
    ],
  },
  {
    n: 4,
    slug: 'the-walk-home-planning-ritual',
    title: 'The walk-home planning ritual',
    guest: 'Tomás Levi',
    role: 'Indie founder, Fieldmark',
    teaser:
      'A four-paragraph dictation technique that replaces a 45-minute Sunday schedule with a 4-minute walk.',
    description:
      "Tomás walks us through the exact cadence he uses to dictate his week into Calendro during his walk home. We cover phrasing, cadence, how to correct mistakes without breaking the flow, and what he used to spend Sundays doing.",
    durationMin: 27,
    publishedAt: '2026-02-10',
    tag: 'Life',
    chapters: [
      { t: 'The ritual, end-to-end', at: '00:00' },
      { t: 'Phrasing that the parser likes', at: '08:11' },
      { t: "Correcting without breaking flow", at: '16:20' },
      { t: '45 Sunday minutes returned', at: '22:05' },
    ],
  },
  {
    n: 3,
    slug: 'a-manifesto-in-public',
    title: 'Publishing a manifesto in public',
    guest: 'Iris Koval',
    role: 'Cofounder · Calendro',
    teaser:
      'Why we wrote eight theses down, argued about them in a shared doc for three months, and published them without editing.',
    description:
      "Iris hosts and is the guest. A single-voice episode on the Calendro manifesto: how it began as margin notes, what we cut, and why the final version is deliberately longer than we'd like.",
    durationMin: 24,
    publishedAt: '2026-01-27',
    tag: 'Writing',
    chapters: [
      { t: 'Origins in the margin', at: '00:00' },
      { t: 'Three months of redrafting', at: '08:00' },
      { t: 'What we cut', at: '14:10' },
      { t: 'Publishing without editing', at: '19:30' },
    ],
  },
  {
    n: 2,
    slug: 'the-second-source-of-truth',
    title: 'The second source of truth',
    guest: 'Jonas Berg',
    role: 'Staff Engineer, Hovedø',
    teaser:
      "On notebooks, calendars, and the engineering discipline of keeping a handwritten ledger that outlives your project.",
    description:
      "A conversation about the role of the paper notebook alongside the calendar. Jonas keeps a Leuchtturm for six years. We talk about what ends up on paper vs software, and what never migrates.",
    durationMin: 35,
    publishedAt: '2026-01-13',
    tag: 'Life',
    chapters: [
      { t: 'Six-year notebooks', at: '00:00' },
      { t: 'What gets written down', at: '10:22' },
      { t: "Ideas that refuse to migrate", at: '21:00' },
      { t: 'Closing ritual: the Sunday review', at: '28:15' },
    ],
  },
  {
    n: 1,
    slug: 'pilot',
    title: 'Pilot: Why we made a podcast at all',
    guest: 'Iris & Oren',
    role: 'Cofounders · Calendro',
    teaser:
      'One promise: we will not make this into a marketing channel. A season of eight episodes, then we rest.',
    description:
      "Our first episode. We explain the ground rules: no product plugs except in the credits; every episode ends when it has said what it has to say; ten minutes is a legitimate episode length.",
    durationMin: 18,
    publishedAt: '2025-12-30',
    tag: 'Writing',
    chapters: [
      { t: 'Why we started at all', at: '00:00' },
      { t: 'Rules for the season', at: '05:40' },
      { t: 'What counts as an episode', at: '11:05' },
      { t: 'A short credit roll', at: '15:00' },
    ],
  },
]

export const TAG_TONE: Record<Episode['tag'], { fg: string; ring: string }> = {
  Design: { fg: 'text-violet-300', ring: 'border-violet-300/25' },
  Engineering: { fg: 'text-sky-300', ring: 'border-sky-300/25' },
  Writing: { fg: 'text-gold', ring: 'border-gold/25' },
  Business: { fg: 'text-emerald-300', ring: 'border-emerald-300/25' },
  Life: { fg: 'text-rose-300', ring: 'border-rose-300/25' },
}

export function featuredEpisode(): Episode {
  return EPISODES.find((e) => e.featured) ?? EPISODES[0]
}

export function otherEpisodes(): Episode[] {
  const f = featuredEpisode()
  return EPISODES.filter((e) => e.slug !== f.slug)
}

export const SHOW_STATS = {
  episodes: EPISODES.length,
  totalMinutes: EPISODES.reduce((a, b) => a + b.durationMin, 0),
  guests: new Set(EPISODES.map((e) => e.guest)).size,
}
