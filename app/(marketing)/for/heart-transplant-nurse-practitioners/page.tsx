import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Heart Transplant Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGACNP-BC, CCTC, CCTNS renewal, ISHLT annual registry, UNOS MPSC outcome monitoring, endomyocardial biopsy scheduling, CNI toxicity monitoring, and ISHLT annual CE deadlines for heart transplant NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Heart Transplant Credentials & Certification',
    description: 'AGACNP-BC 5-year renewal with 500 acute care clinical hours, CCTC (Certified Clinical Transplant Coordinator) biennial CE renewal (ABTC), CCTNS (Certified Clinical Transplant Nurse Specialist) biennial renewal for advanced practice NPs, annual ISHLT (International Society for Heart and Lung Transplantation) membership CE, annual AST (American Society of Transplantation) Advanced Heart Failure and Transplant Section CE, and biennial hospital credentialing for heart transplant evaluation and post-transplant LVAD bridge management.',
  },
  {
    icon: Clock,
    title: 'UNOS Compliance & ISHLT Registry',
    description: 'UNOS MPSC annual outcome monitoring — 1-year patient survival ≥85% (ISHLT median 88%) required to avoid program review, semi-annual SRTR program-specific report review for heart transplant outcomes, annual ISHLT Registry data submission (October deadline — ISHLT publishes world registry report annually), annual UNOS OPTN waiting list audit for status 1/2/3/4/5/6 documentation compliance, quarterly center-specific outcome review vs. national ISHLT benchmarks, and annual mechanical circulatory support (MCS) bridge-to-transplant outcomes report.',
  },
  {
    icon: BarChart3,
    title: 'Rejection Surveillance & Endomyocardial Biopsy',
    description: 'Annual ISHLT endomyocardial biopsy (EMB) surveillance schedule protocol review (weekly ×4, biweekly ×4, monthly ×6, then annual — standard protocol), monthly acute cellular rejection episode rate documentation (target ≤15% Grade 2R at 1 year), annual ISHLT 2023 Consensus Guidelines for the Management of Cardiac Allograft Vasculopathy (CAV) review, quarterly tacrolimus level audit (target trough 10–15 ng/mL Year 1, 8–12 Year 2+), annual cardiac allograft vasculopathy surveillance coronary angiography scheduling compliance audit, and annual gene expression profiling (AlloMap) utilization protocol review.',
  },
  {
    icon: Users,
    title: 'LVAD Bridge & Collaborative Practice',
    description: 'Annual LVAD INTERMACS registry data completeness audit (if center manages bridge-to-transplant patients), annual HeartMate 3 Abbott clinical training update and LVAD REMS compliance, annual collaborative practice agreement review with transplant cardiologist and cardiothoracic surgeon, DEA 3-year registration renewal, annual primary graft dysfunction (PGD) management protocol review per ISHLT 2014 consensus criteria, and annual cardiac rehabilitation referral rate documentation for post-transplant patients (AACVPR quality metric).',
  },
]

