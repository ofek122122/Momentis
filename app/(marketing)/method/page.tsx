import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import {
  PenLine,
  Compass,
  GitBranch,
  Ship,
  LineChart,
  Clock,
  BookOpen,
  Users,
  EyeOff,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Calendro Method — How we work',
  description:
    'The companion to our manifesto. How we decide what to build, how we write before we code, how we ship, and how we measure. A working document.',
  alternates: { canonical: '/method' },
  openGraph: {
    title: 'The Calendro Method',
    description:
      'How we work, written down. Deciding, writing, shipping, measuring. A working document.',
    url: '/method',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Calendro Method',
    description: 'How we work, written down.',
  },
}

type Section = {
  id: string
  n: string
  title: string
  lede: string
  body: string[]
  principles: { title: string; note: string }[]
}

const SECTIONS: Section[] = [
  {
    id: 'decide',
    n: '01',
    title: 'How we decide what to build',
    lede:
      "Most of our best decisions are removals. Most of our worst are additions. We build with that in mind.",
    body: [
      "Every quarter we write a one-page document called the Shortlist. It names the three things we will attempt, the two things we will defer, and the one thing we are killing on purpose. The Shortlist has a single author each quarter — rotated so no single voice dominates — but it is reviewed by everyone.",
      "Before anything lands on the Shortlist, it has to pass what we call the Double Test: it has to be something a current user has asked for twice in their own words, and it has to pass a private test where at least three of us could explain it to our parents without using the word 'AI'. If it fails either, we write it down in a file called Later.md and revisit next quarter.",
      "We do not build to compete. We build because a particular user we know by name is struggling. Our calendar is not in a race — it is in a conversation.",
    ],
    principles: [
      {
        title: 'Write the shortlist in public',
        note: 'Three attempts, two deferrals, one deliberate kill — every quarter, in our /open page.',
      },
      {
        title: 'Kill more than you ship',
        note: "If Later.md isn't growing faster than the Shortlist, we're not being discerning enough.",
      },
      {
        title: 'Build for a name, not a market',
        note: 'Every project starts from a user we can email. We add more later.',
      },
    ],
  },
  {
    id: 'write',
    n: '02',
    title: 'How we write before we code',
    lede:
      'Every feature starts as an essay. If the essay is not good, the feature is not ready.',
    body: [
      "Before a line of code is written, the person leading the feature drafts a document we call the Spec Letter. It is addressed to a specific user — sometimes a real customer, sometimes a composite — and it describes the change as if it had already shipped. It reads like a piece of writing, not like a ticket.",
      "The Spec Letter has to pass three readings. The first is technical — does it match reality? The second is editorial — is it beautiful prose? The third is practical — would we build the described thing, right now, for this user?",
      "We think this sounds slow and is fast. Most of the features we have not shipped died in the second reading, which is a mercy. Most of the features we have shipped survived all three, which is why they ship as intended the first time.",
    ],
    principles: [
      {
        title: 'Spec as a letter',
        note: 'Addressed to a user, written in prose. No bullets, no acronyms, no hedge words.',
      },
      {
        title: 'Three readings',
        note: 'Technical, editorial, practical. A Spec Letter fails if it fails any one of them.',
      },
      {
        title: 'Writing is thinking',
        note: "If we can't write the change, we don't understand it yet.",
      },
    ],
  },
  {
    id: 'ship',
    n: '03',
    title: 'How we ship',
    lede:
      'Ship small. Ship often. Ship quietly. Then ship one loud thing a quarter, with care.',
    body: [
      "Our default release cadence is Tuesday afternoons, Europe time. It is the quietest moment in our support queue and the least likely to interrupt a weekend for anyone in a different region. We ship small things with no announcement. We ship medium things to the /changelog. We ship large things as one coherent piece with a named Launch Week.",
      "Every release has a designated Sitter — an engineer whose only job for six hours is to watch the release, read the inbox, and catch the thing nobody accounted for. The Sitter rotation is public in our shared doc. It is the most valuable six hours we spend all week.",
      "When we ship something that breaks, we write the rollback before we ship the fix. Then we ship the rollback. Then, later, we ship the fix, carefully.",
    ],
    principles: [
      {
        title: 'Quiet Tuesdays',
        note: 'Default release cadence is Tuesday afternoon CET — after the support queue quiets, before the weekend.',
      },
      {
        title: 'A named Sitter',
        note: "One engineer's only job for six hours after a release: watch, read, catch.",
      },
      {
        title: 'Rollback before fix',
        note: 'When something breaks, we ship the undo first. Always.',
      },
    ],
  },
  {
    id: 'measure',
    n: '04',
    title: 'How we measure',
    lede:
      "We measure a few things carefully. We refuse to measure most things. We think that's the discipline.",
    body: [
      "There are seven numbers on our internal dashboard. Two of them are about customer experience (p50 and p99 latency across the parser pipeline). Two are about business health (monthly recurring revenue, annualized churn). Two are about quality (error budget remaining, support-ticket half-life). The seventh is reserved — the team votes at the start of each quarter on what the Learning Metric will be, and only the learning metric rotates.",
      "We do not measure DAU, MAU, session length, clicks, or anything whose pursuit would degrade the product we intend to ship. Our users are not a farm we harvest; they are people we build for. The dashboards reflect that.",
      "Every Friday we publish a line or two on our /open page. It is short, usually under a hundred words, and we never edit it after publishing, even when we want to.",
    ],
    principles: [
      {
        title: 'Seven numbers, no more',
        note: 'Five fixed, two reserved. If a metric can degrade the product, we refuse to optimize for it.',
      },
      {
        title: 'Publish Friday',
        note: 'The /open page is our calm, imperfect public journal. We never edit after publishing.',
      },
      {
        title: 'Instrument sparingly',
        note: "If it can't be explained in a sentence, it shouldn't be on the dashboard.",
      },
    ],
  },
]

