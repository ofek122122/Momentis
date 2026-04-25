import { Stethoscope, ClipboardList, BarChart3, Shield, Bell, Heart, TrendingUp } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Hypoparathyroidism Center Compliance Calendar | Momenties',
  description: 'Automate hypoparathyroidism PTH/calcium/phosphorus monitoring cycles, PTH 1-84 (Natpara) REMS compliance, calcitriol/calcium supplementation titration intervals, 24-hour urine calcium surveillance, renal function tracking, DEXA bone density scheduling, and endocrinology center reporting deadlines.',
}

const pillars = [
  {
    icon: Stethoscope,
    title: 'PTH 1-84 (Natpara) REMS & Dosing Compliance',
    description: 'Rhyptrope-REMS (Risk Evaluation and Mitigation Strategy) documentation for every patient prescribed natpara (PTH 1-84) — mandatory prescriber and pharmacy enrollment, monthly patient counseling attestation regarding osteosarcoma risk, and quarterly outpatient visit verification; natpara 50–100 mcg SC once daily titration documentation with albumin-corrected serum calcium target 8–9 mg/dL (below normal range per label); dose adjustment intervals — increase by 25 mcg q2–4 weeks if calcium <7.5 mg/dL or patient symptomatic; decrease or hold if albumin-corrected calcium >9 mg/dL; weekly serum calcium and magnesium during titration for first 3 months; concomitant active vitamin D (calcitriol) dose reduction 50% when natpara initiated to prevent hypercalcemia; annual DEXA bone density scan at lumbar spine and hip (natpara increases BMD at trabecular sites but risk of osteosarcoma requires annual surveillance); and lifetime natpara REMS patient registry enrollment with adverse event reporting.',
  },
  {
    icon: ClipboardList,
    title: 'Serum Calcium, Phosphorus & Magnesium Monitoring Cycles',
    description: 'Chronic hypoparathyroidism biochemical monitoring — albumin-corrected serum calcium target 8–9 mg/dL (conventional therapy) or 8–9 mg/dL (natpara); serum phosphorus target 2.5–4.5 mg/dL; calcium-phosphorus product <55 mg²/dL² to reduce soft tissue and renal calcification risk; serum magnesium >0.8 mmol/L (hypomagnesemia impairs PTH secretion in residual chief cells and reduces calcitriol efficacy); albumin-corrected calcium and phosphorus weekly during dose titration, monthly once stable; quarterly ionized calcium during stable therapy; 24-hour urine calcium <300 mg/day (men) or <250 mg/day (women) to detect hypercalciuria and guide calcitriol/thiazide diuretic dose adjustment; quarterly urine calcium-to-creatinine ratio; annual renal ultrasound or CT for nephrocalcinosis and nephrolithiasis surveillance; and quarterly parathyroid hormone-related protein (PTHrP) if concurrent malignancy suspected.',
  },
  {
    icon: Shield,
    title: 'Calcitriol & Calcium Supplementation Protocol Management',
    description: 'Calcitriol (1,25-dihydroxyvitamin D3) titration — initial dose 0.25–0.5 mcg BID with individualized upward titration targeting normocalcemia; monthly serum calcium, phosphorus, and creatinine during titration; reduce calcitriol 50% when natpara is initiated; calcium carbonate or calcium citrate supplementation 1,000–3,000 mg elemental calcium daily in divided doses with meals (carbonate) or independent of meals (citrate, preferred post-gastric bypass); quarterly phosphate-to-calcium ratio to guide oral calcium dose adjustment; thiazide diuretic (hydrochlorothiazide 25–50 mg or chlorthalidone) initiation trigger: 24-hour urine calcium >300 mg/day despite adequate calcitriol titration; monthly sodium and potassium monitoring if thiazide added; vitamin D3 (cholecalciferol) 1,000–3,000 IU daily for 25-OH vitamin D repletion target 30–50 ng/mL; quarterly 25-OH vitamin D levels; and annual aBMD DEXA with vertebral fracture assessment (VFA) for osteopenia/osteoporosis surveillance in chronic hypoparathyroidism.',
  },
  {
    icon: BarChart3,
    title: 'Renal Function & Nephrocalcinosis Surveillance',
    description: 'Chronic calcitriol therapy renal protection protocols — quarterly serum creatinine, BUN, and eGFR trending (CKD progression accelerated by recurrent hypercalciuria); annual renal ultrasound for nephrocalcinosis grading (Grade I–III cortical vs. medullary) and nephrolithiasis detection; quarterly urine protein-to-creatinine ratio for early CKD proteinuria surveillance; thiazide/amiloride initiation decision tree based on 24-hour urine calcium, eGFR, and blood pressure; annual ophthalmology referral for posterior subcapsular cataracts (calcitriol-associated); brain CT or MRI every 2–3 years for basal ganglia calcifications (Fahr syndrome association) in longstanding hypoparathyroidism; quarterly serum magnesium (hypomagnesemia-induced calcitriol resistance); annual PTH reference lab repeat for classification confirmation (post-surgical vs. autoimmune APS-1 vs. 22q11.2 deletion DiGeorge); and AACE/Endocrine Society annual monitoring checklist completion.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual Natpara REMS Registry & DEXA Scheduling',
    tasks: 'Complete annual natpara REMS patient registry attestations and osteosarcoma risk counseling documentation for all PTH 1-84 patients. Schedule annual DEXA bone density scans (lumbar spine + hip + distal radius) for all chronic hypoparathyroidism patients on calcitriol >1 year. Review Q4 albumin-corrected calcium and urine calcium trends. Update collaborative practice agreement renewals for endocrinologists co-prescribing natpara.',
  },
  {
    phase: 'February',
    title: 'Q1 Biochemical Panel & Natpara Titration Review',
    tasks: 'Complete Q1 serum calcium, phosphorus, magnesium, creatinine, and 25-OH vitamin D panels for all hypoparathyroidism patients. Review natpara dose titration intervals — document albumin-corrected calcium vs. target 8–9 mg/dL. Adjust calcitriol dose for patients with calcium <7.5 mg/dL or >9 mg/dL. Order 24-hour urine calcium for patients on calcitriol >0.5 mcg BID.',
  },
  {
    phase: 'March',
    title: 'Annual Renal Ultrasound & Nephrocalcinosis Grading',
    tasks: 'Schedule annual renal ultrasounds for all patients on calcitriol ≥1 year for nephrocalcinosis and nephrolithiasis surveillance. Grade nephrocalcinosis findings (Grade I–III). Initiate thiazide diuretic workup for patients with 24-hour urine calcium >300 mg/day (men) or >250 mg/day (women). Review Q1 eGFR trends and initiate nephrology co-management referral for eGFR <60 mL/min.',
  },
  {
    phase: 'April',
    title: 'Q2 Monitoring & Thiazide Response Assessment',
    tasks: 'Complete Q2 serum calcium, phosphorus, magnesium, and ionized calcium panels. For patients initiated on thiazide diuretics in Q1: review sodium, potassium, and 24-hour urine calcium response. Document calcium-phosphorus product (<55 mg²/dL² target). Audit vitamin D3 supplementation compliance and 25-OH vitamin D levels (target 30–50 ng/mL). Schedule ophthalmology referral for patients on calcitriol >3 years.',
  },
  {
    phase: 'May',
    title: 'Autoimmune & Genetic Workup Annual Review',
    tasks: 'Complete annual etiologic classification review — confirm post-surgical vs. autoimmune APS-1 (anti-NALP5 antibodies) vs. 22q11.2 DiGeorge vs. CASR gain-of-function mutation. Order anti-PTH antibody panel for autoimmune hypoparathyroidism not previously classified. Schedule 22q11.2 deletion FISH testing for patients with cardiac or palatal anomalies. Review APS-1 patients for adrenal insufficiency and candidiasis surveillance.',
  },
  {
    phase: 'June',
    title: 'Q2 DEXA Results Review & Fracture Risk Assessment',
    tasks: 'Review Q1/Q2 DEXA results — document T-score and Z-score changes from prior year. Initiate fracture risk counseling (FRAX calculator adjusted for hypoparathyroidism). For natpara patients: confirm BMD improvement at lumbar spine (expected 2–4%/year increase). Review vertebral fracture assessment (VFA) results. Refer patients with T-score < −2.5 to metabolic bone disease specialist for anti-resorptive therapy consideration.',
  },
  {
    phase: 'July',
    title: 'Q3 Biochemical Panel & 24-Hour Urine Calcium',
    tasks: 'Complete Q3 serum calcium, phosphorus, magnesium, creatinine, BUN, eGFR, and urine protein-to-creatinine ratio. Order 24-hour urine calcium collections for all calcitriol patients. Review calcium supplementation dose (elemental calcium 1,000–3,000 mg/day) vs. urine calcium output. Audit thiazide compliance and serum electrolyte monitoring. Document calcium-phosphorus product for all patients.',
  },
  {
    phase: 'August',
    title: 'Neuropsychiatric & Quality-of-Life Assessment',
    tasks: 'Conduct annual neuropsychiatric symptom inventory — cognitive function, anxiety, depression (common in chronic hypoparathyroidism; serum calcium affects CNS function). Administer SF-36 or HPQ (Hypoparathyroidism Patient Questionnaire) quality-of-life assessment. Review symptom burden vs. biochemical control. Schedule brain MRI or CT for patients with neurological symptoms (basal ganglia calcification surveillance). Refer to neurology if Fahr syndrome calcifications identified.',
  },
  {
    phase: 'September',
    title: 'Q3 Review & Calcitriol Optimization Cycle',
    tasks: 'Compile Q3 biochemical trending report for all hypoparathyroidism patients — calcium, phosphorus, magnesium, eGFR, 25-OH vitamin D, 24-hour urine calcium. Optimize calcitriol dose for patients with calcium <7.5 or >9 mg/dL. Audit natpara patients for REMS compliance (prescriber re-enrollment if lapsed). Document all hypercalcemic episodes (calcium >10.5 mg/dL) and emergency department visits.',
  },
  {
    phase: 'October',
    title: 'Annual Ophthalmology & Cardiac Monitoring',
    tasks: 'Confirm annual ophthalmology referrals completed for calcitriol patients — document posterior subcapsular cataract status. For DiGeorge (22q11.2) patients: annual cardiology follow-up for congenital heart defect surveillance and arrhythmia screening (QTc prolongation is common in hypocalcemia). Review Q3 ECG results for QTc interval (goal <450 ms). Initiate magnesium supplementation for patients with Mg2+ <0.8 mmol/L.',
  },
  {
    phase: 'November',
    title: 'Q4 Panel & Next-Year Monitoring Plan',
    tasks: 'Complete Q4 serum calcium, phosphorus, magnesium, creatinine, and 25-OH vitamin D panels. Review annual 24-hour urine calcium results and nephrology co-management status for CKD patients. Draft next-year individualized monitoring plan for each patient — DEXA scheduling, urine calcium intervals, natpara REMS renewals. Audit calcium supplement and calcitriol adherence. Document patient-reported hypocalcemic episodes (paresthesias, tetany, Chvostek/Trousseau signs).',
  },
  {
    phase: 'December',
    title: 'Annual Center Compliance Report & Benchmarking',
    tasks: 'Compile annual hypoparathyroidism center compliance report — calcium target achievement rate, 24-hour urine calcium hypercalciuria rate, renal ultrasound nephrocalcinosis prevalence, DEXA T-score distribution, natpara REMS 100% enrollment rate, emergency hypocalcemia presentation rate, and patient-reported quality-of-life HPQ scores. Submit to AACE quality metrics dashboard. Plan next-year natpara titration cycles and guideline update review.',
  },
]

