import type { Metadata } from 'next'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Sparkles, Wrench, Bug, Shield, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Changelog — What we shipped',
  description: 'Every update to Calendro. Notes written by the engineers who shipped them.',
  alternates: { canonical: '/changelog' },
  openGraph: {
    title: 'Calendro Changelog',
    description: 'Every update, in chronological order.',
    url: '/changelog',
  },
}

type ChangeType = 'new' | 'improved' | 'fixed' | 'security' | 'performance'
type Change = { type: ChangeType; text: string }
type Entry = { version: string; date: string; title: string; changes: Change[] }
type MonthGroup = { month: string; entries: Entry[] }

const TYPE_META: Record<ChangeType, { label: string; Icon: typeof Sparkles; color: string }> = {
  new: { label: 'New', Icon: Sparkles, color: 'text-gold border-gold/30 bg-gold/10' },
  improved: { label: 'Improved', Icon: Wrench, color: 'text-sky-300 border-sky-400/30 bg-sky-500/10' },
  fixed: { label: 'Fixed', Icon: Bug, color: 'text-emerald-300 border-emerald-400/30 bg-emerald-500/10' },
  security: { label: 'Security', Icon: Shield, color: 'text-rose-300 border-rose-400/30 bg-rose-500/10' },
  performance: { label: 'Performance', Icon: Zap, color: 'text-violet-300 border-violet-400/30 bg-violet-500/10' },
}

const MONTHS: MonthGroup[] = [
  {
    month: 'April 2026',
    entries: [
      {
        version: '1.4.0',
        date: '2026-04-12',
        title: 'Smart time suggestions',
        changes: [
          { type: 'new', text: 'AI now proposes optimal time slots when you omit the time — based on your meetings, focus hours, and timezone.' },
          { type: 'new', text: 'Keyboard shortcuts help overlay — press ? from anywhere in the app.' },
          { type: 'improved', text: 'Parse accuracy improved to 98% across English, Spanish, French, and German.' },
          { type: 'fixed', text: 'Events created near midnight no longer roll into the next day in edge timezones.' },
        ],
      },
      {
        version: '1.3.2',
        date: '2026-04-03',
        title: 'A quieter Monday',
        changes: [
          { type: 'improved', text: 'Monday morning briefings now summarize the week, not just the day.' },
          { type: 'fixed', text: 'Apple Calendar events with TZID no longer default to UTC.' },
          { type: 'performance', text: 'Calendar grid now renders 40% faster on mobile Safari.' },
        ],
      },
    ],
  },
  {
    month: 'March 2026',
    entries: [
      {
        version: '1.3.0',
        date: '2026-03-20',
        title: 'Accessibility overhaul',
        changes: [
          { type: 'new', text: 'Full WCAG 2.2 AA compliance across all primary surfaces.' },
          { type: 'new', text: 'Skip-to-content link and improved keyboard navigation in the sidebar.' },
          { type: 'improved', text: 'Aria-labels added to every icon button.' },
          { type: 'security', text: 'Audit-logged session handling for enterprise tier.' },
        ],
      },
      {
        version: '1.2.5',
        date: '2026-03-06',
        title: 'Voice gets better',
        changes: [
          { type: 'improved', text: 'Deepgram Nova-3 upgraded; voice transcription latency down to ~0.9s.' },
          { type: 'improved', text: 'Voice now handles multi-event dictation in one recording.' },
          { type: 'fixed', text: 'Voice recording no longer silently fails on Firefox for Android.' },
        ],
      },
    ],
  },
  {
    month: 'February 2026',
    entries: [
      {
        version: '1.2.0',
        date: '2026-02-21',
        title: 'Daily briefings & weekly insights',
        changes: [
          { type: 'new', text: 'AI daily briefing lands in your inbox (or app) every morning at 7.' },
          { type: 'new', text: 'Weekly insights panel in Analytics — meeting load, focus ratio, rhythm charts.' },
          { type: 'improved', text: 'Dragging events is now buttery on touch devices.' },
        ],
      },
      {
        version: '1.1.0',
        date: '2026-02-08',
        title: 'Apple Calendar arrives',
        changes: [
          { type: 'new', text: 'Full CalDAV sync with iCloud Calendar. Works with app passwords.' },
          { type: 'new', text: 'Unified calendar view — Google and Apple events side by side.' },
          { type: 'fixed', text: 'Token refresh race condition on concurrent API calls.' },
        ],
      },
    ],
  },
  {
    month: 'January 2026',
    entries: [
      {
        version: '1.0.0',
        date: '2026-01-15',
        title: 'Calendro is open to the world',
        changes: [
          { type: 'new', text: 'Public beta launches.' },
          { type: 'new', text: 'Three input methods: type, voice, photo.' },
          { type: 'new', text: 'Google Calendar two-way sync.' },
          { type: 'new', text: 'Five hand-tuned themes: Obsidian, Paper, Harvest, Botanical, Aurora.' },
        ],
      },
    ],
  },
]

export default function ChangelogPage() {
  return (
    <>
      <PageHero
        eyebrow="Changelog"
        title={
          <>
            What we <em className="not-italic text-gold">shipped</em>.
          </>
        }
        lede="A chronological record of every change to Calendro. No marketing gloss. Just the engineering notes."
        crumbs={[{ label: 'Changelog' }]}
      />

      <section className="py-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto space-y-20">
          {MONTHS.map((group) => (
            <div key={group.month}>
              <Reveal>
                <div className="sticky top-16 z-10 -mx-5 md:-mx-8 px-5 md:px-8 py-3 mb-8 bg-[#0c0c0f]/95 backdrop-blur-lg border-b border-border">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
                    {group.month}
                  </p>
                </div>
              </Reveal>
              <div className="space-y-14">
                {group.entries.map((entry, ei) => (
                  <Reveal key={entry.version} delay={ei * 80}>
                    <article className="grid md:grid-cols-[160px_1fr] gap-6">
                      <div>
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold font-mono text-[11px]">
                          v{entry.version}
                        </div>
                        <div className="mt-2 font-mono text-[11px] text-muted-foreground">
                          {new Date(entry.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-border lux-card p-6">
                        <h2 className="font-display text-2xl font-bold text-foreground tracking-tight mb-5">
                          {entry.title}
                        </h2>
                        <ul className="space-y-3">
                          {entry.changes.map((change, ci) => {
                            const meta = TYPE_META[change.type]
                            return (
                              <li key={ci} className="flex items-start gap-3">
                                <span
                                  className={`shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-mono uppercase tracking-wider ${meta.color}`}
                                >
                                  <meta.Icon className="h-3 w-3" />
                                  {meta.label}
                                </span>
                                <span className="text-sm text-foreground/90 leading-relaxed">
                                  {change.text}
                                </span>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="Want to see what's next?"
        subtitle="Our public roadmap shows everything we're working on, from early ideas to shipped-this-week."
        primary={{ label: 'See the roadmap', href: '/roadmap' }}
        secondary={{ label: 'Subscribe to updates', href: '/blog' }}
      />
    </>
  )
}
