import type { Metadata } from "next"
import { Stethoscope, Heart, Database, Users2 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "HHT Center Calendar | Momenties",
  description:
    "Comprehensive scheduling for HHT centers — pulmonary AVM screening and embolization, hepatic AVM surveillance, cerebral AVM management, epistaxis treatment coordination, iron deficiency management, and annual multidisciplinary HHT reviews.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Pulmonary AVM Screening & Embolization",
    description:
      "Coordinate baseline and surveillance pulmonary AVM (PAVM) screening with transthoracic contrast (bubble) echocardiography to detect right-to-left shunts and grade shunt severity, plus low-dose chest CT for anatomic localization and feeding artery measurement. Schedule interventional radiology embolotherapy (coil or vascular plug) for any PAVM with feeding artery >=3 mm, with structured pre-procedure antibiotic prophylaxis education and post-embolization paradoxical embolic precautions. Run 6- and 12-month post-embolization follow-up CT to confirm occlusion and detect reperfusion or de novo PAVMs. Maintain lifelong every-3-to-5-year PAVM re-screening cadence per HHT Foundation International VASCERN guidelines, with accelerated cadence during pregnancy and adolescence when AVMs grow rapidly.",
  },
  {
    icon: Heart,
    title: "Hepatic & Cerebral AVM Surveillance",
    description:
      "Schedule baseline brain MRI with and without contrast for cerebral AVM (CAVM) detection at HHT diagnosis, with neurosurgery and neurointerventional radiology coordination for treatable lesions and structured re-imaging cadence after first-time scans for genetically confirmed but radiographically negative patients. Run hepatic AVM surveillance with Doppler ultrasound and contrast-enhanced CT or MRI to detect arteriovenous, arterioportal, and portovenous shunts that drive high-output cardiac failure, biliary ischemia, and portal hypertension. Coordinate hepatology, cardiology, and transplant evaluation for symptomatic hepatic HHT. Track right heart catheterization, BNP/NT-proBNP, and echocardiogram cadence in patients with high-output features.",
  },
  {
    icon: Database,
    title: "Epistaxis Management & Iron Repletion",
    description:
      "Run a structured epistaxis frequency, duration, and severity diary (Epistaxis Severity Score / ESS) at every visit and align it with iron studies, ferritin, and transferrin saturation trending. Coordinate stepwise epistaxis management — humidification and saline gels, topical tranexamic acid, sclerotherapy, KTP/Nd-YAG laser ablation, and septodermoplasty when indicated — with otolaryngology partners. Schedule bevacizumab IV systemic therapy for refractory epistaxis, hepatic HHT high-output failure, and bleeding-associated PAVM phenotypes per international expert consensus, with structured blood-pressure, proteinuria, and wound-healing surveillance. Track tranexamic acid, thalidomide, and pazopanib alternatives. Coordinate IV iron infusion scheduling (ferric carboxymaltose, iron sucrose, low-molecular-weight iron dextran) for transfusion avoidance and hemoglobin restoration.",
  },
  {
    icon: Users2,
    title: "Genetic Counseling & Family Screening",
    description:
      "Coordinate genetic counseling visits and ACVRL1, ENG, and SMAD4 mutation testing for index cases and at-risk first-degree relatives, with cascade screening across siblings, parents, and children. Run SMAD4-specific juvenile polyposis surveillance (colonoscopy and upper endoscopy) for combined JP-HHT patients. Document Curacao clinical criteria (recurrent epistaxis, mucocutaneous telangiectasia, visceral AVMs, family history) for diagnosis confirmation. Maintain HHT Foundation International VASCERN center-of-excellence reporting cadence and connect families to Cure HHT patient advocacy resources, peer-mentorship pairings, and clinical-trial outreach. Schedule annual multidisciplinary HHT review pulling together pulmonology, hepatology, neurology, otolaryngology, hematology, and genetics.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis Confirmation & Baseline Imaging",
    description:
      "Complete new-patient HHT intake with Curacao clinical criteria scoring, family pedigree, and ACVRL1/ENG/SMAD4 mutation testing through the genetic counseling clinic. Coordinate baseline transthoracic contrast (bubble) echocardiography for PAVM screening, brain MRI with and without contrast for CAVM detection, and Epistaxis Severity Score (ESS) baseline. Order CBC, ferritin, transferrin saturation, and iron studies. Begin patient and family education on Curacao criteria, AVM types, and emergency warning signs. Connect family to Cure HHT patient advocacy and VASCERN HHT center resources.",
  },
  {
    month: "Month 3–4",
    title: "PAVM Embolization & First Iron Repletion",
    description:
      "For patients with bubble echo Grade 2-3 shunts, coordinate chest CT for PAVM mapping and schedule interventional radiology embolotherapy of any PAVM with feeding artery >=3 mm. Run pre-procedure antibiotic prophylaxis education and post-embolization paradoxical embolic precautions. Schedule first IV iron infusion cycle for symptomatic anemia and reinforce humidification, saline gel, and topical tranexamic acid epistaxis self-care. Begin SMAD4-specific colonoscopy and upper endoscopy planning for confirmed SMAD4 mutation carriers.",
  },
  {
    month: "Month 5–6",
    title: "Post-Embolization Follow-Up & Hepatic Surveillance",
    description:
      "Coordinate 6-month post-embolization low-dose chest CT to confirm PAVM occlusion and detect reperfusion or de novo lesions. Schedule hepatic AVM surveillance with Doppler ultrasound or contrast-enhanced MRI/CT, with cardiology echocardiography and BNP/NT-proBNP for high-output failure features. Trend hemoglobin, ferritin, and transferrin saturation against ESS to titrate iron repletion. Coordinate otolaryngology consultation for refractory epistaxis (sclerotherapy, KTP laser ablation, or septodermoplasty when indicated).",
  },
  {
    month: "Month 7–8",
    title: "Bevacizumab Coordination & Refractory Pathways",
    description:
      "For patients with refractory epistaxis, hepatic HHT high-output failure, or bleeding-associated PAVM phenotypes, coordinate bevacizumab IV initiation per international expert consensus with structured pre-infusion blood-pressure, proteinuria, and wound-healing surveillance. Track tranexamic acid, thalidomide, and pazopanib alternatives for patients ineligible for bevacizumab. Schedule mid-year ESS re-evaluation, IV iron repeat cycles, and cardiology re-imaging for high-output features. Update SMAD4 colonoscopy and EGD findings into the multidisciplinary chart.",
  },
  {
    month: "Month 9–10",
    title: "Cascade Family Screening & Pediatric Transition",
    description:
      "Run cascade genetic testing for first-degree relatives of confirmed ACVRL1, ENG, and SMAD4 carriers and coordinate counseling visits for newly identified at-risk family members. Schedule pediatric-to-adult HHT transition visits, with structured PAVM re-screening cadence given accelerated AVM growth in adolescence. Coordinate pregnancy planning visits for women of reproductive age, with PAVM re-screening pre-conception and during second trimester per VASCERN guidance. Continue ESS, hemoglobin, and ferritin trending.",
  },
  {
    month: "Month 11–12",
    title: "Annual Multidisciplinary HHT Review",
    description:
      "Coordinate annual multidisciplinary HHT review pulling together pulmonology, hepatology, neurology, otolaryngology, hematology, cardiology, and genetics. Run annual ESS, CBC, ferritin, transferrin saturation, and BNP/NT-proBNP. Re-confirm PAVM re-screening cadence (every 3-5 years for negative-baseline patients), CAVM follow-up plan, hepatic AVM surveillance, and bevacizumab continuation criteria. Submit VASCERN center-of-excellence reporting and Cure HHT registry updates. Sit down with patient and family to refresh next-year care plan, emergency action plan, and self-management goals.",
  },
]

