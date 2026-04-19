import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Behavioral Health Practice Compliance Calendar | Momenties',
  description: 'Track CARF/JCAHO accreditation, Medicaid managed care credentialing, 42 CFR Part 2 compliance, and clinician licensure CE deadlines. Built for behavioral health group practices.',
}

const pillars = [
  {
    icon: Target,
    title: 'Accreditation & Medicaid Compliance',
    description: 'CARF 3-year accreditation annual conformance reviews, JCAHO triennial behavioral health accreditation milestones, annual Medicaid managed care network participation re-credentialing, annual SAMHSA grant reporting, and annual NCQA MBHO accreditation annual submission tracking.',
  },
  {
    icon: RefreshCw,
    title: '42 CFR Part 2 & HIPAA Training',
    description: 'Annual 42 CFR Part 2 SUD records compliance training (stricter than standard HIPAA), annual HIPAA Privacy and Security Rule training, annual HIPAA Security Risk Assessment, annual BAA audit for EHR/billing/telehealth vendors, and quarterly breach response plan tabletop exercises.',
  },
  {
    icon: TrendingUp,
    title: 'Clinician Licensure & CE Cycles',
    description: 'Track LCSW/LMFT/LPC/LMHC biennial 40-CE renewal by state, psychologist license biennial renewal, psychiatrist ABPN MOC annual online module completion, annual ABPN Self-Assessment Activity, biennial AAMFT clinical membership renewal, and annual NASW membership and CE tracking.',
  },
  {
    icon: BarChart3,
    title: 'Quality Measures & Outcome Reporting',
    description: 'Monthly PHQ-9 completion rate reviews (≥80% of depression patients), monthly GAD-7 completion rate reviews, quarterly PCMH behavioral health integration annual reporting, quarterly no-show rate reviews (target ≤20%), annual HEDIS Antidepressant Medication Management measure tracking, and annual follow-up after ED visit for mental illness (FUM) measure.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'Licensure Renewals & HIPAA SRA',
    tasks: [
      'Audit all clinician license renewal dates for the calendar year — most states renew biennial on birthday or fixed date',
      'Annual HIPAA Security Risk Assessment (SRA) completion and documentation',
      'Annual review of Notice of Privacy Practices (NPP) — update if any policy changes',
      'Annual 42 CFR Part 2 training for all staff handling SUD patient records',
      'Annual OIG/LEIE and SAM.gov exclusion checks for all employees and contractors',
      'Annual Medicaid provider enrollment re-verification — confirm active status in all MCO networks',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'CARF/JCAHO Annual Conformance',
    tasks: [
      'CARF accreditation annual performance improvement plan (PIP) progress review',
      'JCAHO behavioral health annual conformance review — complete internal tracer methodology self-assessment',
      'Q1 PHQ-9 completion rate review (target ≥80% of active depression diagnoses)',
      'Q1 GAD-7 completion rate review (target ≥80% of active anxiety diagnoses)',
      'Q1 no-show rate review — implement access management interventions if >20%',
      'Annual Medicaid managed care credentialing renewal for all licensed clinicians in MCO networks',
    ],
  },
  {
    period: 'May – Jun',
    title: 'Credentialing & Staff Training',
    tasks: [
      'Annual malpractice insurance policy renewal and coverage review for all clinicians',
      'Biennial CARF accreditation survey prep (years 1 and 3 of 3-year cycle — annual internal audit)',
      'Annual OSHA bloodborne pathogen and infection control training (applicable to clinical staff)',
      'Annual HIPAA training for all workforce members — document completion',
      'Annual controlled substance training (if practice has prescribers — DEA 3-year renewals tracked separately)',
      'Annual NASW Code of Ethics and professional boundary training documentation',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'HEDIS & Quality Measure Mid-Year Review',
    tasks: [
      'Annual HEDIS Antidepressant Medication Management (AMM) mid-year review — confirm ≥50% acute phase completion rate',
      'Annual HEDIS Follow-Up After Hospitalization for Mental Illness (FUH) 7-day follow-up rate review (target ≥59%)',
      'Annual HEDIS Follow-Up After ED Visit for Mental Illness (FUM) mid-year review',
      'Annual NCQA MBHO accreditation annual reporting submission (July deadline for most plans)',
      'Mid-year audit of all clinician CE completion — identify any at risk for biennial deadline',
      'Q2 outcome measure completion rates audit — PHQ-9/GAD-7/CSSRS documentation compliance',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'ABPN MOC & Advanced Credential Renewals',
    tasks: [
      'ABPN MOC annual online module completion for all psychiatrists (December 31 deadline — start September)',
      'Annual ABPN Self-Assessment Activity completion for all board-certified psychiatrists',
      'NBCC biennial CE audit for LPC/LCMHC — 100 CE hours per 5-year cycle',
      'ASWB biennial CE audit for LCSW — confirm 40 CE hours on track',
      'Annual BAA audit — verify all business associate agreements current for EHR, billing, telehealth, clearinghouse',
      'Annual 42 CFR Part 2 SUD records policy and procedure review and update',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End Reporting & Next Year Prep',
    tasks: [
      'SAMHSA grant annual progress report submission (per NOA budget period end date)',
      'Annual CARF program evaluation data collection and outcomes report preparation',
      'Annual patient satisfaction survey data review (CAHPS or practice-specific survey)',
      'ABPN MOC annual online module completion deadline: December 31',
      'Annual staff satisfaction survey and workforce retention review',
      'Annual sliding-fee scale review (if serving uninsured/underinsured population under grant requirements)',
    ],
  },
]

const kpis = [
  { metric: '≥80%', label: 'PHQ-9 Completion Rate', description: 'NCQA and HEDIS behavioral health integration benchmark' },
  { metric: '≤20%', label: 'Patient No-Show Rate', description: 'Access metric — CARF accreditation performance standard' },
  { metric: '≥59%', label: 'FUH 7-Day Follow-Up Rate', description: 'HEDIS national 50th-percentile benchmark for commercial plans' },
  { metric: '100%', label: '42 CFR Part 2 Annual Training', description: 'SUD records compliance — stricter than HIPAA, significant penalty exposure' },
  { metric: '100%', label: 'OIG/LEIE Annual Check Completion', description: 'All staff, contractors, and vendors — Medicaid exclusion requirement' },
  { metric: '0', label: 'Lapsed Clinician Licenses', description: 'Single lapsed license = unlicensed practice exposure for the group' },
]

const testimonial = {
  quote: 'Running a group behavioral health practice means managing CE renewals for 12 different clinician license types across 3 states, CARF annual conformance, HIPAA SRAs, 42 CFR Part 2 training, and HEDIS quality measures — all at once. Momenties is the first system that actually keeps all of it organized. Our last CARF survey was a three-day process with zero citations.',
  author: 'Executive Director, LCSW',
  role: 'Behavioral Health Group Practice, 35 Clinicians',
}

export default function BehavioralHealthPracticeCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Behavioral Health Practices"
        title="Every License. Every HEDIS Measure. Every Accreditation Milestone."
        subtitle="Behavioral health group practices manage more credential types per square foot than almost any healthcare setting — LCSWs, LMFTs, LPCs, psychologists, and psychiatrists all on different biennial renewal cycles, CARF or JCAHO accreditation, 42 CFR Part 2 SUD records compliance, and monthly HEDIS quality measure monitoring. Momenties maps every deadline to the month it&apos;s due."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Behavioral Health Compliance Coverage
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
              12-Month Behavioral Health Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January licensure audits through December ABPN MOC deadlines &mdash; every major milestone mapped month by month.
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
            The KPIs Accreditors and Payers Measure You By
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
        headline="Ready to Ace Your Next CARF Survey?"
        subtext="Join behavioral health practices using Momenties to automate every licensure, HEDIS, and accreditation deadline. Free to start."
      />
    </main>
  )
}
