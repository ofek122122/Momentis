import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Autoimmune Hepatitis Nurse Practitioner Scheduling Guide | Momenties',
  description: 'Scheduling infrastructure for NPs managing prednisone taper education, azathioprine TPMT pre-testing, ALT/AST/IgG trending, and liver biopsy coordination in autoimmune hepatitis clinics.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Prednisone Taper Teaching and Cushingoid/Osteoporosis Monitoring',
    description: 'Structured prednisone taper patient education — documented counseling on 5 mg/week reduction schedule (40 mg/day → ≤10 mg/day maintenance or withdrawal) with clear symptom-based hold criteria (ALT >3× ULN or IgG rise >4 g/L triggers taper pause); monthly Cushingoid complication screening (blood pressure, fasting glucose, weight, mood assessment, and acne documentation); quarterly osteoporosis prevention protocol — calcium 1,000–1,500 mg/day and vitamin D 800–1,000 IU/day supplementation adherence confirmation, annual DEXA scan scheduling, and bisphosphonate initiation coordination (alendronate 70 mg weekly or risedronate 35 mg weekly or zoledronic acid 5 mg annual IV) for T-score <−2.5 or fragility fracture; annual ophthalmology referral for posterior subcapsular cataract surveillance in patients on prednisone >3 months; and biennial ACR glucocorticoid-induced osteoporosis risk reassessment with FRAX score documentation and treatment escalation for high-risk patients per rheumatology co-management protocol.',
  },
  {
    icon: Clock,
    title: 'Azathioprine TPMT Pre-Test and CBC/LFT Monthly Monitoring',
    description: 'Azathioprine safety monitoring framework — TPMT phenotype or genotype pre-test ordering and result documentation before first azathioprine prescription (poor metabolizers TPMT <5 nmol/h/mL RBC require 50% dose reduction or MMF 1–3 g/day substitution with documented pharmacist consultation); structured azathioprine initiation checklist: 50 mg/day start, dose escalation to 1–2 mg/kg/day at 4-week intervals, CBC with differential and LFTs at 2 and 4 weeks post-initiation, then monthly thereafter; myelosuppression threshold documentation (ANC <1,500/μL = hold azathioprine, ANC <1,000/μL = discontinue and report); azathioprine hepatotoxicity trigger documentation (ALT >3× ULN or nodular regenerative hyperplasia symptoms — portal hypertension, esophageal varices in non-cirrhotic AIH); annual 6-TGN metabolite level ordering (target 230–450 pmol/8×10⁸ RBC) with dose adjustment guidance; and MMF monthly CBC and monthly pregnancy test compliance documentation for women of reproductive age on MMF as azathioprine alternative.',
  },
  {
    icon: BarChart3,
    title: 'ANA/anti-SMA/IgG Lab Trending and Flare-Alert Protocols',
    description: 'Automated serologic and biochemical surveillance — ANA, anti-smooth muscle antibody (anti-SMA), anti-LKM1, and IgG trending at baseline, 3, 6, and 12 months with graphical IgG normalization curve (target <16 g/L per EASL guidelines); monthly ALT/AST trending with flare-alert protocol (ALT >3× ULN triggers same-day NP assessment and prednisone re-induction decision at 40 mg/day); alkaline phosphatase and GGT quarterly trending for AIH-PBC or AIH-PSC overlap syndrome identification; semi-annual AMA and pANCA for overlap syndrome surveillance with MRCP referral coordination; anti-SLA/LP (anti-soluble liver antigen) annual testing as high-specificity relapse-risk marker — positive result triggers intensified monitoring (monthly ALT/AST, IgG every 3 months, and 6-monthly liver biopsy consideration); quarterly complete metabolic panel including albumin and INR for hepatic synthetic function decline alert (INR >1.5 or albumin <3.5 g/dL triggers hepatology urgent review); and annual hepatitis B surface antigen and hepatitis C antibody re-screening for patients on long-term immunosuppression.',
  },
  {
    icon: Users,
    title: 'Liver Biopsy and Fibroscan Scheduling Coordination',
    description: 'Procedural scheduling and results management — liver biopsy coordination for patients achieving ≥24 months of biochemical remission (ALT normal, IgG <16 g/L) to confirm histologic remission (HAI ≤3, no interface hepatitis) as prerequisite for drug withdrawal per EASL/AASLD guidelines; pre-biopsy checklist: INR <1.5, platelet count >50,000/μL, hold anticoagulants 5–7 days, informed consent, and post-procedure 4-hour observation protocol documentation; semi-annual transient elastography (FibroScan) scheduling with result trending (target <7 kPa normal, ≥10 kPa = advanced fibrosis F3–F4 alert, ≥13 kPa = cirrhosis alert triggering HCC and variceal surveillance activation); MRI elastography (MRE) referral coordination for patients with BMI >30 where FibroScan unreliable; AFP and liver ultrasound every 6 months in cirrhotic AIH patients per AASLD HCC surveillance guidelines; and annual EGD variceal screening coordination for cirrhotic AIH patients meeting BAVENO VII criteria (FibroScan >20 kPa or platelet <150,000/μL) with gastroenterology referral pathway.',
  },
]

