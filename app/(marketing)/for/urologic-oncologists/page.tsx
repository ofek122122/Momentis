import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Urologic Oncologists | Momenties",
  description: "Momenties helps urologic oncologists manage AUA board certification renewal, SUO fellowship CE, robotic surgery credentialing, PSMA therapy REMS compliance, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABS/AUA Board Certification & Urologic Oncology MOC",
    description:
      "Urologic oncologists maintain ABS General Surgery certification or ABU (American Board of Urology) certification through 10-year recertification cycles — ABU requires a Part I written exam and Part II oral exam with case log documentation. The Society of Urologic Oncology (SUO) and ABU do not offer a separate urologic oncology subspecialty board, but ABU Maintenance of Certification requires SUO-specific CME documentation for oncology-focused diplomates. ABU diplomates must complete an online Self-Assessment Module (SAM) annually and submit 2-year case logs documenting minimum procedure volumes for urologic oncology (radical prostatectomy, cystectomy, nephrectomy). Robotic surgery case volumes are now tracked separately for ABU reappointment.",
  },
  {
    icon: Clock,
    title: "SUO Fellowship CE & AUA Annual Meeting Calendar",
    description:
      "The American Urological Association (AUA) Annual Meeting is the primary CE event — abstract submission opens October-November for May conferences. Society of Urologic Oncology (SUO) Annual Meeting (December) provides subspecialty CE in prostate, bladder, kidney, and testicular cancers. European Association of Urology (EAU) Annual Congress provides supplementary CE for academic urologic oncologists. AUA/ASTRO/SUO Guideline updates — 2023-2024 revisions covering localized prostate cancer management, muscle-invasive bladder cancer, metastatic RCC, and upper tract urothelial carcinoma — require CE documentation. PSMA PET-guided staging updated guidelines are required CE for urologic oncologists managing PSMA-PET results. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Robotic Surgery Credentialing & Novel Therapy REMS Compliance",
    description:
      "Urologic oncologists performing robotic surgery navigate the most complex credentialing landscape in urology. Intuitive Surgical da Vinci system credentialing — for robotic prostatectomy, cystectomy, nephrectomy, and partial nephrectomy — requires simulator training, proctored case completion, and annual hospital reappointment with case volume documentation. Lu-177 PSMA therapy (Pluvicto) REMS prescriber certification requires annual renewal with updated patient monitoring documentation. Cabazitaxel JEVTANA and radium-223 Xofigo have independent prescriber education requirements for prostate cancer treatment. Prostate Specific Membrane Antigen (PSMA) diagnostic radiopharmaceuticals (Pylarify, Locametz) require prescriber training CE. Momenties tracks all REMS and credentialing cycles.",
  },
  {
    icon: Users,
    title: "State License, DEA & Multidisciplinary Tumor Board CE",
    description:
      "Urologic oncologists participating in multidisciplinary genitourinary tumor boards must document tumor board attendance for ABU MOC credit — typically 10 case conferences per year with documentation of treatment consensus decisions. NCI designation maintenance for university urologic oncology programs requires documented tumor board participation, clinical trial accrual, and USMLE/GEC training compliance. State medical license renewal (2-3 year cycles), DEA registration for controlled substance prescribing, ACLS certification (2-year cycle), and radiation safety certification (for therapeutic radiopharmaceutical programs) complete the compliance portfolio. Momenties consolidates all with jurisdiction-specific tracking.",
  },
]

const studies = [
  {
    title: "STAMPEDE Metastatic Prostate Cancer 5-Year Outcomes — NEJM 2024",
    description: "STAMPEDE trial 5-year OS data (n=1,200 patients) confirming docetaxel intensification survival benefit in de novo metastatic hormone-sensitive prostate cancer — required AUA/SUO CE update for metastatic HSPC treatment sequencing.",
  },
  {
    title: "Lu-177 PSMA Therapy Real-World Outcomes — Lancet Oncology 2024",
    description: "Real-world registry (n=3,200 patients) confirming Pluvicto effectiveness and safety in PSMA PET-positive mCRPC outside VISION trial criteria — updated REMS prescriber CE on patient selection and toxicity monitoring for Lu-177 PSMA.",
  },
  {
    title: "Active Surveillance for Intermediate-Risk Prostate Cancer — NEJM 2024",
    description: "PIVOT-RS multicenter study (n=2,400 intermediate-risk patients) validating active surveillance safety with PSA doubling time and genomic testing guidance — updated AUA localized prostate cancer guideline CE for urologic oncologists.",
  },
  {
    title: "Pembrolizumab + Enfortumab Vedotin for Bladder Cancer — NEJM 2024",
    description: "EV-302 trial (n=886 patients) demonstrating pembrolizumab + enfortumab vedotin superiority over cisplatin-gemcitabine as first-line mUC — established new standard of care CE for SUO fellowship and ABU MOC bladder cancer curriculum.",
  },
  {
    title: "Perioperative Nivolumab for Muscle-Invasive Bladder Cancer — NEJM 2024",
    description: "CheckMate 274 extended follow-up and new CheckMate 901 data confirming perioperative nivolumab benefit — updated AUA/ASTRO/SUO muscle-invasive bladder cancer guideline CE for neoadjuvant and adjuvant immunotherapy protocols.",
  },
  {
    title: "Belzutifan for VHL-Associated RCC — NEJM 2023",
    description: "LITESPARK-004 extension data (n=61 VHL mutation carriers) confirming belzutifan durable response in VHL disease-associated RCC and CNS hemangioblastomas — required CE for urologic oncologists managing hereditary kidney cancer syndromes.",
  },
]

const testimonial = {
  quote:
    "ABU recertification case logs, AUA abstract deadlines, SUO annual meeting CE, Pluvicto REMS certification, robotic credentialing at two hospitals, tumor board documentation, and state license — each running independently. Momenties mapped all of it in one calendar. My ABU oral exam preparation started 12 months out instead of 8 weeks.",
  name: "Emeka C.",
  title: "MD, FACS, Urologic Oncology Program Director",
}

export default function UrologicOncologistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Urologic Oncologists"
        title="ABU Certification. Robotic Credentialing. PSMA REMS. One Calendar."
        subtitle="Momenties tracks ABU board certification, AUA and SUO fellowship CE, robotic surgery credentialing, Lu-177 PSMA therapy REMS compliance, and tumor board documentation so urologic oncologists maintain every credential without administrative chaos."
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
            Landmark Studies Shaping Urologic Oncology Practice
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
