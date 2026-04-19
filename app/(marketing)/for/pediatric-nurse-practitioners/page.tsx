import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pediatric Nurse Practitioners | Momenties",
  description: "Momenties helps pediatric nurse practitioners manage CPNP-PC/AC certification, PALS/NRP renewal, NAPNAP fellowship CE, DEA registration, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "CPNP-PC/CPNP-AC Certification & Pediatric NP Recertification",
    description:
      "Pediatric nurse practitioners maintaining Pediatric Nursing Certification Board (PNCB) Certified Pediatric Nurse Practitioner — Primary Care (CPNP-PC) or Acute Care (CPNP-AC) certification follow a 5-year recertification cycle requiring 75 contact hours of CE with at least 15 hours in pediatric-specific content, or passing the recertification examination. CPNP-AC certified NPs also maintain PNCB acute care recertification requirements — acutely focused CE in pediatric critical care, emergency pediatrics, or pediatric surgery subspecialty areas. Pediatric NPs cross-certified in both primary and acute care (dual certification) manage staggered or aligned recertification cycles across both PNCB credentials. NAPNAP (National Association of Pediatric Nurse Practitioners) membership with Fellow recognition (FNAPNAP) requires annual dues and documented chapter leadership. American Academy of Nurse Practitioners (AANP) Fellow (FAANP) status requires nomination documentation and annual maintenance. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "PALS/NRP Renewal & Pediatric NP Conference Calendar",
    description:
      "Pediatric Advanced Life Support (PALS) provider (2-year renewal) and instructor (2-year renewal) status requires skills verification and cognitive examination at renewal — pediatric acute care NPs maintaining PALS instructor status manage both personal provider renewal and instructor course facilitation scheduling. Neonatal Resuscitation Program (NRP) provider (2-year renewal) is required for NPs practicing in newborn nursery or NICU settings. ENPC (Emergency Nursing Pediatric Course) provider certification (4-year renewal) for pediatric emergency NPs. NAPNAP Annual Conference (March/April) is the primary pediatric NP CE event — abstract submission opens October, 5-6 months in advance. PNP specialty CE: pediatric cardiology NP CE (Pediatric Cardiac Intensive Care Society annual symposium), pediatric oncology NP CE (APHON annual conference), pediatric neurology NP CE (CNS annual meeting). ACNP (American College of Nurse Practitioners) annual conference provides primary CE for NP practice. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Subspecialty Credentialing, PMHNP CE & Pediatric Scope Compliance Calendar",
    description:
      "Pediatric NPs practicing in subspecialty settings maintain additional institutional credentialing requirements — pediatric hospital credentialing reappointment (annual or biennial at most institutions) requires documentation of pediatric-specific CE, procedure logs (pediatric intubation, lumbar puncture, central line placement), and quality metrics. Pediatric Psychiatric Mental Health NP (PMHNP-BC) certification through ANCC follows a 5-year cycle requiring 75 CE hours with 25 hours in psychiatric-mental health nursing — pediatric NPs integrating mental health into primary care practice increasingly pursue dual CPNP-PC and PMHNP-BC credentialing. Prescriptive authority maintenance — DEA registration (3-year renewal) for controlled substance prescribing in pediatric pain management, ADHD treatment, and adolescent psychiatry, plus state PDMP registration (annual in most states). Collaborative agreement requirements (in states with restricted NP practice) require annual renewal with supervising physician. Pediatric procedural CE: simulation-based skills training (annual at academic medical centers), pediatric intubation competency reassessment, and lumbar puncture certification renewal. Momenties tracks all program compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, Compact Nursing License & DEA Renewal Calendar",
    description:
      "Pediatric NPs practicing across multiple states — particularly common in telemedicine pediatric practices, school health programs, and multi-state pediatric hospital networks — maintain licensure in each practice state. Nurse Licensure Compact (NLC) primary state of residency license renewal and compact status monitoring (not all states participate), separate full licensure in non-compact states, and APRN Compact state participation tracking (APRN Compact implementation varies by state). DEA registration renewal (3-year) plus state prescription monitoring program registration, XDEA (buprenorphine prescribing for adolescent substance use treatment) continuing education requirements. Pediatric NP quality metrics reporting: AAP HEDIS pediatric preventive care measures (well-child visits, adolescent depression screening, immunization rates), NCQA pediatric quality measures for value-based care contracts, and school health program annual outcome reporting for state education department requirements. Pediatric nursing scope-of-practice annual review — state board NP practice updates with APRN advisory committee notifications. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Pediatric NP-Led Asthma Management — NEJM 2024",
    description: "Cluster RCT (n=1,200 pediatric asthma patients) confirming NP-led asthma action plan management reduces pediatric asthma hospitalization 42% versus physician-only management — required CPNP-PC CE update for pediatric NPs on NAEPP 2020 guidelines implementation, inhaler technique assessment documentation, and school asthma management coordination.",
  },
  {
    title: "Mental Health Integration in Pediatric Primary Care — JAMA Pediatrics 2024",
    description: "Implementation study (n=8,000 pediatric patients at 60 practices) confirming integrated behavioral health in pediatric primary care reduces emergency psychiatric presentations 28% — required NAPNAP CE update for pediatric NPs on CPSTF-recommended depression screening protocols, brief intervention documentation, and collaborative care referral frameworks.",
  },
  {
    title: "Telehealth Pediatric Acute Care — Pediatrics 2023",
    description: "Observational study (n=3,500 telehealth pediatric encounters) confirming NP-led telehealth acute care achieves equivalent outcomes to in-person visits for low-acuity pediatric conditions — required CPNP-PC CE update for pediatric NPs on telehealth physical examination documentation, appropriate telehealth versus in-person triage criteria, and state telehealth prescribing compliance.",
  },
  {
    title: "ADHD Management Guidelines Update — AAP 2023",
    description: "AAP ADHD clinical practice guideline extension to include preschool children (ages 4-5) with updated medication and behavioral intervention evidence — required CPNP-PC CE update for pediatric NPs on updated diagnostic criteria application, stimulant prescribing documentation for younger children, and school accommodation coordination.",
  },
  {
    title: "Pediatric Vaccine Schedule Update — CDC ACIP 2024",
    description: "ACIP 2024 immunization schedule updates including RSV maternal vaccine timing coordination, updated COVID-19 schedule, and meningococcal B administration guidance — required NAPNAP CE update for pediatric NPs on updated VFC program documentation, vaccine administration record requirements, and adolescent immunization catch-up protocols.",
  },
  {
    title: "Adolescent Substance Use Screening — JAMA Network Open 2023",
    description: "Implementation study (n=5,000 adolescent patients) confirming CRAFFT/AUDIT-C screen-to-brief-intervention pathway reduces adolescent substance use initiation 19% when delivered by NPs — required CPNP-PC CE update for pediatric NPs on SBIRT documentation standards, buprenorphine prescribing for adolescents, and DEA X-waiver requirements.",
  },
]

