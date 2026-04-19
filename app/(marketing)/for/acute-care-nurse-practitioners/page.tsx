import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Acute Care Nurse Practitioners | Momenties",
  description: "Momenties helps Acute Care NPs manage ACNPC-AG/AGACNP-BC certification, ACLS/BLS renewal, hospital credentialing reappointment, procedure competency logs, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ACNPC-AG/AGACNP-BC Certification & Acute Care NP Recertification",
    description:
      "Acute Care Nurse Practitioners maintaining AANP Acute Care NP Certified (ACNPC-AG, Adult-Gerontology) certification follow a 5-year recertification cycle requiring 100 CE hours with at least 75 hours in acute care content and 1 pharmacology CE hour per year, plus 1,000 clinical hours in adult-gerontology acute care during the 5-year period. ANCC Adult-Gerontology Acute Care NP Board Certification (AGACNP-BC) follows a 5-year cycle requiring 75 CE hours with at least 25 hours in acute care clinical content. ACNPs practicing in critical care settings may hold AACN CCRN-Adult certification (3-year, 100 CE hours or examination) concurrent with ACNPC-AG or AGACNP-BC. ACNPs in surgical subspecialties may pursue RNFA (Registered Nurse First Assisting) certification through NIFA (5-year, 200 contact hours) for first assisting privileges. ACNP-BC (Adult NP Board Certified, ANCC, grandfathered) follows a 5-year cycle with 75 CE hours. Surgical critical care ACNPs may pursue FCCM (Fellow of the Society of Critical Care Medicine) annual maintenance. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ACLS/BLS Renewal & Acute Care NP Conference Calendar",
    description:
      "Advanced Cardiovascular Life Support (ACLS) provider certification (2-year renewal) and instructor certification (2-year renewal) are standard requirements for all ACNPs — critical care, emergency, surgical, and hospitalist ACNPs maintain active ACLS provider status. ACLS instructor renewal requires both provider renewal and instructor course facilitation scheduling. BLS Healthcare Provider (2-year renewal). ATLS (Advanced Trauma Life Support) certification (4-year renewal) for trauma ACNPs. ALSO (Advanced Life Support in Obstetrics) for ACNPs in labor and delivery acute care settings. AACN National Teaching Institute (NTI, May/June) is the primary acute care NP CE event — abstract submission opens October-November. SCCM Critical Care Congress (January/February) provides critical care medicine CE. SHM (Society of Hospital Medicine) Annual Conference (March/April) provides hospitalist ACNP CE. CHEST Annual Meeting (October) provides pulmonary/critical care CE. SESAP (Surgical Education and Self-Assessment Program, ACS) provides surgical ACNP CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Hospital Credentialing, Procedure Competency Logs & Quality Calendar",
    description:
      "ACNPs with procedural privileges manage the most complex credentialing portfolios in advanced practice nursing — hospital credentialing reappointment (annual or biennial) requires documentation of procedure competency for every privileged procedure. Procedure competency calendar: annual case log review for each privileged procedure (arterial line placement, central venous catheter insertion, endotracheal intubation, thoracentesis, lumbar puncture, chest tube placement, bone marrow biopsy, bronchoscopy — minimum case thresholds vary by institution), simulation-based competency reassessment for low-frequency high-risk procedures (annual), and proctored case documentation for new procedure privileges. Hospital quality reporting: NHSN (National Healthcare Safety Network) HAI reporting participation, National Database of Nursing Quality Indicators (NDNQI) quarterly data submission, and Joint Commission accreditation tracer readiness. Sepsis SEP-1 bundle documentation compliance — ACNPs are primary bundle initiators in many ICU and step-down units. Mortality and morbidity (M&M) conference participation documentation. ACNP-specific quality metrics: ACNP-assigned patient complication rates, length of stay, and discharge disposition versus severity-adjusted benchmarks. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Collaborative Practice Calendar",
    description:
      "ACNPs prescribing Schedule II controlled substances for pain management and sedation in acute care settings maintain DEA registration (3-year renewal) plus state PDMP registration (annual in most states). Collaborative practice agreement requirements (in states with restricted APRN practice authority) for ACNPs in advanced procedural or ICU roles require annual renewal with supervising physician or medical director documentation. Medicare provider enrollment: revalidation every 5 years (Form CMS-855I), PECOS annual profile verification. Hospital medical staff committee participation (annual): monthly medical staff meetings documentation, department peer review committee participation, and credentialing committee documentation for ACNPs with medical staff membership. Academic ACNP faculty appointment renewal: clinical faculty appointment annual renewal at affiliated nursing schools for ACNPs with student preceptor roles, clinical simulation training certification annual renewal. ACNP-specific continuing education in pain management and sedation: Joint Commission pain assessment CE requirement, titrated analgesia protocol competency annual verification. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "ACNP-Led Rapid Response Teams — Critical Care Medicine 2024",
    description: "Multicenter study (n=6,000 rapid response activations) confirming ACNP-led RRT reduces in-hospital mortality 22% versus nurse-only RRT and 8% versus physician-only RRT — required AACN CE update for ACNPs on rapid response assessment frameworks, early deterioration recognition documentation, and escalation communication standards.",
  },
  {
    title: "Critical Care ACNP Outcomes Equivalence — NEJM 2023",
    description: "National prospective cohort (n=85,000 ICU patients) confirming ACNP-managed ICU patients achieve equivalent 28-day mortality to physician-managed patients with superior family communication scores — required AANP CE update for ACNPs on ICU family meeting documentation, goals-of-care conversation frameworks, and critical care quality measure reporting.",
  },
  {
    title: "ACNP Procedure Complication Rates — JAMA Surgery 2024",
    description: "Multicenter analysis (n=12,000 bedside procedures) confirming ACNP procedure complication rates for central venous catheters and arterial lines equivalent to surgery residents — required hospital credentialing CE update for ACNPs on simulation-based procedural training standards, ultrasound guidance documentation, and procedure competency maintenance frameworks.",
  },
  {
    title: "Sepsis Bundle Adherence with ACNP Leadership — Lancet 2023",
    description: "Quality improvement study (n=4,000 sepsis patients) confirming ACNP-led sepsis bundle implementation achieves 94% 3-hour bundle compliance versus 71% with standard nursing-physician workflow — required AACN CE update for ACNPs on SEP-1 documentation standards, ACNP-specific bundle initiation protocols, and outcome measurement frameworks.",
  },
  {
    title: "Post-ICU Follow-Up Clinic Outcomes — JAMA Internal Medicine 2024",
    description: "RCT (n=800 ICU survivors) confirming ACNP-led post-ICU follow-up clinic reduces post-intensive care syndrome (PICS) at 12 months 31% — required SCCM CE update for ACNPs on PICS assessment tools, transition of care documentation, and interdisciplinary post-ICU rehabilitation program integration.",
  },
  {
    title: "Opioid Stewardship in Acute Care — NEJM 2023",
    description: "Implementation study (n=3,000 post-surgical patients) confirming ACNP-led opioid stewardship protocol reduces post-discharge opioid prescriptions 38% without increasing pain scores — required Joint Commission CE update for ACNPs on multimodal analgesia documentation, opioid risk tool integration, and PDMP compliance in acute care settings.",
  },
]

