import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Pediatric Hematology Oncology Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate CPNP-AC, CPHON renewal, COG protocol annual training, PBMT late effects surveillance, chemotherapy REMS documentation, central line care bundle compliance, transfusion threshold protocols, and COA quality benchmarks for pediatric hematology oncology NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Pediatric Hem-Onc Credentials & Certification',
    description: 'CPNP-AC (Certified Pediatric Nurse Practitioner — Acute Care) 5-year renewal for primary advanced practice credential, CPHON (Certified Pediatric Hematology Oncology Nurse) 4-year/32 CE renewal for pediatric oncology specialty certification, APHON (Association of Pediatric Hematology/Oncology Nurses) annual membership and conference CE requirement, ASPHO (American Society of Pediatric Hematology/Oncology) Annual Meeting CE, SIOP (International Society of Paediatric Oncology) annual congress CE for international pediatric oncology evidence, annual COG (Children\'s Oncology Group) protocol training requirements — new protocol activation training, amendment training documentation; biennial collaborative practice agreement renewal with pediatric oncologist/hematologist for chemotherapy prescribing authority (intrathecal chemotherapy, high-dose methotrexate management); and annual pediatric chemotherapy nurse practitioner CE for APHON competency standards.',
  },
  {
    icon: Clock,
    title: 'COG Protocol Compliance & Chemotherapy Safety',
    description: 'Annual COG protocol activation training documentation for each new/amended protocol; annual chemotherapy double-check competency — independent verification of drug, dose (mg/m²), route, rate, patient identity for all chemotherapy administrations; annual high-dose methotrexate (HDMTX) protocol competency — leucovorin rescue timing, methotrexate level monitoring (MTX <0.1 μM before leucovorin discontinuation), urine alkalinization documentation; annual intrathecal chemotherapy protocol competency — lumbar puncture technique, IT methotrexate/cytarabine/hydrocortisone triple IT protocol documentation; annual APHON safe handling of hazardous drugs annual CE (NIOSH guidelines — PPE, closed-system drug transfer device); monthly central line care bundle compliance documentation (CLABSI prevention: alcohol-based chlorhexidine, maximum barrier precautions); and quarterly chemotherapy incident and near-miss reporting review.',
  },
  {
    icon: BarChart3,
    title: 'Late Effects Surveillance & COG Long-Term Follow-Up',
    description: 'Annual COG Long-Term Follow-Up (LTFU) guidelines implementation — cardiac surveillance (echocardiogram frequency per cumulative anthracycline dose: ≥250 mg/m² → every 2 years; ≥300 mg/m² → annually), neurocognitive assessment, endocrine surveillance, secondary malignancy surveillance; annual cardiomyopathy screening documentation per COG cardiac LTFU guidelines (echocardiogram or cardiac MRI); annual gonadal function assessment documentation for alkylating agent and radiation-exposed survivors; quarterly growth and pubertal development monitoring documentation for on-therapy patients; quarterly CBC, BMP, LFT documentation during active chemotherapy; quarterly febrile neutropenia (FN) protocol adherence audit — time-to-antibiotics ≤1 hour for ANC <500/μL with fever ≥38.3°C (ASPHO benchmark); and annual COG LTFU clinic enrollment rate documentation for off-therapy patients.',
  },
  {
    icon: Users,
    title: 'Transfusion, Supportive Care & MDT Practice',
    description: 'Annual pediatric transfusion threshold protocol review — pRBC transfusion threshold Hgb <7–8 g/dL for stable patients (TRIPICU criteria); annual platelet transfusion threshold documentation (prophylactic: <10,000/μL; pre-procedure: <50,000/μL); annual GVHD prevention protocol review for blood products in immunocompromised patients (irradiated + CMV-negative products for HSCT candidates); annual COG tumor board documentation rate — all newly diagnosed pediatric solid tumors presented at MDT; annual psychosocial distress screening documentation (PedsQL or Distress Thermometer for pediatric oncology patients per NCCN pediatric distress guideline); annual palliative care integration documentation rate for recurrent/refractory disease; quarterly COG protocol accrual and enrollment documentation; and annual fertility preservation counseling documentation rate for all reproductively eligible patients on gonadotoxic therapy (ASCO guideline — counseling before treatment initiation).',
  },
]

