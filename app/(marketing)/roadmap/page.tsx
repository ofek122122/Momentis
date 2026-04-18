import type { Metadata } from 'next'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Lightbulb, Hammer, CheckCircle2, ThumbsUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roadmap — What we\'re building next',
  description: 'Momenties\'s public roadmap: planned, in-progress, and shipped features. Vote with your attention.',
  alternates: { canonical: '/roadmap' },
  openGraph: {
    title: 'Momenties Roadmap',
    description: 'What we\'re planning, building, and shipping.',
    url: '/roadmap',
  },
}

type Status = 'planned' | 'in_progress' | 'shipped'
type Item = {
  status: Status
  title: string
  desc: string
  tag?: string
  eta?: string
  votes?: number
}

const ITEMS: Item[] = [
  // Planned
  { status: 'planned', title: 'Outlook & Microsoft 365 sync', desc: 'Two-way sync with Outlook calendars via Microsoft Graph. Most-requested feature in Q2 feedback.', tag: 'Integration', eta: 'Q3 2026', votes: 412 },
  { status: 'planned', title: 'Recurring events with smart exceptions', desc: 'Full RRULE support plus AI that spots when a recurring series should split (holidays, sabbaticals).', tag: 'Core', eta: 'Q3 2026', votes: 298 },
  { status: 'planned', title: 'Offline-first mobile app', desc: 'Native iOS and Android apps with full offline editing and CRDT-based sync.', tag: 'Mobile', eta: 'Q4 2026', votes: 856 },
  { status: 'planned', title: 'Team scheduling links', desc: 'Share an availability link that respects the preferences of everyone on the team.', tag: 'Teams', eta: 'Q3 2026', votes: 240 },
  { status: 'planned', title: 'Travel-aware scheduling', desc: 'Automatically block transit time between events based on real routes and your preferred transport.', tag: 'AI', eta: 'Q4 2026', votes: 189 },
  { status: 'planned', title: 'Public API v1', desc: 'A stable, documented REST + webhook API for building on top of Momenties.', tag: 'Developer', eta: 'Q3 2026', votes: 167 },

  // In progress
  { status: 'in_progress', title: 'Clean White Pro theme', desc: 'Our first light theme, designed with the same quiet restraint as the dark set. Early access for Pro users.', tag: 'Design', eta: 'This month', votes: 320 },
  { status: 'in_progress', title: 'Meeting cost indicator', desc: 'Show the aggregated hourly cost of a meeting based on attendees. Opt-in, always.', tag: 'Insights', eta: 'Next month', votes: 178 },
  { status: 'in_progress', title: 'Calendar sharing with fine-grained permissions', desc: 'Share your calendar at three levels: busy/free, titles only, or full detail.', tag: 'Privacy', eta: 'This quarter', votes: 412 },
  { status: 'in_progress', title: 'Briefing customization', desc: 'Let users choose what appears in their daily AI briefing — topics, length, tone.', tag: 'AI', eta: 'This quarter', votes: 201 },
  { status: 'in_progress', title: 'Single sign-on (SSO)', desc: 'SAML and OIDC SSO for Enterprise customers. SOC 2 Type II audit in parallel.', tag: 'Enterprise', eta: 'This quarter', votes: 89 },

  // Shipped
  { status: 'shipped', title: 'Smart time suggestions', desc: 'AI proposes optimal slots when you omit the time. Live in v1.4.0.', tag: 'AI', votes: 523 },
  { status: 'shipped', title: 'Keyboard shortcuts overlay', desc: 'Press ? anywhere to see every shortcut. Live in v1.4.0.', tag: 'UX', votes: 195 },
  { status: 'shipped', title: 'Apple Calendar sync', desc: 'Full CalDAV with iCloud. Live in v1.1.0.', tag: 'Integration', votes: 604 },
  { status: 'shipped', title: 'Daily AI briefing', desc: 'A warm morning summary in your inbox. Live in v1.2.0.', tag: 'AI', votes: 450 },
  { status: 'shipped', title: 'WCAG 2.2 AA compliance', desc: 'Full accessibility audit passed. Live in v1.3.0.', tag: 'A11Y', votes: 140 },
  { status: 'shipped', title: 'Photo → events', desc: 'Gemini Vision parses schedules from photos. Launched at GA.', tag: 'AI', votes: 820 },
]

const COLUMNS: { status: Status; label: string; desc: string; Icon: typeof Lightbulb }[] = [
  {
    status: 'planned',
    label: 'Planned',
    desc: 'Things we\'re committed to. Order is a rough priority, not a timeline.',
    Icon: Lightbulb,
  },
  {
    status: 'in_progress',
    label: 'In progress',
    desc: 'Currently being built. Expect these within the noted window.',
    Icon: Hammer,
  },
  {
    status: 'shipped',
    label: 'Shipped',
    desc: 'Live today. See the changelog for release notes.',
    Icon: CheckCircle2,
  },
]

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="Public roadmap"
        title={
          <>
            What we&apos;re <em className="not-italic text-gold">building</em> next.
          </>
        }
        lede="No roadmap is a promise. But this is honestly where our attention is. Vote with your email, or help shape what ships."
        crumbs={[{ label: 'Roadmap' }]}
      />

      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {COLUMNS.map((col) => (
            <div key={col.status} className="space-y-4">
              <Reveal>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center shrink-0">
                    <col.Icon className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground">{col.label}</h2>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{col.desc}</p>
                  </div>
                </div>
              </Reveal>

              <div className="space-y-3">
                {ITEMS.filter((i) => i.status === col.status).map((item, i) => (
                  <Reveal key={item.title} delay={i * 50}>
                    <div className="rounded-xl border border-border lux-card p-5 group">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        {item.tag && (
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold/70 px-2 py-0.5 rounded-full border border-gold/20 bg-gold/5">
                            {item.tag}
                          </span>
                        )}
                        {item.eta && (
                          <span className="text-[10px] font-mono text-muted-foreground">{item.eta}</span>
                        )}
                      </div>
                      <h3 className="text-sm font-medium text-foreground leading-snug mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      {item.votes !== undefined && (
                        <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border hover:border-gold/30 transition-colors text-xs text-muted-foreground hover:text-gold"
                          >
                            <ThumbsUp className="h-3 w-3" />
                            {item.votes}
                          </button>
                          {item.status === 'shipped' && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                              <CheckCircle2 className="h-3 w-3" /> Live
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
            How we prioritize
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            The five questions we ask.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-3 text-left">
            {[
              'Does it make the product quieter?',
              'Does a user depend on this today, and we\'re blocking them?',
              'Does it earn the attention it will cost to ship?',
              'Can we explain it in one sentence to a busy person?',
              'Will we still want this feature in three years?',
              'Does building it bring us joy?',
            ].map((q, i) => (
              <Reveal key={q} delay={i * 70}>
                <div className="rounded-xl border border-border lux-card px-5 py-4">
                  <p className="font-mono text-[10px] text-gold/60 mb-1">{String(i + 1).padStart(2, '0')}</p>
                  <p className="text-sm text-foreground/90">{q}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Have an idea?"
        subtitle="Write us. Every suggestion is read by a human. Many become features."
        primary={{ label: 'Suggest a feature', href: '/contact' }}
        secondary={{ label: 'Read the changelog', href: '/changelog' }}
      />
    </>
  )
}
