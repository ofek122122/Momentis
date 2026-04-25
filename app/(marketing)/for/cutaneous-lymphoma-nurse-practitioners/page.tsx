import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Cutaneous Lymphoma Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AOCNP (Advanced Oncology Certified Nurse Practitioner) 4-year renewal, mSWAT (modified Severity-Weighted Assessment Tool) monthly scoring competency, brentuximab vedotin peripheral neuropathy monitoring CE, mogamulizumab infusion reaction protocol training, ECP (extracorporeal photopheresis) scheduling competency, ISCL/EORTC staging annual review, and dermatology oncology NP credentialing for cutaneous T-cell lymphoma nurse practitioners.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Oncology NP Credentials & CTCL CE',
    description: 'AOCNP (Advanced Oncology Certified Nurse Practitioner) 4-year renewal (45 contact hours including 25 oncology-specific hours and 5 advanced pharmacology) for the primary credential governing CTCL/MF/SS systemic therapy management; AGPCNP-BC or FNP-BC 5-year renewal as the underlying NP licensure; annual USCLC (United States Cutaneous Lymphoma Consortium) symposium CE and biennial EORTC Cutaneous Lymphoma Task Force CE for staging, mSWAT scoring, and treatment algorithm updates; annual ASH Annual Meeting CTCL session CE plus annual NCCN Primary Cutaneous Lymphoma Guideline update review; and biennial collaborative practice agreement renewal with dermatologic oncologist for brentuximab vedotin (Adcetris), mogamulizumab (Poteligeo), romidepsin (Istodax), and bexarotene (Targretin) prescribing authority.',
  },
  {
    icon: Clock,
    title: 'Brentuximab Vedotin / Mogamulizumab Administration & Monitoring',
    description: 'Every-3-week brentuximab vedotin (1.8 mg/kg IV q21 days, max 180 mg) infusion documentation with pre-infusion peripheral neuropathy grading using NCI CTCAE v5.0 (hold at Grade 2 sensory + motor; discontinue at Grade 3) and serial monofilament/Total Neuropathy Score testing; monthly mogamulizumab (1.0 mg/kg IV weekly × 5 then q14 days) administration documentation with pre-medication protocol (diphenhydramine + acetaminophen ± corticosteroid) and continuous infusion reaction monitoring (Grade 1–4 IRR per CTCAE) plus drug-induced rash differentiation from disease progression; monthly mogamulizumab autoimmune complication surveillance — alopecia universalis, hypothyroidism, polymyositis, hepatitis, and Stevens-Johnson syndrome; and monthly CMV/EBV/HSV reactivation PCR monitoring during mogamulizumab and post-treatment lymphopenia recovery (T-reg depletion risk).',
  },
  {
    icon: BarChart3,
    title: 'ECP Photopheresis & Response Assessment Protocol',
    description: 'ECP (extracorporeal photopheresis) scheduling competency for biweekly cycles (2 consecutive days every 2 weeks for 3–6 months induction, then maintenance per response) with 8-MOP (methoxsalen) photoactivation and UVA exposure documentation; quarterly central venous access patency assessment (port-a-cath/peripheral) and CLABSI surveillance per CDC protocols for ECP-dedicated lines; quarterly ECP response assessment using Olsen 2011 ISCL/EORTC consensus criteria — global response score combining mSWAT (skin), Sézary cell count (blood B-rating: B0/B1/B2), and lymph node CT (N-rating); monthly Sézary cell flow cytometry (CD4+CD7−/CD4+CD26− phenotype, B2 ≥1,000/μL) for SS treatment response; and quarterly photopheresis cycle adjustment documentation — frequency intensification at progression, taper at sustained partial/complete response per Knobler 2014 ECP consensus guidelines.',
  },
  {
    icon: Users,
    title: 'ISCL/EORTC Staging & mSWAT Documentation',
    description: 'Annual ISCL/EORTC TNMB staging review per Olsen 2007 revised classification — T1/T2 patches/plaques, T3 tumors, T4 erythroderma; N0–N3 lymph node involvement with histologic grading; M0/M1 visceral involvement; B0/B1/B2 blood involvement (B2 ≥1,000 Sézary cells = stage IVA1); monthly mSWAT (modified Severity-Weighted Assessment Tool) skin scoring with 5% body surface area regional weighting and lesion type weighting (patch ×1, plaque ×2, tumor ×4) per Stevens 2002 protocol — partial response defined as ≥50% mSWAT reduction sustained ≥4 weeks; quarterly Severity-Weighted Assessment Tool documentation for treatment response classification (CR, PR, SD, PD) per ISCL 2011 consensus; annual whole-body PET-CT for stage IIB+ disease assessing nodal/visceral involvement and large-cell transformation; and quarterly multidisciplinary CTCL tumor board case review documentation — dermatology + hematology-oncology + dermatopathology + radiation oncology.',
  },
]

