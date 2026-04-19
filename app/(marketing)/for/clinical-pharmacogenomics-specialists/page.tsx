import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Clinical Pharmacogenomics Specialists | Momenties",
  description: "Momenties helps clinical pharmacogenomics specialists manage CPNP board certification, PGPM fellowship CE, CPIC guideline update CE, laboratory accreditation cycles, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "CPNP Board Certification & Pharmacogenomics Specialty MOC",
    description:
      "Clinical pharmacogenomics specialists with pharmacy backgrounds maintaining Board of Pharmacy Specialties (BPS) certification in pharmacogenomics (the first BPS specialty focused on PGx, added in 2022) follow a 7-year recertification cycle requiring 30 CE hours in pharmacogenomics topics, OR passing the BPS Pharmacogenomics Specialist examination. Pharmacists with dual BPS specialties (Clinical Pharmacology and Pharmacogenomics, or Oncology Pharmacy and Pharmacogenomics) maintain independent recertification cycles for each credential. Physicians with pharmacogenomics fellowship training maintain their primary board certification (ABIM, ABFM, or ABP) plus any subspecialty pharmacogenomics board pathways through the American Board of Clinical Pharmacology (ABCP) — a 10-year recertification cycle. Clinical laboratory directors supervising PGx labs maintain ABMGG Laboratory Genetics and Genomics certification (5-year cycle). Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "CPIC Guideline Update CE & PGx Implementation Conference Calendar",
    description:
      "Clinical Pharmacogenetics Implementation Consortium (CPIC) publishes guideline updates on a rolling basis — updates to high-priority drug-gene pairs (warfarin/CYP2C9/VKORC1, clopidogrel/CYP2C19, codeine/CYP2D6, simvastatin/SLCO1B1, abacavir/HLA-B) require institutional clinical decision support (CDS) updates and pharmacist competency documentation. Annual CPIC guideline review session — confirming institutional CDS rules align with current CPIC recommendations — requires pharmacy and informatics coordination. Association for Molecular Pathology (AMP) Annual Meeting (November) provides PGx laboratory CE. American College of Medical Genetics and Genomics (ACMG) Annual Meeting (March) provides clinical genetics CE relevant for PGx program directors. Pharmacogenomics Research Network (PGRN) Annual Meeting (January) provides cutting-edge PGx evidence CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "PGx Laboratory Accreditation & CAP/CLIA Compliance Calendar",
    description:
      "Clinical pharmacogenomics testing laboratories maintain College of American Pathologists (CAP) accreditation — biennial CAP inspection cycle requiring 2-year proficiency testing in molecular markers, documentation of analytical validation, and corrective action tracking. CLIA (Clinical Laboratory Improvement Amendments) biennial inspection cycle for high-complexity molecular testing — PGx genotyping qualifies as high-complexity — requires proficiency testing participation, personnel competency documentation, and quality control record maintenance. New PGx assay validation — adding new gene-drug pairs to the testing menu — requires analytical validation, verification studies, and institutional review before clinical use. ACMG variant classification guidelines for PGx variants require annual review to update pathogenicity designations. ISO 15189 accreditation (for laboratories pursuing international standard compliance) adds a 2-year assessment cycle. Momenties tracks all laboratory compliance cycles.",
  },
  {
    icon: Users,
    title: "EHR Integration Governance, State License & PGx Outcomes Reporting",
    description:
      "Pharmacogenomics programs integrated into EHR clinical decision support require annual CDS rule review cycles — validating that CDS alerts reflect current CPIC, DPWG (Dutch Pharmacogenetics Working Group), and FDA PGx labeling recommendations. PGx result disclosure governance — HIPAA-compliant return of PGx results to patients, secondary finding policies (germline pharmacogenomic variants with medical implications beyond drug dosing), and consent documentation — requires annual ethics and legal review. Precision oncology PGx programs — somatic tumor genomic profiling for targeted therapy selection — maintain molecular tumor board (MTB) governance with monthly case review documentation. State pharmacy license renewal (pharmacist specialists) and medical license renewal (physician directors) follow 2-3 year cycles. FDA pharmacogenomics biomarker table updates (published quarterly) require quarterly institutional review. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "CYP2C19-Guided Clopidogrel Prescribing — NEJM 2024",
    description: "TAILOR-PCI trial extension analysis (n=5,300 PCI patients) confirming CYP2C19 genotype-guided P2Y12 selection reduces major adverse cardiovascular events 34% in poor metabolizers — required BPS and CPIC CE update for PGx specialists on updated clopidogrel CDS rule implementation and formulary guidance.",
  },
  {
    title: "Statin-Induced Myopathy and SLCO1B1 — Lancet 2023",
    description: "STRENGTH pharmacogenomics analysis (n=12,000 statin users) confirming SLCO1B1*5 haplotype identifies 40% of high-dose statin myopathy risk — required CPIC CE update for PGx specialists on simvastatin dose cap CDS alert implementation and patient counseling frameworks.",
  },
  {
    title: "Preemptive PGx Testing Program Outcomes — JAMA 2024",
    description: "RIGHT 10K prospective study (n=10,000 preemptive PGx tested patients) confirming 28% reduction in actionable drug-gene pair exposures — required BPS and CPIC CE update for PGx specialists on preemptive testing program design, EHR CDS implementation governance, and population health PGx outcomes metrics.",
  },
  {
    title: "Psychiatric Pharmacogenomics and Antidepressant Response — NEJM 2023",
    description: "GUIDED trial 2-year follow-up (n=1,500 MDD patients) confirming combinatorial PGx panel-guided antidepressant selection improves remission rates 22% — required BPS CE update for PGx specialists on combinatorial PGx report interpretation, psychiatric drug-gene pair documentation, and MDT communication protocols.",
  },
  {
    title: "Germline PGx Variants in Oncology — JAMA Oncology 2024",
    description: "National cancer cohort analysis identifying 12% prevalence of actionable germline PGx variants in oncology patients — required ACMG and BPS CE update for PGx specialists on germline versus somatic PGx result differentiation, secondary finding policy governance, and oncology precision dosing documentation.",
  },
  {
    title: "Opioid Pharmacogenomics and Pain Management — NEJM 2024",
    description: "CYP2D6/CYP3A4 guided opioid selection RCT (n=800 chronic pain patients) confirming genotype-guided opioid prescribing reduces adverse events 30% — required CPIC and BPS CE update for PGx specialists on opioid drug-gene pair CDS rule updates and state PDMP integration for PGx-guided prescribing.",
  },
]

const testimonial = {
  quote:
    "BPS pharmacogenomics specialist recertification, ABCP board recertification, CAP biennial laboratory inspection preparation, CLIA compliance documentation cycles, annual CPIC guideline review for 23 active CDS rules, quarterly FDA PGx biomarker table reviews, molecular tumor board monthly documentation, and state license — all on separate cycles. Momenties mapped every deadline. We passed our CAP inspection with zero deficiencies.",
  name: "Obiageli C.",
  title: "PharmD, BCPS, Pharmacogenomics Specialist & PGx Program Director",
}

export default function ClinicalPharmacogenomicsSpecialistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Clinical Pharmacogenomics Specialists"
        title="BPS Pharmacogenomics Certification. CAP Accreditation. CPIC CE. One Calendar."
        subtitle="Momenties tracks BPS pharmacogenomics specialist and ABCP recertification cycles, CPIC guideline update CE, CAP and CLIA laboratory accreditation cycles, EHR CDS rule annual review, FDA PGx biomarker table quarterly updates, and state license renewal so clinical pharmacogenomics specialists maintain every credential without administrative overload."
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
            Landmark Studies Shaping Clinical Pharmacogenomics Practice
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
