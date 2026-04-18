import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Download, ArrowUpRight, Check, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Brand — Logos, colors, typography, voice',
  description: 'The Momenties brand system — exact hex values, font specs, voice guidelines, and logo assets. For partners, press, and internal use.',
  alternates: { canonical: '/brand' },
  openGraph: {
    title: 'Momenties Brand',
    description: 'Logos, colors, typography, and voice.',
    url: '/brand',
  },
}

const COLORS = [
  { name: 'Momenties Black', hex: '#0c0c0f', rgb: 'rgb(12, 12, 15)', cls: 'bg-[#0c0c0f]', usage: 'Primary background, dark surfaces, body text on light' },
  { name: 'Card Night', hex: '#131318', rgb: 'rgb(19, 19, 24)', cls: 'bg-[#131318]', usage: 'Card backgrounds, elevated surfaces' },
  { name: 'Cream Foreground', hex: '#f0ece3', rgb: 'rgb(240, 236, 227)', cls: 'bg-[#f0ece3]', usage: 'Body text on dark, hero text, light surface backgrounds' },
  { name: 'Gold', hex: '#c5a35c', rgb: 'rgb(197, 163, 92)', cls: 'bg-[#c5a35c]', usage: 'Accents, primary buttons, links, focus rings, emphasis' },
  { name: 'Muted', hex: '#6b6880', rgb: 'rgb(107, 104, 128)', cls: 'bg-[#6b6880]', usage: 'Secondary text, disabled states, icons' },
  { name: 'Border', hex: 'rgba(255, 255, 255, 0.07)', rgb: '', cls: 'bg-white/[0.07]', usage: 'Thin separators, card borders, dividers' },
]

const TYPOGRAPHY = [
  { name: 'Playfair Display', usage: 'Headings, display, hero', weights: '400, 500, 600, 700, 800', notes: 'Serif. Used for titles, quotes, editorial callouts. Set in italic for emphasis on gold-colored words.' },
  { name: 'DM Sans', usage: 'Body, UI', weights: '400, 500, 600, 700', notes: 'Neutral sans for everything that isn\'t a title or data. Excellent at small sizes.' },
  { name: 'JetBrains Mono', usage: 'Labels, data, code', weights: '400, 500', notes: 'Tabular figures. Used for labels, metric values, monospaced snippets. Always in SMALL CAPS UPPERCASE with letter-spacing for categorical labels.' },
]

const DO = [
  'Use gold (#c5a35c) sparingly. It is punctuation, not paint.',
  'Keep whitespace generous. Think library, not magazine.',
  'Set headlines in Playfair Display; italicize the emphasized word in gold.',
  'Maintain WCAG AA contrast ratios in all themes.',
  'Use dark backgrounds by default.',
]

const DONT = [
  'Rotate, stretch, or crop the logo.',
  'Apply drop shadows or gradients to the gold.',
  'Use gold on gold, or black on black without contrast.',
  'Add emoji to headlines.',
  'Use exclamation marks or marketing-speak ("revolutionary", "10x", "game-changing").',
]

const ASSETS = [
  { name: 'Wordmark — on dark', file: 'momenties-wordmark-dark.svg', size: '4 KB' },
  { name: 'Wordmark — on light', file: 'momenties-wordmark-light.svg', size: '4 KB' },
  { name: 'Icon — gold', file: 'momenties-icon-gold.svg', size: '2 KB' },
  { name: 'Icon — cream', file: 'momenties-icon-cream.svg', size: '2 KB' },
  { name: 'Full brand kit', file: 'momenties-brand-kit.zip', size: '1.8 MB' },
]

