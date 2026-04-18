import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Sterile Processing Technicians — CBSPD/IAHCSMM CE renewal, certification tracking, and credential management',
  description:
    'Sterile processing technicians manage CBSPD CSPDT or IAHCSMM CRCST certification renewal with CE requirements, annual infection control and regulatory compliance training, competency assessments, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full sterile processing credential calendar.',
  alternates: { canonical: '/for/sterile-processing-technicians' },
  openGraph: {
    title: 'Momenties for Sterile Processing Technicians',
    description: 'CBSPD/IAHCSMM CE renewal, certification tracking, and credential management.',
    url: '/for/sterile-processing-technicians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CSPDT and CRCST certification renewal',
    desc: 'CBSPD Certified Sterile Processing and Distribution Technician (CSPDT) and IAHCSMM Certified Registered Central Service Technician (CRCST) certifications each require CE for renewal on independent cycles. Some CE qualifies for both certifications; sterile processing-specific CE must address applicable content areas. Tag every CE by certification applicability. CSPDT and CRCST counters tracked independently.',
  },
  {
    icon: Clock,
    title: 'SPT multi-credential renewal calendar',
    desc: '"CSPDT — CBSPD, renewal cycle CE." "CRCST — IAHCSMM, 1-year renewal, 12 CE." "Annual infection control CE — institutional." "Annual competency assessment — decontamination, assembly, sterilization." "Joint Commission environment of care compliance — annual." "Supervisor CE (for leads) — additional requirement." "IAHCSMM membership — annual." All SPT credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Infection control and regulatory compliance analytics',
    desc: 'Sterile processing technicians in Joint Commission and DNV-accredited facilities face annual infection control education, decontamination procedure updates, and regulatory compliance training requirements independent of certification CE. Compliance CE tracked as a mandatory annual category. Annual competency assessments for decontamination, assembly, and sterilization documented separately from CE totals.',
  },
  {
    icon: Users,
    title: 'IAHCSMM, CBSPD, and sterile processing professional involvement',
    desc: '"IAHCSMM Annual Conference — may." "CBSPD Annual Education Conference." "State health system sterile processing chapter — quarterly meetings." "Sterilization and reprocessing technology webinars." "Flexible endoscope reprocessing update training." All sterile processing professional development on calendar. Conference CE tagged by applicable certification in advance.',
  },
]

const SPT_WORKFLOW = [
  { time: 'Annual planning', action: 'CRCST annual renewal CE (12 CE), CSPDT renewal cycle CE, annual infection control training, annual competency assessment dates, Joint Commission compliance education, and IAHCSMM conference all loaded in January. CRCST requires annual renewal — placed as a recurring January planning item every year.' },
  { time: 'CE completion', action: '"IAHCSMM-approved — sterility assurance levels: biological indicator interpretation and documentation, 2 CE, CRCST applicable." Tagged by applicable certification. CRCST counter updates. If CBSPD CSPDT also accepts the CE, CSPDT counter updates. Annual compliance category updates if regulatory content applies. Each tracked independently.' },
  { time: 'Competency assessment', action: '"Annual sterile processing competency — decontamination, sterilization assembly, and sterilizer operation, Q1." Annual competency assessment for three core functions documented as institutional requirement. Joint Commission and AAMI standards require competency documentation separate from CE totals. Competency assessment placed as a recurring January-March event.' },
  { time: 'Infection control CE', action: '"Annual infection control update — bloodborne pathogens, PPE use, and decontamination protocols, 1.5 CE, regulatory." Infection control CE logged as mandatory annual compliance training, separate from certification CE. Required by OSHA, Joint Commission, and institutional policy. Annual infection control training placed as a Q1 recurring calendar event.' },
  { time: 'Renewal audit', action: 'Analytics: CRCST CE current for annual renewal? CSPDT CE adequate? Infection control training documented? Annual competency assessment complete? Joint Commission compliance training done? IAHCSMM membership active? Complete sterile processing credential audit 90 days before earliest certification renewal.' },
]

export default function ForSterileProcessingTechniciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Sterile Processing Technicians"
        title={
          <>
            CSPDT and CRCST certifications maintained.
            <br />
            <em className="not-italic text-gold">Annual competency and compliance never missed.</em>
          </>
        }
        lede="Sterile processing technicians manage CBSPD CSPDT and IAHCSMM CRCST certification renewal on independent cycles, mandatory annual infection control and regulatory compliance training, annual competency assessments for decontamination and sterilization, and professional development simultaneously. Momenties tracks CE by sterile processing certification, surfaces renewal deadlines 90 days early, and manages the full SPT credential calendar in one view."
        crumbs={[{ label: 'For Sterile Processing Technicians' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How sterile processing technicians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for SPT credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sterile processing credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every certification renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {SPT_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold both CRCST and CSPDT certifications, and the CRCST renews annually — which means I&apos;m always in a renewal cycle. On top of that, the hospital requires annual infection control training, annual competency assessment documentation for three different functions, and Joint Commission compliance training — none of which counts toward either certification CE. Momenties tracks my CRCST and CSPDT CE independently, and the compliance training on a completely separate track. I can show any auditor exactly what I&apos;ve completed for each requirement.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Tony M., CRCST, CSPDT, CIS</div>
                  <div className="text-xs text-muted-foreground">Sterile processing lead technician, academic medical center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All sterile processing credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'IAHCSMM CRCST certification CE — annual, 12 CE',
                'CBSPD CSPDT certification CE — renewal cycle',
                'Annual infection control training — mandatory',
                'Annual decontamination competency assessment',
                'Annual assembly and sterilization competency',
                'Joint Commission compliance CE — annual',
                'IAHCSMM membership renewal — annual',
                'Endoscope reprocessing and specialty instrument training',
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
        title="CSPDT and CRCST certifications maintained."
        subtitle="CE tracking by certification, competency and compliance calendar, and sterile processing professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
