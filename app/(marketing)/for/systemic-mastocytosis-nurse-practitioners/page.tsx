import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Systemic Mastocytosis Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate midostaurin (Rydapt) 28-day cycle monitoring, serum tryptase quarterly tracking, KIT D816V mutation surveillance CE, WHO 2022 systemic mastocytosis classification annual review, avapritinib (BLU-285/Ayvakit) dose management, AOCNP renewal, anaphylaxis epinephrine protocol competency, and bone marrow biopsy MCAS/MCL surveillance for systemic mastocytosis nurse practitioners.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Oncology NP Credentials & Mastocytosis CE',
    description: 'AOCNP (Advanced Oncology Certified Nurse Practitioner) 4-year/45 CE renewal for hematologic malignancy and advanced systemic mastocytosis subspecialty practice; AGNP-C or FNP-BC 5-year/100 CE renewal for primary advanced practice credential; annual ASH (American Society of Hematology) Annual Meeting mastocytosis session CE; biennial AAAAI (American Academy of Allergy, Asthma & Immunology) Annual Meeting mast cell disease session CE; annual ECNM (European Competence Network on Mastocytosis) consensus criteria CE update; annual TMS (The Mastocytosis Society) provider symposium CE; annual WHO 2022 classification of mast cell disorders update CE (indolent SM, smoldering SM, advanced SM, mast cell leukemia); and biennial collaborative practice agreement renewal with hematologist or allergist-immunologist for midostaurin (Rydapt), avapritinib (Ayvakit/BLU-285), bezuclastinib, omalizumab (Xolair), and cromolyn sodium (Gastrocrom) prescribing oversight.',
  },
  {
    icon: Clock,
    title: 'Midostaurin/Avapritinib Treatment Cycle Management',
    description: 'Daily midostaurin (Rydapt) 100 mg PO BID with food cycle compliance tracking — 28-day cycle structure for advanced SM (ASM, SM-AHN, MCL); weekly CBC during Cycles 1–2 then monthly; monthly LFT monitoring (ALT/AST <3x ULN; hold for Grade 3+); monthly QTc ECG surveillance (hold if QTc >480 ms; CYP3A4 interaction screening with strong inhibitors); daily avapritinib (Ayvakit/BLU-285) 200 mg PO daily for advanced SM and 25 mg PO daily for indolent SM (PIONEER expanded indication) — KIT D816V-targeted; quarterly MR brain imaging surveillance for cognitive/cerebral edema risk (FDA boxed warning — hold for any intracranial hemorrhage signal); monthly bezuclastinib documentation per APEX trial protocol where applicable; quarterly C-Findings response assessment per IWG-MRT-ECNM 2013 criteria (hematologic + organ improvement); and quarterly bone marrow biopsy and serum tryptase response documentation at Cycles 3, 6, 12 for advanced SM — ≥50% serum tryptase reduction = pure pathologic response (PPR) target.',
  },
  {
    icon: BarChart3,
    title: 'Serum Tryptase & Bone Marrow Biopsy Surveillance',
    description: 'Quarterly serum tryptase trending for all SM patients (baseline ≥20 ng/mL = WHO minor criterion; >200 ng/mL frequent in advanced SM); annual hereditary alpha-tryptasemia (HαT) genotyping consideration for elevated baseline tryptase patients (TPSAB1 copy number variants — alpha-tryptase gene duplication/triplication); annual bone marrow biopsy for ISM with WHO criteria reassessment (≥1 major + 1 minor OR ≥3 minor: multifocal mast cell aggregates ≥15 cells, atypical spindle morphology >25%, KIT D816V mutation, aberrant CD2/CD25/CD30 expression by flow, baseline tryptase ≥20 ng/mL); semiannual bone marrow biopsy for advanced SM during midostaurin/avapritinib therapy; annual KIT D816V mutation high-sensitivity ddPCR or ASO-qPCR surveillance (peripheral blood acceptable; sensitivity ~0.01% VAF); annual NGS myeloid panel for SM-AHN (ASXL1, RUNX1, SRSF2, CBL, TET2 mutations confer poor prognosis); quarterly DEXA scan and osteoporosis screening (≥30% of SM patients have low bone mass; bisphosphonate or denosumab indication); and quarterly REMA (Red Española de Mastocitosis) score recalculation for mast cell activation syndrome (MCAS) workup eligibility.',
  },
  {
    icon: Users,
    title: 'MCAS Protocol & Anaphylaxis Emergency Competency',
    description: 'Annual anaphylaxis emergency protocol competency documentation — IM epinephrine 0.3–0.5 mg lateral thigh (1:1000), repeat q5–15 min PRN; H1 + H2 antihistamine combination (diphenhydramine 50 mg + ranitidine/famotidine); IV fluids; methylprednisolone 125 mg IV; quarterly EpiPen / Auvi-Q prescription verification (2 autoinjectors per FDA recommendation for SM patients); quarterly venom immunotherapy (VIT) coordination for Hymenoptera-allergic SM patients (lifetime VIT recommended due to elevated mortality risk); quarterly omalizumab (Xolair) 300–600 mg SC q2–4wk documentation for refractory MCAS/idiopathic anaphylaxis; quarterly oral cromolyn sodium (Gastrocrom) 200 mg QID compliance for GI mast cell symptoms; annual perioperative anesthesia consultation documentation — avoid morphine, codeine, atracurium, succinylcholine (mast cell degranulation triggers) and prefer fentanyl/sevoflurane; quarterly Consensus criteria 2-of-3 MCAS validation documentation (clinical symptoms + ≥20% tryptase increase from baseline + responsive to mast cell-directed therapy); and biennial NIH/NIAID/AAAAI mast cell disorder consensus document review.',
  },
]

