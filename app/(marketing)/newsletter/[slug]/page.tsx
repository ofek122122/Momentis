import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { NewsletterForm } from '@/components/marketing/NewsletterForm'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'

type Issue = {
  number: number
  slug: string
  date: string
  title: string
  tag: string
  readingMinutes: number
  excerpt: string
  body: string[]
}

const ISSUES: Issue[] = [
  {
    number: 24,
    slug: 'the-anti-dashboard',
    date: '2026-04-08',
    title: 'The anti-dashboard',
    tag: 'Design',
    readingMinutes: 7,
    excerpt:
      'Why every "productivity dashboard" is a lie — and what a calendar that tells the truth would look like.',
    body: [
      'There is a dashboard disease spreading through the tools we use to manage our time. Every productivity app now greets you with charts. Completion rates. Streaks. Habit scores. Time allocations. A visual report on whether you\'ve been good enough.',
      'I find all of them, without exception, demoralizing.',
      'Not because the data is wrong. The data is usually fine. It\'s that the frame is wrong. A dashboard implies you are a machine with KPIs. That your mornings should be optimized like a factory shift. That the value of your Tuesday is measurable by throughput.',
      'Your calendar is not a dashboard. A calendar is a canvas.',
      'When we built Momenties, we made a deliberate choice: no completion rate. No streak counter. No "you scheduled 23% less than last week" notification. We show you what\'s coming. We don\'t grade you on how you\'ve been.',
      'This is harder than it sounds. Almost everyone who tests the product asks for a dashboard in the first week. "How do I see how I\'m doing?" they ask. What they mean, I think, is: *am I a good person?* And a productivity app cannot answer that. It probably shouldn\'t try.',
      'The one metric we do show is the simplest one: your next three events. That\'s it. What\'s coming in the next few hours. A glance. A breath. Not a judgment.',
      'Here is my rule of thumb: if a feature makes you feel like you\'re being evaluated, remove it. Software should feel like a capable assistant, not a disappointed boss.',
      'The anti-dashboard isn\'t empty. It\'s just honest about what a calendar is for.',
    ],
  },
  {
    number: 23,
    slug: 'on-scheduling-nothing',
    date: '2026-03-25',
    title: 'On scheduling nothing',
    tag: 'Time',
    readingMinutes: 5,
    excerpt:
      'The hardest thing to put in your calendar isn\'t a meeting. It\'s an afternoon with no agenda, no deliverable, and no apology.',
    body: [
      'I have a recurring event in my calendar called "nothing." It runs for three hours, every other Thursday. No description. No location. No attendees. Just a block of time that belongs to no one.',
      'I put it there because without it, the slot fills. Not with anything important — just with small logistics, quick calls, administrative residue. Things that feel urgent and are not.',
      'The hardest thing about scheduling nothing is the guilt of defending it. Someone asks: "Can we do Thursday at 3?" and you have to say: "I\'m busy." Technically true. Also embarrassing. You are busy doing nothing.',
      'But the embarrassment is the point. That discomfort is the exact pressure that erodes your deep-work time, your thinking time, your recovery time. The people who protect this space are protecting something real.',
      'A calendar is an expression of your values. What you schedule is what you believe matters. If you never schedule time for thought, for rest, for the slow-burning work that doesn\'t have a due date — your calendar is lying to you about your values.',
      'Schedule the nothing. Name it something innocuous if that helps. "Prep." "Writing." "Focus." Put it on a Tuesday where it can\'t move. Then don\'t let it move.',
      'You\'ll know when you get it right: someone asks for that slot and you feel a small, private, confident calm as you say no.',
    ],
  },
  {
    number: 22,
    slug: 'how-we-use-gemini',
    date: '2026-03-11',
    title: 'How we use Gemini',
    tag: 'Engineering',
    readingMinutes: 9,
    excerpt:
      'A detailed look at our hybrid parsing pipeline — chrono-node first, Gemini second — and why the order matters.',
    body: [
      'Every time you type "dentist thursday 3pm" into Momenties, something small and interesting happens before your event appears. Two systems compete to understand you. Here\'s how that works.',
      '**Stage one: chrono-node.** Before any AI is involved, your input goes through chrono-node, an open-source JavaScript library for natural-language date parsing. It runs locally, costs nothing, and handles the vast majority of inputs in under 20 milliseconds. "Next Monday," "tomorrow at noon," "March 15th" — chrono handles all of these with high confidence.',
      'chrono-node returns a confidence signal alongside its parse. If confidence is above our threshold (currently 0.8), we stop there. The event is created. No AI needed.',
      '**Stage two: Gemini.** For the ~25% of inputs that chrono-node can\'t parse confidently — "biweekly standup starting next month," "dinner with Elena sometime this weekend" — we escalate to Gemini 2.5 Flash. We send only the input text and a structured prompt asking for JSON: title, date, time, duration, recurrence, and an estimated confidence.',
      'We validate the response with Zod. If it passes, we use it. If it fails — malformed JSON, missing fields, impossible dates — we fall back to chrono-node\'s best guess and flag the event for manual review.',
      '**Why this order?** Privacy. The more inputs we handle locally, the fewer text strings we send to any third-party API. Roughly 75% of Momenties users\' inputs never leave their browser or our server — they\'re parsed entirely by chrono-node, which runs on our infrastructure, never on Google\'s.',
      'The second reason is cost. Gemini calls are cheap but not free. At scale, a 75% deflection rate matters. It\'s also faster: 18ms vs. 280ms on the 99th percentile.',
      'The third reason is a useful forcing function for product quality. Every input that escalates to Gemini is logged and reviewed weekly. If we\'re seeing a category of failures — a date pattern chrono-node consistently misses — we update chrono-node\'s ruleset rather than just letting Gemini absorb it. This keeps us honest about what "understand your calendar" means at a systems level.',
      'We\'re planning to open-source the parsing layer in Q3. The rules we\'ve built around chrono-node, the confidence calibration, the fallback logic — this is the most honest part of our AI stack, and we\'d rather the calendar world had it than kept it to ourselves.',
    ],
  },
  {
    number: 21,
    slug: 'the-cost-of-a-context-switch',
    date: '2026-02-26',
    title: 'The cost of a context switch',
    tag: 'Productivity',
    readingMinutes: 6,
    excerpt:
      'We measured it. The average cost of interrupting deep work is not 15 minutes, it\'s 47. Here\'s the study we used.',
    body: [
      'The "15 minutes to regain focus" figure is everywhere. In productivity books, in Slack channel bios, in company all-hands decks about why we should have fewer meetings. It\'s cited constantly, often authoritatively, and almost never sourced.',
      'The actual research is different — and worse.',
      'Gloria Mark at UC Irvine studied information workers for several years across multiple papers. Her finding: the average time to return to full cognitive engagement after an interruption is 23 minutes. In a follow-up with a more distracting environment (screens, notifications, colleagues), it stretched to 47 minutes.',
      '47 minutes. For a two-minute email check.',
      'What makes the calendar angle interesting is this: most interruptions don\'t come from outside. They come from *inside the calendar.* A meeting that ends 10 minutes late. A notification 15 minutes before a block you were hoping to use. A fragmented afternoon that never gives you more than 50 minutes of continuous time.',
      'We looked at anonymized scheduling data from beta users who opted into analytics. Users with more than three context switches per day — meaning their schedule fragmented their work into chunks shorter than 90 minutes — reported significantly lower satisfaction with their productivity. Not because they did less work. Because they *felt* like they did.',
      'This is the invisible cost in a calendar. It\'s not the meetings themselves. It\'s the transitions between them.',
      'Momenties\'s smart-scheduling engine tries to group meetings into clusters rather than spreading them evenly. It\'s imperfect — other people\'s calendars don\'t cooperate — but it\'s the right goal. Protect the 90-minute block. Defend it as if it were a renewable resource, because it is.',
    ],
  },
  {
    number: 20,
    slug: 'design-in-the-dark',
    date: '2026-02-11',
    title: 'Design in the dark',
    tag: 'Design',
    readingMinutes: 6,
    excerpt:
      'Iris on designing exclusively in dark mode and why it forces honesty — both in contrast and in hierarchy.',
    body: [
      'Every version of Momenties has been designed dark-mode first. This is sometimes read as an aesthetic preference, a Silicon Valley fashion. It is not. It is a constraint I chose deliberately, and it has shaped the product in ways that a light-mode-first approach would not.',
      'Here is the hard thing about dark mode: hierarchy is honest. On a light background, you can fudge visual weight with gray. A slightly lighter gray, a slightly heavier one, and your hierarchy *seems* clear. In dark mode, the contrast math is brutal. Either an element reads or it doesn\'t. Either it belongs in the foreground or it belongs in the background. There is no hiding in the middle.',
      'This forces every element to earn its place. If something looks muddled against a dark background, it\'s because the hierarchy was muddled to begin with. The dark mode is revealing a real problem, not creating a new one.',
      'The second thing dark mode forces is color restraint. On a light canvas, you can add color freely — it recedes. On dark backgrounds, color advances. It shouts. So you end up using less of it, and more deliberately. Our gold accent appears in perhaps 5% of pixels on any given screen. That\'s because it has to mean something when it appears.',
      'The third thing — and this surprises people — is that dark mode is more accessible for extended use. Not for all users, and not for all contexts. But for a calendar app used throughout the working day, the reduced luminance matters. Eyes are tired by 4pm. A dark interface asks less of them.',
      'The one real risk is legibility at small sizes. Dark backgrounds make fine type harder to read. We compensate with slightly looser tracking on anything below 13px, and we test at 60% brightness rather than 100%.',
      'Design is a set of constraints. Choosing dark mode is choosing a harder set of constraints. Harder constraints make better products, if you\'re honest about following them.',
    ],
  },
]

