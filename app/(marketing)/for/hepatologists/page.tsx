import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Hepatologists — ABIM MOC CME renewal, hepatology credential management',
  description:
    'Hepatologists manage ABIM internal medicine primary MOC with hepatology content, ABIM gastroenterology subspecialty MOC, transplant hepatology subspecialty certification (if transplant program), annual UNOS/OPTN training for transplant key personnel, direct-acting antiviral prescribing CE, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full hepatologist credential calendar.',
  alternates: { canonical: '/for/hepatologists' },
  openGraph: {
    title: 'Momenties for Hepatologists',
    description: 'ABIM MOC CME renewal, hepatology credential management.',
    url: '/for/hepatologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM IM MOC, GI subspecialty MOC, and transplant hepatology independently',
    desc: 'Hepatologists hold ABIM internal medicine primary certification under continuous MOC and ABIM gastroenterology subspecialty certification on a separate MOC cycle — two ABIM credentials with different content requirements. Hepatologists at liver transplant programs hold ABIM transplant hepatology subspecialty certification on a third independent cycle with transplant-specific content requirements including post-transplant immunosuppression management, organ allocation policy, and hepatocellular carcinoma UNOS listing criteria. Each of the three ABIM certifications tracks CE independently, and content that satisfies one may not satisfy the others.',
  },
  {
    icon: Clock,
    title: 'Hepatologist multi-credential renewal calendar',
    desc: '"ABIM internal medicine MOC — continuous CME." "ABIM gastroenterology subspecialty MOC — GI/hepatology content." "ABIM transplant hepatology MOC — transplant-specific content (if transplant program)." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual UNOS/OPTN transplant training — key personnel requirement." "Annual direct-acting antiviral prescribing CE." "AASLD membership — annual." All hepatologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual UNOS/OPTN training and direct-acting antiviral therapy update CE analytics',
    desc: 'UNOS/OPTN policy requires annual completion of organ allocation policy education for designated transplant program key personnel — including the hepatologist serving as the program&apos;s primary transplant physician. UNOS policy changes annually as OPTN policy committees update allocation algorithms, and the annual training requirement ensures key personnel are current on listing criteria, exception requests, and deceased donor organ acceptance. Direct-acting antiviral therapy for hepatitis C has transformed the hepatology landscape over the past decade — annual CE on DAA regimen selection, treatment-experienced patients, and special populations (cirrhosis, renal impairment, drug interactions) is a practice requirement as new approvals and guideline updates occur.',
  },
  {
    icon: Users,
    title: 'AASLD, AGA, and hepatology professional involvement',
    desc: '"AASLD — The Liver Meeting — november." "DDW (Digestive Disease Week) — may." "ILTS Annual Congress." "HBV management CE — tenofovir alafenamide versus entecavir long-term safety, finite therapy criteria." "HCV elimination CE — micro-elimination strategies, treatment in incarcerated populations, simplified treatment algorithms." "NASH/MASLD CE — metabolic-associated steatotic liver disease nomenclature transition, resmetirom approval for MASH with moderate-to-advanced fibrosis." "Hepatocellular carcinoma CE — BCLC staging 2022 update, systemic therapy sequencing for advanced HCC." All hepatology professional development on calendar. AASLD conference CME tagged by ABIM IM, GI, and transplant hepatology applicability.',
  },
]

