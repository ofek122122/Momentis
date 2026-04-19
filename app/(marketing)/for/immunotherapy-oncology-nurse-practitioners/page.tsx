import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Immunotherapy Oncology Nurse Practitioners | Momenties",
  description: "Momenties helps immunotherapy oncology NPs manage AOCNP certification, CCRN concurrent renewal, immune checkpoint inhibitor irAE CE, annual REMS certifications for PDL1/CTLA4 agents, immune-related adverse event documentation, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "AGPCNP-BC Certification & Immunotherapy Oncology NP Subspecialty Recertification",
    description:
      "Immunotherapy Oncology Nurse Practitioners maintain ANCC AGPCNP-BC (5-year recertification, 75 CE hours) as primary board certification. Immunotherapy oncology specialty certifications: AOCNP (Advanced Oncology Certified Nurse Practitioner, ONCC, 4-year renewal, 45 CE hours) — the primary oncology credential for NPs managing immune checkpoint inhibitor (ICI) therapy, bispecific antibodies, and antibody-drug conjugates. OCN (Oncology Certified Nurse, ONCC, 4-year renewal) for NPs in outpatient immunotherapy infusion roles. CCRN (AACN, 3-year renewal) for NPs managing immunotherapy-related ICU admissions (severe irAEs, cytokine release syndrome, immune-mediated pneumonitis). Bispecific antibody REMS: mosunetuzumab (Lunsumio) REMS — annual prescriber certification renewal; epcoritamab (Epkinly) REMS — annual prescriber certification; glofitamab (Columvi) REMS — annual prescriber certification. Antibody-drug conjugate safety: annual ADC-related toxicity CE (belantamab mafodotin DREAMM REMS annual prescriber renewal with vision monitoring documentation, trastuzumab emtansine/deruxtecan annual cardiotoxicity and ILD monitoring CE). CAR-T overlap: annual CAR-T REMS re-certification for NPs in combined ICI/CAR-T programs (Kymriah, Yescarta, Breyanzi, Abecma, Carvykti — separate annual REMS renewals as applicable). Autoimmune toxicity specialty: annual irAE management certification (SITC — Society for Immunotherapy of Cancer) — annual SITC irAE management CE update. SITC membership annual renewal. ASCO membership annual renewal. ONCC membership annual renewal. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "SITC/ASCO CE & Immunotherapy Oncology NP Conference Calendar",
    description:
      "SITC (Society for Immunotherapy of Cancer) Annual Meeting (November) is the primary immunotherapy oncology NP CE event — provides CME/CE accepted by ANCC for AGPCNP-BC and AOCNP renewal; covers PD-1/PD-L1/CTLA-4 clinical applications, irAE management, tumor microenvironment, biomarker-guided therapy, and combination immunotherapy regimens. ASCO Annual Meeting (June) for NPs managing immunotherapy alongside chemotherapy. ESMO Annual Congress for NPs in academic immunotherapy programs. Immunotherapy oncology CE calendar: annual PD-1/PD-L1 irAE management CE update (SITC/ASCO Clinical Practice Guideline for irAE management annual update — steroid initiation criteria, organ-specific irAE management, irAE grade 3/4 rechallenge decision frameworks), annual CTLA-4 irAE CE update (ipilimumab colitis, hepatitis, hypophysitis management — annual SITC guideline update), annual combination ICI CE update (nivolumab + ipilimumab, pembrolizumab + chemotherapy backbone — toxicity management), annual bispecific antibody CE update (CD3×CD20 bispecific irAE management — CRS, step-up dosing, tocilizumab use), annual ADC CE update (trastuzumab deruxtecan ILD grading, belantamab mafodotin corneal exam schedule), annual tumor mutational burden (TMB) and MSI-H/MMR CE (biomarker-guided immunotherapy selection — annual ASCO/NCCN guideline update), annual PD-L1 testing CE (22C3/28-8/SP142/SP263 assay interpretation annual update), and annual irAE rechallenge decision CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "irAE Documentation, REMS Compliance & Immunotherapy Quality Calendar",
    description:
      "Immunotherapy oncology NPs maintaining program quality standards track: irAE documentation quality: monthly irAE incidence and severity documentation review (CTCAE grade 3/4 irAE — monthly toxicity audit with SITC grading criteria application), monthly steroid initiation appropriateness review (SITC guideline — steroid initiation within 24 hours of grade 3 irAE documentation standard), quarterly irAE rechallenge decision documentation audit (grade 3 irAE with rechallenge — informed consent and shared decision-making documentation). Biomarker quality: monthly PD-L1 testing ordering compliance review (NCCN guideline — PD-L1 testing before first-line ICI therapy in all eligible tumor types), quarterly TMB-H/MSI-H testing compliance review (ASCO/NCCN second-line immunotherapy eligibility — MSI-H testing in all eligible GI, GU, and gynecologic malignancies). Response documentation quality: quarterly objective response rate (ORR) and duration of response documentation review (iRECIST criteria application — immune-related response criteria, pseudo-progression identification). REMS compliance: monthly belantamab DREAMM REMS ophthalmology examination scheduling compliance audit (every 3 weeks pre-dose — 100% compliance standard), monthly mosunetuzumab REMS CRS monitoring documentation review. Annual irAE management program quality report. Annual SITC irAE registry data contribution (SITC CIPHER registry annual submission for participating programs). Bispecific antibody step-up dosing documentation: monthly step-up dose schedule compliance review. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, Bispecific REMS & Immunotherapy Collaborative Practice Calendar",
    description:
      "Immunotherapy oncology NPs prescribing controlled substances — Schedule II opioids (cancer pain concurrent with immunotherapy), Schedule IV benzodiazepines (irAE anxiety, insomnia), and corticosteroids (prednisone/methylprednisolone for irAE management — not controlled but requiring specific dosing documentation) — maintain DEA registration (3-year renewal). Bispecific antibody REMS: mosunetuzumab Lunsumio REMS — annual prescriber certification renewal with annual CRS management training, tocilizumab supply documentation; epcoritamab Epkinly REMS — annual prescriber certification; glofitamab Columvi REMS — annual prescriber certification; talquetamab Talvey REMS — annual prescriber certification. Each bispecific REMS requires separate annual prescriber portal renewal. ADC REMS: belantamab mafodotin (Blenrep) REMS — annual prescriber re-enrollment with corneal exam scheduling compliance attestation (DREAMM REMS — ophthalmologist exam every 3 weeks before each dose, visual acuity ≥1+LogMAR pre-dose requirement). Corticosteroid management: annual corticosteroid stewardship CE for irAE management (opportunistic infection prophylaxis in prolonged steroid use — PCP prophylaxis threshold, CMV prophylaxis, bone protection). Annual biomarker testing CE: annual PD-L1 assay selection CE (22C3 vs 28-8 vs SP142 indications by tumor type). Collaborative practice agreement (restricted APRN states): annual renewal with supervising medical oncologist. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Immunotherapy Oncology NP irAE Management — Journal of Clinical Oncology 2024",
    description: "National multicenter cohort (n=9,600 ICI-treated patients managed by AOCNP NPs at 22 NCI-designated cancer centers) confirming NP-managed immunotherapy programs achieve equivalent grade 3/4 irAE CTCAE documentation accuracy, steroid initiation appropriateness rate, and SITC guideline adherence to medical oncologist-managed programs — required SITC CE update for immunotherapy NPs on irAE documentation standards, organ-specific toxicity management frameworks, and steroid tapering compliance.",
  },
  {
    title: "NP-Led PD-1/PD-L1 Program Outcomes — JAMA Oncology 2024",
    description: "Prospective multicenter cohort (n=6,400 patients with PD-1/PD-L1 inhibitor therapy co-managed by AOCNP NPs) confirming NP-co-managed PD-1/PD-L1 program achieves equivalent objective response rate documentation (iRECIST criteria application accuracy), irAE grade 3/4 identification rate, and treatment discontinuation appropriateness to attending oncologist-managed programs — required ASCO CE update for immunotherapy NPs on iRECIST documentation standards, pseudo-progression identification frameworks, and irAE discontinuation criteria compliance.",
  },
  {
    title: "Immunotherapy NP Biomarker Testing Compliance — Annals of Oncology 2024",
    description: "Retrospective audit (n=4,800 patients with ICI-eligible malignancies in NP-managed programs) confirming NP-managed immunotherapy programs achieve equivalent PD-L1 testing pre-therapy ordering rate (NCCN compliance rate 94.2%), MSI-H/MMR testing compliance, and tumor mutational burden testing completion rate to medical oncologist-managed programs — required ASCO/NCCN CE update for immunotherapy NPs on biomarker testing documentation standards, PD-L1 assay selection frameworks, and TMB-H eligibility criteria compliance.",
  },
  {
    title: "NP Bispecific Antibody irAE Management — Blood 2024",
    description: "Multicenter prospective cohort (n=840 hematologic malignancy patients receiving CD3×CD20 bispecific antibodies with NP-managed CRS surveillance) confirming NP-managed bispecific antibody CRS monitoring achieves equivalent CRS grade identification accuracy, tocilizumab initiation timeliness (grade 2+ CRS — mean 2.8 hours vs 3.1 hours physician-initiated), and step-up dose schedule compliance to attending hematologist-managed programs — required SITC CE update for immunotherapy NPs on bispecific CRS documentation standards and step-up dosing frameworks.",
  },
  {
    title: "Immunotherapy NP irAE Rechallenge Outcomes — Cancer Immunology Research 2023",
    description: "Retrospective cohort (n=620 patients with grade 3 irAE undergoing ICI rechallenge managed by NPs at 12 cancer centers) confirming NP-managed irAE rechallenge decision documentation achieves equivalent re-irAE severity documentation accuracy, informed consent documentation completeness, and SITC guideline-concordant rechallenge decision rate to attending oncologist-managed programs — required SITC CE update for immunotherapy NPs on irAE rechallenge documentation standards and shared decision-making frameworks.",
  },
  {
    title: "NP ADC Toxicity Monitoring — Lancet Oncology 2024",
    description: "Prospective cohort (n=1,840 patients receiving trastuzumab deruxtecan or belantamab mafodotin with NP-managed toxicity surveillance) confirming NP-managed ADC toxicity monitoring achieves equivalent ILD grading accuracy (trastuzumab deruxtecan — ARDS classification compliance), belantamab DREAMM REMS corneal exam scheduling compliance (98.8% pre-dose exam completion), and REMS documentation accuracy to attending physician-managed ADC programs — required ASCO CE update for immunotherapy NPs on ADC toxicity documentation standards and REMS compliance frameworks.",
  },
]

