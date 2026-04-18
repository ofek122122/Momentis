import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import {
  Keyboard,
  Printer,
  Download,
  Mail,
  Command,
  ArrowUpRight,
  Quote,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Keyboard reference — Momenties cheatsheet',
  description:
    "Every keyboard shortcut in Momenties, grouped on one page. Designed to print on one sheet of A4. Mailed as a letterpress card to the first 500 annual subscribers.",
  alternates: { canonical: '/keyboard' },
  openGraph: {
    title: 'Momenties keyboard reference',
    description:
      'Every shortcut in Momenties on one page. Designed to print on one sheet of A4.',
    url: '/keyboard',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momenties keyboard reference',
    description: 'Every shortcut on one page. Designed to print.',
  },
}

type Shortcut = { keys: string[]; desc: string; hint?: string }
type Group = { title: string; note: string; shortcuts: Shortcut[] }

const GROUPS: Group[] = [
  {
    title: 'Global',
    note: 'Works from any screen in the app.',
    shortcuts: [
      { keys: ['⌘', 'K'], desc: 'Open command palette', hint: 'Ctrl K on Windows / Linux' },
      { keys: ['?'], desc: 'Show this cheatsheet' },
      { keys: ['/'], desc: 'Focus the input bar' },
      { keys: ['G', 'S'], desc: 'Go to Settings' },
      { keys: ['G', 'H'], desc: 'Go to Help' },
      { keys: ['Esc'], desc: 'Close any dialog or menu' },
    ],
  },
  {
    title: 'Navigation',
    note: 'Move through time without touching the mouse.',
    shortcuts: [
      { keys: ['←'], desc: 'Previous period' },
      { keys: ['→'], desc: 'Next period' },
      { keys: ['T'], desc: 'Jump to today' },
      { keys: ['⇧', 'T'], desc: 'Jump to specific date' },
      { keys: ['H'], desc: 'Earlier in the day' },
      { keys: ['L'], desc: 'Later in the day' },
    ],
  },
  {
    title: 'Views',
    note: 'Switch grid densities instantly.',
    shortcuts: [
      { keys: ['M'], desc: 'Month view' },
      { keys: ['W'], desc: 'Week view' },
      { keys: ['D'], desc: 'Day view' },
      { keys: ['A'], desc: 'Agenda view' },
      { keys: ['F'], desc: 'Focus mode' },
      { keys: ['⇧', 'F'], desc: 'Full screen · hide chrome' },
    ],
  },
  {
    title: 'Creating & editing',
    note: 'Add events without leaving the keyboard.',
    shortcuts: [
      { keys: ['N'], desc: 'New event · plain text' },
      { keys: ['⇧', 'N'], desc: 'New event · voice' },
      { keys: ['⇧', 'I'], desc: 'New event · from image' },
      { keys: ['Enter'], desc: 'Submit / save' },
      { keys: ['⌘', 'Enter'], desc: 'Save & create another', hint: 'Ctrl Enter on Win/Linux' },
      { keys: ['⌘', 'D'], desc: 'Duplicate the selected event' },
      { keys: ['⌘', '⌫'], desc: 'Delete the selected event' },
    ],
  },
  {
    title: 'Templates & rhythms',
    note: 'For users who template their weeks.',
    shortcuts: [
      { keys: ['⇧', 'T', 'T'], desc: 'Open templates' },
      { keys: ['⇧', 'S'], desc: 'Save current week as a template' },
      { keys: ['⇧', 'A'], desc: 'Apply a template to this week' },
      { keys: ['⇧', 'R'], desc: 'Reset this week' },
    ],
  },
  {
    title: 'Power moves',
    note: 'For the keyboard-first among you.',
    shortcuts: [
      { keys: ['⌃', '⌥', '1'], desc: 'Pin the week ahead' },
      { keys: ['⌃', '⌥', '2'], desc: 'Unified multi-calendar view' },
      { keys: ['⌃', '⌥', 'B'], desc: 'Toggle daily briefing' },
      { keys: ['⌃', '⌥', 'K'], desc: 'Toggle command palette actions for admins' },
      { keys: ['⌘', 'Z'], desc: 'Undo' },
      { keys: ['⌘', '⇧', 'Z'], desc: 'Redo' },
    ],
  },
]

