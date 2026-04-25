import type { Metadata } from "next"
import { Heart, Zap, Stethoscope, UserCheck } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Congenital Heart Disease NPs — Scheduling for Lifelong Structural Heart Care | Momenties",
  description:
    "Designed for NPs managing adult and pediatric CHD patients — echocardiogram and MRI coordination by lesion-specific guidelines, exercise stress testing, Holter and event monitor scheduling, device clinic follow-ups, Fontan complication monitoring (PLE labs, weight/fluid education), pregnancy counseling and obstetric cardiology coordination, transition readiness (TRAQ), PHQ-9/GAD-7 mental health screening, and endocarditis prophylaxis education.",
}

const pillars = [
  {
    icon: Heart,
    title: "Cardiac Imaging & Lab Coordination",
    description:
      "Schedule lesion-specific echocardiograms — Q6 months for moderate-to-severe Fontan, single ventricle, severe pulmonary regurgitation post-TOF repair, and systemic RV in TGA/ccTGA; Q12 months for repaired AVSD with residual MR, repaired coarctation, and stable bicuspid aortic valve. Coordinate cardiac MRI Q2-3 years for RV/LV volume quantification, RVEDVi tracking in repaired TOF (PVR threshold ~150 mL/m²), aortic dimension surveillance (BAV/Marfan/Loeys-Dietz), and Fontan 4D flow. Order exercise stress testing and CPET for functional class assessment, peak VO2 monitoring, and transplant referral triggers (<14 mL/kg/min). Coordinate routine labs — NT-proBNP, BNP, BMP, LFTs, INR for warfarin patients (mechanical valves, Fontan), and ferritin/iron studies for cyanotic erythrocytosis.",
  },
  {
    icon: Zap,
    title: "Device & Arrhythmia Clinic Management",
    description:
      "Run device clinic follow-ups for ICD, CRT-D, and pacemaker patients — Q3-6 month in-clinic interrogation plus continuous remote monitoring transmissions, with same-day NP review of arrhythmia logs, lead impedance trends, and battery longevity. Schedule device wound checks at 1-2 weeks post-implant with surgical site infection screening and post-op activity restriction reinforcement. Coordinate Holter and 14-30 day patch event monitor placement and retrieval for syncope, palpitations, and post-Fontan IART/atrial flutter screening. Educate patients on antiarrhythmic adherence (sotalol, dofetilide, amiodarone) and order QTc ECG and TSH/LFT surveillance per drug. Triage device-related symptoms and coordinate EP referral for ablation candidates.",
  },
  {
    icon: Stethoscope,
    title: "Fontan & Complex CHD Surveillance",
    description:
      "Educate Fontan patients on daily weight monitoring, sodium and fluid balance, and early reporting of edema, ascites, or diarrhea suggesting protein-losing enteropathy (PLE). Order annual PLE labs — serum albumin, total protein, lymphocyte count, fecal alpha-1-antitrypsin clearance — and refer to GI/lymphatics for confirmed PLE. Coordinate annual Fontan-associated liver disease (FALD) workup — hepatic ultrasound with elastography, AFP, platelet count, and hepatology referral. Reinforce thromboprophylaxis adherence (aspirin or warfarin per program protocol) with INR and bleeding/clot surveillance. Counsel on plastic bronchitis warning signs (cast expectoration), exercise prescription within Fontan physiology limits, and seasonal influenza/COVID/RSV vaccination.",
  },
  {
    icon: UserCheck,
    title: "Pregnancy, Transition & Psychosocial Care",
    description:
      "Coordinate obstetric cardiology and maternal-fetal medicine consults for mWHO II-IV women — pre-conception counseling, anticoagulation planning (mechanical valves, Fontan), trimester-specific echo cadence, and delivery planning. Run TRAQ (Transition Readiness Assessment Questionnaire) at every visit ages 14-21 and execute structured pediatric-to-adult CHD handoff. Screen for depression and anxiety at every annual visit using PHQ-9 and GAD-7 (CHD patients have 2-3x general population prevalence) and refer to behavioral health when indicated. Reinforce endocarditis prophylaxis education for high-risk anatomy (prosthetic valves, repaired CHD with residual defect, unrepaired cyanotic CHD, prior IE) with dental clearance and AHA prophylaxis card distribution.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Panel Mapping & Lesion-Specific Order Sets",
    description:
      "Build the NP panel with every active CHD patient stratified by lesion (TOF, TGA/ccTGA, Fontan/single ventricle, AVSD, HLHS, BAV, coarctation, Ebstein, repaired vs. unrepaired) and ACHD anatomic-physiologic stage. Standardize lesion-specific echo and MRI order sets, NT-proBNP and lab cadences, and device interrogation defaults. Tag Fontan patients for annual PLE/FALD workups and identify mWHO II-IV reproductive-age women for pre-conception counseling priority. Establish TRAQ administration triggers for patients ages 14-21.",
  },
  {
    month: "Month 3–4",
    title: "Device Clinic & Arrhythmia Workflow Rollout",
    description:
      "Operationalize Q3-6 month in-clinic device interrogation plus remote monitoring review queues. Schedule 1-2 week post-implant wound checks for new ICD/CRT/pacemaker patients. Coordinate Holter and 14-30 day patch event monitor placements for symptomatic post-Fontan, post-Mustard/Senning, and post-TOF patients. Reinforce antiarrhythmic adherence (sotalol, dofetilide, amiodarone) with QTc ECG and TSH/LFT surveillance. Build same-day EP referral pathway for ablation candidates.",
  },
  {
    month: "Month 5–6",
    title: "Cardiac MRI & PVR Threshold Coordination",
    description:
      "Execute mid-year MRI cohort for repaired TOF — flag patients with RVEDVi 150-160 mL/m² or symptomatic severe PR for surgery referral. Coordinate 4D flow MRI for Fontan circuit assessment. Update aortic dimension surveillance for BAV/Marfan/Loeys-Dietz. Schedule pre-PVR EP study coordination where indicated. Re-baseline CPET peak VO2 documentation for transplant evaluation triggers and exercise prescription updates.",
  },
  {
    month: "Month 7–8",
    title: "Fontan Complication Surveillance & Patient Education",
    description:
      "Run annual Fontan PLE labs (albumin, total protein, lymphocytes, fecal A1AT clearance) and FALD workup (hepatic ultrasound with elastography, AFP, platelet count) with hepatology and lymphatics referrals as needed. Reinforce daily weight monitoring, sodium/fluid balance, plastic bronchitis warning signs, and thromboprophylaxis adherence. Audit aspirin/warfarin compliance and INR control. Refresh seasonal influenza, COVID, and RSV vaccination status.",
  },
  {
    month: "Month 9–10",
    title: "Pregnancy Counseling & Mental Health Screening",
    description:
      "Coordinate fall pregnancy heart team consultations for mWHO II-IV women — pre-conception counseling, anticoagulation transitions, and trimester-specific echo and obstetric cardiology coordination. Administer PHQ-9 and GAD-7 screening at every annual visit and triage behavioral health referrals for positive screens. Update genetic counseling documentation for 22q11.2, NOTCH1, JAG1, and autosomal dominant CHD families. Plan fetal echo coordination for known pregnancies.",
  },
  {
    month: "Month 11–12",
    title: "Transition Closeout, Endocarditis Prophylaxis & Year-End Audit",
    description:
      "Finalize TRAQ-validated pediatric-to-adult handoffs for patients reaching age 18-21 and confirm enrollment in adult ACHD program. Refresh endocarditis prophylaxis education and dental clearance for high-risk anatomy (prosthetic valves, residual defects, unrepaired cyanotic CHD, prior IE) and distribute AHA prophylaxis cards. Audit annual completion of lesion-specific echo, NT-proBNP, PLE/FALD labs, device interrogations, PHQ-9/GAD-7, and TRAQ. Plan next-year cadence and panel reconciliation.",
  },
]

