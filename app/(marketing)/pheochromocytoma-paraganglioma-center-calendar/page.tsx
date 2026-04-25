import type { Metadata } from "next"
import { Stethoscope, Shield, ClipboardList, Users2, Database, Heart, Target, Bell } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pheochromocytoma & Paraganglioma Center Calendar | Momenties",
  description:
    "Comprehensive scheduling for PPGL centers — plasma/urine metanephrines and chromogranin A workup, MIBG and DOTATATE PET imaging, phenoxybenzamine/doxazosin alpha-blockade 10–14 days pre-op, laparoscopic vs open adrenalectomy coordination, SDH/VHL/RET/NF1 genetic counseling, and lifelong biochemical surveillance for SDHB-related metastatic risk.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Biochemical Testing & Catecholamine Workup",
    description:
      "Coordinate plasma free metanephrines and 24-hour urine fractionated metanephrines and catecholamines as first-line biochemical confirmation, chromogranin A as adjunctive marker, clonidine suppression testing for equivocal cases, and imaging triage with adrenal-protocol CT/MRI followed by 123I-MIBG scintigraphy or 68Ga-DOTATATE PET/CT for extra-adrenal, multifocal, or metastatic disease localization. Sequenced ordering, fasting and supine collection windows, and medication washout (tricyclics, labetalol, acetaminophen) are scheduled into a single pre-analytic workflow so false positives are minimized and definitive diagnosis is reached on the first pass.",
  },
  {
    icon: Shield,
    title: "Pre-operative Alpha-Blockade Management",
    description:
      "Schedule mandatory 10–14 day phenoxybenzamine or selective alpha-1 doxazosin titration with daily home blood pressure logs, orthostatic vitals, target supine BP <130/80 and standing systolic >90, liberal sodium loading 5,000 mg/day starting day 3, and beta-blocker (propranolol or metoprolol) added only after adequate alpha-blockade to prevent hypertensive crisis. Cardiology clearance, echocardiogram for catecholamine cardiomyopathy screening, anesthesia pre-op consultation, and PACU/ICU bed reservation are all sequenced backward from the surgical date.",
  },
  {
    icon: Heart,
    title: "Surgical Coordination & Perioperative Care",
    description:
      "Coordinate laparoscopic transperitoneal or posterior retroperitoneoscopic adrenalectomy for tumors <6 cm versus open adrenalectomy or thoracoabdominal approach for large, invasive, or extra-adrenal paragangliomas, including head and neck carotid body and jugulotympanic tumors requiring multidisciplinary ENT/vascular/neurosurgery input. Intraoperative blood pressure lability protocols, post-resection glucose and hypotension monitoring, ICU recovery 24–48 hours, and 2-week and 6-week post-operative biochemical re-testing to confirm resection completeness are all scheduled as one connected pathway.",
  },
  {
    icon: Database,
    title: "Genetic Counseling & Lifelong Surveillance",
    description:
      "Schedule germline testing for SDHA/SDHB/SDHC/SDHD/SDHAF2, VHL, RET, NF1, MAX, and TMEM127 mutations on every PPGL patient regardless of family history per Endocrine Society guidelines, with formal genetic counseling, cascade testing for at-risk first-degree relatives, and SDHB-specific malignant risk discussion. Lifelong annual plasma metanephrines, biennial whole-body MRI for SDHx carriers, and 5-year multidisciplinary review with endocrinology, oncology, and surgery are sequenced so no surveillance interval is ever missed.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Biochemical Confirmation & Imaging Localization",
    description:
      "Plasma free metanephrines and 24-hour urine fractionated metanephrines drawn under standardized supine fasting conditions with offending medications held; chromogranin A as adjunct; adrenal-protocol CT or MRI with and without contrast for primary localization; 123I-MIBG scintigraphy or 68Ga-DOTATATE PET/CT for multifocal, extra-adrenal, or suspected metastatic disease.",
  },
  {
    month: "Month 3–4",
    title: "Genetic Counseling & Multidisciplinary Tumor Board",
    description:
      "Formal genetic counseling with SDHx/VHL/RET/NF1/MAX/TMEM127 germline panel ordered for every confirmed PPGL patient; multidisciplinary tumor board review including endocrinology, endocrine surgery, oncology, radiology, and pathology; cardiology and anesthesia consultation initiated; baseline echocardiogram for catecholamine cardiomyopathy screening.",
  },
  {
    month: "Month 5–6",
    title: "Pre-operative Alpha-Blockade Initiation",
    description:
      "Phenoxybenzamine 10 mg BID titrated upward every 2–3 days, or doxazosin 2 mg daily titrated to 8–16 mg, started a minimum of 10–14 days before surgery; daily home BP logs reviewed; sodium loading 5,000 mg/day from day 3; beta-blocker added only after adequate alpha-blockade; final pre-op clearance and OR booking confirmed.",
  },
  {
    month: "Month 7–8",
    title: "Surgical Resection & Perioperative Recovery",
    description:
      "Laparoscopic or posterior retroperitoneoscopic adrenalectomy for adrenal pheochromocytomas <6 cm, open or thoracoabdominal resection for paragangliomas and large invasive tumors, head and neck multidisciplinary surgery for carotid body and jugulotympanic paragangliomas; intraoperative hemodynamic protocol; ICU recovery 24–48 hours; post-resection glucose and hypotension monitoring.",
  },
  {
    month: "Month 9–10",
    title: "Post-operative Biochemical Confirmation",
    description:
      "2-week and 6-week post-operative plasma metanephrines and 24-hour urine fractionated metanephrines to confirm complete biochemical resection; surgical pathology review with PASS and GAPP scoring for malignancy risk; cascade genetic testing initiated for first-degree relatives of mutation-positive probands; transition to long-term surveillance plan.",
  },
  {
    month: "Month 11–12",
    title: "Lifelong Surveillance & PRRT Planning",
    description:
      "Annual plasma metanephrines for all PPGL patients; biennial whole-body MRI for SDHx mutation carriers; 5-year multidisciplinary review; for metastatic SDHB-driven disease, coordinate referral for 177Lu-DOTATATE peptide receptor radionuclide therapy (PRRT), CVD chemotherapy, or sunitinib clinical trial enrollment; annual cascade testing and family counseling updates.",
  },
]

