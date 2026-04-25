import { BarChart3, Bell, ClipboardList, Shield, Calendar, Heart, Activity, FileText } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Primary Sclerosing Cholangitis Nurse Practitioners — Scheduling Guide | Momenties',
  description: 'Scheduling infrastructure for NPs managing ALP/CA19-9 trending, cholangitis episode education, MRCP/colonoscopy coordination, and transplant-listing workup in primary sclerosing cholangitis clinics.',
}

const pillars = [
  {
    icon: BarChart3,
    title: 'ALP/CA19-9/Bilirubin Lab Trending & Cholangitis-Alert Protocols',
    description: 'Monthly ALP, total and direct bilirubin, GGT, and CA19-9 result review with automated trend flagging — ALP rise >1.5× ULN triggers hepatobiliary team alert and MRCP/ERC scheduling within 4 weeks; semi-annual CA19-9 > 130 U/mL escalation pathway to ERCP with brush cytology and FISH aneuploidy testing; cholangitis episode recognition — Charcot triad (fever, RUQ pain, jaundice) and Reynold pentad surveillance with Tokyo Guidelines severity grading (mild/moderate/severe); empiric antibiotic initiation protocol — ciprofloxacin 500 mg PO BID or pip-tazo 3.375 g IV for moderate/severe cholangitis with bile culture follow-up and antibiotic de-escalation within 48–72 hours; and quarterly hepatic synthetic function review (INR, albumin, bilirubin) for MELD-Na progression monitoring.',
  },
  {
    icon: Activity,
    title: 'Fat-Soluble Vitamin/DEXA/Osteoporosis Monitoring',
    description: 'Annual fat-soluble vitamin panel (vitamins A, D, E, K) for PSC patients with significant cholestasis — cholestatic fat malabsorption causes deficiency in all four vitamins; 25-OH vitamin D supplementation targeting ≥30 ng/mL with cholecalciferol 2,000–5,000 IU/day dosing; phytonadione (vitamin K1) supplementation for INR elevation related to fat-soluble vitamin deficiency vs. hepatic synthetic dysfunction differentiation; biennial dual-energy X-ray absorptiometry (DEXA) scan for all PSC patients — PSC confers 4–20× elevated osteoporosis risk from chronic cholestasis, corticosteroid use (for IBD), and calcium malabsorption; alendronate 70 mg weekly or risedronate 35 mg weekly for T-score ≤−2.5 or fragility fracture; calcium 1,200 mg/day and vitamin D 800–2,000 IU/day supplementation for all PSC-IBD patients; and annual 25-OH vitamin D level recheck to confirm supplementation adequacy.',
  },
  {
    icon: Calendar,
    title: 'Colonoscopy IBD-Surveillance Scheduling & Dysplasia Follow-Up',
    description: 'Annual colonoscopy coordination for all PSC-IBD patients — schedule 6–8 weeks in advance with chromoendoscopy prep confirmation (0.1% indigo carmine or methylene blue pancolonic spray); pre-procedure bowel prep instruction and IBD flare assessment to determine procedure safety; confirm pathology laboratory routing for dysplasia grading (indefinite, LGD, HGD) with same-day pathologist notification protocol for HGD; post-colonoscopy dysplasia result communication — NP-led phone follow-up within 5 business days; multidisciplinary conference referral coordination for LGD and HGD findings with colorectal surgery, GI, and hepatology; patient education on annual surveillance rationale — PSC-IBD carries 10–15× elevated colorectal cancer risk versus IBD alone; and documentation of IBD disease activity (Harvey-Bradshaw Index for Crohn; Mayo Score for ulcerative colitis) at time of colonoscopy.',
  },
  {
    icon: Shield,
    title: 'MELD-Na & Transplant-Listing Workup Coordination',
    description: 'Quarterly MELD-Na calculation using patient labs (INR, creatinine, bilirubin, sodium) with documented score entry into EMR transplant module; MELD-Na ≥15 triggers transplant evaluation referral — NP coordinates hepatology and transplant surgery multidisciplinary review; transplant workup checklist coordination — cardiac evaluation (stress test or right-heart catheterization), dental clearance, CT chest/abdomen/pelvis, ophthalmology, dermatology, and psychosocial/social work assessment; MELD exception application coordination for PSC with recurrent cholangitis (≥2 cholangitis hospitalizations/year), hepatopulmonary syndrome (A-a O₂ gradient >15 mmHg), or portal hypertension complications; annual patient education on transplant readiness — medication adherence, substance abstinence, and support system assessment; and semi-annual Mayo PSC Risk Score computation for disease-stage communication to patient and transplant team.',
  },
]

