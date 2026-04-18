import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { CUSTOMER_STORIES } from '@/lib/customers'
import { COMPETITORS } from '@/lib/competitors'
import { INTEGRATIONS as DETAILED_INTEGRATIONS } from '@/lib/integrations'
import { JOBS } from '@/lib/jobs'
import { HELP_ARTICLES } from '@/lib/help-articles'

export const metadata: Metadata = {
  title: 'Sitemap — Everything on Calendro.app',
  description: 'A complete, human-friendly index of every page on Calendro.app. For people who like knowing what\'s behind every door.',
  alternates: { canonical: '/sitemap' },
  openGraph: {
    title: 'Calendro Sitemap',
    description: 'Every page on the site, organized and linked.',
    url: '/sitemap',
  },
}

type Section = { title: string; links: { href: string; label: string; note?: string }[] }

const SECTIONS: Section[] = [
  {
    title: 'Product',
    links: [
      { href: '/', label: 'Home' },
      { href: '/features', label: 'Features' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/pricing/calculator', label: 'Pricing calculator', note: 'Live ROI' },
      { href: '/switch', label: 'Switch to Calendro', note: 'Concierge migration' },
      { href: '/demo', label: 'Live demo' },
      { href: '/templates', label: 'Templates' },
      { href: '/downloads', label: 'Downloads' },
      { href: '/integrations', label: 'Integrations' },
      { href: '/enterprise', label: 'Enterprise' },
      { href: '/compare', label: 'Compare' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { href: '/startups', label: 'For startups' },
      { href: '/education', label: 'For students' },
      { href: '/affiliates', label: 'Affiliate program' },
      { href: '/partners', label: 'Partner program' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/manifesto', label: 'Manifesto' },
      { href: '/method', label: 'Method', note: 'How we work' },
      { href: '/uses', label: 'Uses', note: 'What we work with' },
      { href: '/customers', label: 'Customer stories' },
      { href: '/wall-of-love', label: 'Wall of love', note: '(updated weekly)' },
      { href: '/careers', label: 'Careers' },
      { href: '/press', label: 'Press kit' },
      { href: '/investors', label: 'Investors' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/use-cases', label: 'Use cases' },
      { href: '/help', label: 'Help center' },
      { href: '/learn', label: 'Learn', note: 'An hour to power user' },
      { href: '/api-docs', label: 'API docs' },
      { href: '/community', label: 'Community' },
      { href: '/changelog', label: 'Changelog' },
      { href: '/launch-week-1', label: 'Launch Week 01', note: 'Five days, five upgrades' },
      { href: '/roadmap', label: 'Roadmap' },
      { href: '/labs', label: 'Labs', note: 'Active experiments' },
      { href: '/webinars', label: 'Webinars' },
      { href: '/podcast', label: 'Podcast', note: 'The Quiet Hours' },
      { href: '/glossary', label: 'Glossary' },
      { href: '/status', label: 'System status' },
      { href: '/feed.xml', label: 'RSS feed', note: '(XML)' },
    ],
  },
  {
    title: 'Trust & legal',
    links: [
      { href: '/security', label: 'Security' },
      { href: '/trust', label: 'Trust center' },
      { href: '/subprocessors', label: 'Subprocessors' },
      { href: '/accessibility', label: 'Accessibility statement' },
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/cookies', label: 'Cookie policy' },
      { href: '/terms', label: 'Terms of service' },
    ],
  },
]

const DYNAMIC_SECTIONS: Section[] = [
  {
    title: 'Blog posts',
    links: BLOG_POSTS.map((p) => ({ href: `/blog/${p.slug}`, label: p.title, note: p.category })),
  },
  {
    title: 'Customer stories',
    links: CUSTOMER_STORIES.map((c) => ({ href: `/customers/${c.slug}`, label: c.company, note: c.industry })),
  },
  {
    title: 'Comparisons',
    links: COMPETITORS.map((c) => ({ href: `/compare/${c.slug}`, label: `Calendro vs. ${c.short}` })),
  },
  {
    title: 'Integration guides',
    links: DETAILED_INTEGRATIONS.map((i) => ({ href: `/integrations/${i.slug}`, label: i.name, note: i.category })),
  },
  {
    title: 'Open roles',
    links: JOBS.map((j) => ({ href: `/careers/${j.slug}`, label: j.title, note: j.team })),
  },
  {
    title: 'Help articles',
    links: HELP_ARTICLES.map((a) => ({ href: `/help/${a.categorySlug}/${a.slug}`, label: a.title, note: a.category })),
  },
]

export default function SitemapPage() {
  const totalDynamic = DYNAMIC_SECTIONS.reduce((n, s) => n + s.links.length, 0)
  const totalStatic = SECTIONS.reduce((n, s) => n + s.links.length, 0)

  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title={
          <>
            Every door, <em className="not-italic text-gold">labelled</em>.
          </>
        }
        lede={`A complete, human-friendly index of everything on Calendro.app — ${totalStatic + totalDynamic} pages in total. Also available as XML at /sitemap.xml.`}
        crumbs={[{ label: 'Sitemap' }]}
      />

      {/* Static sections */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 60}>
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground tracking-tight mb-4">
                  {s.title}
                </h2>
                <ul className="space-y-2">
                  {s.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-2"
                      >
                        {l.label}
                        {l.note && (
                          <span className="font-mono text-[10px] text-muted-foreground/50">{l.note}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Dynamic sections */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto space-y-14">
          {DYNAMIC_SECTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 40}>
              <div>
                <div className="flex items-baseline justify-between mb-6 gap-4 flex-wrap">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                    {s.title}
                  </h2>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {s.links.length} {s.links.length === 1 ? 'entry' : 'entries'}
                  </span>
                </div>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                  {s.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="group flex items-start justify-between gap-4 py-2 border-b border-border/50 last:border-b-0 hover:border-gold/30 transition-colors"
                      >
                        <span className="text-sm text-foreground/85 group-hover:text-gold transition-colors">
                          {l.label}
                        </span>
                        {l.note && (
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                            {l.note}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA
        title="Found a missing page?"
        subtitle="This list is generated from our real route tree. If something's here but broken — or missing entirely — please tell us."
        primary={{ label: 'Contact us', href: '/contact' }}
        secondary={{ label: 'Back to home', href: '/' }}
      />
    </>
  )
}
