import type { Metadata } from "next"
import { Shield, Stethoscope, Database, UserCheck } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Primary Immunodeficiency Center — Infusion, Monitoring & Care Calendar",
  description:
    "Systematic scheduling for PI centers — IVIG/SCIG infusion cycles, immunoglobulin level monitoring, infection complication tracking, genetic counseling coordination, and transition programs for adolescent patients.",
}

const pillars = [
  {
    icon: Shield,
    title: "Immunoglobulin Replacement Scheduling",
    description:
      "Coordinate IVIG infusions on a 3-to-4 week cadence and SCIG self-administration on weekly or biweekly schedules with infusion-suite calendars, premedication protocols (acetaminophen, diphenhydramine, IV hydration), and dose calculations indexed to lean body weight. Momenties surfaces IgG trough draws scheduled the week before each IVIG cycle (target trough greater than 700 mg/dL, often 800–1,000 mg/dL for CVID with bronchiectasis), flags missed doses, and builds reminder workflows for product lot tracking and home-health vendor coordination.",
  },
  {
    icon: Stethoscope,
    title: "Infection Surveillance & Complication Management",
    description:
      "Build recurring schedules for sinopulmonary infection tracking, sputum and bronchoalveolar lavage cultures, annual high-resolution chest CT for bronchiectasis surveillance, and quarterly pulmonary function testing with FEV1 and DLCO trending. Momenties links each infection episode to antibiotic course, prophylaxis renewal (azithromycin, TMP-SMX), and ENT/pulmonology consult cadence so chronic complications in CVID, hyper-IgM, and antibody deficiencies are caught early rather than discovered at acute presentations.",
  },
  {
    icon: Database,
    title: "Genetic Diagnosis & Counseling",
    description:
      "Sequence the diagnostic workup across CVID, XLA, SCID, hyper-IgE, CGD, and combined immunodeficiency phenotypes: quantitative immunoglobulins, vaccine response titers, lymphocyte subset flow cytometry, T-cell receptor excision circle (TREC) confirmation, and targeted next-generation sequencing panels. Momenties books genetic counseling slots before and after testing, sequences family-member cascade screening, and coordinates SCID newborn screening follow-up so the window for hematopoietic stem cell transplant before infectious complications is preserved.",
  },
  {
    icon: UserCheck,
    title: "Transition & Long-Term Care",
    description:
      "Run structured transition programs for adolescents moving from pediatric immunology to adult PI care, with annual immune reconstitution assessments, quality-of-life questionnaires, and self-management readiness checklists. Momenties schedules joint pediatric–adult clinic visits, anchors annual lymphoma surveillance for CVID, tracks lifetime cumulative IVIG exposure, and builds long-term follow-up calendars for post-HSCT SCID survivors monitoring graft function, immune recovery, and late effects.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Intake & Diagnostic Pathways",
    description:
      "Configure referral templates for suspected PI: quantitative IgG/IgA/IgM/IgE, lymphocyte subsets, vaccine titer panels, and SCID newborn screening confirmation pathways. Define decision points separating CVID, XLA, hyper-IgM, and SCID workflows.",
  },
  {
    month: "Month 3–4",
    title: "IVIG/SCIG Infusion Program Build",
    description:
      "Stand up IVIG infusion-suite scheduling with premedication protocols, IgG trough draws timed to the pre-infusion window, and SCIG home-training onboarding sessions with nursing observation visits and pump-vendor coordination.",
  },
  {
    month: "Month 5–6",
    title: "Pulmonary & Infection Surveillance",
    description:
      "Roll out HRCT bronchiectasis screening cadence, quarterly PFTs, and structured infection-event logging. Integrate ENT, pulmonology, and GI subspecialty calendars for CVID enteropathy and granulomatous disease workups.",
  },
  {
    month: "Month 7–8",
    title: "Genetic Counseling & Cascade Testing",
    description:
      "Embed genetic counselors into the diagnostic pathway, schedule pre- and post-test counseling appointments, and build cascade-screening calendars for at-risk family members in XLA, CGD, and hyper-IgM kindreds.",
  },
  {
    month: "Month 9–10",
    title: "HSCT Coordination for SCID & Severe CID",
    description:
      "Coordinate HSCT workups for SCID and severe combined immunodeficiency referrals: HLA typing, conditioning regimen scheduling, and post-transplant day +30, +100, +180, and +365 immune reconstitution milestone visits with the BMT center.",
  },
  {
    month: "Month 11–12",
    title: "Adolescent Transition & Outcomes Review",
    description:
      "Launch the adolescent-to-adult transition clinic, annual lymphoma and autoimmunity surveillance for CVID, and aggregate yearly outcomes — IgG trough achievement, infection rates, transition completion — for program review and protocol refinement.",
  },
]

const kpis = [
  {
    metric: "IgG Trough Achievement",
    target: "≥ 90% above 700 mg/dL",
    description:
      "Percentage of pre-infusion IgG troughs meeting the minimum protective threshold; CVID with bronchiectasis often targets 800–1,000 mg/dL.",
  },
  {
    metric: "IVIG/SCIG Cycle Adherence",
    target: "≥ 95%",
    description:
      "On-time completion of scheduled IVIG (every 3–4 weeks) and SCIG (weekly/biweekly) doses without unplanned gaps greater than 7 days.",
  },
  {
    metric: "Annual Bronchiectasis Surveillance",
    target: "≥ 95%",
    description:
      "Percentage of CVID and antibody-deficient patients completing scheduled HRCT and PFT surveillance per program protocol.",
  },
  {
    metric: "Time to SCID HSCT",
    target: "≤ 3.5 months from diagnosis",
    description:
      "Days from confirmed SCID diagnosis (TREC-positive newborn screen confirmed) to hematopoietic stem cell transplant — earlier transplant correlates with greater than 90% survival.",
  },
  {
    metric: "Genetic Diagnosis Yield",
    target: "≥ 40%",
    description:
      "Percentage of clinically diagnosed PI patients receiving a confirmed monogenic diagnosis through targeted NGS or whole-exome sequencing.",
  },
  {
    metric: "Transition Completion Rate",
    target: "≥ 85%",
    description:
      "Percentage of adolescent PI patients completing structured transition to adult immunology care without a gap in IVIG/SCIG coverage.",
  },
]

const testimonial = {
  quote:
    "Primary immunodeficiency care is a marathon — IVIG troughs every cycle, HRCTs every year, vaccine titers, genetic counseling, and a transition program that has to start in middle school. Momenties is the first scheduling tool that holds all of that together. Our trough achievement crossed 92% within six months and we stopped losing adolescents in the handoff to adult care.",
  name: "Dr. A. Fitzgerald",
  title: "Medical Director, Primary Immunodeficiency Center",
}

export default function PrimaryImmunodeficiencyCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Primary Immunodeficiency Center Calendar"
        title="Primary Immunodeficiency Center — Infusion, Monitoring & Care Calendar"
        subtitle="Systematic scheduling for PI centers — IVIG/SCIG infusion cycles, immunoglobulin level monitoring, infection complication tracking, genetic counseling coordination, and transition programs for adolescent patients."
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
            Four Pillars of Primary Immunodeficiency Care Coordination
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
            Your 12-Month PI Center Roadmap
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
            KPIs That Define a High-Performing PI Center
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
