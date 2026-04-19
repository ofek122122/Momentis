import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Transplant Cardiologists | Momenties",
  description: "Momenties helps transplant cardiologists manage ABIM advanced heart failure and transplant cardiology certification, ISHLT fellowship CE, UNOS continuing education, mechanical circulatory support device training, and state license compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABIM Advanced Heart Failure & Transplant Cardiology Certification",
    description:
      "Transplant cardiologists maintain ABIM certification in both cardiovascular disease and advanced heart failure and transplant cardiology (AHFTC) — a subspecialty board established in 2010 requiring a separate certifying examination every 10 years. ABIM AHFTC MOC requires 100 CME credits per 5-year cycle with specific requirements for heart failure and transplant CE, including ISHLT-accredited learning activities and UNOS-required education modules. ABIM LKA (longitudinal knowledge assessment) replaces the 10-year written exam with quarterly portal-delivered assessments — missing quarterly LKA submissions triggers MOC clock reset. Transplant cardiologists with dually-certified backgrounds in interventional cardiology or electrophysiology maintain additional subspecialty certification timelines. Momenties tracks all ABIM MOC pathways simultaneously.",
  },
  {
    icon: Clock,
    title: "ISHLT Fellowship CE & Heart Failure Society Conference Calendar",
    description:
      "The International Society for Heart and Lung Transplantation (ISHLT) Annual Meeting (April/May) is the primary CE event — abstract submission opens August-September for spring conferences, 8 months in advance. ISHLT fellowship maintenance requires documented CE in donor management, rejection surveillance, immunosuppression protocols, and mechanical circulatory support (MCS) therapy. Heart Failure Society of America (HFSA) Annual Scientific Meeting (September/October) provides advanced heart failure CE credits. ACC Annual Scientific Session (March) provides general cardiology MOC CE. ISHLT Guidelines updates — 2023 donor heart selection and procurement, 2024 primary graft dysfunction management, and 2023-2024 immunosuppression protocol revisions — require documented CE review for fellowship maintenance. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "UNOS Education, MCS Device Training & Immunosuppression CE",
    description:
      "Transplant cardiologists serving as primary transplant cardiologists at UNOS-designated heart transplant programs must complete UNOS Continuing Transplant Education (CTEP) annually — a hard compliance requirement with program-level sanctions for physician non-compliance. Mechanical circulatory support device training — LVAD implant center privileges (HeartMate 3, HVAD) require device-specific training certification, proctored case volume documentation, and annual institutional reappointment for bridge-to-transplant and destination therapy programs. LVAD coordinator and clinic protocols require annual recertification. ECMO specialist certification (ELSO credentialing, 2-year cycle) for cardiogenic shock and post-transplant rescue programs is managed separately. Novel immunosuppression CE — belatacept protocols, calcineurin inhibitor minimization, and antibody-mediated rejection treatment guidelines — requires quarterly review as ISHLT guidelines evolve. Momenties tracks all.",
  },
  {
    icon: Users,
    title: "Transplant Program QI Reporting, State License & DEA Compliance",
    description:
      "Heart transplant programs are subject to UNOS-mandated quality improvement reporting with outcomes compared against SRTR benchmarks — transplant cardiologists serving as program medical directors participate in formal MPSC (Membership and Professional Standards Committee) reviews when 1-year survival falls below expected ranges. Quarterly SRTR data submissions are a regulatory requirement with program suspension risk for non-compliance. ACHD (Adult Congenital Heart Disease) certification — maintained separately for transplant cardiologists managing CHD patients with end-stage heart failure — requires ACC/AHA ACHD guideline CE. State medical license renewal (2-3 year cycles), DEA registration for immunosuppression and opioid prescribing, ACLS certification (2-year cycle), and infection control training for immunocompromised patients complete the compliance portfolio. Momenties consolidates all with jurisdiction-specific tracking.",
  },
]

const studies = [
  {
    title: "HeartMate 3 LVAD 5-Year Outcomes — NEJM 2023",
    description: "MOMENTUM 3 5-year extended follow-up (n=1,028 advanced HF patients) confirming HeartMate 3 durable outcomes and 5-year actuarial survival — required ISHLT CE update for transplant cardiologists managing destination therapy LVAD selection and bridge-to-transplant decision protocols.",
  },
  {
    title: "Empagliflozin in Decompensated Heart Failure — NEJM 2023",
    description: "EMPULSE trial reanalysis and SOLOIST-WHF extension data confirming SGLT2 inhibitor benefit in acute decompensated heart failure hospitalization — required HFSA CE update for transplant cardiologists managing medical optimization before transplant listing.",
  },
  {
    title: "Donation After Circulatory Death Heart Transplantation — NEJM 2023",
    description: "Multicenter DCD heart transplantation registry (n=200+ DCD recipients) confirming non-inferiority to DBD outcomes at 2 years — established ISHLT CE for transplant cardiologists on DCD donor selection, Organ Care System utilization, and post-transplant surveillance protocols.",
  },
  {
    title: "Belatacept vs. Calcineurin Inhibitor in Heart Transplant — NEJM 2024",
    description: "BENEFIT-EXT 7-year extension data applied to heart transplant protocols with new ISHLT immunosuppression minimization guidance — required CE for transplant cardiologists managing renal-sparing immunosuppression regimens and calcineurin inhibitor conversion protocols.",
  },
  {
    title: "Hemodynamic-Guided HF Management GUIDE-HF Extension — JACC 2024",
    description: "GUIDE-HF remote hemodynamic monitoring 3-year outcomes (n=1,000+ ambulatory HF patients) confirming CardioMEMS-guided management benefit in advanced HF — updated HFSA CE for transplant cardiologists managing remote monitoring for transplant candidates on waitlist.",
  },
  {
    title: "Dapagliflozin in HFpEF — NEJM 2023",
    description: "DELIVER trial 2-year follow-up confirming dapagliflozin benefit across all HF phenotypes including HFpEF — required ACC/AHA CE update for transplant cardiologists evaluating medical optimization and SGLT2i eligibility in advanced HF patients before transplant listing.",
  },
]

const testimonial = {
  quote:
    "ABIM AHFTC MOC, ISHLT fellowship CE, UNOS CTEP annual modules, HeartMate 3 destination therapy credentialing at two centers, ECMO specialist recertification, SRTR quarterly data deadlines, and state license — each running independently. Momenties put it all in one calendar. I no longer discover deadlines two weeks out — I see them six months in advance.",
  name: "Adannaya O.",
  title: "MD, FACC, FHFSA, Advanced Heart Failure & Transplant Cardiology Program Director",
}

export default function TransplantCardiologistsSpecialistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Transplant Cardiologists"
        title="ABIM AHFTC Certification. UNOS Compliance. MCS Credentialing. One Calendar."
        subtitle="Momenties tracks ABIM advanced heart failure and transplant cardiology certification, ISHLT fellowship CE, UNOS continuing education requirements, mechanical circulatory support device credentialing, and transplant program quality reporting so transplant cardiologists maintain every credential without administrative chaos."
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
            Landmark Studies Shaping Transplant Cardiology Practice
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
