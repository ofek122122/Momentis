import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Perioperative Services Compliance Calendar | Momenties',
  description: 'Track AORN accreditation, TJC Universal Protocol compliance, CNOR biennial CE, malignant hyperthermia annual drills, sterile processing CBSPD certification, and anesthesia ACSA standards.',
}

const pillars = [
  {
    icon: Target,
    title: 'AORN Standards & TJC Surgical Compliance',
    description: 'AORN Guidelines for Perioperative Practice annual edition update review, TJC Universal Protocol compliance (surgical timeout 100%, marking 100%, site verification 100%), annual TJC accreditation perioperative standards self-assessment, annual ACS verification requirements for trauma/cancer surgical programs, and CMS Conditions of Participation for surgical services annual review.',
  },
  {
    icon: RefreshCw,
    title: 'Sterile Processing & Instrument Sterilization',
    description: 'Weekly biological indicator spore tests (52 per year) for all steam autoclaves, daily Bowie-Dick test documentation for dynamic-air-removal sterilizers, biennial CBSPD (Certification Board for Sterile Processing and Distribution) CS certification renewal, annual CRCST renewal 15-CE, annual IAHCSMM Annual Conference CE for sterile processing staff, and annual instrument sterilization cycle validation documentation.',
  },
  {
    icon: TrendingUp,
    title: 'CNOR Credentials & OR Nursing CE',
    description: 'CNOR (Certified Nurse Operating Room) biennial 125-CE renewal, CRNFA biennial renewal, CPSN (Certified Plastic Surgical Nurse) biennial CE, RNFA 2-year/20 CE renewal, annual AORN Annual Meeting CE, annual perioperative pharmacology CE update, annual surgical site infection prevention CE — all tracked toward CNOR renewal.',
  },
  {
    icon: BarChart3,
    title: 'Malignant Hyperthermia & Quality Metrics',
    description: 'Annual malignant hyperthermia drill and dantrolene cart expiration audit (MHAUS requirement), annual anesthesia machine preventive maintenance, monthly surgical timeout compliance audit (TJC Universal Protocol 100% required), quarterly SSI (surgical site infection) rate tracking by procedure type (NHSN), monthly retained surgical item (RSI) near-miss reporting, and annual NSQIP outcome report.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'CNOR CE Audit & Annual Spore Testing Baseline',
    tasks: [
      'Annual CNOR CE audit for all certified OR nurses — identify all nurses on track for 125-CE biennial renewal',
      'Annual AORN Guidelines for Perioperative Practice new edition review — update all affected policies and procedures',
      'Annual OIG/LEIE and SAM.gov exclusion checks for all perioperative staff',
      'Annual HIPAA training for all OR and sterile processing personnel',
      'Annual malignant hyperthermia dantrolene cart audit — confirm dantrolene, diluent, and emergency supplies in-date',
      'Annual malignant hyperthermia drill documentation — all OR clinical staff must complete annual MH drill',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'TJC Universal Protocol Audit & Sterile Processing',
    tasks: [
      'Q1 surgical timeout compliance audit — random sample of 100 cases for full Universal Protocol compliance (100% target)',
      'Q1 sterile processing biological indicator spore test log audit — confirm weekly spore tests complete and all results documented',
      'Annual CBSPD/IAHCSMM sterile processing staff CE audit — confirm all CS technicians on track for biennial renewal',
      'Annual instrument set validation audit — confirm all new/modified instrument sets have documented sterilization cycle validation',
      'Annual AORN annual meeting CE hours documentation for CNOR nurses',
      'Annual SSI rate Q1 review — benchmark against NHSN national rates by procedure class',
    ],
  },
  {
    period: 'May – Jun',
    title: 'Anesthesia PM & Staff Competency',
    tasks: [
      'Annual anesthesia machine preventive maintenance for all OR/procedure room anesthesia units — document all units serviced',
      'Annual CRNA biennial CE audit — confirm all CRNAs on track for 40 CE hours per 2-year NBCRNA cycle',
      'Annual fire safety drill for perioperative areas — document simulation of OR fire scenario',
      'Annual LASER safety training for all staff in laser-equipped ORs (ANSI Z136.3)',
      'Annual radiation safety training for all C-arm/fluoroscopy-equipped OR staff',
      'Annual TJC annual tracer methodology self-assessment for perioperative standards',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'NSQIP Outcomes Review & Quality',
    tasks: [
      'Annual ACS NSQIP semi-annual outcomes report review — analyze 30-day morbidity and mortality by procedure type',
      'Q2 SSI rate review — confirm rates benchmarking against NHSN national percentiles',
      'Q2 retained surgical item (RSI) near-miss and incident review — document all sponge/needle counts discrepancies investigated',
      'Annual sharps injury log review for perioperative staff — confirm all exposures documented and post-exposure protocols followed',
      'Annual OR traffic pattern and attire policy review — update per current AORN evidence-based guidance',
      'Annual glutaraldehyde/OPA exposure monitoring for scope reprocessing staff (if any high-level disinfection in perioperative area)',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'Accreditation Prep & Emergency Drills',
    tasks: [
      'Annual TJC accreditation perioperative self-assessment — prepare for potential unannounced survey',
      'Annual malignant hyperthermia drill documentation (if not completed in January) — MHAUS requires annual drill',
      'Annual difficult airway cart audit — confirm video laryngoscope, surgical airway kit, and LMA sizes in-date and stocked',
      'Annual code blue response drill in perioperative areas — document all staff participation and debriefing',
      'Annual CNOR biennial CE mid-cycle audit for nurses in second year of renewal cycle',
      'Annual waste anesthetic gas (WAG) monitoring for chronic occupational exposure (NIOSH limit 2 ppm N2O, 0.5 ppm halogenated)',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End Quality & Instrument Reprocessing Audit',
    tasks: [
      'Annual sterile processing department annual performance review — compile all spore test results, sterilizer failure incidents, and instrument tracking data',
      'Annual RSI (retained surgical item) annual incident review — analyze all near-misses and confirmed RSIs for system improvement',
      'Annual perioperative staff satisfaction and retention review',
      'Annual NSQIP ACS year-end outcome summary report',
      'Annual OR throughput and case volume review — analyze first case on-time start rates and OR utilization efficiency',
      'Annual ASA closed claims educational review for all anesthesia providers — document completion',
    ],
  },
]

const kpis = [
  { metric: '100%', label: 'Surgical Timeout Compliance Rate', description: 'TJC Universal Protocol — any non-compliance = immediate jeopardy risk at survey' },
  { metric: '52/year', label: 'Biological Indicator Spore Tests', description: 'AORN/AAMI standard — missing weekly spore test is a TJC citation' },
  { metric: '100%', label: 'Annual MH Drill Completion', description: 'MHAUS requirement — MH crisis without annual drill preparation is a patient safety event' },
  { metric: '0', label: 'Confirmed Retained Surgical Items', description: 'TJC Sentinel Event — any confirmed RSI triggers mandatory root cause analysis and reporting' },
  { metric: '≤1.5%', label: 'SSI Rate for Colon Surgery (NHSN)', description: 'NHSN 25th-percentile benchmark — above average triggers mandatory QI protocol' },
  { metric: '≥90%', label: 'First Case On-Time Start Rate', description: 'AORN OR efficiency benchmark — below 90% indicates scheduling or preparation failures' },
]

const testimonial = {
  quote: 'Perioperative services compliance runs on 52 weekly spore test cycles, annual MH drills, monthly timeout audits, quarterly SSI rate reviews, biennial CNOR renewals, annual AORN guidelines updates, and anesthesia machine PM schedules — all simultaneously. Momenties consolidated all of it into one calendar. Our TJC survey found zero perioperative deficiencies for the first time in a decade.',
  author: 'Director of Perioperative Services, MSN, CNOR',
  role: 'OR and Sterile Processing Department, 450-Bed Regional Hospital',
}

export default function PerioperativeServicesCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Perioperative Services"
        title="Universal Protocol. Spore Tests. CNOR. MH Drills. One Calendar."
        subtitle="Perioperative services carry one of the most continuous compliance requirements in hospital operations — 52 weekly spore tests, monthly surgical timeout audits, annual malignant hyperthermia drills, CNOR biennial renewals, AORN guidelines annual updates, and quarterly SSI rate monitoring. Momenties maps every deadline so your OR stays TJC-ready and patient-safe year-round."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Perioperative Services Compliance Coverage
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
              12-Month Perioperative Services Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January MH drills through December OR performance review &mdash; every AORN, TJC, and NSQIP milestone mapped.
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
            The KPIs TJC Surveyors and NSQIP Measure You By
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
        headline="Ready for Zero Perioperative TJC Deficiencies?"
        subtext="Join perioperative services using Momenties to automate every Universal Protocol audit, spore test, and CNOR renewal. Free to start."
      />
    </main>
  )
}
