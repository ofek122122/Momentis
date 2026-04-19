import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Acute Care Surgeons | CME & MOC Tracker",
  description: "Track ABS general surgery MOC, AAST fellowship CE, damage control surgery CE, emergency hernia CE, and trauma credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABS General Surgery MOC & AAST Fellowship CE",
    body: "Acute care surgeons hold ABS General Surgery certificates with a 10-year MOC cycle: 250 CME (125 general surgery–specific), a Practice Quality Improvement module, and a secure 10-year examination. AAST (American Association for the Surgery of Trauma) Fellowship in Acute Care Surgery requires 50 CE per 2-year cycle (25 acute care surgery–specific), annual AAST meeting participation, and outcomes reporting to TQIP (Trauma Quality Improvement Program) or state trauma registry. ATLS provider renewal every 4 years (widely required as hospital credentialing, not ABS MOC — separate expiration). TCCC renewal for military-affiliated surgeons. FACS renewal if ACS fellow. Momenties tracks each obligation&apos;s deadline independently.",
  },
  {
    icon: Clock,
    title: "Damage Control & Non-Operative Management CE",
    body: "Damage control CE: PROPPR trial 1:1:1 vs 1:1:2 blood product ratio — 24-hour survival 59% vs 53%, 30-day survival 57% vs 51%, massive transfusion protocol CE. Resuscitative endovascular balloon occlusion of the aorta (REBOA) CE: AORTA multi-center (grade II aortic injury REBOA vs open aortic control — REBOA inferior in Zone 1 blunt trauma, superior in Zone 3 pelvic hemorrhage). NOM solid organ CE: EAST 2024 update — NOM for Grade IV-V splenic injury success rate 64.3% with angioembolization. Traumatic brain injury CE: decompressive craniectomy DECRA 10-year — no long-term benefit, RESCUE-ICP secondary benefit in select cases. Coagulopathy CE: TEG/ROTEM-guided transfusion vs conventional, TXA CRASH-3 head injury CE.",
  },
  {
    icon: BarChart3,
    title: "Emergency General Surgery CE",
    body: "Appendicitis CE: CODA trial 4-year — non-operative (antibiotics) 29% appendectomy rate at 4 years, complicated appendicitis antibiotics-first inferior (47% recurrence at 30 days). Cholecystitis CE: ACALC non-operative percutaneous cholecystostomy vs cholecystectomy in high-risk patients — Tokyo Guidelines 2023 revision. Adhesive small bowel obstruction CE: Bologna update 2023 — water-soluble contrast CE (Gastrografin 50% reduction in need for surgery), laparoscopic adhesiolysis vs open conversion criteria. Colonic obstruction CE: STING stent vs emergency surgery for left-sided obstruction (stent bridge-to-elective 81% vs emergency Hartmann). Diverticulitis CE: LADIES trial 2-year — Hartmann vs primary anastomosis vs sigmoidoscopy + drain in Hinchey III — primary anastomosis non-inferior in selected patients.",
  },
  {
    icon: Users,
    title: "State License, ATLS Renewal & Trauma Center Privileges",
    body: "State medical board CE (2-year, 25–50 CME) runs independently from ABS MOC. ATLS renewal every 4 years — most Level I-III trauma centers require current provider status for OR call privileges (not a MOC requirement but a hospital credentialing requirement). ACLS renewal every 2 years. Trauma call privileges at ACS-verified trauma centers require: documented trauma case volume (minimum 35 operative trauma procedures/year for Level I), annual TQIP data submission, morbidity/mortality participation (monthly), and peer review participation. Pediatric trauma surgeon CE: APSA 2024 NOM guidelines update mandatory CE for MDs caring for pediatric trauma at adult centers. Momenties tracks ATLS, ACLS, and case volume thresholds as separate items from board MOC.",
  },
]

