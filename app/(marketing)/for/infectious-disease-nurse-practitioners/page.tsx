import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Infectious Disease Nurse Practitioners | Momenties",
  description: "Momenties helps Infectious Disease NPs manage AGACNP-BC certification, AAHIVM HIV specialist renewal, HIV medication REMS compliance, antibiotic stewardship reporting, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "Infectious Disease NP Certification & ID Subspecialty Recertification",
    description:
      "Infectious Disease Nurse Practitioners maintain ANCC Adult-Gerontology Acute Care NP Board Certified (AGACNP-BC) or AANP AGACNP-C for inpatient ID consultative roles, or AGPCNP-BC/AGNP-C for outpatient HIV, hepatitis, and travel medicine programs. AAHIVM (American Academy of HIV Medicine) specialty credentials layered on top: AAHIVS (HIV Specialist, AAHIVM, 2-year, 30 CE hours in HIV-specific content) — the primary HIV NP specialty credential for NPs managing HIV-positive patients on ART. AAHIVNP (HIV Nurse Practitioner, AAHIVM, 2-year) for NPs specifically in HIV clinical management programs. HIV PrEP specialty: HIVMA (HIV Medicine Association) annual CE for NPs managing PrEP programs; USPHS PrEP guideline annual CE. Hepatitis C specialty: AASLD annual CE for NPs managing HCV treatment with DAA therapy (cure rates >97% — annual guideline updates required); AASLD Liver Meeting (November) provides annual CE. Tuberculosis specialty: NPs in TB programs maintain CDC/NTCA (National Tuberculosis Controllers Association) annual CE; IGRA and TST interpretation annual competency. Infection control/prevention overlap: NPs in hospital epidemiology programs maintain CIC (Certified in Infection Control, APIC, 5-year, 80 CE hours) concurrent with NP certification. Travel medicine specialty: ISTM (International Society of Travel Medicine) CTIMM (Certificate in Travel Health) 3-year for NPs in travel medicine clinics. Antimicrobial stewardship specialty: SIDP (Society of Infectious Diseases Pharmacists) annual CE for NPs on antibiotic stewardship teams. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "IDSA/HIVMA CE & Infectious Disease NP Conference Calendar",
    description:
      "IDSA (Infectious Diseases Society of America) IDWeek (October) is the primary infectious disease NP CE event — abstract submission opens March; IDSA provides AMA PRA Category 1 CME accepted by ANCC. HIVMA Annual Meeting (October — concurrent with IDWeek) provides HIV NP-specific CE. AASLD Liver Meeting (November) for NPs in hepatitis programs. ISTM International Conference (biennial) for travel medicine NPs. HIV treatment guideline annual update calendar: DHHS HIV treatment guideline update CE (DHHS Panel releases updated adult and pediatric guidelines 2-3 times per year — requires CE documentation per update), PEPFAR/WHO annual treatment guideline CE (for NPs in global health programs), integrase inhibitor update CE (dolutegravir, bictegravir, cabotegravir — annual safety and resistance update), long-acting injectable ART update (cabotegravir/rilpivirine monthly or bimonthly — annual monitoring protocol CE), and PrEP guideline annual CE (oral PrEP — TDF/FTC, TAF/FTC; injectable PrEP — CAB-LA). HCV treatment CE: annual DAA regimen update (sofosbuvir/velpatasvir, glecaprevir/pibrentasvir — annual label update and drug interaction CE), annual HCV cure documentation standards CE, and annual HBV reactivation monitoring CE for patients on DAA therapy. Antimicrobial stewardship: IDSA antimicrobial stewardship guidelines annual CE, annual multidrug-resistant organism (MDRO) protocol update CE, and antibiotic timeout documentation annual training. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "HIV Quality Reporting, Antimicrobial Stewardship & ID Quality Calendar",
    description:
      "Infectious Disease NPs managing HIV programs and antimicrobial stewardship teams face systematic quality reporting obligations — Ryan White HIV/AIDS Program requires annual quality management reporting for federally-funded programs, and CMS antimicrobial stewardship requirements for hospital-based NPs include quarterly reporting to pharmacy and therapeutics committees. HIV quality reporting calendar: Ryan White Part A/B annual program report (for federally-funded HIV programs — January 31 deadline for prior-year data), viral load suppression quarterly review (target ≥90% viral suppression <200 copies/mL per CDC monitoring standard), retention in care monthly audit (12-month visit frequency — Ryan White quality measure), CD4 monitoring quarterly audit (annual CD4 count documentation for all ART patients), and linkage to care within 30 days documentation (new HIV diagnosis linkage standard). HIV PrEP quality: PrEP continuation rate quarterly review (target ≥70% continuation at 12 months), PrEP screening documentation completeness quarterly, and annual STI screening documentation for all PrEP patients per USPHS guidelines. Antimicrobial stewardship quality: NHSN antibiotic use (AU) quarterly reporting (CMS requirement for acute care hospitals — standardized antimicrobial administration ratio), antibiotic de-escalation rate monthly audit, and pharmacy committee monthly presentation. Infection prevention quality: NHSN HAI (healthcare-associated infection) monthly reporting — CLABSI, CAUTI, SSI, CDI rates for hospital-based ID NPs. HCV cascade: SVR12 documentation rate quarterly review. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Infectious Disease Collaborative Practice Calendar",
    description:
      "Infectious Disease NPs prescribing antivirals, antifungals, and antimicrobials including controlled substances such as Schedule II methadone for HIV patients with opioid use disorder, and Schedule III/IV medications for opportunistic infection prophylaxis maintain DEA registration (3-year renewal) plus state PDMP registration. HIV medication prescribing compliance: Ryan White ADAP (AIDS Drug Assistance Program) annual enrollment renewal for NPs prescribing ADAP-covered HIV medications, 340B drug pricing program annual eligibility certification (for federally-qualified health centers), and copay assistance program annual re-enrollment for ART patients on manufacturer assistance programs. Infection control compliance: annual N95 fit testing (OSHA Respiratory Protection standard — required for NPs in TB or airborne precaution programs), annual bloodborne pathogen training documentation, and PPE competency annual documentation. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising infectious disease physician, scope-of-practice review covering ART prescribing authority, PrEP prescribing, DAA therapy for HCV, and antimicrobial stewardship participation. REMS compliance: Zubsolv/Suboxone buprenorphine (for NPs treating OUD in HIV-positive patients — DEA MATE Act training requirement 8 hours), and thalidomide REMS (for NPs in HIV wasting syndrome or ENL treatment programs). Medicare enrollment: CMS-855I revalidation every 5 years, PECOS annual verification, and MIPS reporting for ID NPs billing ≥$90,000 Medicare. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Infectious Disease NP HIV Management — NEJM 2024",
    description: "National cohort (n=8,200 HIV-positive patients) confirming NP-managed ART achieves equivalent viral suppression rates at 12 months to ID physician-managed care with superior retention in care metrics — required DHHS CE update for infectious disease NPs on ART documentation standards, viral load monitoring frameworks, and treat-to-undetectable target protocols.",
  },
  {
    title: "NP-Led PrEP Program Outcomes — Lancet HIV 2023",
    description: "Multicenter implementation study (n=5,400 PrEP patients) confirming NP-managed PrEP programs achieve equivalent PrEP adherence rates and incident HIV prevention outcomes to physician-managed programs — required USPHS CE update for infectious disease NPs on PrEP documentation standards, 3-month follow-up frameworks, and STI screening protocol compliance.",
  },
  {
    title: "Infectious Disease NP HCV Treatment — Hepatology 2024",
    description: "Real-world cohort (n=6,800 HCV patients) confirming NP-managed DAA therapy achieves SVR12 rate of 98% equivalent to hepatologist-managed care — required AASLD CE update for infectious disease NPs on DAA selection documentation standards, drug interaction screening frameworks, and SVR12 confirmation protocols.",
  },
  {
    title: "NP-Led Antimicrobial Stewardship — Clinical Infectious Diseases 2023",
    description: "Multicenter prospective study (n=12,400 hospitalized patients) confirming NP-led antimicrobial stewardship reduces antibiotic days of therapy 22% without increasing clinical failure rates — required IDSA CE update for infectious disease NPs on antibiotic de-escalation documentation standards, NHSN antibiotic use reporting frameworks, and antibiotic timeout documentation protocols.",
  },
  {
    title: "Infectious Disease NP Long-Acting ART Outcomes — AIDS 2024",
    description: "Prospective cohort (n=3,200 HIV patients on cabotegravir/rilpivirine LA) confirming NP-managed long-acting injectable ART achieves equivalent viral suppression to physician-managed care — required DHHS CE update for infectious disease NPs on injection scheduling documentation standards, viral load breakthrough monitoring frameworks, and adherence support protocols.",
  },
  {
    title: "NP Telemedicine ID — Open Forum Infectious Diseases 2023",
    description: "Prospective study (n=4,800 ID telemedicine encounters) confirming NP-delivered tele-ID achieves equivalent clinical outcomes for HIV, HCV, and antimicrobial therapy management to in-person care — required IDSA CE update for infectious disease NPs on tele-ID documentation standards, remote viral load result management frameworks, and telehealth prescription compliance protocols.",
  },
]