const studies = [
  {
    title: 'ALCANZA Brentuximab Vedotin — Lancet 2017',
    finding: 'ALCANZA trial: brentuximab vedotin vs. physician\'s choice (methotrexate or bexarotene) in 131 patients with CD30+ MF or pcALCL — brentuximab vedotin achieved ORR4 (objective response lasting ≥4 months) of 56.3% vs. 12.5% (p<0.001), with median PFS of 16.7 vs. 3.5 months — establishing brentuximab vedotin as the first targeted antibody-drug conjugate with confirmed durable response in CD30-expressing cutaneous lymphoma.',
    implication: 'Every-3-week brentuximab vedotin infusion documentation and pre-infusion peripheral neuropathy grading (CTCAE Grade 2 hold, Grade 3 discontinue) require NP annual CD30-targeted ADC CE to implement ALCANZA-based treatment selection at CD30 ≥10% expression, manage MMAE-induced neuropathy with monofilament/TNS testing, and document ORR4 response for prior authorization continuation.',
  },
  {
    title: 'MAVORIC Mogamulizumab — Lancet Oncology 2018',
    finding: 'MAVORIC trial: mogamulizumab vs. vorinostat in 372 patients with relapsed/refractory MF or SS — mogamulizumab achieved superior median PFS of 7.7 vs. 3.1 months (HR 0.53, 95% CI 0.41–0.69, p<0.001) with ORR of 28% vs. 5%, including superior blood compartment response (68% vs. 18%) — establishing mogamulizumab as the first anti-CCR4 monoclonal antibody for advanced CTCL.',
    implication: 'Monthly mogamulizumab infusion documentation with pre-medication protocol and infusion reaction monitoring (CTCAE Grade 1–4 IRR), plus monthly mogamulizumab-associated rash surveillance (MAR distinct from disease progression), require NP annual anti-CCR4 antibody CE to implement MAVORIC-based treatment for SS blood compartment, document ≥28% ORR for accreditation, and manage T-reg depletion immune-related adverse events.',
  },
  {
    title: 'Knobler ECP Consensus — JAAD 2014',
    finding: 'European Dermatology Forum / EORTC Cutaneous Lymphoma Task Force consensus: ECP for erythrodermic CTCL (Sézary syndrome, T4 MF) achieves overall response rates of 30–80% across pooled cohorts, with median time to response of 5–6 months and 5-year survival of 48% in responders — establishing ECP as first-line monotherapy or combination therapy for erythrodermic CTCL with B1/B2 blood involvement.',
    implication: 'Biweekly ECP scheduling competency and quarterly ECP response assessment using ISCL/EORTC global score require NP annual photopheresis CE to implement Knobler 2014 consensus protocols, manage central venous access for ECP-dedicated lines, document combination therapy with bexarotene/IFN-α/low-dose methotrexate, and coordinate cycle taper at sustained partial response.',
  },
  {
    title: 'Romidepsin in CTCL — JCO 2010',
    finding: 'Whittaker pivotal trial: romidepsin (14 mg/m² IV days 1, 8, 15 q28) in 96 patients with relapsed/refractory CTCL — romidepsin achieved ORR of 34% (CR 6%) with median duration of response of 15 months and significant pruritus relief in 43% of evaluable patients — establishing romidepsin as the second HDAC inhibitor approved for CTCL after vorinostat.',
    implication: 'Monthly romidepsin infusion documentation with serial ECG monitoring (QTc prolongation, T-wave flattening), pre-infusion electrolyte repletion (K⁺ ≥4.0 mEq/L, Mg²⁺ ≥2.0 mg/dL), and monthly tumor lysis syndrome surveillance require NP annual HDAC inhibitor CE to implement Whittaker-based dosing, manage cardiac toxicity, and document ORR for treatment continuation.',
  },
  {
    title: 'Vorinostat in Advanced CTCL — JCO 2007',
    finding: 'Olsen pivotal trial: vorinostat 400 mg PO daily in 74 patients with persistent, progressive, or recurrent MF/SS after ≥2 prior systemic therapies — vorinostat achieved ORR of 29.7% with pruritus relief in 32% of patients and median time to response of 56 days — establishing vorinostat as the first oral HDAC inhibitor approved for cutaneous T-cell lymphoma and the comparator arm in MAVORIC.',
    implication: 'Daily vorinostat oral therapy documentation with weekly CBC monitoring (thrombocytopenia, anemia), monthly LFT/CMP monitoring, and monthly DVT/PE surveillance (HDAC inhibitor thromboembolic risk) require NP annual oral HDAC inhibitor CE to implement Olsen-based dosing, manage GI toxicity (diarrhea, nausea, anorexia), and document ORR for prior authorization renewal.',
  },
]