const kpis = [
  {
    metric: "Every 3–5 Years",
    target: "PAVM Re-Screening",
    description: "Bubble echocardiography surveillance cadence per VASCERN guidance for HHT patients",
  },
  {
    metric: ">=3 mm",
    target: "PAVM Embolization Threshold",
    description: "Feeding artery diameter trigger for interventional radiology coil/plug embolotherapy",
  },
  {
    metric: "Annual",
    target: "Multidisciplinary HHT Review",
    description: "Pulmonology, hepatology, neurology, ENT, hematology, cardiology, and genetics aligned",
  },
  {
    metric: "Quarterly",
    target: "Epistaxis Severity Score",
    description: "Structured ESS diary trended against hemoglobin, ferritin, and iron repletion cycles",
  },
  {
    metric: "100%",
    target: "Cascade Family Testing",
    description: "ACVRL1/ENG/SMAD4 cascade testing offered to all first-degree relatives of carriers",
  },
  {
    metric: "100%",
    target: "Cure HHT / VASCERN",
    description: "Patients connected to Cure HHT advocacy and VASCERN HHT center reporting",
  },
]

const testimonial = {
  quote:
    "An HHT center is really six clinics in one — pulmonology for PAVMs, neurology for CAVMs, hepatology for hepatic shunts, ENT for epistaxis, hematology for iron and bevacizumab, and genetics for cascade family testing. Momenties keeps every bubble echo, embolization follow-up CT, ESS diary, IV iron cycle, bevacizumab infusion, ACVRL1/ENG/SMAD4 cascade visit, and annual multidisciplinary review on a single timeline. Our PAVM re-screening compliance jumped, our epistaxis severity scores finally correlate to actual iron data, and our VASCERN reporting is no longer a fire drill at year end.",
  name: "Dr. M. Shovlin",
  title: "HHT Center Director, Rare Vascular Disorders Program",
}

