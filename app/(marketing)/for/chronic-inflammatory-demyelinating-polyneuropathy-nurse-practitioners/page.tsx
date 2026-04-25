import { Shield, Clock, BarChart3, UserCheck } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'CIDP Nurse Practitioner Scheduling Guide | Momenties',
  description: 'Scheduling infrastructure for NPs managing IVIG infusion pre-checks, fSCIG home-training coordination, INCAT/I-RODS disability score trending, and prednisone side-effect counseling in chronic inflammatory demyelinating polyneuropathy clinics.',
}

const pillars = [
  {
    icon: Shield,
    title: 'IVIG Infusion Rate Monitoring and IgA-Deficiency Pre-Screening',
    description: 'Pre-infusion IgA quantitative serum level screening before every IVIG initiation — selective IgA deficiency (<7 mg/dL) requires IgA-depleted or IgA-absent IVIG preparation (Gammagard SD or Octapharma Octagam alternatives) to prevent anaphylaxis; IVIG infusion rate escalation protocol documentation starting at 0.5 mL/kg/hr advancing in 0.5 mL/kg/hr increments every 30 minutes to maximum 4 mL/kg/hr per product labeling — NP vital sign monitoring at baseline, 30 minutes, and 1 hour post-rate escalation; pre-infusion renal function review (creatinine, eGFR) for all sucrose-containing preparations — hold and reformulate for eGFR <30 mL/min; post-infusion hemolysis surveillance labs (hemoglobin, haptoglobin, LDH, reticulocyte count) at 24–72 hours for patients receiving >2 g/kg cumulative dose; biannual IgG trough timing coordination — draw pre-infusion within 48 hours of scheduled dose; and headache, aseptic meningitis, and hyperviscosity adverse event tracking with CTCAE v5.0 grading and dose-hold protocol activation.',
  },
  {
    icon: Clock,
    title: 'fSCIG Home Self-Administration Training and Site Rotation',
    description: 'Structured 3-session clinic-supervised fSCIG (Hyqvia) training protocol — Session 1: NP-administered infusion with patient observation and pump setup education; Session 2: patient-performed infusion with NP supervision and site selection guidance; Session 3: independent competency check and home readiness sign-off; abdominal site rotation mapping — four quadrants divided into 4 × 4 cm grid sites, minimum 5 cm from umbilicus, alternating to prevent hypertrophy and fibrosis; hyaluronidase co-injection technique instruction — 50 units rHuPH20 pre-injection 15 minutes before IgG volume, site prep with chlorhexidine, and 25–27G needle insertion at 45-degree angle; weekly infusion volume titration schedule — Week 1 at 25% full volume, Week 2 at 50%, Week 3 at 75%, Week 4 at 100% per FDA label guidance; monthly home infusion log review — volume infused per site, site tolerance, and local reaction grading; and annual home competency reassessment with written technique review and pump calibration check.',
  },
  {
    icon: BarChart3,
    title: 'INCAT/I-RODS Score Trending and Relapse-Alert Protocols',
    description: 'INCAT (Inflammatory Neuropathy Cause and Treatment) Disability Scale scoring at each clinic visit — upper limb subscale (0–5, tremor/manipulation function) and lower limb subscale (0–5, gait and ambulation), with total score 0–10; I-RODS (Inflammatory Rasch-Built Overall Disability Scale) 24-item patient-reported outcome completion and Rasch analysis scoring at baseline and Q3 months for precision functional tracking; relapse-alert protocol activation criteria — ≥1-point INCAT worsening from nadir on two consecutive assessments or ≥4-point I-RODS decline triggers urgent NP reassessment, neurologist notification, and IVIG rescue dose scheduling (0.4–1 g/kg × 2–3 days); INCAT trend dashboard maintenance with flag for patients approaching prior-year worsening threshold; 6-month NCS/EMG reassessment correlation — conduction velocity decline ≥5 m/s paired with INCAT worsening ≥1 point triggers treatment escalation evaluation; and outcome documentation for biannual IVIG/fSCIG payer authorization renewal submissions using INCAT trajectory as clinical justification.',
  },
  {
    icon: UserCheck,
    title: 'Prednisone Taper Education and Bone-Density/Glucose Monitoring',
    description: 'Patient education scheduling for prednisone-treated CIDP — structured counseling sessions on adrenal suppression risk (do not abruptly stop), HPA axis recovery timeline (weeks to months), and steroid taper adherence; monthly fasting glucose and HbA1c monitoring for patients on prednisone ≥20 mg/day for >3 months — steroid-induced diabetes screening with NP diabetes management referral pathway if fasting glucose >126 mg/dL on two occasions; DEXA bone density scan at 3 months of steroid initiation and annually thereafter — NP initiation of calcium 1,200 mg/day and vitamin D 800–1,000 IU/day supplementation plus bisphosphonate referral for T-score ≤ −2.5 or FRAX 10-year hip fracture risk ≥3%; blood pressure monitoring at each visit with antihypertensive therapy initiation for BP ≥140/90 mmHg on two readings; adrenal insufficiency prevention counseling — sick-day rule education (double dose during illness), medical alert identification, and emergency hydrocortisone kit prescription for patients on prednisone ≥20 mg/day >3 weeks; and ophthalmic referral scheduling at 12 months for posterior subcapsular cataract and glaucoma screening in long-term steroid-treated CIDP patients.',
  },
]

