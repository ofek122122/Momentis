import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Lactation Medicine Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate IBCLC 5-year/75 CE renewal, WHNP-BC or FNP-BC renewal, ABM annual membership CE, JCAHO breastfeeding support standards, and Baby-Friendly designation deadlines.',
}

const pillars = [
  {
    icon: Shield,
    title: 'IBCLC & NP Board Certification',
    description: 'IBCLC (International Board Certified Lactation Consultant) 5-year/75 CERP renewal or re-examination, WHNP-BC 5-year renewal with 1,000 clinical hours and 30 women&apos;s health CE, FNP-BC 5-year renewal as alternative, IBLCE annual membership maintenance, and ABM (Academy of Breastfeeding Medicine) annual membership CE — all tracked in one calendar.',
  },
  {
    icon: Clock,
    title: 'ABM Conference & Lactation CE',
    description: 'ABM Annual International Conference CE, USLCA Annual Conference CE, ILCA Annual Conference CE, annual WHO/UNICEF Baby-Friendly Hospital Initiative (BFHI) training update, annual galactagogue evidence update CE, annual breastfeeding and pharmacotherapy CE — all CERP and CE hours logged automatically toward your IBCLC renewal.',
  },
  {
    icon: BarChart3,
    title: 'Baby-Friendly Designation & TJC Standards',
    description: 'Baby-Friendly USA 4-year designation annual self-assessment, TJC Perinatal Core Measure PC-05 exclusive breastfeeding rate monthly reporting (target ≥50%), monthly breastfeeding initiation rate reviews, annual WHO International Code of Marketing of Breast-milk Substitutes compliance audit, quarterly skin-to-skin contact rate documentation, and annual prenatal breastfeeding education completion rates.',
  },
  {
    icon: Users,
    title: 'Prescriptive Authority & Collaborative Practice',
    description: 'Annual collaborative practice agreement review with OB/GYN or family medicine physician, DEA 3-year registration renewal for prescribing NPs managing galactagogue medications, annual domperidone prescribing protocol review (state-specific), annual state NP prescriptive authority renewal, and biennial hospital credentialing for breastfeeding medicine consultation services.',
  },
]

const studies = [
  {
    title: 'BFHI Impact on Breastfeeding Duration — Pediatrics 2012',
    finding: 'Baby-Friendly Hospital Initiative implementation increased exclusive breastfeeding at discharge from 43% to 78% and reduced formula supplementation by 35% in a large multicenter study.',
    implication: 'Monthly TJC PC-05 exclusive breastfeeding rate reviews (target ≥50%) track BFHI implementation effectiveness — NP-managed lactation services directly drive this quality measure.',
  },
  {
    title: 'Breastfeeding and SIDS Reduction — Pediatrics 2011',
    finding: 'Breastfeeding for any duration reduced SIDS risk by 50%; exclusive breastfeeding for 2+ months reduced risk by 73%, establishing breastfeeding support as a patient safety intervention.',
    implication: 'Annual AAP safe sleep and breastfeeding policy update training is an ABM and ILCA continuing education standard — NPs must document annual guideline review.',
  },
  {
    title: 'Lactation Consultant Impact on Duration — JOGNN 2016',
    finding: 'IBCLC-led lactation support programs increased exclusive breastfeeding at 3 months by 22 percentage points and reduced early breastfeeding cessation by 30% vs. standard nursing care.',
    implication: 'Monthly exclusive breastfeeding rate at 1-month follow-up is a lactation medicine NP quality metric — structured scheduling of follow-up calls drives this outcome.',
  },
  {
    title: 'Domperidone for Low Milk Supply — J Hum Lact 2019',
    finding: 'Domperidone increased milk output by 94.5% vs. placebo in mothers of preterm infants with insufficient milk production in randomized trials, establishing it as the evidence-based galactagogue.',
    implication: 'Annual domperidone prescribing protocol review — including Health Canada REMS-equivalent precautions and cardiac safety monitoring — is an ABM clinical protocol requirement for prescribing NPs.',
  },
  {
    title: 'WHO Code Compliance & Formula Marketing — IBFAN 2022',
    finding: 'Hospitals in compliance with the WHO International Code of Marketing of Breast-milk Substitutes had 30% higher breastfeeding initiation rates than non-compliant institutions.',
    implication: 'Annual WHO Code compliance audit — reviewing all formula company relationships, gifts, and promotional materials — is a Baby-Friendly USA designation requirement.',
  },
  {
    title: 'Skin-to-Skin Contact Outcomes — Cochrane 2016',
    finding: 'Immediate skin-to-skin contact for ≥1 hour post-delivery increased breastfeeding initiation by 24% and duration at 1–4 months by 64% vs. standard care.',
    implication: 'Quarterly skin-to-skin contact rate documentation (BFHI Step 4) is a Baby-Friendly USA annual self-assessment requirement — NP documentation drives this compliance metric.',
  },
]

const testimonial = {
  quote: 'Lactation medicine NP practice requires tracking IBCLC 5-year CERP cycles, WHNP-BC renewal, ABM conference CE, Baby-Friendly annual self-assessments, TJC PC-05 monthly reporting, and WHO Code compliance audits. Momenties was the first system I found that actually handles all of these different credential types and reporting cycles. My IBCLC renewal last year was the smoothest process I&apos;ve had.',
  author: 'WHNP-BC, IBCLC',
  role: 'Lactation Medicine Nurse Practitioner, Mother-Baby Center',
}

export default function LactationMedicineNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Lactation Medicine Nurse Practitioners"
        title="Every Lactation NP Credential. Every Baby-Friendly Milestone. One Calendar."
        subtitle="Lactation medicine NPs hold one of the most distinct dual-credential portfolios in women&apos;s health — IBCLC 5-year/75 CERP renewal, NP board certification, Baby-Friendly annual self-assessments, TJC PC-05 monthly quality reporting, and WHO Code compliance audits. Momenties automates every deadline so you focus on supporting the families who need you."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Lactation Medicine NP Compliance Lifecycle
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
              6 Studies That Define Lactation Medicine NP Quality Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind BFHI requirements, TJC PC-05 targets, and lactation medicine NP outcome benchmarks.
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
        headline="Ready to Master Every Lactation NP Deadline?"
        subtext="Join lactation medicine nurse practitioners using Momenties to automate every IBCLC, WHNP-BC, and Baby-Friendly milestone. Free to start."
      />
    </main>
  )
}
