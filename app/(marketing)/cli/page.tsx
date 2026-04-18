import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Terminal, Zap, GitBranch, Package, ArrowUpRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties CLI — Schedule from your terminal',
  description:
    'A first-party command-line interface for Momenties. Parse events, view your schedule, create reminders, and pipe any text directly into your calendar.',
  alternates: { canonical: '/cli' },
  openGraph: {
    title: 'Momenties CLI',
    description: 'Schedule from your terminal. Parse events, view your day, pipe any text to your calendar.',
    url: '/cli',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momenties CLI',
    description: 'Your calendar, from the terminal.',
  },
}

const COMMANDS = [
  {
    cmd: 'mmt add "standup every weekday 9am for 15 minutes"',
    desc: 'Add a recurring event in plain English.',
    output: '✓ Recurring event created · Mon–Fri 09:00 (starts Monday)',
  },
  {
    cmd: 'mmt today',
    desc: 'Show your schedule for today.',
    output: `Today · Thursday April 18

  09:00 – 09:15  Standup
  11:00 – 12:00  Product review
  14:30 – 15:30  1:1 with Iris
  18:00 –        Dinner with Elena`,
  },
  {
    cmd: 'mmt add --file schedule.pdf',
    desc: 'Parse a PDF or image of a schedule.',
    output: '✓ 8 events extracted · preview with mmt last',
  },
  {
    cmd: 'echo "dentist friday 4pm" | mmt',
    desc: 'Pipe any text directly into your calendar.',
    output: '✓ Dentist appointment · Friday 16:00',
  },
  {
    cmd: 'mmt week --format json | jq \'.events[].title\'',
    desc: 'Output your week as JSON and pipe to anything.',
    output: `"Standup"
"Product review"
"1:1 with Iris"
"Dinner with Elena"
...`,
  },
]

const INSTALL_STEPS = [
  { mgr: 'Homebrew', cmd: 'brew install momenties/tap/mmt' },
  { mgr: 'npm', cmd: 'npm install -g @momenties/cli' },
  { mgr: 'pip', cmd: 'pip install momenties-cli' },
  { mgr: 'cargo', cmd: 'cargo install mmt' },
]

const FEATURES = [
  {
    icon: Terminal,
    title: 'Native parsing',
    desc: 'The same hybrid chrono+Gemini parser that powers the web app. Sub-second for most inputs.',
  },
  {
    icon: Zap,
    title: 'Pipe-friendly',
    desc: 'Reads from stdin, writes structured JSON to stdout. Compose with jq, fzf, grep — anything.',
  },
  {
    icon: GitBranch,
    title: 'Script-ready',
    desc: 'Predictable exit codes, machine-readable output modes, and a --json flag on every command.',
  },
  {
    icon: Package,
    title: 'Config file',
    desc: 'Store your token, preferred calendar, timezone, and output format in ~/.momenties/config.toml.',
  },
]

export default function CLIPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties CLI · beta"
        title={
          <>
            Your calendar,
            <br />
            <em className="not-italic text-gold">from the terminal.</em>
          </>
        }
        lede="A first-party CLI for Momenties. Parse natural language, view your day, pipe schedules from files, and compose with the rest of your shell. Currently in Labs beta — free for all Pro users."
        crumbs={[{ label: 'Developers', href: '/developers' }, { label: 'CLI' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/labs"
            className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press"
          >
            Join the beta
          </Link>
          <Link
            href="/developers"
            className="inline-flex items-center gap-2 h-10 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            REST API docs <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </PageHero>

      {/* Install */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Install</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              One line. Any package manager.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {INSTALL_STEPS.map((s, i) => (
              <Reveal key={s.mgr} delay={i * 50}>
                <div className="rounded-xl border border-border overflow-hidden group">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-[#0f0f14]">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      {s.mgr}
                    </span>
                  </div>
                  <pre className="px-4 py-3 font-mono text-sm text-foreground/85 bg-[#080810] group-hover:text-foreground transition-colors">
                    <code>{s.cmd}</code>
                  </pre>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-[#0f0f14]">
                <span className="font-mono text-[10px] text-muted-foreground">Authenticate</span>
              </div>
              <pre className="px-5 py-4 font-mono text-sm text-foreground/85 bg-[#080810]">
                <code>{`mmt auth login
# Opens browser for OAuth. Token stored in ~/.momenties/credentials.

mmt auth status
# ✓ Logged in as iris@momenties.app · Pro plan`}</code>
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Commands showcase */}
      <section className="py-24 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Commands</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Everything you need. Nothing you don&apos;t.
            </h2>
          </Reveal>

          <div className="space-y-5">
            {COMMANDS.map((c, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="rounded-2xl border border-border overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 border-b border-border bg-[#0f0f14]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500/60" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground flex-1">{c.desc}</span>
                  </div>
                  <div className="bg-[#080810]">
                    <div className="px-5 py-3.5 border-b border-border/50">
                      <code className="font-mono text-sm text-foreground/90">
                        <span className="text-gold/60">$ </span>
                        {c.cmd}
                      </code>
                    </div>
                    <pre className="px-5 py-3.5 font-mono text-xs text-emerald-400/90 leading-relaxed">
                      <code>{c.output}</code>
                    </pre>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-5 md:px-8 border-t border-border bg-gradient-to-b from-[#0a0a0d] to-transparent">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Design goals</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              A tool that respects the terminal.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-1.5">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full command reference */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Reference</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">All commands</h2>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="bg-[#0f0f14] px-5 py-3 border-b border-border">
                <code className="font-mono text-sm text-foreground/80">mmt --help</code>
              </div>
              <pre className="px-5 py-5 font-mono text-xs text-foreground/75 leading-relaxed bg-[#080810] overflow-x-auto">
                <code>{`Usage: mmt [command] [options]

Commands:
  add <text>          Parse natural language and add an event
  add --file <path>   Parse a PDF, image, or text file
  today               Show today's schedule
  week [--json]       Show this week's events
  search <query>      Search your calendar
  suggest <duration>  Get AI time-slot suggestions
  auth login          Authenticate with your Momenties account
  auth logout         Remove stored credentials
  auth status         Show current auth state
  config              Edit ~/.momenties/config.toml

Options:
  --calendar <id>     Target a specific calendar (default: primary)
  --json              Output machine-readable JSON
  --quiet             Suppress confirmations
  --dry-run           Preview without writing
  --help              Show this help
  --version           Print version`}</code>
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Availability note */}
      <section className="py-14 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-gold/20 bg-gold/5 p-6 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground mb-1">
                  Currently in Labs beta
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The CLI is free for all Pro subscribers while in beta. We&apos;ll notify you before any pricing changes. Open-source release planned for Q3 2026.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <Link
                  href="/labs"
                  className="inline-flex items-center justify-center h-9 px-5 text-sm font-medium rounded-full bg-gold text-[#0c0c0f] hover:bg-gold/90 transition-all press"
                >
                  Join beta
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Build faster from your terminal."
        subtitle="CLI in beta for all Pro users. Install in one command."
        primary={{ label: 'Start with Pro', href: '/pricing' }}
        secondary={{ label: 'View in Labs', href: '/labs' }}
      />
    </>
  )
}
