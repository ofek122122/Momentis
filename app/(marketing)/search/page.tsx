import type { Metadata } from 'next'
import { PageHero } from '@/components/marketing/PageHero'
import { SiteSearch } from '@/components/marketing/SiteSearch'
import { buildSearchIndex } from '@/lib/search-index'

export const metadata: Metadata = {
  title: 'Search — Find anything on Momenties.app',
  description: 'Search across every page, blog post, integration, customer story, help article, and more. Filter by type.',
  alternates: { canonical: '/search' },
  openGraph: {
    title: 'Search Momenties',
    description: 'Find anything across the site.',
    url: '/search',
  },
}

export default function SearchPage() {
  const records = buildSearchIndex()
  return (
    <>
      <PageHero
        eyebrow="Search"
        title={
          <>
            Find <em className="not-italic text-gold">anything</em>.
          </>
        }
        lede="Type a word. We search every page, essay, integration, customer story, help article, and release note."
        crumbs={[{ label: 'Search' }]}
      />

      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <SiteSearch records={records} />
        </div>
      </section>
    </>
  )
}
