import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Transplant Hepatologists — ABIM MOC CME renewal, transplant hepatology credential management',
  description:
    'Transplant hepatologists manage ABIM internal medicine and gastroenterology subspecialty MOC continuous CME with hepatology content, ABIM transplant hepatology subspecialty certification on an independent cycle, UNOS/OPTN transplant program training requirements, state medical license biennial CME, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full transplant hepatologist credential calendar.',
  alternates: { canonical: '/for/transplant-hepatologists' },
  openGraph: {
    title: 'Momenties for Transplant Hepatologists',
    description: 'ABIM MOC CME renewal, transplant hepatology credential management.',
    url: '/for/transplant-hepatologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM IM, GI subspecialty, and transplant hepatology independently',
    desc: 'Transplant hepatologists manage up to three ABIM credentials: primary internal medicine MOC, gastroenterology subspecialty MOC, and transplant hepatology subspecialty certification — each with different CME content requirements under continuous MOC. ABIM transplant hepatology subspecialty requires hepatology-specific content including liver transplant candidate evaluation, post-transplant immunosuppression management, recurrent disease after transplant, and acute liver failure management. GI subspecialty MOC requires gastroenterology content across a broader domain. State medical license biennial CME runs on a fourth independent cycle.',
  },
  {
    icon: Clock,
    title: 'Transplant hepatologist multi-credential renewal calendar',
    desc: '"ABIM internal medicine MOC — continuous CME." "ABIM gastroenterology subspecialty MOC — GI content." "ABIM transplant hepatology subspecialty — hepatology and transplant content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "UNOS/OPTN transplant program training — annual." "AASLD membership — annual." All transplant hepatologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'UNOS/OPTN transplant program training and immunosuppression protocol update CE analytics',
    desc: 'Transplant hepatologists at UNOS-member transplant centers must complete UNOS/OPTN required training covering organ allocation policy, waitlist management, post-transplant reporting requirements, and transplant program oversight. OPTN policy updates annually — training that was current 18 months ago may not reflect current organ allocation policy. Calcineurin inhibitor protocols, mTOR inhibitor use, and rejection management guidelines also evolve — annual CE covering immunosuppression management updates is a practice requirement for transplant hepatologists managing post-transplant patients with recurrent hepatitis B, C, or NASH.',
  },
  {
    icon: Users,
    title: 'AASLD, ACG, and transplant hepatology professional involvement',
    desc: '"AASLD The Liver Meeting — november." "ACG Annual Scientific Meeting — october." "ILTS Annual Congress." "ASTS Annual Meeting." "Liver transplant candidate evaluation CE — MELD-Na scoring, exception points, HCC within Milan criteria." "Post-transplant immunosuppression CE — tacrolimus minimization, mTOR inhibitor conversion." "Alcohol-associated liver disease and transplant selection CE." "Acute-on-chronic liver failure CE." All transplant hepatology professional development on calendar. AASLD conference CME tagged by ABIM primary, GI subspecialty, and transplant hepatology applicability.',
  },
]

