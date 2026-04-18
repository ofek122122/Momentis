import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for COTAs — NBCOT renewal, CEU tracking, and OTA credential management',
  description:
    'Certified occupational therapy assistants manage NBCOT COTA renewal with 36 PDUs per 3-year cycle, state OTA license renewals, CPR recertification, specialty certification maintenance, and AOTA involvement simultaneously. Momenties tracks PDUs by NBCOT category, surfaces renewal deadlines 90 days early, and manages the full COTA credential calendar.',
  alternates: { canonical: '/for/occupational-therapy-assistants' },
  openGraph: {
    title: 'Momenties for COTAs',
    description: 'NBCOT renewal, CEU tracking, and occupational therapy assistant credential management.',
    url: '/for/occupational-therapy-assistants',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'PDU tracking for NBCOT COTA renewal',
    desc: 'NBCOT COTA renewal requires 36 Professional Development Units per 3-year renewal cycle. PDUs are earned through a combination of continuing education, presentations, publications, mentorship, and OT-related work activities. Tag every PDU activity by NBCOT category. Running total visible throughout the 3-year cycle — no end-of-cycle PDU scramble.',
  },
  {
    icon: Clock,
    title: 'COTA multi-credential renewal calendar',
    desc: '"COTA — NBCOT, 3-year renewal, october." "State OTA license — renewal, varies." "CPR/BLS — 2-year, april." "Specialty certification — low vision, driving rehab, or hand therapy." "Fieldwork supervision certification." All COTA credentials with 90-day advance alerts. No state license lapse between clinical assignments.',
  },
  {
    icon: BarChart3,
    title: 'PDU source analytics',
    desc: 'NBCOT accepts PDUs from multiple sources: CE courses, presenting, publishing, OT-related employment, mentorship, professional service. Tag each PDU activity by source type. Analytics shows PDU distribution across source categories. Some COTAs over-earn in CE and under-earn in mentorship or service — analytics surfaces the imbalance before renewal audit.',
  },
  {
    icon: Users,
    title: 'AOTA and state association involvement',
    desc: '"AOTA Annual Conference — april." "State OT association meeting — annual." "COTA study group — monthly." "Fieldwork coordinator meeting — semester." All OTA professional development and service commitments on calendar. AOTA Annual Conference PDUs planned in advance for NBCOT category coverage.',
  },
]

const COTA_WORKFLOW = [
  { time: 'Annual planning', action: 'NBCOT 3-year renewal date, state OTA license deadline, CPR/BLS recertification, specialty certification renewals, and AOTA Annual Conference all loaded in January. 90-day alerts on every credential. PDU completion pace calculated: 12 PDUs per year satisfies the 3-year NBCOT requirement.' },
  { time: 'PDU completion', action: '"AOTA-approved online course — sensory processing in adults, tuesday 7pm, 3 hours, CE PDUs." Tagged by NBCOT PDU category. Running 3-year PDU total updates. Specialty certification CE tracked separately where applicable. No PDU source imbalance discovered at renewal.' },
  { time: 'State license', action: '"OTA license renewal — state board, october 31." State CE requirements documented separately from NBCOT PDU requirements. Some states require specific CE topics; others accept NBCOT PDUs. Both tracked without confusion between state and national renewal requirements.' },
  { time: 'Specialty certs', action: '"CLVT low vision certification — renewal, 3-year." "CDRS driving rehabilitation specialty." Specialty certifications tracked independently from NBCOT COTA renewal. Each specialty adds PDU opportunities and independent CE requirements.' },
  { time: 'Renewal audit', action: 'Analytics: NBCOT PDU total on track? PDU source distribution balanced? State OTA license CE complete? CPR valid? Specialty certifications current? 36-PDU requirement met with appropriate category coverage? Complete COTA credential audit 90 days before NBCOT renewal window.' },
]

export default function ForOccupationalTherapyAssistantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for COTAs"
        title={
          <>
            NBCOT certified. License maintained.
            <br />
            <em className="not-italic text-gold">PDUs never scrambled.</em>
          </>
        }
        lede="Certified occupational therapy assistants manage 36 PDUs per 3-year NBCOT renewal cycle from multiple source types, state OTA license renewals with independent CE requirements, CPR recertification, specialty certifications in driving rehabilitation or low vision, and AOTA involvement simultaneously. Momenties tracks PDUs by NBCOT category and source, surfaces renewal deadlines 90 days early, and manages the full COTA credential calendar in one view."
        crumbs={[{ label: 'For COTAs' }]}
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
            PDU analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How COTAs use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for COTA credential and PDU management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">COTA credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">PDUs and credentials managed through the 3-year NBCOT cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {COTA_WORKFLOW.map((step, i) => (
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
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;NBCOT PDUs can come from so many sources — CE courses, presenting at a conference, supervising fieldwork students, even publishing a case study. I was only earning PDUs through CE courses because I wasn&apos;t tracking the others. Momenties showed me I was over-earning in CE and under-utilizing supervision and service, which also count. I&apos;m now earning PDUs from three different categories instead of one.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">I</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Imani T., COTA/L</div>
                  <div className="text-xs text-muted-foreground">Occupational therapy assistant, pediatric outpatient</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Credentials tracked</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All COTA credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'NBCOT PDUs by source category — 3-year cycle',
                'State OTA license renewal deadline',
                'CPR/BLS recertification — 2-year',
                'CLVT low vision certification renewal',
                'CDRS driving rehabilitation specialty',
                'Hand therapy specialty (CHT) renewal',
                'Fieldwork supervision documentation',
                'AOTA Annual Conference and state events',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="NBCOT certified. License maintained."
        subtitle="PDU tracking by source category, 3-year renewal calendar, and COTA professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'PDU analytics', href: '/features/analytics' }}
      />
    </>
  )
}
