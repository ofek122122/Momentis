import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Vasculitis Nurse Practitioner Scheduling Guide — ANCA, Rituximab & BVAS | Momenties',
  description: 'Scheduling infrastructure for NPs managing rituximab pre-infusion checks, cyclophosphamide toxicity monitoring, ANCA trending, PCP prophylaxis adherence, and relapse-education for ANCA-associated vasculitis clinics.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Rituximab Pre-Infusion CBC/IgG/Hepatitis B Screening',
    description: 'Pre-rituximab infusion checklist: CBC with differential (ANC >1,000/μL required; hold for active infection or ANC <1,000); serum IgG level (hold or escalate IVIG replacement if IgG <400 mg/dL with recurrent infections — rituximab-related hypogammaglobulinemia cumulative incidence ~30% at 5 years on MAINRITSAN); hepatitis B surface antigen and anti-HBc antibody — rituximab is contraindicated in active HBV and requires antiviral prophylaxis (entecavir or tenofovir) for resolved HBV (HBsAg-negative/anti-HBc-positive) throughout and 12 months post-rituximab; HIV and hepatitis C screening at baseline; CD19/CD20 B-cell count before each MAINRITSAN dose to confirm continued depletion — redosing when CD19 >10 cells/μL signals B-cell recovery and rising relapse risk; pre-medication protocol: methylprednisolone 100 mg IV, diphenhydramine 50 mg IV, and acetaminophen 650 mg PO 30–60 minutes before rituximab; 2-hour post-infusion observation with vital signs q30min for cytokine release or infusion reaction.',
  },
  {
    icon: Clock,
    title: 'Cyclophosphamide CBC/UA/Bladder Toxicity Monitoring with MESNA',
    description: 'Pre-cyclophosphamide pulse checklist: CBC with differential (ANC ≥1,500/μL and platelet ≥100,000/μL before each IV pulse; neutrophil nadir at Day 10–14 — next-cycle dose reduction 20–25% if ANC nadir <1,000/μL); urinalysis with microscopy before every pulse — hold for hematuria (≥25 RBCs/HPF) and investigate for hemorrhagic cystitis before dose continuation; MESNA administration at 20% of cyclophosphamide dose IV at 0 h, 4 h, and 8 h post-infusion for urothelial protection; oral hydration instruction ≥2 L/day and morning-first-void protocol for oral cyclophosphamide patients; cumulative dose log — document toward 12–18 g lifetime cap with bladder cancer risk counseling and annual urine cytology after cumulative exposure >10 g; gonadal toxicity counseling (premature ovarian insufficiency risk in women <35 years — fertility preservation options before >6 pulses); serum creatinine and CMP before each pulse with dose adjustment for eGFR <30 mL/min; CXR or chest CT before reinduction for patients with history of alveolar hemorrhage or pulmonary infiltrates.',
  },
  {
    icon: BarChart3,
    title: 'PCP Prophylaxis Initiation and Sulfa-Allergy Alternative',
    description: 'Trimethoprim-sulfamethoxazole (TMP-SMX) Pneumocystis jirovecii prophylaxis: TMP-SMX DS (160/800 mg) PO daily or 3×/week throughout rituximab or cyclophosphamide induction and entire maintenance period — initiate simultaneously with first immunosuppressive dose, not after; sulfa-allergy protocol: dapsone 100 mg PO daily (G6PD screening required; hold for methemoglobinemia or hemolysis) as first-line alternative, or atovaquone 1,500 mg PO daily with food for dapsone-intolerant patients; inhaled pentamidine 300 mg nebulized monthly as third-line option for GI-intolerant patients; document allergy grading — mild rash tolerated with desensitization vs. severe (SJS/TEN, anaphylaxis) requiring switch; PCP prophylaxis reminder in EMR linked to rituximab and cyclophosphamide order sets; continuation through ≥6 months after rituximab cessation and prednisone taper to <10 mg/day; annual influenza and pneumococcal (PCV20 or PCV15→PPSV23) vaccination documentation — live vaccines (zoster live, MMR) contraindicated during B-cell-depleting therapy.',
  },
  {
    icon: Users,
    title: 'ANCA + BVAS Trending and Relapse-Education Protocol',
    description: 'Quarterly PR3-ANCA (GPA) or MPO-ANCA (MPA/EGPA) ELISA with titer trending — rising ANCA with new symptoms triggers same-week urgent evaluation; isolated ANCA rise without symptoms escalates surveillance to monthly with closer clinical follow-up per MAINRITSAN-3 guidance; BVAS (Birmingham Vasculitis Activity Score) documentation at every visit — BVAS >0 triggers systematic organ-system review, new tissue biopsy consideration, and attending rheumatologist notification; relapse education protocol for patients and families: written AAV relapse recognition card covering constitutional symptoms (fever, night sweats, weight loss), ENT (epistaxis, nasal crusting, hoarseness, hearing loss), renal (foamy or discolored urine, leg swelling), pulmonary (hemoptysis, unexplained dyspnea), and constitutional damage vs. active relapse differentiation; 24-hour NP hotline or after-hours triage protocol for symptom reports with same-day laboratory (ANCA, urinalysis, CBC, creatinine) and same-week clinical evaluation pathways; structured relapse-response escalation tree: NP-to-rheumatologist, rheumatologist-to-nephrology/pulmonology/ENT, to inpatient admission with rescue rituximab or cyclophosphamide.',
  },
]

