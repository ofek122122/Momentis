import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pediatric Cardiologists | Momenties",
  description: "Momenties helps pediatric cardiologists manage ABP dual MOC, pediatric cardiology subspecialty certification, AHA/ACC guideline CE, cardiac catheterization procedure credentialing, and state license compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABP General Pediatrics MOC & Cardiology Subspecialty Certification",
    description:
      "Pediatric cardiologists maintain ABP general pediatrics certification through the annual MOC cycle (online KSA modules, PI-CME activities, points accumulation) alongside the Pediatric Cardiology subspecialty certification — a 5-year recertification cycle with a content-specific examination covering congenital heart disease anatomy, cardiac catheterization, echocardiography interpretation, arrhythmia management, and heart failure/transplant. ABP Pediatric Cardiology diplomates who serve as fellowship directors must complete COMSEP faculty development CE and ABP Program Director CE modules. Momenties tracks both ABP certification timelines simultaneously with exam window alerts 12 months in advance.",
  },
  {
    icon: Clock,
    title: "AEPC/PICSYMPOSIUM CE & AHA/ACC Congenital Heart Disease Guidelines",
    description:
      "The American College of Cardiology (ACC) Annual Scientific Sessions and the American Heart Association (AHA) Scientific Sessions are the primary CE events — abstract submission opens August-September for March/November conferences. ACC Adult Congenital Heart Disease (ACHD) subspecialty CE is required for pediatric cardiologists transitioning patients to adult care programs. The Pediatric and Congenital Electrophysiology Society (PACES) symposium CE covers inherited arrhythmia management and device therapy in congenital heart disease. AHA/ACC 2024 guidelines for management of adults with congenital heart disease — a major update — require documented CE review. AEPC (European) guidelines provide supplementary CE for academic practices. Momenties schedules all.",
  },
  {
    icon: BarChart3,
    title: "Cardiac Catheterization Lab Credentialing & Echocardiography CE",
    description:
      "Pediatric cardiologists performing cardiac catheterization procedures require hospital credentialing with case volume documentation (typically 50+ diagnostic and 25+ interventional cases for initial credentialing) and biennial reappointment reviews. Interventional credentialing for specific procedures — balloon pulmonary valvuloplasty, ASD/VSD device closure, coarctation stenting, blade atrial septostomy — follows procedure-specific volume requirements. American Society of Echocardiography (ASE) pediatric echocardiography exam-based certification (RDCS) requires ongoing CE and biennial recertification. Fetal echocardiography certification requires documented fetal echo volume. ACLS certification (2-year cycle) is required for all cath lab practitioners. Momenties tracks all credentialing timelines.",
  },
  {
    icon: Users,
    title: "State License, DEA & ACHD Transition of Care CE",
    description:
      "Adult Congenital Heart Disease (ACHD) transition programs — managing congenital heart patients through adolescence and into adult care — require documented CE in ACHD management, reproductive counseling for women with CHD, and adult CHD complication management (arrhythmia, heart failure, endocarditis prophylaxis). ACHD formal board certification through ABIM was established in 2015 with 10-year recertification cycles — pediatric cardiologists entering ACHD practice require CE on ABIM ACHD examination content. State medical license renewal (2-3 year cycles) with state-specific CME, DEA registration for procedural sedation, and radiation safety CE for fluoroscopy-guided catheterization complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "AHA/ACC 2024 Guidelines for ACHD Management — JACC 2024",
    description: "Comprehensive guideline update covering hemodynamic surveillance intervals by lesion complexity, pregnancy counseling, endocarditis prophylaxis revisions, and ACHD heart failure management — required CE for all pediatric and adult congenital cardiologists.",
  },
  {
    title: "Catheter Ablation for CHD-Associated Arrhythmias — NEJM 2024",
    description: "Multicenter registry (n=2,800 procedures) establishing safety and efficacy of catheter ablation for intra-atrial reentrant tachycardia after Fontan palliation — updated PACES CE for electrophysiology credentialing in complex CHD.",
  },
  {
    title: "Transcatheter Pulmonary Valve Replacement Long-Term Outcomes — Lancet 2023",
    description: "10-year follow-up of transcatheter pulmonary valve replacement (n=1,800 procedures) confirming excellent long-term freedom from reintervention — updated ACC/AHA interventional CHD credentialing CE for TPVR procedure qualification.",
  },
  {
    title: "Fontan Circulation Outcomes at 20 Years — JACC 2024",
    description: "Multicenter cohort (n=1,400 Fontan patients) establishing surveillance protocols, protein-losing enteropathy management, and transplant timing criteria — foundational CE for pediatric cardiologists managing complex single-ventricle patients into adulthood.",
  },
  {
    title: "Fetal Cardiac Intervention for HLHS — NEJM Evidence 2023",
    description: "Multicenter RCT (n=160 fetuses with HLHS) evaluating catheter-based fetal cardiac intervention impact on postnatal outcomes — established fetal cardiac intervention CE requirements for pediatric cardiologists at fetal cardiology programs.",
  },
  {
    title: "Ventricular Assist Devices in Pediatric Heart Failure — JAMA Pediatrics 2024",
    description: "National registry analysis (n=1,200 pediatric VAD implants) confirming Berlin Heart and HeartMate III outcomes and bridge-to-transplant success rates — required CE for pediatric cardiologists managing advanced heart failure and LVAD programs.",
  },
]

const testimonial = {
  quote:
    "ABP general MOC, pediatric cardiology subspecialty, AHA abstract deadlines, cath lab credentialing at three hospitals, RDCS echocardiography renewal, ACHD transition CE, and state license — each on a different schedule. Momenties mapped everything in one calendar. My subspecialty recertification was the most well-prepared I&apos;ve ever been.",
  name: "Adaeze O.",
  title: "MD, FAAP, FACC, Pediatric Cardiology Fellowship Director",
}

export default function PediatricCardiologistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Pediatric Cardiologists"
        title="ABP Subspecialty. Cath Lab Credentialing. ACHD CE. One Calendar."
        subtitle="Momenties tracks ABP general pediatrics MOC, pediatric cardiology subspecialty certification, AHA/ACC congenital heart guideline CE, cardiac catheterization credentialing, and ACHD transition training so pediatric cardiologists focus on patients, not administrative complexity."
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
            Landmark Studies Shaping Pediatric Cardiology Practice
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
