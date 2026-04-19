import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Level I Trauma Center Compliance Calendar | Momenties',
  description: 'Track ACS Level I trauma center verification, ATLS biennial recertification, TQIP quarterly benchmarking, trauma registry annual data submission, trauma surgeon call coverage, massive transfusion protocol compliance, and preventable death review deadlines.',
}

const pillars = [
  {
    icon: Target,
    title: 'ACS Verification & Trauma Center Standards',
    description: 'ACS Level I Trauma Center verification — 3-year cycle with annual ACS COT (Committee on Trauma) standards self-assessment, annual trauma registry data submission to NTDB (National Trauma Data Bank) ≥90% case capture, annual TQIP (Trauma Quality Improvement Program) participation and quarterly benchmarking report review, annual state trauma designation compliance and annual state trauma system report, annual trauma surgeon call coverage audit (24/7 attending in-house requirement for Level I), annual ACGME trauma surgery residency program compliance (if fellowship-training program), and annual ACS trauma center consultation response time audit (≤30 minutes).',
  },
  {
    icon: RefreshCw,
    title: 'ATLS, ABLS & Trauma Team Credentials',
    description: 'ATLS (Advanced Trauma Life Support) biennial recertification for all trauma surgeons, emergency physicians, and APPs, annual trauma nursing core course (TNCC) renewal — 4-year cycle for trauma nurses, annual ITLS (International Trauma Life Support) biennial renewal for EMS and transport team, annual trauma team activation drill documentation — all team members participate in annual trauma simulation, annual massive transfusion protocol (MTP) team competency documentation, annual trauma bay equipment inspection and crash cart audit, and annual trauma team leadership annual competency for trauma medical directors.',
  },
  {
    icon: TrendingUp,
    title: 'TQIP Benchmarking & Outcomes',
    description: 'TQIP quarterly benchmarking report review — risk-adjusted mortality, complications, LOS, and failure-to-rescue vs. national TQIP peer group, monthly trauma mortality and morbidity (M&M) review — ACS requirement for peer review of all trauma deaths and major complications, monthly preventable death rate documentation (ACS target ≤2% of all trauma deaths), quarterly massive transfusion protocol (MTP) activation time audit (target ≤10 minutes from activation to first cooler delivery), monthly blood product utilization ratio audit (FFP:PRBC ≥1:1:1 for damage control resuscitation), and annual NTDB annual data submission completeness audit.',
  },
  {
    icon: BarChart3,
    title: 'Trauma Registry & Injury Prevention',
    description: 'Annual NTDB data submission ≥90% case capture — required for ACS verification and TQIP participation, annual injury prevention program activity report (ACS verification requirement — community outreach documentation), annual pediatric trauma competency documentation (if treating pediatric patients — TNCC pediatric module and pediatric simulation), annual trauma PI (Performance Improvement) annual report — document all loop closures and protocol updates, annual trauma center community liaison and EMS medical director annual meeting documentation, and annual geriatric trauma protocol compliance audit (GCS scoring, fall prevention, anticoagulation reversal protocol for elderly patients).',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'ATLS Recertification Audit & Annual Policy Update',
    tasks: [
      'Annual ATLS provider status audit for all trauma surgeons, emergency physicians, and APPs — identify all staff due for biennial ATLS recertification within next 12 months',
      'Annual NTDB prior year data submission completeness audit — confirm ≥90% case capture for all prior year trauma admissions',
      'Annual trauma center policy and procedure annual review — update per ACS COT standards and TQIP quality improvement recommendations from prior year report',
      'Annual OIG/LEIE exclusion checks for all trauma center clinical staff',
      'Annual HIPAA training for all trauma center personnel',
      'Annual trauma surgeon call coverage audit — confirm 24/7 attending surgeon in-house compliance meets ACS Level I verification standard',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'TQIP Q1 Benchmarking & MTP Competency',
    tasks: [
      'TQIP Q1 benchmarking report review — analyze risk-adjusted mortality and complication rates vs. TQIP national peer group for Q4 prior year data',
      'Annual massive transfusion protocol (MTP) team annual competency documentation — simulation-based MTP activation drill with MTP activation-to-cooler delivery time measurement',
      'Annual blood product ratio audit Q1 — FFP:PRBC ratio for damage control resuscitation cases (target ≥1:1:1)',
      'Q1 trauma M&M review — all trauma deaths and major complications reviewed by peer review committee; preventable death rate documented',
      'Annual injury prevention community outreach program activity documentation — ACS verification requires documented annual community injury prevention activities',
      'Annual pediatric trauma simulation drill — pediatric trauma team activation and management of simulated pediatric multi-system trauma',
    ],
  },
  {
    period: 'May – Jun',
    title: 'TNCC Renewal Audit & Trauma Registry',
    tasks: [
      'Annual TNCC (Trauma Nursing Core Course) certification status audit for all trauma nurses — identify all nurses due for 4-year TNCC renewal within next 12 months',
      'Annual trauma PI (Performance Improvement) mid-year review — confirm all open PI loop closures from prior year annual report are on track',
      'NTDB Q1 data submission — all trauma admissions January–March submitted with complete ISS, mechanism, procedures, and outcome data',
      'Annual geriatric trauma protocol compliance audit — GCS documentation, anticoagulation reversal protocol activation rate, and fall mechanism screening compliance',
      'Annual trauma bay equipment inspection — crash cart, thoracotomy tray, rapid sequence intubation kit, and REBOA equipment inventory and expiration audit',
      'Q2 TQIP data submission — confirm all trauma registry data through March submitted for quarterly TQIP benchmarking',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'NTDB Semi-Annual Audit & ACS Verification Prep',
    tasks: [
      'Annual ACS trauma center verification annual self-assessment — compile all required documentation for potential unannounced site visit',
      'NTDB semi-annual data completeness audit — confirm ≥90% case capture through June and review all incomplete or missing data elements',
      'Annual trauma simulation annual drill — unannounced trauma activation drill with team response time measurement and debriefing',
      'Annual trauma surgeon response time audit — confirm ≤30 minutes from page to bedside compliance rate for all activations',
      'Q3 TQIP benchmarking report review — analyze YTD risk-adjusted mortality, complication rates, and failure-to-rescue vs. national peer group',
      'Annual EMS and trauma center annual liaison meeting documentation — EMS medical director, trauma medical director, and prehospital care protocol review',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'Accreditation Documentation & Preventable Death Review',
    tasks: [
      'Annual ACS COT trauma center verification documentation compilation — compile 3-year cycle documentation if verification site visit due within 12 months',
      'Annual trauma center preventable death annual review — analyze all prior year trauma deaths with preventability classification (non-preventable, potentially preventable, preventable)',
      'Annual trauma team activation drill documentation — confirm all trauma team members (surgery, ED, anesthesia, OR, blood bank) completed annual trauma simulation',
      'Annual pediatric trauma outcomes review — if treating pediatric patients, compile age-stratified outcomes and ATLS pediatric module compliance',
      'Q4 TQIP data preparation — begin review of Q3 data for completeness before Q4 TQIP submission deadline',
      'Annual geriatric trauma frailty protocol implementation audit — confirm frailty screening and goals-of-care documentation for trauma patients ≥65 years',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End NTDB Submission & Annual PI Report',
    tasks: [
      'Annual NTDB year-end data submission — confirm all prior year admissions submitted with ≥90% case capture and complete outcome data',
      'Annual trauma center performance improvement annual report — compile preventable death rate, TQIP benchmark outcomes, MTP activation times, and protocol loop closures for ACS verification file',
      'Annual ATLS recertification planning for next year — schedule all ATLS renewal courses for staff due in upcoming 12 months',
      'Annual injury prevention program annual report — compile all community outreach activities, number of presentations, and injury prevention education impact',
      'Annual trauma staff satisfaction and retention review — document trauma surgery APP retention and recruitment pipeline',
      'Annual trauma center state designation annual compliance report — file state trauma registry data and program compliance attestation per state requirements',
    ],
  },
]

const kpis = [
  { metric: '≥90%', label: 'NTDB Annual Case Capture Rate', description: 'ACS verification requirement — below 90% case capture risks Level I trauma center verification status at triennial site visit' },
  { metric: '≤2%', label: 'Preventable Trauma Death Rate', description: 'ACS COT benchmark — preventable death rate above 2% triggers mandatory TQIP quality improvement consultation and ACS PI review' },
  { metric: '≤10 min', label: 'MTP Activation-to-First-Cooler Time', description: 'Damage control resuscitation standard — delays beyond 10 minutes are associated with higher exsanguination mortality in massively hemorrhaging trauma patients' },
  { metric: '≥1:1:1', label: 'FFP:Platelets:PRBC Ratio', description: 'ACS damage control resuscitation benchmark — balanced ratios reduce coagulopathy mortality in massive hemorrhage; below ratio triggers MTP protocol review' },
  { metric: '100%', label: 'ATLS Biennial Recertification', description: 'ACS Level I verification requirement for all trauma providers — expired ATLS is a verification deficiency finding at site visit' },
  { metric: '≤30 min', label: 'Trauma Surgeon Response Time', description: 'ACS Level I attending in-house requirement — surgeon response exceeding 30 minutes from page to bedside is a verification standard deficiency' },
]

const testimonial = {
  quote: 'Level I trauma center compliance runs on biennial ATLS recertification cycles, quarterly TQIP benchmarking, monthly M&M review, annual NTDB data submission, MTP activation time audits, blood product ratio documentation, annual preventable death review, TNCC renewal tracking, injury prevention program documentation, and annual ACS COT self-assessment — all simultaneously. Momenties mapped every deadline. Our trauma center achieved ACS verification with zero deficiencies and ranked in the top quartile for risk-adjusted mortality on TQIP.',
  author: 'Trauma Program Manager, RN, TCRN',
  role: 'ACS Level I Verified Trauma Center, Academic Medical Center',
}

export default function LevelOneTraumaCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Level I Trauma Centers"
        title="ATLS. TQIP. NTDB. Preventable Deaths. One Calendar."
        subtitle="Level I trauma center compliance is built on continuous measurement — biennial ATLS recertification, quarterly TQIP benchmarking, monthly M&M review, annual NTDB data submission, MTP activation time audits, damage control resuscitation ratio documentation, annual preventable death review, and ACS COT verification standards. Momenties maps every ACS, TQIP, and state trauma registry deadline so your center maintains Level I status and top-quartile outcomes year-round."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Level I Trauma Center Compliance Coverage
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
              12-Month Level I Trauma Center Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January ATLS audit through December NTDB year-end submission &mdash; every ACS, TQIP, and state trauma registry milestone mapped.
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
            The KPIs ACS COT and TQIP Measure Your Trauma Center By
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
        headline="Ready for ACS Level I Verification with Zero Deficiencies?"
        subtext="Join trauma centers using Momenties to automate every TQIP, NTDB, ACS, and ATLS compliance deadline. Free to start."
      />
    </main>
  )
}
