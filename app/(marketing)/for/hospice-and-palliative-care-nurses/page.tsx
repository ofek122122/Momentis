import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Hospice and Palliative Care Nurses — CHPN CE renewal, hospice nursing credential management',
  description:
    'Hospice and palliative care nurses manage NBCHPN CHPN 100 CE/4yr with palliative care-specific content, state RN biennial CE on an independent cycle, annual NHPCO hospice compliance training, annual pain assessment and opioid management competency, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full hospice and palliative care nurse credential calendar.',
  alternates: { canonical: '/for/hospice-and-palliative-care-nurses' },
  openGraph: {
    title: 'Momenties for Hospice and Palliative Care Nurses',
    description: 'CHPN CE renewal, hospice nursing credential management.',
    url: '/for/hospice-and-palliative-care-nurses',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for NBCHPN CHPN and state RN licensure independently',
    desc: 'Hospice and palliative care nurses holding the CHPN (Certified Hospice and Palliative Nurse) credential from NBCHPN must complete 100 CE hours every 4 years with palliative nursing-specific content — symptom management, end-of-life care, grief and bereavement, ethical decision-making, and communication at the end of life. State RN biennial CE requirements run on an independent cycle with state board-approved provider requirements that differ from NBCHPN-approved CE. The same CE event may satisfy one requirement but not the other depending on approval status. NBCHPN also offers CHPLN (LPN), CHPPN (pediatric), and CHPAN (advanced practice) credentials, each with independent renewal requirements.',
  },
  {
    icon: Clock,
    title: 'Hospice nurse multi-credential renewal calendar',
    desc: '"CHPN — 100 CE/4yr, palliative nursing content." "State RN license — biennial CE, state-approved providers." "Annual NHPCO hospice compliance training." "Annual pain assessment and controlled substance documentation competency." "Annual bereavement program competency (if CHPN at hospice with bereavement coordinator role)." "HPNA membership — annual." All hospice and palliative care nurse credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'NHPCO hospice compliance CE and opioid documentation competency analytics',
    desc: 'Hospice nurses working at Medicare-certified hospice programs must complete annual NHPCO hospice compliance training covering Medicare Conditions of Participation, hospice eligibility criteria documentation, and interdisciplinary team care planning requirements. This compliance training is a regulatory requirement for hospice program certification — separate from CHPN CE and separate from state RN CE. Hospice nurses managing opioid-containing comfort medications must complete annual competency in pain assessment documentation, controlled substance reconciliation, and waste procedures — institutional requirement separate from all three external credential cycles.',
  },
  {
    icon: Users,
    title: 'HPNA, NHPCO, and hospice nursing professional involvement',
    desc: '"HPNA Annual Conference." "NHPCO Annual Clinical Training Conference." "AAHPM Annual Assembly." "Pediatric palliative care CE (if CHPPN or pediatric hospice practice)." "Opioid rotation and equianalgesic dosing CE." "Dyspnea and terminal secretion management CE." "Goals of care communication CE." "Anticipatory grief and complicated bereavement CE." All hospice and palliative care nursing professional development on calendar. HPNA conference CE tagged by CHPN and state RN licensure applicability.',
  },
]

