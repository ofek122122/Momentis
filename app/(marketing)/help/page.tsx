import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { HelpSearch } from '@/components/marketing/HelpSearch'
import { HELP_ARTICLES } from '@/lib/help-articles'
import { Rocket, Link as LinkIcon, Sparkles, CreditCard, Wrench, ArrowUpRight, BookOpen } from 'lucide-react'

function resolveArticleHref(categorySlug: string, title: string): string {
  const match = HELP_ARTICLES.find(
    (a) => a.categorySlug === categorySlug && a.title === title
  )
  return match ? `/help/${match.categorySlug}/${match.slug}` : '#'
}

export const metadata: Metadata = {
  title: 'Help Center — Guides & FAQ',
  description: 'Everything you need to get the most out of Calendro. Searchable guides, clear answers, zero jargon.',
  alternates: { canonical: '/help' },
  openGraph: {
    title: 'Calendro Help Center',
    description: 'Guides and answers — zero jargon.',
    url: '/help',
  },
}

export type HelpCategory = {
  slug: string
  label: string
  desc: string
  Icon: typeof Rocket
  articles: { title: string; excerpt: string }[]
}

export const CATEGORIES: HelpCategory[] = [
  {
    slug: 'getting-started',
    label: 'Getting Started',
    desc: 'Your first 10 minutes with Calendro.',
    Icon: Rocket,
    articles: [
      { title: 'Creating your first event', excerpt: 'Type "coffee with mom saturday 10am" and watch it land on your calendar.' },
      { title: 'Connecting Google Calendar', excerpt: 'The 30-second OAuth flow and what Calendro does (and doesn\'t) access.' },
      { title: 'Voice input setup', excerpt: 'Browser permissions, best-practice phrasing, and troubleshooting silence.' },
      { title: 'Snapping a photo of a schedule', excerpt: 'How Gemini Vision reads your photo and what it expects.' },
      { title: 'Themes and personalization', excerpt: 'Choose among five themes and tune density, color, and timezone display.' },
    ],
  },
  {
    slug: 'calendar-sync',
    label: 'Calendar Sync',
    desc: 'Syncing Google, Apple, and beyond.',
    Icon: LinkIcon,
    articles: [
      { title: 'How Google Calendar sync works', excerpt: 'Two-way sync, refresh cadence, and how we handle conflicts.' },
      { title: 'Connecting Apple Calendar (CalDAV)', excerpt: 'App passwords, iCloud, and why Apple requires one extra step.' },
      { title: 'Managing multiple accounts', excerpt: 'Sync two Google accounts plus one Apple account in one Calendro view.' },
      { title: 'Sync errors — and fixes', excerpt: 'What to do when events stop flowing. Usually it\'s a token. Occasionally it\'s TZID.' },
      { title: 'Unsyncing / disconnecting', excerpt: 'Remove Calendro\'s access cleanly. Nothing is deleted on your calendar.' },
    ],
  },
  {
    slug: 'ai-features',
    label: 'AI Features',
    desc: 'Getting the most out of the smart parts.',
    Icon: Sparkles,
    articles: [
      { title: 'How the parser understands you', excerpt: 'chrono-node first, Gemini second — and when we use which.' },
      { title: 'Voice: saying multiple events at once', excerpt: 'A cadence trick that unlocks multi-event dictation.' },
      { title: 'Photos: getting the best OCR results', excerpt: 'Lighting, angle, and why handwritten schedules still work.' },
      { title: 'Smart time suggestions', excerpt: 'Why Calendro picks the gap it does — and how to nudge it.' },
      { title: 'Turning off AI features entirely', excerpt: 'For the parser-purists. Everything works manually too.' },
    ],
  },
  {
    slug: 'billing',
    label: 'Billing',
    desc: 'Plans, invoices, refunds.',
    Icon: CreditCard,
    articles: [
      { title: 'Understanding our plans', excerpt: 'Free vs. Pro vs. Team — what you actually get in each.' },
      { title: 'Changing or canceling a subscription', excerpt: 'One click. Same day. Pro-rated refunds where required.' },
      { title: 'Downloading invoices', excerpt: 'VAT-compliant invoices delivered automatically.' },
      { title: 'Student & non-profit discounts', excerpt: 'How to apply, what we ask for, and our response time.' },
      { title: 'Switching between plans', excerpt: 'Upgrades are instant. Downgrades apply next billing cycle.' },
    ],
  },
  {
    slug: 'troubleshooting',
    label: 'Troubleshooting',
    desc: 'When things go sideways.',
    Icon: Wrench,
    articles: [
      { title: 'Events disappeared from my calendar', excerpt: 'They\'re almost always still there. Here\'s how to find them.' },
      { title: 'Voice isn\'t working', excerpt: 'Browser, microphone, and network checks in the right order.' },
      { title: 'The parser got it wrong', excerpt: 'A short taxonomy of parsing errors and how to report them.' },
      { title: 'My timezone is off', excerpt: 'What to check in settings, in your device, and in the event itself.' },
      { title: 'I can\'t log in', excerpt: 'Auth loops, third-party cookies, and the magic refresh button.' },
    ],
  },
]

export default function HelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Help Center"
        title={
          <>
            We&apos;ve probably <em className="not-italic text-gold">answered</em> this.
          </>
        }
        lede="Search 40+ articles, or browse by category. If you can't find it, write us — we answer every email within a few hours."
        crumbs={[{ label: 'Help' }]}
      >
        <HelpSearch
          categories={CATEGORIES.map((c) => ({
            slug: c.slug,
            label: c.label,
            articles: c.articles.map((a) => {
              const match = HELP_ARTICLES.find(
                (h) => h.categorySlug === c.slug && h.title === a.title
              )
              return { ...a, slug: match?.slug }
            }),
          }))}
        />
      </PageHero>

      {/* Popular */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-4 w-4 text-gold" />
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70">
              Most read this week
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Creating your first event', href: '/help/getting-started/creating-your-first-event' },
              { title: 'Connecting Google Calendar', href: '/help/getting-started/connecting-google-calendar' },
              { title: 'How the parser understands you', href: '/help/ai-features/how-the-parser-understands-you' },
            ].map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <Link
                  href={a.href}
                  className="block rounded-xl border border-border lux-card p-5 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                      {a.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto space-y-14">
          {CATEGORIES.map((cat, ci) => (
            <Reveal key={cat.slug} delay={ci * 40}>
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center shrink-0">
                    <cat.Icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                      {cat.label}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">{cat.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cat.articles.map((article) => (
                    <Link
                      key={article.title}
                      href={resolveArticleHref(cat.slug, article.title)}
                      className="block rounded-xl border border-border lux-card p-5 group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                            {article.excerpt}
                          </p>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground/60 group-hover:text-gold shrink-0 mt-0.5 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA
        title="Still stuck?"
        subtitle="Write us. Every email is answered by a human, usually within a few hours."
        primary={{ label: 'Contact support', href: '/contact' }}
        secondary={{ label: 'Read the blog', href: '/blog' }}
      />
    </>
  )
}
