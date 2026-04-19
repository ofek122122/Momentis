import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Comprehensive Stroke Center Compliance Calendar | Momenties',
  description: 'Track TJC Advanced Comprehensive Stroke Center certification annual conformance, Get With The Guidelines quarterly data, door-to-needle ≤60 minutes, annual thrombectomy volume requirements, NIHSS competency, and AHA/ASA stroke quality metric deadlines.',
}

const pillars = [
  {
    icon: Target,
    title: 'TJC Certification & Stroke Center Standards',
    description: 'TJC Advanced Comprehensive Stroke Center (CSC) certification — annual standards review with 3-year recertification cycle, annual AHA/ASA Stroke Center certification program conformance documentation, annual CMS Conditions of Participation for stroke services review, annual ACGME neurology and neurosurgery residency stroke program compliance (if training program), annual DNV Healthcare Comprehensive Stroke Center certification annual conformance, and annual state stroke center designation renewal (varies by state — typically annual or biennial attestation).',
  },
  {
    icon: RefreshCw,
    title: 'NIHSS, GWTG & Staff Competency',
    description: 'Annual NIHSS (NIH Stroke Scale) certification for all stroke nurses, neurologists, and APPs — online certification via NIH Stroke Scale Training Program, annual Get With The Guidelines (GWTG) Stroke data submission quarterly — ≥90% case capture required for AHA Quality Achievement Award, annual stroke code team competency assessment (door-to-CT ≤25 minutes, door-to-needle ≤60 minutes for eligible IV tPA patients), annual mechanical thrombectomy suite team annual competency, annual post-stroke swallowing screening competency for all stroke nurses, and annual carotid endarterectomy and stenting post-operative monitoring annual competency.',
  },
  {
    icon: TrendingUp,
    title: 'Quality Metrics & TPA/Thrombectomy Outcomes',
    description: 'Monthly door-to-needle (DTN) time ≤60 minutes audit for all IV tPA cases (TJC STK-4 measure — ≥75% target), monthly door-to-puncture time ≤90 minutes for all mechanical thrombectomy (MT) cases (AHA benchmark), quarterly GWTG Stroke composite quality score review (tPA rate for eligible patients, anticoagulation for AF, early antithrombotic, and lipid management), quarterly symptomatic intracranial hemorrhage (sICH) rate after tPA (target ≤6%, NINDS benchmark), annual thrombectomy volume requirement audit (TJC CSC requires ≥15 MT cases annually), and annual 90-day modified Rankin Scale (mRS 0–2) outcomes for MT patients.',
  },
  {
    icon: BarChart3,
    title: 'Telestroke & Secondary Prevention',
    description: 'Annual telestroke program quality review (if operating spoke hospital network) — door-to-physician time ≤20 minutes via telehealth, annual TIA evaluation protocol compliance audit (ABCD2 risk stratification, 24-hour workup completion ≥90%), annual secondary prevention protocol annual update review (antiplatelet, anticoagulation for AF, statin, BP management per current AHA/ASA guidelines), annual carotid imaging protocol compliance audit (CTA or MRA for all TIA/stroke patients within 24 hours), annual atrial fibrillation detection protocol review (prolonged cardiac monitoring ≥30 days post-cryptogenic stroke), and annual stroke rehabilitation referral rate documentation (≥90% of eligible patients referred to inpatient rehabilitation or outpatient stroke PT/OT/speech).',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'NIHSS Certification Audit & Annual Policy Update',
    tasks: [
      'Annual NIHSS certification status audit for all stroke team members — identify all physicians, NPs, PAs, and stroke nurses due for annual NIHSS recertification',
      'Annual AHA/ASA stroke guidelines annual update review — update all affected stroke order sets and care pathways per current AHA/ASA Primary Stroke Center and CSC guidelines',
      'Annual TJC CSC certification standards annual self-assessment — confirm compliance with all 20+ Advanced CSC certification elements',
      'Annual OIG/LEIE exclusion checks for all stroke center clinical staff',
      'Annual HIPAA training for all stroke center personnel',
      'Annual stroke center state designation renewal attestation — file annual state stroke center compliance documentation per state requirements',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'GWTG Q1 Data Submission & DTN Audit',
    tasks: [
      'GWTG Stroke Q1 data submission — all ischemic stroke, TIA, and hemorrhagic stroke admissions January–March submitted with complete quality measure data',
      'Q1 door-to-needle time audit — confirm ≥75% of IV tPA eligible patients treated within 60 minutes (TJC STK-4 measure)',
      'Q1 door-to-puncture time audit for mechanical thrombectomy cases — benchmark against AHA ≤90 minutes target',
      'Annual secondary prevention protocol update review — antiplatelet regimen, AF anticoagulation, LDL ≤70 mg/dL statin target, and blood pressure management',
      'Annual post-stroke swallowing screening competency documentation for all stroke nurses — MASA or GUSS swallowing screen protocol',
      'Q1 sICH rate review after IV tPA — confirm rate ≤6% per NINDS/ECASS III benchmark',
    ],
  },
  {
    period: 'May – Jun',
    title: 'Thrombectomy Volume Audit & Telestroke Review',
    tasks: [
      'Annual thrombectomy volume audit — confirm TJC CSC minimum ≥15 mechanical thrombectomy cases per year requirement',
      'Annual telestroke program quality review (if applicable) — door-to-physician time ≤20 minutes via telemedicine consultation, and tPA decision-to-infusion time',
      'Annual stroke code team competency assessment — simulation-based door-to-CT ≤25 minutes and door-to-needle ≤60 minutes annual drill for all stroke response team members',
      'GWTG Stroke Q2 data submission — all stroke admissions April–June submitted',
      'Annual carotid imaging protocol compliance audit — CTA or MRA completion rate within 24 hours for all TIA and ischemic stroke admissions',
      'Annual TIA evaluation protocol compliance audit — ABCD2 risk stratification and 24-hour workup completion ≥90% of high-risk TIAs',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'AHA Quality Achievement Award & Outcomes Review',
    tasks: [
      'Annual AHA Get With The Guidelines Gold Plus Quality Achievement Award submission — confirm ≥90% performance on all GWTG composite quality measures for eligibility',
      'Annual 90-day mRS 0–2 outcomes review for mechanical thrombectomy cohort — compare to DAWN/DEFUSE-3 trial benchmark outcomes',
      'GWTG Stroke Q3 data submission — all stroke admissions July–September submitted',
      'Annual atrial fibrillation detection protocol review — prolonged cardiac monitoring criteria (≥30 days for cryptogenic stroke) and LINQ/REVEAL device implant protocol',
      'Annual stroke rehabilitation referral rate documentation — ≥90% of eligible patients referred to inpatient rehab or outpatient stroke PT/OT/speech therapy',
      'Annual mechanical thrombectomy suite equipment maintenance — angiography suite annual quality control, biplane fluoroscopy annual inspection, and contrast injector calibration',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'TJC Recertification Prep & Emergency Drills',
    tasks: [
      'Annual TJC CSC recertification preparation — compile all required documentation for potential unannounced survey: case reviews, quality data, and process measure compliance',
      'Annual stroke code simulation drill — unannounced stroke code response audit with door-to-CT time measurement and team debriefing',
      'Annual carotid endarterectomy (CEA) and carotid artery stenting (CAS) outcomes review — 30-day stroke/death rate documentation (AHA benchmark ≤6% for symptomatic CEA)',
      'Annual neurocritical care nurse annual competency documentation — ICP monitoring, external ventricular drain care, and NIHSS assessment',
      'Annual GWTG Stroke data completeness audit — confirm ≥90% case capture through September for AHA Quality Achievement Award eligibility',
      'Annual stroke survivor support program documentation — peer visitor program, aphasia support group, and caregiver education program annual activity report',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End GWTG Data & Annual Quality Report',
    tasks: [
      'GWTG Stroke Q4 data submission — all stroke admissions October–December submitted (annual dataset complete for AHA Quality Achievement Award)',
      'Annual stroke center quality improvement annual report — compile DTN times, thrombectomy volume, sICH rate, secondary prevention compliance, and mRS outcomes for leadership',
      'Annual NIHSS recertification planning for next year — schedule all NIHSS certification renewals for staff due in upcoming 12 months',
      'Annual stroke quality dashboard year-end review — present all TJC STK and GWTG composite measure performance to medical staff quality committee',
      'Annual AHA Mission: Lifeline Stroke annual recognition application (if STEMI + Stroke center) — compile all required performance data',
      'Annual stroke center strategic plan review — assess thrombectomy program growth, telestroke expansion, and secondary prevention protocol outcomes for next year planning',
    ],
  },
]

const kpis = [
  { metric: '≤60 min', label: 'Door-to-Needle Time for IV tPA', description: 'TJC STK-4 measure — ≥75% of eligible patients treated within 60 minutes; below target is a TJC certification deficiency finding' },
  { metric: '≤90 min', label: 'Door-to-Puncture for Thrombectomy', description: 'AHA benchmark for mechanical thrombectomy — exceeding 90 minutes is associated with significantly worse 90-day functional outcomes' },
  { metric: '≥15/year', label: 'Annual Mechanical Thrombectomy Volume', description: 'TJC Advanced CSC minimum requirement — below 15 MT cases per year risks Comprehensive Stroke Center certification status' },
  { metric: '≤6%', label: 'Symptomatic ICH Rate After tPA', description: 'NINDS/ECASS III benchmark — sICH rate above 6% triggers mandatory stroke protocol review and TJC quality improvement plan requirement' },
  { metric: '≥90%', label: 'GWTG Composite Quality Score', description: 'AHA Gold Plus Quality Achievement Award threshold — below 90% on composite measures disqualifies program from annual award recognition' },
  { metric: '100%', label: 'Annual NIHSS Certification', description: 'TJC CSC standard — expired NIHSS certification for any stroke team member is a certification deficiency finding at site visit' },
]

const testimonial = {
  quote: 'Comprehensive stroke center compliance runs on quarterly GWTG data submissions, monthly door-to-needle time audits, annual thrombectomy volume tracking, TJC certification annual self-assessment, NIHSS recertification cycles, telestroke quality reviews, carotid imaging compliance audits, and 90-day mRS outcome documentation — all simultaneously. Momenties mapped every deadline. Our center has received AHA Gold Plus recognition for four consecutive years and achieved top-decile door-to-needle times nationally.',
  author: 'Stroke Program Director, MD, FAHA',
  role: 'TJC Advanced Comprehensive Stroke Center, Academic Medical Center',
}

export default function ComprehensiveStrokeCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Comprehensive Stroke Centers"
        title="Door-to-Needle. Thrombectomy Volume. GWTG. TJC. One Calendar."
        subtitle="Comprehensive stroke center compliance is built on continuous measurement — quarterly GWTG data submissions, monthly door-to-needle time audits, annual TJC CSC certification standards review, annual thrombectomy volume requirements, NIHSS recertification cycles, telestroke quality reviews, and 90-day functional outcomes documentation. Momenties maps every AHA, TJC, and CMS milestone so your stroke program maintains certification and achieves Gold Plus recognition year after year."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Comprehensive Stroke Center Compliance Coverage
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
              12-Month Comprehensive Stroke Center Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January NIHSS audit through December GWTG year-end submission &mdash; every AHA, TJC, and CMS stroke milestone mapped.
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
            The KPIs TJC Surveyors and AHA Measure Your Stroke Center By
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
        headline="Ready for AHA Gold Plus Stroke Recognition?"
        subtext="Join comprehensive stroke centers using Momenties to automate every GWTG, TJC, and AHA stroke compliance deadline. Free to start."
      />
    </main>
  )
}
