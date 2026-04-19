import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Hospice Agency Compliance Calendar | Momenties',
  description: 'Track CMS Hospice CoPs, CAHPS Hospice survey submission, IDG meeting documentation, NHPCO accreditation, and clinician credential renewals. Built for Medicare-certified hospice agencies.',
}

const pillars = [
  {
    icon: Target,
    title: 'CMS CoPs & Medicare Certification',
    description: 'CMS Hospice Conditions of Participation (42 CFR Part 418) unannounced survey prep, annual QAPI plan review and evaluation (§418.58), IDG meeting documentation compliance (every 15 days for routine home care), annual Medicare cost report (CMS-1984) filing, and monthly PEPPER (Program for Evaluating Payment Patterns Electronic Report) review.',
  },
  {
    icon: RefreshCw,
    title: 'CAHPS Hospice Survey & Quality Reporting',
    description: 'CAHPS Hospice Survey annual data submission to CMS via the CAHPS Hospice Survey vendor, annual Hospice Quality Reporting Program (HQRP) data submission, quarterly Hospice Item Set (HIS) completeness audit (≥90% on-time submission), monthly PEPPER outlier rate reviews, and annual Hospice Compare star rating preview.',
  },
  {
    icon: TrendingUp,
    title: 'NHPCO Accreditation & Staff Credentials',
    description: 'NHPCO/CHAP 3-year accreditation annual conformance reviews, annual volunteer training documentation (5% of total patient care hours per CMS CoP §418.78), annual chaplain endorsement and clergy CE tracking, ACHPN biennial 50-CE renewal, HPNA Annual Assembly CE, and annual palliative care physician CME documentation.',
  },
  {
    icon: BarChart3,
    title: 'Clinician Credentials & Regulatory Compliance',
    description: 'RN/MSW/chaplain/aide biennial state license and credential renewals, monthly OIG/LEIE exclusion checks, annual HIPAA training, annual TB screening for all patient-facing staff, DEA registration for prescribing clinicians (3-year renewal), annual emergency preparedness plan review with tabletop exercise, and annual aide competency evaluations.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'Cost Report Filing & Annual Audits',
    tasks: [
      'CMS-1984 Medicare Hospice Cost Report — submit within 5 months of fiscal year end (May 31 for calendar-year agencies)',
      'Annual OIG/LEIE and SAM.gov exclusion checks for all employees, contractors, and volunteers',
      'Annual TB screening for all patient-facing staff — document results in personnel files',
      'Annual HIPAA training for all workforce members',
      'Annual HIPAA Security Risk Assessment (SRA) completion',
      'Q4 HIS (Hospice Item Set) completeness audit — confirm ≥90% on-time submission for prior quarter',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'PEPPER Review & IDG Documentation Audit',
    tasks: [
      'Q1 PEPPER review — analyze all outlier flags: live discharge rate, per diem outlier, continuous home care utilization',
      'Q1 IDG meeting documentation audit — confirm all routine home care patients reviewed every 15 days (§418.56)',
      'Annual QAPI plan development and board approval for new program year',
      'Annual volunteer program audit — confirm ≥5% of total patient care hours provided by trained volunteers',
      'Annual volunteer training curriculum review and update',
      'Annual NHPCO/CHAP accreditation annual conformance review — internal audit against all applicable standards',
    ],
  },
  {
    period: 'May – Jun',
    title: 'Cost Report & Accreditation Mid-Year',
    tasks: [
      'CMS-1984 cost report deadline (May 31 for calendar-year agencies)',
      'Annual CAHPS Hospice Survey vendor contract review — confirm sampling, data collection, and submission schedule current',
      'Annual chaplain endorsement/certification renewal tracking for all agency chaplains',
      'ACHPN biennial CE audit for all certified hospice and palliative nurses — 50 CE hours per 2-year cycle',
      'Annual aide competency evaluation for all home health aides providing hospice care (§418.76)',
      'Q2 HIS completeness audit — confirm ≥90% on-time submission rate',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'HQRP Data Submission & Quality Review',
    tasks: [
      'Annual HQRP annual data submission audit — confirm all required quality measures submitted for prior year',
      'Annual Hospice Compare preview — review star ratings and benchmark against state and national averages',
      'HPNA Annual Assembly — document CE hours for all HPNAs toward ACHPN biennial renewal',
      'Annual emergency preparedness plan review (CMS CoP §418.113 — annual review and tabletop exercise required)',
      'Q3 PEPPER outlier analysis — identify trends requiring clinical documentation improvement before year-end',
      'Annual bereavement services documentation audit (13-month post-death bereavement program §418.64)',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'Clinician License Renewals & Flu Vaccine',
    tasks: [
      'Annual influenza vaccination campaign — document all direct care staff vaccination or signed declination',
      'Q3 clinician license renewal audit — identify all RN/MSW licenses expiring before year-end',
      'Annual palliative care physician CME documentation audit — confirm all hospice medical directors current',
      'Annual background check re-verification for all direct care staff (state-specific timing)',
      'Annual patient rights and advance directive policy review and patient notification update',
      'Q3 IDG meeting frequency audit — confirm all patients on appropriate level of care receiving required IDG reviews',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'CAHPS Survey Completion & Year-End Close',
    tasks: [
      'CAHPS Hospice Survey Q4 data submission deadline (confirm with vendor — typically February for Q4 data)',
      'Annual QAPI year-end evaluation — document performance improvement project (PIP) outcomes',
      'Annual 13-month bereavement program completeness audit — confirm all deaths from prior year have 13-month follow-through documentation',
      'Annual governing body meeting — review QAPI annual report, financial performance, PEPPER outliers',
      'Annual CoP self-assessment across all Conditions of Participation for survey readiness',
      'Annual aide in-service hours documentation review — 12 hours annual in-service required per §418.76',
    ],
  },
]

const kpis = [
  { metric: '≥90%', label: 'HIS On-Time Submission Rate', description: 'HQRP requirement — below 90% triggers CMS payment reduction (2% APU reduction)' },
  { metric: '≥5%', label: 'Volunteer Hours as % of Patient Care', description: 'CMS CoP §418.78 requirement — violation cited on virtually every deficiency survey' },
  { metric: '≤10%', label: 'Live Discharge Rate', description: 'PEPPER outlier flag above 10% triggers CMS probe and educate review' },
  { metric: '100%', label: 'IDG Meeting Every 15 Days', description: 'CMS CoP §418.56 — any missed IDG review = condition-level deficiency' },
  { metric: '100%', label: 'OIG/LEIE Monthly Check Completion', description: 'Medicare exclusion — single violation = program exclusion for agency' },
  { metric: '13 months', label: 'Bereavement Follow-Through', description: 'CMS CoP §418.64 requires documented outreach for 13 months post-death' },
]

const testimonial = {
  quote: 'Hospice compliance is uniquely demanding — IDG meetings every 15 days, 5% volunteer hour requirements, 13-month bereavement tracking, HQRP submissions, CAHPS surveys, and multi-discipline credential renewals all running simultaneously. Momenties gave us visibility across all of it. We&apos;ve passed three consecutive CMS surveys with zero condition-level deficiencies.',
  author: 'Executive Director, RN',
  role: 'Medicare-Certified Hospice Agency, 180 Patients Census',
}

export default function HospiceAgencyCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Hospice Agencies"
        title="IDG Meetings. HIS Submissions. CoPs. One Calendar."
        subtitle="Medicare-certified hospice agencies operate under one of the most relationship-intensive compliance frameworks in healthcare — IDG meetings every 15 days, 5% volunteer hour requirements, 13-month bereavement documentation, CAHPS surveys, HQRP quality reporting, and multi-discipline credential renewals. Momenties maps every deadline so your team stays survey-ready year-round."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Hospice Agency Compliance Coverage
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
              12-Month Hospice Agency Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January cost report prep through December QAPI year-end close &mdash; every CMS deadline on one timeline.
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
            The KPIs CMS Surveyors Check First
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
        headline="Ready for Zero Condition-Level Deficiencies?"
        subtext="Join hospice agencies using Momenties to automate every IDG, HIS submission, and CMS CoP deadline. Free to start."
      />
    </main>
  )
}
