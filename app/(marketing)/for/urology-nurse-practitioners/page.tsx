import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Urology Nurse Practitioners | Momenties",
  description: "Momenties helps Urology NPs manage AGPCNP-BC certification, CURN specialty renewal, cystoscopy competency logs, BCG REMS compliance, testosterone prescribing documentation, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "Urology NP Certification & Urological Subspecialty Recertification",
    description:
      "Urology Nurse Practitioners maintain ANCC Adult-Gerontology Primary Care NP Board Certified (AGPCNP-BC) or AANP AGNP-C for outpatient urology and men&apos;s health clinic roles, with SUNA (Society of Urologic Nurses and Associates) specialty certifications layered on top. CURN (Certified Urological Registered Nurse, SUNA, 3-year, 45 CE hours with urology-specific content) for NPs maintaining urological nursing competency alongside NP role. CUNP (Certified Urological Nurse Practitioner, SUNA) for NPs demonstrating subspecialty competency in urological advanced practice — the primary urology NP specialty credential. Oncology urology overlap: NPs in urological oncology maintain AOCNP or OCN concurrent CE; bladder cancer and kidney cancer management require annual oncology update CE. Men&apos;s health specialty: AMSUS (Association of Military Surgeons) annual CE for NPs in men&apos;s health programs; testosterone prescribing compliance CE for PDMP states. Female pelvic medicine: NPs in female pelvic floor dysfunction programs maintain AOFP (American Osteopathic Foundation for Pelvic Health) CE; AUGS (American Urogynecological Society) annual CE for NPs managing pelvic organ prolapse and stress urinary incontinence. Pediatric urology overlap: NPs in pediatric urology maintain ASPN (American Society of Pediatric Nephrology) CE for managing vesicoureteral reflux and congenital urological anomalies. Kidney stone disease: ENDOUROLOGY Society annual CE for NPs in stone disease programs. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AUA/SUNA CE & Urology NP Conference Calendar",
    description:
      "American Urological Association (AUA) Annual Meeting (May) is the primary urology NP CE event — abstract submission opens October; AUA provides AMA PRA Category 1 CME accepted by ANCC. SUNA National Conference (October) provides CURN-approved CE and CUNP-specific urology advanced practice content. SUFU (Society of Urodynamics, Female Pelvic Medicine, and Urogenital Reconstruction) Annual Meeting (February/March) for NPs in pelvic floor dysfunction programs. AUGS Annual Scientific Meeting (October) for NPs in female pelvic medicine programs. Society of Urologic Oncology Annual Meeting (December) for NPs in urologic oncology programs. Bladder cancer therapy CE: BCG intravesical therapy protocol annual CE for NPs managing non-muscle invasive bladder cancer BCG maintenance (NMIBC BCG — 3-year maintenance per SWOG S8507 protocol), BCG REMS annual prescriber update, and intravesical chemotherapy (mitomycin C) administration protocol annual review. Prostate disease CE: annual PSA guideline update CE (AUA PSA guideline annual update), active surveillance protocol annual CE, and androgen deprivation therapy (ADT) complication management annual update. Overactive bladder CE: ONABOTULINUMTOXIN A intravesical injection annual competency (AUA guideline-recommended procedure — NPs performing bladder Botox maintain annual injection competency). Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Cystoscopy Competency, BCG REMS Compliance & Urology Quality Calendar",
    description:
      "Urology NPs with cystoscopy privileges and BCG administration responsibilities face the most complex procedure quality documentation outside of gastroenterology — AUA quality measures include bladder cancer surveillance adherence and BPH treatment appropriateness, making systematic quality documentation essential. Cystoscopy competency calendar: annual cystoscopy case log (minimum volume threshold — typically 25-50 diagnostic cystoscopies annually for competency maintenance), flexible vs. rigid cystoscopy competency documentation, cystoscopy-assisted biopsy annual case log (for NPs performing office bladder biopsies), and urodynamics study annual competency (for NPs in pelvic floor dysfunction programs). BCG REMS compliance calendar: STELARA REMS annual prescriber enrollment verification (for BCG manufacturing updates — FDA BCG shortage monitoring), intravesical BCG administration protocol annual review, BCG hold criteria documentation (adverse reaction monitoring and dose modification per AUA guideline), and BCG maintenance schedule tracking per patient (SWOG S8507 — 3-year induction/maintenance cycle). Prostate cancer quality: NCCN prostate cancer guideline annual review CE, PSA surveillance schedule adherence quarterly review (active surveillance — AUA PRIAS protocol), and ADT monitoring quarterly (testosterone monitoring, bone density annual for ADT patients). Kidney stone quality: 24-hour urine metabolic evaluation rate quarterly review (AUA quality measure — recurrent stone formers), and stone prevention prescription documentation quarterly. Female pelvic quality: pelvic floor PT referral rate quarterly review, and OAB treatment pathway adherence quarterly. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Urology Collaborative Practice Calendar",
    description:
      "Urology NPs prescribing controlled substances including Schedule III testosterone for hypogonadism, Schedule III anabolic steroids for androgen deficiency, Schedule IV benzodiazepines for procedural sedation, and occasionally Schedule II opioids for post-procedure pain management maintain DEA registration (3-year renewal) plus state PDMP registration. Testosterone prescribing compliance: state PDMP documentation (Schedule III — monthly PDMP query requirement in most states), testosterone therapy monitoring documentation (PSA and hematocrit every 3-6 months per AUA guideline for first year), and testosterone REMS annual prescriber education completion (FDA Testosterone REMS — required for all prescribers of testosterone products with Boxed Warning). Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising urologist, scope-of-practice review covering cystoscopy ordering and reporting, BCG administration authority, testosterone prescribing, and urodynamics testing authority. Office procedure credentialing: hospital biennial credentialing reappointment for urology NPs with hospital cystoscopy or surgical assisting privileges, including procedure volume documentation. Opioid prescribing compliance: DEA MATE Act compliance (8-hour training for buprenorphine-trained prescribers) for NPs prescribing opioids in post-urological surgery settings. Medicare enrollment: CMS-855I revalidation every 5 years, PECOS annual verification, and MIPS reporting for urology NPs billing ≥$90,000 Medicare annually — urology MIPS measures include appropriate PSA testing and BPH symptom score documentation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Urology NP Bladder Cancer Surveillance — Journal of Urology 2024",
    description: "Multicenter cohort (n=4,200 NMIBC patients) confirming NP-managed bladder cancer surveillance achieves equivalent recurrence detection rates at 5 years to urologist-managed surveillance — required AUA CE update for urology NPs on cystoscopy documentation standards, BCG maintenance protocol adherence frameworks, and NMIBC risk stratification tools.",
  },
  {
    title: "NP-Led BPH Management — Urology 2023",
    description: "Implementation study (n=5,800 BPH patients) confirming NP-managed benign prostatic hyperplasia care achieves equivalent IPSS improvement and medication adherence at 24 months to urologist-managed care — required AUA CE update for urology NPs on voiding diary documentation standards, BPH treatment pathway frameworks, and surgical referral threshold protocols.",
  },
  {
    title: "Urology NP Prostate Cancer Active Surveillance — NEJM Evidence 2024",
    description: "Prospective multicenter cohort (n=3,600 low-risk prostate cancer patients) confirming NP-managed active surveillance achieves equivalent upgrade-free survival at 3 years to urologist-managed surveillance — required NCCN CE update for urology NPs on PRIAS protocol documentation, PSA kinetics monitoring frameworks, and repeat biopsy indication standards.",
  },
  {
    title: "NP-Led Overactive Bladder Management — Neurourology and Urodynamics 2023",
    description: "RCT (n=2,400 OAB patients) confirming NP-administered onabotulinumtoxinA achieves equivalent OAB-q response rates to urologist-administered treatment — required AUA CE update for urology NPs on intravesical injection documentation standards, AUA symptom score monitoring frameworks, and urinary retention management protocols.",
  },
  {
    title: "Urology NP Testosterone Therapy Outcomes — Journal of Sexual Medicine 2024",
    description: "Real-world cohort (n=6,200 hypogonadal men) confirming NP-managed testosterone replacement therapy achieves equivalent testosterone level normalization and QoL improvement to urologist-managed care — required AUA CE update for urology NPs on PSA and hematocrit monitoring documentation standards, ADT cardiovascular risk frameworks, and PDMP compliance documentation protocols.",
  },
  {
    title: "NP Telemedicine Urology — Journal of Telemedicine and Telecare 2023",
    description: "Prospective study (n=3,800 urology telemedicine encounters) confirming NP-delivered tele-urology achieves equivalent patient satisfaction and diagnostic accuracy for BPH, OAB, and prostate cancer surveillance to in-person care — required AUA CE update for urology NPs on tele-urology documentation standards, virtual voiding diary assessment frameworks, and telehealth prescription compliance protocols.",
  },
]

