import { TrendingUp, ClipboardList, BarChart3, Shield } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Acromegaly & Pituitary Center Compliance Calendar | Momenties',
  description: 'Automate acromegaly IGF-1 quarterly monitoring, somatostatin analogue dose titration, Pegvisomant weekly dosing, pituitary MRI surveillance, AACE guideline compliance, and multidisciplinary pituitary tumor board scheduling for endocrinology and pituitary centers.',
}

const pillars = [
  {
    icon: TrendingUp,
    title: 'IGF-1 & GH Suppression Monitoring',
    description: 'Quarterly serum IGF-1 (insulin-like growth factor 1) measurement against age- and sex-matched normative ranges per AACE/ACE 2014 acromegaly guidelines — disease control target IGF-1 within normal range for age plus random GH <1.0 ng/mL (ultrasensitive assay) or glucose-suppressed GH nadir <0.4 ng/mL on 75 g OGTT; monthly GH and IGF-1 during dose titration of somatostatin receptor ligands (SRLs) — lanreotide (Somatuline Depot) 60–120 mg SC q28d and octreotide LAR (Sandostatin LAR) 10–40 mg IM q28d; monthly liver function panel during pegvisomant (Somavert) therapy with IGF-1 target of normal-range IGF-1 for age; and annual 2-hour OGTT GH suppression test for disease remission confirmation in post-operative patients. Biochemical control defined as age-normalized IGF-1 AND random GH <1.0 ng/mL driving all treatment escalation and de-escalation decisions.',
  },
  {
    icon: ClipboardList,
    title: 'Somatostatin Analogue & Pegvisomant Compliance',
    description: 'Monthly lanreotide autogel (Somatuline Depot) 120 mg deep SC injection compliance documentation — injection site rotation, tolerability (GI symptoms, injection site reactions), and gallstone surveillance; monthly octreotide LAR 20–30 mg deep IM injection scheduling with dose titration per quarterly IGF-1 response (increase if IGF-1 still elevated after 3 months at current dose); weekly pegvisomant (Somavert) 10–30 mg SC daily-to-weekly dose escalation — required monthly IGF-1 (targeting low-normal range), liver transaminases (ALT/AST ≤3x ULN throughout therapy), and annual pituitary MRI to monitor tumor volume (pegvisomant carries theoretical risk of tumor enlargement without GH feedback suppression); biannual echocardiogram for valvular disease monitoring in long-term SRL-treated patients; and annual biliary ultrasound for cholesterol gallstone surveillance (15–40% incidence with SRL therapy at 12–24 months).',
  },
  {
    icon: BarChart3,
    title: 'Pituitary MRI & Tumor Board Surveillance',
    description: 'Annual pituitary-protocol MRI (T1 gadolinium-enhanced, 3mm coronal slices with dynamic and delayed sequences) for tumor size assessment, residual adenoma volume measurement, and cavernous sinus invasion grading per Knosp classification (0–4); post-operative MRI at 12 weeks and 6 months to assess surgical resection extent and confirm remission; biannual pituitary MRI during pegvisomant therapy given lack of GH feedback on tumor lactotroph/somatotroph cells; monthly multidisciplinary pituitary tumor board (endocrinology, neurosurgery, radiation oncology, ophthalmology, neuroradiology) with case presentation for all newly diagnosed, post-operative, and biochemically uncontrolled patients; annual visual field testing (Humphrey 24-2 or 30-2 automated perimetry) and formal ophthalmology review for macroadenoma patients with suprasellar extension; and quarterly prolactin, TSH, free T4, cortisol (8 AM), ACTH, LH/FSH, testosterone/estradiol panel for concurrent hypopituitarism surveillance.',
  },
  {
    icon: Shield,
    title: 'Comorbidity & AACE Guideline Compliance',
    description: 'Annual cardiac evaluation — echocardiogram for left ventricular hypertrophy (LVH), diastolic dysfunction, and valvular disease (acromegaly cardiomyopathy affects 80% of patients) with repeat at 6-month intervals until biologically controlled; annual colonoscopy for colorectal neoplasia surveillance (relative risk 2–3x general population per Melmed et al.); annual HbA1c and fasting glucose for diabetes mellitus screening (30–56% of acromegaly patients); annual pulmonary function tests (spirometry + DLCO) and sleep study for sleep apnea assessment (occurring in 60–80% of active acromegaly); annual joint assessment (hand and jaw radiographs) for acromegalic arthropathy progression; annual bone mineral density (DXA scan) for osteoporosis surveillance; annual thyroid ultrasound given 3–5x higher risk of thyroid nodules; AACE/ACE biennial guideline compliance audit; and annual patient-reported quality of life assessment (AcroQoL questionnaire) to document symptom burden reduction under treatment.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Q1 IGF-1 Panel & Comorbidity Screening Launch',
    tasks: 'Draw Q1 serum IGF-1, random GH, and comprehensive metabolic panel for all active acromegaly patients. Complete annual HbA1c and fasting glucose for diabetes mellitus screening. Initiate annual echocardiogram scheduling for all biologically uncontrolled patients. Audit pegvisomant cohort — verify monthly IGF-1 and ALT/AST were completed in December/January and confirm dose remains appropriate.',
  },
  {
    phase: 'February',
    title: 'Annual Pituitary MRI & Neurosurgery Review',
    tasks: 'Schedule and complete annual pituitary-protocol MRI for all patients in long-term medical therapy (SRLs or pegvisomant). Present all post-operative and newly diagnosed cases at monthly multidisciplinary pituitary tumor board. Complete annual formal ophthalmology review and Humphrey visual field testing for all macroadenoma patients. Document Knosp classification for cavernous sinus invasion in all active adenoma patients.',
  },
  {
    phase: 'March',
    title: 'Q1 Dose Titration Decisions & Gallstone Audit',
    tasks: 'Review Q1 IGF-1 results — escalate lanreotide to 120 mg or octreotide LAR to 30–40 mg in patients with persistently elevated IGF-1 after 3 months at current dose. Initiate annual biliary ultrasound scheduling for all SRL-treated patients. Confirm octreotide LAR and lanreotide injection site documentation and rotation compliance. Audit biannual echocardiogram schedule for all long-term SRL patients.',
  },
  {
    phase: 'April',
    title: 'Sleep Apnea & Pulmonary Assessment',
    tasks: 'Complete annual polysomnography or home sleep apnea test for all active acromegaly patients not yet in remission (60–80% prevalence). Perform annual spirometry and DLCO pulmonary function testing. Review CPAP compliance in previously diagnosed sleep apnea patients. Update comorbidity registry with sleep apnea severity grading and treatment status for AACE outcomes benchmarking.',
  },
  {
    phase: 'May',
    title: 'Q2 IGF-1 & Pituitary Hormone Axis Panel',
    tasks: 'Draw Q2 serum IGF-1 and random GH for all patients on medical therapy. Complete semi-annual full pituitary axis panel — 8 AM cortisol/ACTH, TSH/free T4, prolactin, LH/FSH, testosterone (male) or estradiol (female) for hypopituitarism surveillance. Initiate growth hormone replacement therapy dose adjustments for hypopituitary patients using IGF-1 mid-normal targeting. Document hormone replacement compliance.',
  },
  {
    phase: 'June',
    title: 'Annual Colonoscopy & Colorectal Surveillance',
    tasks: 'Complete annual colonoscopy for colorectal neoplasia surveillance in all biologically active patients and high-risk (active disease >10 years). Review Q2 IGF-1 trends and document at pituitary tumor board. Present all pegvisomant patients — review liver function panel trends, confirm IGF-1 is in normal range for age, and audit tumor MRI schedule for any patient without biannual scan. Compile H1 outcomes report.',
  },
  {
    phase: 'July',
    title: 'Q3 IGF-1 & Bone Health Assessment',
    tasks: 'Draw Q3 serum IGF-1 and random GH. Complete annual DXA bone density scan for osteoporosis surveillance in patients with hypogonadism or prolonged active disease. Perform annual joint assessment with hand and jaw radiographs for acromegalic arthropathy. Review calcium, phosphorus, and vitamin D levels. Prescribe bisphosphonate or denosumab for osteoporosis per Endocrine Society guidelines if T-score ≤ -2.5.',
  },
  {
    phase: 'August',
    title: 'Annual Thyroid Ultrasound & Nodule Surveillance',
    tasks: 'Complete annual thyroid ultrasound for all acromegaly patients given 3–5x elevated thyroid nodule risk. Review thyroid nodule registry and schedule FNA for ACR TI-RADS 4–5 nodules. Assess TSH and free T4 for central hypothyroidism in hypopituitary patients — adjust levothyroxine to maintain free T4 in mid-normal range. Document AcroQoL quality of life scores and compare to prior annual assessment.',
  },
  {
    phase: 'September',
    title: 'Q4 Preparation & AACE Guidelines Compliance Audit',
    tasks: 'Draw Q3/Q4 serum IGF-1 and initiate annual AACE/ACE acromegaly guideline compliance review. Audit all patients for completion of annual comorbidity screening checklist (echo, colonoscopy, DXA, thyroid US, sleep study, visual fields). Schedule Q4 lanreotide and octreotide LAR injections. Begin annual AcroQoL symptom burden documentation. Update pituitary tumor database for program benchmarking.',
  },
  {
    phase: 'October',
    title: 'Post-operative Patient Annual Assessment',
    tasks: 'Complete annual 2-hour OGTT GH suppression test for all post-operative patients to confirm sustained remission (glucose-suppressed GH nadir <0.4 ng/mL). Review 12-month post-operative pituitary MRI results at tumor board. Document surgical cure rates, biochemical remission rates, and recurrence data for program quality reporting. Audit hypopituitarism prevalence and hormone replacement compliance in post-operative cohort.',
  },
  {
    phase: 'November',
    title: 'Annual Cardiac Outcomes & Echocardiogram Review',
    tasks: 'Complete annual echocardiogram cycle for all patients — review LV mass index, ejection fraction, diastolic function, and valvular disease trends. Cardiology co-management referral for patients with LVH or diastolic dysfunction. Document cardiovascular risk factor control (blood pressure, HbA1c, lipids). Review statin and antihypertensive compliance in high-risk patients. Compile annual cardiovascular outcomes data.',
  },
  {
    phase: 'December',
    title: 'Annual Center Report & Next-Year Planning',
    tasks: 'Compile annual acromegaly center outcomes report — biochemical control rates (IGF-1 normal), surgical cure rates, comorbidity burden reduction, and quality of life improvements. Review AACE guideline compliance audit findings. Plan next-year injection schedules for all SRL patients. Submit program outcomes to national pituitary disease registry. Brief all clinical staff on any AACE guideline updates for the coming year.',
  },
]

