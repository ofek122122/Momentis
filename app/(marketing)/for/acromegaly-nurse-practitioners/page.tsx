import { Shield, Clock, BarChart3, Users2 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Acromegaly Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGACNP-BC and AAENP renewal, acromegaly IGF-1 quarterly monitoring, somatostatin analogue dose titration cycles, pegvisomant weekly dosing, pituitary MRI surveillance, AACE guideline CE, and multidisciplinary tumor board preparation for acromegaly and pituitary disease nurse practitioners.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Endocrinology NP Credentials & AAENP Certification',
    description: 'AGACNP-BC (Adult-Gerontology Acute Care Nurse Practitioner Board Certified) 5-year renewal — 1,000 clinical hours plus 150 CE credits including inpatient endocrine emergency management (pituitary apoplexy, acute adrenal insufficiency) relevant to pituitary adenoma co-management; AAENP (American Association of Endocrine Nurse Practitioners) biennial membership renewal and annual conference CE (15+ endocrinology-specific CE credits available); annual AACE (American Association of Clinical Endocrinology) Annual Meeting or Clinical Endocrinology Update CE for acromegaly, pituitary tumors, and panhypopituitarism; annual Endocrine Society Annual Meeting pituitary disease session CE; and biennial collaborative practice agreement renewal with endocrinologist for somatostatin receptor ligand (lanreotide/octreotide LAR), pegvisomant (Somavert), cabergoline, and pasireotide (Signifor LAR) prescribing and dose titration authority.',
  },
  {
    icon: Clock,
    title: 'IGF-1 & SRL Dose Titration Protocol Compliance',
    description: 'Quarterly serum IGF-1 (against age- and sex-matched reference ranges) and random growth hormone (GH <1.0 ng/mL target on ultrasensitive assay) for all patients on somatostatin receptor ligand (SRL) therapy — lanreotide autogel (Somatuline Depot) 60–120 mg SC q28d or octreotide LAR (Sandostatin LAR) 10–40 mg IM q28d; SRL dose titration algorithm: increase to next dose step if Q3 IGF-1 remains elevated above age-specific upper normal limit after 3 months at current dose; monthly IGF-1 titration for pegvisomant (Somavert) 10–30 mg SC with ALT/AST liver function panel (hold if ALT >3x ULN) and target IGF-1 in low-normal range per manufacturer label; biannual echocardiogram for valvulopathy surveillance in all patients on long-term SRL therapy (15-year data shows preserved cardiac function with SRL vs. untreated acromegaly); and annual OGTT GH suppression test (75 g glucose, GH nadir <0.4 ng/mL = remission criterion) for post-operative NP-managed patients.',
  },
  {
    icon: BarChart3,
    title: 'Pituitary MRI Scheduling & Tumor Board Preparation',
    description: 'Annual pituitary-protocol MRI preparation and results documentation — T1 gadolinium-enhanced with 3 mm coronal dynamic and delayed sequences; Knosp grade recording (0–4 cavernous sinus invasion classification) for all active adenoma patients; post-operative MRI scheduling at 12 weeks and 6 months post-transsphenoidal surgery; biannual MRI for all pegvisomant-treated patients to monitor for tumor volume increase (GH receptor antagonism removes negative GH feedback on pituitary); monthly multidisciplinary pituitary tumor board case preparation — compile biochemical data (IGF-1 trend, GH nadir), current MRI comparison, comorbidity status, and treatment escalation/de-escalation rationale for all active patients; annual visual field testing scheduling (Humphrey 24-2 or 30-2) and ophthalmology referral for macroadenomas with suprasellar extension or bitemporal hemianopsia; and quarterly pituitary hormone axis panel (prolactin, TSH/free T4, 8 AM cortisol/ACTH, LH/FSH, testosterone/estradiol) for hypopituitarism co-management.',
  },
  {
    icon: Users2,
    title: 'Comorbidity Management & Patient Education',
    description: 'Annual cardiac echocardiogram coordination for acromegalic cardiomyopathy surveillance (LVH in 30–80% of active acromegaly patients) — LV mass index trending, ejection fraction, and diastolic function grading; annual colorectal cancer screening (colonoscopy) coordination — 2–3x higher relative risk per Melmed et al.; annual HbA1c and fasting glucose for diabetes mellitus monitoring (30–56% prevalence in active acromegaly); annual sleep apnea screening with polysomnography or WatchPAT referral (60–80% prevalence); annual DXA bone mineral density for osteoporosis surveillance in hypogonadal patients; annual thyroid ultrasound for nodule surveillance (3–5x elevated risk); annual AcroQoL (acromegaly quality of life) patient questionnaire administration; and patient education delivery — injection technique training for self-administered lanreotide (patient/caregiver), pegvisomant daily SC self-injection, and hypopituitarism hormone replacement (cortisol stress dosing, levothyroxine timing, testosterone/estrogen replacement).',
  },
]

