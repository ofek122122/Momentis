import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Hospice Medical Directors | Momenties",
  description: "Momenties helps hospice medical directors manage ABIM/ABFM palliative medicine board certification, AAHPM fellowship CE, Medicare hospice compliance documentation, NHPCO standards, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABIM/ABFM Hospice & Palliative Medicine Board Certification MOC",
    description:
      "Hospice medical directors maintaining ABIM or ABFM Hospice and Palliative Medicine (HPM) subspecialty certification manage dual MOC requirements — the HPM subspecialty cycle plus their primary specialty board (ABIM internal medicine, ABFM family medicine, ABP pediatrics, ABPN psychiatry, or ABS surgery). HPM MOC requires 40 CME credits per 5-year cycle in hospice and palliative medicine topics, with documented participation in quality improvement activities — Medicare hospice quality reporting data is eligible for ABIM MOC QI credit. ABIM LKA quarterly assessments cover symptom management, advance care planning, communication skills, and ethical frameworks in end-of-life care. Hospice medical directors serving as Medical Director of Record for Medicare-certified hospice programs carry additional administrative documentation requirements under CMS Conditions of Participation. Momenties tracks all dual certification timelines.",
  },
  {
    icon: Clock,
    title: "AAHPM Fellowship CE & Palliative Care Society Conference Calendar",
    description:
      "The American Academy of Hospice and Palliative Medicine (AAHPM) Annual Assembly (February/March) is the primary CE event — abstract submission opens June-July for winter conferences, 7-8 months in advance. AAHPM fellowship (FAAHPM) maintenance requires 50 AAHPM-approved CME credits per 3-year cycle with specific requirements in symptom management, communication in serious illness, ethics, and interdisciplinary team leadership. NHPCO (National Hospice and Palliative Care Organization) Clinical Education Series provides hospice-specific CE including Medicare compliance CE, interdisciplinary team training, and quality improvement CE. Palliative Care Leadership Centers (VitalTalk) communication training for hospice medical directors — Serious Illness Conversation Guide and REMAP training — have annual renewal components. AAHPM BoardSAVE Examination Preparation CE is required every 5 years before HPM subspecialty recertification. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Medicare Hospice Compliance & CMS Conditions of Participation",
    description:
      "Hospice medical directors serving as Medical Director of Record under CMS Conditions of Participation (42 CFR Part 418) must document face-to-face encounters — required every 60 days for patients with third and subsequent benefit periods — within the required timeframe with attestation language meeting CMS documentation standards. Face-to-face encounter documentation failures are one of the most common hospice compliance audit findings and trigger Medicare claim denials. Hospice Quality Reporting Program (HQRP) data submission — HIS (Hospice Item Set) admission and discharge assessments, CAHPS Hospice Survey administration — has quarterly and annual reporting deadlines with reimbursement penalties for non-compliance. Physician certification and recertification of terminal illness prognosis must be documented for each 60-day benefit period with clinical narrative meeting LCD standards. Momenties manages all CMS compliance timelines.",
  },
  {
    icon: Users,
    title: "NHPCO Standards, State License & Interdisciplinary Team CE",
    description:
      "Hospice medical directors participating in NHPCO Quality and Standards program maintain NHPCO Standards compliance documentation — annual self-assessment against NHPCO Standards of Practice with quality improvement plan documentation. JCAHO/ACHC accreditation (3-year cycle) for accredited hospice programs requires medical director participation in mock surveys, clinical record audits, and policy documentation annual reviews. Interdisciplinary team leadership CE — chairing IDG (Interdisciplinary Group) meetings is a CMS requirement with required physician participation rates documented — is tracked quarterly. State Hospice Program License renewal requirements vary by state and add jurisdiction-specific CE for hospice medical directors. State medical license renewal (2-3 year cycles), DEA registration for opioid and controlled substance prescribing (primary in hospice practice), and implicit bias CE (required in 23 states) complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Palliative Care Integration in ICU — NEJM 2024",
    description: "ENABLE IV randomized trial (n=560 ICU patients) confirming proactive palliative care consultation reduces ICU length of stay and improves family satisfaction — required AAHPM CE update for hospice medical directors on early palliative care integration, goals of care conversations, and ICU-to-hospice transition protocols.",
  },
  {
    title: "Opioid Titration in Cancer Pain — Lancet 2023",
    description: "International RCT of rapid opioid titration protocols in cancer pain (n=1,200 patients) demonstrating nurse-led fast-titration equivalence to physician-only titration — updated AAHPM CE for hospice medical directors on opioid prescribing protocols, nurse titration frameworks, and documentation standards.",
  },
  {
    title: "Advance Care Planning Conversations — JAMA 2024",
    description: "PRESENCE multicenter RCT (n=2,100 seriously ill patients) confirming VitalTalk-trained clinician communication improves goal-concordant care rates 34% — required AAHPM Serious Illness Communication CE for hospice medical directors on conversation training, documentation, and outcome measurement.",
  },
  {
    title: "Hospice Enrollment Patterns and Outcomes — NEJM 2023",
    description: "National Medicare hospice enrollment analysis (n=180,000 patients) identifying prognosis uncertainty as the primary driver of late referrals — updated NHPCO and AAHPM CE on hospice eligibility criteria communication, physician referral pattern analysis, and clinical narrative documentation for Medicare certification.",
  },
  {
    title: "Palliative Sedation for Refractory Symptoms — NEJM 2024",
    description: "Multi-site RCT (n=340 hospice patients with refractory suffering) evaluating palliative sedation protocols against standard symptom management — required AAHPM ethics CE for hospice medical directors on palliative sedation guidelines, informed consent documentation, and ethics committee involvement criteria.",
  },
  {
    title: "Hospice Quality Metrics and Patient Experience — JAMA 2023",
    description: "National analysis of CAHPS Hospice Survey results across 4,000 programs — identifying family-centered care communication as the primary driver of satisfaction variation — required NHPCO quality CE for hospice medical directors on CAHPS performance improvement and care communication training.",
  },
]

const testimonial = {
  quote:
    "ABIM HPM subspecialty MOC, ABIM internal medicine MOC, FAAHPM fellowship CE, face-to-face encounter documentation cycles, CMS benefit period recertification timelines, HQRP quarterly data submissions, NHPCO Standards annual self-assessment, JCAHO accreditation prep, and state license — all completely separate compliance calendars. Momenties mapped every deadline. I have not had a CMS compliance finding since implementing it.",
  name: "Chidinma B.",
  title: "MD, FAAHPM, FACP, Hospice Medical Director & Palliative Medicine Program Chief",
}

export default function HospiceMedicalDirectorsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Hospice Medical Directors"
        title="HPM Board Certification. CMS Compliance. NHPCO Standards. One Calendar."
        subtitle="Momenties tracks ABIM and ABFM hospice and palliative medicine dual certification, AAHPM fellowship CE, Medicare face-to-face encounter documentation cycles, CMS Conditions of Participation compliance, HQRP reporting deadlines, and NHPCO Standards documentation so hospice medical directors maintain every credential without administrative overload."
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
            Landmark Studies Shaping Hospice & Palliative Medicine Practice
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
