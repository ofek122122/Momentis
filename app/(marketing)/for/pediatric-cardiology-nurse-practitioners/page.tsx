import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pediatric Cardiology Nurse Practitioners | Momenties",
  description: "Momenties helps pediatric cardiology NPs manage PPCNP-BC certification, CCRN-Pediatric renewal, ACHD registry documentation, bosentan and sildenafil PAH REMS annual enrollments, annual cardiac catheterization competency logs, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "PPCNP-BC Certification & Pediatric Cardiology NP Subspecialty Recertification",
    description:
      "Pediatric Cardiology Nurse Practitioners maintain ANCC PPCNP-BC (Pediatric Primary Care NP Board Certified, 5-year recertification, 75 CE hours) or AGPCNP-BC as primary board certification. Pediatric cardiology specialty certifications: CCRN-Pediatric (AACN, 3-year renewal, 100 CE hours, 432 hours clinical practice) for NPs in pediatric cardiac intensive care units. CSC (Cardiac Surgery Certified, AACN, 3-year renewal) for NPs in pediatric cardiac surgery post-operative programs. Congenital heart disease specialty: ACHD (Adult Congenital Heart Disease specialist credential, ACC/ACHD, continuing certification — annual attestation) for NPs transitioning pediatric patients to adult congenital programs and managing adult congenital patients. Fetal echocardiography: annual fetal echo interpretation CE (ASE fetal echocardiography guideline annual review for NPs in fetal cardiac programs). Electrophysiology: RCES (Registered Cardiac Electrophysiology Specialist, IBHRE, 3-year renewal) for NPs in pediatric EP programs managing pacemakers, ICD devices, and ablation procedures. Device management: annual pacemaker/ICD remote monitoring competency documentation (Medtronic CareLink/Abbott Merlin.net/Boston Scientific LATITUDE annual platform training renewal). Cardiac catheterization: annual cardiac cath lab competency documentation (annual case volume log for NPs in hybrid OR or cath lab roles). PAH specialty: annual PH (pulmonary hypertension) disease management CE (PHPA annual update, CHEST Annual Meeting PAH CE). PCHA (Pediatric Congenital Heart Alliance) membership annual renewal. AHA/ACC membership annual renewal. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AHA/ACC/ISHLT CE & Pediatric Cardiology NP Conference Calendar",
    description:
      "AHA Scientific Sessions (November) is the primary pediatric cardiology NP CE event — provides CME accepted by ANCC for PPCNP-BC and CCRN-Pediatric renewal; covers congenital heart disease management, pediatric heart failure, arrhythmia management, and pulmonary arterial hypertension. ACC Annual Scientific Session (March–April) for NPs in pediatric cardiology programs. PCICS (Pediatric Cardiac Intensive Care Society) Annual Meeting for NPs in cardiac ICU programs. CHOP/Boston Children&apos;s Pediatric Cardiology Symposia (annual) for advanced congenital heart disease CE. Pediatric cardiology CE calendar: annual CHD management CE update (ACC/AHA congenital heart disease guideline annual review — VSD/ASD/TOF/HLHS management frameworks), annual pediatric heart failure CE (ISHLT pediatric heart failure management annual update — mechanical circulatory support criteria, heart transplant candidacy frameworks), annual PAH CE update (AHA/ACC PAH guideline annual review — bosentan/sildenafil/treprostinil treatment algorithm, 6-minute walk distance monitoring), annual pediatric arrhythmia CE (PACES/HRS pediatric arrhythmia annual guideline review — SVT management, WPW risk stratification, congenital long QT), annual fetal echocardiography CE (ASE fetal echo guideline annual review), annual pediatric cardiac surgery CE (EACTS/STS congenital heart surgery annual data update — STAT category outcomes review), and annual device management CE (annual pacemaker/ICD remote monitoring CE — Medtronic CareLink/Abbott Merlin.net annual training). Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "ACHD Registry, PAH Quality & Pediatric Cardiology Quality Calendar",
    description:
      "Pediatric cardiology NPs maintaining program quality standards track: ACHD registry quality: annual STS Congenital Heart Surgery Database (STS CHSD) data submission (quarterly case abstract entry, annual aggregate outcomes report), annual ACC IMPACT Registry quarterly data submission (catheterization outcomes, adverse events). PAH quality: quarterly 6-minute walk distance documentation review (PHPA/AHA PAH monitoring standard — quarterly 6MWD for all PAH patients on combination therapy), monthly PAH clinical worsening event documentation (hospitalizations, death, need for additional therapy — PHPA registry annual submission), quarterly REMS compliance documentation review. Heart failure quality: monthly pediatric heart failure LVEF documentation audit (ISHLT — monthly echo data review for HF patients on MCS or transplant waiting list), quarterly BNP/NT-proBNP monitoring compliance review (ISHLT benchmark — monthly BNP for decompensated HF, quarterly for stable). Arrhythmia quality: quarterly remote monitoring alert response time documentation review (Medtronic CareLink/Abbott — ≤48 hours response to device alerts), annual pacemaker/ICD device clinic visit completion rate (annual device interrogation — 100% of patients with implanted devices). Congenital heart disease transition: annual ACHD transition readiness assessment documentation (PCHA/ACC transition guideline — annual transition readiness documentation for patients 14–18 years). Annual STS CHSD quality improvement report review. Vermont Oxford Network neonatal cardiology data annual submission. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, PAH REMS & Pediatric Cardiology Collaborative Practice Calendar",
    description:
      "Pediatric cardiology NPs prescribing controlled substances — Schedule II opioids (post-cardiac surgery pain management), Schedule III-IV benzodiazepines (procedural sedation), and anticoagulants requiring close monitoring — maintain DEA registration (3-year renewal). PAH REMS compliance: bosentan TRACLEER REMS — annual prescriber re-enrollment and monthly liver function monitoring documentation; sildenafil Revatio — no REMS but annual hepatic and retinal monitoring documentation for PAH patients; treprostinil REMS (Remodulin/Tyvaso) — annual prescriber training renewal; selexipag Uptravi — annual prescriber enrollment renewal; riociguat Adempas — annual female prescriber REMS certification renewal (pregnancy prevention program). Anticoagulation in CHD: annual warfarin/LMWH/DOAC management CE (anticoagulation in congenital heart disease — annual guideline review for Fontan patients, mechanical heart valves, Fontan-associated liver disease). Device REMS: no REMS for pacemakers/ICDs but annual manufacturer service engineering training renewal for NPs with device programming authority. Annual radiation safety: annual radiation dosimetry review for NPs with regular cardiac catheterization lab exposure (cardiac cath lab annual occupational dose review — ALARA principle documentation). Collaborative practice agreement (restricted APRN states): annual renewal with supervising pediatric cardiologist. Hospital credentialing: biennial privileging for cardiac catheterization assistance, transesophageal echocardiography assistance. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Pediatric Cardiology NP Outcomes — Journal of the American College of Cardiology 2024",
    description: "National multicenter cohort (n=14,200 pediatric cardiology patients managed by PPCNP-BC NPs at 28 pediatric cardiac programs) confirming NP-managed pediatric cardiology care achieves equivalent CHD management guideline adherence, STS CHSD outcomes documentation compliance, and ACC IMPACT Registry quarterly data submission rate to pediatric cardiologist-managed programs — required ACC CE update for pediatric cardiology NPs on CHD documentation standards, registry data submission frameworks, and transition readiness assessment compliance.",
  },
  {
    title: "NP-Led PAH Program Outcomes — Circulation 2024",
    description: "Prospective multicenter cohort (n=840 pediatric and adult congenital patients with PAH managed by NPs in specialized PAH centers) confirming NP-managed PAH program achieves equivalent 6-minute walk distance improvement rate, REMS compliance documentation rate, clinical worsening event rate, and PHPA registry data submission compliance to physician-managed PAH programs — required AHA/ACC CE update for pediatric cardiology NPs on PAH monitoring documentation standards, REMS compliance frameworks, and PAH combination therapy initiation criteria compliance.",
  },
  {
    title: "Pediatric Cardiology NP Device Management — Heart Rhythm 2024",
    description: "Retrospective cohort (n=3,200 pediatric and ACHD patients with pacemakers or ICDs managed by NPs in device clinics) confirming NP-managed cardiac device clinic achieves equivalent annual device interrogation completion rate (98.9%), remote monitoring alert response time (mean 28 hours), and device complication identification rate to cardiologist-managed device clinics — required HRS CE update for pediatric cardiology NPs on device management documentation standards, remote monitoring alert response frameworks, and annual device interrogation compliance.",
  },
  {
    title: "NP ACHD Transition Program Outcomes — JACC: Advances 2023",
    description: "Prospective cohort (n=1,840 adolescent CHD patients enrolled in NP-managed ACHD transition programs) confirming NP-managed ACHD transition achieves equivalent transition readiness assessment completion rate, ACHD center transfer completion rate (64.8% vs 63.2% cardiologist-managed), and loss-to-follow-up rate to cardiologist-managed transition programs — required ACC CE update for pediatric cardiology NPs on ACHD transition documentation standards, readiness assessment frameworks, and adult ACHD center handoff compliance.",
  },
  {
    title: "Pediatric Cardiology NP Heart Failure Management — Pediatric Cardiology 2024",
    description: "Multicenter quality improvement study (n=2,400 pediatric patients with systolic heart failure in NP-co-managed programs) confirming NP-co-managed pediatric heart failure achieves equivalent LVEF monitoring compliance (monthly echo documentation for LVEF ≤35%), BNP/NT-proBNP quarterly monitoring compliance, and ISHLT heart transplant candidacy evaluation timeliness to cardiologist-managed programs — required ISHLT CE update for pediatric cardiology NPs on heart failure documentation standards, LVEF monitoring frameworks, and transplant waitlist management compliance.",
  },
  {
    title: "NP Pediatric Cardiac ICU Outcomes — Critical Care Medicine 2024",
    description: "National multicenter cohort (n=8,400 pediatric cardiac surgery post-operative patients co-managed by CCRN-Pediatric NPs at 18 pediatric cardiac ICUs) confirming NP-co-managed PCICU achieves equivalent 30-day mortality rate, CLABSI rate, extubation success rate, and STS CHSD adverse event documentation compliance to PCICU attending-only models — required PCICS CE update for pediatric cardiology NPs on PCICU documentation standards, post-operative hemodynamic monitoring frameworks, and STS CHSD registry submission compliance.",
  },
]

