import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Bone Marrow Failure Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGACNP-BC and AOCNP renewal, aplastic anemia immunosuppressive therapy (IST) monitoring CE, MDS molecular profiling and IPSS-R scoring CE, CIBMTR quarterly data submission deadlines, eltrombopag (Promacta) monthly CBC tracking, PNH complement inhibitor (eculizumab/ravulizumab) surveillance, hematology-oncology NP credentialing, and Diamond-Blackfan anemia long-term monitoring for bone marrow failure nurse practitioners.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Hematology NP Credentials & AOCNP Certification',
    description: 'AGACNP-BC (Adult-Gerontology Acute Care Nurse Practitioner Board Certified) 5-year renewal — 1,000 clinical hours plus 150 CE credits required for inpatient bone marrow failure management and stem cell transplant co-management; AOCNP (Advanced Oncology Certified Nurse Practitioner) 4-year/45 CE renewal for hematologic malignancy and bone marrow failure subspecialty practice; annual ASH (American Society of Hematology) Annual Meeting bone marrow failure session CE; biennial AAMDS (Aplastic Anemia & MDS International Foundation) educational symposium CE; annual NCCN MDS and aplastic anemia guideline update CE; and biennial collaborative practice agreement renewal with hematologist for horse ATG (Atgam), cyclosporine, eltrombopag (Promacta), azacitidine (Vidaza), decitabine (Dacogen), eculizumab (Soliris), ravulizumab (Ultomiris), and luspatercept (Reblozyl) prescribing.',
  },
  {
    icon: Clock,
    title: 'Aplastic Anemia IST & Eltrombopag Protocol Compliance',
    description: 'Daily IST infusion documentation during horse ATG (Atgam) 40 mg/kg/day x 4 days induction — serum sickness premedication (methylprednisolone 1 mg/kg) and platelet transfusion threshold maintenance (>20,000/μL pre-infusion); daily cyclosporine trough monitoring during initial 6 months (target trough 200–400 ng/mL) with quarterly creatinine and magnesium tracking; monthly eltrombopag (Promacta) CBC and LFT monitoring at 150 mg PO daily — dose reduction triggers (ALT >3x ULN, platelet >200,000/μL); 3-month and 6-month hematologic response assessment per Camitta criteria (CR: ANC >1,000, platelets >100,000, Hgb >10 g/dL); annual cytogenetics surveillance for clonal evolution to MDS/AML (5–15% 10-year cumulative incidence post-IST); quarterly PNH flow cytometry (high-sensitivity FLAER) for emergent PNH clone in AA patients; and annual donor search and HLA typing renewal for matched sibling and matched unrelated donor allogeneic HSCT eligibility (age <50 with severe AA — first-line HSCT consideration).',
  },
  {
    icon: BarChart3,
    title: 'MDS IPSS-R Scoring & Hypomethylating Agent Monitoring',
    description: 'Annual MDS IPSS-R (Revised International Prognostic Scoring System) recalculation — cytogenetic risk category (very good/good/intermediate/poor/very poor), bone marrow blast %, hemoglobin, ANC, and platelet count for risk stratification (Very Low ≤1.5 vs. Very High >6 points); annual IPSS-M (Molecular) integration with NGS panel (TP53, SF3B1, ASXL1, RUNX1, EZH2, ETV6, SRSF2 — 31 genes) for refined prognosis; monthly azacitidine (Vidaza) 75 mg/m²/day x 7 days subcutaneous cycle documentation with CBC nadir tracking (Day 14–21); monthly decitabine (Dacogen) 20 mg/m²/day x 5 days IV cycle compliance; monthly luspatercept (Reblozyl) 1.0–1.75 mg/kg SC q3wk for SF3B1-mutated lower-risk MDS with ring sideroblasts (RS-MDS); quarterly RBC and platelet transfusion independence documentation (≥8 weeks transfusion-free = response per IWG 2018 criteria); annual ferritin and iron chelation initiation review for ferritin >1,000 ng/mL or >20 RBC unit transfusions (deferasirox/Exjade documentation); and quarterly bone marrow biopsy with morphology, cytogenetics, and FISH for high-risk MDS treatment response.',
  },
  {
    icon: Users,
    title: 'PNH Complement Inhibitor Surveillance & CIBMTR Reporting',
    description: 'Biweekly eculizumab (Soliris) 900 mg IV infusion documentation during induction (Weeks 1–4 at 600 mg, then 900 mg q2wk maintenance) with breakthrough hemolysis surveillance (LDH >1.5x ULN); 8-weekly ravulizumab (Ultomiris) 3,000–3,600 mg IV maintenance dosing per body weight; quarterly meningococcal vaccination compliance documentation (MenACWY + MenB) — required ≥2 weeks before complement inhibitor initiation per FDA REMS; quarterly LDH, haptoglobin, reticulocyte, and bilirubin trending for hemolysis control (LDH <1.5x ULN target); quarterly type and screen plus PNH flow cytometry for clone size monitoring (Type II vs. Type III RBCs and granulocyte clone size); CIBMTR (Center for International Blood and Marrow Transplant Research) quarterly TED (Transplant Essential Data) and CRF (Comprehensive Report Form) submission for all allogeneic HSCT recipients (100-day, 6-month, annual post-transplant data); annual CIBMTR center performance review and outcome benchmarking; and annual Diamond-Blackfan anemia (DBA) iron chelation, growth velocity, and DBA Registry data submission for pediatric-to-adult transition patients.',
  },
]