const studies = [
  {
    title: 'PSC Dominant Stricture Management — Hepatology 2019 (ESGE/EASL Guidelines)',
    finding: 'Dominant strictures (stenosis ≤1.5 mm in common bile duct or ≤1.0 mm in hepatic duct) develop in 36–50% of PSC patients and are associated with faster disease progression, recurrent cholangitis, and elevated CCA risk. ERCP-based dilation (balloon to ≥6 mm) achieves clinical improvement in 70–80% of patients, with recurrence in ~50% within 12 months requiring re-dilation.',
    implication: 'NPs must coordinate post-ERC ALP/bilirubin surveillance at 4 and 12 weeks after dominant-stricture dilation, escalate rising ALP to hepatobiliary team for re-dilation planning, and ensure annual brush cytology with FISH is performed at each ERC encounter for CCA screening in dominant-stricture patients.',
  },
  {
    title: 'PSC-IBD Colorectal Cancer Risk — Gut 2020 (Meta-Analysis 16 Studies)',
    finding: 'Meta-analysis of 4,225 PSC-IBD patients showed cumulative colorectal cancer (CRC) incidence of 14% at 10 years and 31% at 20 years — 4.8× higher than IBD without PSC. Annual colonoscopy with chromoendoscopy reduced CRC-related mortality by 64% in PSC-IBD cohorts with systematic annual surveillance.',
    implication: 'NPs managing PSC-IBD must ensure 100% annual colonoscopy completion — even for patients with quiescent IBD — using chromoendoscopy (pancolonic dye spray) per SCENIC consensus guidelines. Patients who decline or defer surveillance require documented informed refusal with re-education at each encounter about absolute CRC risk reduction with annual colonoscopy.',
  },
  {
    title: 'Osteoporosis in PSC — Journal of Hepatology 2021 (Systematic Review)',
    finding: 'Systematic review of 1,845 PSC patients showed osteoporosis prevalence of 15–20% at diagnosis and osteopenia in 40–50%. Risk factors included cholestatic severity (ALP >3× ULN), IBD-related corticosteroid use, and lower BMI. Fragility fracture rate was 2.8× age-matched controls. Only 34% of PSC patients had ever received a DEXA scan.',
    implication: 'NPs must implement a proactive DEXA scheduling protocol — baseline DEXA at PSC diagnosis and biennial thereafter — with calcium 1,200 mg/day and vitamin D 800–2,000 IU/day supplementation for all patients, and bisphosphonate initiation for T-score ≤−2.5 or prior fragility fracture regardless of age.',
  },
  {
    title: 'MELD-Na and PSC Transplant Outcomes — Liver Transplantation 2022',
    finding: 'Analysis of 1,203 PSC liver transplant recipients showed MELD-Na at time of listing predicted 1-year waitlist mortality (HR 1.32 per point above 15). PSC patients listed at MELD-Na ≥20 had 2.1× higher waitlist mortality than those listed at 15–19. Post-transplant 5-year survival was 85%, with PSC recurrence in 20–25% by 10 years post-transplant.',
    implication: 'NPs must calculate MELD-Na quarterly and initiate transplant evaluation at first score ≥15, not wait for clinical decompensation. Semi-annual Mayo PSC Risk Score computation helps identify patients approaching listing threshold even before MELD-Na reaches 15. Post-transplant PSC recurrence surveillance (annual MRCP from Year 1) is an NP-coordinated responsibility.',
  },
  {
    title: 'CA19-9 as PSC Cholangiocarcinoma Biomarker — Hepatology 2019',
    finding: 'Prospective study of 826 PSC patients showed CA19-9 >130 U/mL had sensitivity 79% and specificity 98% for cholangiocarcinoma diagnosis. Combined CA19-9 + MRCP had NPV 99.5% for CCA exclusion. Annual CCA surveillance using both modalities was associated with earlier-stage detection and improved resectability.',
    implication: 'NPs must perform semi-annual CA19-9 measurements and immediately escalate values >130 U/mL to ERCP with brush cytology and FISH aneuploidy testing within 4 weeks. CA19-9 trending (not single-point thresholds) is also important — a doubling of CA19-9 from baseline warrants evaluation even if absolute value remains below 130 U/mL.',
  },
]