const studies = [
  {
    title: 'PRIMARYS Trial (Lanreotide Autogel as Primary Therapy) — JCEM 2014',
    finding: 'Phase III trial of 90 treatment-naive acromegaly patients with macroadenoma on lanreotide autogel 120 mg q28d showed 63% tumor volume reduction ≥20% at 12 months, with 24% achieving ≥50% volume reduction. IGF-1 normalization rate was 35% at 12 months. No new pituitary hormone deficiencies were induced, and the drug was well-tolerated with the most common adverse effects being GI symptoms (soft stools, diarrhea) in 35% of patients.',
    implication: 'Acromegaly NPs managing primary medical therapy (pre-surgical or non-surgical candidates) must document quarterly IGF-1 normalization, serial tumor volume measurements on annual pituitary MRI, and monthly GI tolerability assessment. Lanreotide 120 mg response assessment at 3 months drives escalation to combination therapy (add pegvisomant or pasireotide LAR) versus referral for transsphenoidal surgery in nonresponders with accessible tumor anatomy.',
  },
  {
    title: 'ACROBAT Observe (Pegvisomant Real-World Registry) — EJENDO 2020',
    finding: 'Real-world observational registry of 2,090 pegvisomant-treated acromegaly patients across 12 countries showed IGF-1 normalization in 73% on monotherapy and 62% on combination with SRL. Serious hepatic adverse events were rare (0.3%), but ALT elevations >3x ULN occurred in 2.5% of patients. Mean duration of therapy was 6.2 years. Tumor growth on pegvisomant was uncommon (2.5% minor increase) and rarely required surgical intervention.',
    implication: 'NPs managing pegvisomant must document monthly IGF-1 and liver function panel (ALT/AST/total bilirubin) per FDA label for the first 6 months, then quarterly once stable. Biannual pituitary MRI is mandatory for all pegvisomant patients per ACROBAT registry protocol and AACE guidelines. NPs should educate patients on daily SC injection technique, injection site rotation, and hepatotoxicity warning signs (jaundice, dark urine, RUQ pain requiring immediate evaluation).',
  },
  {
    title: 'ALTITUDE Trial (Pasireotide LAR vs. Octreotide LAR) — NEJM 2014',
    finding: 'Phase III trial of 358 acromegaly patients who failed octreotide LAR ≤20 mg q28d randomized to pasireotide LAR (Signifor LAR) 40 or 60 mg vs. octreotide LAR 40 mg showed GH <2.5 ng/mL + IGF-1 normalization in 31.3% vs. 19.2% with pasireotide at month 12 (P=0.007). However, hyperglycemia occurred in 57% of pasireotide patients vs. 22% with octreotide (treatment-requiring diabetes in 29% vs. 8%).',
    implication: 'Acromegaly NPs must obtain fasting glucose and HbA1c before and monthly for 3 months after pasireotide LAR initiation, then quarterly. Metformin first-line per AACE/ACE 2017 hyperglycemia guidance; DPP-4 inhibitors or GLP-1 agonists second line (preferable over sulfonylureas in pasireotide-induced hyperglycemia, which is driven by somatostatin receptor-mediated suppression of GLP-1 and insulin secretion, not insulin resistance). NPs must document the specific hyperglycemia management algorithm used and ensure quarterly HbA1c tracking.',
  },
  {
    title: 'Melmed et al. Acromegaly Comorbidity Review — NEJM 2006 / Endocr Rev 2020',
    finding: 'Comprehensive review of 15,000 acromegaly patients across 16 studies documented standardized mortality ratio of 1.7–2.5 in patients with uncontrolled acromegaly vs. age-matched controls. Cardiovascular disease (cardiomyopathy, hypertension in 33–46%), sleep apnea (60–80%), diabetes mellitus (30–56%), colorectal neoplasia (RR 2–3x), and arthropathy (72%) are the dominant comorbidity drivers. Achieving IGF-1 normalization reduces mortality to near-normal population levels.',
    implication: 'Acromegaly NPs are the primary coordinators of the annual comorbidity screening bundle — cardiac echo, colonoscopy, sleep study, HbA1c, DXA, thyroid ultrasound, and AcroQoL quality of life assessment. NPs must document all 7 screening domains as completed annually, with results reported to the multidisciplinary pituitary tumor board. Incomplete screening is a quality metric failure with direct mortality implications given the high-prevalence comorbidity portfolio in acromegaly.',
  },
  {
    title: 'Katznelson et al. AACE/ACE Acromegaly Guidelines — ENDPR 2014',
    finding: 'AACE/ACE Clinical Practice Guidelines for the Diagnosis and Treatment of Acromegaly established biochemical disease control criteria (age-normalized IGF-1 AND random GH <1.0 ng/mL OR OGTT GH nadir <0.4 ng/mL), graded all treatment modalities (transsphenoidal surgery first-line for accessible macroadenomas, SRL ± pegvisomant for medical therapy, stereotactic radiosurgery for cavernous sinus-invasive residual), and mandated quarterly biochemical monitoring on medical therapy with annual pituitary MRI.',
    implication: 'Acromegaly NPs must document ALL THREE guideline-mandated monitoring elements at each quarterly visit: (1) serum IGF-1 with age-specific reference range notation, (2) random GH, and (3) clinical symptom assessment (hyperhidrosis, headache, soft tissue swelling, jaw pain). The quarterly visit note must also document current SRL dose and injection date, tolerance assessment, and any comorbidity screening overdue. AACE CE credit for annual guideline update review is recommended for all NPs managing acromegaly panels of ≥10 patients.',
  },
]

