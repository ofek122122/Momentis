import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Interventional Radiologists — ABR MOC CME renewal, interventional radiology credential management',
  description:
    'Interventional radiologists manage ABR diagnostic radiology or interventional radiology primary MOC (continuous) alongside RPVI vascular ultrasound certification and FSIR fellowship credential renewal, annual embolization CE as prostate artery embolization PAE and genicular artery embolization GAE expand indications, annual TACE/TARE CE as Y-90 radioembolization glass versus resin sphere dosimetry protocols update for HCC and metastatic liver disease, annual venous CE as ATTRACT trial post-phlebitic syndrome data update catheter-directed thrombolysis protocols, state medical license biennial CME, DEA 3-year renewal, and SIR membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/interventional-radiologists' },
  openGraph: {
    title: 'Momenties for Interventional Radiologists',
    description: 'ABR MOC CME renewal, interventional radiology credential management.',
    url: '/for/interventional-radiologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABR MOC and RPVI/FSIR credential maintenance independently',
    desc: 'Interventional radiologists hold ABR diagnostic radiology or ABR interventional radiology primary certification under continuous MOC alongside RPVI (Registered Physician in Vascular Interpretation) certification requiring renewal every 10 years with maintenance CE, and FSIR (Fellow of the Society of Interventional Radiology) credential maintenance. ABR IR requires broad procedural competency content: vascular intervention (arterial and venous), oncologic intervention (TACE, TARE, ablation, embolization), non-vascular intervention (biliary, urologic, musculoskeletal), and image-guided procedures across CT, ultrasound, and fluoroscopy platforms.',
  },
  {
    icon: Clock,
    title: 'Interventional radiologist multi-credential renewal calendar',
    desc: '"ABR radiology or IR MOC — continuous CME." "RPVI vascular ultrasound interpretation — 10-year renewal cycle." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual embolization CE — prostate artery embolization (PAE) TURP randomized trial comparison data, genicular artery embolization (GAE) osteoarthritis pain CE." "Annual Y-90 CE — glass (TheraSphere) versus resin (SIR-Spheres) dosimetry CE, radiation segmentectomy for HCC bridge to transplant." "Annual venous CE — ATTRACT trial post-phlebitic syndrome data, iliac vein stenting IVUS guidance CE." "SIR membership — annual." All IR credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual Y-90 radioembolization CE and new embolization indication update analytics',
    desc: 'Interventional radiologists must maintain CE on rapidly expanding embolization indications and dosimetry protocols: prostate artery embolization (PAE) has expanded from lower urinary tract symptoms to benign prostatic hyperplasia treatment with Level 1 evidence from the ROPE registry and multiple RCTs versus TURP — CE on PAE anatomy (prostatic artery origin variants from anterior trunk, obturator artery, pudendal artery), embolic agent selection, and TURP-versus-PAE patient selection (prostate volume threshold, median lobe anatomy) is required before initiating a PAE program. Y-90 glass sphere dosimetry CE has become differentiated from resin sphere dosimetry — the shift-to-glass approach for HCC and selective internal radiation surgery (SIRS) requires separate CE on medical internal radiation dose (MIRD) glass sphere calculation versus simplified dosimetry approach.',
  },
  {
    icon: Users,
    title: 'SIR, CIRSE, GEST, and interventional radiology professional development',
    desc: '"SIR Society of Interventional Radiology Annual Scientific Meeting — march." "CIRSE Cardiovascular and Interventional Radiology Society of Europe — september." "GEST Global Embolization Symposium and Technologies — may." "AHA Vascular Discovery." "Embolization CE — prostate artery embolization PAE 2024 RCT evidence CE (ROPE registry 5-year functional outcomes versus TURP — erectile function preservation, urinary function QoL at 5 years), genicular artery embolization GAE osteoarthritis — GENESIS trial outcomes (pain VAS reduction at 12 months versus sham, patient selection: Kellgren-Lawrence grade 2-3 target versus advanced grade 4), hepatic artery embolization CE (bland embolization versus TACE versus TARE patient selection in neuroendocrine liver metastases — SIR 2024 consensus update), and uterine fibroid embolization UFE — new embolic agents: Embozene microspheres versus PVA versus Gelfoam comparison, leiomyosarcoma exclusion protocol CE." "Y-90 CE — TheraSphere glass sphere 2024 dosimetry update CE (voxel-based dosimetry versus partition model — personalized dosimetry CE, DOSISPHERE-01 trial glass sphere curative intent HCC data), SIR-Spheres resin sphere dosimetry CE (simplified dosimetry versus Scout dosimetry — BSA versus body surface area model CE), radiation segmentectomy CE (lobar versus selective versus segmentectomy approach — curative-intent HCC dose escalation protocol), and transarterial radioembolization for HCC bridge to transplant — UNOS T1 and T2 lesion criteria for transplant listing CE." "Venous CE — ATTRACT trial update CE (post-phlebitic syndrome 24-month outcomes — CDT versus anticoagulation alone for iliofemoral DVT, which subset benefited CE), iliac vein stenting IVUS guidance CE (IVUS versus venography for cross-sectional area measurement — May-Thurner syndrome diagnosis and stent sizing), and IVC filter CE (2023 ACCP guideline update on retrievable filter — filter retrieval protocol, optional filter use in bariatric surgical patients)." All IR professional development on calendar.',
  },
]