const kpis = [
  {
    metric: "≥95%",
    target: "Lesion-Specific Echo Compliance",
    description: "Annual NP panel echo completion at the lesion-appropriate Q6 or Q12 month interval.",
  },
  {
    metric: "100%",
    target: "Annual Fontan PLE & FALD Surveillance",
    description: "Albumin, alpha-1-antitrypsin clearance, hepatic ultrasound/elastography, and AFP every 12 months.",
  },
  {
    metric: "≥90%",
    target: "PHQ-9 / GAD-7 Annual Completion",
    description: "Mental health screening administered and documented at every annual ACHD NP visit.",
  },
  {
    metric: "100%",
    target: "Pre-Conception Counseling for mWHO II-IV",
    description: "Reproductive-age women receiving structured counseling before conception with anticoagulation plan.",
  },
  {
    metric: "Q3-6 mo",
    target: "Device Interrogation Cadence",
    description: "In-clinic plus remote ICD/CRT/pacemaker interrogation interval per patient.",
  },
  {
    metric: "≥90%",
    target: "TRAQ-Validated Transition by Age 21",
    description: "Patients completing structured pediatric-to-adult CHD handoff by the 21st birthday.",
  },
]

const testimonial = {
  quote:
    "As an ACHD NP, my day spans Fontan PLE labs, device interrogations, pregnancy heart team prep, TRAQ scoring on a 17-year-old, and a PHQ-9 review on a Mustard patient with new depression — all before lunch. Our cadences live across pediatric and adult guidelines and a stack of subspecialty notes. Momenties pulled every lesion-specific echo, MRI, lab, device check, transition assessment, and pregnancy counseling window into one calendar I actually trust. Our annual PLE and FALD workup completion went from inconsistent to 100 percent, and our pre-conception counseling happens before patients are pregnant — not after.",
  name: "Sarah V., CPNP-AC",
  title: "ACHD NP, Congenital Heart Disease Program",
}

export default function CongenitalHeartDiseaseNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="CHD Nurse Practitioners"
        title="Congenital Heart Disease NPs — Scheduling for Lifelong Structural Heart Care"
        subtitle="Designed for NPs managing adult and pediatric CHD patients — from echocardiogram coordination and device clinic follow-ups to Fontan complication monitoring, pregnancy counseling, and transition care support."
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
            Built for the Full CHD Nurse Practitioner Practice
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
              The 12-Month CHD NP Coordination Calendar
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every echo, MRI, device clinic visit, Fontan workup, TRAQ assessment, pregnancy counseling, and PHQ-9/GAD-7 — sequenced across the year.
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
              The 6 KPIs That Define ACHD NP Excellence
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
