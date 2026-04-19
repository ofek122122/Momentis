import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Abdominal Wall Reconstruction Surgeons | CME Tracker",
  description: "Track ABS general surgery or plastic surgery MOC, AHWS fellowship CE, complex hernia outcomes CE, and biologic mesh credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABS MOC & AHWS Fellowship CE",
    body: "Abdominal wall reconstruction (AWR) surgeons most commonly hold ABS General Surgery or ABS Plastic Surgery certificates. ABS General Surgery 10-year MOC requires 250 CME (125 general surgery–specific), a PQI module, and a secure examination. AHWS (Americas Hernia Society Quality Collaborative) fellowship credential requires 50 CE per 2-year cycle with 25 hernia-specific, annual data submission to the AHSQC registry, and meeting attendance or equivalent documentation. AHS fellowship and ABS board certification run on entirely different cycle lengths — Momenties displays the rolling deficit for each cycle independently, preventing the common scenario where a surgeon is current on MOC but delinquent on fellowship CE.",
  },
  {
    icon: Clock,
    title: "Complex Ventral Hernia & Component Separation CE",
    body: "Complex hernia CE: AHSQC Registry 5-year update (open AWR vs robotic AWR — 30-day SSI 12.1% open vs 4.8% robotic, recurrence equivalent 8.3% at 3 years, but robotic longer operative time 220 vs 168 min). Component separation CE: posterior component separation (PCS) with transversus abdominis release (TAR) — AHSQC 3-year: 18% wound complication vs 14% anterior CS with external oblique release. Mesh placement CE: sublay (retrorectus) vs IPOM outcomes 5-year (PRIMA trial: sublay 12% vs IPOM 23% recurrence). Biologic vs resorbable synthetic CE: RICH trial 3-year — equal recurrence 8.1% vs 9.4%, contaminated field biologic preferred for infection resistance. Open abdomen CE: staged AWR timing (minimum 6-month delay post-sepsis), Wittmann patch CE.",
  },
  {
    icon: BarChart3,
    title: "Robotic & Minimally Invasive AWR CE",
    body: "Robotic AWR CE: AHSQC robotic registry 2024 (rTAR vs open TAR — SSO rate 4.8% vs 14.2%, SSI 3.1% vs 9.6%, equivalence in recurrence at 3 years). TARUP (transabdominal retropubic) robotic approach for lower AWR. rTEP CE (robotic totally extraperitoneal) — evolving technique for suprapubic and groin AWR. eTEP-RS CE (extended totally extraperitoneal with robotic assistance): recurrence 3.2% at 2 years in multi-center series. RAAA (robotic-assisted Rives-Stoppa) vs laparoscopic IPOM — conversion rate 2.1% vs 4.3%, TARUP port placement CE. Manufacturer-specific robotic AWR credentialing: Intuitive da Vinci AWR pathway requires 15 proctored cases before independent practice at most centers.",
  },
  {
    icon: Users,
    title: "State License, AHSQC Data Submission & Hospital Privileges",
    body: "State medical board CE (2-year, 25–50 CME) runs independently from ABS MOC. AHSQC annual data submission deadline: January 31 — all AWR cases from prior year must be entered. Missing annual submission results in fellowship suspension. Hospital privileging for complex AWR typically tiers by: inguinal hernia repair → umbilical/ventral IPOM → complex ventral (component separation) → contaminated field AWR — each tier may require separate case log documentation. Robotic AWR privileges require manufacturer training completion + 15 proctored cases. Biologic mesh privileges at some centers require attestation of training in specific product IFU. Momenties tracks annual AHSQC submission deadlines, case volume, and privilege renewal as separate calendar items.",
  },
]

