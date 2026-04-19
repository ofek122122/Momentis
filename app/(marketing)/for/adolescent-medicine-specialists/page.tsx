import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Adolescent Medicine Specialists — ABP MOC CME renewal, adolescent medicine credential management',
  description:
    'Adolescent medicine specialists manage ABP general pediatrics primary MOC and ABP adolescent medicine subspecialty MOC simultaneously with annual eating disorder CE as ARFID and OSFED diagnostic criteria evolve, annual gender-affirming care CE as WPATH SOC8 guidelines update pubertal suppression and hormone therapy protocols, annual substance use CE as adolescent cannabis use and vaping rates change screening standards, state medical license biennial CME, DEA 3-year renewal, and SAHM membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/adolescent-medicine-specialists' },
  openGraph: {
    title: 'Momenties for Adolescent Medicine Specialists',
    description: 'ABP MOC CME renewal, adolescent medicine credential management.',
    url: '/for/adolescent-medicine-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP general pediatrics MOC and adolescent medicine subspecialty independently',
    desc: 'Adolescent medicine specialists hold ABP general pediatrics primary certification under continuous MOC and ABP adolescent medicine subspecialty certification under continuous MOC — two ABP credentials with different content requirements. ABP adolescent medicine subspecialty requires adolescent-specific content: puberty and adolescent development, eating disorders (AN, BN, ARFID, OSFED), gender and sexual minority health, adolescent substance use, reproductive health (contraception, STI, adolescent pregnancy), and CRAFFT and HEADSSS psychosocial screening. Both ABP counters are tracked independently with different content category requirements.',
  },
  {
    icon: Clock,
    title: 'Adolescent medicine specialist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME." "ABP adolescent medicine subspecialty MOC — continuous CME, adolescent-specific content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual eating disorder CE — ARFID DSM-5 diagnostic criteria updates, OSFED prevalence in adolescent population, family-based treatment (FBT/Maudsley) evidence update." "Annual gender-affirming care CE — WPATH SOC8 2022 implementation, GnRH agonist (Lupron) pubertal suppression CE before prescribing." "Annual adolescent substance use CE — cannabis THC potency and adolescent psychosis risk, e-cigarette/vaping EVALI surveillance, fentanyl contamination risk in adolescent drug supply." "SAHM membership — annual." All adolescent medicine credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual eating disorder CE and gender-affirming care update analytics',
    desc: 'Adolescent medicine specialists managing eating disorders must maintain CE on expanding diagnostic categories: ARFID (Avoidant/Restrictive Food Intake Disorder) added in DSM-5 (2013) but clinical prevalence data continues to accumulate — adolescent ARFID prevalence now estimated at 3.2-5% in pediatric eating disorder programs (2023 data), with CE on ARFID versus AN differential and cognitive behavioral therapy for ARFID (CBT-AR) evidence required before implementing treatment protocols. Annual gender-affirming care CE: WPATH SOC8 (2022) updated minimum age criteria for pubertal suppression, hormone therapy, and surgical interventions — CE before implementing updated eligibility criteria is required per SAHM and AAP guidance.',
  },
  {
    icon: Users,
    title: 'SAHM, NASPAG, AAP adolescent section, and professional development',
    desc: '"SAHM Society for Adolescent Health and Medicine Annual Meeting — march." "AAP National Conference — october." "AACAP Annual Meeting — october." "NASPAG North American Society for Pediatric and Adolescent Gynecology Annual Meeting — april." "Eating disorder CE — ARFID CBT-AR treatment protocol (Thomas and Eddy manual), residential versus partial hospitalization level of care transitions in AN-R, family-based treatment (FBT) versus adolescent-focused therapy (AFT) comparative outcomes at 12 months, and higher weight AN (atypical AN) — medical risk parameters and level of care thresholds in patients without low BMI." "Gender CE — WPATH SOC8 Chapter 6 adolescent-specific criteria implementation timeline, informed consent model versus gatekeeping model for adolescent gender care, GnRH agonist bone density monitoring protocol during pubertal suppression, and testosterone therapy in transmen — gynecological cancer screening protocol." "Substance use CE — fentanyl test strip provision as harm reduction in adolescent settings — AAP policy update, cannabis use disorder ICD-10 coding in adolescents and CRAFFT-2 sensitivity, and nicotine replacement therapy evidence in adolescent vaping cessation." All adolescent medicine professional development on calendar.',
  },
]

