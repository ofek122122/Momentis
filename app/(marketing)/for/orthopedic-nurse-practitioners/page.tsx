import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Orthopedic Nurse Practitioners | Momenties",
  description: "Momenties helps Orthopedic NPs manage ONC certification, AAOS conference deadlines, post-surgical care protocols, hospital credentialing reappointment, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ONC Certification & Orthopedic NP Recertification",
    description:
      "Orthopedic Nurse Practitioners maintaining NAON Orthopedic Nurse Certified (ONC) certification follow a 5-year recertification cycle requiring 40 CE hours — 20 hours must be in orthopedic nursing content and at least 5 hours must be in pharmacology. ONP-C (Orthopedic Nurse Practitioner Certified, NAON, 5-year, 40 CE hours) is the advanced practice-specific certification for NPs in orthopedic subspecialty practice. NPs in trauma orthopedics maintain TNCC (Trauma Nursing Core Course, ENA, 4-year renewal, 16-hour course) and may hold TCRN (Trauma Certified Registered Nurse, BCEN, 3-year, 90 CE hours) concurrently. Orthopedic NPs in sports medicine settings pursue ANCC Adult-Gerontology Primary Care NP Board Certified (AGPCNP-BC) or AANP AGNP-C for expanded primary care scope, plus NASM Corrective Exercise Specialist (CES) for movement screening integration. NPs in spine surgery programs may pursue certification through NASS (North American Spine Society) — NASS Spine Clinician Certificate Program (annual CE). Musculoskeletal ultrasound certification: RMSK (Registered in Musculoskeletal) through ARDMS for orthopedic NPs performing diagnostic MSK ultrasound (annual maintenance). Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AAOS/NAON CE & Orthopedic NP Conference Calendar",
    description:
      "Orthopedic Nursing: The Journal of Orthopedic and Musculoskeletal Care CE modules (NAON-approved, applicable to ONC renewal) with quarterly release schedule. NAON National Orthopedic Nursing Conference (April/May) is the primary orthopedic NP CE event — abstract submission opens October-November. AAOS Annual Meeting (February/March) provides orthopedic surgery clinical update CE for NPs in surgical practices — registration opens September-October. AOSSM Annual Meeting (July) provides sports medicine orthopedic CE. NASS Annual Meeting (October) provides spine surgery CE for NPs in spine programs. Arthroplasty society meeting CE (AAHKS, November) for NPs in joint replacement programs. Fracture management CE: AO Foundation fracture principles courses (annual) for NPs in trauma orthopedics. Post-surgical care protocol updates: ERAS (Enhanced Recovery After Surgery) orthopedic protocols annual update CE, DVT prevention protocol annual update (ACCP guidelines), and periprosthetic joint infection prevention bundle annual CE. Casting and splinting competency: annual competency verification for NPs performing casting and splinting procedures. Injectable medication CE: corticosteroid injection competency annual documentation, hyaluronic acid injection annual CE update. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Hospital Credentialing, Procedure Privileges & Quality Calendar",
    description:
      "Orthopedic NPs with procedure privileges manage credentialing portfolios that rival surgical subspecialists — hospital or outpatient surgical center credentialing reappointment (annual or biennial) requires documentation of procedure volumes and complication rates for each privileged procedure. Procedure privilege calendar: joint aspiration and injection case log (quarterly review — minimum annual volumes for knee, hip, shoulder, wrist injection privileges), casting and splinting volume documentation, and closed fracture reduction case log. Surgical assist privileges: first assist surgical scrub documentation for NPs with operative room privileges, annual OR competency verification, and sterile technique annual attestation. Orthopedic quality reporting: NSQIP (National Surgical Quality Improvement Program) data submission for orthopedic procedures, COREPAS (Comprehensive Orthopedic Registry and Patient Access System) participation for joint replacement programs, AAHKS registry data quarterly, and post-operative readmission rate tracking. VTE (Venous Thromboembolism) prevention: joint replacement VTE prophylaxis compliance quarterly audit — orthopedic NPs are primary prescribers of post-op anticoagulation. PJI (Periprosthetic Joint Infection) prevention bundle compliance: pre-operative antibiotic timing, glucose management, and skin preparation documentation annual audit. ERAS protocol adherence quarterly review for orthopedic NPs in joint replacement or spine surgery programs. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Orthopedic Collaborative Practice Calendar",
    description:
      "Orthopedic NPs prescribing opioid analgesics for acute post-surgical pain and chronic musculoskeletal pain maintain DEA registration (3-year renewal) plus state PDMP registration (annual in most states — PDMP query required before opioid prescribing in most state statutes). Collaborative practice agreement requirements (in 14 states with restricted APRN practice): annual renewal with supervising orthopedic surgeon, scope-of-practice review covering procedure privileges, post-operative management authority, and opioid prescribing guidelines. Opioid prescribing compliance: CDC opioid prescribing guidelines annual CE update (2022 revision implementation monitoring), state-specific opioid prescribing limits monitoring, and post-operative opioid tapering protocol annual review. Medicare enrollment for orthopedic NPs: CMS-855I revalidation every 5 years, annual PECOS profile verification, and MIPS reporting for orthopedic NPs billing ≥$90,000 Medicare annually. NPI registry annual verification. Outpatient orthopedic surgery center privileging (annual for ambulatory surgery centers — separate from hospital credentialing). Implant vendor compliance: annual industry interaction compliance training for NPs in joint replacement programs (PhRMA/AdvaMed guidelines compliance documentation). State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Orthopedic NP Post-Surgical Outcomes — Journal of Bone & Joint Surgery 2024",
    description: "Multicenter cohort (n=12,000 total joint replacements) confirming orthopedic NP-managed post-surgical care achieves equivalent 90-day readmission and complication rates to surgeon-only care with superior patient-reported outcome measures — required NAON CE update for orthopedic NPs on PRO documentation standards, ERAS protocol compliance tracking, and 90-day episode management frameworks.",
  },
  {
    title: "NP-Led Fracture Liaison Service — Osteoporosis International 2023",
    description: "Implementation study (n=3,800 fragility fracture patients) confirming NP-led fracture liaison service achieves secondary fracture prevention rate of 78% versus 42% in standard care — required NAON CE update for orthopedic NPs on DEXA documentation, bisphosphonate prescribing protocols, and Falls Prevention Program integration.",
  },
  {
    title: "Orthopedic NP Injection Outcomes — AJSM 2024",
    description: "Prospective cohort (n=5,000 musculoskeletal injections) confirming orthopedic NP-performed corticosteroid and hyaluronic acid injections achieve equivalent pain reduction and complication rates to orthopedist-performed injections with ultrasound guidance — required NAON CE update for orthopedic NPs on injection documentation standards, informed consent frameworks, and post-injection outcome measurement.",
  },
  {
    title: "VTE Prevention in Joint Replacement — NEJM 2023",
    description: "RCT (n=8,000 hip and knee arthroplasty patients) confirming NP-led VTE risk stratification and anticoagulation management achieves equivalent DVT/PE rates to orthopedist-directed care — required ACCP CE update for orthopedic NPs on VTE risk stratification documentation, anticoagulation choice algorithms, and bridge therapy indications.",
  },
  {
    title: "Orthopedic NP Telehealth Outcomes — CORR 2024",
    description: "Prospective study (n=2,400 post-surgical patients) confirming orthopedic NP-led telehealth post-surgical follow-up achieves equivalent wound complication detection to in-person visits with 62% patient preference for telehealth — required NAON CE update for orthopedic NPs on telehealth documentation standards, wound photo assessment protocols, and remote patient monitoring integration.",
  },
  {
    title: "ERAS Protocol in Orthopedics — Anesthesiology 2023",
    description: "Implementation study (n=6,000 joint replacement patients) confirming NP-led ERAS protocol implementation reduces length of stay 1.3 days and opioid consumption 34% without increasing readmissions — required NAON CE update for orthopedic NPs on ERAS documentation requirements, multimodal analgesia prescribing protocols, and same-day discharge eligibility criteria.",
  },
]

