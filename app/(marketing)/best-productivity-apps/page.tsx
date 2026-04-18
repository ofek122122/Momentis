import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Productivity Apps 2025 — The honest list from people who actually use them',
  description:
    'The best productivity apps share one quality: they reduce friction so much that you actually use them. This list covers the apps that consistently change how people work — with honest takes on who each one is for.',
  alternates: { canonical: '/best-productivity-apps' },
  openGraph: {
    title: 'Best Productivity Apps 2025 — Momenties',
    description: 'Honest takes on the apps that actually change how people work.',
    url: '/best-productivity-apps',
    type: 'website',
  },
}

type Category = 'calendar' | 'tasks' | 'notes' | 'focus' | 'writing'

const TAG_COLORS: Record<Category, string> = {
  calendar: 'text-blue-400/80 bg-blue-400/10 border-blue-400/20',
  tasks: 'text-emerald-400/80 bg-emerald-400/10 border-emerald-400/20',
  notes: 'text-purple-400/80 bg-purple-400/10 border-purple-400/20',
  focus: 'text-amber-400/80 bg-amber-400/10 border-amber-400/20',
  writing: 'text-rose-400/80 bg-rose-400/10 border-rose-400/20',
}

const APPS: { name: string; category: Category; verdict: string; best_for: string; honest_take: string }[] = [
  {
    name: 'Momenties',
    category: 'calendar',
    verdict: 'Best for zero-friction scheduling',
    best_for: 'Anyone who wants to schedule by talking, typing naturally, or snapping a photo',
    honest_take: 'The input methods are the differentiator. Natural language, voice, and photo import mean events actually get added immediately. Weekly analytics shows where time actually goes — not just where meetings are.',
  },
  {
    name: 'Todoist',
    category: 'tasks',
    verdict: 'Best task manager for most people',
    best_for: 'Professionals who need a reliable, cross-platform task list with natural language input',
    honest_take: 'Captures tasks instantly. Priorities and deadlines are fast to set. Not a calendar replacement — tasks without time context don\'t block time. Best used alongside a calendar, not instead of one.',
  },
  {
    name: 'Notion',
    category: 'notes',
    verdict: 'Best for knowledge management and docs',
    best_for: 'Teams and individuals who want a connected workspace for notes, wikis, and databases',
    honest_take: 'Powerful but slow to input. Great for reference material, bad for capture. The flexibility is the appeal and the problem — most people build more than they maintain. Works best when scope is contained.',
  },
  {
    name: 'Obsidian',
    category: 'notes',
    verdict: 'Best for networked personal knowledge',
    best_for: 'Researchers, writers, and deep thinkers who want bidirectional linking between ideas',
    honest_take: 'The graph view is genuinely useful for finding connections. Local-first is a real privacy advantage. Steep setup investment. Rewards heavy users; punishes casual ones. Not for everyone.',
  },
  {
    name: 'Linear',
    category: 'tasks',
    verdict: 'Best project management for software teams',
    best_for: 'Engineering teams that need fast issue tracking with keyboard-first UX',
    honest_take: 'Fastest issue creation in the category. Cycle/sprint management that doesn\'t require a training course. Does one thing — software project tracking — extremely well. Not a general-purpose tool.',
  },
  {
    name: 'Bear',
    category: 'writing',
    verdict: 'Best writing app for Mac/iOS',
    best_for: 'Apple users who want beautiful markdown writing with tags and fast search',
    honest_take: 'The writing experience is the best in the category on Apple platforms. Tags instead of folders work surprisingly well. Not available on Windows/Android. If you live in Apple ecosystem, worth every cent.',
  },
  {
    name: 'Cold Turkey / Freedom',
    category: 'focus',
    verdict: 'Best focus enforcement tools',
    best_for: 'Anyone who needs hard blocks on distracting sites during deep work',
    honest_take: 'Willpower is not enough. Hard blocks work. Freedom is cross-platform and syncs. Cold Turkey is more aggressive. Pair with calendar focus blocks for the full system — block the time, block the distractions.',
  },
  {
    name: 'Readwise Reader',
    category: 'notes',
    verdict: 'Best read-later app with active review',
    best_for: 'People who save more than they read and want spaced repetition on highlights',
    honest_take: 'Solves the "saved but never read" problem better than anything else. Daily review of highlights is the real value. Highlight quality matters — selective saving beats hoarding.',
  },
]

const PRINCIPLES = [
  'The best productivity app is the one you actually use, not the one with the most features',
  'One capture system beats three half-used ones every time',
  'Calendar is the single source of truth — everything else feeds into it or doesn\'t get done',
  'Speed of capture is the most important feature — if adding something takes effort, it gets skipped',
  'Weekly review is the meta-habit that makes every other system work',
]

export default function BestProductivityAppsPage() {
  return (
    <>
      <PageHero
        eyebrow="Best Productivity Apps"
        title={
          <>
            Apps that actually
            <br />
            <em className="not-italic text-gold">change how you work.</em>
          </>
        }
        lede="The best productivity apps share one property: they reduce friction so dramatically that you actually use them. This list is not exhaustive — it's the apps that consistently appear in the setups of people who have their time under control."
        crumbs={[{ label: 'Best Productivity Apps' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try Momenties free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/productivity-tips"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Productivity tips
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · These apps are independent recommendations</p>
      </PageHero>

      {/* App list */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <div className="flex flex-wrap gap-2">
              {(Object.keys(TAG_COLORS) as Category[]).map((cat) => (
                <span key={cat} className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${TAG_COLORS[cat]}`}>
                  {cat}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="space-y-4">
            {APPS.map((app, i) => (
              <Reveal key={app.name} delay={(i % 3) * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded-full border ${TAG_COLORS[app.category]}`}>{app.category}</span>
                        <span className="text-xs text-gold/60">{app.verdict}</span>
                      </div>
                      <h3 className="text-sm font-medium text-foreground">{app.name}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    <span className="text-foreground/60 font-medium">Best for: </span>
                    {app.best_for}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/30 pt-2 mt-2">{app.honest_take}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What the research shows</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Principles behind every effective setup.</h2>
          </Reveal>
          <div className="space-y-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="flex items-start gap-3 rounded-xl border border-border/50 p-4">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/90">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Go deeper on the calendar piece.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Time blocking', href: '/time-blocking', desc: 'The method that makes every other productivity system work' },
              { label: 'Deep work system', href: '/deep-work', desc: 'Protecting focus blocks with calendar enforcement' },
              { label: 'Weekly planner', href: '/weekly-planner', desc: 'The 7-minute weekly planning ritual' },
              { label: 'Productivity system', href: '/productivity-system', desc: 'How to build a calendar-first productivity system' },
              { label: 'Time audit', href: '/time-audit', desc: 'See where your week actually goes' },
              { label: 'Calendar analytics', href: '/features/analytics', desc: 'Analytics that change behavior, not just report it' },
            ].map((link) => (
              <Reveal key={link.href} delay={60}>
                <Link href={link.href} className="block rounded-xl border border-border/50 p-4 hover:border-gold/30 transition-colors">
                  <p className="text-sm font-medium text-foreground mb-0.5">{link.label}</p>
                  <p className="text-xs text-muted-foreground">{link.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Start with the calendar."
        subtitle="Every productivity system works better when time is the foundation. Momenties is free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Productivity tips', href: '/productivity-tips' }}
      />
    </>
  )
}
