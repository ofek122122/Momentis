import type { Metadata } from 'next'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Keyboard, Eye, Volume2, Type, Check, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accessibility — Our commitment',
  description: 'Momenties is built to WCAG 2.2 AA. Here\'s our statement of accessibility, our audit results, and how to reach us with feedback.',
  alternates: { canonical: '/accessibility' },
  openGraph: {
    title: 'Momenties Accessibility',
    description: 'Our WCAG 2.2 AA accessibility statement and audit results.',
    url: '/accessibility',
  },
}

const AREAS = [
  {
    icon: Keyboard,
    title: 'Keyboard-first',
    desc: 'Every feature is reachable by keyboard. Press ? anywhere to see the full shortcut map. Skip-to-content link on every page.',
  },
  {
    icon: Eye,
    title: 'High contrast & color',
    desc: 'WCAG AA contrast ratios everywhere. Never color alone to convey meaning. Focus rings are gold, clear, and always visible.',
  },
  {
    icon: Volume2,
    title: 'Screen reader tested',
    desc: 'Tested with VoiceOver (macOS & iOS), NVDA (Windows), and TalkBack (Android). Semantic HTML, ARIA only where HTML is insufficient.',
  },
  {
    icon: Type,
    title: 'Text & motion',
    desc: 'Respects prefers-reduced-motion. Zoom-friendly layouts up to 400%. No text rendered as images. Sans/serif both at high contrast.',
  },
]

const WCAG = [
  { criteria: '1.1.1 Non-text content', status: 'Pass', note: 'All images have alt text. Decorative images are aria-hidden.' },
  { criteria: '1.3.1 Info and relationships', status: 'Pass', note: 'Semantic HTML across all pages. Tables use proper headers.' },
  { criteria: '1.4.3 Contrast (minimum)', status: 'Pass', note: 'AA contrast across all themes, including Clean White Pro.' },
  { criteria: '2.1.1 Keyboard', status: 'Pass', note: 'Every interactive element is keyboard-reachable.' },
  { criteria: '2.4.1 Bypass blocks', status: 'Pass', note: 'Skip-to-content link on every page.' },
  { criteria: '2.4.7 Focus visible', status: 'Pass', note: 'Distinct 2px gold focus ring everywhere.' },
  { criteria: '3.2.2 On input', status: 'Pass', note: 'No unexpected navigation or context changes.' },
  { criteria: '4.1.3 Status messages', status: 'Pass', note: 'Live regions for all dynamic status (sync, parsing, errors).' },
  { criteria: '1.4.10 Reflow', status: 'Partial', note: 'Calendar grid on 400% zoom still requires horizontal scroll on some breakpoints. Working on it.' },
  { criteria: '1.4.13 Hover & focus content', status: 'Pass', note: 'Dropdowns dismissible, hoverable, and persist for the required interval.' },
]

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Accessibility"
        title={
          <>
            Built to be <em className="not-italic text-gold">used by everyone</em>.
          </>
        }
        lede="Momenties is designed and tested against WCAG 2.2 AA. We don't always get it right the first time — and when we don't, we want to hear from you."
        crumbs={[{ label: 'Accessibility' }]}
      />

      {/* Commitment */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto space-y-6 text-[15px] leading-[1.75] text-foreground/85 font-light">
          <Reveal>
            <p className="font-display text-2xl md:text-3xl italic text-foreground">
              &ldquo;An app for managing your time should be usable by anyone who has time to manage.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Momenties&apos;s accessibility work is led by a dedicated engineer working alongside design and QA.
              We run automated audits every PR (axe-core in CI), manual reviews every release, and an
              external audit annually. We fix critical a11y regressions before other bugs.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p>
              If something on this site or in the app is making your life harder, please write us:{' '}
              <a href="mailto:a11y@momenties.app" className="text-gold hover:underline">
                a11y@momenties.app
              </a>
              . We acknowledge within 24 hours and we take it seriously.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              Focus areas
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Where we invest.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {AREAS.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 80}>
                <div className="rounded-2xl border border-border lux-card p-7 h-full">
                  <a.icon className="h-5 w-5 text-gold mb-5" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WCAG table */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                WCAG 2.2 AA conformance
              </h2>
              <span className="font-mono text-[11px] text-muted-foreground">
                Audited 2026-03-18 · Next review 2026-06-18
              </span>
            </div>
          </Reveal>
          <div className="rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.02] border-b border-border">
                <tr>
                  <th className="text-left px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Success criteria
                  </th>
                  <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground w-28">
                    Status
                  </th>
                  <th className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {WCAG.map((row, i) => (
                  <tr
                    key={row.criteria}
                    className={`border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.012]'}`}
                  >
                    <td className="px-5 py-3.5 text-sm text-foreground/90 font-mono text-xs">
                      {row.criteria}
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-mono uppercase tracking-[0.15em] ${
                          row.status === 'Pass'
                            ? 'text-emerald-300 border-emerald-400/30 bg-emerald-500/10'
                            : 'text-amber-300 border-amber-400/30 bg-amber-500/10'
                        }`}
                      >
                        {row.status === 'Pass' ? <Check className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-muted-foreground">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTA
        title="Found something we missed?"
        subtitle="Tell us. Every report is acknowledged within 24 hours and triaged the same week."
        primary={{ label: 'a11y@momenties.app', href: 'mailto:a11y@momenties.app' }}
        secondary={{ label: 'See all contact options', href: '/contact' }}
      />
    </>
  )
}
