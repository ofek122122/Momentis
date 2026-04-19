import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Long-Term Care Pharmacy Compliance Calendar | Momenties',
  description: 'Track ACHC/URAC accreditation, CMS Conditions of Participation MDS drug regimen review, OBRA-87 DRR deadlines, consultant pharmacist cycles, and state LTC pharmacy license renewals.',
}

const pillars = [
  {
    icon: Target,
    title: 'CMS CoPs & OBRA-87 Drug Regimen Review',
    description: 'OBRA-87 mandates monthly drug regimen review (DRR) for every SNF resident — 100% completion by the last day of each month. Momenties tracks each facility&apos;s DRR cycle, consultant pharmacist visit schedule, and irreversible drug order response documentation.',
  },
  {
    icon: RefreshCw,
    title: 'ACHC/URAC Accreditation Cycles',
    description: 'ACHC LTC Pharmacy accreditation 3-year cycle annual conformance reviews, URAC Specialty Pharmacy accreditation annual reporting, annual mock survey self-assessment, annual PCAB compounding accreditation (if applicable), and annual state board of pharmacy inspection prep.',
  },
  {
    icon: TrendingUp,
    title: 'Consultant Pharmacist CE & Credentials',
    description: 'BCGP (Board-Certified Geriatric Pharmacist) recertification 7-year/100 CE, BCPS 7-year/100 CE, annual ASCP Annual Meeting CE hours, annual OBRA-87 DRR clinical update CE, annual polypharmacy and deprescribing CE, and annual Beers Criteria update CE — all tracked toward your next recertification.',
  },
  {
    icon: BarChart3,
    title: 'State License Renewals & DEA Registration',
    description: 'Multi-state LTC pharmacy license renewals (biennial in most states), DEA 3-year Schedules II–V registration renewal, biennial CS physical inventory within 2 days of biennial date, monthly CS log reconciliation for all dispensed controls, annual state PMP reporting compliance verification, and PDMP query compliance audits.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'License Renewals & Annual CS Inventory Prep',
    tasks: [
      'Audit all state LTC pharmacy license renewal dates for the calendar year — most states renew biennially on anniversary or fixed date',
      'Annual DEA registration renewal check — 3-year cycle, renewal window opens 60 days before expiration',
      'Biennial controlled substance physical inventory due within 2 business days of DEA registration anniversary (biennial — track individually)',
      'Annual state board of pharmacy continuing education audit for all pharmacists and pharmacy technicians',
      'Annual PCAB accreditation annual conformance review (if sterile/non-sterile compounding services)',
      'Monthly CS log reconciliation — January cycle: confirm December records closed and reconciled',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'OBRA-87 DRR Cycle Review & ACHC Prep',
    tasks: [
      'Q1 OBRA-87 DRR completion rate audit — confirm 100% of SNF residents reviewed monthly across all facilities served',
      'Q1 irreversible drug order response time audit — facility must respond to consultant pharmacist recommendations within required timeframe',
      'Annual ACHC accreditation annual conformance review — internal survey prep across all standards',
      'Annual Beers Criteria clinical update — distribute updated Beers 2023 list to all facility medical directors and DONs',
      'Annual polypharmacy deprescribing CE documentation for all consultant pharmacists',
      'Q1 antipsychotic prescribing rate audit across all facilities (CMS NH Quality Measure — target below state average)',
    ],
  },
  {
    period: 'May – Jun',
    title: 'ASCP Annual Meeting & Quality Measures',
    tasks: [
      'ASCP Annual Meeting — document CE hours for all consultant pharmacists toward BCGP/BCPS recertification',
      'Annual OBRA-87 DRR training for new consultant pharmacists joining the practice',
      'Q2 high-risk medication review audit (anticoagulants, insulin, opioids) — document dose appropriateness per Beers and STOPP criteria',
      'Annual antipsychotic reduction program review — document initiatives in place at each SNF facility',
      'Annual medication aide training program review and update (if pharmacy provides training services)',
      'Q2 CS log reconciliation audit — confirm all facilities reconciling monthly per state board requirements',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'CMS SNF Quality Measure Mid-Year Review',
    tasks: [
      'Annual CMS SNF Quality Measure mid-year review — analyze pharmacy-sensitive measures: antipsychotic use %, falls with major injury, UTI rate',
      'Q3 OBRA-87 DRR completion rate audit — address any facilities falling below 100%',
      'BCGP recertification CE audit — confirm all pharmacists on track for 100 CE hours by 7-year cycle end',
      'Annual HIPAA training for all pharmacy staff',
      'Annual HIPAA Security Risk Assessment for pharmacy dispensing and clinical systems',
      'Annual BAA audit for pharmacy software, EHR interface, and delivery tracking vendors',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'State License Renewals & URAC Annual Report',
    tasks: [
      'URAC Specialty Pharmacy annual reporting submission (if URAC accredited — September deadline for most)',
      'Q3 state pharmacy license renewal audit — confirm all pending renewals submitted',
      'Annual state PMP (Prescription Monitoring Program) reporting compliance review for all DEA Schedules II–IV dispensed',
      'Annual PDMP query documentation audit — confirm all required queries logged',
      'Annual facility-level medication error reporting compilation across all served SNFs',
      'Annual emergency supply policy review and after-hours contact protocol update for all facilities',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End Compliance & CS Reconciliation',
    tasks: [
      'Annual year-end controlled substance reconciliation — confirm all CS disposition records complete',
      'Annual DEA Form 106 filing (if any CS theft or significant loss discovered during year)',
      'Annual ACHC/URAC compliance self-assessment year-end close',
      'Annual consultant pharmacist performance review and CE completion documentation for all staff',
      'Annual facilities contract renewal review — audit all SNF/ALF pharmacy services agreements',
      'Q4 OBRA-87 DRR completion rate audit — confirm 100% year-end completion across all facilities',
    ],
  },
]

const kpis = [
  { metric: '100%', label: 'Monthly OBRA-87 DRR Completion Rate', description: 'CMS F-Tag F756 — any gap = immediate jeopardy risk at SNF survey' },
  { metric: '≤15%', label: 'Antipsychotic Use Rate vs. State Avg', description: 'CMS SNF Quality Measure — above average triggers CMS Special Focus Facility risk' },
  { metric: '100%', label: 'Biennial CS Inventory Compliance', description: 'DEA 21 CFR 1304.11 — missing inventory = DEA audit trigger' },
  { metric: '100%', label: 'State License Renewal On-Time Rate', description: 'Lapsed license = unlicensed dispensing exposure — criminal liability' },
  { metric: '≥95%', label: 'DRR Recommendation Response Rate', description: 'Facility non-response documentation required within CMS-mandated timeframe' },
  { metric: '100%', label: 'Monthly CS Log Reconciliation', description: 'State board requirement — gaps cited on virtually every board inspection' },
]

const testimonial = {
  quote: 'We serve 22 SNFs and 8 ALFs. Keeping 100% OBRA-87 DRR completion across all facilities, tracking consultant pharmacist CE cycles, managing biennial CS inventories, and renewing pharmacy licenses in 4 states used to require a dedicated compliance coordinator. Momenties gave us the system to manage all of it ourselves. Zero DRR compliance deficiencies in our last two CMS survey cycles.',
  author: 'Director of Pharmacy Operations, PharmD, BCGP',
  role: 'Long-Term Care Pharmacy, Multi-Facility Practice',
}

export default function LongTermCarePharmacyCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Long-Term Care Pharmacies"
        title="Every OBRA-87 DRR. Every CS Inventory. One Calendar."
        subtitle="Long-term care pharmacies operate at the intersection of CMS CoP enforcement, DEA controlled substance compliance, multi-state pharmacy licensure, and ACHC accreditation — with 100% monthly OBRA-87 drug regimen review completion as the non-negotiable floor. Momenties maps every deadline across every facility you serve."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End LTC Pharmacy Compliance Coverage
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
              12-Month LTC Pharmacy Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January CS inventory audit through December year-end reconciliation &mdash; every major deadline mapped month by month.
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
            The KPIs CMS and State Boards Measure You By
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
        headline="Ready to Hit 100% DRR Completion Every Month?"
        subtext="Join long-term care pharmacies using Momenties to automate every OBRA-87, DEA, and ACHC deadline across all your facilities. Free to start."
      />
    </main>
  )
}