const TXHEP_WORKFLOW = [
  { time: 'Annual planning', action: 'ABIM internal medicine MOC CME pace, ABIM GI subspecialty MOC CE pace (GI content), ABIM transplant hepatology subspecialty CE pace (hepatology and transplant content), state medical license biennial CME, DEA 3-year renewal, UNOS/OPTN transplant training, AASLD The Liver Meeting, ACG meeting, and AASLD membership all loaded in January. Three ABIM CE counters and state licensure CME tracked independently. Transplant hepatology content applied to subspecialty counter first, then GI counter for any overlap.' },
  { time: 'CE completion', action: '"AASLD-approved — alcohol-associated liver disease transplant selection: early liver transplant for severe alcoholic hepatitis, psychosocial evaluation criteria, post-transplant relapse surveillance, and 3-year outcomes data, 2 CME, AMA PRA Category 1, ABIM MOC applicable, transplant hepatology subspecialty applicable — transplant candidate evaluation domain." Transplant hepatology counter updates. GI subspecialty counter updates (if GI domain overlap). ABIM IM primary counter updates. State licensure CME updates.' },
  { time: 'UNOS training', action: '"UNOS/OPTN required training — organ allocation policy update: liver allocation under continuous distribution model, geographic disadvantage exception criteria, and waitlist management documentation requirements, 2 CE, Q1." UNOS/OPTN policy training placed as Q1 annual requirement. OPTN policies updated on a rolling basis — annual training placed in Q1 captures policy changes from the prior 12 months. UNOS training required for transplant program key personnel designation — lapse in training can affect transplant program key personnel status.' },
  { time: 'Protocol update', action: '"Annual immunosuppression CE — tacrolimus minimization at 1 year post-transplant: extended-release formulation conversion, renal function monitoring at reduced trough targets, and mTOR inhibitor conversion for calcineurin inhibitor-induced nephropathy, 2 CME, transplant hepatology applicable — post-transplant management domain, Q2." Annual immunosuppression protocol CE placed for transplant hepatologists managing post-transplant cohort. Protocol update CE placed mid-year to align with AASLD and ILTS guideline publication cycles.' },
  { time: 'Renewal audit', action: 'Analytics: ABIM internal medicine MOC CME on pace? GI subspecialty MOC current? Transplant hepatology subspecialty CE content-appropriate? State medical license CME complete? DEA valid? UNOS/OPTN training current? AASLD membership active? Complete transplant hepatologist credential audit 90 days before earliest renewal. Three ABIM certifications, state board, DEA, and UNOS documentation maintained separately.' },
]

export default function ForTransplantHepatologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Transplant Hepatologists"
        title={
          <>
            Three ABIM certifications maintained.
            <br />
            <em className="not-italic text-gold">UNOS training current. Immunosuppression CE tracked.</em>
          </>
        }
        lede="Transplant hepatologists manage ABIM internal medicine, gastroenterology subspecialty, and transplant hepatology subspecialty MOC on three independent CE content tracks, state medical license biennial CME, DEA 3-year registration, UNOS/OPTN transplant program training requirements that change annually with organ allocation policy updates, annual immunosuppression protocol CE as post-transplant management evolves, and professional development at AASLD and ACG simultaneously. Momenties tracks CME by transplant hepatologist credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar in one view."
        crumbs={[{ label: 'For Transplant Hepatologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How transplant hepatologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for transplant hepatologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Transplant hepatologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through three ABIM certification cycles, annual UNOS training, and post-transplant protocol CE.</h2>
          </Reveal>
          <div className="space-y-3">
            {TXHEP_WORKFLOW.map((step, i) => (
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
                &ldquo;ABIM tracks three certifications for me: internal medicine, gastroenterology, and transplant hepatology. Each one is a separate continuous MOC certification with different CME content requirements. A hepatology conference is great for transplant hepatology CME but it may not satisfy my GI subspecialty content requirements. UNOS training is mandatory every year and the organ allocation policy changes regularly — if I&apos;m not current I lose my key personnel designation which affects our program. State license is biennial. DEA is 3 years. Most CME logging systems let me log hours but don&apos;t let me assign them to three different ABIM certifications simultaneously. Being able to log one AASLD conference session and have it apply to two or three counters at once was the first time I felt like my CME system actually matched how my credentials work.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">V</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Victor A., MD</div>
                  <div className="text-xs text-muted-foreground">Transplant hepatologist and medical director, academic liver transplant program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All transplant hepatologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM internal medicine MOC CME — continuous',
                'ABIM gastroenterology subspecialty MOC — GI content domain tracking',
                'ABIM transplant hepatology subspecialty — hepatology and transplant content',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'UNOS/OPTN transplant program training — annual policy update',
                'Annual immunosuppression protocol CE — post-transplant management',
                'AASLD and ACG conference CME planning by all three ABIM certification applicabilities',
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
        title="Three ABIM certifications maintained."
        subtitle="CME tracking across ABIM internal medicine, GI subspecialty, and transplant hepatology certifications, UNOS training, and professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
