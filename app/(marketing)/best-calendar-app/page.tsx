import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { CheckCircle2, XCircle, ArrowRight, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best calendar app in 2026 — An honest comparison',
  description:
    'We compared 7 calendar apps on speed, AI features, privacy, and price. Honest analysis of Google Calendar, Apple Calendar, Fantastical, Cron, Reclaim, Motion, and Momenties.',
  alternates: { canonical: '/best-calendar-app' },
  openGraph: {
    title: 'Best calendar app in 2026',
    description: 'An honest comparison of 7 calendar apps.',
    url: '/best-calendar-app',
    type: 'website',
  },
}

const APPS = [
  {
    name: 'Momenties',
    us: true,
    tagline: 'AI-first input, analytics, privacy-respecting',
    score: { input: 5, ai: 5, analytics: 5, privacy: 4, price: 4 },
    verdict: 'Best for people who add events frequently and want to understand their time. Strongest AI input.',
  },
  {
    name: 'Google Calendar',
    tagline: 'Free, ubiquitous, powerful sync',
    score: { input: 2, ai: 2, analytics: 1, privacy: 2, price: 5 },
    verdict: 'Best if you need zero friction to get started and don\'t need AI or analytics.',
  },
  {
    name: 'Apple Calendar',
    tagline: 'Clean, private, Apple ecosystem',
    score: { input: 2, ai: 1, analytics: 1, privacy: 5, price: 5 },
    verdict: 'Best if you\'re all-in on Apple and prioritize privacy over features.',
  },
  {
    name: 'Fantastical',
    tagline: 'Natural language, beautiful UI',
    score: { input: 4, ai: 3, analytics: 2, privacy: 4, price: 3 },
    verdict: 'Best for Mac/iOS power users who want polished design and decent NLP.',
  },
  {
    name: 'Cron',
    tagline: 'Keyboard-first, team-focused',
    score: { input: 3, ai: 2, analytics: 3, privacy: 3, price: 4 },
    verdict: 'Best for keyboard-native users at companies on Notion/Linear.',
  },
  {
    name: 'Reclaim',
    tagline: 'Habit scheduling, auto-protect',
    score: { input: 2, ai: 3, analytics: 3, privacy: 3, price: 3 },
    verdict: 'Best for people who want AI to auto-schedule recurring habits and tasks.',
  },
  {
    name: 'Motion',
    tagline: 'Auto-schedules your tasks',
    score: { input: 2, ai: 4, analytics: 2, privacy: 3, price: 2 },
    verdict: 'Best if task auto-scheduling is your primary need. Expensive for what it is.',
  },
]

const CRITERIA = [
  { key: 'input', label: 'Event input speed' },
  { key: 'ai', label: 'AI / automation' },
  { key: 'analytics', label: 'Calendar analytics' },
  { key: 'privacy', label: 'Privacy' },
  { key: 'price', label: 'Value for money' },
] as const

const PICKS = [
  { use: 'Best overall', pick: 'Momenties', reason: 'Fastest input, strongest AI, real analytics, fair price.' },
  { use: 'Best free option', pick: 'Google Calendar', reason: 'Unbeatable free tier, ubiquitous integrations.' },
  { use: 'Best for privacy', pick: 'Apple Calendar', reason: 'Runs locally, no data monetization, iCloud E2E.' },
  { use: 'Best for Mac/iOS design', pick: 'Fantastical', reason: 'Most polished native app experience on Apple platforms.' },
  { use: 'Best for auto-scheduling tasks', pick: 'Motion', reason: 'AI task placement is its core feature and it\'s best in class.' },
]

