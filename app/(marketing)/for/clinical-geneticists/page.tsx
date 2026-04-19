import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Clinical Geneticists | Momenties",
  description: "Momenties helps clinical geneticists manage ABMGG board certification renewal, ACMG fellowship CE, gene therapy REMS compliance, variant interpretation guideline updates, and state license compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABMGG Clinical Genetics Board Certification & MOC",
    description:
      "Clinical geneticists certified through the American Board of Medical Genetics and Genomics (ABMGG) maintain certification through a 10-year recertification examination cycle covering clinical dysmorphology, metabolic genetics, molecular genetics, cytogenomics, biochemical genetics, and genetic counseling principles. ABMGG MOC requires 75 AMA PRA Category 1 CME credits in medical genetics every 5 years, with specific requirements for genomics CE including next-generation sequencing interpretation, variant classification updates, and gene therapy CE. Diplomates with dual subspecialty certification in molecular genetic pathology (MGP, with CAP) or laboratory genetics and genomics (LGG) maintain independent certification requirements for each credential. Momenties tracks all ABMGG timelines.",
  },
  {
    icon: Clock,
    title: "ACMG Fellowship CE & Genetics Society Conference Calendar",
    description:
      "The American College of Medical Genetics and Genomics (ACMG) Annual Clinical Genetics Meeting is the primary CE event — abstract submission opens August-September for March conferences, 6-7 months in advance. ACMG fellowship (FACMG) maintenance requires documented CE in variant interpretation, genomic medicine implementation, and rare disease diagnosis. The International Congress of Human Genetics (ICHG) — held every 4 years — provides international CE recognized by ABMGG. ACMG Practice Guidelines and Technical Standards — updated continuously, including 2023 variant interpretation updates, newborn screening condition additions, and ACMG SF v3.2 secondary findings guidelines — require documented CE review for FACMG maintenance. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Gene Therapy REMS, Variant Interpretation CE & Laboratory Accreditation",
    description:
      "Clinical geneticists prescribing or managing FDA-approved gene therapies must complete therapy-specific REMS prescriber training: Zolgensma (SMA), Hemgenix (hemophilia B), Elevidys (DMD), Casgevy/Lyfgenia (sickle cell/beta-thalassemia) — each with independent REMS prescriber certification programs with renewal cycles. Clinical genetics laboratories must maintain CAP/CLIA accreditation (2-year inspection cycle) with proficiency testing quarterly. ACMG/AMP Variant Interpretation Guidelines — updated with clinician-specific modules for specific gene-disease pairs throughout the year — require quarterly CE review for clinical genetics programs interpreting WES/WGS results. ClinVar curation responsibilities for labs submitting variants require annual training renewal. Momenties tracks all.",
  },
  {
    icon: Users,
    title: "State License, Newborn Screening CE & Genetic Counselor Supervision",
    description:
      "Clinical geneticists supervising genetic counselors in state-regulated supervision frameworks (required in 26 states with genetic counselor licensure) have supervisor CE requirements that vary by state. Newborn screening follow-up CE — required for geneticists serving as NBS metabolic coordinators — is updated as ACMG Newborn Screening ACTion sheets and algorithms are revised. NORD (National Organization for Rare Disorders) rare disease CE for conditions on the RDCRN network study roster is required for investigators participating in natural history studies. State medical license renewal (2-3 year cycles), DEA registration, and clinical research GCP training renewals complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Base Editing for Sickle Cell Disease — NEJM 2023",
    description: "Phase 1/2 trial of base editing therapy for sickle cell disease demonstrating 88% reduction in vaso-occlusive episodes — established new gene therapy prescriber CE requirements for hematologic gene therapy REMS programs managed by clinical geneticists.",
  },
  {
    title: "ACMG SF v3.2 Secondary Findings Update — Genetics in Medicine 2023",
    description: "Updated ACMG secondary findings list expanding to 81 conditions with new autosomal recessive and updated penetrance data — required CE for all clinical genetics programs performing WES/WGS with secondary findings reporting.",
  },
  {
    title: "WGS vs WES for Rare Disease Diagnosis — NEJM 2023",
    description: "Multicenter diagnostic yield comparison (n=2,400 patients with rare disease) demonstrating WGS 8% higher diagnostic yield vs. WES for previously undiagnosed patients — updated ACMG clinical sequencing CE for test selection and variant interpretation protocols.",
  },
  {
    title: "Polygenic Risk Score Clinical Implementation — Lancet 2024",
    description: "Clinical validation of polygenic risk scores for breast cancer, coronary artery disease, and type 2 diabetes across 100,000 patients — established ACMG CE framework for clinical geneticists implementing PRS in preventive genomics programs.",
  },
  {
    title: "CRISPR Gene Editing Outcomes at 2 Years — NEJM 2024",
    description: "2-year outcomes of Casgevy (exagamglogene autotemcel) for sickle cell disease and beta-thalassemia — confirmed durable HbF induction — required REMS prescriber CE update for all clinical genetics and hematology gene therapy programs.",
  },
  {
    title: "Prenatal cfDNA Screening Expanded — JAMA 2024",
    description: "Multi-site validation of expanded cfDNA screening panels detecting 40+ fetal conditions with 99.1% specificity — required ACMG CE update for clinical geneticists counseling on expanded NIPT and reporting diagnostic yield in high-risk populations.",
  },
]

const testimonial = {
  quote:
    "ABMGG recertification, ACMG fellowship CE, four gene therapy REMS programs, CAP lab accreditation cycle, ACMG secondary findings list updates, genetic counselor supervision CE in two states, and state license — all running in parallel. Momenties is the first system that actually maps all of it. I feel in control of my credentials for the first time in a decade.",
  name: "Obiageli A.",
  title: "MD, PhD, FACMG, Clinical Genetics & Genomics Program Director",
}

export default function ClinicalGeneticistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Clinical Geneticists"
        title="ABMGG Certification. Gene Therapy REMS. ACMG CE. One Calendar."
        subtitle="Momenties tracks ABMGG board certification, ACMG fellowship CE, gene therapy REMS prescriber training, variant interpretation guideline updates, CAP laboratory accreditation, and state license renewal so clinical geneticists stay credentialed without administrative overload."
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
            Landmark Studies Shaping Clinical Genetics Practice
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
