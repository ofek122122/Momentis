import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { CodeTabs } from '@/components/marketing/CodeTabs'
import { BreadcrumbJsonLd } from '@/components/marketing/StructuredData'
import { ENDPOINTS, getEndpoint, type EndpointMethod } from '@/lib/api-endpoints'
import { ArrowLeft, ArrowUpRight, Shield, AlertCircle } from 'lucide-react'

const METHOD_COLORS: Record<EndpointMethod, string> = {
  GET: 'text-sky-300 border-sky-400/30 bg-sky-500/10',
  POST: 'text-emerald-300 border-emerald-400/30 bg-emerald-500/10',
  PATCH: 'text-amber-300 border-amber-400/30 bg-amber-500/10',
  DELETE: 'text-rose-300 border-rose-400/30 bg-rose-500/10',
}

export async function generateStaticParams() {
  return ENDPOINTS.map((e) => ({ endpoint: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ endpoint: string }>
}): Promise<Metadata> {
  const { endpoint } = await params
  const e = getEndpoint(endpoint)
  if (!e) return { title: 'Endpoint not found' }
  return {
    title: `${e.name} — API`,
    description: e.summary,
    alternates: { canonical: `/api-docs/${e.slug}` },
    openGraph: {
      title: `${e.method} ${e.path}`,
      description: e.summary,
      url: `/api-docs/${e.slug}`,
    },
  }
}

export default async function EndpointPage({
  params,
}: {
  params: Promise<{ endpoint: string }>
}) {
  const { endpoint } = await params
  const e = getEndpoint(endpoint)
  if (!e) notFound()

  const others = ENDPOINTS.filter((o) => o.category === e.category && o.slug !== e.slug).slice(0, 4)

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'API Docs', url: '/api-docs' },
          { name: e.name, url: `/api-docs/${e.slug}` },
        ]}
      />

      <section className="px-5 md:px-8 pt-10 md:pt-14 pb-2">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'API Docs', href: '/api-docs' },
              { label: e.category },
              { label: e.name },
            ]}
          />
        </div>
      </section>

      <header className="px-5 md:px-8 pb-10 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-md border text-[11px] font-mono font-semibold tracking-wider ${METHOD_COLORS[e.method]}`}
            >
              {e.method}
            </span>
            <code className="font-mono text-sm md:text-base text-foreground">{e.path}</code>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-[1.08] tracking-tight">
            {e.name}
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-3xl">{e.summary}</p>
        </div>
      </header>

      {/* Description + code */}
      <section className="py-12 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Description
            </p>
            <p className="text-[15px] leading-[1.78] text-foreground/85 font-light">{e.description}</p>
            {e.scopes.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-3.5 w-3.5 text-gold" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70">
                    Required scopes
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {e.scopes.map((s) => (
                    <code
                      key={s}
                      className="font-mono text-[11px] text-gold px-2.5 py-1 rounded-md border border-gold/20 bg-gold/5"
                    >
                      {s}
                    </code>
                  ))}
                </div>
              </div>
            )}
          </Reveal>
          <Reveal delay={120}>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Code
            </p>
            <CodeTabs examples={e.codeExamples} />
          </Reveal>
        </div>
      </section>

      {/* Parameters */}
      {e.params.length > 0 && (
        <section className="py-12 px-5 md:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
                Parameters
              </h2>
            </Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-white/[0.02] border-b border-border">
                  <tr>
                    <th className="text-left px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Name
                    </th>
                    <th className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      In
                    </th>
                    <th className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Type
                    </th>
                    <th className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {e.params.map((p, i) => (
                    <tr
                      key={p.name}
                      className={`border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.012]'}`}
                    >
                      <td className="px-5 py-3.5 align-top">
                        <code className="font-mono text-sm text-foreground">{p.name}</code>
                        {p.required && (
                          <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full bg-gold/10 text-gold text-[9px] font-mono uppercase tracking-wider">
                            required
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 align-top text-xs font-mono text-muted-foreground">{p.in}</td>
                      <td className="px-4 py-3.5 align-top text-xs font-mono text-muted-foreground">{p.type}</td>
                      <td className="px-4 py-3.5 align-top text-xs text-muted-foreground leading-relaxed">{p.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Request / Response */}
      <section className="py-12 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {e.requestExample && (
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                Example request body
              </p>
              <pre className="rounded-2xl border border-border bg-[#0a0a0d] p-5 font-mono text-[12.5px] leading-[1.7] text-foreground/90 overflow-x-auto whitespace-pre">
                {e.requestExample}
              </pre>
            </div>
          )}
          <div className={e.requestExample ? '' : 'md:col-span-2'}>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Example response
            </p>
            <pre className="rounded-2xl border border-border bg-[#0a0a0d] p-5 font-mono text-[12.5px] leading-[1.7] text-foreground/90 overflow-x-auto whitespace-pre">
              {e.responseExample}
            </pre>
          </div>
        </div>
      </section>

      {/* Errors */}
      {e.errors.length > 0 && (
        <section className="py-12 px-5 md:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="h-4 w-4 text-gold" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  Errors
                </h2>
              </div>
            </Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              {e.errors.map((err, i) => (
                <div
                  key={err.code + err.reason}
                  className={`grid grid-cols-[80px_1fr] md:grid-cols-[80px_220px_1fr] items-start gap-4 px-5 py-4 border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.012]'}`}
                >
                  <span className="font-mono text-xs font-semibold text-rose-300">{err.code}</span>
                  <code className="font-mono text-xs text-foreground/90 hidden md:block">{err.reason}</code>
                  <div>
                    <code className="font-mono text-xs text-foreground/90 md:hidden block mb-1">{err.reason}</code>
                    <p className="text-xs text-muted-foreground leading-relaxed">{err.when}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {others.length > 0 && (
        <section className="py-12 px-5 md:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight mb-6">
              Related endpoints
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/api-docs/${o.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border lux-card p-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-md border text-[10px] font-mono font-semibold tracking-wider shrink-0 ${METHOD_COLORS[o.method]}`}
                    >
                      {o.method}
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-foreground group-hover:text-gold transition-colors truncate">
                        {o.name}
                      </div>
                      <code className="font-mono text-[11px] text-muted-foreground truncate block">
                        {o.path}
                      </code>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-gold shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA
        title="Need help integrating?"
        subtitle="Enterprise partners get direct Slack access to our AI platform engineer. Write us for a technical conversation."
        primary={{ label: 'Contact developer support', href: '/contact' }}
        secondary={{ label: 'Browse all endpoints', href: '/api-docs' }}
      />
    </article>
  )
}
