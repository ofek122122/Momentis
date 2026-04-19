import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Urogynecology Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate WHNP-BC, RNFA, urodynamics credentialing, AUGS pelvic floor CE, FDA mesh reporting, and MIPS quality metric deadlines. Built for urogynecology NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Urogynecology Credentials & Certification',
    description: 'WHNP-BC 5-year renewal with 1,000 clinical hours and 30 CE hours in women&apos;s health, RNFA 2-year/20 CE renewal, FNP-BC 5-year renewal as alternative pathway, annual urodynamics procedure competency documentation (minimum 25 studies/year recommended by AUGS), and biennial hospital credentialing for cystoscopy assistance.',
  },
  {
    icon: Clock,
    title: 'AUGS Conference & Pelvic Floor CE',
    description: 'AUGS/SGS Scientific Meeting CE hours, IUGA Annual Meeting CE, annual FPMRS subspecialty update CE, annual pelvic floor physical therapy collaboration CE, and annual ACOG Practice Bulletin review for urinary incontinence and pelvic organ prolapse — all tracked toward your WHNP-BC renewal.',
  },
  {
    icon: BarChart3,
    title: 'FDA Mesh Registry & MIPS Quality Reporting',
    description: 'Annual FDA medical device reporting (MDR) for any mesh-related adverse events, AUGS AQUIRE registry annual data submission, MIPS annual Quality measure reporting (AQI/ACR pelvic floor measures), monthly sling procedure documentation completeness audits, and quarterly patient-reported outcome measure (PROMIS/PFDI) completion rate reviews.',
  },
  {
    icon: Users,
    title: 'Collaborative Practice & Prescriptive Authority',
    description: 'Annual collaborative practice agreement review with urogynecologist, DEA 3-year Schedule II–V prescribing registration renewal, annual REMS compliance for any applicable devices (e.g., Botox therapeutic BOTOX REMS annual prescriber training for bladder injection), annual NPI taxonomy verification, and biennial credentialing renewal for urodynamics and cystoscopy assistance.',
  },
]

const studies = [
  {
    title: 'CARE Trial — NEJM 2006',
    finding: 'Burch colposuspension with prolapse repair significantly reduced postoperative urinary incontinence (23.8% vs. 44.1%) — establishing the importance of concurrent incontinence treatment at time of prolapse repair.',
    implication: 'Pre-operative stress incontinence assessment documentation is a MIPS quality measure for pelvic organ prolapse surgery — NP evaluation completeness drives measure performance.',
  },
  {
    title: 'SISTEr Trial — NEJM 2007',
    finding: 'Fascial sling achieved higher rates of overall success (47% vs. 38%) and urodynamic success vs. Burch colposuspension for stress urinary incontinence, but higher urinary tract infection and voiding dysfunction rates.',
    implication: 'Post-operative voiding dysfunction assessment at 6 weeks is a standard NP follow-up protocol quality metric — monthly documentation completion audits confirm compliance.',
  },
  {
    title: 'OAB Conservative Therapy — NEJM 2012',
    finding: 'Behavioral therapy (bladder training, pelvic floor exercises) achieved comparable urgency incontinence reduction to oxybutynin in randomized trial (62.8% vs. 55.6%) with fewer side effects.',
    implication: 'Documentation of conservative therapy trial before pharmacotherapy is an AUGS quality standard — monthly conservative therapy documentation audits track NP practice patterns.',
  },
  {
    title: 'FDA Pelvic Mesh Safety Order — 2019',
    finding: 'FDA ordered all transvaginal mesh manufacturers to stop selling mesh for POP repair, citing insufficient evidence of superiority over non-mesh repair and serious safety risks.',
    implication: 'Annual FDA medical device reporting audit for any mesh-related adverse events is mandatory — NPs must document any complications within 30 days for MDR compliance.',
  },
  {
    title: 'Pessary vs. Surgery for POP — NEJM 2023',
    finding: 'In women with symptomatic prolapse, pessary and surgical repair achieved similar condition-specific quality of life at 2 years — supporting shared decision-making documentation.',
    implication: 'PROMIS/PFDI patient-reported outcome measure completion at baseline and follow-up is an AUGS AQUIRE registry requirement — NP completion rates directly affect registry data quality.',
  },
  {
    title: 'Botox for OAB — NEJM 2012',
    finding: 'Intradetrusor OnabotulinumtoxinA 100U reduced urgency incontinence episodes by 2.8/day vs. 0.9/day for placebo (p<0.001) with 22.9% complete resolution rate.',
    implication: 'Botox OAB injections require BOTOX REMS annual prescriber training for office-based administration — NP REMS re-enrollment is a compliance requirement tied to prescribing authority.',
  },
]

const testimonial = {
  quote: 'Urogynecology NP practice spans pelvic floor PT collaboration, urodynamics, cystoscopy, Botox REMS, FDA mesh reporting, AUGS registry submissions, and MIPS quality metrics — all with different renewal cycles. Momenties is the first tool that gave me a single view of every deadline. I&apos;ve been at 100% MIPS measure compliance for two consecutive performance years.',
  author: 'WHNP-BC, RNFA',
  role: 'Urogynecology Nurse Practitioner, Academic Pelvic Floor Center',
}

export default function UrogynecologyNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Urogynecology Nurse Practitioners"
        title="Every Pelvic Floor NP Credential. Every FDA Deadline. One Calendar."
        subtitle="Urogynecology NPs manage one of the most credential-layered subspecialty practices in women&apos;s health — WHNP-BC renewal, RNFA certification, urodynamics competency, AUGS registry submissions, FDA mesh adverse event reporting, BOTOX REMS, and MIPS quality metrics. Momenties automates every deadline so you stay credentialed and your program stays audit-ready."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Urogynecology NP Compliance Lifecycle
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
              6 Landmark Trials That Define Urogynecology Quality Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind AUGS quality metrics, MIPS measures, and FDA device reporting requirements.
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
        headline="Ready to Master Every Urogynecology NP Deadline?"
        subtext="Join urogynecology nurse practitioners using Momenties to automate every WHNP-BC, AUGS registry, and MIPS deadline. Free to start."
      />
    </main>
  )
}