const studies = [
  {
    title: 'IAIHG Simplified Criteria for AIH Diagnosis — Hepatology 2008',
    finding: 'The International Autoimmune Hepatitis Group (IAIHG) simplified scoring system (ANA/anti-SMA ≥1:40 = 1 point, ≥1:80 = 2 points; IgG ≥1.1× ULN = 1 point, ≥1.5× ULN = 2 points; liver histology interface hepatitis = 1 point, typical = 2 points; absence of viral hepatitis = 2 points) achieved sensitivity 88% and specificity 97% for AIH diagnosis. Score ≥7 = definite AIH; ≥6 = probable AIH.',
    implication: 'NPs triaging newly presenting patients with elevated transaminases and positive ANA must document the IAIHG simplified score at first encounter — ANA titer, IgG level, serology panel (anti-SMA, anti-LKM1, anti-SLA/LP), and liver histology findings — to confirm diagnosis before initiating prednisone. Inadequate serology documentation at diagnosis is the leading cause of delayed treatment initiation, which correlates with higher rates of cirrhosis at presentation.',
  },
  {
    title: 'EASL Clinical Practice Guidelines for AIH — Journal of Hepatology 2015',
    finding: 'EASL guidelines define biochemical remission as normalization of ALT/AST and IgG (<16 g/L) sustained for ≥24 months, and histologic remission as HAI ≤3 with no interface hepatitis on liver biopsy. Biochemical remission rates of ≥80% expected at 12 months with prednisone + azathioprine combination therapy. Relapse after drug withdrawal occurs in 50–80% within 3 years if histologic remission not confirmed.',
    implication: 'NPs managing AIH must track ALT, AST, and IgG monthly during induction and document formal remission assessment at 12 months. Failure to obtain a confirmatory liver biopsy before drug withdrawal leads to 50–80% relapse — NPs should proactively schedule biopsies at the 24-month biochemical remission milestone and document HAI score in the clinical record. IgG trending (not just ALT) is critical: isolated IgG elevation without ALT rise can precede overt flare by 2–3 months.',
  },
  {
    title: 'Thiopurine Metabolite Monitoring in IBD and AIH — Gut 2003 / Hepatology 2011',
    finding: 'Therapeutic 6-TGN levels of 230–450 pmol/8×10⁸ RBC are associated with clinical remission in autoimmune conditions. 6-MMP >5,700 pmol/8×10⁸ RBC predicts hepatotoxicity (transaminase elevation, nodular regenerative hyperplasia). Patients with 6-TGN <230 despite adequate azathioprine dose should be evaluated for TPMT low activity with preferential 6-MMP shunting, non-adherence, or inadequate dosing.',
    implication: 'NPs managing azathioprine therapy in AIH must order annual 6-TGN and 6-MMP metabolite levels for all patients with inadequate biochemical remission or unexplained CBC/LFT abnormalities. 6-TGN <230 in a patient on azathioprine ≥1 mg/kg/day suggests either non-adherence or a TPMT polymorphism with 6-MMP preferential shunting — both require different interventions. Documenting metabolite levels protects against inappropriate dose escalation that could trigger hepatotoxicity.',
  },
  {
    title: 'FibroScan in Autoimmune Hepatitis — Liver International 2012/2019',
    finding: 'Transient elastography (FibroScan) shows strong correlation with histologic fibrosis stage in AIH (AUROC 0.89 for F3–F4), with cut-offs of 7.0 kPa for F2, 10.0 kPa for F3, and 13.0 kPa for F4 (cirrhosis). Serial FibroScan every 6 months detects fibrosis progression in patients with incomplete biochemical remission, with kPa increase >2 kPa/year indicating progressive fibrotic injury requiring treatment escalation.',
    implication: 'NPs should schedule FibroScan every 6 months for all AIH patients, not just annually — particularly those with incomplete remission (ALT persistently 1–2× ULN) where histologic fibrosis may progress silently. FibroScan ≥13 kPa should immediately trigger HCC surveillance (AFP + liver ultrasound every 6 months) and gastroenterology referral for EGD variceal screening, regardless of whether the patient has been formally diagnosed with cirrhosis by biopsy.',
  },
  {
    title: 'Glucocorticoid-Induced Osteoporosis in AIH — ACR Guidelines 2022',
    finding: 'ACR 2022 guidelines recommend DEXA scan at baseline (within 6 months of glucocorticoid initiation), calcium 1,000–1,500 mg/day, and vitamin D 600–800 IU/day for all patients on prednisone ≥2.5 mg/day for ≥3 months. Oral bisphosphonate initiation recommended when 10-year FRAX hip fracture probability ≥3% (moderate/high-risk) on medium-dose (7.5–30 mg/day) or high-dose (>30 mg/day) glucocorticoids. Fracture risk in AIH patients on long-term prednisone is 1.5–2× age-matched controls.',
    implication: 'NPs initiating prednisone 40 mg/day for AIH must document baseline DEXA within 6 months, start calcium/vitamin D supplementation at the first visit, and calculate FRAX score at the 3-month visit to determine bisphosphonate eligibility. Annual DEXA thereafter is required for all patients on any dose of chronic prednisone. NPs should not wait for a fracture to occur — proactive bisphosphonate initiation for T-score <−2.5 or FRAX hip ≥3% is the standard of care.',
  },
]

