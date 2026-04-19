import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Lung Transplant Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGACNP-BC, CCTC, CCTNS renewal, ISHLT annual registry, UNOS MPSC lung outcome monitoring, bronchiolitis obliterans surveillance, azithromycin prophylaxis protocol, and ISHLT annual CE deadlines for lung transplant NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Lung Transplant Credentials & Certification',
    description: 'AGACNP-BC 5-year renewal with 500 acute care clinical hours, CCTC (Certified Clinical Transplant Coordinator) biennial CE renewal (ABTC), CCTNS biennial renewal for advanced practice NPs, annual ISHLT (International Society for Heart and Lung Transplantation) Pulmonary Council CE, annual AST Pulmonary Transplant Section annual CE, annual CHEST (American College of Chest Physicians) annual meeting CE, and biennial hospital credentialing renewal for lung transplant pre- and post-operative management.',
  },
  {
    icon: Clock,
    title: 'UNOS Compliance & ISHLT Registry',
    description: 'UNOS MPSC annual lung outcome monitoring — 1-year patient survival ≥80% (ISHLT median 85%) required to avoid program review, semi-annual SRTR program-specific report review for lung transplant outcomes, annual ISHLT Registry lung transplant data submission, annual UNOS waiting list LAS (Lung Allocation Score) documentation compliance audit, quarterly center-specific outcome review vs. ISHLT national benchmarks, and annual bilateral vs. single lung procedure ratio documentation for program volume reporting.',
  },
  {
    icon: BarChart3,
    title: 'BOS Surveillance & Rejection Monitoring',
    description: 'Annual ISHLT consensus criteria update review for Bronchiolitis Obliterans Syndrome (BOS) and Restrictive Allograft Syndrome (RAS) grading — spirometry monitoring protocol compliance, monthly acute cellular rejection (ACR) rate documentation (target ≤20% at 1 year), quarterly FEV1 decline surveillance protocol audit, annual azithromycin macrolide prophylaxis protocol review (ISHLT CLAD prevention recommendation), annual fungal prophylaxis protocol review (voriconazole/itraconazole for Aspergillus), and quarterly cytomegalovirus (CMV) PCR surveillance protocol adherence audit.',
  },
  {
    icon: Users,
    title: 'Primary Graft Dysfunction & Collaborative Practice',
    description: 'Annual primary graft dysfunction (PGD) management protocol review per ISHLT 2017 consensus criteria (PGD Grade 3 — most common cause of 30-day mortality), annual collaborative practice agreement review with lung transplant pulmonologist and cardiothoracic surgeon, DEA 3-year registration renewal, annual pulmonary rehabilitation referral rate documentation (AACVPR quality metric for post-transplant patients), annual LAS score accuracy audit — confirm all waitlist patients have current PFT, 6MWT, and PCWP data, and annual extracorporeal membrane oxygenation (ECMO) bridge-to-transplant protocol review.',
  },
]

