import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Thoracic Surgery Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGACNP-BC, RNFA renewal, STS GTSD data submission, ACLS/ATLS maintenance, esophageal cancer registry reporting, and lung cancer screening program quality metrics.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Thoracic Surgery Credentials & Certification',
    description: 'AGACNP-BC 5-year renewal with 500 acute care clinical hours, RNFA 2-year/20 CE renewal for surgical assistance, ACLS biennial recertification, ATLS 4-year renewal, annual STS (Society of Thoracic Surgeons) membership, annual AATS (American Association for Thoracic Surgery) membership CE, and biennial hospital credentialing for thoracoscopic procedure assistance (VATS/robotic thoracic).',
  },
  {
    icon: Clock,
    title: 'STS, AATS & Thoracic Conference CE',
    description: 'STS Annual Meeting CE, AATS Annual Meeting CE, ESTS (European Society of Thoracic Surgeons) Congress CE, annual NCCN NSCLC guideline annual update review CE, annual lung cancer screening LDCT CE, annual esophageal cancer management CE, and annual airway management and bronchoscopy CE — all tracked toward AGACNP-BC renewal and RNFA maintenance.',
  },
  {
    icon: BarChart3,
    title: 'STS GTSD Registry & Quality Metrics',
    description: 'STS General Thoracic Surgery Database (GTSD) quarterly data submission (≥90% case capture), annual STS GTSD program composite score review, monthly 30-day mortality and major morbidity rate reviews, quarterly extended resection (pneumonectomy) outcome tracking, monthly lung cancer screening program adherence rate (LDCT recommendation follow-through ≥85%), and annual NCDB case submission completeness.',
  },
  {
    icon: Users,
    title: 'Collaborative Practice & Procedural Authority',
    description: 'Annual collaborative practice agreement review with thoracic surgeon, DEA 3-year controlled substance registration renewal, annual chest tube management protocol review, annual first-assist credentialing for VATS and robotic thoracic procedures, annual bronchoscopy assistance competency documentation, and annual thoracic epidural management CE for post-operative pain protocols.',
  },
]

const studies = [
  {
    title: 'NLST Low-Dose CT Screening — NEJM 2011',
    finding: 'Annual LDCT screening of high-risk patients (55–74 years, 30 pack-year history) reduced lung cancer mortality by 20% vs. chest X-ray, establishing LDCT as the USPSTF A-recommendation screening standard.',
    implication: 'Monthly lung cancer screening follow-through rate audit (recommendation compliance ≥85%) is an ACR/STS lung cancer screening program quality metric — NP-managed programs track this monthly.',
  },
  {
    title: 'VATS vs. Open Lobectomy Outcomes — J Thorac Cardiovasc Surg 2009',
    finding: 'VATS lobectomy achieved equivalent oncologic outcomes with lower complication rates (33% vs. 45%), shorter hospitalization (4 vs. 7 days), and faster return to adjuvant therapy than open lobectomy.',
    implication: 'Quarterly minimally invasive approach rate for anatomic resections is an STS GTSD quality metric — NP documentation of planned vs. converted approach drives registry accuracy.',
  },
  {
    title: 'Complete Resection Margin Status — J Thorac Oncol 2011',
    finding: 'R0 (complete) resection achieved in ≥92% of cases is the STS composite score benchmark; positive margin (R1/R2) rates above institutional benchmarks trigger programmatic review.',
    implication: 'Quarterly R0 resection rate review by cancer type (NSCLC, esophageal) is a required STS GTSD quality submission — NP documentation of pathology margin results drives this metric.',
  },
  {
    title: 'Pulmonary Rehabilitation Pre-Surgery — NEJM 2022',
    finding: 'Preoperative pulmonary rehabilitation in borderline-resectable NSCLC patients reduced 90-day major complications by 34% and increased functional recovery to pre-surgical baseline by 6 weeks.',
    implication: 'Monthly preoperative pulmonary rehabilitation referral documentation for borderline-operable patients is an emerging NP quality metric aligned with STS and AATS perioperative guidelines.',
  },
  {
    title: 'FLOT4 for Resectable Gastroesophageal — NEJM 2019',
    finding: 'FLOT perioperative chemotherapy improved median OS from 35 to 50 months and R0 resection from 48% to 84% for resectable gastroesophageal junction cancers, replacing ECF as the perioperative standard.',
    implication: 'Annual esophageal cancer perioperative chemotherapy protocol update CE ensures thoracic NPs managing pre- and post-operative care remain current with NCCN and ESMO guideline changes.',
  },
  {
    title: 'Enhanced Recovery After Thoracic Surgery — J Thorac Cardiovasc Surg 2019',
    finding: 'ERAS for thoracic surgery protocols reduced median LOS from 5 to 3.5 days, major complications from 22% to 13%, and 30-day readmission from 12% to 7% across 14 evidence-based pathway elements.',
    implication: 'Monthly ERAS protocol adherence documentation (early mobilization, chest PT, early oral intake, epidural management) is an NP-driven quality metric for thoracic surgery programs.',
  },
]

const testimonial = {
  quote: 'Thoracic surgery NP practice means managing AGACNP-BC renewal, RNFA maintenance, ACLS and ATLS recertifications, STS GTSD quarterly data submissions, NCDB case completeness, and monthly lung cancer screening follow-through rates — all at once. Momenties was the first tool that gave me one calendar for all of it. My surgical team actually noticed how much more organized our quality data became.',
  author: 'AGACNP-BC, RNFA',
  role: 'Thoracic Surgery Nurse Practitioner, Comprehensive Thoracic Oncology Program',
}

export default function ThoracicSurgeryNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Thoracic Surgery Nurse Practitioners"
        title="Every Thoracic NP Credential. Every STS Registry Deadline. One Calendar."
        subtitle="Thoracic surgery NPs manage one of the highest-acuity credential portfolios in surgical advanced practice — AGACNP-BC renewal, RNFA certification, ATLS 4-year renewal, STS GTSD quarterly registry submissions, lung cancer screening quality metrics, and NCDB data completeness. Momenties automates every deadline so your program stays registry-compliant and accreditation-ready."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Thoracic Surgery NP Compliance Lifecycle
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
              6 Landmark Studies That Define Thoracic Surgery NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind STS GTSD quality metrics, NCCN thoracic oncology guidelines, and thoracic NP outcome benchmarks.
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
        headline="Ready to Stay Ahead of Every STS Deadline?"
        subtext="Join thoracic surgery nurse practitioners using Momenties to automate every AGACNP-BC, RNFA, STS GTSD, and NCDB deadline. Free to start."
      />
    </main>
  )
}
