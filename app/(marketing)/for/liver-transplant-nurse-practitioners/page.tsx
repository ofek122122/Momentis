import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Liver Transplant Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGPCNP-BC, CCTC transplant credential, UNOS MPSC data submission, hepatitis B REMS, and AASLD annual conference CE deadlines for liver transplant NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Transplant Credentials & Board Certification',
    description: 'AGPCNP-BC or AGACNP-BC 5-year renewal with 500 clinical hours, CCTC (Certified Clinical Transplant Coordinator) biennial CE renewal, CCTNS (Certified Clinical Transplant Nurse Specialist) renewal, annual ASTS membership, annual AST membership, and biennial hospital credentialing for transplant-specific procedures (liver biopsy assistance, paracentesis).',
  },
  {
    icon: Clock,
    title: 'AASLD, ASTS & Transplant Conference CE',
    description: 'AASLD The Liver Meeting Annual Conference CE, ASTS Annual Meeting CE, AST Annual Scientific Meeting CE, ILTS Annual Congress CE, annual UNOS/OPTN transplant professional continuing education, and annual tacrolimus monitoring and immunosuppression management CE — all tracked toward your CCTC and board renewal.',
  },
  {
    icon: BarChart3,
    title: 'UNOS MPSC Reporting & SRTR Data',
    description: 'UNOS Membership and Professional Standards Committee (MPSC) annual program-level outcomes monitoring, SRTR (Scientific Registry of Transplant Recipients) semi-annual program-specific report review, monthly waitlist mortality rate reviews, monthly deceased donor organ utilization documentation audits, quarterly 1-year graft survival rate tracking, and annual OPTN policy compliance self-assessment.',
  },
  {
    icon: Users,
    title: 'Immunosuppression REMS & Collaborative Practice',
    description: 'Annual mycophenolate REMS (CellCept/Myfortic REMS) female prescriber training, annual everolimus Zortress prescribing authority CE, annual calcineurin inhibitor nephrotoxicity monitoring protocol review, annual collaborative practice agreement review with hepatologist and transplant surgeon, DEA 3-year registration renewal, and annual tacrolimus therapeutic drug monitoring competency documentation.',
  },
]

const studies = [
  {
    title: 'UNOS Liver Outcomes by Program Volume — AJT 2019',
    finding: 'Liver transplant programs performing ≥50 transplants/year had 15–20% lower 1-year graft failure rates than low-volume centers, establishing volume-outcome relationships that drive MPSC monitoring thresholds.',
    implication: 'Quarterly 1-year graft survival rate reviews comparing program outcomes to SRTR expected values are the primary UNOS MPSC performance metric — NP documentation drives this data.',
  },
  {
    title: 'Tacrolimus Minimization — AJT 2012',
    finding: 'Tacrolimus minimization protocols (target trough 3–5 ng/mL at 12 months) reduced chronic kidney disease progression by 28% post-liver transplant without increasing rejection rates.',
    implication: 'Annual tacrolimus minimization protocol review and monthly trough level documentation compliance audits are standard ASTS quality benchmarks for transplant NP practice.',
  },
  {
    title: 'DAA HCV Therapy Post-Transplant — NEJM 2015',
    finding: 'Direct-acting antiviral therapy achieved SVR12 ≥95% in liver transplant recipients with recurrent HCV, effectively eliminating HCV-related graft loss as a cause of transplant failure.',
    implication: 'Annual HCV recurrence screening and DAA treatment eligibility review for all HCV-positive recipients is an AASLD post-transplant management standard that requires systematic scheduling.',
  },
  {
    title: 'MELD Score Validation — Hepatology 2003',
    finding: 'MELD score predicted 90-day waitlist mortality with AUC 0.87, replacing Child-Pugh as the primary organ allocation algorithm, requiring transplant programs to update waitlist management protocols annually.',
    implication: 'Monthly MELD score update documentation for all waitlist patients is an OPTN requirement — NP documentation completeness directly affects organ allocation accuracy.',
  },
  {
    title: 'Living Donor Outcomes — NEJM 2010',
    finding: 'Living donor liver transplantation achieved 1-year recipient survival of 87% vs. 85% for deceased donor, with donor 90-day mortality 0.15% establishing the risk framework for live donor selection.',
    implication: 'Annual living donor long-term follow-up documentation (2-year minimum per OPTN policy 18.1) is a compliance requirement — NP-managed living donor clinics must document every annual visit.',
  },
  {
    title: 'NASH Cirrhosis & Transplant Outcomes — Liver Transpl 2020',
    finding: 'NASH surpassed HCV as the leading indication for liver transplantation in the U.S. by 2018; NASH recipients had comparable 1-year survival to HCV recipients but higher cardiovascular comorbidity burden.',
    implication: 'Annual post-transplant metabolic syndrome monitoring protocol (weight, HbA1c, lipids, BP) for NASH recipients is emerging as an ASTS quality standard requiring structured follow-up scheduling.',
  },
]

const testimonial = {
  quote: 'Liver transplant NP practice is compliance-intensive at every level — CCTC biennial CE, AASLD annual conference, monthly UNOS MELD updates, tacrolimus trough monitoring, mycophenolate REMS, and quarterly SRTR graft survival rate reviews. Momenties gives me one calendar for all of it. I haven&apos;t had a late UNOS data submission since we implemented it.',
  author: 'AGPCNP-BC, CCTC',
  role: 'Liver Transplant Nurse Practitioner, Academic Transplant Center',
}

export default function LiverTransplantNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Liver Transplant Nurse Practitioners"
        title="Every Transplant NP Credential. Every UNOS Deadline. One Calendar."
        subtitle="Liver transplant NPs manage the highest-stakes compliance portfolio in solid organ transplant medicine — CCTC biennial renewal, UNOS MPSC annual monitoring, monthly MELD score updates, SRTR semi-annual program reports, mycophenolate REMS, and graft survival rate tracking. Momenties automates every deadline so your program stays OPTN-compliant year-round."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Liver Transplant NP Compliance Lifecycle
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
              6 Landmark Studies That Define Liver Transplant NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind UNOS MPSC performance thresholds, OPTN policy requirements, and transplant NP outcome benchmarks.
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
        headline="Ready to Stay Ahead of Every UNOS Deadline?"
        subtext="Join liver transplant nurse practitioners using Momenties to automate every CCTC, MPSC, and OPTN compliance deadline. Free to start."
      />
    </main>
  )
}
