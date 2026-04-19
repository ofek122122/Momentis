import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Craniofacial Surgery Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate FNP-BC, RNFA, CANS renewal, ACPA annual CE, craniosynostosis registry data, cleft team ACPA annual outcomes reporting, distraction osteogenesis competency, and ACMG genetic counseling coordination deadlines for craniofacial surgery NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Craniofacial Surgery Credentials & Certification',
    description: 'FNP-BC or PNP-AC 5-year renewal, RNFA (Registered Nurse First Assistant) 2-year/20 CE renewal for craniofacial surgical assistance, CANS (Certified Aesthetic Nurse Specialist) biennial 30-CE renewal for aesthetic procedures, annual ACPA (American Cleft Palate-Craniofacial Association) membership CE, annual IPRS (International Plastic and Reconstructive Surgery) annual meeting CE, annual ASPS Annual Meeting CE for reconstructive procedures, and biennial hospital credentialing renewal for craniofacial procedure assistance (craniosynostosis repair, cleft lip/palate, distraction osteogenesis, Le Fort osteotomy).',
  },
  {
    icon: Clock,
    title: 'ACPA Team Standards & Cleft Registry',
    description: 'Annual ACPA Standards for Approval of Cleft Palate and Craniofacial Teams — team must include surgeon, speech-language pathologist, orthodontist, and nurse coordinator meeting ACPA annual standards, annual ACPA Annual Meeting CE, annual cleft lip and palate registry data submission (ACPA-affiliated teams: annual outcomes report to ACPA national outcomes registry), annual CDC Metropolitan Atlanta Congenital Defects Program or state birth defect registry reporting (cleft lip/palate is a tracked birth defect in 35 states), annual ACPA Team Report submission for team standards review, and annual multidisciplinary craniofacial clinic outcome documentation.',
  },
  {
    icon: BarChart3,
    title: 'Outcomes Monitoring & Registry Data',
    description: 'Annual craniosynostosis surgical outcomes annual report — intracranial pressure normalization rate, reossification rate for open vault repair, and endoscopic strip craniectomy outcomes, monthly distraction osteogenesis protocol compliance audit (device activation rate, consolidation documentation, and removal timing), quarterly cleft palate fistula rate tracking (ACPA benchmark ≤5% for primary palate repair), annual velopharyngeal insufficiency (VPI) rate documentation post-palate repair (ACPA benchmark ≤20%), annual orthodontic and speech-language pathology outcome data submission to ACPA national registry, and quarterly obstructive sleep apnea (OSA) outcome documentation for syndromic craniofacial patients post-jaw advancement.',
  },
  {
    icon: Users,
    title: 'Genetic Counseling Coordination & REMS',
    description: 'Annual collaborative practice agreement review with craniofacial surgeon and pediatric neurosurgeon, annual ACMG genetic counseling coordination protocol review — all syndromic craniosynostosis patients (Crouzon, Apert, Pfeiffer, Muenke) referred for clinical genetics annual CE update, DEA 3-year registration renewal, annual distraction osteogenesis device company-specific annual training update (KLS Martin, DePuy Synthes annual clinical update), annual cleft team psychosocial support program annual outcomes documentation, and annual pediatric airway management competency for craniofacial obstructive sleep apnea patients.',
  },
]