const HEPATOL_WORKFLOW = [
  { time: 'Annual planning', action: 'ABIM IM MOC CME pace (hepatology content weighted), ABIM GI subspecialty CE pace, ABIM transplant hepatology CE pace (if transplant program), state medical license biennial CME, DEA 3-year renewal, annual UNOS/OPTN training (Q1, before spring transplant program review), annual DAA prescribing CE, AASLD Liver Meeting, DDW, and AASLD membership all loaded in January. ABIM IM counter, ABIM GI counter, and transplant hepatology counter tracked independently.' },
  { time: 'CE completion', action: '"AASLD-approved — resmetirom in MASH with advanced fibrosis: MAESTRO-NASH trial design and primary endpoints, fibrosis regression rates at 52 weeks, safety profile including thyroid hormone interactions, and patient selection criteria for prescribing, 2 CME, AMA PRA Category 1, ABIM MOC applicable, ABIM GI applicable — hepatology domain, ABIM transplant hepatology applicable — metabolic liver disease domain." ABIM IM counter updates. GI counter updates. Transplant hepatology counter updates. Triple applicability logged.' },
  { time: 'UNOS training', action: '"Annual UNOS/OPTN transplant key personnel education — organ allocation policy updates: liver MELD exception criteria 2024, pediatric liver allocation policy revision, DCD donor acceptance criteria and ischemic cholangiopathy risk stratification, 2 CE, Q1." Annual UNOS training placed Q1 as OPTN designated key personnel requirement. UNOS annual training due in Q1 before the April OPTN program compliance reporting cycle. Transplant program key personnel designation requires current annual training — lapse in training triggers OPTN compliance action against the program designation.' },
  { time: 'DAA CE', action: '"Annual hepatitis C direct-acting antiviral prescribing CE — 2024 AASLD/IDSA HCV guidance update: simplified treatment algorithms for treatment-naive non-cirrhotic patients, retreatment options for prior DAA failures, glecaprevir/pibrentasvir in chronic kidney disease stage 4-5, and p-glycoprotein drug interactions with sofosbuvir-based regimens, 2 CME, Q2." Annual DAA prescribing CE placed Q2. AASLD/IDSA HCV guidance is updated with each new approval or major new safety data — annual CE placed mid-year when prior-year data is incorporated into published guidance.' },
  { time: 'Renewal audit', action: 'Analytics: ABIM IM MOC CME on pace? ABIM GI subspecialty content satisfied? ABIM transplant hepatology content satisfied (if applicable)? State medical license CME complete? DEA valid? Annual UNOS/OPTN training documented? DAA prescribing CE current? AASLD membership active? Complete hepatologist credential audit 90 days before earliest renewal. All three ABIM counters reviewed independently.' },
]

export default function ForHepatologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Hepatologists"
        title={
          <>
            ABIM IM, GI, and transplant hepatology MOC maintained.
            <br />
            <em className="not-italic text-gold">UNOS key personnel training current. DAA CE tracked.</em>
          </>
        }
        lede="Hepatologists manage ABIM internal medicine continuous MOC, ABIM gastroenterology subspecialty MOC on a separate cycle, and ABIM transplant hepatology subspecialty MOC at liver transplant programs — three independent ABIM certifications with different content requirements. Plus state medical license biennial CME, DEA 3-year registration, annual UNOS/OPTN key personnel training for transplant program compliance, annual direct-acting antiviral therapy CE as HCV guidelines update, and professional development at AASLD and DDW. Momenties tracks CME by hepatologist credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar."
        crumbs={[{ label: 'For Hepatologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How hepatologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for hepatologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Hepatologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through three ABIM MOC cycles, annual UNOS key personnel training, and hepatology clinical practice CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {HEPATOL_WORKFLOW.map((step, i) => (
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
                &ldquo;I have three ABIM certifications — internal medicine, gastroenterology, and transplant hepatology. ABIM tracks them separately and the content requirements are different for each. A session at The Liver Meeting on HCC staging counts for all three. A session on inflammatory bowel disease counts for my GI subspecialty but not my transplant hepatology. I have to track them independently. UNOS requires me to complete annual key personnel training every year as the primary transplant hepatologist — if I let that lapse, it&apos;s a program compliance issue, not just a personal credential issue. The hepatitis C treatment landscape has changed every year for the past decade. State license biennial, DEA 3-year. Before Momenties I was tracking three ABIM counters and a UNOS training deadline in different places and manually reconciling which CE went to which credential.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">L</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Lydia W., MD</div>
                  <div className="text-xs text-muted-foreground">Hepatologist and liver transplant program physician, academic transplant center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All hepatologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM internal medicine MOC CME — continuous, hepatology content weighted',
                'ABIM gastroenterology subspecialty MOC — hepatology, liver disease domains',
                'ABIM transplant hepatology MOC — UNOS listing, immunosuppression domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual UNOS/OPTN key personnel training — transplant program compliance',
                'Annual direct-acting antiviral prescribing CE — AASLD/IDSA HCV guidance',
                'AASLD and DDW conference CME planning by ABIM IM, GI, and transplant applicability',
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
        title="Three ABIM certifications tracked independently."
        subtitle="CME tracking for ABIM IM, GI, and transplant hepatology MOC, annual UNOS key personnel training, DAA prescribing CE, and hepatology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
