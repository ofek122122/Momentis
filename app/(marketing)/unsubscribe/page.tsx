import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { Mail, BellOff, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Unsubscribe — Momenties email preferences',
  description: 'Manage your Momenties email preferences. Unsubscribe from marketing emails while keeping critical account notifications.',
  alternates: { canonical: '/unsubscribe' },
  robots: { index: false },
}

const EMAIL_TYPES = [
  {
    id: 'product',
    label: 'Product updates',
    desc: 'New features, improvements, and release notes. Sent 2-3 times per month.',
    defaultOn: true,
  },
  {
    id: 'newsletter',
    label: 'The Quiet Hours newsletter',
    desc: 'Ideas on time, AI, and attention. Every two weeks.',
    defaultOn: true,
  },
  {
    id: 'tips',
    label: 'Tips & power-user content',
    desc: 'Keyboard shortcuts, hidden features, and workflow ideas. Occasional.',
    defaultOn: false,
  },
  {
    id: 'webinars',
    label: 'Webinar invites',
    desc: 'Invitations to live sessions with the Momenties team.',
    defaultOn: false,
  },
]

export default function UnsubscribePage() {
  return (
    <>
      <PageHero
        eyebrow="Email preferences"
        title="Manage your emails."
        lede="Choose which emails you receive from Momenties. Critical account emails — password resets, billing receipts, and security alerts — cannot be disabled."
        crumbs={[{ label: 'Unsubscribe' }]}
      />

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden mb-6">
              <div className="bg-[#0f0f14] border-b border-border px-5 py-3">
                <p className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground/60">Marketing emails</p>
              </div>
              <div className="divide-y divide-border">
                {EMAIL_TYPES.map((type) => (
                  <div key={type.id} className="flex items-start justify-between gap-4 p-5">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">{type.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{type.desc}</p>
                    </div>
                    <div
                      className={`shrink-0 w-10 h-6 rounded-full border transition-colors flex items-center relative cursor-pointer ${
                        type.defaultOn
                          ? 'bg-gold/20 border-gold/30'
                          : 'bg-white/5 border-border'
                      }`}
                      aria-label={`Toggle ${type.label}`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full transition-all absolute ${
                          type.defaultOn ? 'bg-gold right-1' : 'bg-muted-foreground/40 left-1'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-xl border border-border/50 bg-white/[0.015] p-5 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-muted-foreground/40 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Always-on emails</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Security alerts, billing receipts, password resets, and account changes will always be sent. These cannot be disabled per our{' '}
                    <Link href="/terms" className="text-gold hover:text-gold/80 transition-colors">Terms of Service</Link>.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/login"
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors press"
              >
                <Mail className="h-4 w-4" />
                Save preferences
              </Link>
              <button
                type="button"
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors"
              >
                <BellOff className="h-4 w-4" />
                Unsubscribe from all
              </button>
            </div>
            <p className="text-xs text-muted-foreground/60 mt-3 text-center">
              Changes take effect within 24 hours. To re-subscribe, visit your{' '}
              <Link href="/login" className="text-gold hover:text-gold/80 transition-colors">account settings</Link>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
