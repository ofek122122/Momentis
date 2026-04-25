import type { Metadata } from "next"
import { UserCheck, Shield, BarChart3, Search } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "HCL Nurse Practitioners — Scheduling for a Rare but Curable Leukemia | Momentis",
  description:
    "Purpose-built for NPs coordinating hairy cell leukemia care — from cladribine infusion logistics and infection monitoring to long-term MRD surveillance and relapse detection.",
}

const pillars = [
  {
    icon: UserCheck,
    title: "Treatment Coordination & Infusion Logistics",
    description:
      "Own the operational hand-off that gets a newly diagnosed HCL patient from clinic to a successful 7-day continuous cladribine infusion. Confirm central line placement, infusion pump programming, hydration plan, and pre-medication orders. Build pentostatin every-2-week cycle calendars with renal function checks before each dose. Track admission, discharge, and follow-up visits in one view so the patient, the infusion suite, and the on-call hematologist are never out of sync. Patient education on profound immunosuppression — what's normal, what triggers a call — is locked into the same workflow.",
  },
  {
    icon: Shield,
    title: "Infection Monitoring & Prophylaxis",
    description:
      "Cladribine drives a deep CD4 nadir that can persist 6–12 months. As the NP, run the prophylaxis schedule: PCP coverage (TMP-SMX or atovaquone) starting Day 1, antifungal coverage during the neutropenic period, HSV/VZV suppression, and CMV PCR surveillance for high-risk patients. Track CBC recovery — ANC, ALC, and absolute CD4 count — with calendar-based check-ins until immune reconstitution. Hold all live vaccines until CD4 >200 and document the criteria for stopping each prophylactic agent so nothing gets stopped too early or run too long.",
  },
  {
    icon: BarChart3,
    title: "Response Assessment & MRD Tracking",
    description:
      "Coordinate the bone marrow biopsy at 4–6 months post-treatment with hematopathology, the procedure suite, and the patient. Sequence high-sensitivity flow cytometry MRD at 6, 12, and 24 months. Translate complete response, CR with MRD negativity, partial response, and non-response into the patient-facing language families actually understand. Educate on the realistic expectation of very long remissions — often 10+ years after a single cladribine cycle — without minimizing the need for lifelong follow-up. Tie every response category to the next-due appointment so no patient drifts.",
  },
  {
    icon: Search,
    title: "Relapse Detection & Second-Line Planning",
    description:
      "Be the first to catch relapse — cytopenia, splenomegaly, or new constitutional symptoms in a patient years out from treatment. Run the structured re-evaluation: CBC + smear, peripheral flow, BRAF V600E re-confirmation, and bone marrow biopsy when indicated. Coordinate second-line decisions with the hematologist: pentostatin re-treatment, cladribine + rituximab, vemurafenib for BRAF V600E-positive disease, or moxetumomab pasudotox. Pre-build the REMS, dermatology, and capillary leak monitoring calendars so a salvage decision triggers a complete schedule the same day.",
  },
]

const timeline = [
  {
    month: "Month 1-2",
    title: "Workup, Education & Pre-Treatment Coordination",
    description:
      "Walk the patient through diagnosis, peripheral flow interpretation, BRAF V600E testing, baseline imaging, and infectious workup. Schedule the central line, the cladribine infusion start date, prophylaxis prescriptions, and the first post-cycle clinic visit. Set realistic expectations for the count nadir, infection precautions, and what 'curable' actually means for HCL.",
  },
  {
    month: "Month 3-4",
    title: "Cladribine Cycle & Daily Nadir Management",
    description:
      "Run daily CBC, electrolyte, and creatinine reviews during the 7-day infusion. Triage febrile neutropenia per the program protocol. Initiate PCP, antifungal, and HSV/VZV prophylaxis on Day 1 and document the criteria for stopping each. Schedule the first post-cycle clinic visit at the expected ANC nadir window so the patient is seen at the most fragile point.",
  },
  {
    month: "Month 5-6",
    title: "Response Bone Marrow & MRD Education",
    description:
      "Coordinate the 4–6 month post-treatment bone marrow biopsy. Pre-brief the patient on what MRD-by-flow does and does not mean. Translate the response category — CR, CR-MRD-negative, PR, or non-response — into the patient-facing plan. Update the survivorship summary and the next-due dates for surveillance.",
  },
  {
    month: "Month 7-8",
    title: "Immune Reconstitution & Prophylaxis Wind-Down",
    description:
      "Track CD4 recovery toward >200 cells/µL before stepping down PCP prophylaxis. Re-schedule routine vaccinations (no live vaccines until reconstitution). Address fatigue, sexual health, fertility, and return-to-work questions that families often hold until they feel safe asking.",
  },
  {
    month: "Month 9-10",
    title: "Relapse Vigilance & Salvage Pathway Familiarity",
    description:
      "Even with 12-month CR, build the patient's mental model for what relapse looks like: new fatigue, easy bruising, unexplained infection, or splenomegaly. Walk through second-line options at a high level — pentostatin, cladribine + rituximab, vemurafenib, moxetumomab — so a future relapse conversation isn't a cold start. Confirm dermatology and primary-care touchpoints are scheduled.",
  },
  {
    month: "Month 11-12",
    title: "Annual Review & Lifelong Surveillance Hand-Off",
    description:
      "Run the year-one review: CBC + smear, exam for splenomegaly and adenopathy, MRD-by-flow if indicated, and a second-malignancy review. Confirm the long-term surveillance lane — annual CBC, exam, dermatology — is locked into the calendar for years to come. Update the patient-shared document so the patient owns their own monitoring schedule alongside the program.",
  },
]

