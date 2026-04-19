import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Vascular Surgery Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGACNP-BC, RNFA, and RVT certification renewals, SVS quality registry submissions, and vascular lab accreditation deadlines. Built for vascular surgery NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Board Certification & Vascular Credentials',
    description: 'AGACNP-BC 5-year renewal with 1,000 clinical hours, RNFA 2-year/20 CE renewal, RVT (Registered Vascular Technologist) biennial 30-CE renewal, RPVI (Registered Physician in Vascular Interpretation) biennial CE, and CRNFA maintenance all tracked in one place.',
  },
  {
    icon: Clock,
    title: 'Vascular Conference & Registry CE',
    description: 'SVS Annual Vascular Annual Meeting, VEITH Symposium, AVF Annual Symposium, and APNA vascular nursing CE hours all logged automatically so your AGACNP-BC renewal file is complete before the deadline.',
  },
  {
    icon: BarChart3,
    title: 'SVS VQI Registry & Quality Reporting',
    description: 'Society for Vascular Surgery Vascular Quality Initiative (SVS VQI) annual data submission completeness tracking, quarterly ABI documentation audits, monthly endoleak surveillance scheduling compliance, and annual duplex-confirmed graft patency rate reviews.',
  },
  {
    icon: Users,
    title: 'Collaborative Practice & Privileges',
    description: 'Biennial hospital credentialing for endovascular procedure assistance (EVAR/TEVAR/carotid stenting), DEA 3-year controlled substance registration, annual NPI taxonomy update verification, and annual collaborative practice agreement review.',
  },
]

const studies = [
  {
    title: 'EVAR-1 Trial — NEJM 2004',
    finding: 'Endovascular AAA repair reduced 30-day mortality vs. open repair (1.7% vs. 4.7%) but required lifelong surveillance with annual duplex/CT at defined intervals.',
    implication: 'NPs managing post-EVAR patients must document graft surveillance at 1, 6, and 12 months in year 1, then annually — Momenties automates this cascade.',
  },
  {
    title: 'CREST Trial — NEJM 2010',
    finding: 'Carotid artery stenting and endarterectomy had similar composite outcomes; periprocedural stroke risk 4.1% vs. 2.3% favoring CEA in older patients.',
    implication: 'Shared decision-making documentation and 30-day outcome review are SVS quality metrics — both need structured scheduling.',
  },
  {
    title: 'BASIL Trial — Lancet 2005',
    finding: 'Bypass surgery vs. balloon angioplasty in severe limb ischemia: surgery superior at 2 years for patients surviving >2 years, angioplasty preferable for shorter life expectancy.',
    implication: 'Annual limb salvage rate documentation is a SVS VQI required data element for CLI patients — automated quarterly review flags gaps.',
  },
  {
    title: 'SVS WIfI Classification — JVS 2014',
    finding: 'Wound, Ischemia, and foot Infection staging predicts 1-year amputation risk and guides revascularization timing with validated outcome benchmarks.',
    implication: 'Monthly WIfI documentation completion audits confirm NP-driven wound care protocols meet SVS quality standards.',
  },
  {
    title: 'SAPPHIRE Trial — NEJM 2004',
    finding: 'CAS non-inferior to CEA in high-surgical-risk patients at 1 year; 30-day composite event rate 4.8% vs. 9.8% favoring CAS for high-risk anatomy.',
    implication: 'Annual CAS vs. CEA outcomes analysis is a SCAI/SVS collaborative quality benchmark — NP documentation completeness drives registry accuracy.',
  },
  {
    title: 'DREAM Trial — NEJM 2004',
    finding: 'Open and endovascular AAA repair: 30-day operative mortality 4.6% vs. 1.2% favoring EVAR; long-term survival equivalent, but EVAR had higher secondary intervention rate.',
    implication: 'SVS VQI requires tracking all secondary interventions within 30 days and at 1 year — automated reminders prevent missed documentation windows.',
  },
]

const testimonial = {
  quote: 'As a vascular surgery NP managing both EVAR surveillance panels and outpatient ABI clinics, my CE renewals and SVS VQI data submission deadlines were always competing. Momenties puts all of it — AGACNP-BC, RNFA, RVT, conference CE, and registry reporting — on one calendar with alerts. I haven&apos;t missed a deadline in two years.',
  author: 'NP-C, RNFA, RVT',
  role: 'Vascular Surgery Nurse Practitioner, Academic Medical Center',
}

export default function VascularSurgeryNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Vascular Surgery Nurse Practitioners"
        title="Every Vascular NP Deadline. One Intelligent Calendar."
        subtitle="Vascular surgery NPs juggle AGACNP-BC renewal, RNFA certification, RVT biennial CE, SVS VQI registry submissions, and post-EVAR surveillance scheduling simultaneously. Momenties turns that complexity into automated alerts so you stay credentialed, compliant, and audit-ready year-round."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Vascular Surgery NP Compliance Lifecycle
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
              6 Landmark Vascular Trials That Shape Your Quality Metrics
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind SVS VQI registry requirements and vascular NP practice standards.
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
        headline="Ready to Stay Credentialed Without the Calendar Chaos?"
        subtext="Join vascular surgery NPs using Momenties to automate every AGACNP-BC, RNFA, RVT, and SVS VQI deadline. Free to start."
      />
    </main>
  )
}
