import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Lock, CheckCircle2, Activity, FileText, Eye, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Trust — Security, privacy, and reliability',
  description: 'The one-page overview of Calendro\'s security posture, compliance, subprocessors, and uptime. Everything an IT reviewer needs.',
  alternates: { canonical: '/trust' },
  openGraph: {
    title: 'Calendro Trust Center',
    description: 'Security, privacy, and reliability at a glance.',
    url: '/trust',
  },
}

const BADGES = [
  { label: 'SOC 2 Type II', status: 'In progress · Q3 2026' },
  { label: 'GDPR', status: 'Compliant' },
  { label: 'CCPA', status: 'Compliant' },
  { label: 'HIPAA', status: 'Enterprise tier' },
  { label: 'ISO 27001', status: 'Planned 2027' },
  { label: 'DPA available', status: '48-hour turnaround' },
]

const LINKS = [
  { icon: Shield, title: 'Security overview', desc: 'Encryption, access control, pen-tests, and incident response.', href: '/security' },
  { icon: Lock, title: 'Privacy policy', desc: 'What we collect, what we don\'t, and what you can do about it.', href: '/privacy' },
  { icon: Activity, title: 'System status', desc: 'Real-time service health, 90-day uptime, and incident history.', href: '/status' },
  { icon: Eye, title: 'Accessibility statement', desc: 'WCAG 2.2 AA conformance report and feedback channel.', href: '/accessibility' },
  { icon: FileText, title: 'Terms of service', desc: 'The legal relationship between you and Calendro.', href: '/terms' },
  { icon: CheckCircle2, title: 'Subprocessors', desc: 'Every third-party that handles your data.', href: '#subprocessors' },
]

const SUBPROCESSORS = [
  { name: 'Google Cloud Platform', purpose: 'Hosting & database', region: 'us-east1, europe-west3' },
  { name: 'Supabase', purpose: 'Managed Postgres', region: 'us-east-1' },
  { name: 'Google Gemini', purpose: 'AI parsing (text + image)', region: 'us-central1' },
  { name: 'Deepgram', purpose: 'Voice transcription', region: 'us-east-1' },
  { name: 'Stripe', purpose: 'Billing', region: 'us-west-2' },
  { name: 'Cloudflare', purpose: 'CDN, DNS, WAF', region: 'Global' },
  { name: 'Resend', purpose: 'Transactional email', region: 'us-east-1' },
  { name: 'Sentry', purpose: 'Error monitoring', region: 'us-west-2' },
]

export default function TrustPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust center"
        title={
          <>
            Everything you need to <em className="not-italic text-gold">say yes</em>.
          </>
        }
        lede="Security, privacy, compliance, and reliability — consolidated on one page so your IT team doesn't have to hunt."
        crumbs={[{ label: 'Trust' }]}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:security@calendro.app"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            Request documents
          </a>
          <Link
            href="/status"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
          >
            View live status
          </Link>
        </div>
      </PageHero>

      {/* Badge grid */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-6">
              Compliance at a glance
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {BADGES.map((b, i) => (
              <Reveal key={b.label} delay={(i % 3) * 50}>
                <div className="rounded-xl border border-border lux-card px-5 py-4 flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-foreground">{b.label}</span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-gold/70 text-right">
                    {b.status}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deep links */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Go deeper.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {LINKS.map((l, i) => (
              <Reveal key={l.title} delay={(i % 3) * 70}>
                <Link
                  href={l.href}
                  className="group block rounded-xl border border-border lux-card p-6 h-full"
                >
                  <l.icon className="h-5 w-5 text-gold mb-4" />
                  <h3 className="text-sm font-medium text-foreground mb-2 group-hover:text-gold transition-colors">
                    {l.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{l.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs text-gold opacity-70 group-hover:opacity-100 transition-opacity">
                    Open <ArrowUpRight className="h-3 w-3" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subprocessors */}
      <section id="subprocessors" className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  Subprocessors
                </h2>
                <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                  Every third-party service that processes customer data on our behalf. We notify
                  all customers 30 days before any addition or change.
                </p>
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">
                Last updated · Apr 2026
              </span>
            </div>
          </Reveal>
          <div className="rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.02] border-b border-border">
                <tr>
                  <th className="text-left px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Subprocessor
                  </th>
                  <th className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Purpose
                  </th>
                  <th className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Region
                  </th>
                </tr>
              </thead>
              <tbody>
                {SUBPROCESSORS.map((s, i) => (
                  <tr
                    key={s.name}
                    className={`border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.012]'}`}
                  >
                    <td className="px-5 py-3.5 text-foreground/90 font-medium">{s.name}</td>
                    <td className="px-4 py-3.5 text-muted-foreground text-xs">{s.purpose}</td>
                    <td className="px-4 py-3.5 text-muted-foreground text-xs font-mono">{s.region}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-5">
            Want to be notified when this list changes? Email{' '}
            <a href="mailto:security@calendro.app" className="text-gold hover:underline">
              security@calendro.app
            </a>{' '}
            with &quot;subprocessor updates&quot; in the subject.
          </p>
        </div>
      </section>

      <CTA
        title="Bring your IT team."
        subtitle="We'll happily join a call, share documents under NDA, and answer every question."
        primary={{ label: 'Request a security review', href: 'mailto:security@calendro.app' }}
        secondary={{ label: 'See enterprise tier', href: '/enterprise' }}
      />
    </>
  )
}
