import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Neuroendocrine Tumor Center Compliance Calendar | Momenties',
  description: 'Automate NANETS annual registry submissions, Ga-68 DOTATATE PET quarterly scheduling compliance, PRRT program safety protocols, SSA injection documentation, carcinoid heart disease annual echo, everolimus REMS training, NCDB case completeness, and NET tumor board quality metrics.',
}

const pillars = [
  {
    icon: Target,
    title: 'NET Program Accreditation & NANETS Quality',
    description: 'Annual NANETS (North American Neuroendocrine Tumor Society) Quality Improvement Initiative data submission for NET registry; annual ENETS (European Neuroendocrine Tumor Society) Center of Excellence standards compliance review for accredited centers (multidisciplinary team verification, minimum case volume ≥50 NETs/year, PRRT availability); annual NCDB case submission compliance ≥90% completeness for NET cases; annual NCCN Neuroendocrine Tumor guideline annual update implementation review; annual NCI Rare Tumor Task Force data submission for carcinoid and PNET cases; annual SNMMI (Society of Nuclear Medicine and Molecular Imaging) Ga-68 DOTATATE PET quality standards compliance review; biennial COC (Commission on Cancer) accreditation rare tumor standards compliance; and annual NCC (National Comprehensive Cancer Network) Endocrine Neoplasm tumor registry update.',
  },
  {
    icon: RefreshCw,
    title: 'PRRT Program Safety & Radioligand Therapy Compliance',
    description: 'Annual 177Lu-DOTATATE (Lutathera) PRRT program safety compliance — radiation safety officer annual training, NRC license compliance review, treatment room contamination protocol; quarterly PRRT eligibility assessment protocol — 68Ga-DOTATATE PET Krenning ≥3 + eGFR ≥30 mL/min + bone marrow reserve (ANC ≥1500/μL, platelets ≥75,000/μL); annual PRRT amino acid infusion renal protection protocol review (lysine + arginine infusion 30 min before each cycle); annual PRRT post-infusion nausea management protocol (ondansetron + dexamethasone); quarterly post-PRRT renal function monitoring (eGFR baseline + 3 months post each cycle); quarterly post-PRRT bone marrow monitoring (CBC q6 weeks × 3 months post-PRRT — myelosuppression risk); annual everolimus (Afinitor) REMS training for all NET prescribers; and annual sunitinib cardiac monitoring protocol review (baseline ECHO, BP algorithm).',
  },
  {
    icon: TrendingUp,
    title: 'NET Imaging Protocols & Biomarker Compliance',
    description: 'Annual Ga-68 DOTATATE PET/CT scheduling compliance for all somatostatin receptor-positive NETs (NCCN: baseline + post-induction + q6–12 months maintenance); annual 18F-FDG PET/CT for Grade 2 NETs (Ki-67 >10%) and all Grade 3 NEC (poorly differentiated); annual MIBG scintigraphy for pheochromocytoma/paraganglioma program; quarterly CgA (chromogranin A) quarterly monitoring — ≥50% reduction from baseline = partial response (ENETS criteria); quarterly 24-hour urinary 5-HIAA for all functional carcinoid patients (5-HIAA >100 mg/day → carcinoid heart disease evaluation); annual echocardiogram for carcinoid heart disease surveillance (all patients with 5-HIAA >30 mg/day — NCCN guideline Hedinger syndrome protocol); quarterly GI and pancreatic NET RECIST 1.1 assessment documentation; and quarterly functional tumor syndrome symptom burden documentation (flushing frequency, bowel movements, hypoglycemia episodes).',
  },
  {
    icon: BarChart3,
    title: 'NET Registry, Surgery Rates & MDT Outcomes',
    description: 'Annual NCDB case completeness audit for NET/carcinoid/PNET cases; annual NANETS QII registry submission — patient demographics, histologic grade, staging, treatment, outcomes; quarterly NET MDT tumor board presentation rate (ENETS standard — all complex NETs discussed at MDT); annual NET surgery outcomes documentation — R0 resection rate for localized NETs (target ≥85%), liver-directed therapy (TACE/RFA/SIRT) documentation for hepatic-predominant disease; annual MEN1/VHL/SDHx hereditary NET surveillance protocol compliance documentation; annual GI NET functional status documentation (diarrhea, flushing, hypoglycemia symptom control rate); quarterly Ki-67 and WHO grade documentation completeness for all pathologic diagnoses; quarterly carcinoid crisis prevention protocol compliance — octreotide IV bolus 500 mcg for all functional NET patients undergoing procedures under anesthesia; and annual palliative care integration rate for advanced/metastatic Stage IV NET.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'NCCN Guidelines & NANETS Registry Review',
    tasks: 'Complete annual NCCN Neuroendocrine Tumor guideline update review. Submit Q4 NANETS QII registry data. Review NCDB NET case completeness for prior year. Update everolimus REMS documentation. Schedule Q1 68Ga-DOTATATE PET for maintenance-phase patients.',
  },
  {
    phase: 'February',
    title: 'PRRT Program Annual Safety Review',
    tasks: 'Complete annual PRRT program radiation safety officer training. Review NRC license compliance. Complete annual amino acid infusion renal protection protocol review. Review PRRT eligibility assessment protocol (Krenning ≥3, eGFR ≥30 mL/min, bone marrow criteria).',
  },
  {
    phase: 'March',
    title: 'Q1 Biomarker & Imaging Compliance',
    tasks: 'Complete Q1 CgA monitoring for all NET patients. Review Q1 24-hour urinary 5-HIAA for functional carcinoid patients (>100 mg/day → CHD evaluation). Document Q1 functional tumor syndrome symptom burden. Submit Q1 NCDB case data.',
  },
  {
    phase: 'April',
    title: 'Carcinoid Heart Disease Surveillance',
    tasks: 'Complete annual carcinoid heart disease echocardiogram scheduling for all patients with 5-HIAA >30 mg/day. Review Hedinger syndrome protocol. Schedule tricuspid and pulmonary valve repair MDT discussion for severe CHD. Document octreotide pre-operative carcinoid crisis prevention protocol.',
  },
  {
    phase: 'May',
    title: 'PRRT Eligibility & Post-Treatment Review',
    tasks: 'Complete quarterly PRRT eligibility assessment documentation. Review post-PRRT renal function monitoring (eGFR q3 months post each cycle). Document post-PRRT CBC monitoring (q6 weeks × 3 months). Review 18F-FDG PET scheduling for Grade 2 Ki-67 >10% and all Grade 3 NEC.',
  },
  {
    phase: 'June',
    title: 'Q2 RECIST & Registry Review',
    tasks: 'Complete Q2 RECIST 1.1 imaging response documentation for all systemic therapy patients. Submit Q2 NANETS registry data. Review Q2 Ki-67 documentation completeness. Document Q2 MDT tumor board presentation rate. Audit ENETS minimum volume compliance (≥50 NETs/year).',
  },
  {
    phase: 'July',
    title: 'NANETS Annual Symposium CE',
    tasks: 'Attend NANETS Annual Symposium — complete CE requirements. Collect updated PRRT protocols, everolimus + SSA combination evidence, MIBG therapy updates. Update NET center protocols. Complete annual NCI Rare Tumor Task Force data submission. Review MEN1/VHL/SDHx surveillance.',
  },
  {
    phase: 'August',
    title: 'Hereditary NET Surveillance Review',
    tasks: 'Complete annual MEN1 mutation carrier surveillance protocol compliance — pancreatic MRI/CT, 24-hour urine 5-HIAA/CgA, parathyroid hormone/calcium. Review VHL surveillance (annual MRI abdomen, CNS). Complete SDHx surveillance (annual urine/plasma metanephrines). Document cascade genetic testing.',
  },
  {
    phase: 'September',
    title: 'Q3 Imaging & Surgery Outcomes Review',
    tasks: 'Complete Q3 68Ga-DOTATATE PET scheduling audit. Review annual NET surgery R0 resection rate (target ≥85%). Document liver-directed therapy TACE/RFA/SIRT outcomes for hepatic disease. Complete Q3 NCDB case submissions. Review functional symptom control rates.',
  },
  {
    phase: 'October',
    title: 'Everolimus REMS & Sunitinib Review',
    tasks: 'Complete annual everolimus REMS training for all NET prescribers (non-infectious pneumonitis protocol, CBC, LFT monitoring). Complete annual sunitinib cardiac monitoring protocol review (ECHO baseline, BP algorithm). Document PRRT program NRC license compliance. Review PRRT room contamination protocols.',
  },
  {
    phase: 'November',
    title: 'ENETS Center of Excellence Review',
    tasks: 'Complete biennial ENETS Center of Excellence standards compliance review — MDT team verification, minimum case volume ≥50 NETs/year, PRRT program availability, patient education documentation. Submit NANETS QII Q3 data. Review palliative care integration rate for Stage IV NET.',
  },
  {
    phase: 'December',
    title: 'Annual Report & NCDB Final Audit',
    tasks: 'Compile annual NET program quality report — imaging compliance, PRRT case volume, MDT presentation rate, NANETS registry completeness, CHD surveillance adherence, surgery outcomes. Submit Q4 NANETS/NCDB data. Update NCCN grade-based treatment algorithms for next year.',
  },
]

