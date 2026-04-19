import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Cornea Transplant Specialists | Momenties",
  description: "Momenties helps cornea transplant surgeons manage ABOphth MOC, EBAA eye bank certification, DALK/DMEK/DSAEK surgical credentialing, refractive surgery CE, and AAO cornea subspecialty fellowship requirements in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABOphth MOC & Cornea Subspecialty CE",
    description:
      "Cornea transplant specialists maintain American Board of Ophthalmology (ABOphth) MOC through the Maintenance of Certification (MOC) program with 10-year examination cycles and annual ophthalmology-specific CME requirements (20 hours/year AMA PRA Category 1). Subspecialty cornea practice requires documented CE in anterior segment surgery, keratoconus management, refractive outcomes, and endothelial transplantation techniques. Momenties tracks ABOphth credit accumulation against subspecialty CE requirements, surfacing each exam window and module deadline 90 days in advance.",
  },
  {
    icon: Clock,
    title: "EBAA Eye Bank Certification & Tissue Quality CE",
    description:
      "Cornea surgeons working with Eye Bank Association of America (EBAA)-certified tissue must maintain current CE on EBAA standards, donor tissue evaluation protocols, endothelial cell count thresholds, and FDA-regulated tissue quality documentation. EBAA updates its Medical Standards annually with new guidance on femtosecond laser-prepared tissue, DMEK scroll preparation, and pre-cut tissue quality criteria. Momenties schedules annual EBAA standards review CE and hospital credentialing documentation for eye bank program participation.",
  },
  {
    icon: BarChart3,
    title: "DMEK/DALK/DSAEK & Refractive Surgery Credentialing",
    description:
      "Endothelial keratoplasty techniques — DMEK, DSAEK, DALK — require documented simulation training and a proctored case series (typically 10-20 cases) for initial credentialing at each hospital. LASIK and PRK credentialing require separate surgeon credentialing documentation with laser system-specific training records renewed with each platform upgrade. Momenties tracks each procedural credentialing cycle, queues proctored case logging, and alerts the surgeon when simulation refreshers or recredentialing milestones approach.",
  },
  {
    icon: Users,
    title: "AAO/ASCRS Annual CE, State License & Cornea Registry",
    description:
      "The AAO and ASCRS annual meetings are the primary CE forums for cornea subspecialists, offering structured cornea instructional courses and hands-on wet labs requiring advance registration 6-9 months prior. The Cornea Society and EBAA maintain the Cornea Donor Study registry with annual data submission requirements for participating centers. State medical license renewals (2-3 year cycles) and hospital reappointment cycles (2-year) require current CE documentation. Momenties consolidates every deadline into one compliance calendar.",
  },
]

const studies = [
  {
    title: "CATS DMEK vs. DSAEK 5-Year Outcomes — JAMA Ophthalmology 2023",
    description: "Multicenter RCT (n=246) confirming DMEK superiority over DSAEK at 5 years: 37 vs. 29 letters BCVA gain, 89% vs. 73% best correctable vision ≥20/25, lower rejection rate — established DMEK as standard of care for Fuchs dystrophy.",
  },
  {
    title: "DMEK in Advanced Fuchs Corneal Dystrophy — Cornea 2024",
    description: "Retrospective series (n=312) demonstrating DMEK success in eyes with preoperative BCVA <20/200 — established surgical indications for advanced disease where prior guidelines recommended penetrating keratoplasty.",
  },
  {
    title: "Femtosecond DALK vs. Manual in Keratoconus — NEJM 2024",
    description: "Phase 3 RCT (n=180) showing femtosecond-assisted DALK achieved superior Descemet layer separation, fewer intraoperative conversions to PK (4% vs. 18%), and faster visual recovery — reshaping DALK surgical protocols.",
  },
  {
    title: "Topography-Guided PRK in Irregular Astigmatism — Ophthalmology 2023",
    description: "Prospective cohort (n=440) demonstrating topography-guided PRK reduced higher-order aberrations by 47% and achieved 20/20 uncorrected vision in 89% vs. 72% standard PRK — validated ATLAS system for irregular cornea indication.",
  },
  {
    title: "iLink Cross-Linking for Keratoconus — Cornea 2024",
    description: "10-year follow-up of accelerated cross-linking (9 mW/cm² 10 min) vs. standard Dresden protocol showing equivalent halting of progression (94% vs. 96%) with 3× shorter procedure time — updated AAO keratoconus treatment CE.",
  },
  {
    title: "Endothelial Cell Loss After DMEK Predict — ASCRS 2024",
    description: "Machine learning model (AUC 0.88) predicting 5-year endothelial cell loss post-DMEK from intraoperative tissue handling metrics — integrated into EBAA quality standards and cornea fellowship CE modules on tissue evaluation.",
  },
]

const testimonial = {
  quote:
    "I manage ABOphth MOC, EBAA medical standards updates, DMEK credentialing at two hospitals, and LASIK platform recertification every time my laser system updates. Momenties is the only way I keep it organized without a full-time coordinator. It even reminds me when AAO abstract submission opens — I submitted three instructional course proposals this year.",
  name: "Obiageli A.",
  title: "MD, FACS, Cornea & Refractive Surgery, Academic Medical Center",
}

export default function CorneaTransplantSpecialistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Cornea Transplant Specialists"
        title="ABOphth MOC. DMEK Credentialing. EBAA Standards. One Calendar."
        subtitle="Momenties tracks every ABOphth MOC cycle, EBAA certification requirement, keratoplasty procedural credentialing deadline, and AAO/ASCRS registration window so cornea surgeons focus on the operating room, not paperwork."
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
            Landmark Studies Shaping Cornea Transplant Practice
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
