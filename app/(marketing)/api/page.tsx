import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Code2, Zap, Shield, Globe, Webhook, Key, ArrowRight, ArrowUpRight, Terminal } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties API — Build on the AI calendar',
  description:
    'The Momenties REST API and webhooks. Create and sync events, parse natural language, access user calendars, and build calendar-aware applications. Available Q3 2026.',
  alternates: { canonical: '/api' },
  openGraph: {
    title: 'Momenties API',
    description: 'Build calendar-aware applications with the Momenties API.',
    url: '/api',
    type: 'website',
  },
}

const CAPABILITIES = [
  {
    icon: Code2,
    title: 'Events API',
    desc: 'Create, read, update, and delete events. Full support for recurring events, attendees, reminders, and custom metadata.',
    badge: 'REST',
  },
  {
    icon: Zap,
    title: 'Parse endpoint',
    desc: 'Send a natural language string — "lunch with alex friday 1pm" — and receive a structured event object in under 100ms.',
    badge: 'REST',
  },
  {
    icon: Webhook,
    title: 'Webhooks',
    desc: 'Subscribe to event lifecycle: created, updated, deleted, synced. Signed payloads, configurable retry with exponential backoff.',
    badge: 'Push',
  },
  {
    icon: Globe,
    title: 'Calendar sync status',
    desc: 'Check and trigger sync for connected Google or Apple calendars. Receive push notifications when remote events change.',
    badge: 'REST',
  },
  {
    icon: Shield,
    title: 'OAuth 2.0',
    desc: 'Authenticate users with OAuth 2.0. Granular scopes: read-only, create-only, or full access. Standard PKCE flow.',
    badge: 'Auth',
  },
  {
    icon: Terminal,
    title: 'CLI',
    desc: 'The Momenties CLI wraps the API for scripting, local development, and CI pipelines. Install with npm or brew.',
    badge: 'CLI',
  },
]

const CODE_EXAMPLE = `// Parse natural language → structured event
const res = await fetch('https://api.momenties.app/v1/parse', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    input: 'dentist thursday 3pm',
    timezone: 'America/New_York',
  }),
})

const { event } = await res.json()
// {
//   title: "Dentist",
//   start: "2026-04-23T15:00:00-04:00",
//   end:   "2026-04-23T16:00:00-04:00",
//   confidence: 0.97
// }`

const RATE_LIMITS = [
  { plan: 'Free', requests: '100 req/day', parse: '3 parses/day', webhooks: '—' },
  { plan: 'Pro', requests: '10,000 req/day', parse: 'Unlimited', webhooks: '5 endpoints' },
  { plan: 'Team', requests: '100,000 req/day', parse: 'Unlimited', webhooks: '25 endpoints' },
  { plan: 'Enterprise', requests: 'Custom', parse: 'Unlimited', webhooks: 'Unlimited' },
]

const ENDPOINTS = [
  { method: 'GET', path: '/v1/events', desc: 'List events in a date range' },
  { method: 'POST', path: '/v1/events', desc: 'Create a new event' },
  { method: 'PATCH', path: '/v1/events/:id', desc: 'Update an event' },
  { method: 'DELETE', path: '/v1/events/:id', desc: 'Delete an event' },
  { method: 'POST', path: '/v1/parse', desc: 'Parse natural language input' },
  { method: 'GET', path: '/v1/calendars', desc: 'List connected calendars' },
  { method: 'POST', path: '/v1/sync/trigger', desc: 'Trigger a manual sync' },
  { method: 'POST', path: '/v1/webhooks', desc: 'Register a webhook endpoint' },
]

const METHOD_COLORS: Record<string, string> = {
  GET: 'text-emerald-400',
  POST: 'text-gold',
  PATCH: 'text-sky-400',
  DELETE: 'text-rose-400',
}

