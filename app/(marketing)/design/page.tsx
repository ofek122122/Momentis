import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Design — How Momenties looks and why',
  description:
    'The visual language of Momenties: colors, typography, spacing, and the reasoning behind each choice. For designers, writers, and the curious.',
  alternates: { canonical: '/design' },
  openGraph: {
    title: 'The Design of Momenties',
    description: 'Colors, type, spacing — and the reasoning behind each.',
    url: '/design',
    type: 'website',
  },
}

const COLORS = [
  { name: 'Background', value: '#0c0c0f', css: 'bg-background', textClass: 'text-foreground', label: 'Near-black. Not pure black — slightly warm.' },
  { name: 'Card', value: '#131318', css: 'bg-[#131318]', textClass: 'text-foreground', label: 'One step above background. Used for panels.' },
  { name: 'Gold', value: '#c5a35c', css: 'bg-gold', textClass: 'text-[#0c0c0f]', label: 'The single accent. Used sparingly, always earned.' },
  { name: 'Foreground', value: '#f0ece3', css: 'bg-[#f0ece3]', textClass: 'text-background', label: 'Cream, not white. Warmer. Less fatiguing.' },
  { name: 'Muted', value: '#8b8b8b', css: 'bg-[#8b8b8b]', textClass: 'text-foreground', label: 'Secondary text. Labels, captions, metadata.' },
  { name: 'Border', value: 'rgba(255,255,255,0.07)', css: 'bg-white/[0.07]', textClass: 'text-foreground', label: '7% white. Subtle separation.' },
]

const TYPE_SCALE = [
  { name: 'Display', font: 'font-display', sample: 'The quiet calendar.', size: 'text-4xl', desc: 'Playfair Display. Used for headlines and large numbers.' },
  { name: 'Body', font: 'font-sans', sample: 'Natural language, parsed instantly.', size: 'text-base', desc: 'DM Sans. Used for all body copy and UI text.' },
  { name: 'Mono', font: 'font-mono', sample: 'mmt add "standup 9am"', size: 'text-sm', desc: 'JetBrains Mono. Used for code, labels, timestamps.' },
]

const PRINCIPLES = [
  {
    title: 'Dark by default — not dark by trend',
    body: 'Every version of Momenties has been dark-mode first. Not because it\'s fashionable, but because dark backgrounds force honest hierarchy. Elements either read or they don\'t. There\'s no hiding muddled contrast behind a white canvas.',
  },
  {
    title: 'Gold is a word, not wallpaper',
    body: 'The gold accent (#c5a35c) appears in perhaps 5% of pixels on any screen. That\'s intentional. When a color appears everywhere, it ceases to mean anything. Gold in Momenties means: this is the thing that matters right now.',
  },
  {
    title: 'Typography at two speeds',
    body: 'Playfair Display for display text — expressive, rooted, editorial. DM Sans for UI — clean, functional, invisible. JetBrains Mono for data — precise, honest, technical. Three voices, each deployed at the right register.',
  },
  {
    title: 'Spacing as breathing room',
    body: 'Dense interfaces communicate urgency. Momenties communicates calm. We use generous padding not as waste, but as visual permission for the user to slow down. The whitespace is part of the product.',
  },
  {
    title: 'Motion at 150–300ms',
    body: 'All animations are fast. Not because we\'re in a hurry — because slow animations communicate that the software is laboring. We want interactions to feel immediate. If something animates, it should feel faster than you expected, not slower.',
  },
  {
    title: 'Complexity lives in the component, not the screen',
    body: 'Any given screen in Momenties shows very little. The calendar, an input bar, perhaps a sidebar. The complexity of the system — recurring events, smart suggestions, multi-calendar sync — is inside the components, not on the surface.',
  },
]

