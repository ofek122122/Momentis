import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Cardiac Rehabilitation Center Compliance Calendar | Momenties',
  description: 'Track AACVPR accreditation annual self-assessment, CCRP biennial renewal, ABCR certification, CMS CR/PR 36-session benefit management, AACVPR National Outcomes Registry data submission, functional capacity testing documentation, and MIPS quality measure deadlines for cardiac rehab centers.',
}

const pillars = [
  {
    icon: Target,
    title: 'AACVPR Accreditation & CR Program Standards',
    description: 'AACVPR (American Association of Cardiovascular and Pulmonary Rehabilitation) program accreditation — 3-year cycle with annual self-assessment, annual AACVPR National Outcomes Registry (NOR) data submission, annual CMS cardiac rehabilitation benefit administration audit (Phase II: 36 sessions per cardiac event, 72 sessions with physician documentation), annual AACVPR Annual Meeting CE, annual ACC/AHA cardiac rehabilitation quality performance measures review, and annual state cardiac rehabilitation program licensing compliance (varies by state).',
  },
  {
    icon: RefreshCw,
    title: 'CCRP, ABCR & Staff Credentials',
    description: 'CCRP (Certified Cardiac Rehabilitation Professional — AACVPR) biennial 40-CE renewal, ABCR (American Board of Cardiovascular Rehabilitation) certification annual maintenance, ACLS biennial recertification for all cardiac rehabilitation staff, annual exercise physiology CE update for all clinical exercise physiologists, annual cardiac rehabilitation nurse annual competency documentation — ECG interpretation, emergency response, and exercise prescription annual skills review, and annual defibrillator competency for all cardiac rehab staff.',
  },
  {
    icon: TrendingUp,
    title: 'AACVPR NOR & Outcomes Tracking',
    description: 'AACVPR National Outcomes Registry quarterly data submission — exercise capacity (MET level at entry and exit), lipid levels, weight, blood pressure, smoking status, and depression screening at entry and exit, monthly cardiac rehabilitation completion rate documentation (AACVPR benchmark ≥70% of enrolled patients complete ≥36 sessions), monthly referral-to-enrollment rate audit (AHA ≥70% of eligible post-MI, post-CABG, post-PCI, and HF patients referred within 14 days), annual 6-minute walk test and peak VO2 improvement documentation, and annual emergency event rate review (cardiac arrest during CR — target ≤1 per 50,000 patient-hours).',
  },
  {
    icon: BarChart3,
    title: 'MIPS Quality Measures & Depression Screening',
    description: 'Annual MIPS (Merit-Based Incentive Payment System) quality measure documentation — MIPS Measure #226 (Preventive Care: Tobacco Use) and #441 (Functional Capacity Assessment at Entry and Exit for Cardiac Rehabilitation) submission, annual PHQ-9 depression screening completion rate documentation (≥85% at entry and exit — AACVPR quality standard), annual patient satisfaction survey completion and CAHPS data submission for CMS, annual cardiac rehabilitation physician supervisor annual meeting documentation (CMS requires physician supervision and annual program oversight meeting), annual pulmonary rehabilitation program standards compliance review (if co-located PR program — AACVPR dual accreditation).',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'CCRP Renewal Audit & Annual Policy Update',
    tasks: [
      'Annual CCRP certification status audit for all cardiac rehabilitation professionals — identify all staff due for biennial 40-CE CCRP renewal within next 12 months',
      'Annual AACVPR program accreditation self-assessment — review all accreditation standards for current cycle and document compliance',
      'Annual CMS cardiac rehabilitation benefit audit — confirm all Phase II (36-session) benefit authorizations are properly documented and physician supervision requirement is met',
      'Annual OIG/LEIE exclusion checks for all cardiac rehabilitation staff',
      'Annual HIPAA training for all cardiac rehabilitation program personnel',
      'Annual cardiac rehabilitation physician supervisor annual oversight meeting documentation — CMS requires documented annual meeting between CR medical director and program staff',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'AACVPR NOR Q1 Data & Referral Audit',
    tasks: [
      'AACVPR National Outcomes Registry Q1 data submission — all cardiac rehabilitation patients with entry and exit functional capacity, risk factor, and psychosocial data',
      'Annual referral-to-enrollment rate audit Q1 — confirm ≥70% of eligible post-MI, post-CABG, post-PCI, and HF patients referred within 14 days of qualifying event (AHA automated referral protocol standard)',
      'Annual 6-minute walk test protocol competency documentation for all cardiac rehabilitation exercise physiologists and nurses',
      'Annual emergency response drill — cardiac arrest simulation with AED/defibrillator response, ACLS algorithm, and 911 activation time documentation',
      'Annual MIPS Measure #441 functional capacity assessment documentation audit — confirm entry VO2/MET and exit VO2/MET documented for all MIPS-eligible patients',
      'Q1 completion rate review — confirm ≥70% of enrolled patients tracking toward ≥36-session completion',
    ],
  },
  {
    period: 'May – Jun',
    title: 'AACVPR Annual Meeting CE & PHQ-9 Audit',
    tasks: [
      'Annual AACVPR Annual Meeting CE documentation — confirm all CCRP-certified staff and clinical exercise physiologists have AACVPR meeting CE hours documented',
      'Annual PHQ-9 depression screening completion rate audit — confirm ≥85% of cardiac rehabilitation enrollees have PHQ-9 at entry and exit (AACVPR quality standard)',
      'Annual tobacco use counseling documentation audit — MIPS Measure #226 tobacco screening and cessation intervention completion rate for all cardiac rehabilitation patients',
      'AACVPR NOR Q2 data submission — all cardiac rehabilitation patients with updated exercise capacity and risk factor data',
      'Annual pulmonary rehabilitation program compliance review (if co-located PR program) — AACVPR pulmonary rehabilitation accreditation standards annual self-assessment',
      'Annual exercise prescription documentation audit — confirm individualized exercise prescriptions (intensity, frequency, duration, mode) are documented for all enrolled patients',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'Emergency Event Review & ACLS Audit',
    tasks: [
      'Annual emergency event rate review — compile all cardiac rehabilitation cardiac arrest and major adverse events for the prior 12 months vs. AACVPR benchmark (≤1 per 50,000 patient-hours)',
      'Annual ACLS recertification status audit for all cardiac rehabilitation staff — identify all staff due for biennial ACLS renewal within next 12 months',
      'AACVPR NOR Q3 data submission — all cardiac rehabilitation patients with updated outcomes data',
      'Annual defibrillator inspection and competency documentation — all cardiac rehabilitation staff complete annual AED/manual defibrillator competency assessment',
      'Annual patient satisfaction survey mid-year audit — confirm cardiac rehabilitation CAHPS or patient satisfaction survey completion rate ≥85% for CMS reporting',
      'Annual cardiac rehabilitation program outcomes mid-year dashboard review — lipid improvement, blood pressure reduction, weight change, and depression score improvement vs. AACVPR NOR national benchmarks',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'AACVPR Accreditation Prep & MIPS Review',
    tasks: [
      'Annual AACVPR program accreditation documentation compilation — if 3-year recertification due, begin compiling all required program documents, outcomes data, and staff credentials',
      'Annual MIPS data validation for cardiac rehabilitation physician — confirm MIPS Measures #226 and #441 documentation complete for all eligible patients for year-end CMS submission',
      'Annual 72-session extended CR benefit documentation review (if applicable) — confirm physician documentation supports extended benefit authorization for eligible patients',
      'Annual cardiac rehabilitation space and equipment annual inspection — exercise equipment safety inspection, ECG monitoring system calibration, and emergency cart restocking',
      'AACVPR NOR Q4 data preparation — begin review of Q3 data for completeness before year-end submission',
      'Annual cardiac rehabilitation medical director annual review — outcome data presentation to sponsoring institution quality committee',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End NOR Submission & Annual Report',
    tasks: [
      'AACVPR National Outcomes Registry Q4 data submission — all cardiac rehabilitation patients with complete entry and exit outcomes data (annual NOR dataset complete)',
      'Annual cardiac rehabilitation program quality improvement annual report — compile completion rates, referral rates, functional capacity improvement, depression screening rates, and emergency events for AACVPR accreditation file',
      'Annual CCRP renewal planning for next year — schedule all CE course completion for staff due for biennial renewal in upcoming 12 months',
      'Annual CMS MIPS year-end data submission preparation — confirm all MIPS quality measures documented for all eligible cardiac rehabilitation patients before January 1 deadline',
      'Annual cardiac rehabilitation staff satisfaction and program volume review',
      'Annual cardiac rehabilitation automated referral pathway annual review — confirm EHR-based cardiac rehabilitation order set is updated for all qualifying diagnoses per current ACC/AHA guidelines',
    ],
  },
]

const kpis = [
  { metric: '≥70%', label: 'CR Program Completion Rate', description: 'AACVPR accreditation benchmark — below 70% completion rate triggers mandatory program improvement plan and AACVPR accreditation review' },
  { metric: '≥70%', label: 'Referral-to-Enrollment Rate', description: 'AHA automated CR referral protocol target — below 70% of eligible patients referred within 14 days triggers quality improvement consultation' },
  { metric: '≥85%', label: 'PHQ-9 Screening Completion', description: 'AACVPR quality standard for depression screening — below 85% completion triggers psychosocial assessment protocol review' },
  { metric: '100%', label: 'CCRP Biennial Recertification', description: 'AACVPR accreditation requirement for program director — expired CCRP is an accreditation deficiency finding at site review' },
  { metric: '≤1/50,000', label: 'Cardiac Arrest Rate per Patient-Hours', description: 'AACVPR safety benchmark — above benchmark triggers mandatory safety protocol review and emergency response drill requirement' },
  { metric: '100%', label: 'CMS 36-Session Benefit Documentation', description: 'CMS reimbursement requirement — inadequate physician supervision documentation triggers post-payment audit and recoupment risk' },
]

const testimonial = {
  quote: 'Cardiac rehabilitation compliance runs on CCRP biennial renewal cycles, quarterly AACVPR NOR data submissions, annual CMS benefit audits, monthly completion rate tracking, PHQ-9 depression screening documentation, MIPS quality measure submission, annual emergency response drills, ACLS recertification, and AACVPR accreditation triennial self-assessment — all simultaneously. Momenties mapped every deadline. Our program achieved AACVPR accreditation with zero deficiencies, ≥85% completion rate, and top-quartile NOR functional improvement benchmarks.',
  author: 'Cardiac Rehabilitation Program Director, CCRP',
  role: 'AACVPR Accredited Cardiac Rehabilitation Program, Regional Heart Center',
}

export default function CardiacRehabilitationCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Cardiac Rehabilitation Centers"
        title="AACVPR Accreditation. NOR Data. MIPS. Completion Rates. One Calendar."
        subtitle="Cardiac rehabilitation compliance is built on continuous measurement — quarterly AACVPR NOR data submissions, monthly completion rate tracking, annual CMS benefit documentation audits, CCRP biennial renewal, PHQ-9 depression screening documentation, MIPS quality measure submission, annual emergency response drills, and AACVPR accreditation standards. Momenties maps every AHA, AACVPR, and CMS deadline so your cardiac rehab program achieves top-quartile outcomes and maintains accreditation year after year."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Cardiac Rehabilitation Compliance Coverage
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
              12-Month Cardiac Rehabilitation Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January CCRP audit through December NOR year-end submission &mdash; every AACVPR, CMS, and MIPS milestone mapped.
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
            The KPIs AACVPR and CMS Measure Your Cardiac Rehab Program By
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
        headline="Ready for AACVPR Accreditation with Zero Deficiencies?"
        subtext="Join cardiac rehabilitation centers using Momenties to automate every AACVPR, MIPS, and CMS deadline. Free to start."
      />
    </main>
  )
}