function KeyCap({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex items-center justify-center min-w-[26px] h-[26px] px-1.5 rounded-md border border-border bg-gradient-to-b from-[#1a1a20] to-[#0f0f14] text-[11px] font-mono text-foreground shadow-[inset_0_-1px_0_rgba(0,0,0,0.4)] leading-none">
      {children}
    </kbd>
  )
}

function KeyCombo({ keys }: { keys: string[] }) {
  return (
    <span className="inline-flex items-center gap-1">
      {keys.map((k, i) => (
        <span key={i} className="inline-flex items-center gap-1">
          <KeyCap>{k}</KeyCap>
          {i < keys.length - 1 && (
            <span className="text-[10px] text-muted-foreground/50" aria-hidden>
              +
            </span>
          )}
        </span>
      ))}
    </span>
  )
}

export default function KeyboardPage() {
  const total = GROUPS.reduce((a, g) => a + g.shortcuts.length, 0)

  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden print-hide">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(55% 60% at 50% 0%, rgba(197,163,92,0.10) 0%, rgba(197,163,92,0) 65%)',
          }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-2">
          <Breadcrumbs items={[{ label: 'Keyboard' }]} />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold/80 mb-4 inline-flex items-center gap-2">
            <Keyboard className="h-3 w-3" aria-hidden />
            Momenties keyboard reference · v1.3
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.98] tracking-tight text-foreground">
            Every shortcut.<br />
            <em className="not-italic text-gold">One page.</em>
          </h1>
          <p className="mt-7 font-display italic text-xl md:text-2xl text-foreground/90 leading-snug max-w-2xl">
            {total} shortcuts across six groups. Designed to print on a single sheet of A4 or US Letter. Posted as a
            letterpress card to the first 500 annual subscribers.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/downloads/momenties-cheatsheet.pdf"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download PDF (A4 + US Letter)
            </a>
            <button
              type="button"
              onClick={undefined}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/40 hover:text-gold transition-colors js-print"
            >
              <Printer className="h-4 w-4" aria-hidden />
              Print this page
            </button>
            <Link
              href="/learn"
              className="inline-flex items-center gap-1.5 h-11 px-5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Learn the shortcuts
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Cheatsheet card */}
      <section className="py-10 md:py-16 px-5 md:px-8 border-b border-border print-plain">
        <div className="max-w-6xl mx-auto">
          <article
            id="cheatsheet"
            className="rounded-3xl border border-gold/25 bg-[#0b0b0e] p-6 md:p-10 relative overflow-hidden print-plain-card"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30 print-hide"
              style={{
                background:
                  'radial-gradient(60% 60% at 100% 0%, rgba(197,163,92,0.10) 0%, rgba(197,163,92,0) 70%)',
              }}
            />

            {/* Card header */}
            <div className="relative flex items-start justify-between flex-wrap gap-4 mb-8 pb-6 border-b border-border/70">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-2 inline-flex items-center gap-2">
                  <Command className="h-3 w-3" aria-hidden />
                  Momenties · keyboard reference · v1.3
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground font-bold tracking-tight">
                  The cheatsheet.
                </h2>
              </div>
              <div className="text-right text-[11px] font-mono text-muted-foreground space-y-0.5">
                <div>Apr 2026 edition</div>
                <div>
                  {total} shortcuts · {GROUPS.length} groups
                </div>
              </div>
            </div>

            {/* Two-column grid of groups */}
            <div className="relative grid md:grid-cols-2 gap-x-10 gap-y-8">
              {GROUPS.map((g) => (
                <section key={g.title} className="break-inside-avoid">
                  <div className="flex items-baseline gap-4 mb-3">
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
                      {g.title}
                    </h3>
                    <span className="flex-1 h-px bg-border" />
                    <span className="font-mono text-[10px] text-muted-foreground/60">
                      {g.shortcuts.length}
                    </span>
                  </div>
                  <p className="text-[12px] text-muted-foreground italic mb-4 leading-relaxed">
                    {g.note}
                  </p>
                  <ul className="divide-y divide-border/60">
                    {g.shortcuts.map((s, i) => (
                      <li
                        key={i}
                        className="py-2.5 flex items-start justify-between gap-4"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="text-[13.5px] text-foreground/90 leading-snug">
                            {s.desc}
                          </div>
                          {s.hint && (
                            <div className="mt-0.5 text-[10.5px] font-mono text-muted-foreground/70">
                              {s.hint}
                            </div>
                          )}
                        </div>
                        <div className="shrink-0 pt-0.5">
                          <KeyCombo keys={s.keys} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            {/* Card footer */}
            <div className="relative mt-10 pt-6 border-t border-border/70 flex items-center justify-between text-[11px] font-mono text-muted-foreground flex-wrap gap-3">
              <div>
                Keyboard shortcuts are the rare feature we do <em className="not-italic text-foreground">not</em>{' '}
                change often. We ship new ones; we rarely repurpose old ones.
              </div>
              <div className="text-right">
                momenties.app/keyboard · v1.3
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Mailed callout */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border bg-[#0a0a0e] print-hide">
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-6 items-center">
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3 inline-flex items-center gap-2">
              <Mail className="h-3 w-3" aria-hidden />
              Posted, not emailed
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
              500 letterpress copies, mailed with a handwritten note.
            </h2>
            <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed">
              Every annual subscriber who joined before April 2026 received a printed copy of this cheatsheet, letterpressed
              on 320gsm natural cotton, in a kraft envelope, with a small note from Iris. We still have a few left. If
              yours got lost, email us.
            </p>
            <Link
              href="/contact?subject=Cheatsheet%20replacement"
              className="mt-5 inline-flex items-center gap-1 text-sm text-gold hover:underline"
            >
              Request a replacement
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-[8.5/11] rounded-2xl border border-gold/25 bg-gradient-to-br from-[#131318] via-[#131318] to-[#0a0a0e] p-5 flex flex-col relative overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 dot-grid opacity-30"
              />
              <div className="relative font-mono text-[9px] uppercase tracking-[0.25em] text-gold/80 mb-4">
                Momenties · keyboard reference · v1.3
              </div>
              <div className="relative font-display text-lg text-foreground tracking-tight mb-3">
                The cheatsheet.
              </div>
              <ul className="relative space-y-1 text-[10px] text-muted-foreground">
                {[
                  '⌘ K · Command palette',
                  '? · This cheatsheet',
                  'T · Jump to today',
                  'M · Month view',
                  'N · New event',
                  '⌘ ↵ · Save & add',
                ].map((l) => (
                  <li key={l} className="flex items-center justify-between border-b border-border/50 pb-0.5">
                    <span className="font-mono">{l}</span>
                    <span className="text-gold/50">→</span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-auto pt-4 text-[9px] font-mono text-muted-foreground/60 text-right">
                momenties.app/keyboard
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keyboard-first quote */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border print-hide">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="h-5 w-5 text-gold mx-auto mb-4" aria-hidden />
          <p className="font-display italic text-xl md:text-2xl text-foreground leading-snug">
            &ldquo;The keyboard shortcuts feel designed by someone who actually uses a keyboard. M, W, D to switch
            views. Question mark to see them all. It took me nine seconds to learn.&rdquo;
          </p>
          <div className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
            — Hana Kobayashi · iOS engineer · Tokyo
          </div>
        </div>
      </section>

      <div className="print-hide">
        <CTA
          title="Keyboard-first calendars are a rare shape."
          subtitle="Momenties has been one from day one. The cheatsheet is the beginning of the story."
          primary={{ label: 'Use Momenties', href: '/login' }}
          secondary={{ label: 'See all keyboard tracks in Learn', href: '/learn' }}
        />
      </div>

      {/* Print + tiny interactive bits */}
      <style>{`
        @media print {
          .print-hide { display: none !important; }
          .print-plain { padding: 0 !important; border: none !important; background: white !important; }
          .print-plain-card {
            border: 1px solid #000 !important;
            background: white !important;
            color: #0c0c0f !important;
            padding: 20px !important;
            border-radius: 0 !important;
          }
        }
      `}</style>

      {/* Tiny inline script only to wire the "Print this page" button without turning the whole page client. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.addEventListener('click',function(e){var t=e.target;if(t&&t.closest('.js-print')){window.print();}});`,
        }}
      />
    </>
  )
}