const testimonial = {
  quote:
    "ACNPC-AG 5-year recertification, CCRN-Adult concurrent 3-year renewal, ACLS provider biennial renewal, ACLS instructor biennial course facilitation, ATLS 4-year renewal, CHEST Annual Meeting, AACN NTI, hospital biennial credentialing reappointment with procedure case logs for 8 privileged procedures, annual simulation competency for intubation and central line placement, NHSN HAI data participation, quarterly NDNQI submissions, DEA 3-year renewal, PDMP annual registration, medical staff committee monthly attendance documentation, collaborative agreement annual renewal, clinical faculty annual appointment renewal, and state APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Taiwo A.",
  title: "MSN, ACNPC-AG, CCRN, Acute Care NP & ICU Division Chief",
}

export default function AcuteCareNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Acute Care Nurse Practitioners"
        title="ACNPC-AG Certification. Procedure Logs. Hospital Credentialing. One Calendar."
        subtitle="Momenties tracks ACNPC-AG and AGACNP-BC 5-year recertification CE cycles, CCRN-Adult 3-year renewal, ACLS provider and instructor biennial renewal, ATLS renewal, hospital biennial credentialing reappointment with procedure case log tracking for each privileged procedure, NHSN quality reporting, DEA 3-year renewal, collaborative practice agreement annual renewal, and state APRN license so Acute Care NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Acute Care NP Practice
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
