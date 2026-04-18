import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import {
  Terminal, Code2, Webhook, Key, Package, Zap, Globe, Shield,
  BookOpen, ArrowUpRight, Check, GitBranch, Layers, Clock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Developers — Build on Momenties',
  description:
    'REST API, WebSocket events, official SDKs for Node, Python, Go, and Rust. OAuth 2.0 everywhere. Parse natural language into calendar events with a single API call.',
  alternates: { canonical: '/developers' },
  openGraph: {
    title: 'Momenties for Developers',
    description:
      'REST API, WebSockets, and SDKs for building on top of Momenties. Natural-language-to-event parsing as a service.',
    url: '/developers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momenties Developer Platform',
    description: 'REST API, webhooks, and SDKs. Natural-language parsing as a service.',
  },
}

const QUICKSTART_STEPS = [
  {
    step: '01',
    title: 'Get your API key',
    desc: 'Sign up for a free account, then generate a Personal Access Token from Settings → API.',
    code: `# Your token — keep it secret
export MOMENTIES_TOKEN="mmt_live_xxxxxxxxxxxx"`,
  },
  {
    step: '02',
    title: 'Parse your first event',
    desc: 'POST any natural-language string. Get back a structured calendar event in under 500ms.',
    code: `curl -X POST https://api.momenties.app/v1/parse \\
  -H "Authorization: Bearer $MOMENTIES_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"input": "dentist thursday 3pm for 1 hour"}'`,
  },
  {
    step: '03',
    title: 'Receive structured JSON',
    desc: 'Title, start time, end time, location, attendees — everything extracted automatically.',
    code: `{
  "event": {
    "title": "Dentist appointment",
    "start": "2026-04-24T15:00:00Z",
    "end": "2026-04-24T16:00:00Z",
    "duration_minutes": 60,
    "confidence": 0.98
  },
  "parsed_in_ms": 42,
  "model": "chrono+gemini-2.5-flash"
}`,
  },
]

