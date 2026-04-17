import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { AUTHORS, getAuthorBySlug, authorPostsByName } from '@/lib/authors'
import { formatDate } from '@/lib/blog-posts'
import { ArrowUpRight, Link as LinkIcon } from 'lucide-react'

function SocialIcon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d={d} />
    </svg>
  )
}

const SOCIAL_D = {
  twitter:
    'M18.244 2H21l-6.52 7.44L22 22h-6.79l-5.31-6.77L3.74 22H1l6.98-7.97L1 2h6.92l4.79 6.24L18.244 2Zm-1.18 18h1.72L7.02 4h-1.8l11.844 16Z',
  github:
    'M12 .5A11.5 11.5 0 0 0 .5 12c0 5.09 3.3 9.4 7.86 10.92.58.1.78-.26.78-.56v-2.2c-3.2.7-3.88-1.38-3.88-1.38-.52-1.32-1.28-1.68-1.28-1.68-1.04-.7.08-.68.08-.68 1.16.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.26 3.4.98.1-.76.4-1.26.74-1.56-2.56-.3-5.26-1.28-5.26-5.68 0-1.26.44-2.28 1.18-3.08-.12-.28-.5-1.46.1-3.04 0 0 .96-.3 3.16 1.18a10.95 10.95 0 0 1 5.74 0c2.2-1.48 3.16-1.18 3.16-1.18.6 1.58.22 2.76.1 3.04.74.8 1.18 1.82 1.18 3.08 0 4.42-2.7 5.38-5.28 5.66.42.36.78 1.04.78 2.1v3.12c0 .3.2.66.8.56A11.5 11.5 0 0 0 12 .5Z',
  linkedin:
    'M20.447 20.452H16.9v-5.569c0-1.328-.023-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.362V9h3.412v1.561h.049c.477-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.113 20.452H3.558V9h3.555v11.452z',
}

export async function generateStaticParams() {
  return AUTHORS.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author) return { title: 'Author not found' }
  return {
    title: `${author.name} — Author`,
    description: author.bio,
    alternates: { canonical: `/authors/${author.slug}` },
    openGraph: {
      title: `${author.name} · Calendro`,
      description: author.bio,
      url: `/authors/${author.slug}`,
    },
  }
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author) notFound()

  const posts = authorPostsByName(author.name)
  const others = AUTHORS.filter((a) => a.slug !== author.slug).slice(0, 3)

  return (
    <article>
      <section className="px-5 md:px-8 pt-10 md:pt-14 pb-2">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Authors' }, { label: author.name }]} />
        </div>
      </section>

      <header className="px-5 md:px-8 pb-16 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-6 flex-wrap">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 flex items-center justify-center text-xl font-mono text-gold shrink-0">
              {author.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-2">
                {author.role}
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-tight">
                {author.name}
              </h1>
              <p className="mt-5 text-[15px] leading-[1.78] text-foreground/85 font-light">
                {author.bio}
              </p>
              {author.social && (
                <div className="mt-6 flex gap-2">
                  {author.social.twitter && (
                    <a
                      href={`https://twitter.com/${author.social.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-gold hover:border-gold/30 transition-colors"
                    >
                      <SocialIcon d={SOCIAL_D.twitter} />
                    </a>
                  )}
                  {author.social.github && (
                    <a
                      href={`https://github.com/${author.social.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-gold hover:border-gold/30 transition-colors"
                    >
                      <SocialIcon d={SOCIAL_D.github} />
                    </a>
                  )}
                  {author.social.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${author.social.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-gold hover:border-gold/30 transition-colors"
                    >
                      <SocialIcon d={SOCIAL_D.linkedin} />
                    </a>
                  )}
                  {author.social.site && (
                    <a
                      href={`https://${author.social.site}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Personal site"
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-gold hover:border-gold/30 transition-colors"
                    >
                      <LinkIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Posts by author */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
              Posts by {author.name.split(' ')[0]}
            </h2>
          </Reveal>
          {posts.length === 0 ? (
            <div className="rounded-xl border border-border lux-card p-8 text-center">
              <p className="text-muted-foreground">No posts from this author yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {posts.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 2) * 80}>
                  <Link
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
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.excerpt}</p>
                    <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground">{formatDate(p.date)}</span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground/60 group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Other authors */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight mb-6">
            Other writers
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/authors/${o.slug}`}
                className="group block rounded-xl border border-border lux-card p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 flex items-center justify-center text-xs font-mono text-gold">
                    {o.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                      {o.name}
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">{o.role}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Read everything on one page."
        subtitle="The Calendro blog has essays on time, attention, AI, and quiet software."
        primary={{ label: 'All posts', href: '/blog' }}
        secondary={{ label: 'Subscribe via RSS', href: '/feed.xml' }}
      />
    </article>
  )
}
