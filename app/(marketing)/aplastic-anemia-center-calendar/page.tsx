import type { Metadata } from "next"
import { Stethoscope, Heart, UserCheck, Shield } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Aplastic Anemia Center — Appointment & Care Coordination Calendar",
  description:
    "A comprehensive scheduling system for aplastic anemia centers covering bone marrow failure workups, immunosuppressive therapy monitoring, hematopoietic stem cell transplant coordination, and blood count surveillance programs.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Diagnostic Workup Scheduling",
    description:
      "Coordinate the multi-step bone marrow failure workup with precision: bone marrow aspirate and biopsy with cytogenetics, flow cytometry for PNH clones, telomere length testing, chromosome breakage analysis for Fanconi anemia, and HLA typing for transplant candidates. Momenties sequences each test in the right order, books pathology review slots, and surfaces results to clinicians within target turnaround windows so therapy decisions are not delayed by missing data.",
  },
  {
    icon: Heart,
    title: "Immunosuppressive Therapy Management",
    description:
      "Schedule and track horse ATG infusion protocols across the standard 4-day inpatient course, with premedication, daily CBC monitoring, and serum sickness surveillance built into the calendar. Cyclosporine initiation and trough-level monitoring are queued at protocol-defined intervals (typically days 7, 14, 28, then monthly), and the system flags renal function checks, magnesium repletion, and dose-adjustment decision points before each clinic visit.",
  },
  {
    icon: UserCheck,
    title: "Transplant Coordination & Follow-up",
    description:
      "Manage the full HSCT pathway for matched sibling and matched unrelated donor candidates: HLA workup, cardiac and pulmonary clearance, infectious disease panels, donor search timelines, conditioning regimen scheduling, and post-transplant day +30, +60, +100, +180, and +365 milestone visits. Momenties keeps the BMT team, primary hematologist, and outpatient coordinators aligned on engraftment monitoring, GVHD surveillance, and immunosuppression taper checkpoints.",
  },
  {
    icon: Shield,
    title: "Supportive Care & Surveillance",
    description:
      "Build recurring schedules for transfusion support (packed red cells, platelets with HLA-matched products when needed), iron chelation for chronic transfusion patients, growth factor administration, infection prophylaxis renewals, and long-term clonal evolution surveillance with annual bone marrow biopsies. Momenties prevents transfusion gaps, tracks ferritin trends, and reminds clinicians when MDS/PNH evolution screening is due.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnostic Foundation",
    description:
      "Configure intake pathways for new aplastic anemia referrals, build templates for bone marrow biopsy, PNH flow, and chromosome breakage panels, and define severity-classification decision points (severe vs. very severe vs. non-severe AA).",
  },
  {
    month: "Month 3–4",
    title: "IST Protocol Rollout",
    description:
      "Launch horse ATG inpatient scheduling templates, cyclosporine monitoring cadence, and serum sickness day 7–14 follow-up workflows. Establish eltrombopag co-administration protocols and platelet response tracking.",
  },
  {
    month: "Month 5–6",
    title: "Transplant Pathway Integration",
    description:
      "Integrate HLA typing and donor search milestones, cardiac/pulmonary clearance bookings, and conditioning regimen calendars. Coordinate with BMT center on transfer-of-care handoffs and pre-transplant comorbidity workups.",
  },
  {
    month: "Month 7–8",
    title: "Response Assessment & Refractory Pathways",
    description:
      "Implement 3-month and 6-month IST response assessments, refractory disease decision trees (second IST course vs. transplant vs. eltrombopag intensification), and trial enrollment screening windows.",
  },
  {
    month: "Month 9–10",
    title: "Long-Term Surveillance Programs",
    description:
      "Roll out annual bone marrow surveillance for clonal evolution, MDS/AML screening cadences, secondary malignancy monitoring, and iron overload management for chronically transfused patients.",
  },
  {
    month: "Month 11–12",
    title: "Quality Review & Outcomes Reporting",
    description:
      "Aggregate response rates, time-to-treatment metrics, transfusion independence data, and transplant outcomes. Present annual center performance against CIBMTR benchmarks and refine protocols for the next cohort year.",
  },
]

const kpis = [
  {
    metric: "Time to IST Initiation",
    target: "≤ 14 days from diagnosis",
    description:
      "Days from confirmed severe AA diagnosis to first horse ATG dose — early treatment correlates with superior hematologic response.",
  },
  {
    metric: "Cyclosporine Trough Compliance",
    target: "≥ 90% in target range",
    description:
      "Percentage of monthly trough levels within 200–400 ng/mL therapeutic window during the 6-month induction period.",
  },
  {
    metric: "6-Month Hematologic Response",
    target: "≥ 65%",
    description:
      "Partial or complete response rate to first-line horse ATG plus cyclosporine, benchmarked against published 60–70% standard.",
  },
  {
    metric: "Transplant Workup Cycle Time",
    target: "≤ 30 days",
    description:
      "Days from transplant decision to completion of full HSCT workup (HLA, cardiac, pulmonary, infectious disease, donor search initiated).",
  },
  {
    metric: "Transfusion Independence Rate",
    target: "≥ 70% at 12 months",
    description:
      "Patients free from RBC and platelet transfusion requirements one year after IST or transplant.",
  },
  {
    metric: "Annual Surveillance Completion",
    target: "≥ 95%",
    description:
      "Percentage of long-term responders completing scheduled annual bone marrow biopsy for clonal evolution screening.",
  },
]

const testimonial = {
  quote:
    "Aplastic anemia care is unforgiving — miss a cyclosporine trough or a serum sickness window and the patient pays for it. Momenties gave our center a single calendar that holds the whole pathway together, from biopsy to day +365 post-transplant. Our time-to-treatment dropped under two weeks and the team finally feels like the schedule is working with us instead of against us.",
  name: "Dr. Rajesh M.",
  title: "Director, Bone Marrow Failure Program",
}

export default function AplasticAnemiaCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Aplastic Anemia Center Calendar"
        title="Coordinate Every Step of Bone Marrow Failure Care"
        subtitle="A scheduling system built for aplastic anemia centers — from diagnostic workups and IST protocols to transplant milestones and lifelong surveillance."
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
            Four Pillars of Aplastic Anemia Care Coordination
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
            Your 12-Month Aplastic Anemia Center Roadmap
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
            KPIs That Define a High-Performing AA Center
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
