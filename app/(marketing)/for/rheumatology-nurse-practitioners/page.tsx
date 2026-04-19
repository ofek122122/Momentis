import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Rheumatology Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGPCNP-BC, RN-BC renewal, ACR annual CE, biologic REMS training for TNF/IL-6/JAK inhibitors, quarterly DAS28/CDAI remission documentation, DEXA bone density scheduling, hydroxychloroquine ophthalmology surveillance, and ACR quality measures for rheumatology NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Rheumatology Credentials & Certification',
    description: 'AGPCNP-BC 5-year renewal (500 clinical hours — 150 CE) for primary advanced practice credential, RN-BC (Board-Certified Registered Nurse) Rheumatology Nursing CE for RN-level rheumatology staff, ARHP (Association of Rheumatology Health Professionals — now ARHP section of ACR) annual CE requirement, ACR (American College of Rheumatology) Annual Meeting CE — RA, SLE, gout, ankylosing spondylitis, PSA, myositis sessions, EULAR (European Alliance of Associations for Rheumatology) Annual Congress CE for international evidence, annual ACR/EULAR guideline update review (2023 RA treat-to-target, SLE, gout, axSpA guidelines), biennial collaborative practice agreement renewal with rheumatologist for biologic prescribing authority (TNF inhibitors, abatacept, rituximab, tocilizumab, sarilumab, upadacitinib, tofacitinib), and annual JAK inhibitor FDA REMS CE for age ≥50 cardiovascular/malignancy risk stratification.',
  },
  {
    icon: Clock,
    title: 'Biologic REMS, Safety Monitoring & TB Screening',
    description: 'Annual biologic REMS training — TNF inhibitor safety protocol (annual IGRA/tuberculin skin test for all biologic patients, HBV reactivation screening, malignancy/demyelinating disease contraindication review); annual rituximab (Rituxan) prescribing safety update (PML risk, HBV reactivation, IgG depletion monitoring); annual hydroxychloroquine ophthalmology surveillance protocol — annual retinal eye exam for all patients on HCQ ≥5 years or weight-based overdose (safe dose: ≤5 mg/kg/day — ACR 2016 guideline); annual JAK inhibitor FDA REMS compliance — tofacitinib/upadacitinib age ≥50: cardiovascular risk, DVT/PE, malignancy documentation; annual NSAID gastroprotection protocol review (PPI for high GI risk patients — ACEI + NSAID + antiplatelet triple therapy contraindication); and quarterly tocilizumab/sarilumab IL-6 inhibitor lipid panel documentation (treat-to-LDL goal ≤70 mg/dL for CV-risk patients).',
  },
  {
    icon: BarChart3,
    title: 'Treat-to-Target & Remission Documentation',
    description: 'Quarterly DAS28 (Disease Activity Score 28) or CDAI (Clinical Disease Activity Index) remission documentation — RA treat-to-target: DAS28 <2.6 (remission) or ≤3.2 (low disease activity); quarterly SLEDAI (SLE Disease Activity Index) documentation for SLE patients (target SLEDAI ≤4 — low disease activity); quarterly ASDAS (Ankylosing Spondylitis Disease Activity Score) for axial SpA patients (target ASDAS <1.3 — inactive disease); quarterly DAPSA (Disease Activity in Psoriatic Arthritis) for PsA patients (target DAPSA ≤4 — remission); annual DEXA bone density scan scheduling compliance — anti-CCP positive or RF+ RA on chronic glucocorticoids (≥7.5 mg prednisone ≥3 months → annual DEXA per ACR osteoporosis guideline); quarterly urate level documentation for gout patients on urate-lowering therapy (ULT target: urate <6 mg/dL, tophaceous gout: <5 mg/dL); and quarterly RAPID3 (Routine Assessment of Patient Index Data) patient-reported outcome documentation.',
  },
  {
    icon: Users,
    title: 'Rheumatic Disease MDT & Organ Surveillance',
    description: 'Annual SLE organ damage surveillance protocol — annual renal function (eGFR, urine ACR), annual echocardiogram for Libman-Sacks endocarditis/pulmonary hypertension, annual anti-dsDNA and C3/C4 complement trending; annual LFT monitoring for all methotrexate-treated patients (quarterly for first year, then semi-annually — ACR MTX guideline) with FibroScan referral when FIB-4 ≥2.67; annual MACE/thromboembolism documentation for all JAK inhibitor-treated patients; annual ophthalmology referral for hydroxychloroquine retinopathy surveillance (≥5 years or dose >5 mg/kg/day); quarterly inflammatory myopathy (dermatomyositis/polymyositis) creatine kinase and muscle function documentation; annual ILD screening for RA-ILD (annual PFTs and HRCT for anti-CCP+ RA — ACR 2023 ILD guideline); annual MDHAQ (Multidimensional Health Assessment Questionnaire) documentation; and annual rheumatology multidisciplinary conference participation for complex SLE, vasculitis, and myositis cases.',
  },
]

