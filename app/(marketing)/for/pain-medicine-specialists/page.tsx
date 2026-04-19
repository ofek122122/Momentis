import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pain Medicine Specialists | Momenties",
  description: "Momenties helps pain medicine specialists manage ABPM board certification renewal, APS/ASRA fellowship CE, REMS controlled substance compliance, interventional procedure credentialing, and state license compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABPM Board Certification & Pain Medicine MOC",
    description:
      "The American Board of Pain Medicine (ABPM) requires recertification every 10 years with a comprehensive examination covering interventional procedures, pharmacology, psychological aspects, and palliative care. Physicians dually certified through ABPM and ABPM-ACGME (ABA, ABIM, ABN, or ABFM pathway) must maintain primary board MOC concurrently — each with independent credit categories and self-assessment requirements. The ACGME-accredited pain medicine subspecialty certification through ABA/ABIM/ABFM/ABN requires LLSA/KSA self-assessment modules annually. Momenties tracks all certification timelines simultaneously with split credit counters.",
  },
  {
    icon: Clock,
    title: "APS, ASRA & AAPM Fellowship CE Requirements",
    description:
      "The American Pain Society (APS) and American Society of Regional Anesthesia and Pain Medicine (ASRA) annual meetings are the primary CE forums for pain specialists — ASRA Pain Medicine Annual Meeting abstract deadlines open 5-6 months before the conference with early registration closing 3 months out. The American Academy of Pain Medicine (AAPM) annual conference provides CME for multidisciplinary pain management and opioid prescribing CE. ASRA Interventional Pain Management practice advisories — updated 2023 — require documented CE review for practitioners performing neuraxial and peripheral nerve procedures. Momenties schedules all conference deadlines and registration windows.",
  },
  {
    icon: BarChart3,
    title: "DEA REMS, Controlled Substance CE & Opioid Prescribing Compliance",
    description:
      "Pain medicine specialists face the most complex controlled substance compliance landscape in medicine. DEA registration (3-year renewal), state medical license opioid prescribing CE (8-24 hours per cycle depending on state), and buprenorphine/naloxone REMS waiver maintenance are all managed on different schedules. Risk Evaluation and Mitigation Strategy (REMS) for extended-release/long-acting opioids requires periodic prescriber CE renewal. State Prescription Drug Monitoring Program (PDMP) registration — now mandatory in 49 states — requires annual attestation in several jurisdictions. Momenties tracks every DEA, REMS, and PDMP deadline with owner-assigned alerts.",
  },
  {
    icon: Users,
    title: "Interventional Procedure Credentialing & Fluoroscopy CE",
    description:
      "Hospital credentialing for interventional pain procedures — spinal cord stimulation, intrathecal drug delivery, radiofrequency ablation, epidural steroid injections, and peripheral nerve stimulation — requires procedure volume documentation, complication tracking, and periodic reappointment review (typically every 2 years). Fluoroscopy safety certification (typically 8-hour course with renewal every 3-5 years depending on state radiation safety regulations) is required for all fluoroscopically guided procedures. Ultrasound-guided procedure competency documentation — increasingly required by ASA and ASRA standards — requires documented cases and potentially simulation-based assessment. Momenties consolidates all credentialing deadlines.",
  },
]

const studies = [
  {
    title: "SPACE Trial Long-Term Outcomes — NEJM 2023",
    description: "7-year follow-up of the Spinal Cord Stimulation vs. Conventional Medical Management trial showing sustained pain relief and functional improvement in failed back surgery syndrome — updated ASRA practice advisory CE for SCS indication criteria and patient selection.",
  },
  {
    title: "PROSPECT Guidelines for Regional Analgesia — Anesthesiology 2024",
    description: "Updated PROSPECT (Procedure-Specific Postoperative Pain Management) collaborative guidelines covering optimal regional anesthesia techniques for 14 surgical procedures — mandatory CE update for ASRA members and hospital credentialing renewals in regional anesthesia.",
  },
  {
    title: "SUBOXONE REMS Update & Buprenorphine Access — JAMA 2023",
    description: "Congressional elimination of the DEA X-waiver requirement (DATA 2000 waiver) for buprenorphine prescribing — required CE for all pain specialists on updated prescribing regulations, REMS modifications, and state-level implementation variations.",
  },
  {
    title: "Ketamine Infusion for Chronic Pain — Pain 2024",
    description: "Systematic review and meta-analysis (n=42 RCTs) establishing evidence-based protocols for IV ketamine infusion in refractory chronic pain, CRPS, and fibromyalgia — foundational CE for pain specialists establishing or updating ketamine infusion programs.",
  },
  {
    title: "Neuromodulation for Chronic Low Back Pain — NEJM 2024",
    description: "Multicenter RCT (n=396) demonstrating 10 kHz high-frequency spinal cord stimulation superiority over conventional SCS for chronic low back pain — updated ASRA/AAPM credentialing CE for SCS programming and paresthesia-free stimulation techniques.",
  },
  {
    title: "Long-Term Opioid Therapy Safety — JAMA Internal Medicine 2024",
    description: "Retrospective cohort (n=1.2M patients) quantifying dose-dependent cardiovascular and overdose risks with long-term opioid therapy — established updated risk stratification CE requirements for CDC Opioid Prescribing Guideline 2022 implementation.",
  },
]

const testimonial = {
  quote:
    "Between ABPM recertification, ABA primary board MOC, DEA renewal, REMS CE, state opioid prescribing requirements, fluoroscopy certification, and SCS credentialing at three hospital systems — my compliance calendar was a disaster. Momenties gave me one place to track everything. I haven&apos;t missed a deadline in 18 months and my hospital reappointment went smoothly for the first time.",
  name: "Chukwuemeka A.",
  title: "MD, DABPM, FIPP, Interventional Pain Medicine",
}

export default function PainMedicineSpecialistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Pain Medicine Specialists"
        title="ABPM Certification. REMS Compliance. SCS Credentialing. One Calendar."
        subtitle="Momenties tracks ABPM board certification, DEA and opioid REMS renewals, ASRA fellowship CE, interventional procedure credentialing, and fluoroscopy certification so pain specialists focus on patients, not paperwork."
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
            Landmark Studies Shaping Pain Medicine Practice
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
