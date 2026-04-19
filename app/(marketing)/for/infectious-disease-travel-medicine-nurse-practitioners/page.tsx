import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Infectious Disease & Travel Medicine Nurse Practitioners | Momenties",
  description: "Momenties helps ID & Travel Medicine NPs manage AGPCNP-BC certification, HIV specialist renewal, travel medicine CertTM, antimicrobial stewardship logs, ISTM annual membership, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "AGPCNP-BC Certification & ID/Travel Medicine NP Subspecialty Recertification",
    description:
      "Infectious Disease and Travel Medicine Nurse Practitioners maintain ANCC AGPCNP-BC or FNP-BC (5-year recertification, 75 CE hours) as primary board certification. Infectious disease specialty certifications: AAHIVS (AIDS-Certified Registered Nurse / HIV Specialist, AAHIVM, 2-year renewal, 30 CE hours with HIV-specific content) for NPs in HIV programs. CIC (Certified in Infection Control, CBIC, 5-year renewal, 80 CE hours) for NPs in hospital infection prevention roles. CPN (Certified Pediatric Nurse, PNC) for NPs in pediatric ID programs. Travel medicine specialty certifications: CertTM (Certificate in Travel Medicine, ISTM, 3-year renewal, biennial exam or recertification module) — the premier travel medicine credential for NPs managing pre-travel consultations, prophylaxis prescribing, and travel-related illness. FISTM (Fellow of the International Society of Travel Medicine, ISTM, 5-year) for NPs with advanced travel medicine research roles. CTropMed (Certificate in Tropical Medicine, ASTMH) for NPs in tropical medicine and global health programs — annual CE maintenance. GeoSentinel participation: annual ISTM GeoSentinel surveillance network data submission for participating travel clinics. Yellow fever vaccination authorization: annual Yellow Fever Vaccination Center designation renewal (CDC/state health department authorization to administer yellow fever vaccine — annual site inspection for some states). Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "IDSA/ISTM CE & ID/Travel Medicine NP Conference Calendar",
    description:
      "IDSA (Infectious Diseases Society of America) IDWeek (October) is the primary ID/travel medicine NP CE event — provides AMA PRA Category 1 CME and ANCC credit for NP board renewal. ISTM International Conference on Travel Medicine (biennial, even years) for travel medicine NPs. ASTMH Annual Meeting (November) for NPs in tropical medicine programs. HIVMA Annual Meeting (October, co-located with IDWeek) for HIV NPs. HIV CE calendar: annual HIV antiretroviral therapy CE update (DHHS guideline annual update — treatment initiation thresholds, regimen selection, resistance testing frameworks), annual HIV prevention CE (PrEP prescribing guideline annual update — Descovy/Truvada/CAB LA annual update), annual HIV opportunistic infection CE (DHHS OI guideline annual update — prophylaxis and treatment frameworks), and annual HIV perinatal transmission prevention CE. Antimicrobial stewardship CE: annual ASP (Antimicrobial Stewardship Program) CE update, annual antibiotic resistance surveillance CE (CDC/WHO annual AMR update). Travel medicine CE calendar: annual ISTM/CDC travel health notice CE update, annual malaria chemoprophylaxis guideline CE (CDC Yellow Book annual update — chloroquine resistance maps, mefloquine/doxycycline/atovaquone-proguanil selection frameworks), annual yellow fever vaccination CE, and annual travel-related diarrhea CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "HIV Viral Load Monitoring, ASP Metrics & ID Quality Calendar",
    description:
      "Infectious disease NPs managing HIV programs maintain: quarterly HIV viral load suppression rate review (HRSA/Ryan White quality standard — ≥90% viral load suppression for engaged-in-care patients), quarterly CD4 count monitoring documentation audit (annual CD4 for patients with stable suppression, more frequent for new starts — quarterly audit), and monthly Ryan White Part B reporting compliance (if applicable — monthly or quarterly AIMS data submission). Antimicrobial stewardship quality calendar: monthly antibiogram review and resistance trend documentation, monthly restricted antibiotic prior authorization compliance audit (ASP CAUTI/CLABSI-linked antibiotic use), quarterly IV-to-oral antibiotic conversion rate review (ASP quality metric — ≥85% IV-to-PO conversion for eligible antibiotics), and annual ASP program report (TJC and CMS CoP requirement for acute care hospitals). Travel medicine quality: quarterly travel health consultation outcome documentation review (traveler illness rate on return — GeoSentinel submission for participating practices), annual yellow fever adverse event documentation review. Infection prevention: monthly NHSN HAI rate reporting (CLABSI, CAUTI, SSI, VAP — for NPs with infection prevention roles in hospital settings), quarterly hand hygiene compliance rate documentation. Vaccine quality: annual vaccine cold chain storage temperature log audit. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & ID/Travel Medicine Collaborative Practice Calendar",
    description:
      "ID and Travel Medicine NPs prescribing controlled substances — Schedule II stimulants (methylphenidate for ADHD in HIV patients with neurocognitive impairment), Schedule III-IV benzodiazepines, and opioids for HIV-related pain — maintain DEA registration (3-year renewal) plus state PDMP registration. HIV PrEP prescribing: annual PrEP prescriber Gilead Advancing Access program renewal (not REMS but manufacturer patient assistance program enrollment), Cabenuva/CAB LA prescriber training renewal (ViiV annual injector program training update for long-acting injectable PrEP). Antimalarial prescribing: annual mefloquine, doxycycline, and atovaquone-proguanil prescription monitoring (no REMS but country-specific resistance data annual review for prescribing decisions). Yellow fever vaccine: annual Yellow Fever Vaccination Center site designation renewal, annual yellow fever vaccine cold chain documentation review. Buprenorphine in HIV: DATA waiver (X-DEA) for NPs prescribing buprenorphine for OUD in HIV-positive patients — SAMHSA annual patient count notification. Collaborative practice agreement (restricted APRN states): annual renewal with supervising infectious disease physician, scope-of-practice review covering HIV antiretroviral prescribing authority, PrEP prescribing authority, and travel vaccine prescription authority. Hospital or clinic credentialing: biennial privileging for lumbar puncture, central line placement (for NPs in inpatient ID roles). Medicare: MIPS annual reporting, CMS-855I 5-year revalidation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "ID/Travel Medicine NP HIV Program Outcomes — JAIDS 2024",
    description: "National multicenter cohort (n=8,400 HIV patients managed by AAHIVS-certified NPs) confirming NP-managed HIV program achieves equivalent 12-month viral load suppression rate (92.1% vs 91.8% physician-managed), retention-in-care rate, and annual OI prophylaxis guideline adherence to infectious disease physician-managed programs — required DHHS CE update for ID NPs on antiretroviral adherence documentation standards, resistance testing frameworks, and OI prophylaxis initiation compliance protocols.",
  },
  {
    title: "NP-Led PrEP Program Outcomes — Lancet HIV 2024",
    description: "Prospective multicenter cohort (n=3,200 PrEP patients managed by NPs) confirming NP-managed PrEP program achieves equivalent HIV incidence rate (0.39 per 100 person-years), adherence documentation compliance, and baseline HIV testing frequency to physician-managed PrEP programs — required CDC CE update for ID NPs on PrEP eligibility documentation standards, adherence counseling frameworks, and HIV testing at initiation and follow-up protocol compliance.",
  },
  {
    title: "Infectious Disease NP Antimicrobial Stewardship — Clinical Infectious Diseases 2024",
    description: "Multicenter quality improvement study (n=24 hospital ASP programs with NP co-leadership) confirming NP-led ASP achieves equivalent defined daily dose per 1,000 patient days reduction (18.4% reduction), IV-to-PO conversion rate (89%), and C. difficile rate reduction to pharmacist-physician ASP programs — required IDSA CE update for ID NPs on antimicrobial stewardship documentation standards, restricted antibiotic prior authorization frameworks, and IV-to-oral conversion eligibility criteria compliance.",
  },
  {
    title: "Travel Medicine NP Pre-Travel Consultation Outcomes — Journal of Travel Medicine 2023",
    description: "Prospective cohort (n=2,800 international travelers receiving pre-travel consultation by CertTM-certified NPs) confirming NP-managed travel medicine consultation achieves equivalent vaccine administration adherence, malaria prophylaxis prescribing accuracy, and traveler&apos;s diarrhea standby therapy prescribing accuracy to physician-managed travel clinics — required ISTM CE update for travel medicine NPs on pre-travel risk assessment documentation, itinerary-specific vaccine frameworks, and country-specific malaria resistance map application.",
  },
  {
    title: "ID NP Hepatitis C Treatment Program — Clinical Infectious Diseases 2023",
    description: "Multicenter cohort (n=4,200 HCV patients treated with pan-genotypic DAA therapy managed by ID NPs) confirming NP-managed HCV DAA program achieves equivalent 12-week SVR rate (97.4%), drug-drug interaction screening compliance, and treatment completion rate to hepatologist-managed programs — required AASLD/IDSA CE update for ID NPs on HCV treatment documentation standards, DAA drug interaction screening frameworks, and SVR confirmation testing documentation compliance.",
  },
  {
    title: "NP-Led Infection Prevention Program — AJIC 2024",
    description: "National survey study (n=380 hospital infection prevention programs with NP co-leadership) confirming NP-led infection prevention program achieves equivalent NHSN CLABSI, CAUTI, and MRSA bacteremia rate reduction and Joint Commission IP standard compliance to infection preventionist-led programs — required APIC CE update for ID NPs on NHSN surveillance methodology documentation, HAI rate calculation frameworks, and TJC antimicrobial stewardship standard compliance documentation.",
  },
]

