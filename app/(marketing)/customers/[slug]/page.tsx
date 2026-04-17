import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { CUSTOMER_STORIES, getCustomerStory } from '@/lib/customers'
import { Quote, ArrowUpRight } from 'lucide-react'

export async function generateStaticParams() {
  return CUSTOMER_STORIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const c = getCustomerStory(slug)
  if (!c) return { title: 'Customer story not found' }
  return {
    title: `${c.company} — Customer story`,
    description: c.tagline,
    alternates: { canonical: `/customers/${c.slug}` },
    openGraph: {
      type: 'article',
      title: `${c.company} × Calendro`,
      description: c.tagline,
      url: `/customers/${c.slug}`,
    },
  }
}

export default async function CustomerStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const story = getCustomerStory(slug)
  if (!story) notFound()

  const others = CUSTOMER_STORIES.filter((c) => c.slug !== story.slug)

  return (
    <article>
      <section className="px-5 md:px-8 pt-10 md:pt-14 pb-2">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Customers', href: '/customers' },
              { label: story.company },
            ]}
          />
        </div>
      </section>

      <header className="px-5 md:px-8 pb-14 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
            Customer story · {story.industry}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
            {story.company}
          </h1>
          <p className="mt-5 font-display italic text-xl md:text-2xl text-foreground leading-snug max-w-2xl">
            {story.tagline}
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
            {story.metrics.map((m) => (
              <div key={m.label} className="rounded-lg border border-border bg-white/[0.02] px-3 py-3 text-center">
                <div className="font-display text-xl font-bold text-foreground">{m.value}</div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Big quote */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="h-7 w-7 text-gold/60 mx-auto mb-5" />
          <blockquote className="font-display italic text-2xl md:text-3xl text-foreground leading-snug">
            &ldquo;{story.quote}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 flex items-center justify-center text-sm font-mono text-gold">
              {story.initials}
            </div>
            <div className="text-left">
              <div className="text-sm text-foreground font-medium">{story.person}</div>
              <div className="text-xs font-mono text-muted-foreground">{story.personTitle}</div>
            </div>
          </div>
        </div>
      </section>

      {/* C/S/I structured story */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto grid gap-10">
          {[
            { label: 'Challenge', body: story.challenge },
            { label: 'Solution', body: story.solution },
            { label: 'Impact', body: story.impact },
          ].map((section, i) => (
            <Reveal key={section.label} delay={i * 80}>
              <div className="grid md:grid-cols-[200px_1fr] gap-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70">
                    {String(i + 1).padStart(2, '0')} · {section.label}
                  </p>
                </div>
                <div className="text-[15px] leading-[1.78] text-foreground/85 font-light">
                  {section.body}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Long-form body */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-2xl mx-auto space-y-6 text-[16px] leading-[1.78] text-foreground/85 font-light">
          {story.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Other customers */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
            More stories
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/customers/${o.slug}`}
                className="group block rounded-xl border border-border lux-card p-6"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-3">
                  {o.industry}
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-gold transition-colors">
                  {o.company}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground italic">&ldquo;{o.tagline}&rdquo;</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-gold opacity-70 group-hover:opacity-100 transition-opacity">
                  Read story <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Your team next?"
        subtitle="Every week is quieter when scheduling stops being a chore."
        primary={{ label: 'Try Calendro free', href: '/login' }}
        secondary={{ label: 'Back to customers', href: '/customers' }}
      />
    </article>
  )
}
