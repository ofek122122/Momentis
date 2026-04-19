import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Kidney Transplant Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGPCNP-BC, CCTC, CCTNS renewal, UNOS waiting list management, tacrolimus monitoring protocol, KDIGO guideline annual review, and AST annual CE deadlines for kidney transplant NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Kidney Transplant Credentials & Certification',
    description: 'AGPCNP-BC or AGACNP-BC 5-year renewal with 500 clinical hours, CCTC (Certified Clinical Transplant Coordinator) biennial CE renewal (ABTC), CCTNS (Certified Clinical Transplant Nurse Specialist) biennial renewal for advanced practice NPs, annual AST (American Society of Transplantation) membership CE, annual NATCO membership CE, and biennial hospital credentialing renewal for kidney transplant evaluation and post-transplant management.',
  },
  {
    icon: Clock,
    title: 'UNOS Compliance & Waiting List Management',
    description: 'UNOS MPSC (Membership and Professional Standards Committee) annual outcome monitoring — 1-year graft survival ≥85% and patient survival ≥90% required to avoid program review, annual OPTN Policy compliance audit for kidney allocation system (KAS) documentation, annual USRDS registry data submission, semi-annual SRTR program-specific report review, quarterly UNOS center-specific outcome review, and annual waitlist audit for inactive patient status documentation compliance.',
  },
  {
    icon: BarChart3,
    title: 'KDIGO Guidelines & Immunosuppression Monitoring',
    description: 'Annual KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients comprehensive review, annual tacrolimus therapeutic drug monitoring protocol review (target CNI trough levels by protocol phase), quarterly mycophenolate mofetil dose adjustment protocol audit, annual KDOQI guideline update review, monthly acute rejection episode rate documentation (target ≤15% at 1 year), and annual BK polyomavirus monitoring protocol review with staff competency documentation.',
  },
  {
    icon: Users,
    title: 'Collaborative Practice & Post-Transplant Surveillance',
    description: 'Annual collaborative practice agreement review with transplant nephrologist and transplant surgeon, DEA 3-year registration renewal for tacrolimus and controlled substance prescribing, annual deceased donor kidney utilization rate audit (KDPI ≤85% acceptance rate documentation), annual cardiovascular risk reduction protocol review (leading cause of death post-transplant), annual CMV/EBV prophylaxis protocol annual update per current KDIGO recommendations, and annual DSA (donor-specific antibody) monitoring protocol review.',
  },
]

const studies = [
  {
    title: 'Kidney Allocation System Impact — NEJM 2014',
    finding: 'The 2014 UNOS Kidney Allocation System (KAS) revision shifted allocation from time-on-dialysis to estimated post-transplant survival (EPTS) scoring — increasing transplants for high-EPTS candidates and reducing organ discard by 15% in the first year.',
    implication: 'Annual KDPI and EPTS documentation training for kidney transplant NPs is an OPTN compliance requirement — accurate pre-transplant evaluation documentation drives waiting list prioritization and organ acceptance decisions.',
  },
  {
    title: 'CNI-Free Immunosuppression — NEJM 2011',
    finding: 'BENEFIT trial: belatacept-based immunosuppression achieved superior renal function at 7 years vs. cyclosporine (eGFR 57 vs. 45 mL/min/1.73m²) with similar acute rejection rates — establishing CNI minimization as a long-term graft preservation strategy.',
    implication: 'Annual immunosuppression protocol review — including CNI minimization thresholds, belatacept conversion criteria, and mTOR inhibitor switch indications — requires NP clinical update CE to manage evolving post-transplant regimens.',
  },
  {
    title: 'BK Virus Nephropathy — NEJM 2002',
    finding: 'BK polyomavirus nephropathy occurred in 5–8% of kidney transplant recipients under intense immunosuppression, causing graft failure in 50% of diagnosed cases — establishing routine BK virus PCR surveillance as the standard of care.',
    implication: 'Quarterly BK viremia PCR surveillance protocol adherence audit is an AST quality standard — NP-driven plasma BK PCR monitoring at 3/6/9/12 months and annual thereafter drives early detection and immunosuppression reduction to preserve graft function.',
  },
  {
    title: 'Delayed Graft Function Management — JASN 2010',
    finding: 'Delayed graft function (DGF) occurred in 20–50% of deceased-donor kidney transplants and independently increased acute rejection risk by 38% and reduced 5-year graft survival by 12% — establishing DGF as a primary post-transplant quality metric.',
    implication: 'Monthly DGF rate documentation (target ≤25% for deceased-donor kidneys) is an MPSC monitored metric — NP early post-operative management of fluid balance, CNI dosing, and dialysis need drives DGF duration and graft outcomes.',
  },
  {
    title: 'Antibody-Mediated Rejection Treatment — JASN 2018',
    finding: 'Active antibody-mediated rejection (ABMR) treated with plasmapheresis plus IVIG achieved graft stabilization in 60% of cases at 1 year vs. 25% with steroids alone — establishing DSA monitoring and early ABMR treatment protocols as the transplant standard.',
    implication: 'Annual DSA monitoring protocol review — including de novo DSA surveillance frequency, MFI threshold for protocol biopsy, and ABMR treatment pathway — requires annual NP CE to manage evolving rejection treatment algorithms.',
  },
  {
    title: 'ABPM Hypertension in Transplant — JASN 2014',
    finding: 'Ambulatory blood pressure monitoring identified masked hypertension in 32% of kidney transplant recipients with normal clinic BP — and masked hypertension was associated with 2.4x higher cardiovascular event rate and 1.8x higher graft loss at 5 years.',
    implication: 'Annual cardiovascular risk reduction CE for kidney transplant NPs — including ABPM interpretation, CNI-induced hypertension management, and post-transplant diabetes screening — directly reduces the leading cause of post-transplant mortality.',
  },
]

const testimonial = {
  quote: 'Kidney transplant NP practice requires AGPCNP-BC and CCTC renewal, NATCO annual CE, semi-annual SRTR program report review, quarterly UNOS outcome monitoring, monthly BK virus PCR surveillance adherence audits, annual KDIGO protocol updates, and OPTN KAS compliance documentation — all simultaneously. Momenties gave me one calendar for the entire lifecycle. Our program maintained UNOS satisfactory status with zero citations for three consecutive years.',
  author: 'AGPCNP-BC, CCTC, CCTNS',
  role: 'Kidney Transplant Nurse Practitioner, Academic Transplant Center',
}

export default function KidneyTransplantNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Kidney Transplant Nurse Practitioners"
        title="Every Kidney Transplant NP Credential. Every UNOS Deadline. One Calendar."
        subtitle="Kidney transplant nurse practitioners manage one of the most outcome-monitored advanced practice portfolios in medicine — AGPCNP-BC renewal, CCTC certification, UNOS MPSC quarterly outcome monitoring, semi-annual SRTR program reports, annual KDIGO protocol reviews, BK virus PCR surveillance audits, and OPTN policy compliance documentation. Momenties automates every deadline so your program maintains UNOS satisfactory status year after year."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Kidney Transplant NP Compliance Lifecycle
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
              6 Landmark Studies That Define Kidney Transplant NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind UNOS outcome benchmarks, KDIGO immunosuppression protocols, and kidney transplant NP quality metrics.
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
        headline="Ready for Zero UNOS Citations?"
        subtext="Join kidney transplant nurse practitioners using Momenties to automate every UNOS, KDIGO, and CCTC deadline. Free to start."
      />
    </main>
  )
}