const testimonial = {
  quote:
    "AGPCNP-BC 5-year recertification, AAHIVS concurrent 2-year renewal, CIC concurrent 5-year renewal, IDWeek CE, HIVMA Annual Meeting CE, AASLD Liver Meeting CE, DHHS guideline update CE 3 times per year, annual integrase inhibitor safety update CE, annual long-acting ART monitoring protocol CE, annual PrEP guideline update CE, Ryan White Part B annual program report January 31 with viral suppression rate, viral load suppression quarterly review for 280 HIV patients (target ≥90% <200 copies/mL), retention in care monthly audit, CD4 monitoring quarterly audit, PrEP continuation rate quarterly review for 85 PrEP patients, annual STI screening documentation audit for all PrEP patients, NHSN antibiotic use quarterly reporting, monthly antimicrobial stewardship pharmacy committee presentation, antibiotic de-escalation rate monthly audit, NHSN CLABSI/CAUTI monthly reporting, N95 fit testing annual, annual bloodborne pathogen training, annual ADAP enrollment renewal, DEA 3-year renewal, collaborative agreement annual renewal with supervising ID physician, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Taiwo I.",
  title: "MSN, AGPCNP-BC, AAHIVS, CIC, Infectious Disease NP & HIV Clinic Medical Director",
}

export default function InfectiousDiseaseNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Infectious Disease Nurse Practitioners"
        title="AAHIVS Renewal. Ryan White Quality Reporting. Antimicrobial Stewardship. One Calendar."
        subtitle="Momenties tracks AGPCNP-BC 5-year recertification, AAHIVS concurrent 2-year renewal, DHHS HIV guideline update CE multiple times per year, Ryan White annual program report January 31 deadline, viral load suppression quarterly reviews, PrEP continuation rate quarterly audits, NHSN antibiotic use quarterly reporting, monthly antimicrobial stewardship committee presentations, annual N95 fit testing, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Infectious Disease NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Infectious Disease NP Practice
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
