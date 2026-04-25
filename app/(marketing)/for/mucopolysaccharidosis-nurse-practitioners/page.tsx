import type { Metadata } from "next"
import { Bell, Stethoscope, UserCheck, BookOpen } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "MPS Nurse Practitioners — Scheduling for Complex Lysosomal Storage Disorders | Momenties",
  description:
    "Purpose-built for NPs coordinating MPS care — from biweekly ERT infusions and infusion-reaction management to multidisciplinary surveillance coordination, HSCT follow-up, and family support services.",
}

const pillars = [
  {
    icon: Bell,
    title: "ERT Coordination & Reaction Management",
    description:
      "Weekly enzyme replacement therapy infusion calendars across laronidase, idursulfase, elosulfase alfa, and galsulfase, with NP-led pre-medication protocols (diphenhydramine, acetaminophen, methylprednisolone), titration schedules for first four infusions, and live anaphylaxis-readiness verification — epinephrine, IV diphenhydramine, methylprednisolone, oxygen, and airway adjuncts confirmed at every infusion. Tracks anti-drug antibody draw windows at months 3, 6, 12, and annually; documents reaction grade per CTCAE; and coordinates home-infusion transitions with home-health nursing once tolerance is established.",
  },
  {
    icon: Stethoscope,
    title: "Multidisciplinary Surveillance Scheduling",
    description:
      "NP-driven coordination of pulmonology (annual PFTs and polysomnography), cardiology (annual echocardiogram for valvular thickening), orthopedics (joint range-of-motion, hip/spine imaging, carpal tunnel screening), ENT (audiology and airway evaluation), ophthalmology (slit-lamp for corneal clouding and intraocular pressure), and rehabilitation services. Annual circuits are pre-built so the NP can confirm same-day clustering, transportation logistics, and pre-visit lab orders, eliminating the patchwork of separate referrals that families typically navigate alone.",
  },
  {
    icon: UserCheck,
    title: "HSCT Pre & Post-Transplant Care",
    description:
      "Pre-transplant conditioning education sessions (busulfan/fludarabine), central line teaching, fertility preservation counseling for adolescent patients, and donor coordination touchpoints with the BMT team. Post-transplant: engraftment monitoring (ANC, platelets, chimerism), donor leukocyte enzyme activity confirmation, immunosuppression taper milestones, infection prophylaxis windows (PJP, CMV, fungal), and long-term residual-disease surveillance for skeletal, corneal, and cardiac manifestations not corrected by HSCT — all owned by the NP across the transplant continuum.",
  },
  {
    icon: BookOpen,
    title: "Newborn Screening & Family Education",
    description:
      "Confirmatory workup scheduling for positive MPS I newborn screens (leukocyte enzyme assay, urinary GAG, IDUA gene sequencing), early-intervention referrals, growth chart tracking visit-by-visit, IEP and 504 educational accommodation coordination across school transitions, MPS Society family resource and support-group connections, sibling carrier counseling, and airway management counseling for any anesthesia team encountering an MPS patient — proactively delivered by the NP before elective procedures, dental work, or imaging under sedation.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis Intake & Family Onboarding",
    description:
      "Confirm MPS subtype with the geneticist, review IDUA/IDS/GALNS/ARSB results with the family, draft a personalized care roadmap, and connect families to the MPS Society and subtype-specific support communities. Establish growth, developmental, and quality-of-life baselines and document carrier-screening recommendations for parents and siblings.",
  },
  {
    month: "Month 3–4",
    title: "ERT Initiation & Reaction-Readiness Drills",
    description:
      "Schedule first ERT infusions with full pre-medication, slow titration, and bedside anaphylaxis kit verification (diphenhydramine, methylprednisolone, epinephrine). Train the family on infusion-reaction red flags, document reaction grade per CTCAE for any event, and arrange port placement coordination if peripheral access becomes unsustainable.",
  },
  {
    month: "Month 5–6",
    title: "Multidisciplinary Surveillance Cluster #1",
    description:
      "Coordinate same-day or same-week clustering of pulmonology, cardiology, ENT, ophthalmology, orthopedics, and audiology visits to minimize family burden. Pre-order labs (uGAG, ADA titers, CBC, CMP). Update the airway/anesthesia alert document and Emergency Information Form with current findings.",
  },
  {
    month: "Month 7–8",
    title: "HSCT Pre-Op Education or Post-HSCT Engraftment",
    description:
      "For HSCT-bound severe MPS I patients under 2.5 years, complete conditioning education, central line teaching, and fertility-preservation counseling for adolescents. For post-transplant patients, document chimerism, donor enzyme activity, immunosuppression taper, and infection-prophylaxis adherence (PJP, CMV, antifungal).",
  },
  {
    month: "Month 9–10",
    title: "School & Educational Accommodations Refresh",
    description:
      "Update IEP and 504 plans before the school year, coordinate with school nurses for any in-school medical needs, review developmental and growth-chart trajectories, and connect families to early-intervention or special-education advocacy resources. Refresh anesthesia/airway alerts before any planned dental or surgical work.",
  },
  {
    month: "Month 11–12",
    title: "Annual Family Care Conference",
    description:
      "Lead the annual MPS care-conference visit — review ERT response (uGAG, ADA, 6MWT, growth velocity), summarize multidisciplinary findings, refresh emergency action plans, update genetic counseling for the family, and set goals for the next 12 months. Hand off the consolidated record to the family and primary pediatrician.",
  },
]

