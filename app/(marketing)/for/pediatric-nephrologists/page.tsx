import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Nephrologists — ABP MOC CME renewal, pediatric nephrology credential management',
  description:
    'Pediatric nephrologists manage ABP general pediatrics primary MOC with pediatric nephrology subspecialty content, ABP pediatric nephrology subspecialty certification on a separate cycle, ACLS and PALS 2-year renewals, annual ESKD quality metrics reporting CE for pediatric dialysis programs, annual glomerulopathy CE as novel complement-targeted therapies expand, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/pediatric-nephrologists' },
  openGraph: {
    title: 'Momenties for Pediatric Nephrologists',
    description: 'ABP MOC CME renewal, pediatric nephrology credential management.',
    url: '/for/pediatric-nephrologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP pediatrics MOC and pediatric nephrology subspecialty independently',
    desc: 'Pediatric nephrologists hold ABP general pediatrics primary certification under continuous MOC and ABP pediatric nephrology subspecialty certification on a separate cycle — two ABP credentials with different content requirements. ABP pediatric nephrology subspecialty requires nephrology-specific content including acute kidney injury in pediatric ICU settings, chronic kidney disease progression and staging in children, congenital anomalies of the kidney and urinary tract (CAKUT), glomerulopathies (nephrotic syndrome, IgA nephropathy, FSGS, membranous nephropathy), pediatric dialysis (hemodialysis, peritoneal dialysis), kidney transplantation in children, and hypertension management. ABP general pediatrics MOC runs on a continuous cycle with different content requirements.',
  },
  {
    icon: Clock,
    title: 'Pediatric nephrologist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME." "ABP pediatric nephrology subspecialty — nephrology content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "ACLS — 2-year renewal." "PALS — 2-year renewal." "Annual ESKD quality metrics CE — IPRO/CMS pediatric dialysis quality standards." "Annual glomerulopathy CE — complement-targeted therapy approvals in pediatric nephropathies." "ASPN membership — annual." "ASN membership — annual." All pediatric nephrologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual ESKD quality metrics CE and pediatric glomerulopathy complement therapy analytics',
    desc: 'Pediatric nephrologists directing dialysis programs are subject to CMS ESKD quality measurement (QIP) with pediatric-specific metrics — annual CE on CMS pediatric dialysis quality reporting, IPRO audit processes, and Kt/V adequacy targets in pediatric hemodialysis and peritoneal dialysis is a program compliance requirement separate from ABP MOC. Annual glomerulopathy CE: avacopan (complement C5a receptor inhibitor) approved for ANCA-associated vasculitis, ravulizumab and eculizumab expansions in atypical HUS and C3 glomerulopathy, and sparsentan (dual endothelin/angiotensin receptor antagonist) in FSGS and IgA nephropathy — annual CE ensures current prescribing knowledge as complement-targeted therapies reach pediatric indications.',
  },
  {
    icon: Users,
    title: 'ASPN, ASN, and pediatric nephrology professional involvement',
    desc: '"ASPN Annual Meeting — april." "ASN Kidney Week — november." "IPNA International Pediatric Nephrology Association Congress — biennial." "ERA European Renal Association Annual Congress." "Glomerulopathy CE — avacopan in pediatric AAV versus adult data, sparsentan FSGS and IgAN pediatric extrapolation, voclosporin in pediatric lupus nephritis." "Dialysis CE — pediatric PD-first policy implementation, bioimpedance-guided fluid management in pediatric HD, incremental HD in pediatric CKD stage 5." "Transplant CE — pediatric kidney allocation policy, immunosuppression minimization in pediatric recipients, HLA sensitization in pediatric re-transplant candidates." All pediatric nephrology professional development on calendar. ASPN and ASN conference CME tagged by ABP primary and subspecialty applicability.',
  },
]