const schedule = [
  {
    frequency: 'Pre-Treatment',
    item: 'TPMT Phenotype/Genotype Pre-Testing',
    details: 'Mandatory before azathioprine initiation — TPMT activity <5 nmol/h/mL RBC (poor metabolizer) requires 50% dose reduction or MMF substitution; intermediate metabolizers (5–14 nmol/h/mL) start at 50 mg/day; normal metabolizers (>14 nmol/h/mL) titrate to 1–2 mg/kg/day.',
  },
  {
    frequency: 'Monthly',
    item: 'ALT/AST, IgG, and Azathioprine CBC/LFT Panel',
    details: 'Core remission monitoring: ALT, AST, IgG, total bilirubin, and CBC with differential. Flare-alert triggers: ALT >3× ULN (prednisone re-induction), ANC <1,500/μL (hold azathioprine), IgG rise >4 g/L above nadir (taper pause). Target: ALT normalization by Month 12 and IgG <16 g/L.',
  },
  {
    frequency: 'Quarterly',
    item: 'Cushingoid Assessment and Bone Health Review',
    details: 'Blood pressure, fasting glucose, weight, and calcium/vitamin D supplementation adherence. Bisphosphonate compliance review. FRAX recalculation annually. Ophthalmology referral at 3-month mark for patients on prednisone >3 months continuously.',
  },
  {
    frequency: 'Semi-Annual',
    item: 'FibroScan Elastography and AMA/pANCA',
    details: 'Transient elastography with CAP every 6 months. FibroScan ≥13 kPa triggers HCC surveillance activation and EGD referral. AMA and pANCA semi-annually for overlap syndrome surveillance. MRE referral for BMI >30 where FibroScan unreliable.',
  },
  {
    frequency: 'Annual',
    item: '6-TGN Metabolite Level and Anti-SLA/LP',
    details: '6-TGN (target 230–450 pmol/8×10⁸ RBC) and 6-MMP (hepatotoxicity threshold >5,700 pmol/8×10⁸ RBC) for all patients on azathioprine with inadequate remission or CBC/LFT abnormalities. Anti-SLA/LP for relapse-risk stratification.',
  },
  {
    frequency: 'Every 6 Months',
    item: 'AFP and Liver Ultrasound (Cirrhotic AIH)',
    details: 'HCC surveillance for all cirrhotic AIH patients (FibroScan ≥13 kPa or biopsy-confirmed cirrhosis) per AASLD guidelines. AFP elevation >20 ng/mL or focal lesion triggers CT/MRI multiphasic imaging and hepatology urgent referral.',
  },
  {
    frequency: 'At 24 Months Remission',
    item: 'Liver Biopsy for Histologic Remission Confirmation',
    details: 'Prerequisite for drug withdrawal attempt per EASL/AASLD guidelines — HAI ≤3 and no interface hepatitis required. Pre-biopsy checklist: INR <1.5, platelets >50,000/μL, anticoagulant hold 5–7 days, informed consent, 4-hour post-procedure observation.',
  },
  {
    frequency: 'Annual',
    item: 'DEXA Bone Density Scan',
    details: 'All patients on any dose of chronic prednisone. Initiate bisphosphonate for T-score <−2.5 or FRAX 10-year hip fracture probability ≥3% on medium/high-dose glucocorticoids. Zoledronic acid 5 mg annual IV preferred for adherence-challenged patients.',
  },
  {
    frequency: 'Annual',
    item: 'EGD Variceal Screening (Cirrhotic AIH)',
    details: 'Per BAVENO VII criteria: FibroScan >20 kPa or platelet <150,000/μL. Band ligation threshold: medium/large varices or high-risk stigmata (red wale marks). Non-selective beta-blocker (propranolol/carvedilol) initiation for small varices with red wale signs.',
  },
  {
    frequency: 'Annual',
    item: 'Hepatitis B/C Screening (Immunosuppressed Patients)',
    details: 'Annual HBsAg and anti-HCV for all patients on long-term prednisone ± azathioprine. HBsAg+ patients require prophylactic tenofovir or entecavir before immunosuppression. Annual HBV DNA monitoring in HBcAb+ patients receiving immunosuppression.',
  },
]

