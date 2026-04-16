import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowUpRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Integrations — Calendro works with your stack',
  description: 'Google Calendar, Apple, Outlook, Slack, Zoom, Notion, Linear — connect Calendro to what you already use. One click each.',
  alternates: { canonical: '/integrations' },
  openGraph: {
    title: 'Calendro Integrations',
    description: 'Connect Calendro to what you already use.',
    url: '/integrations',
  },
}

type Integration = {
  name: string
  category: string
  desc: string
  status: 'live' | 'beta' | 'soon'
  letter: string
  color: string
}

const INTEGRATIONS: Integration[] = [
  { name: 'Google Calendar', category: 'Calendar', desc: 'Two-way sync for every Google Calendar you own.', status: 'live', letter: 'G', color: '#4285F4' },
  { name: 'Apple Calendar', category: 'Calendar', desc: 'Full CalDAV sync with iCloud. App passwords supported.', status: 'live', letter: 'A', color: '#8E8E93' },
  { name: 'Outlook / Microsoft 365', category: 'Calendar', desc: 'Microsoft Graph API. OAuth in two clicks.', status: 'soon', letter: 'O', color: '#0078D4' },
  { name: 'Fastmail', category: 'Calendar', desc: 'CalDAV + CardDAV. For the discerning calendar-haver.', status: 'beta', letter: 'F', color: '#2E5CB9' },
  { name: 'Slack', category: 'Messaging', desc: 'Daily briefing in-channel. Mention @calendro to schedule.', status: 'live', letter: 'S', color: '#4A154B' },
  { name: 'Discord', category: 'Messaging', desc: 'Community events piped into your personal calendar.', status: 'beta', letter: 'D', color: '#5865F2' },
  { name: 'Microsoft Teams', category: 'Messaging', desc: 'Team-channel briefings and meeting linkouts.', status: 'soon', letter: 'M', color: '#464EB8' },
  { name: 'Zoom', category: 'Video', desc: 'Auto-generate meeting links for every scheduled event.', status: 'live', letter: 'Z', color: '#2D8CFF' },
  { name: 'Google Meet', category: 'Video', desc: 'One-click meet links baked into Google Calendar events.', status: 'live', letter: 'M', color: '#00897B' },
  { name: 'Whereby', category: 'Video', desc: 'Persistent room URLs, no downloads required.', status: 'live', letter: 'W', color: '#F7893B' },
  { name: 'Notion', category: 'Notes', desc: 'Embed your calendar in Notion. Pull meeting notes back.', status: 'live', letter: 'N', color: '#E8E8E8' },
  { name: 'Linear', category: 'Project', desc: 'Schedule cycles. Block time for issues. In-event context.', status: 'live', letter: 'L', color: '#5E6AD2' },
  { name: 'Asana', category: 'Project', desc: 'Due dates → calendar blocks. Automatic.', status: 'beta', letter: 'A', color: '#F06A6A' },
  { name: 'GitHub', category: 'Developer', desc: 'Release calendars, milestone views, issue deadlines.', status: 'live', letter: 'G', color: '#181717' },
  { name: 'Raycast', category: 'Developer', desc: 'Schedule events from your launcher. Command-K everywhere.', status: 'live', letter: 'R', color: '#FF6363' },
  { name: 'Alfred', category: 'Developer', desc: 'Custom Alfred workflow for quick event entry.', status: 'beta', letter: 'A', color: '#1D3A57' },
  { name: 'IFTTT', category: 'Automation', desc: '200+ triggers & actions. Schedule from anything.', status: 'live', letter: 'I', color: '#33CCFF' },
  { name: 'Zapier', category: 'Automation', desc: 'Two-way webhooks, 5,000+ apps.', status: 'live', letter: 'Z', color: '#FF4A00' },
  { name: 'n8n', category: 'Automation', desc: 'Self-hosted workflow automation with Calendro nodes.', status: 'beta', letter: 'n', color: '#EA4B71' },
  { name: 'Apple Shortcuts', category: 'Mobile', desc: 'Siri-triggered scheduling: "hey Siri, add event".', status: 'live', letter: 'S', color: '#FF3B30' },
  { name: 'Todoist', category: 'Tasks', desc: 'Convert tasks with dates into calendar blocks.', status: 'live', letter: 'T', color: '#E44332' },
  { name: 'Things 3', category: 'Tasks', desc: 'Today list → time-blocked day, automatically.', status: 'beta', letter: 'T', color: '#4D8CDD' },
  { name: 'Salesforce', category: 'CRM', desc: 'Meeting outcomes write back to Salesforce activities.', status: 'soon', letter: 'S', color: '#00A1E0' },
  { name: 'HubSpot', category: 'CRM', desc: 'Deal-tagged meetings. Automatic contact linking.', status: 'soon', letter: 'H', color: '#FF7A59' },
]

