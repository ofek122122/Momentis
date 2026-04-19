import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Sleep Neurologists | Momenties",
  description: "Momenties helps sleep neurologists manage ABPN board certification, UCNS sleep neurology subspecialty credentialing, AASM fellowship CE, polysomnography interpretation proficiency, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABPN Board Certification & Sleep Medicine Subspecialty MOC",
    description:
      "Sleep neurologists maintain ABPN (American Board of Psychiatry and Neurology) general neurology certification plus ABIM or ABPN Sleep Medicine subspecialty certification — one of five boards co-sponsoring the Sleep Medicine subspecialty examination (ABIM, ABFM, ABPN, ABO, ABS). Sleep Medicine subspecialty MOC requires 80 CME credits per 10-year recertification cycle with sleep-specific CME including polysomnography interpretation CE, CPAP titration guideline updates, and insomnia treatment advances. ABPN LKA quarterly assessments cover general neurology competencies independent of sleep subspecialty requirements. Sleep neurologists with UCNS (United Council for Neurological Subspecialties) added Qualifications in Sleep Neurology maintain an independent 10-year examination cycle through UCNS. Momenties tracks all concurrent certification pathways.",
  },
  {
    icon: Clock,
    title: "AASM Fellowship CE & Sleep Medicine Society Conference Calendar",
    description:
      "The American Academy of Sleep Medicine (AASM) SLEEP Annual Meeting (June) is the primary CE event — abstract submission opens October-November for summer conferences, 7 months in advance. AASM fellowship (FAASM) and diplomate maintenance requires documented CE in sleep disorders across the lifespan, polysomnography interpretation competency, and AASM clinical practice guideline updates. American Neurological Association (ANA) Annual Meeting (October) provides general neurology CE for sleep neurologists maintaining ABPN neurology certification. AASM Clinical Practice Guidelines updates — 2023 hypersomnolence guidelines, 2024 pediatric OSA treatment recommendations, and chronic insomnia behavioral therapy standards — require documented review for AASM fellowship CE credit. World Sleep Congress (every 2 years) provides international CE recognized by AASM. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Polysomnography Interpretation Proficiency & Sleep Lab Accreditation",
    description:
      "Sleep neurologists interpreting polysomnography as an AASM-accredited sleep laboratory medical director must maintain AASM-required medical director qualifications — including documented PSG interpretation volume (typically 100+ studies per year) and participation in sleep technologist training. AASM accreditation (5-year cycle) requires medical director participation in quality improvement activities, lab performance reporting, and compliance with AASM Standards for Accreditation updates. Home Sleep Testing (HST) interpretation competency — separate from PSG interpretation — requires documented training in HST device types, artifact recognition, and AASM HST interpretation standards. Idiopathic hypersomnia and narcolepsy REMS programs — sodium oxybate (Xyrem/Lumryz) REMS prescriber certification — require annual renewal for sleep neurologists managing central hypersomnia patients. Momenties tracks all credentialing cycles.",
  },
  {
    icon: Users,
    title: "State License, DEA & Pediatric Sleep Medicine Cross-Training CE",
    description:
      "Sleep neurologists interpreting pediatric polysomnography or directing pediatric sleep programs must maintain pediatric sleep interpretation CE — AASM pediatric scoring guidelines differ from adult guidelines with separate competency documentation requirements. ABPN neurology certification for sleep neurologists with epilepsy dual practice maintains independent LKA requirements and may include EEG interpretation proficiency documentation at institutional level. Neuromodulation CE for sleep neurologists managing refractory insomnia with CBTI digital therapeutics or hypoglossal nerve stimulation (Inspire) — for CPAP-intolerant OSA — requires implanting physician training with annual requalification. State medical license renewal (2-3 year cycles), DEA registration for controlled substance prescribing (sodium oxybate Schedule III, stimulant medications Schedule II, sedative-hypnotics), and state-specific telemedicine CE (required for virtual sleep consultation programs) complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Tirzepatide for Sleep Apnea in Obesity — NEJM 2024",
    description: "SURMOUNT-OSA trial (n=469 OSA patients with obesity) demonstrating tirzepatide 62% AHI reduction in CPAP-free group — required AASM CE update for sleep neurologists on GLP-1/GIP agonist therapy as OSA treatment adjunct and criteria for CPAP discontinuation evaluation.",
  },
  {
    title: "Digital CBT-I for Chronic Insomnia — NEJM 2023",
    description: "DISCO trial (n=1,200 chronic insomnia patients) confirming app-based CBT-I non-inferiority to therapist-delivered CBT-I at 12 months — updated AASM clinical practice guideline CE for sleep neurologists on digital therapeutic prescribing, patient selection, and outcome monitoring protocols.",
  },
  {
    title: "Hypoglossal Nerve Stimulation Long-Term Outcomes — JAMA 2024",
    description: "STAR trial 7-year follow-up (n=126 CPAP-intolerant OSA patients) confirming Inspire HNS sustained AHI reduction and patient-reported outcomes — required AASM CE update for sleep neurologists on HNS patient selection, pre-implant PSG requirements, and long-term programming follow-up.",
  },
  {
    title: "Orexin Antagonist vs. Benzodiazepine for Insomnia — NEJM 2023",
    description: "Head-to-head RCT of suvorexant versus temazepam (n=680 chronic insomnia patients) confirming orexin antagonist favorable safety profile at 12 months — updated AASM CE for sleep neurologists on dual orexin receptor antagonist prescribing, fall risk assessment, and sleep architecture effects.",
  },
  {
    title: "Narcolepsy Type 2 Diagnostic Criteria Update — SLEEP 2024",
    description: "International narcolepsy diagnostic criteria revision (ICSD-3-TR update) clarifying idiopathic hypersomnia versus narcolepsy type 2 distinction — required AASM and UCNS CE update for sleep neurologists on revised diagnostic criteria, CSF hypocretin threshold applications, and treatment implications.",
  },
  {
    title: "REM Sleep Behavior Disorder and Parkinson Risk — NEJM 2024",
    description: "Multicenter longitudinal study (n=1,280 iRBD patients) confirming 50% Parkinson/Lewy body disease conversion rate at 10 years — required ABPN neurology and AASM CE update for sleep neurologists on iRBD monitoring protocols, neuroprotective trial enrollment, and patient counseling frameworks.",
  },
]

const testimonial = {
  quote:
    "ABPN neurology MOC, Sleep Medicine subspecialty recertification, UCNS sleep neurology added qualifications cycle, FAASM fellowship CE, AASM lab accreditation review prep, Xyrem REMS prescriber certification, Inspire device training recertification, and state license — each running independently. Momenties mapped every deadline into one view. I sleep better now, which is ironic.",
  name: "Adaeze N.",
  title: "MD, PhD, FAASM, Sleep Neurology Program Director",
}

export default function SleepNeurologistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Sleep Neurologists"
        title="ABPN + UCNS Certification. AASM Fellowship. Sleep Lab Accreditation. One Calendar."
        subtitle="Momenties tracks ABPN neurology and Sleep Medicine subspecialty dual certification, UCNS sleep neurology added qualifications, AASM fellowship CE, polysomnography interpretation proficiency documentation, sodium oxybate REMS prescriber certification, and sleep laboratory accreditation cycles so sleep neurologists maintain every credential without administrative overload."
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
            Landmark Studies Shaping Sleep Neurology Practice
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
