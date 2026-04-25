import { ClipboardList, Heart, Shield, Search } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Celiac Disease Center Calendar Management | Momenties',
  description: 'AI-powered scheduling for celiac disease centers coordinating TTG-IgA/EMA serology, gluten-free diet compliance counseling, duodenal biopsy follow-up (Marsh grading), DEXA bone-density surveillance, and refractory celiac workup with capsule endoscopy.',
}

const pillars = [
  {
    icon: ClipboardList,
    title: 'TTG-IgA/EMA Serology & Marsh Grade Mucosal Healing Monitoring',
    description: 'Quarterly TTG-IgA (tissue transglutaminase IgA) and EMA (endomysial antibody) serology trending from diagnosis through gluten-free diet adherence — targeting normalization within 12 months; annual or semi-annual Marsh grade re-classification (0 through IIIc) via repeat duodenal biopsy to document mucosal healing progression; seronegative celiac workup including total IgA deficiency screening, HLA-DQ2/DQ8 genotyping, and small bowel capsule endoscopy when standard serology is inconclusive; IgA-deficient patient protocol using TTG-IgG and DGP (deamidated gliadin peptide) IgG as substitute biomarkers; pediatric-to-adult transition serology handoff documentation; and quarterly correlation of serology with dietary adherence scores and patient-reported symptom burden using the Celiac Symptom Index (CSI).',
  },
  {
    icon: Heart,
    title: 'GFD Compliance Counseling & Repeat Biopsy at 12–24 Months',
    description: 'Structured gluten-free diet (GFD) counseling protocol — baseline dietitian consultation within 4 weeks of diagnosis, 3-month follow-up to assess cross-contamination knowledge and label-reading proficiency, and 6-month assessment using the Celiac Dietary Adherence Test (CDAT) or Biagi score; repeat duodenal biopsy scheduling at 12–24 months to confirm Marsh grade improvement (target Marsh 0–I from Marsh IIIa–IIIc at diagnosis); protocol for persistent villous atrophy on second biopsy — non-responsive celiac disease (NRCD) workup including intentional and inadvertent gluten exposure audit, serology re-testing, and exclusion of microscopic colitis, small intestinal bacterial overgrowth (SIBO), pancreatic exocrine insufficiency, and fructose intolerance; annual gluten contamination experience questionnaire (GCET) documentation; and group dietary education session scheduling with celiac disease support coordinators.',
  },
  {
    icon: Shield,
    title: 'DEXA Bone-Density & Nutritional Deficiency Panel',
    description: 'Baseline DEXA bone densitometry at diagnosis (celiac disease carries 30–40% increased osteoporosis risk) with T-score classification per WHO criteria; repeat DEXA at 1 year post-GFD initiation and every 2 years thereafter for patients with T-score ≤−1.0; calcium and vitamin D supplementation initiation targeting serum 25-OH vitamin D >30 ng/mL and total daily calcium 1,000–1,200 mg; annual nutritional deficiency panel including ferritin, serum iron/TIBC, hemoglobin, vitamin B12 (methylcobalamin), serum and RBC folate, zinc, and magnesium — all classically depleted in untreated celiac disease; intravenous iron infusion scheduling for iron-deficiency anemia refractory to oral supplementation; bisphosphonate (alendronate/zoledronic acid) initiation protocol for T-score ≤−2.5 or fragility fracture; denosumab scheduling for post-menopausal women with severe osteoporosis; and quarterly CBC with differential to monitor anemia resolution on GFD.',
  },
  {
    icon: Search,
    title: 'Refractory Celiac Type I/II Workup — Capsule Endoscopy & EATL Surveillance',
    description: 'Refractory celiac disease (RCD) workup protocol for patients with persistent symptoms and villous atrophy after ≥12 months strict GFD — RCD Type I (normal intraepithelial lymphocyte phenotype) vs. RCD Type II (aberrant IEL clonal expansion CD3+/CD8−/intracellular CD3+) classification by flow cytometry and T-cell receptor clonality by PCR; small bowel capsule endoscopy scheduling for ulcerative jejunitis detection, refractory disease extent mapping, and mass lesion surveillance; CT enterography or MR enterography every 6–12 months for RCD Type II patients for EATL (enteropathy-associated T-cell lymphoma) surveillance given 33–52% progression risk; annual PET-CT for EATL screening in RCD Type II; open-access push enteroscopy for biopsy of suspicious capsule lesions; budesonide (9 mg/day with taper) protocol documentation for RCD Type I; azathioprine and cladribine treatment cycle scheduling for RCD Type II; oncology co-management referral workflow; and semi-annual multidisciplinary team (MDT) case conference scheduling for all RCD Type II patients.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual Serology Review & DEXA Scheduling',
    tasks: 'Complete annual TTG-IgA and EMA serology review for all active celiac patients. Identify patients requiring baseline or repeat DEXA bone densitometry based on diagnosis anniversary. Schedule DEXA for newly diagnosed patients and those with T-score ≤−1.0 due for 2-year re-evaluation. Audit vitamin D and calcium supplementation compliance across the panel.',
  },
  {
    phase: 'February',
    title: 'GFD Adherence Audit & Dietitian Referrals',
    tasks: 'Administer annual Celiac Dietary Adherence Test (CDAT) and Biagi gluten-free diet adherence score across all patients. Identify patients with persistently elevated TTG-IgA (>3× ULN) for intensive dietitian re-consultation and cross-contamination audit. Schedule group GFD education sessions. Refer newly non-adherent patients to celiac dietitian within 4 weeks.',
  },
  {
    phase: 'March',
    title: 'Q1 Nutritional Deficiency Panel',
    tasks: 'Order Q1 nutritional deficiency panel for high-risk patients — ferritin, serum iron/TIBC, vitamin B12, RBC folate, zinc, magnesium, CBC with differential. Review results and initiate IV iron infusion scheduling for patients with iron-deficiency anemia refractory to oral supplementation. Adjust B12 and folate supplementation protocols. Document 25-OH vitamin D levels and escalate supplementation for levels <30 ng/mL.',
  },
  {
    phase: 'April',
    title: '12-Month Repeat Biopsy Scheduling',
    tasks: 'Identify patients approaching 12-month mark on GFD who require repeat duodenal biopsy for Marsh grade reassessment. Schedule biopsies with gastroenterology. Review prior Marsh classifications to set target improvement criteria. For patients at 24-month mark with persistent villous atrophy, initiate non-responsive celiac disease (NRCD) workup protocol including intentional gluten exposure audit and SIBO/pancreatic exocrine insufficiency exclusion.',
  },
  {
    phase: 'May',
    title: 'Seronegative Workup & HLA Genotyping',
    tasks: 'Complete seronegative celiac workup for patients with negative TTG-IgA and clinical suspicion — confirm total IgA adequacy, order HLA-DQ2/DQ8 genotyping, TTG-IgG and DGP-IgG for IgA-deficient patients. Schedule small bowel capsule endoscopy for seronegative cases with positive HLA. Review HLA results and communicate negative predictive value (HLA-DQ2/DQ8 negativity = <1% celiac risk) for case closure where appropriate.',
  },
  {
    phase: 'June',
    title: 'Q2 TTG-IgA Trending & Symptom Score Review',
    tasks: 'Complete Q2 TTG-IgA and EMA serology for newly diagnosed patients (within first year of GFD). Administer Celiac Symptom Index (CSI) to all active patients and identify symptom-serology discordance cases for further investigation. Review DEXA results from Q1 and initiate bisphosphonate or denosumab for T-score ≤−2.5. Document calcium and vitamin D supplementation adjustments.',
  },
  {
    phase: 'July',
    title: 'Refractory Celiac Disease MDT Conference',
    tasks: 'Convene semi-annual multidisciplinary team case conference for all RCD Type I and Type II patients. Review flow cytometry and T-cell receptor clonality results. Assess RCD Type II progression risk and update EATL surveillance schedule. Audit budesonide taper compliance for RCD Type I patients. Review azathioprine and cladribine treatment cycles for RCD Type II. Discuss RCD Type II cases for PET-CT and CT/MR enterography results.',
  },
  {
    phase: 'August',
    title: 'Capsule Endoscopy & Enterography Results Review',
    tasks: 'Review and document all capsule endoscopy and CT/MR enterography results completed in H1. Schedule push enteroscopy for patients with suspicious lesions on capsule study. Update EATL surveillance intervals for RCD Type II patients based on imaging findings. Confirm annual PET-CT scheduling for all established RCD Type II patients. Coordinate oncology co-management referrals for any new lymphoma-suspicious findings.',
  },
  {
    phase: 'September',
    title: 'Q3 Serology & Pediatric Transition Handoffs',
    tasks: 'Complete Q3 TTG-IgA serology for patients in first year of GFD. Conduct pediatric-to-adult transition serology handoff documentation for adolescent patients turning 18. Audit annual gluten contamination experience questionnaire (GCET) completion. Review 24-hour dietary recalls for patients with rising or non-normalizing serology. Schedule Q4 nutritional deficiency panels.',
  },
  {
    phase: 'October',
    title: 'Annual DEXA Results & Osteoporosis Intervention',
    tasks: 'Review and act on all annual DEXA results. Initiate bisphosphonate therapy (alendronate or zoledronic acid) for newly qualifying patients with T-score ≤−2.5 or fragility fracture history. Confirm calcium 1,000–1,200 mg/day and vitamin D ≥30 ng/mL targets across panel. Document all osteoporosis interventions in the annual bone health audit. Update 2-year DEXA recall schedule for T-score ≤−1.0 patients.',
  },
  {
    phase: 'November',
    title: 'Q4 Nutritional Panel & Anemia Resolution Audit',
    tasks: 'Complete Q4 nutritional deficiency panel — ferritin, CBC with differential, vitamin B12, folate, zinc, magnesium. Audit hemoglobin trends for patients with prior iron-deficiency anemia. Confirm IV iron infusion series completion and schedule follow-up ferritin checks at 3 months post-infusion. Review RBC folate normalization for patients on folate supplementation. Document year-end nutritional status summary for each patient.',
  },
  {
    phase: 'December',
    title: 'Annual Compliance Report & Protocol Update',
    tasks: 'Compile annual Celiac Disease Center compliance report — TTG-IgA normalization rates at 12 months, Marsh grade improvement rates on repeat biopsy, DEXA osteoporosis intervention compliance, nutritional deficiency correction rates, GFD adherence scores, NRCD/RCD Type I/II identification, and EATL surveillance completion rates. Review updated ACG and BSG celiac disease management guidelines. Plan next-year biopsy scheduling and dietitian referral targets.',
  },
]

