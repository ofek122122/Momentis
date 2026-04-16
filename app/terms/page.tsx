import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen dot-grid">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-8 py-6">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Calendro" className="h-7 w-7" />
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">Calendro</span>
        </Link>
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back
        </Link>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="space-y-3 mb-10">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold/50">Legal</p>
          <h1 className="font-display text-4xl font-bold">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Last updated: April 2026</p>
        </div>

        <div className="space-y-8">
          <section className="space-y-2">
            <h2 className="font-display text-lg font-semibold text-foreground">Use of service</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Calendro is a personal productivity tool that connects to your Google Calendar.
              By using this application, you agree to use it in accordance with Google&apos;s Terms
              of Service and API policies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-lg font-semibold text-foreground">Data storage</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This application stores only the minimum data required to authenticate you and
              connect to your calendar — specifically, your Google OAuth tokens, profile name,
              and email address.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-lg font-semibold text-foreground">Data usage</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We do not sell, share, or monetize your data. Events parsed by our AI are processed
              in real-time and are not retained beyond your session.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-lg font-semibold text-foreground">Disclaimer</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This software is provided as-is without warranty of any kind. Use at your own risk.
              Calendro is not responsible for any missed events, scheduling conflicts, or data loss.
            </p>
          </section>
        </div>

        <div className="border-t border-border mt-12 pt-6">
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-gold transition-colors"
          >
            Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  )
}
