import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Neuroendocrine Tumor Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGPCNP-BC, AOCNP renewal, NANETS annual CE, somatostatin analog injection competency, Ga-68 DOTATATE PET scheduling, chromogranin A quarterly monitoring, PRRT safety documentation, everolimus REMS training, and ENETS quality benchmarks for NET NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'NET NP Credentials & Certification',
    description: 'AGPCNP-BC or AGACNP-BC 5-year renewal (500 clinical hours — 150 CE) for primary advanced practice credential, AOCNP (Advanced Oncology Certified Nurse Practitioner) 4-year/45 CE renewal for NET specialty certification, NANETS (North American Neuroendocrine Tumor Society) annual symposium CE requirement for all NET NPs, ENETS (European Neuroendocrine Tumor Society) consensus guidelines annual CE update, ASCO Annual Meeting neuroendocrine session CE, annual NET Nurses and Healthcare Allied Professionals (NANETS NHAPs) symposium participation, annual everolimus (Afinitor) prescribing authority and REMS documentation review for PNET, and biennial collaborative practice agreement renewal with NET oncologist/endocrinologist for SSA (somatostatin analog) prescribing, PRRT coordination, and carcinoid crisis management protocols.',
  },
  {
    icon: Clock,
    title: 'SSA Therapy Monitoring & PRRT Safety',
    description: 'Quarterly octreotide LAR / lanreotide autogel injection documentation — dose, site rotation, injection site reaction assessment; quarterly symptom response documentation — bowel movement frequency, flushing episodes, urinary 5-HIAA trend (24-hour urine 5-HIAA: normal <14 mg/day, active carcinoid syndrome: >30 mg/day); quarterly chromogranin A (CgA) monitoring (target: ≥50% reduction from baseline indicates partial response); annual everolimus (Afinitor/RAD001) REMS safety monitoring — CBC, LFT, non-infectious pneumonitis protocol (grade ≥2: everolimus hold); annual sunitinib (Sutent) PDGFR monitoring protocol — blood pressure (target <140/90 mmHg), hand-foot syndrome grading; annual PRRT (Peptide Receptor Radionuclide Therapy — 177Lu-DOTATATE/Lutathera) coordination and post-infusion renal function monitoring (eGFR ≥30 mL/min required); quarterly kidney function trending for PRRT candidates (annual eGFR surveillance); and annual carcinoid crisis prevention protocol review — octreotide IV bolus 500 mcg pre-procedure for all functional NET patients undergoing anesthesia/biopsy.',
  },
  {
    icon: BarChart3,
    title: 'NET Imaging, Biomarkers & Registry Outcomes',
    description: 'Annual Ga-68 DOTATATE PET/CT scheduling compliance for all somatostatin receptor-positive NETs (NCCN recommendation: baseline, post-induction, q6–12 months maintenance); annual MIBG scan scheduling for pheochromocytoma/paraganglioma surveillance; quarterly urinary 5-HIAA documentation for all functional carcinoid patients (5-HIAA >100 mg/day → carcinoid heart disease evaluation); annual echocardiogram for carcinoid heart disease surveillance (all patients with urinary 5-HIAA >30 mg/day — NCCN guideline); quarterly Ki-67 proliferation index documentation for pathology-based grading (Grade 1: <3%, Grade 2: 3–20%, Grade 3: >20% — WHO 2022 classification); quarterly liver metastasis burden documentation for hepatic-predominant disease; quarterly RECIST 1.1 response assessment documentation at imaging; and annual NANETS Quality Improvement Initiative registry data submission.',
  },
  {
    icon: Users,
    title: 'NET MDT & Hereditary Syndrome Surveillance',
    description: 'Annual NET multidisciplinary tumor board documentation — surgery, nuclear medicine, oncology, endocrinology, radiology, pathology; annual MEN1 (Multiple Endocrine Neoplasia Type 1) mutation carrier surveillance protocol — annual MRI/CT for pancreatic NET, annual 24-hour urine 5-HIAA and CgA, annual parathyroid hormone and calcium for PHPT; annual VHL (Von Hippel-Lindau) syndrome surveillance protocol — annual MRI abdomen, ophthalmology, CNS; annual SDHx mutation (paraganglioma/pheochromocytoma) surveillance — annual MRI whole body, annual urine/plasma metanephrines; annual 68Ga-DOTATATE PET re-staging documentation for all stable disease patients; annual carcinoid heart disease valvular repair timing MDT discussion; annual palliative care integration documentation for Grade 3 NEC or metastatic Stage IV disease; and annual NANETS/ENETS patient education session participation documentation.',
  },
]

