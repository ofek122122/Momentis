import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Hematologists — ABP MOC CME renewal, pediatric hematology credential management',
  description:
    'Pediatric hematologists manage ABP general pediatrics primary MOC with pediatric hematology/oncology subspecialty content, ABP pediatric hematology/oncology subspecialty certification, FACT transplant compliance CE for stem cell transplant programs, annual gene therapy CE for sickle cell disease programs, state medical license biennial CME, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full pediatric hematologist credential calendar.',
  alternates: { canonical: '/for/pediatric-hematologists' },
  openGraph: {
    title: 'Momenties for Pediatric Hematologists',
    description: 'ABP MOC CME renewal, pediatric hematology credential management.',
    url: '/for/pediatric-hematologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP pediatrics MOC and pediatric hematology/oncology subspecialty independently',
    desc: 'Pediatric hematologists hold ABP general pediatrics primary certification under continuous MOC and ABP pediatric hematology/oncology subspecialty certification on a separate cycle — two ABP credentials with different content requirements. ABP pediatric hematology/oncology subspecialty requires hematology-specific content including sickle cell disease management, hemophilia and bleeding disorders, pediatric bone marrow failure syndromes, thalassemia, red cell enzyme deficiencies, and stem cell transplantation for non-malignant disease. ABP general pediatrics MOC requires broader content. FACT transplant program compliance CE is an accreditation requirement separate from ABP for hematologists directing transplant programs.',
  },
  {
    icon: Clock,
    title: 'Pediatric hematologist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME." "ABP pediatric hematology/oncology subspecialty — hematology content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual FACT transplant compliance CE (if transplant program)." "Annual gene therapy CE for sickle cell disease (if SCD gene therapy program)." "ASPHO membership — annual." "ASH membership — annual." All pediatric hematologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual gene therapy CE and FACT transplant compliance analytics',
    desc: 'Gene therapy for sickle cell disease has transformed pediatric hematology — betibeglogene spartacus (Zynteglo) and exagamglogene autotemcel (Casgevy) approvals in 2023 created new practice requirements for hematologists managing SCD gene therapy programs. Annual gene therapy CE on eligibility criteria, pre-collection workup, post-infusion monitoring, and long-term follow-up protocols is a practice requirement regardless of board renewal timing. FACT transplant program accreditation requires annual compliance training for designated program staff — separate from ABP MOC — covering cell collection, processing, and infusion standards.',
  },
  {
    icon: Users,
    title: 'ASPHO, ASH, and pediatric hematology professional involvement',
    desc: '"ASH Annual Meeting — december." "ASPHO Annual Meeting — may." "BMT Tandem Meetings — february." "Sickle cell disease CE — hydroxyurea optimization, L-glutamine evidence review, voxelotor and crizanlizumab approvals, gene therapy eligibility." "Hemophilia CE — emicizumab subcutaneous prophylaxis, extended half-life factor products, gene therapy pipeline for hemophilia A and B." "Bone marrow failure CE — aplastic anemia eltrombopag plus IST, Fanconi anemia transplant outcomes." "Iron overload CE — luspatercept in transfusion-dependent thalassemia, deferasirox versus deferiprone monitoring." All pediatric hematology professional development on calendar. ASH and ASPHO conference CME tagged by ABP primary and subspecialty applicability.',
  },
]