const studies = [
  {
    title: 'RAVE Trial (Rituximab vs. Cyclophosphamide in ANCA AAV) — NEJM 2010',
    finding: 'Randomized controlled trial of 197 patients with severe GPA or MPA comparing rituximab 375 mg/m² weekly × 4 vs. oral cyclophosphamide for remission induction. Rituximab was non-inferior at 6 months (remission rate 64% vs. 53%) and superior in relapsing disease (67% vs. 42%). Severe adverse events were similar between arms; B-cell depletion was complete in 97% at month 1.',
    implication: 'NPs coordinating rituximab induction must document 4-week infusion schedule completion, pre-infusion CBC and IgG checks at each dose, CD19 B-cell depletion confirmation by month 1, and transition to MAINRITSAN maintenance at month 6. Rituximab superiority in relapsing AAV makes re-induction the preferred rescue pathway — NPs must recognize relapse early and activate the re-induction protocol without delay.',
  },
  {
    title: 'MAINRITSAN-1/2/3 (Rituximab Maintenance in AAV) — NEJM 2014/JAMA 2020/ARD 2022',
    finding: 'MAINRITSAN-1 (NEJM 2014): rituximab 500 mg Q6m significantly reduced major relapse vs. azathioprine (5% vs. 29% at 28 months, P<0.001). MAINRITSAN-2 (JAMA 2020): tailored rituximab redosing guided by ANCA titer or CD19 reconstitution was non-inferior to fixed-interval dosing. MAINRITSAN-3 (ARD 2022): 4-year vs. 2-year rituximab maintenance showed further relapse reduction at 4 years (HR 0.44) with acceptable safety.',
    implication: 'NPs managing AAV maintenance must track MAINRITSAN Q6m rituximab 500 mg doses, monitor CD19 B-cell counts and ANCA titers before each redose (MAINRITSAN-2 algorithm), document IgG levels q6m with IVIG replacement threshold (IgG <400 mg/dL + recurrent infection), and schedule 4-year maintenance endpoint discussions at year 3. Rising CD19 or ANCA without symptoms escalates to monthly surveillance — not automatic redosing.',
  },
  {
    title: 'ADVOCATE Trial (Avacopan in ANCA AAV) — NEJM 2021',
    finding: 'Phase III randomized trial of 331 GPA/MPA patients comparing avacopan 30 mg PO BID vs. prednisone taper as adjunct to rituximab or cyclophosphamide induction. Avacopan was non-inferior at week 26 (72.3% vs. 70.1% sustained remission) and superior at week 52 (65.7% vs. 54.9%, P=0.007), with significantly less steroid-related toxicity (BVAS-assessed) and better renal recovery.',
    implication: 'NPs co-managing avacopan therapy must document twice-daily 30 mg PO dosing compliance, monthly LFTs (hepatotoxicity Grade 3+ triggers hold), steroid taper coordination (avacopan replaces standard prednisone taper — not add-on), and BVAS-confirmed sustained remission documentation at weeks 26 and 52. Avacopan is approved as adjunct — not monotherapy — and requires concurrent rituximab or cyclophosphamide induction.',
  },
  {
    title: 'PEXIVAS Trial (Plasma Exchange + Reduced-Dose Steroids in AAV) — NEJM 2020',
    finding: 'Randomized 2×2 factorial trial of 704 patients with severe AAV (creatinine >1.7 mg/dL or alveolar hemorrhage) showed plasma exchange did not reduce end-stage renal disease or death at 7 years (HR 1.07, P=0.35). Reduced-dose steroids were non-inferior to standard-dose for ESRD/death and significantly reduced serious infections (27.3% vs. 33.2%).',
    implication: 'NPs should use reduced-dose steroid protocol (PEXIVAS schedule) as standard for induction — not standard-dose — coordinating prednisolone taper milestones at weeks 1, 5, 9, 13, and 26 toward ≤5 mg/day by month 6. Plasma exchange is not indicated for routine severe AAV; reserve for creatinine >5.7 mg/dL with rapid deterioration or refractory DAH per center protocols. Document steroid taper adherence and cumulative dose at each visit.',
  },
  {
    title: 'MIRRA Trial (Mepolizumab in EGPA) — NEJM 2017',
    finding: 'Phase III randomized trial of 136 patients with relapsing/refractory EGPA treated with mepolizumab 300 mg SC Q4wk vs. placebo showed accrued remission weeks (28% vs. 3%, P<0.001), sustained remission at week 52 (32% vs. 3%), and significant oral corticosteroid reduction. Blood eosinophil count fell >80% from baseline; BVAS and asthma/nasal symptom scores improved significantly.',
    implication: 'NPs managing EGPA patients on mepolizumab must document monthly SC injection scheduling, pre-injection blood eosinophil count (target <300 cells/μL on therapy), monthly BVAS for EGPA-specific features (peripheral neuropathy, cardiac infiltration, GI vasculitis), corticosteroid taper milestones, asthma exacerbation rate, and skin/sinus/cardiac response. ANCA status (MPO-ANCA positive vs. negative) does not predict mepolizumab response — schedule all EGPA patients per MIRRA protocol.',
  },
]

