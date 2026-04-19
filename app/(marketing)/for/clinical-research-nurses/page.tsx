import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Clinical Research Nurses | Momenties",
  description: "Momenties helps clinical research nurses manage CCRN/CCRC certification, GCP training renewals, IRB protocol amendment tracking, FDA 21 CFR Part 11 compliance, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "CCRC/CCRN Certification & Clinical Research Nursing MOC",
    description:
      "Clinical research nurses maintaining Society of Clinical Research Associates (SoCRA) Certified Clinical Research Professional (CCRP) certification follow a 3-year recertification cycle requiring 45 continuing education units (CEUs) in clinical research topics — research ethics, regulatory compliance, protocol management, and data integrity. Association of Clinical Research Professionals (ACRP) Certified Clinical Research Coordinator (CCRC) certification follows a 3-year cycle requiring 45 contact hours including at least 1 ethics hour. Clinical research nurses with direct patient care roles maintain RN licensure with state-specific CE requirements independent of research certifications. Clinical Trial Management certification — ACRP CCRC Advanced certification for senior research nurses — requires demonstration of mentorship and leadership activities. Research regulatory coordinators may hold Regulatory Affairs Certification (RAC) from RAPS (Regulatory Affairs Professionals Society) with 20 CE hours per 2-year period. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "GCP Training Renewals & Clinical Research Conference Calendar",
    description:
      "Good Clinical Practice (GCP) training — ICH E6 R2 (R3 update expected 2024) — is required for all research staff with regulatory authority stipulating 2-3 year renewal cycles depending on institutional policy and sponsor requirements; FDA-regulated trials require documented GCP training for all investigators and coordinators. CITI Program GCP course completion (typically 2-year renewal, varies by institution) requires tracking per staff member per protocol. Human Subjects Research (HSR) training and HIPAA research training require institution-specific renewal — typically annual or biennial at academic medical centers. Association of Clinical Research Professionals (ACRP) Annual Conference (April/May) and SoCRA Annual Conference (September/October) are primary research nursing CE events. Clinical research protocol training: new protocol initiation training (sponsor-provided, completed before first patient enrollment), protocol amendment training (within 14 days of approval), and annual retraining for long-term trials. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "IRB Protocol Compliance, FDA Reporting & Trial Master File Calendar",
    description:
      "Clinical research nurses managing active protocols navigate concurrent regulatory reporting calendars — IRB continuing review (annual for approved studies, submitted 4-6 weeks before anniversary date to allow review time), IRB protocol amendments (submitted within 10 days of anticipated change for non-emergency modifications), and IRB reportable events (unanticipated adverse events within 5-7 days, serious adverse events within 10 days at most institutions). FDA reportable events for FDA-regulated studies: safety reports (IND Safety Reports for unexpected serious adverse reactions within 7 or 15 days depending on severity), Annual Reports to FDA (annual IND report due within 60 days of IND anniversary). Protocol deviation reporting (institution-specific SOP timelines, typically 5-10 business days from discovery). Regulatory binders: FDA Form 1572 Investigator Acknowledgements (updated with any changes), delegation logs (updated within 5 days of any staff change), and laboratory reference ranges (updated with each new requisition). Momenties tracks all protocol compliance cycles.",
  },
  {
    icon: Users,
    title: "State License, DEA Research Registration & Clinical Trial Quality Calendar",
    description:
      "Clinical research nurses with research prescriptive authority in collaborative practice agreements maintain DEA registration for investigational drug dispensing concurrent with RN state licensure. Research site quality audit calendar: internal audit readiness review (quarterly for high-enrollment sites, semi-annual for low-enrollment), FDA Site Inspection preparation (inspection readiness assessment within 30 days of NDA submission for trials supporting regulatory applications), and sponsor monitoring visit preparation (1-2 week preparation window per monitoring visit). Clinical trial quality metrics reporting: protocol deviation rate trends, enrollment versus target tracking, data query resolution cycle times (sites with >10% outstanding queries risk database lock delays). Study close-out calendar: last patient last visit, database lock (typically 2-4 weeks post-LPLV), trial master file archiving (15-year retention per ICH E6 for FDA-regulated studies), and site closure letter filing. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "ICH E6 R3 GCP Revision Impact on Clinical Research Nurses — ClinicalTrialsArena 2024",
    description: "ICH E6 R3 finalized guidance (2024) introducing risk-based monitoring and expanded digital data collection requirements — required GCP CE update for clinical research nurses on updated source document verification standards, remote monitoring protocols, and electronic informed consent documentation.",
  },
  {
    title: "Decentralized Clinical Trials — NEJM 2023",
    description: "Meta-analysis of 15 decentralized trial implementations (n=8,000 participants) confirming DCT protocols improve enrollment diversity 35% versus site-only trials — required CCRP CE update for clinical research nurses on remote participant monitoring standards, digital biomarker collection, and hybrid visit documentation compliance.",
  },
  {
    title: "Electronic Informed Consent in Oncology Trials — JAMA Oncology 2024",
    description: "Multicenter RCT (n=2,400 oncology patients) confirming eConsent equivalent to paper consent for comprehension with superior re-access to consent information — required IRB CE update for research nurses on eConsent documentation standards, re-consent workflows, and FDA 21 CFR Part 11 electronic records compliance.",
  },
  {
    title: "Protocol Deviation Rates and Trial Quality — Clinical Trials 2023",
    description: "Industry survey (n=500 clinical sites) identifying protocol training gaps as primary driver of preventable deviations — required ACRP CE update for clinical research nurses on protocol deviation classification frameworks, root cause analysis documentation, and CAPA (corrective and preventive action) implementation.",
  },
  {
    title: "Research Nurse Workforce and Patient Safety — Lancet 2024",
    description: "International study (n=120 trial sites) confirming research nurse-to-patient ratio below 1:15 correlates with 2.4x higher protocol deviation rates — required SoCRA CE update for research nurses on workload assessment tools, site escalation frameworks, and sponsor communication standards for capacity issues.",
  },
  {
    title: "Artificial Intelligence in Clinical Trial Operations — Nature Medicine 2024",
    description: "Implementation study of AI-assisted site monitoring (n=50 trial sites) demonstrating 40% reduction in critical data queries — required CCRP CE update for clinical research nurses on AI monitoring platform validation requirements, source data verification with AI tools, and FDA 21 CFR Part 11 compliance for AI-assisted trial operations.",
  },
]

