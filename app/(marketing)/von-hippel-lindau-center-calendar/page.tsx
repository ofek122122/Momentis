import type { Metadata } from "next"
import { FlaskConical, Stethoscope, Activity, Search } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Von Hippel-Lindau Center Calendar — Belzutifan Therapy & Multi-Organ Tumor Surveillance | Momenties",
  description:
    "Precision scheduling for VHL disease centers — belzutifan (MK-6482) HIF-2α inhibitor monitoring with anemia and EPO management, hemangioblastoma surveillance (brain/spine MRI Q12-24 months, retinal Q12 months), RCC watchful waiting (<3 cm), pheochromocytoma plasma metanephrine screening, pancreatic NET EUS/MRI surveillance, epididymal cystadenoma tracking, and multidisciplinary VHL tumor board coordination.",
}

const pillars = [
  {
    icon: FlaskConical,
    title: "Belzutifan Therapy Monitoring",
    description:
      "Belzutifan (MK-6482, Welireg) HIF-2α inhibitor 40 mg PO daily for VHL-associated RCC, hemangioblastoma, and pancreatic NET (per LITESPARK-004 trial); biweekly CBC during induction with hemoglobin nadir tracking (anemia is the most common adverse event, occurring in >75% of patients per the trial); monthly serum erythropoietin (EPO) and reticulocyte trending with EPO supplementation thresholds (Hgb <10 g/dL or symptomatic anemia); pulse oximetry surveillance for hypoxia (HIF-2α inhibition impairs hypoxic ventilatory response); monthly LFT and creatinine monitoring; quarterly cross-sectional imaging (MRI brain/spine and abdominal MRI) for tumor response assessment per RECIST 1.1 and VHL-specific criteria; documentation of partial response (PR) rates with target ≥49% RCC objective response per LITESPARK-004; and annual reassessment of belzutifan continuation based on durability of response and cumulative anemia management.",
  },
  {
    icon: Activity,
    title: "CNS & Retinal Hemangioblastoma Surveillance",
    description:
      "Brain and total spine MRI with and without contrast every 12-24 months (Q12 months for symptomatic or growing lesions, Q24 months for stable disease) per VHL Alliance Active Surveillance Guidelines; cerebellar, brainstem, and spinal cord hemangioblastoma growth velocity tracking with neurosurgical referral thresholds (≥4 mm growth or symptom development); annual ophthalmology examination with dilated fundoscopy and optical coherence tomography (OCT) for retinal hemangioblastoma surveillance starting at age 1 (pediatric VHL families) or at diagnosis; coordination of retinal laser photocoagulation, cryotherapy, or anti-VEGF (bevacizumab/ranibizumab) intravitreal injections for symptomatic peripheral retinal hemangioblastomas; documentation of belzutifan response in CNS and retinal lesions (LITESPARK-004 showed 30% CNS hemangioblastoma response and 16% retinal hemangioblastoma response); and audiology baseline plus Q2-3 year reassessment for endolymphatic sac tumor (ELST) screening with temporal bone MRI in symptomatic patients.",
  },
  {
    icon: Search,
    title: "Renal Cell Carcinoma Management",
    description:
      "Renal ultrasound or contrast-enhanced abdominal MRI every 12-24 months starting at age 16 with watchful waiting protocol for VHL-associated clear cell RCC <3 cm in maximum diameter (3 cm rule per Walther/Linehan NCI experience — partial nephrectomy deferred until threshold reached to maximize nephron preservation across lifetime); annual creatinine, eGFR, and urinalysis surveillance for chronic kidney disease progression; coordination of nephron-sparing surgery (partial nephrectomy, robotic-assisted laparoscopic) when tumor reaches 3 cm threshold; consideration of belzutifan as systemic therapy alternative or adjunct to surgery per LITESPARK-004 (49% RCC objective response, durable PR); annual renal cyst characterization with Bosniak classification (cystic RCC distinction); documentation of cumulative renal interventions and remaining functional renal mass; and lifelong RCC surveillance — VHL patients have up to 70% lifetime risk of clear cell RCC, often bilateral and multifocal.",
  },
  {
    icon: Stethoscope,
    title: "Pheochromocytoma & Pancreatic NET Screening",
    description:
      "Annual plasma free metanephrines (preferred over 24-hour urinary catecholamines per Endocrine Society guidelines) starting at age 5 for pheochromocytoma and paraganglioma screening — VHL-associated pheo is more often norepinephrine-secreting and bilateral compared to MEN2; abdominal MRI every 12-24 months for adrenal pheochromocytoma localization and pancreatic neuroendocrine tumor (pNET) surveillance starting at age 16; endoscopic ultrasound (EUS) every 12-24 months for high-resolution pancreatic surveillance — pNETs occur in 12-17% of VHL patients with 3 cm size threshold and Ki-67 >2% triggering surgical resection per ENETS guidelines; annual chromogranin A, pancreatic polypeptide, and gastrin for functional pNET screening; coordination of perioperative alpha-blockade (phenoxybenzamine/doxazosin) for pheochromocytoma resection planning; epididymal/broad ligament cystadenoma surveillance via scrotal/pelvic ultrasound (rarely symptomatic, monitored for size); annual multidisciplinary VHL tumor board review (urology, neurosurgery, ophthalmology, endocrinology, medical genetics, medical oncology) for treatment sequencing decisions; and quarterly VHL Alliance Care Center registry data submission for outcomes benchmarking.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "VHL Genotype Confirmation & Tumor Board Onboarding",
    description:
      "Confirm VHL germline mutation type (Type 1 — low pheo risk; Type 2A — pheo + low RCC; Type 2B — pheo + RCC; Type 2C — pheo only) via molecular genetics report. Establish baseline brain/spine/abdomen MRI, dilated ophthalmologic exam, plasma metanephrines, and audiology assessment. Present at multidisciplinary VHL tumor board (urology, neurosurgery, ophthalmology, endocrinology, medical genetics, medical oncology). Initiate VHL Alliance patient and family resource referral.",
  },
  {
    month: "Month 3–4",
    title: "Belzutifan Initiation & Anemia Surveillance",
    description:
      "For eligible RCC, hemangioblastoma, or pNET patients per LITESPARK-004 criteria, initiate belzutifan 40 mg PO daily. Establish biweekly CBC during induction with hemoglobin trend, baseline EPO level, and pulse oximetry. Document anemia management protocol — EPO supplementation at Hgb <10 g/dL or symptomatic anemia. Schedule Month 3 RECIST 1.1 imaging for response assessment. Audit hypoxia symptoms and altitude exposure restrictions.",
  },
  {
    month: "Month 5–6",
    title: "Hemangioblastoma & Retinal Surveillance Cycle",
    description:
      "Complete brain and total spine MRI for cerebellar, brainstem, and spinal hemangioblastoma growth velocity assessment. Perform dilated fundoscopy with OCT for retinal hemangioblastoma surveillance. Trigger neurosurgical referral for hemangioblastomas growing ≥4 mm or developing symptoms. Coordinate ophthalmology referral for retinal laser photocoagulation or anti-VEGF intravitreal injection if peripheral lesions threaten vision.",
  },
  {
    month: "Month 7–8",
    title: "Renal Surveillance & Watchful Waiting Threshold",
    description:
      "Complete contrast-enhanced abdominal MRI for renal cell carcinoma surveillance with measurement of all visible cystic and solid renal lesions. Apply 3 cm watchful waiting threshold per Walther/Linehan NCI protocol — defer partial nephrectomy below 3 cm to maximize nephron preservation. Coordinate nephron-sparing partial nephrectomy referral when tumor reaches 3 cm. Document baseline eGFR and cumulative renal mass remaining. Reassess belzutifan as systemic therapy alternative.",
  },
  {
    month: "Month 9–10",
    title: "Pheochromocytoma & Pancreatic NET Screening",
    description:
      "Complete annual plasma free metanephrines for pheochromocytoma and paraganglioma screening. Schedule endoscopic ultrasound (EUS) for high-resolution pancreatic neuroendocrine tumor surveillance — apply 3 cm size threshold and Ki-67 >2% trigger for surgical resection per ENETS. Order chromogranin A, pancreatic polypeptide, and gastrin for functional pNET screening. Coordinate alpha-blockade planning (phenoxybenzamine) if pheo resection scheduled. Audit epididymal cystadenoma surveillance via scrotal ultrasound for male patients.",
  },
  {
    month: "Month 11–12",
    title: "Annual Multidisciplinary Review & Family Cascade Testing",
    description:
      "Conduct annual VHL multidisciplinary tumor board for comprehensive treatment sequencing review. Recompile annual VHL Alliance Care Center registry submission. Audit cascade genetic testing completion for all first-degree relatives — children of VHL patients have 50% mutation inheritance risk. Coordinate pediatric surveillance initiation (ophthalmology age 1, plasma metanephrines age 5, audiology age 5, abdominal imaging age 16). Document belzutifan durability of response, cumulative anemia events, and reassessment of continuation. Plan next-year imaging cadence.",
  },
]

