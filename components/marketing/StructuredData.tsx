const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://calendro.app'

type Thing = Record<string, unknown>

function serialize(data: Thing | Thing[]) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Calendro',
    url: BASE,
    logo: `${BASE}/logo.png`,
    sameAs: [
      'https://twitter.com/calendroapp',
      'https://github.com/calendro',
      'https://linkedin.com/company/calendro',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@calendro.app',
      contactType: 'customer support',
      availableLanguage: ['en'],
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(data) }} />
}

export function WebsiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Calendro',
    url: BASE,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE}/help?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(data) }} />
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE}${item.url}`,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(data) }} />
}

export function BlogPostingJsonLd({
  title,
  description,
  slug,
  date,
  author,
}: {
  title: string
  description: string
  slug: string
  date: string
  author: string
}) {
  const url = `${BASE}/blog/${slug}`
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    datePublished: date,
    dateModified: date,
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'Organization',
      name: 'Calendro',
      logo: { '@type': 'ImageObject', url: `${BASE}/logo.png` },
    },
    image: `${BASE}/blog/${slug}/opengraph-image`,
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(data) }} />
}

export function FAQPageJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(data) }} />
}

export function SoftwareApplicationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Calendro',
    operatingSystem: 'Web, iOS, Android, macOS, Windows',
    applicationCategory: 'ProductivityApplication',
    offers: [
      { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Free' },
      { '@type': 'Offer', price: '8', priceCurrency: 'USD', name: 'Pro', priceSpecification: { '@type': 'UnitPriceSpecification', price: 8, priceCurrency: 'USD', unitText: 'MONTH' } },
      { '@type': 'Offer', price: '12', priceCurrency: 'USD', name: 'Team', priceSpecification: { '@type': 'UnitPriceSpecification', price: 12, priceCurrency: 'USD', unitText: 'MONTH' } },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '4200',
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(data) }} />
}

export function JobPostingJsonLd({
  title,
  description,
  slug,
  salary,
  location,
}: {
  title: string
  description: string
  slug: string
  salary: string
  location: string
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title,
    description,
    datePosted: new Date().toISOString().slice(0, 10),
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Calendro',
      sameAs: BASE,
      logo: `${BASE}/logo.png`,
    },
    jobLocationType: 'TELECOMMUTE',
    applicantLocationRequirements: { '@type': 'Country', name: location },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: { '@type': 'QuantitativeValue', unitText: 'YEAR', value: salary },
    },
    url: `${BASE}/careers/${slug}`,
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(data) }} />
}
