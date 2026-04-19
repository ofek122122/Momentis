import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Multiple Myeloma Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGPCNP-BC, AOCNP renewal, IMiD REMS annual training, daratumumab/elotuzumab infusion reaction protocol, MRD quarterly assessment, IMWG response criteria documentation, ASH annual CE, and MMRF quality metrics for multiple myeloma NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Myeloma Credentials & Certification',
    description: 'AGPCNP-BC or AGACNP-BC 5-year renewal (500 clinical hours — 150 CE) for primary advanced practice credential, AOCNP (Advanced Oncology Certified Nurse Practitioner) 4-year/45 CE renewal for hematologic malignancy specialty certification, ONS (Oncology Nursing Society) annual membership and CE requirement, IMF (International Myeloma Foundation) annual nurse summit CE, ASH (American Society of Hematology) Annual Meeting myeloma session CE, ASCO Annual Meeting hematology oncology CE, annual IMF Black Swan Research Initiative myeloma biology CE update, biennial collaborative practice agreement renewal with myeloma hematologist for bortezomib/carfilzomib prescribing and REMS-enrolled agent administration, and annual CAR-T cell therapy coordination CE for cilta-cel (Carvykti) and idecabtagene vicleucel (Abecma) NP-managed pre-lymphodepletion protocols.',
  },
  {
    icon: Clock,
    title: 'IMiD REMS, Proteasome Inhibitor & CAR-T Safety',
    description: 'Annual thalidomide/lenalidomide/pomalidomide REMS (RevAssist/REMS) training renewal — monthly pregnancy testing for females of reproductive potential, mandatory contraception counseling, monthly CBC monitoring, REMS enrollment verification before dispensing; annual bortezomib neuropathy monitoring protocol review (CIPN grading scale — dose reduction at Grade 2 sensory neuropathy); annual carfilzomib cardiovascular monitoring protocol update — ECHO or MUGA before initiation, blood pressure monitoring protocol (hypertension ≥25% Grade 2 rates in ASPIRE/ENDEAVOR); annual daratumumab infusion reaction protocol review (≥20% Grade 1–2 infusion reactions — premedication: dexamethasone, diphenhydramine, montelukast, acetaminophen); annual CAR-T cell therapy CRS/ICANS management protocol — Grade 2+ CRS: tocilizumab 8 mg/kg IV, ICANS Grade 2: dexamethasone 10 mg Q6H; and annual belantamab mafodotin (Blenrep) REMS ophthalmic monitoring protocol renewal (monthly slit-lamp exam, BCVA).',
  },
  {
    icon: BarChart3,
    title: 'MRD Assessment & IMWG Response Tracking',
    description: 'Quarterly MRD (minimal residual disease) assessment documentation — bone marrow aspirate next-generation sequencing (NGS) at 10⁻⁵ sensitivity (IMWG 2016 criteria); quarterly IMWG response criteria documentation — sCR (stringent complete response): CR + normal FLC ratio + absence of clonal plasma cells by IHC/FLOW; monthly M-protein quantification by SPEP/UPEP (target: sCR — undetectable M-protein by standard electrophoresis); quarterly serum free light chain (FLC) ratio documentation (κ/λ ratio — normal 0.26–1.65); monthly CBC, BMP, LDH, β₂-microglobulin trending; annual bone survey or whole-body low-dose CT for myeloma bone disease progression; annual BM biopsy for cytogenetics/FISH — del(17p), t(4;14), t(14;16) high-risk feature documentation; and quarterly ISS/R-ISS (Revised International Staging System) staging documentation for NCDB registry completeness.',
  },
  {
    icon: Users,
    title: 'Myeloma MDT & Stem Cell Transplant Coordination',
    description: 'Annual autologous stem cell transplant (ASCT) eligibility assessment for newly diagnosed myeloma — age ≤75, performance status, organ function; annual NMDP/Be The Match donor registry documentation for allogeneic SCT candidates; annual IMWG transplant eligibility criteria annual review; quarterly VRd (bortezomib + lenalidomide + dexamethasone) induction response documentation for transplant-eligible patients; quarterly maintenance lenalidomide/ixazomib response and tolerability documentation post-ASCT; annual smoldering myeloma (SMM) risk stratification (Mayo 20/2/20 criteria) and progression monitoring; quarterly relapsed/refractory myeloma (RRMM) treatment sequencing documentation — daratumumab + pomalidomide + dexamethasone (DPd), carfilzomib + pomalidomide + dexamethasone (KPd), selinexor + dexamethasone; annual MMRF CoMMpass registry data contribution for genomic sequencing program; and annual myeloma multidisciplinary tumor board participation documentation.',
  },
]

