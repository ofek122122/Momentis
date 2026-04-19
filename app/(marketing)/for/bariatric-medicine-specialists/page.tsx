import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Bariatric Medicine Specialists | Momenties",
  description: "Momenties helps bariatric medicine specialists and obesity medicine physicians manage ABOM recertification, TOS fellowship CE, GLP-1 pharmacotherapy CE, surgical credentialing, and state license renewals in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABOM Certification & Obesity Medicine MOC",
    description:
      "The American Board of Obesity Medicine (ABOM) requires re-examination every 10 years with 60 CME hours in obesity medicine in the preceding 5 years, at least 30 of which must be from ABOM-approved sources. Diplomates who also hold ABIM, ABFM, or ABP primary certification must simultaneously satisfy primary board MOC requirements. Momenties tracks your ABOM re-examination window, flags ABOM-approved CE opportunities, and cross-references credits against primary board MOC requirements to prevent double-counting errors.",
  },
  {
    icon: Clock,
    title: "TOS Fellowship, ASMBS CE & Multidisciplinary Program Requirements",
    description:
      "The Obesity Society (TOS) and American Society for Metabolic and Bariatric Surgery (ASMBS) provide the primary CE ecosystem for bariatric medicine — annual Obesity Week conference, ASMBS accreditation standards requiring physician team CE, and the TOS mentored fellowship. ASMBS-accredited bariatric surgery programs require the medical director to maintain documented CE in pre/postoperative medical management and metabolic complications. Momenties maps all Obesity Week registration deadlines, abstract submission windows, and ASMBS accreditation documentation cycles.",
  },
  {
    icon: BarChart3,
    title: "GLP-1/GIP Agonist CE & Anti-Obesity Medication Pharmacotherapy",
    description:
      "The anti-obesity medication landscape is evolving faster than any other area in internal medicine: semaglutide (Ozempic/Wegovy), tirzepatide (Mounjaro/Zepbound), and emerging oral GLP-1 agents require continuous CE as guideline recommendations, dosing protocols, and insurance coverage criteria change. AHA/ACC/TOS joint guidelines on obesity management are updated with each major trial publication. Momenties schedules quarterly pharmacotherapy CE reviews, flags new FDA approvals and label updates, and queues REMS compliance training for applicable agents.",
  },
  {
    icon: Users,
    title: "Surgical Credentialing, State License & Metabolic Program Accreditation",
    description:
      "Bariatric medicine physicians participating in ASMBS-accredited comprehensive bariatric programs must maintain documented surgical care coordination competencies, pre-operative assessment credentialing, and postoperative metabolic monitoring certifications — typically renewed in 2-3 year cycles aligned with program accreditation surveys. State medical license renewals and DEA registration (for controlled substances in weight management) complete the compliance portfolio. Momenties consolidates all program and individual credentialing deadlines into one calendar with automated reminders.",
  },
]

const studies = [
  {
    title: "SURMOUNT-1 Tirzepatide Phase 3 — NEJM 2022",
    description: "Pivotal RCT (n=2,539) demonstrating tirzepatide 15mg achieved 22.5% mean body weight reduction vs. 2.4% placebo at 72 weeks — established GIP/GLP-1 dual agonism as new efficacy benchmark, now embedded in TOS/ASMBS pharmacotherapy CE.",
  },
  {
    title: "SELECT Semaglutide Cardiovascular Outcomes — NEJM 2023",
    description: "Landmark trial (n=17,604) demonstrating semaglutide 2.4mg weekly reduced MACE by 20% in overweight/obese patients without diabetes — first cardiovascular outcome trial for obesity pharmacotherapy, fundamentally reshaping prescribing indications.",
  },
  {
    title: "STEP 5 Semaglutide 104-Week Durability — Obesity 2022",
    description: "Long-term RCT (n=304) confirming 15.2% body weight reduction maintained at 104 weeks with semaglutide 2.4mg — established durability data required for ABOM CE on long-term pharmacotherapy maintenance protocols.",
  },
  {
    title: "AHA/ACC/TOS Guideline on Obesity Management — Circulation 2023",
    description: "Comprehensive 2023 update covering BMI limitations, adiposity-based chronic disease (ABCD) framework, pharmacotherapy treatment algorithms, surgical criteria, and metabolic monitoring — landmark CE requirement for all ABOM and TOS credentialing cycles.",
  },
  {
    title: "SURMOUNT-MMO Tirzepatide in Obesity with HF — NEJM 2024",
    description: "Phase 3 RCT (n=731) in heart failure with preserved ejection fraction and obesity demonstrating tirzepatide reduced 6-minute walk distance primary endpoint (p<0.001) — expanded tirzepatide cardiovascular indications requiring updated bariatric medicine CE.",
  },
  {
    title: "OAGB vs. RYGB 10-Year Outcomes — JAMA Surgery 2024",
    description: "Multicenter RCT long-term follow-up (n=250) comparing one-anastomosis gastric bypass vs. ROUX-en-Y: equivalent weight loss (32% vs. 31%), similar comorbidity resolution, OAGB advantage in operative time and bile reflux risk profile — updated ASMBS CE on surgical option counseling.",
  },
]

const testimonial = {
  quote:
    "Managing ABOM re-examination CE alongside my ABIM MOC, Obesity Week registration, and GLP-1 pharmacotherapy CE updates is genuinely complex. Momenties tracks each credential separately, reminds me when ABOM-approved CE opportunities open, and flags new FDA label updates within days. I went from always behind to always current.",
  name: "Chinelo A.",
  title: "MD, ABOM Diplomate, FTOS, Bariatric Medicine Program Director",
}

export default function BariatricMedicineSpecialistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Bariatric Medicine Specialists"
        title="ABOM Recertification. GLP-1 CE. ASMBS Accreditation. One Calendar."
        subtitle="Momenties tracks ABOM re-examination windows, primary board MOC overlap, GLP-1 pharmacotherapy CE, and ASMBS program credentialing so obesity medicine specialists stay current without administrative overwhelm."
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
            Landmark Studies Shaping Bariatric Medicine Practice
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
