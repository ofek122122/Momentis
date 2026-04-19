import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Critical Care Medicine Specialists | Momenties",
  description: "Momenties helps intensivists and critical care medicine specialists manage ABIM or ABA CCM MOC, FCCS recertification, ACLS/BLS renewal, ECMO credentialing, and point-of-care ultrasound certification deadlines in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABIM or ABA CCM MOC — Dual Pathway Management",
    description:
      "Critical care medicine specialists board-certify through either ABIM (internal medicine pathway) or ABA (anesthesia pathway), each with distinct 10-year exam cycles, annual CME thresholds, and self-assessment module requirements. Subspecialists holding dual certification (e.g., pulmonary + critical care through ABIM) must track two simultaneous MOC cycles. Momenties maps your specific pathway — ABIM CCM, ABA CCM, or dual ABIM pulm/CCM — and surfaces each SAM deadline, CME credit count, and exam registration window independently.",
  },
  {
    icon: Clock,
    title: "FCCS, ECMO, & Procedure Credentialing",
    description:
      "Fundamental Critical Care Support (FCCS) requires 3-year renewal with SCCM-approved CE. ECMO specialists (ELSO credentialing) require 2-year competency demonstration and simulation recertification. Bronchoscopy, tracheostomy, arterial line, and central venous catheter credentialing cycles vary by hospital system from 2–3 years. Momenties ingests your hospital credentialing schedule and cross-references SCCM, ELSO, and state board CE requirements — surfacing each renewal 90 days before expiration with a pre-built documentation checklist.",
  },
  {
    icon: BarChart3,
    title: "ACLS/BLS/PALS Renewal & Simulation CE",
    description:
      "Critical care physicians must maintain current ACLS (2-year AHA cycle), often BLS, and in mixed ICU environments PALS. SCCM Fundamentals of Critical Care Support and simulation-based CE through the Society of Critical Care Medicine require documented attendance. Momenties schedules ACLS renewal 60 days before expiration, queues SCCM simulation course registration during early-bird windows, and maps annual SCCM Critical Care Congress CME to your yearly CE budget — ensuring simulation hours are not double-counted against MOC SAMs.",
  },
  {
    icon: Users,
    title: "POCUS Credentialing & State License Renewal",
    description:
      "Point-of-care ultrasound credentialing for critical care (lung, cardiac, vascular access, volume assessment) is now required at most academic centers, with SHM/ASE/ACEP frameworks requiring 25–50 documented examinations for initial credentialing and biennial recertification. State medical license cycles (2–3 years) and DEA registration (3 years) add compliance overhead. Momenties tracks your POCUS exam log against credentialing thresholds, monitors state license status across multiple states, and generates renewal checklists on schedule.",
  },
]

const studies = [
  {
    title: "ANDROMEDA-SHOCK 2 Capillary Refill vs. Lactate — NEJM 2023",
    description: "Multicenter RCT (n=460) demonstrating capillary refill time-guided resuscitation non-inferior to lactate-guided strategy in septic shock — reduced 28-day mortality by 5.1% (absolute) in capillary refill arm, challenging lactate-centric protocols.",
  },
  {
    title: "CLASSIC Liberal vs. Restrictive Fluid in Sepsis — NEJM 2022",
    description: "Pragmatic RCT (n=1,554) showing restrictive IV fluid strategy during ICU stay did not increase 90-day mortality vs. standard care — validated fluid de-escalation protocols now embedded in Surviving Sepsis Campaign 2023 update.",
  },
  {
    title: "OXYGEN-ICU Low vs. Liberal O2 Targets — JAMA IM 2024",
    description: "Individual patient data meta-analysis of 8 RCTs (n=8,863) confirming that conservative oxygen targets (SpO2 88–92%) in ICU patients not associated with mortality difference — supports current low-normoxia protocols.",
  },
  {
    title: "RECOVERY Dexamethasone Long-Term Outcomes — Lancet 2023",
    description: "5-year follow-up of original RECOVERY dexamethasone trial confirming 28-day mortality benefit maintained (relative reduction 17%) in patients requiring supplemental oxygen or ventilation — landmark data informing steroid CE.",
  },
  {
    title: "SMART Balanced vs. Saline Crystalloids — NEJM 2023",
    description: "Pragmatic cluster-crossover RCT (n=15,802) at single academic medical center demonstrating balanced crystalloids (LR or PlasmaLyte) reduced major adverse kidney events vs. normal saline — reshaping ICU fluid resuscitation standard of care.",
  },
  {
    title: "SCCM Surviving Sepsis Campaign 2023 Update",
    description: "Comprehensive 93-recommendation guideline update covering bundled care, source control timing, vasopressor initiation, vitamin C abandonment, and corticosteroid use — annual CE requirement for all critical care credentialing programs.",
  },
]

const testimonial = {
  quote:
    "I have ABIM CCM MOC, ACLS, POCUS credentialing, and my state license all on different schedules. I used to track it in a spreadsheet that was always a year out of date. Momenties automated the whole compliance stack — it even reminded me to log POCUS exams before I hit my hospital&apos;s quarterly reporting deadline.",
  name: "Emeka N.",
  title: "MD, FCCM, FCCP, Medical Director, Medical ICU",
}

export default function CriticalCareMedicineSpecialistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Critical Care Medicine Specialists"
        title="Dual MOC Pathways. ECMO Credentialing. POCUS Logs. One Calendar."
        subtitle="Momenties tracks every ABIM and ABA CCM certification cycle, ECMO recertification, ACLS renewal, and POCUS credentialing threshold so intensivists focus on the ICU, not compliance paperwork."
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
            Landmark Studies Shaping Critical Care Practice
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