const schedule = [
  { frequency: 'Every 4 Years', item: 'AOCNP Renewal', details: 'Advanced Oncology Certified Nurse Practitioner — 45 contact hours including 25 oncology-specific and 5 advanced pharmacology hours; primary credential for CTCL systemic therapy.' },
  { frequency: 'Every 5 Years', item: 'AGPCNP-BC / FNP-BC Renewal', details: 'Underlying NP licensure renewal — 1,000 clinical hours + 75–100 CE hours per certification body (ANCC/AANP).' },
  { frequency: 'Monthly', item: 'mSWAT Scoring Competency', details: 'Modified Severity-Weighted Assessment Tool — 5% BSA regional weighting, lesion type weighting (patch ×1, plaque ×2, tumor ×4); ≥50% reduction = partial response.' },
  { frequency: 'Every 3 Weeks', item: 'Brentuximab Vedotin Neuropathy Grading', details: 'Pre-infusion CTCAE v5.0 peripheral neuropathy grading with monofilament/TNS testing — hold at Grade 2 sensory+motor, discontinue at Grade 3.' },
  { frequency: 'Monthly', item: 'Mogamulizumab Infusion Reaction Protocol', details: 'Pre-medication (diphenhydramine + acetaminophen ± corticosteroid), CTCAE Grade 1–4 IRR monitoring, MAR rash differentiation from disease progression.' },
  { frequency: 'Biweekly', item: 'ECP Photopheresis Scheduling', details: '2 consecutive days every 2 weeks induction (3–6 months), 8-MOP photoactivation + UVA exposure documentation, central venous access patency.' },
  { frequency: 'Monthly', item: 'Sézary Cell Flow Cytometry', details: 'Peripheral blood CD4+CD7−/CD4+CD26− phenotype quantification; B0 <250/μL, B1 250–1,000/μL, B2 ≥1,000/μL (stage IVA1).' },
  { frequency: 'Annual', item: 'ISCL/EORTC Restaging', details: 'TNMB classification review per Olsen 2007 — whole-body PET-CT for stage IIB+, lymph node biopsy for N1–N3, large-cell transformation assessment.' },
  { frequency: 'Annual', item: 'USCLC Symposium CE', details: 'United States Cutaneous Lymphoma Consortium annual CE — staging updates, mSWAT calibration, NCCN Primary Cutaneous Lymphoma Guideline review.' },
  { frequency: 'Quarterly', item: 'CTCL Tumor Board', details: 'Multidisciplinary case review documentation — dermatology + hematology-oncology + dermatopathology + radiation oncology.' },
]

export default function CutaneousLymphomaNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Cutaneous Lymphoma Nurse Practitioners"
        title="Every mSWAT. Every Mogamulizumab Infusion. Every ECP Cycle."
        subtitle="Cutaneous T-cell lymphoma nurse practitioners manage one of the most pathologically nuanced advanced practice portfolios in oncology — MF/SS ISCL/EORTC TNMB staging assessments, monthly mSWAT skin scoring, every-3-week brentuximab vedotin administration with peripheral neuropathy grading, monthly mogamulizumab infusions with autoimmune surveillance, biweekly ECP photopheresis cycles, monthly Sézary flow cytometry, and annual ISCL/EORTC restaging. Momenties automates every deadline so your CTCL program achieves ≥28% ORR documentation under MAVORIC quality benchmarks."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Cutaneous Lymphoma NP Compliance Lifecycle
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

      {/* Evidence Base */}
      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 12, color: '#f0ece3' }}>
              5 Landmark Trials That Define Cutaneous Lymphoma NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind ISCL/EORTC staging consensus, NCCN Primary Cutaneous Lymphoma Guidelines, and CTCL targeted therapy protocols.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {studies.map((study) => (
                <div key={study.title} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 28 }}>
                  <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.88rem', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{study.title}</div>
                  <p style={{ fontSize: '0.95rem', color: '#f0ece3', lineHeight: 1.65, marginBottom: 14 }}>{study.finding}</p>
                  <p style={{ fontSize: '0.88rem', color: '#a0998e', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 14 }}>{study.implication}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* CE / Certification Schedule */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 12, color: '#f0ece3' }}>
            Cutaneous Lymphoma NP CE & Certification Calendar
          </h2>
          <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
            Every credential, infusion protocol, and competency renewal mapped to its frequency. One calendar. Zero missed deadlines.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {schedule.map((row) => (
              <div key={row.item} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px', alignItems: 'start' }}>
                <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'JetBrains Mono, monospace' }}>{row.frequency}</div>
                <div>
                  <div style={{ fontWeight: 600, color: '#f0ece3', fontSize: '0.98rem', marginBottom: 4 }}>{row.item}</div>
                  <div style={{ color: '#a0998e', fontSize: '0.88rem', lineHeight: 1.55 }}>{row.details}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Achieve ≥28% ORR Documentation in Your Mogamulizumab Protocol?"
        subtext="Join cutaneous lymphoma nurse practitioners using Momenties to automate every mSWAT, ECP cycle, brentuximab/mogamulizumab infusion, and ISCL/EORTC restaging deadline. Free to start."
      />
    </main>
  )
}
