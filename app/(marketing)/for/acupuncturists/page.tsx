import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Acupuncturists — CE tracking, NCCAOM PDAs, and license renewals',
  description:
    'Acupuncturists manage NCCAOM PDA requirements, state license CE, practice management meetings, and continuing education. Momenties tracks CE hours by category and keeps every renewal deadline visible.',
  alternates: { canonical: '/for/acupuncturists' },
  openGraph: {
    title: 'Momenties for Acupuncturists',
    description: 'NCCAOM PDA tracking and acupuncture practice calendar management.',
    url: '/for/acupuncturists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'NCCAOM PDAs by diplomate category',
    desc: 'Tag every CE event by NCCAOM category: acupuncture, Chinese herbology, Oriental medicine, Asian bodywork. Analytics shows PDAs per category against your 4-year renewal requirement.',
  },
  {
    icon: Clock,
    title: 'License and NCCAOM renewal deadlines',
    desc: '"NCCAOM diplomate renewal march 31." "State LAc license renewal june." "CPR recertification october." All compliance deadlines on calendar, visible 60 days before due.',
  },
  {
    icon: Calendar,
    title: 'Practice meeting templates',
    desc: 'Monthly team huddle, quarterly business review, annual herbal inventory review — all templated. Apply once per cycle. All meetings created in seconds.',
  },
  {
    icon: BarChart3,
    title: 'Professional development analytics',
    desc: 'Track symposia, seminars, workshops, and online CE separately. See PDA accumulation rate across the renewal cycle. Know if you\'re on pace 2 years before renewal.',
  },
]

const ACOM_WORKFLOW = [
  { time: 'Year 1 of cycle', action: 'NCCAOM plan: audit PDAs per category, identify gaps, add AAAOM national conference and regional symposia to calendar.' },
  { time: 'Monthly', action: 'Study group (recurring). Peer consultation. Both templated for the quarter.' },
  { time: 'CE event', action: '"Advanced acupuncture seminar, saturday may 17, 6 PDAs, acupuncture category." Tagged, added, PDA counter updates.' },
  { time: 'Year 2 check', action: 'Analytics: 28/60 PDAs accumulated, Chinese herbology still needs 8. Plan fall seminar to close the gap.' },
  { time: 'Renewal year', action: 'NCCAOM renewal visible in Daily Brief for 60 days prior. Application deadline blocked. PDA documentation checklist on calendar.' },
]

export default function ForAcupuncturistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Acupuncturists"
        title={
          <>
            NCCAOM PDAs tracked.
            <br />
            <em className="not-italic text-gold">Diplomate maintained.</em>
          </>
        }
        lede="Acupuncturists manage NCCAOM PDA requirements across diplomate categories, state license CE, practice administration, and professional development. Momenties tracks PDAs by category, surfaces renewal deadlines early, and keeps practice meetings structured."
        crumbs={[{ label: 'For Acupuncturists' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/analytics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            PDA analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How acupuncturists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for acupuncture practice management.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <uc.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Practice calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">PDA and licensing through the 4-year cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {ACOM_WORKFLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-28 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border/50 p-6">
              <h3 className="text-sm font-medium text-foreground mb-1.5">Calendar only. Zero patient data.</h3>
              <p className="text-xs text-muted-foreground mb-4">Momenties manages your schedule and PDA tracking, not patient records, treatment protocols, or clinical notes.</p>
              <div className="space-y-2">
                {[
                  'No patient health information processed by AI',
                  'PDA tracking is category-based only',
                  'Compliance deadlines tracked without patient data',
                  'GDPR-compliant data handling',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                    <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="PDAs tracked. NCCAOM maintained. Practice managed."
        subtitle="CE category analytics, diplomate renewal reminders, and practice meeting templates. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'PDA analytics', href: '/features/analytics' }}
      />
    </>
  )
}
