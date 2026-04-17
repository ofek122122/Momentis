import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { COMPETITORS } from '@/lib/competitors'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://calendro.app'

const STATIC_PATHS: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/features', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/demo', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/compare', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/integrations', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/enterprise', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/startups', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/education', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/customers', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/use-cases', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/templates', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
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
  { path: '/status', priority: 0.5, changeFrequency: 'daily' },
  { path: '/press', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/affiliates', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/investors', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/accessibility', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
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
  ]
}
