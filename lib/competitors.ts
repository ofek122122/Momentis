export type Competitor = {
  slug: string
  name: string
  short: string
  tagline: string
  hero: string
  strengths: string[]
  weaknesses: string[]
  verdict: string
  rows: { feature: string; us: 'yes' | 'no' | 'partial'; them: 'yes' | 'no' | 'partial'; note?: string }[]
}

export const COMPETITORS: Competitor[] = [
  {
    slug: 'google-calendar',
    name: 'Google Calendar',
    short: 'Google',
    tagline: 'The default most of the internet grew up with.',
    hero: 'Google Calendar is free, ubiquitous, and reliable — and we love it enough that we built Momenties on top of it. But it leans on your ability to click-and-drag. We lean on your ability to talk.',
    strengths: ['Universal across the web', 'Free', 'Huge integration ecosystem', 'Reliable infrastructure'],
    weaknesses: ['No native AI parsing', 'No voice input', 'No vision/photo parsing', 'Design is utilitarian — not quiet', 'No AI briefings'],
    verdict:
      'Google Calendar is the foundation. Momenties is the layer that makes it feel like it was designed for your life, not for your meeting rooms.',
    rows: [
      { feature: 'Natural-language input', us: 'yes', them: 'partial', note: 'Google has limited NL in Quick Add' },
      { feature: 'Voice input (native)', us: 'yes', them: 'no' },
      { feature: 'Photo → events', us: 'yes', them: 'no' },
      { feature: 'AI daily briefing', us: 'yes', them: 'no' },
      { feature: 'Unified multi-provider sync', us: 'yes', them: 'no', note: 'Google shows other calendars read-only' },
      { feature: 'Dark-first design', us: 'yes', them: 'partial' },
      { feature: 'Smart time suggestions', us: 'yes', them: 'partial' },
      { feature: 'Free forever tier', us: 'yes', them: 'yes' },
      { feature: 'Zero trackers / ads', us: 'yes', them: 'no' },
      { feature: 'Keyboard-first', us: 'yes', them: 'partial' },
    ],
  },
  {
    slug: 'calendly',
    name: 'Calendly',
    short: 'Calendly',
    tagline: 'The scheduling link pioneer. Built for external meetings.',
    hero: 'Calendly is a scheduling link tool. Momenties is a calendar. They solve different problems — but we do both, and we think the union is better than the sum.',
    strengths: ['Best-in-class scheduling links', 'Strong integrations', 'Team routing', 'Established brand'],
    weaknesses: ['Not a calendar (no day/week/month view of your own)', 'No AI parsing of any kind', 'Expensive at scale', 'Ugly branded confirmation emails'],
    verdict:
      'Use Calendly if scheduling with strangers is your whole workflow. Use Momenties if you\'d like that same power, built into a calendar you actually want to open every morning.',
    rows: [
      { feature: 'Scheduling links', us: 'yes', them: 'yes' },
      { feature: 'Your own calendar view', us: 'yes', them: 'no' },
      { feature: 'Natural-language event creation', us: 'yes', them: 'no' },
      { feature: 'Voice input', us: 'yes', them: 'no' },
      { feature: 'Photo → events', us: 'yes', them: 'no' },
      { feature: 'AI briefings', us: 'yes', them: 'no' },
      { feature: 'Team routing & round-robin', us: 'yes', them: 'yes', note: 'Available on Team plan' },
      { feature: 'Free tier', us: 'yes', them: 'partial', note: 'Calendly free tier is restrictive' },
      { feature: 'Unified multi-calendar sync', us: 'yes', them: 'partial' },
      { feature: 'Dark mode first', us: 'yes', them: 'no' },
    ],
  },
  {
    slug: 'notion-calendar',
    name: 'Notion Calendar',
    short: 'Notion Cal',
    tagline: 'Notion\'s take on the minimalist calendar.',
    hero: 'Notion Calendar (formerly Cron) is beautifully designed and sharply focused. We think Momenties is too — with a different priority: instead of a cleaner calendar UI, we bet on a cleaner way to put things *on* your calendar.',
    strengths: ['Beautiful, minimal UI', 'Keyboard shortcuts', 'Free', 'Deep Notion integration'],
    weaknesses: ['No AI parsing', 'No voice input', 'No photo → events', 'Requires a Notion account', 'Mac-first (thin on other platforms)'],
    verdict:
      'Notion Calendar is a beautiful viewer. Momenties is a beautiful input engine — plus a viewer. If your bottleneck is "I have events in my head and they\'re not on my calendar yet," Momenties is the answer.',
    rows: [
      { feature: 'Elegant minimal UI', us: 'yes', them: 'yes' },
      { feature: 'Natural-language input', us: 'yes', them: 'no' },
      { feature: 'Voice input', us: 'yes', them: 'no' },
      { feature: 'Photo → events', us: 'yes', them: 'no' },
      { feature: 'AI briefings & insights', us: 'yes', them: 'no' },
      { feature: 'Keyboard shortcuts', us: 'yes', them: 'yes' },
      { feature: 'Works without a Notion account', us: 'yes', them: 'no' },
      { feature: 'Windows & Linux desktop', us: 'yes', them: 'partial' },
      { feature: 'Dark-first design', us: 'yes', them: 'yes' },
      { feature: 'Free tier', us: 'yes', them: 'yes' },
    ],
  },
  {
    slug: 'superhuman-calendar',
    name: 'Superhuman Calendar',
    short: 'Superhuman',
    tagline: 'The keyboard-first calendar for people who already pay $30/mo for email.',
    hero: 'Superhuman makes premium, keyboard-first software. Momenties shares the aesthetic and the ambition — at a price that doesn\'t require a corporate card.',
    strengths: ['Keyboard-first', 'Great design', 'AI briefings', 'Strong support'],
    weaknesses: ['Expensive ($30/mo minimum)', 'No voice input', 'No photo → events', 'Invite-only', 'Tightly tied to email'],
    verdict:
      'If you already pay for Superhuman and love it, keep it. If you want the same design sensibility with voice + photo input at 1/4 the price, try Momenties.',
    rows: [
      { feature: 'AI briefings', us: 'yes', them: 'yes' },
      { feature: 'Natural-language input', us: 'yes', them: 'yes' },
      { feature: 'Voice input (native)', us: 'yes', them: 'no' },
      { feature: 'Photo → events', us: 'yes', them: 'no' },
      { feature: 'Keyboard-first', us: 'yes', them: 'yes' },
      { feature: 'Free tier', us: 'yes', them: 'no' },
      { feature: 'Anyone can sign up', us: 'yes', them: 'no', note: 'Superhuman is invite-only' },
      { feature: 'Pro price', us: 'yes', them: 'no', note: '$8 vs $30 / month' },
      { feature: 'Windows & Linux', us: 'yes', them: 'partial' },
      { feature: 'Vision-capable parsing', us: 'yes', them: 'no' },
    ],
  },
]

export function getCompetitor(slug: string) {
  return COMPETITORS.find((c) => c.slug === slug) ?? null
}
