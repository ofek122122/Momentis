import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Pediatric Anesthesiologists | CME & MOC Tracker",
  description: "Track ABA primary MOC, SPA fellowship CE, pediatric airway CE, neonatal anesthesia neurotoxicity CE, PALS/NRP deadlines, and regional anesthesia credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABA Primary MOC & SPA Pediatric Anesthesiology Fellowship CE",
    body: "Pediatric anesthesiologists hold ABA primary certification with MOCA 2.0 continuous assessment: MOCA Minute™ quarterly deadlines (30 questions per quarter — missed quarter requires catch-up in following quarter), simulation CE requirement (8 hours per 10-year cycle with pediatric scenario CE recommended), and ABA OSCE component. SPA (Society for Pediatric Anesthesia) fellowship in Pediatric Anesthesiology requires 50 CE per 2-year cycle (25 pediatric anesthesiology-specific), annual SPA Annual Meeting participation or equivalent, and case volume documentation (ABA requires minimum pediatric case log for subspecialty designation). SPANZA (Society of Paediatric Anaesthesia in New Zealand and Australia) fellowship or APAGBI fellowship add independent CE cycles for international active members. PRAN (Pediatric Regional Anesthesia Network) registry participation satisfies ABA MOCA Quality Improvement requirement. Momenties tracks MOCA Minute™ quarterly deadlines, SPA cycle, and certification expiration dates on one dashboard.",
  },
  {
    icon: Clock,
    title: "Neonatal Anesthesia, Neurotoxicity & Pediatric Airway CE",
    body: "Neonatal anesthesia neurotoxicity CE: FDA Drug Safety Communication 2016 (updated 2023) — anesthetic neurotoxicity in children under 3 years CE. SmartTots consortium 2024 preclinical update: dexmedetomidine neuroprotective properties (neonatal rodent model), propofol versus sevoflurane neonatal hippocampal synaptogenesis CE. Informed consent language for neonatal surgery CE: AAP guidance on parental disclosure. Neonatal airway CE: Miller blade 0 vs 00 for ex-premature infants, video laryngoscopy for neonates (C-MAC pediatric vs GlideScope AVL small CE), cuffed versus uncuffed ETT in neonates — updated SPA guidance (cuffed acceptable if appropriately sized, Microcuff CE). Difficult pediatric airway CE: Difficult Airway Society pediatric guidelines 2024, bougie CE for can-intubate-cannot-oxygenate algorithm in children, surgical airway CE for pediatric critical obstruction (needle cricothyrotomy in children under 8 CE — anatomy CE). EXIT procedure CE: ex-utero intrapartum treatment for giant neck mass — anesthesia management of partially delivered fetus.",
  },
  {
    icon: BarChart3,
    title: "Pediatric Regional Anesthesia & PONV CE",
    body: "Pediatric regional anesthesia CE: PRAN registry 2024 — ultrasound-guided regional complications by block type (caudal 0.2%, peripheral nerve blocks 0.03%, neuraxial <0.1%). TAP block CE: posterior versus lateral TAP for pediatric laparoscopy — analgesia equivalence CE. Erector spinae plane block CE: ESP for thoracotomy in children under 12 — dose CE (0.3 mL/kg per side ropivacaine 0.2%). Caudal epidural CE: caudal-to-epidural catheter threading CE for continuous thoracic analgesia, caudal drug CE — ropivacaine 0.2% vs bupivacaine 0.25% comparative CE, clonidine adjunct dose CE (1-2 mcg/kg). PONV prevention CE: SPA 2024 PONV risk scoring in children (Eberhart score update), dexamethasone pediatric dose CE (0.15 mg/kg max 8 mg — equivalent to adult dose-finding CE), ondansetron CE (0.1 mg/kg), propofol TIVA CE for high PONV risk pediatric patients. Opioid-free anesthesia CE: dexmedetomidine 0.5-1 mcg/kg induction and 0.5 mcg/kg/hr infusion for ENT/airway procedures CE.",
  },
  {
    icon: Users,
    title: "State License, PALS/NRP, Simulation & Non-OR Pediatric Anesthesia CE",
    body: "State medical license CE (2-year, 25-50 CME) runs independently from ABA MOC. PALS (2-year) and NRP (Neonatal Resuscitation Program — 2-year) critical for pediatric OR and NICU procedural privileges. ABA simulation requirement: 8 hours per 10-year cycle — pediatric malignant hyperthermia, massive pediatric hemorrhage (PICU simulation), and difficult neonatal airway scenarios satisfy simulation CE. Non-OR pediatric anesthesia CE: MRI sedation protocol CE (dexmedetomidine precedex monitoring CE, propofol sedation outside OR CE — emergency airway access requirements, 2024 APSF recommendations for remote-site pediatric anesthesia). Cardiac catheterization lab CE: pulmonary hypertension management during cardiac catheterization CE, adenosine dosing for SVT CE, ketamine versus dexmedetomidine for diagnostic catheterization. GI endoscopy sedation CE: propofol versus dexmedetomidine versus ketamine for pediatric colonoscopy — PEDS trial. Momenties tracks MOCA Minute™ quarterly deadlines, PALS/NRP expiration, and simulation hours.",
  },
]