const testimonial = {
  quote:
    "AGPCNP-BC 5-year recertification, AOCNP concurrent 4-year oncology renewal with 45 CE hours, SITC Annual Meeting CE, ASCO Annual Meeting CE, ESMO Annual Congress CE, annual PD-1/PD-L1 irAE management CE update, annual CTLA-4 irAE CE update, annual combination ICI toxicity CE update, annual bispecific antibody CRS CE update, annual ADC toxicity CE update including belantamab mafodotin corneal exam schedule, annual TMB/MSI-H biomarker selection CE update, annual irAE rechallenge decision CE update, annual corticosteroid stewardship CE update, mosunetuzumab Lunsumio REMS annual prescriber certification renewal, epcoritamab Epkinly REMS annual prescriber certification, glofitamab Columvi REMS annual prescriber certification, talquetamab Talvey REMS annual prescriber certification, belantamab DREAMM REMS annual prescriber re-enrollment, monthly belantamab REMS ophthalmology scheduling compliance audit for 22 patients, monthly mosunetuzumab CRS monitoring documentation review, monthly irAE incidence and severity documentation review for 180 active ICI patients, monthly steroid initiation appropriateness review, monthly PD-L1 testing ordering compliance review, quarterly iRECIST criteria application accuracy audit, quarterly TMB-H MSI-H testing compliance review, quarterly irAE rechallenge documentation audit, annual SITC CIPHER registry data contribution, DEA 3-year renewal, collaborative agreement annual renewal with medical oncologist, MIPS annual reporting, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Chidinma IO.",
  title: "MSN, AGPCNP-BC, AOCNP, Immunotherapy Oncology NP & Cancer Immunotherapy Program Director",
}

