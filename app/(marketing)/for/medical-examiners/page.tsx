import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Medical Examiners — ABMDI/forensic pathology CE renewal, medical examiner credential management',
  description:
    'Medical examiners and forensic pathologists manage ABMDI Diplomate or Fellow certification CE renewal, state medical license biennial CME, ABP forensic pathology MOC continuous CME, annual death investigation competency, DEA registration, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full medical examiner credential calendar.',
  alternates: { canonical: '/for/medical-examiners' },
  openGraph: {
    title: 'Momenties for Medical Examiners',
    description: 'Forensic pathology CE renewal, medical examiner credential management.',
    url: '/for/medical-examiners',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for ABMDI certification and state medical license CME',
    desc: 'American Board of Medicolegal Death Investigators (ABMDI) Diplomate and Fellow certifications require CE in death investigation content areas. Physician medical examiners also maintain ABP (forensic pathology) or ABMS specialty board MOC with continuous CME requirements. State medical license biennial CME runs independently with state-specific category requirements. ABMDI CE, ABP MOC CME, and state licensure tracked on independent cycles with forensic pathology content requirements.',
  },
  {
    icon: Clock,
    title: 'Medical examiner multi-credential renewal calendar',
    desc: '"ABMDI Diplomate/Fellow — CE per renewal cycle." "ABP forensic pathology MOC — continuous CME." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual medicolegal death investigation competency." "National Association of Medical Examiners (NAME) membership — annual." "SANE training CE — if applicable." All medical examiner credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Forensic pathology MOC and death investigation competency analytics',
    desc: 'ABP forensic pathology MOC requires continuous CME in forensic pathology content areas — including mandatory patient safety CE and professionalism CE separate from specialty CME totals. NAME quality assurance program participation tracked as a separate professional requirement. Annual death investigation competency covering autopsy technique standards, toxicology interpretation, and scene investigation protocols tracked as institutional requirement separate from ABMDI CE.',
  },
  {
    icon: Users,
    title: 'NAME, AAFS, and forensic pathology professional involvement',
    desc: '"NAME Annual Meeting — fall." "AAFS Annual Meeting — february." "CAP Forensic Pathology Committee updates." "CDC Vital Statistics CE." "Mass fatality management and DVI training CE." "Emerging drug trends toxicology CE — fentanyl analogues, novel psychoactive substances." "Forensic imaging and PMCT CE." All medical examiner professional development on calendar. NAME and AAFS conference CE tagged by ABMDI and ABP MOC applicability.',
  },
]

const ME_WORKFLOW = [
  { time: 'Annual planning', action: 'ABMDI CE renewal cycle, ABP forensic pathology MOC CME pace, state medical license biennial CME cycle, DEA 3-year renewal, annual death investigation competency review, NAME Annual Meeting, and NAME membership all loaded in January. ABMDI CE, ABP MOC CME counter, and state licensure CME tracked independently.' },
  { time: 'CE completion', action: '"AAFS-approved — fentanyl analog death investigation: toxicology screening limitations, autopsy findings, and cause of death documentation for synthetic opioid cases, 3 CE, ABMDI applicable — forensic toxicology domain." Tagged by applicable certification. ABMDI counter updates. If ABP MOC credit applicable, MOC CME counter updates. State licensure CME updates if applicable.' },
  { time: 'ABP MOC', action: '"ABP forensic pathology MOC — patient safety CE and professionalism CE." ABP MOC mandatory CE categories placed as separate tracking requirements within total MOC CME. Patient safety and professionalism CE are ABP mandatory categories separate from forensic pathology specialty CME. Mandatory category tracking placed independently — reaching total CME without mandatory categories does not satisfy ABP MOC requirements.' },
  { time: 'DEA registration', action: '"DEA registration renewal — 3-year cycle." DEA registration placed on 3-year renewal cycle for medical examiners with active DEA registration for evidence or controlled substance procedures. DEA lapse affects practice scope — placed with 12-month advance alert for renewal application. DEA renewal placed independently of state medical license biennial cycle.' },
  { time: 'Renewal audit', action: 'Analytics: ABMDI CE adequate for renewal? ABP MOC CME on pace? Mandatory ABP categories satisfied? State medical license CME complete for biennial renewal? DEA current? Annual death investigation competency documented? NAME membership active? Complete medical examiner credential audit 90 days before earliest renewal. ABMDI, ABP, state board, and DEA documentation maintained separately.' },
]

export default function ForMedicalExaminersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Medical Examiners"
        title={
          <>
            ABMDI certification and medical licensure maintained.
            <br />
            <em className="not-italic text-gold">ABP MOC, DEA, and death investigation CE current.</em>
          </>
        }
        lede="Medical examiners and forensic pathologists manage ABMDI Diplomate or Fellow certification CE in death investigation content, ABP forensic pathology MOC continuous CME with mandatory patient safety and professionalism categories, state medical license biennial CME on an independent cycle, DEA 3-year registration, annual death investigation competency, and professional development simultaneously. Momenties tracks CE by medical examiner credential, surfaces renewal deadlines 90 days early, and manages the full medical examiner credential calendar in one view."
        crumbs={[{ label: 'For Medical Examiners' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How medical examiners use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for medical examiner credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Medical examiner credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every ABMDI cycle, ABP MOC requirement, and death investigation obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {ME_WORKFLOW.map((step, i) => (
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
                &ldquo;My practice requires maintaining ABMDI certification, ABP forensic pathology MOC, and a state medical license — three completely independent systems with different content requirements and different renewal cycles. ABP MOC has mandatory CE categories within the total — patient safety and professionalism — that I track separately from forensic pathology CME. My DEA registration is on a 3-year cycle that doesn&apos;t align with anything else. NAME professional development is annual. I was tracking all of this manually. The thing that changed when I started using Momenties was the mandatory ABP category tracking — that was the piece I was most likely to miss in a manual system.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Robert A., MD, DABMDI</div>
                  <div className="text-xs text-muted-foreground">Chief medical examiner, regional forensic center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All medical examiner credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABMDI Diplomate/Fellow certification CE — renewal cycle',
                'ABP forensic pathology MOC — continuous CME with mandatory categories',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual medicolegal death investigation competency',
                'ABP patient safety and professionalism mandatory CE categories',
                'NAME membership renewal — annual',
                'NAME and AAFS conference CE planning by ABMDI and ABP MOC applicability',
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
        title="ABMDI certification and medical licensure maintained."
        subtitle="CE tracking by credential, ABP MOC mandatory category analytics, DEA calendar, and forensic pathology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
