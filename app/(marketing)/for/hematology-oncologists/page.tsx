import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Hematology-Oncologists | Momenties",
  description: "Momenties helps hematology-oncologists manage ABIM dual MOC (hematology + medical oncology), ASH/ASCO fellowship CE, CAR-T credentialing, REMS compliance for immunotherapy agents, and state license renewals in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABIM Dual MOC — Hematology & Medical Oncology",
    description:
      "Hematology-oncologists maintain dual ABIM subspecialty MOC: separate 10-year exam cycles for hematology and medical oncology, each with independent CME requirements (20 AMA PRA Category 1 hours/year per subspecialty track), and self-assessment modules specific to each domain. Credit overlap is limited — hematology CE counts for the hematology track; oncology CE for the oncology track. Momenties maps both MOC timelines simultaneously, tracks split credit accumulation, and surfaces each exam registration window independently with 12-month advance alerts.",
  },
  {
    icon: Clock,
    title: "CAR-T Cell Therapy Credentialing & REMS Programs",
    description:
      "Commercial CAR-T therapy administration (axicabtagene ciloleucel/Yescarta, tisagenlecleucel/Kymriah, lisocabtagene maraleucel/Breyanzi, idecabtagene vicleucel/Abecma, ciltacabtagene autoleucel/Carvykti) requires REMS certification for each product through FACT accreditation and individual manufacturer REMS programs. Each REMS requires initial physician training and annual renewal. BiTE therapy REMS (blinatumomab, mosunetuzumab), ADC-specific protocols, and bispecific T-cell engager credentialing add further complexity. Momenties manages every REMS renewal cycle.",
  },
  {
    icon: BarChart3,
    title: "ASH/ASCO Annual Meeting CE & Guideline Review Cadence",
    description:
      "ASH and ASCO annual meetings are the primary CE forums — ASH December abstract submission opens in July, ASCO June meeting abstract submission opens in January, requiring 5-6 month advance planning. ASH/NCCN/ASCO practice guidelines update rolling across malignant hematology, solid tumor, and supportive care domains. Momenties schedules both conference abstract deadlines, early registration windows, and quarterly guideline review blocks for NCCN updates — ensuring practice is current with the evidence base at all times.",
  },
  {
    icon: Users,
    title: "FACT Accreditation, State License & Cellular Therapy Program CE",
    description:
      "Hematology-oncology programs participating in stem cell transplant and cellular therapy must maintain FACT accreditation (3-year cycle) with annual quality assurance reporting and physician competency documentation. JACIE/FACT required physician training CE must be refreshed before accreditation surveys. State medical license renewals (2-3 year cycles), DEA registration, and state-specific chemotherapy prescribing CE requirements complete the compliance portfolio. Momenties maps all program and individual credentialing deadlines into one unified calendar.",
  },
]

const studies = [
  {
    title: "COMMANDS Luspatercept vs. Epoetin for MDS — NEJM 2023",
    description: "Phase 3 RCT (n=356) demonstrating luspatercept superiority over epoetin alfa in transfusion-dependent lower-risk MDS with RS mutation — 58.5% vs. 31.2% RBC-TI ≥12 weeks, establishing new first-line standard and CE requirement.",
  },
  {
    title: "MONALEESA-3 CDK4/6 Inhibitor 8-Year OS — NEJM 2023",
    description: "8-year follow-up of ribociclib + fulvestrant in ER+/HER2- mBC confirming overall survival benefit maintained (OS HR 0.67) — longest CDK4/6 inhibitor OS follow-up, foundational ASCO/ESMO CE for breast oncology practice.",
  },
  {
    title: "CARTITUDE-4 Ciltacabtagene vs. Standard of Care in MM — NEJM 2024",
    description: "Phase 3 RCT (n=419) of cilta-cel vs. PVd/DPd in lenalidomide-refractory multiple myeloma — cilta-cel achieved PFS HR 0.26 (p<0.001), first phase 3 superiority data for CAR-T over standard care, reshaping MM credentialing CE.",
  },
  {
    title: "MAGNITUDE Niraparib + Abiraterone in mCRPC — NEJM 2023",
    description: "Phase 3 RCT showing niraparib + abiraterone significantly prolonged rPFS in BRCA1/2-mutated mCRPC (HR 0.53, p<0.001) — established PARP inhibitor combination as new standard and BRCA testing CE requirement.",
  },
  {
    title: "TRANSFORM Lisocabtagene Maraleucel in 2L DLBCL — Lancet 2024",
    description: "Phase 3 TRANSFORM 3-year follow-up confirming liso-cel maintained superior EFS vs. standard salvage (HR 0.35) — established 2L CAR-T as primary option over ASCT in relapsed DLBCL, updating NCCN CE and REMS credentialing requirements.",
  },
  {
    title: "ASH 2024 Hemoglobinopathy Gene Therapy Guidelines",
    description: "First ASH guidelines on exagamglogene autotemcel (exa-cel/Casgevy) and betibeglogene autotemcel (beti-cel/Zynteglo) for sickle cell disease and transfusion-dependent beta-thalassemia — required CE for all FACT-accredited cellular therapy programs.",
  },
]

const testimonial = {
  quote:
    "I have dual ABIM MOC for hematology and oncology, five active CAR-T REMS programs each with annual renewal, FACT accreditation documentation, and ASH abstract submissions every July. The administrative complexity is genuinely staggering. Momenties automated the entire compliance stack — I now spend 20 minutes per month on credential management instead of 20 hours.",
  name: "Chukwuemeka A.",
  title: "MD, PhD, FACP, Hematology-Oncology, FACT-Accredited Transplant Center",
}

export default function HematologyOncologistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Hematology-Oncologists"
        title="Dual ABIM MOC. Five CAR-T REMS. FACT Accreditation. One Calendar."
        subtitle="Momenties tracks dual ABIM hematology and oncology MOC cycles, CAR-T REMS renewals, FACT accreditation documentation, and ASH/ASCO conference deadlines so hematology-oncologists focus on patients, not compliance paperwork."
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
            Landmark Studies Shaping Hematology-Oncology Practice
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
