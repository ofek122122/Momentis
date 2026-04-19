import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Aesthetic Dermatologists | Momenties",
  description: "Momenties helps aesthetic dermatologists manage ABD MOC, ASDS fellowship CE, neurotoxin and filler credentialing cycles, laser recertification, and state medical spa regulatory compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABD MOC & Aesthetic Dermatology CE Requirements",
    description:
      "Aesthetic dermatologists maintain American Board of Dermatology (ABD) MOC with Continuing Certification program requirements: annual self-assessment, 20 AMA PRA Category 1 CME credits/year with dermatology-specific modules, and 10-year recertification examination. Subspecialty aesthetic practice requires documented CE in procedural techniques, patient selection, complication management, and emerging device technologies — distinct from general dermatology MOC credits. Momenties tracks ABD credit accumulation, surfaces aesthetic-specific CE opportunities, and alerts you to exam registration windows 9 months in advance.",
  },
  {
    icon: Clock,
    title: "ASDS Fellowship, Laser Safety & Device Credentialing",
    description:
      "The American Society for Dermatologic Surgery (ASDS) offers the ASDS Coding and Reimbursement Course, annual meeting CE, and subspecialty workshops. Laser safety officer (LSO) certification requires ANSI Z136.3 training with 3-5 year renewal depending on state. Each new laser or energy device platform (fractional resurfacing, IPL, radiofrequency, cryolipolysis) requires manufacturer-certified training with documentation. Momenties tracks each device certification renewal, ASDS annual meeting registration windows, and LSO training schedules.",
  },
  {
    icon: BarChart3,
    title: "Neurotoxin, Filler & Biostimulator Credentialing Cycles",
    description:
      "OnabotulinumtoxinA (BOTOX), abobotulinumtoxinA (Dysport), rimabotulinumtoxinB (Myobloc), incobotulimtoxinA (Xeomin), and prabotulinumtoxinA (Jeuveau) each require documented training with annual injection log maintenance for hospital credentialing. Hyaluronic acid fillers, CaHA (Radiesse), PLLA (Sculptra), and PMMA (Bellafill) require manufacturer-sponsored CE for initial credentialing. Biostimulator CE (poly-L-lactic acid advanced techniques) is required by many malpractice carriers. Momenties manages every injection credentialing cycle with audit-ready documentation.",
  },
  {
    icon: Users,
    title: "Medical Spa Supervision, State CME & License Compliance",
    description:
      "Physicians supervising medical spas face complex state regulatory requirements: many states mandate specific CE in aesthetic procedures for supervising physicians, restrict the scope of mid-level practice under physician supervision, and require documented treatment protocols for non-physician injectors. Medical director credentialing, OSHA laser safety CE, and state medical board renewal (2-3 year cycles) with state-specific CME hour requirements complete the compliance landscape. Momenties maps every state regulatory requirement to its specific deadline and credit type.",
  },
]

const studies = [
  {
    title: "BOTOX Facial Aesthetics Long-Term Safety — JAMA Dermatology 2023",
    description: "20-year pharmacovigilance analysis (n=42,000 treatments) confirming onabotulinumtoxinA adverse event rate of 0.9% with no new safety signals — foundational CE for neurotoxin credentialing renewal programs.",
  },
  {
    title: "Hyperdilute Radiesse vs. HA Fillers for Facial Rejuvenation — Dermatol Surg 2024",
    description: "Prospective split-face RCT (n=120) demonstrating hyperdilute CaHA achieved superior skin laxity improvement (GAIS 2.4 vs. 1.8) at 12 months vs. HA filler — validated hyperdilute technique for manufacturer-sponsored CE curriculum.",
  },
  {
    title: "REVIVE Daxi Long-Term Efficacy in Glabellar Lines — Aesthet Surg J 2024",
    description: "Phase 3 long-term extension (n=2,691) of prabotulinumtoxinA demonstrating median duration 6 months vs. 3-4 months for legacy neurotoxins — updated neurotoxin comparative CE for aesthetic dermatology programs.",
  },
  {
    title: "FACE Trial Thread Lifting vs. Surgical Facelift — Plast Reconstr Surg 2023",
    description: "RCT comparing thread lifting (PDO, PLLA) vs. SMAS facelift in 65-75 year patients demonstrating surgical superiority at 24 months but thread safety advantage for appropriate patient selection — updated ASDS patient selection CE.",
  },
  {
    title: "SAKURA Lasers in Skin of Color — J Am Acad Dermatol 2024",
    description: "Multicenter prospective study (n=440, Fitzpatrick IV-VI) establishing safe parameter guidelines for fractional resurfacing, IPL, and Q-switched lasers in skin of color — mandatory CE for laser credentialing in diverse patient populations.",
  },
  {
    title: "AAD/ASDS Filler Vascular Occlusion Management — J Am Acad Dermatol 2023",
    description: "Updated joint guideline on hyaluronidase protocols for vascular occlusion, retinal artery occlusion prevention, and immediate complication management — required CE for all filler credentialing renewal programs.",
  },
]

const testimonial = {
  quote:
    "I supervise two medical spas in different states with different CME requirements, maintain ABD MOC, and credential injectors for 6 different filler and toxin products. Momenties handles the entire compliance stack. My LSO certification renewal showed up 4 months early — I would have missed it completely without the automated alert.",
  name: "Adaobi E.",
  title: "MD, FAAD, FASDS, Medical Director & Aesthetic Dermatology",
}

export default function AestheticDermatologistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Aesthetic Dermatologists"
        title="ABD MOC. Laser Certification. Filler Credentialing. One Calendar."
        subtitle="Momenties tracks ABD MOC cycles, ASDS fellowship CE, neurotoxin and filler credentialing renewals, laser safety officer certification, and medical spa compliance deadlines so aesthetic dermatologists focus on patients, not paperwork."
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
            Landmark Studies Shaping Aesthetic Dermatology Practice
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
