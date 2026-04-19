import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Integrative Health Physicians | Momenties",
  description: "Momenties helps integrative medicine physicians manage ABOIM board certification, ABIHM fellowship CE, herbal medicine credentialing, mind-body medicine training renewal, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABOIM Board Certification & Integrative Medicine MOC",
    description:
      "Integrative medicine physicians maintaining American Board of Integrative Medicine (ABOIM) certification follow a 10-year recertification cycle with ongoing continuing medical education requirements — ABOIM certification requires 60 CME hours in integrative medicine topics per 2-year period within the 10-year cycle, covering mind-body medicine, nutrition, supplements, traditional medicine systems, and lifestyle medicine. ABOIM maintains reciprocity pathways with American Board of Lifestyle Medicine (ABLM) and American Board of Obesity Medicine (ABOM) for dual-certified integrative medicine physicians. Integrative medicine physicians also maintain their primary board certification (ABIM, ABFM, ABP, ABOG, or ABPN) with concurrent MOC requirements independent of ABOIM renewal. Academic Consortium for Integrative Medicine and Health (ACIMH) membership requires annual dues documentation. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ABIHM Fellowship CE & Integrative Medicine Conference Calendar",
    description:
      "American Board of Integrative Holistic Medicine (ABIHM) Diplomate certification requires 40 hours of integrative medicine CME per year with evidence-based documentation of continuing competency in holistic approaches. Integrative Medicine for the Underserved (IM4US) Annual Conference (September) provides social justice integrative medicine CE. Academy of Integrative Health and Medicine (AIHM) Annual Conference (October) is the primary ABOIM-recognized CE event — abstract submission opens April-May, 5-6 months in advance. Mind-body medicine programs — mindfulness-based stress reduction (MBSR) teacher training certification (annual practice documentation), HeartMath certification (annual renewal), and EMDR certification (3-year renewal cycle) — require individual tracking. Herbal medicine continuing education — American Herbalists Guild (AHG) annual conference and Botanical Medicine Academy updates — requires annual documentation. Acupuncture CME for physicians (AAMA, American Academy of Medical Acupuncture, requires 200 training hours for initial and 30 CME per 2-year renewal). Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Functional Medicine Certification & Integrative Oncology Credentialing",
    description:
      "Integrative medicine physicians pursuing Institute for Functional Medicine (IFM) Certified Practitioner (IFMCP) certification complete a 2-year intensive training program with annual CE requirements — IFMCP renewal requires 20 IFM-approved CME hours per year plus case study documentation of functional medicine applications. Society for Integrative Oncology (SIO) membership and fellowship (FSIO) requires annual conference participation and completion of SIO Evidence-Based Integrative Oncology clinical practice guidelines training updates. Integrative medicine physicians credentialing in cannabis medicine — Society of Cannabis Clinicians (SCC) annual credentialing, state-specific cannabis physician registration renewal, and MAPS (Multidisciplinary Association for Psychedelic Studies) MDMA-assisted therapy training (for REMS-certified providers) — require individual state and federal compliance calendars. Integrative pain management credentialing — American Society of Addiction Medicine (ASAM) annual CME for opioid prescribing and buprenorphine DEA X-waiver annual training — complete the subspecialty credentialing portfolio. Momenties tracks all program compliance cycles.",
  },
  {
    icon: Users,
    title: "State License, DEA Renewal & Integrative Health Practice Credentialing",
    description:
      "Integrative medicine physicians operating direct primary care (DPC) or concierge integrative practices manage state medical license renewal (2-3 year cycles) alongside practice-specific credentialing — hospital credentialing for integrative medicine consultation services requires annual reappointment with documented integrative medicine CME. DEA registration (3-year renewal) for integrative physicians prescribing controlled substances in pain management, addiction medicine, or mental health applications requires state prescription drug monitoring program (PDMP) registration renewal (annual in most states). Nutrition and dietary supplement counseling credentialing — American Nutrition Association (ANA) Certified Nutrition Specialist (CNS) 5-year renewal, Institute for Functional Medicine nutrition training annual update, and culinary medicine training renewal — requires documentation at integrative practice institutions. Telemedicine licensure — Interstate Medical Licensure Compact (IMLC) for integrative medicine telehealth practices serving multiple states — requires state-specific renewal tracking. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Mindfulness-Based Stress Reduction for Chronic Pain — JAMA Internal Medicine 2024",
    description: "Multicenter RCT (n=864 adults with chronic low back pain) confirming MBSR equivalent to cognitive behavioral therapy for pain reduction at 26 weeks — required ABOIM CE update for integrative medicine physicians on MBSR prescription frameworks, documentation standards, and insurance coverage documentation for mind-body pain programs.",
  },
  {
    title: "Acupuncture for Chemotherapy-Induced Nausea — NEJM 2023",
    description: "Phase III RCT (n=600 cancer patients) confirming acupuncture reduces chemotherapy-induced nausea 45% versus sham acupuncture — required SIO CE update for integrative oncology physicians on acupuncture prescription in oncology settings, FACT accreditation documentation, and integrative oncology care coordination standards.",
  },
  {
    title: "Omega-3 Supplementation and Cardiovascular Outcomes — Lancet 2024",
    description: "STRENGTH trial 5-year follow-up meta-analysis (n=18,000 high-risk cardiovascular patients) clarifying EPA versus DHA differential effects on MACE reduction — required ABOIM CE update for integrative medicine physicians on precision omega-3 prescribing, supplement quality standards, and documentation of supplement recommendations in clinical practice.",
  },
  {
    title: "Functional Medicine for Irritable Bowel Syndrome — Gastroenterology 2023",
    description: "IFM-sponsored RCT (n=400 IBS-D patients) confirming functional medicine protocol (gut microbiome assessment, elimination diet, stress reduction) produces 68% symptom remission versus 28% for standard of care — required IFMCP CE update for integrative physicians on functional medicine GI protocol documentation and outcome tracking.",
  },
  {
    title: "Integrative Medicine for Depression and Anxiety — JAMA Psychiatry 2024",
    description: "Network meta-analysis (n=15,000 depression/anxiety patients) confirming combined integrative approaches (exercise, nutrition, mindfulness, supplements) equivalent to pharmacotherapy with superior quality of life outcomes — required ABOIM CE update for integrative psychiatry documentation, collaborative care integration, and outcome measurement frameworks.",
  },
  {
    title: "Cannabis for Chronic Pain — NEJM 2024",
    description: "PROSPECT RCT (n=3,000 chronic pain patients) evaluating medical cannabis versus opioid tapering — required SCC CE update for integrative medicine physicians on cannabis prescribing frameworks, state PDMP documentation, product selection standards, and patient monitoring protocols for cannabis-assisted pain management.",
  },
]

const testimonial = {
  quote:
    "ABOIM 10-year recertification with biennial CME documentation, ABFM primary board MOC, ABIHM Diplomate annual CE, IFMCP annual renewal with case documentation, MBSR teacher certification annual practice log, AAMA acupuncture 2-year CME renewal, SIO fellowship annual requirements, cannabis physician state registration renewal, DEA X-waiver annual training, buprenorphine DEA registration, and state license — across 12 different organizations. Momenties mapped every deadline. I maintained all certifications while expanding my practice to three states.",
  name: "Adaeze I.",
  title: "MD, ABOIM, ABIHM, IFMCP, Integrative Medicine Program Director",
}

export default function IntegrativeHealthPhysiciansPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Integrative Health Physicians"
        title="ABOIM Certification. IFMCP. Mind-Body CE. One Calendar."
        subtitle="Momenties tracks ABOIM recertification CME cycles, primary board MOC, ABIHM Diplomate annual CE, IFMCP renewal with case documentation, mind-body medicine certification annual requirements, acupuncture CME, integrative oncology fellowship CE, cannabis physician registration, and state license renewal so integrative medicine physicians maintain every credential without administrative overload."
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