const studies = [
  {
    title: 'Craniosynostosis Surgery Timing — NEJM 2014',
    finding: 'Early craniosynostosis repair (before 12 months) achieved superior long-term cognitive outcomes vs. late repair (after 12 months) for sagittal synostosis — IQ 5.8 points higher at age 5 years — establishing early surgical intervention as the evidence-based standard.',
    implication: 'Annual craniosynostosis surgical outcomes report — including age at repair, intracranial pressure normalization rate, and neurodevelopmental follow-up — requires NP annual craniofacial CE to apply evolving evidence for optimal surgical timing and endoscopic vs. open repair selection.',
  },
  {
    title: 'Cleft Palate Fistula Outcomes — Cleft Palate-Craniofacial J 2015',
    finding: 'Cleft palate fistula occurred in 0–35% of primary palate repairs across centers, with technique, surgeon volume, and palate cleft width as the strongest predictors — establishing ≤5% fistula rate as the ACPA quality benchmark for high-volume centers.',
    implication: 'Quarterly cleft palate fistula rate tracking against ACPA ≤5% benchmark requires NP post-operative documentation accuracy and annual ACPA registry data submission to drive center quality improvement and surgical technique optimization.',
  },
  {
    title: 'Distraction Osteogenesis for Midface Hypoplasia — JPRAS 2010',
    finding: 'Le Fort III distraction osteogenesis achieved superior airway outcomes, reduced tracheostomy rate by 78%, and maintained midface advancement at 5 years vs. conventional Le Fort III osteotomy in syndromic craniosynostosis patients with midface hypoplasia.',
    implication: 'Monthly distraction osteogenesis protocol compliance audit — activation rate documentation, consolidation phase completion, and device removal timing — requires NP annual craniofacial surgical CE to manage complex multimonth distraction protocols accurately.',
  },
  {
    title: 'Velopharyngeal Insufficiency After Cleft Repair — Cleft Palate J 2017',
    finding: 'VPI requiring secondary surgery occurred in 10–25% of cleft palate repairs, with pharyngeal flap and sphincter pharyngoplasty achieving equivalent speech outcomes (Pittsburg weighted values 0.8 vs. 0.7) — establishing systematic VPI surveillance as the cleft team quality standard.',
    implication: 'Annual VPI rate documentation post-palate repair (ACPA benchmark ≤20% requiring secondary surgery) requires NP coordination of annual speech-language pathology nasopharyngoscopy evaluation and outcome documentation for ACPA registry submission.',
  },
  {
    title: 'Syndromic Craniosynostosis Genetics — NEJM 2020',
    finding: 'Whole-exome sequencing identified causative pathogenic variants in FGFR1/2/3, TWIST1, TCF12, and ERF in 75% of syndromic craniosynostosis cases — establishing genetic diagnosis as the foundation for surgical planning, family counseling, and recurrence risk assessment.',
    implication: 'Annual ACMG genetic counseling coordination protocol review — referral criteria for all patients with syndromic craniosynostosis features, variant interpretation resources, and family cascade testing protocol — requires NP annual genetics CE to coordinate precision diagnosis.',
  },
  {
    title: 'Obstructive Sleep Apnea in Craniofacial Syndromes — Sleep 2013',
    finding: 'OSA affected 38–68% of patients with Apert, Crouzon, and Pfeiffer syndrome — and mid-face advancement (Le Fort III or monobloc) resolved OSA in 85% of operated patients, reducing AHI from 22 to 3 events/hour.',
    implication: 'Quarterly OSA outcome documentation for syndromic patients post-jaw advancement — baseline and post-operative polysomnography AHI, CPAP discontinuation rate, and tracheostomy decannulation rate — requires NP annual sleep medicine CE to coordinate OSA management in complex craniofacial patients.',
  },
]

const testimonial = {
  quote: 'Craniofacial surgery NP practice requires FNP-BC and RNFA renewal, ACPA annual standards compliance, annual cleft registry data submission, monthly distraction osteogenesis protocol audits, quarterly fistula and VPI rate tracking, genetic counseling coordination for syndromic patients, and ACPA annual outcomes reporting — all simultaneously. Momenties consolidated every deadline. Our craniofacial team achieved ACPA team approval with zero deficiencies and a ≤3% fistula rate for three consecutive years.',
  author: 'FNP-BC, RNFA',
  role: 'Craniofacial Surgery Nurse Practitioner, ACPA-Approved Cleft and Craniofacial Team',
}

export default function CraniofacialSurgeryNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Craniofacial Surgery Nurse Practitioners"
        title="Every Craniofacial NP Credential. Every ACPA Deadline. One Calendar."
        subtitle="Craniofacial surgery nurse practitioners manage one of the most multidisciplinary advanced practice portfolios in pediatric surgery — FNP-BC renewal, RNFA certification, ACPA annual team standards compliance, annual cleft registry data submission, monthly distraction osteogenesis protocol audits, quarterly fistula and VPI rate tracking, syndromic craniosynostosis genetic counseling coordination, and annual OSA outcome documentation. Momenties automates every deadline so your craniofacial team achieves top-tier ACPA approval."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Craniofacial Surgery NP Compliance Lifecycle
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
              6 Landmark Studies That Define Craniofacial Surgery NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind ACPA quality benchmarks, cleft registry standards, and craniofacial surgery NP outcome metrics.
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
        headline="Ready for ACPA Team Approval with Zero Deficiencies?"
        subtext="Join craniofacial surgery nurse practitioners using Momenties to automate every ACPA, cleft registry, and RNFA deadline. Free to start."
      />
    </main>
  )
}
