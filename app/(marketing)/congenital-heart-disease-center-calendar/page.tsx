import type { Metadata } from "next"
import { Heart, Zap, Stethoscope, UserCheck, Calendar, Clock, Target, Shield, BarChart3, Award } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Congenital Heart Disease Center — Lifelong Cardiac Care & Surveillance Calendar | Momenties",
  description:
    "Systematic scheduling for ACHD centers — TOF/TGA/Fontan/AVSD/HLHS surveillance, echo Q6-12 months by lesion severity, cardiac MRI for RV/LV volumes, hemodynamic catheterization, ICD/CRT device checks, ablation timing, Fontan circuit complication monitoring (PLE, plastic bronchitis, hepatic fibrosis), pregnancy heart team consultation (mWHO risk), and pediatric-to-adult CHD transition care.",
}

const pillars = [
  {
    icon: Heart,
    title: "Cardiac Imaging & Catheterization Scheduling",
    description:
      "Lesion-specific echocardiogram cadence — Q6 months for moderate-to-severe Fontan, single ventricle, severe pulmonary regurgitation post-TOF repair, and systemic RV in TGA/ccTGA; Q12 months for repaired AVSD with residual MR, repaired coarctation, and stable bicuspid aortic valve. Cardiac MRI Q2-3 years for RV end-diastolic volume index (RVEDVi >150 mL/m² triggers PVR consideration in repaired TOF), LV volume and ejection fraction quantification, aortic dimension monitoring (BAV/Marfan/Loeys-Dietz), and Fontan circuit assessment with 4D flow. Diagnostic and interventional catheterization scheduling for hemodynamic assessment (Fontan pressures, PVR calculation), device closure (ASD, VSD, PDA, PFO), pulmonary artery stenting, and pre-pregnancy hemodynamic clearance. CT angiography for coronary anomaly surveillance post-arterial switch, conduit calcification, and aortopathy.",
  },
  {
    icon: Zap,
    title: "Arrhythmia & Device Management",
    description:
      "ICD and CRT-D device interrogation Q3-6 months in clinic plus continuous remote monitoring with quarterly transmissions; lead integrity surveillance, shock event review, and battery longevity tracking with elective replacement indicator (ERI) planning. Holter and 14-30 day patch event monitor coordination for syncope, palpitations, and post-Fontan IART/atrial flutter screening. Electrophysiology study and ablation scheduling for SVT (intra-atrial reentry tachycardia in atriotomy scars), VT (post-TOF macroreentrant VT around RVOT scar/patch), and pre-emptive substrate ablation prior to PVR. Antiarrhythmic management coordination — sotalol, dofetilide, amiodarone with QTc and TSH/LFT surveillance. Pacemaker dependency assessment and CRT response evaluation in systemic RV failure.",
  },
  {
    icon: Stethoscope,
    title: "Heart Failure & Intervention Planning",
    description:
      "ACHD heart failure clinic visits Q3-6 months with NT-proBNP trending, 6-minute walk distance, CPET peak VO2 (<14 mL/kg/min triggers transplant evaluation), and quality-of-life scoring. GDMT titration for systemic LV and systemic RV failure with renal function and electrolyte monitoring. Pulmonary valve replacement (PVR) timing in repaired TOF — RVEDVi 150-160 mL/m², RVESVi >80 mL/m², or symptomatic severe PR. Fontan reintervention planning — fenestration creation/closure, conduit revision, atriopulmonary-to-extracardiac conversion. Coarctation reintervention for recoarctation gradient >20 mmHg or hypertension. Pulmonary artery rehabilitation, branch PA stenting, and Glenn/Fontan takedown evaluation. Heart transplant or combined heart-liver transplant referral timing in failing Fontan with Fontan-associated liver disease (FALD).",
  },
  {
    icon: UserCheck,
    title: "Transition & Adult CHD Care",
    description:
      "Structured pediatric-to-adult CHD transition starting age 12-14 with annual readiness assessment using TRAQ (Transition Readiness Assessment Questionnaire), formal handoff to ACHD program by age 18-21. Pregnancy heart team consultation with mWHO cardiac risk classification (mWHO I-IV), pre-conception counseling, anticoagulation planning (mechanical valves, Fontan), and trimester-specific echo and obstetric coordination. Genetic counseling and recurrence risk discussion (22q11.2 deletion in conotruncal lesions, NOTCH1 in BAV, JAG1 in Alagille, autosomal dominant CHD). ACHD-specific surgical reintervention planning — adult CHD surgical team coordination, redo sternotomy risk assessment, and combined cardiac-noncardiac surgical clearance. Endocarditis prophylaxis education, dental clearance scheduling, and exercise prescription per ACC/AHA ACHD guidelines.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Lesion-Specific Surveillance Mapping & Risk Stratification",
    description:
      "Map every active CHD patient to lesion category (TOF, TGA/ccTGA, Fontan/single ventricle, AVSD, HLHS, BAV/aortopathy, Ebstein, coarctation, repaired vs. unrepaired) and assign Bethesda/ACC ACHD anatomic-physiologic stage (IA-IIID). Establish lesion-specific echo cadence (Q6 vs. Q12 months) and cardiac MRI interval (Q2-3 years). Generate first-quarter imaging worklist with NT-proBNP, ECG, and CPET timing. Tag all Fontan patients for protein-losing enteropathy (PLE) and FALD surveillance. Identify mWHO III-IV pregnancy-risk women for pre-conception counseling priority.",
  },
  {
    month: "Month 3–4",
    title: "Device Clinic Optimization & Arrhythmia Surveillance",
    description:
      "Roll out Q3-6 month ICD/CRT-D in-person interrogation cadence with intervening remote monitoring transmissions for every device patient. Schedule 14-30 day event monitors for symptomatic post-Fontan, post-Mustard/Senning, and post-TOF patients with palpitations or syncope. Build EP referral pipeline for IART/atrial flutter ablation candidates and post-TOF VT substrate mapping. Initiate QTc and TSH/LFT surveillance protocols for sotalol, dofetilide, and amiodarone. Verify pacemaker dependency status and CRT response in systemic RV failure cohort.",
  },
  {
    month: "Month 5–6",
    title: "PVR Timing & Cardiac MRI Reassessment",
    description:
      "Run mid-year cardiac MRI cohort review for repaired TOF — flag patients with RVEDVi 150-160 mL/m², RVESVi >80 mL/m², or symptomatic severe PR for surgical/transcatheter PVR planning. Schedule 4D flow MRI for Fontan circuit efficiency and branch PA flow distribution. Coordinate pre-PVR EP study and substrate ablation to prevent post-operative VT. Update aortic dimension surveillance for BAV, Marfan, Loeys-Dietz, and post-arterial switch coronary CTA. Re-baseline CPET peak VO2 for transplant evaluation triggers.",
  },
  {
    month: "Month 7–8",
    title: "Fontan & Complex CHD Multi-System Surveillance",
    description:
      "Execute annual FALD workup (hepatic ultrasound with elastography, MRI/MRE, AFP, platelet count) and screen for Fontan-associated complications — protein-losing enteropathy (serum albumin, alpha-1-antitrypsin clearance, fecal A1AT), plastic bronchitis, and lymphatic dysfunction. Coordinate hepatology and lymphatic intervention referrals. Audit catheterization-derived Fontan pressures and PVR calculations for failing Fontan candidates. Initiate combined heart-liver transplant evaluation pathway for advanced FALD with cirrhosis.",
  },
  {
    month: "Month 9–10",
    title: "Pregnancy Heart Team & Pre-Conception Counseling",
    description:
      "Conduct fall pregnancy heart team conferences for mWHO II-III and III-IV women — CPET, echo, NT-proBNP, anticoagulation strategy (mechanical valves, Fontan thromboprophylaxis), and trimester-specific monitoring plan. Coordinate maternal-fetal medicine and cardiac obstetric anesthesia consults. Update genetic counseling and recurrence risk documentation (22q11.2, NOTCH1, JAG1, autosomal dominant CHD families). Schedule fetal echo plan for next-generation pregnancies.",
  },
  {
    month: "Month 11–12",
    title: "Transition Closeout & Annual ACHD Outcomes Review",
    description:
      "Finalize pediatric-to-adult CHD transition handoffs for patients reaching age 18-21 — TRAQ readiness scoring, formal ACHD program enrollment, and self-management education completion. Compile annual ACHD program outcomes — PVR volumes, device implant volumes, ablation success rates, transplant referrals, mortality, and FALD progression rates. Reconcile endocarditis prophylaxis education and dental clearance documentation. Plan next-year lesion-specific surveillance cadence and pregnancy heart team caseload projections.",
  },
]

