import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata: Metadata = {
  title: 'Cookie policy — What we set, and why',
  description: 'Momenties\'s plain-English cookie policy. No marketing cookies. No third-party trackers. Just the few things we need to keep you signed in.',
  alternates: { canonical: '/cookies' },
  openGraph: {
    title: 'Momenties Cookie Policy',
    description: 'The few cookies we actually set, and why.',
    url: '/cookies',
  },
}

type CookieRow = { name: string; purpose: string; type: 'essential' | 'preference' | 'analytics'; expires: string; party: 'first' | 'third' }

const COOKIES: CookieRow[] = [
  { name: 'momenties-session', purpose: 'Keeps you signed in.', type: 'essential', expires: '30 days', party: 'first' },
  { name: 'momenties-csrf', purpose: 'Protects you from cross-site request forgery.', type: 'essential', expires: 'Session', party: 'first' },
  { name: 'momenties-timezone', purpose: 'Remembers your selected display timezone across devices.', type: 'preference', expires: '1 year', party: 'first' },
  { name: 'momenties-theme', purpose: 'Remembers your theme choice (Obsidian, Paper, Harvest, Botanical, Aurora).', type: 'preference', expires: '1 year', party: 'first' },
  { name: 'cf-clearance', purpose: 'Cloudflare DDoS protection challenge token.', type: 'essential', expires: '30 minutes', party: 'third' },
]

const BUCKETS = [
  {
    title: 'Essential',
    desc: 'Required for the site to work. These are not opt-outable because the product would literally not function without them.',
    rows: COOKIES.filter((c) => c.type === 'essential'),
  },
  {
    title: 'Preferences',
    desc: 'Remember your settings across sessions and devices. You can opt out, but the site will feel less "you."',
    rows: COOKIES.filter((c) => c.type === 'preference'),
  },
  {
    title: 'Analytics',
    desc: 'We don\'t set any. We use self-hosted Plausible, which doesn\'t use cookies at all.',
    rows: COOKIES.filter((c) => c.type === 'analytics'),
  },
]

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cookie policy"
        title={
          <>
            The <em className="not-italic text-gold">few</em> cookies we set.
          </>
        }
        lede="No marketing cookies. No third-party ad trackers. Just the handful of things we need to keep you signed in and remember your preferences."
        crumbs={[{ label: 'Cookies' }]}
      />

      {/* Intro */}
      <section className="py-12 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto text-[15px] leading-[1.78] text-foreground/85 font-light space-y-5">
          <Reveal>
            <p>
              Most cookie policies are written by lawyers for regulators, and they read that way.
              We&apos;ve written ours for you. The important part: Momenties does not use advertising
              cookies, cross-site trackers, or third-party marketing pixels. What we do set, we set
              because the product genuinely needs it.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              The EU&apos;s ePrivacy Directive and GDPR let us skip the cookie banner for strictly
              necessary cookies. We use that exemption responsibly. For preference cookies, we set
              sensible defaults and allow opt-out in Settings.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Buckets */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto space-y-12">
          {BUCKETS.map((b, i) => (
            <Reveal key={b.title} delay={i * 60}>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">
                  {b.title}
                </h2>
                <p className="text-sm text-muted-foreground max-w-2xl mb-5">{b.desc}</p>
                {b.rows.length === 0 ? (
                  <div className="rounded-xl border border-border lux-card p-5">
                    <p className="text-sm text-muted-foreground">
                      None. We use self-hosted, cookie-less analytics (Plausible) so we can see
                      rough traffic shape without tracking individual users.
                    </p>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-border overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-white/[0.02] border-b border-border">
                        <tr>
                          <th className="text-left px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                            Cookie
                          </th>
                          <th className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                            Purpose
                          </th>
                          <th className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                            Expires
                          </th>
                          <th className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                            Party
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {b.rows.map((r, ri) => (
                          <tr
                            key={r.name}
                            className={`border-b border-border last:border-b-0 ${ri % 2 === 0 ? '' : 'bg-white/[0.012]'}`}
                          >
                            <td className="px-5 py-3.5 font-mono text-xs text-foreground">{r.name}</td>
                            <td className="px-4 py-3.5 text-xs text-muted-foreground">{r.purpose}</td>
                            <td className="px-4 py-3.5 text-xs font-mono text-muted-foreground">{r.expires}</td>
                            <td className="px-4 py-3.5 text-xs font-mono">
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[9px] uppercase tracking-[0.15em] ${
                                  r.party === 'first'
                                    ? 'text-emerald-300 border-emerald-400/30 bg-emerald-500/10'
                                    : 'text-sky-300 border-sky-400/30 bg-sky-500/10'
                                }`}
                              >
                                {r.party === 'first' ? '1st-party' : '3rd-party'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Opt-out */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto space-y-6 text-[15px] leading-[1.78] text-foreground/85 font-light">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Your controls
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p>
              <strong className="text-foreground font-semibold">Preference cookies</strong> can be
              cleared at any time in Settings → Account → &quot;Clear preferences.&quot; Your theme and
              timezone reset to defaults; you can set them again.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p>
              <strong className="text-foreground font-semibold">Essential cookies</strong> cannot be
              opted out. If you don&apos;t want to be signed in, sign out — the session cookie expires
              immediately. If you never want essential cookies, you can&apos;t use the product (in which
              case we understand, and we&apos;re sorry to see you go).
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              <strong className="text-foreground font-semibold">Third-party cookies</strong> on our
              site come only from Cloudflare (DDoS protection). They do not identify you personally
              and are essential.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Questions about cookies?"
        subtitle="Our privacy team answers every email personally, usually within 24 hours."
        primary={{ label: 'privacy@momenties.app', href: 'mailto:privacy@momenties.app' }}
        secondary={{ label: 'Read the full privacy policy', href: '/privacy' }}
      />
    </>
  )
}
