import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { StatCounter } from '@/components/marketing/StatCounter'
import { Users, Briefcase, TrendingUp, Heart, Code2, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Open metrics — Calendro in public',
  description: 'Revenue, headcount, churn, runway — the real numbers behind Calendro, updated monthly. A small company, fully in the open.',
  alternates: { canonical: '/open' },
  openGraph: {
    title: 'Calendro Open Metrics',
    description: 'Our real numbers, updated monthly.',
    url: '/open',
  },
}

const METRICS = [
  { value: 28400, suffix: '', label: 'Weekly active users', icon: Users },
  { value: 54000, prefix: '$', suffix: ' MRR', label: 'Monthly recurring revenue', icon: TrendingUp },
  { value: 14, suffix: '', label: 'Full-time team', icon: Users },
  { value: 3, suffix: '.1%', label: 'Monthly churn (gross)', icon: Heart },
  { value: 4.9, suffix: ' / 5', label: 'User satisfaction', icon: Heart },
  { value: 127, suffix: '', label: 'Pull requests this quarter', icon: Code2 },
]

const MONTHLY = [
  { month: 'Apr 2026', mrr: 54000, wau: 28400, team: 14, churn: '3.1%', nps: 62 },
  { month: 'Mar 2026', mrr: 48200, wau: 25100, team: 14, churn: '3.4%', nps: 60 },
  { month: 'Feb 2026', mrr: 41800, wau: 22800, team: 13, churn: '3.6%', nps: 58 },
  { month: 'Jan 2026', mrr: 35000, wau: 19500, team: 13, churn: '3.9%', nps: 56 },
  { month: 'Dec 2025', mrr: 29400, wau: 17100, team: 12, churn: '4.2%', nps: 55 },
  { month: 'Nov 2025', mrr: 24600, wau: 14800, team: 12, churn: '4.5%', nps: 53 },
]

const REVENUE_MIX = [
  { label: 'Pro (individual)', share: 68, color: 'bg-gold' },
  { label: 'Team', share: 22, color: 'bg-sky-500/70' },
  { label: 'Enterprise', share: 10, color: 'bg-emerald-500/70' },
]

const PRINCIPLES = [
  'We publish these numbers because we believe transparency is a better marketing strategy than mystery.',
  'We don\'t publish: individual customer names, salary details, or specifics that would let someone reverse-engineer another company\'s contract.',
  'We update on the 10th of each month. If the 10th is a weekend, the next weekday.',
  'We don\'t hide bad months. Dec 2025 was a slow-growth month; you can see it in the chart. We wrote about why in the blog.',
]

