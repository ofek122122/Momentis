import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BLOG_POSTS, formatDate } from '@/lib/blog-posts'
import { ItemListJsonLd } from '@/components/marketing/StructuredData'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Ideas on time, AI, and calm software',
  description: 'Essays from the team at Calendro on productivity, AI, design, and the quiet hours. Slow, thoughtful reading for people who think about their time.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Calendro Blog',
    description: 'Essays on time, AI, and calm software.',
    url: '/blog',
    type: 'website',
  },
}

const CATEGORY_SLUGS: Record<string, string> = {
  Productivity: 'productivity',
  AI: 'ai',
  Design: 'design',
  Time: 'time',
  Engineering: 'engineering',
  Company: 'company',
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS
  const categories = Array.from(new Set(BLOG_POSTS.map((p) => p.category)))

  return (
    <>
      <ItemListJsonLd
        name="Calendro field notes"
        items={BLOG_POSTS.map((p) => ({ url: `/blog/${p.slug}`, name: p.title }))}
      />
      <PageHero
        eyebrow="Calendro field notes"
        title={
          <>
            Slow essays on <em className="not-italic text-gold">time</em>, AI, and
            the software we wish existed.
          </>
        }
        lede="One piece a fortnight. No listicles. No SEO filler. Just things worth reading with coffee."
        crumbs={[{ label: 'Blog' }]}
      />

      {/* Category nav */}
      <section className="px-5 md:px-8 py-6 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 shrink-0 mr-2">
            Browse:
          </span>
          <span className="shrink-0 px-3 h-8 inline-flex items-center rounded-full text-xs border border-gold bg-gold text-[#0c0c0f]">
            All
          </span>
          {categories.map((c) => (
            <Link
              key={c}
              href={`/blog/category/${CATEGORY_SLUGS[c] ?? c.toLowerCase()}`}
              className="shrink-0 px-3 h-8 inline-flex items-center rounded-full text-xs border border-border hover:border-gold/30 hover:text-gold transition-colors text-muted-foreground"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured post */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="block group rounded-2xl border border-border lux-card p-8 md:p-12 relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(197,163,92,0.08) 0%, transparent 70%)' }}
              />
              <div className="relative flex items-center gap-3 mb-5 text-[11px] font-mono uppercase tracking-[0.2em]">
                <span className="px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">Featured</span>
                <span className="text-muted-foreground">{featured.category}</span>
                <span className="text-muted-foreground/50">·</span>
                <span className="text-muted-foreground">{featured.readingMinutes} min read</span>
              </div>
              <h2 className="relative font-display text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight group-hover:text-gold transition-colors duration-500 max-w-3xl">
                {featured.title}
              </h2>
              <p className="relative mt-5 text-muted-foreground text-[15px] leading-relaxed max-w-2xl">
                {featured.excerpt}
              </p>
              <div className="relative mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 flex items-center justify-center text-xs font-mono text-gold">
                    {featured.author.initials}
                  </div>
                  <div>
                    <div className="text-sm text-foreground">{featured.author.name}</div>
                    <div className="text-xs font-mono text-muted-foreground">{formatDate(featured.date)}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Grid of posts */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post, i) => (
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
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
            Subscribe
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            One email a fortnight.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            New essays, quietly delivered. No tricks, no upsell, no sponsored links. Unsubscribe in one click.
          </p>
          <form className="mt-8 flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="you@work.com"
              className="flex-1 h-11 px-4 rounded-lg bg-white/5 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:border-gold/40 focus:outline-none"
              aria-label="Email"
            />
            <button
              type="submit"
              className="h-11 px-5 rounded-lg bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-5 text-xs font-mono text-muted-foreground/70">
            Prefer an RSS reader? <a href="/feed.xml" className="text-gold hover:underline">/feed.xml</a>
          </p>
        </div>
      </section>

      <CTA />
    </>
  )
}
