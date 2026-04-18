export type UsesItem = {
  name: string
  note: string
  since?: string
}

export type UsesCategory = {
  label: string
  items: UsesItem[]
}

export type FounderSetup = {
  slug: 'iris' | 'oren'
  name: string
  role: string
  location: string
  initials: string
  essay: string[]
  categories: UsesCategory[]
}

export const FOUNDERS: FounderSetup[] = [
  {
    slug: 'iris',
    name: 'Iris Koval',
    role: 'Cofounder · Design',
    location: 'Tel Aviv → London, 50/50',
    initials: 'IK',
    essay: [
      "My tools are mostly old and mostly quiet. I've kept the same mechanical keyboard since 2019 because the act of buying a new one always felt like cheating on a piece of writing I hadn't finished. The oldest thing on my desk is a 1978 Braun desk clock that belonged to my grandfather. It is both the most expensive object I own and the reason I do not own a smartwatch.",
      "The most used surface in my day is my notebook. I carry a small, plain-lined Leuchtturm everywhere. When a thought is too important to lose in a tab, it goes there first, and into Momenties second. The calendar is the back-end of my notebook, not the other way around.",
    ],
    categories: [
      {
        label: 'Hardware',
        items: [
          { name: 'MacBook Pro 14″ M3', note: 'I am told it is very fast. I mostly use it to type.', since: '2024' },
          { name: 'Dell UltraSharp 27″ 4K', note: 'A second screen, mostly for Figma. Dimmed to 30% always.', since: '2023' },
          { name: 'Keychron Q1 Pro', note: 'Silent red switches. Same board for six years and counting.', since: '2019' },
          { name: 'Logitech MX Ergo', note: 'A trackball that saved my right wrist in 2022.', since: '2022' },
          { name: 'Braun DN 30', note: '1978 desk clock. Inherited. Keeps better time than any of us.', since: '1978' },
        ],
      },
      {
        label: 'Software',
        items: [
          { name: 'Figma', note: 'Small files. I delete frames weekly as a form of hygiene.' },
          { name: 'iA Writer', note: 'Every Spec Letter lives here first.' },
          { name: 'Momenties', note: 'Obviously. Voice-first on my walks.' },
          { name: 'Procreate', note: 'For the sketches that become UI two months later.' },
          { name: 'Readwise', note: 'Single source of truth for highlights.' },
        ],
      },
      {
        label: 'Desk & Ritual',
        items: [
          { name: 'Leuchtturm1917 A5 Medium', note: 'Plain lined, navy cover. One per quarter.' },
          { name: 'Blackwing Volumes', note: 'The limited editions. One pencil per week.' },
          { name: 'A narrow vase of eucalyptus', note: 'Replaced Sundays. The smell is my reset signal.' },
          { name: 'A small Matcha set', note: 'First and only caffeine of the day.' },
        ],
      },
    ],
  },
  {
    slug: 'oren',
    name: 'Oren Weiss',
    role: 'Cofounder · AI & Engineering',
    location: 'Tel Aviv, year-round',
    initials: 'OW',
    essay: [
      "My setup is a compromise between my aesthetics (Iris's) and my physics (my back's). I work from a sit-stand, change posture every twenty minutes, and keep exactly one application in focus at a time. The worst version of me tries to multitask. The best version of me has a single terminal and a single editor open and a timer.",
      "I spend an embarrassing amount of time choosing my daily tools, and then years at a time using the same ones. I think this is the right ratio. The tools fade into the background and the work comes forward. That is the only test that matters.",
    ],
    categories: [
      {
        label: 'Hardware',
        items: [
          { name: 'Framework 16 (Linux)', note: 'My primary machine. I picked the one I could repair.', since: '2024' },
          { name: 'Dell U3223QE 32″ 4K', note: 'Single-monitor workflow. Tall, not wide.', since: '2022' },
          { name: 'Keychron K3 Max', note: 'Low-profile browns. I travel with it.', since: '2023' },
          { name: 'Herman Miller Aeron', note: 'Used. Re-meshed. Will outlive the company.', since: '2017' },
          { name: 'Sony WH-1000XM5', note: 'ANC on for deep work. Nothing plays through them most days.', since: '2023' },
        ],
      },
      {
        label: 'Software',
        items: [
          { name: 'Cursor', note: 'Primary editor. AI assist on, suggestions at half intensity.' },
          { name: 'WezTerm', note: 'Terminal. Transparent background, Berkeley Mono 12pt.' },
          { name: 'Fish shell', note: 'Opinionated and quiet. Zero plugins.' },
          { name: 'Momenties', note: 'Eaten daily. Voice input during kitchen breaks.' },
          { name: 'Obsidian', note: 'My second brain. Vault is in plain markdown, in Git.' },
        ],
      },
      {
        label: 'Desk & Ritual',
        items: [
          { name: 'A sit-stand desk', note: 'Tall when writing code. Low when writing prose.' },
          { name: 'A wall clock, ticking', note: 'The only sound in the room on deep work days.' },
          { name: 'Black Americano', note: 'Single origin, one espresso, hot water. Never after 2pm.' },
          { name: 'A 25-minute kitchen timer', note: 'Mechanical. I hate the phone version.' },
        ],
      },
    ],
  },
]

