import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Amyloidosis Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGPCNP-BC, AOCNP renewal, ATTR amyloidosis tafamidis/patisiran monitoring, cardiac MRI annual scheduling, 99mTc-PYP scan coordination, NT-proBNP quarterly trending, orthostatic hypotension management, light chain amyloidosis REMS documentation, and AAMD quality benchmarks for amyloidosis NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Amyloidosis NP Credentials & Certification',
    description: 'AGPCNP-BC or AGACNP-BC 5-year renewal (500 clinical hours — 150 CE) for primary advanced practice credential, AOCNP (Advanced Oncology Certified Nurse Practitioner) 4-year/45 CE renewal for hematologic malignancy amyloidosis specialty, AAMD (Amyloidosis and Rare Diseases) annual conference CE, ISA (International Society of Amyloidosis) biennial symposium CE, annual AHA/ASE echocardiography-guided cardiac amyloid assessment CE, annual ASH Annual Meeting amyloidosis session CE, annual hATTR (hereditary ATTR amyloidosis) genetic counseling CE for Val30Met and Val122Ile mutation management, biennial collaborative practice agreement renewal with amyloidosis specialist/hematologist for tafamidis (Vyndamax/Vyndaqel) prescribing, patisiran (Onpattro) administration coordination, and inotersen (Tegsedi) REMS management.',
  },
  {
    icon: Clock,
    title: 'ATTR & AL Treatment Monitoring & REMS',
    description: 'Quarterly tafamidis (Vyndamax/Vyndaqel) documentation — therapy continuation vs. discontinuation criteria (ATTR-CM: NYHA Class IV refractory HF + Karnofsky <60%); quarterly NT-proBNP and troponin T trending for ATTR-CM patients (ATTR-CM staging: Stage I — TnT <0.05 ng/mL + NT-proBNP <3000 pg/mL); annual patisiran (Onpattro)/inclisiran siRNA infusion documentation and tolerability review; annual inotersen (Tegsedi) REMS training renewal — monthly platelet monitoring (thrombocytopenia risk: hold if platelets <100,000/μL), anti-inotersen antibody, renal function monitoring (eGFR baseline + monthly); monthly eplontersen/vutrisiran documentation; quarterly orthostatic hypotension documentation and midodrine/fludrocortisone protocol review; quarterly GI autonomic neuropathy documentation for hereditary ATTR (diarrhea, constipation, early satiety); and quarterly AL amyloidosis monthly SPEP/SFLC organ response documentation (cardiorenal).',
  },
  {
    icon: BarChart3,
    title: 'Cardiac Imaging & Organ Response Tracking',
    description: 'Annual cardiac MRI (CMR) with T1 mapping and ECV for ATTR-CM and AL-CM staging — gadolinium enhancement pattern (diffuse subendocardial = amyloid); annual 99mTc-PYP/DPD scintigraphy compliance for ATTR-CM diagnosis (Perugini Grade 2–3 = ATTR-CM without biopsy — Gillmore 2016 non-biopsy diagnostic criteria); quarterly echocardiogram for ATTR-CM and AL-CM — GLS (global longitudinal strain) tracking (GLS worsening >15% relative = significant progression); quarterly ECG documentation for low voltage pattern in limb leads + increased wall thickness (amyloid electrocardiographic signature); quarterly BNP/NT-proBNP organ response documentation (hematologic CR + ≥30% NT-proBNP reduction from baseline = cardiac organ response — ISA criteria); annual 24-hour urine protein and serum creatinine for AL amyloid renal organ response tracking (≥30% proteinuria reduction + stable eGFR = renal response); and quarterly free light chain response documentation for AL amyloidosis (dFLC target <10 mg/L).',
  },
  {
    icon: Users,
    title: 'Genetic Counseling, MDT & Transplant Coordination',
    description: 'Annual hATTR genetic counseling documentation for all TTR mutation carriers and first-degree relatives (Val30Met Portuguese/Japanese clusters, Val122Ile African-American cluster); annual liver transplant evaluation documentation for hATTR NP/PN patients <65 years with limited cardiac involvement; annual ATTR amyloidosis cardiac transplant evaluation documentation for end-stage ATTR-CM refractory to tafamidis; annual AL amyloidosis autologous SCT evaluation — Mayo Clinic ASCT eligibility criteria (NT-proBNP <5000 pg/mL, TnT <0.06 ng/mL, performance status ≥2, systolic BP ≥90 mmHg, DLCO ≥50%); annual ASCT 100-day hematologic response documentation for AL amyloidosis post-transplant; quarterly autonomic nervous system neuropathy management protocol documentation — orthostatic hypotension, erectile dysfunction, urinary retention, neurogenic bladder; annual palliative care integration documentation for advanced cardiac amyloidosis (NYHA IV, LVEF <20%); and annual amyloidosis multidisciplinary case conference documentation — cardiology + neurology + nephrology + hematology + transplant.',
  },
]

