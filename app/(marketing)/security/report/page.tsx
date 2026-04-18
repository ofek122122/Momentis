import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import {
  Shield,
  Mail,
  KeyRound,
  Lock,
  Clock,
  Check,
  X,
  HandCoins,
  Trophy,
  ArrowUpRight,
  Scale,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Report a vulnerability — Calendro Security',
  description:
    'How to responsibly report a security issue in Calendro. Three ways to reach us, our acknowledgement timeline, safe-harbor policy, and our hall of fame.',
  alternates: { canonical: '/security/report' },
  openGraph: {
    title: 'Report a vulnerability · Calendro',
    description:
      'Responsible disclosure at Calendro. Three channels, a safe-harbor policy, and a published hall of fame.',
    url: '/security/report',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Report a vulnerability · Calendro',
    description: 'Our responsible disclosure program, in plain English.',
  },
}

const CHANNELS = [
  {
    title: 'PGP-encrypted email',
    detail: 'security@calendro.app',
    note: "Best for high-sensitivity reports. Our public key is below.",
    icon: KeyRound,
    primary: true,
  },
  {
    title: 'Encrypted form',
    detail: '/security/report#form',
    note: 'In-browser encryption before submission. Good for most reports.',
    icon: Lock,
  },
  {
    title: 'Bounty platform',
    detail: 'hackerone.com/calendro',
    note: 'For researchers with an existing HackerOne account and workflow.',
    icon: HandCoins,
  },
]

const SCOPE_IN = [
  'calendro.app · web application',
  'api.calendro.app · REST API',
  'app.calendro.app · authenticated product',
  'Calendro CLI (any published binary, any platform)',
  'Calendro mobile web experience',
  'Our Google Calendar OAuth flow',
  'Our Microsoft Graph OAuth flow',
  'Our CalDAV adapter for Apple Calendar',
]

const SCOPE_OUT = [
  'Third-party SaaS we integrate with (Google, Microsoft, Apple, etc.)',
  'Social-engineering or phishing of staff or customers',
  'Denial-of-service (DoS/DDoS) attempts at any layer',
  'Physical attacks or on-premise intrusion',
  'Clickjacking on unauthenticated pages',
  'Self-XSS that requires an attacker-controlled session',
  'Missing security headers without a demonstrable impact',
  'Reports generated solely by automated scanners',
]

const COMMITMENTS = [
  { when: 'Within 1 business day', what: 'We will acknowledge receipt and assign an intake engineer.' },
  { when: 'Within 3 business days', what: 'You will receive an initial severity assessment and a working case ID.' },
  { when: 'Within 14 days', what: 'We commit to a remediation plan with an estimated ship date, or an explanation if we cannot reproduce.' },
  { when: 'Within 90 days', what: 'Critical and High severity issues will be fixed in production or we will write to you directly with a deliberate exception.' },
  { when: 'After the fix', what: 'You will be credited in our Hall of Fame (below), unless you prefer anonymity — your call, not ours.' },
]

const SAFE_HARBOR = [
  'We will not pursue or threaten legal action against researchers who make a good-faith effort to follow this policy.',
  'We will consider your research to be authorized under the Computer Fraud and Abuse Act and similar laws.',
  'We waive any DMCA claims against researchers who avoid data destruction and mass exfiltration.',
  'If a third party tries to enforce against a researcher acting in good faith, we will make clear that the research was authorized.',
]

const HALL_OF_FAME = [
  { year: 2026, who: 'Akira N.', issue: 'SSRF via webhook relay · pre-launch', severity: 'High' },
  { year: 2026, who: 'Rin M.', issue: 'OAuth scope escalation via state param · reproducible', severity: 'Critical' },
  { year: 2026, who: 'Vincent D.', issue: 'Rate-limit bypass on /api/events via Accept header', severity: 'Medium' },
  { year: 2025, who: 'Zola C.', issue: 'Stored XSS via imported .ics description field', severity: 'High' },
  { year: 2025, who: 'Priya S.', issue: 'CSRF on Apple CalDAV account unlink', severity: 'Medium' },
  { year: 2025, who: 'Anon', issue: 'IDOR on shared-calendar scope tokens', severity: 'High' },
]

const SEVERITY_TONE: Record<string, string> = {
  Critical: 'text-rose-300 border-rose-300/30',
  High: 'text-gold border-gold/30',
  Medium: 'text-sky-300 border-sky-300/30',
  Low: 'text-muted-foreground border-border',
}

const PGP_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Comment: Calendro Security · security@calendro.app
Comment: Key ID: 4C71 D3A2 8E05 11B6
Comment: Fingerprint: 7B9C 2F1A 4C71 D3A2 8E05 11B6 A3D9 8F42 6C01 9DE4