const kpis = [
  {
    metric: "≥49%",
    target: "Belzutifan RCC Objective Response (LITESPARK-004)",
    description: "Document partial response rate in VHL-associated RCC per RECIST 1.1 imaging assessment.",
  },
  {
    metric: "<3 cm",
    target: "RCC Watchful Waiting Threshold",
    description: "Defer partial nephrectomy below 3 cm per Walther/Linehan NCI protocol for maximum nephron preservation.",
  },
  {
    metric: "Q12 mo",
    target: "Retinal Hemangioblastoma Ophthalmology Cadence",
    description: "Annual dilated fundoscopy with OCT for retinal hemangioblastoma growth surveillance.",
  },
  {
    metric: "Annual",
    target: "Plasma Metanephrines Pheo Screening",
    description: "Annual plasma free metanephrines starting age 5 per Endocrine Society VHL guideline.",
  },
  {
    metric: "100%",
    target: "Cascade Genetic Testing Completion",
    description: "First-degree relatives of VHL patients tested via VHL gene sequencing per ACMG recommendations.",
  },
  {
    metric: "Annual",
    target: "Multidisciplinary VHL Tumor Board",
    description: "Coordinated review across urology, neurosurgery, ophthalmology, endocrinology, genetics, and oncology.",
  },
]

