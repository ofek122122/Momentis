import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Cystic Fibrosis Center Compliance Calendar | Momenties',
  description: 'Automate CFF Patient Registry quarterly data submission, NACFC annual CE, CFTR modulator annual protocol update, annual pulmonary function testing, Pseudomonas surveillance, and CF Foundation accreditation deadlines for cystic fibrosis care centers.',
}

const pillars = [
  {
    icon: Target,
    title: 'CFF Accreditation & Program Standards',
    description: 'Annual CF Foundation (CFF) Care Center accreditation compliance review — CFF Care Center Network standards (multidisciplinary team: CF physician, nurse, respiratory therapist, dietitian, social worker), annual CFF Clinical Practice Guidelines update review (pulmonary, GI, nutrition, CFRD, microbiology — 2023 revision), biennial CFF Learning and Leadership Collaborative (LLC) quality improvement program participation, annual CFF CFRD (CF-related diabetes) screening protocol compliance (annual OGTT for all CF patients ≥10 years), annual CF Foundation Compass specialty pharmacy partnership documentation, annual CF-specific infection control guideline compliance audit (cohorting, airway clearance room ventilation ≥12 ACH, P. aeruginosa cross-transmission prevention), and annual CFF Patient Registry data accuracy audit.',
  },
  {
    icon: RefreshCw,
    title: 'CFTR Modulator Annual Protocol & CE',
    description: 'Annual CFTR modulator protocol update — elexacaftor/tezacaftor/ivacaftor (Trikafta) eligibility review (F508del/MF and gating mutations ≥2 years), lumacaftor/ivacaftor (Orkambi) to Trikafta transition protocol, ivacaftor (Kalydeco) gating/residual function mutation panel update; annual CFTR modulator hepatotoxicity monitoring protocol (LFTs at baseline, 3 months, 6 months, then annually — Orkambi/Trikafta); annual drug-drug interaction review (CYP3A4 inducers: rifampin contraindication, azole antifungal dose adjustment); annual CFTR modulator vision monitoring protocol (lens opacities annual ophthalmology referral for pediatric patients); quarterly CFTR modulator adherence documentation; annual CF pharmacist annual modulator CE; and annual CFTR genotype panel update for newly eligible patients (CFTR2 clinical variant database).',
  },
  {
    icon: TrendingUp,
    title: 'Pulmonary Function & Pseudomonas Surveillance',
    description: 'Quarterly FEV1 % predicted documentation (CFF benchmark: ≥40% predicted — FEV1 <40% triggers transplant evaluation discussion), quarterly FVC % predicted trending, quarterly 6-minute walk test (6MWT) for FEV1 <50% patients, quarterly Pseudomonas aeruginosa surveillance culture protocol — early eradication (TOBI 28-day × 3 cycles) for new PA acquisition, quarterly MRSA and Burkholderia cepacia complex surveillance documentation, quarterly CFRD HbA1c tracking (CFRD target ≤7.5% — CFF Clinical Practice Guideline), quarterly nutritional status documentation (CFF benchmark: BMI ≥50th percentile pediatric; BMI ≥22 female/≥23 male adult), annual high-resolution CT chest for structural lung disease progression assessment, and quarterly IV antibiotic exacerbation rate tracking (target ≤1 course/year low-exacerbator).',
  },
  {
    icon: BarChart3,
    title: 'CFF Registry Reporting & Multidisciplinary Outcomes',
    description: 'Quarterly CFF Patient Registry data submission — PFTs, microbiology, CFRD status, BMI, modulator therapy, hospitalization, IV antibiotic days, transplant status; annual NACFC (North American Cystic Fibrosis Conference) CE attendance and abstract submission for program quality data; annual CFF LLC quality improvement initiative participation and metric reporting; quarterly lung transplant evaluation documentation for FEV1 ≤30% predicted or FEV1 decline ≥20%/year; annual CF multidisciplinary team meeting documentation — pulmonary + GI + nutrition + social work + pharmacy + mental health; quarterly mental health screening documentation (CFF/ECFS depression and anxiety consensus guidelines — PHQ-9 annual, GAD-7 annual for all patients ≥12 years); and annual NTM (nontuberculous mycobacteria) surveillance culture for CFTR modulator-treated patients.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'CFF Guidelines Review & CFRD Screening',
    tasks: 'Complete annual CFF Clinical Practice Guidelines update review. Update CFRD OGTT screening schedule for all patients ≥10 years. Review CFTR modulator eligibility for new genotype panel additions. Schedule Q1 PFTs.',
  },
  {
    phase: 'February',
    title: 'CFTR Modulator Protocol Update',
    tasks: 'Complete annual CFTR modulator hepatotoxicity monitoring protocol review. Update CYP3A4 drug interaction protocols. Complete CFTR2 genotype database review for newly eligible patients. Submit Trikafta to Orkambi transition assessments.',
  },
  {
    phase: 'March',
    title: 'Q1 Registry Data Submission',
    tasks: 'Submit Q1 CFF Patient Registry data — PFTs, microbiology cultures, CFRD HbA1c, BMI, modulator therapy status. Complete Q1 PA surveillance cultures. Document early eradication protocols for new PA acquisitions.',
  },
  {
    phase: 'April',
    title: 'Infection Control Audit',
    tasks: 'Complete annual CFF infection control guideline compliance audit — cohorting compliance, airway clearance room ventilation (≥12 ACH), P. aeruginosa cross-transmission prevention protocols. Update Burkholderia cepacia complex management policy.',
  },
  {
    phase: 'May',
    title: 'Nutritional Status & MDT Documentation',
    tasks: 'Complete Q2 nutritional status documentation (BMI ≥50th percentile pediatric; ≥22/23 adult). Document annual MDT meeting — pulmonary + GI + nutrition + social work + pharmacy + mental health. Complete PHQ-9/GAD-7 screening for all patients ≥12 years.',
  },
  {
    phase: 'June',
    title: 'Q2 PFTs & Transplant Evaluations',
    tasks: 'Complete Q2 FEV1/FVC assessments and trend analysis. Identify FEV1 ≤30% predicted or ≥20%/year decline — initiate lung transplant evaluation documentation. Complete Q2 CFRD HbA1c tracking. Submit Q2 registry data.',
  },
  {
    phase: 'July',
    title: 'CFF LLC Quality Improvement',
    tasks: 'Submit biennial CFF Learning and Leadership Collaborative quality improvement data. Review LLC metric performance vs. CFF Care Center Network benchmarks. Update FEV1 ≥40% program achievement documentation. Schedule high-resolution CT chest assessments.',
  },
  {
    phase: 'August',
    title: 'NTM Surveillance & Vision Monitoring',
    tasks: 'Complete annual NTM surveillance culture for CFTR modulator-treated patients. Refer pediatric patients on CFTR modulators for annual ophthalmology lens opacity screening. Document MRSA and Burkholderia surveillance Q3 results.',
  },
  {
    phase: 'September',
    title: 'NACFC Preparation & CE',
    tasks: 'Register for annual North American Cystic Fibrosis Conference (NACFC). Prepare program quality data abstract submission. Complete CF pharmacist annual CFTR modulator CE. Review modulator adherence documentation for Q3.',
  },
  {
    phase: 'October',
    title: 'NACFC Annual Meeting & CE',
    tasks: 'Attend NACFC annual meeting — complete CE requirements. Collect CFTR modulator updates, new therapeutic pipeline, PA eradication protocol updates. Document conference CE hours for all CF team members. Update modulator prescribing protocols from conference.',
  },
  {
    phase: 'November',
    title: 'Q4 Registry Data & IV Antibiotic Review',
    tasks: 'Submit Q4 CFF Patient Registry data. Review annual IV antibiotic exacerbation rate (target ≤1 course/year). Complete annual CFF Patient Registry data accuracy audit. Document CF Foundation Compass specialty pharmacy partnership renewal.',
  },
  {
    phase: 'December',
    title: 'Annual Report & Accreditation Prep',
    tasks: 'Compile annual CFF Care Center accreditation compliance documentation. Review CFF benchmark achievement — FEV1 ≥40%, BMI targets, CFRD screening, modulator eligibility. Prepare next-year CFTR modulator protocol updates. Schedule Q1 OGTT panel.',
  },
]

