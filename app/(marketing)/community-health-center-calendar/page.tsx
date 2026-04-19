import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Community Health Center Compliance Calendar | Momenties',
  description: 'Never miss a HRSA UDS deadline, 340B audit, or Section 330 compliance milestone. Momenties keeps your FQHC on track with intelligent deadline tracking.',
}

const pillars = [
  {
    icon: Target,
    title: 'HRSA Grant & UDS Compliance',
    description: 'Automate your annual Uniform Data System report, Section 330 grant renewals, sliding-fee scale reviews, and FTCA deeming documentation so nothing falls through the cracks.',
  },
  {
    icon: RefreshCw,
    title: '340B Program Integrity',
    description: 'Track monthly 340B covered outpatient drug audits, annual HRSA apexus eligibility recertification, annual covered entity registration renewal, and quarterly split-billing reconciliations.',
  },
  {
    icon: TrendingUp,
    title: 'Quality & Accreditation',
    description: 'Stay current on PCMH annual reporting, HEDIS and UDS clinical quality measure submissions, NCQA triennial survey prep milestones, and annual AAAHC/TJC accreditation conformance reviews.',
  },
  {
    icon: BarChart3,
    title: 'Workforce & Regulatory Deadlines',
    description: 'Manage annual HIPAA training, OIG/LEIE monthly exclusion checks, annual OSHA bloodborne pathogen review, annual governance board meeting requirements, and staff credentialing re-verification cycles.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'UDS Report & Board Governance',
    tasks: [
      'Submit annual UDS report to HRSA by February 28 (Health Center Program requirement)',
      'Convene board of directors annual organizational meeting (majority consumer board members)',
      'Annual sliding-fee scale policy review and board approval',
      'Annual conflict-of-interest disclosure collection from all board members',
      'Renew FTCA (Federal Tort Claims Act) deeming application — submit by February 1',
      'Annual HRSA Health Center Program Compliance Manual policy self-assessment',
    ],
  },
  {
    period: 'Mar – Apr',
    title: '340B Recertification & Quality Review',
    tasks: [
      'Annual 340B covered entity registration recertification via HRSA OPAIS portal (March 31 deadline)',
      'Annual 340B apexus self-audit — review all contract pharmacy arrangements and diversion controls',
      'Q1 HEDIS clinical quality measure gap-in-care report review (Colorectal Cancer Screening, Cervical Cancer Screening, Child/Adult Immunization)',
      'Annual PCMH recognition annual reporting submission (NCQA portal)',
      'Annual HIPAA Notice of Privacy Practices review and update',
      'Annual OIG Compliance Program annual review meeting',
    ],
  },
  {
    period: 'May – Jun',
    title: 'Grant Reporting & Workforce Compliance',
    tasks: [
      'Section 330 grant progress report submission (mid-year report per NOA terms)',
      'Annual OSHA bloodborne pathogen exposure control plan review and employee training',
      'Annual OSHA hazard communication (HazCom/GHS) training completion',
      'Annual fire safety inspection and emergency action plan review',
      'Annual CLIA Certificate of Waiver or Certificate of Compliance renewal (2-year — track individually per lab)',
      'Annual credentialing primary source verification for all clinical staff — due per medical staff bylaws',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'UDS Mid-Cycle & Compliance Training',
    tasks: [
      'Annual HIPAA Security Risk Assessment (SRA) completion',
      'Annual HIPAA training for all workforce members',
      'Annual OIG/LEIE and SAM.gov exclusion database checks for all employees, contractors, and vendors',
      'Section 330 grant annual performance report — submit within 90 days of budget period end',
      'Annual 340B third-party administrator audit (if applicable)',
      'Q3 clinical quality measure internal benchmark review (UDS colorectal, cervical, diabetes A1c, hypertension control)',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'Accreditation & Governance Prep',
    tasks: [
      'Annual NCQA PCMH annual reporting due (September 30 for most recognized sites)',
      'AAAHC or TJC accreditation annual conformance review (3-year cycle — annual internal audit)',
      'Annual governance board training for new and existing members (conflict of interest, fiduciary duty)',
      'Annual 340B contract pharmacy compliance review — all active contract pharmacy agreements',
      'Annual risk management training for clinical leadership',
      'Annual malpractice insurance policy review and FTCA eligibility verification',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End Reporting & Budget Review',
    tasks: [
      'Section 330 grant annual federal financial report (FFR SF-425) — due 90 days after budget period end',
      'Annual sliding-fee scale discount schedule update for next program year',
      'Annual 340B ceiling price compliance audit — verify all 340B purchases at or below HRSA ceiling',
      'Annual HRSA Site Visit Protocol self-assessment across all 19 compliance areas',
      'Annual performance improvement plan (PIP) review and new PIP goals for next year',
      'Annual staff satisfaction survey and patient satisfaction (CAHPS FQHC Survey) data review',
    ],
  },
]

const kpis = [
  { metric: '100%', label: 'UDS Submission On-Time Rate', description: 'February 28 hard deadline — zero tolerance' },
  { metric: '≥80%', label: 'Sliding-Fee Scale Utilization', description: 'HRSA expects majority of patients at or below 200% FPL' },
  { metric: '100%', label: 'OIG/LEIE Monthly Check Completion', description: 'All employees, contractors, and vendors — no exceptions' },
  { metric: '≥90%', label: 'UDS Colorectal Cancer Screening Rate', description: 'Top-quartile FQHC benchmark' },
  { metric: '0', label: '340B Diversion Events Per Year', description: 'Single event triggers HRSA termination from program' },
  { metric: '100%', label: 'FTCA Deeming Documentation Current', description: 'Gap in coverage creates unlimited malpractice exposure' },
]

const testimonial = {
  quote: 'Before Momenties, our compliance coordinator had a wall of sticky notes for UDS deadlines, 340B audits, and HRSA reporting. Now everything is in one calendar with automated reminders. Our last HRSA site visit had zero findings.',
  author: 'Chief Operations Officer',
  role: 'Federally Qualified Health Center, Southeast U.S.',
}

export default function CommunityHealthCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for FQHCs"
        title="Every HRSA Deadline. Every 340B Audit. One Calendar."
        subtitle="Community health centers operate under the most complex compliance web in primary care — HRSA grants, 340B program integrity, UDS reporting, FTCA deeming, and PCMH quality measures. Momenties turns that complexity into a clear, automated timeline so your team never scrambles before a site visit."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full FQHC Compliance Lifecycle
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
              12-Month FQHC Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From February UDS submission through December FFR filing &mdash; every major deadline mapped to the month it&apos;s due.
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
            The KPIs HRSA Site Visitors Check First
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
        headline="Ready to Ace Your Next HRSA Site Visit?"
        subtext="Join community health centers using Momenties to automate every UDS, 340B, and Section 330 deadline. Free to start."
      />
    </main>
  )
}
