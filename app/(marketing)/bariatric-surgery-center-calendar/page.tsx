import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Bariatric Surgery Center Compliance Calendar | Momenties',
  description: 'Track MBSAQIP accreditation annual self-assessment, BOLD registry quarterly data, ASMBS annual CE, 30-day readmission rate monitoring, annual micronutrient deficiency protocol review, and FDA adjustable gastric band annual device reporting deadlines.',
}

const pillars = [
  {
    icon: Target,
    title: 'MBSAQIP Accreditation & Quality Standards',
    description: 'MBSAQIP (Metabolic and Bariatric Surgery Accreditation and Quality Improvement Program) accreditation — Level I/II Comprehensive Center or Low Acuity Center — requires annual self-assessment, bi-annual BOLD (Bariatric Outcomes Longitudinal Database) data submission, annual MBSAQIP standards review for program compliance, annual MBSAQIP Outcomes Reporting System (MBSORS) semi-annual report review, annual ACS NSQIP bariatric procedures module outcomes report, and annual MBSAQIP surgeon case volume requirement audit (≥25 bariatric cases per accredited surgeon).',
  },
  {
    icon: RefreshCw,
    title: 'ASMBS Credentials & Bariatric CE',
    description: 'Annual ASMBS (American Society for Metabolic and Bariatric Surgery) membership CE, ABOM (American Board of Obesity Medicine) annual MOC Diplomate status renewal, annual ASMBS Annual Scientific Meeting CE, annual TOS (The Obesity Society) Annual Scientific Meeting CE, annual Obesity Week multispecialty conference CE, biennial ABOM Diplomate renewal (10 CE per year toward 100 over 10-year cycle), and annual bariatric multidisciplinary team (MDT) competency documentation — dietitian, psychologist, and NP/PA annual update.',
  },
  {
    icon: TrendingUp,
    title: 'BOLD Registry & Outcomes Tracking',
    description: 'BOLD (Bariatric Outcomes Longitudinal Database) quarterly data submission ≥90% case capture — required for MBSAQIP accreditation maintenance, monthly 30-day readmission rate monitoring (MBSAQIP benchmark ≤5%), monthly 30-day mortality rate (MBSAQIP Level I benchmark ≤0.3%), quarterly anastomotic leak rate tracking (gastric bypass ≤2%, sleeve ≤1%), quarterly 30-day major adverse event rate vs. MBSAQIP national median, and annual 1-year excess weight loss (%EWL ≥50%) outcome documentation.',
  },
  {
    icon: BarChart3,
    title: 'Micronutrient Protocols & FDA Device Compliance',
    description: 'Annual ASMBS nutritional guidelines update review (post-bariatric micronutrient supplementation protocol — iron, B12, folate, thiamine, calcium/vitamin D annual dosing review), annual FDA adjustable gastric band (AGB) device adverse event reporting (MedWatch) and annual implant registry documentation (ALLERGAN ORBERA/LAP-BAND annual device report), annual post-bariatric hypoglycemia monitoring protocol review, annual FDA bariatric device postmarket surveillance report review, quarterly vitamin deficiency rate documentation (B1 deficiency target ≤1%), and annual psychological clearance protocol annual competency review.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'MBSAQIP Annual Self-Assessment & Outcomes Baseline',
    tasks: [
      'Annual MBSAQIP program self-assessment — confirm all standards compliance: surgeon case volume, multidisciplinary team composition, pre-operative evaluation protocols, and post-operative follow-up rates',
      'Annual ASMBS nutritional guidelines review — update post-bariatric micronutrient supplementation protocols per current ASMBS/AACE/TOS evidence-based guidelines',
      'Annual BOLD registry completeness audit — confirm prior year Q4 data submission complete and ≥90% case capture rate maintained',
      'Annual OIG/LEIE and SAM.gov exclusion checks for all bariatric surgery center staff',
      'Annual HIPAA training for all bariatric surgery center clinical and administrative staff',
      'Annual FDA adjustable gastric band adverse event review — confirm all AGB-related adverse events reported via MedWatch within required timeframes',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'BOLD Q1 Data & Readmission Rate Audit',
    tasks: [
      'BOLD registry Q1 data submission — all bariatric procedures January–March submitted with complete 30-day outcome data',
      'Q1 readmission rate audit — 30-day unplanned readmission rate vs. MBSAQIP national benchmark (≤5% target)',
      'Annual MBSAQIP surgeon case volume audit — confirm each accredited bariatric surgeon meets ≥25 bariatric cases per year requirement',
      'Annual psychological clearance protocol competency review — confirm bariatric psychologist annual case review documentation and clearance protocol adherence',
      'Annual pre-operative nutritional assessment protocol audit — confirm all patients receive dietitian evaluation per ASMBS guidelines before surgery',
      'Q1 anastomotic leak rate documentation — gastric bypass ≤2% and sleeve gastrectomy ≤1% benchmark review',
    ],
  },
  {
    period: 'May – Jun',
    title: 'ASMBS Annual Meeting CE & Micronutrient Audit',
    tasks: [
      'Annual ASMBS Annual Scientific Meeting CE documentation — confirm all bariatric surgeons and MDT members have CE hours documented',
      'Annual vitamin deficiency rate audit Q1/Q2 — B1 (thiamine) deficiency rate ≤1%, B12 deficiency rate, and iron deficiency rate for post-bariatric patients at 6-month follow-up',
      'Annual Obesity Week multispecialty conference CE documentation for bariatric MDT — dietitians, psychologists, and advanced practice providers',
      'BOLD registry Q2 data submission — all bariatric procedures April–June submitted',
      'Annual 6-month %EWL documentation audit — confirm 6-month post-operative excess weight loss data entered for all eligible patients',
      'Annual ABOM Diplomate annual maintenance CE audit — confirm all physicians with ABOM board certification on track for annual 10 CE requirement',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'MBSAQIP Semi-Annual Report & Quality Review',
    tasks: [
      'Annual MBSAQIP Outcomes Reporting System (MBSORS) semi-annual report review — analyze program performance vs. MBSAQIP national case-mix adjusted benchmarks',
      'Annual ACS NSQIP bariatric procedures module outcomes report — compile 30-day morbidity, mortality, and SSI rates for bariatric cases by procedure type',
      'Q2 30-day mortality rate review — Level I benchmark ≤0.3% and Level II benchmark ≤0.5% vs. program rate',
      'Annual FDA bariatric device postmarket surveillance annual report review — ORBERA intragastric balloon, LAP-BAND, and duodenal-jejunal bypass liner device safety updates',
      'Annual bariatric MDT annual competency documentation — dietitian, psychologist, and NP/PA annual competency assessment and CE verification',
      'BOLD registry Q2 completeness audit — confirm ≥90% case capture for all procedures through June',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'Accreditation Prep & 1-Year Outcomes',
    tasks: [
      'Annual MBSAQIP accreditation preparation — compile program self-assessment documentation for potential unannounced site visit',
      'Annual 1-year excess weight loss (%EWL) outcome documentation — confirm all patients with 1-year follow-up have %EWL documented (ASMBS benchmark ≥50% for RYGB)',
      'BOLD registry Q3 data submission — all bariatric procedures July–September submitted',
      'Annual post-bariatric hypoglycemia monitoring protocol review — update clinical pathway per current ASMBS evidence-based practice update',
      'Annual emergency management protocol review for bariatric patients — confirm staff training for bariatric patient MRI, CT, and emergency airway management protocols',
      'Annual post-operative follow-up rate audit — MBSAQIP requires documentation of ≥60% 1-year follow-up rate for accredited programs',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End BOLD Submission & Quality Report',
    tasks: [
      'BOLD registry Q4 data submission — all bariatric procedures October–December submitted (annual BOLD dataset complete)',
      'Annual bariatric surgery center quality improvement annual report — compile readmission rates, mortality, anastomotic leak rates, %EWL, and vitamin deficiency data for leadership and MBSAQIP file',
      'Annual micronutrient supplementation protocol update — review full-year vitamin deficiency data and update post-bariatric supplement prescribing protocol for January 1',
      'Annual adjustable gastric band (AGB) annual device report filing — submit all AGB device adverse events and implant registry data for the calendar year',
      'Annual bariatric staff satisfaction and retention review',
      'Annual ASMBS guideline update review for program policy alignment — ASMBS guidelines review and policy updates for next year',
    ],
  },
]

const kpis = [
  { metric: '≤5%', label: '30-Day Unplanned Readmission Rate', description: 'MBSAQIP accreditation benchmark — above 5% triggers mandatory MBSAQIP program review and quality improvement plan submission' },
  { metric: '≤0.3%', label: '30-Day Mortality Rate (Level I)', description: 'MBSAQIP Level I Comprehensive Center benchmark — exceeding threshold triggers MBSAQIP adverse outcome reporting and site review' },
  { metric: '≥90%', label: 'BOLD Registry Case Capture', description: 'MBSAQIP data submission requirement — below 90% case capture risks accreditation status at annual review' },
  { metric: '≥50%', label: '1-Year Excess Weight Loss (%EWL)', description: 'ASMBS outcomes benchmark for RYGB — centers below 50% %EWL trigger MBSAQIP quality improvement consultation' },
  { metric: '≥60%', label: '1-Year Follow-Up Rate', description: 'MBSAQIP accreditation requirement — below 60% 1-year patient follow-up documentation risks accreditation status' },
  { metric: '≤1%', label: 'Thiamine Deficiency Rate', description: 'ASMBS nutritional guideline target — B1 deficiency above 1% triggers mandatory post-bariatric nutrition protocol review and dietitian QI audit' },
]

const testimonial = {
  quote: 'Bariatric surgery center compliance runs on quarterly BOLD registry submissions, monthly readmission rate tracking, annual MBSAQIP self-assessment, semi-annual MBSORS report review, annual surgeon case volume audits, annual micronutrient protocol updates, FDA device adverse event reporting, and 1-year %EWL outcome documentation — all simultaneously. Momenties mapped every deadline. Our center achieved MBSAQIP Level I re-accreditation with zero deficiencies and ranked in the top 10% of MBSAQIP programs for 30-day readmission rate.',
  author: 'Bariatric Program Director, MD, FACS, FASMBS',
  role: 'MBSAQIP Level I Comprehensive Bariatric Surgery Center',
}

export default function BariatricSurgeryCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Bariatric Surgery Centers"
        title="MBSAQIP. BOLD Registry. Readmissions. %EWL. One Calendar."
        subtitle="Bariatric surgery center compliance is driven by continuous outcome monitoring — quarterly BOLD registry data submissions, monthly 30-day readmission tracking, annual MBSAQIP self-assessment, semi-annual MBSORS benchmark reports, surgeon case volume audits, micronutrient protocol updates, and FDA device adverse event reporting. Momenties maps every MBSAQIP, ASMBS, and BOLD deadline so your center maintains top-quartile accreditation status year after year."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Bariatric Surgery Center Compliance Coverage
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
              12-Month Bariatric Surgery Center Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January MBSAQIP self-assessment through December BOLD annual submission &mdash; every ASMBS, MBSAQIP, and FDA milestone mapped.
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
            The KPIs MBSAQIP and ASMBS Measure Your Program By
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
        headline="Ready to Achieve Top-Quartile MBSAQIP Accreditation?"
        subtext="Join bariatric surgery centers using Momenties to automate every BOLD registry, MBSAQIP, and ASMBS deadline. Free to start."
      />
    </main>
  )
}
