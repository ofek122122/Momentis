import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BLOG_POSTS, formatDate } from '@/lib/blog-posts'
import { ArrowUpRight } from 'lucide-react'

// Map URL slugs to canonical category labels
const CATEGORY_MAP: Record<string, string> = {
  productivity: 'Productivity',
  ai: 'AI',
  design: 'Design',
  time: 'Time',
  engineering: 'Engineering',
  company: 'Company',
}

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const label = CATEGORY_MAP[slug]
  if (!label) return { title: 'Category not found' }
  const count = BLOG_POSTS.filter((p) => p.category === label).length
  return {
    title: `${label} — Blog`,
    description: `${count} essays on ${label.toLowerCase()} from the Calendro team.`,
    alternates: { canonical: `/blog/category/${slug}` },
    openGraph: {
      title: `${label} · Calendro Blog`,
      description: `${count} essays on ${label.toLowerCase()}.`,
      url: `/blog/category/${slug}`,
    },
  }
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const label = CATEGORY_MAP[slug]
  if (!label) notFound()

  const posts = BLOG_POSTS.filter((p) => p.category === label)

  return (
    <>
      <PageHero
        eyebrow={label}
        title={
          <>
            Field notes on <em className="not-italic text-gold">{label.toLowerCase()}</em>.
          </>
        }
        lede={`${posts.length} ${posts.length === 1 ? 'essay' : 'essays'} from the Calendro team. Slow reading, ideally with coffee.`}
        crumbs={[{ label: 'Blog', href: '/blog' }, { label }]}
      />

      {/* Categories nav */}
      <section className="px-5 md:px-8 py-6 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
          <Link
            href="/blog"
            className="shrink-0 px-3 h-8 inline-flex items-center rounded-full text-xs border border-border hover:border-gold/30 hover:text-gold transition-colors text-muted-foreground"
          >
            All
          </Link>
          {Object.entries(CATEGORY_MAP).map(([s, l]) => (
            <Link
              key={s}
              href={`/blog/category/${s}`}
              className={`shrink-0 px-3 h-8 inline-flex items-center rounded-full text-xs transition-colors ${
                s === slug
                  ? 'bg-gold text-[#0c0c0f] border border-gold'
                  : 'border border-border hover:border-gold/30 hover:text-gold text-muted-foreground'
              }`}
            >
              {l}
            </Link>
          ))}
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No essays in this category yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 80}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block rounded-2xl border border-border lux-card p-6 h-full flex flex-col"
                  >
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
                      <span className="text-gold/80">{post.category}</span>
                      <span className="text-muted-foreground/40">·</span>
                      <span>{post.readingMinutes} min</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground leading-snug tracking-tight group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 flex items-center justify-center text-[9px] font-mono text-gold">
                          {post.author.initials}
                        </div>
                        <span className="text-foreground/80">{post.author.name}</span>
                      </div>
                      <span className="font-mono text-muted-foreground">{formatDate(post.date)}</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA
        title="More field notes?"
        subtitle="One email a fortnight. No SEO filler. Unsubscribe in one click."
        primary={{ label: 'Subscribe via RSS', href: '/feed.xml' }}
        secondary={{ label: 'All posts', href: '/blog' }}
      />
    </>
  )
}