const IR_WORKFLOW = [
  { time: 'Annual planning', action: 'ABR radiology or IR MOC CME pace, RPVI vascular ultrasound renewal tracking (10-year cycle), state medical license biennial CME, DEA 3-year renewal, annual embolization CE (PAE and GAE program CE critical), annual Y-90 dosimetry CE, annual venous intervention CE, SIR Annual Meeting, CIRSE Meeting, GEST Symposium, and SIR membership all loaded in January. ABR MOC counter and RPVI renewal calendar tracked independently.' },
  { time: 'CE completion', action: '"SIR-approved — SIR 2024 Y-90 Clinical Practice Guideline update: TheraSphere glass sphere dosimetry CE (voxel-based dosimetry implementation — clinical workflow for personalized dosimetry versus simplified BSA model, DOSISPHERE-01 trial curative-intent HCC dose escalation — 205 Gy versus conventional dose outcomes), radiation segmentectomy patient selection CE (single HCC up to 4 cm in non-cirrhotic liver — curative intent ablative dose protocol, Barcelona Clinic Liver Cancer 0/A stage), and SIR-Spheres simplified dosimetry versus Scout dosimetry — BSA model limitations in patients with prior resection or ablation, 4 CME, AMA PRA Category 1, ABR MOC applicable." ABR counter updates.' },
  { time: 'Embolization CE', action: '"Annual embolization CE — PAE and GAE 2024 update: prostate artery embolization ROPE registry 5-year data CE (erectile function preservation rate — 97% versus 76% TURP at 5 years, IPSS improvement 13.5 points versus 14.5 TURP — equivalent functional outcomes, PAE advantage in sexual function CE), PAE anatomy variant CE (anterior trunk origin 48%, obturator artery origin 27%, pudendal artery origin 15% — CBCT cone beam identification protocol for variant anatomy), genicular artery embolization GENESIS trial 12-month outcomes CE (VAS pain reduction 4.1 versus 1.2 sham — KL grade 2-3 optimal responder CE, KL grade 4 poor responder — exclusion criterion CE), and hepatic embolization — nausea/vomiting and post-embolization syndrome prophylaxis protocol update (dexamethasone timing and dose CE), 3 CME, ABR MOC applicable, Q1." Annual embolization CE placed Q1 aligned with SIR March meeting.' },
  { time: 'Venous CE', action: '"Annual venous intervention CE — iliac vein stenting and CDT 2024: ATTRACT trial post-phlebitic syndrome 24-month outcomes CE (CDT versus anticoagulation alone for proximal DVT — PTS VIllaita score difference 0.2 favoring CDT NS, iliofemoral subset — PTS reduction 28% versus 34%, major bleeding 1.7% versus 0.3% — who benefits CE: young patients with iliofemoral DVT less than 14 days, good functional status), May-Thurner syndrome IVUS stent sizing CE (IVUS 9-12 mm reference diameter versus venography — stent oversizing protocol, Wallstent versus Venovo stent selection CE), and acute iliofemoral DVT pharmacomechanical CDT device CE (Angiojet rheolytic thrombectomy versus Bashir Endovascular Catheter — safety CE, hemolysis risk with Angiojet mechanical CE), 3 CME, ABR MOC applicable, Q3." Annual venous CE placed Q3 aligned with CIRSE September.' },
  { time: 'Renewal audit', action: 'Analytics: ABR radiology or IR MOC CME on pace? RPVI certification renewal on track (10-year cycle)? State medical license CME complete? DEA valid? Annual embolization CE documented? Annual Y-90 dosimetry CE documented? Annual venous intervention CE documented? SIR membership active? Complete IR credential audit 90 days before earliest renewal.' },
]

