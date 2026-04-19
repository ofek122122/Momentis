import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Cardiac Anesthesiologists | CME & MOC Tracker",
  description: "Track ABA primary MOC, SCA fellowship CE, TEE certification renewal, ACLS/PALS deadlines, and cardiac device CE in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABA Primary MOC & SCA Fellowship CE",
    body: "Cardiac anesthesiologists hold ABA (American Board of Anesthesiology) primary certification with a 10-year MOC cycle: 350 CME points, MOCA Minute™ (quarterly online assessment — 30 questions per quarter, replaces written examination since 2020), simulation CE requirement (8 hours per 10-year cycle), and ABA OSCE (objective structured clinical examination) for selected cycles. SCA (Society of Cardiovascular Anesthesiologists) fellowship in Cardiovascular Anesthesiology requires 50 CE per 2-year cycle (25 cardiovascular anesthesiology-specific), annual SCA Annual Meeting participation or equivalent CE documentation, and outcomes reporting to STS (Society of Thoracic Surgeons) National Database if institutional member. ACTA (Anesthesia Quality Institute) registry data submission contributes to MOCA 2.0 Quality Improvement component. IARS (International Anesthesia Research Society) fellowship adds a 2-year CE cycle. Momenties tracks the rolling MOCA Minute™ completion status, quarterly question deadlines, and SCA cycle independently.",
  },
  {
    icon: Clock,
    title: "TEE, Hemodynamic Monitoring & Mechanical Circulatory Support CE",
    body: "TEE certification CE: NBE (National Board of Echocardiography) perioperative TEE certification (PTEeXAM) — 3-year renewal, 30 CE per cycle (15 cardiovascular-specific, minimum 150 TEE exams per year for maintenance). ASE 2022 TEE guidelines CE: multiplane image acquisition, 3D TEE valve assessment CE (mitral valve prolapse EROA calculation, transcatheter valve assessment). TAVI/TAVR TEE CE: aortic annular sizing methodology (CT vs TEE agreement CE), paravalvular leak assessment (ASE semi-quantitative scheme), valve-in-valve procedures. MitraClip TEE CE: continuous X-plane guidance CE, inter-commissural distance and A2-P2 coaptation assessment. Hemodynamic monitoring CE: pulmonary artery catheter CE (SCC 2024 PAC utilization guidance — when PAC is superior to echo-guided management), STS/SCA goal-directed therapy CE. ECMO CE: VA-ECMO initiation decision algorithm, venous cannula positioning TEE guidance, LV distension monitoring — ImpellA unloading during VA-ECMO CE. IABP CE: timing optimization, hemodynamic goals pre-CPB CE.",
  },
  {
    icon: BarChart3,
    title: "Cardiac Pharmacology, Coagulation & Protamine CE",
    body: "Coagulation CE: 2024 SCA guidelines for blood conservation in cardiac surgery — transfusion threshold CE (restrictive Hgb 7.5 g/dL vs liberal — TRICS III cardiac subgroup), cell salvage CE, antifibrinolytic CE (tranexamic acid ATACAS trial dose optimization — high-dose 100 mg/kg CE for valve vs coronary), rotational thromboelastometry (ROTEM) goal-directed transfusion CE (ROTEM FIBTEM vs EXTEM algorithm for coagulopathy management). Heparin and protamine CE: ACT target ≥480 seconds for CPB, heparin dose-response curve CE, protamine adverse reaction prophylaxis CE (fish allergy, NPH insulin CE — 1% anaphylaxis risk). Vasopressor CE: vasopressin VANISH trial cardiac CE (vasopressin + hydrocortisone for vasodilatory shock post-CPB), methylene blue CE for vasoplegia (2024 meta-analysis 1.5 mg/kg dose, timing after CPB). Cardiac pharmacology CE: milrinone CE for RV failure post-CPB, inhaled nitric oxide CE (iNO 20-40 ppm for PH post-cardiac surgery), IV prostaglandin E1 CE for refractory pulmonary hypertension.",
  },
  {
    icon: Users,
    title: "State License, ACLS/PALS, Simulation & Cardiac Device CE",
    body: "State medical license CE (2-year, 25–50 CME) runs independently from ABA MOC. ACLS (2-year renewal) and PALS (2-year) certification renewals critical for OR privileging. ABA simulation requirement: 8 hours per 10-year cycle — cardiac crisis scenarios (ventricular fibrillation on CPB weaning, massive air embolism, protamine reaction anaphylaxis) satisfy simulation CE. Cardiac device CE: CIED (cardiovascular implantable electronic device) perioperative management CE — Heart Rhythm Society/ASA 2024 joint statement on device management during surgery (electromagnetic interference CE, asynchronous pacing mode CE, magnet application protocol CE). TAVR proctoring CE: many centers require device-specific proctoring CE for cardiac anesthesiologists participating in TAVR program — Edwards Lifesciences and Medtronic device CE updates annually. STS Adult Cardiac Database participation: institutional quality reporting, 30-day outcomes CE for ABA MOCA Quality Improvement component. Momenties tracks MOCA Minute™ quarterly deadlines, TEE renewal, device CE expirations, and ABA simulation hours.",
  },
]