const kpis = [
  {
    metric: "100%",
    target: "Anaphylaxis Kit Verification",
    description:
      "Every ERT infusion preceded by NP-led verification of epinephrine, diphenhydramine, methylprednisolone, oxygen, and airway adjuncts at the bedside.",
  },
  {
    metric: "≥95%",
    target: "Annual Surveillance Completion",
    description:
      "Cardiology, pulmonology, orthopedics, and ENT yearly visits closed within the active calendar year for the full MPS panel.",
  },
  {
    metric: "≤14 Days",
    target: "Newborn Screen Confirmatory Workup",
    description:
      "From positive MPS I newborn screen result to confirmatory enzyme assay, GAG profile, and IDUA gene sequencing scheduled by the NP.",
  },
  {
    metric: "Annual",
    target: "IEP/504 Accommodation Refresh",
    description:
      "Educational accommodation plans reviewed and updated every year before the school year for every school-aged MPS patient.",
  },
  {
    metric: "100%",
    target: "Anesthesia Airway Alert Coverage",
    description:
      "Pre-procedural airway and anesthesia counseling delivered to every surgical, dental, or sedation team prior to any planned MPS patient procedure.",
  },
  {
    metric: "Q3–6 Mo",
    target: "uGAG Response Surveillance",
    description:
      "Urinary glycosaminoglycan trending cadence per MPS subtype to confirm sustained ERT substrate clearance and flag declining response.",
  },
]

const testimonial = {
  quote:
    "MPS nurse practitioner work is relentlessly multidisciplinary — biweekly ERT infusions with full anaphylaxis readiness, quarterly anti-drug antibody titers, annual cardiology and pulmonology and orthopedics and ENT, HSCT pre-op education and post-transplant engraftment monitoring, IEP and 504 refresh cycles, anesthesia airway alerts before every dental or surgical encounter, and family education that never stops. Momenties is the first system that organizes every cycle around the patient instead of the specialty silo. Our team now hits 100% anaphylaxis-kit verification and ≥95% annual surveillance completion across the panel.",
  name: "Rebecca M., CPNP-PC",
  title: "MPS NP, Metabolic Disease Program",
}

export default function MucopolysaccharidosisNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="MPS Nurse Practitioners"
        title="MPS Nurse Practitioners — Scheduling for Complex Lysosomal Storage Disorders"
        subtitle="Purpose-built for NPs coordinating MPS care — from biweekly ERT infusions and infusion-reaction management to multidisciplinary surveillance coordination, HSCT follow-up, and family support services."
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
            Built for the Full MPS Nurse Practitioner Practice
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 28 }}>
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
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 10, color: "#f0ece3" }}>
                  {title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "rgba(240,236,227,0.65)", lineHeight: 1.65 }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Timeline */}
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
              The MPS NP 12-Month Coordination Calendar
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every infusion-reaction drill, surveillance cluster, HSCT touchpoint, and family-education milestone — sequenced across 12 months.
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
                    <div style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.97rem", lineHeight: 1.4 }}>
                      {item.title}
                    </div>
                  </div>
                  <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
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
              The 6 KPIs That Define MPS NP Excellence
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
              {kpis.map((kpi) => (
                <div
                  key={kpi.target}
                  style={{
                    background: "#0a0a0d",
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
                  <div style={{ fontSize: "0.95rem", color: "#f0ece3", fontWeight: 600, marginBottom: 8 }}>
                    {kpi.target}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "rgba(240,236,227,0.65)", lineHeight: 1.55 }}>
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
          <blockquote style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", color: "#c5a35c", marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
            <p
              style={{
                fontSize: "clamp(1rem,2vw,1.2rem)",
                color: "#f0ece3",
                lineHeight: 1.7,
                fontStyle: "italic",
                marginBottom: 28,
              }}
            >
              {testimonial.quote}
            </p>
            <footer>
              <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>{testimonial.name}</div>
              <div style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", marginTop: 4 }}>
                {testimonial.title}
              </div>
            </footer>
          </blockquote>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