export default function ApiPage() {
  return (
    <>
      <PageHero
        eyebrow="Developer API · Coming Q3 2026"
        title={
          <>
            Build on the
            <br />
            <em className="not-italic text-gold">AI calendar.</em>
          </>
        }
        lede="The Momenties API gives you everything you need to create, sync, and parse calendar events in your own applications. Natural language parsing, real-time webhooks, and OAuth 2.0 — all in one API."
        crumbs={[{ label: 'API' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/api-docs"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Read the docs <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/developers"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Developer hub
          </Link>
        </div>
      </PageHero>

      {/* Code example */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Parse endpoint</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Natural language → structured event.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Our fastest endpoint. 18ms median latency on the chrono-node path. 280ms when Gemini is invoked.
            </p>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="bg-[#0f0f14] border-b border-border px-5 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <span className="font-mono text-[11px] text-muted-foreground/50 ml-2">parse.ts</span>
              </div>
              <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto text-foreground/85 whitespace-pre-wrap">
                <code>{CODE_EXAMPLE}</code>
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Capabilities</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Everything the app can do, your app can do.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 50}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center">
                      <c.icon className="h-4 w-4 text-gold" />
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground border border-border px-1.5 py-0.5 rounded-full">
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-1.5">{c.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Endpoints reference */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Quick reference</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Core endpoints.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Base URL: <code className="font-mono text-gold text-xs">https://api.momenties.app</code>
            </p>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              {ENDPOINTS.map((ep, i) => (
                <div key={ep.path} className={`flex items-center gap-4 p-4 border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.015]'}`}>
                  <span className={`font-mono text-[11px] uppercase tracking-wider w-14 shrink-0 ${METHOD_COLORS[ep.method]}`}>
                    {ep.method}
                  </span>
                  <code className="font-mono text-xs text-foreground/80 flex-1">{ep.path}</code>
                  <span className="text-xs text-muted-foreground hidden sm:block">{ep.desc}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Link
              href="/api-docs"
              className="inline-flex items-center gap-1.5 mt-5 text-sm text-gold hover:text-gold/80 transition-colors"
            >
              Full API reference <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Rate limits */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Limits</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Rate limits by plan.
            </h2>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-4 bg-[#0f0f14] border-b border-border text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
                <div className="px-5 py-3">Plan</div>
                <div className="px-4 py-3">API requests</div>
                <div className="px-4 py-3">AI parsing</div>
                <div className="px-4 py-3">Webhooks</div>
              </div>
              {RATE_LIMITS.map((r, i) => (
                <div key={r.plan} className={`grid grid-cols-4 border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.015]'}`}>
                  <div className="px-5 py-3 text-sm font-medium text-foreground">{r.plan}</div>
                  <div className="px-4 py-3 text-sm font-mono text-muted-foreground">{r.requests}</div>
                  <div className="px-4 py-3 text-sm font-mono text-muted-foreground">{r.parse}</div>
                  <div className="px-4 py-3 text-sm font-mono text-muted-foreground">{r.webhooks}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex gap-4 mt-5">
              <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors">
                Compare plans <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/enterprise" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Enterprise limits <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SDK callout */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { lang: 'JavaScript / TypeScript', install: 'npm install @momenties/sdk', color: 'text-yellow-400' },
                { lang: 'Python', install: 'pip install momenties', color: 'text-sky-400' },
                { lang: 'Go', install: 'go get momenties.app/go', color: 'text-emerald-400' },
              ].map((sdk) => (
                <div key={sdk.lang} className="rounded-xl border border-border lux-card p-4">
                  <p className={`font-mono text-[10px] uppercase tracking-wider mb-2 ${sdk.color}`}>{sdk.lang}</p>
                  <code className="font-mono text-xs text-foreground/70 break-all">{sdk.install}</code>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              SDKs ship alongside the public API in Q3 2026.{' '}
              <Link href="/developers" className="text-gold hover:text-gold/80 transition-colors">
                Join the developer waitlist →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Build something with the API."
        subtitle="Get early access in Q3 2026. Full docs, SDKs, and a sandbox environment included."
        primary={{ label: 'Join developer waitlist', href: '/developers' }}
        secondary={{ label: 'Read the docs preview', href: '/api-docs' }}
      />
    </>
  )
}
