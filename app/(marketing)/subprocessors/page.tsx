import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Bell, Download, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Subprocessors — Third parties that handle your data',
  description: 'Every third-party service that processes Calendro customer data on our behalf. Updated whenever the list changes, with 30-day advance notice.',
  alternates: { canonical: '/subprocessors' },
  openGraph: {
    title: 'Calendro Subprocessors',
    description: 'Every third-party that handles your data.',
    url: '/subprocessors',
  },
}

type Processor = {
  name: string
  purpose: string
  dataAccessed: string
  region: string
  website: string
  critical?: boolean
}

const INFRASTRUCTURE: Processor[] = [
  { name: 'Google Cloud Platform', purpose: 'Hosting, compute, database', dataAccessed: 'All customer data (encrypted at rest)', region: 'us-east1, europe-west3', website: 'cloud.google.com', critical: true },
  { name: 'Supabase', purpose: 'Managed PostgreSQL database', dataAccessed: 'Customer events, preferences, account metadata', region: 'us-east-1', website: 'supabase.com', critical: true },
  { name: 'Cloudflare', purpose: 'CDN, DNS, WAF, DDoS protection', dataAccessed: 'IP addresses, user-agent, request metadata', region: 'Global edge', website: 'cloudflare.com' },
]

const AI: Processor[] = [
  { name: 'Google Gemini (AI Studio)', purpose: 'Text and image parsing for events', dataAccessed: 'Event-creation inputs only (text, photos)', region: 'us-central1', website: 'ai.google.dev', critical: true },
  { name: 'Deepgram', purpose: 'Voice transcription for voice input', dataAccessed: 'Voice recordings submitted for event creation', region: 'us-east-1', website: 'deepgram.com', critical: true },
]

const OPERATIONS: Processor[] = [
  { name: 'Stripe', purpose: 'Payment processing and billing', dataAccessed: 'Billing address, card via Stripe Elements (we never touch card numbers)', region: 'us-west-2', website: 'stripe.com' },
  { name: 'Resend', purpose: 'Transactional and digest emails', dataAccessed: 'Email address, message content we send you', region: 'us-east-1', website: 'resend.com' },
  { name: 'Sentry', purpose: 'Error monitoring and performance', dataAccessed: 'Error stack traces, anonymized user IDs', region: 'us-west-2', website: 'sentry.io' },
]

const SECTIONS: { title: string; desc: string; rows: Processor[] }[] = [
  { title: 'Infrastructure', desc: 'Hosting, storage, and edge delivery.', rows: INFRASTRUCTURE },
  { title: 'AI processing', desc: 'Only for content you actively submit to be parsed.', rows: AI },
  { title: 'Operations', desc: 'Billing, email delivery, error monitoring.', rows: OPERATIONS },
]

function Row({ p }: { p: Processor }) {
  return (
    <div className="grid grid-cols-[1fr] md:grid-cols-[1.2fr_2fr_1fr_auto] items-start gap-3 md:gap-4 px-5 py-4 border-b border-border last:border-b-0 hover:bg-white/[0.02] transition-colors">
      <div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-foreground">{p.name}</span>
          {p.critical && (
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-gold px-1.5 py-0.5 rounded-full border border-gold/30 bg-gold/5">
              critical
            </span>
          )}
        </div>
        <div className="text-xs font-mono text-muted-foreground mt-0.5">
          <a href={`https://${p.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            {p.website}
          </a>
        </div>
      </div>
      <div className="text-xs md:text-sm text-foreground/90 leading-relaxed">
        <span className="md:hidden text-muted-foreground font-mono text-[10px] uppercase tracking-wider block mb-1">
          Purpose
        </span>
        {p.purpose}
      </div>
      <div className="text-xs text-muted-foreground leading-relaxed">
        <span className="md:hidden text-muted-foreground font-mono text-[10px] uppercase tracking-wider block mb-1">
          Data
        </span>
        {p.dataAccessed}
      </div>
      <div className="text-[10px] font-mono text-muted-foreground/80 md:text-right whitespace-nowrap">
        {p.region}
      </div>
    </div>
  )
}

export default function SubprocessorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title={
          <>
            Every third-party that <em className="not-italic text-gold">touches your data</em>.
          </>
        }
        lede="We publish the complete, up-to-date list of subprocessors and notify all customers 30 days before any addition or change."
        crumbs={[{ label: 'Subprocessors' }]}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="#notify"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            <Bell className="h-4 w-4" /> Subscribe to updates
          </a>
          <Link
            href="/trust"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
          >
            Back to Trust Center
          </Link>
        </div>
      </PageHero>

      {/* Sections */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto space-y-14">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 40}>
              <div>
                <div className="mb-5">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                    {s.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
                <div className="rounded-2xl border border-border overflow-hidden">
                  {s.rows.map((p) => (
                    <Row key={p.name} p={p} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Policy */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto space-y-6 text-[15px] leading-[1.78] text-foreground/85 font-light">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Our policy, in plain English
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p>
              We use subprocessors only where necessary to run the product. Each one is reviewed annually
              for security posture, certifications (SOC 2, ISO 27001, HIPAA where relevant), and for
              whether we still actually need them.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p>
              When we add a new subprocessor, we notify every Enterprise customer 30 days in advance by
              email. For Pro and Free customers, the updated list is always visible on this page; we
              also announce new subprocessors in our monthly product update.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              If you have an active DPA with us, you have the right to object to any new subprocessor.
              We&apos;ll work with you on a resolution or, as a last resort, offer a plan to migrate to
              a legacy configuration.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Notify */}
      <section id="notify" className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-8 w-8 text-gold mx-auto mb-5" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Subscribe to subprocessor updates.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            One email when this list changes. Nothing else. Unsubscribe in one click.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 h-11 px-4 rounded-lg bg-white/5 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:border-gold/40 focus:outline-none"
              aria-label="Email"
            />
            <button
              type="submit"
              className="h-11 px-6 rounded-lg bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <a
            href="#"
            className="mt-5 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold transition-colors"
          >
            <Download className="h-3 w-3" />
            Download PDF version
          </a>
        </div>
      </section>

      <CTA
        title="Questions?"
        subtitle="Our security team will answer procurement questions on the same day."
        primary={{ label: 'security@calendro.app', href: 'mailto:security@calendro.app' }}
        secondary={{ label: 'Back to Trust Center', href: '/trust' }}
      />
    </>
  )
}
