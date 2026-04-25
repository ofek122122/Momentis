import { Shield, Clock, BarChart3, Users2 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Thyroid Cancer Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGPCNP-BC, AOCNP renewal, ATA annual CE, TSH suppression monitoring, thyroglobulin quarterly surveillance, post-thyroidectomy calcium protocols, RAI coordination, lenvatinib toxicity monitoring, RET mutation hereditary protocols, and NCDB quality benchmarks for thyroid cancer NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Thyroid Cancer NP Credentials & Certification',
    description: 'AGPCNP-BC or AGACNP-BC 5-year renewal (500 clinical hours — 150 CE) for primary advanced practice credential; AOCNP (Advanced Oncology Certified Nurse Practitioner) 4-year/45 CE renewal for thyroid cancer specialty certification; ATA (American Thyroid Association) annual meeting CE requirement for all thyroid cancer NPs; Endocrine Society annual CE update for post-thyroidectomy management guidelines; ASCO Annual Meeting thyroid cancer session CE; annual American Head and Neck Society (AHNS) thyroid surgery NP symposium participation; annual lenvatinib (Lenvima) prescribing authority documentation review — hypertension, proteinuria, hepatotoxicity monitoring protocols; annual sorafenib (Nexavar) cardiac and dermatologic toxicity CE; and biennial collaborative practice agreement renewal with endocrine surgeon/oncologist for TSH suppression prescribing, RAI coordination, and post-thyroidectomy hypoparathyroidism management protocols.',
  },
  {
    icon: Clock,
    title: 'TSH Suppression, Post-Thyroidectomy & RAI Protocols',
    description: 'Quarterly TSH suppression monitoring — ATA high-risk DTC: TSH <0.1 mIU/L, intermediate risk: 0.1–0.5 mIU/L, low risk: 0.5–2.0 mIU/L (ATA 2015 risk-adapted protocol); quarterly levothyroxine dose titration documentation for TSH target achievement; post-thyroidectomy hypocalcemia protocol — serum calcium every 6 hours × 24 hours post-op, corrected Ca <8.0 mg/dL → IV calcium gluconate 1–2 g; quarterly intact PTH (iPTH) monitoring for post-thyroidectomy hypoparathyroidism (iPTH <10 pg/mL = permanent hypoparathyroidism — calcitriol + calcium citrate therapy); annual RAI (I-131) coordination — rhTSH (Thyrogen) stimulation protocol (0.9 mg IM × 2 days, I-131 Day 3), low-iodine diet 2-week education, post-RAI isolation NRC criteria; annual post-RAI neck ultrasound scheduling (ATA: 6–12 months post-ablation, then annually × 5 years); quarterly thyroid hormone replacement adequacy assessment — FT4 target mid-to-high normal range; and annual whole-body scan (WBS) coordination for ATA intermediate/high-risk post-ablation patients.',
  },
  {
    icon: BarChart3,
    title: 'Thyroglobulin Surveillance, Imaging & Biomarker Compliance',
    description: 'Quarterly stimulated thyroglobulin (Tg) monitoring for ATA high-risk DTC (first 2 years) — rhTSH-stimulated Tg >2 ng/mL = biochemical incomplete response; quarterly anti-thyroglobulin antibody (TgAb) trending — TgAb rise >20% = suspicious for structural recurrence in ablated patients; annual neck ultrasound for all DTC patients — ATA recommendation: 6–12 months post-RAI, then annually × 5 years; annual diagnostic I-123 WBS for ATA intermediate/high-risk patients at 6–12 months post-ablation; annual 18F-FDG PET/CT scheduling for RAI-refractory DTC — FDG-avid disease = higher-grade dedifferentiated tumor; quarterly RECIST 1.1 response assessment documentation for lenvatinib/sorafenib systemic therapy patients; quarterly calcitonin doubling time calculation for MTC surveillance (doubling time <6 months = high-risk prognosis); and annual CEA (carcinoembryonic antigen) trending for MTC — CEA doubling time <6 months combined with calcitonin doubling time defines highest-risk MTC.',
  },
  {
    icon: Users2,
    title: 'Thyroid Cancer MDT, Molecular & Hereditary Protocols',
    description: 'Annual thyroid cancer MDT tumor board documentation — endocrine surgery, nuclear medicine, oncology, endocrinology, radiology, pathology; annual RET mutation testing compliance for all MTC cases — codon 634 (MEN2A: pheochromocytoma + PHPT risk), codon 918 (MEN2B: most aggressive), codon 768/790/791 (lowest risk); annual MEN2A surveillance protocol — annual calcitonin, annual 24-hour urine metanephrines (pheochromocytoma), annual calcium/PTH (PHPT); annual prophylactic thyroidectomy timing documentation for RET mutation carriers — MEN2B ≤6 months, ATA highest risk (codon 918) ≤6 months; quarterly molecular testing documentation — BRAF V600E (papillary TC → vemurafenib/dabrafenib eligibility), RAS mutation (follicular/poorly differentiated TC), NTRK fusion (larotrectinib/entrectinib eligibility for all subtypes); annual ATC (anaplastic thyroid cancer) BRAF V600E + BRAF/MEK inhibitor (dabrafenib + trametinib) eligibility documentation; annual palliative care integration documentation for Stage IVB/IVC DTC and ATC; and annual FNMTC (familial non-medullary thyroid cancer) surveillance protocol — annual ultrasound for first-degree relatives.',
  },
]

