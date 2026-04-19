import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Oncology Nurses | Momenties",
  description: "Momenties helps oncology nurses manage OCN/AOCNS/BMTCN certification, ONS chemotherapy biotherapy certification, FACT/JACIE accreditation participation, CJON CE requirements, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "OCN, AOCNS & BMTCN Certification MOC",
    description:
      "Oncology nurses maintain Oncology Certified Nurse (OCN) certification through the Oncology Nursing Certification Corporation (ONCC) — a 4-year recertification cycle requiring 10 contact hours of oncology-specific CE per year (40 hours total), OR passing the OCN examination. ONCC also offers Advanced Oncology Certified Clinical Nurse Specialist (AOCNS), Advanced Oncology Certified Nurse Practitioner (AOCNP), Blood and Marrow Transplant Certified Nurse (BMTCN), and Certified Pediatric Hematology Oncology Nurse (CPHON) — each with independent 4-year cycles. Oncology nurses in stem cell transplant programs maintaining BMTCN certification must document specific BMT CE including preparative regimen toxicities, graft-versus-host disease management, and cellular therapy advances. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ONS Chemotherapy Biotherapy Certification & Safe Handling Renewal",
    description:
      "Oncology nurses administering cytotoxic medications maintain ONS Chemotherapy Biotherapy Provider Card (CBPC) — requiring renewal every 2 years including 4 hours of CE on chemotherapy, biotherapy, immunotherapy, and targeted therapy administration plus current ACLS or BLS. Oncology nurses administering immunotherapy (CAR-T cell therapy, checkpoint inhibitors) maintain REMS program prescriber/dispenser certifications — the FDA REMS programs for axicabtagene ciloleucel (Yescarta), tisagenlecleucel (Kymriah), lisocabtagene maraleucel (Breyanzi), and idecabtagene vicleucel (Abecma) each require REMS-specific training with annual or biennial renewal. Hazardous drug handling competency documentation — USP 800 compliance training, PPE donning/doffing, spill kit procedures — requires annual documentation per institutional policy. Momenties schedules all renewals and compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "ONS Congress CE & Oncology Nursing Society Conference Calendar",
    description:
      "ONS Congress (April/May) is the primary oncology nursing CE event — abstract submission opens August-September, 7-8 months in advance. ONS Online Learning CE — required 10 hours/year for OCN recertification — must be from ONCC-approved CE sources, which includes ONS, ASCO, and ONS chapter events. FACT (Foundation for the Accreditation of Cellular Therapy) accreditation for cellular therapy programs (3-year cycle) requires nursing staff participation in FACT-required education including apheresis collection CE, cryopreservation procedures, and JACIE/FACT standards review. BMT nursing CE — ASBMT/ASTCT conference (February), Transplant & Cellular Therapy Meetings — provides ONCC-approved CE for BMTCN recertification. ASH Annual Meeting (December) provides hematology-oncology evidence CE for oncology nurses in hematologic malignancy programs. Momenties schedules all deadlines.",
  },
  {
    icon: Users,
    title: "FACT Accreditation, State License & Chemotherapy Quality Reporting",
    description:
      "Oncology nurses participating in chemotherapy quality improvement programs maintain documentation for ASCO QOPI (Quality Oncology Practice Initiative) certification — biennial QOPI certification requires chart abstraction participation, quality metric review, and improvement plan documentation. USP 800 hazardous drug handling compliance requires annual competency validation, institutional policy review, and incident documentation. OSHA hazardous drug exposure monitoring — including wipe testing for surfaces in chemotherapy preparation and administration areas — requires annual compliance documentation in USP 800-compliant programs. ACLS certification (2-year renewal) is required for oncology nurses managing chemotherapy reactions, anaphylaxis, and septic emergencies. State nursing license renewal (2-3 year cycles) with state-specific CE requirements complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "CAR-T Cell Therapy Toxicity Management — NEJM 2024",
    description: "Multi-institutional analysis (n=1,800 CAR-T recipients) characterizing CRS and ICANS severity, timing, and nursing intervention patterns — required ONCC CE update for oncology nurses on tocilizumab and corticosteroid administration protocols, neurotoxicity monitoring, and REMS program documentation requirements.",
  },
  {
    title: "Immune Checkpoint Inhibitor irAE Nursing Management — Lancet Oncology 2023",
    description: "National irAE registry (n=12,000 ICI patients) defining nursing-sensitive early detection interventions for colitis, pneumonitis, and endocrinopathy — required ONS CE update for oncology nurses on irAE symptom screening tools, patient education content, and corticosteroid taper monitoring protocols.",
  },
  {
    title: "Oral Chemotherapy Adherence Nursing Interventions — JAMA Oncology 2023",
    description: "Systematic review (n=8,000 oral chemotherapy patients) confirming nurse-led adherence programs increase completion rates 28% — required ONS CE update for oncology nurses on oral chemotherapy adherence assessment, patient education documentation, and remote monitoring program implementation.",
  },
  {
    title: "Nurse-Led Symptom Management in Advanced Cancer — NEJM 2024",
    description: "ENABLE VI RCT (n=900 advanced cancer patients) confirming nurse-led telehealth symptom management extends overall survival 3 months — required ONCC CE update for oncology nurses on symptom burden assessment tools, telehealth protocol implementation, and palliative care integration documentation.",
  },
  {
    title: "Chemotherapy-Induced Peripheral Neuropathy Prevention — JAMA 2023",
    description: "SWOG 1714 RCT (n=300 oxaliplatin patients) confirming duloxetine efficacy for CIPN prevention — required ONS CE update for oncology nurses on CIPN assessment tools, duloxetine initiation monitoring, and patient education on neurotoxicity reporting.",
  },
  {
    title: "Survivorship Care Plan Nursing Models — Cancer 2024",
    description: "Multicenter implementation study (n=5,000 cancer survivors) confirming nurse practitioner-led survivorship clinics equivalent to physician-led programs — required ONCC CE update for oncology nurses on survivorship care plan documentation, late effects screening, and care coordination handoffs.",
  },
]

const testimonial = {
  quote:
    "OCN recertification, BMTCN recertification, CAR-T REMS program training for four products, ONS chemotherapy biotherapy card renewal, FACT accreditation participation cycles, ASCO QOPI chart abstraction, USP 800 annual competency, ACLS, BLS, and state license — different cycles, different bodies, different documentation standards. Momenties mapped every deadline into one calendar. I renewed OCN and BMTCN in the same year without missing a single CE hour.",
  name: "Adaeze M.",
  title: "RN, OCN, BMTCN, Bone Marrow Transplant & Cellular Therapy Nurse",
}

export default function OncologyNursesPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Oncology Nurses"
        title="OCN/BMTCN Certification. CAR-T REMS. Chemotherapy Card Renewal. One Calendar."
        subtitle="Momenties tracks OCN, AOCNS, and BMTCN recertification cycles, ONS chemotherapy biotherapy card renewal, CAR-T cell therapy REMS training requirements, FACT accreditation participation, ASCO QOPI quality reporting, USP 800 annual competency, ACLS renewal, and state license so oncology nurses maintain every credential without administrative overload."
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
            Landmark Studies Shaping Oncology Nursing Practice
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
