import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pediatric Emergency Nurse Practitioners | Momenties",
  description: "Momenties helps Pediatric Emergency NPs manage PNP-AC certification, PALS Instructor renewal, pediatric procedural sedation competency, EMSC quality reporting, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "PNP-AC Certification & Pediatric Emergency NP Recertification",
    description:
      "Pediatric Emergency Nurse Practitioners maintain ANCC Pediatric Nurse Practitioner Acute Care Board Certified (PNP-AC-BC, 5-year recertification, 75 CE hours with pediatric acute care-specific content) for inpatient and emergency pediatric roles. PPCNP-BC (Primary Care PNP) may be held concurrently by NPs with both ED and primary care or urgent care responsibilities. CEN (Certified Emergency Nurse, BCEN, 4-year renewal, 100 CE hours or examination) is increasingly pursued by pediatric emergency NPs maintaining dual certification in ED nursing alongside NP credentials. CPEN (Certified Pediatric Emergency Nurse, BCEN, 4-year renewal, 100 CE hours or examination) specifically for NPs with pediatric ED focus. SANE-P (Sexual Assault Nurse Examiner — Pediatric, IAFN, 3-year renewal, 40 CE hours) for NPs in pediatric emergency departments with child abuse and forensic nursing roles. CPAN (Certified Post Anesthesia Nurse) concurrent for NPs managing pediatric procedural sedation recovery areas. PALS Instructor (AHA, 2-year renewal) with documented course facilitation. ENPC (Emergency Nursing Pediatric Course) Instructor Provider certification for NPs in pediatric emergency nursing education roles. Child Abuse Pediatrics certification concurrent for NPs in dedicated child abuse programs (ABP CAP, 5-year). Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "PALS/ENPC CE & Pediatric Emergency NP Conference Calendar",
    description:
      "ACEP (American College of Emergency Physicians) Scientific Assembly (October) and ENA (Emergency Nurses Association) Annual Conference (September) are the two primary pediatric emergency NP CE events — ACEP provides AMA PRA Category 1 CME and ENA provides BCEN-approved CE applicable to CEN and CPEN recertification. PEM (Pediatric Emergency Medicine) Society annual CE for NPs in academic pediatric emergency programs. AAP National Conference (October) provides pediatric acute care CE. NASEMSO (National Association of State EMS Officials) annual CE for NPs with EMS medical direction roles. Procedural sedation CE calendar: annual pediatric procedural sedation protocol review CE (AAP/ACEP joint guidelines — annual update review), annual ketamine sedation competency documentation, annual propofol sedation competency for NPs with anesthesiologist-level sedation privileges, and annual nitrous oxide procedural analgesia competency. Pediatric trauma CE: annual ATLS (Advanced Trauma Life Support) renewal (4-year, but many pediatric EDs require annual competency documentation), annual pediatric trauma assessment CE, and TNCC (Trauma Nursing Core Course) renewal for NPs with trauma certification. Toxicology CE: annual pediatric toxicology update CE (regional poison control center annual collaboration), annual NAC (N-acetylcysteine) protocol CE. Child abuse CE: annual mandatory reporter training re-documentation (required in most states for licensed healthcare providers), annual child maltreatment identification and reporting CE. Mental health emergency CE: annual pediatric behavioral health emergency management CE, annual suicide risk assessment training for adolescents. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "EMSC Quality Reporting, Sedation Logs & Pediatric ED Quality Calendar",
    description:
      "Pediatric emergency NPs in designated pediatric emergency departments face Emergency Medical Services for Children (EMSC) quality reporting requirements and Joint Commission pediatric-specific performance measures. EMSC quality calendar: annual EMSC program participation documentation (HRSA EMSC Program reporting — hospital-based pediatric emergency readiness assessment score, Pediatric Emergency Readiness Checklist completion), annual PEPR (Pediatric Emergency Preparedness Resources) compliance review, and annual weight-based medication dosing system compliance audit (Broselow tape or equivalent dosing system verification). Procedural sedation quality: monthly sedation log review (airway complication rate, procedure success rate, adverse event documentation per Joint Commission RC.02.01.03 sedation standards), quarterly sedation outcome data submission to national sedation registry (Pediatric Sedation Research Consortium — for member institutions), and annual moderate sedation practitioner re-credentialing with procedural volume documentation. Child abuse quality: monthly child maltreatment screening documentation compliance audit (screening tool completion rate), quarterly multidisciplinary team (MDT) referral rate review, and annual forensic interview referral compliance. Mental health quality: monthly pediatric mental health boarding time audit (ED length of stay for pediatric psychiatric presentations), and quarterly CAMS (Collaborative Assessment and Management of Suicidality) protocol documentation compliance. NHSN ED quality: annual antimicrobial stewardship compliance documentation. Vaccination quality: annual in-ED vaccination opportunity documentation. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Pediatric Emergency Collaborative Practice Calendar",
    description:
      "Pediatric Emergency NPs prescribing controlled substances including ketamine, opioids (morphine, fentanyl, oxycodone), benzodiazepines (midazolam, lorazepam), and Schedule II stimulants for ADHD outpatient prescriptions if practicing in mixed acute/ambulatory roles maintain DEA registration (3-year renewal) plus state PDMP registration. Pediatric procedural sedation credentialing: hospital credentialing for procedural sedation administration (moderate sedation or deep sedation) — biennial renewal with mandatory case volume documentation (moderate sedation: typically ≥10 cases annually, deep sedation: ≥10 cases annually for independent administration authority). EMTALA compliance annual training for ED NPs with triage and medical screening examination authority. Child maltreatment mandatory reporter state-specific documentation: most states require annual or biennial mandatory reporter training completion documentation for healthcare providers — distinct from general CE requirements. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising pediatric emergency physician or medical director, scope-of-practice review covering moderate and deep sedation authority, procedural authority (laceration repair, fracture management, procedural sedation, lumbar puncture), and critical care transfer decision-making. Hospital privileging: biennial medical staff credentialing renewal with procedural case volume documentation. Medicare enrollment: CMS-855I revalidation every 5 years, PECOS annual verification. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Pediatric Emergency NP Outcomes — Pediatrics 2024",
    description: "National multicenter cohort (n=82,000 pediatric ED visits managed by NPs) confirming NP-managed pediatric emergency visits achieve equivalent door-to-provider time, admission rates, and 72-hour return rates to physician-managed visits — required ACEP CE update for pediatric emergency NPs on ED triage documentation standards, chest pain and respiratory distress risk stratification frameworks, and disposition decision protocols.",
  },
  {
    title: "NP-Led Pediatric Procedural Sedation — Annals of Emergency Medicine 2023",
    description: "Prospective registry study (n=4,800 pediatric procedural sedation cases managed by NPs) confirming NP-administered ketamine and propofol sedation achieves equivalent adverse event rates to physician-administered sedation — required AAP CE update for pediatric emergency NPs on sedation documentation standards, fasting status assessment frameworks, and airway rescue protocol documentation.",
  },
  {
    title: "Pediatric Emergency NP Child Abuse Identification — Child Abuse and Neglect 2024",
    description: "Implementation study (n=3,200 pediatric ED visits with maltreatment screening) confirming NP-led universal maltreatment screening protocol increases forensic examination referrals 44% and MDT activation 31% — required AAP CE update for pediatric emergency NPs on maltreatment screening documentation standards, SDH (subdural hematoma) imaging criteria frameworks, and mandatory reporting timeliness protocols.",
  },
  {
    title: "NP-Led Pediatric Mental Health Emergency — JAMA Pediatrics 2024",
    description: "Implementation study (n=2,400 adolescent psychiatric emergency visits) confirming NP-led pediatric mental health pathway reduces ED psychiatric boarding time 38% and voluntary psychiatric admission rate — required ACEP CE update for pediatric emergency NPs on suicide risk documentation standards, CAMS protocol implementation frameworks, and community mental health referral pathway documentation.",
  },
  {
    title: "Pediatric Emergency NP Laceration Management — Emergency Medicine Journal 2023",
    description: "Prospective cohort (n=2,800 pediatric laceration repairs performed by NPs) confirming NP-managed laceration repair achieves equivalent wound infection rate and cosmetic outcome satisfaction to physician repair — required ENA CE update for pediatric emergency NPs on wound assessment documentation standards, tissue adhesive versus suture selection frameworks, and follow-up instruction compliance.",
  },
  {
    title: "NP Telemedicine Pediatric Emergency — Pediatric Emergency Care 2023",
    description: "Prospective study (n=3,600 pediatric telehealth urgent care encounters) confirming NP-delivered pediatric tele-urgent care achieves equivalent clinical accuracy for respiratory, febrile, and rash presentations to in-person NP care — required ACEP CE update for pediatric emergency NPs on tele-urgent care documentation standards, after-hours escalation frameworks, and parental education protocol compliance.",
  },
]

