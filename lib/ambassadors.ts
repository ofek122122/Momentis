export type Ambassador = {
  slug: string
  name: string
  role: string
  location: string
  initials: string
  quote: string
  link?: { label: string; href: string }
  since: string
}

export const AMBASSADORS: Ambassador[] = [
  {
    slug: 'mei-lin',
    name: 'Mei Lin',
    role: 'Essayist · The Slow Page',
    location: 'Lisbon',
    initials: 'ML',
    quote:
      "The essay that became the podcast started as a voice note dictated into Momenties on a November morning.",
    link: { label: 'Read the essay', href: '/blog' },
    since: '2025',
  },
  {
    slug: 'tomas-levi',
    name: 'Tomás Levi',
    role: 'Indie founder · Fieldmark',
    location: 'Lisbon',
    initials: 'TL',
    quote:
      'I mention Momenties to every founder I meet for coffee. I have stopped calling it a recommendation. It is a test.',
    link: { label: 'The walk-home episode', href: '/podcast/the-walk-home-planning-ritual' },
    since: '2025',
  },
  {
    slug: 'hana-kobayashi',
    name: 'Hana Kobayashi',
    role: 'iOS engineer',
    location: 'Tokyo',
    initials: 'HK',
    quote:
      "The command palette is the thing that made me delete two other calendar tools from my dock.",
    link: { label: 'Keyboard shortcut guide', href: '/learn' },
    since: '2026',
  },
  {
    slug: 'pauline-rivera',
    name: 'Pauline Rivera',
    role: 'Chief of Staff',
    location: 'London',
    initials: 'PR',
    quote:
      "I ran a 24-person offsite on Momenties. My team adopted it in a week. The ops world is small. Word travels.",
    link: { label: 'Listen to her episode', href: '/podcast/hiring-for-people-who-finish-things' },
    since: '2025',
  },
  {
    slug: 'isabelle-moreau',
    name: 'Isabelle Moreau',
    role: 'Design Director · Folio Studio',
    location: 'Paris',
    initials: 'IM',
    quote:
      "I wrote the Paris design community a short newsletter on why I switched. We had four accounts signed up by Friday.",
    link: { label: 'Typography episode', href: '/podcast/typography-as-trust' },
    since: '2026',
  },
  {
    slug: 'jonas-berg',
    name: 'Jonas Berg',
    role: 'Staff Engineer · Hovedø',
    location: 'Oslo',
    initials: 'JB',
    quote:
      'I have a little section in my personal site titled "tools I love." Momenties earned its way in during my first month.',
    link: { label: 'Notebook episode', href: '/podcast/the-second-source-of-truth' },
    since: '2026',
  },
  {
    slug: 'vincent-du',
    name: 'Vincent Du',
    role: 'Creator · Bright Mornings',
    location: 'Taipei',
    initials: 'VD',
    quote:
      "I run a newsletter with 40k readers. Momenties schedules every podcast interview I book. I mention it when asked.",
    since: '2026',
  },
  {
    slug: 'priya-shankar',
    name: 'Priya Shankar',
    role: 'Fractional COO',
    location: 'Bangalore',
    initials: 'PS',
    quote:
      "I run five calendars across three clients. Momenties unifies them without feeling like a messy inbox.",
    since: '2025',
  },
]

export type Perk = {
  n: string
  title: string
  body: string
}

