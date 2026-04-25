import type { Metadata } from "next"
import { Stethoscope, Activity, Search, Users2 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "VHL Nurse Practitioners — Hereditary Cancer Surveillance & Belzutifan Calendar | Momenties",
  description:
    "Built for NPs coordinating Von Hippel-Lindau disease care — belzutifan toxicity monitoring (anemia, hypoxia, fatigue), EPO supplementation, ophthalmology and neurosurgery coordination, renal ultrasound interpretation and surgical referral triggers, plasma metanephrine result communication, GI coordination for pancreatic NET surveillance, VHL Alliance referrals, cascade genetic testing for first-degree relatives, and pregnancy considerations with VHL.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Belzutifan Coordination & Monitoring",
    description:
      "NP-led belzutifan (MK-6482, Welireg) 40 mg PO daily coordination for VHL-associated RCC, CNS hemangioblastoma, and pancreatic NET per LITESPARK-004 protocol; biweekly CBC review during induction with anemia grading per CTCAE v5.0 (Grade 1 Hgb <LLN-10 g/dL, Grade 2 Hgb 8-10 g/dL, Grade 3 Hgb <8 g/dL); EPO supplementation dose adjustment (epoetin alfa 40,000 units SC weekly or darbepoetin alfa 200 mcg SC q2wk) per K/DOQI anemia guidelines with target Hgb 10-11 g/dL; pulse oximetry surveillance for hypoxia (HIF-2α inhibition impairs hypoxic ventilatory response — patients should be counseled on altitude exposure and exercise tolerance); fatigue assessment via FACIT-Fatigue scale; monthly comprehensive metabolic panel for LFT and creatinine trending; quarterly imaging response review with medical oncology; and patient education on belzutifan adherence, anemia symptom recognition, and embryo-fetal toxicity contraception requirements (pregnancy contraindicated on belzutifan).",
  },
  {
    icon: Activity,
    title: "CNS & Ophthalmology Surveillance",
    description:
      "NP coordination of brain and total spine MRI Q12-24 months per VHL Alliance Active Surveillance Guidelines with results interpretation alongside neuroradiology and neurosurgery; tracking of cerebellar, brainstem, and spinal cord hemangioblastoma growth velocity with neurosurgical referral triggers (≥4 mm growth, peritumoral cyst expansion, or new neurologic symptoms); coordination of annual ophthalmology dilated fundoscopy with optical coherence tomography (OCT) for retinal hemangioblastoma surveillance; timing of retinal laser photocoagulation, cryotherapy, or anti-VEGF (bevacizumab/ranibizumab) intravitreal injection referrals based on lesion location, size, and exudation; audiology baseline plus Q2-3 year reassessment with temporal bone MRI for endolymphatic sac tumor (ELST) screening if hearing loss, vertigo, or tinnitus develops; documentation of belzutifan response in CNS and retinal lesions per LITESPARK-004 (30% CNS hemangioblastoma response, 16% retinal response); and patient education on neurologic and visual warning signs requiring urgent evaluation.",
  },
  {
    icon: Search,
    title: "Renal & Pancreatic Surveillance",
    description:
      "NP-led abdominal MRI or renal ultrasound interpretation Q12-24 months with measurement of all visible renal cystic and solid lesions (Bosniak classification) and application of the 3 cm watchful waiting threshold for clear cell RCC per Walther/Linehan NCI protocol — surgical referral triggered when tumor reaches 3 cm; coordination of partial nephrectomy (robotic-assisted laparoscopic preferred) referral with urologic oncology to maximize nephron preservation across patient lifetime; annual creatinine, eGFR, urinalysis, and cumulative renal mass documentation; endoscopic ultrasound (EUS) coordination Q12-24 months with gastroenterology for high-resolution pancreatic neuroendocrine tumor (pNET) surveillance — surgical referral threshold 3 cm or Ki-67 >2% per ENETS; functional pNET screening with chromogranin A, pancreatic polypeptide, and gastrin; and counseling on imaging-related contrast allergies, sedation requirements for EUS, and post-partial nephrectomy renal function follow-up.",
  },
  {
    icon: Users2,
    title: "Genetic Counseling & Family Screening",
    description:
      "NP coordination of VHL Alliance Care Center patient and family resource referral with educational materials, peer support, and clinical trial registry access; cascade genetic testing facilitation for all first-degree relatives (children, siblings, parents) — VHL has autosomal dominant inheritance with 50% offspring risk and complete penetrance by age 65; coordination of pediatric surveillance initiation per VHL Alliance Pediatric Guidelines (ophthalmology age 1, audiology age 5, plasma metanephrines age 5, abdominal imaging age 16, brain/spine MRI age 8-11); plasma free metanephrine result communication with pheochromocytoma referral protocols (norepinephrine-secreting bilateral pheo more common in VHL than in MEN2); pregnancy planning counseling including hemangioblastoma growth risk during pregnancy (hormonal and hemodynamic factors), preconception MRI, multidisciplinary maternal-fetal medicine coordination, and postpartum surveillance acceleration; preimplantation genetic diagnosis (PGD) referral discussion for affected couples wishing to avoid VHL transmission; and life insurance/employment GINA (Genetic Information Nondiscrimination Act) education for genetically tested patients.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "VHL Genotype Review & Family Mapping",
    description:
      "Review patient VHL germline mutation type (Type 1, 2A, 2B, 2C) and correlate with predicted tumor risk profile. Construct three-generation pedigree with cascade testing status for all first-degree relatives. Schedule VHL Alliance Care Center referral and patient education session. Establish surveillance baseline — brain/spine MRI, dilated ophthalmologic exam, abdominal imaging, plasma metanephrines, audiology. Document pediatric family member surveillance gaps for proactive scheduling.",
  },
  {
    month: "Month 3–4",
    title: "Belzutifan Initiation & Anemia Management",
    description:
      "For eligible patients per LITESPARK-004 criteria, coordinate belzutifan 40 mg PO daily initiation. Establish biweekly CBC during induction with hemoglobin trending. Review baseline EPO, ferritin, B12, and folate — rule out alternative anemia etiologies. Initiate epoetin alfa or darbepoetin alfa per K/DOQI thresholds. Counsel on hypoxia symptoms (dyspnea on exertion, altitude intolerance) and fatigue management. Document FACIT-Fatigue baseline. Reinforce contraception requirements — embryo-fetal toxicity contraindicates pregnancy.",
  },
  {
    month: "Month 5–6",
    title: "CNS, Spine & Retinal Surveillance",
    description:
      "Coordinate brain and total spine MRI for cerebellar, brainstem, and spinal cord hemangioblastoma surveillance. Apply growth velocity threshold (≥4 mm or new neurologic symptoms) for neurosurgical referral. Schedule ophthalmology dilated fundoscopy with OCT. Coordinate timing of retinal laser, cryotherapy, or anti-VEGF intravitreal injection if peripheral retinal hemangioblastomas threaten vision. Document audiology and ELST screening for symptomatic patients. Reinforce neurologic and visual warning signs requiring urgent evaluation.",
  },
  {
    month: "Month 7–8",
    title: "Renal Surveillance & Surgical Referral Triggers",
    description:
      "Review abdominal MRI for renal cell carcinoma surveillance — measure all renal lesions and apply 3 cm watchful waiting threshold per Walther/Linehan protocol. Coordinate urologic oncology partial nephrectomy referral when tumor reaches 3 cm to maximize nephron preservation. Document baseline eGFR and remaining functional renal mass. Reassess belzutifan as systemic therapy alternative or adjunct. Audit prior renal interventions and cumulative nephron loss.",
  },
  {
    month: "Month 9–10",
    title: "Pheochromocytoma & Pancreatic NET Coordination",
    description:
      "Communicate annual plasma free metanephrine results with pheochromocytoma referral if elevated (>2x ULN or symptomatic). Coordinate endoscopic ultrasound (EUS) with gastroenterology for pancreatic neuroendocrine tumor surveillance — surgical referral at 3 cm or Ki-67 >2% per ENETS. Order chromogranin A, pancreatic polypeptide, and gastrin for functional pNET screening. Coordinate alpha-blockade education (phenoxybenzamine titration) if pheo resection planned. Audit epididymal/broad ligament cystadenoma surveillance via scrotal/pelvic ultrasound.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review, Pregnancy Planning & Cascade Testing",
    description:
      "Conduct annual VHL Alliance Care Center registry submission. Review pregnancy planning for reproductive-age patients — preconception MRI, hemangioblastoma growth risk counseling, maternal-fetal medicine coordination, and PGD discussion. Audit cascade genetic testing completion for all first-degree relatives. Coordinate pediatric surveillance initiation milestones (ophthalmology age 1, audiology age 5, metanephrines age 5, abdominal imaging age 16). Document belzutifan durability of response and reassessment of continuation. Update GINA counseling and employment/insurance considerations.",
  },
]