const HOSPICE_NURSE_WORKFLOW = [
  { time: 'Annual planning', action: 'CHPN 100 CE/4yr pace (annual target: 25 CE, palliative nursing content weighted), state RN biennial CE pace, annual NHPCO compliance training, annual opioid documentation competency, HPNA conference, NHPCO conference, and HPNA membership all loaded in January. CHPN CE counter, state RN CE counter tracked independently. Annual compliance and competency items tracked as institutional requirements separate from external CE counters.' },
  { time: 'CE completion', action: '"HPNA-approved — refractory symptom management in the final 48 hours: subcutaneous opioid and benzodiazepine continuous infusion titration, terminal secretion management with glycopyrrolate vs. scopolamine, and death rattle communication with family caregivers, 2 CE, CHPN applicable — symptom management domain." CHPN counter updates. State RN CE updates (if state-approved). Palliative nursing content confirmed at logging.' },
  { time: 'Compliance CE', action: '"Annual NHPCO hospice compliance training — Medicare Conditions of Participation: face-to-face encounter documentation requirements, interdisciplinary team care plan 90-day review, and hospice eligibility recertification documentation standards, 2 CE, Q1." NHPCO compliance CE placed as Q1 annual requirement. Medicare Conditions of Participation update annually — compliance CE placed in Q1 to capture changes from the prior CMS rule cycle. Documented at institutional level for hospice program certification; may or may not count toward CHPN CE depending on CE provider approval status.' },
  { time: 'Opioid competency', action: '"Annual controlled substance and opioid documentation competency — comfort medication kit inventory reconciliation, opioid waste documentation with witness signature, and shift-to-shift controlled substance count procedures, 1 CE, Q2." Annual opioid documentation competency placed as institutional requirement for hospice nurses with access to comfort medication kits. Competency documentation maintained for DEA diversion prevention compliance and state nursing board inspection readiness.' },
  { time: 'Renewal audit', action: 'Analytics: CHPN 100 CE on pace (25/yr target)? Palliative nursing content requirements satisfied? State RN CE complete? NHPCO compliance training documented? Opioid competency current? HPNA membership active? Complete hospice nurse credential audit 90 days before CHPN renewal. NBCHPN, state board, NHPCO, and institutional documentation maintained separately.' },
]

export default function ForHospiceAndPalliativeCareNursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Hospice and Palliative Care Nurses"
        title={
          <>
            CHPN CE and state RN licensure maintained.
            <br />
            <em className="not-italic text-gold">NHPCO compliance documented. Opioid competency current.</em>
          </>
        }
        lede="Hospice and palliative care nurses manage NBCHPN CHPN 100 CE every 4 years with palliative nursing-specific content, state RN biennial CE on an independent cycle with different approved provider requirements, annual NHPCO Medicare Conditions of Participation compliance training as a hospice program regulatory requirement, annual controlled substance documentation competency as an institutional diversion prevention requirement, and professional development at HPNA and NHPCO simultaneously. Momenties tracks CE by hospice nurse credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar in one view."
        crumbs={[{ label: 'For Hospice and Palliative Care Nurses' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How hospice and palliative care nurses use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for hospice and palliative care nurse credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Hospice nurse credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every CHPN renewal cycle, NHPCO compliance requirement, and annual opioid documentation competency.</h2>
          </Reveal>
          <div className="space-y-3">
            {HOSPICE_NURSE_WORKFLOW.map((step, i) => (
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
                &ldquo;CHPN requires 100 CE every four years with palliative-specific content. My state license requires CE every two years on a different cycle with different approved providers. Our hospice program requires annual NHPCO compliance training because we&apos;re Medicare-certified — that&apos;s a third requirement that doesn&apos;t automatically satisfy either the CHPN or my state license. We have nurses who hold the CHPPN for pediatric hospice and the CHPAN for APRNs — each one is a different NBCHPN credential with a different renewal. I coordinate CE planning for our entire team and I was tracking six different nurses across three separate credential systems in a spreadsheet. Momenties let me see the whole team&apos;s credential status in one view.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Rebecca H., RN, CHPN</div>
                  <div className="text-xs text-muted-foreground">Director of nursing, Medicare-certified hospice and palliative care program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All hospice and palliative care nurse credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'NBCHPN CHPN CE — 100 hours/4yr, palliative nursing content domains',
                'State RN license CE — biennial, state board-approved providers',
                'Annual NHPCO hospice compliance training — Medicare CoP requirements',
                'Annual controlled substance documentation competency — diversion prevention',
                'Pediatric hospice CE (if CHPPN credential holder)',
                'Advanced practice palliative CE (if CHPAN credential holder)',
                'HPNA membership renewal — annual',
                'HPNA and NHPCO conference CE planning by CHPN and state RN applicability',
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
        title="CHPN CE and state RN licensure maintained."
        subtitle="CE tracking for palliative nursing content, NHPCO compliance training, annual opioid competency, and hospice nursing professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