const studies = [
  {
    title: 'CPKC412A2213 (D2201) Midostaurin in Advanced SM — NEJM 2016',
    finding: 'Single-arm, open-label phase II trial of 116 patients with advanced systemic mastocytosis (ASM, SM-AHN, MCL) treated with midostaurin 100 mg PO BID. Overall response rate by IWG-MRT-ECNM criteria was 60% (45% major response, 15% partial); median overall survival 28.7 months (vs. historical 9 months for MCL); ≥50% serum tryptase reduction in 60% and ≥50% bone marrow mast cell burden reduction in 51%.',
    implication: 'NPs co-managing advanced SM must document daily midostaurin 100 mg BID with food (CYP3A4 substrate — avoid strong inhibitors), monthly LFTs and QTc ECGs, weekly CBC during Cycles 1–2, and quarterly serum tryptase + bone marrow response assessment per IWG-MRT-ECNM 2013 C-finding criteria. Achieving ≥60% midostaurin response documentation at 6 cycles is now the program quality benchmark.',
  },
  {
    title: 'EXPLORER & PATHFINDER (Avapritinib in Advanced SM) — Nat Med 2021/Lancet Haematol 2023',
    finding: 'PATHFINDER phase II trial of 62 advanced SM patients on avapritinib 200 mg PO daily showed ORR 75% per IWG-MRT-ECNM (32% complete response with full hematologic recovery), median duration of response 38.3 months, and ≥50% reduction in KIT D816V VAF in 68% of patients. EXPLORER long-term data confirmed 75%+ overall response durability beyond 24 months.',
    implication: 'NPs managing advanced SM on avapritinib must document daily 200 mg PO compliance, quarterly MR brain imaging for cerebral edema/intracranial hemorrhage signal (FDA boxed warning — platelet >50,000/μL required at initiation), monthly CBC for Grade 3+ thrombocytopenia, and quarterly KIT D816V VAF ddPCR trending. Avapritinib hold criteria (platelets <50,000, any ICH) must be charted before each cycle continuation.',
  },
  {
    title: 'PIONEER (Avapritinib in Indolent SM) — NEJM Evidence 2023',
    finding: 'Phase II randomized placebo-controlled trial of 212 patients with indolent systemic mastocytosis treated with avapritinib 25 mg PO daily showed significant improvement in ISM-SAF total symptom score (–15.6 vs. –9.2 placebo, P<0.001), ≥50% serum tryptase reduction in 54% vs. 0%, and ≥50% bone marrow mast cell reduction in 53% vs. 23% at 24 weeks.',
    implication: 'NPs managing ISM patients on low-dose avapritinib (25 mg PO daily, FDA-approved May 2023) must document baseline ISM-SAF score, quarterly symptom score recalculation, quarterly serum tryptase trending, baseline platelet count >50,000, and absence of cognitive symptoms or bleeding diathesis before initiation.',
  },
  {
    title: 'KIT D816V Mutation Detection (ECNM/AIM Mastocytosis Consortium) — Leukemia 2014/Blood 2017',
    finding: 'Multicenter analysis of 1,539 SM patients showed KIT D816V mutation in peripheral blood by high-sensitivity ddPCR/ASO-qPCR in 78% of ISM, 89% of advanced SM, and 95% of SM-AHN; KIT D816V VAF ≥10% in peripheral blood independently predicted advanced SM diagnosis (HR 6.4), and serial VAF decline ≥1 log10 correlated with treatment response and overall survival.',
    implication: 'NPs must order baseline high-sensitivity peripheral blood KIT D816V ddPCR (sensitivity ~0.01% VAF) at SM diagnosis, document VAF quarterly during avapritinib/midostaurin therapy, and recognize VAF ≥10% as advanced SM trigger requiring bone marrow biopsy and IWG-MRT-ECNM staging. ASXL1/RUNX1/SRSF2 NGS co-mutations require additional poor-prognosis SM-AHN documentation.',
  },
  {
    title: 'Omalizumab in Refractory MCAS/Mastocytosis — JACI In Practice 2018',
    finding: 'Multicenter retrospective analysis of 71 patients with refractory mast cell activation syndrome and ISM treated with omalizumab 150–600 mg SC q2–4wk reported ≥50% reduction in anaphylactic episodes in 84%, GI symptom improvement in 70%, and ≥50% Hymenoptera venom anaphylaxis prevention in 90% over a median 24-month follow-up. Treatment was well tolerated with no anaphylaxis attributable to omalizumab.',
    implication: 'NPs co-managing MCAS/ISM with refractory anaphylaxis must document omalizumab dosing q2–4wk based on body weight and IgE level, quarterly anaphylaxis episode log, EpiPen prescription compliance (2 autoinjectors), and venom immunotherapy lifetime continuation for Hymenoptera-sensitized SM patients (mortality risk elevated 100-fold vs. general population).',
  },
]

