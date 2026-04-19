import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Thoracic Oncologists | Momenties",
  description: "Momenties helps thoracic oncologists manage ABTS board certification, IASLC fellowship CE, robotic thoracic surgery credentialing, immunotherapy and targeted therapy REMS compliance, and tumor board documentation in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABTS Board Certification & Thoracic Surgery MOC",
    description:
      "Thoracic oncologists with surgical training maintain American Board of Thoracic Surgery (ABTS) certification through a 10-year recertification examination cycle covering lung cancer surgery, esophageal cancer surgery, mediastinal tumors, and pleural malignancies. ABTS MOC requires 150 CME credits per recertification cycle, with required participation in the Society of Thoracic Surgeons (STS) National Database for outcomes tracking — participation is a prerequisite for ABTS recertification. STS Composite Score submission (mortality, morbidity, and length-of-stay benchmarks for lobectomy and esophagectomy) is required annually. Medical thoracic oncologists maintaining ABIM medical oncology certification manage a parallel 10-year recertification cycle with ABIM LKA quarterly assessments. Dual ABTS/ABIM diplomates maintain two independent MOC pathways. Momenties tracks both.",
  },
  {
    icon: Clock,
    title: "IASLC Fellowship CE & Thoracic Oncology Society Conference Calendar",
    description:
      "The International Association for the Study of Lung Cancer (IASLC) World Conference on Lung Cancer (WCLC) — held September/October — is the primary global thoracic oncology CE event; abstract submission opens January-February for fall conferences, 8 months in advance. American Association for Thoracic Surgery (AATS) Annual Meeting (April/May) provides surgical thoracic oncology CE. Society of Thoracic Surgeons (STS) Annual Meeting (January) provides STS database benchmark data and quality improvement CE required for ABTS MOC. ASCO, ESMO, and ASTRO annual meetings provide medical and radiation oncology CE for multidisciplinary thoracic oncologists. NCCN Thoracic Cancers Guidelines updates — 2023-2024 revisions covering NSCLC, SCLC, mesothelioma, and thymoma — require documented CE review for fellowship maintenance. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Robotic Thoracic Surgery Credentialing & Immunotherapy REMS Compliance",
    description:
      "Thoracic oncologists performing robotic-assisted thoracic surgery (RATS) navigate complex credentialing across hospital systems. Intuitive Surgical da Vinci credentialing — for robotic lobectomy, segmentectomy, esophagectomy, and thymectomy — requires simulator training, proctored case volume documentation (typically 20+ supervised cases), and annual reappointment with ongoing case volume verification. Video-assisted thoracoscopic surgery (VATS) credentialing — hospital privileging for minimally invasive lobectomy, mediastinoscopy, and EBUS bronchoscopy — is managed separately per institution. Immunotherapy-related REMS programs for thoracic oncology — durvalumab post-chemoradiation protocols and osimertinib combination regimens — include patient monitoring documentation requirements. Targeted therapy CE for EGFR, ALK, ROS1, KRAS G12C, and HER2 mutations requires quarterly guideline updates. Momenties tracks all credentialing cycles.",
  },
  {
    icon: Users,
    title: "Multidisciplinary Tumor Board, STS Database & State License Compliance",
    description:
      "Thoracic oncologists participating in multidisciplinary thoracic oncology tumor boards must document MDT participation for ABTS and ABIM MOC credit — typically 12 tumor board conferences per year with documented case discussion and consensus treatment decisions. NCI-designated cancer center thoracic programs require documented tumor board participation rates, clinical trial accrual targets (≥5% of eligible patients), and USMLE/GEC training compliance. STS National Database submission is a hard prerequisite for ABTS recertification — incomplete data submission triggers MOC clock reset. ACLS certification (2-year cycle), ATLS for thoracic emergencies (4-year cycle), and radiation safety certification for programs managing intraoperative radiation complete the compliance portfolio. State medical license renewal (2-3 year cycles) and DEA registration for opioid prescribing are tracked with jurisdiction-specific deadlines. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "ADAURA Osimertinib Adjuvant NSCLC — NEJM 2023",
    description: "ADAURA 5-year OS update (n=682 stage IB-IIIA EGFR-mutant NSCLC) confirming osimertinib adjuvant therapy overall survival benefit — required NCCN CE update for thoracic oncologists recommending adjuvant targeted therapy and EGFR testing protocols.",
  },
  {
    title: "LAURA Durvalumab Post-Chemoradiation Stage III NSCLC — NEJM 2024",
    description: "LAURA trial (n=216 unresectable stage III NSCLC patients) demonstrating osimertinib consolidation after chemoradiation in EGFR-mutant patients — updated NCCN and ASTRO guideline CE for thoracic oncologists managing consolidation immunotherapy and targeted therapy sequencing.",
  },
  {
    title: "CodeBreaK 200 Sotorasib vs. Docetaxel — NEJM 2023",
    description: "Phase 3 CodeBreaK 200 (n=345 KRAS G12C-mutant NSCLC) confirming sotorasib PFS benefit over docetaxel — established required CE for thoracic oncologists on KRAS G12C targeted therapy selection and combination strategy in second-line NSCLC.",
  },
  {
    title: "KEYNOTE-789 Pembrolizumab + Chemo EGFR-Mutant NSCLC — NEJM 2024",
    description: "KEYNOTE-789 (n=492 EGFR-mutant progressive NSCLC after TKI) evaluating pembrolizumab + chemotherapy — established CE for thoracic oncologists on immunotherapy-chemotherapy combinations in TKI-resistant EGFR-mutant NSCLC management.",
  },
  {
    title: "Nivolumab + Ipilimumab Perioperative NSCLC — NEJM 2024",
    description: "CheckMate 816/77T pooled perioperative nivolumab data (n=1,200+ resectable NSCLC patients) confirming neoadjuvant immunotherapy benefit — updated AATS/STS/NCCN perioperative immunotherapy CE for resectable NSCLC surgical treatment protocols.",
  },
  {
    title: "DREAM3R Pembrolizumab Mesothelioma — Lancet 2024",
    description: "DREAM3R multicenter trial (n=480 malignant pleural mesothelioma patients) evaluating nivolumab + ipilimumab versus chemotherapy as first-line treatment — required CE update for thoracic oncologists managing mesothelioma immunotherapy programs and surgical staging protocols.",
  },
]

const testimonial = {
  quote:
    "ABTS recertification STS database requirements, ABIM medical oncology MOC, WCLC abstract deadlines, robotic lobectomy credentialing at two hospitals, KRAS G12C and EGFR targeted therapy CE updates, tumor board documentation, and state license — all on separate timelines. Momenties mapped every deadline into one view. I started ABTS exam prep 14 months out instead of 6.",
  name: "Chukwuemeka B.",
  title: "MD, FACS, Thoracic Oncology Surgery Program Director",
}

export default function ThoracicOncologistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Thoracic Oncologists"
        title="ABTS Certification. Robotic Credentialing. Immunotherapy CE. One Calendar."
        subtitle="Momenties tracks ABTS board certification, STS database submission requirements, IASLC fellowship CE, robotic thoracic surgery credentialing, targeted therapy and immunotherapy guideline updates, and tumor board documentation so thoracic oncologists maintain every credential without administrative overload."
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
            Landmark Studies Shaping Thoracic Oncology Practice
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
