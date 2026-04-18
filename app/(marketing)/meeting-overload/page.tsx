import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, BarChart3, Shield, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Meeting overload — Diagnose and fix your meeting problem',
  description:
    'Knowledge workers now spend 50–70% of their time in meetings. Most of that time is not well spent. Momenties shows you exactly which meetings to cut and gives you the tools to protect the time you reclaim.',
  alternates: { canonical: '/meeting-overload' },
  openGraph: {
    title: 'Meeting overload — Diagnose it. Fix it.',
    description: 'See which meetings to cut. Protect what you reclaim.',
    url: '/meeting-overload',
    type: 'website',
  },
}

const STATS = [
  { value: '50–70%', label: 'Of senior knowledge worker time now spent in meetings (MIT Sloan, 2025)' },
  { value: '67%', label: 'Of professionals say their meetings prevent them from doing their actual jobs' },
  { value: '4.5h', label: 'Average weekly time in meetings that attendees themselves rate as unproductive' },
]

const DIAGNOSE = [
  {
    symptom: 'You feel busy but can\'t point to what you accomplished',
    cause: 'High meeting volume with low output ratio. Analytics will confirm: check your meeting-to-focus ratio.',
  },
  {
    symptom: 'You have no "home" for real work on your calendar',
    cause: 'No protected focus time. Your week fills with meetings because the alternative — open calendar — looks like availability.',
  },
  {
    symptom: 'The same conversations happen in multiple meetings',
    cause: 'Meeting redundancy. Check analytics → time by person. Likely you\'re in overlapping syncs with the same stakeholders.',
  },
  {
    symptom: 'You feel freshest at 6am but your calendar starts at 9am',
    cause: 'Mismatch between your energy profile and your scheduled work type. Block deep work at your energy peak before meetings arrive.',
  },
]

const FIXES = [
  { fix: 'Run a meeting audit', how: 'Open analytics → look at every recurring meeting. For each, ask: what would happen if I canceled this? If the answer is "nothing," cancel it.' },
  { fix: 'Block first — fill second', how: 'Add focus blocks before your week fills. A week with 2 protected mornings has less meeting creep than one without them.' },
  { fix: 'Enable no-meeting windows', how: 'Add a recurring "No meetings" block to specific days or times. Focus mode + attendee warnings enforce it without confrontation.' },
  { fix: 'Use async for status updates', how: 'Most weekly status syncs can be replaced with a shared doc. Reserve calendar time for decisions, not reporting.' },
]

export default function MeetingOverloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Meeting overload"
        title={
          <>
            Too many meetings
            <br />
            <em className="not-italic text-gold">is a calendar problem.</em>
          </>
        }
        lede="Meeting overload doesn't happen because your colleagues are unreasonable. It happens because open calendar time looks like availability. Momenties makes the open time look like what it is: work."
        crumbs={[{ label: 'Meeting overload' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start fixing it <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/analytics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Calendar analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free plan · Analytics + Focus mode on Pro trial</p>
      </PageHero>

      {/* Stats */}
      <section className="py-14 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STATS.map((s, i) => (
              <Reveal key={s.value} delay={i * 70}>
                <div className="rounded-xl border border-border p-6 text-center">
                  <div className="font-display text-4xl font-bold text-gold mb-2">{s.value}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnose */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Diagnosis</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What the symptom actually means.
            </h2>
          </Reveal>
          <div className="space-y-4">
            {DIAGNOSE.map((d, i) => (
              <Reveal key={d.symptom} delay={i * 45}>
                <div className="rounded-xl border border-border/50 lux-card p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <XCircle className="h-4 w-4 text-red-400/40 shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-foreground">"{d.symptom}"</p>
                  </div>
                  <div className="flex items-start gap-3 pl-7">
                    <p className="text-xs text-muted-foreground leading-relaxed">{d.cause}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fixes */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Treatment</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Four fixes that actually work.
            </h2>
          </Reveal>
          <div className="space-y-4">
            {FIXES.map((f, i) => (
              <Reveal key={f.fix} delay={i * 45}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-5">
                  <div className="w-7 h-7 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center shrink-0">
                    <span className="font-mono text-[10px] text-gold/70">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1">{f.fix}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.how}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics + Focus mode callout */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/features/analytics" className="rounded-xl border border-border lux-card p-6 group">
                <BarChart3 className="h-5 w-5 text-gold mb-3" />
                <h3 className="text-sm font-medium text-foreground mb-1 group-hover:text-gold transition-colors">Calendar analytics</h3>
                <p className="text-xs text-muted-foreground">See your meeting-to-focus ratio, time by person, and week-over-week trends.</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-gold/60 group-hover:text-gold transition-colors">
                  Explore analytics <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
              <Link href="/focus-mode" className="rounded-xl border border-border lux-card p-6 group">
                <Shield className="h-5 w-5 text-gold mb-3" />
                <h3 className="text-sm font-medium text-foreground mb-1 group-hover:text-gold transition-colors">Focus mode</h3>
                <p className="text-xs text-muted-foreground">Protect reclaimed time from immediate re-colonization by new meeting requests.</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-gold/60 group-hover:text-gold transition-colors">
                  How Focus mode works <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="The meetings will keep coming. The question is whether your calendar fights back."
        subtitle="Analytics to diagnose. Focus mode to enforce. Free trial."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
