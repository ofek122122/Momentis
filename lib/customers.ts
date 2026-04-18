export type CustomerStory = {
  slug: string
  company: string
  industry: string
  person: string
  personTitle: string
  initials: string
  tagline: string
  quote: string
  metrics: { value: string; label: string }[]
  body: string[]
  challenge: string
  solution: string
  impact: string
}

export const CUSTOMER_STORIES: CustomerStory[] = [
  {
    slug: 'kindrid-health',
    company: 'Kindrid Health',
    industry: 'Healthtech · 1,200 employees',
    person: 'Marcus Wolfe',
    personTitle: 'CTO · Kindrid Health',
    initials: 'MW',
    tagline: 'Replaced three scheduling tools in one weekend.',
    quote:
      'We onboarded 400 employees in a weekend. Their IT team actually read our pen-test report and approved in 48 hours. I\'ve been in procurement for 12 years — this never happens.',
    metrics: [
      { value: '48h', label: 'Security review' },
      { value: '3', label: 'Tools replaced' },
      { value: '27%', label: 'Fewer meetings' },
    ],
    challenge:
      'Kindrid was running three overlapping tools — Google Calendar, Calendly, and a homegrown scheduling service built in 2019 — and none of them talked to each other. Their IT team was paying $180K/year in combined licenses while engineers spent 15% of their week in meetings they couldn\'t remember agreeing to.',
    solution:
      'A 50-engineer pilot of Momenties Team, run over two weeks. No training session — engineers installed, connected their Google accounts, and started. Feedback was gathered async via a shared Slack channel. The pilot found two parsing bugs (both fixed within a week) and zero blockers.',
    impact:
      'Four weeks after the pilot, Kindrid rolled out company-wide over a weekend. Within three months, aggregate meeting hours dropped 27% — not because of Momenties alone, but because its meeting cost indicator made teams confront their own calendar behavior. The procurement review, which historically took 3 months for new SaaS tools, finished in 48 hours.',
    body: [
      'Kindrid Health is a Boston-based digital health company serving 1,200 clinical and technical employees. Before Momenties, their scheduling stack was a patchwork.',
      'Marcus Wolfe, their CTO, describes the before-state as "three tools all fighting for the same job." Engineers scheduled with Google Calendar, external meetings ran through Calendly, and on-call swaps happened in the homegrown tool. Each required a separate login. Each had its own notification rules. None knew what the others were doing.',
      'The pilot was simple: 50 engineers got Momenties Team for two weeks. They were asked to use it instead of the existing stack, not alongside. Feedback ran async.',
      'After three months of full rollout, their internal surveys showed engineers reporting 27% fewer meeting hours. Marcus credits the meeting cost indicator — a feature that shows the aggregate hourly cost of each recurring meeting — for forcing teams to audit their own standing invites.',
      'The IT security review, meanwhile, went faster than any SaaS procurement in Kindrid\'s history. Marcus: "They read our pen-test report, read the SOC 2 Type I letter, asked about three specific subprocessors, and signed. 48 hours. I\'m still in shock."',
    ],
  },
  {
    slug: 'lanternwork',
    company: 'Lanternwork',
    industry: 'Design studio · 14 people',
    person: 'Yuki Tanaka',
    personTitle: 'Founder · Lanternwork',
    initials: 'YT',
    tagline: 'The first calendar that feels like our studio.',
    quote:
      'The voice input is my favorite feature. I dump my week out loud on my walk home and by the time I\'m at my door my schedule is set. My co-founder uses it the same way. We just... don\'t schedule anymore. We talk, and it happens.',
    metrics: [
      { value: '11 min', label: 'Saved per day' },
      { value: '14/14', label: 'Active users' },
      { value: '5', label: 'Sync sources' },
    ],
    challenge:
      'Lanternwork is a 14-person design studio in Kyoto, split across three client teams. Their work is fluid — site visits, client walkthroughs, coffee-fuelled critique sessions — which means their schedules shift constantly. Google Calendar was too form-field-heavy. Typing a structured event into a phone, in motion, simply didn\'t happen, so things got missed.',
    solution:
      'Voice input became the primary scheduling mechanism. Partners dictate their weeks on walking commutes; designers capture client visits with voice right after they happen; studio ops uses photo input for printed briefs and exhibition schedules. One Momenties account per person, unified view across Google and iCloud.',
    impact:
      '14/14 employees active weekly — the highest engagement rate in Lanternwork\'s history for any SaaS tool. Self-reported time saved: ~11 minutes per person per day. Most-used features, in order: voice input, photo parsing, unified multi-calendar view.',
    body: [
      'Lanternwork is a design studio in Kyoto whose work ranges from branding to exhibition design to environmental graphics. Fourteen people, three partners, rotating client teams.',
      'Before Momenties, Yuki Tanaka (one of the three founding partners) described their calendar situation as "a running apology." Things got missed. Not because people forgot — because typing a new event on a phone, in the middle of a site visit, simply wasn\'t happening.',
      'Momenties replaced that friction with a voice-first mode. Partners now dictate their weeks on walking commutes. Designers capture client visits with voice right after they happen. The studio manager uses photo input for printed briefs and quarterly exhibition schedules.',
      '"We don\'t schedule anymore," Yuki says. "We talk, and it happens. The tool gets out of the way."',
      'Quiet UI helped adoption too. Lanternwork is a design studio — their bar for interface aesthetics is unforgiving. Momenties\'s dark-first, Playfair-headed aesthetic was the first productivity tool they adopted wholesale without grumbling.',
    ],
  },
  {
    slug: 'meridian-vc',
    company: 'Meridian VC',
    industry: 'Venture capital · 40 people',
    person: 'Daniel Reyes',
    personTitle: 'Partner · Meridian VC',
    initials: 'DR',
    tagline: 'Board meetings that actually happen on time.',
    quote:
      'I snap a photo of my kids\' school calendar and every conference, every recital, every half-day lands on my phone. It feels like cheating. My personal calendar hasn\'t been this tidy in eight years.',
    metrics: [
      { value: '~40', label: 'Events / week' },
      { value: '2 min', label: 'Per photo parsed' },
      { value: '0', label: 'Missed PTA meetings' },
    ],
    challenge:
      'Daniel Reyes is a partner at Meridian VC and the father of three school-age kids. His calendar is an all-day tetris game of board meetings, portfolio reviews, and school recitals. His EA used to manually type school calendars into Google each August — 40-event data-entry tasks per child, per term.',
    solution:
      'Daniel snaps a photo of the school calendar PDF or paper handout. Gemini Vision extracts every date, time, and title. He reviews, adjusts, commits. Two minutes for 40 events. His EA was freed to focus on higher-leverage work.',
    impact:
      'Zero missed school events in a full academic year (a personal first). His EA recovered an estimated 6 hours per month. On the work side, Daniel\'s recurring-meeting audit (prompted by the Momenties analytics dashboard) trimmed 4 hours per week of low-value standing invites.',
    body: [
      'Daniel Reyes has been at Meridian for 8 years. He does what senior VC partners do — boards, calls, portfolio check-ins, pitch meetings — and he does it while being the primary parent-of-logistics for three school-age kids.',
      'His before-state: a heroic EA whose quarterly task was transcribing printed school calendars into Google Calendar. 40 events per child, per term. Hours of data entry. And that\'s before LinkedIn DMs, board meetings, and Meridian\'s own internal calendar.',
      'The new state: Daniel takes a photo. Gemini Vision reads the entire schedule. Daniel confirms. Done. Two minutes replaces two hours. His EA got her time back for actual high-leverage work.',
      'The side effect: Daniel became his firm\'s most vocal internal advocate for Momenties. Meridian now runs on Momenties Team at the partner level; a full-firm rollout is under discussion.',
      'Daniel\'s favorite feature, though, isn\'t the photo parser. It\'s the daily briefing. "It\'s the only thing I read on my phone at 6 AM that doesn\'t make me anxious," he says.',
    ],
  },
]

export function getCustomerStory(slug: string) {
  return CUSTOMER_STORIES.find((c) => c.slug === slug) ?? null
}
