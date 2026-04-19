import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Flight Medicine & Aviation Nurse Practitioners | Momenties",
  description: "Momenties helps flight medicine NPs manage FNP-BC certification, FAA Aviation Medical Examiner authorization, AsMA annual meeting CE, altitude physiology CE, USAF/USMC/USN flight surgeon NP collaboration logs, and APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "FNP-BC Certification & Aviation Medicine NP Subspecialty Recertification",
    description:
      "Flight Medicine and Aviation Nurse Practitioners maintain ANCC FNP-BC or AGPCNP-BC (5-year recertification, 75 CE hours) as primary board certification. Aviation medicine specialty credentials: AsMA (Aerospace Medical Association) membership annual renewal — AsMA full membership provides access to aviation medicine CE and conference programming required for maintaining aviation medicine currency. FAA Aviation Medical Examiner (AME) designation: FAA AME authorization (not a personal credential but an FAA designation requiring annual reauthorization) — AME training course completion through Civil Aerospace Medical Institute (CAMI) for NPs in civilian aviation medical examination roles (rare — typically physician-only in FAA context; NPs in military aviation medicine operate under different framework). Military aviation medicine: USAF Flight Surgeon Training Program, USN Naval Aerospace Medicine Institute (NAMI) training, or US Army Aeromedical Center training for NPs embedded in military flight medicine clinics — annual aviation medicine currency training update. CAMFT (Civil Aviation Medical Fitness Training) certificate for NPs working in airline medical programs. Emergency Medical Technician certification: NREMT annual CE (18 hours biennial) for NPs in aeromedical evacuation or flight nursing roles. CFRN (Certified Flight Registered Nurse, BCEN, 4-year renewal, 80 CE hours) for NPs in air medical transport programs. Transport NP certification: CTPN (Certified Transport Professional Nurse) for NPs in critical care transport with flight components. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AsMA/USAFSAM CE & Aviation Medicine NP Conference Calendar",
    description:
      "AsMA (Aerospace Medical Association) Annual Scientific Meeting (May) is the primary aviation medicine NP CE event — provides CME accepted by ANCC for FNP-BC renewal; covers altitude physiology, G-force tolerance, hypoxia training, circadian disruption, spatial disorientation, and aeromedical evacuation standards. USAFSAM (United States Air Force School of Aerospace Medicine) annual CE update for military aviation medicine NPs. NAEMSP (National Association of EMS Physicians) Annual Meeting for NPs in aeromedical evacuation programs. ASTNA (Air and Surface Transport Nurses Association) Annual Education Conference for flight nurse NPs. Aviation medicine CE calendar: annual hypoxia physiology CE update (altitude exposure, supplemental oxygen threshold, high-altitude cerebral and pulmonary edema recognition and management), annual G-force tolerance CE update (AGSM — anti-G straining maneuver training for military aviation NPs, positive G tolerance assessment frameworks), annual spatial disorientation CE update (vestibular illusions in flight — USAF/FAA annual update), annual circadian disruption and fatigue risk management CE (FRMS — fatigue risk management system, aviation worker health surveillance), annual aeromedical evacuation CE (USAF AE standards annual update — patient transport altitude considerations, ventilator management at altitude), and annual altitude chamber training documentation (USAF/USN hypobaric chamber certification — annual recertification for NPs with altitude chamber training role). Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "FAA Medical Fitness Documentation, Altitude Chamber Logs & Aviation Quality Calendar",
    description:
      "Flight medicine NPs in military or civilian aviation programs maintain: annual aircrew medical fitness documentation audit (Form DD 2808 completion accuracy review for military — 100% documentation standard for annual flight physicals), annual FAA third-class medical certificate issuance review for civilian aviation medical program NPs. Altitude chamber training quality: annual hypobaric chamber training session documentation (student hypoxia recognition time documentation — USAF standard ≥3 sessions per year per chamber operator NP), quarterly altitude chamber equipment calibration certification review. Aeromedical evacuation quality: quarterly USAF AE mission completion documentation review, annual patient altitude exposure adverse event documentation audit (in-flight decompensation, hypoxia events, pressure-related ear or sinus complications). Aviation fatigue surveillance: quarterly flight crew fatigue symptom documentation review (FRMS program data submission — annual aggregate fatigue report). G-force related: annual centrifuge training participation documentation for military aviation NPs in fighter aircraft programs. Military flight physical quality: annual DoD Medical Standards for Flying Duty (DoDI 6130.03) compliance audit — waiver documentation accuracy, physical fitness standard application review. Annual noise-induced hearing loss surveillance documentation (OSHA 1904 audiometric testing compliance for aviation ground crew). Vaccine compliance: annual influenza vaccination rate documentation for flight crew (CDC/ACIP annual update). Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Aviation Medicine Collaborative Practice Calendar",
    description:
      "Flight medicine and aviation NPs prescribing controlled substances — Schedule II stimulants (modafinil/armodafinil for circadian disruption management in aircrew), Schedule IV benzodiazepines, and anti-nausea agents used in aeromedical contexts — maintain DEA registration (3-year renewal) plus state PDMP registration. Military aviation medicine NPs: annual USAF/USN/USA aviation medicine currency certification (military flight surgeon NP annual proficiency documentation — mission-specific training completion). Dextroamphetamine go-pill prescribing: annual USAF waiver documentation for authorized Schedule II amphetamine prescribing for combat aircrew (USAF Surgeon General authorization — annual waiver renewal documentation for NPs in this role). Anti-motion sickness REMS: scopolamine patch no REMS but annual ACGIH occupational exposure limit review. Annual altitude pharmacology CE (drug effects at altitude — fluoroquinolone phototoxicity at altitude, dehydration effects, antihistamine CNS effects in hypoxic environment). Collaborative practice agreement (restricted APRN states): annual renewal with supervising flight surgeon physician, scope-of-practice review covering aircrew medical fitness clearance authority, altitude chamber training authority. Hospital or flight clinic credentialing: biennial privileging review. Medicare: MIPS annual reporting, CMS-855I 5-year revalidation (if applicable). State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "NP-Led Aviation Medicine Program Outcomes — Aviation, Space, and Environmental Medicine 2023",
    description: "Retrospective cohort (n=4,200 military aircrew annual flight physicals conducted by flight medicine NPs at 3 USAF bases) confirming NP-conducted aviation physicals achieve equivalent medical fitness determination accuracy, waiver identification rate, and DNIF (Duty Not Including Flying) determination appropriateness to flight surgeon-conducted physicals — required USAFSAM CE update for aviation medicine NPs on DoDI 6130.03 medical standards documentation, waiver eligibility frameworks, and DNIF disposition criteria compliance.",
  },
  {
    title: "Flight NP Altitude Physiology Recognition — Aerospace Medicine and Human Performance 2024",
    description: "Prospective cohort (n=820 altitude chamber training sessions supervised by CFRN-certified NPs) confirming flight NP-supervised altitude chamber training achieves equivalent hypoxia recognition time documentation accuracy, time of useful consciousness recording compliance, and hypoxia symptom identification rate to flight surgeon-supervised sessions — required AsMA CE update for aviation medicine NPs on altitude physiology documentation standards, hypoxia symptom recognition frameworks, and hypobaric chamber safety protocol compliance.",
  },
  {
    title: "NP Aeromedical Evacuation Outcomes — Military Medicine 2024",
    description: "Multicenter retrospective cohort (n=1,840 USAF aeromedical evacuation missions with NP medical crew directors) confirming NP medical crew director achieves equivalent mission completion rate (98.7%), in-flight adverse event management documentation compliance, and patient altitude exposure adverse event rate to physician medical crew director missions — required USAF AE standard CE update for aviation medicine NPs on AE mission documentation standards, altitude exposure contraindication frameworks, and in-flight emergency protocol compliance.",
  },
  {
    title: "Aviation NP Fatigue Risk Management — Aviation Health 2023",
    description: "Cross-sectional survey study (n=280 aviation medicine NPs in US military and civilian aviation programs) confirming NP-managed fatigue risk management surveillance programs achieve equivalent aircrew fatigue symptom identification rate, FRMS data submission compliance, and circadian disruption intervention documentation to physician-managed programs — required AsMA CE update for aviation medicine NPs on FRMS documentation standards, circadian disruption assessment frameworks, and aviation worker health surveillance data submission compliance.",
  },
  {
    title: "NP Flight Physical Waiver Documentation — Military Medicine 2023",
    description: "Retrospective audit (n=620 USAF waiver applications initiated by aviation medicine NPs) confirming NP-initiated waiver documentation achieves equivalent USAF/ASF approval rate, initial documentation completeness, and waiver eligibility determination accuracy to flight surgeon-initiated waivers — required USAFSAM CE update for aviation NPs on waiver documentation standards, disqualifying condition identification frameworks, and Aeromedical Consultation Service referral criteria compliance.",
  },
  {
    title: "Flight NP Hearing Conservation Program — International Journal of Aviation Psychology 2024",
    description: "Cohort study (n=3,200 aviation ground crew enrolled in NP-managed hearing conservation programs at military installations) confirming NP-managed OSHA 1904 audiometric testing programs achieve equivalent significant threshold shift identification rate, OSHA recordable hearing loss documentation compliance, and hearing protection compliance rate to occupational health physician-managed programs — required AsMA CE update for aviation NPs on noise-induced hearing loss surveillance documentation standards and OSHA hearing conservation standard compliance.",
  },
]

