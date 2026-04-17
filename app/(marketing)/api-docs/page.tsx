import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Terminal, Code2, Webhook, Key, Package, BookOpen, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'API Docs — Build on top of Calendro',
  description: 'REST API, WebSocket events, and official SDKs for Node, Python, Go, and Rust. OAuth 2.0 everywhere. Webhooks for everything.',
  alternates: { canonical: '/api-docs' },
  openGraph: {
    title: 'Calendro API Documentation',
    description: 'REST, WebSockets, and SDKs for building on Calendro.',
    url: '/api-docs',
  },
}

const SECTIONS = [
  {
    icon: Key,
    title: 'Authentication',
    desc: 'OAuth 2.0 Authorization Code flow with PKCE. Personal Access Tokens for scripts. All tokens are scoped per-resource.',
    snippet: `curl https://api.calendro.app/v1/events \\
  -H "Authorization: Bearer $TOKEN"`,
  },
  {
    icon: Terminal,
    title: 'REST API',
    desc: 'Versioned at /v1. JSON everywhere. Idempotency keys supported. 120 req/min rate limit on free, 1000 on Pro, unlimited on Enterprise.',
    snippet: `POST /v1/events
{
  "input": "dentist thursday 3pm",
  "calendar_id": "primary"
}`,
  },
  {
    icon: Webhook,
    title: 'Webhooks',
    desc: 'Subscribe to event.created, event.updated, event.deleted, sync.failed. Signed with HMAC-SHA256. Guaranteed delivery with exponential backoff.',
    snippet: `{
  "type": "event.created",
  "data": { ... },
  "signature": "sha256=..."
}`,
  },
  {
    icon: Package,
    title: 'Official SDKs',
    desc: 'First-party clients for Node, Python, Go, and Rust. Generated from the same OpenAPI spec. Full type safety in every language.',
    snippet: `npm install @calendro/sdk
# or
pip install calendro`,
  },
]

import { ENDPOINTS as DETAILED_ENDPOINTS } from '@/lib/api-endpoints'

const ENDPOINTS = DETAILED_ENDPOINTS.map((e) => ({
  method: e.method,
  path: e.path,
  desc: e.summary,
  slug: e.slug,
}))

const METHOD_COLORS: Record<string, string> = {
  GET: 'text-sky-300 border-sky-400/30 bg-sky-500/10',
  POST: 'text-emerald-300 border-emerald-400/30 bg-emerald-500/10',
  PATCH: 'text-amber-300 border-amber-400/30 bg-amber-500/10',
  DELETE: 'text-rose-300 border-rose-400/30 bg-rose-500/10',
}