const kpis = [
  { metric: 'FEV1 ≥40%', label: 'Pulmonary Function Benchmark' },
  { metric: '100%', label: 'CFRD OGTT Screening ≥10yr' },
  { metric: 'HbA1c ≤7.5%', label: 'CFRD Glycemic Target' },
  { metric: 'BMI ≥22/23', label: 'Adult Nutritional Benchmark' },
  { metric: '≤1/year', label: 'IV Antibiotic Exacerbation Rate' },
  { metric: 'Q Quarterly', label: 'CFF Registry Data Submissions' },
]

const testimonial = {
  quote: 'Cystic fibrosis program management requires CFF accreditation annual review, CFTR modulator hepatotoxicity monitoring protocols, CYP3A4 drug interaction updates, quarterly FEV1 and FVC documentation, quarterly PA surveillance and eradication protocols, CFRD OGTT scheduling, CFF registry quarterly data submission, NACFC annual CE, LLC quality improvement reporting, lung transplant evaluation documentation, and NTM surveillance — all simultaneously. Momenties consolidated every deadline. Our program achieved ≥85% CFTR modulator eligibility and top-quartile FEV1 benchmarks.',
  author: 'Medical Director, Cystic Fibrosis Care Center',
  role: 'CFF-Accredited Comprehensive Care Center, Academic Medical Center',
}

export default function CysticFibrosisCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Cystic Fibrosis Center Calendar"
        title="Every CFF Deadline. Every CFTR Modulator Protocol. One Calendar."
        subtitle="Cystic fibrosis care centers manage one of the most pharmacologically evolving compliance portfolios in respiratory medicine — CFTR modulator annual protocol updates, quarterly CFF Patient Registry submission, CFRD OGTT scheduling, PA surveillance and eradication protocols, quarterly FEV1 trending, NACFC annual CE, LLC quality improvement reporting, and CFF accreditation compliance. Momenties automates every deadline so your program achieves top-quartile CFF benchmarks."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full CF Center Compliance Lifecycle
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
              The CF Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every CFTR modulator protocol update, registry submission, surveillance culture, accreditation milestone, and NACFC deadline — sequenced across 12 months.
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
              The 6 KPIs That Define CF Center Excellence
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
        headline="Ready to Achieve Top-Quartile CFF Benchmarks?"
        subtext="Join cystic fibrosis care centers using Momenties to automate every CFTR modulator, registry, and accreditation deadline. Free to start."
      />
    </main>
  )
}
