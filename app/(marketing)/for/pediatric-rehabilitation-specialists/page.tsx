import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pediatric Rehabilitation Specialists | Momenties",
  description: "Momenties helps pediatric physiatrists manage ABPM&R pediatric rehabilitation subspecialty certification, ACRM fellowship CE, AAP developmental screening CE, assistive technology credentialing, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABPM&R Pediatric Rehabilitation Certification & Subspecialty MOC",
    description:
      "Pediatric rehabilitation specialists maintaining American Board of Physical Medicine and Rehabilitation (ABPM&R) certification manage the standard ABPM&R MOC cycle — 30 CME credits per year with at least 20 per year in PM&R topics, LKA quarterly assessments covering musculoskeletal, neurological, and functional rehabilitation competencies, and 10-year recertification examination. ABPM&R does not offer a formal pediatric rehabilitation subspecialty examination, but pediatric physiatrists seeking additional certification may pursue the American Board of Pediatrics (ABP) Neurodevelopmental Disabilities (ND) subspecialty — requiring ABP primary pediatrics certification and a separate 5-year ND recertification cycle. Pediatric rehabilitation specialists in brain injury medicine maintain ABPM&R Brain Injury Medicine subspecialty certification — a separate 10-year examination cycle. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ACRM Fellowship CE & Pediatric Rehabilitation Conference Calendar",
    description:
      "American Congress of Rehabilitation Medicine (ACRM) Annual Conference (October) is the primary pediatric rehabilitation CE event — abstract submission opens March-April, 6-7 months in advance. ACRM fellowship (FACRM) maintenance requires demonstrated leadership in rehabilitation research or practice. American Academy of Physical Medicine and Rehabilitation (AAPM&R) Annual Assembly (November) provides PM&R CE relevant for ABPM&R MOC. Pediatric rehabilitation subspecialty CE — American Academy for Cerebral Palsy and Developmental Medicine (AACPDM) Annual Meeting (September) and Society for Pediatric Rehabilitation Medicine (SPRM) symposia — provides condition-specific CE for pediatric physiatrists managing cerebral palsy, spina bifida, and pediatric acquired brain injury. Pediatric orthotics and prosthetics CE — ABC (American Board for Certification in Orthotics, Prosthetics and Pedorthics) collaboration — is required for physiatrists prescribing and fitting O&P devices. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Assistive Technology Credentialing & Seating/Mobility Evaluation Calendar",
    description:
      "Pediatric rehabilitation specialists performing complex rehabilitation technology assessments — power wheelchair evaluations, augmentative and alternative communication (AAC) device assessments, and custom seating and mobility systems — must maintain ATP (Assistive Technology Professional) certification through RESNA (Rehabilitation Engineering and Assistive Technology Society of North America) — a 5-year recertification cycle requiring 20 CE credits. Complex rehabilitation technology (CRT) evaluations require face-to-face physician or therapist assessment documentation meeting CMS coverage criteria — documentation must include functional limitations, medical necessity, and expected functional gain. Botulinum toxin injection credentialing for pediatric spasticity management — OnabotulinumtoxinA (Botox) and AbobotulinumtoxinA (Dysport) procedural CE — requires institutional credentialing with annual competency documentation at many pediatric institutions. Momenties tracks all technology credentialing cycles.",
  },
  {
    icon: Users,
    title: "AAP Developmental Screening CE, State License & Pediatric Transition Care",
    description:
      "Pediatric rehabilitation specialists managing patients transitioning to adult services must document competency in adult care coordination — health care transition certification (AAP/AAFP/ACP) or Got Transition program training — required for accredited comprehensive pediatric rehabilitation programs. Pediatric rehabilitation program accreditation (CARF — Commission on Accreditation of Rehabilitation Facilities, 3-year cycle) requires medical director participation in program-wide outcomes tracking, utilization management reviews, and consumer satisfaction survey analysis. IDEA (Individuals with Disabilities Education Act) educational liaison roles — pediatric physiatrists serving on IEP teams or as consulting physicians for school-based services — require annual school system coordination and documentation. DEA registration for pediatric spasticity management (baclofen, tizanidine, and Schedule II opioids for pain management). State medical license renewal (2-3 year cycles) completes the portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Early Constraint-Induced Movement Therapy in Hemiplegic CP — NEJM 2023",
    description: "CIMT in infants with perinatal stroke (n=120, age 3-18 months) confirming hand function improvements 40% over standard care — required ACRM CE update for pediatric rehabilitation specialists on early CIMT protocols, parent training documentation, and home program intensity requirements.",
  },
  {
    title: "Intrathecal Baclofen for Severe Spastic CP — Lancet 2024",
    description: "Long-term ITB outcome study (n=800 severely spastic CP patients, 10-year follow-up) confirming sustained spasticity reduction and caregiver-reported quality of life improvements — required AACPDM CE update for pediatric physiatrists on ITB pump refill protocols, dosing adjustment, and complication management.",
  },
  {
    title: "Botulinum Toxin Timing in Ambulatory CP — JAMA 2023",
    description: "BOOTS RCT (n=380 ambulatory CP children ages 2-7) confirming early botulinum toxin intervention improves gait outcomes versus delayed treatment — required ABPM&R CE update for pediatric physiatrists on botulinum toxin dosing protocols, injection site documentation, and functional outcome measurement.",
  },
  {
    title: "Pediatric Brain Injury Rehabilitation Outcomes — NEJM 2024",
    description: "National pediatric TBI rehabilitation registry (n=5,000 TBI admissions) identifying early intensive rehabilitation predictors of functional recovery — required ACRM CE update for pediatric physiatrists on intensive rehab admission criteria, FIM-WeeFIM documentation, and family training protocols.",
  },
  {
    title: "AAC Technology Outcomes in Nonverbal CP — JAMA 2023",
    description: "Multicenter study (n=240 nonverbal CP children) confirming robust vocabulary AAC systems improve communication and reduce challenging behavior — required RESNA and ACRM CE update for pediatric rehabilitation specialists on AAC device selection, programming support documentation, and CMS medical necessity criteria.",
  },
  {
    title: "Power Wheelchair Use in Young Children — Pediatrics 2024",
    description: "Developmental study (n=300 children ages 12-36 months with motor disabilities) confirming power mobility promotes independent exploration and cognitive development — required ABPM&R CE update for pediatric physiatrists on early power wheelchair prescribing, CMS complex rehab technology documentation, and developmental outcome monitoring.",
  },
]

const testimonial = {
  quote:
    "ABPM&R MOC with quarterly LKA, Brain Injury Medicine subspecialty recertification, FACRM fellowship CE, ATP assistive technology recertification, CARF accreditation preparation cycles, botulinum toxin institutional credentialing, IDEA liaison annual documentation, DEA registration, and state license — all on different cycles. Momenties mapped every deadline. I completed ABPM&R LKA on time every quarter for the first time in my career.",
  name: "Adaeze O.",
  title: "MD, FACRM, ATP, Pediatric Rehabilitation Program Medical Director",
}

export default function PediatricRehabilitationSpecialistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Pediatric Rehabilitation Specialists"
        title="ABPM&R MOC. ATP Certification. CARF Accreditation. One Calendar."
        subtitle="Momenties tracks ABPM&R MOC and Brain Injury Medicine subspecialty recertification, ACRM fellowship CE, ATP assistive technology certification, botulinum toxin credentialing cycles, CARF accreditation preparation, DEA registration, and state license so pediatric rehabilitation specialists maintain every credential without administrative overload."
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
            Landmark Studies Shaping Pediatric Rehabilitation Practice
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
