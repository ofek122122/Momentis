import type { Metadata } from "next"
import { ClipboardList, Bell, Workflow, Award } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Aplastic Anemia NPs — Scheduling System Built for Bone Marrow Failure Care",
  description:
    "Purpose-built scheduling for NPs managing aplastic anemia patients — from initial diagnosis workups and immunosuppression protocols to long-term transplant follow-up and late effects monitoring.",
}

const pillars = [
  {
    icon: ClipboardList,
    title: "Diagnosis & Workup Coordination",
    description:
      "NPs are often the first clinician to see a new pancytopenia referral. Momenties helps you sequence the diagnostic workup the way attendings expect to see it: bone marrow aspirate and biopsy with cytogenetics, PNH flow cytometry, chromosome breakage for Fanconi screening, telomere length, vitamin and viral panels, and HLA typing for likely transplant candidates. Each test is queued with appropriate prep instructions, results are surfaced before your follow-up clinic, and severity classification (severe / very severe / non-severe AA) is captured so the treatment decision visit is fully prepared.",
  },
  {
    icon: Bell,
    title: "Immunosuppression Protocol Management",
    description:
      "Run horse ATG infusions and cyclosporine cycles without juggling sticky notes: daily inpatient CBC and vitals reminders during the 4-day ATG course, premedication scheduling, serum sickness check-ins at days 7–14, cyclosporine trough draws at protocol intervals, and renal function and magnesium monitoring before every dose adjustment. Eltrombopag titration, gout prophylaxis, and infection surveillance all live alongside your clinic templates so nothing slips through between attending visits.",
  },
  {
    icon: Workflow,
    title: "Transplant Care Pathway",
    description:
      "Whether you co-manage transplant candidates or handle pre- and post-HSCT follow-up, Momenties keeps you synchronized with the BMT team. Pre-transplant clearance milestones, donor workup timelines, conditioning admission dates, day +30, +60, +100, +180, +365 visits, and tacrolimus or cyclosporine GVHD prophylaxis monitoring are all on a shared calendar. Engraftment checks, viral reactivation screening (CMV, EBV, BK), and immunosuppression taper checkpoints are queued so you walk into every visit knowing exactly what is due.",
  },
  {
    icon: Award,
    title: "Long-Term Survivorship",
    description:
      "Aplastic anemia survivors live with real risks: clonal evolution to MDS or AML, secondary solid tumors, iron overload, endocrine late effects after transplant. Momenties builds your survivorship calendar — annual surveillance bone marrow biopsies, ferritin and MRI T2* iron monitoring, dermatology and dental for transplant survivors, fertility and bone density follow-up — and reminds you when each cohort milestone is due so survivorship care does not drift over the years.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Onboarding & Workup Templates",
    description:
      "Build your new-referral intake template, configure pancytopenia workup checklists, and set defaults for bone marrow biopsy follow-up windows and pathology review timelines.",
  },
  {
    month: "Month 3–4",
    title: "IST Patient Panel Setup",
    description:
      "Load active IST patients into Momenties, set cyclosporine trough cadences, ATG day +7 and +14 serum sickness checks, and CBC schedules. Configure eltrombopag titration reminders and platelet response tracking.",
  },
  {
    month: "Month 5–6",
    title: "Response Assessment Workflows",
    description:
      "Implement 3-month and 6-month IST response assessments with built-in CBC trends review, transfusion-need calculations, and prompts to escalate refractory cases for transplant or trial discussion with the attending.",
  },
  {
    month: "Month 7–8",
    title: "Transplant Co-Management Integration",
    description:
      "Sync with the BMT team on shared post-transplant patients, configure day +30 / +60 / +100 visit templates, and build viral reactivation and GVHD surveillance schedules into your weekly clinic.",
  },
  {
    month: "Month 9–10",
    title: "Survivorship & Late Effects",
    description:
      "Launch survivorship clinic templates: annual bone marrow biopsy reminders, iron overload monitoring for chronically transfused patients, and post-transplant late effects screening (endocrine, cardiac, dermatologic, fertility).",
  },
  {
    month: "Month 11–12",
    title: "Outcomes Review & Panel Optimization",
    description:
      "Review your panel-level data — response rates, transfusion independence, surveillance compliance — and refine templates and reminder cadences for the next year of care.",
  },
]

const kpis = [
  {
    metric: "Cyclosporine Trough Adherence",
    target: "≥ 92%",
    description:
      "Percentage of scheduled trough draws completed on time across your IST patient panel.",
  },
  {
    metric: "Serum Sickness Surveillance",
    target: "100% day 7–14 contact",
    description:
      "Every horse ATG patient reached for serum sickness assessment within the protocol window — a non-negotiable safety check.",
  },
  {
    metric: "Eltrombopag Dose Optimization",
    target: "≤ 14 days to target dose",
    description:
      "Median time from initiation to maximum tolerated dose with appropriate LFT and platelet monitoring.",
  },
  {
    metric: "Post-Transplant Visit Compliance",
    target: "≥ 95% on-schedule",
    description:
      "Day +30, +60, +100, +180, and +365 visits completed within their protocol-defined windows.",
  },
  {
    metric: "Annual Surveillance Bone Marrow",
    target: "≥ 90%",
    description:
      "Long-term IST responders on your panel completing scheduled annual surveillance biopsies for clonal evolution.",
  },
  {
    metric: "Transfusion-Free Days",
    target: "Track & grow per patient",
    description:
      "Running count of days each patient has been free from RBC or platelet transfusion — a tangible response metric for patient-facing conversations.",
  },
]

const testimonial = {
  quote:
    "Before Momenties, I was running an aplastic anemia panel out of three different spreadsheets and a wall of sticky notes. Cyclosporine troughs, ATG follow-ups, day +100 visits — I was terrified of missing something. Now every patient on my panel has a calendar that thinks ahead of me. I have not missed a serum sickness check or a surveillance biopsy in over a year.",
  name: "Hannah B., MSN, FNP-C",
  title: "Nurse Practitioner, Bone Marrow Failure Clinic",
}

export default function AplasticAnemiaNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Aplastic Anemia Nurse Practitioners"
        title="A Scheduling System Built Around the Way You Actually Practice"
        subtitle="From the first pancytopenia referral to year-ten survivorship — Momenties keeps your IST protocols, transplant follow-ups, and surveillance bone marrows on a calendar that thinks like an NP."
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
            Four Workflows That Reflect How AA NPs Practice
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
            Your 12-Month NP Practice Roadmap
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
            KPIs That Show Up in Your Patient Outcomes
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