const schedule = [
  {
    frequency: 'Every 5 Years',
    item: 'AGPCNP-BC Credential Renewal (ANCC)',
    details: 'Adult-Gerontology Primary Care NP Board Certified renewal — 1,000 clinical practice hours + 75 CE credits (25 pharmacology) for outpatient AAV management, rituximab prescribing, and vasculitis disease monitoring oversight.',
  },
  {
    frequency: 'Annual',
    item: 'ACR Annual Meeting Vasculitis Session CE',
    details: 'American College of Rheumatology Annual Meeting (November) — required attendance for ANCA AAV, GPA, MPA, EGPA, and large-vessel vasculitis session CE; NCCN and EULAR guideline update review; 20+ CE credits available.',
  },
  {
    frequency: 'Annual',
    item: 'VCRC / DCVAS Vasculitis Registry Data Submission',
    details: 'Vasculitis Clinical Research Consortium and DCVAS registry annual data submission — BVAS, VDI, ANCA titers, organ damage documentation, and treatment outcome reporting for center benchmarking and national vasculitis surveillance.',
  },
  {
    frequency: 'Pre-Infusion',
    item: 'Rituximab Pre-Infusion CBC/IgG/HBV Screen',
    details: 'ANC >1,000/μL, IgG level, hepatitis B sAg/anti-HBc, CD19 B-cell count, and vital signs before every rituximab dose. Pre-medicate with methylprednisolone 100 mg IV + diphenhydramine 50 mg IV + acetaminophen 650 mg PO 30–60 min prior. Observe 2 hours post-infusion.',
  },
  {
    frequency: 'Monthly',
    item: 'Cyclophosphamide CBC/UA/Creatinine Monitoring',
    details: 'ANC ≥1,500 and platelet ≥100,000 before each pulse; urinalysis with microscopy (hold for ≥25 RBCs/HPF); CMP for creatinine and electrolytes; MESNA 20% of CYC dose at 0 h/4 h/8 h; cumulative dose logging toward 12–18 g cap.',
  },
  {
    frequency: 'Quarterly',
    item: 'PR3-ANCA / MPO-ANCA + BVAS Assessment',
    details: 'PR3-ANCA (GPA) or MPO-ANCA (MPA/EGPA) ELISA titer plus BVAS scoring at every quarterly visit; rising ANCA triggers same-week urgent evaluation; isolated ANCA rise escalates surveillance to monthly with attending rheumatologist notification.',
  },
  {
    frequency: 'Quarterly',
    item: 'CD19 B-Cell Quantification',
    details: 'Pre-MAINRITSAN redose CD19/CD20 flow cytometry — CD19 >10 cells/μL signals B-cell recovery and guides redosing timing per MAINRITSAN-2 algorithm. CD19 <10 cells/μL at scheduled redose supports deferral with continued monthly ANCA surveillance.',
  },
  {
    frequency: 'Ongoing',
    item: 'PCP Prophylaxis (TMP-SMX or Alternative)',
    details: 'TMP-SMX DS daily or 3×/week throughout immunosuppression and ≥6 months post-rituximab/prednisone taper. Sulfa-allergy alternative: dapsone 100 mg daily (G6PD first) or atovaquone 1,500 mg daily with food. Document allergy grading and alternative at every visit.',
  },
  {
    frequency: 'Every 6 Months',
    item: 'Serum IgG + IVIG Replacement Review',
    details: 'Serum IgG every 6 months on rituximab maintenance — IgG <400 mg/dL plus recurrent infection triggers IVIG replacement initiation (0.4 g/kg IV q3–4wk). IgG <200 mg/dL triggers replacement regardless of infection history per most center protocols.',
  },
  {
    frequency: 'Annual',
    item: 'VDI + Bladder Cancer Surveillance + DEXA',
    details: 'Annual VDIPLUS across 11 organ domains; annual urine cytology for cumulative cyclophosphamide >10 g; bone density DEXA every 1–2 years on chronic steroids with bisphosphonate per FRAX; annual cardiovascular risk assessment (lipids, HbA1c, blood pressure).',
  },
]

export default function Page() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — Vasculitis"
        title="Vasculitis Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing rituximab pre-infusion checks, cyclophosphamide toxicity monitoring, ANCA trending, PCP prophylaxis adherence, and relapse-education for ANCA-associated vasculitis clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Vasculitis NP Practice
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
              The Evidence Base Driving Vasculitis NP Compliance
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
              Vasculitis NP Certification & Monitoring Schedule
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
        headline="Ready to Achieve BVAS-Zero Remission Tracking in Your ANCA Vasculitis Clinic?"
        subtext="Momenties consolidates AGPCNP-BC renewals, rituximab pre-infusion checklists, cyclophosphamide CBC and MESNA intervals, quarterly ANCA and CD19 monitoring, PCP prophylaxis tracking, and relapse-education protocol reminders into one accountable calendar — so every MAINRITSAN dose, BVAS assessment, and IgG surveillance interval is on time, every cycle."
      />
    </main>
  )
}