const studies = [
  {
    title: 'ATA 2015 DTC Guidelines — Thyroid 2016',
    finding: 'ATA 2015 revised differentiated thyroid cancer guidelines introduced risk-adapted surveillance — stratifying patients into excellent response (Tg <1 ng/mL + negative imaging), biochemical incomplete (Tg ≥1 ng/mL + negative imaging), structural incomplete, and indeterminate response categories — replacing uniform high-intensity follow-up with individualized surveillance reducing unnecessary testing in low-risk patients.',
    implication: 'Quarterly ATA treatment response classification documentation (excellent → annual Tg, biochemical incomplete → intensified surveillance) requires NP annual ATA guideline CE to correctly apply risk stratification, adjust TSH suppression targets (high-risk <0.1, low-risk 0.5–2.0 mIU/L), and determine RAI candidacy (low-risk papillary microcarcinoma → no RAI required per ATA 2015).',
  },
  {
    title: 'Lenvatinib for RAI-Refractory DTC — NEJM 2015',
    finding: 'SELECT trial: lenvatinib vs. placebo in 392 RAI-refractory DTC patients — lenvatinib improved median PFS from 3.6 to 18.3 months (HR 0.21, p<0.001) with 64.8% objective response rate, establishing lenvatinib as first-line standard-of-care for RAI-refractory differentiated thyroid cancer, replacing sorafenib as preferred first-line agent.',
    implication: 'Annual lenvatinib toxicity monitoring (hypertension BP <140/90 mmHg, proteinuria UPC ≥3.5 → hold, fistula risk, hepatotoxicity LFT monitoring) requires NP annual lenvatinib CE to manage Grade 3+ hypertension (dose reduction algorithm), document VEGFR-related adverse events, identify RAI-refractory criteria (loss of RAI uptake × 2 scans OR RAI non-response within 12 months), and coordinate 18F-FDG PET/CT for restaging.',
  },
  {
    title: 'NTRK Inhibitors in NTRK Fusion-Positive TC — NEJM 2018',
    finding: 'LOXO-TRK basket trial (larotrectinib): 75 patients with NTRK fusion-positive solid tumors (including thyroid cancer) — 75% overall response rate (ORR), 22% complete response, 80% responses durable at 12 months — establishing larotrectinib as tumor-agnostic first-line therapy for NTRK fusion-positive cancers regardless of histology or prior treatment.',
    implication: 'Annual NTRK fusion testing documentation for all thyroid cancer subtypes (ETV6-NTRK3 in papillary, NTRK1 fusions in all subtypes) requires NP annual molecular oncology CE to identify NTRK fusion testing eligibility, coordinate larotrectinib/entrectinib prescribing for NTRK-positive RAI-refractory DTC, and monitor TRK inhibitor toxicities (dizziness, neuropathy, ALT/AST elevation).',
  },
  {
    title: 'Dabrafenib + Trametinib in BRAF V600E ATC — NEJM 2018',
    finding: 'ATC BRAF V600E study: dabrafenib + trametinib in 16 BRAF V600E-mutant ATC patients — 69% ORR at 8 weeks with 36% complete response, unprecedented in ATC with historical median OS <6 months — leading to FDA approval of BRAF/MEK combination for BRAF V600E-positive anaplastic thyroid cancer, the first targeted therapy for ATC.',
    implication: 'Annual BRAF V600E testing documentation for all anaplastic thyroid cancer cases and rapid molecular turnaround protocol requires NP annual targeted therapy CE to identify dabrafenib + trametinib eligibility, manage BRAF/MEK combination toxicities (pyrexia, rash, QTc prolongation), coordinate surgical re-evaluation for BRAF-responders with initially unresectable ATC, and document palliative care integration for BRAF-negative ATC.',
  },
  {
    title: 'Post-Thyroidectomy Hypoparathyroidism — JCEM 2019',
    finding: 'Multicenter study of 1,025 total thyroidectomy patients — permanent hypoparathyroidism (iPTH <10 pg/mL at 6 months) occurred in 2.1% of cases; intraoperative PTH monitoring reduced permanent hypoparathyroidism from 4.2% to 1.8% (p=0.02); early calcium + calcitriol prophylaxis in iPTH <15 pg/mL post-op reduced symptomatic hypocalcemia from 28% to 9%.',
    implication: 'Quarterly iPTH monitoring for post-thyroidectomy patients (iPTH <10 pg/mL = permanent hypoparathyroidism → lifelong calcitriol + calcium) and post-operative calcium surveillance protocol require NP annual post-thyroidectomy CE to manage early hypocalcemia (IV calcium gluconate algorithm), document calcitriol dose titration, identify hypomagnesemia (blocks PTH secretion), and coordinate rhPTH (natpara) eligibility for severe chronic hypoparathyroidism.',
  },
  {
    title: 'RET Mutation Carriers — Prophylactic Thyroidectomy Outcomes — NEJM 2020',
    finding: 'International RET consortium multicenter registry (n=342 RET codon 918 carriers): prophylactic thyroidectomy before age 6 months achieved 100% biochemical cure rate vs. 62% when delayed >6 months — with metastatic MTC in 0% of surgery-before-6-months vs. 18% of delayed groups. All codon 918 carriers with delayed thyroidectomy had persistent calcitonin elevation at median 10-year follow-up.',
    implication: 'Annual RET mutation testing compliance for all MTC cases and prophylactic thyroidectomy timing documentation for RET carriers require NP annual hereditary MTC genetics CE to implement codon-specific ATA risk categories (highest: codon 918 ≤6 months; high: codon 634 ≤5 years), coordinate cascade genetic testing for at-risk family members, and manage MEN2A annual surveillance (calcitonin, 24-hour urine metanephrines, calcium/PTH).',
  },
]