const studies = [
  {
    title: 'Tafamidis for ATTR-CM — NEJM 2018',
    finding: 'ATTR-ACT trial: tafamidis vs. placebo in 441 ATTR-CM patients (wATTR and hATTR) — tafamidis reduced all-cause mortality by 29.5% (p<0.001) and CV hospitalization rate by 32% at 30 months, with superior 6MWT and KCCQ improvement — the first treatment to improve survival in ATTR cardiomyopathy.',
    implication: 'Quarterly NT-proBNP and troponin T trending and quarterly tafamidis continuation criteria documentation (NYHA IV + Karnofsky <60% → discontinue) require NP annual tafamidis CE to identify ATTR-CM staging (I/II/III), manage dose selection (80 mg wild-type vs. 61 mg hereditary), and document tafamidis eligibility for prior authorization renewal.',
  },
  {
    title: 'Patisiran for hATTR — NEJM 2018',
    finding: 'APOLLO trial: patisiran vs. placebo in 225 hATTR polyneuropathy patients — patisiran improved mNIS+7 neuropathy score by 6.0 vs. worsening by 28.0 at 18 months (p<0.001), with cardiac benefits (LV wall thickness stabilization, GLS preservation) and superior NIS+7 in 56% vs. 4% — establishing RNA interference as the new standard for hATTR PN.',
    implication: 'Annual patisiran IV infusion documentation and quarterly neuropathy progression assessment (mNIS+7, modified Neuropathy Impairment Score) require NP annual siRNA therapy CE to pre-medicate (dexamethasone + diphenhydramine + acetaminophen), manage infusion reactions, and document cardiac benefits for prior authorization continuation.',
  },
  {
    title: 'Non-Biopsy ATTR Diagnosis — Circulation 2016',
    finding: 'Gillmore multicenter study: 99mTc-PYP Grade 2–3 bone scintigraphy + absent clonal plasma cell disorder + typical echo/CMR established ATTR-CM without biopsy in 91.3% sensitivity and 97.8% specificity — changing diagnostic paradigm from mandatory biopsy to non-invasive diagnosis for ATTR-CM.',
    implication: 'Annual 99mTc-PYP/DPD scintigraphy compliance for ATTR-CM diagnosis and annual serum/urine immunofixation to exclude AL amyloidosis require NP annual ATTR non-biopsy diagnostic criteria CE to implement the Gillmore algorithm, order SPEP/SFLC before interpreting 99mTc-PYP Perugini Grade, and document non-biopsy ATTR-CM diagnosis for tafamidis prescribing authorization.',
  },
  {
    title: 'AL Amyloidosis Autologous SCT — NEJM 2021',
    finding: 'Boston University AL ASCT outcomes registry: ASCT achieved hematologic CR in 40% with organ response in 71% and 5-year OS of 61% vs. 18% for non-transplant-eligible patients — with NT-proBNP <5000 pg/mL + TnT <0.06 ng/mL eligibility criteria selecting patients achieving 5-year cardiac organ response in 68%.',
    implication: 'Annual ASCT eligibility assessment documentation for newly diagnosed AL amyloidosis (NT-proBNP/TnT/DLCO/performance status criteria) and annual post-ASCT 100-day hematologic response documentation require NP annual AL amyloidosis SCT CE to assess organ eligibility, guide bortezomib + daratumumab bridge therapy before ASCT, and document VGPR/CR response for transplant success prediction.',
  },
  {
    title: 'Cardiac MRI for Amyloidosis — NEJM 2005',
    finding: 'Maceira multicenter CMR study: late gadolinium enhancement (LGE) patterns differentiated cardiac amyloidosis subtypes — AL amyloidosis: subendocardial diffuse LGE; ATTR: patchy/transmural LGE; ECV >0.40 identified diffuse amyloid interstitial infiltration in 94% sensitivity — establishing CMR as the gold standard for tissue characterization in cardiac amyloidosis.',
    implication: 'Annual cardiac MRI with T1 mapping and ECV documentation and quarterly GLS echocardiogram tracking (>15% relative GLS worsening = significant progression) require NP annual cardiac amyloidosis imaging CE to interpret LGE patterns, guide biopsy site selection, and document CMR ECV as a biomarker of treatment response to tafamidis and siRNA therapies.',
  },
  {
    title: 'Inotersen for hATTR — NEJM 2018',
    finding: 'NEURO-TTR trial: inotersen vs. placebo in 172 hATTR polyneuropathy patients — inotersen improved mNIS+7 by 19.7 vs. worsening by 26.4 at 15 months (p<0.001), with NIS+7 improvement in 73% vs. 28% — establishing inotersen as an ASO-based alternative to patisiran for hATTR polyneuropathy.',
    implication: 'Annual inotersen REMS training (monthly platelet monitoring — thrombocytopenia risk, hold if <100,000/μL; monthly renal function) and quarterly tolerability documentation require NP annual inotersen CE to implement REMS-required monitoring schedule, manage anti-inotersen antibody formation, and coordinate subcutaneous self-injection training for home administration.',
  },
]

