import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Blood Bank & Transfusion Service Compliance Calendar | Momenties',
  description: 'Track AABB accreditation, CAP/CLIA proficiency testing, FDA biologics license compliance, SBB certification CE, and transfusion reaction investigation deadlines.',
}

const pillars = [
  {
    icon: Target,
    title: 'AABB Accreditation & FDA Biologics Compliance',
    description: 'AABB 2-year accreditation annual conformance review, FDA 21 CFR Part 606 Good Manufacturing Practice annual audit, FDA biological product license annual renewal (if registered blood establishment), annual AABB Standards for Blood Banks and Transfusion Services edition update review, and annual FDA fatality report submission audit (all transfusion fatalities within 24 hours of discovery).',
  },
  {
    icon: RefreshCw,
    title: 'CAP/CLIA Proficiency Testing & Inspections',
    description: 'CAP PT (proficiency testing) three-per-year testing cycles for all analytes: ABO/Rh, antibody detection, compatibility testing, direct antiglobulin test — ≥80% satisfactory score required. Annual CAP laboratory accreditation biennial inspection (annual internal audit in off-years). CLIA Certificate of Accreditation biennial renewal tracking.',
  },
  {
    icon: TrendingUp,
    title: 'SBB & Transfusion Medicine Credentials',
    description: 'SBB (Specialist in Blood Banking) ASCP biennial 36-CE renewal, BB (Blood Bank Technologist) ASCP biennial CE, MT/MLT ASCP biennial CE, annual AABB Annual Meeting CE, annual ISBT (International Society of Blood Transfusion) Congress CE, annual blood utilization management CE, and annual massive transfusion protocol clinical update CE.',
  },
  {
    icon: BarChart3,
    title: 'Transfusion Reaction Surveillance & QI',
    description: 'Monthly transfusion reaction rate reviews (target ≤0.5% of transfused units), monthly blood utilization review (TRIM data), quarterly inappropriate transfusion rate audit (Hgb >8 g/dL for RBC), FDA MedWatch reporting for all suspected transfusion fatalities (within 7 days for suspected, 24 hours for confirmed), and annual National Blood Collection and Utilization Survey (NBCUS) data contribution.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'CAP PT Cycle 1 & Annual Standards Review',
    tasks: [
      'CAP proficiency testing Cycle 1 — ABO/Rh, antibody screen, compatibility, DAT testing cycle — submit within 30 days of receipt',
      'Annual AABB Standards edition review — confirm current Standards edition implemented and staff trained',
      'Annual CLIA Certificate of Accreditation renewal tracking — 2-year cycle, begin renewal process 6 months before expiration',
      'Annual OIG/LEIE exclusion checks for all blood bank staff',
      'Annual HIPAA training for all transfusion service staff',
      'Annual FDA biologics license amendment review — confirm all authorized blood products and manufacturing processes current',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'AABB Accreditation Annual Conformance',
    tasks: [
      'AABB accreditation annual conformance review — internal audit against all applicable AABB Standards chapters',
      'Annual AABB Standards for Blood Banks and Transfusion Services edition change implementation audit',
      'Q1 blood utilization review — TRIM committee review of RBC, plasma, platelet, and cryoprecipitate utilization',
      'Q1 inappropriate transfusion audit — sample all RBC transfusions with pre-transfusion Hgb ≥8 g/dL',
      'Annual staff competency assessment for all blood bank personnel — ABO/Rh testing, crossmatch, component preparation',
      'Annual emergency release blood protocol drill — document uncrossmatched O-negative release procedure',
    ],
  },
  {
    period: 'May – Jun',
    title: 'CAP PT Cycle 2 & FDA GMP Audit',
    tasks: [
      'CAP proficiency testing Cycle 2 — submit within 30 days of receipt',
      'Annual FDA 21 CFR Part 606 GMP self-audit — review all SOPs, equipment records, donor records, and adverse event logs',
      'Annual AABB Annual Meeting CE hours documentation for all SBB and BB staff',
      'Annual massive transfusion protocol (MTP) clinical review — update ratios per PROPPR trial evidence (1:1:1 FFP:PLT:RBC)',
      'Annual FDA MedWatch fatality report audit — confirm all transfusion fatality reports filed within required timeframes',
      'Annual look-back procedure audit — confirm all required look-back notifications completed for confirmed HIV/HCV-positive donors',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'ISBT/AABB Conference CE & Mid-Year Quality',
    tasks: [
      'ISBT Congress or AABB Annual Meeting CE documentation for SBB credential maintenance',
      'Q2 transfusion reaction rate review — confirm ≤0.5% per transfused unit; investigate all non-infectious serious hazards',
      'Annual blood utilization benchmark review — compare institution RBC:FFP:PLT ratios to national benchmarks',
      'Annual informed consent for transfusion policy review and patient education materials update',
      'Annual irradiation and CMV-safe product utilization review for immunocompromised patient protocols',
      'Annual emergency blood bank response plan review — mass casualty and shortage response protocols',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'CAP PT Cycle 3 & Staff Credential Renewals',
    tasks: [
      'CAP proficiency testing Cycle 3 — submit within 30 days of receipt — confirm all three cycles completed for year',
      'SBB and BB ASCP biennial CE audit — confirm all staff on track for 36 CE hours per 2-year cycle',
      'Annual blood product expiration and wastage rate review — confirm wastage ≤2% for RBC units',
      'Annual therapeutic apheresis procedure competency documentation for all apheresis nurses and technologists',
      'Annual plasmapheresis donor deferral record audit — confirm all deferrals documented per AABB Standards',
      'Annual hemovigilance data compilation for NBCUS annual survey contribution',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'FDA License Renewal & Year-End Hemovigilance',
    tasks: [
      'Annual FDA biologics license annual review — confirm all blood products on license current',
      'Annual NBCUS (National Blood Collection and Utilization Survey) data submission — national survey due annually',
      'Annual hemovigilance year-end report — compile all transfusion reactions, adverse events, and near-misses',
      'Annual AABB accreditation self-assessment year-end close for next survey cycle',
      'Annual staff satisfaction and retention review for blood bank personnel',
      'Q4 CAP inspection preparation — organize all proficiency testing records, QC logs, and equipment maintenance for biennial inspection',
    ],
  },
]

const kpis = [
  { metric: '≥80%', label: 'CAP PT Satisfactory Score Rate', description: 'Three cycles/year — two consecutive unsatisfactory = CLIA certificate suspension' },
  { metric: '≤0.5%', label: 'Transfusion Reaction Rate per Transfused Unit', description: 'AABB hemovigilance benchmark — above triggers mandatory QI review' },
  { metric: '≤2%', label: 'RBC Unit Wastage Rate', description: 'AABB blood utilization benchmark — above triggers shortage management review' },
  { metric: '100%', label: 'FDA Fatality Report Filing Rate', description: '24-hour FDA reporting requirement — missed report = FDA enforcement action' },
  { metric: '100%', label: 'Annual Staff Competency Assessment Completion', description: 'AABB Standard 5.7.1 requirement — any gap = condition-level deficiency at inspection' },
  { metric: '≤2 hrs', label: 'Massive Transfusion Protocol Activation Time', description: 'STS/trauma benchmark — delays directly correlate with hemorrhagic shock mortality' },
]

const testimonial = {
  quote: 'Blood bank compliance runs on four simultaneous cycles — CAP PT three times a year, AABB biennial accreditation (with annual internal audits), FDA GMP annual self-audits, and quarterly transfusion reaction and utilization reviews. Momenties was the first tool that put all of it on one calendar with automated alerts. Our last CAP inspection had zero deficiencies.',
  author: 'Blood Bank Medical Director, MD, SBB',
  role: 'Transfusion Service, 400-Bed Academic Medical Center',
}

export default function BloodBankLaboratoryCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Blood Banks &amp; Transfusion Services"
        title="AABB. CAP PT. FDA GMP. Hemovigilance. One Calendar."
        subtitle="Blood banks and transfusion services operate under the most tightly regulated laboratory framework in medicine — FDA biologics licensing, three annual CAP PT cycles, AABB biennial accreditation, monthly transfusion reaction surveillance, and FDA 24-hour fatality reporting. Momenties maps every deadline so your program stays accredited, licensed, and inspection-ready year-round."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Blood Bank Compliance Coverage
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 28 }}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <div key={title} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 28 }}>
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: 10, color: '#f0ece3' }}>{title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#a0998e', lineHeight: 1.65 }}>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Timeline */}
      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 12, color: '#f0ece3' }}>
              12-Month Blood Bank Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January CAP PT Cycle 1 through December NBCUS submission &mdash; every AABB, FDA, and hemovigilance milestone mapped.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {phases.map((phase) => (
                <div key={phase.period} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '24px 28px', alignItems: 'start' }}>
                  <div>
                    <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>{phase.period}</div>
                    <div style={{ color: '#f0ece3', fontWeight: 600, fontSize: '1rem', lineHeight: 1.35 }}>{phase.title}</div>
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {phase.tasks.map((task) => (
                      <li key={task} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.9rem', color: '#a0998e', lineHeight: 1.55 }}>
                        <span style={{ color: '#c5a35c', marginTop: 3, flexShrink: 0 }}>▸</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            The KPIs FDA, AABB, and CAP Measure You By
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {kpis.map(({ metric, label, description }) => (
              <div key={label} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#c5a35c', fontFamily: 'Playfair Display, serif', marginBottom: 8 }}>{metric}</div>
                <div style={{ fontWeight: 600, fontSize: '0.97rem', color: '#f0ece3', marginBottom: 8 }}>{label}</div>
                <div style={{ fontSize: '0.85rem', color: '#a0998e', lineHeight: 1.55 }}>{description}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ background: '#0e0e12', padding: '72px 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', color: '#c5a35c', marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.2rem)', color: '#f0ece3', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 28 }}>
              {testimonial.quote}
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>{testimonial.author}</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>{testimonial.role}</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready for Zero CAP PT Deficiencies?"
        subtext="Join blood banks and transfusion services using Momenties to automate every AABB, FDA, and CAP deadline. Free to start."
      />
    </main>
  )
}
