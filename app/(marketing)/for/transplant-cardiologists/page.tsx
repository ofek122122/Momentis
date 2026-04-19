import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Transplant Cardiologists | CME & MOC Tracker",
  description: "Track ABIM cardiology MOC, ISHLT fellowship CE, UNOS annual training, heart failure advanced certification CE, and VAD credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABIM Cardiology MOC & ISHLT Fellowship CE",
    body: "Transplant cardiologists hold ABIM Internal Medicine primary certification (continuous MOC: 100 points per 5-year cycle) plus ABIM Cardiovascular Disease subspecialty certification (continuous MOC: 100 points per 5-year cycle) — two concurrent ABIM cycles. Advanced heart failure and transplant cardiology (AHFTC) subspecialty examination — ABIM AHFTC exam offered every 2 years, 10-year recertification cycle. ISHLT (International Society for Heart and Lung Transplantation) fellowship requires 50 CE per 2-year cycle (25 transplant cardiology-specific), annual ISHLT Annual Meeting participation, and ISHLT transplant registry data submission (institutional). UNOS/OPTN annual key personnel training: December 31 deadline — identical requirement to transplant surgery, mandatory for cardiologists listed as transplant team members at UNOS-approved programs. ACGME advanced heart failure fellowship program directors must complete ACGME institutional accreditation CE annually. Momenties tracks both ABIM cycles, ISHLT fellowship, and UNOS December deadline independently.",
  },
  {
    icon: Clock,
    title: "Advanced Heart Failure, VAD & Cardiac Allograft Vasculopathy CE",
    body: "Advanced heart failure CE: PARADIGM-HF 5-year OS update CE (sacubitril/valsartan — entresto sustained mortality benefit), DAPA-HF empagliflozin CE (SGLT2 inhibitor — first diabetic-independent HF drug CE), GALACTIC-HF omecamtiv mecarbil CE (myosin activator — PFS benefit CE in EF ≤35%), STRONG-HF high-intensity care CE. VAD credentialing CE: HeartMate 3 MOMENTUM 3 5-year CE (fully magnetically levitated LVAD — equivalent survival, lower stroke rate vs axial flow), LVAD destination therapy versus bridge-to-transplant decision CE, LVAD implant team participation CE (minimum volume requirements — ISHLT 2023 CE), adverse event management CE (pump thrombosis, GI bleeding, LVAD infection). Cardiac allograft vasculopathy CE: CAV ISHLT grading (0-III) CE, IVUS versus FFR for CAV assessment CE, everolimus CE for CAV prevention (prevention not treatment CE — de novo everolimus post-transplant first year CE), statin therapy CE for CAV primary prevention.",
  },
  {
    icon: BarChart3,
    title: "Immunosuppression, Rejection & Infectious Complication CE",
    body: "Immunosuppression CE: BENEFIT trial belatacept versus cyclosporine CE (renal function preservation CE — ESRD 43% lower with belatacept at 7 years), everolimus CNI minimization CE (SCHEDULE trial: renal function preservation, CAV prevention), tacrolimus target trough CE — IS optimization 3-6 months post-transplant (high early CE: tacrolimus 10-15 ng/mL first month, taper protocol CE). Rejection CE: ISHLT 2022 pathologic classification update — pAMR (pathologic antibody-mediated rejection) grading CE (pAMR 0, 1, 2, 3), DSA (donor-specific antibody) monitoring protocol CE (quarterly first year, annually thereafter — CE on class I versus class II DSA prognostic significance), cardiac allograft biopsy interpretation CE (ISHLT Grade 0, 1R, 2R, 3R cellular rejection CE). Infectious complications CE: CMV prophylaxis CE (valganciclovir 900 mg daily × 6 months for D+/R- CE), Pneumocystis jirovecii prophylaxis CE (TMP-SMX CE for first 6-12 months), fungal prophylaxis CE (azole versus echinocandin in early post-transplant CE), norovirus CE in transplant recipients (chronic norovirus — vedolizumab CE for refractory cases).",
  },
  {
    icon: Users,
    title: "State License, UNOS Training, HF Advanced Certification & ACHD CE",
    body: "State medical license CE (2-year, 25-50 CME) runs independently from ABIM MOC. UNOS annual key personnel training: December 31 deadline — organ allocation policy CE, DCD donor acceptance CE, expanded criteria donor CE, waitlist management CE. JCAHO Heart Failure Advanced Certification CE: institutions seeking JCAHO AHF certification must document physician CE in heart transplant outcomes data (INTERMACS registry), LVAD competency review (volume thresholds, adverse event rates CE), and multidisciplinary HF rounds participation. ACHD (Adult Congenital Heart Disease) CE for transplant cardiologists managing CHD post-transplant: ACHD PACES/HRS 2023 CE for arrhythmia management CE in CHD transplant recipients. Mechanical circulatory support (MCS) adverse event monitoring CE: INTERMACS adverse event reporting CE (pump thrombosis CE, major adverse events CE in registry format), FDA MedWatch reporting CE for LVAD adverse events. Momenties tracks UNOS December deadline, ABIM dual cycles, ISHLT fellowship, and JCAHO CE together.",
  },
]

