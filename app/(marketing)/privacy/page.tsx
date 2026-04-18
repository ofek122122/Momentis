import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CheckCircle2, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy — Momenties',
  description:
    'How Momenties collects, uses, and protects your data. We collect very little and are transparent about all of it.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy — Momenties',
    description: 'What we collect, what we do with it, and what we never do.',
    url: '/privacy',
    type: 'website',
  },
}

const DATA_TABLE = [
  { what: 'Name & email', why: 'Account identity', stored: 'Yes — encrypted at rest', retention: 'Until account deleted' },
  { what: 'Google OAuth tokens', why: 'Calendar access', stored: 'Yes — encrypted at rest', retention: 'Until revoked or account deleted' },
  { what: 'Apple CalDAV credentials', why: 'Apple Calendar sync (Pro)', stored: 'Yes — AES-256 encrypted', retention: 'Until removed or account deleted' },
  { what: 'Event text input', why: 'AI parsing', stored: 'No — processed in transit', retention: 'Not retained' },
  { what: 'Voice recordings', why: 'Transcription', stored: 'No — streamed to Deepgram', retention: 'Not retained' },
  { what: 'Photos', why: 'Schedule extraction', stored: 'No — sent to Gemini in-request', retention: 'Not retained' },
  { what: 'Usage analytics', why: 'Product improvement (aggregated)', stored: 'Yes — anonymised', retention: '24 months' },
  { what: 'Error logs', why: 'Debugging', stored: 'Yes — no PII', retention: '30 days' },
]

const NEVER = [
  'Sell your data to anyone, ever',
  'Share your calendar content with advertisers',
  'Use your event text to train AI models without consent',
  'Send you marketing emails without explicit opt-in',
  'Retain voice or image inputs after processing',
  'Transfer data outside of GDPR-compliant infrastructure',
]

const THIRD_PARTIES = [
  { name: 'Google (Gemini AI)', purpose: 'Natural language and image parsing', region: 'USA', link: 'https://policies.google.com/privacy' },
  { name: 'Deepgram', purpose: 'Voice-to-text transcription', region: 'USA', link: 'https://deepgram.com/privacy' },
  { name: 'Supabase', purpose: 'Database hosting', region: 'EU (eu-west-1)', link: 'https://supabase.com/privacy' },
  { name: 'Vercel', purpose: 'Web hosting and edge delivery', region: 'Global CDN', link: 'https://vercel.com/legal/privacy-policy' },
  { name: 'Stripe', purpose: 'Payment processing', region: 'USA/EU', link: 'https://stripe.com/privacy' },
  { name: 'Resend', purpose: 'Transactional email', region: 'USA', link: 'https://resend.com/legal/privacy-policy' },
]