const kpis = [
  { metric: '≥60%', label: 'Biochemical Control Rate (Normal IGF-1)' },
  { metric: '≥50%', label: 'Surgical Cure Rate (Post-Op GH Nadir <0.4)' },
  { metric: '100%', label: 'Annual Cardiac Echo Compliance' },
  { metric: '≥80%', label: 'Sleep Apnea Screening Completion' },
  { metric: '100%', label: 'Annual Colonoscopy in Active Disease' },
  { metric: 'Quarterly', label: 'IGF-1 Monitoring on Medical Therapy' },
]

const testimonial = {
  quote: 'Managing a pituitary center means tracking quarterly IGF-1 titrations for SRL and pegvisomant cohorts, annual cardiac echos, annual colonoscopies, pituitary-protocol MRI every 6–12 months, monthly multidisciplinary tumor board, biliary ultrasound for gallstone surveillance, annual DXA, annual thyroid ultrasound, sleep study scheduling, and AACE guideline audits — simultaneously across a panel of 200+ patients. Momenties automated every interval. Our biochemical control rate reached 68% and our annual screening completion hit 97% across all comorbidity domains.',
  author: 'Pituitary Program Director',
  role: 'Endocrinology & Pituitary Center, Academic Medical Center',
}

export default function AcromegalyCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Acromegaly & Pituitary Center Calendar"
        title="Every IGF-1 Titration. Every MRI. Every Comorbidity Screen."
        subtitle="Pituitary centers managing acromegaly face one of endocrinology's most protocol-dense compliance portfolios — quarterly IGF-1 monitoring, monthly SRL and pegvisomant dose adjustments, annual cardiac echocardiograms, colonoscopies, pituitary MRI surveillance, multidisciplinary tumor board scheduling, and AACE guideline compliance audits. Momenties automates every deadline so your team achieves top-tier biochemical control and comorbidity outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Acromegaly Center Compliance Lifecycle
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
              The Acromegaly Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every IGF-1 draw, SRL injection, pituitary MRI, comorbidity screening interval, and AACE compliance audit — sequenced across 12 months.
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
              The 6 KPIs That Define Acromegaly Program Excellence
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
        headline="Ready to Achieve ≥60% Biochemical Control in Your Acromegaly Program?"
        subtext="Join pituitary centers using Momenties to automate every IGF-1 titration, SRL injection, pituitary MRI, and comorbidity screening deadline. Free to start."
      />
    </main>
  )
}