export default function HereditaryHemorrhagicTelangiectasiaCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="HHT Center Calendar"
        title="Hereditary Hemorrhagic Telangiectasia Center — Screening, Treatment & Surveillance Calendar"
        subtitle="Comprehensive scheduling for HHT centers — pulmonary AVM screening and embolization, hepatic AVM surveillance, cerebral AVM management, epistaxis treatment coordination, iron deficiency management, and annual multidisciplinary HHT reviews."
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
            Built Around the HHT Center Workflow
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
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    color: "#f0ece3",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "rgba(240,236,227,0.65)",
                    lineHeight: 1.65,
                  }}
                >
                  {description}
                </p>
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
              The HHT Center Year — Month by Month
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every PAVM bubble echo, embolization follow-up CT, ESS diary, IV iron cycle, bevacizumab infusion, cascade genetic visit, and multidisciplinary review — sequenced across 12 months.
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
                    padding: "20px 24px",
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
                    <div
                      style={{
                        color: "#f0ece3",
                        fontWeight: 600,
                        fontSize: "0.97rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.title}
                    </div>
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
              The 6 KPIs That Define HHT Center Excellence
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
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
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#f0ece3",
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "rgba(240,236,227,0.65)",
                      lineHeight: 1.45,
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
        <section style={{ padding: "0 24px 40px" }}>
          <blockquote
            style={{
              maxWidth: 720,
              margin: "0 auto",
              background: "#131318",
              border: "1px solid rgba(197,163,92,0.25)",
              borderRadius: 16,
              padding: "36px 40px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                color: "#c5a35c",
                marginBottom: 16,
                lineHeight: 1,
              }}
            >
              &ldquo;
            </div>
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
            <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>
              {testimonial.name}
            </div>
            <div
              style={{
                color: "rgba(240,236,227,0.65)",
                fontSize: "0.88rem",
                marginTop: 4,
              }}
            >
              {testimonial.title}
            </div>
          </blockquote>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