const CADENCE: { day: string; note: string }[] = [
  { day: 'Mon', note: 'Planning. The Shortlist review. One long walk.' },
  { day: 'Tue', note: 'Deep work. Release window in the afternoon.' },
  { day: 'Wed', note: 'Design critique. One real customer call.' },
  { day: 'Thu', note: 'Deep work. No meetings before noon.' },
  { day: 'Fri', note: 'Demos. /open publish. We close the laptops early.' },
]

const TOOLS: { name: string; for: string }[] = [
  { name: 'iA Writer', for: 'Spec Letters. Plain text, plain light.' },
  { name: 'Figma', for: 'Small flows, tracked frames, quiet files.' },
  { name: 'Linear', for: 'Work tracking. Strict cycle discipline.' },
  { name: 'Cursor', for: 'Our editor of choice.' },
  { name: 'Sentry', for: 'Errors. A Sitter reads it live on release day.' },
  { name: 'Calendro', for: 'Our own calendar. Eaten daily.' },
]

export default function MethodPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(50% 60% at 50% 0%, rgba(197,163,92,0.10) 0%, rgba(197,163,92,0) 60%)',
          }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-2">
          <Breadcrumbs items={[{ label: 'Method' }]} />
        </div>
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-5">
            A working document · companion to the manifesto
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
            The <em className="not-italic text-gold">Calendro</em> Method
          </h1>
          <p className="mt-7 font-display italic text-xl md:text-2xl text-foreground/90 leading-snug max-w-2xl">
            How we decide what to build. How we write before we code. How we ship. How we measure.
            Written down so that our future selves — and yours — can keep us honest.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground/80">
            <span>Last edited April 2026</span>
            <span className="text-muted-foreground/30">·</span>
            <Link href="/manifesto" className="text-gold hover:underline">
              Read the manifesto →
            </Link>
          </div>
        </div>
      </section>

      {/* Sections */}
      {SECTIONS.map((s, i) => {
        const ICONS = [Compass, PenLine, Ship, LineChart]
        const Icon = ICONS[i]
        return (
          <section
            key={s.id}
            id={s.id}
            className={`py-20 md:py-28 px-5 md:px-8 border-b border-border scroll-mt-20 ${
              i % 2 === 1 ? 'bg-[#0a0a0e]' : ''
            }`}
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start gap-5 mb-8">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/25 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-gold" aria-hidden />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold/70">
                    Method {s.n}
                  </p>
                  <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-foreground leading-[1.08] tracking-tight">
                    {s.title}
                  </h2>
                </div>
              </div>

              <Reveal>
                <p className="font-display italic text-xl md:text-2xl text-foreground/90 leading-snug">
                  {s.lede}
                </p>
              </Reveal>

              <div className="mt-8 space-y-5">
                {s.body.map((p, idx) => (
                  <Reveal key={idx} delay={idx * 50}>
                    <p className="text-[15px] leading-[1.78] text-foreground/85 font-light">{p}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={120}>
                <div className="mt-10 grid sm:grid-cols-3 gap-3">
                  {s.principles.map((p) => (
                    <div
                      key={p.title}
                      className="rounded-2xl border border-border bg-[#131318] p-5"
                    >
                      <div className="font-display text-[17px] text-foreground tracking-tight leading-snug">
                        {p.title}
                      </div>
                      <div className="mt-2 text-[13px] text-muted-foreground leading-relaxed">
                        {p.note}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )
      })}

      {/* Weekly cadence */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                The weekly cadence
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Five days. One long walk. One release window. One published paragraph.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              We protect these five days. They are how a small team ships without being small-minded.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-px bg-border rounded-xl overflow-hidden">
            {CADENCE.map((d) => (
              <div key={d.day} className="bg-[#131318] p-5 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                    {d.day}
                  </span>
                  <Clock className="h-3.5 w-3.5 text-muted-foreground/60" aria-hidden />
                </div>
                <p className="text-[13px] text-foreground/90 leading-snug">{d.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily tools */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                What we use
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                A small stack, used deliberately.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              We prefer long-term relationships with tools to short-term enthusiasms. Every item on this list has
              outlived a cycle.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {TOOLS.map((t) => (
              <li
                key={t.name}
                className="rounded-2xl border border-border bg-[#131318] p-5 flex items-center gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-gold" aria-hidden />
                </div>
                <div>
                  <div className="font-display text-lg text-foreground tracking-tight">{t.name}</div>
                  <div className="text-[13px] text-muted-foreground">{t.for}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Things we deliberately don't do */}
      <section className="py-20 md:py-28 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-5 mb-8">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400/20 to-rose-400/5 border border-rose-400/20 flex items-center justify-center">
              <EyeOff className="h-5 w-5 text-rose-300" aria-hidden />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold/70">The anti-method</p>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-foreground leading-[1.08] tracking-tight">
                What we don&apos;t do, on purpose.
              </h2>
            </div>
          </div>
          <ul className="space-y-4 text-[15px] leading-[1.78] text-foreground/85 font-light">
            {[
              'We don\'t run growth experiments on pricing pages. Our prices are our prices.',
              'We don\'t A/B test copy against naïve visitors. Copy belongs to editors, not to statistics.',
              'We don\'t hold features hostage in beta for attention. If it works, it ships to everyone.',
              'We don\'t send reactivation emails to users who have left. People leave for reasons. We respect them.',
              "We don't publish raw counts of users. We publish revenue and churn, because those reflect whether the product is worth paying for.",
              'We don\'t hire for "rockstars." We hire for people who finish things they said they would.',
            ].map((line, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="font-mono text-[11px] text-gold/60 shrink-0 mt-2">×</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display italic text-2xl md:text-3xl text-foreground leading-snug">
            &ldquo;A method is a promise you make to your future team — and to the users who haven&apos;t met you
            yet. Ours is this.&rdquo;
          </p>
          <div className="mt-8 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-gold/70">
            <GitBranch className="h-3.5 w-3.5" aria-hidden />
            Version 1.2 · signed by the team
            <Users className="h-3.5 w-3.5" aria-hidden />
          </div>
        </div>
      </section>

      <CTA
        title="The method matters less than the user who reads it."
        subtitle="If any of this sounded familiar, try the calendar we built by it."
        primary={{ label: 'Start using Calendro', href: '/login' }}
        secondary={{ label: 'Read the manifesto', href: '/manifesto' }}
      />
    </>
  )
}
