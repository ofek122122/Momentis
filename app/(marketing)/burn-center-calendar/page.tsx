import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Burn Center Compliance Calendar | Momenties',
  description: 'Track ABA burn center verification, ABLS biennial recertification, NBCOT annual staff competency, monthly TBSA documentation accuracy, annual donor site infection rate review, and quarterly rehabilitation outcomes for ABA-verified burn centers.',
}

const pillars = [
  {
    icon: Target,
    title: 'ABA Verification & Burn Center Standards',
    description: 'ABA (American Burn Association) burn center verification — 3-year cycle with annual ABA National Burn Repository (NBR) data submission, annual ABA Advanced Burn Life Support (ABLS) provider and instructor recertification, annual ABA verification criteria self-assessment (surgeon availability, ICU bed requirements, rehab resources), annual burn center consultation response time standard (≤30 minutes for Level I verified centers), annual ACS verification requirements for burn programs, and annual ACGME burn surgery fellowship program compliance (if fellowship-training program).',
  },
  {
    icon: RefreshCw,
    title: 'ABLS, BURN Credentials & Staff Competency',
    description: 'ABLS (Advanced Burn Life Support) biennial recertification for all burn nurses, surgeons, and APPs — 16-hour course every 2 years, annual NBCOT (National Burn Care Outcomes Tracking) annual staff competency documentation, annual burn wound care competency assessment for all burn nurses, CCRN 3-year renewal for burn ICU nurses, annual skin grafting and allograft wound dressing change annual competency assessment, annual infection control competency for burn patient care (highest nosocomial infection risk population), and annual inhalation injury assessment annual competency documentation.',
  },
  {
    icon: TrendingUp,
    title: 'NBR Data & Outcomes Tracking',
    description: 'Annual ABA National Burn Repository (NBR) data submission ≥95% case capture — all burn admissions with TBSA ≥10% submitted with complete outcome data, monthly TBSA documentation accuracy audit, monthly length of stay per %TBSA tracking (ABA benchmark ≤1 day/% TBSA), quarterly donor site infection rate (target ≤2%), monthly Revised Baux Score documentation for all admissions (age + %TBSA — prognostic score), quarterly hypertrophic scar incidence tracking (ABA benchmark ≤30% for deep partial thickness burns), and annual ventilator-associated pneumonia (VAP) rate for intubated burn patients.',
  },
  {
    icon: BarChart3,
    title: 'Rehabilitation & Scar Management',
    description: 'Annual burn rehabilitation outcomes annual report — range of motion, return to work/school rates, and PROMIS functional outcomes, annual occupational therapy and physical therapy annual competency documentation for burn-specific rehabilitation techniques (splinting, pressure garment application, scar massage), annual pediatric burn center standards compliance (if treating pediatric patients — ABA pediatric verification criteria), annual psychological support program annual outcomes report (burn survivor depression and PTSD screening ≥90% completion), quarterly Integra and allograft utilization audit, and annual pain management protocol annual update per current ABA guidelines.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'ABLS Recertification Audit & Annual Policy Update',
    tasks: [
      'Annual ABLS provider status audit for all burn surgeons, burn nurses, and APPs — identify all staff due for biennial ABLS recertification within next 12 months',
      'Annual ABA National Burn Repository prior year data submission completeness audit — confirm ≥95% case capture for all prior year burn admissions',
      'Annual burn center policy and procedure review — update all affected policies per ABA annual guideline updates',
      'Annual OIG/LEIE and SAM.gov exclusion checks for all burn center staff',
      'Annual HIPAA training for all burn center clinical staff',
      'Annual burn center surgeon availability audit — confirm ABA verification criteria compliance for attending surgeon coverage (24/7 availability within 30 minutes)',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'NBR Q1 Data & Wound Care Competency',
    tasks: [
      'Q1 NBR data submission — all burn admissions January–March with TBSA ≥10% submitted with complete LOS, surgical procedures, and outcome data',
      'Annual burn wound care competency assessment for all burn nurses — allograft and xenograft application, Integra placement, skin grafting support, and negative pressure wound therapy',
      'Annual infection control competency for burn patient care — contact precautions, environmental disinfection, and MRSA/Pseudomonas surveillance protocol',
      'Q1 donor site infection rate review — target ≤2% donor site infection rate per ABA benchmark',
      'Annual Revised Baux Score documentation accuracy audit — confirm all admissions have age + %TBSA accurately documented in ABA data submission',
      'Annual ABA verification criteria self-assessment — ICU beds, rehab resources, outpatient clinic, and consultation coverage',
    ],
  },
  {
    period: 'May – Jun',
    title: 'Rehabilitation Outcomes & Scar Management Audit',
    tasks: [
      'Annual burn rehabilitation outcomes report — compile range of motion outcomes, return to work/school rates, and PROMIS physical function scores for all burn patients with TBSA ≥20%',
      'Annual occupational therapy and physical therapy annual competency documentation — burn splinting, pressure garment application, scar massage, and active/passive ROM protocols',
      'Annual psychological support program outcomes report — depression and PTSD screening completion rate ≥90% target, positive screen referral rate, and treatment engagement',
      'Q2 NBR data submission — all burn admissions April–June submitted',
      'Q2 hypertrophic scar incidence tracking — confirm ABA benchmark ≤30% for deep partial-thickness burns with audit of scar prevention protocol adherence',
      'Annual pain management protocol annual update review — multimodal analgesia, procedural sedation, and chronic pain management per current ABA evidence-based guidelines',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'ABA Verification Prep & VAP Rate Review',
    tasks: [
      'Annual ABA burn center verification annual self-assessment documentation — compile all required data elements for potential site visit',
      'Q2 ventilator-associated pneumonia (VAP) rate review for intubated burn patients — compare to NHSN benchmark and review VAP bundle compliance',
      'Annual inhalation injury assessment competency documentation — all burn nurses and APPs complete annual inhalation injury severity grading and early airway management protocol review',
      'Annual skin grafting techniques annual competency — split-thickness skin graft care, donor site management, and allograft rejection recognition for all burn nurses',
      'Q3 NBR data submission — all burn admissions July–September submitted',
      'Annual ABA ACGME burn fellowship program compliance review (if fellowship program) — case log requirements, faculty credentials, and educational outcomes',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'Accreditation Prep & Pediatric Compliance',
    tasks: [
      'Annual TJC accreditation burn center self-assessment — prepare for potential unannounced survey with focus on high-alert medications (ketamine, opioids, silver sulfadiazine)',
      'Annual pediatric burn center standards compliance review (if treating patients under 18) — ABA pediatric verification criteria, child life specialist, and pediatric-specific wound care protocols',
      'Annual NBCOT national burn outcomes benchmark comparison — submit center data and review performance vs. national benchmarks for LOS, mortality, and functional outcomes',
      'Annual Integra and allograft utilization audit — confirm annual dermal matrix and allograft utilization is documented and within burn surgery inventory management protocols',
      'Q4 NBR data submission preparation — begin review of Q3 data for completeness before October submission deadline',
      'Annual fire safety and disaster preparedness drill for mass casualty burn event — document all burn team participation in annual MCI burn drill',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End NBR Submission & Annual Report',
    tasks: [
      'Annual ABA National Burn Repository year-end data submission — confirm all prior year admissions submitted with ≥95% case capture and complete outcome data',
      'Annual burn center quality improvement annual report — compile LOS per %TBSA, mortality by Revised Baux Score decile, donor site infection, hypertrophic scar, and VAP rates for leadership and ABA file',
      'Annual burn staff satisfaction and retention review',
      'Annual ABLS recertification planning for next year — schedule all ABLS renewal courses for staff due in upcoming 12 months',
      'Annual pain management opioid stewardship annual review for burn patients — compile opioid prescribing data at discharge vs. ABA recommendations',
      'Annual ABA verification 3-year cycle status review — confirm next verification site visit date and begin documentation preparation if due within 12 months',
    ],
  },
]

const kpis = [
  { metric: '≥95%', label: 'NBR Annual Case Capture Rate', description: 'ABA verification requirement — below 95% case capture risks ABA verified burn center status at triennial review' },
  { metric: '≤1 day/%TBSA', label: 'Length of Stay Benchmark', description: 'ABA benchmark for burn LOS efficiency — centers above benchmark trigger ABA quality improvement consultation' },
  { metric: '≤2%', label: 'Donor Site Infection Rate', description: 'ABA quality metric — donor site infections above 2% trigger mandatory wound care protocol review and infection control audit' },
  { metric: '100%', label: 'ABLS Biennial Recertification', description: 'ABA verification requirement for all burn team members — expired ABLS is a verification deficiency finding at site visit' },
  { metric: '≤30%', label: 'Hypertrophic Scar Incidence', description: 'ABA benchmark for deep partial-thickness burns — above 30% triggers scar prevention protocol review and pressure garment program audit' },
  { metric: '≥90%', label: 'Psychological Screening Completion', description: 'ABA verification standard — below 90% depression and PTSD screening completion triggers burn psychosocial program compliance review' },
]

const testimonial = {
  quote: 'Burn center compliance runs on biennial ABLS recertification cycles, quarterly NBR data submissions, monthly LOS per %TBSA tracking, annual ABA verification self-assessment, donor site infection rate monitoring, hypertrophic scar rate benchmarking, annual wound care competency documentation, psychological screening completion audits, and annual Revised Baux Score accuracy reviews — all simultaneously. Momenties mapped every deadline. Our center achieved ABA verified status with zero deficiencies and ranked in the top quartile nationally for LOS efficiency.',
  author: 'Burn Center Medical Director, MD, FACS',
  role: 'ABA Verified Burn Center, Regional Level I Trauma Center',
}

export default function BurnCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Burn Centers"
        title="ABA Verification. NBR Data. ABLS. LOS Benchmarks. One Calendar."
        subtitle="Burn center compliance is built on continuous cycles — biennial ABLS recertification, quarterly NBR data submissions, monthly LOS per %TBSA tracking, annual ABA verification self-assessment, donor site infection rate monitoring, hypertrophic scar benchmarking, and annual wound care competency documentation. Momenties maps every ABA, NHSN, and TJC deadline so your burn center maintains verified status and top-quartile patient outcomes year-round."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Burn Center Compliance Coverage
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
              12-Month Burn Center Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January ABLS audit through December NBR year-end submission &mdash; every ABA, NHSN, and TJC milestone mapped.
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
            The KPIs ABA Surveyors and NBR Measure Your Burn Center By
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
        headline="Ready to Achieve ABA Verified Status with Zero Deficiencies?"
        subtext="Join burn centers using Momenties to automate every ABA, NBR, and ABLS compliance deadline. Free to start."
      />
    </main>
  )
}