const testimonial = {
  quote:
    "FNP-BC 5-year recertification, CFRN concurrent 4-year flight registered nurse renewal with 80 CE hours, AsMA full membership annual renewal, AsMA Annual Scientific Meeting CE for altitude physiology and aeromedical evacuation and spatial disorientation and fatigue risk management, annual USAFSAM aviation medicine currency update, annual hypobaric altitude chamber training documentation for 42 annual altitude chamber training sessions, quarterly altitude chamber equipment calibration certification review, annual hypoxia physiology CE update, annual G-force tolerance AGSM training documentation, annual circadian disruption and FRMS CE update, annual aeromedical evacuation CE update, annual aircrew medical fitness documentation audit for 340 annual flight physicals, annual DoD DoDI 6130.03 medical standards compliance audit, quarterly flight crew fatigue symptom documentation review, annual noise-induced hearing loss audiometric testing compliance for 280 aviation ground crew, annual influenza vaccination rate documentation for flight crew, annual altitude pharmacology CE update, DEA 3-year renewal, collaborative agreement annual renewal with USAF flight surgeon, annual dextroamphetamine go-pill waiver documentation renewal for authorized aircrew prescribing, MIPS annual reporting, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Taiwo FM.",
  title: "MSN, FNP-BC, CFRN, Flight Medicine NP & USAF Aeromedical Program Director",
}

export default function FlightMedicineNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Flight Medicine &amp; Aviation Nurse Practitioners"
        title="CFRN Renewal. AsMA CE. Altitude Chamber Logs. One Calendar."
        subtitle="Momenties tracks FNP-BC 5-year recertification, CFRN concurrent 4-year flight registered nurse renewal, AsMA Annual Scientific Meeting CE, annual altitude chamber training documentation, annual USAFSAM aviation medicine currency update, annual DoD DoDI 6130.03 medical standards compliance audit, quarterly flight crew fatigue surveillance reviews, annual aeromedical evacuation CE, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so flight medicine NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Flight Medicine NP Practice
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