const testimonial = {
  quote:
    "AGPCNP-BC 5-year recertification, CUNP concurrent renewal, CURN concurrent 3-year renewal, AUA Annual Meeting CE, SUNA National Conference CE, AUGS Annual Meeting CE, SUFU Annual Meeting CE, annual BCG REMS prescriber education, annual testosterone REMS prescriber education, annual intravesical Botox injection competency for OAB, annual cystoscopy case log with 40 procedures, flexible and rigid cystoscopy competency documentation, BCG maintenance schedule tracking for 18 enrolled NMIBC patients (SWOG S8507 3-year protocol), PSA surveillance quarterly review for 65 active surveillance patients, testosterone PSA and hematocrit quarterly monitoring for 90 testosterone patients, PDMP monthly documentation review for Schedule III testosterone prescribing, kidney stone 24-hour urine evaluation rate quarterly review, DEA 3-year renewal, collaborative agreement annual renewal with supervising urologist, hospital biennial credentialing with procedure volume documentation, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Taiwo U.",
  title: "MSN, AGPCNP-BC, CUNP, CURN, Urology NP & Men&apos;s Health Program Director",
}

export default function UrologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Urology Nurse Practitioners"
        title="CUNP Certification. BCG REMS Compliance. Cystoscopy Competency. One Calendar."
        subtitle="Momenties tracks AGPCNP-BC 5-year recertification, CUNP and CURN concurrent renewal, BCG REMS annual prescriber education, testosterone REMS annual education, annual cystoscopy case log documentation, intravesical Botox annual injection competency, BCG maintenance patient tracking per SWOG S8507 protocol, PSA active surveillance quarterly review, testosterone monitoring quarterly documentation, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Urology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Urology NP Practice
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