const studies = [
  {
    title: 'ISHLT 2023 Heart Transplant Registry — J Heart Lung Transplant 2023',
    finding: 'The ISHLT 40th Adult Heart Transplant Registry Report (2023) documented median survival of 13 years for all recipients, 15.1 years for recipients surviving to 1 year, and 1-year survival of 88% — establishing the global benchmarks against which UNOS programs are monitored.',
    implication: 'Annual ISHLT registry data submission (October deadline) and semi-annual SRTR program report review are UNOS requirements — NP-driven documentation of primary outcome data (survival, rejection episodes, CAV) drives program benchmark performance.',
  },
  {
    title: 'Cardiac Allograft Vasculopathy — NEJM 2010',
    finding: 'Cardiac allograft vasculopathy (CAV) developed in 30% of recipients by 5 years and 50% by 10 years — the leading cause of late graft failure. Annual coronary angiography or IVUS surveillance detected CAV a median 18 months before clinical presentation.',
    implication: 'Annual CAV surveillance coronary angiography scheduling compliance audit is an ISHLT quality standard — NP coordination of annual cath lab scheduling for heart transplant recipients drives early CAV detection and intervention timing.',
  },
  {
    title: 'Tacrolimus vs. Cyclosporine in Heart Transplant — NEJM 2006',
    finding: 'TAC-Heart trial: tacrolimus achieved lower acute rejection rate (20% vs. 35%) and superior renal function vs. cyclosporine at 1 year — establishing tacrolimus-based immunosuppression as the universal heart transplant standard.',
    implication: 'Annual tacrolimus therapeutic drug monitoring protocol review — including target trough levels by protocol year, CNI nephrotoxicity thresholds, and mTOR conversion criteria — requires NP annual immunosuppression CE to maintain current evidence-based practice.',
  },
  {
    title: 'Primary Graft Dysfunction — J Heart Lung Transplant 2014',
    finding: 'ISHLT consensus criteria defined primary graft dysfunction (PGD) as severe primary allograft failure within 24 hours of transplant — occurring in 2.3% of cases with 30-day mortality 30–40%, the most common cause of early post-transplant death.',
    implication: 'Annual PGD management protocol review — including ECMO bridge indications, RVAD support criteria, and inhaled nitric oxide protocol — requires NP annual critical care CE to manage severe early post-transplant complications.',
  },
  {
    title: 'Gene Expression Profiling to Reduce Biopsies — NEJM 2010',
    finding: 'IMAGE trial: AlloMap gene expression profiling was non-inferior to endomyocardial biopsy for rejection surveillance in stable patients ≥6 months post-transplant — allowing 76% reduction in biopsy frequency without increased rejection events.',
    implication: 'Annual gene expression profiling (AlloMap) utilization protocol review is an AST quality standard — NP selection of eligible stable patients for surveillance GEP vs. EMB drives patient safety and reduces procedural complication risk.',
  },
  {
    title: 'Heart Transplant in Advanced Age — J Heart Lung Transplant 2019',
    finding: 'UNOS data analysis: recipients ≥65 years achieved 1-year survival of 83% vs. 88% for younger recipients — and recipients ≥70 years had equivalent 5-year survival when selected with appropriate donor-recipient matching criteria.',
    implication: 'Annual updated ISHLT listing criteria review — including older recipient selection, frailty assessment, and donor-recipient matching for marginal donors — requires NP annual CE to apply evolving candidacy criteria for expanding the transplant pool.',
  },
]

const testimonial = {
  quote: 'Heart transplant NP practice requires AGACNP-BC and CCTC renewal, ISHLT annual registry submission, UNOS MPSC quarterly outcome monitoring, semi-annual SRTR program review, weekly-to-annual endomyocardial biopsy scheduling compliance audits, AlloMap utilization protocol updates, annual CAV surveillance angiography scheduling, tacrolimus protocol reviews, and LVAD INTERMACS data — simultaneously. Momenties consolidated every deadline into one calendar. Our program has maintained UNOS satisfactory status and achieved 92% 1-year patient survival for five consecutive years.',
  author: 'AGACNP-BC, CCTC, CCTNS',
  role: 'Heart Transplant Nurse Practitioner, Comprehensive Heart Failure &amp; Transplant Program',
}

export default function HeartTransplantNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Heart Transplant Nurse Practitioners"
        title="Every Heart Transplant NP Credential. Every ISHLT Deadline. One Calendar."
        subtitle="Heart transplant nurse practitioners manage one of the most protocol-intensive advanced practice portfolios in critical care — AGACNP-BC renewal, CCTC certification, UNOS MPSC quarterly outcome monitoring, ISHLT annual registry submission, endomyocardial biopsy surveillance scheduling, AlloMap protocol updates, CAV surveillance angiography compliance, and LVAD INTERMACS data completeness. Momenties automates every deadline so your program achieves world-class heart transplant outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Heart Transplant NP Compliance Lifecycle
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
              6 Landmark Studies That Define Heart Transplant NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind UNOS outcome benchmarks, ISHLT immunosuppression protocols, and heart transplant NP quality metrics.
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
        headline="Ready to Achieve 92% 1-Year Heart Transplant Survival?"
        subtext="Join heart transplant nurse practitioners using Momenties to automate every ISHLT, UNOS, and CCTC deadline. Free to start."
      />
    </main>
  )
}
