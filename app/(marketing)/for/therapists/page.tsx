import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Lock, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Therapists — Private session scheduling, caseload management, and time analytics',
  description:
    'Therapists need scheduling software that respects client privacy. Momenties keeps session titles opaque to AI, tracks caseload and hours, and protects supervision and documentation time blocks.',
  alternates: { canonical: '/for/therapists' },
  openGraph: {
    title: 'Momenties for Therapists',
    description: 'Private session scheduling. Caseload at a glance.',
    url: '/for/therapists',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Lock,
    title: 'Client-opaque scheduling',
    desc: 'Schedule with codes, not names: "Session CT-14 Tuesday 3pm." AI parses the time, not the client. Full titles stay on your calendar, not Gemini\'s servers.',
  },
  {
    icon: Clock,
    title: 'Session templates with documentation time',
    desc: 'Create a session template: 50-minute session + 10-minute documentation window. Apply to any new client. Documentation time is blocked automatically.',
  },
  {
    icon: BarChart3,
    title: 'Caseload hours analytics',
    desc: 'Tag by caseload type (individual, couples, group). Analytics shows total hours per week per type. See if your caseload mix is what you intended.',
  },
  {
    icon: Shield,
    title: 'Supervision and CPD blocks',
    desc: '"Supervision biweekly fridays 12pm." Recurring in two words. CPD training, consultation groups, peer supervision — all templated and protected.',
  },
]

const PRIVACY_COMMITMENTS = [
  'AI only receives the event input string, not your full calendar',
  'Use client codes instead of names — AI never sees identifying information',
  'No data sold to insurers, employers, or third-party data brokers',
  'No advertising model — Momenties is subscription software',
  'GDPR-compliant; data processing agreement available on request',
  'Full privacy policy and AI ethics documentation at momenties.app/privacy',
]

const THERAPIST_WEEK = [
  { time: 'Monday', action: '8 sessions, 50+10 min each. All pre-blocked from recurring template. Documentation windows built in.' },
  { time: 'Between sessions', action: 'Voice-add follow-up tasks: "Review CT-14 notes before wednesday." On calendar, tagged, done.' },
  { time: 'Wednesday', action: 'Group session, then consultation. Two events, added in 10 seconds each. Consultation tagged "CPD."' },
  { time: 'Friday', action: 'Supervision 12pm. Auto-recurring, never needs re-scheduling. Present every other week.' },
  { time: 'Month end', action: 'Analytics: 40 individual sessions, 8 group, 6 consultation hours. Clear caseload picture for billing and capacity.' },
]

export default function ForTherapistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Therapists"
        title={
          <>
            Private scheduling.
            <br />
            <em className="not-italic text-gold">Caseload in view.</em>
          </>
        }
        lede="Therapists carry caseloads that need structure, privacy, and documentation discipline. Momenties keeps client data out of AI systems, templates every session with documentation time, and shows caseload capacity before it becomes a problem."
        crumbs={[{ label: 'For Therapists' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/ai/ethics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            AI & privacy
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Pro from $12/month · GDPR-compliant</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How therapists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Built around your practice.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly flow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Weekly flow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A therapy practice week.</h2>
          </Reveal>
          <div className="space-y-3">
            {THERAPIST_WEEK.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-20 shrink-0 pt-0.5 uppercase tracking-wide">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy section */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Privacy</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Your clients deserve the same discretion you give them.</h2>
          </Reveal>
          <Reveal>
            <div className="rounded-xl border border-border/50 p-6">
              <div className="space-y-2">
                {PRIVACY_COMMITMENTS.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-foreground/80">
                    <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <Link href="/privacy" className="text-xs text-gold/70 hover:text-gold transition-colors">Privacy policy →</Link>
                <Link href="/ai/ethics" className="text-xs text-gold/70 hover:text-gold transition-colors">AI ethics →</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Practice structure. Client privacy. Time back in your week."
        subtitle="Templates, caseload analytics, and HIPAA-aware scheduling design. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See AI ethics', href: '/ai/ethics' }}
      />
    </>
  )
}