export default function DesignPage() {
  return (
    <>
      <PageHero
        eyebrow="Design language"
        title={
          <>
            How Momenties
            <br />
            <em className="not-italic text-gold">looks — and why.</em>
          </>
        }
        lede="The visual language of a calm product. Every color, every typeface, every radius has a reason. This is that reason."
        crumbs={[{ label: 'Design' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/brand"
            className="inline-flex items-center gap-1.5 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
          >
            Brand kit <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/manifesto"
            className="inline-flex items-center gap-1.5 h-10 px-5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Design manifesto <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </PageHero>

      {/* Principles */}
      <section className="py-24 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Principles</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Six things we believe about design.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border/50 p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Color palette */}
      <section className="py-24 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Color</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              Six colors. No more.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-lg leading-relaxed">
              Every color in the Momenties palette earns its place. We add semantic colors (emerald for success, rose for error) only where they carry meaning.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COLORS.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 40}>
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className={`h-20 w-full ${c.css} flex items-end p-3`}>
                    <span className={`font-mono text-[11px] ${c.textClass}`}>{c.value}</span>
                  </div>
                  <div className="p-4 bg-[#0c0c0f]">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold/70 mb-1">{c.name}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{c.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-24 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Typography</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              Three typefaces. Three registers.
            </h2>
          </Reveal>

          <div className="space-y-5">
            {TYPE_SCALE.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <div className="rounded-2xl border border-border lux-card p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-1">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.desc}</div>
                    </div>
                  </div>
                  <p className={`${t.font} ${t.size} text-foreground leading-tight`}>
                    {t.sample}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing & radius */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Shape & radius</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Consistent curves signal trust.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-lg leading-relaxed">
              Every radius in Momenties follows a consistent scale. Inconsistent corner radii are one of the most common signs of a design that wasn&apos;t thought through. We thought it through.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { radius: 'rounded-lg', desc: 'Buttons & inputs', px: '8px' },
              { radius: 'rounded-xl', desc: 'Cards & panels', px: '12px' },
              { radius: 'rounded-2xl', desc: 'Modal & feature cards', px: '16px' },
              { radius: 'rounded-full', desc: 'Pills & avatars', px: '9999px' },
            ].map((r, i) => (
              <Reveal key={r.desc} delay={i * 50}>
                <div className="flex flex-col items-center gap-3">
                  <div className={`w-full h-16 ${r.radius} border border-gold/20 bg-gold/5`} />
                  <div className="text-center">
                    <div className="font-mono text-[11px] text-gold/70">{r.px}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{r.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Component preview */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Components</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              A sample of the system.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buttons */}
            <Reveal>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4">Buttons</p>
                <div className="flex flex-wrap gap-3">
                  <button className="h-10 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium">Primary</button>
                  <button className="h-10 px-5 rounded-full border border-border text-sm text-foreground">Secondary</button>
                  <button className="h-10 px-5 text-sm text-muted-foreground hover:text-foreground">Ghost</button>
                  <button className="h-8 px-4 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-mono uppercase tracking-wider">Badge</button>
                </div>
              </div>
            </Reveal>

            {/* Input */}
            <Reveal delay={60}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4">Input</p>
                <div className="rounded-xl border border-border bg-[#0f0f14] px-4 py-3 flex items-center gap-3">
                  <span className="text-sm text-muted-foreground/50 flex-1">dentist thursday 3pm</span>
                  <span className="font-mono text-[10px] text-gold/60">→ parsed</span>
                </div>
              </div>
            </Reveal>

            {/* Cards */}
            <Reveal>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4">Cards</p>
                <div className="rounded-xl border border-border lux-card p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-2">Feature card</div>
                  <p className="text-sm text-muted-foreground">Gold border-top glow, slightly elevated background, subtle inner shadow.</p>
                </div>
              </div>
            </Reveal>

            {/* Badges */}
            <Reveal delay={60}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4">Badges</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'New', cls: 'text-gold bg-gold/10 border-gold/20' },
                    { label: 'Beta', cls: 'text-sky-300 bg-sky-500/10 border-sky-500/20' },
                    { label: 'Soon', cls: 'text-muted-foreground bg-white/5 border-white/10' },
                    { label: 'Hiring', cls: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20' },
                  ].map((b) => (
                    <span key={b.label} className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-[10px] font-mono uppercase tracking-wider ${b.cls}`}>
                      {b.label}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="See the design in action."
        subtitle="Open the live demo to see every component in its natural environment."
        primary={{ label: 'Live demo', href: '/demo' }}
        secondary={{ label: 'Brand kit', href: '/brand' }}
      />
    </>
  )
}
