import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Medical Toxicologists | CME & MOC Tracker",
  description: "Track ABEM or ABPM primary MOC, ACMT fellowship CE, poison control center credentialing, antidote CE, and occupational toxicology licensing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABEM or ABPM Primary MOC & ACMT Fellowship CE",
    body: "Medical toxicologists hold ABEM (American Board of Emergency Medicine) continuous MOC or ABPM (American Board of Preventive Medicine) 10-year MOC as their primary board, plus ABEM/ABPM subspecialty certification in Medical Toxicology (2-year renewal examination cycle). ABEM continuous MOC: lifelong learning and self-assessment (LLSA) modules annually + 10-year examination. ABPM 10-year cycle: 300 CME (50 preventive medicine-specific), Part III examination at cycle end. Subspecialty medical toxicology examination: offered every 2 years (odd years) — 5-year recertification examination. ACMT (American College of Medical Toxicology) fellowship requires 50 CE per 2-year cycle (25 toxicology-specific), annual NACCT (North American Congress of Clinical Toxicology) meeting participation, and ToxIC (Toxicology Investigators Consortium) case registry data submission. AAPCC (American Association of Poison Control Centers) credentialing for physician medical directors: annual AAPCC certification CE and poison control center medical director standards review. Momenties tracks primary board, subspecialty, ACMT fellowship, and AAPCC cycles independently.",
  },
  {
    icon: Clock,
    title: "Antidote CE: Fomepizole, N-Acetylcysteine, Intralipid & Emerging Agents",
    body: "Fomepizole CE: methanol and ethylene glycol poisoning — FDA-approved antidote CE update 2024 (European toxicology data on renal failure prediction from oxalate CE), fomepizole dosing CE (15 mg/kg loading dose, 10 mg/kg q12h × 4 doses, then 15 mg/kg q12h — hemodialysis supplemental dosing CE). N-acetylcysteine CE: acetaminophen overdose — FDA-approved IV NAC updated dosing CE (Rumack-Matthew nomogram interpretation, loading dose 150 mg/kg over 60 min, second infusion 50 mg/kg over 4 hours, third infusion 100 mg/kg over 16 hours), NAC extended-use CE for hepatic failure. Intralipid CE: LAST (local anesthetic systemic toxicity) rescue — ACMT position statement 2023 CE (1.5 mL/kg 20% ILE bolus, CPR during LAST management CE). Lipophilic drug toxicity ILE CE: beta-blocker, calcium channel blocker, tricyclic antidepressant overdose CE (off-label but ACMT-endorsed). Digoxin immune FAB CE: dosing calculation CE for unknown digoxin ingestion (10 vials empiric) versus known ingestion (weight × serum level ÷ 100). High-dose insulin euglycemia CE (HDIE): calcium channel blocker and beta-blocker toxicity — insulin 1 unit/kg/hr CE, glucose supplementation, potassium monitoring.",
  },
  {
    icon: BarChart3,
    title: "Opioid Crisis CE, Fentanyl Analogs & Novel Psychoactive Substances CE",
    body: "Fentanyl analog CE: carfentanil CE (10,000× morphine potency — naloxone dosing CE: higher doses 2-4 mg IV or 4 mg IN required, repeated CE), nitazenes CE (novel synthetic opioids — protonitazene, metonitazene, isotonitazene — not detected on standard immunoassays CE, treat empirically with high-dose naloxone), xylazine-laced fentanyl CE: SAMHSA 2023 alert — xylazine causes wounds unresponsive to naloxone (alpha-2 agonist — not an opioid), wound care CE for xylazine skin lesions. Novel psychoactive substances CE: synthetic cannabinoids CE (K2/Spice — cardiovascular toxicity CE: coagulopathy, myocardial infarction), synthetic cathinones CE (bath salts — hyperthermia management CE, benzodiazepine first-line CE, dantrolene for refractory hyperthermia CE). MDMA CE: serotonin syndrome CE (Hunter criteria — clonus, hyperreflexia, diaphoresis, hyperthermia — cyproheptadine antidote CE). Ketamine CE: dissociative anesthesia CE for procedural sedation, emergence reaction management CE, ketamine abuse CE (bladder cystoscopy CE for ketamine cystitis).",
  },
  {
    icon: Users,
    title: "State License, Poison Control Center Credentialing & Occupational Toxicology CE",
    body: "State medical license CE (2-year, 25-50 CME) runs independently from ABEM/ABPM MOC. AAPCC Poison Control Center medical director standards: annual CE for medical directors (clinical competency assessment, policy review, education program oversight CE). Occupational toxicology CE: ABPM preventive medicine/occupational medicine component CE (heavy metal toxicity CE — lead, arsenic, mercury — industrial exposure assessment CE), OSHA HAZWOPER training renewal CE for toxicologists working with industrial exposures (annual 8-hour refresher). Chemical weapon agent CE: CHEMPACK program CE for nerve agent response (organophosphate mechanism CE, atropine and pralidoxime auto-injector CE, CHEMPACK cache CE for mass casualty), REMM (Radiation Emergency Medical Management) CE for radiation emergency response. ToxIC Registry participation: quarterly data submission required for ACMT fellowship CE credit — aggregate toxicology trend reporting. Forensic toxicology CE: expert witness qualification CE (FRE 702 Daubert standard for toxicology expert testimony CE), legal threshold interpretations CE (BAC 0.08% per se DUI CE, drug-facilitated assault CE). Momenties tracks AAPCC annual deadline, ACMT cycle, ToxIC submission windows, and occupational license renewals.",
  },
]

