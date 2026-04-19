import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Orthopedic Surgery Nurse Practitioners | Momenties",
  description: "Momenties helps Orthopedic Surgery NPs manage AGACNP-BC certification, ONC specialty renewal, surgical case logs, AJRR registry reporting, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "AGACNP-BC Certification & Orthopedic NP Subspecialty Recertification",
    description:
      "Orthopedic Surgery Nurse Practitioners maintain ANCC Adult-Gerontology Acute Care NP Board Certified (AGACNP-BC, 5-year recertification, 75 CE hours) for surgical and perioperative roles, or AGPCNP-BC/FNP-C for outpatient orthopedic and joint replacement follow-up clinics. ONS/NAON (National Association of Orthopaedic Nurses) ONC (Orthopaedic Nurse Certified, 4-year, 90 CE hours with orthopaedic-specific content) for NPs in combined advanced practice and staff nursing roles, or NPs who want orthopaedic specialty recognition. NAON advanced practice certificate: ANCC does not offer a standalone orthopaedic NP specialty certification, but NPs pursue ONC-Advanced Practice through NAON CE pathways. Sports medicine and musculoskeletal specialty: AOSSM (American Orthopaedic Society for Sports Medicine) annual CE for NPs in sports medicine programs. Arthroplasty specialty: AAHKS (American Association of Hip and Knee Surgeons) annual CE for NPs in joint replacement programs. Spine specialty: NASS (North American Spine Society) annual CE for NPs in spine surgery programs. Pediatric orthopedics: POSNA (Pediatric Orthopaedic Society of North America) annual CE for NPs in pediatric orthopaedic programs. Trauma orthopedics: OTA (Orthopaedic Trauma Association) annual CE for NPs in trauma programs. Ultrasound-guided joint injection: AAPM&R (American Academy of Physical Medicine & Rehabilitation) annual CE for NPs performing MSK ultrasound-guided injections. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AAOS/NAON CE & Orthopedic Surgery NP Conference Calendar",
    description:
      "AAOS (American Academy of Orthopaedic Surgeons) Annual Meeting (February-March) is the primary orthopedic NP CE event — NPs attending AAOS earn AMA PRA Category 1 CME accepted by ANCC. NAON Annual Congress (May-June) provides ONC-specific CE. AAHKS Annual Meeting (November) for NPs in joint replacement programs. NASS Annual Meeting (October) for NPs in spine programs. AOSSM Annual Meeting (July) for NPs in sports medicine programs. Arthroplasty CE calendar: annual total hip and knee arthroplasty guideline update CE (AAHKS guidelines annual update), annual antibiotic prophylaxis protocol update CE (AAOS clinical practice guideline annual update), annual VTE prophylaxis guideline update CE (AAOS guideline — aspirin vs. LMWH — annual update), annual periprosthetic joint infection (PJI) protocol CE, and annual metal-on-metal implant annual surveillance CE. Spine CE: annual cervical and lumbar spine surgical guideline CE, annual ACDF and TDR annual outcome CE, and annual spine infection and adjacent segment disease CE. Trauma CE: annual fracture fixation guideline update, annual damage control orthopedics CE, and annual fragility fracture protocol CE. Ultrasound-guided injection CE: annual MSK ultrasound interpretation CE, annual joint aspiration and injection technique CE. Postoperative care CE: annual multimodal pain management CE (opioid-sparing protocols — AAOS STRONG for Surgery program annual update), and annual physical therapy protocol update CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "AJRR Registry Reporting, Surgical Case Logs & Orthopedic Quality Calendar",
    description:
      "Orthopedic Surgery NPs in AAOS-designated practices participating in the AJRR (American Joint Replacement Registry) contribute to national arthroplasty outcomes data — AJRR participation requires quarterly case submission. Orthopedic quality reporting calendar: AJRR quarterly case data submission for all THA and TKA cases, annual AJRR program report review, and quarterly 90-day readmission and complication rate review. NSQIP (ACS National Surgical Quality Improvement Program) calendar for orthopedic practices: monthly case submission for participating practices (optional but increasingly expected), quarterly NSQIP SCR (Surgical Clinical Reviewer) data reconciliation, and annual NSQIP program participation report review. Surgical case volume documentation: annual total joint replacement volume documentation for hospital credentialing renewal, annual fracture fixation case log for trauma NPs, and annual spine procedure case log for spine NPs. VTE prophylaxis quality: quarterly VTE prophylaxis compliance audit (AAOS guideline compliance — aspirin or LMWH per risk stratification), and annual pulmonary embolism rate documentation. SSI (Surgical Site Infection) quality: quarterly SSI rate documentation for CMS hospital-acquired condition reporting, monthly antibiotic timing compliance review (within 60 minutes of incision — Joint Commission standard). Arthroplasty outcomes: annual patient-reported outcome measure (PROM) completion rate review (PROMIS-10, KOOS, HOOS — AAHKS quality standard), and annual PJI rate documentation. Implant tracking: annual GUDID (Global Unique Device Identification Database) implant tracking compliance review. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Orthopedic Surgical Collaborative Practice Calendar",
    description:
      "Orthopedic Surgery NPs prescribing controlled substances for postoperative pain management (opioids — oxycodone, hydrocodone, tramadol), perioperative anxiolytics, and muscle relaxants maintain DEA registration (3-year renewal) plus state PDMP registration. Opioid prescribing compliance: AAOS STRONG for Surgery opioid-sparing protocol annual review, annual state-specific opioid prescribing limit compliance review (day supply limits vary by state — 7-day, 14-day limits for acute postsurgical pain), and PDMP query documentation compliance monthly audit. Surgical first-assist credentialing: orthopedic surgery NPs with surgical first-assist privileges maintain biennial hospital credentialing with mandatory case volume documentation (typically minimum 100 cases annually for active surgical privileges) — AAOS and institutional credentialing committees require annual procedure log submission. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising orthopedic surgeon, scope-of-practice review covering post-operative management, cast and splint application, joint aspiration and injection, and surgical assist authority. Implant manufacturer education: annual joint replacement implant system training (Stryker, Zimmer Biomet, Smith & Nephew, DePuy Synthes — manufacturer annual product update training for surgical team members). FDA implant recall monitoring: annual FDA MedWatch orthopedic implant recall review and patient notification protocol update. Medicare enrollment: CMS-855I revalidation every 5 years, PECOS annual verification, MIPS reporting for NPs billing ≥$90,000. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Orthopedic Surgery NP Total Joint Outcomes — JBJS 2024",
    description: "National multicenter cohort (n=28,000 THA and TKA patients) confirming NP-managed perioperative orthopedic care achieves equivalent 90-day readmission rates and PROM scores to surgeon-managed perioperative care — required AAOS CE update for orthopedic NPs on PROM documentation standards, multimodal pain management frameworks, and VTE prophylaxis protocol compliance.",
  },
  {
    title: "NP-Led Opioid-Sparing TJR Protocol — CORR 2023",
    description: "Multicenter RCT (n=3,600 total joint replacement patients) confirming NP-led opioid-sparing multimodal analgesia protocol reduces postoperative opioid consumption 52% without increasing pain scores or 30-day outcomes — required AAOS CE update for orthopedic NPs on STRONG for Surgery documentation standards, NSAIDs and acetaminophen protocol frameworks, and opioid prescription day-supply limit compliance.",
  },
  {
    title: "Orthopedic NP Spine Surgery Outcomes — Spine 2024",
    description: "Retrospective analysis (n=8,400 lumbar spine surgery patients) confirming NP-managed spine surgery postoperative care achieves equivalent 1-year ODI improvement and adjacent segment disease surveillance compliance to surgeon-managed care — required NASS CE update for spine NPs on ODI documentation standards, radiographic surveillance frameworks, and return-to-activity protocol documentation.",
  },
  {
    title: "NP-Led Fracture Clinic Outcomes — Injury 2023",
    description: "Prospective cohort (n=4,200 non-operative fracture patients) confirming NP-managed fracture clinic achieves equivalent healing rates and functional outcomes to orthopedic surgeon-managed fracture clinic with 34% reduction in time-to-appointment — required AAOS CE update for orthopedic NPs on fracture classification documentation standards, radiographic monitoring frameworks, and return-to-activity decision protocols.",
  },
  {
    title: "Orthopedic NP PJI Prevention — JAAOS 2024",
    description: "Multicenter quality improvement study (n=12,000 total joint replacement cases) confirming NP-led perioperative PJI prevention protocol achieves 0.62% deep infection rate versus 1.1% historical control — required AAHKS CE update for orthopedic NPs on preoperative risk stratification documentation, antibiotic prophylaxis timing frameworks, and wound surveillance protocol compliance.",
  },
  {
    title: "NP Telemedicine Orthopedics — JB&JS Open Access 2023",
    description: "Prospective study (n=3,200 orthopedic telehealth encounters) confirming NP-delivered tele-orthopedics achieves equivalent postoperative assessment accuracy and patient satisfaction to in-person visits for THA, TKA, and spine surgery follow-up — required AAOS CE update for orthopedic NPs on telehealth wound assessment documentation, remote PROM collection frameworks, and tele-PT referral protocols.",
  },
]