const studies = [
  {
    title: "SmartTots Dexmedetomidine Neuroprotection Update (Anesthesiology 2024)",
    detail: "Dexmedetomidine (DEX) neonatal rodent model: DEX at sedative doses (75 mcg/kg) does not produce hippocampal apoptosis observed with volatile agents and ketamine. Potential neuroprotective CE: DEX blocks sevoflurane-induced apoptosis when co-administered. Clinical CE: DEX as primary agent or adjunct for procedures <1 hour in children under 3, FDA informed consent CE (2016/2023 guidance language — risk vs benefit discussion for surgeries under 3 years), SmartTots monitoring network CE for neurodevelopmental follow-up.",
  },
  {
    title: "DAS Pediatric Difficult Airway Guidelines 2024 (Anaesthesia 2024)",
    detail: "Difficult Airway Society updated pediatric guidelines: primary algorithm — awake intubation not feasible in small children (distress CE), inhalational vs IV induction decision CE (known difficult airway: inhalational induction with spontaneous ventilation maintained). Rescue CE: first attempt failure → change operator/device, second failure → supraglottic airway (i-gel pediatric), cannot oxygenate emergency → front-of-neck access CE (narrow-gauge cannula cricothyrotomy ≤8 years, surgical cricothyrotomy ≥8 years). Video laryngoscopy CE: first-choice for anticipated difficult airway in children >10 kg.",
  },
  {
    title: "PRAN Registry 2024 Pediatric Regional Anesthesia Outcomes",
    detail: "PRAN 2024 registry (150,000 pediatric blocks): serious adverse events 0.08 per 1,000 blocks. Ultrasound-guidance versus landmark: LAST (local anesthetic systemic toxicity) 0.04% US-guided vs 0.12% landmark. Caudal block CE: intravascular injection 0.15%, intrathecal spread 0.07% — recognition CE (Doppler blood flow detection during caudal injection CE). Pediatric LAST treatment CE: weight-based lipid emulsion CE (1.5 mL/kg 20% lipid emulsion bolus).",
  },
  {
    title: "Pediatric Opioid-Free Anesthesia: Dexmedetomidine TIVA (Paediatr Anaesth 2024)",
    detail: "Dexmedetomidine (1 mcg/kg induction, 0.5-0.7 mcg/kg/hr infusion) + propofol TIVA vs standard sevoflurane + fentanyl for pediatric ENT surgery: PONV 4% OFA vs 31% standard (p<0.001). Pain scores equivalent at 1 hour. CE: OFA patient selection (ASA I-II, no cardiac conduction disease, BMI <30 — bradycardia risk CE), DEX loading dose CE (10 min over bolus, monitor HR), emergency depth monitoring CE (propofol BIS target 40-60 in children ≥2 years).",
  },
  {
    title: "Cuffed Neonatal ETT — SPA Updated Guidance 2024",
    detail: "SPA 2024 position: cuffed ETT acceptable in neonates if Microcuff (high-volume low-pressure) design and appropriately sized (ETT internal diameter: age/4 + 3.5 for uncuffed formula minus 0.5 for cuffed). Cuff pressure <20 cmH2O throughout procedure CE. CE: cuffed ETT benefit — reduced leak around tube, no need for tube change, reduced OR pollution. Post-extubation stridor rate equivalent to uncuffed in randomized data (RCT 2023). Neonatal cuffed ETT sizing chart CE: premature infants <28 weeks — 2.5mm cuffed minimum, >28 weeks — 3.0mm.",
  },
  {
    title: "Non-OR Pediatric Anesthesia APSF 2024 Recommendations",
    detail: "APSF 2024 non-OR anesthesia (NORA): emergency airway equipment at every remote pediatric anesthesia site (size-appropriate laryngoscope, ETTs, supraglottic airway), oxygen and suction immediately available, two-person team for children under 5 CE. MRI-specific CE: pacemaker-compatible monitoring CE, acoustic noise protection for neonates (>65 dB concern), RF heating monitoring CE for metallic objects. GI endoscopy pediatric propofol CE: capnography required for all moderate-to-deep sedation in children (JCAHO requirement update 2023).",
  },
]

export default function PediatricAnesthesiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Pediatric Anesthesiologists"
        title="One Calendar for ABA MOCA, SPA Fellowship CE, and PALS/NRP Renewals"
        subtitle="From neonatal neurotoxicity CE to pediatric regional anesthesia credentialing — Momenties tracks every obligation so your board certification and procedural privileges stay current."
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
              High-Yield CE for Pediatric Anesthesiology MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark study and guideline update before your ABA MOCA quarterly deadline or SPA cycle closes.
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
              &ldquo;MOCA Minute™ every quarter, SPA fellowship every 2 years, PALS every 2 years, NRP every 2 years, and the neurotoxicity informed consent CE that became mandatory after our hospital updated their under-3 anesthesia policy — plus the DAS pediatric airway guideline CE our department required after the 2024 update. Before Momenties, I was tracking all of this with calendar reminders and sticky notes. I missed my NRP expiration by 3 weeks last year. Never again.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Saoirse M., MD
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Pediatric Anesthesiology, Children&apos;s Hospital Academic Medical Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABA MOCA deadline, PALS/NRP renewal, or SPA CE requirement again"
        subtitle="Momenties keeps every CME credit, quarterly assessment, procedural credential, and simulation hour in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
