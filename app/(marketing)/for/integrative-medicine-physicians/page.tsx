import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Integrative Medicine Physicians | Momenties",
  description: "Momenties helps integrative medicine physicians manage ABOIM board certification renewal, ABIHM homeopathy CE, AIHM fellowship requirements, mind-body medicine CE, and primary board MOC in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABOIM Certification & Primary Board MOC Integration",
    description:
      "The American Board of Integrative Medicine (ABOIM) requires recertification every 10 years with 150 CME hours in integrative medicine, at least 100 from ABOIM-approved sources. Integrative medicine physicians holding primary board certification (ABIM, ABFM, ABP, ABN, or others) must simultaneously satisfy primary board MOC requirements. Momenties tracks both timelines independently — ABOIM recertification window, primary board MOC credit accumulation, and the overlap in credits that qualify for both — preventing double-counting errors and missed windows.",
  },
  {
    icon: Clock,
    title: "AIHM Fellowship & Integrative Society CE Requirements",
    description:
      "The Academy of Integrative Health and Medicine (AIHM) offers a structured integrative medicine fellowship curriculum with module-based CE requirements in nutrition, mind-body medicine, acupuncture fundamentals, herbal medicine safety, and lifestyle medicine. The American Board of Integrative Holistic Medicine (ABIHM) requires 54 CME hours for recertification with specific credit categories. Momenties maps all fellowship module deadlines, AIHM annual conference registration windows, and ABIHM recertification timelines with automatic alerts.",
  },
  {
    icon: BarChart3,
    title: "Mind-Body, Nutrition & Lifestyle Medicine CE",
    description:
      "Integrative medicine CE spans multiple domains: the American College of Lifestyle Medicine (ACLM) offers DipACLM diplomate CE requirements (annual), the Institute for Functional Medicine (IFM) certifies functional medicine practitioners with biennial renewal (60 CE hours), and mind-body medicine credentialing through MBSR teacher training programs requires documented supervised practice hours. Momenties tracks CE requirements across all held credentials simultaneously, scheduling review blocks 3-4 months before each renewal window.",
  },
  {
    icon: Users,
    title: "State License, DEA & Botanical Medicine Prescribing CE",
    description:
      "Integrative medicine physicians prescribing controlled substances for pain management, sleep, or anxiety must maintain DEA registration (3-year cycle) and comply with state-specific prescribing CE requirements. Botanical medicine safety CE is increasingly required by state medical boards for physicians recommending herbal therapeutics. Cannabis medicine CE is required for physicians issuing medical cannabis certifications in states where it applies. Momenties consolidates every jurisdiction-specific CE requirement into a unified compliance calendar.",
  },
]

const studies = [
  {
    title: "PREDIMED-Plus Mediterranean Diet and CVD — NEJM 2023",
    description: "6,874-person RCT of energy-reduced Mediterranean diet + physical activity demonstrating 24% relative reduction in major cardiovascular events vs. standard advice — landmark nutrition CE data for ABOIM and ACLM guideline updates.",
  },
  {
    title: "Mindfulness-Based Stress Reduction vs. Escitalopram — JAMA Psych 2022",
    description: "Non-inferiority RCT (n=276) demonstrating MBSR equivalent to escitalopram for anxiety disorder treatment — established mind-body medicine as first-line option and elevated MBSR teacher training to clinical CE priority.",
  },
  {
    title: "IFM Functional Medicine Outcomes Study — JAMA Network Open 2023",
    description: "Prospective cohort (n=7,252) at Cleveland Clinic Center for Functional Medicine demonstrating functional medicine approach improved PROMIS global health scores by 31% vs. primary care controls — primary evidence base for IFM certification CE.",
  },
  {
    title: "ACLM Lifestyle Medicine Guidelines Update 2023",
    description: "Comprehensive ACLM practice guideline covering six pillars of lifestyle medicine (nutrition, exercise, sleep, stress management, substance avoidance, social connection) with meta-analysis evidence gradings — required CE for DipACLM recertification.",
  },
  {
    title: "Acupuncture for Chronic Low Back Pain — NEJM 2024",
    description: "Individual patient data meta-analysis (11 RCTs, n=3,754) confirming acupuncture produces clinically significant 12-month pain reduction vs. sham and usual care — elevated acupuncture CE to mainstream integrative medicine curriculum requirement.",
  },
  {
    title: "Botanical Medicine Drug Interaction Safety — JAMA IM 2024",
    description: "Systematic review of 48 high-quality RCTs identifying clinically significant herb-drug interactions (St. John&apos;s Wort/anticoagulants, kava/CNS drugs, garlic/antiplatelet) — foundational CE for integrative physicians prescribing botanical therapies.",
  },
]

const testimonial = {
  quote:
    "I hold ABOIM, ABFM MOC, AIHM fellowship completion, IFM certification, and DipACLM — five different credential systems with five different renewal cadences. Momenties is the only tool that maps all five simultaneously without me building a manual master spreadsheet. It&apos;s genuinely transformative for physicians in fields with multi-society credential stacks.",
  name: "Kezia A.",
  title: "MD, ABOIM, DipACLM, IFMCP, Integrative & Lifestyle Medicine",
}

export default function IntegrativeMedicinePhysiciansPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Integrative Medicine Physicians"
        title="ABOIM. IFM. ACLM. AIHM. Five Credentials. One Calendar."
        subtitle="Momenties maps ABOIM recertification, IFM certification renewal, ACLM diplomate CE, primary board MOC, and lifestyle medicine CE simultaneously — eliminating the spreadsheet that integrative medicine physicians use to survive multi-credential complexity."
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
            Landmark Studies Shaping Integrative Medicine Practice
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
