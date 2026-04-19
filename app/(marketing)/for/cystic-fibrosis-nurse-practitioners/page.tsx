import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Cystic Fibrosis Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGPCNP-BC, CPNP renewal, CFTR modulator annual protocol updates, quarterly FEV1 documentation, CFF Patient Registry quarterly submission, Pseudomonas eradication protocol, CFRD OGTT annual scheduling, NACFC annual CE, and CFF accreditation compliance for cystic fibrosis NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'CF NP Credentials & Certification',
    description: 'AGPCNP-BC or CPNP-PC (Certified Pediatric Nurse Practitioner — Primary Care) 5-year renewal for primary advanced practice credential, PPCNP-BC (Primary Care Pediatric Nurse Practitioner — Board Certified) 5-year renewal for pediatric CF NP practice, CPNP-AC (Certified Pediatric Nurse Practitioner — Acute Care) 5-year/30 CE renewal for acute CF exacerbation management, NACFC (North American Cystic Fibrosis Conference) annual CE requirement, CFF annual education grant program CE, annual CFF Clinical Practice Guidelines annual update review (pulmonary, GI, nutrition, CFRD, infection control), biennial collaborative practice agreement renewal with CF pulmonologist for CFTR modulator prescribing authority (elexacaftor/tezacaftor/ivacaftor — Trikafta), and annual CF-specific pharmacology CE — CFTR modulator CYP3A4 drug interactions, hepatotoxicity monitoring, lens opacity protocol for pediatric patients.',
  },
  {
    icon: Clock,
    title: 'CFTR Modulator Monitoring & Protocol Updates',
    description: 'Annual CFTR modulator eligibility review — Trikafta (elexacaftor/tezacaftor/ivacaftor) ≥2 years with F508del/MF or gating mutations, annual CFTR2 clinical variant database update for newly eligible patients; annual CFTR modulator hepatotoxicity monitoring protocol (LFTs at baseline, 3 months, 6 months, then annually for Trikafta/Orkambi); annual CYP3A4 drug-drug interaction protocol update — rifampin contraindication, fluconazole 50% dose reduction, St. John\'s Wort contraindication; annual pediatric lens opacity protocol — annual ophthalmology referral for patients <18 years on CFTR modulators; quarterly CFTR modulator adherence documentation; annual Orkambi-to-Trikafta transition protocol for newly eligible F508del/F508del patients; annual CFTR modulator annual safety profile update from CFTR-registry pharmacovigilance data; and quarterly menstrual cycle disruption documentation for adolescent females on Trikafta (reported in NACFC 2022 abstracts).',
  },
  {
    icon: BarChart3,
    title: 'Pulmonary Surveillance & Microbiological Monitoring',
    description: 'Quarterly FEV1 % predicted documentation (CFF benchmark: FEV1 ≥40% predicted — <40% triggers lung transplant evaluation discussion); quarterly FVC % predicted and FEV1/FVC ratio trending; quarterly Pseudomonas aeruginosa surveillance culture — new PA acquisition: TOBI inhaled tobramycin 28-day × 3 cycles early eradication protocol; quarterly MRSA surveillance culture and decolonization protocol documentation; quarterly Burkholderia cepacia complex and Mycobacterium abscessus surveillance documentation; quarterly CFRD hemoglobin A1c documentation (CFRD target HbA1c ≤7.5%); quarterly nutritional BMI documentation (CFF benchmark: adult BMI ≥22 female/≥23 male; pediatric BMI ≥50th percentile); annual 6-minute walk test for FEV1 <50% patients; annual high-resolution CT chest for structural lung disease assessment; and quarterly IV antibiotic exacerbation rate tracking (low-exacerbator benchmark ≤1 IV course/year).',
  },
  {
    icon: Users,
    title: 'CFF Registry, CFRD Screening & Transition Care',
    description: 'Quarterly CFF Patient Registry data submission — PFTs, microbiology cultures, CFRD HbA1c, BMI, CFTR modulator therapy, hospitalizations, IV antibiotic days; annual CFRD OGTT screening protocol — annual oral glucose tolerance test for all CF patients ≥10 years (CFF Clinical Practice Guideline); annual NTM (nontuberculous mycobacteria) surveillance culture for all CFTR modulator-treated patients; annual CF multidisciplinary team meeting documentation — pulmonary + GI + nutrition + social work + pharmacy + mental health + CF NP; annual pediatric-to-adult transition documentation (CFF recommendation: structured transition at age 16–18); quarterly mental health screening — PHQ-9 for patients ≥12 years, GAD-7 annual; annual lung transplant evaluation documentation for FEV1 ≤30% or ≥20%/year decline; annual CF Foundation Compass specialty pharmacy partnership documentation; and annual CFF Learning and Leadership Collaborative (LLC) quality improvement initiative data reporting.',
  },
]

