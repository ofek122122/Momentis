import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { COMPETITORS } from '@/lib/competitors'
import { HELP_ARTICLES } from '@/lib/help-articles'
import { CUSTOMER_STORIES } from '@/lib/customers'
import { JOBS } from '@/lib/jobs'
import { INTEGRATIONS as DETAILED_INTEGRATIONS } from '@/lib/integrations'
import { allEntries as allReleases } from '@/lib/changelog'
import { AUTHORS } from '@/lib/authors'
import { USE_CASES } from '@/lib/use-cases'
import { ENDPOINTS as API_ENDPOINTS } from '@/lib/api-endpoints'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://calendro.app'

const STATIC_PATHS: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/features', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/demo', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/ai', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/compare', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/integrations', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/enterprise', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/startups', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/education', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/customers', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/trust', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/use-cases', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/templates', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/manifesto', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/careers', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/security', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/changelog', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/roadmap', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/help', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/downloads', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/api-docs', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/community', priority: 0.5, changeFrequency: 'weekly' },
  { path: '/webinars', priority: 0.5, changeFrequency: 'weekly' },
  { path: '/glossary', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/sitemap', priority: 0.3, changeFrequency: 'monthly' },
  { path: '/status', priority: 0.5, changeFrequency: 'daily' },
  { path: '/press', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/brand', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/affiliates', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/partners', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/investors', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/open', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/authors', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/search', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/accessibility', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/subprocessors', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cookies', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    ...STATIC_PATHS.map((p) => ({
      url: `${BASE}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...COMPETITORS.map((c) => ({
      url: `${BASE}/compare/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...HELP_ARTICLES.map((a) => ({
      url: `${BASE}/help/${a.categorySlug}/${a.slug}`,
      lastModified: new Date(a.updated),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    ...CUSTOMER_STORIES.map((c) => ({
      url: `${BASE}/customers/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...JOBS.map((j) => ({
      url: `${BASE}/careers/${j.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...DETAILED_INTEGRATIONS.map((i) => ({
      url: `${BASE}/integrations/${i.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...allReleases().map((e) => ({
      url: `${BASE}/changelog/${e.version}`,
      lastModified: new Date(e.date),
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    })),
    ...['productivity', 'ai', 'design', 'time', 'engineering', 'company'].map((cat) => ({
      url: `${BASE}/blog/category/${cat}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })),
    ...AUTHORS.map((a) => ({
      url: `${BASE}/authors/${a.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
    ...USE_CASES.map((u) => ({
      url: `${BASE}/use-cases/${u.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...API_ENDPOINTS.map((e) => ({
      url: `${BASE}/api-docs/${e.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ]
}
