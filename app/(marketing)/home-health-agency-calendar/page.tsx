import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Home Health Agency Compliance Calendar | Momenties',
  description: 'Track CMS Medicare CoPs, OASIS data submission, HHCAHPS survey, annual CHAP/ACHC accreditation, and clinician credential renewals. Built for Medicare-certified home health agencies.',
}

const pillars = [
  {
    icon: Target,
    title: 'CMS CoPs & Medicare Certification',
    description: 'CMS Conditions of Participation (42 CFR Part 484) unannounced survey prep, annual QAPI plan review and evaluation, annual governing body meeting documentation, monthly OASIS-E data submission to CMS via iQIES, and annual Medicare cost report preparation (CMS-1728-20).',
  },
  {
    icon: RefreshCw,
    title: 'OASIS Accuracy & Star Ratings',
    description: 'Quarterly OASIS accuracy audits (target ≥95% accuracy rate), monthly Home Health Care Compare star rating preview via Home Health Compare reports, quarterly iQIES data quality review, annual OASIS data integrity training for all clinical staff, and quarterly outcome benchmark reviews vs. state and national averages.',
  },
  {
    icon: TrendingUp,
    title: 'HHVBP & Quality Measure Reporting',
    description: 'Annual Home Health Value-Based Purchasing (HHVBP) performance period review, HHCAHPS survey annual data submission, quarterly composite quality score tracking, quarterly OASIS-based process measure compliance (influenza vaccine offer ≥90%, fall risk assessment ≥95%), and annual PDGM case-mix validation audit.',
  },
  {
    icon: BarChart3,
    title: 'Clinician Credentials & Staff Compliance',
    description: 'Track RN/PT/OT/ST biennial state license renewals, OASIS-E clinical certification (HCS-O) biennial 12-CE renewal, annual TB screening for all direct care staff, monthly OIG/LEIE exclusion checks, annual HIPAA training, annual emergency preparedness plan review with state-required exercise, and annual background check re-verification.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'Medicare Cost Report & Annual TB Screening',
    tasks: [
      'CMS-1728-20 Medicare Home Health Agency Cost Report — submit within 5 months of fiscal year end (April 30 for calendar-year agencies)',
      'Annual TB screening for all direct care staff — document results in personnel files',
      'Annual OIG/LEIE and SAM.gov exclusion checks for all employees, contractors, and vendors',
      'Annual HIPAA training for all workforce members',
      'Annual HIPAA Security Risk Assessment (SRA) completion',
      'Q4 OASIS accuracy audit results review — set improvement targets for new year',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'Cost Report Filing & OASIS Data Quality',
    tasks: [
      'CMS-1728-20 cost report submission deadline (April 30 for calendar-year agencies)',
      'Annual PDGM case-mix grouper validation audit — verify OASIS item responses match clinical documentation',
      'Q1 iQIES data quality review — confirm all episodes submitted, all OASIS items complete',
      'Q1 OASIS accuracy audit — target ≥95% accuracy on M-items across all clinician types',
      'Annual Home Health Compare star rating review — analyze prior-year data and set improvement targets',
      'Annual emergency preparedness plan annual review (CMS CoP §484.102 — annual review and update required)',
    ],
  },
  {
    period: 'May – Jun',
    title: 'Accreditation Annual Conformance',
    tasks: [
      'CHAP or ACHC accreditation annual conformance review (3-year cycle — annual internal audit)',
      'Annual governing body meeting #1 (CMS CoP §484.105 requires organized governing body)',
      'Annual QAPI plan mid-year evaluation — document performance improvement projects (PIPs) in progress',
      'Annual infection control plan review and update',
      'Annual clinical record review audit — random sample of 10% of active cases for documentation compliance',
      'Annual competency evaluation for all clinical staff — document using agency competency checklist',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'HHVBP Performance Review & HHCAHPS',
    tasks: [
      'Annual HHVBP performance period mid-year review — benchmark composite quality score vs. prior year',
      'HHCAHPS survey data collection audit — confirm survey vendor submitting for all eligible patients',
      'Q2 OASIS-based process measure compliance review (influenza vaccine offer ≥90%, depression screening ≥90%)',
      'Annual background check re-verification for all direct care staff (state-specific timing)',
      'Annual physician order timeliness audit (CMS CoP — verbal orders signed within state-required timeframe)',
      'Annual aide supervision visit compliance audit (CMS CoP §484.80 — supervisory visit every 14 days)',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'Clinician License Renewals & Flu Vaccine',
    tasks: [
      'Annual influenza vaccination campaign launch — document staff vaccination or declination for all direct care staff',
      'Q3 clinician license renewal audit — identify all RN/PT/OT/ST/SLP licenses expiring before year-end',
      'Annual HCS-O OASIS clinical certification CE tracking — 12 CE hours per biennial cycle',
      'Annual emergency preparedness exercise (CMS CoP §484.102 — annual full-scale or tabletop exercise)',
      'Q3 HHVBP composite score preview — project year-end score and identify final-quarter improvement opportunities',
      'Annual patient rights policy review and patient notification update',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End Quality Review & HHVBP Final Data',
    tasks: [
      'HHVBP final performance period data lock — confirm all OASIS submissions complete for performance year',
      'Annual QAPI year-end evaluation — document outcomes of all PIPs, set new annual targets',
      'Annual Home Health Care Compare data preview — review published quality measures vs. state/national benchmarks',
      'Annual review of all active aide care plans and update supervision documentation',
      'Annual governing body meeting #2 — review annual quality report, QAPI outcomes, financial performance',
      'Annual CoP self-assessment across all CMS Conditions of Participation for survey readiness',
    ],
  },
]

const kpis = [
  { metric: '≥95%', label: 'OASIS Accuracy Rate', description: 'Below 95% triggers CMS data quality review and potential survey' },
  { metric: '≥90%', label: 'Influenza Vaccine Offer Rate', description: 'OASIS-based process measure — affects HHVBP composite score directly' },
  { metric: '4+ Stars', label: 'Home Health Compare Rating', description: 'Minimum threshold for most managed care preferred provider networks' },
  { metric: '100%', label: 'OIG/LEIE Monthly Check Completion', description: 'Medicare exclusion — single violation = program exclusion for agency' },
  { metric: '≤30 days', label: 'Cost Report Filing Before Deadline', description: 'Late filing triggers CMS late-filing penalty and potential payment suspension' },
  { metric: '100%', label: 'Aide Supervisory Visit Compliance', description: 'CMS CoP requires every 14 days — audit failures cited on nearly every survey' },
]

const testimonial = {
  quote: 'Home health compliance touches OASIS submissions, cost reports, HHVBP performance periods, HHCAHPS surveys, aide supervisory visits, and staff credential renewals — all with different deadlines and regulatory owners. Momenties was the first tool that actually consolidated all of it. We went from reactive compliance scrambling to proactive deadline management. Our last CMS survey was clean.',
  author: 'Director of Clinical Operations',
  role: 'Medicare-Certified Home Health Agency, 280 Active Patients',
}

export default function HomeHealthAgencyCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Home Health Agencies"
        title="OASIS. HHVBP. CoPs. Cost Reports. One Calendar."
        subtitle="Medicare-certified home health agencies operate under one of the most deadline-dense regulatory environments in post-acute care — monthly OASIS submissions, HHVBP performance periods, HHCAHPS surveys, CMS Conditions of Participation surveys, annual cost reports, and multi-discipline clinician credential renewals. Momenties maps every deadline to the month it&apos;s due."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Home Health Agency Compliance Coverage
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
              12-Month Home Health Agency Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January TB screening through December HHVBP data lock &mdash; every major CMS deadline on one timeline.
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
            The KPIs CMS and Surveyors Measure You By
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
        headline="Ready for a Clean CMS Survey Every Time?"
        subtext="Join home health agencies using Momenties to automate every OASIS deadline, CoP requirement, and HHVBP reporting window. Free to start."
      />
    </main>
  )
}
