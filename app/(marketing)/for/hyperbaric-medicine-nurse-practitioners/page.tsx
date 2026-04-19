import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Hyperbaric Medicine Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate CHRN biennial renewal, UHMS physician certification, NBDHMT CHT renewal, NFPA 99 annual safety inspections, and CMS wound care quality metric deadlines.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Hyperbaric Credentials & Board Certification',
    description: 'CHRN (Certified Hyperbaric Registered Nurse) biennial 40-CE renewal via NBDHMT, CHT (Certified Hyperbaric Technologist) biennial 40-CE renewal, CWON/CWCN wound care certification 5-year/75 CE renewal, ACNP-BC or FNP-BC 5-year renewal, and annual UHMS facility physician/NP certification training — all tracked in one calendar.',
  },
  {
    icon: Clock,
    title: 'UHMS Annual Meeting & Hyperbaric CE',
    description: 'UHMS Annual Scientific Meeting CE, ABWM Annual Conference CE for wound care NPs, annual UHMS Indications and Evidence Review course completion, annual NFPA 99 Chapter 14 hyperbaric facility safety training, and ACLS biennial recertification — all CE hours logged automatically toward your CHRN renewal.',
  },
  {
    icon: BarChart3,
    title: 'CMS Wound Care & HBO Quality Metrics',
    description: 'Monthly complete wound healing rate reviews (UHMS benchmark ≥70% at 30 treatments), quarterly NPWT outcome documentation audits, monthly HBO treatment indication compliance audits (CMS-approved indications only — 14 listed diagnoses), quarterly ABI documentation completion reviews, and annual CMS coverage determination compliance review for all diagnosis codes billed.',
  },
  {
    icon: Users,
    title: 'NFPA 99 Safety & Facility Compliance',
    description: 'Annual NFPA 99 Chapter 14 hyperbaric facility safety inspection by qualified hyperbaric safety director, quarterly chamber O2 concentration monitoring documentation, monthly fire safety training for all chamber operators, annual oxygen system maintenance records, biennial chamber recertification (ASME PVHO-1), and annual state pressure vessel permit renewal.',
  },
]

const studies = [
  {
    title: 'UHMS Indications Committee — 2023 Report',
    finding: 'UHMS maintains 14 CMS-approved indications for hyperbaric oxygen therapy; non-indicated HBO use results in CMS claim denial and potential overpayment recoupment.',
    implication: 'Monthly HBO indication compliance audits — verifying each treatment maps to an approved diagnosis — are a CMS Medical Review priority and require systematic scheduling.',
  },
  {
    title: 'Diabetic Foot Ulcer HBO — Diabetes Care 2010',
    finding: 'HBO therapy for diabetic foot ulcers (Wagner Grade 3+) reduced major amputation rates by 30% in randomized trials; complete healing at 1 year was 52% vs. 29% in controls.',
    implication: 'Monthly Wagner grade documentation completion and quarterly wound healing rate reviews are core UHMS facility quality metrics that NPs are responsible for tracking.',
  },
  {
    title: 'Radiation Tissue Injury HBO — J Clin Oncol 2012',
    finding: 'HBO therapy for radiation-induced tissue injury (osteoradionecrosis, radiation cystitis) achieved complete resolution in 54–72% of cases across multiple prospective series.',
    implication: 'Quarterly outcome documentation for radiation injury patients tracks against UHMS benchmark healing rates — NP documentation drives facility quality reporting.',
  },
  {
    title: 'HBO for CSOM — Cochrane 2015',
    finding: 'Systematic review of 5 RCTs found HBO therapy reduced risk of osteoradionecrosis of the jaw recurrence by 40% post-resection in irradiated mandible patients.',
    implication: 'Annual CMS indication coverage update training ensures NPs prescribing HBO for dental/ENT radiation complications are coding correctly for post-resection protocols.',
  },
  {
    title: 'NFPA 99 Chapter 14 Compliance — 2021 Edition',
    finding: 'NFPA 99 2021 Edition requires annual safety inspection by a qualified hyperbaric safety director, quarterly O2 monitoring, and documented personnel fire safety training every 12 months.',
    implication: 'Annual NFPA 99 safety inspection scheduling with documented findings is a TJC and CMS survey requirement — missed inspections trigger immediate jeopardy citations.',
  },
  {
    title: 'Wound Care NP Outcomes — Adv Skin Wound Care 2019',
    finding: 'Wound care NPs managing comprehensive HBO programs achieved 68–75% complete healing rates for diabetic wounds at 12 weeks, comparable to physician-only programs.',
    implication: 'Quarterly complete healing rate reviews tracking NP-managed patients against UHMS 70% benchmark establish quality equivalency for credentialing and quality reporting purposes.',
  },
]

const testimonial = {
  quote: 'Hyperbaric medicine is one of the most compliance-intensive NP subspecialties — CHRN biennial CE, NFPA 99 annual safety inspections, CMS indication audits, chamber recertification, and wound care quality metrics all running on different cycles. Momenties consolidated all of it. My CHRN renewal last year was the first time I wasn&apos;t scrambling to document CE hours at the last minute.',
  author: 'FNP-BC, CHRN, CWON',
  role: 'Hyperbaric Medicine Nurse Practitioner, Wound Care Center',
}

export default function HyperbaricMedicineNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Hyperbaric Medicine Nurse Practitioners"
        title="Every HBO Credential. Every NFPA Inspection. One Calendar."
        subtitle="Hyperbaric medicine NPs operate at the intersection of advanced wound care, pressure medicine, and facility safety compliance — CHRN biennial renewal, NFPA 99 annual chamber inspections, CMS indication audits, UHMS quality benchmarks, and multi-cycle wound care credentials. Momenties automates every deadline so your program stays compliant and your patients get uninterrupted care."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Hyperbaric Medicine NP Compliance Lifecycle
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
              6 Studies That Shape Hyperbaric NP Quality Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind UHMS quality benchmarks, CMS coverage determinations, and NFPA facility safety requirements.
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
        headline="Ready to Run a Fully Compliant HBO Program?"
        subtext="Join hyperbaric medicine NPs using Momenties to automate every CHRN, NFPA 99, and CMS quality deadline. Free to start."
      />
    </main>
  )
}