const ADOLESCENT_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics MOC CME pace (adolescent health content weighted), ABP adolescent medicine subspecialty MOC pace (eating disorders, gender health, substance use, reproductive health content weighted), state medical license biennial CME, DEA 3-year renewal, annual eating disorder CE, annual gender-affirming care CE, annual substance use CE, SAHM Annual Meeting, AAP National Conference, and SAHM membership all loaded in January. ABP general pediatrics counter and ABP adolescent medicine subspecialty counter tracked independently.' },
  { time: 'CE completion', action: '"SAHM-approved — SAHM 2024 Gender Health Update: WPATH SOC8 Chapter 6 adolescent criteria implementation — modified age minimums for GnRH agonist initiation (removal of Tanner stage III requirement in SOC8), psychosocial assessment documentation for hormone therapy eligibility, informed consent model requirements for adolescent gender care, and fertility preservation counseling documentation protocol for minors, 3 CME, AMA PRA Category 1, ABP MOC applicable, ABP adolescent medicine applicable — gender health domain." Both ABP counters update.' },
  { time: 'Eating disorder CE', action: '"Annual eating disorder CE — ARFID update: CBT-AR cognitive behavioral therapy for ARFID — Thomas and Eddy protocol efficacy in adolescent versus adult populations (12-week RCT data), ARFID versus restrictive AN differential in adolescents with low body weight (medical risk assessment tools — OrAD, PARDI), partial hospitalization program (PHP) outcomes in ARFID versus AN-R by insurance authorization criteria, and OSFED — binge eating disorder in adolescents, purging disorder diagnostic criteria, and night eating syndrome prevalence in college-age populations, 3 CME, ABP adolescent medicine applicable, Q1." Annual eating disorder CE placed Q1 aligned with SAHM March meeting.' },
  { time: 'Substance CE', action: '"Annual adolescent substance use CE — fentanyl contamination and adolescent harm reduction: NIDA 2024 Monitoring the Future data on adolescent illicit drug use trends, fentanyl test strip provision legality by state (paraphernalia law exemptions), naloxone co-prescription with any adolescent opioid prescription, cannabis use disorder diagnosis in adolescents using DSM-5 criteria — CRAFFT-2 screen cutoff update, and adolescent nicotine dependence — varenicline (Chantix) evidence in adolescents 12-17 (YUMMY trial) and NRT patch versus gum adherence in teen cessation programs, 3 CME, ABP adolescent medicine applicable, Q3." Annual substance use CE placed Q3 aligned with AAP October conference.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics MOC CME on pace? ABP adolescent medicine subspecialty MOC content satisfied — eating disorder, gender health, substance use, reproductive health domains covered? State medical license CME complete? DEA valid? Annual eating disorder CE documented? Annual gender-affirming care CE documented? Annual substance use CE documented? SAHM membership active? Complete adolescent medicine specialist credential audit 90 days before earliest renewal.' },
]

export default function ForAdolescentMedicineSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Adolescent Medicine Specialists"
        title={
          <>
            ABP pediatrics MOC and adolescent medicine subspecialty maintained.
            <br />
            <em className="not-italic text-gold">Eating disorder CE current. Gender-affirming care protocols tracked.</em>
          </>
        }
        lede="Adolescent medicine specialists manage ABP general pediatrics continuous MOC and ABP adolescent medicine subspecialty continuous MOC — tracked separately with different content requirements. Annual eating disorder CE as ARFID prevalence data and CBT-AR protocols evolve, annual gender-affirming care CE as WPATH SOC8 implementation updates eligibility criteria, annual substance use CE as fentanyl contamination changes harm reduction standards, state medical license biennial CME, DEA 3-year registration, and professional development at SAHM and AAP. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Adolescent Medicine Specialists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How adolescent medicine specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for adolescent medicine specialist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Adolescent medicine specialist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABP dual MOC cycles and annual eating disorder, gender-affirming care, and substance use CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {ADOLESCENT_WORKFLOW.map((step, i) => (
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
                &ldquo;ABP general pediatrics and ABP adolescent medicine subspecialty both continuous — tracked separately because the subspecialty content requirements are distinct. WPATH SOC8 was published in 2022 and I needed CE on the new adolescent criteria before I updated my practice protocols — that was clinically urgent and was not on my board renewal calendar. The eating disorder CE has become critical for ARFID: the CBT-AR protocol is distinct from FBT and I needed specific training before implementing it, separate from my eating disorder MOC credits. The fentanyl contamination CE changed my harm reduction conversations with patients — I needed current data on test strip provision legality in my state before I could counsel accurately. DEA is operational: I prescribe controlled substances for ADHD and for weight management in adolescents. All of these on separate timelines that I track in one place.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Jordan K., MD</div>
                  <div className="text-xs text-muted-foreground">Adolescent medicine specialist and eating disorder program director, children&apos;s hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All adolescent medicine specialist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous',
                'ABP adolescent medicine subspecialty MOC — continuous, adolescent-specific content',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual eating disorder CE — ARFID CBT-AR, OSFED diagnostic updates',
                'Annual gender-affirming care CE — WPATH SOC8 adolescent criteria implementation',
                'Annual substance use CE — fentanyl harm reduction, cannabis use disorder',
                'SAHM and AAP conference CME planning by ABP applicability',
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
        title="ABP pediatrics MOC and adolescent medicine subspecialty maintained."
        subtitle="CME tracking for ABP dual MOC, annual eating disorder CE, gender-affirming care CE, substance use CE, and adolescent medicine professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