const kpis = [
  { metric: '≥90%', label: 'NCDB NET Case Completeness' },
  { metric: '≥85%', label: 'R0 Resection Rate (Localized NET)' },
  { metric: 'CgA ≥50%', label: 'Partial Response Target' },
  { metric: '100%', label: 'Carcinoid Crisis Prevention Rate' },
  { metric: 'Annual', label: '68Ga-DOTATATE PET Compliance' },
  { metric: '≥50/year', label: 'ENETS Minimum Volume' },
]

const testimonial = {
  quote: 'NET center compliance requires NANETS annual registry submission, PRRT radiation safety annual training, NRC license review, quarterly 68Ga-DOTATATE PET scheduling, quarterly CgA and 5-HIAA monitoring, annual carcinoid heart disease echocardiogram scheduling, everolimus REMS annual training, post-PRRT renal and bone marrow surveillance, ENETS center of excellence standards review, MEN1/VHL/SDHx hereditary surveillance protocols, and carcinoid crisis prevention protocol compliance — all simultaneously. Momenties consolidated every deadline. Our NET center achieved ENETS CoE certification and zero carcinoid crisis events.',
  author: 'Medical Director, Neuroendocrine Tumor Center',
  role: 'ENETS Center of Excellence, Academic Medical Center',
}

export default function NeuroendocrineTumorCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Neuroendocrine Tumor Center Calendar"
        title="Every PRRT Safety Deadline. Every Ga-68 PET Compliance. One Calendar."
        subtitle="Neuroendocrine tumor programs manage one of the most imaging-intensive compliance portfolios in oncology — PRRT radiation safety annual training, NRC license compliance, quarterly 68Ga-DOTATATE PET scheduling, quarterly CgA/5-HIAA monitoring, annual carcinoid heart disease echocardiogram coordination, everolimus REMS training, NANETS registry submissions, and ENETS Center of Excellence standards. Momenties automates every deadline so your program achieves top-quartile NET outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full NET Center Compliance Lifecycle
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
              The NET Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every PRRT safety deadline, imaging compliance audit, biomarker review, hereditary surveillance protocol, and ENETS accreditation milestone — sequenced across 12 months.
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
              The 6 KPIs That Define NET Center Excellence
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
        headline="Ready to Achieve ENETS Center of Excellence Certification?"
        subtext="Join neuroendocrine tumor programs using Momenties to automate every PRRT safety, registry, and imaging compliance deadline. Free to start."
      />
    </main>
  )
}
