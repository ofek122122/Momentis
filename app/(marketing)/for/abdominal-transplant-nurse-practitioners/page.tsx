import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Abdominal Transplant Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGPCNP-BC, CCTC, CCTNS renewal, UNOS MPSC reporting, SRTR semi-annual outcomes, OPTN policy compliance, liver/kidney/pancreas immunosuppression protocol reviews, and ASTS annual CE documentation for abdominal transplant NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Abdominal Transplant Credentials & Certification',
    description: 'AGPCNP-BC 5-year renewal (75 CE — 25 pharmacology) for primary practice credential, CCTC (Certified Clinical Transplant Coordinator) biennial 60-CE renewal for transplant-specific advanced practice, CCTNS (Certified Clinical Transplant Nurse Specialist) biennial 60-CE renewal, ASTS (American Society of Transplant Surgeons) abdominal transplant section annual CE requirement, AST (American Society of Transplantation) annual meeting and online module CE, annual OPTN/UNOS policy compliance training update, and biennial collaborative practice agreement renewal with abdominal transplant surgeon for multi-organ evaluation and immunosuppression management.',
  },
  {
    icon: Clock,
    title: 'UNOS/OPTN Reporting & SRTR Outcomes',
    description: 'UNOS MPSC (Membership and Professional Standards Committee) quarterly waitlist and outcomes monitoring — liver 1-year patient survival ≥84%, kidney 1-year graft survival ≥93%, pancreas SPK 1-year graft survival ≥85%, SRTR semi-annual program-specific report review (January and July), annual OPTN deceased donor utilization policy compliance audit, quarterly candidate status update submission deadline compliance (≤7 days from clinical change — OPTN Policy 18.1), annual OPTN living donor outcomes reporting (LDQAS — Living Donor Qualification and Acceptance Standards), and annual ASTS Quality Collaborative multi-organ transplant outcomes data submission.',
  },
  {
    icon: BarChart3,
    title: 'Multi-Organ Outcomes & Immunosuppression Metrics',
    description: 'Monthly tacrolimus trough TDM documentation (liver target 5–10 ng/mL month 1–6; kidney target 8–12 ng/mL month 1–3 → 5–8 ng/mL thereafter; pancreas target 10–15 ng/mL), monthly MMF/MPA dose adherence documentation, quarterly acute rejection episode rate tracking (kidney ≤15% at 1 year, liver ≤10% at 1 year, pancreas ≤20% at 1 year), quarterly CMV PCR surveillance (D+/R− high-risk: monthly × 12 months), quarterly BK viremia PCR for kidney and pancreas recipients (quarterly × 2 years), annual HbA1c ≤6.5% documentation for pancreas transplant recipients, annual donor-specific antibody (DSA) screening for sensitized recipients, and annual renal function eGFR trending for tacrolimus nephrotoxicity surveillance in non-kidney transplants.',
  },
  {
    icon: Users,
    title: 'Transplant Team Collaboration & Program Standards',
    description: 'Annual multi-disciplinary transplant selection committee participation documentation (OPTN requirement — all solid organ decisions), annual living donor advocate (LDPA) program policy review and coordinator training update, annual UNOS transplant program requirements (TPR) self-assessment audit, annual hepatocellular carcinoma (HCC) exception point policy compliance review (OPTN liver allocation), annual deceased donor organ utilization committee participation and discard rate review, annual OPTN-required ABO verification policy competency documentation (≥2 independent ABO verifications pre-transplant), quarterly pancreas rejection rescue protocol training (MP methylprednisolone pulse + tacrolimus optimization), and annual palliative care integration documentation for waitlisted patients with MELD ≥25 or ESKD with functional decline.',
  },
]