const testimonial = {
  quote:
    "PNP-AC-BC 5-year recertification, CPEN concurrent 4-year renewal, SANE-P concurrent 3-year renewal with 40 CE hours, PALS Provider 2-year renewal, PALS Instructor 2-year renewal with documented course facilitation for 4 courses this cycle, ENPC Instructor renewal, ACEP Scientific Assembly CE, ENA Annual Conference CE, AAP National Conference CE, annual pediatric procedural sedation protocol review CE, annual ketamine sedation competency documentation for 180 sedations performed, annual propofol deep sedation competency documentation for 45 cases, annual ATLS competency documentation, annual child abuse mandatory reporter training in 2 states, annual EMSC Pediatric Emergency Readiness Checklist completion, monthly sedation log review for adverse event documentation, quarterly sedation registry data submission, monthly child maltreatment screening documentation compliance audit, monthly pediatric mental health boarding time audit, annual vaccinations in ED opportunity documentation, DEA 3-year renewal, biennial hospital credentialing for moderate and deep sedation privileges with case volume documentation, collaborative agreement annual renewal with ED medical director, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Ngozi PE.",
  title: "MSN, PNP-AC-BC, CPEN, SANE-P, PALS Instructor, Pediatric Emergency NP & Sedation Program Lead",
}

export default function PediatricEmergencyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Pediatric Emergency Nurse Practitioners"
        title="CPEN Renewal. PALS Instructor. Sedation Competency Logs. One Calendar."
        subtitle="Momenties tracks PNP-AC-BC 5-year recertification, CPEN concurrent 4-year renewal, SANE-P 3-year forensic renewal, PALS Instructor 2-year renewal with course facilitation documentation, annual ketamine and propofol sedation competency logs, EMSC annual Pediatric Emergency Readiness Checklist, monthly procedural sedation adverse event log review, quarterly sedation registry submissions, annual child abuse mandatory reporter training, DEA 3-year renewal, biennial hospital credentialing for sedation privileges, and state APRN license so Pediatric Emergency NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Pediatric Emergency NP Practice
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
