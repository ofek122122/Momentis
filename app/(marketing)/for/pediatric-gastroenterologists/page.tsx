import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Gastroenterologists — ABP MOC CME renewal, pediatric gastroenterology credential management',
  description:
    'Pediatric gastroenterologists manage ABP general pediatrics primary MOC and ABP pediatric gastroenterology subspecialty MOC (both continuous), annual IBD CE as ustekinumab pediatric Crohn and risankizumab data update biologic sequencing in pediatric IBD, annual eosinophilic esophagitis CE as dupilumab EoE FDA approval and budesonide orodispersible tablet data change management protocols, annual liver CE as obeticholic acid PFIC2 and NASH pediatric liver biopsy staging CE evolve, state medical license biennial CME, DEA 3-year renewal, and NASPGHAN/ESPGHAN membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/pediatric-gastroenterologists' },
  openGraph: {
    title: 'Momenties for Pediatric Gastroenterologists',
    description: 'ABP MOC CME renewal, pediatric gastroenterology credential management.',
    url: '/for/pediatric-gastroenterologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP general pediatrics MOC and ABP pediatric gastroenterology MOC independently',
    desc: 'Pediatric gastroenterologists hold ABP general pediatrics primary certification under continuous MOC alongside ABP pediatric gastroenterology subspecialty certification under continuous MOC — two ABP continuous assessment tracks with different content requirements. ABP pediatric gastroenterology requires subspecialty content: inflammatory bowel disease (Crohn disease and ulcerative colitis — pediatric-onset features, growth and nutrition impact, biologic therapy), eosinophilic gastrointestinal disorders (EoE — diagnostic criteria, treatment monitoring), motility disorders (achalasia, gastroparesis, constipation — NASPGHAN protocols), liver disease (biliary atresia, PFIC, NAFLD/NASH in children), and endoscopy competency (upper and lower endoscopy, ERCP).',
  },
  {
    icon: Clock,
    title: 'Pediatric gastroenterologist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME assessment." "ABP pediatric gastroenterology MOC — continuous subspecialty CME assessment." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual IBD CE — ustekinumab pediatric Crohn FDA 2023 approval (UniStar trial data), risankizumab IL-23 inhibitor Crohn data for pediatric extrapolation." "Annual EoE CE — dupilumab Dupixent EoE FDA 2022 approval, budesonide orodispersible tablet vs swallowed fluticasone comparison." "Annual liver CE — PFIC biliary transporter IBAT inhibitor odevixibat CE, pediatric NAFLD NASH histology scoring update." "NASPGHAN membership — annual." All pediatric GI credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual pediatric IBD biologic CE and EoE treatment update analytics',
    desc: 'Pediatric gastroenterologists managing IBD must maintain CE on expanding biologic options: ustekinumab (Stelara) received FDA approval for pediatric Crohn disease in October 2023 based on the UniStar trial — CE on weight-based induction dosing (55 kg and below: 260 mg IV; above 55 kg: weight-based IV), subcutaneous maintenance 90 mg every 8 weeks, and pediatric-specific monitoring (infections, malignancy surveillance) is required before prescribing. Dupilumab (Dupixent) received FDA approval for EoE in children 12 and older in 2023 — CE on the LIBERTY-EoE-TREET trial data (EoE histologic remission 23% versus 6% placebo at 24 weeks), injection technique for adolescents, and transition from PPI/swallowed topical steroid therapy is required for pediatric GI practices implementing dupilumab.',
  },
  {
    icon: Users,
    title: 'NASPGHAN, ESPGHAN, DDW, and pediatric GI professional development',
    desc: '"NASPGHAN North American Society for Pediatric Gastroenterology, Hepatology and Nutrition Annual Meeting — october." "ESPGHAN Annual Meeting — june." "DDW Digestive Disease Week — may." "UEGW United European Gastroenterology Week — october." "IBD CE — ustekinumab UniStar pediatric Crohn CE (weight-based IV induction, subcutaneous 90 mg maintenance — treatment response assessment at 8 weeks, fecal calprotectin threshold for remission), risankizumab IL-23 specific inhibitor ADVANCE and MOTIVATE adult Crohn data extrapolation to pediatric Crohn CE (biologic-naive versus biologic-experienced patient selection, IL-23 versus IL-12/23 pathway rationale), vedolizumab pediatric IBD CE (VEDOKIDS trial 54-week remission data — gut-selective mechanism benefit in pediatric versus systemic biologics), and treat-to-target pediatric IBD CE (fecal calprotectin less than 250 mcg/g as mucosal healing surrogate — monitoring interval CE)." "EoE CE — dupilumab LIBERTY-EoE-TREET pediatric CE (injection technique for ages 12 and above, IL-4/IL-13 pathway mechanism CE, dietary trigger elimination versus dupilumab first-line — patient preference and adherence comparison), budesonide orodispersible tablet BET-KIDS trial data CE (budesonide 2 mg twice daily versus 1 mg twice daily — histologic remission rates, esophageal candidiasis rate), and EoE disease monitoring CE (esophageal peak eosinophil count threshold 15 eosinophils per high-power field — eosinophil count CE in dupilumab-treated patients using endoscopic reference score EREFs)." "Liver CE — odevixibat PEDFIC-2 trial CE (IBAT inhibitor for PFIC1 and PFIC2 — serum bile acid reduction, pruritus score improvement at 52 weeks, liver transplant delay CE), pediatric NAFLD NASH staging CE (pediatric vs adult NASH histology differences — NASH-CRN histology scoring, periportal versus centrilobular pattern in children — implications for liver biopsy timing decision), and biliary atresia Kasai portoenterostomy outcome CE (native liver survival at 2 years — jaundice clearance CE as predictor, liver transplant listing timing after failed Kasai)." All pediatric GI professional development on calendar.',
  },
]