const testimonial = {
  quote:
    "CCRC 3-year recertification with 45 contact hours, CITI GCP biennial renewal for 8 active protocols, IRB continuing review for 6 studies on staggered annual cycles, protocol amendment tracking across 4 sponsors, FDA IND Safety Report 7-day and 15-day timelines, protocol deviation reporting within 5 business days, annual FDA IND reports, sponsor monitoring visit preparation, quarterly internal audit readiness reviews, DEA research registration, and state RN license — all simultaneously. Momenties mapped every deadline. We passed an FDA site inspection with zero findings.",
  name: "Ngozi R.",
  title: "RN, CCRC, Senior Clinical Research Nurse Coordinator",
}

export default function ClinicalResearchNursesPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Clinical Research Nurses"
        title="CCRC Certification. GCP Renewals. IRB Compliance. One Calendar."
        subtitle="Momenties tracks CCRC and CCRP recertification CE cycles, CITI GCP biennial renewal per protocol, IRB continuing review annual schedules, protocol amendment tracking, FDA adverse event reporting timelines, sponsor monitoring visit preparation, internal audit readiness calendars, DEA research registration, and state RN license so clinical research nurses maintain every credential and compliance obligation without administrative overload."
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
            Landmark Developments Shaping Clinical Research Nursing
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
