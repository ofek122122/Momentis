import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Medical Genetics Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate APNG credential maintenance, FNP-BC renewal, NORD rare disease registry participation, metabolic formula REMS, and newborn screening follow-up protocol deadlines.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Medical Genetics Credentials & Board Certification',
    description: 'APNG (Advanced Practice Nurse in Genetics) credential maintenance through ISONG, FNP-BC or AGPCNP-BC 5-year renewal, annual ACMG membership and CE, annual NORD (National Organization for Rare Disorders) professional membership, AMGP (Association of Molecular Genetic Pathology) annual CE for NPs in molecular genetics, and biennial hospital credentialing for metabolic dietary management consultation.',
  },
  {
    icon: Clock,
    title: 'ACMG Annual Meeting & Rare Disease CE',
    description: 'ACMG Annual Clinical Genetics Meeting CE, NORD Rare Disease Summit CE, ASHG Annual Meeting CE for NPs in molecular genetics, annual inborn errors of metabolism (IEM) clinical update CE, annual newborn screening clinical management CE, annual lysosomal storage disease CE — all tracked toward APNG maintenance and NP board renewal.',
  },
  {
    icon: BarChart3,
    title: 'Newborn Screening Follow-Up & Metabolic Registries',
    description: 'State newborn screening positive result follow-up timeliness audit (72-hour contact standard for confirmed positives), monthly metabolic formula nutrition adequacy review for PKU/MSUD patients, quarterly NORD registry annual data submission tracking, quarterly dried blood spot repeat testing timeliness (within 14 days of initial abnormal), and annual ACMG ACT Sheets compliance review for all managed newborn screening conditions.',
  },
  {
    icon: Users,
    title: 'Enzyme Replacement REMS & Rare Disease Access',
    description: 'Annual cerliponase alfa Brineura REMS prescriber certification (CLN2 disease), annual vestronidase alfa Mepsevii prescriber enrollment, annual asfotase alfa Strensiq prescriber training documentation, annual sebelipase alfa Kanuma prescriber training, annual eliglustat Cerdelga REMS female prescriber certification, annual collaborative practice agreement review with medical geneticist, and DEA 3-year registration renewal.',
  },
]

const studies = [
  {
    title: 'Newborn Screening Timing & PKU Outcomes — NEJM 2002',
    finding: 'PKU identified and treated before 3 weeks of life achieved IQ outcomes within 6 points of unaffected siblings; treatment initiation after 6 weeks resulted in permanent cognitive impairment.',
    implication: '72-hour follow-up contact standard for abnormal newborn screens is a state public health requirement — NP-managed metabolic programs must document timely follow-up for every positive screen.',
  },
  {
    title: 'Enzyme Replacement Therapy in Fabry Disease — NEJM 2001',
    finding: 'Agalsidase beta reduced renal globotriaosylceramide to undetectable levels and reduced pain crises in Fabry disease; early treatment initiation before organ damage preserves function.',
    implication: 'Annual ERT initiation eligibility review for at-risk Fabry patients (based on GFR trajectory and cardiac involvement) is an ACMG management standard requiring systematic annual scheduling.',
  },
  {
    title: 'CLN2 Cerliponase Alfa Outcomes — NEJM 2018',
    finding: 'Intrathecal cerliponase alfa slowed neurodegeneration in CLN2 Batten disease by 80% vs. natural history controls, with 37% of treated patients stable at 3 years.',
    implication: 'Cerliponase alfa Brineura REMS requires annual prescriber recertification and quarterly infusion site adverse event documentation — NP REMS compliance is monitored by the manufacturer.',
  },
  {
    title: 'Phenylketonuria Sapropterin Response — Mol Genet Metab 2007',
    finding: 'BH4 (sapropterin) responsiveness testing identified 25–50% of PKU patients as BH4-responsive, enabling dietary relaxation and improved quality of life in a significant proportion of the PKU population.',
    implication: 'Annual BH4 responsiveness reassessment for all PKU patients not yet tested is an ACMG PKU clinical management guideline — NP scheduling systems drive this systematic review.',
  },
  {
    title: 'MSUD Maple Syrup Urine Disease Liver Transplant — Pediatrics 2006',
    finding: 'Liver transplantation corrected the metabolic defect in MSUD in >90% of patients, eliminating acute metabolic crises and enabling dietary normalization without formula dependency.',
    implication: 'Annual transplant candidacy reassessment for MSUD patients with poor dietary compliance is an ACMG management decision point — systematic annual review scheduling prevents missed windows.',
  },
  {
    title: 'Newborn Screening RUSP Expansion — Genet Med 2023',
    finding: 'ACMG Recommended Uniform Screening Panel expanded to 37 core conditions and 26 secondary conditions by 2023; state implementation lags recommend NP awareness of state-specific vs. RUSP national panel differences.',
    implication: 'Annual state newborn screening panel comparison to current ACMG RUSP is a practice quality standard — NPs must identify patients who may have been missed by older state panels.',
  },
]

const testimonial = {
  quote: 'Medical genetics NP practice spans newborn screening follow-up, PKU dietary management, enzyme replacement REMS for six different lysosomal storage diseases, metabolic formula prescribing, NORD registry submissions, and APNG credential maintenance. Momenties is the first system I&apos;ve used that tracks all of it without requiring me to maintain a separate spreadsheet for each program.',
  author: 'FNP-BC, APNG',
  role: 'Medical Genetics Nurse Practitioner, Pediatric Metabolic Center',
}

export default function MedicalGeneticsNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Medical Genetics Nurse Practitioners"
        title="Every Metabolic NP Credential. Every Rare Disease REMS. One Calendar."
        subtitle="Medical genetics NPs manage the most rare-disease-dense credential portfolio in advanced practice — APNG maintenance, six separate enzyme replacement therapy REMS renewals, newborn screening follow-up timeliness requirements, NORD registry submissions, and ACMG ACT Sheet protocol reviews. Momenties automates every deadline so your metabolic patients get continuous, uninterrupted care."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Medical Genetics NP Compliance Lifecycle
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
              6 Landmark Studies That Define Medical Genetics NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind ACMG management guidelines, REMS requirements, and newborn screening follow-up standards.
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
        headline="Ready to Manage Every Metabolic Program Deadline?"
        subtext="Join medical genetics nurse practitioners using Momenties to automate every APNG, REMS, and ACMG newborn screening deadline. Free to start."
      />
    </main>
  )
}