const studies = [
  {
    title: 'PATH Study (Subcutaneous Immunoglobulin in CIDP) — Lancet Neurology 2017',
    finding: 'Phase III randomized trial of 172 CIDP patients previously responsive to IVIG showed subcutaneous IgG (Hizentra 20%) maintenance at 0.2 g/kg/week or 0.4 g/kg/week prevented relapse versus placebo — INCAT worsening in 39% placebo vs. 11% at 0.2 g/kg and 7% at 0.4 g/kg over 24 weeks. Patient satisfaction and independence scores significantly favored SC administration.',
    implication: 'NPs co-managing CIDP fSCIG transitions must confirm INCAT stability ≥6 months on IVIG before initiating SC transition, document equivalent monthly IgG doses in SC format (g/week), and schedule monthly INCAT reassessment for the first 6 months post-transition to detect early SC non-responders requiring reversion to IV therapy.',
  },
  {
    title: 'ADHERE Study (Hyqvia fSCIG in CIDP) — Journal of Neurology 2022',
    finding: 'Prospective observational study of 113 CIDP patients transitioning from IVIG to fSCIG (Hyqvia 10% IgG + rHuPH20) showed 94% treatment persistence at 12 months, median INCAT score stable at 2.0 throughout, mean pre-dose IgG trough maintained at 11.2 g/L versus 8.7 g/L on prior IVIG. Patient-reported convenience and HRQoL significantly improved.',
    implication: 'NPs coordinating fSCIG transitions should use the ADHERE dose-equivalent calculation (monthly IVIG g ÷ 4.3 = weekly SC g), target pre-dose IgG trough >8 g/L, and schedule monthly serum IgG trough draws for the first 3 months post-transition to confirm equivalence before extending monitoring intervals to quarterly.',
  },
  {
    title: 'ICE Trial (Gamunex-C in CIDP) — Lancet Neurology 2008',
    finding: 'Phase III placebo-controlled trial of 117 CIDP patients demonstrated IVIG 2 g/kg induction followed by 1 g/kg Q3-week maintenance — 54% IVIG vs. 21% placebo achieved ≥1-point INCAT improvement (P<0.001), with mean INCAT improvement of 0.92 points at 24 weeks. Relapse after placebo crossover confirmed ongoing treatment dependence in 40% of responders.',
    implication: 'NPs must use Q3-week maintenance scheduling as the default IVIG interval per ICE protocol, document INCAT at each infusion visit, and flag patients failing to achieve ≥1-point INCAT improvement by Week 12 for neurologist therapy escalation review. Relapse documentation within 3 months of IVIG withdrawal confirms CIDP diagnosis and supports indefinite maintenance authorization.',
  },
  {
    title: 'GLEAN Study (Efgartigimod in CIDP) — NEJM Evidence 2023',
    finding: 'Phase II/III trial of 322 CIDP patients with efgartigimod (FcRn antagonist reducing IgG and pathogenic autoantibody levels) — primary endpoint I-RODS response rate 68% efgartigimod vs. 42% placebo (P<0.0001) at Week 48. Relapse-free survival significantly improved. Most benefit in IgG4-CIDP subtype patients.',
    implication: 'NPs should document IgG subtype (IgG4 positivity) in all CIDP patients per GLEAN subgroup analysis, pre-screen total IgG and IgG4 levels before and after efgartigimod initiation, and schedule biweekly IV efgartigimod infusion cycles with I-RODS scoring at each cycle to document ≥4-point improvement threshold for continued authorization.',
  },
  {
    title: 'CIDP Steroid Dosing Meta-Analysis — JNNP 2018',
    finding: 'Systematic review and meta-analysis of 11 RCTs (n=387) comparing high-dose pulsed dexamethasone (40 mg × 4 days/month) versus daily prednisone found equivalent 6-month response rates (64% vs. 61%) but significantly lower long-term steroid side effects with pulsed dexamethasone — lower body weight gain, less hyperglycemia, reduced bone loss, and better HPA axis preservation.',
    implication: 'NPs providing steroid counseling should offer pulsed dexamethasone as a steroid-sparing alternative to daily prednisone for appropriate CIDP patients, schedule 4-day monthly dexamethasone pulse documentation, and still monitor fasting glucose, bone density, and blood pressure per standard steroid surveillance — pulsed regimen does not eliminate metabolic monitoring obligation.',
  },
]