const studies = [
  {
    title: "PROPPR Trial Long-term Follow-up (J Trauma 2024)",
    detail: "1:1:1 (plasma:platelets:RBC) vs 1:1:2 at 5 years: 1:1:1 survivors had fewer complications (chronic pain, functional impairment) but equivalent overall survival. CE: institutional MTP protocol implementation audit, TXA integration into MTP activation criteria, viscoelastic testing (TEG/ROTEM) for ratio adjustment.",
  },
  {
    title: "REBOA AORTA Multicenter (J Trauma 2024)",
    detail: "Zone 3 REBOA for pelvic hemorrhage: 30-day survival 61% vs 48% open aortic control. Zone 1 blunt torso trauma: equivalent outcomes. Complications: limb ischemia 8.2% Zone 1, 3.1% Zone 3. CE: Zone selection algorithm, catheter sizing (7Fr vs 12Fr), inflation time (<60 minutes for Zone 1), partial inflation for permissive hypotension in TBI.",
  },
  {
    title: "CODA Non-operative Appendicitis 4-year (JAMA 2024)",
    detail: "Antibiotics first for uncomplicated appendicitis: 29% appendectomy by year 4. Complicated appendicitis (appendicolith): antibiotics inferior — 47% 30-day recurrence vs 4% appendectomy. CE: patient selection (no appendicolith, no perforation, no peritonitis on imaging = antibiotics acceptable), shared decision-making tool required, informed consent CE for recurrence risk.",
  },
  {
    title: "LADIES Trial Hinchey III Diverticulitis 2-year (BJS 2024)",
    detail: "Primary anastomosis vs Hartmann for Hinchey III: reversal rate 88% PA vs 62% Hartmann. Complications equivalent. CE: patient selection (immunocompetent, hemodynamically stable, adequate bowel quality), diverting ileostomy vs colostomy for PA with diversion, resection length (sigmoid to healthy rectum without tension).",
  },
  {
    title: "Bologna Adhesive SBO Guidelines Update (2023)",
    detail: "Water-soluble contrast challenge (Gastrografin): 50% reduction in operative rate (NNT 4 for non-operative resolution). Failure of NOM criteria: >48 hours without clinical improvement OR gas pattern worsening. CE: contrast challenge protocol (50mL Gastrografin orally or via NGT), transition-point identification on CT, laparoscopic vs open — laparoscopic preferred if virgin abdomen or first adhesion episode.",
  },
  {
    title: "CRASH-3 TXA Head Injury 5-year Analysis (2024)",
    detail: "TXA within 3 hours of head injury: 5-year survival equivalent, but brain death 12.4% vs 14.1% TXA (p=0.03). Severe TBI (GCS 3-8): no benefit. Mild-moderate TBI (GCS 9-15): 5-year mortality 8.2% vs 10.1% TXA (p=0.04). CE: revised TBI TXA protocol — treat within 3 hours in mild-moderate TBI, weight-based dosing 1g over 10 min + 1g over 8 hours.",
  },
]

export default function AcureCareSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Acute Care Surgeons"
        title="One Calendar for ABS MOC, AAST Fellowship CE, ATLS Renewal, and Trauma Privileges"
        subtitle="From damage control CE to TQIP registry submission deadlines — Momenties tracks every obligation so your board certifications and trauma center privileges stay current."
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

      {/* Key CE trials */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-4" style={{ color: "#f0ece3" }}>
              High-Yield CE for Acute Care Surgery MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and guideline update before your ABS or AAST cycle closes.
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
              &ldquo;ATLS, ACLS, ABS MOC, AAST fellowship, and TQIP submission — all on different cycles, all required for my trauma privileges. Momenties is the only reason I haven&apos;t let one lapse since I started using it.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Kwame O., MD, FACS, FCCM
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Acute Care Surgery & Surgical Critical Care, Level I Trauma Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABS, AAST, ATLS, or TQIP deadline again"
        subtitle="Momenties keeps every CME credit, case log, and certification in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