export default function ForInterventionalRadiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Interventional Radiologists"
        title={
          <>
            ABR MOC and RPVI vascular credential maintenance on one calendar.
            <br />
            <em className="not-italic text-gold">Y-90 dosimetry CE current. PAE and GAE indication CE tracked.</em>
          </>
        }
        lede="Interventional radiologists manage ABR MOC (diagnostic radiology or IR pathway), RPVI 10-year vascular interpretation renewal, and FSIR credential maintenance. Annual embolization CE as PAE and GAE clinical evidence expands indications and program credentialing requires documentation, annual Y-90 dosimetry CE as glass versus resin sphere personalized dosimetry protocols evolve, annual venous intervention CE, state medical license biennial CME, DEA 3-year registration, and professional development at SIR and CIRSE. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Interventional Radiologists' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/analytics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            CE analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How interventional radiologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for interventional radiologist credential and CME management.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <uc.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Interventional radiologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABR MOC, RPVI 10-year renewal, and annual embolization, Y-90 dosimetry, and venous intervention CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {IR_WORKFLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;ABR MOC, RPVI 10-year renewal, and SIR credential maintenance — three separate tracks with different renewal timelines. The PAE CE was clinically critical: when our hospital credentialing committee reviewed our PAE program, they required documented CE on the ROPE registry data and the anatomy variant identification protocol before they would approve prostate artery embolization privileges. I needed that CE specific to the procedure — not just general embolization CE. The Y-90 glass sphere dosimetry CE is what prompted me to use Momenties: TheraSphere switched to voxel-based dosimetry and I needed documented CE on the new clinical workflow before my first case under the updated protocol. The genicular artery embolization CE required the GENESIS trial data — I could not consent a patient for GAE without current CE on the responder versus non-responder criteria. All of these are tied to specific procedures, not to my general board calendar.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Rafael M., MD, FSIR</div>
                  <div className="text-xs text-muted-foreground">Interventional radiologist and IR program director, academic medical center</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Credentials tracked</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All interventional radiologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABR radiology or IR MOC CME — continuous, IR content weighted',
                'RPVI vascular ultrasound interpretation — 10-year renewal cycle with CE requirements',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual embolization CE — PAE ROPE registry, GAE GENESIS trial, UFE embolic agents',
                'Annual Y-90 CE — glass versus resin dosimetry, radiation segmentectomy, HCC bridge',
                'Annual venous CE — ATTRACT CDT update, iliac vein IVUS stenting, IVC filter protocol',
                'SIR and CIRSE conference CME planning by ABR MOC applicability',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="ABR MOC and RPVI vascular credential maintained."
        subtitle="CME tracking for ABR MOC, RPVI 10-year renewal, annual embolization CE, Y-90 dosimetry CE, venous intervention CE, and IR professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
