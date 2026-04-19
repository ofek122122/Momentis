import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing comparison — Momenties vs Google Calendar, Cron, Fantastical',
  description:
    'Compare Momenties pricing against Google Calendar, Cron, Fantastical, and other calendar apps. What each costs and what you get.',
  alternates: { canonical: '/compare/price' },
  openGraph: {
    title: 'Momenties vs. the rest — pricing comparison',
    description: 'Every calendar app priced side by side.',
    url: '/compare/price',
    type: 'website',
  },
}

type App = {
  name: string
  free: string
  paid: string
  aiParsing: boolean | string
  appleSync: boolean
  voiceAdd: boolean
  analytics: boolean | string
  smartSchedule: boolean
  note?: string
}

const APPS: App[] = [
  {
    name: 'Momenties',
    free: 'Free forever',
    paid: '$12/mo (Pro)',
    aiParsing: 'Unlimited (Pro) / 3/day (Free)',
    appleSync: true,
    voiceAdd: true,
    analytics: true,
    smartSchedule: true,
    note: 'Momenties',
  },
  {
    name: 'Google Calendar',
    free: 'Free forever',
    paid: 'N/A (Workspace: $6+/user/mo)',
    aiParsing: false,
    appleSync: false,
    voiceAdd: false,
    analytics: false,
    smartSchedule: false,
  },
  {
    name: 'Fantastical',
    free: 'Limited',
    paid: '$4.75/mo (annual)',
    aiParsing: 'Basic NLP only',
    appleSync: true,
    voiceAdd: true,
    analytics: false,
    smartSchedule: false,
  },
  {
    name: 'Cron',
    free: 'Free (invite only)',
    paid: 'N/A (free for now)',
    aiParsing: false,
    appleSync: true,
    voiceAdd: false,
    analytics: false,
    smartSchedule: false,
  },
  {
    name: 'Reclaim.ai',
    free: 'Limited',
    paid: '$8/mo (Starter)',
    aiParsing: false,
    appleSync: false,
    voiceAdd: false,
    analytics: 'Basic',
    smartSchedule: true,
  },
  {
    name: 'Motion',
    free: '7-day trial only',
    paid: '$19/mo (individual)',
    aiParsing: false,
    appleSync: false,
    voiceAdd: false,
    analytics: false,
    smartSchedule: true,
  },
]

const FEATURES = [
  { key: 'aiParsing', label: 'AI event parsing' },
  { key: 'voiceAdd', label: 'Voice-to-calendar' },
  { key: 'appleSync', label: 'Apple Calendar sync' },
  { key: 'analytics', label: 'Calendar analytics' },
  { key: 'smartSchedule', label: 'Smart scheduling' },
] as const

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle2 className="h-4 w-4 text-emerald-400 mx-auto" />
  if (value === false) return <XCircle className="h-4 w-4 text-muted-foreground/30 mx-auto" />
  return <span className="text-xs font-mono text-muted-foreground text-center block">{value}</span>
}

export default function ComparePricePage() {
  return (
    <>
      <PageHero
        eyebrow="Price comparison"
        title={
          <>
            Every calendar,
            <br />
            <em className="not-italic text-gold">priced honestly.</em>
          </>
        }
        lede="We've compared Momenties against Google Calendar, Fantastical, Cron, Reclaim, and Motion. Pricing and features accurate as of April 2026."
        crumbs={[{ label: 'Compare' }, { label: 'Price' }]}
      />

      {/* Main comparison table */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <Reveal>
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-5 py-4 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground w-32">App</th>
                  <th className="px-4 py-4 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground text-center">Free plan</th>
                  <th className="px-4 py-4 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground text-center">Paid plan</th>
                  {FEATURES.map((f) => (
                    <th key={f.key} className="px-4 py-4 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground text-center leading-snug">{f.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {APPS.map((app, i) => {
                  const isUs = app.note === 'Momenties'
                  return (
                    <tr
                      key={app.name}
                      className={`border-b border-border last:border-b-0 transition-colors ${
                        isUs ? 'bg-gold/5' : i % 2 === 0 ? '' : 'bg-white/[0.015]'
                      }`}
                    >
                      <td className="px-5 py-4">
                        <span className={`text-sm font-medium ${isUs ? 'text-gold' : 'text-foreground'}`}>
                          {app.name}
                          {isUs && <span className="ml-1.5 text-[9px] font-mono uppercase tracking-wider bg-gold/20 text-gold border border-gold/20 px-1.5 py-0.5 rounded-full">Us</span>}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center text-xs font-mono text-muted-foreground">{app.free}</td>
                      <td className="px-4 py-4 text-center text-xs font-mono text-muted-foreground">{app.paid}</td>
                      {FEATURES.map((f) => (
                        <td key={f.key} className="px-4 py-4">
                          <FeatureCell value={app[f.key] as boolean | string} />
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-[11px] font-mono text-muted-foreground/50 mt-4">
              Pricing and features accurate as of April 2026. Sources: each app&apos;s public pricing page.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Individual comparisons */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Deep dives</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Individual comparisons.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { slug: 'google-calendar', name: 'Google Calendar', summary: 'The base layer. Momenties adds AI input, analytics, and focus features on top.' },
              { slug: 'fantastical', name: 'Fantastical', summary: 'Fantastical is native-first. Momenties is AI-first. Different philosophies, different users.' },
              { slug: 'reclaim', name: 'Reclaim.ai', summary: 'Reclaim automates scheduling. Momenties simplifies it. Same problem, opposite approach.' },
              { slug: 'motion', name: 'Motion', summary: 'Motion manages tasks and calendar together. Momenties does calendar exceptionally well.' },
              { slug: 'cron', name: 'Cron', summary: 'Cron is the power-user Google Calendar. Momenties adds the AI layer on top.' },
              { slug: 'fantastical', name: 'Apple Calendar', summary: 'Apple Calendar is built-in and free. Momenties syncs with it and adds everything else.' },
            ].map((c, i) => (
              <Reveal key={`${c.slug}-${i}`} delay={(i % 3) * 50}>
                <div className="rounded-xl border border-border lux-card p-5 h-full flex flex-col">
                  <h3 className="text-sm font-medium text-foreground mb-2">Momenties vs. {c.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">{c.summary}</p>
                  <Link
                    href={`/compare/${c.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold/80 transition-colors"
                  >
                    Full comparison <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Convinced? Start free."
        subtitle="No credit card. Ninety seconds to your first event. Cancel any time."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'See full pricing', href: '/pricing' }}
      />
    </>
  )
}
