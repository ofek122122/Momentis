import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Sleep Medicine Center Compliance Calendar | Momenties',
  description: 'Track AASM accreditation annual self-assessment, RPSGT biennial renewal, ABSM DABSM/DABOM MOC, CMS CPAP coverage documentation, polysomnography monthly quality audit, MSLT/MWT protocol compliance, and AASM annual meeting CE deadlines for sleep medicine centers.',
}

const pillars = [
  {
    icon: Target,
    title: 'AASM Accreditation & Sleep Center Standards',
    description: 'AASM (American Academy of Sleep Medicine) sleep center accreditation — 5-year cycle with annual self-assessment, annual AASM accreditation Standards for Accreditation review, annual CMS CPAP coverage documentation compliance audit (Medicare CPAP benefit: AHI ≥15 events/hour or AHI ≥5 with symptoms — all PSG data must meet coverage criteria for CMS reimbursement), annual state sleep center licensing compliance (select states require annual sleep center licensing renewal), annual AASM Annual Meeting CE, and annual AASM Choosing Wisely recommendations integration review.',
  },
  {
    icon: RefreshCw,
    title: 'RPSGT, ABSM & Sleep Medicine Credentials',
    description: 'RPSGT (Registered Polysomnographic Technologist — BRPT) biennial 20-CE renewal for all sleep technologists, CPSGT (Certified Polysomnographic Technician) biennial renewal, DABSM (Diplomate American Board of Sleep Medicine — ABSM) MOC annual CME requirement, DABOM (Diplomate American Board of Obesity Medicine) annual MOC for sleep physicians managing obesity-related sleep disorders, annual AASM annual meeting CE, annual polysomnography interpretation competency documentation for reading physicians (AASM competency standards), and annual DMEPOS supplier accreditation renewal for in-house CPAP dispensing programs.',
  },
  {
    icon: TrendingUp,
    title: 'PSG Quality & Outcomes Tracking',
    description: 'Monthly polysomnography quality audit — AASM signal quality standards: ≥6 hours recording time ≥80% of studies, signal artifact ≤10% per channel, annual CPAP/BPAP adherence documentation rate — CMS: ≥4 hours/night ≥70% of nights in 30-consecutive-night period for continued CPAP benefit, quarterly MSLT/MWT protocol compliance audit (AASM Practice Guidelines: ≥15-minute inter-test interval, lights-off time accuracy ≤2 minutes), monthly out-of-center sleep testing (OCST) type III device data quality audit, annual obstructive sleep apnea positive treatment response rate documentation (AHI ≤5 events/hour on PAP — AASM treatment goal), and annual pediatric sleep center PSG protocol compliance (if treating patients under 18 — AASM pediatric scoring rules annual update).',
  },
  {
    icon: BarChart3,
    title: 'CPAP PAP Adherence & Telemedicine',
    description: 'Annual CPAP/PAP device remote monitoring protocol review — AASM consensus: telemonitoring with AHI/adherence data at 30 days, 90 days, and annually for all PAP-treated patients, annual DMEPOS CPAP supplier compliance audit (Medicare supplier standards — face-to-face physician visit, written order, and compliance documentation requirements), annual hypnotic medication stewardship annual audit (CBT-I first line — AASM and ACP clinical practice guideline: benzodiazepine and Z-drug prescribing rate ≤30% for new insomnia diagnoses), annual pediatric and adolescent sleep hygiene education program documentation, and annual home sleep apnea test (HSAT) interpretation quality annual review.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'RPSGT Renewal Audit & Annual Policy Update',
    tasks: [
      'Annual RPSGT and CPSGT certification status audit for all sleep technologists — identify all staff due for biennial 20-CE renewal within next 12 months',
      'Annual AASM sleep center accreditation self-assessment — review all accreditation standards and document compliance for current accreditation cycle',
      'Annual CMS CPAP coverage documentation compliance audit — confirm all PSG data meets AHI ≥15 or AHI ≥5 with symptoms criteria for Medicare CPAP reimbursement',
      'Annual OIG/LEIE exclusion checks for all sleep center clinical staff and DMEPOS suppliers',
      'Annual HIPAA training for all sleep center personnel including scheduling and billing staff',
      'Annual AASM accreditation standards review — update all affected sleep center policies per AASM current version standards',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'PSG Quality Audit Q1 & CPAP Adherence Review',
    tasks: [
      'Q1 polysomnography quality audit — ≥80% of studies meeting AASM minimum recording time (≥6 hours) and signal quality (≤10% artifact per channel) standards',
      'Annual 30-day CPAP adherence documentation audit — confirm ≥4 hours/night ≥70% of nights documented for all Medicare CPAP-entitled patients',
      'Annual MSLT (Multiple Sleep Latency Test) protocol compliance audit — inter-test interval, nap opportunity duration, and lights-off time accuracy documentation',
      'Annual home sleep apnea test (HSAT) type III device quality audit — data adequacy rate (≥85% technically adequate studies target), sensor failure rate, and manual scoring accuracy',
      'Annual pediatric PSG scoring rules update review — confirm AASM 2023 pediatric scoring criteria incorporated into scoring software and technologist training',
      'Q1 obstructive sleep apnea PAP treatment response rate — AHI ≤5 events/hour on optimal PAP pressure documentation for all titration PSG studies',
    ],
  },
  {
    period: 'May – Jun',
    title: 'AASM Annual Meeting CE & Hypnotic Stewardship',
    tasks: [
      'Annual AASM Annual Meeting CE documentation — confirm all sleep physicians (DABSM), sleep NPs, and RPSGT-certified technologists have AASM meeting CE hours documented',
      'Annual hypnotic medication stewardship audit — benzodiazepine and Z-drug new insomnia prescription rate (AASM/ACP CBT-I first-line recommendation: ≤30% hypnotic rate for new insomnia diagnoses)',
      'Annual CBT-I (Cognitive Behavioral Therapy for Insomnia) program documentation — confirm CBT-I provider availability and patient referral rate documentation',
      'Annual DMEPOS CPAP supplier accreditation documentation review — confirm all CPAP dispensing activities comply with Medicare DMEPOS supplier standards',
      'Annual PAP remote telemonitoring protocol review — AASM consensus monitoring schedule (30-day, 90-day, annual) and resupply documentation compliance',
      'Annual restless legs syndrome (RLS) and periodic limb movement disorder (PLMD) protocol review per current AASM practice guideline update',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'PSG Quality Mid-Year Review & MWT Audit',
    tasks: [
      'Annual polysomnography quality mid-year dashboard review — signal quality, study completion rates, and scoring accuracy vs. AASM accreditation standards',
      'Annual MWT (Maintenance of Wakefulness Test) protocol compliance audit — AASM standard: 40-minute protocol, ≥15-minute inter-test interval, and Karolinska Sleepiness Scale documentation for all occupational MWT studies',
      'Annual sleep center patient satisfaction survey mid-year review — confirm survey completion rate ≥80% for AASM accreditation documentation',
      'Annual DMEPOS Medicare CPAP audit preparation — compile all required documentation for potential Medicare DMEPOS supplier audit (physician orders, compliance records, delivery tickets)',
      'Annual out-of-center sleep testing quality mid-year audit — HSAT adequate study rate and OSA severity concordance with in-lab PSG',
      'Annual narcolepsy type 1 MSLT documentation quality audit — mean sleep latency ≤8 minutes with ≥2 sleep-onset REM periods (SOREMPs) confirmation',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'AASM Accreditation Prep & State Licensing',
    tasks: [
      'Annual AASM sleep center accreditation documentation compilation — compile all required program documents for potential site visit if 5-year renewal approaching',
      'Annual state sleep center licensing renewal filing (if required) — file annual or biennial state sleep center license renewal per state health department requirements',
      'Annual sleep technologist competency assessment — simulation or case review for PSG hookup accuracy, artifact recognition, arousal scoring, and respiratory event scoring',
      'Annual DABSM MOC annual review for all ABSM-certified sleep medicine physicians — confirm CME hours on track for annual MOC requirement',
      'Annual pediatric sleep center standards compliance review (if treating children) — pediatric PSG staffing, scoring rules, and safety standards',
      'Annual sleep center emergency response protocol review — overnight emergency protocol for cardiac arrest, respiratory distress, and seizure during PSG recording',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End CPAP Compliance & Annual Report',
    tasks: [
      'Annual CMS 90-day CPAP compliance documentation review — confirm all Medicare CPAP patients have 90-day compliance data (≥4 hours/night ≥70% of 30 consecutive nights) on file before Medicare annual benefit renewal',
      'Annual sleep center quality improvement annual report — compile PSG quality metrics, CPAP adherence rates, treatment response rates, hypnotic stewardship data, and patient satisfaction for AASM accreditation file',
      'Annual RPSGT renewal planning for next year — schedule all CE course completion for staff due for biennial renewal in upcoming 12 months',
      'Annual CPAP resupply documentation audit — confirm all CPAP patients have annual resupply orders and equipment replacement documentation for Medicare compliance',
      'Annual sleep center strategic review — out-of-center testing growth, telemedicine sleep consultation, CBT-I program expansion, and pediatric sleep service planning',
      'Annual AASM Choosing Wisely annual recommendations implementation audit — confirm sleep center has incorporated current low-value care reduction targets into clinical protocols',
    ],
  },
]

const kpis = [
  { metric: '≥80%', label: 'PSG Technical Adequacy Rate', description: 'AASM accreditation standard — below 80% minimum recording time and signal quality triggers AASM accreditation corrective action requirement' },
  { metric: '≥70%', label: 'CPAP Adherence Rate (CMS Standard)', description: 'Medicare CPAP coverage requirement — ≥4 hours/night ≥70% of nights in 30 consecutive days; below standard = CMS CPAP benefit termination for the patient' },
  { metric: '≤30%', label: 'New Insomnia Hypnotic Prescription Rate', description: 'AASM/ACP CBT-I first-line guideline target — above 30% triggers sleep medicine hypnotic stewardship program review' },
  { metric: '100%', label: 'RPSGT Biennial Recertification', description: 'AASM accreditation requirement for all scoring technologists — expired RPSGT is a sleep center accreditation deficiency finding at site review' },
  { metric: '≥85%', label: 'HSAT Technical Adequacy Rate', description: 'AASM OCST standard — below 85% adequate home sleep test studies triggers in-lab PSG protocol expansion and HSAT device quality review' },
  { metric: 'AHI ≤5', label: 'PAP Treatment Response Goal', description: 'AASM OSA treatment success criterion — residual AHI above 5 events/hour on PAP triggers pressure adjustment, mask refitting, or alternative PAP modality evaluation' },
]

const testimonial = {
  quote: 'Sleep medicine center compliance runs on RPSGT biennial renewal cycles, annual AASM accreditation self-assessment, CMS CPAP 30-day and 90-day adherence documentation audits, monthly PSG quality monitoring, quarterly MSLT/MWT protocol compliance, annual hypnotic stewardship reviews, DMEPOS supplier compliance, DABSM MOC annual requirements, and state sleep center licensing — all simultaneously. Momenties mapped every deadline. Our center achieved AASM reaccreditation with zero deficiencies and top-quartile CPAP adherence rates.',
  author: 'Sleep Center Medical Director, MD, DABSM, FAASM',
  role: 'AASM Accredited Sleep Medicine Center, Academic Medical Center',
}

export default function SleepMedicineCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Sleep Medicine Centers"
        title="AASM Accreditation. CPAP Adherence. PSG Quality. RPSGT. One Calendar."
        subtitle="Sleep medicine center compliance is built on continuous measurement — annual AASM accreditation standards, monthly PSG quality audits, CMS CPAP 30-day and 90-day adherence documentation, RPSGT biennial renewal cycles, MSLT/MWT protocol compliance, hypnotic stewardship monitoring, and DMEPOS supplier standards. Momenties maps every AASM, CMS, and BRPT milestone so your sleep center maintains accreditation and achieves top-quartile patient outcomes year after year."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Sleep Medicine Center Compliance Coverage
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
              12-Month Sleep Medicine Center Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January RPSGT audit through December CPAP compliance review &mdash; every AASM, CMS, and BRPT milestone mapped.
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
            The KPIs AASM Surveyors and CMS Measure Your Sleep Center By
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
        headline="Ready for AASM Reaccreditation with Zero Deficiencies?"
        subtext="Join sleep medicine centers using Momenties to automate every AASM, CMS CPAP, and RPSGT renewal deadline. Free to start."
      />
    </main>
  )
}