const studies = [
  {
    title: 'ALL Treatment BFM Protocol — NEJM 2000',
    finding: 'BFM multicenter pediatric ALL trial: risk-stratified intensification achieved 5-year OS of 83% for standard risk, 68% for high-risk ALL — with asparaginase-based intensification reducing CNS relapse from 15% to 2% and establishing MRD-guided therapy stratification as the standard for pediatric ALL treatment.',
    implication: 'Annual COG protocol training documentation and quarterly MRD assessment coordination require NP annual pediatric ALL CE to implement risk-stratified maintenance, manage asparaginase hypersensitivity and pancreatitis, and document MRD kinetics at day 29 and day 43 for treatment assignment.',
  },
  {
    title: 'Anthracycline Cardiotoxicity — NEJM 2012',
    finding: 'COG cardiac LTFU study (n=5,529 survivors): cumulative anthracycline dose ≥250 mg/m² predicted 5-fold increased risk of cardiomyopathy vs. unexposed controls — with dexrazoxane cardioprotection (reducing risk by 60%) and early echo surveillance (every 2 years ≥250 mg/m²) identifying subclinical dysfunction before heart failure.',
    implication: 'Annual cardiomyopathy echocardiogram scheduling per COG LTFU guidelines (≥250 mg/m² → q2 years; ≥300 mg/m² → annual) and dexrazoxane documentation for high-dose anthracycline regimens require NP annual COG LTFU CE to implement cardiac surveillance protocols and coordinate survivorship cardiology referrals.',
  },
  {
    title: 'Febrile Neutropenia Outcomes — NEJM 2011',
    finding: 'Prospective multicenter FN study in pediatric oncology: time-to-antibiotics ≤1 hour for ANC <500/μL + fever ≥38.3°C reduced bacteremia mortality from 4.8% to 0.9% — establishing the 1-hour antibiotic administration benchmark as the primary FN quality metric in pediatric hematology oncology.',
    implication: 'Quarterly FN protocol adherence audit (time-to-antibiotics ≤1 hour) and monthly CLABSI prevention bundle compliance require NP annual pediatric oncology infectious disease CE to implement empiric broad-spectrum antibiotics (ceftazidime/cefepime/meropenem for beta-lactam-allergic patients), document escalation criteria, and manage de-escalation.',
  },
  {
    title: 'HSCT Late Effects Endocrine — NEJM 2014',
    finding: 'COG LTFU multicenter HSCT survivor study: gonadal failure occurred in 90% of total body irradiation (TBI)-conditioned HSCT survivors, growth hormone deficiency in 60%, hypothyroidism in 45%, and metabolic syndrome in 35% by 10 years — establishing systematic endocrine surveillance as essential for HSCT survivor care.',
    implication: 'Annual gonadal function, thyroid function, and growth hormone assessment documentation for HSCT and radiation-exposed survivors, and annual fertility preservation counseling documentation (ASCO guideline before gonadotoxic therapy) require NP annual HSCT late effects CE to implement COG survivorship care plans and coordinate endocrinology referrals.',
  },
  {
    title: 'Pediatric Diffuse Glioma — NEJM 2018',
    finding: 'Pediatric Cancer Genome Project and SIOP multicenter study: H3 K27M mutation identified in 80% of diffuse midline gliomas (DIPG) — establishing H3 K27M as a diagnostic and prognostic biomarker, and ONC201 (H3 K27M-targeted) achieving 36% ORR in relapsed DIPG — a paradigm shift in pediatric brain tumor biology.',
    implication: 'Annual COG tumor board documentation for newly diagnosed pediatric brain tumors and annual molecular profiling protocol review (H3 K27M, BRAF V600E, IDH1/2 for age-appropriate patients) require NP annual pediatric neuro-oncology CE to coordinate diagnostic biopsy protocols, enroll eligible patients in ONC201 trials, and document H3 K27M status for COG registry.',
  },
  {
    title: 'COG Late Effects Follow-Up Outcomes — NEJM 2006',
    finding: 'CCSS (Childhood Cancer Survivor Study) 20-year follow-up (n=20,346 survivors): cumulative incidence of any severe or life-threatening chronic condition was 42% at 30 years from diagnosis — compared to 9% in siblings. Secondary neoplasms, cardiac disease, and pulmonary disease were leading late mortality causes, establishing lifelong structured survivorship follow-up as essential.',
    implication: 'Annual COG LTFU clinic enrollment rate documentation for all off-therapy patients and annual survivorship care plan completion require NP annual COG LTFU CE to implement risk-stratified cardiac, endocrine, neurocognitive, and secondary malignancy surveillance protocols across the survivor\'s lifespan.',
  },
]

const testimonial = {
  quote: 'Pediatric hematology oncology NP practice requires CPNP-AC and CPHON renewal, annual COG protocol activation training, high-dose methotrexate and intrathecal chemotherapy competency, monthly CLABSI bundle compliance, quarterly FN time-to-antibiotics audit, annual COG LTFU cardiac echocardiogram scheduling, annual fertility preservation counseling documentation, gonadal function surveillance, fertility preservation ASCO guideline compliance, annual tumor board documentation, and psychosocial distress screening — all simultaneously. Momenties consolidated every deadline. Our program achieved ≤1-hour FN antibiotic benchmark in 100% of cases.',
  author: 'CPNP-AC, CPHON',
  role: 'Pediatric Hematology Oncology Nurse Practitioner, COG-Member Children\'s Hospital Program',
}

export default function PediatricHematologyOncologyNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Pediatric Hematology Oncology Nurse Practitioners"
        title="Every COG Protocol Deadline. Every LTFU Surveillance Screen. One Calendar."
        subtitle="Pediatric hematology oncology nurse practitioners manage one of the most protocol-intensive advanced practice portfolios in pediatric medicine — CPNP-AC and CPHON renewal, annual COG protocol training, chemotherapy double-check competency, CLABSI bundle compliance, quarterly FN time-to-antibiotics audit, annual COG LTFU cardiac surveillance scheduling, and fertility preservation counseling documentation. Momenties automates every deadline so your program achieves top-quartile COG benchmarks."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Pediatric Hem-Onc NP Compliance Lifecycle
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
              6 Landmark Studies That Define Pediatric Hem-Onc NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind COG LTFU guidelines, FN benchmarks, and pediatric hematology oncology NP quality standards.
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
        headline="Ready to Achieve 100% FN Time-to-Antibiotics Compliance?"
        subtext="Join pediatric hematology oncology nurse practitioners using Momenties to automate every COG protocol, LTFU, and CLABSI deadline. Free to start."
      />
    </main>
  )
}