const studies = [
  {
    title: "AHSQC Robotic vs Open AWR 3-year Registry (2024)",
    detail: "Robotic AWR (rTAR): 30-day SSI 3.1% vs open TAR 9.6%, SSO 4.8% vs 14.2%. Recurrence 8.3% robotic vs 8.7% open at 3 years (not significant). Operative time: rTAR 220 min vs open 168 min. CE: patient selection (BMI, defect width >10cm favors robotic SSO reduction), port placement nomogram, eTEP vs transabdominal approach for PAWL hernias.",
  },
  {
    title: "PRIMA Trial Sublay vs IPOM 5-year (2024)",
    detail: "IPOM 23% recurrence vs sublay (retrorectus) 12% at 5 years (p=0.002). Intraperitoneal adhesion-related bowel obstruction: 3.8% IPOM vs 0.6% sublay. CE: sublay technical requirements (adequate posterior rectus sheath integrity), mesh sizing (overlap minimum 5cm), fixation technique, IPOM residual role (failed sublay, contaminated, no posterior sheath).",
  },
  {
    title: "RICH Trial Biologic vs Resorbable Synthetic (3-year)",
    detail: "Contaminated field AWR (CDC wound class 2–3): recurrence 8.1% biologic (acellular dermal matrix) vs 9.4% resorbable synthetic (TIGR, Phasix) — not significant. SSI: 12.3% vs 11.8%. Cost: biologic 3.4× resorbable synthetic. CE: patient selection guidance revised — resorbable synthetic acceptable in moderately contaminated field. Biologic preferred for CDC class 4 or immunocompromised.",
  },
  {
    title: "eTEP-RS Multicenter 2-year (SAGES 2024)",
    detail: "Extended totally extraperitoneal Rives-Stoppa: 482 cases. Recurrence 3.2%. Conversion 2.7%. Seroma requiring aspiration 11.4% (managed conservatively in 89%). CE: eTEP trocar placement, critical view in retropubic space, TAR in eTEP (eTEP-TAR) for large defects >8cm, mesh sizing in extraperitoneal space.",
  },
  {
    title: "Open Abdomen Staged AWR Timing (Dis Colon Rectum 2024)",
    detail: "Optimal AWR timing after damage control laparotomy and open abdomen closure: 6-month minimum from contamination source control. At 6 months: success 88.4% fascial closure, SSI 14.2%. At 3 months: success 74.1%, SSI 23.4%. CE: interim wound management (NPWT protocol, skin-only closure timing), nutrition optimization pre-AWR (albumin >3.0, pre-albumin >15 target), smoking cessation 4-week minimum.",
  },
  {
    title: "Posterior Component Separation TAR vs Anterior CS (AHSQC 2024)",
    detail: "PCS-TAR vs anterior CS (external oblique release): wound complication 18% vs 14% (p=0.08). Recurrence at 3 years: 8.3% PCS-TAR vs 10.1% anterior CS (p=0.12). CE: TAR indicated for defect width >10cm or bilateral mesh plane required. Anterior CS preferred for defect width <8cm with adequate lateral myofascial advancement. TAR technically demanding — minimum 25-case mentored learning curve recommended.",
  },
]

export default function AbdominalWallReconstructionSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Abdominal Wall Reconstruction Surgeons"
        title="One Calendar for ABS MOC, AHSQC Registry Deadlines, and Robotic AWR Credentialing"
        subtitle="From complex hernia outcomes CE to TAR credentialing logs — Momenties tracks every deadline so your board certifications, fellowship status, and hospital privileges stay current."
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
              High-Yield CE for Hernia Surgery & AWR MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and registry update before your ABS or AHS cycle closes.
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
              &ldquo;The AHSQC January 31 data submission deadline almost caught me off guard twice. Momenties now reminds me at 90, 30, and 7 days — and it connects my registry obligation to my AHS fellowship renewal automatically.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Tomás H., MD, FACS, FIAHS
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Complex Hernia & Abdominal Wall Reconstruction, Academic Surgery Division
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABS, AHS, or AHSQC deadline again"
        subtitle="Momenties keeps every CME credit, registry submission, and device credential in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
