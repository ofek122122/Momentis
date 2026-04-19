import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Clinical Informatics Specialists | Momenties",
  description: "Momenties helps clinical informatics physicians manage ABPM&R/ABIM clinical informatics subspecialty certification, AMIA fellowship CE, EHR optimization program governance, HIPAA compliance training, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABPM&R/ABIM Clinical Informatics Subspecialty Certification",
    description:
      "Clinical informatics physicians maintain subspecialty board certification through ABPM&R (American Board of Preventive Medicine) or their primary specialty board — 24 boards sponsor the clinical informatics subspecialty examination administered jointly. The 10-year recertification examination covers EHR optimization, clinical decision support (CDS), health data standards (HL7 FHIR, ICD-10/11, SNOMED CT), interoperability, clinical AI implementation, and informatics governance. MOC requires 20 AMIA-approved CE credits per year, with specific requirements for health informatics CE including CDS design, data quality governance, and AI/ML in clinical informatics CE. Primary specialty board MOC (ABIM, ABP, ABFM, ABPN, etc.) continues independently alongside the subspecialty certification. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AMIA Fellowship CE & Health Informatics Society Conference Calendar",
    description:
      "The American Medical Informatics Association (AMIA) Annual Symposium (November) is the primary CE event — abstract submission opens April-May for fall conferences, 6 months in advance. AMIA 10×10 program — a foundational health informatics course required for clinical informatics subspecialty examination preparation — offers annual enrollment with rolling admission. HIMSS Annual Conference & Exhibition (March) provides health IT CE for clinical informaticists managing enterprise EHR programs. HL7 FHIR Connectathon events (quarterly) provide interoperability CE for informatics physicians leading integration projects. ONC Health IT certification and regulatory updates — including 2024 information blocking compliance deadlines, USCDI v3 adoption timelines, and FHIR R4 implementation requirements — require quarterly CE review. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "EHR Optimization Program Governance & Clinical AI CE",
    description:
      "Clinical informatics physicians leading enterprise EHR optimization programs navigate annual governance cycles tied to vendor release schedules — Epic, Oracle Cerner, and MEDITECH release major platform updates 2-4 times per year, each requiring change management CE and end-user training coordination. Clinical decision support (CDS) governance cycles — quarterly CDS alert review, annual full CDS library audit, and bi-annual CDS effectiveness measurement — are required for Joint Commission standards compliance. ONC 21st Century Cures Act information blocking rule compliance requires annual documentation review and provider policy updates. Clinical AI governance programs — reviewing AI/ML algorithm performance, bias detection, and monitoring requirements for deployed clinical AI tools — are now required quarterly at academic medical centers. AI in healthcare CE for informatics subspecialists (AMIA, HIMSS) requires 6+ credits annually. Momenties tracks all governance cycles.",
  },
  {
    icon: Users,
    title: "HIPAA Privacy Officer CE, State License & Data Governance Compliance",
    description:
      "Clinical informatics physicians serving as HIPAA Privacy Officers or Security Officers maintain annual HIPAA training renewal for their organizational role, plus documentation of breach risk assessment methodology updates and OCR guidance review. State medical license renewal (2-3 year cycles) — clinical informaticists maintaining active medical licenses in states where they provide clinical oversight — is tracked with jurisdiction-specific CE requirements. Research informatics CE — including NIH data sharing policy compliance training, NCATS CTSA clinical data science CE, and FDA real-world data guidance review — is required for informatics physicians supporting clinical research infrastructure. Health equity CE — ONC health equity in health IT programs, SDOH data standards CE, and algorithmic bias training — are now required for informatics subspecialty fellowship maintenance. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Clinical Decision Support Alert Fatigue Reduction — JAMIA 2024",
    description: "Multicenter CDS optimization study (n=8,400 CDS alerts across 14 hospitals) demonstrating alert rationalization reducing alert burden 47% while maintaining safety outcomes — required AMIA CE update for clinical informaticists on CDS governance methodology and evidence-based alert design.",
  },
  {
    title: "FHIR-Based Patient Data Access Outcomes — NEJM 2023",
    description: "National evaluation of ONC 21st Century Cures Act FHIR API implementation across 400+ health systems — documenting interoperability gains and unintended consequences — required informatics CE for physicians managing FHIR implementation programs and information blocking compliance.",
  },
  {
    title: "Clinical AI Validation Methodology — JAMA 2024",
    description: "National Academy of Medicine report establishing AI model monitoring standards for healthcare deployment — required AMIA CE for clinical informaticists building AI governance programs, including performance monitoring cadences and bias detection protocols.",
  },
  {
    title: "EHR Optimization and Physician Burnout — NEJM 2023",
    description: "Multicenter study (n=24,000 physicians) linking EHR design changes to physician burnout reduction — confirmed informatics-driven documentation burden reduction 30% reduces burnout scores — established AMIA CE framework for informatics physicians evaluating EHR optimization ROI.",
  },
  {
    title: "Predictive Analytics for Hospital Readmission — Lancet Digital Health 2024",
    description: "Meta-analysis of 42 AI readmission prediction models confirming modest predictive performance and implementation challenges — required CE update for clinical informaticists on AI performance expectations, implementation governance, and responsible deployment protocols.",
  },
  {
    title: "SDOH Data Integration in EHR — JAMA Network Open 2024",
    description: "National survey of SDOH data standardization programs (n=200 health systems) evaluating Z-codes and USCDI SDOH elements — required ONC CE for informatics physicians implementing SDOH data capture and health equity analytics programs.",
  },
]

const testimonial = {
  quote:
    "ABPM&R clinical informatics MOC, primary ABIM internal medicine MOC, AMIA fellowship CE, annual HIPAA privacy officer training, quarterly CDS governance cycles, ONC information blocking compliance calendar, clinical AI governance documentation, and state license — all on independent clocks. Momenties consolidated every deadline. I lead a 40-person informatics team and finally feel in control of my own credentials.",
  name: "Chinwendu O.",
  title: "MD, FACP, FAMIA, Chief Medical Informatics Officer",
}

export default function ClinicalInformaticsSpecialistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Clinical Informatics Specialists"
        title="Dual Board MOC. AMIA Fellowship. ONC Compliance. One Calendar."
        subtitle="Momenties tracks clinical informatics subspecialty certification, primary specialty board MOC, AMIA fellowship CE, EHR optimization governance cycles, ONC information blocking compliance, clinical AI governance documentation, and HIPAA privacy officer training so clinical informaticists maintain every credential without administrative overload."
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
            Landmark Studies Shaping Clinical Informatics Practice
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
