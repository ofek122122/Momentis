import type { Metadata } from "next"
import { ClipboardList, Stethoscope, Users2, Bell, UserCheck, Heart, Target, Shield } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pheochromocytoma & Paraganglioma Nurse Practitioners | Momenties",
  description:
    "Designed for NPs coordinating PPGL care — 24-hour urine catecholamine collections, medication and dietary washout education, alpha-blockade BP monitoring, cardiology clearance, hereditary syndrome counseling, SDHx annual surveillance scheduling, and PRRT (lutetium-DOTATATE) coordination for metastatic SDHB-driven disease.",
}

const pillars = [
  {
    icon: ClipboardList,
    title: "Biochemical Workup Coordination",
    description:
      "Order and educate patients on plasma free metanephrines (drawn supine after 30 minutes of rest) and 24-hour urine fractionated metanephrines and catecholamines, including detailed pre-collection instructions for medication washout (tricyclics, labetalol, sotalol, acetaminophen, MAO inhibitors), avoidance of caffeine, nicotine, vanilla, and bananas in the 72 hours prior, and proper acidified-container collection technique. Track repeat draws for equivocal results, schedule clonidine suppression testing where indicated, and confirm chromogranin A and adrenal-protocol imaging are sequenced in the same encounter window.",
  },
  {
    icon: Heart,
    title: "Pre-operative Preparation Monitoring",
    description:
      "Monitor blood pressure response to phenoxybenzamine 10 mg BID titration or doxazosin 2–16 mg daily across the full 10–14 day pre-op window, review home BP and orthostatic logs, reinforce target supine BP <130/80 and standing systolic >90, ensure 5,000 mg/day sodium loading from day 3, confirm beta-blocker is added only after adequate alpha-blockade, and coordinate cardiology clearance with echocardiogram for catecholamine cardiomyopathy screening, anesthesia consultation, and PACU/ICU bed reservation aligned to the surgical date.",
  },
  {
    icon: Users2,
    title: "Genetic Testing & Family Counseling",
    description:
      "Explain hereditary PPGL syndromes (SDHA/SDHB/SDHC/SDHD/SDHAF2 paraganglioma syndromes, von Hippel-Lindau, MEN2A/2B, NF1, MAX, TMEM127) to patients and families in plain language, facilitate genetic counselor referral, coordinate cascade testing for at-risk first-degree relatives, and walk SDHB carriers through the lifetime metastatic and renal cell carcinoma risk discussion. Schedule and document family pedigree updates, insurance pre-authorization for germline panels, and result disclosure visits.",
  },
  {
    icon: Bell,
    title: "Post-operative Surveillance",
    description:
      "Schedule 2-week and 6-week post-operative plasma metanephrines to confirm complete biochemical resection, lifelong annual plasma metanephrines for every PPGL survivor, biennial whole-body MRI for SDHx mutation carriers, and 5-year multidisciplinary review touchpoints. For metastatic SDHB-driven disease, coordinate with medical oncology and nuclear medicine for 177Lu-DOTATATE peptide receptor radionuclide therapy (PRRT), CVD chemotherapy regimens, or sunitinib clinical trial enrollment, including pre-PRRT renal function, dosimetry, and infusion scheduling.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Biochemical Workup & Patient Education",
    description:
      "NP-led education visit for plasma metanephrines and 24-hour urine catecholamine collection — review medication washout list, dietary restrictions, acidified container handling, supine plasma draw scheduling. Order chromogranin A and coordinate adrenal-protocol CT or MRI. Document baseline blood pressure and symptom diary (headache, palpitations, sweating, anxiety).",
  },
  {
    month: "Month 3–4",
    title: "Imaging Localization & Genetics Referral",
    description:
      "Coordinate 123I-MIBG scintigraphy or 68Ga-DOTATATE PET/CT for confirmed PPGL with extra-adrenal, multifocal, or suspected metastatic features. Place formal genetic counseling referral with SDHx/VHL/RET/NF1/MAX/TMEM127 panel. Pre-authorize germline testing with insurance and prepare family pedigree intake.",
  },
  {
    month: "Month 5–6",
    title: "Alpha-Blockade Initiation & BP Monitoring",
    description:
      "Initiate phenoxybenzamine or doxazosin alpha-blockade a minimum of 10–14 days before surgery, distribute home BP monitor, review daily logs by phone or patient portal every 2–3 days, escalate to provider for orthostasis or persistent supine hypertension. Begin 5,000 mg/day sodium loading on day 3. Confirm beta-blocker addition only after adequate alpha-blockade. Schedule cardiology clearance.",
  },
  {
    month: "Month 7–8",
    title: "Surgical Day & PACU/ICU Coordination",
    description:
      "Pre-op anesthesia walkthrough, OR and PACU/ICU bed coordination, family communication during laparoscopic, retroperitoneoscopic, or open adrenalectomy or paraganglioma resection. Post-op floor handoff with post-resection glucose and hypotension monitoring orders, IV hydration plan, and discharge teaching for steroid replacement if bilateral adrenalectomy was performed.",
  },
  {
    month: "Month 9–10",
    title: "Post-op Confirmation & Cascade Testing",
    description:
      "2-week and 6-week post-op plasma metanephrines and 24-hour urine fractionated metanephrines with patient-friendly result review. Initiate cascade germline testing for first-degree relatives of mutation-positive probands, coordinate insurance authorization, and schedule disclosure visits. Reinforce lifelong surveillance plan.",
  },
  {
    month: "Month 11–12",
    title: "Annual Surveillance & PRRT Coordination",
    description:
      "Schedule annual plasma metanephrines for every PPGL survivor and biennial whole-body MRI for SDHx carriers. For metastatic SDHB-driven disease, coordinate referral and intake for 177Lu-DOTATATE PRRT — verify somatostatin receptor expression on DOTATATE PET, baseline renal function, dosimetry planning, and 4-cycle infusion scheduling with medical oncology and nuclear medicine.",
  },
]

