import { BLOG_POSTS } from './blog-posts'
import { CUSTOMER_STORIES } from './customers'
import { COMPETITORS } from './competitors'
import { INTEGRATIONS as DETAILED_INTEGRATIONS } from './integrations'
import { JOBS } from './jobs'
import { HELP_ARTICLES } from './help-articles'
import { AUTHORS } from './authors'
import { allEntries as allReleases } from './changelog'

export type SearchRecord = {
  title: string
  description: string
  url: string
  type:
    | 'page'
    | 'blog'
    | 'customer'
    | 'compare'
    | 'integration'
    | 'job'
    | 'help'
    | 'author'
    | 'release'
}

const STATIC_PAGES: SearchRecord[] = [
  { title: 'Home', description: 'Just say it. It\'s scheduled.', url: '/', type: 'page' },
  { title: 'Features', description: 'Everything Momenties does, honestly described.', url: '/features', type: 'page' },
  { title: 'Pricing', description: 'Simple, transparent plans.', url: '/pricing', type: 'page' },
  { title: 'Demo', description: 'Try the AI parser in your browser.', url: '/demo', type: 'page' },
  { title: 'AI in Momenties', description: 'How we use AI and how we protect you.', url: '/ai', type: 'page' },
  { title: 'Integrations', description: 'Google, Apple, Outlook, Slack, Zoom, Notion, and more.', url: '/integrations', type: 'page' },
  { title: 'Enterprise', description: 'SSO, audit logs, dedicated support.', url: '/enterprise', type: 'page' },
  { title: 'For startups', description: '10 seats free for a year.', url: '/startups', type: 'page' },
  { title: 'For students', description: 'Free Pro with a .edu email.', url: '/education', type: 'page' },
  { title: 'Templates', description: 'Ready-made weekly rhythms.', url: '/templates', type: 'page' },
  { title: 'Downloads', description: 'Web, desktop, mobile, CLI.', url: '/downloads', type: 'page' },
  { title: 'Compare', description: 'Side-by-side with the alternatives.', url: '/compare', type: 'page' },
  { title: 'About', description: 'Our story and mission.', url: '/about', type: 'page' },
  { title: 'Manifesto', description: 'Eight theses we live by.', url: '/manifesto', type: 'page' },
  { title: 'Customers', description: 'Stories from people who use Momenties.', url: '/customers', type: 'page' },
  { title: 'Careers', description: 'Open roles at Momenties.', url: '/careers', type: 'page' },
  { title: 'Press', description: 'Logos, coverage, and media kit.', url: '/press', type: 'page' },
  { title: 'Brand', description: 'Our visual and verbal brand system.', url: '/brand', type: 'page' },
  { title: 'Investors', description: 'Our cap table.', url: '/investors', type: 'page' },
  { title: 'Contact', description: 'Get in touch — answered by humans.', url: '/contact', type: 'page' },
  { title: 'Partners', description: 'Agencies, accelerators, and creators.', url: '/partners', type: 'page' },
  { title: 'Affiliates', description: 'Earn 30% recurring for 12 months.', url: '/affiliates', type: 'page' },
  { title: 'Blog', description: 'Slow essays on time, AI, and calm software.', url: '/blog', type: 'page' },
  { title: 'Authors', description: 'The people behind the words.', url: '/authors', type: 'page' },
  { title: 'Use cases', description: 'For founders, students, parents, and more.', url: '/use-cases', type: 'page' },
  { title: 'Help Center', description: 'Guides and FAQs.', url: '/help', type: 'page' },
  { title: 'API Docs', description: 'Build on Momenties.', url: '/api-docs', type: 'page' },
  { title: 'Community', description: 'Discord, office hours, meetups.', url: '/community', type: 'page' },
  { title: 'Webinars', description: 'Live sessions with the team.', url: '/webinars', type: 'page' },
  { title: 'Glossary', description: 'Calendar terminology, defined.', url: '/glossary', type: 'page' },
  { title: 'Changelog', description: 'What we shipped.', url: '/changelog', type: 'page' },
  { title: 'Roadmap', description: 'What we\'re building next.', url: '/roadmap', type: 'page' },
  { title: 'Status', description: 'Live system health.', url: '/status', type: 'page' },
  { title: 'Security', description: 'How we protect your data.', url: '/security', type: 'page' },
  { title: 'Trust center', description: 'Compliance and subprocessors.', url: '/trust', type: 'page' },
  { title: 'Subprocessors', description: 'Every third-party that handles your data.', url: '/subprocessors', type: 'page' },
  { title: 'Accessibility', description: 'WCAG 2.2 AA statement.', url: '/accessibility', type: 'page' },
  { title: 'Privacy policy', description: 'What we collect and why.', url: '/privacy', type: 'page' },
  { title: 'Cookies policy', description: 'The few cookies we set.', url: '/cookies', type: 'page' },
  { title: 'Terms of service', description: 'The legal relationship.', url: '/terms', type: 'page' },
  { title: 'Sitemap', description: 'Every page on Momenties.app.', url: '/sitemap', type: 'page' },
]

export function buildSearchIndex(): SearchRecord[] {
  return [
    ...STATIC_PAGES,
    ...BLOG_POSTS.map((p) => ({
      title: p.title,
      description: p.excerpt,
      url: `/blog/${p.slug}`,
      type: 'blog' as const,
    })),
    ...CUSTOMER_STORIES.map((c) => ({
      title: `${c.company} — customer story`,
      description: c.tagline,
      url: `/customers/${c.slug}`,
      type: 'customer' as const,
    })),
    ...COMPETITORS.map((c) => ({
      title: `Momenties vs. ${c.short}`,
      description: c.tagline,
      url: `/compare/${c.slug}`,
      type: 'compare' as const,
    })),
    ...DETAILED_INTEGRATIONS.map((i) => ({
      title: `${i.name} integration`,
      description: i.tagline,
      url: `/integrations/${i.slug}`,
      type: 'integration' as const,
    })),
    ...JOBS.map((j) => ({
      title: j.title,
      description: j.summary,
      url: `/careers/${j.slug}`,
      type: 'job' as const,
    })),
    ...HELP_ARTICLES.map((a) => ({
      title: a.title,
      description: a.excerpt,
      url: `/help/${a.categorySlug}/${a.slug}`,
      type: 'help' as const,
    })),
    ...AUTHORS.map((a) => ({
      title: a.name,
      description: a.role,
      url: `/authors/${a.slug}`,
      type: 'author' as const,
    })),
    ...allReleases().map((r) => ({
      title: `v${r.version} — ${r.title}`,
      description: r.summary,
      url: `/changelog/${r.version}`,
      type: 'release' as const,
    })),
  ]
}
