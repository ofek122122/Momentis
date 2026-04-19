import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Hematologists — ABIM MOC CME renewal, hematology credential management',
  description:
    'Hematologists manage ABIM internal medicine and hematology subspecialty MOC continuous CME with hematology content, state medical license biennial CME, DEA 3-year renewal, annual bone marrow transplant program compliance (if applicable), CAR-T REMS training requirements, tumor board documentation, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full hematologist credential calendar.',
  alternates: { canonical: '/for/hematologists' },
  openGraph: {
    title: 'Momenties for Hematologists',
    description: 'ABIM MOC CME renewal, hematology credential management.',
    url: '/for/hematologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM internal medicine and hematology subspecialty MOC independently',
    desc: 'Hematologists hold ABIM primary internal medicine certification and hematology subspecialty certification under continuous MOC — two ABIM credentials with different CME content requirements. Internal medicine MOC requires general internal medicine CME; hematology subspecialty MOC requires hematology-specific content including benign hematology, malignant hematology, coagulation disorders, and cellular therapy. Hematologists with oncology dual training maintain hematology-oncology subspecialty MOC on yet another content track. State medical license biennial CME runs on a fourth independent cycle.',
  },
  {
    icon: Clock,
    title: 'Hematologist multi-credential renewal calendar',
    desc: '"ABIM internal medicine MOC — continuous CME." "ABIM hematology subspecialty MOC — hematology content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "CAR-T REMS training — product-specific, annual or per new product." "Annual tumor board documentation." "ASH membership — annual." All hematologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'CAR-T REMS requirements and bone marrow transplant program compliance analytics',
    desc: 'Hematologists prescribing CAR-T cell therapies must complete REMS (Risk Evaluation and Mitigation Strategy) training for each product — tisagenlecleucel, axicabtagene ciloleucel, idecabtagene vicleucel, and others have separate REMS programs with separate training requirements. CAR-T REMS training is product-specific and may require annual recertification. Bone marrow transplant program FACT or AABB accreditation compliance requires annual staff training separate from ABIM MOC. Hematologists at transplant programs track transplant program compliance CE distinctly from personal CME.',
  },
  {
    icon: Users,
    title: 'ASH, ASCO, and hematology professional involvement',
    desc: '"ASH Annual Meeting — december." "ASCO Annual Meeting — june." "EHA Annual Congress (Europe)." "AABB Annual Meeting." "Sickle cell disease and hemoglobinopathy CE." "Myeloid malignancy (AML, MDS, MPN) CE." "CAR-T and bispecific antibody therapy management CE." "Hemostasis and thrombosis update CE." All hematology professional development on calendar. ASH conference CME tagged by ABIM internal medicine MOC and hematology subspecialty domain applicability.',
  },
]

const HEM_WORKFLOW = [
  { time: 'Annual planning', action: 'ABIM internal medicine MOC CME pace, ABIM hematology subspecialty MOC CE pace (hematology content), state medical license biennial CME, DEA 3-year renewal, CAR-T REMS training updates for each active product, ASH Annual Meeting, ASCO Annual Meeting, and ASH membership all loaded in January. ABIM primary MOC counter, hematology subspecialty CE counter, and state licensure CME tracked independently.' },
  { time: 'CME completion', action: '"ASH-approved — BCL-2 inhibition in AML: venetoclax combination regimens, response assessment by measurable residual disease, and resistance mechanisms in relapsed/refractory AML, 2 CME, AMA PRA Category 1, ABIM MOC applicable, hematology subspecialty applicable — malignant hematology domain." ABIM MOC counter updates. Hematology subspecialty CE counter updates. State licensure CME updates. Malignant hematology content confirmed at logging.' },
  { time: 'CAR-T REMS', action: '"CAR-T REMS training update — tisagenlecleucel REMS annual recertification, cytokine release syndrome grading (ASTCT criteria), immune effector cell-associated neurotoxicity (ICANS) management, Q1." Each CAR-T product has a separate REMS program with separate training requirements. REMS training tracked per product, per prescriber. New CAR-T REMS training required before prescribing each new product added to the formulary. Annual recertification required by some products — tracked separately from ABIM MOC CME.' },
  { time: 'Transplant compliance', action: '"Annual bone marrow transplant program staff training — FACT accreditation required CE, graft-versus-host disease management protocol updates, and cellular therapy product handling, Q1." Bone marrow transplant program FACT accreditation compliance CE placed as an institutional requirement for hematologists at transplant programs. FACT accreditation requires documented annual staff training covering transplant-specific protocols separate from individual physician ABIM MOC.' },
  { time: 'Renewal audit', action: 'Analytics: ABIM internal medicine MOC CME on pace? Hematology subspecialty content requirements satisfied? State medical license CME complete? CAR-T REMS training current for all active products? DEA valid? Transplant program compliance documented (if applicable)? ASH membership active? Complete hematologist credential audit 90 days before earliest renewal. ABIM, state board, REMS programs, and transplant accreditation documentation maintained separately.' },
]

export default function ForHematologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Hematologists"
        title={
          <>
            ABIM MOC and hematology subspecialty maintained.
            <br />
            <em className="not-italic text-gold">CAR-T REMS current. Transplant compliance documented.</em>
          </>
        }
        lede="Hematologists manage ABIM internal medicine continuous MOC and hematology subspecialty MOC with separate content domain requirements, state medical license biennial CME, DEA 3-year registration, CAR-T cell therapy product-specific REMS training requirements that vary by product and require separate tracking, bone marrow transplant program FACT accreditation compliance CE at transplant centers, and professional development at ASH and ASCO simultaneously. Momenties tracks CME by hematologist credential, surfaces renewal deadlines 90 days early, and manages the full hematologist credential calendar in one view."
        crumbs={[{ label: 'For Hematologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How hematologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for hematologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Hematologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABIM MOC cycle, hematology subspecialty requirement, and CAR-T REMS training obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {HEM_WORKFLOW.map((step, i) => (
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
                &ldquo;ABIM MOC covers my internal medicine and my hematology subspecialty but they have different content requirements. I need to track whether my CME content is hitting hematology domains, not just accumulating total CME hours. My state license is biennial. I prescribe three different CAR-T products — each one has its own REMS with its own training requirement and some of them have annual recertification. That&apos;s three separate REMS programs running in parallel, separate from my board CME. We&apos;re a FACT-accredited transplant center so there are annual staff training requirements on top of that. DEA is 3 years. Before Momenties I had CAR-T REMS training scattered across three different manufacturer portals and everything else in my email. Having it in one calendar saved me from a REMS lapse last year.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">W</div>
                <div>
                  <div className="text-sm font-medium text-foreground">William B., MD</div>
                  <div className="text-xs text-muted-foreground">Hematologist-oncologist, academic blood and marrow transplant and cellular therapy program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All hematologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM internal medicine MOC CME — continuous',
                'ABIM hematology subspecialty MOC — hematology content domain tracking',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'CAR-T product REMS training — per product, annual recertification',
                'Bone marrow transplant FACT accreditation compliance CE (if applicable)',
                'Annual tumor board documentation — institutional credentialing requirement',
                'ASH and ASCO conference CME planning by ABIM primary and hematology subspecialty applicability',
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
        title="ABIM MOC and hematology subspecialty maintained."
        subtitle="CME tracking with hematology domain requirements, multi-product CAR-T REMS calendar, transplant compliance, and professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
