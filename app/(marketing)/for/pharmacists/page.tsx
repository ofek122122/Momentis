import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pharmacists — CE tracking, board deadlines, and practice schedule management',
  description:
    'Pharmacists manage state board CE requirements, immunization certifications, board renewal deadlines, and professional development. Momenties tracks CE hours by category and keeps every compliance deadline visible.',
  alternates: { canonical: '/for/pharmacists' },
  openGraph: {
    title: 'Momenties for Pharmacists',
    description: 'CE tracking and compliance calendar management for pharmacists.',
    url: '/for/pharmacists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE hours by board category',
    desc: 'Tag every CE event by state board category: law, patient safety, disease management, immunization. Analytics shows accumulation by category. License renewal without the last-minute scramble.',
  },
  {
    icon: Clock,
    title: 'License and certification renewal deadlines',
    desc: '"Pharmacist license renewal june 30." "Immunization certification renewal october." "DEA registration expires december." Every compliance deadline on calendar, visible 60+ days out.',
  },
  {
    icon: Calendar,
    title: 'Professional meeting templates',
    desc: 'P&T committee, residency program meetings, staff training sessions — all templated. Apply once per cycle. Recurring professional obligations scheduled without overhead.',
  },
  {
    icon: BarChart3,
    title: 'Professional development analytics',
    desc: 'Track CE courses, conferences, and professional committee time separately. See how many hours per month go to professional development vs. clinical work. Inform prioritization.',
  },
]

const PHARM_WORKFLOW = [
  { time: 'January', action: 'Annual CE audit: check hours per board category, identify gaps, add ASHP Midyear and regional conferences to calendar.' },
  { time: 'Monthly', action: 'Staff training or committee meeting (templated). Set up all dates in January for the full year. Zero scheduling overhead per month.' },
  { time: 'CE event', action: '"Law CE webinar, wednesday june 5, 2 hours, law category." Tagged and added. CE total updates. Certificate reminder added.' },
  { time: 'Q3 check', action: 'CE analytics: on pace for renewal? Patient safety category complete, law still needs 2 hours. Fall conference will cover it.' },
  { time: 'Renewal', action: 'License visible in Daily Brief for 60 days prior. Application deadline blocked. CE certificate checklist on calendar. No last-minute panic.' },
]

export default function ForPharmacistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pharmacists"
        title={
          <>
            Every CE requirement met.
            <br />
            <em className="not-italic text-gold">Every license renewed on time.</em>
          </>
        }
        lede="Pharmacists manage state board CE requirements, immunization certifications, DEA registration, and professional committee obligations alongside clinical work. Momenties tracks CE by category, surfaces compliance deadlines early, and keeps professional meetings scheduled without friction."
        crumbs={[{ label: 'For Pharmacists' }]}
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
            CE analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pharmacists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pharmacy professionals.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Professional calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and compliance through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {PHARM_WORKFLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
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
              <h3 className="text-sm font-medium text-foreground mb-1.5">Schedule only. Zero patient data.</h3>
              <p className="text-xs text-muted-foreground mb-4">Momenties manages your professional calendar and CE tracking, not prescription records, patient profiles, or clinical data.</p>
              <div className="space-y-2">
                {[
                  'No patient health information processed',
                  'AI reads only event text you type',
                  'CE tracking is category-based, not patient-based',
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
        title="CE tracked. Renewals on calendar. Compliance handled."
        subtitle="CE category analytics, deadline reminders, and professional meeting templates. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