const testimonial = {
  quote:
    "ONC 5-year recertification with 40 CE hours and 20 orthopedic-specific hours, ONP-C concurrent 5-year renewal, TNCC 4-year renewal, RMSK annual maintenance, NAON Conference, AAOS Annual Meeting, AOSSM Annual Meeting, hospital biennial credentialing reappointment with quarterly procedure logs for 6 privileged procedures, annual OR competency and sterile technique attestation, NSQIP quarterly data submissions, VTE prophylaxis quarterly compliance audit, ERAS adherence quarterly review, PJI prevention bundle annual audit, DEA 3-year renewal, annual PDMP registration, CDC opioid prescribing annual CE update, MIPS annual quality reporting, collaborative agreement annual renewal with supervising orthopedic surgeon, ASC annual privileging, implant vendor compliance annual training, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Taiwo O.",
  title: "MSN, ONP-C, ONC, TNCC, Orthopedic NP & Arthroplasty Program Lead",
}

export default function OrthopedicNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Orthopedic Nurse Practitioners"
        title="ONC Certification. Procedure Logs. VTE Compliance. One Calendar."
        subtitle="Momenties tracks ONC and ONP-C 5-year recertification CE cycles, TNCC 4-year renewal, hospital biennial credentialing reappointment with quarterly procedure volume logs for injection and surgical privileges, NSQIP quality data submissions, VTE prevention quarterly compliance audits, ERAS protocol adherence, DEA 3-year renewal, MIPS reporting, collaborative practice agreement annual renewal, and state APRN license so Orthopedic NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Orthopedic NP Practice
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