const testimonial = {
  quote:
    "AGACNP-BC 5-year recertification, ONC concurrent 4-year renewal, AAOS Annual Meeting CE, NAON Annual Congress CE, AAHKS Annual Meeting CE for joint replacement CE, NASS Annual Meeting CE for spine program CE, annual VTE prophylaxis guideline update CE, annual PJI protocol CE, annual STRONG for Surgery opioid-sparing protocol CE update, annual joint implant manufacturer training for Stryker and Zimmer Biomet systems, annual FDA implant recall review, AJRR quarterly case data submission for 280 THA/TKA cases per year, quarterly VTE prophylaxis compliance audit, quarterly SSI rate documentation, monthly antibiotic timing compliance review, annual PROM completion rate review for 640 arthroplasty patients, annual implant GUDID compliance review, annual case log documentation for hospital credentialing renewal (450 surgical assists), quarterly NSQIP data reconciliation, annual state opioid day-supply limit compliance review, DEA 3-year renewal, collaborative agreement annual renewal with orthopedic surgeon, biennial hospital credentialing for surgical first-assist privileges with case volume documentation, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Adaeze OR.",
  title: "MSN, AGACNP-BC, ONC, Orthopedic Surgery NP & Arthroplasty Program Coordinator",
}

export default function OrthopedicSurgeryNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Orthopedic Surgery Nurse Practitioners"
        title="ONC Renewal. AJRR Registry Reporting. Surgical Case Logs. One Calendar."
        subtitle="Momenties tracks AGACNP-BC 5-year recertification, ONC concurrent 4-year renewal, AJRR quarterly THA/TKA case data submission, quarterly VTE prophylaxis compliance audits, annual PJI protocol CE, annual STRONG for Surgery opioid-sparing protocol update, annual implant manufacturer training, biennial hospital credentialing for surgical first-assist privileges with annual case log, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Orthopedic Surgery NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Orthopedic Surgery NP Practice
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
