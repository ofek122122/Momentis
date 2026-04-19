import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Neuro-Oncology Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGPCNP-BC, AOCNP renewal, temozolomide REMS, bevacizumab monitoring, NANOG annual CE, NCDB data submission, and MRI surveillance scheduling compliance deadlines.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Neuro-Oncology Credentials & Certification',
    description: 'AGPCNP-BC or AGACNP-BC 5-year renewal with 500 clinical hours, AOCNP (Advanced Oncology Certified Nurse Practitioner) 4-year/45 CE renewal, ONS annual membership and cancer nursing CE, NANOG (Nurses and Allied Healthcare Professionals Advisory Group/NANOG neuro-oncology) annual conference CE, annual CNS tumor board preparation CE, and biennial hospital credentialing for intrathecal chemotherapy management.',
  },
  {
    icon: Clock,
    title: 'SNO, ASCO & Neuro-Oncology Conference CE',
    description: 'SNO (Society for Neuro-Oncology) Annual Scientific Meeting CE, ASCO Annual Meeting CE, ESMO Congress CE, annual NCCN CNS Tumor guidelines annual update review, annual temozolomide dosing and MGMT methylation CE, annual bevacizumab glioblastoma response assessment CE, and annual IDH mutation targeted therapy CE — all tracked toward AOCNP and board renewal.',
  },
  {
    icon: BarChart3,
    title: 'NCDB Registry & CNS Quality Metrics',
    description: 'Annual NCDB (National Cancer Data Base) case submission ≥90% completeness within 6 months of diagnosis, quarterly NCDB outstanding case review, monthly MRI surveillance adherence audit (iRANO criteria — 8–12 weeks post-radiation), monthly tumor board case presentation documentation, quarterly bevacizumab toxicity documentation review, and annual SNO CIPHER registry data contribution.',
  },
  {
    icon: Users,
    title: 'Temozolomide REMS & Collaborative Practice',
    description: 'Annual temozolomide TEMODAR REMS prescriber review (pregnancy risk documentation), annual lomustine GLEOSTINE REMS female prescriber training (fetal risk), annual bevacizumab prescribing authority CE (hypertension/proteinuria/thrombosis monitoring protocols), annual collaborative practice agreement review with neuro-oncologist, DEA 3-year renewal, and annual NPI taxonomy verification.',
  },
]

const studies = [
  {
    title: 'Stupp Protocol GBM — NEJM 2005',
    finding: 'Temozolomide concurrent with radiotherapy followed by adjuvant TMZ increased GBM median overall survival from 12.1 to 14.6 months and 2-year survival from 10% to 26% — establishing the standard of care.',
    implication: 'Monthly temozolomide CBC monitoring documentation and quarterly MRI response assessment scheduling are the NP-managed quality metrics for GBM patients on Stupp protocol.',
  },
  {
    title: 'MGMT Methylation as Predictive Biomarker — NEJM 2005',
    finding: 'MGMT promoter methylation predicted temozolomide benefit in GBM patients; methylated patients had 21.7-month OS vs. 12.7 months for unmethylated, establishing MGMT as required testing.',
    implication: 'Annual MGMT testing completeness audit — confirming 100% of newly diagnosed GBM patients have MGMT result documented before treatment initiation — is an NCDB data quality requirement.',
  },
  {
    title: 'IDH Mutation Vorasidenib — NEJM 2023',
    finding: 'Vorasidenib (IDH1/2 inhibitor) improved median PFS from 11.1 to 27.7 months in IDH-mutant grade 2 glioma patients, establishing targeted therapy as first-line treatment for this population.',
    implication: 'Annual IDH mutation testing completeness audit for all newly diagnosed grade 2–3 glioma patients is an NCCN CNS guideline requirement — NP documentation drives institutional compliance.',
  },
  {
    title: 'Bevacizumab in Recurrent GBM — NEJM 2014',
    finding: 'RTOG 0825 and AVAglio trials showed bevacizumab extended PFS but not OS in newly diagnosed GBM; however, bevacizumab remains standard salvage therapy for recurrent disease.',
    implication: 'Monthly bevacizumab toxicity monitoring documentation (hypertension, proteinuria, thromboembolism, wound healing) is a required NP practice standard for all patients on bevacizumab.',
  },
  {
    title: 'Tumor Treating Fields (TTFields) — NEJM 2017',
    finding: 'Addition of TTFields to temozolomide maintenance in GBM improved median OS from 16.0 to 20.9 months and 5-year survival from 5% to 13% in the EF-14 trial.',
    implication: 'Monthly TTFields compliance documentation (≥18 hours/day recommended for optimal efficacy) is an NP-managed quality metric with direct survival implications for enrolled patients.',
  },
  {
    title: 'Pseudoprogression in GBM — Radiology 2012',
    finding: 'Pseudoprogression (treatment-related MRI changes mimicking tumor progression) occurs in up to 30% of GBM patients at first post-radiation MRI, causing management errors if misinterpreted.',
    implication: 'Standardized iRANO criteria application at each MRI response assessment and quarterly inter-rater reliability audits for MRI interpretation documentation are SNO quality standards.',
  },
]

const testimonial = {
  quote: 'Neuro-oncology NP practice requires managing AOCNP CE cycles, SNO conference attendance, temozolomide REMS documentation, bevacizumab toxicity monitoring, monthly MRI surveillance scheduling, and NCDB data completeness — all at once. Momenties was the first system that tracked all of it in one place. I went from reactive compliance to proactive deadline management.',
  author: 'AGPCNP-BC, AOCNP',
  role: 'Neuro-Oncology Nurse Practitioner, Brain Tumor Program',
}

export default function NeuroOncologyNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Neuro-Oncology Nurse Practitioners"
        title="Every Neuro-Oncology NP Credential. Every NCDB Deadline. One Calendar."
        subtitle="Neuro-oncology NPs manage a credential and quality portfolio as complex as the tumors they treat — AOCNP 4-year renewal, SNO annual conference CE, temozolomide and lomustine REMS, monthly MRI surveillance scheduling, NCDB data completeness, and bevacizumab toxicity monitoring. Momenties automates every deadline so you focus on the patients who need you most."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Neuro-Oncology NP Compliance Lifecycle
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
              6 Landmark CNS Trials That Define Neuro-Oncology NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind NCDB quality metrics, NCCN CNS tumor guidelines, and neuro-oncology NP monitoring standards.
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
        headline="Ready to Master Every Neuro-Oncology NP Deadline?"
        subtext="Join neuro-oncology nurse practitioners using Momenties to automate every AOCNP, NCDB, and REMS deadline. Free to start."
      />
    </main>
  )
}