const schedule = [
  {
    frequency: 'Every 4 Years',
    item: 'AOCNP or AAENP Certification Renewal',
    details: 'Advanced Oncology Certified NP (AOCNP) — 45 CE credits including endocrine neoplasia content, or AAENP biennial renewal with 20 endocrinology-specific CE credits. ONCC tracks via OCT portal.',
  },
  {
    frequency: 'Every 5 Years',
    item: 'AGACNP-BC Renewal (ANCC)',
    details: 'Adult-Gerontology Acute Care NP renewal — 1,000 clinical hours + 75 CE credits (25 pharmacology) covering pituitary emergency management, perioperative transsphenoidal care, and adrenal insufficiency protocols.',
  },
  {
    frequency: 'Annual',
    item: 'AACE Annual Meeting or Clinical Endocrinology Update CE',
    details: 'American Association of Clinical Endocrinology Annual Scientific & Clinical Conference (April–May) or AACE Clinical Endocrinology Update — required for acromegaly, pituitary, and hypopituitarism guideline updates; 10–20 CE credits available per conference.',
  },
  {
    frequency: 'Quarterly',
    item: 'IGF-1 & Random GH Monitoring Draw',
    details: 'Age- and sex-specific IGF-1 normalization assessment per AACE/ACE 2014 criteria; random GH target <1.0 ng/mL on ultrasensitive assay; drives SRL dose titration decisions at each quarterly visit.',
  },
  {
    frequency: 'Monthly',
    item: 'Pegvisomant IGF-1 & Liver Function Panel',
    details: 'Monthly IGF-1 (targeting low-normal range for age) plus ALT, AST, total bilirubin for pegvisomant hepatotoxicity surveillance per FDA prescribing information — monthly for 6 months, then quarterly once stable.',
  },
  {
    frequency: 'Every 28 Days',
    item: 'Lanreotide or Octreotide LAR Injection',
    details: 'Lanreotide autogel 60–120 mg deep SC q28d or octreotide LAR 10–40 mg deep IM q28d injection scheduling with site rotation documentation, GI tolerability assessment, and pre-injection IGF-1 trending.',
  },
  {
    frequency: 'Biannual',
    item: 'Pituitary MRI (Pegvisomant Patients)',
    details: 'Gadolinium-enhanced pituitary-protocol MRI every 6 months for all pegvisomant-treated patients per ACROBAT registry and AACE guidelines — monitor for tumor volume increase given loss of GH negative feedback on somatotroph proliferation.',
  },
  {
    frequency: 'Annual',
    item: 'Pituitary MRI (SRL Patients)',
    details: 'Annual gadolinium-enhanced pituitary-protocol MRI for all lanreotide or octreotide LAR-treated patients; Knosp classification update; comparison with prior studies for tumor volume trending; report to monthly tumor board.',
  },
  {
    frequency: 'Annual',
    item: 'Cardiac Echocardiogram',
    details: 'LV mass index, ejection fraction, diastolic function, and valvular assessment for acromegalic cardiomyopathy surveillance — repeat every 6 months until biochemical control achieved, then annually.',
  },
  {
    frequency: 'Annual',
    item: 'Comorbidity Screening Bundle',
    details: 'Colonoscopy (CRC surveillance), HbA1c (DM screening), polysomnography (sleep apnea), DXA (osteoporosis), thyroid ultrasound (nodule surveillance), Humphrey visual fields, and AcroQoL quality of life — all 7 domains documented annually per AACE guidelines.',
  },
]

export default function Page() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Acromegaly Nurse Practitioners"
        title="Every Certification. Every IGF-1. Every Comorbidity Screen."
        subtitle="Acromegaly NPs co-manage somatostatin analogue titration, pegvisomant weekly dosing, quarterly IGF-1 monitoring, annual pituitary MRI surveillance, monthly multidisciplinary tumor board preparation, and a 7-domain comorbidity screening bundle — all while maintaining AGACNP-BC and AAENP credentials. Momenties consolidates every certification renewal, SRL injection cycle, and biochemical monitoring interval into one calendar so nothing slips through the cracks."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Acromegaly NP Practice
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
              The Evidence Base Driving Acromegaly NP Compliance
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
              Acromegaly NP Certification & CE Schedule
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

      <CTA
        headline="Ready to Achieve ≥60% IGF-1 Normalization in Your Acromegaly Panel?"
        subtext="Momenties consolidates AGACNP-BC and AAENP renewals, quarterly IGF-1 titrations, monthly lanreotide and octreotide LAR injection scheduling, pegvisomant liver surveillance, biannual pituitary MRI, and all 7 AACE comorbidity screening domains into one accountable calendar — so every biochemical checkpoint and surveillance interval is on time, every cycle."
      />
    </main>
  )
}
