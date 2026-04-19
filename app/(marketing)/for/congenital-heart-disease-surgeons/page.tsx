import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Congenital Heart Disease Surgeons | CME Tracker",
  description: "Track ABS thoracic surgery MOC, CHSS registry requirements, neonatal cardiac surgery CE, and hybrid procedure credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABS Thoracic Surgery MOC & CHSS Registry CE",
    body: "ABS Thoracic Surgery subspecialty certificate holders complete a 10-year MOC cycle: 250 CME credits, 125 thoracic-specific, a practice quality improvement module, and a secure examination. Congenital cardiac surgeons who hold both ABS General Surgery and ABS Thoracic certificates must satisfy both cycles simultaneously — the general surgery cycle overlaps the thoracic cycle with different minimum credit requirements per year. CHSS (Congenital Heart Surgeons&apos; Society) participation requires annual outcomes database submission (February deadline) and a mandatory annual conference CE session. Momenties tracks the rolling annual minimum for each cycle on a single dashboard.",
  },
  {
    icon: Clock,
    title: "Neonatal & Complex Congenital Surgery CE",
    body: "Norwood palliation CE: Boston Children&apos;s 30-year cohort (30-day mortality 4.3% in current era, transplant-free survival 65% at 10 years, Sano vs modified BT shunt long-term equivalence). Arterial switch operation CE: STAT mortality category mapping, coronary artery pattern transfer CE (intramural circumflex, Leiden classification anomalies), neo-aortic root dilation surveillance protocol. Complete AV canal CE: two-patch vs single-patch (PAPVR rate 1.2% vs 0.8% at 5 years), Down syndrome-associated outcomes CHSS registry update, reoperation for LVOTO CE. Truncus arteriosus CE: conduit choice dacron vs homograft 10-year freedom from reoperation, neonatal timing vs delayed repair.",
  },
  {
    icon: BarChart3,
    title: "Hybrid Procedure & Catheter-Based CE",
    body: "Hybrid Norwood CE: bilateral PAB + stent ductal CE for high-risk neonates, balloon atrial septostomy timing, 5-year interstage mortality comparison (9.2% hybrid vs 11.8% Norwood — risk stratification CE). Transcatheter pulmonary valve CE: Sapien 3 Ultra RVOT sizing protocol, Harmony TPV system 3-year outcomes, leaflet tear and hemolysis complication CE. Transcatheter ASD closure CE: percutaneous vs surgical for superior sinus venosus — SCOTSECS trial results pending. HLHS hybrid pathway institutional credentialing: joint interventional cardiology + cardiac surgery case conference CE and volume requirements. ECMO CE: Berlin Heart pediatric VAD bridge-to-transplant EXCOR 2-year Freedom cohort.",
  },
  {
    icon: Users,
    title: "State License, ABP Dual MOC & Institutional Privileges",
    body: "Congenital cardiac surgeons who completed pediatric cardiothoracic fellowship may hold ABP General Pediatrics MOC in addition to ABS Thoracic — a rare but real three-cycle obligation (ABS General Surgery + ABS Thoracic + ABP). State medical board CE (2-year, 25–50 CME) runs independently. Neonatal ECMO credentialing requires annual certification renewal (ELSO guidelines) and documented case volume (5+ ECMO cannulations/year for most centers). Institutional hybrid OR privileges require joint cardiac surgery + interventional cardiology case review at least quarterly. Momenties surfaces each cycle&apos;s deadline independently and links to proctoring case logs.",
  },
]

const studies = [
  {
    title: "CHSS Norwood 30-year Cohort (2024)",
    detail: "30-day survival 95.7% in 2015–2023 era vs 84.1% in 1984–1994. Primary risk factors: birth weight <2.5kg, restrictive ASD, anomalous pulmonary venous drainage, moderate/severe AV valve regurgitation. CE: preoperative risk-stratification algorithm, ECMO bridge to Norwood criteria, interstage monitoring protocol.",
  },
  {
    title: "Harmony TPV 3-year Outcomes (2024)",
    detail: "Freedom from reintervention 87.3% at 3 years in native RVOT. Mean RVOT gradient 16.2 mmHg. Leaflet tear 2.1% (mostly peri-procedural). CE: sizing algorithm (conduit diameter 22–29mm), anticoagulation protocol (aspirin vs dual antiplatelet), hybrid OR coordination requirements.",
  },
  {
    title: "STAT Mortality Categories (STS-CHSD 2024 update)",
    detail: "Reclassification of 148 congenital cardiac procedure types into STAT categories 1–5. New 2024 additions: hybrid Norwood (STAT 4), transcatheter VSD closure (STAT 2), robotic ASD repair (STAT 1). CE: STAT score calculation for institutional STS benchmarking, risk-adjusted outcomes reporting.",
  },
  {
    title: "Berlin Heart EXCOR Pediatric VAD (Freedom Cohort 2023)",
    detail: "Bridge to transplant 6-month survival 93.2%. Stroke rate 17.1% (12.4% neurological sequelae). Best results: age >2 years, BSA >0.7m². INTERMACS profile 1 at implant: acceptable outcome if transplant available within 90 days. CE: INTERMACS pediatric profiles, anticoagulation protocol, transplant listing timing.",
  },
  {
    title: "ECMO Post-Cardiac Surgery (ELSO 2024 Guidelines)",
    detail: "Extracorporeal CPR (E-CPR): 30-day survival 42% in pediatric cardiac surgery ECMO. VA-ECMO cannulation: central vs peripheral outcomes equivalent if weaned within 5 days. New 2024 guideline: oxygenator change threshold PaO2/FiO2 <150 or circuit age >7 days. CE: annual ELSO certification update required for center credentialing.",
  },
  {
    title: "Arterial Switch Coronary Transfer (Multi-center 2024)",
    detail: "Intramural coronary: modified trap-door vs translocation — 10-year freedom from myocardial ischemia equivalent (93.2% vs 91.8%, p=0.41). Single coronary ostium SITA pattern: highest risk subgroup (10-year freedom 82.1%). CE: Leiden classification system, intraoperative flow probe protocol, postoperative stress imaging surveillance schedule.",
  },
]

export default function CongenitalHeartDiseaseSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Congenital Heart Disease Surgeons"
        title="One Calendar for ABS MOC, CHSS Registry, and Hybrid Procedure Credentialing"
        subtitle="From Norwood outcomes reporting to transcatheter valve credentialing logs — Momenties tracks every deadline so your board certifications and institutional privileges stay current."
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

      {/* Key CE studies */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-4" style={{ color: "#f0ece3" }}>
              High-Yield CE for Congenital Cardiac Surgery MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark study before your ABS Thoracic or ABP cycle closes.
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
              &ldquo;Between ABS Thoracic MOC, CHSS registry submission, hybrid OR credentialing, and ELSO annual certification, I had six separate renewal calendars. Momenties collapsed all of it into one dashboard I actually check.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Ananya B., MD, FACS
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Congenital Cardiac Surgery, Children&apos;s Heart Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABS, CHSS, or ELSO credentialing deadline again"
        subtitle="Momenties keeps every CME credit, registry submission, and case log requirement in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