const kpis = [
  {
    metric: "100%",
    target: "Pre-Collection Education",
    description: "Every patient receives documented medication and dietary washout teaching before metanephrine collection.",
  },
  {
    metric: "≥10 days",
    target: "Alpha-Blockade Logged",
    description: "Daily home BP and orthostatic vitals logged for the full 10–14 day pre-op alpha-blockade titration window.",
  },
  {
    metric: "100%",
    target: "Genetics Referral",
    description: "Every confirmed PPGL patient referred to genetic counseling for SDHx/VHL/RET/NF1/MAX/TMEM127 panel.",
  },
  {
    metric: "≥90%",
    target: "Cascade Testing Uptake",
    description: "First-degree relatives of mutation-positive probands complete cascade germline testing within 12 months.",
  },
  {
    metric: "Annual",
    target: "SDHx Surveillance Adherence",
    description: "SDHx carriers attend annual biochemistry and biennial whole-body MRI without a missed interval.",
  },
  {
    metric: "<14 days",
    target: "PRRT Coordination",
    description: "Metastatic SDHB patients eligible for 177Lu-DOTATATE PRRT have intake completed within 14 days of referral.",
  },
]

const testimonial = {
  quote:
    "PPGL patients depend on their NP for the unglamorous parts — the medication washout list before metanephrine collection, the daily BP log during phenoxybenzamine titration, the family education visit when SDHB comes back positive, and the lifelong annual surveillance reminders. Momenties holds every one of those threads. I have not lost a surveillance interval in over a year, and our cascade testing uptake among first-degree relatives is now above 90%.",
  name: "Karen B., FNP-BC",
  title: "Endocrine NP, Rare Tumor Center",
}

export default function PheochromocytomaParagangliomaNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh", color: "#f0ece3", fontFamily: "DM Sans, sans-serif" }}>
      <PageHero
        eyebrow="PPGL Nurse Practitioners"
        title="Pheochromocytoma & Paraganglioma NPs — Precision Scheduling for a Rare Endocrine Tumor"
        subtitle="Designed for NPs coordinating PPGL care — from biochemical workup and pre-op alpha-blockade monitoring to post-surgical follow-up, genetic counseling referrals, and lifelong surveillance scheduling."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem,3vw,2.2rem)",
              fontFamily: "Playfair Display, serif",
              marginBottom: 48,
              color: "#f0ece3",
            }}
          >
            Built for the Day-to-Day Work of a PPGL NP
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 28 }}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 10, color: "#f0ece3" }}>{title}</h3>
                <p style={{ fontSize: "0.92rem", color: "#a0998e", lineHeight: 1.65 }}>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ background: "#0a0a0d", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                fontFamily: "Playfair Display, serif",
                marginBottom: 12,
                color: "#f0ece3",
              }}
            >
              The PPGL NP Calendar — 12 Months, Six Coordination Phases
            </h2>
            <p style={{ textAlign: "center", color: "#a0998e", marginBottom: 56, fontSize: "0.97rem" }}>
              From biochemical workup education through PRRT intake — every NP-led touchpoint sequenced.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => (
                <div
                  key={item.month}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    gap: 24,
                    background: "#131318",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14,
                    padding: "24px 28px",
                    alignItems: "start",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "#c5a35c",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: 4,
                      }}
                    >
                      {item.month}
                    </div>
                    <div style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.97rem", lineHeight: 1.4 }}>
                      {item.title}
                    </div>
                  </div>
                  <p style={{ color: "#a0998e", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                fontFamily: "Playfair Display, serif",
                marginBottom: 48,
                color: "#f0ece3",
              }}
            >
              The 6 KPIs That Define PPGL NP Excellence
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
              {kpis.map((kpi) => (
                <div
                  key={kpi.target}
                  style={{
                    background: "#131318",
                    border: "1px solid rgba(197,163,92,0.2)",
                    borderRadius: 14,
                    padding: "28px 22px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(1.4rem,2.5vw,1.9rem)",
                      fontWeight: 700,
                      color: "#c5a35c",
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 6,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "#f0ece3", fontWeight: 600, marginBottom: 8 }}>
                    {kpi.target}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#a0998e", lineHeight: 1.5 }}>{kpi.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ background: "#0e0e12", padding: "72px 24px" }}>
          <blockquote style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", color: "#c5a35c", marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
            <p
              style={{
                fontSize: "clamp(1rem,2vw,1.2rem)",
                color: "#f0ece3",
                lineHeight: 1.7,
                fontStyle: "italic",
                marginBottom: 28,
              }}
            >
              {testimonial.quote}
            </p>
            <footer>
              <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>{testimonial.name}</div>
              <div style={{ color: "#a0998e", fontSize: "0.88rem", marginTop: 4 }}>{testimonial.title}</div>
            </footer>
          </blockquote>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