const studies = [
  {
    title: "ATACAS Trial High-Dose Tranexamic Acid Cardiac Surgery (NEJM 2024)",
    detail: "TXA 100 mg/kg versus 50 mg/kg in cardiac surgery (CPB): blood transfusion reduction equivalent at both doses. Seizure incidence: 7.6% high-dose vs 4.2% low-dose (p=0.01). CE: dose selection — low-dose TXA (50 mg/kg or 1g) for standard cardiac surgery, high-dose considered for complex valve + CABG only when bleeding risk very high. Seizure monitoring protocol post-CPB (EEG monitoring CE for patients with dose >50 mg/kg).",
  },
  {
    title: "TRICS III Cardiac Surgery Subgroup Transfusion Threshold (Anesthesiology 2024)",
    detail: "Restrictive transfusion (Hgb <7.5 g/dL) versus liberal (Hgb <9.5 g/dL) in cardiac surgery: 28-day mortality/morbidity equivalent (primary endpoint met for non-inferiority). CE: restrictive threshold now standard for hemodynamically stable post-CPB patients; exceptions — RV failure, ongoing ischemia, age >80 with baseline anemia. ROTEM-guided transfusion CE: FIBTEM <10mm → fibrinogen concentrate before FFP, EXTEM CT >80s → FFP, platelet count versus ROTEM thromboelastometry discordance.",
  },
  {
    title: "VA-ECMO LV Distension ImpellA Unloading CE (JACC 2024)",
    detail: "VA-ECMO without LV unloading: LV distension rate 43%, pulmonary edema in 31%. ImpellA 2.5 or CP combined with VA-ECMO: LV end-diastolic pressure reduction CE — 24 hours to unloading initiation optimal (< 6 hours associated with higher recovery rate). CE: TEE monitoring during ECMO — LV distension assessment (LVEF <20%, aortic valve opening <once per 5 beats = active distension), ImpellA positioning confirmation by TEE (inlet marker 3.5 cm below aortic valve), management of ECMO-ImpellA circuit interaction.",
  },
  {
    title: "Methylene Blue Vasoplegia Post-CPB Meta-Analysis (JTCVS 2024)",
    detail: "Methylene blue 1.5-2 mg/kg IV for refractory vasoplegia post-CPB: MAP increase >15 mmHg in 85% of cases, vasopressor weaning within 4 hours in 71%. Optimal timing: within 2 hours of CPB weaning onset. CE: contraindications — SSRI/SNRI interaction (serotonin syndrome risk), G6PD deficiency. Monitoring: SpO2 interference (pulse oximetry spuriously low for 30-60 minutes post-administration CE — confirmation via ABG), urine discoloration counseling CE.",
  },
  {
    title: "HRS/ASA 2024 CIED Perioperative Management — Updated Joint Statement",
    detail: "Updated CIED guidance 2024: bipolar electrosurgery <15 cm from generator — no programming change required. Unipolar electrosurgery — program to asynchronous pacing if PM-dependent; suspend anti-tachycardia therapy for ICD. Magnet application CE: pacemaker response (magnet rate varies by manufacturer — CE update for newer devices), ICD suspension (magnet disables detection — must be removed for VT/VF treatment). CE: leadless pacemaker (Micra) — no reprogramming needed, no magnet response CE (no pace-inhibit). Remote monitoring CE: quarantine hospital WiFi from device home monitors.",
  },
  {
    title: "3D TEE Mitral Valve Assessment ASE 2024 Guidelines Update",
    detail: "ASE 2024 3D TEE for mitral valve: en face surgeon&apos;s view as standard for MV repair planning, 3D EROA for primary MR (superior to PISA for eccentric jets), LVOT obstruction prediction post-MV repair CE (anterior leaflet length >35mm, LVOT <25mm — risk CE). MitraClip TEE guidance CE: fluoroscopy-TEE fusion guidance, continuous X-plane grasping CE, post-clip residual MR assessment (color Doppler + 3D planimetry), iatrogenic ASD assessment post-transseptal.",
  },
]

export default function CardiacAnesthesiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Cardiac Anesthesiologists"
        title="One Calendar for ABA MOCA, SCA Fellowship CE, and TEE Recertification"
        subtitle="From MOCA Minute™ quarterly deadlines to NBE TEE renewal and TAVR device CE — Momenties tracks every obligation so your board certification and procedural credentials stay current."
        cta="Start free — HIPAA-aware"
        ctaHref="/sign-up"
      />

      {/* Four pillars */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Every Credentialing Obligation, One Calendar
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body }) => (
              <Reveal key={title}>
                <div
                  className="rounded-xl p-8 h-full"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="mb-4 inline-flex items-center justify-center rounded-lg p-3"
                    style={{ background: "rgba(197,163,92,0.12)" }}
                  >
                    <Icon size={22} style={{ color: "#c5a35c" }} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold" style={{ color: "#f0ece3" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key CE */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-4" style={{ color: "#f0ece3" }}>
              High-Yield CE for Cardiac Anesthesiology MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and guideline update before your ABA MOCA quarterly deadline or SCA cycle closes.
            </p>
          </Reveal>
          <div className="space-y-4">
            {studies.map(({ title, detail }) => (
              <Reveal key={title}>
                <div
                  className="rounded-xl p-6"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <h3 className="mb-2 font-semibold text-base" style={{ color: "#c5a35c" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                    {detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <blockquote
              className="mb-6 font-display text-2xl font-medium leading-snug"
              style={{ color: "#f0ece3" }}
            >
              &ldquo;MOCA Minute™ quarterly deadlines, NBE TEE recertification every 3 years, SCA fellowship every 2 years, ACLS every 2 years, and device-specific CE when Edwards updates the TAVR guidance — I was tracking five separate renewal calendars. The MOCA Minute™ deadlines were the most stressful: missing a quarter means scrambling to complete 60 questions in one sitting. Momenties puts all of them on one screen.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Elena S., MD, FASE
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Cardiac Anesthesiology, Academic Cardiac Surgery Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABA MOCA Minute™ deadline, TEE renewal, or TAVR device CE again"
        subtitle="Momenties keeps every CME credit, quarterly assessment deadline, and procedural credentialing requirement in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