const kpis = [
  {
    metric: "100%",
    target: "Cascade Genetic Testing in First-Degree Relatives",
    description: "VHL gene sequencing offered to all eligible relatives per ACMG guidance — 50% inheritance risk.",
  },
  {
    metric: "Hgb ≥10",
    target: "Belzutifan Anemia Management Target",
    description: "Maintain Hgb ≥10 g/dL via EPO supplementation and dose modification per K/DOQI thresholds.",
  },
  {
    metric: "Q12 mo",
    target: "Ophthalmology Retinal Surveillance",
    description: "Annual dilated fundoscopy with OCT for retinal hemangioblastoma growth and exudation tracking.",
  },
  {
    metric: "<3 cm",
    target: "RCC Watchful Waiting Threshold",
    description: "Surgical referral coordinated when clear cell RCC reaches 3 cm per Walther/Linehan protocol.",
  },
  {
    metric: "Annual",
    target: "Plasma Metanephrines Pheo Screening",
    description: "Pheochromocytoma screening starting age 5 with referral protocols for elevated results.",
  },
  {
    metric: "100%",
    target: "VHL Alliance Patient Resource Referral",
    description: "Every newly diagnosed VHL patient receives VHL Alliance Care Center education and peer support.",
  },
]

const testimonial = {
  quote:
    "VHL nurse practitioners coordinate one of the most multi-system hereditary cancer syndromes in clinical practice. Every patient requires lifelong surveillance across CNS hemangioblastomas, clear cell RCC, pheochromocytoma, pancreatic NETs, retinal angiomas, endolymphatic sac tumors, and epididymal cystadenomas — plus belzutifan toxicity monitoring with anemia management, EPO supplementation, hypoxia counseling, and embryo-fetal contraception. Layered onto that is cascade genetic testing for every first-degree relative, pediatric surveillance initiation milestones, pregnancy planning with hemangioblastoma growth risk, and VHL Alliance patient resource coordination. Momenties consolidates every belzutifan CBC, MRI cadence, retinal exam, RCC threshold, plasma metanephrine, EUS pancreas, and family cascade test into a single calendar. Our hereditary cancer NP team achieved 100% cascade testing completion and Hgb ≥10 g/dL maintenance in 91% of belzutifan patients.",
  name: "Jennifer K., AGPCNP-BC",
  title: "Hereditary Cancer NP, Renal Oncology Program",
}

export default function VonHippelLindauNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="VHL Nurse Practitioners"
        title="VHL Nurse Practitioners — Scheduling for a Complex Hereditary Tumor Syndrome"
        subtitle="Designed for NPs coordinating VHL disease care — from belzutifan monitoring and anemia management to multi-organ surveillance coordination, genetic counseling referrals, and annual multidisciplinary reviews."
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
            Built for the Full VHL Nurse Practitioner Workflow
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
              The VHL NP 12-Month Coordination Timeline
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every belzutifan check, hemangioblastoma scan, retinal exam, RCC threshold, pheo screen, and family cascade test sequenced across 12 months.
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
              The 6 KPIs That Define VHL NP Practice Excellence
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
