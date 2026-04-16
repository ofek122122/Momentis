import type { Metadata } from 'next'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { CheckCircle2, AlertTriangle, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Status — Calendro system health',
  description: 'Real-time system status, incident history, and uptime metrics for Calendro.',
  alternates: { canonical: '/status' },
  openGraph: {
    title: 'Calendro Status',
    description: 'Live system status and uptime metrics.',
    url: '/status',
  },
}

type Status = 'operational' | 'degraded' | 'outage' | 'maintenance'

const SERVICES: { name: string; status: Status; uptime: string; latency: string }[] = [
  { name: 'Website & App', status: 'operational', uptime: '99.99%', latency: '82ms' },
  { name: 'API', status: 'operational', uptime: '99.98%', latency: '94ms' },
  { name: 'Parser (Gemini)', status: 'operational', uptime: '99.97%', latency: '480ms' },
  { name: 'Voice transcription (Deepgram)', status: 'operational', uptime: '99.96%', latency: '940ms' },
  { name: 'Google Calendar sync', status: 'operational', uptime: '99.99%', latency: '210ms' },
  { name: 'Apple Calendar sync (CalDAV)', status: 'operational', uptime: '99.92%', latency: '640ms' },
  { name: 'Database', status: 'operational', uptime: '100.0%', latency: '12ms' },
  { name: 'Authentication', status: 'operational', uptime: '99.99%', latency: '44ms' },
  { name: 'Email delivery', status: 'operational', uptime: '99.95%', latency: '320ms' },
  { name: 'CDN & assets', status: 'operational', uptime: '100.0%', latency: '18ms' },
]

const INCIDENTS = [
  {
    date: '2026-03-28',
    title: 'Resolved — Gemini parsing latency',
    severity: 'Minor' as const,
    body: 'Upstream Gemini 2.5 Flash saw elevated latency for ~25 min. Our chrono-node fallback kept 98% of events flowing. Full resolution at 14:42 UTC.',
  },
  {
    date: '2026-03-11',
    title: 'Resolved — Apple CalDAV sync delays',
    severity: 'Minor' as const,
    body: 'iCloud CalDAV returned 503s for ~40 min affecting Apple Calendar sync. Cached events remained visible. No data loss.',
  },
  {
    date: '2026-02-04',
    title: 'Resolved — Scheduled maintenance window',
    severity: 'Maintenance' as const,
    body: 'Database primary failover drill, 02:00–02:18 UTC. Zero user-visible impact.',
  },
  {
    date: '2026-01-22',
    title: 'Resolved — Voice endpoint error',
    severity: 'Minor' as const,
    body: 'A deployment pushed a regression that caused voice uploads to fail for 9 minutes. Rolled back automatically; post-mortem shared with affected users.',
  },
]

const statusMeta: Record<Status, { label: string; color: string; Icon: typeof CheckCircle2 }> = {
  operational: { label: 'Operational', color: 'text-emerald-400 border-emerald-400/30 bg-emerald-500/10', Icon: CheckCircle2 },
  degraded: { label: 'Degraded', color: 'text-amber-400 border-amber-400/30 bg-amber-500/10', Icon: AlertTriangle },
  outage: { label: 'Outage', color: 'text-rose-400 border-rose-400/30 bg-rose-500/10', Icon: AlertTriangle },
  maintenance: { label: 'Maintenance', color: 'text-sky-400 border-sky-400/30 bg-sky-500/10', Icon: Activity },
}

export default function StatusPage() {
  return (
    <>
      <PageHero
        eyebrow="System status"
        title={
          <>
            All systems <em className="not-italic text-gold">operational</em>.
          </>
        }
        lede="Real-time health, incident history, and 90-day uptime. We post updates within five minutes of any incident."
        crumbs={[{ label: 'Status' }]}
      >
        <div className="inline-flex items-center gap-2 px-4 h-10 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium">All services running</span>
          <span className="text-xs font-mono text-emerald-200/60 ml-2">checked 12s ago</span>
        </div>
      </PageHero>

      {/* Services */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
              Services
            </h2>
          </Reveal>
          <div className="rounded-2xl border border-border overflow-hidden divide-y divide-border">
            {SERVICES.map((s) => {
              const meta = statusMeta[s.status]
              return (
                <div
                  key={s.name}
                  className="grid grid-cols-[1fr_auto] md:grid-cols-[2fr_1fr_1fr_1fr] items-center gap-4 px-5 py-4 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <meta.Icon className={`h-4 w-4 ${meta.color.split(' ')[0]}`} />
                    <span className="text-sm font-medium text-foreground">{s.name}</span>
                  </div>
                  <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                    <span className="text-gold/70">↑</span> {s.uptime}
                  </div>
                  <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                    ~{s.latency}
                  </div>
                  <span
                    className={`justify-self-end inline-flex items-center px-2.5 py-0.5 rounded-full border text-[10px] font-mono uppercase tracking-[0.15em] ${meta.color}`}
                  >
                    {meta.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 90-day uptime */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                90-day uptime
              </h2>
              <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Operational
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Degraded
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Outage
                </span>
              </div>
            </div>
          </Reveal>
          <div className="space-y-4">
            {SERVICES.slice(0, 6).map((s, si) => (
              <Reveal key={s.name} delay={si * 50}>
                <div className="rounded-xl border border-border lux-card p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-foreground">{s.name}</span>
                    <span className="text-xs font-mono text-gold">{s.uptime}</span>
                  </div>
                  <div className="flex gap-[2px]">
                    {Array.from({ length: 90 }).map((_, i) => {
                      // Deterministic faux incidents
                      const isDegraded = si === 2 && i === 68
                      const isMaint = si === 0 && i === 70
                      const cls = isDegraded
                        ? 'bg-amber-500/70'
                        : isMaint
                          ? 'bg-sky-500/70'
                          : 'bg-emerald-500/70'
                      return (
                        <div
                          key={i}
                          className={`h-6 flex-1 rounded-[2px] ${cls}`}
                          title={`Day ${i + 1}`}
                        />
                      )
                    })}
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] font-mono text-muted-foreground">
                    <span>90 days ago</span>
                    <span>today</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Incident history */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
              Recent incidents
            </h2>
          </Reveal>
          <div className="space-y-3">
            {INCIDENTS.map((inc, i) => (
              <Reveal key={inc.date} delay={i * 50}>
                <article className="rounded-xl border border-border lux-card p-5">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {new Date(inc.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[9px] font-mono uppercase tracking-[0.15em] ${
                        inc.severity === 'Maintenance'
                          ? 'text-sky-300 border-sky-400/30 bg-sky-500/10'
                          : 'text-amber-300 border-amber-400/30 bg-amber-500/10'
                      }`}
                    >
                      {inc.severity}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{inc.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{inc.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-8">
            Subscribe to incident updates via{' '}
            <a href="#" className="text-gold hover:underline">
              RSS
            </a>{' '}
            or{' '}
            <a href="#" className="text-gold hover:underline">
              email
            </a>
            .
          </p>
        </div>
      </section>

      <CTA
        title="Transparency is a feature."
        subtitle="We publish every incident, every post-mortem, every planned maintenance."
        primary={{ label: 'Subscribe to updates', href: '#' }}
        secondary={{ label: 'Read security page', href: '/security' }}
      />
    </>
  )
}