const studies = [
  {
    title: 'SOAR (Severe Aplastic Anemia + Eltrombopag) — NEJM 2017',
    finding: 'Single-arm phase II trial of horse ATG + cyclosporine + eltrombopag in 92 treatment-naive severe aplastic anemia patients showed 6-month overall response rate of 87% (94% with eltrombopag added Day 1, vs. ~60% historical IST alone), with complete response rate of 39% at 6 months and 58% at 1 year. Median time to platelet transfusion independence was 32 days.',
    implication: 'NPs co-managing severe aplastic anemia must initiate eltrombopag 150 mg PO daily on Day 1 of horse ATG induction (not after) per current NCCN and BSH guidelines, and document monthly LFTs (ALT/AST <3x ULN), CBC trends, and 3-month/6-month Camitta response criteria. Tracking ≥80% complete response rate at 12 months is now the program quality benchmark.',
  },
  {
    title: 'RACE Trial (EBMT Severe Aplastic Anemia) — NEJM 2022',
    finding: 'Phase III randomized trial of 197 patients comparing horse ATG + cyclosporine ± eltrombopag showed 3-month complete response of 22% with eltrombopag vs. 10% without (P=0.01), and 6-month overall response 68% vs. 41% (P<0.001). 2-year overall survival was 91% vs. 89% with no excess clonal evolution.',
    implication: 'NPs must document Day 1 eltrombopag 150 mg initiation (50 mg in East Asian patients), monthly clonal evolution surveillance (cytogenetics + NGS at 6, 12, 24 months), and lifetime annual MDS/AML clonal evolution screening per RACE long-term follow-up protocol. The RACE results are now incorporated into both NCCN and BSH first-line SAA guidelines.',
  },
  {
    title: 'QUAZAR AML-001 (Oral Azacitidine Maintenance) — NEJM 2020',
    finding: 'Phase III trial of 472 AML patients in remission post-induction showed CC-486 (oral azacitidine, Onureg) maintenance improved median OS to 24.7 vs. 14.8 months (HR 0.69, P<0.001) and relapse-free survival to 10.2 vs. 4.8 months versus placebo. AML with myelodysplasia-related changes (AML-MRC) subgroup benefited equally to de novo AML.',
    implication: 'Bone marrow failure NPs managing high-risk MDS progressing to AML or AML-MRC must document monthly oral azacitidine (Onureg) 300 mg PO Days 1–14 of 28-day cycle, CBC monitoring, GI toxicity grading (CTCAE v5.0), and antiemetic prophylaxis. Quarterly MRD (measurable residual disease) flow cytometry response documentation is now standard practice.',
  },
  {
    title: 'MEDALIST (Luspatercept in Lower-Risk MDS) — NEJM 2020',
    finding: 'Phase III trial of 229 patients with lower-risk MDS with ring sideroblasts (RS-MDS) showed luspatercept (Reblozyl) achieved RBC transfusion independence ≥8 weeks in 38% vs. 13% placebo (P<0.001), and ≥12 weeks in 28% vs. 8%. SF3B1-mutated patients had the highest response rates across all subgroups analyzed.',
    implication: 'NPs managing transfusion-dependent lower-risk MDS-RS must document SF3B1 mutation status (NGS), baseline transfusion burden (≥2 RBC units per 8 weeks), 3-cycle response assessment per IWG 2018 criteria, and luspatercept 1.0–1.75 mg/kg SC q3wk dose titration with serial Hgb tracking. Failure to achieve RBC-TI by Cycle 9 triggers therapy reassessment.',
  },
  {
    title: 'Eculizumab in PNH (TRIUMPH/SHEPHERD) — NEJM 2006/Blood 2008',
    finding: 'Pivotal trials of 87 PNH patients with eculizumab vs. placebo showed 49% transfusion independence at 26 weeks (vs. 0% placebo), LDH reduction by 86% (1,400 → 240 U/L), and 92% reduction in thromboembolic events (the leading cause of PNH mortality). Long-term SHEPHERD extension confirmed normalized survival versus age-matched controls.',
    implication: 'PNH NPs must document meningococcal MenACWY + MenB vaccination ≥2 weeks pre-induction (FDA REMS requirement), q2wk eculizumab 900 mg or q8wk ravulizumab maintenance dosing, quarterly LDH/haptoglobin/reticulocyte hemolysis panel, and breakthrough hemolysis evaluation (LDH >1.5x ULN triggers PK-PD investigation and possible C5 polymorphism testing for ravulizumab nonresponders).',
  },
]

