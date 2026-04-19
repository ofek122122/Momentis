import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Pancreas Transplant Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGPCNP-BC, CCTC, CCTNS renewal, UNOS pancreas allocation compliance, simultaneous pancreas-kidney (SPK) outcome monitoring, C-peptide surveillance, and IPTR annual data submission deadlines for pancreas transplant NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Pancreas Transplant Credentials & Certification',
    description: 'AGPCNP-BC 5-year renewal with 500 clinical hours, CCTC (Certified Clinical Transplant Coordinator) biennial CE renewal (ABTC), CCTNS biennial renewal for advanced practice NPs, annual ASTS (American Society of Transplant Surgeons) Annual Scientific Meeting CE, annual AST (American Society of Transplantation) Pancreas and Islet Community of Practice CE, annual ADA (American Diabetes Association) Scientific Sessions CE for post-pancreas diabetes management, and biennial hospital credentialing renewal for pancreas transplant evaluation and post-transplant insulin-free management.',
  },
  {
    icon: Clock,
    title: 'UNOS Compliance & IPTR Registry',
    description: 'UNOS MPSC annual pancreas outcome monitoring — 1-year graft survival ≥80% (SPK ≥90%) and patient survival ≥92% required to avoid program review, semi-annual SRTR program-specific report review, annual IPTR (International Pancreas Transplant Registry) data submission, annual UNOS pancreas allocation policy compliance audit (KPAS — kidney-pancreas allocation system documentation), quarterly center-specific SPK vs. PAK vs. PTA outcome review, and annual pancreas procurement and acceptance rate documentation (PPPV ≥8/year for program volume maintenance).',
  },
  {
    icon: BarChart3,
    title: 'Graft Function Monitoring & Rejection Surveillance',
    description: 'Annual ASTS consensus criteria update for pancreas graft function — fasting glucose, HbA1c, C-peptide, and amylase monitoring protocol review, monthly acute rejection episode rate documentation (SPK target ≤15% at 1 year), quarterly exocrine drainage complication rate tracking (enteric vs. bladder — leak rate ≤5%), quarterly portal venous thrombosis surveillance protocol audit (most common cause of early graft loss), annual tacrolimus and MMF dose titration protocol review for pancreas-specific immunosuppression, and annual urological complication rate documentation for bladder-drained pancreas grafts.',
  },
  {
    icon: Users,
    title: 'Islet Cell & Collaborative Practice',
    description: 'Annual collaborative practice agreement review with pancreas transplant surgeon and endocrinologist, DEA 3-year registration renewal for insulin and immunosuppression prescribing in early post-transplant period, annual islet cell transplantation protocol review (if program also performs islet transplantation — Edmonton protocol annual update), annual HbA1c normalization rate documentation (SPK target ≤6% at 1 year — primary efficacy endpoint), annual cardiovascular risk reduction protocol review (leading cause of death post-pancreas transplant), and annual post-transplant lymphoproliferative disorder (PTLD) surveillance protocol review.',
  },
]

