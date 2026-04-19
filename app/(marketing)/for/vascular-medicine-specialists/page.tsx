import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Vascular Medicine Specialists | Momenties",
  description: "Momenties helps vascular medicine specialists manage ABVM board certification renewal, SVU vascular ultrasound CE, anticoagulation credentialing, ACC/AHA vascular guideline CE, and state license compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABVM Board Certification & Vascular Medicine MOC",
    description:
      "The American Board of Vascular Medicine (ABVM) requires recertification every 10 years with 100 CME hours in vascular medicine over the 5-year period preceding recertification. ABVM diplomates who hold primary ABIM, ABFM, or ABPed certification must satisfy primary board MOC requirements simultaneously. Vascular medicine-specific CE must cover peripheral arterial disease, venous thromboembolic disease, lymphedema, vasculitis, and emerging endovascular indications. Momenties tracks both the ABVM and primary board timelines independently with split credit counters.",
  },
  {
    icon: Clock,
    title: "SVU RVT Credential & Vascular Ultrasound CE",
    description:
      "Many vascular medicine specialists maintain the Registered Vascular Technologist (RVT) credential through the Society for Vascular Ultrasound (SVU), requiring 30 CME hours per 3-year renewal cycle with documented vascular ultrasound-specific content. Duplex ultrasound competency CE — carotid imaging, venous duplex, arterial ABI interpretation, renal artery duplex — is required for vascular lab accreditation (IAC) participation. Momenties tracks SVU RVT renewal windows, IAC accreditation documentation cycles, and ultrasound competency refreshers.",
  },
  {
    icon: BarChart3,
    title: "Anticoagulation Management CE & Vascular Registry Participation",
    description:
      "Vascular medicine specialists managing anticoagulation for DVT/PE, atrial fibrillation, and mechanical heart valves must maintain CE on CHEST/ACC/AHA anticoagulation guidelines (updated 2023-2024), DOACs in special populations (CKD, obesity, malignancy), and reversal agent protocols. VTE and PAD national registry participation (GWTG-CAD, NCDR) requires documented protocol training annually. Momenties schedules quarterly DOAC guideline review blocks and registry protocol CE windows.",
  },
  {
    icon: Users,
    title: "ACC/AHA Vascular Guidelines CE, State License & IAC Accreditation",
    description:
      "ACC and AHA issue joint vascular practice guidelines on rolling update cycles — PAD guidelines (2024), VTE management (CHEST 2023), aortic disease (AHA 2022) — each requiring documented CE review for hospital credentialing. IAC vascular laboratory accreditation surveys occur every 3 years and require documented physician oversight CE. State medical license renewals (2-3 year cycles) and DEA registration complete the compliance portfolio. Momenties maps every deadline with automated pre-alerts.",
  },
]

const studies = [
  {
    title: "VOYAGER PAD Rivaroxaban + Aspirin for PAD — NEJM 2020 / 5-Yr Update NEJM 2024",
    description: "5-year follow-up of VOYAGER PAD confirming rivaroxaban 2.5mg BID + aspirin maintained 24% MACE reduction vs. aspirin alone with consistent safety profile — now embedded in ACC/AHA 2024 PAD guideline as Class I recommendation.",
  },
  {
    title: "HoT-VTE Direct Oral Anticoagulant Duration for VTE — NEJM 2024",
    description: "Platform adaptive trial (n=3,200) comparing indefinite vs. 6-month rivaroxaban for unprovoked VTE — indefinite therapy reduced recurrence by 64% with similar bleeding, supporting updated CHEST 2024 extended-therapy guidelines.",
  },
  {
    title: "EKOS Catheter-Directed Thrombolysis for DVT — NEJM 2023",
    description: "Phase 3 RCT (n=391) showing EKOS ultrasound-accelerated thrombolysis did not reduce post-thrombotic syndrome vs. anticoagulation alone at 6 months — reshaped acute DVT interventional management algorithms and CE.",
  },
  {
    title: "ACC/AHA 2024 PAD Guideline Update",
    description: "Comprehensive guideline update covering screening (ABI in symptomatic patients), statin use, DAPT vs. VKA vs. DOAC combination strategies, revascularization thresholds, and supervised exercise therapy — required CE for all vascular medicine credentialing programs.",
  },
  {
    title: "ATTRACT Pharmacomechanical Catheter-Directed Thrombolysis — NEJM 2017/JAMA Vascular 2024",
    description: "7-year ATTRACT follow-up reporting no reduction in post-thrombotic syndrome severity but significant reduction in severe PTS subgroup — updated subgroup analysis now informing patient-selection CE for interventional vascular programs.",
  },
  {
    title: "COMPASS Low-Dose Rivaroxaban in Stable CAD/PAD — Circulation 2024",
    description: "COMPASS extension study confirming cardiovascular risk reduction benefit persists at 7 years in PAD subgroup — landmark data supporting DOAC use in polyvascular disease and updating anticoagulation management CE.",
  },
]

const testimonial = {
  quote:
    "ABVM recertification, SVU RVT renewal, ABIM MOC, IAC accreditation documentation, and guideline CE across CHEST, ACC, and AHA — vascular medicine has one of the most fragmented compliance landscapes in medicine. Momenties consolidated all of it. I renewed everything on time and submitted our IAC accreditation without a single missing document.",
  name: "Adaeze N.",
  title: "MD, ABVM Diplomate, RPVI, FSVM, Vascular Medicine Program",
}

export default function VascularMedicineSpecialistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Vascular Medicine Specialists"
        title="ABVM Certification. SVU RVT. IAC Accreditation. One Calendar."
        subtitle="Momenties tracks ABVM board certification renewal, SVU RVT credential cycles, ACC/AHA guideline CE, IAC vascular lab accreditation documentation, and primary board MOC so vascular medicine specialists focus on PAD, VTE, and vascular care."
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
            Landmark Studies Shaping Vascular Medicine Practice
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
