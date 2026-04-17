import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/marketing/StructuredData'
import { INTEGRATIONS, getIntegration } from '@/lib/integrations'
import { ArrowUpRight, Check, Shield, Zap } from 'lucide-react'

export async function generateStaticParams() {
  return INTEGRATIONS.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const integration = getIntegration(slug)
  if (!integration) return { title: 'Integration not found' }
  return {
    title: `${integration.name} integration`,
    description: integration.tagline,
    alternates: { canonical: `/integrations/${integration.slug}` },
    openGraph: {
      title: `Calendro × ${integration.name}`,
      description: integration.tagline,
      url: `/integrations/${integration.slug}`,
    },
  }
}

function StatusPill({ status }: { status: 'live' | 'beta' | 'soon' }) {
  const meta = {
    live: { label: 'Available', cls: 'text-emerald-300 border-emerald-400/30 bg-emerald-500/10' },
    beta: { label: 'Beta', cls: 'text-gold border-gold/30 bg-gold/10' },
    soon: { label: 'Coming soon', cls: 'text-sky-300 border-sky-400/30 bg-sky-500/10' },
  }[status]
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-[10px] font-mono uppercase tracking-[0.15em] ${meta.cls}`}
    >
      {meta.label}
    </span>
  )
}

export default async function IntegrationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const integration = getIntegration(slug)
  if (!integration) notFound()

  const others = INTEGRATIONS.filter((i) => i.slug !== integration.slug).slice(0, 3)

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Integrations', url: '/integrations' },
          { name: integration.name, url: `/integrations/${integration.slug}` },
        ]}
      />
      {integration.faqs.length > 0 && <FAQPageJsonLd items={integration.faqs} />}
      <section className="px-5 md:px-8 pt-10 md:pt-14 pb-2">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Integrations', href: '/integrations' },
              { label: integration.name },
            ]}
          />
        </div>
      </section>

      <header className="px-5 md:px-8 pb-14 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-5 mb-6 flex-wrap">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center font-display text-3xl font-bold text-[#0c0c0f] shrink-0"
              style={{ background: integration.color }}
            >
              {integration.letter}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70">
                  {integration.category}
                </p>
                <StatusPill status={integration.status} />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-tight">
                Calendro × {integration.name}
              </h1>
              <p className="mt-4 text-lg text-gold italic">{integration.tagline}</p>
            </div>
          </div>
          <p className="mt-2 text-base text-muted-foreground leading-relaxed max-w-2xl">
            {integration.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {integration.status === 'live' || integration.status === 'beta' ? (
              <Link
                href="/login"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
              >
                Connect {integration.name} <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : (
              <a
                href="mailto:waitlist@calendro.app"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
              >
                Join the waitlist
              </a>
            )}
            <Link
              href="/integrations"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
            >
              All integrations
            </Link>
          </div>
        </div>
      </header>

      {/* Key features */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              What it does
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {integration.keyFeatures.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 80}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <Zap className="h-4 w-4 text-gold mb-3" />
                  <h3 className="text-sm font-medium text-foreground mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              How it works
            </h2>
          </Reveal>
          <ol className="space-y-4">
            {integration.howItWorks.map((step, i) => (
              <Reveal key={step} delay={i * 60}>
                <li className="flex items-start gap-4 rounded-xl border border-border lux-card p-5">
                  <span className="font-mono text-xs text-gold/60 mt-1 shrink-0 w-6">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-foreground/90 leading-relaxed">{step}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Permissions */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-2 mb-6">
              <Shield className="h-4 w-4 text-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70">
                Permissions we request
              </p>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6">
              What we access.
            </h2>
          </Reveal>
          <ul className="space-y-3">
            {integration.permissions.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed rounded-xl border border-border lux-card p-4">
                <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground mt-6">
            Want the full detail? See our{' '}
            <Link href="/security" className="text-gold hover:underline">
              security overview
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-gold hover:underline">
              privacy policy
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQs */}
      {integration.faqs.length > 0 && (
        <section className="py-16 px-5 md:px-8 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
                Questions, answered
              </h2>
            </Reveal>
            <div className="space-y-2">
              {integration.faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 50}>
                  <details className="group rounded-xl border border-border lux-card overflow-hidden">
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                      <span className="text-sm font-medium text-foreground">{f.q}</span>
                      <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                    </summary>
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight mb-6">
            More integrations
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/integrations/${o.slug}`}
                className="group block rounded-xl border border-border lux-card p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-display text-base font-bold text-[#0c0c0f]"
                    style={{ background: o.color }}
                  >
                    {o.letter}
                  </div>
                  <StatusPill status={o.status} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                  {o.name}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{o.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title={`Calendro + ${integration.name}, in one click.`}
        subtitle="Free to start. Connect as many integrations as you like."
        primary={{ label: 'Get started free', href: '/login' }}
        secondary={{ label: 'Browse all integrations', href: '/integrations' }}
      />
    </article>
  )
}