const studies = [
  {
    title: 'Simultaneous Pancreas-Kidney Transplant — NEJM 2001',
    finding: 'SPK transplantation achieved insulin independence in 78% of type 1 diabetic recipients at 1 year with superior renal allograft survival vs. kidney-alone transplant in diabetics (10-year graft survival 67% vs. 46%) — establishing SPK as the gold standard for eligible type 1 diabetics with ESRD.',
    implication: 'Annual SPK outcome documentation — insulin independence rate, HbA1c normalization, and renal allograft function — is the primary UNOS/MPSC pancreas program quality metric. NP post-operative C-peptide and glucose monitoring drives early detection of graft dysfunction.',
  },
  {
    title: 'Islet Cell Transplantation — NEJM 2000',
    finding: 'The Edmonton Protocol established that islet cell transplantation with tacrolimus/sirolimus/daclizumab achieved insulin independence in 100% of recipients at 1 year — launching the modern islet transplant era as a less invasive alternative to whole-organ pancreas transplant for brittle type 1 diabetes.',
    implication: 'Annual islet transplantation protocol review — Edmonton protocol immunosuppression, islet infusion criteria, and long-term insulin independence rates — requires NP annual CE update as newer sirolimus-free protocols and encapsulation technologies continue to evolve.',
  },
  {
    title: 'Portal Venous Thrombosis After Pancreas Transplant — Transplantation 2005',
    finding: 'Portal venous thrombosis was the most common cause of early pancreas graft loss — occurring in 3–8% of cases, predominantly within 48 hours of transplant, and salvageable with immediate surgical thrombectomy in 40–60% of cases.',
    implication: 'Quarterly portal venous thrombosis surveillance protocol audit — Doppler ultrasound frequency, anticoagulation protocol, and thrombectomy criteria — requires NP annual surgical complication CE to ensure early detection and emergent response to the most preventable cause of pancreas graft loss.',
  },
  {
    title: 'Pancreas After Kidney Transplant — JASN 2006',
    finding: 'PAK (pancreas after kidney) transplantation achieved 1-year insulin independence in 72% of recipients vs. 78% for SPK — but patient survival was equivalent, establishing PAK as a valid option for pre-transplanted recipients who lose insulin independence over time.',
    implication: 'Quarterly SPK vs. PAK vs. PTA outcome stratification documentation is a UNOS data requirement — NP post-operative documentation of procedure type, indication category, and insulin independence status drives SRTR program-specific reporting accuracy.',
  },
  {
    title: 'Bladder vs. Enteric Drainage — Transplantation 2010',
    finding: 'Enteric-drained pancreas transplants achieved equivalent 5-year graft survival vs. bladder-drained with significantly lower urological complications (cystitis, urethritis, hematuria) — driving the shift to enteric drainage as the preferred exocrine drainage technique at most centers.',
    implication: 'Annual exocrine drainage complication rate documentation — enteric leak rate ≤5% and bladder-drained urological complication rate — is an ASTS quality metric. NP post-operative drain management and leak surveillance drives UNOS data completeness.',
  },
  {
    title: 'Cardiovascular Outcomes After Pancreas Transplant — AJKD 2008',
    finding: 'Successful pancreas transplantation with sustained insulin independence reduced cardiovascular mortality by 61% and all-cause mortality by 53% vs. failed pancreas transplant in type 1 diabetics — establishing cardiovascular risk reduction as the primary rationale for pancreas transplantation beyond glucose control.',
    implication: 'Annual cardiovascular risk reduction protocol review for post-pancreas transplant patients — including lipid management, blood pressure targets, and antiplatelet therapy — requires NP annual CE update as the primary driver of long-term survival benefit from insulin independence.',
  },
]

const testimonial = {
  quote: 'Pancreas transplant NP practice requires AGPCNP-BC and CCTC renewal, IPTR annual data submission, UNOS MPSC quarterly outcome monitoring, semi-annual SRTR program review, quarterly portal venous thrombosis surveillance audits, annual HbA1c normalization rate documentation, SPK/PAK/PTA outcome stratification, tacrolimus protocol reviews, and post-transplant lymphoproliferative disorder surveillance — all simultaneously. Momenties consolidated every deadline into one calendar. Our SPK program achieved 92% 1-year insulin independence rate and UNOS satisfactory status for four consecutive years.',
  author: 'AGPCNP-BC, CCTC, CCTNS',
  role: 'Pancreas Transplant Nurse Practitioner, Comprehensive Abdominal Transplant Program',
}

export default function PancreasTransplantNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Pancreas Transplant Nurse Practitioners"
        title="Every Pancreas Transplant NP Credential. Every UNOS Deadline. One Calendar."
        subtitle="Pancreas transplant nurse practitioners manage one of the most outcome-monitored advanced practice portfolios in transplant medicine — AGPCNP-BC renewal, CCTC certification, UNOS MPSC quarterly outcome monitoring, IPTR annual data submission, quarterly portal venous thrombosis surveillance, HbA1c normalization documentation, SPK/PAK/PTA outcome stratification, and ASTS immunosuppression protocol updates. Momenties automates every deadline so your program achieves and sustains top-quartile insulin independence rates."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Pancreas Transplant NP Compliance Lifecycle
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
              6 Landmark Studies That Define Pancreas Transplant NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind UNOS outcome benchmarks, IPTR quality metrics, and pancreas transplant NP graft monitoring standards.
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
        headline="Ready to Achieve 92% SPK Insulin Independence?"
        subtext="Join pancreas transplant nurse practitioners using Momenties to automate every UNOS, IPTR, and CCTC deadline. Free to start."
      />
    </main>
  )
}
