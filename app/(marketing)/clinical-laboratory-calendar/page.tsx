import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Clinical Laboratory Compliance Calendar | Momenties',
  description: 'Track CAP biennial accreditation, CLIA proficiency testing deadlines, state laboratory director license renewals, MT/MLT biennial CE, and annual competency assessment requirements.',
}

const pillars = [
  {
    icon: Target,
    title: 'CAP Accreditation & CLIA Compliance',
    description: 'CAP accreditation biennial on-site inspection (annual internal Q-Probe self-assessment in off years), CLIA Certificate of Accreditation biennial renewal tracking, three CAP proficiency testing cycles per year for all analytes, annual CAP Q-Probe quality indicator data submission, and annual CMS CLIA electronic reporting system (IQCP) review for all non-waived tests.',
  },
  {
    icon: RefreshCw,
    title: 'State Lab Director License & MT/MLS CE',
    description: 'State laboratory director biennial license renewal (MD or PhD), MT/MLS ASCP biennial 36-CE renewal tracking for all staff, MLT ASCP biennial CE, SH (Specialist in Hematology) biennial CE, SC (Specialist in Chemistry) biennial CE, annual AACC Annual Meeting CE, and annual CAP Annual Meeting CE for lab directors and senior staff.',
  },
  {
    icon: TrendingUp,
    title: 'Proficiency Testing & Quality Control',
    description: 'Three CAP PT cycles per year (cycles 1, 2, 3) with ≥80% satisfactory score required per analyte, monthly Levey-Jennings QC chart review for all regulated analytes, quarterly total allowable error assessment vs. CLIA waived limits, annual Westgard QC rule compliance audit, and annual peer comparison program (CAP PAP or equivalent) enrollment verification.',
  },
  {
    icon: BarChart3,
    title: 'IQCP, Competency & Training Requirements',
    description: 'Annual IQCP (Individualized Quality Control Plan) review for all tests using IQCP instead of traditional QC (CLIA requirement), annual competency assessment for all testing personnel (6 elements — direct observation, specimen handling, troubleshooting, QC review, PT results review, written exam), annual new employee orientation sign-off, and annual laboratory safety training (OSHA, chemical hygiene, biosafety).',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'CAP PT Cycle 1 & Annual License Audits',
    tasks: [
      'CAP proficiency testing Cycle 1 — submit all analyte results within 30 days of receipt for all enrolled challenges',
      'Annual laboratory director and supervisor license renewal audit — identify all licenses expiring in current year',
      'Annual HIPAA training for all laboratory personnel',
      'Annual HIPAA Security Risk Assessment for LIS, pathology systems, and instrument interfaces',
      'Annual OIG/LEIE and SAM.gov exclusion checks for all lab employees and contractors',
      'Annual chemical hygiene plan review and update (OSHA 29 CFR 1910.1450)',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'CAP Annual Q-Probe Submission & PT Review',
    tasks: [
      'CAP Q-Probe annual quality indicator data submission — document critical value callback time, specimen rejection rate, turnaround time benchmarks',
      'CAP PT Cycle 1 results review — document all PT failures and corrective action for any unsatisfactory scores',
      'Annual CAP accreditation checklist self-assessment — laboratory director must review annually',
      'Annual IQCP annual review for all tests using IQCP instead of traditional QC',
      'Annual CLIA electronic reporting verification — confirm all test menu changes reported to CLIA within 30 days',
      'Annual biosafety committee annual review of laboratory risk assessments and biological safety cabinet certification',
    ],
  },
  {
    period: 'May – Jun',
    title: 'CAP PT Cycle 2 & Competency Assessments',
    tasks: [
      'CAP proficiency testing Cycle 2 — submit all results within 30 days of receipt',
      'Annual competency assessment Cycle 1 — complete 6-element CLIA competency assessment for all testing personnel',
      'Annual new employee competency documentation — confirm all staff hired since last assessment cycle are documented',
      'Annual AACC Annual Meeting CE documentation for laboratory directors and section supervisors',
      'Annual laboratory safety training completion — OSHA bloodborne pathogen, chemical hygiene, fire safety',
      'Annual autoclave/sterilizer biological indicator spore testing verification — document all weekly test results complete',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'Biennial CAP Inspection Prep (Off-Year Internal Audit)',
    tasks: [
      'Annual CAP accreditation internal audit (off-year self-inspection using current CAP checklists)',
      'Annual total allowable error assessment — compare all QC data to CLIA allowable limits for each analyte',
      'Annual reagent/kit shelf life and manufacturer bulletin review — confirm all expired materials removed from service',
      'Annual laboratory information system (LIS) validation review — confirm all pending critical upgrades validated before deployment',
      'Annual clinical correlation audit — random sample of flagged results confirmed with clinical follow-up',
      'Annual waived test training verification — confirm all personnel performing waived tests have completed manufacturer training',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'CAP PT Cycle 3 & MT/MLT CE Audit',
    tasks: [
      'CAP proficiency testing Cycle 3 — submit all results within 30 days of receipt — confirm all three cycles complete for year',
      'MT/MLS and MLT ASCP biennial CE audit — confirm all staff on track for 36 CE hours per 2-year cycle',
      'Annual competency assessment Cycle 2 (if biannual schedule) — second semi-annual competency documentation',
      'Annual peer comparison program enrollment verification for next year (CAP PAP or ARUP, Mayo, etc.)',
      'Annual CAP PT enrollment verification for next year — confirm all required disciplines enrolled for following year',
      'Annual critical value policy review and distribution list update — confirm all critical value callback recipients current',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'CLIA Renewal & Year-End QC Summary',
    tasks: [
      'CLIA Certificate of Accreditation biennial renewal preparation — submit 6 months before expiration',
      'Annual QC year-end summary — compile Levey-Jennings charts, PT performance, and total allowable error compliance',
      'Annual laboratory director annual review certification — sign all required CLIA laboratory director attestations',
      'Annual state laboratory license renewal (most states biennial — track individual expiration dates)',
      'Annual waived test annual review — assess whether any tests require reclassification to moderate/high complexity under updated FDA guidance',
      'Annual CAP accreditation annual self-assessment sign-off by laboratory director',
    ],
  },
]

const kpis = [
  { metric: '≥80%', label: 'CAP PT Satisfactory Score Rate per Analyte', description: 'Three consecutive unsatisfactory = immediate CLIA certificate suspension' },
  { metric: '≤30 min', label: 'Critical Value Callback Turnaround Time', description: 'CAP Q-Probe benchmark — >30 min triggers laboratory quality improvement' },
  { metric: '100%', label: 'Annual Competency Assessment Completion', description: 'CLIA 42 CFR 493.1451 — any gap = condition-level deficiency during inspection' },
  { metric: '≤2%', label: 'Specimen Rejection Rate', description: 'CAP Q-Probe benchmark — above 2% triggers pre-analytical process review' },
  { metric: '100%', label: 'Annual IQCP Review Completion', description: 'CLIA requirement for all IQCP-based tests — missed review = non-compliance' },
  { metric: '0', label: 'Unresolved CAP PT Failures', description: 'All PT failures require documented corrective action within 30 days' },
]

const testimonial = {
  quote: 'Clinical laboratory compliance is a continuous cycle — three CAP PT rounds per year, biennial CAP inspections with annual internal audits, CLIA biennial renewal, annual competency assessments for 40 staff, and MT/MLT CE tracking across 15 different ASCP certification cycles. Momenties was the first tool that gave us a single view of all of it. Our last CAP inspection was the cleanest in the lab&apos;s history.',
  author: 'Laboratory Director, MD, FCAP',
  role: 'Hospital Clinical Laboratory, 300-Bed Community Hospital',
}

export default function ClinicalLaboratoryCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Clinical Laboratories"
        title="CAP PT. CLIA. Competency Assessments. One Calendar."
        subtitle="Clinical laboratories operate under the most assessment-intensive compliance framework in diagnostics — three annual CAP proficiency testing cycles, biennial CLIA certification renewal, six-element annual competency assessments for every testing personnel, and CAP biennial accreditation inspections. Momenties maps every deadline so your lab stays accredited and survey-ready year-round."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Clinical Laboratory Compliance Coverage
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
              12-Month Clinical Laboratory Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January CAP PT Cycle 1 through December CLIA renewal prep &mdash; every accreditation and regulatory deadline mapped.
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
            The KPIs CAP Inspectors Measure You By
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
        headline="Ready for a Deficiency-Free CAP Inspection?"
        subtext="Join clinical laboratories using Momenties to automate every CAP PT cycle, CLIA renewal, and competency assessment deadline. Free to start."
      />
    </main>
  )
}