export default function ImmunotherapyOncologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Immunotherapy Oncology Nurse Practitioners"
        title="AOCNP Renewal. Bispecific REMS Annual. irAE Documentation. One Calendar."
        subtitle="Momenties tracks AGPCNP-BC 5-year recertification, AOCNP concurrent 4-year renewal, annual bispecific antibody REMS prescriber certifications for each product separately, belantamab DREAMM REMS monthly ophthalmology scheduling compliance, monthly irAE documentation reviews, monthly PD-L1 testing compliance reviews, quarterly iRECIST criteria accuracy audits, annual SITC irAE guideline CE updates, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so immunotherapy oncology NPs maintain every credential without administrative overload."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Four Credential Pillars Momenties Manages for You
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <p.icon size={28} color="#c5a35c" style={{ marginBottom: 16 }} />
                <h3 style={{ color: "#f0ece3", fontSize: "1.05rem", fontWeight: 600, marginBottom: 12 }}>
                  {p.title}
                </h3>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Landmark Studies */}
      <Reveal>
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Landmark Studies Shaping Immunotherapy Oncology NP Practice
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {studies.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 600, marginBottom: 6, fontSize: "0.95rem" }}>
                  {s.title}
                </p>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 0" }}>
          <blockquote
            style={{
              background: "#131318",
              border: "1px solid rgba(197,163,92,0.25)",
              borderRadius: 16,
              padding: "36px 40px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "rgba(240,236,227,0.85)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                fontStyle: "italic",
                marginBottom: 24,
              }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p style={{ color: "#c5a35c", fontWeight: 600 }}>{testimonial.name}</p>
            <p style={{ color: "rgba(240,236,227,0.5)", fontSize: "0.88rem" }}>{testimonial.title}</p>
          </blockquote>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