const schedule = [
  {
    frequency: 'Every 4 Years',
    item: 'AOCNP Certification Renewal',
    details: 'Advanced Oncology Certified Nurse Practitioner — 45 oncology-specific CE credits required, including hematologic malignancy and bone marrow failure CE allocation. ONCC tracks via OCT (Online CE Tracker).',
  },
  {
    frequency: 'Every 5 Years',
    item: 'AGACNP-BC Renewal (ANCC)',
    details: 'Adult-Gerontology Acute Care NP renewal — 1,000 clinical practice hours + 75 CE credits (25 must be pharmacology) for inpatient bone marrow failure, induction therapy, and HSCT co-management privileges.',
  },
  {
    frequency: 'Annual',
    item: 'ASH Annual Meeting Bone Marrow Failure CE',
    details: 'American Society of Hematology Annual Meeting (December) — required attendance for aplastic anemia, MDS, and PNH session CE and NCCN guideline updates; 20+ CE credits available.',
  },
  {
    frequency: 'Monthly',
    item: 'Eltrombopag (Promacta) CBC + LFT Monitoring',
    details: 'CBC with differential weekly during induction (Weeks 1–4) then monthly; ALT/AST monthly; bilirubin monthly. Hold if ALT >3x ULN, dose-reduce per FDA label for hepatotoxicity or platelets >200,000/μL.',
  },
  {
    frequency: 'Quarterly',
    item: 'CIBMTR TED/CRF Data Submission',
    details: 'Center for International Blood and Marrow Transplant Research — Transplant Essential Data and Comprehensive Report Form submission deadlines at Day 100, 6 months, 1 year, and annually thereafter post-allogeneic HSCT.',
  },
  {
    frequency: 'Quarterly',
    item: 'PNH Flow Cytometry Surveillance',
    details: 'High-sensitivity FLAER + GPI-anchored protein flow cytometry for PNH clone monitoring in aplastic anemia and MDS patients; clone size trending (Type II vs. Type III RBC and granulocyte populations).',
  },
  {
    frequency: 'Every 2 Weeks',
    item: 'Eculizumab (Soliris) Infusion Documentation',
    details: 'Maintenance 900 mg IV q2wk for PNH; pre-infusion LDH, vital signs, and breakthrough hemolysis screen; meningococcal vaccination status verification (MenACWY + MenB current within 5 years).',
  },
  {
    frequency: 'Every 8 Weeks',
    item: 'Ravulizumab (Ultomiris) Maintenance',
    details: 'Body weight-based dosing (3,000–3,600 mg IV q8wk); pre-infusion LDH, haptoglobin, reticulocyte, total bilirubin; FDA REMS meningococcal vaccine compliance verification.',
  },
  {
    frequency: 'Every 6 Months',
    item: 'Aplastic Anemia Hematologic Response Assessment',
    details: 'Camitta criteria evaluation at 3 months and 6 months post-IST induction — CR: ANC >1,000, platelets >100,000, Hgb >10 g/dL; PR: transfusion independence + ANC >500. Drives second-line HSCT vs. eltrombopag continuation decisions.',
  },
  {
    frequency: 'Annual',
    item: 'MDS IPSS-R + IPSS-M Recalculation',
    details: 'Annual bone marrow biopsy with cytogenetics + NGS (31-gene panel including TP53, SF3B1, ASXL1, RUNX1, EZH2) for IPSS-R and IPSS-M risk recalculation and HSCT eligibility re-evaluation in eligible patients <70 years.',
  },
]

export default function Page() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Bone Marrow Failure Nurse Practitioners"
        title="Every Certification. Every CBC. Every CIBMTR Deadline."
        subtitle="Bone marrow failure NPs co-manage aplastic anemia, MDS, PNH, and Diamond-Blackfan anemia with overlapping AOCNP and AGACNP-BC credentials, monthly eltrombopag and complement inhibitor monitoring, quarterly CIBMTR registry deadlines, and lifetime clonal evolution surveillance. Momenties consolidates every certification renewal, IST protocol cycle, and CBC interval into one calendar so nothing slips through the cracks."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Bone Marrow Failure NP Practice
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
              The Evidence Base Driving Bone Marrow Failure NP Compliance
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
              Bone Marrow Failure NP Certification & CE Schedule
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
        headline="Ready to Achieve ≥80% Complete Response Tracking in Severe Aplastic Anemia?"
        subtext="Momenties consolidates AOCNP and AGACNP-BC renewals, monthly eltrombopag CBCs, q2wk eculizumab and q8wk ravulizumab infusions, quarterly CIBMTR TED/CRF submissions, and annual MDS IPSS-R/IPSS-M recalculation into one accountable calendar — so every Camitta criterion checkpoint and clonal evolution surveillance interval is on time, every cycle."
      />
    </main>
  )
}
