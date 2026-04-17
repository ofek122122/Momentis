export type UseCase = {
  slug: string
  persona: string
  icon: 'founder' | 'student' | 'freelancer' | 'manager' | 'parent' | 'healthcare'
  tagline: string
  oneLiner: string
  quote: string
  attribution: string
  challenge: string
  solution: string
  workflow: { step: string; detail: string }[]
  features: { title: string; desc: string }[]
  faqs: { q: string; a: string }[]
  metrics: { value: string; label: string }[]
}

export const USE_CASES: UseCase[] = [
  {
    slug: 'founder',
    persona: 'Founders',
    icon: 'founder',
    tagline: 'Every meeting is an interruption. Treat it that way.',
    oneLiner: 'Calendro helps founders spend fewer hours in meetings and more hours making the thing.',
    quote:
      'I used to spend 20 minutes a day scheduling. Now I spend zero. That\'s 80 hours a year back.',
    attribution: 'Indira Patel, Founder · Aperture',
    challenge:
      'Founders operate on fragmented calendars across investor meetings, team syncs, customer calls, co-founder 1:1s, and half-written personal commitments. Every hour spent administering the schedule is an hour not spent on the product.',
    solution:
      'Calendro condenses four or five scheduling tools into one surface, replaces form-filling with sentence-typing, and exposes the aggregate cost of recurring meetings so founders can audit their own calendar honestly.',
    workflow: [
      { step: 'Morning', detail: 'Read the AI briefing — 3 minutes, covers the day and flags the week\'s load.' },
      { step: 'Midday', detail: 'Type new commitments as they arise ("coffee with jenny next tuesday 3pm"). No form fields, no friction.' },
      { step: 'End of week', detail: 'Review the meeting cost indicator. Cancel recurring invites that are no longer earning their spot.' },
    ],
    features: [
      { title: 'Snap investor-contact photos', desc: 'Photo-to-events reads conference emails and investor lists in seconds.' },
      { title: 'Meeting cost indicator', desc: 'Sees the aggregate hourly cost of every recurring meeting on your calendar.' },
      { title: 'Shared co-founder calendars', desc: 'Find overlap with your co-founders instantly; no need for a separate tool.' },
      { title: 'Focus-window protection', desc: 'Calendro blocks deep-work time and warns you before you book over it.' },
    ],
    faqs: [
      { q: 'Does Calendro work with Y Combinator\'s calendar?', a: 'Yes. Calendro syncs to any Google Workspace or Gmail account, including YC\'s.' },
      { q: 'Is there a startup discount?', a: 'Yes — 10 seats of Calendro Team free for 12 months for seed-stage companies. See /startups.' },
      { q: 'Can I use it with Superhuman?', a: 'Yes. Superhuman owns your email; Calendro owns your calendar. Many of our users run both.' },
    ],
    metrics: [
      { value: '20 min', label: 'Saved per day' },
      { value: '27%', label: 'Fewer meetings' },
      { value: '$12k/yr', label: 'Startup plan saves' },
    ],
  },
  {
    slug: 'student',
    persona: 'Students',
    icon: 'student',
    tagline: 'The syllabus is a photo. The semester is done.',
    oneLiner: 'Calendro takes a photo of your syllabus and turns it into a fully-populated semester calendar.',
    quote:
      'I take a photo of every syllabus in week one, and every assignment for the whole semester lands on my calendar with 3 days of lead time. Genuinely changed my GPA.',
    attribution: 'Noah Tessier, junior · NYU',
    challenge:
      'Students juggle 4–6 syllabi, changing exam dates, group project meetings, office hours, club schedules, work shifts, and the actual social life that makes college tolerable. Most of it arrives as PDFs or printouts.',
    solution:
      'Calendro\'s Gemini Vision parsing reads every syllabus, exam schedule, and handout in one tap — typically turning 40+ events into a fully-populated semester in under three minutes.',
    workflow: [
      { step: 'Week 1 of semester', detail: 'Snap each syllabus. Review the 40-ish events Calendro extracts. Confirm.' },
      { step: 'Daily', detail: 'Check the morning briefing. Don\'t check anything else — it\'s already on the calendar.' },
      { step: 'Weekly', detail: 'Smart time suggestions block study sessions around class; protect social hours from sprawling group projects.' },
    ],
    features: [
      { title: 'Photo syllabus parsing', desc: 'Reads printed and PDF syllabi, extracts every assignment with 3-day lead time.' },
      { title: 'Group-project shared calendars', desc: 'Find overlap with 4 teammates without a spreadsheet.' },
      { title: 'Free Pro for students', desc: 'Sign up with a .edu email, get Pro free for the duration of your degree.' },
      { title: 'Exam reminders', desc: 'Escalating reminders for exams: 2 weeks, 3 days, morning of.' },
    ],
    faqs: [
      { q: 'Does my school count as accredited?', a: 'Calendro auto-detects about 4,000 academic domains. If yours isn\'t in the list, email edu@calendro.app.' },
      { q: 'Is it really free?', a: 'Yes. No card required, no trial. Free Pro for as long as you\'re a student.' },
      { q: 'What happens when I graduate?', a: 'You move to the free plan. Nothing disappears; you just lose the Pro extras. Or you can upgrade at a student-alumni discount.' },
    ],
    metrics: [
      { value: 'Free', label: 'Pro plan for students' },
      { value: '2 min', label: 'To parse a syllabus' },
      { value: '42', label: 'Partner universities' },
    ],
  },
  {
    slug: 'freelancer',
    persona: 'Freelancers',
    icon: 'freelancer',
    tagline: 'Five clients. One calendar. Zero chaos.',
    oneLiner: 'Calendro unifies every client calendar into one color-coded view — and keeps work and life visibly distinct.',
    quote:
      'Three client calendars, one personal, plus my partner\'s shared view. Calendro merges them without turning into a rainbow crayon box.',
    attribution: 'Priya Shankar, Fractional COO',
    challenge:
      'Freelancers often juggle 3+ client calendars (each on a different provider), a personal calendar, and sometimes a shared family one. Every scheduling tool assumes one account; none of them actually help you keep clients from colliding.',
    solution:
      'Calendro syncs unlimited calendars across Google, Apple, and Outlook, auto-colors events by source, and offers client-safe scheduling links that hide other clients\' events.',
    workflow: [
      { step: 'Onboarding a client', detail: 'Connect their Google or Apple calendar. Color code assigned automatically.' },
      { step: 'Scheduling', detail: 'Type "call with rita tuesday" — Calendro picks the right calendar based on the contact.' },
      { step: 'Invoicing', detail: 'Filter by client; export hours as iCal or CSV. Done in under a minute.' },
    ],
    features: [
      { title: 'Unlimited calendar sync', desc: 'Google + Apple + Outlook + Fastmail + one more Google. All at once, one grid.' },
      { title: 'Client-safe share links', desc: 'Share your availability without showing other clients\' event titles.' },
      { title: 'Time tracking by tag', desc: 'Tag events with a client name; pull hour totals for invoicing.' },
      { title: 'Billable hour export', desc: 'One-click iCal, CSV, or JSON export — integrates with every invoice tool.' },
    ],
    faqs: [
      { q: 'Does it support more than one Google account?', a: 'Yes, unlimited Google accounts on Pro and Team.' },
      { q: 'Can I hide certain calendars from a client share link?', a: 'Yes. Each share link has per-calendar visibility.' },
      { q: 'Is the Pro plan worth it for freelancers?', a: 'If you manage 2+ clients, yes. The unlimited sync and scheduling links pay for themselves in saved admin time.' },
    ],
    metrics: [
      { value: '5+', label: 'Calendars unified' },
      { value: '30 min', label: 'Saved per week on invoicing' },
      { value: '$8/mo', label: 'Pro plan' },
    ],
  },
  {
    slug: 'manager',
    persona: 'Managers',
    icon: 'manager',
    tagline: 'Protect your team\'s attention like it\'s yours.',
    oneLiner: 'Calendro gives managers the visibility — and the honest numbers — to protect their team\'s deep work.',
    quote:
      'Our engineering team saw a 35% drop in meeting hours in the first quarter with Calendro. I did nothing but install it.',
    attribution: 'Linh Ngo, Engineering Manager · Helix',
    challenge:
      'Managers carry a weight their direct reports rarely see: hundreds of meetings a quarter, overlapping with their team\'s focus time, and no single place to evaluate whether any of it is earning its cost.',
    solution:
      'Calendro\'s team analytics show aggregate meeting load per person, focus-window protection, and the cost of recurring invites — in a dashboard that respects privacy by default.',
    workflow: [
      { step: 'Weekly', detail: 'Check team analytics — who\'s over-scheduled, who\'s drifting. Have a quiet conversation with anyone at risk.' },
      { step: 'Quarterly', detail: 'Run a recurring-meeting audit. Each standing invite has its cost indicator; you can cancel en-masse.' },
      { step: 'Day to day', detail: 'Your calendar stays quiet because the team\'s does too. The virtuous cycle.' },
    ],
    features: [
      { title: 'Team meeting analytics', desc: 'See meeting hours per person per week, with over-scheduled warnings.' },
      { title: 'Focus-window protection', desc: 'Teams can share "do not disturb" windows that block new meetings.' },
      { title: 'Recurring audit view', desc: 'All recurring meetings in one list with cost per occurrence.' },
      { title: 'Slack briefing integration', desc: 'Daily briefing lands in a private DM — useful for managers running distributed teams.' },
    ],
    faqs: [
      { q: 'Does this give me surveillance-style oversight of my reports?', a: 'No. Analytics are aggregated and privacy-preserving. Individual event details are never exposed.' },
      { q: 'What plan do I need?', a: 'Calendro Team ($12/user/mo) or Enterprise. Both include full team analytics.' },
      { q: 'Can reports opt out of being in the dashboard?', a: 'Yes. Individuals can request privacy mode; they\'re excluded from aggregate reports.' },
    ],
    metrics: [
      { value: '35%', label: 'Fewer meetings (avg)' },
      { value: '14h', label: 'Focus time recovered / week' },
      { value: 'Team', label: '$12/user/mo' },
    ],
  },
  {
    slug: 'parent',
    persona: 'Parents',
    icon: 'parent',
    tagline: "Your family's week, in one quiet view.",
    oneLiner: 'Calendro reads the school calendar from a PDF or printout and keeps the whole family in sync without a fridge magnet.',
    quote:
      'I used to have the whole school calendar on a magnet on the fridge. Now it\'s on my phone. Calendro read the PDF and did it.',
    attribution: 'Daniel Reyes, partner & parent',
    challenge:
      'Parents coordinate across multiple school calendars, partner work schedules, extracurriculars, caregivers, and their own calendar. Most of it arrives as paper handouts or PDFs.',
    solution:
      'Photo-to-events reads every school calendar, sport schedule, and conference list. Shared family calendars let both parents and a caregiver see the same view without exposing work events.',
    workflow: [
      { step: 'Start of term', detail: 'Snap each school calendar. Confirm the 40-ish events Calendro extracts.' },
      { step: 'Weekly', detail: 'Sunday night family-calendar review. All three of you see the week.' },
      { step: 'Daily', detail: 'A gentle morning briefing — your events + kids\' activities, no clutter.' },
    ],
    features: [
      { title: 'School calendar photo parsing', desc: 'Reads printed PDFs, paper handouts, and even handwritten schedules.' },
      { title: 'Shared family calendar', desc: 'Custom roles: parent, co-parent, caregiver. Each sees what they need.' },
      { title: 'Smart reminders', desc: 'Respect bedtime and wake-up routines. No 11pm pings.' },
      { title: 'Private by design', desc: 'Your work calendar stays separate — family plans get real privacy.' },
    ],
    faqs: [
      { q: 'Can my nanny see the family calendar but not my work?', a: 'Yes. Roles are per-user. A caregiver sees family events only.' },
      { q: 'What if my partner uses Apple Calendar and I use Google?', a: 'Calendro merges both. You each keep your native tool; the shared layer just works.' },
      { q: 'Can I import our family\'s historical events?', a: 'Yes. Import via iCal or drag-and-drop .ics files.' },
    ],
    metrics: [
      { value: '~40', label: 'Events per term parsed' },
      { value: '0', label: 'Missed PTA meetings' },
      { value: '3', label: 'Roles in family plans' },
    ],
  },
  {
    slug: 'healthcare',
    persona: 'Healthcare',
    icon: 'healthcare',
    tagline: 'HIPAA-ready. Shift-aware. Actually human.',
    oneLiner: 'Calendro brings on-call schedules, shift swaps, and meetings into one app that\'s built for clinical realities.',
    quote:
      'Our residency program uses Calendro for shift swaps. The on-call schedule is now a photo, not a spreadsheet. Our chief resident sleeps better because of it.',
    attribution: 'Dr. Amira Okafor, Residency Director',
    challenge:
      'Clinical schedules are posted on break-room walls, passed through group texts, and tracked in spreadsheets no one loves. Shift swaps happen over Slack. Everyone is tired.',
    solution:
      'Calendro\'s photo parsing reads on-call boards, shift-swap requests get proper UI (with conflict detection), and the HIPAA BAA lets institutions roll it out safely.',
    workflow: [
      { step: 'Start of rotation', detail: 'Snap the on-call board. Every shift for the month lands on your calendar.' },
      { step: 'Shift swap', detail: 'Request a swap in two taps. Calendro detects conflicts automatically.' },
      { step: 'Daily', detail: 'See upcoming shifts in your morning briefing. Nothing else.' },
    ],
    features: [
      { title: 'HIPAA BAA available', desc: 'Enterprise tier includes a Business Associate Agreement.' },
      { title: 'Shift swap with conflict detection', desc: 'Automatic conflict checks before a swap goes live.' },
      { title: 'Photo on-call parsing', desc: 'Reads handwritten or printed on-call boards.' },
      { title: 'Works on every break-room device', desc: 'Progressive web app runs on hospital-issued iPads.' },
    ],
    faqs: [
      { q: 'Is Calendro HIPAA compliant?', a: 'Yes, on the Enterprise tier with a signed BAA. See /security and /enterprise.' },
      { q: 'Can shift swaps require approval?', a: 'Yes. Enterprise admins can configure approval workflows per program.' },
      { q: 'Does it work with Epic, Cerner, or other EHR systems?', a: 'Calendro does not integrate directly with EHRs for clinical reasons. Institutions export schedules; Calendro imports them.' },
    ],
    metrics: [
      { value: 'HIPAA', label: 'BAA available' },
      { value: '< 2 min', label: 'Shift swap request' },
      { value: '42', label: 'Residency programs' },
    ],
  },
]

export function getUseCase(slug: string) {
  return USE_CASES.find((u) => u.slug === slug) ?? null
}