const studies = [
  {
    title: "Xylazine-Fentanyl Co-Contamination SAMHSA 2023 Alert CE",
    detail: "Xylazine prevalence: detected in 26% of fentanyl samples in 10 states (DEA 2023). Xylazine mechanism CE: alpha-2 adrenergic agonist — not an opioid, naloxone does not reverse xylazine-induced sedation. CE: combined fentanyl/xylazine overdose — naloxone for opioid reversal (still required — co-ingestion), xylazine sedation self-limited (1-2 hours). Xylazine wounds: skin necrosis at injection sites (not limited to IV sites — CE on subcutaneous and distal extremity lesions), wound care CE (debridement threshold, antibiotic selection for wound infection).",
  },
  {
    title: "High-Dose Insulin Euglycemia (HDIE) in CCB/Beta-Blocker Toxicity — 2024 ACMT Update",
    detail: "ACMT 2024 position: HDIE as first-line for severe CCB toxicity (not lipid emulsion or calcium alone). Protocol CE: insulin 1 unit/kg IV bolus, then 0.5-2 units/kg/hr infusion. Glucose supplementation: 10% dextrose infusion to maintain BG 100-250 mg/dL. Hypokalemia monitoring: insulin shifts K+ intracellularly — check every 30 min for first 2 hours. Target endpoints: improved hemodynamics (MAP ≥65 mmHg), lactate clearance. CE: maximum insulin dose data (case series up to 10 units/kg/hr — uncommon but documented), HDIE failure escalation to ECMO CE.",
  },
  {
    title: "Nitazene Novel Synthetic Opioids — CDC Surveillance Update (MMWR 2024)",
    detail: "Nitazenes (benzimidazole opioids): 20-100× more potent than morphine (protonitazene), not detected on standard urine immunoassay opioid screens. CDC 2024: detected in 1.3% of overdose deaths in surveillance states. CE: empirical naloxone treatment for suspected opioid overdose without UDS confirmation, high-dose naloxone CE (cumulative doses up to 10 mg may be required), prolonged monitoring CE (respiratory depression may outlast naloxone duration — 30-90 min vs 4-8 hours nitazene half-life). LC-MS/MS confirmatory testing CE for forensic cases.",
  },
  {
    title: "Fomepizole Methanol Toxicity — European Multicenter Data (Clin Toxicol 2024)",
    detail: "European data (n=847 methanol poisonings): fomepizole-treated patients — hemodialysis requirement predicted by serum methanol >50 mg/dL at presentation (positive predictive value 91%). Anion gap >24 mEq/L + formate level CE: formate is the toxic metabolite — formate >20 mg/L predicts visual toxicity. CE: fomepizole versus ethanol comparison (fomepizole preferred — no CNS depression, no hypoglycemia), HD indication CE (severe acidosis pH <7.1, visual changes, methanol >50 mg/dL), fomepizole HD supplemental dosing CE (every 4 hours during HD session).",
  },
  {
    title: "Intralipid Emulsion LAST ACMT Position Statement Update (ACMT 2023)",
    detail: "ACMT 2023 ILE position: recommended for hemodynamically unstable LAST. Mechanism CE: lipid sink (sequestration of lipophilic local anesthetic), direct cardiac myocyte effect (fatty acid substrate for ischemic myocardium). Dosing CE: 1.5 mL/kg bolus 20% ILE, infusion 0.25 mL/kg/min × 10 min; if still unstable — repeat bolus × 1. Total dose ceiling: 12 mL/kg. Concurrent CPR: do not stop compressions during ILE administration. ECMO CE: ILE failure escalation — VA-ECMO for refractory LAST (centers with ECMO capability). Patient transfer CE: stable post-ILE but relapse risk — observe ≥6 hours after ILE. ILE drug interactions CE: lipophilic drug contamination (bupivacaine > ropivacaine > lidocaine — ILE most effective for bupivacaine).",
  },
  {
    title: "Acetaminophen Overdose — IV NAC Modified Protocol CE (Clin Toxicol 2024)",
    detail: "Modified 2-bag IV NAC protocol (vs traditional 3-bag): bag 1 — 200 mg/kg over 4 hours; bag 2 — 100 mg/kg over 16 hours. Compared to traditional 3-bag protocol: anaphylactoid reaction rate 6% vs 20% (p<0.001 — slower loading rate reduces allergic reactions). CE: Rumack-Matthew nomogram — treatment line at 150 mcg/mL at 4 hours, NAC started if above line. Extended-use CE: ALT rising despite NAC — continue until ALT ≤1000 IU/L and INR ≤2.0 CE. Late presentation CE (>24 hours): NAC benefit CE — ALT rise, INR >2.0, encephalopathy — treat regardless of time. King&apos;s College Criteria CE for liver transplant evaluation.",
  },
]