const studies = [
  {
    title: "MOMENTUM 3 HeartMate 3 LVAD 5-year Outcomes (NEJM 2023)",
    detail: "HeartMate 3 (fully magnetically levitated) vs HeartMate II (axial flow) 5-year survival: 58.4% vs 43.7% (p<0.001). Disabling stroke: 5.9% vs 12.4% (p<0.001). Pump thrombosis: 0% HM3 vs 5.6% HM2 (p<0.001). CE: DT versus BTT stratification for LVAD choice, LVAD implant technique CE (surgical CE for cardiologists participating in selection committee), post-implant management CE — HeartMate 3 anticoagulation (aspirin 81 mg + warfarin INR 2-3 CE), speed optimization CE (6000-9000 RPM — ramp study CE).",
  },
  {
    title: "ISHLT 2022 Pathologic AMR Classification Update CE",
    detail: "pAMR grading 2022: pAMR 0 (negative) — no histologic or immunopathologic findings. pAMR 1(H+) — histologic features only (macrophage infiltration CE). pAMR 1(I+) — immunopathologic only (C3d, C4d, CD68 staining CE). pAMR 2 — both. pAMR 3 — severe AMR with edema, hemorrhage, necrosis CE. CE: DSA correlation with pAMR grade CE, treatment protocol for pAMR 2-3 CE (IVIG + plasmapheresis CE, rituximab CE for refractory), endomyocardial biopsy timing post-AMR treatment CE.",
  },
  {
    title: "CAV ISHLT Grading and Everolimus Prevention CE (JHLT 2023)",
    detail: "CAV grading: CAV 0 (not significant), CAV 1 (mild — up to 50% stenosis in one vessel), CAV 2 (moderate — stenosis in 2+ vessels or LM <50%), CAV 3 (severe — LM ≥50% or 2-3 vessel ≥70% or graft dysfunction). Prevention CE: everolimus initiation at 3 months post-transplant CE — SCHEDULE trial CE (GFR preservation at 3 years, CAV reduction 40%), calcineurin inhibitor elimination CE (tacrolimus elimination with everolimus — renal function benefit CE). CE: CAV screening frequency (IVUS or coronary angiography annually for first 5 years — CE on when to transition to every 2 years).",
  },
  {
    title: "UNOS 2023 Heart Allocation Policy — Status 1-7 Outcome Data CE",
    detail: "2023 UNOS heart allocation data: status 1 (ECMO) — 30-day post-transplant survival 87.3%. Status 2 (IABP, BiVAD, percutaneous VAD) — 30-day survival 91.4%. Status 3 (non-dischargeable LVAD) — 30-day survival 92.1%. CE: status 6 (high urgency without mechanical support) qualification criteria CE, exception points CE (non-ischemic dilated cardiomyopathy NYHA IV without VAD — status 4 exception CE), geographic zones CE (250-mile radius allocation priority CE), PRA (panel reactive antibody) impact on waitlist priority CE.",
  },
  {
    title: "SGLT2 Inhibitors in Advanced HF — DAPA-HF and EMPEROR-Reduced Long-term CE",
    detail: "DAPA-HF (dapagliflozin) 2.5-year follow-up: worsening HF or CV death reduction 26% (HR 0.74). EMPEROR-Reduced (empagliflozin): consistent benefit CE. CE: SGLT2 inhibitor mechanism in HF CE (osmotic diuresis, natriuresis, erythropoiesis stimulation — not glucosuria in HF context CE), use in HFrEF regardless of diabetes status CE, dosing CE (dapagliflozin 10 mg daily, empagliflozin 10 mg daily — dose not titrated), contraindication CE (eGFR <20 mL/min — hold for procedure CE), interaction with LVAD CE (concurrent SGLT2i + LVAD — volume monitoring CE).",
  },
  {
    title: "STRONG-HF High-Intensity HF Care CE (Lancet 2023)",
    detail: "STRONG-HF: high-intensity uptitration of HF medications (ACEi/ARNi, BB, MRA) started before hospital discharge and intensified at 1-2 week follow-up vs usual care. 180-day HF readmission or death: 15.2% high-intensity vs 23.3% usual care (HR 0.66, p=0.002). CE: STRONG-HF protocol for in-hospital HF medication initiation (start sacubitril/valsartan during hospitalization CE), 1-week and 2-week post-discharge follow-up CE (blood pressure, potassium, creatinine monitoring CE), application to transplant waitlist candidates CE (optimization before listing CE).",
  },
]

