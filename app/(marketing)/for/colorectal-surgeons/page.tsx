import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Colorectal Surgeons | Momenties",
  description: "Momenties helps colorectal surgeons manage ABCRS board certification renewal, ASCRS fellowship CE, robotic/laparoscopic procedure credentialing, NAPRC accreditation cycles, and state license compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABCRS Board Certification & ABS General Surgery MOC",
    description:
      "Colorectal surgeons certified through the American Board of Colon and Rectal Surgery (ABCRS) maintain 10-year recertification cycles with a content-specific examination covering colon and rectal cancer surgery, inflammatory bowel disease, anorectal disorders, laparoscopic and robotic colorectal procedures, and functional colorectal surgery. ABCRS diplomates who completed ABS general surgery training first must maintain ABS continuous certification concurrently — ABS requires annual continuous certification exam modules (SCORE curriculum self-assessment) separate from ABCRS content. ABCRS MOC credit requirements include ASCRS self-assessment CME (SCORE-based) modules completed annually. Momenties tracks all board timelines with advance exam window alerts.",
  },
  {
    icon: Clock,
    title: "ASCRS Fellowship CE & Colorectal Surgery Conference Calendar",
    description:
      "The American Society of Colon and Rectal Surgeons (ASCRS) Annual Scientific Meeting is the primary CE event — abstract submission opens September-October for May-June conferences. ASCRS fellowship (FASCRS) maintenance requires documented CE in minimally invasive colorectal surgery, pelvic floor reconstruction, and transanal surgery. The Society of American Gastrointestinal and Endoscopic Surgeons (SAGES) annual meeting provides laparoscopic and robotic CE relevant to ABCRS recertification. ASCRS Practice Parameters — updated 2023-2024 for rectal cancer (watch-and-wait protocol update), diverticular disease, and pilonidal disease — require documented CE review for FASCRS maintenance. ACLS recertification (2-year cycle) is required for all colorectal surgeons. Momenties schedules all.",
  },
  {
    icon: BarChart3,
    title: "Robotic Surgery Credentialing & Minimally Invasive Procedure CE",
    description:
      "Colorectal surgeons establishing or maintaining robotic colorectal surgery programs navigate the most complex device-specific credentialing in surgical subspecialties. Intuitive Surgical da Vinci robotic colorectal surgery credentialing requires simulator training, proctored case completion, and hospital-specific credentialing review — with annual case volume requirements for maintenance (typically 12-24 cases/year). Transanal Total Mesorectal Excision (TaTME) credentialing — a procedure with steep learning curve and requiring formal training programs — has structured credentialing requirements through ESCP and ASCRS. TAMIS (transanal minimally invasive surgery) and TAMIS-TEO certification follow similar training program pathways. Momenties tracks all device and procedure credentialing timelines.",
  },
  {
    icon: Users,
    title: "NAPRC Accreditation, NSQIP Registry & State License Compliance",
    description:
      "The National Accreditation Program for Rectal Cancer (NAPRC) — an ACS-administered quality program — requires annual data submission, bi-annual program review meetings, and 3-year full accreditation site visits. Participation in NSQIP (National Surgical Quality Improvement Program) colorectal surgery module requires quarterly data submission and annual program review. Hospital reappointment (typically 2-year cycles) requires procedure volume documentation, complication rate benchmarking, and IBD/cancer multidisciplinary tumor board participation documentation. State medical license renewal (2-3 year cycles), DEA registration, and endoscopy credentialing (colonoscopy case volume maintenance) complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Watch-and-Wait for Rectal Cancer After CRT — NEJM 2024",
    description: "Updated international registry data (n=3,600 patients with clinical complete response) establishing 5-year outcomes for non-operative management after chemoradiation — required ASCRS CE update for watch-and-wait protocol credentialing and patient selection criteria.",
  },
  {
    title: "TaTME vs Laparoscopic TME for Rectal Cancer — Lancet Oncology 2023",
    description: "Multicenter RCT (n=1,200 patients) demonstrating non-inferiority of TaTME to laparoscopic TME with improved circumferential resection margin rates — updated ASCRS TaTME credentialing CE requirements and training program standards.",
  },
  {
    title: "Robotic vs Laparoscopic Colorectal Surgery — JAMA Surgery 2024",
    description: "Meta-analysis (n=68 RCTs, 18,000 patients) confirming robotic colorectal surgery advantages in conversion rate, blood loss, and LOS — established credentialing CE update for robotic colorectal surgery program development.",
  },
  {
    title: "ASCRS 2023 Clinical Practice Guidelines: Diverticulitis — Dis Colon Rectum 2023",
    description: "Comprehensive guideline update on acute diverticulitis management, elective colectomy indications, and immunocompromised patient management — required CE for all FASCRS maintenance and ABCRS recertification curriculum.",
  },
  {
    title: "Pelvic Floor Dysfunction After Rectal Surgery — NEJM 2024",
    description: "Prospective cohort (n=1,800 patients post-rectal resection) quantifying low anterior resection syndrome severity and interventional outcomes — updated ASCRS pelvic floor CE for colorectal surgeons managing low rectal anastomosis patients.",
  },
  {
    title: "Transanal Irrigation for LAR Syndrome — Lancet 2023",
    description: "Multicenter RCT (n=400 patients with low anterior resection syndrome) confirming transanal irrigation superiority over standard care — established new ASCRS functional colorectal surgery CE requirement for low rectal resection follow-up management.",
  },
]

const testimonial = {
  quote:
    "ABCRS recertification, ABS continuous certification, ASCRS fellowship CE, robotic credentialing at two hospitals, NAPRC annual submission, NSQIP quarterly data, hospital reappointment, colonoscopy volume maintenance — each on its own clock. Momenties gave me one compliance calendar. My ABCRS recertification prep started 15 months before the exam window.",
  name: "Chukwuemeka N.",
  title: "MD, FASCRS, FACS, Colorectal Surgery Program Director",
}

export default function ColorectalSurgeonsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Colorectal Surgeons"
        title="ABCRS Certification. Robotic Credentialing. NAPRC Accreditation. One Calendar."
        subtitle="Momenties tracks ABCRS board certification, ASCRS fellowship CE, robotic and TaTME procedure credentialing, NAPRC data submission, and ABS continuous certification so colorectal surgeons manage every credential without administrative chaos."
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
            Landmark Studies Shaping Colorectal Surgery Practice
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