const schedule = [
  {
    frequency: 'Every 4 Years',
    item: 'AOCNP Certification Renewal',
    details: 'Advanced Oncology Certified Nurse Practitioner — 45 oncology-specific CE credits required, with hematologic malignancy and advanced systemic mastocytosis CE allocation. ONCC tracks via Online CE Tracker (OCT).',
  },
  {
    frequency: 'Every 5 Years',
    item: 'AGNP-C / FNP-BC Renewal',
    details: 'Adult-Gerontology or Family Nurse Practitioner Board Certified renewal — 100 CE credits including 25 pharmacology credits. Required for primary care delivery to ISM and chronic mast cell disease patients.',
  },
  {
    frequency: 'Annual',
    item: 'WHO 2022 Mast Cell Disorder Classification CE',
    details: 'Annual review of WHO 2022 classification (indolent SM, smoldering SM, ASM, SM-AHN, MCL, mast cell sarcoma) and IWG-MRT-ECNM 2013 C-findings response criteria for therapeutic response documentation.',
  },
  {
    frequency: 'Daily',
    item: 'Midostaurin (Rydapt) Cycle Documentation',
    details: '100 mg PO BID with food in 28-day cycles for advanced SM. CYP3A4 substrate — verify no strong inhibitor co-medication; antiemetic prophylaxis for 50% Grade 1–2 nausea; document cycle continuation criteria each visit.',
  },
  {
    frequency: 'Daily',
    item: 'Avapritinib (Ayvakit) Compliance Tracking',
    details: '200 mg PO daily for advanced SM; 25 mg PO daily for indolent SM (PIONEER indication). Hold for platelets <50,000/μL or any cognitive/bleeding red flag; quarterly MR brain imaging surveillance per FDA label.',
  },
  {
    frequency: 'Monthly',
    item: 'CBC + LFT + QTc Monitoring',
    details: 'Weekly CBC during midostaurin Cycles 1–2 then monthly; monthly ALT/AST (hold if >3x ULN); monthly QTc ECG (hold if QTc >480 ms or >60 ms increase from baseline) for all advanced SM patients on TKI therapy.',
  },
  {
    frequency: 'Quarterly',
    item: 'Serum Tryptase Trending',
    details: 'Baseline tryptase ≥20 ng/mL is a WHO minor criterion. Quarterly tryptase tracking documents treatment response (≥50% reduction = pure pathologic response target) and identifies progression to advanced SM (>200 ng/mL frequent).',
  },
  {
    frequency: 'Quarterly',
    item: 'KIT D816V ddPCR Surveillance',
    details: 'High-sensitivity peripheral blood KIT D816V allele burden monitoring (~0.01% VAF sensitivity). VAF ≥10% triggers advanced SM workup; serial ≥1 log10 decline correlates with avapritinib/midostaurin response.',
  },
  {
    frequency: 'Quarterly',
    item: 'Anaphylaxis Protocol & EpiPen Verification',
    details: 'IM epinephrine 0.3–0.5 mg autoinjector prescription verification (2 devices per patient); H1+H2 antihistamine + corticosteroid emergency kit review; perioperative anesthesia consult documentation for elective procedures.',
  },
  {
    frequency: 'Annual',
    item: 'Bone Marrow Biopsy + DEXA Scan',
    details: 'Annual bone marrow biopsy for ISM monitoring (semiannual for advanced SM on TKI therapy) with mast cell morphology, flow cytometry CD2/CD25/CD30, and KIT D816V mutation testing; annual DEXA for osteoporosis screening (>30% prevalence in SM).',
  },
]