const kpis = [
  {
    metric: "≥95%",
    target: "Lesion-Specific Echo Cadence Compliance",
    description: "Q6-12 month echocardiogram completion by ACHD anatomic-physiologic stage and lesion category.",
  },
  {
    metric: "<30 days",
    target: "PVR Referral After RVEDVi Threshold",
    description: "Time from cardiac MRI threshold breach (RVEDVi >150 mL/m²) to surgical/transcatheter PVR consultation.",
  },
  {
    metric: "100%",
    target: "Pregnancy Heart Team Pre-Conception Review",
    description: "mWHO II-IV women receiving structured pre-conception cardiac risk counseling before conception.",
  },
  {
    metric: "≥90%",
    target: "Transition Program Completion by Age 21",
    description: "TRAQ-validated handoff from pediatric cardiology to adult CHD program by age 21.",
  },
  {
    metric: "Q3-6 mo",
    target: "ICD/CRT Device Interrogation Cadence",
    description: "In-clinic plus remote interrogation interval for every implanted device patient.",
  },
  {
    metric: "Annual",
    target: "Fontan FALD & PLE Surveillance",
    description: "Hepatic ultrasound/elastography, AFP, albumin, and alpha-1-antitrypsin clearance every 12 months.",
  },
]

const testimonial = {
  quote:
    "Lifelong CHD care touches every cardiac subspecialty — imaging, EP, heart failure, transplant, and obstetric cardiology — plus hepatology, lymphatics, and genetics for our Fontan patients. We were missing PVR thresholds, late echos, and pregnancy counseling windows because the cadences live in a dozen guidelines. Momenties stitched our lesion-specific surveillance, device clinic, FALD workups, and transition timeline into one calendar. Our PVR referrals now happen within 30 days of RVEDVi threshold, and we have not missed a pregnancy heart team window in over a year.",
  name: "Dr. A. Bhatt",
  title: "ACHD Program Director, Pediatric and Adult Cardiac Center",
}

export default function CongenitalHeartDiseaseCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Congenital Heart Disease Center Calendar"
        title="Congenital Heart Disease Center — Lifelong Cardiac Care & Surveillance Calendar"
        subtitle="Systematic scheduling for ACHD centers — cardiac catheterization intervals, echocardiogram surveillance, arrhythmia monitoring, heart failure management, pregnancy counseling, and transition from pediatric to adult CHD care."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem,3vw,2.2rem)",
              fontFamily: "Playfair Display, serif",
              marginBottom: 48,
              color: "#f0ece3",
            }}
          >
            Built for the Full ACHD Surveillance Lifecycle
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 28 }}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 10, color: "#f0ece3" }}>{title}</h3>
                <p style={{ fontSize: "0.92rem", color: "rgba(240,236,227,0.65)", lineHeight: 1.65 }}>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Timeline */}
      <Reveal>
        <section style={{ background: "#0a0a0d", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                fontFamily: "Playfair Display, serif",
                marginBottom: 12,
                color: "#f0ece3",
              }}
            >
              The 12-Month ACHD Surveillance Calendar
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every echo, MRI, device check, PVR threshold, Fontan workup, and pregnancy heart team window — sequenced across the year.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => (
                <div
                  key={item.month}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr",
                    gap: 24,
                    background: "#131318",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 12,
                    padding: "24px 28px",
                    alignItems: "start",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "#c5a35c",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: 4,
                      }}
                    >
                      {item.month}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.97rem", marginBottom: 6 }}>
                      {item.title}
                    </div>
                    <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                fontFamily: "Playfair Display, serif",
                marginBottom: 48,
                color: "#f0ece3",
              }}
            >
              The 6 KPIs That Define ACHD Program Excellence
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
              {kpis.map((kpi) => (
                <div
                  key={kpi.target}
                  style={{
                    background: "#0a0a0d",
                    border: "1px solid rgba(197,163,92,0.2)",
                    borderRadius: 12,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(1.4rem,2.5vw,1.9rem)",
                      fontWeight: 700,
                      color: "#c5a35c",
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 8,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#f0ece3", marginBottom: 6 }}>
                    {kpi.target}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "rgba(240,236,227,0.65)", lineHeight: 1.5 }}>
                    {kpi.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ padding: "40px 24px 80px" }}>
          <div style={{ maxWidth: 880, margin: "0 auto" }}>
            <blockquote
              style={{
                background: "#131318",
                border: "1px solid rgba(197,163,92,0.25)",
                borderRadius: 16,
                padding: "36px 40px",
                margin: 0,
              }}
            >
              <div style={{ fontSize: "2.5rem", color: "#c5a35c", marginBottom: 12, lineHeight: 1 }}>&ldquo;</div>
              <p
                style={{
                  fontSize: "clamp(1rem,2vw,1.15rem)",
                  color: "#f0ece3",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: 24,
                }}
              >
                {testimonial.quote}
              </p>
              <footer>
                <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>{testimonial.name}</div>
                <div style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", marginTop: 4 }}>
                  {testimonial.title}
                </div>
              </footer>
            </blockquote>
          </div>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
