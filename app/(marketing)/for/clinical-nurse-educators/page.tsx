import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Clinical Nurse Educators — CNE/CPNE CE renewal, nurse educator credential management',
  description:
    'Clinical nurse educators manage ANCC CNE certification 75CE/5yr renewal, NLN CNEI credential CE, state RN biennial licensure CE, annual competency education program development, educator-specific CE mandatory categories, ACLS/BLS renewal, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full nurse educator credential calendar.',
  alternates: { canonical: '/for/clinical-nurse-educators' },
  openGraph: {
    title: 'Momenties for Clinical Nurse Educators',
    description: 'CNE CE renewal, clinical nurse educator credential management.',
    url: '/for/clinical-nurse-educators',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CNE certification and state RN licensure renewal',
    desc: 'ANCC Certified Nurse Educator (CNE) certification requires 75 CE hours every 5 years with nursing education content. NLN Certified Nurse Educator (CNE) from the National League for Nursing has different requirements — NLN CNE and ANCC CNE are separate certifications from different organizations. State RN licensure biennial CE runs independently with different content requirements. Nurse educators holding both NLN CNE and ANCC certification face independent CE tracking. Each certification tracked with its own counter.',
  },
  {
    icon: Clock,
    title: 'Clinical nurse educator multi-credential renewal calendar',
    desc: '"NLN CNE — 75 CE/5 years, nursing education content." "ANCC or other specialty certification — independent cycle." "State RN license — biennial CE." "ACLS — 2-year renewal (if required)." "BLS — 2-year renewal." "Annual competency program review and update." "NLN membership — annual." All clinical nurse educator credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Competency program development and simulation education analytics',
    desc: 'Clinical nurse educators responsible for competency programs face annual program review and update requirements independent of CNE CE. Simulation education CE for nurse educators using simulation technology tracked as specialty CE separate from general nursing education CE. Evidence-based practice integration CE tracked within nursing education domain. Annual regulatory update training (Joint Commission, CMS, state BON changes) placed as separate institutional requirement. Each tracked independently.',
  },
  {
    icon: Users,
    title: 'NLN, ANPD, and nurse education professional involvement',
    desc: '"NLN Summit — october." "ANPD Annual Convention." "INACSL Annual Conference (simulation)." "NLN SIRC simulation resources CE." "QSEN Annual Forum (quality and safety)." "Academic-practice partnership CE." "Competency-based nursing education updates." "Didactic-clinical alignment CE for academic clinical educators." All clinical nurse educator professional development on calendar. NLN and ANPD conference CE tagged by CNE applicability.',
  },
]

const NE_WORKFLOW = [
  { time: 'Annual planning', action: 'NLN CNE 5-year 75-CE pace (annualized to 15 CE/year), ANCC specialty certification CE cycle (if applicable), state RN biennial CE, ACLS 2-year cycle, BLS 2-year cycle, annual competency program review, NLN Summit, and NLN membership all loaded in January. NLN CNE cumulative counter and state licensure CE tracked independently.' },
  { time: 'CE completion', action: '"NLN-approved — debriefing for meaningful learning: structured reflection frameworks, psychological safety in simulation, and learner feedback techniques for high-fidelity simulation, 3 CE, NLN CNE applicable — nursing education domain." NLN CNE counter updates (cumulative toward 75/5yr target). If ANCC specialty certification also applicable, that counter updates. State RN CE updates if applicable.' },
  { time: 'Competency review', action: '"Annual competency program review — nursing orientation competencies, annual mandatory education update, and specialty unit competencies, Q1." Annual competency program review placed as an institutional requirement for nurse educators managing competency programs. Joint Commission and CMS require documented annual competency review for clinical staff — nurse educators responsible for this documentation track the review as a separate annual milestone.' },
  { time: 'Sim education CE', action: '"INACSL simulation CE — simulation design, debriefing methodology, and simulation-based assessment, 2 CE, NLN CNE applicable." Simulation education CE tracked separately within NLN CNE portfolio. Nurse educators using simulation as a primary teaching modality benefit from simulation-specific CE documentation separate from general nursing education CE. INACSL Standards compliance CE logged with standards version.' },
  { time: 'Renewal audit', action: 'Analytics: NLN CNE CE on pace (cumulative toward 75/5yr)? ANCC specialty certification CE adequate (if applicable)? State RN CE complete for biennial renewal? ACLS current? BLS current? Annual competency program review documented? NLN membership active? Complete clinical nurse educator credential audit 90 days before earliest renewal. NLN, ANCC, state BON, and institutional documentation maintained separately.' },
]

export default function ForClinicalNurseEducatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Clinical Nurse Educators"
        title={
          <>
            CNE certification and state RN licensure maintained.
            <br />
            <em className="not-italic text-gold">Competency programs current. Simulation CE tracked.</em>
          </>
        }
        lede="Clinical nurse educators manage NLN CNE certification with 75 CE hours over 5 years in nursing education content, specialty certifications from ANCC or other organizations on independent cycles, state RN biennial licensure, ACLS and BLS renewals, annual competency program review and update obligations, simulation education CE, and professional development simultaneously. Momenties tracks CE by nurse educator credential, surfaces renewal deadlines 90 days early, and manages the full clinical nurse educator credential calendar in one view."
        crumbs={[{ label: 'For Clinical Nurse Educators' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How clinical nurse educators use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for clinical nurse educator credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Clinical nurse educator credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every CNE cycle, competency program requirement, and simulation education obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {NE_WORKFLOW.map((step, i) => (
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
                &ldquo;I have NLN CNE and I maintain my RN licensure, plus a specialty certification in critical care education from ANCC. Three separate credential systems. My state RN license renews every 2 years. NLN CNE is 5 years. The ANCC certification is also 5 years but on a different cycle because I got it 2 years after earning CNE. I run our simulation lab, which means I also track INACSL standards compliance as a professional development priority even though it&apos;s not a formal certification. And I&apos;m responsible for our annual nursing competency program review, which is a Joint Commission requirement that lives entirely outside any of my certifications. Momenties handles all of these as separate items. I don&apos;t have to reconcile systems anymore.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">B</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Barbara H., RN, CNE, CCRN-E</div>
                  <div className="text-xs text-muted-foreground">Clinical nurse educator, academic medical center simulation and education center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All clinical nurse educator credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'NLN CNE certification CE — 75 hours/5 years',
                'ANCC specialty certification CE — independent cycle',
                'State RN licensure CE — biennial',
                'ACLS certification — 2-year renewal (if required)',
                'BLS certification — 2-year renewal',
                'Annual competency program review and update — Joint Commission',
                'NLN membership renewal — annual',
                'NLN and ANPD conference CE planning by CNE domain applicability',
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
        title="CNE certification and state RN licensure maintained."
        subtitle="CE tracking by credential, competency program calendar, simulation education CE, and nurse education professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
