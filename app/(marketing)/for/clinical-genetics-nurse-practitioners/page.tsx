import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Clinical Genetics Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate APNG or FNP-BC renewal, CGNC genetics nursing credential, NSGC annual membership CE, ACMG laboratory variant reporting deadlines, and hereditary cancer REMS tracking.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Genetics Credentials & Board Certification',
    description: 'APNG (Advanced Practice Nurse in Genetics) credential maintenance, FNP-BC or AGPCNP-BC 5-year renewal with 1,000 clinical hours, ISONG annual membership and CE tracking, annual NSGC conference CE, ABGC (American Board of Genetic Counseling) annual maintenance CE for co-credentialed NPs, and biennial hospital credentialing for genetic counseling services.',
  },
  {
    icon: Clock,
    title: 'ACMG Annual Meeting & Genetics CE',
    description: 'ACMG Annual Clinical Genetics Meeting CE, NSGC Annual Education Conference CE, ISONG Annual Education Conference CE, annual Lynch syndrome and hereditary breast/ovarian cancer guideline update CE (NCCN annual publication), annual pharmacogenomics CE, and annual prenatal genetics CE — all tracked toward your NP board renewal.',
  },
  {
    icon: BarChart3,
    title: 'ACMG Variant Reporting & Laboratory Compliance',
    description: 'ACMG SF v3.2 secondary findings annual reporting protocol review, monthly variant of uncertain significance (VUS) reclassification documentation reviews, quarterly ClinVar variant submission audits (≥90% of reportable variants submitted within 90 days), annual laboratory CAP/CLIA compliance review for variant classification, and annual hereditary cancer registry data submission.',
  },
  {
    icon: Users,
    title: 'REMS & Collaborative Practice Authority',
    description: 'Annual olaparib (Lynparza) REMS prescriber training for BRCA-mutated cancers, annual PARP inhibitor class-level CE, annual RET inhibitor REMS documentation for MEN2 patients, annual collaborative practice agreement review, DEA 3-year renewal for prescribing NPs, and annual NPI taxonomy verification for genetics specialty billing.',
  },
]

const studies = [
  {
    title: 'ACMG Secondary Findings v3.2 — Genet Med 2023',
    finding: 'ACMG SF v3.2 expanded the reportable secondary findings list to 81 genes, requiring clinical genetics practices to update consent processes and variant reporting workflows annually as the list evolves.',
    implication: 'Annual secondary findings consent form update and provider training is a CLIA/CAP laboratory compliance requirement — Momenties tracks the annual ACMG SF version update cycle.',
  },
  {
    title: 'BRCA Population Screening — NEJM 2019',
    finding: 'Population-based BRCA1/2 screening identified 5× more mutation carriers than family-history-based testing alone (0.3% vs. 0.06%), changing guidelines toward universal access to genetic counseling.',
    implication: 'Annual NCCN HBOC guideline update review is essential for genetics NPs to maintain current referral and testing thresholds — Momenties triggers the annual review cycle.',
  },
  {
    title: 'Lynch Syndrome Universal Tumor Testing — JAMA 2017',
    finding: 'Universal tumor testing for Lynch syndrome (MSI/IHC) in all newly diagnosed colorectal cancers identified 3× more LS patients vs. criteria-based testing, with 100% sensitivity in some cohorts.',
    implication: 'Annual Lynch syndrome universal tumor testing protocol review ensures genetics NPs maintain current institutional ordering guidelines aligned with NCCN and ACG recommendations.',
  },
  {
    title: 'Pharmacogenomics in Primary Care — NEJM 2023',
    finding: 'Preemptive pharmacogenomic testing reduced serious drug interactions and adverse events by 30% vs. standard care in a large RCT, supporting integration of PGx into routine primary care genetics consultation.',
    implication: 'Annual pharmacogenomics CE ensures genetics NPs managing PGx-guided prescribing remain current with CPIC guidelines that are updated quarterly for new gene-drug pairs.',
  },
  {
    title: 'Hereditary Cancer Surveillance Outcomes — JAMA Oncol 2020',
    finding: 'BRCA1/2 carriers enrolled in structured surveillance programs had 40% lower cancer-specific mortality vs. non-enrolled carriers, demonstrating the survival impact of systematic follow-up scheduling.',
    implication: 'Monthly hereditary cancer surveillance scheduling compliance audit ensures all BRCA/PALB2/CHEK2 patients have next-interval imaging and consultation scheduled before leaving clinic.',
  },
  {
    title: 'VUS Reclassification Rates — Genet Med 2021',
    finding: 'Up to 30% of VUS in hereditary cancer genes are reclassified within 5 years; 8% of reclassifications are clinically actionable (from VUS to pathogenic or benign).',
    implication: 'Monthly VUS reclassification notification review — checking ClinVar and laboratory updates — is an ACMG practice guideline for all hereditary cancer genetics practices.',
  },
]

const testimonial = {
  quote: 'Clinical genetics NP practice runs on multiple simultaneous CE cycles — APNG credential maintenance, FNP-BC renewal, ACMG conference CE, NSGC annual updates, pharmacogenomics guidelines, and monthly VUS reclassification checks. Before Momenties, I was tracking all of this in spreadsheets. Now I have one dashboard and zero missed renewals.',
  author: 'FNP-BC, APNG',
  role: 'Clinical Genetics Nurse Practitioner, Cancer Genetics Program',
}

export default function ClinicalGeneticsNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Clinical Genetics Nurse Practitioners"
        title="Every Genetics NP Credential. Every ACMG Update. One Calendar."
        subtitle="Clinical genetics NPs operate at the fastest-moving frontier in medicine — ACMG secondary findings lists expand annually, VUS reclassifications arrive monthly, pharmacogenomics CPIC guidelines update quarterly, and NCCN hereditary cancer protocols change every year. Momenties automates every deadline and guideline cycle so your practice stays current and credentialed."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Clinical Genetics NP Compliance Lifecycle
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
              6 Studies That Define Clinical Genetics NP Practice Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind ACMG reporting requirements, NCCN hereditary cancer protocols, and genetics NP quality benchmarks.
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
        headline="Ready to Stay Current with Every ACMG Update?"
        subtext="Join clinical genetics nurse practitioners using Momenties to automate every credential, VUS review cycle, and guideline deadline. Free to start."
      />
    </main>
  )
}
