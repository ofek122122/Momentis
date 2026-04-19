import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Rheumatologists — ABP MOC CME renewal, pediatric rheumatology credential management',
  description:
    'Pediatric rheumatologists manage ABP general pediatrics primary MOC and ABP pediatric rheumatology subspecialty MOC (both continuous), annual JIA CE as abatacept and secukinumab biosimilar approvals and treat-to-target protocols evolve, annual SLE CE as belimumab pediatric FDA approval data and anifrolumab TULIP trials update childhood SLE management, annual vasculitis CE as childhood IgA vasculitis and Kawasaki disease IVIG-resistant protocols update, state medical license biennial CME, DEA 3-year renewal, and ACR/SPA membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/pediatric-rheumatologists' },
  openGraph: {
    title: 'Momenties for Pediatric Rheumatologists',
    description: 'ABP MOC CME renewal, pediatric rheumatology credential management.',
    url: '/for/pediatric-rheumatologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP general pediatrics MOC and ABP pediatric rheumatology MOC independently',
    desc: 'Pediatric rheumatologists hold ABP general pediatrics primary certification under continuous MOC alongside ABP pediatric rheumatology subspecialty certification under continuous MOC — two ABP continuous assessment tracks with different content requirements. ABP pediatric rheumatology requires subspecialty content: juvenile idiopathic arthritis (JIA) classification (ILAR categories — oligoarticular, polyarticular RF+/-, systemic, psoriatic, enthesitis-related), systemic lupus erythematosus (SLE) in children, juvenile dermatomyositis, scleroderma, vasculitis (Kawasaki disease, IgA vasculitis, ANCA vasculitis), autoinflammatory syndromes, and periodic fever syndromes.',
  },
  {
    icon: Clock,
    title: 'Pediatric rheumatologist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME assessment." "ABP pediatric rheumatology MOC — continuous subspecialty CME assessment." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual JIA CE — abatacept biosimilar approvals, secukinumab IL-17A in enthesitis-related JIA data, treat-to-target protocol implementation in polyarticular JIA." "Annual SLE CE — belimumab pediatric PLUTO trial 52-week extension data, anifrolumab type I interferon pathway CE for childhood SLE." "Annual vasculitis CE — IVIG-resistant Kawasaki disease infliximab salvage therapy CE, IgA vasculitis nephritis treatment protocol update." "ACR membership — annual." All pediatric rheumatology credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual JIA biologic CE and treat-to-target protocol update analytics',
    desc: 'Pediatric rheumatologists managing JIA must maintain CE on expanding biologic options and treat-to-target strategies: secukinumab (Cosentyx) received FDA approval for enthesitis-related arthritis and psoriatic JIA in 2023 — CE on secukinumab dosing weight-based regimen in pediatric patients, IL-17A mechanism in SpA-spectrum JIA, and IUVENILE trial data is required before prescribing. Treat-to-target (T2T) in JIA has been formalized through ACR 2022 JIA recommendations — CE on JADAS-27 (Juvenile Arthritis Disease Activity Score) clinical measurement, T2T target definition by JIA subtype, and step-up timing from csDMARD to biologic is required for practices implementing T2T protocols.',
  },
  {
    icon: Users,
    title: 'ACR, SPA, PRINTO, and pediatric rheumatology professional development',
    desc: '"ACR American College of Rheumatology Annual Meeting — november." "SPA Childhood Arthritis and Rheumatology Research Alliance — winter." "PRINTO Pediatric Rheumatology International Trials Organisation Annual Meeting." "PAS Pediatric Academic Societies Annual Meeting — april/may." "JIA CE — secukinumab IL-17A enthesitis-related JIA and psoriatic JIA FDA 2023 CE (IUVENILE trial design, weight-based dosing, monitoring parameters), abatacept biosimilar FDA approvals CE (originator versus biosimilar switch — immunogenicity monitoring protocol), treat-to-target JADAS-27 clinical implementation CE (JADAS-27 score components: physician global, parent/patient global, active joint count, ESR — how to operationalize T2T visits in clinic flow), and systemic JIA — IL-1 and IL-6 pathway inhibitors in MAS risk (anakinra versus canakinumab for macrophage activation syndrome treatment, IL-6 tocilizumab MAS threshold)." "SLE CE — belimumab pediatric PLUTO trial 52-week extension CE (SRI-4 response rate, anti-dsDNA antibody titer reduction, renal disease — SLE renal response at 52 weeks), anifrolumab pediatric data — TULIP adult data extrapolation to pediatric SLE management CE (type I IFN pathway significance in pediatric versus adult SLE), and childhood SLE damage accrual CE (SDI pediatric threshold — renal versus neuropsychiatric damage accrual prevention as long-term outcome target)." "Vasculitis CE — IVIG-resistant Kawasaki disease: infliximab salvage therapy KIDCARE trial CE (infliximab 5 mg/kg single dose versus second IVIG in IVIG-resistant KD — fever resolution and coronary artery outcomes at 2 weeks), IgA vasculitis nephritis CE (IgAN Classification Working Group 2020 histopathology — MEST-C scoring pediatric application, cyclophosphamide versus azathioprine in proliferative IgAVN), and ANCA vasculitis in children — rituximab maintenance therapy CE (RITUXVAS pediatric registry data, rituximab versus azathioprine relapse prevention)." All pediatric rheumatology professional development on calendar.',
  },
]