const schedule = [
  {
    frequency: 'Monthly',
    item: 'ALP/Bilirubin/CA19-9 Lab Trending',
    details: 'ALP, total bilirubin, direct bilirubin, GGT, and CA19-9 review with trend documentation. ALP >1.5× ULN triggers hepatobiliary alert. CA19-9 > 130 U/mL escalates to ERCP within 4 weeks.',
  },
  {
    frequency: 'Quarterly',
    item: 'MELD-Na Calculation & Transplant Status Update',
    details: 'Quarterly MELD-Na (INR, creatinine, bilirubin, sodium) with EMR documentation. Score ≥15 triggers formal transplant evaluation. Semi-annual Mayo PSC Risk Score computation for disease-stage tracking.',
  },
  {
    frequency: 'Semi-Annual',
    item: 'CA19-9 Dedicated Surveillance Draw',
    details: 'Semi-annual CA19-9 measurement independent of routine monthly panel. Values >130 U/mL require ERCP with brush cytology and FISH aneuploidy testing within 4 weeks. CA19-9 doubling from baseline also warrants evaluation.',
  },
  {
    frequency: 'Annual',
    item: 'MRCP with Hepatobiliary Contrast',
    details: 'Annual MR cholangiography to assess intrahepatic/extrahepatic duct caliber, dominant stricture development, and perihilar mass lesion. Results reviewed at hepatobiliary multidisciplinary conference. Post-transplant MRCP at Year 1, Year 5, then annually.',
  },
  {
    frequency: 'Annual',
    item: 'Colonoscopy with Chromoendoscopy (PSC-IBD)',
    details: 'Annual high-definition colonoscopy with pancolonic chromoendoscopy (0.1% indigo carmine or methylene blue) for all PSC-IBD patients. Dysplasia grading and multidisciplinary referral for LGD/HGD within 5 business days of pathology.',
  },
  {
    frequency: 'Annual',
    item: 'Fat-Soluble Vitamins A, D, E, K Panel',
    details: 'Annual fat-soluble vitamin panel for all PSC patients with ALP >1.5× ULN or clinical cholestasis. 25-OH vitamin D target ≥30 ng/mL. Vitamin K supplementation for INR elevation not explained by synthetic dysfunction.',
  },
  {
    frequency: 'Biennial',
    item: 'DEXA Bone Density Scan',
    details: 'Biennial DEXA for all PSC patients. Baseline DEXA at diagnosis. Bisphosphonate initiation for T-score ≤−2.5 or fragility fracture. Calcium 1,200 mg/day and vitamin D 800–2,000 IU/day for all PSC-IBD patients.',
  },
  {
    frequency: 'As-Needed',
    item: 'Cholangitis Episode Management',
    details: 'Tokyo Guidelines severity grading for each cholangitis episode. Empiric ciprofloxacin PO (mild) or pip-tazo IV (moderate/severe). Bile culture follow-up and antibiotic de-escalation within 48–72 hours. ERC within 72 hours for severe cholangitis with obstructive dominant stricture.',
  },
  {
    frequency: 'Every 4–5 Years',
    item: 'NP Certification Renewal (AGPCNP-BC / ACNPC-AG)',
    details: 'AGPCNP-BC renewal — 1,000 clinical hours + 150 CE credits including hepatology-specific CE. Annual AASLD Liver Meeting CE and EASL liver disease guidelines update. Collaborative practice agreement renewal for ursodiol, cholecalciferol, phytonadione, and bisphosphonate prescribing.',
  },
  {
    frequency: 'Annual',
    item: 'Transplant Workup Completeness Audit',
    details: 'Annual audit of transplant workup completeness for MELD-Na ≥12 patients — cardiac, dental, CT, ophthalmology, dermatology, and psychosocial clearances. Flag expired workup components (cardiac stress test valid 12 months; dental clearance valid 6 months).',
  },
]

export default function PSCNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — Primary Sclerosing Cholangitis"
        title="PSC Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing ALP/CA19-9 trending, cholangitis episode education, MRCP/colonoscopy coordination, and transplant-listing workup in primary sclerosing cholangitis clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full PSC NP Practice
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
              The Evidence Base Driving PSC NP Compliance
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

      {/* CE & Monitoring Schedule */}
      <Reveal>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
              PSC NP Certification & Monitoring Schedule
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
              Managing PSC patients means tracking monthly ALP trends, semi-annual CA19-9, annual MRCP, annual colonoscopy for every PSC-IBD patient, quarterly MELD-Na for transplant candidates, biennial DEXA, and fat-soluble vitamin panels — all while responding to acute cholangitis episodes. Momenties gave our practice one calendar for every interval. We hit 100% colonoscopy compliance in year one and zero missed CA19-9 escalations.
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>Susan R., AGPCNP-BC</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>Hepatology NP</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Run a Zero-Gap PSC Surveillance Program?"
        subtext="Momenties consolidates monthly ALP/CA19-9 trending, annual MRCP and colonoscopy scheduling, quarterly MELD-Na transplant tracking, biennial DEXA, and cholangitis alert protocols into one accountable calendar — so every PSC-IBD patient and transplant candidate gets the surveillance they need, on time, every cycle."
      />
    </main>
  )
}