export const SHARED_STACK: UsesCategory[] = [
  {
    label: 'Team tools',
    items: [
      { name: 'Linear', note: 'Work tracking. Strict cycles, no spillover norm.' },
      { name: 'GitHub', note: 'Private. Every PR under 400 lines or split.' },
      { name: 'Sentry', note: 'Errors. Read live by the Sitter on release day.' },
      { name: 'Vercel', note: 'Hosting. We pay for the peace.' },
      { name: 'Supabase', note: 'Postgres, auth, row-level security by default.' },
      { name: '1Password', note: 'Every secret. No password is ever typed twice.' },
    ],
  },
  {
    label: 'Research & writing',
    items: [
      { name: 'Readwise', note: 'Unified highlights across books, tweets, and essays.' },
      { name: 'Instapaper', note: 'The reading queue lives here.' },
      { name: 'Figma FigJam', note: 'Synchronous whiteboarding, asynchronously.' },
      { name: 'Calendly', note: 'For external calls only. Internal, we use Momenties.' },
    ],
  },
]

export const READING: { title: string; author: string; note: string }[] = [
  {
    title: "Slow Productivity",
    author: 'Cal Newport',
    note: 'The operational philosophy behind our Quiet Tuesday release cadence.',
  },
  {
    title: 'Four Thousand Weeks',
    author: 'Oliver Burkeman',
    note: "The reason we don't publish DAU.",
  },
  {
    title: 'The Timeless Way of Building',
    author: 'Christopher Alexander',
    note: 'Our design philosophy in hardcover.',
  },
  {
    title: 'Making It',
    author: 'Tara Tarpey',
    note: 'A book about crafting small objects. Surprisingly relevant to shipping.',
  },
  {
    title: 'Calm Technology',
    author: 'Amber Case',
    note: 'The academic ancestor of every paragraph on our /manifesto page.',
  },
  {
    title: 'The Paris Review Interviews, Vol. 1',
    author: 'Various',
    note: "Read aloud on the Sunday Spec Letter calls. You'd be surprised how useful.",
  },
]

export const ROTATING: { month: string; item: string; note: string }[] = [
  {
    month: 'April 2026',
    item: 'Kaweco Sport fountain pen, classic black',
    note: 'Replaced a cheaper clone after two years. Worth the upgrade.',
  },
  {
    month: 'March 2026',
    item: 'Ghostty terminal',
    note: "We're evaluating it. Oren is smitten. Iris is skeptical.",
  },
  {
    month: 'February 2026',
    item: 'Lamy 2000 rollerball',
    note: "Iris's new meeting companion. Quieter than a pencil.",
  },
  {
    month: 'January 2026',
    item: 'Monitor light bar',
    note: 'BenQ ScreenBar Halo. Immediate improvement to after-5pm sessions.',
  },
]