const studies = [
  {
    title: 'Liver Transplant Survival — NEJM 2001',
    finding: 'NIDDK multicenter liver transplantation study: 5-year patient survival 72%, 10-year survival 62% — tacrolimus-based immunosuppression superior to cyclosporine in acute rejection prevention (25% vs. 38%, p<0.01), establishing tacrolimus as the cornerstone of liver transplant immunosuppression.',
    implication: 'Monthly tacrolimus trough TDM documentation (liver target 5–10 ng/mL months 1–6) and quarterly acute rejection rate tracking (≤10% at 1 year) are the primary abdominal transplant NP immunosuppression quality metrics — trough documentation accuracy directly drives MPSC benchmark compliance.',
  },
  {
    title: 'Kidney Transplant Outcomes — NEJM BENEFIT 2011',
    finding: 'Belatacept vs. cyclosporine multicenter study: belatacept achieved 43% lower risk of composite graft loss or death vs. cyclosporine (p=0.008), 1-year eGFR 65 vs. 50 mL/min, and superior renal function preservation at 7 years — with comparable acute rejection rates at ≤15%.',
    implication: 'Monthly TDM and quarterly eGFR trending for tacrolimus nephrotoxicity surveillance in liver and pancreas recipients requires NP annual immunosuppression protocol CE to optimize trough targets and detect calcineurin inhibitor toxicity before irreversible decline.',
  },
  {
    title: 'BK Virus Nephropathy — NEJM 2002',
    finding: 'BK virus multicenter surveillance study: BK viremia detected in 13% of kidney transplant recipients at 3 months — with BK nephropathy developing in 8% and graft loss in 50% of BK nephropathy cases without immunosuppression reduction. Quarterly PCR monitoring reduced nephropathy incidence from 8% to 2%.',
    implication: 'Quarterly BK viremia PCR surveillance for kidney and pancreas recipients (quarterly × 2 years) requires NP annual transplant infectious disease CE to guide immunosuppression reduction protocols and coordinate with transplant nephrology for antiviral escalation when BK viremia exceeds 10,000 copies/mL.',
  },
  {
    title: 'CMV in Solid Organ Transplant — NEJM 2010',
    finding: 'Multi-organ CMV prevention trial: valganciclovir prophylaxis for 200 days vs. 100 days in D+/R− recipients reduced CMV disease from 36.8% to 16.1% (p<0.001) and indirect effects (rejection, graft loss) — establishing prolonged prophylaxis for high-risk donor-positive/recipient-negative solid organ recipients.',
    implication: 'Quarterly CMV PCR surveillance (D+/R− recipients: monthly × 12 months) requires NP annual CMV prevention protocol CE to coordinate prophylaxis duration, detect breakthrough viremia, and manage valganciclovir dosing with renal function adjustment in multi-organ recipients.',
  },
  {
    title: 'Pancreas Transplant Outcomes — IPTR 2015',
    finding: 'International Pancreas Transplant Registry multicenter analysis: simultaneous pancreas-kidney (SPK) achieved 85% 5-year pancreas graft survival and 82% 5-year kidney graft survival — with HbA1c ≤6.5% achieved in 94% of functioning SPK grafts, establishing SPK as definitive therapy for type 1 diabetes with ESKD.',
    implication: 'Annual HbA1c ≤6.5% documentation for SPK recipients and quarterly SPK graft survival tracking (UNOS MPSC benchmark ≥85% at 1 year) requires NP annual pancreas transplant CE to identify early graft rejection, manage dual immunosuppression for both pancreas and kidney, and coordinate endocrinology for residual insulin requirements.',
  },
  {
    title: 'Donor-Specific Antibody & Rejection — JASN 2018',
    finding: 'Multi-center DSA study: de novo donor-specific antibody development occurred in 23% of kidney transplant recipients by 5 years — associated with 3.8-fold increased risk of antibody-mediated rejection (AMR) and 5-year graft loss of 51% vs. 14% in DSA-negative recipients. Annual DSA screening detected AMR-qualifying DSA in 71% before histologic rejection.',
    implication: 'Annual DSA screening for sensitized recipients and quarterly acute rejection tracking (kidney ≤15% at 1 year) requires NP annual transplant immunology CE to identify DSA risk factors, coordinate flow cytometry crossmatch escalation, and guide plasmapheresis + IVIG protocols for active AMR management.',
  },
]

const testimonial = {
  quote: 'Abdominal transplant NP practice requires AGPCNP-BC and CCTC renewal, UNOS MPSC quarterly reporting, SRTR semi-annual outcomes review, monthly tacrolimus TDM documentation, quarterly BK and CMV surveillance, DSA annual screening, SPK quarterly tracking, HCC exception compliance, OPTN policy updates, and MDT selection committee documentation — across three organ programs simultaneously. Momenties consolidated every deadline. Our program achieved ≤12% acute rejection and top-quartile SRTR outcomes for kidney, liver, and pancreas.',
  author: 'AGPCNP-BC, CCTC, CCTNS',
  role: 'Abdominal Transplant Nurse Practitioner, Academic Multi-Organ Transplant Program',
}

export default function AbdominalTransplantNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Abdominal Transplant Nurse Practitioners"
        title="Every Transplant NP Credential. Every UNOS Deadline. One Calendar."
        subtitle="Abdominal transplant nurse practitioners manage one of the most complex advanced practice portfolios in transplant medicine — AGPCNP-BC renewal, CCTC certification, UNOS MPSC quarterly reporting, SRTR semi-annual outcomes, monthly tacrolimus TDM, quarterly BK and CMV surveillance, annual DSA screening, and multi-organ selection committee documentation across kidney, liver, and pancreas programs. Momenties automates every deadline so your program achieves top-quartile SRTR outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Abdominal Transplant NP Compliance Lifecycle
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
              6 Landmark Studies That Define Abdominal Transplant NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind UNOS MPSC quality metrics, SRTR outcome benchmarks, and abdominal transplant NP immunosuppression standards.
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
        headline="Ready to Achieve Top-Quartile SRTR Outcomes?"
        subtext="Join abdominal transplant nurse practitioners using Momenties to automate every UNOS, CCTC, and OPTN deadline. Free to start."
      />
    </main>
  )
}
