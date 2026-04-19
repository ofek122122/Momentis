import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Transplant Nephrologists — ABIM MOC CME renewal, transplant nephrology credential management',
  description:
    'Transplant nephrologists manage ABIM internal medicine primary MOC with nephrology subspecialty content, ABIM nephrology subspecialty MOC, ABIM transplant nephrology subspecialty MOC on an independent cycle, annual UNOS/OPTN key personnel training, annual immunosuppression protocol CE, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full transplant nephrologist credential calendar.',
  alternates: { canonical: '/for/transplant-nephrologists' },
  openGraph: {
    title: 'Momenties for Transplant Nephrologists',
    description: 'ABIM MOC CME renewal, transplant nephrology credential management.',
    url: '/for/transplant-nephrologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM IM MOC, nephrology subspecialty, and transplant nephrology independently',
    desc: 'Transplant nephrologists hold ABIM internal medicine primary certification under continuous MOC, ABIM nephrology subspecialty certification on a second MOC cycle, and ABIM transplant nephrology subspecialty certification on a third independent cycle — three ABIM credentials with different content requirements. ABIM transplant nephrology subspecialty requires transplant-specific content including calcineurin inhibitor monitoring, rejection classification (Banff criteria), donor-specific antibody management, post-transplant complications (PTLD, BK nephropathy, transplant renal artery stenosis), and deceased versus living donor evaluation. Each ABIM certification tracks CE independently.',
  },
  {
    icon: Clock,
    title: 'Transplant nephrologist multi-credential renewal calendar',
    desc: '"ABIM internal medicine MOC — continuous CME." "ABIM nephrology subspecialty MOC — nephrology content." "ABIM transplant nephrology MOC — transplant content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual UNOS/OPTN key personnel training — designated key physician." "Annual immunosuppression protocol CE." "AST membership — annual." "ASN membership — annual." All transplant nephrologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual UNOS/OPTN training and immunosuppression protocol CE analytics',
    desc: 'UNOS/OPTN policy requires annual organ allocation education for designated transplant program key personnel — including the transplant nephrologist serving as the program&apos;s key physician. Kidney allocation system changes and deceased donor organ acceptance criteria are updated annually, and key personnel designation requires current annual training to maintain OPTN program compliance. Annual immunosuppression protocol CE: calcineurin inhibitor-free regimens, belatacept protocols, C2 monitoring versus trough monitoring, and novel late rejection rescue therapies (daratumumab, tocilizumab for antibody-mediated rejection) change rapidly — annual CE is essential for transplant nephrologists managing complex rejection episodes.',
  },
  {
    icon: Users,
    title: 'AST, ASN, and transplant nephrology professional involvement',
    desc: '"AST Annual Meeting — may." "ASN Kidney Week — november." "ISHLT Annual Meeting (relevant for combined kidney-heart transplant programs)." "ASTS Annual Meeting (American Society of Transplant Surgeons)." "Kidney transplant CE — KDIGO 2024 kidney transplant work group guideline update, BK polyomavirus nephropathy management." "Rejection CE — Banff 2022 classification for T-cell mediated rejection and ABMR, daratumumab and tocilizumab in chronic ABMR." "PTLD CE — EBV-related PTLD risk stratification, rituximab versus reduction of immunosuppression approach." "Living donor CE — expanded living donor criteria, ABO-incompatible transplantation protocols." All transplant nephrology professional development on calendar. AST and ASN conference CME tagged by ABIM IM, nephrology, and transplant applicability.',
  },
]

