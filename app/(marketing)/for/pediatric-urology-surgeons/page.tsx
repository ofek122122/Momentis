import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Pediatric Urology Surgeons | CME & MOC Tracker",
  description: "Track ABU urology MOC, SPU fellowship CE, hypospadias and vesicoureteral reflux outcomes CE, and robotic pediatric urology credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABU Urology MOC & SPU Fellowship CE",
    body: "ABU (American Board of Urology) certification requires a 3-year MOC cycle: 60 CME credits per 3-year period (at least 30 urology-specific), quality improvement activity documentation, and a secure Part III cognitive examination every 6 years. ABU MOC is unique in its 3-year cycle — shorter than most surgical subspecialties. Society for Pediatric Urology (SPU) Fellowship in Pediatric Urology renewal requires 50 CE credits per 2-year cycle with at least 25 pediatric urology–specific, meeting attendance, and an annual outcomes report to the SPU registry. Two concurrent cycles with very different lengths (3-year ABU vs 2-year SPU) require careful calendar management. Momenties aligns both cycle clocks on a single dashboard.",
  },
  {
    icon: Clock,
    title: "Hypospadias, VUR & Pyeloplasty CE",
    body: "Hypospadias CE: HUSE (Hypospadias United States Experience) registry 5-year update (tubularized incised plate 10-year complication rate 8.3%, proximal hypospadias staged repair 12.1% fistula, single-stage buccal mucosa graft outcomes CE). VUR CE: STING vs open ureteral reimplantation PRIVENT-2 trial 5-year (injection 63% vs open 97% resolution, febrile UTI 8.3% vs 4.1%) — endoscopic vs surgical decision algorithm CE. RIVUR follow-up CE: prophylactic antibiotic benefit limited to Grade III-IV VUR, Grade I-II observation CE. UPJ obstruction CE: robotic pyeloplasty dismembered vs YV 1-year success equivalent (97.2% vs 96.8%), RALP in infants <1 year (feasibility series), laparoscopic crossing vessel identification CE.",
  },
  {
    icon: BarChart3,
    title: "Robotic & Minimally Invasive Pediatric Urology CE",
    body: "Robotic pediatric surgery CE: da Vinci Xi vs Si for small body habitus CE, instrument arm conflict management in infants, port placement nomogram by BSA, robotic ureteral reimplantation (extravesical Lich-Gregoir) SPU registry outcomes. Robotic pyeloplasty CE: CUPS multi-institutional pediatric (>200 cases): mean operative time 148 min, conversion 1.4%, success 97.1% at 18 months. Robotic Mitrofanoff CE: channel continence 92%, stomal revision 11% at 3 years (IPEG series). Testicular descent CE: orchiopexy timing update — Prasil prospective series (6-month one-stage vs 18-month staged for non-palpable testis), DMSA isotope assessment for solitary testicle CE.",
  },
  {
    icon: Users,
    title: "State License, ABP Dual MOC & Pediatric Hospital Privileges",
    body: "Pediatric urologists who completed combined urology + pediatric surgery training may hold both ABU and ABP certificates — a rare dual MOC obligation. State medical board CE (2-year, 25–50 CME) runs independently from ABU. Pediatric hospital privileging for robotic procedures requires: documented pediatric robotic case log (minimum 25 pediatric robotic cases before independent practice at most children&apos;s hospitals), annual pediatric ATLS renewal (if performing trauma), and mandatory child abuse recognition CE (annual, many states legislated in 2022–2024). PALS recertification every 2 years is required for intraoperative emergency management privileges at most pediatric centers. Momenties tracks each privilege type with its renewal date and case-volume requirement.",
  },
]

const studies = [
  {
    title: "HUSE Registry Hypospadias 10-year (2024)",
    detail: "TIP repair primary: fistula 5.1%, meatal stenosis 3.8%, urethral stricture 2.4%. Proximal staged repair: fistula 12.1% stage 2, buccal mucosa graft (BMG) urethral plate augmentation 7.9% at 5 years. CE: patient selection for single- vs 2-stage, BMG harvest technique, long-term surveillance protocol for proximal repairs.",
  },
  {
    title: "PRIVENT-2 VUR Trial 5-year Outcomes (2024)",
    detail: "Dextranomer/hyaluronic acid injection vs open reimplantation: radiologic resolution 63% vs 97% (p<0.001). Febrile UTI 8.3% injection vs 4.1% open (p=0.04). But: breakthrough febrile UTI occurred in both arms — patient selection CE critical. CE: injection patient selection (Grade III VUR, unilateral, no renal scarring = best injection candidates), retreatment algorithm.",
  },
  {
    title: "Robotic Pyeloplasty CUPS Multicenter (2024)",
    detail: "203 cases, ages 3 months–18 years: success 97.1% at 18 months. Mean operative time 148 min (decreasing after 40-case learning curve to 124 min). Conversion 1.4%. CE: crossing vessel identification (present in 31% — Doppler preoperative mapping), suture selection (4-0 Monocryl interrupted vs running — no outcome difference), stent vs stentless approach.",
  },
  {
    title: "Orchiopexy Timing — Prasil Prospective (2023)",
    detail: "Non-palpable testis: staged Fowler-Stephens vs single-stage (with vessel preservation if length allows). 5-year testicular atrophy: staged 18% vs single-stage 9% when vessels preserved. CE: intraoperative length assessment (testis reaching contralateral internal inguinal ring = can divide vessels safely), staged 6-month interval optimal, laparoscopic vs open second stage.",
  },
  {
    title: "Robotic Extravesical Reimplantation SPU Registry (2024)",
    detail: "1,240 cases: success rate (resolution grade I-II on VCUG) 96.3% at 12 months. Ureteral obstruction 1.8% (most resolve conservatively). Bladder spasm significantly lower vs open (43% vs 81%). CE: extravesical tunnel length: 4× ureteral diameter, nerve-sparing lateral dissection, stent vs unstented technique outcomes.",
  },
  {
    title: "Hypospadias Buccal Mucosa Graft CE (ESPU 2024)",
    detail: "BMG inlay vs onlay for proximal hypospadias urethral plate augmentation: onlay 7.9% fistula vs inlay 11.4% at 5 years. BMG harvest site morbidity: donor site stenosis 2.1% (reduced by Mucosal Graft Harvest technique). CE: graft sizing algorithm (urethra width target 14Fr in puberty), 2-stage timing 6 months apart minimum.",
  },
]

export default function PediatricUrologySurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Pediatric Urology Surgeons"
        title="One Calendar for ABU MOC, SPU Fellowship CE, and Robotic Privileges"
        subtitle="From hypospadias outcomes CE to robotic pyeloplasty credentialing logs — Momenties tracks every deadline so your board certifications and hospital privileges stay current."
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
              High-Yield CE for Pediatric Urology MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and registry update before your ABU or SPU cycle closes.
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
              &ldquo;ABU has a 3-year cycle and SPU has a 2-year cycle — they never line up, which means I&apos;m always mid-cycle in both. Momenties shows me exactly where I stand in each independently, which no other tool I&apos;ve tried can do.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Samuel A., MD, FACS, FAAP
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Pediatric Urology, Children&apos;s Hospital Academic Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABU, SPU, or pediatric privileges deadline again"
        subtitle="Momenties keeps every CME credit, registry requirement, and case log in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