export default function MedicalToxicologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Medical Toxicologists"
        title="One Calendar for ABEM/ABPM MOC, Medical Toxicology Subspecialty CE, and AAPCC Standards"
        subtitle="From fentanyl analog antidote CE to ToxIC registry submission deadlines — Momenties tracks every obligation across your primary board, subspecialty, fellowship, and poison center credentials."
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
              High-Yield CE for Medical Toxicology MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each antidote update, novel substance alert, and ACMT position statement before your primary board or subspecialty cycle closes.
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
              &ldquo;Medical toxicology is a subspecialty with a 2-year exam cycle layered on top of my ABEM continuous MOC, plus ACMT fellowship, AAPCC annual standards, ToxIC quarterly registry submissions, and the occupational toxicology CE I need for my industrial consult practice. The novel substance CE requirements are genuinely continuous — xylazine, nitazenes, and HDIE protocol updates all require documented CE before your hospital credentialing committee will accept them. Momenties tracks all of it so I don&apos;t have to.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Rowan O., MD, FACMT, FAEM
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Medical Toxicology, Regional Poison Control Center Medical Director
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABEM MOC, medical toxicology subspecialty exam, or AAPCC standards deadline again"
        subtitle="Momenties keeps every CME credit, antidote CE, ToxIC registry submission, and poison center compliance requirement in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