const PEDNEPH_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics MOC CME pace (nephrology content weighted), ABP pediatric nephrology subspecialty CE pace, state medical license biennial CME, DEA 3-year renewal, ACLS 2-year cycle, PALS 2-year cycle, annual ESKD quality metrics CE, annual glomerulopathy complement therapy CE, ASPN Annual Meeting, ASN Kidney Week, and ASPN membership all loaded in January. ABP primary counter, nephrology subspecialty counter, and state licensure CME tracked independently. ACLS and PALS placed with independent expiration date tracking.' },
  { time: 'CE completion', action: '"ASN-approved — avacopan in ANCA-associated vasculitis in pediatric patients: ADVOCATE trial outcomes by age group, avacopan dosing in pediatric weight bands versus adult fixed dosing, renal function recovery at 52 weeks compared to standard glucocorticoid taper, and monitoring protocol for liver enzyme elevation in adolescent AAV patients, 2 CME, AMA PRA Category 1, ABP MOC applicable, ABP pediatric nephrology applicable — glomerulopathy domain." ABP primary counter updates. Nephrology subspecialty counter updates.' },
  { time: 'ESKD metrics CE', action: '"Annual ESKD quality metrics CE — CMS pediatric dialysis QIP: Kt/V ≥1.2 adequacy targets in pediatric HD versus peritoneal dialysis, CMS pediatric dialysis mortality SMR reporting, IPRO auditing of pediatric dialysis program quality, and ESRD network performance data for pediatric programs — patient care linkage and incident patient registration, 2 CME, ABPN dialysis program compliance applicable, Q1." Annual ESKD metrics CE placed Q1. CMS QIP measurement period runs January–December — placed early to align with program quality review cycle.' },
  { time: 'Transplant CE', action: '"Annual pediatric kidney transplant CE — 2025 KDIGO transplant guideline update: deceased donor kidney allocation in pediatric recipients (bonus points for age <18 in UNOS/OPTN policy), calcineurin inhibitor minimization protocols by EBV serostatus in pediatric recipients, BK polyomavirus surveillance protocol in pediatric versus adult transplant, and adolescent medication adherence interventions in maintenance immunosuppression, 3 CME, ABP pediatric nephrology applicable, Q3." Annual transplant CE placed Q3 aligned with ASN Kidney Week educational content.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics MOC CME on pace? ABP pediatric nephrology subspecialty content satisfied? State medical license CME complete? DEA valid? ACLS current? PALS current? Annual ESKD quality metrics CE documented? Annual glomerulopathy CE documented? Annual transplant CE documented? ASPN membership active? Complete pediatric nephrologist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricNephrologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Nephrologists"
        title={
          <>
            ABP MOC and pediatric nephrology subspecialty maintained.
            <br />
            <em className="not-italic text-gold">ESKD quality metrics CE current. Complement therapy knowledge tracked.</em>
          </>
        }
        lede="Pediatric nephrologists manage ABP general pediatrics continuous MOC with nephrology subspecialty content, ABP pediatric nephrology subspecialty certification on a separate cycle, state medical license biennial CME, DEA 3-year registration, ACLS and PALS 2-year renewals on independent expiration dates, annual CMS ESKD quality metrics CE for pediatric dialysis program compliance, annual glomerulopathy CE as avacopan, sparsentan, and complement-targeted therapies reach pediatric indications, and professional development at ASPN and ASN. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Pediatric Nephrologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric nephrologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric nephrologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric nephrologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABP MOC cycles, pediatric nephrology subspecialty, and annual ESKD quality metrics, glomerulopathy, and transplant CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {PEDNEPH_WORKFLOW.map((step, i) => (
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
                &ldquo;ABP tracks my general pediatrics and my pediatric nephrology separately. The complement-targeted therapy revolution has changed how I treat FSGS, IgAN, and C3G — avacopan, sparsentan, and voclosporin all arrived in a four-year window and each requires CE before I use them in patients. That CE has nothing to do with my board renewal cycle. CMS ESKD quality metrics for our pediatric dialysis program are measured against federal benchmarks annually — our IPRO audit requires documented QI activity and I need CE on how the metrics are calculated and what constitutes adequate performance for a low-volume pediatric program. ACLS and PALS both expire at 2 years — mine are 8 months apart. The pediatric transplant allocation policy changes every year and I update my practice before the annual UNOS policy effective date, not before my next ABP renewal.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Maria S., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric nephrologist and dialysis program director, academic children&apos;s hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric nephrologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, nephrology content weighted',
                'ABP pediatric nephrology subspecialty — CAKUT, glomerulopathy, dialysis, transplant domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal (independent expiration tracking)',
                'PALS certification — 2-year renewal (independent expiration tracking)',
                'Annual ESKD quality metrics CE — CMS pediatric dialysis QIP, IPRO audit compliance',
                'ASPN and ASN conference CME planning by ABP primary and nephrology subspecialty applicability',
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
        title="ABP MOC and pediatric nephrology subspecialty maintained."
        subtitle="CME tracking for ABP dual certification, annual ESKD quality metrics CE, complement-targeted therapy CE, ACLS and PALS independent renewals, and pediatric nephrology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
