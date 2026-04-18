import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPage() {
  return (
    <div className="dot-grid">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="space-y-3 mb-10">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold/50">Legal</p>
          <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: April 2026</p>
        </div>

        <div className="space-y-8">
          <section className="space-y-2">
            <h2 className="font-display text-lg font-semibold text-foreground">What we collect</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your Google account name, email address, and OAuth tokens (access token + refresh token). Nothing else.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-lg font-semibold text-foreground">What we access</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your Google Calendar events — to display them in the app and to create new events on your behalf.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-lg font-semibold text-foreground">What we do not do</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We do not sell your data, share it with third parties, or read your calendar for any purpose other than rendering it within Momenties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-lg font-semibold text-foreground">AI processing</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Text, voice transcripts, and images you submit are sent to Google Gemini and/or Deepgram for event parsing. These are processed in real-time under their respective privacy policies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-lg font-semibold text-foreground">Data retention</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your tokens are stored in our database only while you have an active account. Deleting your account removes all stored data.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-lg font-semibold text-foreground">Contact</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For privacy questions, open an issue in the project repository.
            </p>
          </section>
        </div>

        <div className="border-t border-border mt-12 pt-6">
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-gold transition-colors"
          >
            Terms of Service →
          </Link>
        </div>
      </div>
    </div>
  )
}