export default function Page() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Systemic Mastocytosis Nurse Practitioners"
        title="Every Midostaurin Cycle. Every Tryptase. Every WHO Review."
        subtitle="Systemic mastocytosis NPs manage advanced SM, mast cell leukemia, MCAS, and life-threatening anaphylaxis emergencies with daily midostaurin and avapritinib cycles, quarterly serum tryptase and KIT D816V surveillance, and constant readiness for IM epinephrine deployment. Momenties consolidates AOCNP renewal, WHO 2022 classification updates, TKI cycle monitoring, bone marrow biopsy intervals, and anaphylaxis protocol competency into one calendar so every patient encounter is precision-timed."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Systemic Mastocytosis NP Practice
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
              The Evidence Base Driving Systemic Mastocytosis NP Compliance
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
              Systemic Mastocytosis NP Certification & CE Schedule
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
        headline="Ready to Achieve ≥60% Midostaurin Response Documentation in Advanced Systemic Mastocytosis?"
        subtext="Momenties consolidates AOCNP renewals, daily midostaurin and avapritinib cycle tracking, quarterly serum tryptase and KIT D816V VAF monitoring, annual bone marrow biopsies, and anaphylaxis protocol competency into one accountable calendar — so every IWG-MRT-ECNM response checkpoint, MR brain surveillance, and EpiPen verification is on time, every cycle."
      />
    </main>
  )
}