const SECTIONS = [
  {
    id: 'overview',
    title: '1. Who we are',
    body: 'Momenties, Inc. is the data controller for the Momenties calendar application ("Service"). We are headquartered in Delaware, United States. For EU users, we comply with GDPR as both data controller and, where applicable, data processor. Our appointed data protection contact is privacy@momenties.app.',
  },
  {
    id: 'lawful',
    title: '2. Lawful basis for processing',
    body: 'We process your data on the following bases: (a) Contract — to provide the Service you signed up for. (b) Legitimate interest — to improve and secure the Service, using anonymised analytics. (c) Consent — for marketing communications, which you can withdraw at any time. We do not rely on legitimate interest for any processing that could override your privacy rights.',
  },
  {
    id: 'rights',
    title: '3. Your rights (GDPR & CCPA)',
    body: 'You have the right to: access all data we hold about you; correct inaccurate data; erase your data ("right to be forgotten"); restrict or object to processing; data portability (export in JSON or CSV); withdraw consent at any time. To exercise any of these rights, visit the Data page in your account settings, or email privacy@momenties.app. We will respond within 30 days.',
  },
  {
    id: 'cookies',
    title: '4. Cookies',
    body: 'We use only two cookies: a session cookie (required for login) and an anonymous analytics cookie (for aggregate product metrics). We do not use advertising cookies or third-party tracking pixels. You can manage cookie preferences on our Cookies page.',
  },
  {
    id: 'security',
    title: '5. Security',
    body: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). OAuth tokens and CalDAV credentials are encrypted with a server-side key and never exposed in API responses. We conduct annual penetration tests and maintain a responsible disclosure program at /security/report.',
  },
  {
    id: 'children',
    title: '6. Children\'s privacy',
    body: 'The Service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn we have collected such information, we will delete it promptly. Parents who believe we may have collected data from a child can contact us at privacy@momenties.app.',
  },
  {
    id: 'changes',
    title: '7. Changes to this policy',
    body: 'We will notify registered users of material changes to this policy by email at least 14 days before they take effect. Non-material updates (typos, clarifications) will be noted by updating the "Last updated" date. Your continued use after changes take effect constitutes acceptance.',
  },
  {
    id: 'contact',
    title: '8. Contact',
    body: 'For privacy inquiries: privacy@momenties.app. For urgent data concerns: security@momenties.app. Postal: Momenties, Inc., 1234 Market St, Wilmington, DE 19801, USA.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede="We collect very little. We process what we must. We never sell anything. Here's every detail, in plain language. Last updated April 12, 2026."
        crumbs={[{ label: 'Legal' }, { label: 'Privacy' }]}
      />

      {/* What we collect table */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Data inventory</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Every piece of data we collect.</h2>
            <p className="mt-2 text-sm text-muted-foreground">Complete inventory. Nothing omitted.</p>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-4 bg-[#0f0f14] border-b border-border text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
                <div className="px-5 py-3">Data</div>
                <div className="px-4 py-3">Why collected</div>
                <div className="px-4 py-3">Stored?</div>
                <div className="px-4 py-3">Retention</div>
              </div>
              {DATA_TABLE.map((row, i) => (
                <div key={row.what} className={`grid grid-cols-4 border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.015]'}`}>
                  <div className="px-5 py-3 text-sm font-medium text-foreground/90">{row.what}</div>
                  <div className="px-4 py-3 text-sm text-muted-foreground">{row.why}</div>
                  <div className="px-4 py-3 text-xs text-muted-foreground">{row.stored}</div>
                  <div className="px-4 py-3 text-xs font-mono text-muted-foreground/70">{row.retention}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Never do */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Commitments</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Things we will never do.</h2>
          </Reveal>
          <div className="space-y-2">
            {NEVER.map((item, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="flex items-start gap-3 rounded-xl border border-border/50 p-4">
                  <XCircle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/90">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={NEVER.length * 40}>
            <div className="mt-3 flex items-start gap-3 rounded-xl border border-gold/20 bg-gold/5 p-4">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/90">
                These commitments are structural, not just policy. The core "no data selling" commitment is written into our company operating agreement — it cannot be changed without dissolving the company.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Third parties */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Subprocessors</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Third-party services we use.</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Complete list. See <Link href="/subprocessors" className="text-gold hover:text-gold/80 transition-colors">full subprocessors page</Link> for Data Processing Agreements.
            </p>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-[#0f0f14] border-b border-border text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
                <div className="px-5 py-3">Provider</div>
                <div className="px-4 py-3">Purpose</div>
                <div className="px-4 py-3">Region</div>
              </div>
              {THIRD_PARTIES.map((t, i) => (
                <div key={t.name} className={`grid grid-cols-3 border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.015]'}`}>
                  <div className="px-5 py-3 text-sm font-medium text-foreground/90">{t.name}</div>
                  <div className="px-4 py-3 text-sm text-muted-foreground">{t.purpose}</div>
                  <div className="px-4 py-3 text-xs font-mono text-muted-foreground/70">{t.region}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Policy sections */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.id} delay={i * 20}>
                <div id={s.id} className="scroll-mt-24">
                  <h2 className="font-display text-lg font-semibold text-foreground mb-3">{s.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-xs font-mono text-muted-foreground/60">Last updated: April 12, 2026</p>
            <div className="flex gap-5">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-gold transition-colors">Terms of service →</Link>
              <Link href="/data" className="text-sm text-muted-foreground hover:text-gold transition-colors">Your data →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