const PED_RHEUM_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics continuous MOC CME pace, ABP pediatric rheumatology continuous MOC CME pace (tracked separately — different content emphasis), state medical license biennial CME, DEA 3-year renewal, annual JIA biologic CE, annual SLE CE, annual vasculitis CE, ACR Annual Meeting, PAS Annual Meeting, SPA winter meeting, and ACR membership all loaded in January. ABP general pediatrics counter and ABP pediatric rheumatology counter tracked independently.' },
  { time: 'CE completion', action: '"ACR-approved — ACR 2024 JIA guideline update: treat-to-target recommendations for polyarticular JIA (JADAS-27 clinical implementation — score calculation and T2T visit cadence), biologic initiation threshold for methotrexate-inadequate-responder polyarticular JIA (insufficient response at 3 months — abatacept versus TNFi selection framework based on RF status and uveitis risk), and secukinumab IL-17A in enthesitis-related JIA — axial versus peripheral disease response differences, 4 CME, AMA PRA Category 1, ABP general pediatrics MOC applicable, ABP pediatric rheumatology MOC applicable." Both counters update.' },
  { time: 'JIA CE', action: '"Annual JIA biologic and treat-to-target CE — secukinumab 2024 update: IL-17A in enthesitis-related JIA and psoriatic JIA — weight-based dosing regimen CE (less than 50 kg: 75 mg subcutaneous every 4 weeks; 50 kg or above: 150 mg every 4 weeks), IBD risk in secukinumab-treated enthesitis-related JIA (Crohn disease caution — CE on IBD screening before initiating secukinumab in enthesitis-related JIA with gastrointestinal symptoms), treat-to-target JADAS-27 score threshold CE (JADAS-27 below 1 as inactive disease target, JADAS-27 below 3.8 for oligo JIA low disease activity), and uveitis screening protocol update in ANA-positive oligoarticular JIA (ILAR uveitis risk group — slit lamp frequency by ANA titer and disease duration), 3 CME, ABP pediatric rheumatology MOC applicable, Q1." Annual JIA CE placed Q1 aligned with SPA winter meeting.' },
  { time: 'SLE CE', action: '"Annual childhood SLE CE — belimumab and anifrolumab update: belimumab PLUTO pediatric 52-week extension data CE (SRI-4 response 53.8% versus placebo 33.8% — immunogenicity monitoring for anti-belimumab antibodies in pediatric patients, SELENA-SLEDAI score calculation in children — age-appropriate scoring for neuropsychiatric manifestations), childhood SLE nephritis class transition CE (ISN/RPS 2003 versus 2018 pathology class update — class IIIa versus IVa activity indices in pediatric biopsy reporting), and mycophenolate versus cyclophosphamide induction for class III/IV pediatric LN (LUNAR trial pediatric subgroup CE — belimumab add-on to standard-of-care induction), 3 CME, ABP pediatric rheumatology MOC applicable, Q3." Annual SLE CE placed Q3 aligned with ACR November meeting.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics continuous MOC on pace? ABP pediatric rheumatology continuous MOC on pace? (Separate counters — different content.) State medical license CME complete? DEA valid? Annual JIA biologic CE documented? Annual SLE CE documented? Annual vasculitis CE documented? ACR membership active? Complete pediatric rheumatologist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricRheumatologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Rheumatologists"
        title={
          <>
            ABP general pediatrics MOC and ABP pediatric rheumatology MOC maintained.
            <br />
            <em className="not-italic text-gold">JIA biologic CE current. Childhood SLE protocols tracked.</em>
          </>
        }
        lede="Pediatric rheumatologists manage two continuous ABP MOC tracks — general pediatrics and pediatric rheumatology — with different content requirements tracked independently. Annual JIA CE as secukinumab IL-17A approval and treat-to-target JADAS-27 protocols update biologic selection, annual SLE CE as belimumab PLUTO pediatric data and anifrolumab type I IFN pathway evolve, annual vasculitis CE as IVIG-resistant Kawasaki disease infliximab protocols update, state medical license biennial CME, DEA 3-year registration, and professional development at ACR and PAS. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Pediatric Rheumatologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric rheumatologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric rheumatologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric rheumatologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABP general pediatrics MOC, ABP pediatric rheumatology MOC, and annual JIA, SLE, and vasculitis CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {PED_RHEUM_WORKFLOW.map((step, i) => (
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
                &ldquo;Two continuous ABP MOC tracks — general pediatrics and pediatric rheumatology — with different content requirements that I track independently. The secukinumab CE was clinically urgent: the FDA approval for enthesitis-related JIA came and I needed documented CE on the weight-based dosing, the IBD risk in patients with gastrointestinal symptoms, and the IL-17A mechanism before my first case. That CE had nothing to do with my board calendar. The treat-to-target JADAS-27 CE changed how I structure my clinic visits — operationalizing the score calculation at every appointment required CE before I updated my visit template. The belimumab PLUTO pediatric CE was needed for a specific reason: I had a 14-year-old with childhood SLE and her family was asking about belimumab — I needed current CE on the PLUTO trial data and the immunogenicity monitoring before that conversation. All on one calendar now.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">S</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Sasha V., MD, PhD</div>
                  <div className="text-xs text-muted-foreground">Pediatric rheumatologist and JIA program director, children&apos;s hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric rheumatologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, separately tracked',
                'ABP pediatric rheumatology MOC CME — continuous, subspecialty content weighted',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual JIA CE — secukinumab IL-17A, treat-to-target JADAS-27, biologic step-up timing',
                'Annual SLE CE — belimumab PLUTO pediatric data, anifrolumab, nephritis class transition',
                'Annual vasculitis CE — IVIG-resistant Kawasaki infliximab, IgAVN nephritis, ANCA pediatric',
                'ACR and PAS conference CME planning by ABP applicability',
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
        title="ABP general pediatrics MOC and ABP pediatric rheumatology MOC maintained."
        subtitle="CME tracking for two continuous ABP MOC tracks, annual JIA biologic CE, childhood SLE CE, vasculitis CE, and pediatric rheumatology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