const kpis = [
  { metric: '≥85%', label: 'Calcium Target Achievement (8–9 mg/dL)' },
  { metric: '<250 mg', label: '24-hr Urine Calcium (Women) Compliance' },
  { metric: '100%', label: 'Natpara REMS Enrollment Rate' },
  { metric: '<20%', label: 'Annual Nephrocalcinosis Progression Rate' },
  { metric: '≥95%', label: 'Annual DEXA Completion Rate' },
  { metric: '≥90%', label: 'Quarterly Biochemical Panel On-Time Rate' },
]

const testimonial = {
  quote: 'Managing hypoparathyroidism requires weekly calcium checks during natpara titration, monthly biochemical panels, quarterly 24-hour urine calcium collections, annual renal ultrasounds, annual DEXA scans, annual ophthalmology referrals, and natpara REMS attestations — all tracked simultaneously across dozens of patients. Momenties put every deadline on one calendar. Our calcium target achievement rate reached 88% and our natpara REMS compliance is now 100%.',
  author: 'Endocrinology Program Director',
  role: 'Hypoparathyroidism Center of Excellence, Academic Medical Center',
}

export default function HypoparathyroidismCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Hypoparathyroidism Center Calendar"
        title="Every REMS Attestation. Every Calcium Panel. One Calendar."
        subtitle="Hypoparathyroidism centers manage one of endocrinology's most monitoring-intensive patient populations — weekly calcium checks during natpara titration, monthly biochemical panels, quarterly 24-hour urine calcium surveillance, annual renal ultrasounds, nephrocalcinosis grading, DEXA bone density scheduling, natpara REMS compliance, ophthalmology referrals, and neuropsychiatric assessments. Momenties automates every deadline so your patients maintain calcium targets and avoid chronic calcitriol complications."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Hypoparathyroidism Center Compliance Lifecycle
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

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 12, color: '#f0ece3' }}>
              The Hypoparathyroidism Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every natpara REMS attestation, calcium monitoring interval, urine calcium collection deadline, renal surveillance, and DEXA milestone — sequenced across 12 months.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {timeline.map((item) => (
                <div key={item.phase} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '24px 28px', alignItems: 'start' }}>
                  <div>
                    <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{item.phase}</div>
                    <div style={{ color: '#f0ece3', fontWeight: 600, fontSize: '0.97rem', lineHeight: 1.4 }}>{item.title}</div>
                  </div>
                  <p style={{ color: '#a0998e', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{item.tasks}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
              The 6 KPIs That Define Hypoparathyroidism Program Excellence
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 20 }}>
              {kpis.map((kpi) => (
                <div key={kpi.label} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', fontWeight: 700, color: '#c5a35c', fontFamily: 'Playfair Display, serif', marginBottom: 8 }}>{kpi.metric}</div>
                  <div style={{ fontSize: '0.85rem', color: '#a0998e', lineHeight: 1.4 }}>{kpi.label}</div>
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
              {testimonial.quote}
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>{testimonial.author}</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>{testimonial.role}</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Achieve ≥85% Calcium Target Achievement in Hypoparathyroidism?"
        subtext="Join hypoparathyroidism centers using Momenties to automate every natpara REMS, calcium monitoring cycle, urine calcium deadline, and DEXA scheduling milestone. Free to start."
      />
    </main>
  )
}
