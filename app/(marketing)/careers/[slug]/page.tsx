import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { JobPostingJsonLd, BreadcrumbJsonLd } from '@/components/marketing/StructuredData'
import { JOBS, getJob } from '@/lib/jobs'
import { ArrowLeft, ArrowUpRight, Check, MapPin, Clock, DollarSign } from 'lucide-react'

export async function generateStaticParams() {
  return JOBS.map((j) => ({ slug: j.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const job = getJob(slug)
  if (!job) return { title: 'Role not found' }
  return {
    title: `${job.title} — Careers`,
    description: job.summary,
    alternates: { canonical: `/careers/${job.slug}` },
    openGraph: {
      type: 'article',
      title: `${job.title} · Momenties`,
      description: job.summary,
      url: `/careers/${job.slug}`,
    },
  }
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const job = getJob(slug)
  if (!job) notFound()

  const others = JOBS.filter((j) => j.slug !== job.slug)

  return (
    <article>
      <JobPostingJsonLd
        title={job.title}
        description={job.summary}
        slug={job.slug}
        salary={job.salary}
        location={job.location}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Careers', url: '/careers' },
          { name: job.title, url: `/careers/${job.slug}` },
        ]}
      />
      <section className="px-5 md:px-8 pt-10 md:pt-14 pb-2">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Careers', href: '/careers' }, { label: job.title }]} />
        </div>
      </section>

      <header className="px-5 md:px-8 pb-12 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
            {job.team} · {job.type}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
            {job.title}
          </h1>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-2xl">
            {job.summary}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold/70" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-gold/70" />
              {job.type}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <DollarSign className="h-3.5 w-3.5 text-gold/70" />
              {job.salary}
            </span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {job.tags.map((t) => (
              <span key={t} className="text-[11px] font-mono text-muted-foreground px-2 py-0.5 rounded-full border border-border">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:careers@momenties.app?subject=Application: ${encodeURIComponent(job.title)}`}
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
            >
              Apply for this role <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> All roles
            </Link>
          </div>
        </div>
      </header>

      {/* About the role */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto space-y-10">
          <Reveal>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                About the role
              </p>
              <p className="text-[16px] leading-[1.78] text-foreground/85 font-light">{job.about}</p>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                What you&apos;ll do
              </h2>
              <ul className="space-y-2.5">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                    <Check className="h-4 w-4 text-gold mt-1 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                What we&apos;re looking for
              </h2>
              <ul className="space-y-2.5">
                {job.qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                    <span className="text-gold mt-1.5 shrink-0">✦</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Nice to have (but not required)
              </h2>
              <ul className="space-y-2.5">
                {job.niceToHave.map((n) => (
                  <li key={n} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-muted-foreground mt-1.5 shrink-0">·</span>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                How we hire
              </h2>
              <ol className="space-y-3">
                {job.howWeHire.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                    <span className="font-mono text-xs text-gold/60 mt-1 shrink-0 w-6">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other roles */}
      {others.length > 0 && (
        <section className="py-16 px-5 md:px-8 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
              Other roles
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/careers/${o.slug}`}
                  className="group block rounded-xl border border-border lux-card p-5"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-2">
                    {o.team} · {o.location}
                  </p>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">{o.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA
        title="Don't quite fit this role?"
        subtitle="We always read thoughtful emails from people who make things quietly excellent."
        primary={{ label: 'careers@momenties.app', href: 'mailto:careers@momenties.app' }}
        secondary={{ label: 'Read about our culture', href: '/careers' }}
      />
    </article>
  )
}
