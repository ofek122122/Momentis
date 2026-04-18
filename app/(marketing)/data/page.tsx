import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import {
  Download, FileJson, FileText, FileCode, Database, Lock, Trash2,
  RefreshCw, Shield, ArrowUpRight, CheckCircle2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Your Data — Portability, export, and deletion',
  description:
    'Your Momenties data belongs to you. Export everything as JSON, iCal, or CSV. Request full deletion. No vendor lock-in, ever.',
  alternates: { canonical: '/data' },
  openGraph: {
    title: 'Your Data — Momenties',
    description: 'Export everything. Delete everything. No lock-in.',
    url: '/data',
    type: 'website',
  },
}

const EXPORTS = [
  {
    icon: FileJson,
    format: 'JSON',
    desc: 'Full structured export of all events, calendars, preferences, and metadata. Machine-readable. Every field we store.',
    details: ['All events with full metadata', 'Calendar structure & colors', 'User preferences', 'Parsing history'],
  },
  {
    icon: FileText,
    format: 'iCal (.ics)',
    desc: 'Standard iCalendar format, compatible with every calendar app in existence. Import anywhere instantly.',
    details: ['RFC 5545 compliant', 'RRULE for recurring events', 'TZID-aware timestamps', 'Works with Apple, Google, Outlook'],
  },
  {
    icon: FileCode,
    format: 'CSV',
    desc: 'Flat spreadsheet export. Useful for analyzing your scheduling patterns in Excel, Google Sheets, or Python.',
    details: ['One row per event', 'All fields as columns', 'Configurable date range', 'UTF-8 encoded'],
  },
  {
    icon: Database,
    format: 'SQL dump',
    desc: 'Available on Enterprise tier. A full PostgreSQL dump of your organization\'s data, encrypted at rest.',
    details: ['Full schema included', 'AES-256 encrypted', 'Verified checksum', 'Enterprise only'],
  },
]

const RIGHTS = [
  {
    icon: Download,
    title: 'Right to access',
    desc: 'Request a full copy of everything we hold about you — events, metadata, processing logs, auth sessions. Delivered in 5 business days.',
  },
  {
    icon: RefreshCw,
    title: 'Right to rectification',
    desc: 'We store what you give us. You can edit or delete any event from within the app. Contact us for account-level corrections.',
  },
  {
    icon: Trash2,
    title: 'Right to deletion',
    desc: 'Delete your account and all data permanently. We purge everything within 30 days — including backups — with a confirmation email.',
  },
  {
    icon: Lock,
    title: 'Right to restriction',
    desc: 'Pause our AI processing of your events at any time in Settings → Privacy. Your data stays; AI parsing stops.',
  },
]

const PRINCIPLES = [
  'We never sell your data to third parties. Not now, not ever.',
  'We never train AI models on your personal calendar data.',
  'We never show you ads, and your data is never used to target ads elsewhere.',
  'We store the minimum necessary. We don\'t log your events for our own analytics.',
  'We tell you plainly what we store, why, and for how long.',
]

export default function DataPage() {
  return (
    <>
      <PageHero
        eyebrow="Your data"
        title={
          <>
            It&apos;s yours.
            <br />
            <em className="not-italic text-gold">All of it. Always.</em>
          </>
        }
        lede="Your calendar data belongs to you — not to Momenties. Export everything in any format, delete your account instantly, and move your data anywhere. No lock-in. No ransom. No exceptions."
        crumbs={[{ label: 'Your data' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press"
          >
            Export my data
          </Link>
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 h-10 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Privacy policy <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </PageHero>

      {/* Principles */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Our commitment</p>
            <h2 className="font-display text-2xl font-bold text-foreground tracking-tight">
              Five things we will never do.
            </h2>
          </Reveal>
          <div className="space-y-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/90 leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Export formats */}
      <section className="py-24 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Export formats</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Take your data anywhere.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              One-click export from Settings. No cooldown, no support ticket, no waiting period. Every format is always current — we export the live database, not a stale snapshot.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {EXPORTS.map((e, i) => (
              <Reveal key={e.format} delay={(i % 2) * 60}>
                <div className="rounded-2xl border border-border lux-card p-6 h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/10 flex items-center justify-center shrink-0">
                      <e.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{e.format}</h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {e.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-foreground/70">
                        <span className="w-1 h-1 rounded-full bg-gold/50 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR rights */}
      <section className="py-24 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              GDPR & privacy rights
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Your rights. Exercisable from the app.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {RIGHTS.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-border flex items-center justify-center shrink-0">
                    <r.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1.5">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we store */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Transparency</p>
            <h2 className="font-display text-2xl font-bold text-foreground tracking-tight">
              Exactly what we store.
            </h2>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="bg-[#0f0f14] px-5 py-3 border-b border-border">
                <span className="font-mono text-[11px] text-muted-foreground">Data inventory</span>
              </div>
              <div className="divide-y divide-border bg-[#080810]">
                {[
                  { what: 'Events', purpose: 'Show you your schedule', where: 'Supabase (EU region)', retention: 'Until deletion' },
                  { what: 'OAuth tokens', purpose: 'Sync with Google / Apple Calendar', where: 'Supabase (encrypted)', retention: 'Until revoked' },
                  { what: 'Session data', purpose: 'Keep you signed in', where: 'Database + cookie', retention: '30 days inactive' },
                  { what: 'Parse inputs', purpose: 'Improve parsing accuracy', where: 'Anonymised log', retention: '14 days' },
                  { what: 'Voice audio', purpose: 'Transcription only (Deepgram)', where: 'Not stored by us', retention: 'Not stored' },
                  { what: 'Photo inputs', purpose: 'Event extraction (Gemini)', where: 'Not stored by us', retention: 'Not stored' },
                  { what: 'Analytics', purpose: 'Product improvement (anonymised)', where: 'Aggregated only', retention: '24 months' },
                ].map((row) => (
                  <div key={row.what} className="grid grid-cols-2 md:grid-cols-4 px-5 py-3 gap-4 text-xs">
                    <span className="font-medium text-foreground/90">{row.what}</span>
                    <span className="text-muted-foreground">{row.purpose}</span>
                    <span className="text-muted-foreground hidden md:block">{row.where}</span>
                    <span className="text-muted-foreground hidden md:block">{row.retention}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/privacy"
                className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
              >
                Full privacy policy <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/subprocessors"
                className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
              >
                Subprocessors list <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/security"
                className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
              >
                Security page <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Delete account */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">
                    Delete your account
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    You can delete your account and all associated data from Settings → Account → Delete account. Deletion is permanent and irreversible. All data is purged from live databases within 24 hours and from backups within 30 days.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/login"
                      className="inline-flex items-center gap-2 h-9 px-5 text-sm rounded-full border border-rose-500/30 text-rose-400 hover:bg-rose-500/10 transition-colors"
                    >
                      Go to settings
                    </Link>
                    <a
                      href="mailto:privacy@momenties.app"
                      className="inline-flex items-center gap-2 h-9 px-5 text-sm rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Contact privacy team
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="A calendar that respects you."
        subtitle="No ads. No selling your data. No dark patterns. Just a calendar."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Read the privacy policy', href: '/privacy' }}
      />
    </>
  )
}