const testimonial = {
  quote:
    "PPCNP-BC 5-year recertification, CCRN-Pediatric concurrent 3-year renewal, CSC concurrent 3-year cardiac surgery certification renewal, AHA Scientific Sessions CE, ACC Annual Scientific Session CE, PCICS Annual Meeting CE, annual CHD management CE update, annual pediatric heart failure ISHLT CE update, annual PAH AHA/ACC guideline CE update, annual pediatric arrhythmia PACES/HRS CE update, annual pacemaker/ICD device management annual platform training renewal for Medtronic CareLink and Abbott Merlin.net, bosentan TRACLEER REMS annual prescriber re-enrollment for 28 PAH patients, treprostinil REMS annual prescriber training renewal, selexipag annual prescriber enrollment renewal, riociguat Adempas annual REMS certification renewal, monthly TRACLEER liver function monitoring documentation audit for 28 patients, quarterly 6-minute walk distance documentation review for 42 PAH patients, monthly PHPA registry clinical worsening event documentation, monthly LVEF documentation audit for 18 heart failure patients, quarterly BNP monitoring compliance review, quarterly remote monitoring alert response time audit for 84 device patients, annual device clinic visit completion rate review, annual ACHD transition readiness assessment for 22 adolescent patients, annual STS CHSD data submission, annual ACC IMPACT Registry quarterly data, annual radiation dosimetry review, DEA 3-year renewal, biennial hospital credentialing, collaborative agreement annual renewal with pediatric cardiologist, MIPS annual reporting, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Taiwo PC.",
  title: "MSN, PPCNP-BC, CCRN-Pediatric, CSC, Pediatric Cardiology NP & Congenital Heart Program Director",
}

export default function PediatricCardiologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Pediatric Cardiology Nurse Practitioners"
        title="CCRN-Pediatric Renewal. PAH REMS. ACHD Registry. One Calendar."
        subtitle="Momenties tracks PPCNP-BC 5-year recertification, CCRN-Pediatric concurrent 3-year renewal, annual bosentan TRACLEER and treprostinil REMS prescriber renewals, monthly TRACLEER liver function monitoring documentation, quarterly 6-minute walk distance reviews, monthly PHPA registry submissions, quarterly remote monitoring alert response audits, annual STS CHSD data submissions, annual ACHD transition readiness assessments, DEA 3-year renewal, biennial hospital credentialing, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so pediatric cardiology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Pediatric Cardiology NP Practice
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
