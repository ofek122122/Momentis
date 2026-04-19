import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Sports Dietitians — RD biennial CE renewal, CSSD credential management',
  description:
    'Sports dietitians manage RD biennial 75 CE renewal with CDR-approved providers, CSSD Board of Certification CE independent 5-year cycle with sport-specific content, state dietitian licensure CE, CISSN if applicable, annual team or institutional training staff requirements, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full sports dietitian credential calendar.',
  alternates: { canonical: '/for/sports-dietitians' },
  openGraph: {
    title: 'Momenties for Sports Dietitians',
    description: 'RD CE renewal, CSSD credential management for sports dietitians.',
    url: '/for/sports-dietitians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for RD recertification and CSSD renewal on independent cycles',
    desc: 'Registered Dietitians (RD/RDN) renew every 5 years with 75 CDR-approved CE hours. Board Certified Specialist in Sports Dietetics (CSSD) from the Commission on Dietetic Registration (CDR) requires separate renewal with sport-nutrition-specific content — CSSD and RD renewal cycles run independently unless intentionally aligned. State dietitian licensure CE runs on a biennial cycle in most states with additional state-specific requirements. CISSN (Certified Sports Nutritionist) from ISSN has a separate 2-year renewal with its own CE requirements. Each tracked independently.',
  },
  {
    icon: Clock,
    title: 'Sports dietitian multi-credential renewal calendar',
    desc: '"RD/RDN — CDR 75 CE/5 years, CDR-approved providers." "CSSD — CDR specialist renewal, sport-nutrition content." "State dietitian license — biennial CE, state-specific requirements." "CISSN — ISSN 2-year renewal (if held)." "Annual team or institutional training staff requirements." "SCAN membership — annual." "CISSN or NSA membership — annual." All sports dietitian credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'CDR CE provider approval and CSSD content domain analytics',
    desc: 'CDR requires CE from CDR-approved providers — CE from non-approved sources does not count toward RD recertification regardless of quality. CSSD renewal requires that the CE content maps to sports dietetics practice domains — general dietetics CE does not automatically satisfy CSSD sport-nutrition content requirements. Sports dietitians working with professional or collegiate teams may face institutional annual education requirements from team medical staff independent of CDR or CSSD requirements. Each tracked with approval status.',
  },
  {
    icon: Users,
    title: 'SCAN, ISSN, and sports nutrition professional involvement',
    desc: '"SCAN Symposium — spring." "ISSN Annual Conference." "NSCA Annual Conference." "ACSM Annual Meeting." "US Olympic and Paralympic Committee sports nutrition CE." "NCAA and NAIA sports nutrition compliance updates." "Weight manipulation and athlete health CE." "Supplement safety and WADA prohibited substances CE." All sports nutrition professional development on calendar. SCAN and ISSN conference CE tagged by CDR approval and CSSD domain applicability.',
  },
]

const SD_WORKFLOW = [
  { time: 'Annual planning', action: 'RD/RDN CDR 75-CE/5yr pace (annualized to 15 CE/year), CSSD renewal CE pace with sport-nutrition content requirement, state licensure biennial CE cycle, CISSN 2-year renewal (if applicable), annual team education requirements, SCAN Symposium, ISSN conference, and SCAN membership all loaded in January. RD CE counter, CSSD CE counter, and state licensure CE tracked independently.' },
  { time: 'CE completion', action: '"SCAN-approved — energy availability and relative energy deficiency in sport (RED-S): diagnostic criteria, performance consequences, and clinical management in female and male athletes, 2 CE, CDR-approved provider, CSSD applicable — sport nutrition domain." RD CDR counter updates (toward 75/5yr). CSSD counter updates (sport-nutrition domain satisfied). State licensure CE updates if applicable. CDR provider approval status confirmed at logging.' },
  { time: 'WADA/USADA CE', action: '"Supplement safety and WADA prohibited substances annual update — WADA prohibited list changes, third-party testing programs, and contamination risk counseling for athletes, 1 CE, Q1." Annual supplement and doping update placed as an institutional requirement for sports dietitians advising competitive athletes. WADA prohibited list changes annually — sports dietitians must stay current. Annual update placed at Q1 with CDR-approval status confirmed.' },
  { time: 'CSSD content', action: '"CSSD practice area CE — body composition assessment methodology: DXA, skinfold, and bioelectrical impedance validation in athletic populations, 1.5 CE, CSSD-applicable domain." CSSD CE tracked separately from general RD CE. CSSD requires CE content mapped to sports dietetics practice domains — CDR publishes CSSD practice area domains and each CE logged with domain classification. Running CSSD domain coverage prevents end-of-cycle scramble for sport-specific content.' },
  { time: 'Renewal audit', action: 'Analytics: RD CDR CE on pace (75/5yr)? CSSD sport-nutrition domain coverage adequate? State licensure CE complete? CISSN CE current (if applicable)? Annual team requirements documented? SCAN membership active? Complete sports dietitian credential audit 90 days before earliest renewal. CDR, state board, and institutional documentation maintained separately.' },
]

export default function ForSportsDietitiansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Sports Dietitians"
        title={
          <>
            RD and CSSD credentials maintained.
            <br />
            <em className="not-italic text-gold">Sport-nutrition CE domains tracked. WADA updates current.</em>
          </>
        }
        lede="Sports dietitians manage RD recertification with 75 CDR-approved CE hours over 5 years, CSSD renewal on a completely independent CDR cycle with sport-nutrition content domain requirements, state dietitian licensure biennial CE, CISSN 2-year renewal if held, annual supplement and WADA prohibited substance updates as a practice requirement for competitive athlete advising, and professional development at SCAN and ISSN simultaneously. Momenties tracks CE by sports dietitian credential, surfaces renewal deadlines 90 days early, and manages the full sports dietitian credential calendar in one view."
        crumbs={[{ label: 'For Sports Dietitians' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How sports dietitians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for sports dietitian credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sports dietitian credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every RD renewal cycle, CSSD domain requirement, and competitive season obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {SD_WORKFLOW.map((step, i) => (
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
                &ldquo;I have my RD and my CSSD. They are both CDR credentials but they renew on different schedules because I got CSSD two years after my RD. The CSSD renewal requires CE content in sports dietetics practice domains — it&apos;s not just any CDR CE, it has to hit the right topics. I also have my state dietetics license which is biennial and has its own CE requirement. I work with competitive athletes so I do an annual WADA update every year even though it&apos;s not a formal CE requirement — it&apos;s just what you have to do. I was running three different spreadsheets for this. Momenties collapsed it into one view where I can see exactly what I need by when and which CE box it checks.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Jessica M., RD, CSSD</div>
                  <div className="text-xs text-muted-foreground">Sports dietitian, professional soccer club and collegiate athletics program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All sports dietitian credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'RD/RDN CDR recertification CE — 75 hours/5 years, CDR-approved providers',
                'CSSD renewal CE — sport-nutrition domain content, independent cycle',
                'State dietitian license CE — biennial, state-specific requirements',
                'CISSN renewal CE — ISSN 2-year cycle (if held)',
                'Annual WADA prohibited substance update — competitive athlete advising',
                'Annual team or institutional training staff education requirements',
                'SCAN membership renewal — annual',
                'SCAN and ISSN conference CE planning by CDR and CSSD applicability',
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
        title="RD and CSSD credentials maintained."
        subtitle="CE tracking by CDR approval and CSSD domain, state licensure calendar, WADA update scheduling, and sports nutrition professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