const kpis = [
  {
    metric: "100%",
    target: "Day-1 Prophylaxis Initiation",
    description:
      "PCP, antifungal, and HSV/VZV prophylaxis ordered and started on Day 1 of cladribine for every patient.",
  },
  {
    metric: "<48 hr",
    target: "Febrile Neutropenia Triage Time",
    description:
      "From patient call to NP-led triage decision during the cladribine nadir window.",
  },
  {
    metric: "≥95%",
    target: "On-Time 4–6 Month Bone Marrow Biopsy",
    description:
      "Response-assessment biopsies scheduled within the program's response window.",
  },
  {
    metric: "100%",
    target: "CD4-Based Prophylaxis Step-Down",
    description:
      "Every prophylactic agent stopped on documented CD4 recovery — not on calendar drift.",
  },
  {
    metric: "100%",
    target: "Annual Surveillance Adherence",
    description:
      "All HCL survivors with annual CBC, smear, and clinical exam booked at hand-off.",
  },
  {
    metric: "≥90%",
    target: "Patient-Reported Confidence in Plan",
    description:
      "Survey-based confidence that the patient understands their treatment, prophylaxis, and surveillance schedule.",
  },
]

const testimonial = {
  quote:
    "HCL is one of the most rewarding diseases I take care of — patients often hear 'curable' for the first time and the relief in the room is real. But the work behind that word is huge: a 7-day continuous infusion, a profound CD4 nadir, prophylaxis that has to start on Day 1 and stop at the right CD4, a 4–6 month bone marrow that has to actually happen, and surveillance that runs for decades. Momentis is the first calendar that holds all of it for me. I stopped losing track of MRD windows, prophylaxis step-downs, and the patient who is now nine years out and still needs an annual CBC.",
  name: "Sarah K., NP-C",
  title: "Hematology NP, Academic Cancer Center",
}

export default function HairyCellLeukemiaNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Hairy Cell Leukemia Nurse Practitioners"
        title="HCL Nurse Practitioners — Scheduling for a Rare but Curable Leukemia"
        subtitle="Purpose-built for NPs coordinating hairy cell leukemia care — from cladribine infusion logistics and infection monitoring to long-term MRD surveillance and relapse detection."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem,3vw,2.2rem)",
              fontFamily: "Playfair Display, serif",
              marginBottom: 48,
              color: "#f0ece3",
            }}
          >
            Four Pillars of the HCL Nurse Practitioner Workflow
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 28,
            }}
          >
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    color: "#f0ece3",
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#a0998e", lineHeight: 1.65 }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ background: "#0a0a0d", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                fontFamily: "Playfair Display, serif",
                marginBottom: 12,
                color: "#f0ece3",
              }}
            >
              The HCL NP Year — From Diagnosis Education to Lifelong Surveillance
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "#a0998e",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Six two-month phases that mirror how an HCL nurse practitioner actually carries a patient through year one — and sets up the next twenty.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => (
                <div
                  key={item.month}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    gap: 24,
                    background: "#131318",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14,
                    padding: "24px 28px",
                    alignItems: "start",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "#c5a35c",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: 4,
                      }}
                    >
                      {item.month}
                    </div>
                    <div
                      style={{
                        color: "#f0ece3",
                        fontWeight: 600,
                        fontSize: "0.97rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.title}
                    </div>
                  </div>
                  <p
                    style={{
                      color: "#a0998e",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                fontFamily: "Playfair Display, serif",
                marginBottom: 48,
                color: "#f0ece3",
              }}
            >
              Six KPIs That Define HCL NP Practice Excellence
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                gap: 20,
              }}
            >
              {kpis.map((kpi) => (
                <div
                  key={kpi.target}
                  style={{
                    background: "#131318",
                    border: "1px solid rgba(197,163,92,0.2)",
                    borderRadius: 14,
                    padding: "28px 22px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(1.4rem,2.5vw,1.9rem)",
                      fontWeight: 700,
                      color: "#c5a35c",
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 6,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "#f0ece3",
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#a0998e", lineHeight: 1.55 }}>
                    {kpi.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ background: "#0e0e12", padding: "72px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", color: "#c5a35c", marginBottom: 16, lineHeight: 1 }}>
              &ldquo;
            </div>
            <blockquote
              style={{
                fontSize: "clamp(1rem,2vw,1.2rem)",
                color: "#f0ece3",
                lineHeight: 1.7,
                fontStyle: "italic",
                margin: 0,
                padding: 0,
                border: "none",
              }}
            >
              {testimonial.quote}
            </blockquote>
            <div style={{ marginTop: 28 }}>
              <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>
                {testimonial.name}
              </div>
              <div style={{ color: "#a0998e", fontSize: "0.88rem", marginTop: 4 }}>
                {testimonial.title}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
