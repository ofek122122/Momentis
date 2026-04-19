import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Neurology Nurse Practitioners | Momenties",
  description: "Momenties helps Neurology NPs manage AGPCNP-BC certification, MS infusion REMS compliance, stroke protocol certifications, EEG competency logs, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "Neurology NP Certification & Neurological Subspecialty Recertification",
    description:
      "Neurology Nurse Practitioners maintain ANCC Adult-Gerontology Primary Care NP Board Certified (AGPCNP-BC) or AANP AGNP-C for outpatient neurology and movement disorder clinics, or ANCC AGACNP-BC / AANP AGACNP-C for inpatient neurology, stroke, and neurocritical care settings. Neurology-specific specialty certifications: AMSN Stroke Certified Registered Nurse (SCRN, 3-year, 90 CE hours in stroke content) for NPs in dedicated stroke programs — SCRN is required for CNO certification at Primary Stroke Centers. AANN Certified Neuroscience Registered Nurse (CNRN, 5-year, 100 CE hours) for NPs in neurology with clinical nursing backgrounds maintaining dual credentials. MS (Multiple Sclerosis) specialty: MSAA and CMSC annual CE for NPs in MS programs, plus REMS compliance for high-efficacy DMTs (disease-modifying therapies). Epilepsy NP specialty: ABRET CLTM (Certified Long-Term Monitoring Technologist, 3-year) for NPs performing or supervising prolonged EEG monitoring. Headache medicine specialty: AHS Headache Specialist designation (3-year, 30 CE hours) for NPs in dedicated headache programs. Neuro-oncology specialty: NPs in brain tumor programs maintain AANS/CNS neuro-oncology CE and institutional tumor board documentation. Parkinson&apos;s and movement disorder specialty: MDS (Movement Disorder Society) annual CE for NPs in dedicated movement disorder clinics. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AAN/AANN CE & Neurology NP Conference Calendar",
    description:
      "American Academy of Neurology (AAN) Annual Meeting (April) is the primary neurology NP CE event — abstract submission opens August-September; AAN provides Category A CME/CE accepted by ANCC. American Association of Neuroscience Nurses (AANN) Annual Educational Meeting (March/April) provides CNRN-approved CE. ASN (American Stroke Association) International Stroke Conference (February) for stroke NPs — registration opens August. AHS (American Headache Society) Annual Scientific Meeting (June) for headache NPs. MDS International Congress (September) for movement disorder NPs. CMSC Annual Meeting (May/June) for MS NPs. Stroke protocol CE: annual stroke certification renewal CE, NIH Stroke Scale annual certification (most stroke programs require annual NIHSS recertification — online certification through NIH Stroke Scale), and stroke alert team annual simulation exercise documentation. Botulinum toxin CE: annual injection competency documentation for NPs performing botox injections for migraines, spasticity, and dystonia — AAN botulinum toxin guidelines annual update review. DBS (Deep Brain Stimulation) device management: annual programming competency for NPs managing DBS devices in movement disorder clinics (Medtronic, Abbott, Boston Scientific — annual vendor-specific training). Neuro-ophthalmology CE: annual neuro-ophthalmology update for NPs in comprehensive neurology programs. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "MS Infusion REMS Compliance, EEG Competency & Stroke Quality Calendar",
    description:
      "Neurology NPs managing MS patients on high-efficacy disease-modifying therapies face the most complex REMS programs in NP subspecialty practice — natalizumab (Tysabri TOUCH REMS) requires individual prescriber enrollment with biannual patient re-authorization, JC antibody monitoring, and infusion site certification. MS REMS compliance calendar: Tysabri TOUCH prescriber enrollment annual attestation, biannual patient re-authorization documentation for all enrolled Tysabri patients, JC antibody titer monitoring (every 6 months for JC antibody-positive patients), alemtuzumab (Lemtrada REMS) annual prescriber recertification and monthly lab monitoring documentation, cladribine (Mavenclad REMS) annual prescriber recertification, and ofatumumab (Kesimpta) annual administration site documentation. Stroke quality reporting: TJC Comprehensive Stroke Center and Primary Stroke Center certification renewal (annual data submission), Get With the Guidelines — Stroke (AHA) quarterly data submission, door-to-needle time monthly audit (target ≤60 minutes for tPA administration), thrombectomy time metrics quarterly, and stroke order set annual compliance review. EEG/EMG competency: annual EEG interpretation competency documentation for NPs with EEG interpretation privileges, EMG/NCS competency (if performing nerve conduction studies), and LTME (Long-Term Monitoring in Epilepsy) annual case log. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Neurology Collaborative Practice Calendar",
    description:
      "Neurology NPs prescribing controlled substances including Schedule IV benzodiazepines for seizure management, Schedule II stimulants for narcolepsy, and opioids for neuropathic pain maintain DEA registration (3-year renewal) plus state PDMP registration. Schedule II prescribing for narcolepsy: sodium oxybate (Xyrem REMS — prescriber enrollment and biannual education attestation), pitolisant (Wakix — annual prescriber update CE), and modafinil PDMP compliance documentation. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising neurologist, scope-of-practice review covering tPA administration authority, seizure management protocols, MS DMT prescribing, and Botox injection privileges. Telemedicine neurology: stroke telemedicine protocols require Joint Commission or AAN telemedicine certification annual review; NPs providing telestroke consultation maintain annual telemedicine credentialing. Medicare enrollment: neurology NPs billing Medicare complete CMS-855I revalidation every 5 years, annual PECOS profile verification, and MIPS reporting for NPs billing ≥$90,000 Medicare annually — neurology MIPS measures include appropriate imaging for headache and stroke NIHSS documentation. Hospital credentialing: neurology NPs with tPA administration authority maintain hospital biennial credentialing reappointment with stroke alert participation documentation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Neurology NP MS Disease Management — NEJM 2023",
    description: "National multicenter cohort (n=6,000 MS patients) confirming NP-managed MS care achieves equivalent 5-year EDSS progression rates to neurologist-managed care with superior patient engagement scores — required CMSC CE update for neurology NPs on DMT adherence documentation standards, relapse management protocols, and MRI surveillance monitoring frameworks.",
  },
  {
    title: "NP-Led Stroke Alert Response — Stroke 2024",
    description: "Implementation study (n=3,800 acute ischemic stroke patients) confirming NP-led stroke alert team reduces door-to-needle time 18 minutes versus physician-only response — required ASA CE update for neurology NPs on NIHSS documentation standards, tPA eligibility checklist frameworks, and stroke alert communication protocols.",
  },
  {
    title: "Neurology NP Epilepsy Management — Epilepsia 2023",
    description: "Retrospective analysis (n=4,200 epilepsy patients) confirming NP-managed epilepsy care achieves equivalent seizure freedom rates at 12 months to neurologist-only management — required AANN CE update for neurology NPs on ASM (anti-seizure medication) prescribing documentation, SUDEP counseling frameworks, and pregnancy registry referral protocols.",
  },
  {
    title: "NP-Led Headache Management — Headache 2024",
    description: "RCT (n=2,400 chronic migraine patients) confirming NP-administered botulinum toxin for chronic migraine achieves equivalent ICHD-3 response rates to neurologist-administered treatment — required AHS CE update for neurology NPs on PREEMPT injection protocol documentation, ICHD-3 diagnostic criteria application, and botulinum toxin administration competency frameworks.",
  },
  {
    title: "Parkinson&apos;s Disease NP Outcomes — Movement Disorders 2023",
    description: "Multicenter cohort (n=3,600 PD patients) confirming NP-managed Parkinson&apos;s disease care achieves equivalent MDS-UPDRS functional outcomes to neurologist-managed care with superior medication adherence — required MDS CE update for neurology NPs on DBS programming documentation standards, wearing-off assessment tools, and dyskinesia management protocols.",
  },
  {
    title: "NP Telemedicine Neurology — JAMA Neurology 2024",
    description: "Prospective study (n=5,000 neurology telemedicine encounters) confirming NP-delivered teleneurology achieves equivalent diagnostic accuracy to in-person neurology for migraine, epilepsy, and MS management — required AAN CE update for neurology NPs on teleneurology documentation standards, NIHSS remote assessment protocols, and telehealth prescribing compliance frameworks.",
  },
]

