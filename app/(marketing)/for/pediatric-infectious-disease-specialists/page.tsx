import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Infectious Disease Specialists — ABP MOC CME renewal, pediatric ID credential management',
  description:
    'Pediatric infectious disease specialists manage ABP general pediatrics primary MOC with pediatric ID subspecialty content, ABP pediatric infectious diseases subspecialty certification on a separate cycle, ACLS and PALS 2-year renewals, annual antimicrobial stewardship CE for hospital stewardship program leadership, annual vaccine-preventable disease CE as pediatric vaccine schedules update, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/pediatric-infectious-disease-specialists' },
  openGraph: {
    title: 'Momenties for Pediatric Infectious Disease Specialists',
    description: 'ABP MOC CME renewal, pediatric ID credential management.',
    url: '/for/pediatric-infectious-disease-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP pediatrics MOC and pediatric infectious diseases subspecialty independently',
    desc: 'Pediatric infectious disease specialists hold ABP general pediatrics primary certification under continuous MOC and ABP pediatric infectious diseases subspecialty certification on a separate cycle — two ABP credentials with different content requirements. ABP pediatric infectious diseases subspecialty requires ID-specific content including bacterial infections (Staphylococcus aureus, gram-negative bacteremia, neonatal sepsis), viral infections (CMV, EBV, HIV in children, viral hepatitis, RSV), fungal infections (invasive candidiasis, aspergillosis), parasitic infections (malaria, toxoplasmosis, helminthic diseases), antimicrobial pharmacology and stewardship, and vaccine-preventable diseases. ABP general pediatrics MOC runs on a continuous cycle with different content requirements.',
  },
  {
    icon: Clock,
    title: 'Pediatric ID specialist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME." "ABP pediatric infectious diseases subspecialty — ID content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "ACLS — 2-year renewal." "PALS — 2-year renewal." "Annual antimicrobial stewardship CE — IDSA/SHEA pediatric stewardship program standards." "Annual vaccine schedule CE — ACIP pediatric immunization schedule updates." "PIDS membership — annual." "IDSA membership — annual." All pediatric ID specialist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual antimicrobial stewardship CE and ACIP pediatric vaccine schedule analytics',
    desc: 'Pediatric ID specialists directing antimicrobial stewardship programs (ASPs) must maintain CE on IDSA/SHEA stewardship program standards — The Joint Commission leadership standard LD.04.03.11 requires hospitals to have an ASP with physician leadership, and annual CE on stewardship interventions (prospective audit and feedback, prior authorization, de-escalation protocols, IV-to-oral conversion criteria) is a program quality requirement separate from ABP MOC. Annual ACIP vaccine schedule CE: ACIP updates the pediatric immunization schedule annually in February — new vaccines (nirsevimab RSV passive immunization for infants, COVID-19 vaccine schedule changes), catch-up schedule modifications, and contraindication updates require annual CE before implementing schedule changes.',
  },
  {
    icon: Users,
    title: 'PIDS, IDWeek, and pediatric infectious disease professional involvement',
    desc: '"IDWeek (IDSA/PIDS/SHEA/ESCMID) — october." "PIDS Annual Meeting — may." "ESCMID Spring Congress." "PIDS/IDSA combined sessions." "Stewardship CE — ceftolozane-tazobactam and ceftazidime-avibactam pediatric dosing data, novel beta-lactam/beta-lactamase inhibitor use in pediatric carbapenem-resistant organisms, and oral step-down criteria for gram-negative bacteremia in children." "RSV CE — nirsevimab (Beyfortus) passive immunization versus palivizumab in non-high-risk infants, RSV vaccine maternal immunization program updates." "HIV CE — pediatric antiretroviral therapy updates, perinatal HIV transmission prevention 2025 guideline revisions, long-acting cabotegravir/rilpivirine in adolescents." "Fungal CE — isavuconazole and rezafungin pediatric PK data." All pediatric ID professional development on calendar.',
  },
]

