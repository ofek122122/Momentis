import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Share2 } from 'lucide-react'
import { BLOG_POSTS, getPostBySlug, formatDate } from '@/lib/blog-posts'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { BlogPostingJsonLd, BreadcrumbJsonLd } from '@/components/marketing/StructuredData'
import { CTA } from '@/components/marketing/CTA'

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Post not found' }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

function renderParagraph(text: string, i: number) {
  // Simple markdown-ish: **bold**, *italic*
  const nodes: React.ReactNode[] = []
  let remaining = text
  let key = 0
  while (remaining.length) {
    const boldMatch = /\*\*(.+?)\*\*/.exec(remaining)
    const italicMatch = /\*(.+?)\*/.exec(remaining)
    const match =
      boldMatch && (!italicMatch || boldMatch.index <= italicMatch.index)
        ? { m: boldMatch, type: 'bold' as const }
        : italicMatch
          ? { m: italicMatch, type: 'italic' as const }
          : null
    if (!match) {
      nodes.push(remaining)
      break
    }
    if (match.m.index > 0) nodes.push(remaining.slice(0, match.m.index))
    if (match.type === 'bold') {
      nodes.push(
        <strong key={key++} className="text-foreground font-semibold">
          {match.m[1]}
        </strong>
      )
    } else {
      nodes.push(
        <em key={key++} className="text-foreground italic">
          {match.m[1]}
        </em>
      )
    }
    remaining = remaining.slice(match.m.index + match.m[0].length)
  }
  return <p key={i}>{nodes}</p>
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <article>
      <BlogPostingJsonLd
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        date={post.date}
        author={post.author.name}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />
      <section className="px-5 md:px-8 pt-10 md:pt-14 pb-2">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
        </div>
      </section>

      {/* Header */}
      <header className="px-5 md:px-8 pb-12 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] mb-6">
            <span className="px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">
              {post.category}
            </span>
            <span className="text-muted-foreground">{post.readingMinutes} min read</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
            {post.title}
          </h1>
          <p className="mt-5 font-display italic text-xl md:text-2xl text-muted-foreground leading-snug max-w-2xl">
            {post.subtitle}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 flex items-center justify-center text-sm font-mono text-gold">
              {post.author.initials}
            </div>
            <div>
              <div className="text-sm text-foreground font-medium">{post.author.name}</div>
              <div className="text-xs font-mono text-muted-foreground">
                {post.author.role} · {formatDate(post.date)}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="px-5 md:px-8 py-16 md:py-20 border-b border-border">
        <div className="max-w-2xl mx-auto prose-style space-y-6 text-[17px] leading-[1.78] text-foreground/85 font-light">
          {post.body.map((p, i) => renderParagraph(p, i))}
        </div>
        <div className="max-w-2xl mx-auto mt-16 flex items-center justify-between pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Share2 className="h-4 w-4" /> Share
          </button>
        </div>
      </div>

      {/* More posts */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-tight mb-8">
            Keep reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block rounded-xl border border-border lux-card p-6 h-full"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  <span className="text-gold/80">{p.category}</span>
                  <span className="text-muted-foreground/40">·</span>
                  <span>{p.readingMinutes} min</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground leading-snug group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground font-mono">
                  <span>{formatDate(p.date)}</span>
                  <ArrowUpRight className="h-4 w-4 text-gold/70 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </article>
  )
}