mQGNBGZ5pLgBDADx8Q5oF5mB7KJy3qH0oQ3Vt9sZ1Pq6pZpVbE9nCpHvZfAyMxz4
... (this is a placeholder for demonstration — the real key is fetched live at /security/pgp.asc)
-----END PGP PUBLIC KEY BLOCK-----`

export default function SecurityReportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(55% 65% at 50% 0%, rgba(197,163,92,0.10) 0%, rgba(197,163,92,0) 65%)',
          }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-2">
          <Breadcrumbs items={[{ label: 'Security', href: '/security' }, { label: 'Report' }]} />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/25 bg-gold/5 font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-5">
            <Shield className="h-3 w-3" aria-hidden />
            Responsible disclosure · v2.1
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-foreground">
            Report a vulnerability.
          </h1>
          <p className="mt-6 font-display italic text-xl md:text-2xl text-foreground/90 leading-relaxed max-w-3xl">
            If you&apos;ve found a security issue in Calendro, we want to hear about it before anyone else does.
          </p>
          <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
            This page describes three ways to reach us, what we promise in return, what is in scope, and — most
            importantly — a safe-harbor policy that says we will treat your research as authorized.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:security@calendro.app"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
            >
              <Mail className="h-4 w-4" aria-hidden />
              security@calendro.app
            </a>
            <Link
              href="#hall-of-fame"
              className="inline-flex items-center gap-1.5 h-11 px-5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              See the hall of fame <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              How to reach us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Three channels. Pick the one that matches the risk level of what you found.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {CHANNELS.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={i * 60}>
                  <article
                    className={`h-full rounded-2xl border p-6 flex flex-col ${
                      c.primary
                        ? 'border-gold/35 bg-gradient-to-br from-gold/[0.06] via-[#131318] to-[#131318]'
                        : 'border-border bg-[#131318]'
                    }`}
                  >
                    {c.primary && (
                      <span className="self-start mb-4 inline-flex items-center px-2 py-0.5 rounded-full bg-gold text-[#0c0c0f] text-[9px] font-mono uppercase tracking-wider">
                        Recommended
                      </span>
                    )}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/25 flex items-center justify-center mb-4">
                      <Icon className="h-4 w-4 text-gold" aria-hidden />
                    </div>
                    <h3 className="font-display text-xl text-foreground tracking-tight">{c.title}</h3>
                    <div className="mt-2 font-mono text-[13px] text-gold break-all">{c.detail}</div>
                    <p className="mt-3 text-[13.5px] text-muted-foreground leading-relaxed flex-1">
                      {c.note}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border bg-[#0a0a0e]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Scope
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              What&apos;s in scope, what isn&apos;t, and why it matters.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-emerald-300/25 bg-gradient-to-br from-emerald-400/[0.04] to-transparent p-6 md:p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-emerald-400/10 border border-emerald-300/30 flex items-center justify-center">
                  <Check className="h-4 w-4 text-emerald-300" aria-hidden />
                </div>
                <h3 className="font-display text-xl text-emerald-200 tracking-tight">In scope</h3>
              </div>
              <ul className="space-y-2.5">
                {SCOPE_IN.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[14px] text-foreground/90">
                    <span className="w-1 h-1 rounded-full bg-emerald-300 mt-2.5 shrink-0" aria-hidden />
                    <span className="font-mono">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-300/25 bg-gradient-to-br from-rose-400/[0.04] to-transparent p-6 md:p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-rose-400/10 border border-rose-300/30 flex items-center justify-center">
                  <X className="h-4 w-4 text-rose-300" aria-hidden />
                </div>
                <h3 className="font-display text-xl text-rose-200 tracking-tight">Out of scope</h3>
              </div>
              <ul className="space-y-2.5">
                {SCOPE_OUT.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[14px] text-foreground/90">
                    <span className="w-1 h-1 rounded-full bg-rose-300 mt-2.5 shrink-0" aria-hidden />
                    <span className="text-muted-foreground">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our commitments */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/25 flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5 text-gold" aria-hidden />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-2">
                What we promise
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Our response timeline, in writing.
              </h2>
            </div>
          </div>
          <ol className="divide-y divide-border/70 border-y border-border/70">
            {COMMITMENTS.map((c, i) => (
              <li key={i} className="py-5 flex items-start gap-6">
                <span className="font-mono text-[11px] text-gold uppercase tracking-[0.2em] w-40 shrink-0 pt-1">
                  {c.when}
                </span>
                <p className="text-[15px] text-foreground/90 leading-relaxed">{c.what}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-2xl border border-border bg-[#131318] p-5 md:p-6">
            <p className="text-[13px] text-muted-foreground leading-relaxed">
              Response windows are measured in <span className="text-foreground">business days</span> in the reporter&apos;s
              timezone, which we read from the timestamp of your initial contact. We do not expect you to work around
              our hours.
            </p>
          </div>
        </div>
      </section>

      {/* Safe harbor */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border bg-[#0a0a0e]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-emerald-400/5 border border-emerald-300/25 flex items-center justify-center shrink-0">
              <Scale className="h-5 w-5 text-emerald-300" aria-hidden />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300/80 mb-2">
                Safe harbor
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                If you act in good faith, we act the same.
              </h2>
            </div>
          </div>
          <ul className="space-y-4">
            {SAFE_HARBOR.map((s, i) => (
              <li key={i} className="flex items-start gap-4 rounded-2xl border border-border bg-[#131318] p-5 md:p-6">
                <Shield className="h-5 w-5 text-emerald-300/80 shrink-0 mt-0.5" aria-hidden />
                <p className="text-[15px] text-foreground/90 leading-relaxed">{s}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[13px] text-muted-foreground italic text-center leading-relaxed">
            This safe-harbor policy was drafted by our external counsel and reviewed by two independent researchers.
            You can find the full text at{' '}
            <Link href="/legal/safe-harbor" className="text-gold hover:underline">
              /legal/safe-harbor
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Hall of fame */}
      <section id="hall-of-fame" className="py-16 md:py-24 px-5 md:px-8 border-b border-border scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/25 flex items-center justify-center shrink-0">
              <Trophy className="h-5 w-5 text-gold" aria-hidden />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-2">
                Hall of fame
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                The researchers who made us better, by name.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                Credited with their consent. Anonymous at their request. The list is short on purpose — we prefer to
                thank specifically rather than generically.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-12 gap-px bg-border text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground/80">
              <div className="col-span-2 bg-[#0c0c0f] p-4">Year</div>
              <div className="col-span-3 bg-[#0c0c0f] p-4">Researcher</div>
              <div className="col-span-5 bg-[#0c0c0f] p-4">Finding</div>
              <div className="col-span-2 bg-[#0c0c0f] p-4">Severity</div>
            </div>
            {HALL_OF_FAME.map((h, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-px bg-border border-b border-border/60 last:border-0"
              >
                <div className="col-span-2 bg-[#131318] p-4 font-mono text-[12px] text-gold tabular-nums">
                  {h.year}
                </div>
                <div className="col-span-3 bg-[#131318] p-4 font-display text-[15px] text-foreground tracking-tight">
                  {h.who}
                </div>
                <div className="col-span-5 bg-[#131318] p-4 text-[13px] text-muted-foreground leading-relaxed">
                  {h.issue}
                </div>
                <div className="col-span-2 bg-[#131318] p-4">
                  <span
                    className={`inline-flex items-center h-6 px-2.5 rounded-full border text-[10px] font-mono uppercase tracking-wider ${SEVERITY_TONE[h.severity]}`}
                  >
                    {h.severity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PGP key */}
      <section className="py-16 md:py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/25 flex items-center justify-center shrink-0">
              <KeyRound className="h-5 w-5 text-gold" aria-hidden />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-2">
                PGP public key
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                For when the report itself is sensitive.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                The authoritative copy is at{' '}
                <a href="/security/pgp.asc" className="text-gold hover:underline">
                  /security/pgp.asc
                </a>
                . We rotate keys annually and publish the rotation in our{' '}
                <Link href="/changelog" className="text-gold hover:underline">
                  /changelog
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-[#0c0c0f] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-[#131318]">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80">
                security@calendro.app · fingerprint 7B9C 2F1A 4C71 D3A2 8E05 11B6 A3D9 8F42 6C01 9DE4
              </span>
              <a
                href="/security/pgp.asc"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-gold hover:underline"
              >
                Download <ArrowUpRight className="h-3 w-3" aria-hidden />
              </a>
            </div>
            <pre className="p-5 overflow-x-auto text-[11.5px] leading-relaxed font-mono text-foreground/80 whitespace-pre">
              {PGP_KEY}
            </pre>
          </div>
        </div>
      </section>

      <CTA
        title="We would rather hear from you than read about you."
        subtitle="If you're on the fence about whether it counts as a vulnerability — send it anyway. We'll tell you, kindly."
        primary={{ label: 'Email security@calendro.app', href: 'mailto:security@calendro.app' }}
        secondary={{ label: 'Read our security overview', href: '/security' }}
      />
    </>
  )
}
