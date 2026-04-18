import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ItemListJsonLd } from '@/components/marketing/StructuredData'
import { AUTHORS, authorPostsByName } from '@/lib/authors'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Authors — Who writes the Momenties blog',
  description: 'Meet the people who write for the Momenties blog — founders, engineers, product leads, and the occasional thoughtful guest.',
  alternates: { canonical: '/authors' },
  openGraph: {
    title: 'Momenties Authors',
    description: 'The people who write for the Momenties blog.',
    url: '/authors',
  },
}

export default function AuthorsPage() {
  const decorated = AUTHORS.map((a) => ({
    ...a,
    postCount: authorPostsByName(a.name).length,
  }))

  return (
    <>
      <ItemListJsonLd
        name="Momenties authors"
        items={AUTHORS.map((a) => ({ url: `/authors/${a.slug}`, name: a.name }))}
      />
      <PageHero
        eyebrow="Authors"
        title={
          <>
            The people <em className="not-italic text-gold">behind the words</em>.
          </>
        }
        lede="Our blog is written by the team that builds Momenties, with the occasional thoughtful guest. Each byline links here."
        crumbs={[{ label: 'Authors' }]}
      />

      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {decorated.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 2) * 80}>
              <Link
                href={`/authors/${a.slug}`}
                className="group block rounded-2xl border border-border lux-card p-6 h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 flex items-center justify-center text-sm font-mono text-gold shrink-0">
                    {a.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                        {a.name}
                      </h2>
                      {a.postCount > 0 && (
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 px-2 py-0.5 rounded-full border border-gold/20">
                          {a.postCount} {a.postCount === 1 ? 'post' : 'posts'}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-muted-foreground mb-3">{a.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.bio}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/60 group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA
        title="Write for the Momenties blog."
        subtitle="If you're thinking carefully about time, attention, or calm software, we'd love to publish you."
        primary={{ label: 'Pitch an essay', href: 'mailto:press@momenties.app' }}
        secondary={{ label: 'All posts', href: '/blog' }}
      />
    </>
  )
}
