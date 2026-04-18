import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Nephrology Nurses — CNN/CDN CE renewal, dialysis credential management',
  description:
    'Nephrology nurses manage NNCC CNN or CDN certification renewal with CE requirements, state RN license CE, mandatory patient safety and vascular access CE, annual dialysis machine competency, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full nephrology nursing credential calendar.',
  alternates: { canonical: '/for/nephrology-nurses' },
  openGraph: {
    title: 'Momenties for Nephrology Nurses',
    description: 'CNN/CDN CE renewal, dialysis credential management.',
    url: '/for/nephrology-nurses',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CNN, CDN, and state RN license renewal',
    desc: 'NNCC Certified Nephrology Nurse (CNN) and Certified Dialysis Nurse (CDN) certifications require CE per renewal cycle in nephrology and dialysis-specific content areas. State RN license CE runs on an independent biennial cycle. CNN and CDN CE may overlap with state CE; general nursing CE may not satisfy NNCC specialty content requirements. Tag every CE by applicable credential. CNN, CDN, and state RN counters tracked independently.',
  },
  {
    icon: Clock,
    title: 'Nephrology nurse multi-credential renewal calendar',
    desc: '"CNN — NNCC, renewal cycle CE." "CDN — NNCC, renewal cycle CE (if applicable)." "State RN license — biennial CE, varies." "Annual dialysis machine competency — institutional." "Vascular access competency — annual, ANNA recommended." "BLS — 2-year." "ANNA membership — annual." All nephrology nursing credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Dialysis machine competency and vascular access CE analytics',
    desc: 'Nephrology nurses face institutional and CMS requirements for annual dialysis machine competency documentation and vascular access care competency. Competency CE tracked as a required annual category from NNCC certification CE — CMS and Joint Commission require documented competency separate from CE totals. Annual machine-specific competency documentation maintained for ESRD facility survey readiness.',
  },
  {
    icon: Users,
    title: 'ANNA, NNCC, and nephrology nursing professional involvement',
    desc: '"ANNA National Symposium — spring." "NKF Spring Clinical Meetings — march." "ANNA Chapter local meetings — quarterly CE." "Transplant and CKD education — annual updates." "Peritoneal dialysis and home modality training." All nephrology nursing professional development on calendar. ANNA conference CE tagged by CNN and CDN applicability in advance.',
  },
]

const NEPHRO_WORKFLOW = [
  { time: 'Annual planning', action: 'NNCC CNN renewal cycle CE, CDN renewal cycle CE (if applicable), state RN biennial CE cycle, annual dialysis machine competency assessment, vascular access competency review, BLS 2-year cycle, ANNA National Symposium, and ANNA membership all loaded in January. NNCC and state CE pace tracked independently.' },
  { time: 'CE completion', action: '"ANNA-approved — fluid and electrolyte management in ESRD: pre-dialysis and intradialytic considerations, 3 CE, CNN applicable." Tagged by applicable certification. CNN counter updates. If state RN license accepts the content, state counter updates. If CDN also applies, CDN counter updates. Each credential tracked independently.' },
  { time: 'Machine competency', action: '"Annual dialysis machine competency — Fresenius, NxStage, and peritoneal dialysis cycler, Q1." Annual machine competency assessment placed as institutional requirement, separate from NNCC CE. CMS ESRD facility regulations require competency documentation for each machine type used. Annual competency placed as a recurring Q1 event on the calendar.' },
  { time: 'Vascular access CE', action: '"Vascular access care competency — AV fistula care and catheter management, 2 CE, patient safety." Vascular access CE logged as a patient safety CE category, separate from general nephrology CE. ANNA recommends annual vascular access competency review. Access-specific CE tracked independently from NNCC CE totals for institutional credentialing.' },
  { time: 'Renewal audit', action: 'Analytics: CNN CE on pace for renewal cycle? CDN CE adequate? State RN CE complete? BLS current? Annual dialysis machine competency documented? Vascular access competency reviewed? ANNA membership active? Complete nephrology nursing credential audit 90 days before earliest certification renewal. NNCC and state board documentation maintained separately.' },
]

export default function ForNephrologyNursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Nephrology Nurses"
        title={
          <>
            CNN and CDN certifications maintained.
            <br />
            <em className="not-italic text-gold">Machine competency and BLS never lapsed.</em>
          </>
        }
        lede="Nephrology nurses manage NNCC CNN and CDN certification CE renewal on independent cycles, state RN license CE on a biennial cycle, annual dialysis machine competency documentation required by CMS, vascular access competency review, and BLS 2-year renewal simultaneously. Momenties tracks CE by nephrology nursing credential, surfaces renewal deadlines 90 days early, and manages the full nephrology nursing credential calendar in one view."
        crumbs={[{ label: 'For Nephrology Nurses' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How nephrology nurses use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for nephrology nursing credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Nephrology nursing credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every NNCC certification cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {NEPHRO_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold CNN and CDN — both NNCC certifications — plus my state RN license. The certifications have different renewal cycles from my state license, and both differ from the BLS and annual machine competency the facility requires. The machine competency is the one that most nurses track informally — the survey team asks for documentation during CMS inspections and informal tracking doesn&apos;t survive that. Momenties places the machine competency as a calendar event with a due date and I have the documentation ready before the survey arrives.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">W</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Wanda P., RN, CNN, CDN</div>
                  <div className="text-xs text-muted-foreground">Nephrology nurse, outpatient hemodialysis center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All nephrology nursing credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'NNCC CNN certification CE — renewal cycle',
                'NNCC CDN certification CE — renewal cycle',
                'State RN license CE — biennial renewal',
                'BLS certification — 2-year renewal',
                'Annual dialysis machine competency',
                'Vascular access competency CE — annual',
                'ANNA membership renewal — annual',
                'ANNA conference and chapter CE planning',
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
        title="CNN and CDN certifications maintained."
        subtitle="CE tracking by certification, machine competency calendar, and nephrology nursing professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