const CATEGORIES = Array.from(new Set(INTEGRATIONS.map((i) => i.category)))

function StatusBadge({ status }: { status: Integration['status'] }) {
  const meta = {
    live: { label: 'Live', cls: 'text-emerald-300 border-emerald-400/30 bg-emerald-500/10' },
    beta: { label: 'Beta', cls: 'text-gold border-gold/30 bg-gold/10' },
    soon: { label: 'Coming soon', cls: 'text-sky-300 border-sky-400/30 bg-sky-500/10' },
  }[status]
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[9px] font-mono uppercase tracking-[0.15em] ${meta.cls}`}
    >
      {meta.label}
    </span>
  )
}

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title={
          <>
            Works with what <em className="not-italic text-gold">you&apos;ve already got</em>.
          </>
        }
        lede="Calendro isn't an island. Connect Google, Apple, Outlook, Slack, and 20+ more in one click. No migrations. No lock-in. No drama."
        crumbs={[{ label: 'Integrations' }]}
      />

      {/* Category filters (anchors) */}
      <section className="px-5 md:px-8 py-6 border-b border-border sticky top-16 bg-[#0c0c0f]/80 backdrop-blur-xl z-20">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 shrink-0 mr-2">
            Jump to:
          </span>
          {CATEGORIES.map((c) => (
            <a
              key={c}
              href={`#${c.toLowerCase()}`}
              className="shrink-0 px-3 h-8 inline-flex items-center rounded-full text-xs border border-border hover:border-gold/30 hover:text-gold transition-colors text-muted-foreground"
            >
              {c}
            </a>
          ))}
        </div>
      </section>

      {/* Integrations by category */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto space-y-14">
          {CATEGORIES.map((cat, ci) => (
            <div key={cat} id={cat.toLowerCase()}>
              <Reveal>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6">
                  {cat}
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {INTEGRATIONS.filter((i) => i.category === cat).map((i, idx) => (
                  <Reveal key={i.name} delay={(idx % 3) * 70}>
                    <div className="group rounded-xl border border-border lux-card p-5 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center font-display text-xl font-bold text-[#0c0c0f]"
                          style={{ background: i.color }}
                        >
                          {i.letter}
                        </div>
                        <StatusBadge status={i.status} />
                      </div>
                      <h3 className="text-sm font-medium text-foreground mb-1.5">{i.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed flex-1">{i.desc}</p>
                      <button
                        type="button"
                        disabled={i.status === 'soon'}
                        className={`mt-5 inline-flex items-center justify-between w-full h-9 px-3 rounded-lg text-xs font-medium transition-colors ${
                          i.status === 'soon'
                            ? 'border border-border text-muted-foreground/50 cursor-not-allowed'
                            : 'border border-border hover:border-gold/30 text-foreground group-hover:text-gold'
                        }`}
                      >
                        {i.status === 'soon' ? 'Notify me' : 'Connect'}
                        {i.status !== 'soon' && (
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        )}
                      </button>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API teaser */}
      <section className="py-20 px-5 md:px-8 border-b border-border relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{ background: 'radial-gradient(40% 50% at 80% 50%, rgba(197,163,92,0.08) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              Don&apos;t see what you need?
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Build your own with our API.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
              A clean REST API, WebSocket events, and official SDKs for Node, Python, and Go. Webhooks for everything. OAuth 2.0 everywhere.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/api-docs"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
              >
                Read API docs <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
              >
                Request an integration
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-[#0a0a0d] p-5 font-mono text-[12px] leading-relaxed">
            <div className="text-muted-foreground mb-2"># Create an event from anywhere</div>
            <div className="text-foreground/90">
              <span className="text-rose-300">curl</span> -X POST <span className="text-gold">https://api.calendro.app/v1/events</span>{'\n'}
              &nbsp;&nbsp;-H <span className="text-emerald-300">&quot;Authorization: Bearer $TOKEN&quot;</span>{'\n'}
              &nbsp;&nbsp;-d <span className="text-emerald-300">&apos;{'{'}&quot;input&quot;: &quot;dentist thursday 3pm&quot;{'}'}&apos;</span>
            </div>
            <div className="mt-4 pt-4 border-t border-border text-muted-foreground">
              <Check className="inline h-3 w-3 text-emerald-400 mr-1" />
              Event scheduled · returns 201 + full parsed object
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Plug Calendro into your stack."
        subtitle="Free to start. Connect as many services as you like."
        primary={{ label: 'Get started free', href: '/login' }}
        secondary={{ label: 'Browse all integrations', href: '#calendar' }}
      />
    </>
  )
}
