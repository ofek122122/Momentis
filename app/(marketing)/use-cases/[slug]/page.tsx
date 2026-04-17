import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/marketing/StructuredData'
import { USE_CASES, getUseCase, type UseCase } from '@/lib/use-cases'
import {
  Briefcase, GraduationCap, Pen, Laptop, Users2, Heart, Check, ArrowUpRight, Quote,
} from 'lucide-react'

const ICONS: Record<UseCase['icon'], typeof Briefcase> = {
  founder: Briefcase,
  student: GraduationCap,
  freelancer: Pen,
  manager: Laptop,
  parent: Users2,
  healthcare: Heart,
}

export async function generateStaticParams() {
  return USE_CASES.map((u) => ({ slug: u.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const useCase = getUseCase(slug)
  if (!useCase) return { title: 'Use case not found' }
  return {
    title: `Calendro for ${useCase.persona.toLowerCase()}`,
    description: useCase.oneLiner,
    alternates: { canonical: `/use-cases/${useCase.slug}` },
    openGraph: {
      title: `Calendro for ${useCase.persona}`,
      description: useCase.oneLiner,
      url: `/use-cases/${useCase.slug}`,
    },
  }
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const useCase = getUseCase(slug)
  if (!useCase) notFound()

  const Icon = ICONS[useCase.icon]
  const others = USE_CASES.filter((u) => u.slug !== useCase.slug)

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Use cases', url: '/use-cases' },
          { name: useCase.persona, url: `/use-cases/${useCase.slug}` },
        ]}
      />
      {useCase.faqs.length > 0 && <FAQPageJsonLd items={useCase.faqs} />}

      <section className="px-5 md:px-8 pt-10 md:pt-14 pb-2">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Use cases', href: '/use-cases' },
              { label: useCase.persona },
            ]}
          />
        </div>
      </section>

      <header className="px-5 md:px-8 pb-14 border-b border-border relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 dot-grid opacity-30"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(50% 40% at 50% 0%, rgba(197,163,92,0.1) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center mb-5">
            <Icon className="h-5 w-5 text-gold" />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/80 mb-4">
            For {useCase.persona.toLowerCase()}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
            {useCase.tagline}
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {useCase.oneLiner}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
            >
              Try free <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
            >
              See the demo
            </Link>
          </div>
        </div>
      </header>

      {/* Metrics */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
          {useCase.metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-border lux-card p-5 text-center">
              <div className="font-display text-2xl md:text-3xl font-bold shimmer-text">{m.value}</div>
              <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge / Solution */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              The challenge
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground tracking-tight mb-4">
              What gets in the way.
            </h2>
            <p className="text-[15px] leading-[1.78] text-foreground/85 font-light">{useCase.challenge}</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              How Calendro helps
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground tracking-tight mb-4">
              What changes.
            </h2>
            <p className="text-[15px] leading-[1.78] text-foreground/85 font-light">{useCase.solution}</p>
          </Reveal>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              In practice
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              A day with Calendro.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {useCase.workflow.map((w, i) => (
              <Reveal key={w.step} delay={i * 80}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <span className="font-mono text-xs text-gold/50">0{i + 1}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-3 mb-2">
                    {w.step}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Features that matter for {useCase.persona.toLowerCase()}
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {useCase.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 80}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <h3 className="text-sm font-medium text-foreground mb-2 flex items-start gap-2">
                    <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    {f.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-6">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="h-7 w-7 text-gold/60 mx-auto mb-5" />
          <blockquote className="font-display italic text-xl md:text-2xl text-foreground leading-snug">
            &ldquo;{useCase.quote}&rdquo;
          </blockquote>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            — {useCase.attribution}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
            Questions
          </h2>
          <div className="space-y-2">
            {useCase.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <details className="group rounded-xl border border-border lux-card overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                    <span className="text-sm font-medium text-foreground">{f.q}</span>
                    <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related use cases */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight mb-6">
            Other use cases
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {others.map((o) => {
              const OtherIcon = ICONS[o.icon]
              return (
                <Link
                  key={o.slug}
                  href={`/use-cases/${o.slug}`}
                  className="group block rounded-xl border border-border lux-card p-5"
                >
                  <OtherIcon className="h-4 w-4 text-gold mb-3" />
                  <h3 className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                    {o.persona}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{o.tagline}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CTA
        title={`Calendro, shaped around your week.`}
        subtitle="Free to start. Takes 90 seconds to set up."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See all use cases', href: '/use-cases' }}
      />
    </article>
  )
}