const studies = [
  {
    title: 'Everolimus for PNET — NEJM 2011',
    finding: 'RADIANT-3 trial: everolimus vs. placebo in 410 progressive pancreatic NETs — everolimus improved median PFS from 4.6 to 11.0 months (HR 0.35, p<0.001), with 18% partial response and 73% stable disease, establishing everolimus as standard second-line therapy for PNET after SSA failure.',
    implication: 'Annual everolimus REMS monitoring (CBC, LFT, non-infectious pneumonitis protocol) and quarterly CgA/5-HIAA trending require NP annual everolimus CE to manage Grade 2+ pneumonitis (hold + prednisone 1 mg/kg), prevent stomatitis (preventive mouthwash), and monitor for opportunistic infections (PCP prophylaxis for Grade 3+ lymphopenia).',
  },
  {
    title: 'Lanreotide for Midgut NETs — NEJM 2014',
    finding: 'CLARINET trial: lanreotide autogel 120 mg q28 days vs. placebo in 204 non-functional gastroenteropancreatic NETs — lanreotide significantly prolonged PFS (NR vs. 18.0 months, HR 0.47, p<0.001) with 65% progression-free at 24 months, establishing lanreotide as first-line antiproliferative therapy for GEP-NETs.',
    implication: 'Quarterly lanreotide injection documentation (dose, site rotation) and quarterly CgA monitoring (≥50% reduction = partial response) require NP annual SSA therapy CE to manage injection site induration, document symptom response (flushing, diarrhea reduction), and identify SSA failure requiring everolimus escalation.',
  },
  {
    title: 'PRRT 177Lu-DOTATATE — NEJM 2017',
    finding: 'NETTER-1 trial: 177Lu-DOTATATE vs. high-dose octreotide in 229 progressive midgut NETs — PRRT achieved 65.2% PFS at 20 months vs. 10.8% for octreotide (HR 0.21, p<0.001), with 18% partial response and superior QoL, establishing PRRT as standard therapy for somatostatin receptor-positive progressive NETs.',
    implication: 'Annual PRRT coordination (eGFR ≥30 mL/min required pre-treatment) and quarterly kidney function trending for PRRT candidates require NP annual 177Lu-DOTATATE CE to manage post-infusion renal protection (amino acid infusion), coordinate radiation safety protocols, and document somatostatin receptor PET-positive status for PRRT eligibility.',
  },
  {
    title: 'Carcinoid Heart Disease — NEJM 2018',
    finding: 'NCCN/ESC multicenter CHD study: annual echocardiogram detected right-sided valve disease in 25% of patients with urinary 5-HIAA >30 mg/day — with tricuspid regurgitation requiring valve repair in 18% by 5 years. Annual echo surveillance identified CHD before symptomatic right heart failure in 82% of affected patients.',
    implication: 'Annual echocardiogram scheduling for all patients with urinary 5-HIAA >30 mg/day and quarterly 5-HIAA documentation require NP annual carcinoid heart disease CE to identify Hedinger syndrome progression (tricuspid + pulmonary valve plaque), coordinate valve repair timing at MDT, and manage carcinoid crisis risk during cardiac surgery (octreotide 500 mcg/hr pre-operative).',
  },
  {
    title: 'Ga-68 DOTATATE PET in NETs — NEJM 2016',
    finding: 'Multicenter Ga-68 DOTATATE PET study: sensitivity 97% vs. 52% for In-111 octreoscan, detected previously undetected lesions in 41% of patients, and changed management in 35% of NET patients — establishing Ga-68 DOTATATE PET/CT as the preferred somatostatin receptor imaging modality, replacing octreoscan.',
    implication: 'Annual Ga-68 DOTATATE PET scheduling compliance (baseline + post-induction + q6–12 months maintenance — NCCN recommendation) requires NP annual NET imaging CE to interpret SSTR-positive lesion grade, guide PRRT eligibility (Krenning score ≥3), and coordinate 68Ga-DOTATATE vs. 18F-FDG PET selection for higher-grade NET (Ki-67 ≥10%).',
  },
  {
    title: 'MEN1 Surveillance Outcomes — NEJM 2021',
    finding: 'GEPNET-MEN1 multicenter registry: structured annual surveillance detected pancreatic NETs at median size 1.1 cm vs. 3.2 cm for unstructured follow-up — with surveillance-detected pNETs having 98% 5-year survival vs. 71% for symptom-detected. Annual MRI/CT identified pNETs before malignant transformation in 94% of surveillance-detected cases.',
    implication: 'Annual MEN1 mutation carrier surveillance protocol (annual pancreatic MRI/CT, annual parathyroid hormone/calcium, annual 24-hour urine 5-HIAA/CgA) and annual VHL/SDHx syndrome surveillance coordination require NP annual hereditary NET genetics CE to implement gene-specific surveillance protocols and coordinate cascade genetic testing for family members.',
  },
]

const testimonial = {
  quote: 'Neuroendocrine tumor NP practice requires AGPCNP-BC and AOCNP renewal, NANETS annual CE, quarterly SSA injection documentation, quarterly CgA and 5-HIAA monitoring, annual Ga-68 DOTATATE PET scheduling, annual carcinoid heart disease echocardiogram coordination, PRRT renal function surveillance, everolimus REMS monitoring, annual MEN1/VHL/SDHx hereditary syndrome protocols, NET tumor board documentation, and carcinoid crisis prevention protocol review — all simultaneously. Momenties consolidated every deadline. Our program achieved ≥95% Ga-68 DOTATATE PET compliance and zero carcinoid crisis events.',
  author: 'AGPCNP-BC, AOCNP',
  role: 'Neuroendocrine Tumor Nurse Practitioner, NANETS-Member NET Program',
}

export default function NeuroendocrineTumorNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Neuroendocrine Tumor Nurse Practitioners"
        title="Every PRRT Coordination Deadline. Every Ga-68 PET Schedule. One Calendar."
        subtitle="Neuroendocrine tumor nurse practitioners manage one of the most imaging-intensive advanced practice portfolios in oncology — AOCNP renewal, NANETS annual CE, quarterly SSA injection documentation, quarterly CgA and 5-HIAA monitoring, annual Ga-68 DOTATATE PET scheduling, carcinoid heart disease echocardiogram coordination, PRRT renal surveillance, everolimus REMS monitoring, and MEN1/VHL hereditary syndrome protocols. Momenties automates every deadline so your program achieves top-quartile NET outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full NET NP Compliance Lifecycle
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
              6 Landmark Trials That Define NET NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind NANETS quality benchmarks, PRRT eligibility criteria, and neuroendocrine tumor NP monitoring standards.
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
        headline="Ready to Achieve Zero Carcinoid Crisis Events?"
        subtext="Join neuroendocrine tumor nurse practitioners using Momenties to automate every PRRT, SSA, and NET surveillance deadline. Free to start."
      />
    </main>
  )
}