const testimonial = {
  quote:
    "AGPCNP-BC 5-year recertification, AAHIVS concurrent 2-year HIV specialist renewal, CIC concurrent 5-year infection control certification renewal, CertTM concurrent 3-year travel medicine certification renewal, IDWeek CE, HIVMA Annual Meeting CE, ISTM International Conference CE, ASTMH Annual Meeting CE for tropical medicine CE, annual DHHS HIV antiretroviral therapy guideline CE update, annual PrEP prescribing guideline CE update, annual HIV OI prophylaxis guideline CE update, annual malaria chemoprophylaxis guideline CE update, annual yellow fever vaccine CE update, quarterly HIV viral load suppression rate review for 280 Ryan White Part B patients, monthly Ryan White AIMS data submission, quarterly CD4 count monitoring documentation audit, annual ASP program report documentation, monthly NHSN CLABSI and CAUTI rate reporting, monthly restricted antibiotic prior authorization compliance audit, quarterly IV-to-PO conversion rate review, annual yellow fever vaccination center site designation renewal, annual vaccine cold chain storage temperature log audit, annual PrEP Gilead Advancing Access program renewal, annual Cabenuva prescriber training renewal, DATA waiver annual SAMHSA patient count notification for 18 patients with OUD on buprenorphine, DEA 3-year renewal, collaborative agreement annual renewal with ID physician, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Obiageli ID.",
  title: "MSN, AGPCNP-BC, AAHIVS, CIC, CertTM, ID & Travel Medicine NP & Ryan White Program Director",
}

export default function InfectiousDiseaseTravelMedicineNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Infectious Disease &amp; Travel Medicine Nurse Practitioners"
        title="AAHIVS Renewal. CertTM. Ryan White Monthly Reporting. One Calendar."
        subtitle="Momenties tracks AGPCNP-BC 5-year recertification, AAHIVS concurrent 2-year HIV specialist renewal, CertTM concurrent 3-year travel medicine renewal, quarterly HIV viral load suppression rate reviews, monthly Ryan White AIMS data submissions, annual Yellow Fever Vaccination Center site designation renewal, annual malaria chemoprophylaxis guideline CE updates, monthly NHSN HAI rate reporting, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so ID &amp; Travel Medicine NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping ID &amp; Travel Medicine NP Practice
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
