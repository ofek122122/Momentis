import type { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://calendro.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/calendar', '/settings', '/analytics', '/login', '/onboarding'],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  }
}
