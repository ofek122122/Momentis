import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Clinical Neuropsychologists | Momenties",
  description: "Momenties helps clinical neuropsychologists manage ABCN board certification renewal, NAN/APA CE requirements, neuropsychological test revalidation schedules, and state license compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABCN Board Certification & Renewal",
    description:
      "The American Board of Clinical Neuropsychology (ABCN) requires 100 CE hours every 10 years for board certification renewal, with at least 50 hours in neuropsychology-specific content areas. ABCN renewal also requires submission of a recently completed case study and a practice sample. The Houston Conference criteria for training competence require documented practicum hours. Momenties tracks ABCN renewal deadlines, CE credit accumulation toward the 100-hour threshold, and case study submission windows with 12-month lead alerts.",
  },
  {
    icon: Clock,
    title: "NAN/APA CE Requirements & Specialty Practice Updates",
    description:
      "The National Academy of Neuropsychology (NAN) and APA Division 40 (Society for Clinical Neuropsychology) are the primary CE forums: NAN annual conference, webinar-based CE for telehealth neuropsychology practice, and specialty updates in forensic neuropsychology, pediatric neuropsychology, and rehabilitation neuropsychology. APA Ethics CE (6 hours per license cycle) is required separately. Momenties maps NAN conference registration deadlines, APA ethics CE scheduling, and telehealth-specific CE requirements for multi-state neuropsychology practice.",
  },
  {
    icon: BarChart3,
    title: "Test Battery Revalidation & Normative Data CE",
    description:
      "Neuropsychological assessment instruments — WAIS-IV/V, WMS-IV, RBANS, D-KEFS, CVLT-3, NAB, MMSE, MoCA — issue updated normative data, revised administration manuals, and revalidation studies requiring documented CE review for forensic and clinical credentialing. The Q-global and Pearson platform updates require CE verification for users. Momenties schedules quarterly test battery CE reviews, flags new normative data publications within 30 days of release, and tracks administration training records for each instrument in your battery.",
  },
  {
    icon: Users,
    title: "State License, Telehealth Compact & Forensic Credentialing",
    description:
      "Clinical neuropsychologists providing telepsychology services across state lines must navigate the PSYPACT compact (participating state license maintenance, E.Passport renewal) alongside home state license renewal (2-3 year cycles). Forensic neuropsychology practice requires APA Specialty Guidelines for Forensic Psychologists CE and documented training in APLS/AAFP standards. Momenties consolidates home state, PSYPACT E.Passport, and APA ethics CE requirements into one compliance calendar with jurisdiction-specific CE credit tracking.",
  },
]

const studies = [
  {
    title: "WAIS-V Standardization & Clinical Validity — Psych Assessment 2024",
    description: "Normative standardization study (n=2,200 adults) for Wechsler Adult Intelligence Scale Fifth Edition establishing updated age-corrected norms — required CE for all practitioners updating from WAIS-IV; foundational for forensic neuropsychology cases.",
  },
  {
    title: "Telepsychology Neuropsychological Assessment Validity — Neuropsychology 2023",
    description: "Systematic review of 28 studies (n=3,140) confirming telehealth administration of standard neuropsychological batteries yields results equivalent to in-person testing for most instruments — basis for APA telepsychology CE curriculum updates.",
  },
  {
    title: "Alzheimer&apos;s Disease Biomarker-Cognitive Correlation — NEJM 2024",
    description: "Longitudinal cohort (n=8,200) mapping amyloid PET and CSF tau markers to cognitive decline trajectories — reshaping MCI-to-dementia conversion prediction models used in clinical neuropsychology reports.",
  },
  {
    title: "Persistent Post-COVID Cognitive Syndrome — JAMA Network Open 2024",
    description: "Meta-analysis (n=22,000 long-COVID patients) characterizing persistent cognitive deficits (attention, processing speed, working memory) and validated assessment batteries — new forensic and clinical credentialing CE area for neuropsychological evaluation of post-COVID syndrome.",
  },
  {
    title: "APA Specialty Guidelines for Forensic Psychologists 2023 Update",
    description: "Comprehensive revision to APA forensic psychology specialty guidelines covering report writing standards, assessment instrument selection for SVP and competency evaluations, and deception detection — required CE for all forensic neuropsychology practitioners.",
  },
  {
    title: "Pediatric Concussion Neuropsychological Assessment — Archives Clinical Neuropsych 2024",
    description: "Multi-site study (n=1,200 pediatric concussions) establishing revised return-to-learn cognitive assessment protocols and sport concussion neuropsychological assessment benchmarks — integrated into ImPACT and SCAT6 CE certification curricula.",
  },
]

const testimonial = {
  quote:
    "ABCN renewal, NAN conference registration, PSYPACT E.Passport renewal, APA ethics CE, and test battery updates — each on a different cycle. Before Momenties I had missed a state license renewal because I forgot the window, and that&apos;s not a mistake a forensic neuropsychologist can afford. Now every deadline is visible 6 months out and I&apos;ve never been surprised since.",
  name: "Obioma A.",
  title: "PhD, ABCN, PSYPACT Authorized, Forensic & Clinical Neuropsychology",
}

export default function ClinicalNeuropsychologistsSpecialistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Clinical Neuropsychologists"
        title="ABCN Renewal. PSYPACT E.Passport. Test Battery CE. One Calendar."
        subtitle="Momenties tracks ABCN board certification renewal, NAN/APA CE requirements, neuropsychological test revalidation schedules, and PSYPACT telehealth compliance so clinical neuropsychologists focus on assessment, not administrative calendars."
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
            Landmark Studies Shaping Clinical Neuropsychology Practice
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
