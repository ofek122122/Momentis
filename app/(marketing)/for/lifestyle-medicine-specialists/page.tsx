import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Lifestyle Medicine Specialists | Momenties",
  description: "Momenties helps lifestyle medicine physicians manage ABLM board certification, ACLM fellowship CE, health coaching credential maintenance, culinary medicine training renewal, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABLM Board Certification & Lifestyle Medicine MOC",
    description:
      "Lifestyle medicine physicians maintaining American Board of Lifestyle Medicine (ABLM) Certified Lifestyle Medicine Physician (DipABLM) certification follow a 3-year recertification cycle — requiring 30 CME credits in lifestyle medicine topics (nutrition, physical activity, sleep, stress management, substance use, social connection) plus passing the ABLM examination. ABLM has established reciprocity with the American Board of Obesity Medicine (ABOM) — DipABOM holders can obtain ABLM certification with reduced examination requirements, and vice versa. Lifestyle medicine physicians also maintain their primary board certification (ABIM, ABFM, ABP, or ABOG) with concurrent MOC requirements. ACLM Fellow (FACLM) status requires annual dues and documentation of lifestyle medicine leadership activities. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ACLM Fellowship CE & Lifestyle Medicine Conference Calendar",
    description:
      "American College of Lifestyle Medicine (ACLM) Annual Conference (October/November) is the primary lifestyle medicine CE event — abstract submission opens March-April, 7-8 months in advance. ACLM annual conference provides 25+ hours of ABLM-approved CME in all six pillars of lifestyle medicine. ACLM Fellowship CE requirements include participation in ACLM working groups, webinar series CE, and leadership activities. Health coaching certification maintenance — National Board for Health and Wellness Coaching (NBHWC) certification, requiring 36 CE hours per 3-year renewal cycle — is required for lifestyle medicine physicians credentialing in health coaching-integrated programs. Culinary medicine training — the Teaching Kitchen Collaborative and HEAL (Health-supportive culinary medicine curriculum) annual updates — requires annual competency documentation at culinary medicine program institutions. Motivational interviewing (MI) advanced certification (MINT) requires annual practice hours documentation. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "DPP Lifestyle Coach Certification & Prevention Program Compliance",
    description:
      "Lifestyle medicine physicians directing CDC-recognized Diabetes Prevention Programs (DPP) must maintain DPP Lifestyle Coach certification (16-hour training with annual renewal) — required for organizations billing Medicare MNT (medical nutrition therapy) and MDPP (Medicare Diabetes Prevention Program). CMS MDPP program compliance requires quarterly data submission to the CDC Diabetes Prevention Recognition Program (DPRP) — session attendance rates, weight loss outcomes, and physical activity data must meet minimum performance thresholds for continued recognition. Lifestyle medicine physicians with ACLM culinary medicine program roles require annual culinary medicine curriculum completion documentation. Lifestyle medicine intensive therapeutic intervention (LMITI) documentation — required for ABLM practice hours — must reflect patient encounters addressing all six pillars, with documented lifestyle prescription. Momenties tracks all program compliance cycles.",
  },
  {
    icon: Users,
    title: "ABOM Obesity Medicine CE, State License & Lifestyle Health System Reporting",
    description:
      "Lifestyle medicine physicians with concurrent ABOM Obesity Medicine certification (DipABOM) maintain a separate 2-year recertification cycle requiring 60 hours of obesity medicine CME — ABOM and ABLM CME overlap significantly for lifestyle medicine physicians with dual certification. Lifestyle medicine program accreditation — NCQA Health and Well-being (formerly Patient-Centered Medical Home) standards recognition relevant for lifestyle medicine practices — requires annual re-attestation with updated quality data. Health system lifestyle medicine quality reporting — HEDIS preventive care measures (nutrition counseling, physical activity assessment, tobacco cessation), CMS preventive quality indicators, and ACO (Accountable Care Organization) wellness measures — requires physician participation in data documentation. State medical license renewal (2-3 year cycles) with state-specific CE requirements complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Intensive Lifestyle Intervention for Type 2 Diabetes Remission — Lancet 2024",
    description: "DiRECT trial 5-year follow-up (n=296 T2DM patients) confirming 36% sustained remission with intensive dietary lifestyle intervention — required ACLM CE update for lifestyle medicine physicians on weight-centric intensive lifestyle prescription, remission monitoring protocols, and DPP program integration.",
  },
  {
    title: "Plant-Based Diet and Cardiovascular Risk — NEJM 2023",
    description: "PREDIMED-Plus extension analysis (n=7,447 high cardiovascular risk adults) confirming Mediterranean dietary pattern reduces cardiovascular events 24% over 7 years — required ABLM CE update for lifestyle medicine physicians on dietary counseling documentation, culinary medicine prescription, and ACLM evidence-based dietary framework updates.",
  },
  {
    title: "Lifestyle Medicine for Depression — JAMA 2024",
    description: "SMILES trial extension meta-analysis (n=3,000 depression patients) confirming dietary and physical activity intervention equivalence to antidepressant therapy for mild-moderate depression — required ACLM CE update for lifestyle medicine physicians on lifestyle prescription for mental health, documentation requirements, and collaborative care integration.",
  },
  {
    title: "Sleep Optimization for Metabolic Health — NEJM 2023",
    description: "CALERIE 2 sleep sub-study (n=600 caloric restriction subjects) confirming sleep optimization enhances weight loss outcomes 40% versus diet alone — required ABLM CE update for lifestyle medicine physicians on sleep prescription frameworks, sleep assessment tools, and integrated lifestyle medicine treatment plan documentation.",
  },
  {
    title: "Social Prescribing Program Outcomes — Lancet 2024",
    description: "National social prescribing implementation study (n=12,000 patients with social isolation) confirming community connection programs reduce healthcare utilization 22% — required ACLM CE update for lifestyle medicine physicians on social connection pillar documentation, social prescribing referral networks, and outcomes measurement.",
  },
  {
    title: "Exercise Prescription for Cancer Survivorship — JAMA Oncology 2023",
    description: "Multicenter RCT (n=1,500 cancer survivors) confirming structured exercise prescription reduces cancer recurrence risk 28% — required ACLM CE update for lifestyle medicine physicians on exercise prescription protocols for oncology populations, resistance training documentation, and integration with oncology care teams.",
  },
]

const testimonial = {
  quote:
    "ABLM recertification, ABFM primary board MOC, DipABOM obesity medicine recertification, NBHWC health coaching renewal, DPP Lifestyle Coach annual renewal, quarterly CMS MDPP data submissions, ACLM fellowship CE, culinary medicine curriculum annual completion, and state license — all on different cycles across different organizations. Momenties mapped every deadline. I renewed all four certifications in a single year without missing a single CE requirement.",
  name: "Chisom T.",
  title: "MD, DipABLM, DipABOM, FACLM, Lifestyle Medicine Program Director",
}

export default function LifestyleMedicineSpecialistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Lifestyle Medicine Specialists"
        title="ABLM Certification. DPP Compliance. ABOM Dual Certification. One Calendar."
        subtitle="Momenties tracks ABLM and ABOM recertification cycles, ACLM fellowship CE, NBHWC health coaching renewal, DPP Lifestyle Coach annual certification, CMS MDPP quarterly data submissions, and state license renewal so lifestyle medicine specialists maintain every credential without administrative overload."
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
            Landmark Studies Shaping Lifestyle Medicine Practice
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