const ENDPOINTS = [
  {
    method: 'POST',
    path: '/v1/parse',
    desc: 'Parse natural language into a structured event object.',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    method: 'POST',
    path: '/v1/events',
    desc: 'Create a parsed event directly in a user\'s connected calendar.',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    method: 'GET',
    path: '/v1/events',
    desc: 'List events from the user\'s connected calendars with full metadata.',
    color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
  },
  {
    method: 'PATCH',
    path: '/v1/events/:id',
    desc: 'Update any field of an existing event. Partial updates supported.',
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    method: 'DELETE',
    path: '/v1/events/:id',
    desc: 'Delete an event. Returns 204 on success.',
    color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
  },
  {
    method: 'POST',
    path: '/v1/suggest',
    desc: 'Get smart scheduling suggestions for a given duration and date range.',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    method: 'POST',
    path: '/v1/parse/image',
    desc: 'Parse a photo of a schedule, timetable, or handwritten note into events.',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    method: 'POST',
    path: '/v1/webhooks',
    desc: 'Subscribe to event.created, event.updated, event.deleted, sync.failed.',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
]

const SDKS = [
  {
    lang: 'Node.js / TypeScript',
    install: 'npm install @momenties/sdk',
    badge: 'Official',
    badgeColor: 'text-gold bg-gold/10 border-gold/25',
  },
  {
    lang: 'Python',
    install: 'pip install momenties',
    badge: 'Official',
    badgeColor: 'text-gold bg-gold/10 border-gold/25',
  },
  {
    lang: 'Go',
    install: 'go get github.com/momenties/go-sdk',
    badge: 'Official',
    badgeColor: 'text-gold bg-gold/10 border-gold/25',
  },
  {
    lang: 'Rust',
    install: 'cargo add momenties',
    badge: 'Official',
    badgeColor: 'text-gold bg-gold/10 border-gold/25',
  },
  {
    lang: 'Ruby',
    install: 'gem install momenties',
    badge: 'Community',
    badgeColor: 'text-sky-400 bg-sky-500/10 border-sky-500/25',
  },
  {
    lang: 'PHP',
    install: 'composer require momenties/client',
    badge: 'Community',
    badgeColor: 'text-sky-400 bg-sky-500/10 border-sky-500/25',
  },
]

const FEATURES = [
  {
    icon: Zap,
    title: 'Blazing fast',
    desc: '42ms median for local chrono parsing. 480ms for full Gemini 2.5 analysis. Sub-second for 95% of inputs.',
  },
  {
    icon: Shield,
    title: 'OAuth 2.0 + PKCE',
    desc: 'Industry-standard auth. Personal Access Tokens for scripts. Scoped permissions. Revokable at any time.',
  },
  {
    icon: Globe,
    title: 'Idempotency keys',
    desc: 'Safe to retry on network failures. Pass X-Idempotency-Key on POST requests — we deduplicate server-side.',
  },
  {
    icon: Clock,
    title: 'Rate limits, openly stated',
    desc: 'Free: 120 req/min. Pro: 1,200 req/min. Enterprise: unlimited. Limits are per-token, not per-IP.',
  },
  {
    icon: GitBranch,
    title: 'Versioned & stable',
    desc: '/v1 will never have a breaking change. New versions are additive. Deprecations notified 12 months early.',
  },
  {
    icon: Layers,
    title: 'OpenAPI spec',
    desc: 'Full OpenAPI 3.1 spec available at api.momenties.app/openapi.json. Generate your own client in any language.',
  },
]

const WEBHOOK_EVENTS = [
  { event: 'event.created', desc: 'A new event was added to any synced calendar.' },
  { event: 'event.updated', desc: 'An event was modified — title, time, or attendees.' },
  { event: 'event.deleted', desc: 'An event was removed from a synced calendar.' },
  { event: 'parse.completed', desc: 'An async parse job finished processing.' },
  { event: 'sync.failed', desc: 'A calendar sync attempt failed after retries.' },
  { event: 'user.created', desc: 'A new user connected their account via OAuth.' },
]

export default function DevelopersPage() {
  return (
    <>
      <PageHero
        eyebrow="Developer platform"
        title={
          <>
            Natural language parsing
            <br />
            <em className="not-italic text-gold">as a service.</em>
          </>
        }
        lede="One API call turns any sentence — or photo — into a structured calendar event. Use it to add Momenties parsing to your own app, automate your workflow, or build an integration."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press"
          >
            Get API key free
          </Link>
          <Link
            href="/api-docs"
            className="inline-flex items-center gap-2 h-10 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Full API reference <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </PageHero>

      {/* Quickstart */}
      <section className="py-24 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Quickstart
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Up and running in three steps.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              No SDK required. A single HTTP request is enough to parse your first event.
            </p>
          </Reveal>

          <div className="space-y-6">
            {QUICKSTART_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 80}>
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start">
                  <div className="flex items-center gap-4 md:flex-col md:items-center md:w-14">
                    <div className="w-8 h-8 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center font-mono text-xs text-gold flex-shrink-0">
                      {s.step}
                    </div>
                    {i < QUICKSTART_STEPS.length - 1 && (
                      <div className="hidden md:block flex-1 w-px bg-border mt-1" />
                    )}
                  </div>
                  <div className="rounded-2xl border border-border lux-card overflow-hidden">
                    <div className="p-5 md:p-6">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1.5">
                        {s.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                    <div className="border-t border-border bg-[#0a0a0d]">
                      <pre className="px-5 py-4 text-xs text-foreground/85 overflow-x-auto leading-relaxed font-mono">
                        <code>{s.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Node.js code example */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Node.js SDK example
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Parse events in your app with five lines.
            </h2>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-[#0f0f14]">
                <div className="w-3 h-3 rounded-full bg-rose-500/60" />
                <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                <span className="ml-3 font-mono text-[11px] text-muted-foreground">parse-event.ts</span>
              </div>
              <pre className="p-5 md:p-7 text-sm text-foreground/90 overflow-x-auto leading-relaxed font-mono bg-[#080810]">
                <code>{`import { Momenties } from '@momenties/sdk'

const client = new Momenties({ token: process.env.MOMENTIES_TOKEN })

const { event } = await client.parse({
  input: 'lunch with Elena next tuesday at Carbone 12:30',
})

console.log(event)
// {
//   title: 'Lunch with Elena',
//   start: '2026-04-28T12:30:00-04:00',
//   end: '2026-04-28T13:30:00-04:00',
//   location: 'Carbone, New York, NY',
//   attendees: [{ name: 'Elena' }],
//   confidence: 0.97
// }

// Add it directly to their Google Calendar
await client.events.create({ event, calendarId: 'primary' })`}</code>
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-24 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              REST API
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Everything you need, nothing you don&apos;t.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Eight endpoints cover 95% of what anyone builds on top of Momenties. The full reference is at{' '}
              <Link href="/api-docs" className="text-gold hover:text-gold/80 transition-colors">
                /api-docs
              </Link>
              .
            </p>
          </Reveal>

          <div className="rounded-2xl border border-border overflow-hidden">
            {ENDPOINTS.map((ep, i) => (
              <div
                key={ep.path}
                className={`flex flex-col sm:flex-row sm:items-center gap-3 p-4 md:p-5 ${
                  i < ENDPOINTS.length - 1 ? 'border-b border-border' : ''
                } hover:bg-white/[0.02] transition-colors group`}
              >
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-md font-mono text-[11px] font-bold border ${ep.color} w-fit flex-shrink-0`}
                >
                  {ep.method}
                </span>
                <code className="font-mono text-sm text-foreground/90 flex-shrink-0 min-w-[220px]">
                  {ep.path}
                </code>
                <p className="text-sm text-muted-foreground flex-1">{ep.desc}</p>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-gold/60 transition-colors hidden sm:block flex-shrink-0" />
              </div>
            ))}
          </div>

          <div className="mt-5 text-center">
            <Link
              href="/api-docs"
              className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors font-medium"
            >
              Full API reference with examples <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-24 px-5 md:px-8 border-t border-border bg-gradient-to-b from-[#0a0a0d] to-transparent">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              SDKs
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Your language, our library.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Four official clients generated from the same OpenAPI 3.1 spec. Community clients for six more languages.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SDKS.map((sdk, i) => (
              <Reveal key={sdk.lang} delay={(i % 3) * 60}>
                <div className="rounded-xl border border-border lux-card p-5 group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-sm text-foreground">{sdk.lang}</span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono border ${sdk.badgeColor}`}>
                      {sdk.badge}
                    </span>
                  </div>
                  <div className="rounded-lg border border-border bg-[#0a0a0d] px-3 py-2.5 font-mono text-xs text-foreground/80 group-hover:text-foreground transition-colors">
                    {sdk.install}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Webhooks */}
      <section className="py-24 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Webhooks
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              React to everything in real time.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Subscribe to any event. Every delivery is signed with HMAC-SHA256 and retried with exponential backoff. No polling required.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="space-y-2">
                {WEBHOOK_EVENTS.map((e) => (
                  <div key={e.event} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.02] transition-colors">
                    <code className="font-mono text-[11px] text-gold bg-gold/8 border border-gold/15 px-2 py-1 rounded flex-shrink-0 mt-0.5">
                      {e.event}
                    </code>
                    <p className="text-sm text-muted-foreground">{e.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl border border-border overflow-hidden h-full">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#0f0f14]">
                  <Webhook className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="font-mono text-[11px] text-muted-foreground">Incoming webhook payload</span>
                </div>
                <pre className="p-5 text-xs text-foreground/85 leading-relaxed font-mono bg-[#080810] h-full">
                  <code>{`POST https://your-app.com/webhooks

{
  "id": "wh_01hxyz",
  "type": "event.created",
  "created_at": "2026-04-18T09:41:22Z",
  "data": {
    "event": {
      "id": "evt_01abc",
      "title": "Dentist appointment",
      "start": "2026-04-24T15:00:00Z",
      "end":   "2026-04-24T16:00:00Z",
      "calendar_id": "primary",
      "source": "natural_language"
    }
  }
}

// Verify with HMAC-SHA256
X-Momenties-Signature: sha256=abc123...`}</code>
                </pre>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-24 px-5 md:px-8 border-t border-border bg-gradient-to-b from-[#0a0a0d] to-transparent">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Built for production
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              The boring things done right.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-1.5">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing tiers for API */}
      <section className="py-24 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              API pricing
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Start free. Scale with us.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                plan: 'Free',
                price: '$0',
                rateLimit: '120 req / min',
                features: [
                  '1,000 parses / month',
                  'REST API + webhooks',
                  'Community SDKs',
                  'Public status page',
                ],
                cta: 'Start free',
                highlighted: false,
              },
              {
                plan: 'Pro',
                price: '$8',
                per: '/mo',
                rateLimit: '1,200 req / min',
                features: [
                  'Unlimited parses',
                  'Image parsing (photos)',
                  'Official SDKs',
                  'Priority email support',
                  'Webhook delivery logs',
                ],
                cta: 'Get Pro',
                highlighted: true,
              },
              {
                plan: 'Enterprise',
                price: 'Custom',
                rateLimit: 'Unlimited',
                features: [
                  'Dedicated infra',
                  'SLA guarantee',
                  'Custom rate limits',
                  'SAML SSO + audit logs',
                  'Dedicated Slack channel',
                ],
                cta: 'Contact us',
                highlighted: false,
              },
            ].map((p) => (
              <Reveal key={p.plan}>
                <div
                  className={`relative rounded-2xl border p-7 flex flex-col h-full ${
                    p.highlighted
                      ? 'border-gold/40 bg-gradient-to-b from-gold/5 to-transparent shadow-2xl shadow-gold/5'
                      : 'border-border lux-card'
                  }`}
                >
                  {p.highlighted && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 inline-flex items-center px-2.5 py-0.5 rounded-full bg-gold text-[#0c0c0f] text-[10px] font-mono uppercase tracking-wider">
                      Most popular
                    </span>
                  )}
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-display text-3xl font-bold text-foreground">{p.price}</span>
                    {p.per && <span className="text-xs text-muted-foreground font-mono">{p.per}</span>}
                  </div>
                  <div className="font-display text-lg font-semibold text-foreground">{p.plan}</div>
                  <p className="text-xs font-mono text-gold/70 mt-1 mb-5">{p.rateLimit}</p>
                  <ul className="space-y-2.5 mb-7 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                        <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={p.plan === 'Enterprise' ? '/contact' : '/login'}
                    className={`h-10 rounded-full text-sm font-medium inline-flex items-center justify-center transition-all press ${
                      p.highlighted
                        ? 'bg-gold text-[#0c0c0f] hover:bg-gold/90'
                        : 'border border-border text-foreground hover:border-gold/30'
                    }`}
                  >
                    {p.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to build something great?"
        subtitle="Free API key. No credit card. Parse your first event in under a minute."
        primary={{ label: 'Get your API key', href: '/login' }}
        secondary={{ label: 'Read the docs', href: '/api-docs' }}
      />
    </>
  )
}
