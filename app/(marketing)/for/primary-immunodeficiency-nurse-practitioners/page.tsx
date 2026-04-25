import type { Metadata } from "next"
import { Bell, ClipboardList, Stethoscope, BookOpen } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "PI Nurse Practitioners — Scheduling for Complex Immunodeficiency Management",
  description:
    "Designed for NPs coordinating primary immunodeficiency care — from infusion scheduling and IgG trough management to infection episode tracking and adolescent transition planning.",
}

const pillars = [
  {
    icon: Bell,
    title: "Infusion Coordination & Trough Monitoring",
    description:
      "Run IVIG and SCIG schedules without missed cycles: schedule pre-infusion IgG troughs in the week before each IVIG dose, build premedication checklists (acetaminophen, diphenhydramine, optional methylprednisolone for reaction-prone patients, IV hydration), and align infusion-suite slots with home-health vendor delivery windows. Momenties surfaces dose recalculations when patient weight changes, flags trough drift below 700 mg/dL, and tracks lot numbers and product brand consistency for patients prone to infusion reactions.",
  },
  {
    icon: ClipboardList,
    title: "Infection Episode Management",
    description:
      "Document every sinopulmonary infection in a structured event log linked to antibiotic course, culture results, and prophylaxis renewal cadence. Momenties counts annual sinopulmonary infection frequency against program thresholds for IgG dose escalation, prompts ENT and pulmonology re-referral when infection burden exceeds protocol triggers, and schedules sputum surveillance and bronchoalveolar lavage follow-ups for chronic Pseudomonas, Haemophilus, and nontuberculous mycobacterial colonization in CVID and antibody deficiencies.",
  },
  {
    icon: Stethoscope,
    title: "Pulmonary & Organ Surveillance",
    description:
      "Hold the line on multisystem complications: annual high-resolution chest CT, quarterly PFTs with FEV1 and DLCO trending, GI subspecialty follow-ups for CVID enteropathy and nodular lymphoid hyperplasia, hepatology review for granulomatous and lymphocytic interstitial liver disease, and dermatology checks for cutaneous granulomas and warts in CXCR4 and DOCK8 deficiencies. Momenties keeps each subspecialty cadence visible on one calendar so no organ system drifts out of surveillance.",
  },
  {
    icon: BookOpen,
    title: "Transition Care & Patient Education",
    description:
      "Build the adolescent-to-adult transition program around scheduled SCIG home-training sessions, self-administration competency checks, PIDD-specific travel counseling (immunoglobulin product transport, vaccination considerations, infection-risk planning), and joint pediatric–adult clinic visits. Momenties anchors annual readiness assessments, tracks self-management milestones, and ensures the handoff to adult immunology happens without a gap in IVIG or SCIG coverage.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Caseload Mapping & Trough Calendar",
    description:
      "Map every PI patient by replacement modality (IVIG vs. SCIG), cycle length, and current IgG trough. Build the pre-infusion trough draw cadence and tag patients with troughs below the 700 mg/dL floor for escalation review.",
  },
  {
    month: "Month 3–4",
    title: "Premedication & Reaction Protocols",
    description:
      "Standardize premedication templates for reaction-prone patients, document brand and lot tracking for tolerability, and stand up reaction-event logging linked to product changes and dose adjustments.",
  },
  {
    month: "Month 5–6",
    title: "Infection Surveillance Rollout",
    description:
      "Launch structured sinopulmonary infection logs, annual counts against escalation thresholds, prophylactic antibiotic renewal calendars, and sputum culture cadences for chronic colonization in bronchiectatic patients.",
  },
  {
    month: "Month 7–8",
    title: "Subspecialty Coordination",
    description:
      "Anchor pulmonology, ENT, GI, and hepatology follow-up cadences on the shared calendar; integrate HRCT and PFT scheduling; and build hand-off notes for granulomatous disease, enteropathy, and lymphoproliferative complications.",
  },
  {
    month: "Month 9–10",
    title: "SCIG Home Training & Travel Counseling",
    description:
      "Roll out SCIG self-administration training visits, competency checks, pump-vendor coordination, and PIDD-specific travel counseling sessions covering product transport, vaccination considerations, and emergency planning.",
  },
  {
    month: "Month 11–12",
    title: "Transition Clinic & Outcomes Review",
    description:
      "Operationalize the joint pediatric-to-adult transition clinic, finalize transfer-of-care templates, and review annual KPIs: trough achievement, infection rates, transition completion, and reaction-event trends.",
  },
]

const kpis = [
  {
    metric: "Pre-Infusion Trough Capture",
    target: "≥ 95%",
    description:
      "Percentage of IVIG cycles preceded by an in-window IgG trough draw so dose decisions are data-driven, not retrospective.",
  },
  {
    metric: "SCIG Home-Training Completion",
    target: "≤ 6 weeks to independence",
    description:
      "Time from SCIG initiation to documented self-administration competency, including pump operation, sterile technique, and reaction recognition.",
  },
  {
    metric: "Annual Sinopulmonary Infection Rate",
    target: "≤ 2 episodes/year",
    description:
      "Average number of culture-confirmed sinopulmonary infection episodes per patient per year on stable replacement therapy.",
  },
  {
    metric: "Subspecialty Follow-Up Adherence",
    target: "≥ 90%",
    description:
      "On-time completion rate for scheduled pulmonology, ENT, GI, and hepatology surveillance visits.",
  },
  {
    metric: "Transition Coverage Gap",
    target: "0 days",
    description:
      "Number of days between final pediatric infusion and first adult-clinic infusion during the adolescent transition handoff.",
  },
  {
    metric: "Travel Counseling Completion",
    target: "≥ 90% pre-travel",
    description:
      "Percentage of PI patients receiving structured PIDD travel counseling at least 4 weeks before planned international travel.",
  },
]

const testimonial = {
  quote:
    "I was running every IVIG schedule, every trough draw, and every transition checklist out of a notebook and three EHR tabs. Momenties pulled it all into one calendar. My pre-infusion trough capture rate jumped from 70% to 96% inside a quarter, and the adolescent transition handoffs stopped slipping. I finally feel like I am ahead of my caseload instead of chasing it.",
  name: "Jessica M., CPNP",
  title: "Immunology NP, Children's Hospital",
}

export default function PrimaryImmunodeficiencyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Primary Immunodeficiency Nurse Practitioners"
        title="PI Nurse Practitioners — Scheduling for Complex Immunodeficiency Management"
        subtitle="Designed for NPs coordinating primary immunodeficiency care — from infusion scheduling and IgG trough management to infection episode tracking and adolescent transition planning."
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
            Four Pillars of the PI Nurse Practitioner Workflow
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

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Your 12-Month PI NP Roadmap
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {timeline.map((t, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: 24,
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  alignItems: "start",
                }}
              >
                <span style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.9rem", paddingTop: 2 }}>
                  {t.month}
                </span>
                <div>
                  <p style={{ color: "#f0ece3", fontWeight: 600, marginBottom: 6 }}>{t.title}</p>
                  <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
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
            KPIs That Define a High-Performing PI NP Practice
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#0a0a0d",
                  border: "1px solid rgba(197,163,92,0.2)",
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1.1rem", marginBottom: 4 }}>
                  {k.target}
                </p>
                <p style={{ color: "#f0ece3", fontWeight: 600, marginBottom: 8 }}>{k.metric}</p>
                <p style={{ color: "rgba(240,236,227,0.6)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  {k.description}
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