const PEDHEME_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics MOC CME pace (hematology content weighted), ABP pediatric hematology/oncology subspecialty CE pace, state medical license biennial CME, DEA 3-year renewal, annual FACT transplant compliance CE (if transplant program), annual SCD gene therapy CE (if gene therapy program), ASH Annual Meeting, ASPHO Annual Meeting, and ASH and ASPHO memberships all loaded in January. ABP primary counter, hematology/oncology subspecialty counter, and state licensure CME tracked independently.' },
  { time: 'CE completion', action: '"ASH-approved — gene therapy in sickle cell disease: exagamglogene autotemcel mechanism (CRISPR-Cas9 BCL11A enhancer editing), patient eligibility criteria (age, organ function, HbS genotype), pre-collection hydroxyurea washout protocol, infusion center requirements, and long-term hemoglobin monitoring post-gene therapy, 3 CME, AMA PRA Category 1, ABP MOC applicable, ABP pediatric hematology applicable — sickle cell disease domain." ABP primary counter updates. Hematology subspecialty counter updates. State licensure CME updates.' },
  { time: 'FACT compliance', action: '"Annual FACT transplant compliance training — FACT cellular therapy standards 8th edition: donor eligibility determination for allogeneic pediatric donors, minimum essential documentation for HPC collection, storage, and infusion, and critical incident reporting to FACT accreditation board, 3 CE, Q1." Annual FACT compliance training placed Q1 as program accreditation requirement. FACT cellular therapy standards are updated with each edition — annual training ensures key program personnel are current before the FACT annual inspection cycle.' },
  { time: 'Gene therapy CE', action: '"Annual SCD gene therapy program CE — FACT cellular therapy gene therapy standards supplement: betibeglogene spartacus versus exagamglogene autotemcel patient selection, REMS program requirements for approved gene therapies, engraftment monitoring with hemoglobin electrophoresis post-infusion, and fertility preservation counseling before myeloablative conditioning, 2 CME, ABP applicable — gene therapy domain, Q2." Annual SCD gene therapy CE placed Q2 before summer conditioning season when SCD gene therapy programs typically schedule myeloablative conditioning and infusion.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics MOC CME on pace? ABP pediatric hematology subspecialty content satisfied? State medical license CME complete? DEA valid? Annual FACT compliance training documented? Gene therapy CE current (if SCD gene therapy program)? ASH and ASPHO memberships active? Complete pediatric hematologist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricHematologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Hematologists"
        title={
          <>
            ABP MOC and pediatric hematology subspecialty maintained.
            <br />
            <em className="not-italic text-gold">Gene therapy CE current. FACT transplant compliance tracked.</em>
          </>
        }
        lede="Pediatric hematologists manage ABP general pediatrics continuous MOC with hematology/oncology subspecialty content, ABP pediatric hematology/oncology subspecialty certification on a separate cycle, state medical license biennial CME, DEA 3-year registration, annual FACT transplant program compliance CE for transplant program accreditation, annual sickle cell disease gene therapy CE as betibeglogene spartacus and exagamglogene autotemcel create new practice requirements, and professional development at ASH and ASPHO simultaneously. Momenties tracks CME by credential, surfaces renewal deadlines 90 days early, and manages the full calendar."
        crumbs={[{ label: 'For Pediatric Hematologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric hematologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric hematologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric hematologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABP MOC cycles, pediatric hematology subspecialty, and annual FACT compliance and gene therapy CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {PEDHEME_WORKFLOW.map((step, i) => (
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
                &ldquo;ABP tracks my general pediatrics and my hematology/oncology subspecialty separately. I run a sickle cell disease program that is now offering gene therapy — both Casgevy and Zynteglo. When those approvals came through in late 2023, I needed to get current on eligibility criteria, myeloablative conditioning protocols, and REMS requirements before I could start enrolling patients. That CE is a practice requirement with a hard deadline — it doesn&apos;t wait for my board renewal. My program has FACT accreditation, which requires annual compliance training for program staff including me. ASH Annual Meeting in December gives me the most hematology subspecialty CE in one week. State license biennial. DEA 3-year. Before Momenties I was tracking FACT compliance in a separate institutional system and my SCD gene therapy CE in a folder on my desktop.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">K</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Kevin O., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric hematologist and sickle cell disease gene therapy program director, children&apos;s cancer center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric hematologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, hematology content weighted',
                'ABP pediatric hematology/oncology subspecialty — SCD, bleeding disorders, BMF domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual FACT transplant compliance training — program accreditation requirement',
                'Annual SCD gene therapy CE — REMS, eligibility, post-infusion monitoring',
                'ASH membership renewal — annual',
                'ASH and ASPHO conference CME planning by ABP primary and subspecialty applicability',
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
        title="ABP MOC and pediatric hematology subspecialty maintained."
        subtitle="CME tracking for ABP dual certification, SCD gene therapy CE, FACT transplant compliance training, and pediatric hematology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