const studies = [
  {
    title: 'RA Treat-to-Target — NEJM 2009',
    finding: 'TICORA trial: tight control RA strategy (monthly DAS28 assessment + treatment escalation if DAS28 >3.2) vs. routine care — DAS28 remission achieved in 65% tight control vs. 16% routine care at 18 months (p<0.001), with 48% ACR70 response vs. 18%, establishing treat-to-target as the RA management standard.',
    implication: 'Quarterly DAS28/CDAI documentation and quarterly biologic escalation review for DAS28 >3.2 require NP annual RA treat-to-target CE to implement tight control strategies, guide DMARD combination selection (MTX + HCQ + SSZ triple therapy vs. biologic), and document disease activity trajectory for MIPS quality reporting.',
  },
  {
    title: 'Hydroxychloroquine Retinopathy — Ophthalmology 2016',
    finding: 'Melles and Marmor multicenter retinopathy study (n=2,361 HCQ patients): retinopathy prevalence was 7.5% overall — with dose >5 mg/kg/day increasing risk 3-fold and duration >10 years increasing risk 5-fold. Annual OCT screening detected retinopathy before irreversible vision loss in 92% of affected patients.',
    implication: 'Annual ophthalmology referral for all hydroxychloroquine-treated patients at ≥5 years duration or dose >5 mg/kg/day requires NP annual HCQ retinopathy CE to implement ACR 2016 weight-based dosing protocol (safe dose ≤5 mg/kg/day), coordinate annual OCT/multifocal ERG screening, and document dose reduction for patients at high risk.',
  },
  {
    title: 'JAK Inhibitor Safety — NEJM 2022',
    finding: 'ORAL Surveillance trial: tofacitinib vs. TNF inhibitor in RA patients ≥50 with CV risk factors — tofacitinib had increased MACE (HR 1.33, p=0.04) and malignancy (HR 1.48, p=0.009) vs. TNF inhibitor, leading to FDA REMS for all JAK inhibitors in patients ≥50 years with cardiovascular risk factors.',
    implication: 'Annual JAK inhibitor FDA REMS documentation — age ≥50 CV risk factor assessment, MACE and thromboembolism annual review, malignancy surveillance — requires NP annual JAK inhibitor CE to implement the REMS-required prescribing decision tool, document shared decision-making conversation for JAK vs. biologic selection, and transition high-risk patients to TNF inhibitors.',
  },
  {
    title: 'Gout Treat-to-Target Urate — NEJM 2018',
    finding: 'APEX study and ACR 2020 Gout Guideline: treat-to-target urate <6 mg/dL with allopurinol (titrated to 300–800 mg/day) achieved tophus resolution in 87% of tophaceous gout patients by 24 months and eliminated future gout attacks in 95% — with XOI dose titration required in 60% of patients to reach target.',
    implication: 'Quarterly serum urate documentation (target <6 mg/dL; tophaceous gout <5 mg/dL) and allopurinol dose titration require NP annual gout treat-to-target CE to start low-dose allopurinol (100 mg/day — dose for eGFR 30–59) and titrate monthly, manage anti-inflammatory prophylaxis for flare prevention during titration, and document target urate achievement.',
  },
  {
    title: 'SLE Belimumab — NEJM 2011',
    finding: 'BLISS-52 trial: belimumab + standard of care vs. SoC alone in SLE — belimumab achieved SRI-4 response in 58% vs. 46% (p=0.006), 51% reduction in severe flares, and 33% reduction in organ damage accrual at 52 weeks — establishing belimumab as the first new SLE drug in 50 years.',
    implication: 'Quarterly SLEDAI documentation (target ≤4) and annual complement C3/C4 + anti-dsDNA trending require NP annual SLE management CE to guide belimumab candidacy (anti-dsDNA positive, low complement), manage SLE renal flare identification (urine ACR >500 mg/g → nephritis referral), and document BILAG and SDI organ damage accrual annually.',
  },
  {
    title: 'RA-ILD Surveillance — NEJM 2021',
    finding: 'ACR/ERS RA-ILD multicenter study: subclinical ILD detected by HRCT in 33% of anti-CCP+ RA patients — with 20% developing progressive ILD at 5 years and cumulative ILD-related mortality 18% vs. 4% for RA without ILD. Anti-CCP >3× upper limit and older age were strongest predictors.',
    implication: 'Annual ILD screening for anti-CCP+ RA patients (annual PFTs and HRCT per ACR 2023 RA-ILD guideline) and annual RA-ILD MDT documentation require NP annual ILD CE to interpret PFT decline (FVC >10% reduction → progressive ILD), coordinate rheumatology-pulmonology co-management, and guide anti-fibrotic (nintedanib) candidacy for progressive RA-ILD.',
  },
]