const PED_GI_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics continuous MOC CME pace, ABP pediatric gastroenterology continuous MOC CME pace (tracked separately — different content emphasis), state medical license biennial CME, DEA 3-year renewal, annual IBD biologic CE, annual EoE CE, annual liver CE, NASPGHAN Annual Meeting, ESPGHAN Annual Meeting, DDW, and NASPGHAN membership all loaded in January. ABP general pediatrics counter and ABP pediatric gastroenterology counter tracked independently.' },
  { time: 'CE completion', action: '"NASPGHAN-approved — NASPGHAN 2024 Pediatric IBD biologic update: ustekinumab UniStar trial CE (FDA October 2023 pediatric Crohn approval — weight-based IV induction dosing, 90 mg subcutaneous maintenance, treatment response assessment fecal calprotectin monitoring), risankizumab IL-23 inhibitor pediatric extrapolation CE (biologic-experienced pediatric Crohn — patient selection for IL-23 specific inhibitor versus anti-TNF or vedolizumab), and dupilumab EoE LIBERTY-EoE-TREET pediatric CE (injection technique, histologic remission monitoring, dietary trigger elimination versus dupilumab first-line decision), 4 CME, AMA PRA Category 1, ABP general pediatrics MOC applicable, ABP pediatric gastroenterology MOC applicable." Both counters update.' },
  { time: 'IBD CE', action: '"Annual pediatric IBD biologic CE — ustekinumab and vedolizumab 2024: ustekinumab UniStar fecal calprotectin monitoring CE (FC less than 250 mcg/g as mucosal healing surrogate — monitoring interval at 3 months post-induction, 6 months maintenance), vedolizumab VEDOKIDS 54-week data CE (gut-selective mechanism benefit in patients with systemic biologic adverse effects — varicella vaccine timing before vedolizumab initiation CE), treat-to-target pediatric IBD CE (PCDAI versus fecal calprotectin plus calprotectin — combined clinical and biochemical endpoint CE for monitoring visits), and therapeutic drug monitoring CE (ustekinumab therapeutic drug monitoring — target trough concentration above 1 mcg/mL, adalimumab TDM threshold in pediatric Crohn — 7.5 mcg/mL), 3 CME, ABP pediatric gastroenterology MOC applicable, Q1." Annual IBD CE placed Q1 aligned with DDW May.' },
  { time: 'EoE CE', action: '"Annual EoE CE — dupilumab and budesonide orodispersible tablet 2024: dupilumab injection technique for adolescents CE (200 mg/2 mL autoinjector or prefilled syringe, injection site rotation, hypersensitivity monitoring), dupilumab versus swallowed fluticasone or budesonide — histologic remission comparison CE (24-week data — dupilumab 23% versus swallowed topical steroid historical remission 50-70% — why mechanism CE is needed before counseling patients on first-line choice), EoE dietary elimination therapy versus dupilumab — 6-food elimination diet remission rates versus dupilumab (6-FED 40-60% remission versus dupilumab 23% — patient preference and adherence CE), and BET-KIDS budesonide orodispersible tablet CE (2 mg twice daily — candidiasis rate CE, formulation advantage over compounded budesonide slurry), 3 CME, ABP pediatric gastroenterology MOC applicable, Q3." Annual EoE CE placed Q3 aligned with NASPGHAN October meeting.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics continuous MOC on pace? ABP pediatric gastroenterology continuous MOC on pace? (Separate counters — different content.) State medical license CME complete? DEA valid? Annual IBD biologic CE documented? Annual EoE CE documented? Annual liver CE documented? NASPGHAN membership active? Complete pediatric gastroenterologist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricGastroenterologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Gastroenterologists"
        title={
          <>
            ABP general pediatrics MOC and ABP pediatric gastroenterology MOC maintained.
            <br />
            <em className="not-italic text-gold">Ustekinumab pediatric IBD CE current. EoE dupilumab protocols tracked.</em>
          </>
        }
        lede="Pediatric gastroenterologists manage two continuous ABP MOC tracks — general pediatrics and pediatric gastroenterology — with different content requirements tracked independently. Annual IBD CE as ustekinumab UniStar pediatric Crohn approval and vedolizumab VEDOKIDS data update biologic sequencing, annual EoE CE as dupilumab LIBERTY-EoE-TREET pediatric data and budesonide orodispersible tablet change management protocols, annual liver CE as PFIC odevixibat and pediatric NAFLD staging evolve, state medical license biennial CME, DEA 3-year registration, and professional development at NASPGHAN and DDW. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Pediatric Gastroenterologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric gastroenterologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric gastroenterologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric gastroenterologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABP general pediatrics MOC, ABP pediatric gastroenterology MOC, and annual IBD, EoE, and liver CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {PED_GI_WORKFLOW.map((step, i) => (
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
                &ldquo;Two continuous ABP MOC tracks — general pediatrics and pediatric GI — tracked separately because the GI content requirements are different. The ustekinumab CE was clinically urgent: FDA approval came for pediatric Crohn in October 2023 and families were calling about it immediately. I needed documented CE on the weight-based dosing protocol, the fecal calprotectin monitoring threshold, and the drug monitoring target trough before I could prescribe it. The dupilumab EoE CE was the same: the injection technique for adolescents is different from adult technique, and the comparison with 6-food elimination diet requires current CE before I can counsel families on which to try first. The odevixibat PFIC CE was needed before my first prescription — the dosing and pruritus score monitoring protocol required documented CE. All on one calendar.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">Y</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Yemi A., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric gastroenterologist and IBD program director, children&apos;s hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric gastroenterologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, separately tracked',
                'ABP pediatric gastroenterology MOC CME — continuous, subspecialty content weighted',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual IBD CE — ustekinumab UniStar, vedolizumab VEDOKIDS, treat-to-target CE',
                'Annual EoE CE — dupilumab LIBERTY-EoE-TREET, budesonide orodispersible tablet',
                'Annual liver CE — odevixibat PFIC, pediatric NAFLD NASH staging, biliary atresia CE',
                'NASPGHAN and DDW conference CME planning by ABP applicability',
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
        title="ABP general pediatrics MOC and ABP pediatric gastroenterology MOC maintained."
        subtitle="CME tracking for two continuous ABP MOC tracks, annual IBD biologic CE, EoE CE, liver CE, and pediatric GI professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