export default function Page() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — Autoimmune Hepatitis"
        title="Autoimmune Hepatitis Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing prednisone taper education, azathioprine TPMT pre-testing, ALT/AST/IgG trending, and liver biopsy coordination in autoimmune hepatitis clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Autoimmune Hepatitis NP Practice
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
              The Evidence Base Driving Autoimmune Hepatitis NP Compliance
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
              Autoimmune Hepatitis NP Monitoring Schedule
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
              Managing AIH patients means tracking TPMT results before azathioprine starts, then monthly CBCs, monthly LFTs, quarterly IgG and ANA trending, semi-annual FibroScan, annual DEXA and ophthalmology referrals, liver biopsy timing at 24-month remission, and HCC surveillance for cirrhotic patients — all while coordinating prednisone taper education and flare-alert protocols. Momenties automated every interval so I spend my time on patients, not spreadsheets.
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>Maria S., AGPCNP-BC</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>Hepatology NP</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Automate Your AIH NP Monitoring Schedule?"
        subtext="Momenties consolidates TPMT pre-testing, monthly azathioprine CBC and LFT tracking, quarterly IgG and serologic remission panels, semi-annual FibroScan intervals, annual DEXA and liver biopsy coordination, and HCC surveillance into one accountable calendar — so every monitoring interval is on time, every cycle."
      />
    </main>
  )
}
