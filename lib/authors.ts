import { BLOG_POSTS } from './blog-posts'

export type Author = {
  slug: string
  name: string
  role: string
  initials: string
  bio: string
  social?: { twitter?: string; linkedin?: string; github?: string; site?: string }
}

export const AUTHORS: Author[] = [
  {
    slug: 'iris-kwon',
    name: 'Iris Kwon',
    role: 'Co-founder & Design',
    initials: 'IK',
    bio:
      'Previously at Stripe and Superhuman. At Momenties, Iris leads design, brand, and the writing that shapes how we talk about the product. She believes in silence, typography, and the soft exhale of well-made software.',
    social: { twitter: 'iriskwon', linkedin: 'iriskwon', site: 'iriskwon.com' },
  },
  {
    slug: 'oren-marlow',
    name: 'Oren Marlow',
    role: 'Co-founder & CTO',
    initials: 'OM',
    bio:
      'Built calendaring infrastructure at Google for six years before co-founding Momenties. Writes C like it\'s poetry. Lives somewhere between a compiler and a kitchen table.',
    social: { github: 'orenmarlow', linkedin: 'orenmarlow' },
  },
  {
    slug: 'rafa-vieira',
    name: 'Rafa Vieira',
    role: 'Founding AI Engineer',
    initials: 'RV',
    bio:
      'ML research at Anthropic and DeepMind. Speaks six languages and argues in Rust. At Momenties, Rafa owns the parser stack — the thing that turns your words into events.',
    social: { github: 'rafavieira', twitter: 'rafavieira' },
  },
  {
    slug: 'lena-osei',
    name: 'Lena Osei',
    role: 'Head of Product',
    initials: 'LO',
    bio:
      'Shipped calm-software at Linear and Notion. Bakes sourdough on weekends and writes product memos that people actually read. At Momenties, Lena leads product, research, and the internal fight against feature bloat.',
    social: { twitter: 'lenaosei' },
  },
  {
    slug: 'sam-halverson',
    name: 'Sam Halverson',
    role: 'Founding Engineer',
    initials: 'SH',
    bio:
      'Early Vercel. Will spend three weeks to save users three seconds. At Momenties, Sam owns the parts of calendar engineering that most people don\'t know exist — timezones, CalDAV, recurrence.',
    social: { github: 'samhalverson' },
  },
  {
    slug: 'daniel-reyes',
    name: 'Daniel Reyes',
    role: 'Guest contributor · VC partner',
    initials: 'DR',
    bio:
      'Partner at Meridian VC and a Momenties user. Writes occasionally when he has something to say about time, attention, and why meetings almost always run 15 minutes too long.',
  },
]

export function getAuthorBySlug(slug: string) {
  return AUTHORS.find((a) => a.slug === slug) ?? null
}

export function authorPostsByName(name: string) {
  return BLOG_POSTS.filter((p) => p.author.name === name)
}

export function authorSlugForName(name: string): string | null {
  return AUTHORS.find((a) => a.name === name)?.slug ?? null
}
