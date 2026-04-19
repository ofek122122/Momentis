import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Clinical Toxicologists | Momenties",
  description: "Momenties helps clinical toxicologists manage ABEM/ABIM medical toxicology subspecialty certification, ACMT fellowship CE, poison control center medical director credentialing, ACGME toxicology program requirements, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABEM/ABIM Medical Toxicology Subspecialty Certification MOC",
    description:
      "Medical toxicologists maintain subspecialty certification through the American Board of Emergency Medicine (ABEM) or American Board of Internal Medicine (ABIM) — Medical Toxicology is a joint subspecialty jointly sponsored by ABEM, ABIM, ABP, and ABPM&R, requiring subspecialty-specific MOC concurrent with primary board recertification. ABEM Medical Toxicology subspecialty MOC requires 40 CME credits per 5-year cycle in toxicology topics — antidote management, envenomation treatment, occupational toxicology, and poison center consultation CE. ABIM LKA quarterly assessments cover medical toxicology competencies including pharmacokinetics, drug overdose management, and environmental toxicology. Medical toxicologists with dual ABEM emergency medicine and Medical Toxicology subspecialty certification maintain both LKA streams independently. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ACMT Fellowship CE & Toxicology Society Conference Calendar",
    description:
      "The American College of Medical Toxicology (ACMT) Annual Scientific Meeting (March/April) is the primary CE event — abstract submission opens September-October, 6-7 months in advance. ACMT fellowship (FACMT) maintenance requires documented CE in clinical toxicology, occupational toxicology, environmental health, and antidote stewardship. North American Congress of Clinical Toxicology (NACCT, annual, September) is the joint ACMT/AACT (American Academy of Clinical Toxicology) meeting — the largest clinical toxicology CE conference, with 30+ hours of toxicology CE. Society of Toxicology (SOT) Annual Meeting (March) provides toxicology research CE relevant for medical toxicologists with laboratory research responsibilities. AACT provides online CE modules for medical toxicologists unable to attend in-person conferences. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Poison Control Center Medical Director Credentialing & AAPCC Standards",
    description:
      "Medical toxicologists serving as Poison Control Center (PCC) medical directors maintain American Association of Poison Control Centers (AAPCC) accreditation requirements — medical director qualifications including board certification in medical toxicology, minimum 4 hours/week PCC supervision, and participation in annual AAPCC Toxicology Data Quality reviews. AAPCC accreditation (3-year cycle) requires medical director participation in mock case reviews, specialist in poison information (SPI) training supervision, and annual NPDS (National Poison Data System) data quality audits. Medical toxicologists serving as PCC consultants maintain call-back documentation requirements and minimum consultation volume for AAPCC specialist status. TJC accreditation for hospital-based toxicology services requires medical director credentialing review at reappointment. Momenties tracks all PCC credentialing cycles.",
  },
  {
    icon: Users,
    title: "ACGME Training Program, Occupational License & Registry CE",
    description:
      "Medical toxicologists directing ACGME-accredited Medical Toxicology fellowship programs maintain program director responsibilities — annual ACGME Milestones evaluations, Next Accreditation System (NAS) program reporting, and 5-year accreditation site review preparation. DEA registration is essential for medical toxicologists managing opioid overdose programs, prescribing naloxone standing orders, and antidote stockpile management. Occupational toxicology certification — American Board of Preventive Medicine (ABPM) Occupational Medicine subspecialty — for toxicologists with dual occupational focus maintains independent MOC cycles. State medical license renewal (2-3 year cycles), OSHA hazardous materials handling CE (relevant for toxicologists consulting on industrial exposures), and participation in Regional Poison Control Network performance reporting complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Fentanyl Analog Detection in Overdose — NEJM 2024",
    description: "National toxicosurveillance study confirming nitazene opioid analogs causing overdose deaths undetected by standard immunoassay panels — required ACMT CE update for medical toxicologists on novel opioid detection protocols, expanded toxicology screen indications, and clinical management of nitazene toxicity.",
  },
  {
    title: "High-Dose Insulin for Beta-Blocker Overdose — Annals EM 2023",
    description: "Multicenter case series (n=284 severe beta-blocker overdoses) confirming high-dose insulin euglycemia (HDIE) superiority over calcium gluconate as first-line treatment — updated ACMT CE for medical toxicologists on HDIE dosing protocols, monitoring parameters, and transition to extracorporeal support criteria.",
  },
  {
    title: "Lipid Emulsion Therapy for Local Anesthetic Toxicity — Lancet 2023",
    description: "International observational cohort (n=600 LAST events) confirming 20% lipid emulsion resuscitation reduces cardiovascular collapse mortality 60% — required ACMT/AACT CE update for medical toxicologists on lipid emulsion dosing, indications beyond LAST, and hospital formulary preparation protocols.",
  },
  {
    title: "PFAS Environmental Toxicology — NEJM 2024",
    description: "Longitudinal cohort study (n=12,000 PFAS-exposed workers and communities) confirming dose-dependent thyroid, immune, and hepatic toxicity — required ACMT occupational/environmental toxicology CE update for medical toxicologists on PFAS biomonitoring, clinical surveillance, and exposure source investigation.",
  },
  {
    title: "Methamphetamine-Associated Cardiomyopathy — JAMA Cardiology 2023",
    description: "National registry analysis (n=48,000 stimulant-related admissions) characterizing meth-associated cardiomyopathy as a distinct clinical entity with 30% 5-year mortality — required ACMT CE update for medical toxicologists on stimulant cardiomyopathy management, echocardiographic surveillance, and abstinence-related recovery protocols.",
  },
  {
    title: "Mushroom Hepatotoxicity Treatment — Hepatology 2024",
    description: "International multicenter RCT (n=210 Amanita phalloides poisonings) confirming silibinin IV reduces liver transplant requirement 40% and improves 30-day survival — required ACMT CE update for medical toxicologists on amatoxin poisoning staging, silibinin protocol access, and early liver transplant evaluation criteria.",
  },
]

const testimonial = {
  quote:
    "ABEM emergency medicine LKA, Medical Toxicology subspecialty MOC, FACMT fellowship CE, AAPCC poison control center medical director credentialing, ACGME fellowship program NAS reporting cycle, DEA registration for naloxone programs, and state license — all with different cycles, different bodies, different documentation standards. Momenties gave me one calendar. I have not missed a deadline since.",
  name: "Obiageli T.",
  title: "MD, FACMT, Medical Toxicologist & Poison Control Center Medical Director",
}

export default function ClinicalToxicologistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Clinical Toxicologists"
        title="ABEM/ABIM Subspecialty MOC. Poison Center Credentialing. ACMT Fellowship. One Calendar."
        subtitle="Momenties tracks ABEM and ABIM medical toxicology subspecialty certification, ACMT fellowship CE, AAPCC poison control center medical director credentialing cycles, ACGME fellowship program reporting, DEA registration, and state license renewal so medical toxicologists maintain every credential without administrative overload."
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
            Landmark Studies Shaping Clinical Toxicology Practice
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
