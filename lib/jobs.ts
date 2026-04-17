export type Job = {
  slug: string
  title: string
  team: string
  type: string
  location: string
  salary: string
  summary: string
  tags: string[]
  about: string
  responsibilities: string[]
  qualifications: string[]
  niceToHave: string[]
  howWeHire: string[]
}

export const JOBS: Job[] = [
  {
    slug: 'senior-product-designer',
    title: 'Senior Product Designer',
    team: 'Design',
    type: 'Full-time',
    location: 'Remote (Americas/EU)',
    salary: '$160k–$210k + equity',
    summary: 'Lead design on the next wave of AI-driven scheduling. You\'ve shipped consumer software with a strong point of view.',
    tags: ['Figma', 'Prototyping', 'Design systems', 'Motion'],
    about:
      'Design at Calendro is two people: Iris (co-founder) and Lena (Head of Product). We\'re hiring the third. You\'ll own a full surface area of the product — probably AI interactions, possibly mobile — and you\'ll be the design voice in every decision for that surface. Small team, small ego, lots of ownership.',
    responsibilities: [
      'Own end-to-end design for one major product surface, from research to ship.',
      'Push the design system forward as you discover where it\'s thin.',
      'Work directly with engineers on interaction details, not by throwing mocks over a wall.',
      'Run your own user research — no proxies. We believe designers should talk to users every week.',
      'Write. Design decisions at Calendro are captured in short memos so everyone else can audit them.',
    ],
    qualifications: [
      '6+ years shipping consumer-grade software. At least 2 years as a senior IC.',
      'A portfolio that shows strong opinions, not just polish. We want to see a decision you\'re proud of, not a screenshot.',
      'Comfort with prototyping in Figma and at least one code tool (we use Next.js + Tailwind).',
      'Excellent written communication. Calendro is async-first; writing is how decisions happen.',
    ],
    niceToHave: [
      'Background in calendar, scheduling, or AI interaction design.',
      'Prior founder or 0→1 experience.',
      'Motion / micro-interaction chops.',
      'Taste for quiet, literary interface aesthetics.',
    ],
    howWeHire: [
      '30-min intro call with Iris.',
      '1-hr portfolio deep-dive with Iris + Lena.',
      'A paid 1-day design exercise (your choice of prompt, or ours).',
      'References call.',
      'Offer. Target is 10 business days total.',
    ],
  },
  {
    slug: 'staff-engineer-ai-platform',
    title: 'Staff Engineer — AI Platform',
    team: 'Engineering',
    type: 'Full-time',
    location: 'Remote (worldwide)',
    salary: '$220k–$280k + equity',
    summary: 'Own our parsing and inference stack. You have experience with LLM eval, prompt infrastructure, and low-latency serving.',
    tags: ['Python', 'TypeScript', 'LLMs', 'Eval', 'Infra'],
    about:
      'Calendro\'s parsing stack is chrono-node + Gemini + a carefully-tuned prompt library, wrapped in a Zod-validated pipeline. It is, by volume, the busiest code path we run. This role owns it. You\'ll be our second AI engineer and report to our Founding AI, Rafa.',
    responsibilities: [
      'Own the parser pipeline end-to-end: tokenization, prompt construction, model routing, schema validation, fallback policy.',
      'Build and maintain our eval harness. Ship regressions never, knowingly.',
      'Drive the next generation of prompt caching and request batching to keep latency under 500ms p95.',
      'Evaluate new models quarterly; own the A/B framework that rolls them out safely.',
      'Partner with the product team on new AI surfaces — smart suggestions, briefings, photo parsing.',
    ],
    qualifications: [
      '8+ years of software engineering, at least 2 in AI / ML platform or infrastructure.',
      'Shipped production systems that use LLM APIs at scale.',
      'Experience designing eval frameworks that catch real regressions, not vanity metrics.',
      'Strong Python + TypeScript. Comfort with Postgres and distributed systems basics.',
    ],
    niceToHave: [
      'Prior work on calendaring, parsing, or temporal data.',
      'Experience with self-hosted open models.',
      'A public-facing body of writing or open source.',
      'Systems you built that got significantly cheaper over time.',
    ],
    howWeHire: [
      'Intro call with Rafa (45 min).',
      'Paid technical deep-dive: bring a project, we talk through it and pair on a small extension (2 hours).',
      'Systems design conversation with Oren, co-founder & CTO.',
      'References.',
      'Offer. Target is 2 weeks.',
    ],
  },
  {
    slug: 'full-stack-engineer',
    title: 'Full-stack Engineer',
    team: 'Engineering',
    type: 'Full-time',
    location: 'Remote (Americas/EU)',
    salary: '$170k–$220k + equity',
    summary: 'Ship features end-to-end across our Next.js app, API, and mobile. Pragmatic, fast, deeply curious.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    about:
      'You\'ll be our fifth engineer. You\'ll ship features end-to-end: spec, database schema, API route, UI, tests, release notes. We don\'t silo. The person who designs an API should also style its error state.',
    responsibilities: [
      'Ship real features from database to UI. No hand-offs.',
      'Own one or two areas of the product over time — picked with you, not assigned.',
      'Write tests that catch regressions, not tests that flatter a coverage tool.',
      'Participate in on-call (one week every ~6). We have ~1 production page per month.',
      'Review other engineers\' code carefully; mentor where helpful.',
    ],
    qualifications: [
      '5+ years full-stack engineering, comfortable in both a backend and a frontend file.',
      'Deep TypeScript. Comfortable with React server components, streaming, and suspense.',
      'SQL fluency. We run Postgres through Prisma; you should be happy to drop to raw SQL when the ORM doesn\'t fit.',
      'Good writing. You\'ll write specs, post-mortems, and release notes.',
    ],
    niceToHave: [
      'Mobile (React Native or native iOS/Android).',
      'Experience with Stripe.',
      'Calendar/iCal/CalDAV experience (this will win you friends).',
      'A public-facing body of work.',
    ],
    howWeHire: [
      '30-min intro with Oren or Sam.',
      'Paid 2-hour pair on a real Calendro issue (we pay your market rate for the time).',
      'Systems / architecture discussion.',
      'References.',
      'Offer.',
    ],
  },
  {
    slug: 'customer-support-engineer',
    title: 'Customer Support Engineer',
    team: 'Support',
    type: 'Full-time',
    location: 'Remote (EU timezone)',
    salary: '$90k–$120k + equity',
    summary: 'Answer customers in a way that feels like a kind friend. Diagnose real bugs. Fix the ones you can.',
    tags: ['Writing', 'SQL', 'Curiosity'],
    about:
      'Support at Calendro isn\'t tier-1 triage. It\'s high-leverage: you\'re the voice of the company for most of our users. You\'ll read logs, reproduce bugs, file issues with repro steps, sometimes ship fixes yourself. This role reports to Noa, our first support hire.',
    responsibilities: [
      'Answer emails from customers within hours, not days. 4-hour weekday SLA, 24-hour weekend.',
      'Reproduce bugs. Read logs. File crisp tickets with repro steps.',
      'Ship small fixes yourself where you can — typos, copy, small UI issues, clear bugs.',
      'Write help articles and improve existing ones. Customers rank our docs as one of the top reasons they stay.',
      'Run monthly customer advisory calls; bring themes back to product.',
    ],
    qualifications: [
      '3+ years in technical support, solutions engineering, or similar.',
      'Great writing. A short message that answers the actual question.',
      'Comfortable with SQL queries on a read replica.',
      'Comfortable reading React/TypeScript code well enough to find a bug location.',
      'Empathy that holds up at 4pm on a Friday.',
    ],
    niceToHave: [
      'Experience supporting a calendar or productivity product.',
      'A second language.',
      'Prior engineering experience.',
    ],
    howWeHire: [
      'Intro with Noa.',
      'Paid 2-hour async exercise: respond to five sample tickets as you would in role.',
      'Call with an engineer on a real issue to see how you think.',
      'References.',
      'Offer.',
    ],
  },
]

export function getJob(slug: string) {
  return JOBS.find((j) => j.slug === slug) ?? null
}