export default function TransplantCardiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Transplant Cardiologists"
        title="One Calendar for ABIM Dual MOC, ISHLT Fellowship CE, and UNOS Annual Training"
        subtitle="From HeartMate 3 LVAD credentialing to cardiac allograft vasculopathy CE — Momenties tracks every obligation so your board certifications and transplant program privileges stay current."
        cta="Start free — HIPAA-aware"
        ctaHref="/sign-up"
      />

      {/* Four pillars */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Every Credentialing Obligation, One Calendar
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body }) => (
              <Reveal key={title}>
                <div
                  className="rounded-xl p-8 h-full"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="mb-4 inline-flex items-center justify-center rounded-lg p-3"
                    style={{ background: "rgba(197,163,92,0.12)" }}
                  >
                    <Icon size={22} style={{ color: "#c5a35c" }} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold" style={{ color: "#f0ece3" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key CE */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-4" style={{ color: "#f0ece3" }}>
              High-Yield CE for Transplant Cardiology MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and UNOS policy update before your ABIM cycle, ISHLT fellowship, or UNOS December deadline closes.
            </p>
          </Reveal>
          <div className="space-y-4">
            {studies.map(({ title, detail }) => (
              <Reveal key={title}>
                <div
                  className="rounded-xl p-6"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <h3 className="mb-2 font-semibold text-base" style={{ color: "#c5a35c" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                    {detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <blockquote
              className="mb-6 font-display text-2xl font-medium leading-snug"
              style={{ color: "#f0ece3" }}
            >
              &ldquo;Two ABIM cycles running simultaneously — internal medicine and cardiovascular disease — plus the AHFTC subspecialty exam, ISHLT fellowship every 2 years, UNOS December deadline, and INTERMACS registry submission. The UNOS deadline is the one that causes panic every December when I realize I haven&apos;t tracked my completion status. Momenties puts all five cycles in one view with alerts far enough ahead to actually act on them.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Yemi A., MD, FACC, FAST
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Advanced Heart Failure & Transplant Cardiology, Academic Heart Failure Program
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss a UNOS annual training, ABIM cycle, or ISHLT fellowship deadline again"
        subtitle="Momenties keeps every CME credit, VAD credentialing, transplant registry submission, and JCAHO compliance requirement in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