export const PERKS: Perk[] = [
  {
    n: '01',
    title: 'Lifetime Pro · on the house',
    body: "Never charged, never downgraded, never feature-gated. The only thing you're asked to do is keep using it.",
  },
  {
    n: '02',
    title: 'Launch-week beta access',
    body: "Every Launch Week feature reaches ambassadors two weeks early, behind an opt-in flag. Your feedback shapes what ships.",
  },
  {
    n: '03',
    title: 'Annual hand-crafted merch',
    body: "A small run of Momenties-branded things we'd actually want to own. Last year: a letterpress card and a Blackwing pencil. No logo-stamped trash.",
  },
  {
    n: '04',
    title: 'Dinner with the team',
    body: "Once a year, in one of Iris's or Oren's kitchens. No agenda, no slides. Small groups of three to five.",
  },
  {
    n: '05',
    title: 'Profile in the Wall of Love',
    body: "If you'd like your name next to your words, we'll list you. If you prefer anonymity, we respect that too.",
  },
  {
    n: '06',
    title: 'Direct line to the founders',
    body: "A shared channel you can ping with product questions, feedback, or — honestly — anything. Replies within 48 hours, usually sooner.",
  },
]

export type Principle = { title: string; body: string }

export const PRINCIPLES: Principle[] = [
  {
    title: 'Small by design',
    body: "We cap the program at fifty ambassadors worldwide. Once we hit the cap, we wait for someone to gracefully roll off before we add another.",
  },
  {
    title: 'We pick for taste, not reach',
    body: 'We do not care how many followers you have. We care whether you would write a good paragraph about a tool you love without being paid to.',
  },
  {
    title: 'No quotas, no pressure',
    body: "There is no monthly post requirement, no pixel tracker, no 'ambassador dashboard.' You do what you'd have done anyway.",
  },
]

export const ASK = [
  'Be honest. If we ship something you dislike, say so publicly.',
  'Disclose the relationship when it comes up naturally.',
  'Reply to a short annual survey about how we could make the program better.',
  'Protect other ambassadors when they speak — the program is their reputation, too.',
]

export type Content = { kind: 'essay' | 'talk' | 'podcast' | 'newsletter'; title: string; by: string; where: string; at: string }

export const CONTENT: Content[] = [
  {
    kind: 'essay',
    title: 'An exhale, at 9pm',
    by: 'Mei Lin',
    where: 'The Slow Page',
    at: 'Mar 2026',
  },
  {
    kind: 'talk',
    title: 'A calendar that disappeared',
    by: 'Tomás Levi',
    where: 'Indie Founder Dinner, Lisbon',
    at: 'Feb 2026',
  },
  {
    kind: 'newsletter',
    title: 'The tool I use more than my laptop',
    by: 'Isabelle Moreau',
    where: 'Paris Design Weekly',
    at: 'Apr 2026',
  },
  {
    kind: 'podcast',
    title: 'Why I deleted three calendar tools',
    by: 'Hana Kobayashi',
    where: 'Quiet Ship · Ep. 41',
    at: 'Jan 2026',
  },
  {
    kind: 'essay',
    title: 'Running an offsite from your phone',
    by: 'Pauline Rivera',
    where: 'Ops Weekly',
    at: 'Feb 2026',
  },
  {
    kind: 'talk',
    title: 'The new shape of calendars',
    by: 'Jonas Berg',
    where: 'JavaZone Oslo',
    at: 'Sep 2025',
  },
]

export const FAQ = [
  {
    q: 'Do I have to apply, or can you invite me?',
    a: "Both. We invite roughly two-thirds of ambassadors based on messages we've already exchanged. The other third apply via /contact and we reply to every application, yes or no.",
  },
  {
    q: 'What if I want to leave the program?',
    a: "Email us and you're out. The lifetime Pro account stays. Nothing awkward.",
  },
  {
    q: 'Is this a paid sponsorship?',
    a: "No. There is no cash compensation, no per-post bounty, no affiliate code. If you want to monetize referrals, our /affiliates program is the right fit.",
  },
  {
    q: 'Can I be anonymous?',
    a: "Yes. We keep the ambassador list public by default but honor any request to appear as 'Anon'.",
  },
]

export const PROGRAM_STATS = {
  capacity: 50,
  current: AMBASSADORS.length,
  countries: new Set(AMBASSADORS.map((a) => a.location.split(',')[0])).size,
  cohortOpen: 'Q3 2026',
}