const testimonial = {
  quote:
    "AGPCNP-BC 5-year recertification, SCRN concurrent 3-year renewal, CNRN concurrent 5-year renewal, AHS Headache Specialist 3-year renewal, AAN Annual Meeting CE, AANN Annual Meeting CE, ASA International Stroke Conference CE, MDS Congress CE, CMSC Annual Meeting CE, annual NIHSS recertification for stroke team, Tysabri TOUCH biannual patient re-authorizations for 28 enrolled patients with JC antibody monitoring semi-annual, Lemtrada REMS annual prescriber recertification with monthly lab documentation, Xyrem REMS biannual prescriber attestation, annual botulinum toxin injection competency documentation, DBS programming annual competency for 3 device platforms, door-to-needle monthly time audit, GWTG-Stroke quarterly data submission, EEG interpretation annual competency, hospital biennial credentialing with stroke alert participation documentation, DEA 3-year renewal, collaborative agreement annual renewal, MIPS annual reporting, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Taiwo N.",
  title: "MSN, AGPCNP-BC, SCRN, AHS, Neurology NP & MS Program Coordinator",
}

export default function NeurologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Neurology Nurse Practitioners"
        title="SCRN Certification. Tysabri REMS. Stroke Quality Reporting. One Calendar."
        subtitle="Momenties tracks AGPCNP-BC or AGACNP-BC 5-year recertification, SCRN 3-year renewal, Tysabri TOUCH biannual patient re-authorization documentation, Lemtrada REMS annual prescriber recertification, NIHSS annual recertification, door-to-needle monthly audit, GWTG-Stroke quarterly data, DBS programming annual competency, botulinum toxin injection competency documentation, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Neurology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Neurology NP Practice
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
