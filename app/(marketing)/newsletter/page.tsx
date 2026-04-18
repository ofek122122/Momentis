import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { NewsletterForm } from '@/components/marketing/NewsletterForm'
import { ArrowUpRight, BookOpen, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Quiet Hours — Newsletter',
  description:
    'A fortnightly letter on time, AI, and calm software. Read in under ten minutes. Never spam. 12,000+ readers.',
  alternates: { canonical: '/newsletter' },
  openGraph: {
    title: 'The Quiet Hours — Momenties Newsletter',
    description:
      'A fortnightly letter on time, AI, and calm software. 12,000+ readers. One essay, every two weeks.',
    url: '/newsletter',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Quiet Hours · Newsletter',
    description: 'A fortnightly letter on time, AI, and calm software.',
  },
}

type Issue = {
  number: number
  date: string
  title: string
  excerpt: string
  readingMinutes: number
  tag: string
}

const ISSUES: Issue[] = [
  {
    number: 24,
    date: '2026-04-08',
    title: 'The anti-dashboard',
    excerpt:
      'Why every "productivity dashboard" is a lie — and what a calendar that tells the truth would look like.',
    readingMinutes: 7,
    tag: 'Design',
  },
  {
    number: 23,
    date: '2026-03-25',
    title: 'On scheduling nothing',
    excerpt:
      'The hardest thing to put in your calendar isn\'t a meeting. It\'s an afternoon with no agenda, no deliverable, and no apology.',
    readingMinutes: 5,
    tag: 'Time',
  },
  {
    number: 22,
    date: '2026-03-11',
    title: 'How we use Gemini',
    excerpt:
      'A detailed look at our hybrid parsing pipeline — chrono-node first, Gemini second — and why the order matters.',
    readingMinutes: 9,
    tag: 'Engineering',
  },
  {
    number: 21,
    date: '2026-02-26',
    title: 'The cost of a context switch',
    excerpt:
      'We measured it. The average cost of interrupting deep work is not 15 minutes, it\'s 47. Here\'s the study we used.',
    readingMinutes: 6,
    tag: 'Productivity',
  },
  {
    number: 20,
    date: '2026-02-11',
    title: 'Design in the dark',
    excerpt:
      'Iris on designing exclusively in dark mode and why it forces honesty — both in contrast and in hierarchy.',
    readingMinutes: 6,
    tag: 'Design',
  },
  {
    number: 19,
    date: '2026-01-28',
    title: 'Five tools we quit in 2025',
    excerpt:
      'A Notion database. A Slack workspace. A habit tracker app. Three calendar apps. All gone. Here\'s why, and what replaced each.',
    readingMinutes: 8,
    tag: 'Productivity',
  },
  {
    number: 18,
    date: '2026-01-14',
    title: 'The briefing problem',
    excerpt:
      'Morning summaries are ubiquitous now. Most of them are useless. Here\'s what a good one looks like — and how we built ours.',
    readingMinutes: 7,
    tag: 'AI',
  },
  {
    number: 17,
    date: '2025-12-31',
    title: 'A year in hours',
    excerpt:
      'What we learned from parsing 1.8 million events. The patterns in how people spend their time are both obvious and startling.',
    readingMinutes: 10,
    tag: 'Company',
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

function formatIssueDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function NewsletterPage() {
  const [latest, ...archive] = ISSUES

  return (
    <>
      <PageHero
        eyebrow="The Quiet Hours"
        title={
          <>
            A fortnightly letter on
            <br />
            <em className="not-italic text-gold">time and calm software.</em>
          </>
        }
        lede="One essay, every two weeks. Written by the Momenties team. Read in under ten minutes. Never a listicle. Never spam. Join 12,000+ readers who give us a quiet slot of their attention."
        crumbs={[{ label: 'Newsletter' }]}
      >
        <div className="max-w-md">
          <NewsletterForm source="newsletter-page" />
        </div>
      </PageHero>

      {/* Stats strip */}
      <section className="border-b border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-10 grid grid-cols-3 gap-6 text-center">
          {[
            { icon: Users, value: '12,000+', label: 'Subscribers' },
            { icon: BookOpen, value: '24', label: 'Issues published' },
            { icon: Clock, value: '~7 min', label: 'Avg. read time' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <s.icon className="h-5 w-5 text-gold mx-auto mb-2" />
              <div className="font-display text-2xl md:text-3xl font-bold shimmer-text">{s.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1.5">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Latest issue featured */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70">Latest issue</p>
          </Reveal>

          <Reveal>
            <div className="group rounded-2xl border border-gold/20 bg-gradient-to-b from-gold/5 to-transparent p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono border ${TAG_COLORS[latest.tag] ?? 'text-muted-foreground'}`}>
                  {latest.tag}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  No. {latest.number} · {formatIssueDate(latest.date)}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">{latest.readingMinutes} min read</span>
              </div>
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-snug mb-4">
                {latest.title}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-7">
                {latest.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/blog`}
                  className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press"
                >
                  Read the issue <ArrowUpRight className="h-4 w-4" />
                </Link>
                <span className="text-xs text-muted-foreground">
                  Or subscribe below to get the next one.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Archive */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-2">Archive</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Past issues
            </h2>
          </Reveal>

          <div className="divide-y divide-border">
            {archive.map((issue, i) => (
              <Reveal key={issue.number} delay={(i % 4) * 50}>
                <Link
                  href="/blog"
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 py-5 hover:bg-white/[0.015] -mx-3 px-3 rounded-lg transition-colors"
                >
                  <span className="font-mono text-[11px] text-muted-foreground/50 w-10 flex-shrink-0">
                    #{issue.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                        {issue.title}
                      </h3>
                      <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono border ${TAG_COLORS[issue.tag] ?? 'text-muted-foreground'}`}>
                        {issue.tag}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">{issue.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-[11px] font-mono text-muted-foreground hidden sm:block">
                      {issue.readingMinutes} min
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground hidden sm:block">
                      {formatIssueDate(issue.date)}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-gold/60 transition-colors" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 px-5 md:px-8 border-b border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-5">Our promise</p>
            <blockquote className="font-display text-2xl md:text-3xl italic text-foreground leading-snug">
              &ldquo;The Quiet Hours will never carry an ad, a sponsor, or a product placement that we
              wouldn&apos;t stake our reputation on. Every issue is a love letter to anyone who cares
              about their time.&rdquo;
            </blockquote>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              — Iris Kwon, co-founder
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Join 12,000+ quiet readers."
        subtitle="One essay, every two weeks. The first one lands on Friday."
        primary={{ label: 'Subscribe free', href: '#' }}
        secondary={{ label: 'Browse the archive', href: '/blog' }}
      />
    </>
  )
}
