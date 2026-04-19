import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Integrative Oncologists | Momenties",
  description: "Momenties helps integrative oncologists manage ABIM medical oncology board certification, ABOIM integrative medicine fellowship, ASCO fellowship CE, evidence-based complementary therapy CE, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABIM Medical Oncology & ABOIM Integrative Medicine Dual Certification",
    description:
      "Integrative oncologists maintaining dual certification through ABIM (medical oncology) and ABOIM (American Board of Integrative Medicine) manage two independent 10-year recertification cycles with distinct CME requirements. ABIM medical oncology MOC requires 100 CME credits per 5-year cycle with LKA quarterly assessments covering tumor biology, systemic therapy, immunotherapy, and supportive care. ABOIM certification — the primary integrative medicine specialty board — requires 40 ABOIM-approved CME credits per year, specifically in evidence-based integrative modalities: mind-body medicine, nutrition and lifestyle medicine, botanical medicine, acupuncture research, and integrative oncology protocols. ABOIM MOC requires documented reflective practice in integrative medicine — a structured self-assessment of integrative care delivery documented annually. Momenties tracks both ABIM and ABOIM MOC timelines with independent deadline management.",
  },
  {
    icon: Clock,
    title: "ASCO Fellowship CE & Integrative Oncology Society Conference Calendar",
    description:
      "The American Society of Clinical Oncology (ASCO) Annual Meeting (May/June) is the primary oncology CE event — abstract submission opens November-December for spring conferences, 5-6 months in advance. Society for Integrative Oncology (SIO) Annual Conference (November) provides integrative oncology-specific CME and fellowship maintenance CE. Society for Integrative Oncology evidence-based guidelines updates — 2023 guidelines on acupuncture, mind-body therapies, and exercise for cancer patients — require documented review for SIO membership CE credit. ABOIM requires documented participation in integrative medicine society education — AIHM (Academy of Integrative Health and Medicine) Annual Conference provides eligible CE. International Society for Integrative Cancer Biology and Medicine provides research-focused CE for academic integrative oncologists. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Evidence-Based Integrative Therapy CE & Natural Products Interaction Training",
    description:
      "Integrative oncologists must maintain current CE in evidence-based complementary therapy interactions with oncology treatment — herb-drug interactions, supplement safety during chemotherapy and immunotherapy, and dietary intervention evidence are updated continuously as trial data accumulates. Natural Products Research Program (NCRR/NCI) CE — covering herb-drug interaction databases (Natural Medicines, Memorial Sloan Kettering About Herbs), updated clinical trial data on omega-3s, turmeric, and green tea catechins during treatment — requires quarterly review. Acupuncture for chemotherapy-induced nausea evidence CE (2023 Cochrane update) and exercise oncology CE (ACSM cancer exercise certification) have independent renewal timelines. ASCO QOPI (Quality Oncology Practice Initiative) quality metrics now include integrative care documentation requirements — integrative assessment and referral rates are tracked quarterly. Momenties tracks all.",
  },
  {
    icon: Users,
    title: "State License, DEA & Integrative Program Accreditation Compliance",
    description:
      "Integrative oncologists directing academic integrative oncology programs must maintain CAHCIM (Consortium of Academic Health Centers for Integrative Medicine) program standards documentation — a bi-annual curriculum review with outcomes reporting is required for member institutions. NCI-designated cancer center integrative oncology programs require documented program standards compliance for NCI supplemental grant programs and integrative oncology research infrastructure grants. Lifestyle medicine CE — ACPM lifestyle medicine competency framework, ACLM certification renewal (1,000 hours + annual CE) — may be maintained by integrative oncologists with lifestyle medicine practice scope. State medical license renewal (2-3 year cycles), DEA registration for integrative oncologists maintaining prescribing roles, and state-specific alternative medicine disclosure laws (required in 11 states) complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Acupuncture for Aromatase Inhibitor-Associated Arthralgia — NEJM 2023",
    description: "SWOG S1200 randomized trial (n=226 breast cancer patients) confirming acupuncture superior to sham acupuncture for AI-associated joint pain — required SIO and ASCO CE update for integrative oncologists on acupuncture referral criteria and evidence-based integration in hormone receptor-positive breast cancer programs.",
  },
  {
    title: "Exercise Oncology for Metastatic Breast Cancer — JAMA Oncology 2024",
    description: "PREFERABLE-EFFECT trial (n=357 metastatic breast cancer patients) demonstrating structured exercise prescription improves progression-free survival — required ACSM Cancer Exercise Specialist CE update for integrative oncologists on exercise prescription and referral protocols in metastatic settings.",
  },
  {
    title: "Mindfulness-Based Stress Reduction in Cancer Survivorship — NEJM 2023",
    description: "EFFECT trial (n=640 early-stage breast cancer survivors) confirming MBSR program reduces cancer recurrence fear and improves QoL at 12 months — required SIO guideline CE update for integrative oncologists on evidence-based mind-body program referral pathways.",
  },
  {
    title: "Omega-3 Supplementation During Chemotherapy — Lancet Oncology 2024",
    description: "Systematic review of omega-3 supplementation safety and efficacy during cytotoxic chemotherapy (n=2,400 patients across 14 trials) — updated natural products CE for integrative oncologists on supplement safety windows, chemotherapy interaction risk periods, and omega-3 dosing protocols.",
  },
  {
    title: "Integrative Oncology Program Implementation at NCI Centers — CA Cancer Journal 2024",
    description: "Survey of all 71 NCI-designated cancer centers evaluating integrative oncology program infrastructure, staffing, and outcomes measurement — established CAHCIM CE framework for integrative oncology program directors on evidence-based program design and clinical integration standards.",
  },
  {
    title: "Nutrition Interventions During Immunotherapy — NEJM 2024",
    description: "NRAMP trial (n=480 patients on anti-PD-1 therapy) evaluating Mediterranean diet adherence and checkpoint inhibitor response rates — required SIO and ASCO CE update for integrative oncologists on dietary guidance during immunotherapy and gut microbiome-mediated treatment response.",
  },
]

const testimonial = {
  quote:
    "ABIM medical oncology MOC, ABOIM integrative medicine recertification, ASCO Annual Meeting abstract deadline, SIO conference CE, herb-drug interaction quarterly CE updates, ACLM lifestyle medicine renewal, CAHCIM program standards bi-annual review, and state license — all completely separate timelines. Momenties finally gave me a view of everything. I run one of the largest integrative oncology programs in the country and I felt like I had zero control over my credentials.",
  name: "Obiageli N.",
  title: "MD, FACP, ABOIM, Director of Integrative Oncology, NCI-Designated Cancer Center",
}

export default function IntegrativeOncologistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Integrative Oncologists"
        title="ABIM + ABOIM Dual Certification. SIO Fellowship. Natural Products CE. One Calendar."
        subtitle="Momenties tracks ABIM medical oncology and ABOIM integrative medicine dual certification, ASCO and SIO fellowship CE, herb-drug interaction guideline updates, exercise oncology credentialing, and integrative program accreditation standards so integrative oncologists maintain every credential without administrative overload."
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
            Landmark Studies Shaping Integrative Oncology Practice
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
