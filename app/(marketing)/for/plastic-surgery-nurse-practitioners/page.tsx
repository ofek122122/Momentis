import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Plastic Surgery Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGPCNP-BC, RNFA, aesthetic nurse CE, FDA breast implant PROFILE registry reporting, allergan BIA-ALCL monitoring, and injectable REMS annual re-certification deadlines.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Plastic Surgery Credentials & Certification',
    description: 'AGPCNP-BC or FNP-BC 5-year renewal with 1,000 clinical hours, RNFA 2-year/20 CE renewal for surgical assistance, CANS (Certified Aesthetic Nurse Specialist) biennial 30-CE renewal, annual ASPS membership CE, annual ASAPS annual meeting CE, and biennial hospital credentialing for microsurgical flap procedure assistance and complex wound management.',
  },
  {
    icon: Clock,
    title: 'ASPS, ASAPS & Aesthetic CE',
    description: 'ASPS Annual Meeting CE, ASAPS Annual Meeting CE, ISPAN (International Society of Plastic and Aesthetic Nurses) annual conference CE, annual NCCN Skin Cancer guidelines update review, annual botulinum toxin pharmacology and complications CE, annual hyaluronic acid filler CE, annual advanced filler complication management CE — all tracked toward NP board renewal and CANS maintenance.',
  },
  {
    icon: BarChart3,
    title: 'FDA Breast Implant Registry & PROFILE',
    description: 'FDA mandatory breast implant registry (PROFILE) — surgeons required to enroll patients receiving breast implants; annual PROFILE data submission completeness audit, annual BIA-ALCL (breast implant-associated anaplastic large cell lymphoma) monitoring protocol review, quarterly BIA-ALCL surveillance documentation for all textured implant patients, and annual FDA MDR reporting for any implant-related adverse events.',
  },
  {
    icon: Users,
    title: 'Injectable REMS & Prescriptive Authority',
    description: 'Annual BOTOX Cosmetic prescriber training update (not a formal REMS but manufacturer annual safety CE), annual Sculptra (PLLA) prescriber training, annual Kybella (deoxycholic acid) prescriber training, annual Radiesse prescriber CE, annual JUVEDERM portfolio prescriber CE, annual collaborative practice agreement review, DEA 3-year registration renewal, and annual compounded topical anesthetic protocol safety review.',
  },
]

const studies = [
  {
    title: 'BIA-ALCL and Textured Implants — NEJM 2019',
    finding: 'FDA analysis identified 573 confirmed BIA-ALCL cases globally, with macro-textured implants carrying 6× higher risk than micro-textured and smooth implants — leading to FDA voluntary recall of Allergan BIOCELL textured implants.',
    implication: 'Quarterly BIA-ALCL surveillance documentation for all patients with remaining textured implants and annual BIA-ALCL monitoring protocol review are FDA-expected post-market safety practices for practices that performed textured implant procedures.',
  },
  {
    title: 'Breast Implant-Associated ALCL Outcomes — Plast Reconstr Surg 2020',
    finding: 'BIA-ALCL confined to the peri-implant capsule had 5-year OS >90% with explantation and total capsulectomy alone; lymph node involvement reduced OS to 75%.',
    implication: 'Annual patient notification protocol review for textured implant patients — ensuring all implanted patients are aware of BIA-ALCL symptoms — is an ASPS and FDA patient safety standard.',
  },
  {
    title: 'HA Filler Vascular Occlusion Management — JPRAS 2018',
    finding: 'Immediate hyaluronidase injection (≥150 units) within 4 hours of hyaluronic acid filler vascular occlusion reversed ischemia in 94% of cases; delayed injection >24 hours resulted in permanent tissue loss in 38%.',
    implication: 'Annual injectable complication management CE — including vascular occlusion emergency protocol drills — is an ASAPS/ASPS patient safety requirement and CANS certification standard.',
  },
  {
    title: 'BOTOX Cosmetic Diffusion — JAAM 2008',
    finding: 'OnabotulinumtoxinA demonstrated documented diffusion of up to 3 cm from injection site; inappropriate injection depth and volume contributed to unintended muscle paralysis in 15% of injectors without formal training.',
    implication: 'Annual botulinum toxin injection technique CE — including dosing, dilution, and diffusion management — is a CANS certification standard and manufacturer-expected annual safety training.',
  },
  {
    title: 'Nasal Filler Blindness Risk — Aesthet Surg J 2021',
    finding: 'Systematic review identified 190 cases of vision loss following filler injection, with nasal and glabellar injections carrying highest risk; immediate hyaluronidase injection and ophthalmic emergent consultation reversed blindness in only 12% of HA filler cases.',
    implication: 'Annual high-risk injection zone CE — nasal tip, glabella, nasolabial fold — with documented emergency vision loss protocol is an ASAPS patient safety training standard for all injecting NPs.',
  },
  {
    title: 'Enhanced Recovery After Breast Surgery — JPRAS 2022',
    finding: 'ERAS protocols for breast reconstruction (autologous and implant-based) reduced LOS by 2 days, opioid requirements by 45%, and 30-day readmission from 12% to 6%.',
    implication: 'Monthly ERAS adherence documentation for breast reconstruction cases and quarterly outcome tracking are emerging ASPS quality metrics for post-mastectomy reconstruction programs.',
  },
]

const testimonial = {
  quote: 'Plastic surgery NP practice requires tracking RNFA renewal, CANS biennial CE, annual botulinum toxin and filler training, FDA PROFILE registry reporting, BIA-ALCL surveillance documentation, and DEA registration — all on different cycles. Momenties consolidated everything. My CANS renewal last year was the first time I had all my CE logged before I even started the application.',
  author: 'FNP-BC, RNFA, CANS',
  role: 'Plastic Surgery Nurse Practitioner, Aesthetic &amp; Reconstructive Practice',
}

export default function PlasticSurgeryNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Plastic Surgery Nurse Practitioners"
        title="Every Aesthetic NP Credential. Every FDA Registry Deadline. One Calendar."
        subtitle="Plastic surgery NPs hold one of the most aesthetics-specific advanced practice portfolios — CANS biennial renewal, RNFA certification, annual injectable CE for six different product lines, FDA PROFILE breast implant registry compliance, BIA-ALCL surveillance, and DEA registration. Momenties automates every deadline so you focus on delivering exceptional outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Plastic Surgery NP Compliance Lifecycle
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
              6 Studies That Define Plastic Surgery NP Safety Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind FDA PROFILE requirements, ASPS/ASAPS quality standards, and injectable complication management protocols.
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
        headline="Ready to Master Every Plastic Surgery NP Deadline?"
        subtext="Join plastic surgery nurse practitioners using Momenties to automate every CANS, RNFA, FDA registry, and injectable training deadline. Free to start."
      />
    </main>
  )
}