const PEDID_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics MOC CME pace (ID content weighted), ABP pediatric ID subspecialty CE pace, state medical license biennial CME, DEA 3-year renewal, ACLS 2-year cycle, PALS 2-year cycle, annual antimicrobial stewardship CE, annual ACIP vaccine schedule CE, IDWeek, PIDS Annual Meeting, and PIDS membership all loaded in January. ABP primary counter, ID subspecialty counter, and state licensure CME tracked independently. ACIP vaccine schedule update CE placed February aligned with annual ACIP schedule publication.' },
  { time: 'CE completion', action: '"IDWeek-approved — antimicrobial stewardship in pediatric gram-negative bacteremia: IV-to-oral transition criteria for Enterobacterales bacteremia in children (PIVOT-HD pediatric extrapolation data), de-escalation from broad-spectrum carbapenem in non-ESBL bacteremia, duration of therapy optimization (SHORTEN randomized trial 7 vs. 14 days), 2 CME, AMA PRA Category 1, ABP MOC applicable, ABP pediatric ID applicable — stewardship domain." ABP primary counter updates. Pediatric ID subspecialty counter updates.' },
  { time: 'Vaccine CE', action: '"Annual ACIP pediatric immunization schedule CE — 2025 schedule update: nirsevimab (Beyfortus) passive RSV immunization eligibility for all infants born October through March or at highest-risk, maternal RSVpreF vaccine timing versus nirsevimab coordination for newborns, COVID-19 vaccine 2025–2026 formula update for the pediatric schedule, HPV catch-up schedule for adults through age 26, 2 CME, ABP pediatric ID applicable, Q1." Annual ACIP schedule CE placed Q1 aligned with ACIP February annual schedule publication.' },
  { time: 'Stewardship CE', action: '"Annual antimicrobial stewardship program CE — Joint Commission LD.04.03.11 program review: 2025 IDSA/SHEA ASP guideline update, cefepime versus pip-tazo for gram-negative bacteremia empiric therapy (ACORN trial implications for pediatric empiric protocols), beta-lactam allergy delabeling in pediatric patients (direct oral challenges in low-risk penicillin allergy), and antifungal stewardship in pediatric oncology patients on echinocandin prophylaxis, 3 CME, ABP pediatric ID applicable, Q2." Annual ASP CE placed Q2 before Joint Commission accreditation cycle review.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics MOC CME on pace? ABP pediatric ID subspecialty content satisfied? State medical license CME complete? DEA valid? ACLS current? PALS current? Annual antimicrobial stewardship CE documented? Annual ACIP vaccine schedule CE documented? PIDS membership active? Complete pediatric ID specialist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricInfectiousDiseaseSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Infectious Disease Specialists"
        title={
          <>
            ABP MOC and pediatric ID subspecialty maintained.
            <br />
            <em className="not-italic text-gold">Antimicrobial stewardship CE current. ACIP vaccine schedule tracked.</em>
          </>
        }
        lede="Pediatric infectious disease specialists manage ABP general pediatrics continuous MOC with ID subspecialty content, ABP pediatric infectious diseases subspecialty certification on a separate cycle, state medical license biennial CME, DEA 3-year registration, ACLS and PALS 2-year renewals on independent expiration dates, annual antimicrobial stewardship CE for Joint Commission ASP leadership requirements, annual ACIP pediatric vaccine schedule CE as nirsevimab, maternal RSV vaccine, and annual formula updates change practice, and professional development at IDWeek and PIDS. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Pediatric Infectious Disease Specialists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric ID specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric ID specialist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric ID specialist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABP MOC cycles, pediatric ID subspecialty, and annual antimicrobial stewardship and ACIP vaccine schedule CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {PEDID_WORKFLOW.map((step, i) => (
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
                &ldquo;ABP tracks my general pediatrics and my pediatric ID separately. ACIP publishes the updated pediatric vaccine schedule every February and I lead our immunization committee — I need that CE done before our February committee meeting, not before my next board renewal. The ASP work is the most complex calendar piece: Joint Commission requires physician leadership, IDSA/SHEA guidelines update, novel beta-lactam/beta-lactamase inhibitors get pediatric data, and our formulary changes require documented CE before I can approve the change. ACLS and PALS are on independent 2-year cycles. State license biennial. DEA 3-year. The vaccine CE and stewardship CE have institutional deadlines that are completely decoupled from my ABP renewal calendar. Until I could see all of them on one calendar, I was managing everything in my head.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">L</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Lauren K., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric ID specialist and antimicrobial stewardship program director, academic children&apos;s hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric ID specialist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, ID content weighted',
                'ABP pediatric infectious diseases subspecialty — bacterial, viral, fungal, stewardship domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal (independent expiration tracking)',
                'PALS certification — 2-year renewal (independent expiration tracking)',
                'Annual antimicrobial stewardship CE — IDSA/SHEA program standards, Joint Commission LD.04.03.11',
                'PIDS and IDWeek conference CME planning by ABP primary and pediatric ID applicability',
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
        title="ABP MOC and pediatric ID subspecialty maintained."
        subtitle="CME tracking for ABP dual certification, annual antimicrobial stewardship CE, ACIP vaccine schedule CE, ACLS and PALS independent renewals, and pediatric ID professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