export default function ApiDocsPage() {
  return (
    <>
      <PageHero
        eyebrow="Developer documentation"
        title={
          <>
            Build on top of <em className="not-italic text-gold">Calendro</em>.
          </>
        }
        lede="A clean REST API, real-time WebSockets, and first-party SDKs. Integrations in minutes. OAuth 2.0 everywhere. Honest rate limits."
        crumbs={[{ label: 'API Docs' }]}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="#quickstart"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            Quickstart
          </a>
          <Link
            href="/integrations"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
          >
            Integrations catalog
          </Link>
        </div>
      </PageHero>

      {/* Quickstart */}
      <section id="quickstart" className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-10">
              Ninety-second quickstart
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { n: '01', t: 'Create an app', d: 'Go to Settings → Developer. Generate an OAuth client with the scopes you need.' },
              { n: '02', t: 'Exchange a token', d: 'Run the OAuth dance. Or for scripts, use a Personal Access Token. Both are scoped.' },
              { n: '03', t: 'Make your first call', d: 'POST /v1/events with a natural-language input and you\'re done.' },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <span className="font-mono text-xs text-gold/50">{s.n}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-3 mb-2">
                    {s.t}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-[#0a0a0d] p-6 font-mono text-[13px] leading-[1.8] overflow-x-auto">
            <div className="text-muted-foreground mb-3">
              # create your first event with Node SDK
            </div>
            <pre className="text-foreground/90">
              <span className="text-rose-300">import</span> {'{ Calendro }'} <span className="text-rose-300">from</span>{' '}
              <span className="text-emerald-300">&quot;@calendro/sdk&quot;</span>;
              {'\n\n'}
              <span className="text-rose-300">const</span>{' '}
              <span className="text-sky-300">client</span> = <span className="text-rose-300">new</span>{' '}
              <span className="text-foreground">Calendro</span>({'{'} <span className="text-sky-300">token</span>: process.env.<span className="text-foreground">CALENDRO_TOKEN</span> {'}'});
              {'\n\n'}
              <span className="text-rose-300">const</span>{' '}
              <span className="text-sky-300">event</span> = <span className="text-rose-300">await</span> client.events.<span className="text-gold">create</span>({'{'}
              {'\n'}&nbsp;&nbsp;<span className="text-sky-300">input</span>: <span className="text-emerald-300">&quot;dentist thursday 3pm&quot;</span>,
              {'\n'}&nbsp;&nbsp;<span className="text-sky-300">calendar</span>: <span className="text-emerald-300">&quot;primary&quot;</span>
              {'\n'}{'}'});
              {'\n\n'}
              console.<span className="text-gold">log</span>(<span className="text-sky-300">event</span>.<span className="text-foreground">id</span>); <span className="text-muted-foreground">// evt_01HN7...</span>
            </pre>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              What&apos;s inside
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Everything a developer <br className="hidden md:block" /> actually needs.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 90}>
                <div className="rounded-2xl border border-border lux-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center">
                      <s.icon className="h-4 w-4 text-gold" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <pre className="rounded-lg border border-border bg-[#0a0a0d] p-4 font-mono text-[12px] text-foreground/85 overflow-x-auto whitespace-pre-wrap">
                    {s.snippet}
                  </pre>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                Endpoints
              </h2>
              <span className="font-mono text-[11px] text-muted-foreground">v1 · stable</span>
            </div>
          </Reveal>
          <div className="rounded-2xl border border-border overflow-hidden">
            {ENDPOINTS.map((e, i) => (
              <Link
                key={`${e.method}-${e.path}`}
                href={`/api-docs/${e.slug}`}
                className={`group flex items-center gap-4 px-5 py-3.5 border-b border-border last:border-b-0 hover:bg-white/[0.025] transition-colors ${i % 2 === 0 ? '' : 'bg-white/[0.012]'}`}
              >
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-md border text-[10px] font-mono font-semibold tracking-wider w-16 justify-center ${METHOD_COLORS[e.method]}`}
                >
                  {e.method}
                </span>
                <code className="font-mono text-sm text-foreground flex-1 min-w-0 truncate group-hover:text-gold transition-colors">
                  {e.path}
                </code>
                <span className="text-xs text-muted-foreground hidden md:block text-right">
                  {e.desc}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/50 group-hover:text-gold shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-10 text-center">
              Developer resources
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: BookOpen, title: 'Full reference', desc: 'Every endpoint, field, and edge case. Autogenerated from our OpenAPI spec.', href: '#' },
              { icon: Code2, title: 'OpenAPI spec', desc: 'YAML + JSON. Generate your own clients. Always up to date.', href: '#' },
              { icon: Terminal, title: 'Postman collection', desc: 'Import in one click. Pre-populated with sample data.', href: '#' },
            ].map((r, i) => (
              <Reveal key={r.title} delay={i * 70}>
                <a
                  href={r.href}
                  className="block rounded-xl border border-border lux-card p-6 h-full group"
                >
                  <r.icon className="h-5 w-5 text-gold mb-4" />
                  <h3 className="text-sm font-medium text-foreground mb-2 group-hover:text-gold transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs text-gold opacity-70 group-hover:opacity-100 transition-opacity">
                    Open <ArrowUpRight className="h-3 w-3" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Have an idea?"
        subtitle="If you're building something on Calendro, we want to see it. Enterprise partners get early access to new API endpoints."
        primary={{ label: 'Request API access', href: '/contact' }}
        secondary={{ label: 'Join our community', href: '/community' }}
      />
    </>
  )
}