const kpis = [
  { metric: '≥80%', label: 'TTG-IgA Normalization at 12 Months GFD' },
  { metric: '≥70%', label: 'Marsh Grade Improvement on Repeat Biopsy' },
  { metric: '100%', label: 'DEXA Performed at Diagnosis' },
  { metric: '<30 ng/mL', label: 'Vitamin D Deficiency Detection Rate' },
  { metric: 'Annual', label: 'RCD Type II EATL Surveillance' },
  { metric: '≥85%', label: 'GFD Adherence Score (CDAT) Compliance' },
]

const testimonial = {
  quote: 'Celiac disease center management requires quarterly TTG-IgA/EMA serology trending, annual DEXA bone density surveillance, 12–24 month repeat duodenal biopsy scheduling, annual nutritional deficiency panels across ferritin/B12/folate/zinc/vitamin D, non-responsive celiac disease workup protocols, RCD Type I and II flow cytometry and T-cell clonality documentation, capsule endoscopy and CT enterography for EATL surveillance, semi-annual MDT conferences, and GFD adherence coaching — all simultaneously across a large patient panel. Momenties consolidated every deadline into a single calendar. Our center achieved 84% TTG-IgA normalization at 12 months and 100% EATL surveillance compliance for RCD Type II patients.',
  author: 'Dr. P. Green',
  role: 'Celiac Disease Center',
}

export default function CeliacDiseaseCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Celiac Disease Center"
        title="Celiac Disease Center Calendar Management"
        subtitle="AI-powered scheduling for celiac disease centers coordinating TTG-IgA/EMA serology, gluten-free diet compliance counseling, duodenal biopsy follow-up (Marsh grading), DEXA bone-density surveillance, and refractory celiac workup with capsule endoscopy."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Celiac Disease Center Compliance Lifecycle
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
              The Celiac Disease Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every TTG-IgA serology interval, repeat biopsy deadline, DEXA scan, nutritional panel, and RCD surveillance milestone — sequenced across 12 months.
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
              The 6 KPIs That Define Celiac Disease Program Excellence
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
        headline="Ready to Achieve ≥80% TTG-IgA Normalization in Your Celiac Disease Panel?"
        subtext="Join celiac disease centers using Momenties to automate every serology interval, repeat biopsy deadline, DEXA scan, nutritional panel, and RCD surveillance milestone. Free to start."
      />
    </main>
  )
}