function ScoreDots({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map((i) => (
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${i <= score ? 'bg-gold' : 'bg-border'}`}
        />
      ))}
    </div>
  )
}

export default function BestCalendarAppPage() {
  return (
    <>
      <PageHero
        eyebrow="Best calendar app 2026"
        title={
          <>
            We compared 7 apps.
            <br />
            <em className="not-italic text-gold">Here's the honest verdict.</em>
          </>
        }
        lede="We're one of the apps in this comparison. We've tried to be fair. If you want a different answer, we'll link you to it — because the best calendar app for you might not be us."
        crumbs={[{ label: 'Best calendar app' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try Momenties free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/compare"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Detailed comparisons
          </Link>
        </div>
      </PageHero>

      {/* Quick picks */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">TL;DR</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Quick picks by use case.</h2>
          </Reveal>
          <div className="space-y-2">
            {PICKS.map((p, i) => (
              <Reveal key={p.use} delay={i * 35}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-44 shrink-0 pt-0.5 uppercase tracking-wide">{p.use}</span>
                  <div>
                    <span className="text-sm font-medium text-foreground">{p.pick}</span>
                    <span className="text-xs text-muted-foreground ml-2">{p.reason}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Full comparison</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">7 apps scored across 5 dimensions.</h2>
            <p className="text-sm text-muted-foreground mt-2">Scored 1–5 (5 = best in class). Ratings are our opinion, not sponsored.</p>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-[#0a0a0d]">
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider w-36">App</th>
                    {CRITERIA.map((c) => (
                      <th key={c.key} className="text-left px-3 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">{c.label}</th>
                    ))}
                    <th className="text-left px-4 py-3 text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {APPS.map((app, i) => (
                    <tr
                      key={app.name}
                      className={`border-b border-border/50 last:border-0 ${app.us ? 'bg-gold/5' : ''} hover:bg-white/[0.02] transition-colors`}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">{app.name}</span>
                          {app.us && <span className="text-[9px] font-mono text-gold bg-gold/10 rounded-full px-1.5 py-0.5">Us</span>}
                        </div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">{app.tagline}</div>
                      </td>
                      {CRITERIA.map((c) => (
                        <td key={c.key} className="px-3 py-3">
                          <ScoreDots score={app.score[c.key]} />
                        </td>
                      ))}
                      <td className="px-4 py-3 text-xs text-muted-foreground max-w-xs">{app.verdict}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Deep analysis */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Our take</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What actually matters in a calendar app.
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Most calendar comparisons focus on features. We think that misses the point. The thing that makes a calendar app good or bad is how much friction it creates when you're trying to add an event or understand your week.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                <strong className="font-medium text-foreground">Google Calendar</strong> is excellent at being free and available everywhere. It's bad at input speed (forms, dropdowns, timezone selectors) and terrible at analytics. If you're happy with it, you're probably not adding many events manually.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                <strong className="font-medium text-foreground">Fantastical</strong> has the best native app design on Apple platforms. Its natural language input is genuinely good — it was the first app to prove people would use it. The pricing is reasonable for a Mac app, but it's behind on AI features and has no analytics to speak of.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                <strong className="font-medium text-foreground">Motion</strong> does one thing very well: it auto-schedules your tasks into free calendar slots. If that's your primary need, it's the best tool for it. If you're using it as a general calendar app, you're paying a high price for a feature you're not fully using.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                <strong className="font-medium text-foreground">Momenties</strong> is built for people who add events frequently (via text, voice, or photo), want to understand where their time goes (analytics), and value data privacy. We're not the best free option and we're not the best auto-task-scheduler. We're the best at fast, intelligent event creation and calendar visibility.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Deep dives */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Head-to-head comparisons.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: 'Momenties vs Google Calendar', href: '/google-calendar-alternative' },
                { label: 'Momenties vs Fantastical', href: '/compare/fantastical' },
                { label: 'Momenties vs Cron', href: '/compare/cron' },
                { label: 'Momenties vs Motion', href: '/compare/motion' },
                { label: 'Momenties vs Reclaim', href: '/compare/reclaim' },
                { label: 'Full pricing comparison', href: '/compare/price' },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="flex items-center justify-between rounded-xl border border-border/50 px-4 py-3 hover:border-gold/30 transition-colors group"
                >
                  <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">{l.label}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-gold transition-colors" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="See why Momenties is our best calendar app pick."
        subtitle="14-day free trial. No credit card. Your Google Calendar stays exactly as it is."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'See features', href: '/features' }}
      />
    </>
  )
}
