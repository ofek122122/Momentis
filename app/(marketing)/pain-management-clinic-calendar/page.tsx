import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Pain Management Clinic Compliance Calendar | Momenties',
  description: 'Track DEA registration renewal, state PDMP queries, ACGME pain medicine fellowship compliance, ABPM MOC, opioid prescribing CDC guideline annual review, REMS annual training for extended-release opioids, and AAPM annual CE deadlines for pain management clinics.',
}

const pillars = [
  {
    icon: Target,
    title: 'DEA, State PDMP & Controlled Substance Compliance',
    description: 'DEA registration 3-year renewal for all pain management physicians, NPs, and PAs, state Prescription Drug Monitoring Program (PDMP) query documentation — 41 states require mandatory PDMP query before prescribing Schedule II–IV controlled substances (frequency varies by state: per prescription vs. annually), annual state controlled substance prescribing regulations annual review (state-specific CE requirements for opioid prescribing), annual DEA Schedule II controlled substance biennial inventory (within 2 days of May 1 or November 1), annual state medical board prescribing guideline annual compliance review, and annual CMS Medicare/Medicaid opioid prescribing outlier audit preparation.',
  },
  {
    icon: RefreshCw,
    title: 'REMS Training & Opioid Prescriber Education',
    description: 'Extended-Release/Long-Acting (ER/LA) Opioid REMS annual prescriber training — FDA requires annual CE completion for all ER/LA opioid prescribers (TIRF REMS Access Program for transmucosal immediate-release fentanyl), TIRF (Transmucosal Immediate-Release Fentanyl) REMS annual enrollment and training update for Actiq, Fentora, Abstral, Onsolis, Lazanda, and Subsys, annual ABPM (American Board of Pain Medicine) MOC annual self-assessment module completion (December 31 deadline), annual AAPM (American Academy of Pain Medicine) Annual Meeting CE, annual ASRA (American Society of Regional Anesthesia and Pain Medicine) annual meeting CE, and annual interventional pain procedure fluoroscopy radiation safety training.',
  },
  {
    icon: TrendingUp,
    title: 'CDC Guideline Compliance & Quality Metrics',
    description: 'Annual CDC Clinical Practice Guideline for Prescribing Opioids (2022 update) annual review — incorporate current guidance on morphine milligram equivalents (MME), patient risk assessment, and prescription duration monitoring into clinic protocols, monthly high-dose opioid prescribing rate documentation (≥90 MME/day — CDC high-risk threshold: triggers urine drug screen and risk re-assessment), quarterly opioid treatment agreement and urine drug screen (UDS) compliance audit (≥90% of opioid patients with current OTA and annual UDS), quarterly naloxone co-prescription rate for all patients on ≥50 MME/day (CDC recommendation — clinic target ≥90%), and annual spinal cord stimulator (SCS) outcomes documentation — 50% pain reduction at 1 year (NICE benchmark).',
  },
  {
    icon: BarChart3,
    title: 'ACGME Fellowship & Interventional Competency',
    description: 'Annual ACGME pain medicine fellowship program compliance (if fellowship-training program) — case log minimums, faculty credentials, and educational outcomes, annual interventional pain procedure competency documentation for all pain NPs and PAs — epidural steroid injection, facet joint injection, medial branch block, radiofrequency ablation, SCS trial, and intrathecal drug delivery (IDDS) annual competency, annual IDDS pump refill and programming annual competency for all providers managing implanted intrathecal pumps, annual Medtronic/Abbott/Boston Scientific SCS and IDDS annual clinical training update, and annual fluoroscopy C-arm annual competency for interventional procedure guidance.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'DEA Renewal Audit & ER/LA Opioid REMS Training',
    tasks: [
      'Annual DEA registration status audit for all prescribing physicians, NPs, and PAs — identify all staff due for 3-year DEA renewal within next 12 months and initiate renewal process ≥60 days before expiration',
      'Annual ER/LA Opioid REMS prescriber training completion verification — confirm all prescribers have completed required annual REMS CE (AMA/ACCME accredited REMS education modules)',
      'Annual TIRF REMS enrollment status audit — confirm all prescribers with current TIRF REMS enrollment for fentanyl transmucosal products',
      'Annual state PDMP mandatory query requirement update review — confirm clinic workflows comply with updated state PDMP query frequency requirements',
      'Annual HIPAA training for all pain management clinic clinical and administrative staff',
      'Annual OIG/LEIE exclusion checks for all pain management clinic staff and vendors',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'UDS Compliance Audit & Naloxone Co-Prescription',
    tasks: [
      'Q1 urine drug screen (UDS) and opioid treatment agreement (OTA) compliance audit — confirm ≥90% of opioid patients have current OTA and annual UDS documentation',
      'Q1 naloxone co-prescription rate audit — confirm ≥90% of patients on ≥50 MME/day have naloxone co-prescribed and patient counseling documented',
      'Annual CDC 2022 Guideline annual review — update all pain clinic opioid prescribing protocols per current CDC guidance on MME thresholds, prescription duration, and risk stratification',
      'Annual state controlled substance prescribing regulation annual review — update clinic protocols for any new state-specific requirements',
      'Annual DEA Schedule II biennial controlled substance inventory (May 1 biennial inventory deadline) — complete physical inventory of all Schedule II controlled substances with witness documentation',
      'Q1 high-dose opioid prescribing rate review — ≥90 MME/day patients identified for enhanced monitoring, UDS, and risk re-assessment',
    ],
  },
  {
    period: 'May – Jun',
    title: 'AAPM/ASRA Annual Meeting CE & SCS Outcomes',
    tasks: [
      'Annual AAPM Annual Meeting CE documentation — confirm all pain physicians, NPs, and PAs have AAPM annual meeting CE documented',
      'Annual ASRA Annual Regional Anesthesia and Pain Medicine Meeting CE — confirm all interventional pain providers have ASRA meeting CE documented',
      'Annual spinal cord stimulator (SCS) 1-year outcomes audit — ≥50% pain reduction (NICE benchmark) and patient satisfaction documentation for all SCS permanent implants',
      'Annual IDDS pump refill competency documentation — all providers managing intrathecal drug delivery pumps complete annual pump programming and emergency management competency',
      'Annual interventional fluoroscopy safety training for all pain providers performing image-guided procedures — radiation dose minimization, C-arm safety, and contrast media reaction protocol',
      'Annual buprenorphine waiver and DATA 2000 annual training (if clinic also treats OUD with buprenorphine) — annual SAMHSA compliance review',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'ABPM MOC Prep & State Prescribing Compliance',
    tasks: [
      'Annual ABPM (American Board of Pain Medicine) MOC mid-year review — confirm all ABPM-certified pain physicians are on track for December 31 MOC self-assessment module completion',
      'Annual SCS and IDDS device company annual clinical training update — Medtronic, Abbott, Boston Scientific annual pain therapy clinical training documentation',
      'Annual CMS Medicare/Medicaid high-opioid prescribing outlier audit preparation — review clinic prescribing patterns vs. CMS opioid prescribing benchmarks for outlier identification',
      'Q2 UDS and OTA compliance audit — confirm continued ≥90% compliance through June',
      'Annual interventional pain procedure complication rate review — pneumothorax after celiac plexus block, epidural hematoma after epidural injection, infection rate after joint injection',
      'Annual patient functional outcome measures mid-year audit — PROMIS pain intensity, pain interference, and physical function for all chronic pain patients with ≥6 months follow-up',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'Accreditation Prep & TIRF REMS Renewal',
    tasks: [
      'Annual pain clinic TJC or AAAHC accreditation self-assessment (if accredited outpatient pain clinic) — compile all required documentation for potential unannounced survey',
      'Annual TIRF REMS program renewal — confirm enrollment for all transmucosal fentanyl-prescribing providers and patient TIRF REMS enrollment documentation',
      'Annual state controlled substance prescribing CE requirement audit — confirm all prescribers have completed state-mandated opioid prescribing CE hours (varies by state: 1–8 hours annually)',
      'Annual naloxone standing order annual review — update patient and caregiver naloxone dispensing protocol per current CDC and state guidelines',
      'Annual IDDS annual pump battery life audit — confirm all implanted intrathecal pumps have documented battery life projection and replacement planning within 18-month lead time',
      'Q3 high-dose opioid and naloxone co-prescription compliance audit — quarterly review vs. clinic targets',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End ABPM MOC & DEA Inventory',
    tasks: [
      'Annual ABPM MOC December 31 deadline — confirm all ABPM-certified pain physicians have completed all required MOC components including annual self-assessment module',
      'Annual DEA Schedule II biennial controlled substance inventory (November 1 biennial inventory deadline) — complete physical inventory documentation with witness signatures',
      'Annual pain management clinic quality improvement annual report — compile opioid prescribing metrics, UDS compliance rates, naloxone co-prescription rates, SCS outcomes, and patient functional improvement data',
      'Annual ER/LA Opioid REMS annual training planning for next year — schedule all REMS CE completion for all prescribers for upcoming year',
      'Annual state PDMP system access renewal (select states require annual clinician re-enrollment in PDMP)',
      'Annual pain clinic patient satisfaction survey annual results review — compile patient experience data for quality program and accreditation file',
    ],
  },
]

const kpis = [
  { metric: '≥90%', label: 'UDS & Opioid Treatment Agreement Compliance', description: 'Pain clinic risk management standard — below 90% OTA and UDS compliance triggers mandatory DEA diversion investigation risk and state medical board audit exposure' },
  { metric: '≥90%', label: 'Naloxone Co-Prescription Rate (≥50 MME/day)', description: 'CDC 2022 Guideline recommendation — below 90% co-prescription rate for high-dose opioid patients triggers CDC opioid prescribing outlier designation' },
  { metric: '100%', label: 'PDMP Query Compliance', description: 'State law requirement in 41 states — any dispensing without PDMP query triggers mandatory reporting to state medical board and DEA diversion investigation risk' },
  { metric: 'Dec 31', label: 'ABPM MOC Annual Deadline', description: 'ABPM annual MOC requirement — missed self-assessment module triggers ABPM certification probation and potential loss of board certification status' },
  { metric: '≤90 MME', label: 'Daily Opioid Dose Caution Threshold', description: 'CDC 2022 high-risk MME threshold — above 90 MME/day triggers mandatory enhanced monitoring, UDS, and patient risk re-assessment documentation' },
  { metric: '100%', label: 'ER/LA Opioid REMS Annual Training', description: 'FDA REMS requirement for all ER/LA opioid prescribers — failure to complete annual training triggers FDA REMS program prescribing restriction and DEA notification' },
]

const testimonial = {
  quote: 'Pain management clinic compliance runs on DEA 3-year renewal cycles, state PDMP mandatory query tracking, ER/LA Opioid REMS annual training, TIRF REMS enrollment maintenance, December ABPM MOC deadlines, quarterly UDS and OTA compliance audits, naloxone co-prescription rate monitoring, CDC 2022 guideline annual protocol updates, and Schedule II biennial inventory — all simultaneously. Momenties mapped every deadline. Our clinic achieved 100% PDMP compliance and ≥95% naloxone co-prescription rate for high-dose patients for three consecutive years.',
  author: 'Pain Medicine Medical Director, MD, ABPM, FAAPM',
  role: 'Comprehensive Pain Management Clinic, Academic Anesthesia Department',
}

export default function PainManagementClinicCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Pain Management Clinics"
        title="DEA Renewal. PDMP Compliance. REMS Training. ABPM MOC. One Calendar."
        subtitle="Pain management clinic compliance is a year-round, multi-regulator discipline — DEA 3-year renewal cycles, state PDMP mandatory query compliance, ER/LA Opioid REMS annual training, TIRF REMS enrollment, December ABPM MOC deadlines, quarterly UDS compliance audits, naloxone co-prescription monitoring, and CDC 2022 guideline annual protocol reviews. Momenties maps every DEA, FDA, state, and CMS deadline so your clinic achieves 100% controlled substance compliance year after year."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Pain Management Clinic Compliance Coverage
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
              12-Month Pain Management Clinic Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January DEA renewal audit through December ABPM MOC deadline &mdash; every DEA, FDA REMS, state PDMP, and CMS milestone mapped.
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
            The KPIs DEA, FDA, and State Boards Measure Your Pain Clinic By
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
        headline="Ready for 100% DEA and PDMP Compliance?"
        subtext="Join pain management clinics using Momenties to automate every DEA, FDA REMS, state PDMP, and ABPM MOC deadline. Free to start."
      />
    </main>
  )
}