const testimonial = {
  quote:
    "CPNP-PC 5-year recertification with 75 CE hours, CPNP-AC concurrent renewal with acute-care focused CE, PALS provider biennial renewal, PALS instructor biennial course scheduling, NRP provider renewal, NAPNAP annual conference abstract submission, PMHNP-BC concurrent 5-year renewal, hospital credentialing biennial reappointment with procedure logs, DEA 3-year renewal, state PDMP annual registration, collaborative agreement annual renewal in two restrictive states, APRN compact primary state renewal, and school health annual outcome reporting — all on different cycles across 8 different organizations. Momenties mapped every deadline.",
  name: "Chidinma N.",
  title: "MSN, CPNP-PC, CPNP-AC, PMHNP-BC, FNAPNAP, Pediatric NP",
}

export default function PediatricNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Pediatric Nurse Practitioners"
        title="CPNP Certification. PALS Renewal. Subspecialty Credentialing. One Calendar."
        subtitle="Momenties tracks CPNP-PC and CPNP-AC 5-year recertification CE cycles, PALS provider and instructor biennial renewal, NRP renewal, NAPNAP fellowship CE, subspecialty hospital credentialing reappointment, PMHNP-BC concurrent renewal, DEA 3-year registration, collaborative practice agreement renewals, and state APRN license so pediatric NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Pediatric NP Practice
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