const studies = [
  {
    title: 'VRd Induction in Myeloma — NEJM 2017',
    finding: 'SWOG S0777 trial: VRd (bortezomib + lenalidomide + dexamethasone) vs. Rd alone as induction for transplant-eligible NDMM — VRd achieved median PFS 43 vs. 30 months (p=0.0018) and median OS 75 vs. 64 months, establishing VRd as the standard induction regimen for newly diagnosed myeloma.',
    implication: 'Quarterly VRd induction response documentation (IMWG criteria: ≥VGPR at 4 cycles) and monthly M-protein trending require NP annual myeloma pharmacotherapy CE to manage bortezomib-induced neuropathy dose reduction, lenalidomide REMS monthly CBC, and dexamethasone infection prophylaxis protocols.',
  },
  {
    title: 'Daratumumab + VRd in NDMM — NEJM 2019',
    finding: 'CASSIOPEIA trial: daratumumab + VTd vs. VTd induction/consolidation — Dara-VTd achieved stringent CR in 29% vs. 20% and MRD negativity in 64% vs. 44% at 12 months, establishing daratumumab-based quadruplet induction as the new standard for transplant-eligible NDMM.',
    implication: 'Annual daratumumab infusion reaction protocol training (≥20% Grade 1–2 infusion reactions) and quarterly MRD assessment documentation (10⁻⁵ sensitivity NGS) require NP annual daratumumab CE to premedicate all patients (dexamethasone + diphenhydramine + montelukast + acetaminophen) and document MRD kinetics for treatment duration decisions.',
  },
  {
    title: 'Lenalidomide Maintenance Post-ASCT — NEJM 2012',
    finding: 'CALGB 100104 trial: lenalidomide maintenance post-ASCT vs. placebo — lenalidomide improved median PFS from 27 to 46 months (HR 0.50, p<0.001) and OS from 73% to 88% at 3 years, establishing indefinite lenalidomide maintenance as standard of care post-ASCT.',
    implication: 'Quarterly lenalidomide maintenance response and tolerability documentation (dose reduction for ANC <500/μL, platelets <25,000/μL) and monthly REMS CBC monitoring require NP annual lenalidomide CE to manage hematologic toxicity, secondary malignancy surveillance, and indefinite REMS enrollment maintenance.',
  },
  {
    title: 'Ciltacabtagene Autoleucel CAR-T — NEJM 2022',
    finding: 'CARTITUDE-1 trial: cilta-cel (BCMA CAR-T) in heavily pretreated RRMM — 98% ORR, 78% stringent CR, 93% MRD negativity at 10⁻⁵ at 18 months follow-up, and median PFS not reached at 18 months (78% event-free) — establishing BCMA CAR-T as transformative therapy for RRMM.',
    implication: 'Annual CAR-T CRS/ICANS management protocol CE — Grade 2+ CRS: tocilizumab 8 mg/kg IV, ICANS Grade 2: dexamethasone 10 mg Q6H, ICANS Grade 3: ICU transfer — requires NP annual CAR-T NP certification to manage neurotoxicity, coordinate lymphodepletion, and document cytokine release syndrome grading per ASTCT criteria.',
  },
  {
    title: 'MRD Negativity as Surrogate Endpoint — NEJM 2016',
    finding: 'IMWG consensus: MRD negativity at 10⁻⁵ sensitivity by NGS predicted PFS and OS in multiple large myeloma trials — sustained MRD negativity ≥12 months associated with 3-fold longer PFS vs. MRD-positive patients, establishing MRD as the primary treatment response endpoint in clinical trials and clinical practice.',
    implication: 'Quarterly MRD assessment documentation (bone marrow NGS at 10⁻⁵ sensitivity) and quarterly IMWG sCR criteria documentation require NP annual myeloma response assessment CE to coordinate bone marrow timing relative to treatment cycles, interpret FLC ratio normalization, and guide treatment continuation vs. dose reduction in MRD-negative patients.',
  },
  {
    title: 'High-Risk Myeloma Genetics — NEJM 2021',
    finding: 'GEM-CESAR trial and CoMMpass registry: del(17p), t(4;14), t(14;16), and 1q amplification identified in 25% of NDMM patients — these high-risk cytogenetics conferred median OS 3–4 years vs. 8+ years for standard risk, with bortezomib-based triplet + daratumumab quadruplet partially overcoming del(17p) poor prognosis.',
    implication: 'Annual bone marrow FISH documentation for del(17p), t(4;14), t(14;16) at diagnosis and annual SMM Mayo 20/2/20 risk stratification require NP annual myeloma genetics CE to guide intensified induction selection for high-risk patients and coordinate CoMMpass registry genomic sequencing enrollment.',
  },
]

const testimonial = {
  quote: 'Multiple myeloma NP practice requires AGPCNP-BC and AOCNP renewal, monthly IMiD REMS CBC monitoring, quarterly MRD assessment coordination, monthly M-protein SPEP/UPEP trending, annual FISH cytogenetics documentation, daratumumab infusion reaction protocol training, CAR-T CRS/ICANS management CE, quarterly IMWG response documentation, lenalidomide maintenance REMS enrollment, SMM risk stratification, ASCT eligibility annual review, and MMRF CoMMpass registry participation — all simultaneously. Momenties consolidated every deadline. Our program achieved ≥95% MRD negativity at post-ASCT consolidation.',
  author: 'AGPCNP-BC, AOCNP',
  role: 'Multiple Myeloma Nurse Practitioner, Academic Hematologic Malignancy Program',
}

export default function MultipleMyelomaNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Multiple Myeloma Nurse Practitioners"
        title="Every MRD Assessment Deadline. Every IMiD REMS Renewal. One Calendar."
        subtitle="Multiple myeloma nurse practitioners manage one of the most pharmacologically complex advanced practice portfolios in hematologic oncology — AOCNP renewal, monthly IMiD REMS CBC monitoring, quarterly MRD assessment coordination, daratumumab infusion reaction protocol, CAR-T CRS/ICANS management, IMWG response documentation, and MMRF CoMMpass registry participation. Momenties automates every deadline so your program achieves top-quartile MRD negativity rates."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Myeloma NP Compliance Lifecycle
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
              6 Landmark Trials That Define Myeloma NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind IMWG response criteria, MRD benchmarks, and multiple myeloma NP quality metrics.
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
        headline="Ready to Achieve ≥95% Post-ASCT MRD Negativity?"
        subtext="Join multiple myeloma nurse practitioners using Momenties to automate every IMiD REMS, MRD, and CAR-T safety deadline. Free to start."
      />
    </main>
  )
}