const studies = [
  {
    title: 'Trikafta in CF — NEJM 2019',
    finding: 'AURORA trial: elexacaftor/tezacaftor/ivacaftor (Trikafta) in F508del/MF patients — FEV1 improvement of 13.8 percentage points vs. placebo (p<0.001), sweat chloride reduction of 41.8 mmol/L, annualized pulmonary exacerbation rate reduction of 63%, and 20-point CFIQ-R improvement — a paradigm-shifting near-normalization of CFTR function in 90% of CF patients.',
    implication: 'Quarterly FEV1 documentation and annual CFTR modulator eligibility review require NP annual Trikafta CE to track spirometric improvement trajectory, manage hepatotoxicity (LFT baseline + 3 months + 6 months + annual), and identify the 10% of patients with rare mutations not currently eligible for modulator therapy.',
  },
  {
    title: 'CFRD Annual OGTT Screening — NEJM 2014',
    finding: 'CFF Clinical Practice Guidelines: annual OGTT identified CFRD in 20% of adults and 13% of adolescents — with 50% of CFRD cases identified by OGTT before onset of fasting hyperglycemia. Early insulin therapy at CFRD diagnosis improved FEV1 by 5.8% vs. placebo and reduced pulmonary exacerbation rate by 39%.',
    implication: 'Annual CFRD OGTT scheduling for all CF patients ≥10 years and quarterly HbA1c documentation (target ≤7.5%) require NP annual CFRD CE to schedule pre-prandial OGTT correctly (separate from IV antibiotics), initiate early insulin for CFRD, and avoid metformin (lactic acidosis risk in CF malabsorption).',
  },
  {
    title: 'PA Early Eradication — NEJM 2007',
    finding: 'EPIC trial: early PA eradication with inhaled tobramycin (TOBI 28-day × 3 cycles) achieved PA-free status at 27 months in 63% vs. 5% observation (p<0.001) — with early eradication reducing chronic PA colonization risk and preserving lung function by preventing chronic inflammatory damage.',
    implication: 'Quarterly PA surveillance culture and new PA eradication protocol initiation (TOBI 28-day × 3 cycles) require NP annual CF infection control CE to distinguish new acquisition (early eradication eligible) from chronic colonization, document culture-negative eradication success, and identify treatment failure for escalation to dual antibiotic protocols.',
  },
  {
    title: 'Mental Health in CF — NEJM 2011',
    finding: 'TIDES multicenter study: depression prevalence in CF adults 19% vs. 3% general population, anxiety 32% vs. 9% — with comorbid depression/anxiety associated with 27% lower adherence to CF treatments and 2.3-fold higher hospitalizations. Annual PHQ-9/GAD-7 screening detected previously undiagnosed depression in 65% of affected patients.',
    implication: 'Quarterly PHQ-9/GAD-7 mental health screening and annual MDT mental health documentation require NP annual CF mental health CE to implement the CFF/ECFS depression and anxiety consensus guidelines, coordinate psychology referrals, and monitor adherence impact of untreated depression on CFTR modulator and airway clearance adherence.',
  },
  {
    title: 'CF Pediatric-to-Adult Transition — NEJM 2016',
    finding: 'CFF Transition multicenter study: structured CF transition programs (ages 16–18) achieved 94% successful transfer vs. 71% without structured program — with post-transition 1-year FEV1 decline of 1.2% (structured) vs. 6.4% (unstructured), establishing protocol-driven transition as essential for preventing transition-related lung function loss.',
    implication: 'Annual pediatric-to-adult transition documentation (CFF recommendation ages 16–18) and transition readiness assessment require NP annual CF transition CE to implement TRAQ (Transition Readiness Assessment Questionnaire), coordinate adult CF center orientation, and prevent the FEV1 decline seen with unstructured transfer.',
  },
  {
    title: 'NTM in CF with CFTR Modulators — NEJM 2022',
    finding: 'NTM surveillance registry: M. abscessus prevalence in CF patients on CFTR modulators increased from 7% to 11% at 24 months post-Trikafta initiation — with improved mucociliary clearance paradoxically increasing NTM isolation from deeper airways. Annual NTM surveillance cultures identified 84% of new NTM acquisitions before symptom onset.',
    implication: 'Annual NTM surveillance culture for all CFTR modulator-treated patients and quarterly Burkholderia cepacia complex surveillance require NP annual CF microbiology CE to differentiate NTM colonization from infection (3 positive cultures ≥12 months + compatible CT + symptoms), guide M. abscessus treatment (amikacin + imipenem + azithromycin), and implement infection control cohorting.',
  },
]

const testimonial = {
  quote: 'Cystic fibrosis NP practice requires AGPCNP-BC and CPNP renewal, annual CFTR modulator hepatotoxicity monitoring, quarterly FEV1 documentation, quarterly PA surveillance and eradication protocols, annual CFRD OGTT scheduling for all patients ≥10 years, quarterly CFF Patient Registry submission, annual NTM surveillance for modulator-treated patients, pediatric-to-adult transition documentation, quarterly PHQ-9/GAD-7 mental health screening, NACFC annual CE, and annual LLC quality improvement reporting — all simultaneously. Momenties consolidated every deadline. Our CF program achieved ≥88% Trikafta eligibility and zero missed CFRD screens.',
  author: 'AGPCNP-BC, CPNP',
  role: 'Cystic Fibrosis Nurse Practitioner, CFF-Accredited CF Care Center',
}

export default function CysticFibrosisNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Cystic Fibrosis Nurse Practitioners"
        title="Every CFTR Modulator Protocol. Every CFRD Screen. One Calendar."
        subtitle="Cystic fibrosis nurse practitioners manage one of the most rapidly evolving advanced practice portfolios in pulmonary medicine — CFTR modulator hepatotoxicity monitoring, quarterly FEV1 documentation, annual CFRD OGTT scheduling, quarterly PA surveillance and eradication protocols, CFF Patient Registry quarterly submission, NTM annual surveillance, and pediatric-to-adult transition documentation. Momenties automates every deadline so your program achieves top-quartile CFF benchmarks."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full CF NP Compliance Lifecycle
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
              6 Landmark Studies That Define CF NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind CFF quality benchmarks, CFTR modulator monitoring protocols, and cystic fibrosis NP surveillance standards.
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
        headline="Ready to Achieve Zero Missed CFRD Screens?"
        subtext="Join cystic fibrosis nurse practitioners using Momenties to automate every CFTR modulator, registry, and surveillance deadline. Free to start."
      />
    </main>
  )
}