const TAG_COLORS: Record<string, string> = {
  Design: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
  Time: 'text-sky-300 bg-sky-500/10 border-sky-500/20',
  Engineering: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
  Productivity: 'text-gold bg-gold/10 border-gold/20',
  AI: 'text-rose-300 bg-rose-500/10 border-rose-500/20',
  Company: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export async function generateStaticParams() {
  return ISSUES.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const issue = ISSUES.find((i) => i.slug === slug)
  if (!issue) return {}
  return {
    title: `#${issue.number}: ${issue.title} — The Quiet Hours`,
    description: issue.excerpt,
    alternates: { canonical: `/newsletter/${issue.slug}` },
    openGraph: {
      title: `${issue.title} — The Quiet Hours`,
      description: issue.excerpt,
      url: `/newsletter/${issue.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${issue.title} — The Quiet Hours`,
      description: issue.excerpt,
    },
  }
}

export default async function NewsletterIssuePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const idx = ISSUES.findIndex((i) => i.slug === slug)
  if (idx === -1) notFound()

  const issue = ISSUES[idx]
  const prev = ISSUES[idx + 1] ?? null
  const next = ISSUES[idx - 1] ?? null
  const tagColor = TAG_COLORS[issue.tag] ?? 'text-muted-foreground bg-muted/10 border-border'

  return (
    <>
      <PageHero
        eyebrow={`Issue #${issue.number} · The Quiet Hours`}
        title={issue.title}
        lede={issue.excerpt}
        crumbs={[
          { label: 'Newsletter', href: '/newsletter' },
          { label: `#${issue.number}` },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-[11px] font-mono uppercase tracking-wider ${tagColor}`}>
            {issue.tag}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
            <Clock className="h-3 w-3" />
            {issue.readingMinutes} min read
          </span>
          <span className="text-xs font-mono text-muted-foreground">
            {formatDate(issue.date)}
          </span>
        </div>
      </PageHero>

      {/* Article body */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-2xl mx-auto">
          <div className="prose-like space-y-6">
            {issue.body.map((para, i) => (
              <Reveal key={i} delay={i * 40}>
                <p className="text-[17px] leading-[1.85] text-foreground/88 font-light">
                  {para.startsWith('**') ? (
                    <span>
                      <strong className="font-semibold text-foreground not-italic">
                        {para.match(/\*\*(.+?)\*\*/)?.[1]}
                      </strong>
                      {para.replace(/\*\*(.+?)\*\*/, '')}
                    </span>
                  ) : (
                    para
                  )}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe nudge */}
      <section className="py-16 px-5 md:px-8 border-b border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                The Quiet Hours
              </p>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                Get this in your inbox.
              </h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                One essay, every two weeks. On time, AI, and calm software. 12,000+ readers. You can unsubscribe in one click.
              </p>
              <NewsletterForm source={`newsletter-issue-${issue.number}`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Issue navigation */}
      <section className="py-12 px-5 md:px-8 border-b border-border">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
          {prev ? (
            <Link
              href={`/newsletter/${prev.slug}`}
              className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/60 mb-0.5">
                  Issue #{prev.number}
                </div>
                <div>{prev.title}</div>
              </div>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              href={`/newsletter/${next.slug}`}
              className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors text-right"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/60 mb-0.5">
                  Issue #{next.number}
                </div>
                <div>{next.title}</div>
              </div>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </section>

      <CTA
        title="Start with a free account."
        subtitle="The calendar that understands you. No credit card required."
        primary={{ label: 'Get started free', href: '/login' }}
        secondary={{ label: 'All issues', href: '/newsletter' }}
      />
    </>
  )
}