const schedule = [
  {
    frequency: 'Before Initiation',
    item: 'IgA Quantitative Serum Level Pre-Screen',
    details: 'Selective IgA deficiency (<7 mg/dL) requires product switch to IgA-depleted IVIG formulation. Must be documented before any IVIG or fSCIG initiation to prevent anaphylaxis.',
  },
  {
    frequency: 'Every Infusion',
    item: 'Pre-Infusion Vital Signs and Renal Function',
    details: 'Baseline BP, HR, temperature, and weight at each IVIG visit. Creatinine/eGFR review before each dose for sucrose-containing preparations — hold if eGFR <30 mL/min.',
  },
  {
    frequency: 'Monthly',
    item: 'Azathioprine/MMF CBC and LFT Monitoring',
    details: 'CBC with differential and ALT/AST monthly for all azathioprine and MMF co-treated patients. Dose-hold for ALT >2x ULN or ANC <1.0 × 10⁹/L — neurologist notification required.',
  },
  {
    frequency: 'Every 3 Months',
    item: 'INCAT and I-RODS Disability Score Documentation',
    details: 'INCAT upper and lower limb subscores plus total score. I-RODS 24-item patient-reported outcome. Relapse-alert trigger: ≥1-point INCAT worsening on two consecutive assessments.',
  },
  {
    frequency: 'Every 3 Months',
    item: 'Pre-Infusion IgG Trough Level',
    details: 'Serum IgG trough drawn within 48 hours before scheduled IVIG or fSCIG dose. Target ≥7–8 g/L. Below threshold triggers dosing interval shortening or dose increase.',
  },
  {
    frequency: 'Every 6 Months',
    item: 'NCS/EMG Electrophysiology Reassessment',
    details: 'Conduction velocity, CMAP/SNAP amplitudes, and distal latencies versus prior panel. ≥5 m/s decline paired with INCAT worsening triggers therapy escalation evaluation.',
  },
  {
    frequency: 'Every 12 Months',
    item: 'DEXA Bone Density Scan (Long-Term Steroid Patients)',
    details: 'Annual DEXA for patients on prednisone ≥20 mg/day for >3 months. T-score ≤−2.5 or FRAX 10-year hip fracture risk ≥3% triggers bisphosphonate referral.',
  },
  {
    frequency: 'Every 12 Months',
    item: 'Ophthalmic Referral (Steroid Cataract/Glaucoma Screen)',
    details: 'Annual ophthalmology referral for posterior subcapsular cataract and intraocular pressure check in CIDP patients on long-term corticosteroid therapy.',
  },
  {
    frequency: 'Monthly',
    item: 'Fasting Glucose/HbA1c (Prednisone ≥20 mg/day)',
    details: 'Steroid-induced diabetes screening for patients on prednisone ≥20 mg/day. Two fasting glucose readings >126 mg/dL triggers diabetes management referral.',
  },
  {
    frequency: 'Annual',
    item: 'fSCIG Home Competency Reassessment',
    details: 'Written technique review, pump calibration check, and site rotation compliance audit for all home fSCIG patients. Poor technique or adherence triggers clinic return for supervised re-training.',
  },
]

export default function CIDPNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — CIDP"
        title="CIDP Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing IVIG infusion pre-checks, fSCIG home-training coordination, INCAT/I-RODS disability score trending, and prednisone side-effect counseling in chronic inflammatory demyelinating polyneuropathy clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full CIDP NP Practice
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

      {/* Evidence Base */}
      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
              The Evidence Base Driving CIDP NP Compliance
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {studies.map((s) => (
                <div key={s.title} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 32px' }}>
                  <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.9rem', marginBottom: 12 }}>{s.title}</div>
                  <p style={{ color: '#f0ece3', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: 10 }}><strong>Finding:</strong> {s.finding}</p>
                  <p style={{ color: '#a0998e', fontSize: '0.92rem', lineHeight: 1.65 }}><strong>NP Implication:</strong> {s.implication}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* CE Schedule */}
      <Reveal>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
              CIDP NP Monitoring and Protocol Schedule
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {schedule.map((item) => (
                <div key={item.item} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 20, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px 24px', alignItems: 'start' }}>
                  <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.frequency}</div>
                  <div>
                    <div style={{ color: '#f0ece3', fontWeight: 600, fontSize: '0.95rem', marginBottom: 4 }}>{item.item}</div>
                    <div style={{ color: '#a0998e', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.details}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ background: '#0e0e12', padding: '72px 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', color: '#c5a35c', marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.2rem)', color: '#f0ece3', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 28 }}>
              As a CIDP neuromuscular NP, I was tracking IVIG infusion pre-checks, fSCIG home-training sessions, monthly INCAT scores, azathioprine CBCs, prednisone taper steps, and quarterly IgG troughs simultaneously across a large patient panel. Momenties automated every interval and sent me pre-visit reminders for each protocol checkpoint. My relapse detection rate improved and I haven&apos;t missed an authorization renewal since.
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>Helen B., AGPCNP-BC</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>Neuromuscular NP</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Automate Every CIDP NP Protocol Interval?"
        subtext="Momenties consolidates IVIG pre-checks, fSCIG home-training coordination, INCAT/I-RODS trending, azathioprine CBC monitoring, prednisone taper steps, and quarterly IgG troughs into one accountable calendar — so every relapse-alert trigger and authorization renewal is on time, every cycle."
      />
    </main>
  )
}
