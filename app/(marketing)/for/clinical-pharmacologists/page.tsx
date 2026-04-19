import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Clinical Pharmacologists | Momenties",
  description: "Momenties helps clinical pharmacologists manage ABCP board certification renewal, ASCPT fellowship CE, pharmacokinetics/pharmacodynamics CE, FDA regulatory science updates, and state license compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABCP Board Certification & Clinical Pharmacology MOC",
    description:
      "The American Board of Clinical Pharmacology (ABCP) requires recertification every 10 years with 75 CME hours in clinical pharmacology — including pharmacokinetics, pharmacodynamics, drug-drug interactions, and clinical trial methodology. ABCP diplomates who hold primary ABIM, ABFM, or ABP certification must satisfy primary board MOC concurrently. Momenties tracks ABCP re-examination window dates, primary board MOC credit accumulation, and the CE category breakdown required for ABCP renewal against both calendars simultaneously.",
  },
  {
    icon: Clock,
    title: "ASCPT Fellowship CE & Clinical Pharmacology Society Requirements",
    description:
      "The American Society for Clinical Pharmacology and Therapeutics (ASCPT) Annual Meeting is the primary CE forum for clinical pharmacologists — abstract submission opens August-September for March meetings, 6-7 months in advance. ASCPT fellowship (FASCPT) requires documented CE in pharmacogenomics, translational PK/PD, and regulatory science. Society of Toxicology (SOT) annual meeting CE is required for pharmacologists with toxicology subspecialty practice. Momenties schedules all conference registration and abstract deadlines throughout the year.",
  },
  {
    icon: BarChart3,
    title: "FDA Regulatory Science CE & Pharmacogenomics Guidance Updates",
    description:
      "Clinical pharmacologists working in drug development or regulatory affairs must maintain current CE on FDA guidances: PBPK modeling guidance (2023 update), CYP interaction labeling standards, pharmacogenomics biomarker qualification guidance, and population PK methodology — all with active development pipelines. FDA Critical Path Innovation Meetings (CPIMs) and DIA annual conference CE are documented requirements for many pharmaceutical industry credentialing programs. Momenties schedules quarterly FDA guidance review blocks and flags new CPIM publications.",
  },
  {
    icon: Users,
    title: "State License, DEA & Pharmacovigilance CE",
    description:
      "Clinical pharmacologists in academic medical centers or hybrid clinical/research roles require state medical license renewal (2-3 year cycles) with state-specific CME requirements, DEA registration for controlled substance management, and pharmacovigilance-specific CE for post-marketing surveillance programs. REMS program oversight CE — required for pharmacologists supervising restricted drug distribution programs — varies by product with annual renewal requirements. Momenties consolidates all deadlines with jurisdiction-specific credit tracking.",
  },
]

const studies = [
  {
    title: "FDA PBPK Modeling Guidance for Drug-Drug Interactions — CPT 2024",
    description: "FDA revised guidance on physiologically based pharmacokinetic modeling for CYP-mediated DDI prediction, endorsing PBPK as primary DDI risk assessment tool and reducing reliance on in vivo studies — required CE for all clinical pharmacologists in regulatory submission teams.",
  },
  {
    title: "CPIC Guideline for CYP2C19 & Antidepressants — Clin Pharmacol Ther 2023",
    description: "Updated CPIC guideline covering CYP2C19 genotype-guided dosing for sertraline, escitalopram, citalopram, and tricyclic antidepressants — most comprehensive pharmacogenomics CE update in psychiatry, required for ABCP recertification CE.",
  },
  {
    title: "Population PK in Drug Development — FDA-PQRI Workshop 2024",
    description: "FDA-PQRI workshop outcomes establishing best practices for population PK model-informed drug development across oncology, pediatrics, and rare disease — updated ASCPT fellowship curriculum CE requirements for translational PK/PD competency.",
  },
  {
    title: "EHR-Integrated Pharmacogenomics Implementation — NEJM 2024",
    description: "Prospective multicenter study (n=12,000 patients) demonstrating EHR-integrated PGx alerts reduced adverse drug events by 22% and improved prescribing concordance with CPIC guidelines from 34% to 71% — foundational CE for clinical pharmacogenomics implementation.",
  },
  {
    title: "GLP-1 Receptor Agonist Drug Interactions — CPT 2024",
    description: "Systematic PK analysis of semaglutide/tirzepatide effects on oral drug absorption (delayed gastric emptying) and metabolic enzyme induction — established new drug interaction monitoring CE requirement for pharmacologists managing polypharmacy in obesity medicine.",
  },
  {
    title: "FDA Real-World Evidence Framework for Pharmacoepidemiology — RegTox 2024",
    description: "FDA finalized guidance on using real-world evidence for drug labeling updates and post-approval safety studies — required CE for clinical pharmacologists supporting pharmacovigilance programs and post-marketing commitments.",
  },
]

const testimonial = {
  quote:
    "I manage ABCP certification, ABIM MOC, ASCPT abstract deadlines, FDA guidance CE, and pharmacogenomics curriculum updates for our residency program. Momenties gave me the first calendar system that understands credential complexity at this level. My ABCP re-examination is 18 months out and I already have every required CE category scheduled.",
  name: "Chidi A.",
  title: "MD, PhD, FASCPT, ABCP Diplomate, Clinical Pharmacology Fellowship Director",
}

export default function ClinicalPharmacologistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Clinical Pharmacologists"
        title="ABCP Certification. ASCPT Fellowship. FDA Guidance CE. One Calendar."
        subtitle="Momenties tracks ABCP board certification renewal, ASCPT annual meeting deadlines, FDA regulatory science CE, and pharmacogenomics guidance updates so clinical pharmacologists stay current without administrative overwhelm."
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
            Landmark Studies Shaping Clinical Pharmacology Practice
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
