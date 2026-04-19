import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Pharmacy Benefits Management Compliance Calendar | Momenties',
  description: 'Track URAC PBM accreditation, CMS Part D formulary submission deadlines, NCPDP standard updates, DUR quarterly committee meetings, specialty pharmacy network adequacy, and STAR ratings drug adherence measures.',
}

const pillars = [
  {
    icon: Target,
    title: 'URAC Accreditation & CMS Part D Compliance',
    description: 'URAC PBM accreditation 2-year renewal with annual conformance documentation, CMS Part D formulary annual submission (April 1 deadline for benefit year beginning January 1), annual Part D plan benefit package (PBP) submission, annual CMS formulary reference file (FRF) updates, annual Medicare Advantage formulary exception and prior authorization policy update, and CMS STAR ratings annual drug adherence measures tracking (PDC ≥80% for statins, RAS antagonists, and non-insulin diabetes medications).',
  },
  {
    icon: RefreshCw,
    title: 'NCPDP Standards & Network Compliance',
    description: 'Annual NCPDP SCRIPT standard version update implementation review (ePrescribing interoperability), annual NCPDP D.0 pharmacy claims transaction standard review, state PBM regulation compliance calendar (anti-steering legislation, any-willing-provider laws, network adequacy filings — 50-state annual review), annual specialty pharmacy network adequacy assessment, annual mail-order pharmacy accreditation (URAC or ACHC) renewal documentation, and annual OIG/LEIE exclusion checks for all pharmacy network providers.',
  },
  {
    icon: TrendingUp,
    title: 'Formulary Management & DUR',
    description: 'Quarterly Drug Utilization Review (DUR) committee meetings — all four quarters (clinical edits, safety alerts, formulary exceptions), annual formulary transparency reporting to CMS and state regulators, annual rebate contract audit and validation with pharmaceutical manufacturers, annual formulary tier placement review (Tier 1–6 clinical and economic justification documentation), annual specialty drug step therapy criteria review, and annual prospective DUR clinical program effectiveness report.',
  },
  {
    icon: BarChart3,
    title: 'Part D Quality & Accreditation Reporting',
    description: 'Annual CMS Part D Coverage Gap Discount Program reconciliation, annual Part D low-income subsidy (LIS) auto-enrollment period management (October–November), annual CMS HEDIS Medication Adherence for Cholesterol/Hypertension/Diabetes reporting (due June 1), annual State Pharmaceutical Assistance Program (SPAP) coordination of benefits annual update, quarterly specialty pharmacy outcomes reporting (adherence, refill rates, clinical outcomes), and annual Medication Therapy Management (MTM) program annual report — comprehensive medication review (CMR) completion rate ≥85% for eligible Part D enrollees.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'CMS STAR Ratings Baseline & MTM Program Launch',
    tasks: [
      'Annual CMS STAR ratings drug adherence measure baseline audit — PDC tracking for statins (C14), RAS antagonists (C15), non-insulin diabetes medications (C16) for all eligible Part D enrollees',
      'Annual Medication Therapy Management (MTM) program eligible enrollee identification — auto-enrollment for all qualifying chronic disease, multiple drug, and high drug cost beneficiaries',
      'Annual formulary reference file (FRF) CMS submission validation — confirm all formulary updates effective January 1 are accurately reflected in CMS PDE data',
      'Annual OIG/LEIE exclusion checks for all in-network pharmacy providers and PBM staff with access to Part D data',
      'Annual HIPAA training for all PBM staff with access to protected health information',
      'Annual CMS Coverage Gap Discount Program rebate reconciliation — reconcile prior year manufacturer rebate payments',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'Part D Formulary Submission & DUR Q1',
    tasks: [
      'CMS Part D formulary annual submission deadline April 1 — plan benefit package (PBP) and formulary reference file (FRF) submission for benefit year beginning January 1 of following year',
      'Q1 Drug Utilization Review (DUR) committee meeting — review safety alerts, clinical edit updates, high-risk medication alerts (Beers Criteria for Part D enrollees ≥65)',
      'Annual specialty pharmacy network adequacy assessment — confirm network meets CMS geographic access standards for specialty drugs',
      'Annual NCPDP standard version review — confirm ePrescribing SCRIPT and D.0 claims transaction standard compliance',
      'Annual CMS Medicare Advantage formulary exception and prior authorization policy update — document all criteria changes effective July 1',
      'Annual rebate contract audit — validate pharmaceutical manufacturer rebate contract terms against PDE adjudication data for Q4 prior year',
    ],
  },
  {
    period: 'May – Jun',
    title: 'HEDIS Reporting & Formulary Tier Review',
    tasks: [
      'Annual CMS HEDIS Medication Adherence for Cholesterol (SPC), Hypertension (SAA), and Diabetes (SDA) reporting submission deadline June 1',
      'Annual formulary transparency reporting to CMS — submit formulary file updates and utilization management criteria documentation',
      'Annual formulary tier placement annual review — document clinical and economic justification for all Tier 1–6 formulary assignments',
      'Annual specialty drug step therapy criteria review — confirm all step therapy requirements comply with state and federal step therapy override law requirements',
      'Annual comprehensive medication review (CMR) mid-year audit — confirm ≥85% CMR completion rate target on track for Part D MTM program annual report',
      'Q2 DUR committee meeting — review prospective DUR clinical program effectiveness data, drug interaction alert override rates, and formulary exception patterns',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'URAC Annual Conformance & State Compliance',
    tasks: [
      'URAC PBM accreditation annual conformance documentation — compile network adequacy reports, grievance and appeals data, and clinical program outcomes for accreditation file',
      'Annual 50-state PBM regulation compliance review — audit for new anti-steering legislation, any-willing-provider law updates, network adequacy filing requirements enacted in prior 12 months',
      'Annual specialty pharmacy outcomes reporting Q2 — adherence rates, 30-day refill rates, and clinical outcomes for specialty therapeutic categories',
      'Annual mail-order pharmacy accreditation documentation review — confirm URAC or ACHC mail-order accreditation renewal is current',
      'Annual CMS Part D Low-Income Subsidy (LIS) preparation — begin auto-enrollment outreach and benefit coordination for October–November LIS annual enrollment period',
      'Q3 DUR committee meeting — review prospective DUR alert sensitivity/specificity, hard stop vs. soft alert performance, and pharmacist intervention documentation rates',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'Annual Enrollment Period & STAR Ratings Audit',
    tasks: [
      'Annual Enrollment Period (AEP) formulary transition management October 1 — ensure all formulary changes effective January 1 are communicated to Part D enrollees per CMS 60-day notice requirement',
      'Annual CMS Part D LIS auto-enrollment period management October–November — coordinate benefits with State Pharmaceutical Assistance Programs (SPAPs)',
      'Annual CMS STAR ratings mid-year PDC audit — assess current PDC rates for all three adherence measures; intervene with targeted MTM outreach for enrollees below 80% threshold',
      'Annual specialty drug prior authorization criteria review — update criteria for new FDA approvals and NCCN guideline updates affecting specialty formulary',
      'Annual prospective DUR clinical program effectiveness annual report — compile full-year data on medication safety interventions, alert override rates, and clinical outcomes',
      'Annual State Pharmaceutical Assistance Program (SPAP) coordination of benefits annual update filing — confirm coordination agreements are current for all applicable states',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End MTM Report & Part D Reconciliation',
    tasks: [
      'Annual MTM program annual report submission — document comprehensive medication review (CMR) completion rate (≥85% CMS target), targeted medication review (TMR) completion, and clinical outcomes for all Part D eligible enrollees',
      'Annual CMS Part D Coverage Gap Discount Program year-end reconciliation — submit manufacturer discount program data and reconcile all disputed invoices',
      'Annual formulary exception and prior authorization annual performance report — document average decision timeframes (72-hour standard, 24-hour expedited) and denial appeal overturn rates',
      'Annual rebate contract renegotiation preparation — compile full-year utilization data by therapeutic category for manufacturer contract renewal meetings',
      'Annual URAC PBM accreditation preparation (if renewal year) — compile full accreditation documentation package including network adequacy, clinical programs, and quality outcomes',
      'Q4 DUR committee meeting — year-end clinical program review, next-year formulary edit strategy, and STAR ratings performance final audit before CMS submission',
    ],
  },
]

const kpis = [
  { metric: '≥85%', label: 'MTM CMR Completion Rate', description: 'CMS Part D MTM program requirement — below 85% triggers CMS compliance review and STAR ratings penalty' },
  { metric: '≥80%', label: 'PDC for STAR Adherence Drugs', description: 'Proportion of Days Covered for statins, RAS antagonists, and non-insulin diabetes meds — drives 3 of 5 CMS STAR ratings quality measures' },
  { metric: 'April 1', label: 'CMS Part D Formulary Submission', description: 'Hard CMS deadline — late or incomplete formulary reference file submission triggers plan benefit suspension risk' },
  { metric: '≤72 hrs', label: 'Prior Authorization Decision Time', description: 'CMS standard PA decision timeframe — expedited decisions ≤24 hours; exceeding triggers grievance and CMS audit risk' },
  { metric: '100%', label: 'NCPDP D.0 Claims Compliance', description: 'NCPDP standard compliance required for all pharmacy claims adjudication — non-compliance triggers CMS Part D audit' },
  { metric: '0', label: 'OIG/LEIE Network Exclusions', description: 'Any payment to excluded pharmacy or prescriber = False Claims Act liability — annual exclusion screening is a CMS condition of participation' },
]

const testimonial = {
  quote: 'PBM compliance runs on the April 1 formulary submission deadline, quarterly DUR committee meetings, June HEDIS reporting, October AEP formulary transition notices, annual MTM CMR completion targets, STAR ratings PDC tracking for three drug classes, and URAC accreditation annual conformance — all with different CMS deadlines and 50-state regulatory overlays. Momenties gave us one calendar for the entire compliance lifecycle. Our Part D plan achieved a 4.5-star STAR rating the year after implementation.',
  author: 'Director of Clinical Pharmacy Operations, PharmD',
  role: 'Pharmacy Benefits Management, Regional Health Plan',
}

export default function PharmacyBenefitsManagementCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Pharmacy Benefits Management"
        title="Part D Formulary. STAR Ratings. URAC. DUR. One Calendar."
        subtitle="Pharmacy benefits management compliance is a year-round, multi-deadline discipline — April 1 CMS Part D formulary submission, quarterly DUR committee meetings, June HEDIS reporting, October AEP transition notices, annual MTM CMR completion targets, STAR ratings PDC tracking for three drug classes, and URAC accreditation conformance. Momenties maps every CMS, state, and accreditation deadline so your PBM achieves and sustains top STAR ratings."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Pharmacy Benefits Management Compliance Coverage
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
              12-Month Pharmacy Benefits Management Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January STAR ratings baseline through December MTM annual report &mdash; every CMS, URAC, and state PBM milestone mapped.
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
            The KPIs CMS and URAC Measure Your PBM By
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
        headline="Ready to Achieve a 4.5-Star CMS STAR Rating?"
        subtext="Join pharmacy benefits managers using Momenties to automate every Part D formulary, STAR ratings, and URAC deadline. Free to start."
      />
    </main>
  )
}