const studies = [
  {
    title: 'ISHLT 2023 Lung Transplant Registry — J Heart Lung Transplant 2023',
    finding: 'The ISHLT 40th Adult Lung Transplant Registry Report documented median survival of 6.7 years for all recipients, with bilateral lung transplant achieving superior survival over single lung (7.8 vs. 4.6 years median) — establishing bilateral lung as the preferred procedure for most indications.',
    implication: 'Annual ISHLT registry data submission and semi-annual SRTR program report review are UNOS requirements — NP documentation of procedure type, indication, and 1-year outcomes drives program benchmark performance vs. ISHLT national medians.',
  },
  {
    title: 'Lung Allocation Score — NEJM 2017',
    finding: 'The UNOS Lung Allocation Score (LAS) system, revised in 2017, prioritized waitlist urgency and post-transplant benefit — reducing waitlist mortality by 32% and increasing transplants for IPF and PAH patients with highest medical urgency.',
    implication: 'Annual LAS score accuracy audit — confirming current PFT, 6MWT, right heart catheterization, and diagnosis-specific data for all waitlist patients — is an OPTN compliance requirement that directly affects organ offer and transplant access.',
  },
  {
    title: 'Chronic Lung Allograft Dysfunction — NEJM 2019',
    finding: 'CLAD (chronic lung allograft dysfunction), encompassing BOS and RAS phenotypes, developed in 50% of lung recipients by 5 years and was the leading cause of late graft loss — spirometry-based surveillance detected CLAD a median of 3 months before clinical presentation.',
    implication: 'Quarterly FEV1 and FVC spirometry surveillance protocol adherence audit is an ISHLT quality standard — NP-driven lung function monitoring at defined post-transplant intervals drives early CLAD detection, phenotyping, and treatment escalation.',
  },
  {
    title: 'Azithromycin for BOS Prevention — NEJM 2008',
    finding: 'Prophylactic azithromycin reduced BOS incidence from 42% to 12% at 2 years in lung transplant recipients with BAL neutrophilia — establishing macrolide prophylaxis as the evidence-based prevention strategy for CLAD.',
    implication: 'Annual azithromycin prophylaxis protocol review — including BAL neutrophilia threshold for initiation, dose, and duration — requires NP annual ISHLT CE update as evidence for macrolide prophylaxis and resistance monitoring continues to evolve.',
  },
  {
    title: 'Primary Graft Dysfunction — J Heart Lung Transplant 2017',
    finding: 'ISHLT consensus grading defined PGD Grade 3 (PaO2/FiO2 ≤200) at 72 hours as the most severe complication — occurring in 15–20% of recipients with 30-day mortality of 40–60% and doubled risk of subsequent CLAD in survivors.',
    implication: 'Annual PGD management protocol review — ECMO indication criteria, protective ventilation strategy, and inhaled nitric oxide protocol — requires NP annual critical care CE to manage the most common early cause of lung transplant mortality.',
  },
  {
    title: 'ECMO Bridge to Lung Transplant — NEJM 2012',
    finding: 'Awake ECMO without intubation as a bridge to lung transplant achieved post-transplant 1-year survival of 71% vs. 50% for intubated ECMO-bridged patients — establishing ambulatory ECMO as the preferred bridge strategy at high-volume centers.',
    implication: 'Annual ECMO bridge-to-transplant protocol review — including ambulation ECMO patient selection, physical therapy integration, and weaning criteria — requires NP annual advanced mechanical support CE to manage increasingly complex bridge candidates.',
  },
]

const testimonial = {
  quote: 'Lung transplant NP practice requires AGACNP-BC and CCTC renewal, ISHLT annual registry submission, UNOS MPSC quarterly outcome monitoring, semi-annual SRTR program review, quarterly FEV1 spirometry surveillance compliance audits, annual CLAD protocol updates, azithromycin prophylaxis protocol review, annual LAS score accuracy audits, and PGD management protocol updates — all simultaneously. Momenties consolidated every deadline. Our program achieved top-quartile SRTR 1-year survival for bilateral lung transplant for three consecutive years.',
  author: 'AGACNP-BC, CCTC, CCTNS',
  role: 'Lung Transplant Nurse Practitioner, Comprehensive Lung Transplant Program',
}

export default function LungTransplantNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Lung Transplant Nurse Practitioners"
        title="Every Lung Transplant NP Credential. Every ISHLT Deadline. One Calendar."
        subtitle="Lung transplant nurse practitioners manage one of the most protocol-intensive advanced practice portfolios in critical care — AGACNP-BC renewal, CCTC certification, UNOS MPSC quarterly outcome monitoring, ISHLT annual registry submission, quarterly FEV1 spirometry surveillance, CLAD protocol updates, LAS score accuracy audits, azithromycin prophylaxis reviews, and PGD management protocols. Momenties automates every deadline so your program achieves top-quartile SRTR lung transplant outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Lung Transplant NP Compliance Lifecycle
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
              6 Landmark Studies That Define Lung Transplant NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind UNOS outcome benchmarks, ISHLT CLAD surveillance protocols, and lung transplant NP quality metrics.
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
        headline="Ready for Top-Quartile SRTR Lung Transplant Outcomes?"
        subtext="Join lung transplant nurse practitioners using Momenties to automate every ISHLT, UNOS, and CCTC deadline. Free to start."
      />
    </main>
  )
}
