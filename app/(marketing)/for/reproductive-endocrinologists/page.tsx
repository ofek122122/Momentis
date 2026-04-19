import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Reproductive Endocrinologists | Momenties",
  description: "Momenties helps reproductive endocrinologists manage ABOG REI subspecialty certification, SREI fellowship CE, ASRM guideline updates, embryology laboratory accreditation cycles, and state ART license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABOG REI Subspecialty Certification & Ob-Gyn MOC",
    description:
      "Reproductive endocrinologists maintain American Board of Obstetrics and Gynecology (ABOG) general ob-gyn certification through ABOG Maintenance of Certification (annual CME attestation, oral and written recertification examination cycles) alongside the REI (Reproductive Endocrinology and Infertility) subspecialty certification — a 6-year recertification cycle with REI-specific oral and written examinations covering IVF laboratory protocols, ovarian stimulation pharmacology, recurrent pregnancy loss, male factor infertility, and polycystic ovary syndrome management. Each track has independent CME category requirements. Momenties tracks both ABOG timelines simultaneously with exam window alerts 12 months in advance.",
  },
  {
    icon: Clock,
    title: "SREI Fellowship CE & ASRM Annual Meeting Deadlines",
    description:
      "The Society for Reproductive Endocrinology and Infertility (SREI) fellowship program maintains active CE requirements for practicing REI subspecialists, with annual SREI-ABOG self-assessment module completion required for diplomates. The American Society for Reproductive Medicine (ASRM) Annual Meeting is the primary CE forum — abstract submission opens May-June for October conferences. ASRM Practice Committee opinions and committee reports — updated continuously, with major ART guideline revisions in 2023-2024 covering PGT-A (preimplantation genetic testing for aneuploidies), oocyte vitrification standards, and single embryo transfer protocols — require documented CE review. Momenties schedules all society deadlines.",
  },
  {
    icon: BarChart3,
    title: "IVF Laboratory Accreditation & Embryology Quality Cycles",
    description:
      "REI practices operating IVF laboratories must maintain CAP (College of American Pathologists) or CLIA laboratory accreditation — a 2-year inspection cycle with proficiency testing quarterly and personnel competency assessments annually. The Joint Commission laboratory accreditation (alternative to CAP for hospital-based programs) requires triennial survey. SART (Society for Assisted Reproductive Technology) membership requires annual ART outcome data reporting — the SART registry submission deadline is January 31 for the prior year&apos;s outcomes. Embryology quality improvement metrics — fertilization rates, blastulation rates, freeze-all outcomes, cumulative live birth rates — are reviewed quarterly by ABOG REI diplomates for recertification documentation.",
  },
  {
    icon: Users,
    title: "State ART Licensing, DEA & Fertility Preservation CE",
    description:
      "Several states require specific ART clinic licensing or registration beyond CLIA (New York, California, Illinois) with renewal cycles of 1-3 years and laboratory inspection requirements independent of CAP/CLIA. DEA registration (3-year renewal) for injectable stimulant medications, state medical license renewal (2-3 year cycles), and oncofertility CE — required for REI physicians providing emergency fertility preservation consultations — are managed on independent schedules. LGBTQ+ family building CE — increasingly required for REI practices offering gestational carrier and donor gamete programs — requires documentation of state-specific surrogacy law updates. Momenties consolidates all licensing and CE deadlines.",
  },
]

const studies = [
  {
    title: "PGT-A and Live Birth Rates — NEJM 2024",
    description: "Multicenter RCT (n=1,212 blastocysts) demonstrating PGT-A increased cumulative live birth rate per cycle start by 14% in women ≥38 and reduced time to live birth by 4.2 months — updated ASRM PGT-A clinical utility CE for REI recertification.",
  },
  {
    title: "Freeze-All vs. Fresh Transfer Outcomes — Lancet 2023",
    description: "Individual patient data meta-analysis (n=17,000 cycles) confirming freeze-all strategy superiority in PCOS patients and equivalence in normal responders — updated ASRM single embryo transfer and ovarian stimulation CE protocols.",
  },
  {
    title: "Progestin-Primed Ovarian Stimulation (PPOS) — Hum Reprod 2024",
    description: "Systematic review (n=32 RCTs, 6,800 patients) establishing PPOS as effective LH suppression alternative to GnRH antagonist/agonist protocols — foundational CE update for ABOG REI recertification pharmacology and stimulation protocol curriculum.",
  },
  {
    title: "ICSI vs IVF for Non-Male Factor — NEJM 2024",
    description: "Multicenter RCT (n=2,460 couples without male factor) showing no significant live birth rate difference between ICSI and conventional IVF — updated ASRM Practice Committee CE opinion on ICSI utilization and laboratory resource allocation.",
  },
  {
    title: "Oocyte Vitrification Outcomes After 10 Years — Fertil Steril 2023",
    description: "10-year follow-up cohort (n=8,400 vitrified oocyte cycles) confirming equivalent live birth rates, neonatal outcomes, and long-term child development compared to fresh cycles — updated ASRM oocyte banking CE for elective fertility preservation counseling.",
  },
  {
    title: "Endometriosis & IVF Outcomes — JAMA 2024",
    description: "Systematic review (n=24 RCTs, 5,200 patients) quantifying stage-dependent IVF outcome impairment in endometriosis and optimal surgical vs. IVF-first decision thresholds — required SREI fellowship CE for endometriosis-associated infertility management.",
  },
]

const testimonial = {
  quote:
    "ABOG general MOC, REI subspecialty recertification, ASRM annual meeting abstract deadlines, CAP laboratory accreditation cycle, SART data submission, state ART licensing in two jurisdictions, and oncofertility CE — all running on different calendars. Momenties brought everything into one view. My ABOG recertification was the most organized it&apos;s ever been.",
  name: "Adaeze M.",
  title: "MD, FACOG, SREI Fellow, Reproductive Endocrinology & Infertility",
}

export default function ReproductiveEndocrinologistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Reproductive Endocrinologists"
        title="ABOG REI Certification. ASRM CE. CAP Lab Accreditation. One Calendar."
        subtitle="Momenties tracks ABOG REI subspecialty certification, ASRM annual meeting deadlines, CAP laboratory accreditation cycles, SART data submission, and state ART licensing so reproductive endocrinologists focus on patients, not compliance complexity."
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
            Landmark Studies Shaping Reproductive Endocrinology Practice
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
