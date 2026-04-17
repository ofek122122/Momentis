import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Info, Check } from 'lucide-react'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { CTA } from '@/components/marketing/CTA'
import { HELP_ARTICLES, getArticle } from '@/lib/help-articles'

export async function generateStaticParams() {
  return HELP_ARTICLES.map((a) => ({ category: a.categorySlug, slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}): Promise<Metadata> {
  const { category, slug } = await params
  const article = getArticle(category, slug)
  if (!article) return { title: 'Article not found' }
  return {
    title: `${article.title} — Help`,
    description: article.excerpt,
    alternates: { canonical: `/help/${category}/${slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      url: `/help/${category}/${slug}`,
    },
  }
}

export default async function HelpArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params
  const article = getArticle(category, slug)
  if (!article) notFound()

  return (
    <article>
      <section className="px-5 md:px-8 pt-10 md:pt-14 pb-2">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Help', href: '/help' },
              { label: article.category, href: `/help#${article.categorySlug}` },
              { label: article.title },
            ]}
          />
        </div>
      </section>

      {/* Header */}
      <header className="px-5 md:px-8 pb-10 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] mb-5">
            <span className="px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">
              {article.category}
            </span>
            <span className="text-muted-foreground">{article.readingMinutes} min read</span>
            <span className="text-muted-foreground/50">·</span>
            <span className="text-muted-foreground">
              Updated {new Date(article.updated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-[1.08] tracking-tight">
            {article.title}
          </h1>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-2xl">
            {article.excerpt}
          </p>
        </div>
      </header>

      {/* Body */}
      <div className="px-5 md:px-8 py-14 md:py-16 border-b border-border">
        <div className="max-w-2xl mx-auto space-y-6 text-[16px] leading-[1.78] text-foreground/85 font-light">
          {article.body.map((block, i) => {
            if (block.type === 'p') return <p key={i}>{block.content as string}</p>
            if (block.type === 'h2')
              return (
                <h2 key={i} className="font-display text-2xl font-bold text-foreground tracking-tight pt-4">
                  {block.content as string}
                </h2>
              )
            if (block.type === 'ul')
              return (
                <ul key={i} className="space-y-2.5 pl-1">
                  {(block.content as string[]).map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-gold mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )
            if (block.type === 'code')
              return (
                <pre
                  key={i}
                  className="rounded-xl border border-border bg-[#0a0a0d] p-4 font-mono text-sm text-foreground/90 overflow-x-auto"
                >
                  {block.content as string}
                </pre>
              )
            if (block.type === 'callout')
              return (
                <aside
                  key={i}
                  className="rounded-xl border border-gold/25 bg-gold/5 p-5 flex items-start gap-3"
                >
                  <Info className="h-4 w-4 text-gold mt-1 shrink-0" />
                  <p className="text-sm text-foreground/90 leading-relaxed">{block.content as string}</p>
                </aside>
              )
            return null
          })}
        </div>

        <div className="max-w-2xl mx-auto mt-14 pt-8 border-t border-border flex items-center justify-between">
          <Link
            href="/help"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to help
          </Link>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>Was this helpful?</span>
            <button type="button" className="px-3 h-7 rounded-full border border-border hover:border-gold/30 hover:text-gold transition-colors">
              Yes
            </button>
            <button type="button" className="px-3 h-7 rounded-full border border-border hover:border-gold/30 hover:text-gold transition-colors">
              No
            </button>
          </div>
        </div>
      </div>

      {/* Related */}
      {article.related && article.related.length > 0 && (
        <section className="py-14 px-5 md:px-8 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-foreground tracking-tight mb-6">
              Related articles
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {article.related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/help/${r.categorySlug}/${r.slug}`}
                  className="group block rounded-xl border border-border lux-card p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                      {r.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-gold shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA
        title="Still have questions?"
        subtitle="Every email to our support team is answered by a human, usually within a few hours."
        primary={{ label: 'Contact support', href: '/contact' }}
        secondary={{ label: 'Back to help center', href: '/help' }}
      />
    </article>
  )
}