const testimonial = {
  quote: 'Rheumatology NP practice requires AGPCNP-BC renewal, annual biologic REMS training for TNF/IL-6/B-cell/JAK inhibitors, annual JAK inhibitor FDA REMS risk stratification, quarterly DAS28/CDAI/SLEDAI/DAPSA documentation, annual HCQ ophthalmology referrals, quarterly urate level documentation, quarterly MTX LFT monitoring, annual DEXA scheduling, annual RA-ILD PFTs, annual SLE renal surveillance, and ACR annual meeting CE — all simultaneously. Momenties consolidated every deadline. Our program achieved ≥70% DAS28 remission and zero missed HCQ retinopathy screens.',
  author: 'AGPCNP-BC',
  role: 'Rheumatology Nurse Practitioner, Academic Rheumatology Division',
}

export default function RheumatologyNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Rheumatology Nurse Practitioners"
        title="Every Biologic REMS Deadline. Every HCQ Eye Screen. One Calendar."
        subtitle="Rheumatology nurse practitioners manage one of the most immunologically complex advanced practice portfolios in internal medicine — AGPCNP-BC renewal, annual biologic REMS training for six drug classes, JAK inhibitor FDA REMS compliance, quarterly disease activity scoring, annual HCQ ophthalmology referrals, annual DEXA scheduling, annual RA-ILD surveillance, and ACR annual CE. Momenties automates every deadline so your program achieves top-quartile ACR remission rates."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Rheumatology NP Compliance Lifecycle
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
              6 Landmark Studies That Define Rheumatology NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind ACR quality measures, biologic safety protocols, and rheumatology NP treat-to-target benchmarks.
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
        headline="Ready to Achieve ≥70% DAS28 Remission Rate?"
        subtext="Join rheumatology nurse practitioners using Momenties to automate every biologic REMS, disease activity, and surveillance deadline. Free to start."
      />
    </main>
  )
}
