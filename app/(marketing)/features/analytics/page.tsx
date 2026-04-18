import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Clock, Users, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar analytics — Understand how you actually spend your time',
  description:
    'Momenties analytics shows meeting-to-focus ratios, busiest days, time spent by person and project, and patterns you didn\'t know existed. Pro feature.',
  alternates: { canonical: '/features/analytics' },
  openGraph: {
    title: 'Momenties Calendar Analytics',
    description: 'See how you actually spend your time. Not how you think you do.',
    url: '/features/analytics',
    type: 'website',
  },
}

const METRICS = [
  {
    icon: BarChart3,
    title: 'Meeting-to-focus ratio',
    desc: 'What fraction of your scheduled time is meetings vs. protected focus time? If it\'s above 60% meetings, you\'ll see it.',
    stat: 'Most users who look are surprised',
  },
  {
    icon: Clock,
    title: 'Busiest days and hours',
    desc: 'When are you actually unavailable? Which afternoons have the most back-to-back load? The heatmap shows the patterns you feel but haven\'t measured.',
    stat: '31% of focus blocks are fragmented',
  },
  {
    icon: Users,
    title: 'Time spent by person',
    desc: 'Which colleagues get the most calendar time? Is that intentional? This view doesn\'t judge — it just shows.',
    stat: 'Avg: 4.2 hrs/week in recurring 1:1s',
  },
  {
    icon: TrendingUp,
    title: 'Trends over time',
    desc: 'Is your schedule getting busier or quieter? Month-over-month comparison for meetings, solo work, and empty time.',
    stat: 'Calendar load grows ~8% per quarter',
  },
]

const INSIGHTS = [
  { quote: 'I was spending 6 hours a week in a meeting I could have received as a summary email.', action: 'Cancelled 2 recurring syncs. Saved 3 hours/week.' },
  { quote: 'My Wednesdays were the heaviest day. I had no idea. I thought it was Mondays.', action: 'Moved two recurring calls to Thursday.' },
  { quote: 'I was putting "deep work" blocks on my calendar but breaking them for ad-hoc meetings 70% of the time.', action: 'Started using focus mode. Block rate is now 88%.' },
]

export default function AnalyticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar analytics · Pro feature"
        title={
          <>
            See how you actually
            <br />
            <em className="not-italic text-gold">spend your time.</em>
          </>
        }
        lede="Not how you think you do. Momenties analytics measures your real schedule: meeting-to-focus ratio, busiest days, time by person, month-over-month trends. Data that makes you act."
        crumbs={[{ label: 'Features' }, { label: 'Analytics' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try analytics free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/pro"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            See Pro features
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Included in Pro · 14-day free trial</p>
      </PageHero>

      {/* Mock analytics dashboard */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="bg-[#0f0f14] border-b border-border px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-4 w-4 text-gold" />
                  <span className="text-sm font-medium text-foreground">Calendar Analytics</span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground/60">April 2026 · 4 weeks</span>
              </div>

              <div className="p-6">
                {/* Summary stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    { label: 'Meeting hours', value: '22.5', sub: '↑ 2.1 vs last month', warn: true },
                    { label: 'Focus hours', value: '18.0', sub: '↓ 1.4 vs last month', warn: false },
                    { label: 'Meeting ratio', value: '56%', sub: 'Recommended: < 50%', warn: true },
                    { label: 'Empty slots', value: '14%', sub: 'Unscheduled time', warn: false },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-border p-4">
                      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground/60 mb-1">{stat.label}</p>
                      <p className={`font-display text-2xl font-bold ${stat.warn ? 'text-amber-400' : 'text-foreground'}`}>{stat.value}</p>
                      <p className="text-[10px] text-muted-foreground mt-1">{stat.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Day heatmap */}
                <div className="mb-8">
                  <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground/60 mb-3">Scheduled load by day</p>
                  <div className="grid grid-cols-5 gap-2">
                    {[
                      { day: 'Mon', h: 5.5, c: 'bg-amber-500/60' },
                      { day: 'Tue', h: 7.0, c: 'bg-rose-500/60' },
                      { day: 'Wed', h: 4.0, c: 'bg-gold/50' },
                      { day: 'Thu', h: 6.5, c: 'bg-amber-500/60' },
                      { day: 'Fri', h: 2.0, c: 'bg-emerald-500/40' },
                    ].map((d) => (
                      <div key={d.day} className="flex flex-col items-center gap-1.5">
                        <div className="w-full rounded-lg overflow-hidden bg-white/5 h-20 flex flex-col justify-end">
                          <div className={`w-full rounded-t-lg ${d.c}`} style={{ height: `${(d.h / 8) * 100}%` }} />
                        </div>
                        <p className="text-[10px] font-mono text-muted-foreground/60">{d.day}</p>
                        <p className="text-xs font-mono text-muted-foreground">{d.h}h</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top meeting partners */}
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground/60 mb-3">Time by person (this month)</p>
                  <div className="space-y-2">
                    {[
                      { name: 'Sarah C.', hours: 4.5, pct: 20 },
                      { name: 'Oren K.', hours: 3.0, pct: 13 },
                      { name: 'External calls', hours: 6.5, pct: 29 },
                      { name: 'Team standup', hours: 2.5, pct: 11 },
                    ].map((p) => (
                      <div key={p.name} className="flex items-center gap-3">
                        <p className="text-xs text-muted-foreground w-28 shrink-0">{p.name}</p>
                        <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full rounded-full bg-gold/60" style={{ width: `${p.pct}%` }} />
                        </div>
                        <p className="text-xs font-mono text-muted-foreground w-10 text-right">{p.hours}h</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Four metrics explained */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What it measures</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Four lenses on your schedule.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {METRICS.map((m, i) => (
              <Reveal key={m.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <m.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{m.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{m.desc}</p>
                  <p className="text-xs font-mono text-gold/70 border border-gold/10 bg-gold/5 rounded-lg px-3 py-1.5">{m.stat}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Real insights */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">From users</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What people actually do with this data.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {INSIGHTS.map((insight, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <p className="text-sm text-foreground/90 italic mb-3">&ldquo;{insight.quote}&rdquo;</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-emerald-400/90">{insight.action}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="See your calendar for what it actually is."
        subtitle="Analytics unlocks on the first day of your Pro trial."
        primary={{ label: 'Start 14-day free trial', href: '/login' }}
        secondary={{ label: 'See all Pro features', href: '/pro' }}
      />
    </>
  )
}