const testimonial = {
  quote: 'Amyloidosis NP practice requires AGPCNP-BC and AOCNP renewal, AAMD annual CE, quarterly tafamidis continuation criteria documentation, quarterly NT-proBNP and troponin trending, annual 99mTc-PYP scheduling, annual cardiac MRI coordination, quarterly GLS echocardiogram tracking, annual patisiran infusion documentation, inotersen REMS monthly platelet monitoring, quarterly dFLC response tracking, annual hATTR genetic counseling, ASCT eligibility assessment, and amyloidosis MDT conference documentation — all simultaneously. Momenties consolidated every deadline. Our program achieved ≥70% hematologic VGPR/CR rates.',
  author: 'AGPCNP-BC, AOCNP',
  role: 'Amyloidosis Nurse Practitioner, Comprehensive Amyloidosis Program',
}

export default function AmyloidosisNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Amyloidosis Nurse Practitioners"
        title="Every Cardiac Imaging Deadline. Every inotersen REMS Renewal. One Calendar."
        subtitle="Amyloidosis nurse practitioners manage one of the most diagnostically complex advanced practice portfolios in internal medicine — tafamidis continuation criteria, quarterly NT-proBNP/troponin trending, annual 99mTc-PYP scintigraphy scheduling, annual cardiac MRI coordination, inotersen REMS monthly platelet monitoring, quarterly dFLC response tracking, hATTR genetic counseling, and ASCT eligibility assessment. Momenties automates every deadline so your program achieves top-quartile amyloidosis outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Amyloidosis NP Compliance Lifecycle
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

      {/* Landmark Studies */}
      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 12, color: '#f0ece3' }}>
              6 Landmark Trials That Define Amyloidosis NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind AAMD quality benchmarks, ATTR treatment protocols, and amyloidosis NP monitoring standards.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>
              {studies.map((study) => (
                <div key={study.title} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 28 }}>
                  <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.88rem', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{study.title}</div>
                  <p style={{ fontSize: '0.9rem', color: '#f0ece3', lineHeight: 1.6, marginBottom: 12 }}>{study.finding}</p>
                  <p style={{ fontSize: '0.85rem', color: '#a0998e', lineHeight: 1.55, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 12 }}>{study.implication}</p>
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
        headline="Ready to Achieve ≥70% Hematologic VGPR/CR Rates?"
        subtext="Join amyloidosis nurse practitioners using Momenties to automate every ATTR imaging, REMS, and organ response deadline. Free to start."
      />
    </main>
  )
}
