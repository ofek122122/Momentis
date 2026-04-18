import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Download, Mail, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Press Kit — Logos, photos, and media',
  description: 'Logos, brand guidelines, press releases, and a media contact. Everything you need to write about Momenties.',
  alternates: { canonical: '/press' },
  openGraph: {
    title: 'Momenties Press Kit',
    description: 'Logos, guidelines, press releases, and media contact.',
    url: '/press',
  },
}

const RELEASES = [
  {
    date: '2026-04-12',
    title: 'Momenties raises $12M Series A led by Index Ventures',
    excerpt: 'The round will fund Outlook integration, a native mobile app, and the company\'s first European engineering hires.',
  },
  {
    date: '2026-02-21',
    title: 'Momenties debuts AI daily briefings for every user',
    excerpt: 'A warm morning summary, built on Gemini 2.5 Flash, ships to all plans for free.',
  },
  {
    date: '2026-01-15',
    title: 'Momenties launches public beta',
    excerpt: 'After a year of private development, the AI calendar is now open to anyone with a Google account.',
  },
  {
    date: '2025-11-02',
    title: 'Momenties wins Product Hunt Product of the Month',
    excerpt: 'The scheduling app — still in private beta — was selected by the Product Hunt editorial team for its quiet design and sharp AI parsing.',
  },
]

const COVERAGE = [
  { publication: 'The Verge', quote: '“The first calendar app that respects your attention.”', href: '#' },
  { publication: 'TechCrunch', quote: '“A rare piece of calm, confident consumer AI.”', href: '#' },
  { publication: 'Wired', quote: '“Momenties made me fall back in love with my calendar.”', href: '#' },
  { publication: 'Kinfolk', quote: '“Proof that productivity software can be beautiful.”', href: '#' },
  { publication: 'FastCompany', quote: '“A design-first approach to a deeply unsexy problem.”', href: '#' },
  { publication: 'Dense Discovery', quote: '“One of the nicest calendars I\'ve ever used.”', href: '#' },
]

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Press kit"
        title={
          <>
            Writing about us? <em className="not-italic text-gold">Everything you need.</em>
          </>
        }
        lede="Logos, brand guidelines, press releases, photography, and a real human media contact — all in one quiet place."
        crumbs={[{ label: 'Press' }]}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            <Download className="h-4 w-4" />
            Download press kit (.zip)
          </a>
          <a
            href="mailto:press@momenties.app"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
          >
            <Mail className="h-4 w-4" />
            press@momenties.app
          </a>
        </div>
      </PageHero>

      {/* Logos */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6">
              Logos
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mb-8">
              Our wordmark and icon, in dark and light variants. SVG and PNG (transparent). Please
              don&apos;t modify, rotate, or crop.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { bg: '#0c0c0f', fg: '#f0ece3', label: 'Wordmark · dark' },
              { bg: '#f0ece3', fg: '#0c0c0f', label: 'Wordmark · light' },
              { bg: '#0c0c0f', fg: '#c5a35c', label: 'Gold on black' },
              { bg: '#c5a35c', fg: '#0c0c0f', label: 'Black on gold' },
            ].map((l, i) => (
              <Reveal key={l.label} delay={i * 60}>
                <div className="group rounded-2xl border border-border overflow-hidden">
                  <div
                    className="h-40 flex items-center justify-center"
                    style={{ background: l.bg, color: l.fg }}
                  >
                    <span className="font-display text-2xl font-semibold tracking-tight">Momenties</span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{l.label}</span>
                    <a
                      href="#"
                      className="text-xs text-gold hover:underline flex items-center gap-1"
                    >
                      SVG <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand guidelines */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                Brand guidelines
              </h2>
              <Link
                href="/brand"
                className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
              >
                Full brand system <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            <Reveal>
              <div className="rounded-2xl border border-border lux-card p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-3">
                  Color palette
                </p>
                <div className="space-y-2">
                  {[
                    { name: 'Background', hex: '#0c0c0f', cls: 'bg-[#0c0c0f]' },
                    { name: 'Card', hex: '#131318', cls: 'bg-[#131318]' },
                    { name: 'Foreground', hex: '#f0ece3', cls: 'bg-[#f0ece3]' },
                    { name: 'Gold', hex: '#c5a35c', cls: 'bg-[#c5a35c]' },
                    { name: 'Muted', hex: '#6b6880', cls: 'bg-[#6b6880]' },
                  ].map((c) => (
                    <div key={c.hex} className="flex items-center justify-between gap-3 py-1">
                      <div className="flex items-center gap-3">
                        <div className={`w-7 h-7 rounded-md border border-border ${c.cls}`} />
                        <span className="text-sm text-foreground/90">{c.name}</span>
                      </div>
                      <code className="font-mono text-xs text-muted-foreground">{c.hex}</code>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl border border-border lux-card p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-3">
                  Typography
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="font-display text-3xl text-foreground">Playfair Display</div>
                    <div className="text-xs text-muted-foreground mt-1">Headings · Serif</div>
                  </div>
                  <div>
                    <div className="font-sans text-lg text-foreground">DM Sans</div>
                    <div className="text-xs text-muted-foreground mt-1">Body · Sans</div>
                  </div>
                  <div>
                    <div className="font-mono text-sm text-foreground">JetBrains Mono</div>
                    <div className="text-xs text-muted-foreground mt-1">Data, labels, captions</div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-border lux-card p-6 md:col-span-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-3">
                  Voice & tone
                </p>
                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                  <li className="flex gap-2 text-foreground/90">
                    <span className="text-gold">✓</span> Quiet, considered, a little literary.
                  </li>
                  <li className="flex gap-2 text-foreground/90">
                    <span className="text-gold">✓</span> Specific over aspirational. Concrete over vague.
                  </li>
                  <li className="flex gap-2 text-muted-foreground line-through">
                    <span>✗</span> No exclamation marks. No &quot;Let&apos;s go!&quot;
                  </li>
                  <li className="flex gap-2 text-muted-foreground line-through">
                    <span>✗</span> No &quot;revolutionary,&quot; &quot;game-changing,&quot; &quot;10x.&quot;
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Press releases */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
              Recent releases
            </h2>
          </Reveal>
          <div className="space-y-3">
            {RELEASES.map((r, i) => (
              <Reveal key={r.title} delay={i * 60}>
                <a
                  href="#"
                  className="group block rounded-xl border border-border lux-card p-5 hover:border-gold/25 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-2">
                        {new Date(r.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                        {r.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{r.excerpt}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-10">
              What they said
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COVERAGE.map((c, i) => (
              <Reveal key={c.publication} delay={(i % 3) * 70}>
                <a href={c.href} className="block rounded-xl border border-border lux-card p-6 h-full group">
                  <p className="font-display italic text-base text-foreground leading-snug mb-4">
                    {c.quote}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-gold/80">{c.publication}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-gold" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Media inquiry?"
        subtitle="Our co-founder Iris handles all press directly. Expect a reply within 24 hours."
        primary={{ label: 'press@momenties.app', href: 'mailto:press@momenties.app' }}
        secondary={{ label: 'Our blog', href: '/blog' }}
      />
    </>
  )
}
