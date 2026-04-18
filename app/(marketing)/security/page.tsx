import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Lock, Shield, Key, Eye, Server, FileCheck, Users, AlertTriangle, CheckCircle2, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Security — How we protect your calendar',
  description: 'Calendro\'s security & privacy practices. SOC 2 Type II in progress. GDPR compliant. Your calendar is the most revealing document you own — we treat it accordingly.',
  alternates: { canonical: '/security' },
  openGraph: {
    title: 'Calendro Security',
    description: 'SOC 2 in progress. GDPR compliant. End-to-end encrypted sync.',
    url: '/security',
  },
}

const PILLARS = [
  {
    icon: Lock,
    title: 'Encrypted in transit & at rest',
    desc: 'TLS 1.3 everywhere. AES-256-GCM for data at rest. Per-user envelope keys rotated quarterly.',
  },
  {
    icon: Key,
    title: 'Private OAuth tokens',
    desc: 'Google and Apple access tokens live in an encrypted vault with per-request just-in-time decryption. We never see your raw credentials.',
  },
  {
    icon: Eye,
    title: 'Zero third-party tracking',
    desc: 'No Google Analytics. No Facebook pixel. No Segment. Our analytics is self-hosted and aggregated — never per-user.',
  },
  {
    icon: Server,
    title: 'Data isolation',
    desc: 'Each tenant\'s data is isolated at the database row level with enforced Row-Level Security policies. No cross-tenant queries, ever.',
  },
  {
    icon: FileCheck,
    title: 'Audited & compliant',
    desc: 'SOC 2 Type II audit in progress (Q3 2026). GDPR & CCPA compliant. HIPAA-ready on Enterprise tier.',
  },
  {
    icon: Users,
    title: 'Least-privilege access',
    desc: 'Engineers access production only via short-lived session tokens, logged to an immutable audit log, with two-person approval.',
  },
]

const CERTS = [
  { label: 'SOC 2 Type II', status: 'In progress · Q3 2026', ok: false },
  { label: 'GDPR', status: 'Compliant', ok: true },
  { label: 'CCPA', status: 'Compliant', ok: true },
  { label: 'ISO 27001', status: 'Planned · 2027', ok: false },
  { label: 'HIPAA', status: 'Available on Enterprise', ok: true },
  { label: 'DPA available', status: 'Signed within 48h', ok: true },
]

const PRACTICES = [
  { title: 'Penetration testing', body: 'Annual third-party pen-test by a SOC 2 accredited firm. Report available under NDA to Enterprise customers.' },
  { title: 'Vulnerability disclosure', body: 'Responsible disclosure at security@calendro.app. Bug bounty program coming Q3. 72-hour triage, 30-day patch target.' },
  { title: 'Employee security', body: 'FIDO2 hardware keys for every employee. YubiKeys required for any production access. Quarterly security training.' },
  { title: 'Backup & disaster recovery', body: 'Encrypted snapshots every 6 hours, replicated across three regions. RTO: 4 hours. RPO: 15 minutes.' },
  { title: 'Data residency', body: 'EU customers can request data stored in Frankfurt. US customers default to us-east-1. No data leaves the region.' },
  { title: 'Data export & deletion', body: 'Export your entire account (iCal, JSON, CSV) in one click. Deletion is honored within 30 days, irreversibly.' },
]

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security & Privacy"
        title={
          <>
            Your calendar is the most <em className="not-italic text-gold">revealing document</em> you own.
          </>
        }
        lede="We treat it accordingly. Here&apos;s exactly how — no vague marketing, just the engineering."
        crumbs={[{ label: 'Security' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="#certifications"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            See certifications
          </Link>
          <Link
            href="/security/report"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
          >
            Report a vulnerability
          </Link>
        </div>
      </PageHero>

      {/* Pillars */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              Core principles
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Six pillars.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 70}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center mb-5">
                    <p.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              Certifications & compliance
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              The paperwork.
            </h2>
          </Reveal>
          <div className="rounded-2xl border border-border overflow-hidden">
            {CERTS.map((c) => (
              <div
                key={c.label}
                className="flex items-center justify-between gap-4 px-5 py-4 border-b border-border last:border-b-0 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3">
                  {c.ok ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                  )}
                  <span className="text-sm font-medium text-foreground">{c.label}</span>
                </div>
                <span className="text-xs font-mono text-muted-foreground">{c.status}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6 leading-relaxed text-center max-w-xl mx-auto">
            Enterprise customers can request a DPA, Sub-Processor list, pen-test summary, and our SOC 2 Type I report under NDA by emailing{' '}
            <a href="mailto:security@calendro.app" className="text-gold hover:underline">
              security@calendro.app
            </a>
            .
          </p>
        </div>
      </section>

      {/* Practices */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              Operational practices
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              How we actually operate.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PRACTICES.map((pr, i) => (
              <Reveal key={pr.title} delay={(i % 2) * 80}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {pr.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pr.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR / rights */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              Your rights
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              You own your data. Always.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Under GDPR, CCPA, and our own policy — whether the law requires it or not — you have the right to:
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Access every piece of data we have about you, in a standard format.',
                'Correct anything that\'s wrong.',
                'Delete your account and all associated data, within 30 days.',
                'Take your data elsewhere, in iCal, JSON, or CSV.',
                'Know exactly which sub-processors we use (our list is public).',
                'Object to any use of your data we haven\'t explicitly explained.',
              ].map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-foreground/90">
                  <Shield className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border hover:border-gold/30 transition-colors text-sm text-foreground"
              >
                Read our full privacy policy
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border hover:border-gold/30 transition-colors text-sm text-foreground"
              >
                <Download className="h-4 w-4" />
                Download DPA template
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Questions?"
        subtitle="Our security team answers every email personally."
        primary={{ label: 'security@calendro.app', href: 'mailto:security@calendro.app' }}
        secondary={{ label: 'Read privacy policy', href: '/privacy' }}
      />
    </>
  )
}