export default function OpenPage() {
  const maxMrr = Math.max(...MONTHLY.map((m) => m.mrr))

  return (
    <>
      <PageHero
        eyebrow="Open metrics"
        title={
          <>
            Calendro, <em className="not-italic text-gold">in public</em>.
          </>
        }
        lede="The real numbers behind a small company trying to build quiet software. Updated on the 10th of each month. No spin, no rounding up."
        crumbs={[{ label: 'Open' }]}
      />

      {/* Stat grid */}
      <section className="py-16 px-5 md:px-8 border-b border-border relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(50% 60% at 50% 50%, rgba(197,163,92,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              This month · April 2026
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Where we are today.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {METRICS.map((m) => (
              <div key={m.label} className="text-center">
                <m.icon className="h-5 w-5 text-gold mx-auto mb-3 opacity-70" />
                <StatCounter
                  value={m.value}
                  suffix={m.suffix}
                  prefix={m.prefix}
                  label={m.label}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MRR chart */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-2">
                  Monthly recurring revenue
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  Trailing 6 months.
                </h2>
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">
                Ending April 2026 · updated monthly
              </span>
            </div>
          </Reveal>
          <div className="rounded-2xl border border-border lux-card p-6 md:p-8">
            <div className="flex items-end gap-4 h-64">
              {[...MONTHLY].reverse().map((m, i) => {
                const height = (m.mrr / maxMrr) * 100
                return (
                  <div key={m.month} className="flex-1 flex flex-col items-center gap-3" style={{ animationDelay: `${i * 60}ms` }}>
                    <div className="relative flex-1 w-full flex items-end">
                      <div
                        className="w-full rounded-t-md bg-gradient-to-t from-gold/60 to-gold/30 border-t border-gold/50 transition-all"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                    <div className="text-center">
                      <div className="font-mono text-[11px] text-foreground">
                        ${(m.mrr / 1000).toFixed(1)}k
                      </div>
                      <div className="font-mono text-[10px] text-muted-foreground mt-0.5">{m.month.split(' ')[0]}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="mt-6 text-xs text-muted-foreground leading-relaxed">
            December 2025 was our lowest growth month of the year — we paused marketing to focus on
            the accessibility overhaul. January rebounded when that work shipped. Sometimes slow is
            the right speed.
          </div>
        </div>
      </section>

      {/* Revenue mix */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
              Revenue mix
            </h2>
          </Reveal>
          <div className="rounded-2xl border border-border lux-card p-6 md:p-8">
            <div className="h-5 rounded-full overflow-hidden bg-white/[0.04] flex mb-6">
              {REVENUE_MIX.map((r) => (
                <div
                  key={r.label}
                  className={r.color}
                  style={{ width: `${r.share}%` }}
                  title={`${r.label}: ${r.share}%`}
                />
              ))}
            </div>
            <ul className="grid md:grid-cols-3 gap-3">
              {REVENUE_MIX.map((r) => (
                <li key={r.label} className="flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-sm ${r.color}`} />
                  <div>
                    <div className="text-sm text-foreground">{r.label}</div>
                    <div className="font-mono text-xs text-muted-foreground">{r.share}%</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Month-by-month table */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
              Month by month
            </h2>
          </Reveal>
          <div className="rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.02] border-b border-border">
                <tr>
                  <th className="text-left px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Month
                  </th>
                  <th className="text-right px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    MRR
                  </th>
                  <th className="text-right px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    WAU
                  </th>
                  <th className="text-right px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hidden md:table-cell">
                    Team
                  </th>
                  <th className="text-right px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hidden md:table-cell">
                    Churn
                  </th>
                  <th className="text-right px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hidden md:table-cell">
                    NPS
                  </th>
                </tr>
              </thead>
              <tbody>
                {MONTHLY.map((m, i) => (
                  <tr
                    key={m.month}
                    className={`border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.012]'}`}
                  >
                    <td className="px-5 py-3.5 text-foreground/90 font-mono text-xs">{m.month}</td>
                    <td className="px-4 py-3.5 text-right text-foreground/90 font-mono text-xs">
                      ${m.mrr.toLocaleString()}
                    </td>
                    <td className="px-4 py-3.5 text-right text-foreground/90 font-mono text-xs">
                      {m.wau.toLocaleString()}
                    </td>
                    <td className="px-4 py-3.5 text-right text-muted-foreground font-mono text-xs hidden md:table-cell">
                      {m.team}
                    </td>
                    <td className="px-4 py-3.5 text-right text-muted-foreground font-mono text-xs hidden md:table-cell">
                      {m.churn}
                    </td>
                    <td className="px-4 py-3.5 text-right text-muted-foreground font-mono text-xs hidden md:table-cell">
                      {m.nps}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto space-y-5 text-[15px] leading-[1.78] text-foreground/85 font-light">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Our principles
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Why we do this.
            </h2>
          </Reveal>
          <ul className="space-y-3 pt-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p} delay={i * 60}>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs text-gold/60 mt-1 shrink-0 w-6">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        title="Want to talk about what\'s behind these numbers?"
        subtitle="Our founders answer email personally. Include 'open metrics' in the subject."
        primary={{ label: 'hello@calendro.app', href: 'mailto:hello@calendro.app' }}
        secondary={{ label: 'Read our blog', href: '/blog' }}
      />
    </>
  )
}