const kpis = [
  {
    metric: "100%",
    target: "Germline Testing",
    description: "Every confirmed PPGL patient receives SDHx/VHL/RET/NF1/MAX/TMEM127 germline panel per Endocrine Society guidance.",
  },
  {
    metric: "≥10 days",
    target: "Alpha-Blockade Duration",
    description: "Minimum 10–14 day phenoxybenzamine or doxazosin titration before adrenalectomy or paraganglioma resection.",
  },
  {
    metric: "<5%",
    target: "Hypertensive Crisis Rate",
    description: "Intraoperative hypertensive crisis rate kept below 5% with adequate alpha-blockade and sodium loading protocol.",
  },
  {
    metric: "Annual",
    target: "Biochemical Surveillance",
    description: "Lifelong annual plasma metanephrines for all PPGL survivors and SDHx carriers, never missed.",
  },
  {
    metric: "Biennial",
    target: "SDHx Whole-Body MRI",
    description: "SDHB and SDHD carriers receive biennial whole-body MRI for early detection of metachronous tumors.",
  },
  {
    metric: "≥95%",
    target: "Tumor Board Review",
    description: "Every PPGL case reviewed at multidisciplinary tumor board within 30 days of biochemical confirmation.",
  },
]

const testimonial = {
  quote:
    "PPGL is a rare endocrine tumor with a long compliance tail — biochemical confirmation, MIBG and DOTATATE imaging, 10–14 day alpha-blockade titration, surgical scheduling, germline testing for SDHx/VHL/RET/NF1, cascade family testing, and lifelong annual metanephrines for SDHB carriers because of metastatic risk. Momenties consolidated every interval into a single calendar. We have not missed a surveillance window in over a year, and our hypertensive crisis rate at adrenalectomy is now under 3%.",
  name: "Dr. P. Neumann",
  title: "PPGL Program Director, Endocrine Surgery Center",
}

export default function PheochromocytomaParagangliomaCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh", color: "#f0ece3", fontFamily: "DM Sans, sans-serif" }}>
      <PageHero
        eyebrow="Pheochromocytoma & Paraganglioma Center Calendar"
        title="PPGL Center — Biochemical, Imaging & Surgical Scheduling Calendar"
        subtitle="Comprehensive scheduling for pheochromocytoma and paraganglioma centers — catecholamine workup coordination, pre-operative alpha-blockade management, surgical scheduling, genetic counseling for SDHx mutations, and lifelong surveillance programs."
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
            Built for the Full PPGL Care Continuum
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
              The PPGL Care Calendar — 12 Months, Six Phases
            </h2>
            <p style={{ textAlign: "center", color: "#a0998e", marginBottom: 56, fontSize: "0.97rem" }}>
              From biochemical confirmation through lifelong SDHx surveillance — every interval sequenced.
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
              The 6 KPIs That Define a PPGL Center of Excellence
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