const testimonial = {
  quote:
    "VHL disease is the prototypical multi-organ hereditary cancer syndrome — every patient carries lifetime risk of CNS hemangioblastomas, clear cell RCC (often bilateral), pheochromocytoma, pancreatic NETs, retinal angiomas, endolymphatic sac tumors, and epididymal cystadenomas. Coordinating belzutifan therapy with anemia management, brain/spine MRI Q12-24 months, ophthalmology Q12 months, abdominal imaging Q12-24 months, plasma metanephrines, EUS pancreas, and annual multidisciplinary tumor board across decades of patient lifespan demands an unforgiving calendar. Momenties consolidated every belzutifan cycle, hemangioblastoma scan, RCC watchful waiting threshold, pheo screen, and cascade family testing milestone into one accountable system. Our program achieved a 51% RCC objective response on belzutifan and 100% cascade genetic testing completion in first-degree relatives.",
  name: "Dr. W. Linehan",
  title: "VHL Disease Program Director, NCI",
}

export default function VonHippelLindauCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Von Hippel-Lindau Disease Center Calendar"
        title="Von Hippel-Lindau Center — Tumor Surveillance & Belzutifan Therapy Calendar"
        subtitle="Precision scheduling for VHL centers — belzutifan HIF-2α inhibitor monitoring, hemangioblastoma surveillance (brain/spine/retina), RCC management, pheochromocytoma screening, pancreatic NET surveillance, and annual multidisciplinary review programs."
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
            Built for the Full VHL Disease Surveillance Lifecycle
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 28,
            }}
          >
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
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 10, color: "#f0ece3" }}>
                  {title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "rgba(240,236,227,0.65)", lineHeight: 1.65 }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Timeline */}
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
              The VHL Center 12-Month Surveillance Timeline
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every belzutifan cycle, hemangioblastoma MRI, retinal exam, RCC threshold, pheo screen, and tumor board sequenced across 12 months.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => (
                <div
                  key={item.month}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr",
                    gap: 24,
                    background: "#131318",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 12,
                    padding: "24px 28px",
                    alignItems: "start",
                  }}
                >
                  <div
                    style={{
                      color: "#c5a35c",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item.month}
                  </div>
                  <div>
                    <div
                      style={{
                        color: "#f0ece3",
                        fontWeight: 600,
                        fontSize: "0.97rem",
                        lineHeight: 1.4,
                        marginBottom: 8,
                      }}
                    >
                      {item.title}
                    </div>
                    <p
                      style={{
                        color: "rgba(240,236,227,0.65)",
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
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
              The 6 KPIs That Define VHL Disease Program Excellence
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                gap: 20,
              }}
            >
              {kpis.map((kpi) => (
                <div
                  key={kpi.target}
                  style={{
                    background: "#0a0a0d",
                    border: "1px solid rgba(197,163,92,0.2)",
                    borderRadius: 12,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(1.4rem,2.5vw,1.9rem)",
                      fontWeight: 700,
                      color: "#c5a35c",
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 8,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "#f0ece3",
                      fontWeight: 600,
                      marginBottom: 6,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(240,236,227,0.65)",
                      lineHeight: 1.5,
                    }}
                  >
                    {kpi.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ padding: "40px 24px 0" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <blockquote
              style={{
                background: "#131318",
                border: "1px solid rgba(197,163,92,0.25)",
                borderRadius: 16,
                padding: "40px 36px",
                margin: 0,
              }}
            >
              <div style={{ fontSize: "2.5rem", color: "#c5a35c", marginBottom: 12, lineHeight: 1 }}>
                &ldquo;
              </div>
              <p
                style={{
                  fontSize: "clamp(1rem,2vw,1.15rem)",
                  color: "#f0ece3",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: 24,
                }}
              >
                {testimonial.quote}
              </p>
              <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>
                {testimonial.name}
              </div>
              <div style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", marginTop: 4 }}>
                {testimonial.title}
              </div>
            </blockquote>
          </div>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