const TXNEPH_WORKFLOW = [
  { time: 'Annual planning', action: 'ABIM IM MOC CME pace (nephrology/transplant content weighted), ABIM nephrology subspecialty CE pace, ABIM transplant nephrology CE pace, state medical license biennial CME, DEA 3-year renewal, annual UNOS/OPTN training (Q1), annual immunosuppression protocol CE, AST Annual Meeting, ASN Kidney Week, and AST and ASN memberships all loaded in January. Three ABIM counters tracked independently. UNOS training placed Q1 before spring OPTN program compliance cycle.' },
  { time: 'CE completion', action: '"AST-approved — BK polyomavirus nephropathy management: quantitative BK viremia threshold for immunosuppression reduction, comparison of tacrolimus dose reduction versus switching strategies, cidofovir versus leflunomide rescue therapy in proven BKVAN, and renal biopsy surveillance protocol for BK viremia above 10,000 copies/mL, 2 CME, AMA PRA Category 1, ABIM MOC applicable, ABIM nephrology applicable, ABIM transplant nephrology applicable — BK nephropathy domain." All three ABIM counters update. Triple applicability logged.' },
  { time: 'UNOS training', action: '"Annual UNOS/OPTN key personnel education — kidney allocation policy updates: KDPI calculation methodology refinement, pediatric priority in kidney allocation, simultaneous liver-kidney eligibility criteria 2024 revision, and living donor paired exchange program expansion, 2 CE, Q1." Annual UNOS training placed Q1. OPTN designated key physician training required before the annual OPTN program metrics reporting cycle. Lapse in training triggers OPTN program compliance review — separate from individual physician credential consequences.' },
  { time: 'Protocol CE', action: '"Annual immunosuppression protocol CE — AST consensus: belatacept conversion from calcineurin inhibitor in CNI-related nephrotoxicity — conversion criteria, rejection risk stratification, post-conversion surveillance protocol, and role in sensitized patients with DSA, 3 CME, Q2." Annual immunosuppression protocol CE placed Q2. KDIGO transplant guidelines update annually. Novel rejection therapies (daratumumab for ABMR, tocilizumab for chronic ABMR) approved on adult data with early pediatric and off-label use spreading — annual CE ensures current knowledge before complex rejection cases require treatment decisions.' },
  { time: 'Renewal audit', action: 'Analytics: ABIM IM MOC CME on pace? ABIM nephrology subspecialty content satisfied? ABIM transplant nephrology content satisfied? State medical license CME complete? DEA valid? Annual UNOS/OPTN training documented? Immunosuppression protocol CE current? AST and ASN memberships active? Complete transplant nephrologist credential audit 90 days before earliest renewal. All three ABIM counters reviewed independently.' },
]

export default function ForTransplantNephrologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Transplant Nephrologists"
        title={
          <>
            Three ABIM certifications tracked independently.
            <br />
            <em className="not-italic text-gold">UNOS key personnel training current. Immunosuppression CE documented.</em>
          </>
        }
        lede="Transplant nephrologists manage ABIM internal medicine continuous MOC, ABIM nephrology subspecialty MOC, and ABIM transplant nephrology subspecialty MOC — three independent ABIM certifications with different content requirements. Plus state medical license biennial CME, DEA 3-year registration, annual UNOS/OPTN key personnel training for transplant program compliance, annual immunosuppression protocol CE as rejection rescue therapies evolve, and professional development at AST and ASN simultaneously. Momenties tracks CME by transplant nephrologist credential and manages the full calendar."
        crumbs={[{ label: 'For Transplant Nephrologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How transplant nephrologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for transplant nephrologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Transplant nephrologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through three ABIM MOC cycles, annual UNOS key personnel training, and immunosuppression protocol CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {TXNEPH_WORKFLOW.map((step, i) => (
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
                &ldquo;Three ABIM certifications — internal medicine, nephrology, transplant nephrology. ABIM tracks them separately and the CE I earn at AST Transplant often counts for all three, but the CE I earn at ASN Kidney Week for general nephrology content doesn&apos;t always count for my transplant nephrology subspecialty. I have to make the determination for each session and log each counter separately. UNOS requires me to complete the annual key physician training every year — if that lapses our program loses key physician designation and that&apos;s an OPTN compliance event, not just a personal credential issue. The rejection therapy landscape has changed completely in the last 3 years with daratumumab and tocilizumab for ABMR — I do annual CE specifically on rejection management regardless of board renewal timing. State license biennial. DEA 3-year.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Jerome T., MD</div>
                  <div className="text-xs text-muted-foreground">Transplant nephrologist and kidney transplant program key physician, academic transplant institute</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All transplant nephrologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM internal medicine MOC CME — continuous, nephrology/transplant content weighted',
                'ABIM nephrology subspecialty MOC — CKD, dialysis, AKI domains',
                'ABIM transplant nephrology MOC — rejection, immunosuppression, PTLD domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual UNOS/OPTN key personnel training — designated key physician requirement',
                'Annual immunosuppression protocol CE — rejection rescue therapy updates',
                'AST and ASN conference CME planning by ABIM IM, nephrology, and transplant applicability',
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
        subtitle="CME tracking for ABIM IM, nephrology, and transplant nephrology MOC, annual UNOS key personnel training, immunosuppression protocol CE, and transplant nephrology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