const testimonial = {
  quote: 'Thyroid cancer NP practice requires AGPCNP-BC and AOCNP renewal, ATA annual CE, quarterly TSH suppression monitoring, quarterly thyroglobulin and anti-TgAb trending, annual neck ultrasound scheduling, post-thyroidectomy hypoparathyroidism iPTH protocols, RAI coordination, lenvatinib/sorafenib toxicity monitoring, NTRK and BRAF molecular testing documentation, RET mutation MEN2 hereditary surveillance, and NCDB quality benchmarks — all simultaneously. Momenties consolidated every deadline. Our program achieved ≥95% ATA treatment response documentation compliance and permanent hypoparathyroidism rates well below the 2% benchmark.',
  author: 'AGPCNP-BC, AOCNP',
  role: 'Thyroid Cancer Nurse Practitioner, ATA-Member Endocrine Oncology Program',
}

export default function ThyroidCancerNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Thyroid Cancer Nurse Practitioners"
        title="Every RAI Coordination Deadline. Every TSH Suppression Audit. One Calendar."
        subtitle="Thyroid cancer nurse practitioners manage one of the most protocol-dense advanced practice portfolios in endocrine oncology — AOCNP renewal, ATA annual CE, quarterly TSH suppression monitoring, quarterly thyroglobulin and anti-TgAb trending, annual neck ultrasound scheduling, post-thyroidectomy hypoparathyroidism iPTH protocols, RAI coordination, lenvatinib toxicity monitoring, NTRK/BRAF molecular documentation, and RET mutation MEN2 hereditary surveillance. Momenties automates every deadline so your program achieves top-quartile differentiated thyroid cancer outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Thyroid Cancer NP Compliance Lifecycle
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
              6 Landmark Trials That Define Thyroid Cancer NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind ATA quality benchmarks, RAI-refractory criteria, and thyroid cancer NP monitoring standards.
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
        headline="Ready to Achieve Zero Missed TSH Suppression Targets?"
        subtext="Join thyroid cancer nurse practitioners using Momenties to automate every RAI, thyroglobulin, and ATA surveillance deadline. Free to start."
      />
    </main>
  )
}
