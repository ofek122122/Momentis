export type WallCategory =
  | 'founders'
  | 'designers'
  | 'engineers'
  | 'students'
  | 'parents'
  | 'freelancers'
  | 'operators'
  | 'writers'

export type WallSource = 'twitter' | 'linkedin' | 'email' | 'review' | 'call'

export type WallQuote = {
  id: string
  quote: string
  name: string
  handle?: string
  role: string
  categories: WallCategory[]
  source: WallSource
  postedAt: string
  featured?: boolean
}

export const WALL_CATEGORIES: { id: WallCategory | 'all'; label: string; count?: number }[] = [
  { id: 'all', label: 'All' },
  { id: 'founders', label: 'Founders' },
  { id: 'designers', label: 'Designers' },
  { id: 'engineers', label: 'Engineers' },
  { id: 'operators', label: 'Operators' },
  { id: 'freelancers', label: 'Freelancers' },
  { id: 'writers', label: 'Writers' },
  { id: 'students', label: 'Students' },
  { id: 'parents', label: 'Parents' },
]

export const WALL_QUOTES: WallQuote[] = [
  {
    id: 'amira-okafor',
    quote:
      'Momenties replaced three scheduling apps we were paying for. My design team adopted it in a week with zero training. The onboarding is just: open it and start typing.',
    name: 'Amira Okafor',
    handle: '@amiraok',
    role: 'Head of Design, Stratify',
    categories: ['designers', 'operators'],
    source: 'twitter',
    postedAt: '2026-03-14',
    featured: true,
  },
  {
    id: 'daniel-reyes',
    quote:
      "I snap a photo of my kids' school calendar and every conference, recital, half-day lands on my phone. It feels like cheating.",
    name: 'Daniel Reyes',
    role: 'Partner, Meridian VC',
    categories: ['parents', 'founders'],
    source: 'email',
    postedAt: '2026-03-02',
    featured: true,
  },
  {
    id: 'yuki-tanaka',
    quote:
      "The voice input is my favorite feature. I dump my week out loud on my walk home, and by the time I'm at my door, my schedule is set.",
    name: 'Yuki Tanaka',
    handle: '@yukiships',
    role: 'Founder, Lanternwork',
    categories: ['founders'],
    source: 'twitter',
    postedAt: '2026-02-19',
  },
  {
    id: 'marcus-wolfe',
    quote:
      'The first calendar tool I actually wanted my whole team to use. The design alone buys a year of goodwill.',
    name: 'Marcus Wolfe',
    role: 'CTO, Kindrid Health',
    categories: ['engineers', 'operators'],
    source: 'linkedin',
    postedAt: '2026-03-08',
  },
  {
    id: 'priya-shankar',
    quote:
      'I run five calendars across three clients. Momenties unifies them without feeling like a messy inbox. It respects my attention.',
    name: 'Priya Shankar',
    role: 'Fractional COO',
    categories: ['freelancers', 'operators'],
    source: 'review',
    postedAt: '2026-03-21',
  },
  {
    id: 'jonas-berg',
    quote:
      "I didn't know I could have a polite relationship with my calendar. Turns out I can. Turns out that matters more than I thought.",
    name: 'Jonas Berg',
    handle: '@jonasbbb',
    role: 'Staff Engineer, Hovedø',
    categories: ['engineers', 'writers'],
    source: 'twitter',
    postedAt: '2026-01-30',
  },
  {
    id: 'elena-morrow',
    quote:
      'Finally — a calendar that looks like it was designed by someone who has actually been on a long call at 9pm and needs one less thing to manage.',
    name: 'Elena Morrow',
    role: 'Senior Product Designer',
    categories: ['designers'],
    source: 'email',
    postedAt: '2026-02-11',
    featured: true,
  },
  {
    id: 'tomas-levi',
    quote:
      "I replaced a 45-minute Sunday \"schedule the week\" ritual with a 4-minute chat. I got 41 minutes of my life back every week.",
    name: 'Tomás Levi',
    handle: '@tomaslevi',
    role: 'Indie founder, Fieldmark',
    categories: ['founders', 'freelancers'],
    source: 'twitter',
    postedAt: '2026-02-28',
  },
  {
    id: 'sana-qureshi',
    quote:
      'Between my thesis, my TA sections, and my part-time job, I used to miss one thing a week. Now I miss nothing. Momenties is the quietest support system I have.',
    name: 'Sana Qureshi',
    role: 'PhD Candidate, CMU',
    categories: ['students', 'writers'],
    source: 'review',
    postedAt: '2026-01-22',
  },
  {
    id: 'akinyi-osei',
    quote:
      "I use the photo parser on physical printouts — doctor's notes, daycare sheets, wedding invites. It reads everything. I stopped manually retyping dates months ago.",
    name: 'Akinyi Osei',
    handle: '@akinyiosei',
    role: 'Operations lead, two kids',
    categories: ['parents', 'operators'],
    source: 'twitter',
    postedAt: '2026-03-17',
  },
  {
    id: 'davide-costa',
    quote:
      'I deleted Notion Calendar, Fantastical, and Motion. Momenties does the job of all three, and it is lighter than any of them.',
    name: 'Davide Costa',
    role: 'Principal Engineer, Orbiq',
    categories: ['engineers'],
    source: 'linkedin',
    postedAt: '2026-02-05',
  },
  {
    id: 'mei-lin',
    quote:
      "It's the first AI feature I've used where I didn't feel like the product was pitching me on itself. It just did its job and got out of the way.",
    name: 'Mei Lin',
    handle: '@meiwrites',
    role: 'Essayist, The Slow Page',
    categories: ['writers'],
    source: 'twitter',
    postedAt: '2026-03-05',
    featured: true,
  },
  {
    id: 'rohan-iyer',
    quote:
      "We tried three calendar tools during our YC batch. Momenties was the only one my cofounder didn't quit within 48 hours.",
    name: 'Rohan Iyer',
    role: 'Cofounder, Klearly',
    categories: ['founders'],
    source: 'email',
    postedAt: '2026-02-14',
  },
  {
    id: 'isabelle-moreau',
    quote:
      "The typography alone tells you the team cares. Then you use it for a week and realize it's not just a pretty face.",
    name: 'Isabelle Moreau',
    handle: '@isa_moreau',
    role: 'Design Director, Folio Studio',
    categories: ['designers'],
    source: 'twitter',
    postedAt: '2026-03-22',
  },
  {
    id: 'noah-sullivan',
    quote:
      "My freelance rate went up because my scheduling got tighter. That sounds ridiculous, but it's true. I say yes to fewer things, and better ones.",
    name: 'Noah Sullivan',
    role: 'Freelance copywriter',
    categories: ['freelancers', 'writers'],
    source: 'review',
    postedAt: '2026-01-11',
  },
  {
    id: 'hana-kobayashi',
    quote:
      'The keyboard shortcuts feel designed by someone who actually uses a keyboard. M, W, D to switch views. Question mark to see them all. It took me 9 seconds to learn.',
    name: 'Hana Kobayashi',
    handle: '@hanakbys',
    role: 'iOS engineer',
    categories: ['engineers'],
    source: 'twitter',
    postedAt: '2026-03-11',
  },
  {
    id: 'eitan-shah',
    quote:
      "For the first time, my calendar doesn't feel like my enemy. It feels like a thoughtful assistant who doesn't ask follow-up questions.",
    name: 'Eitan Shah',
    role: 'Operator-in-residence',
    categories: ['operators', 'founders'],
    source: 'call',
    postedAt: '2026-02-22',
  },
  {
    id: 'linnea-holm',
    quote:
      'I type in Swedish half the time and it still parses perfectly. I was not expecting that. I tell every founder I know to try it.',
    name: 'Linnea Holm',
    handle: '@linneaholm',
    role: 'Founder, Småland Labs',
    categories: ['founders'],
    source: 'twitter',
    postedAt: '2026-02-02',
  },
  {
    id: 'carlos-nunez',
    quote:
      'Three kids, two schools, one family calendar that actually works. My wife said "thank you" out loud to an app, which I have literally never heard before.',
    name: 'Carlos Núñez',
    role: 'Senior Architect',
    categories: ['parents', 'engineers'],
    source: 'email',
    postedAt: '2026-03-28',
  },
  {
    id: 'riya-desai',
    quote:
      "My whole cohort is using it for our master's program. We have a running joke that Momenties is the only group project that actually works.",
    name: 'Riya Desai',
    handle: '@riyad',
    role: 'MBA, INSEAD',
    categories: ['students'],
    source: 'twitter',
    postedAt: '2026-03-30',
  },
  {
    id: 'vincent-du',
    quote:
      "I run a newsletter with 40k readers and a podcast with 8 guests a month. Every booking starts with a voice note into Momenties. I've never missed a cadence since.",
    name: 'Vincent Du',
    role: 'Creator, Bright Mornings',
    categories: ['writers', 'freelancers'],
    source: 'review',
    postedAt: '2026-01-28',
  },
  {
    id: 'amal-saleh',
    quote:
      "The natural language parsing is the first one I've seen that understood \"after standup, before lunch, Thursday if possible\". That sentence had three calendar apps in tears.",
    name: 'Amal Saleh',
    handle: '@amalsaleh',
    role: 'Staff PM',
    categories: ['operators', 'engineers'],
    source: 'twitter',
    postedAt: '2026-02-27',
  },
  {
    id: 'pauline-rivera',
    quote:
      "I ran the whole offsite off Momenties — 24 people, 3 cities, 2 time zones. Nothing dropped. Nobody asked me 'when was that again?' for the first time in my career.",
    name: 'Pauline Rivera',
    role: 'Chief of Staff',
    categories: ['operators'],
    source: 'linkedin',
    postedAt: '2026-03-04',
  },
  {
    id: 'felix-wagner',
    quote:
      "I'm a maker, not a scheduler. Momenties is the first thing that lets me pretend to be the second one, without actually becoming it.",
    name: 'Felix Wagner',
    handle: '@felix_wgnr',
    role: 'Illustrator',
    categories: ['freelancers', 'designers'],
    source: 'twitter',
    postedAt: '2026-02-16',
  },
]

export function quotesByCategory(cat: WallCategory | 'all'): WallQuote[] {
  if (cat === 'all') return WALL_QUOTES
  return WALL_QUOTES.filter((q) => q.categories.includes(cat))
}

export function categoryCounts(): Record<WallCategory | 'all', number> {
  const counts: Record<string, number> = { all: WALL_QUOTES.length }
  for (const q of WALL_QUOTES) {
    for (const c of q.categories) counts[c] = (counts[c] ?? 0) + 1
  }
  return counts as Record<WallCategory | 'all', number>
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('')
}

export const WALL_STATS = {
  total: WALL_QUOTES.length,
  featured: WALL_QUOTES.filter((q) => q.featured).length,
  sources: new Set(WALL_QUOTES.map((q) => q.source)).size,
}