export default function BrandPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand guidelines"
        title={
          <>
            The <em className="not-italic text-gold">Momenties</em> brand system.
          </>
        }
        lede="Exact hex values, font specs, voice guidelines, and logo assets. Everything you need to represent Momenties accurately — in a pitch deck, in a press piece, or on your own site."
        crumbs={[{ label: 'Brand' }]}
      >
        <a
          href="#"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
        >
          <Download className="h-4 w-4" /> Download brand kit (.zip)
        </a>
      </PageHero>

      {/* Logo */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">
              Logo
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mb-10">
              One wordmark, one icon, four variants. The gold version on black is our primary lockup. Please don&apos;t alter, rotate, or color-swap.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { bg: '#0c0c0f', fg: '#f0ece3', label: 'Wordmark · cream on black (primary on dark)' },
              { bg: '#0c0c0f', fg: '#c5a35c', label: 'Wordmark · gold on black (emphasis)' },
              { bg: '#f0ece3', fg: '#0c0c0f', label: 'Wordmark · black on cream (on light)' },
              { bg: '#c5a35c', fg: '#0c0c0f', label: 'Wordmark · black on gold (brand)' },
            ].map((l) => (
              <Reveal key={l.label}>
                <div className="rounded-2xl border border-border overflow-hidden">
                  <div
                    className="h-44 flex items-center justify-center"
                    style={{ background: l.bg, color: l.fg }}
                  >
                    <span className="font-display text-3xl font-semibold tracking-tight">Momenties</span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{l.label}</span>
                    <a href="#" className="text-xs text-gold hover:underline inline-flex items-center gap-1">
                      SVG <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-10">
              Colors
            </h2>
          </Reveal>
          <div className="rounded-2xl border border-border overflow-hidden">
            {COLORS.map((c, i) => (
              <div
                key={c.hex}
                className={`grid grid-cols-[96px_1fr] md:grid-cols-[96px_220px_200px_1fr] items-center gap-4 px-5 py-4 border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.012]'}`}
              >
                <div className={`h-16 w-16 rounded-xl border border-border ${c.cls}`} />
                <div>
                  <div className="text-sm font-medium text-foreground">{c.name}</div>
                  <div className="text-xs font-mono text-muted-foreground">{c.hex}</div>
                </div>
                <div className="text-xs font-mono text-muted-foreground hidden md:block">{c.rgb}</div>
                <div className="text-xs text-muted-foreground hidden md:block">{c.usage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-10">
              Typography
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {TYPOGRAPHY.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <div className="rounded-2xl border border-border lux-card p-6 h-full">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-2">
                    {t.usage}
                  </p>
                  <h3
                    className={`text-3xl mb-3 ${
                      i === 0 ? 'font-display' : i === 1 ? 'font-sans' : 'font-mono'
                    }`}
                  >
                    {t.name}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground mb-3">Weights: {t.weights}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.notes}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Voice */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-10">
              Voice & tone
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            <Reveal>
              <div className="rounded-2xl border border-border lux-card p-6 h-full">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-4">
                  ✓ We do
                </p>
                <ul className="space-y-3">
                  {DO.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                      <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border border-border lux-card p-6 h-full">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 mb-4">
                  ✗ We don&apos;t
                </p>
                <ul className="space-y-3">
                  {DONT.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <X className="h-4 w-4 text-muted-foreground/50 mt-0.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Assets */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
              Download assets
            </h2>
          </Reveal>
          <div className="rounded-2xl border border-border overflow-hidden">
            {ASSETS.map((a, i) => (
              <a
                key={a.file}
                href="#"
                className={`flex items-center justify-between gap-4 px-5 py-4 border-b border-border last:border-b-0 hover:bg-white/[0.025] transition-colors ${i % 2 === 0 ? '' : 'bg-white/[0.012]'}`}
              >
                <div className="flex items-center gap-3">
                  <Download className="h-4 w-4 text-gold" />
                  <div>
                    <div className="text-sm text-foreground">{a.name}</div>
                    <div className="text-xs font-mono text-muted-foreground">{a.file}</div>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground">{a.size}</span>
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-5">
            Need a custom asset for a partner lockup? Email{' '}
            <a href="mailto:brand@momenties.app" className="text-gold hover:underline">
              brand@momenties.app
            </a>{' '}
            and we&apos;ll respond within 48 hours.
          </p>
        </div>
      </section>

      <CTA
        title="Using Momenties in a piece?"
        subtitle="We'd love to see it. Tag @momentiesapp or send us a link — we'll often share it."
        primary={{ label: 'Press kit', href: '/press' }}
        secondary={{ label: 'brand@momenties.app', href: 'mailto:brand@momenties.app' }}
      />
    </>
  )
}
