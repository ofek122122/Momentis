import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Gastroenterologists — ABP MOC CME renewal, pediatric GI credential management',
  description:
    'Pediatric gastroenterologists manage ABP general pediatrics primary MOC with pediatric gastroenterology subspecialty content, ABP pediatric gastroenterology subspecialty certification on a separate cycle, annual IBD biologic CE as approvals expand into pediatric indications, annual endoscopic competency documentation, ACLS and PALS 2-year renewals, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/pediatric-gastroenterologists' },
  openGraph: {
    title: 'Momenties for Pediatric Gastroenterologists',
    description: 'ABP MOC CME renewal, pediatric GI credential management.',
    url: '/for/pediatric-gastroenterologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP pediatrics MOC and pediatric gastroenterology subspecialty independently',
    desc: 'Pediatric gastroenterologists hold ABP general pediatrics primary certification under continuous MOC and ABP pediatric gastroenterology subspecialty certification on a separate cycle — two ABP credentials with different content requirements. ABP pediatric gastroenterology subspecialty requires GI-specific content including pediatric inflammatory bowel disease (Crohn disease and ulcerative colitis), celiac disease, eosinophilic esophagitis, pediatric liver disease, motility disorders (GERD, gastroparesis, constipation), and endoscopic procedures. ABP general pediatrics MOC runs on a continuous cycle with different content requirements.',
  },
  {
    icon: Clock,
    title: 'Pediatric gastroenterologist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME." "ABP pediatric gastroenterology subspecialty — GI content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "ACLS — 2-year renewal." "PALS — 2-year renewal." "Annual IBD biologic CE — pediatric Crohn and UC treatment updates." "Annual endoscopic competency documentation (if NASPGHAN-accredited program)." "NASPGHAN membership — annual." All pediatric gastroenterologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual IBD biologic CE and pediatric endoscopic competency documentation analytics',
    desc: 'Pediatric gastroenterologists managing inflammatory bowel disease must maintain CE on biologic therapy — ustekinumab, risankizumab, ozanimod, and mirikizumab have been approved in adult IBD with pediatric applications expanding. Annual IBD CE ensures current knowledge of biologic sequencing, therapeutic drug monitoring, biosimilar selection, and emerging small molecule therapy (upadacitinib) in pediatric Crohn and UC. Annual endoscopic competency documentation: NASPGHAN endoscopy training guidelines require documentation of endoscopic case volumes for pediatric gastroenterologists maintaining endoscopic privileges — separate from ABP MOC, tracked annually at most institutions.',
  },
  {
    icon: Users,
    title: 'NASPGHAN, DDW, and pediatric GI professional involvement',
    desc: '"NASPGHAN Annual Meeting — october." "DDW (Digestive Disease Week) — may." "ESPGHAN Annual Meeting." "IBD biologic CE — ustekinumab versus vedolizumab sequencing in pediatric Crohn, therapeutic drug monitoring targets for infliximab in pediatric UC." "EoE CE — dupilumab approval in pediatric EoE, elemental versus elimination diet outcomes." "Pediatric liver disease CE — metabolic-associated steatotic liver disease in adolescents, Wilson disease diagnosis and trientine dihydrochloride approval." "Motility CE — pediatric GERD management, constipation and defecation disorder workup in refractory cases." All pediatric GI professional development on calendar. NASPGHAN and DDW conference CME tagged by ABP primary and subspecialty applicability.',
  },
]

const PEDGI_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics MOC CME pace (GI content weighted), ABP pediatric GI subspecialty CE pace, state medical license biennial CME, DEA 3-year renewal, ACLS 2-year cycle, PALS 2-year cycle, annual IBD biologic CE, annual endoscopic competency documentation (if applicable), NASPGHAN Annual Meeting, DDW, and NASPGHAN membership all loaded in January. ABP primary counter, GI subspecialty counter, and state licensure CME tracked independently. ACLS and PALS placed with independent expiration date tracking.' },
  { time: 'CE completion', action: '"NASPGHAN-approved — upadacitinib in pediatric moderate-to-severe UC and Crohn disease: adolescent phase III data versus adult ELEVATE trial, dosing in adolescent patients by weight, safety signals in pediatric versus adult populations (herpes zoster, thrombosis), and positioning versus biologics in treatment algorithms, 2 CME, AMA PRA Category 1, ABP MOC applicable, ABP pediatric GI applicable — IBD biologic domain." ABP primary counter updates. Pediatric GI subspecialty counter updates. State licensure CME updates.' },
  { time: 'IBD biologic CE', action: '"Annual IBD biologic prescribing CE — ECCO-ESPGHAN pediatric IBD guidelines 2024 update: therapeutic drug monitoring targets for infliximab in pediatric Crohn (trough ≥5 μg/mL for remission, ≥8 μg/mL for mucosal healing), adalimumab biosimilar selection, and vedolizumab positioning in pediatric UC with extraintestinal manifestations, 3 CME, ABP pediatric GI applicable, Q2." Annual IBD biologic CE placed Q2. ECCO-ESPGHAN guidelines updated periodically and biosimilar approvals are changing treatment economics — annual CE ensures current prescribing knowledge before fall school year patient assessments.' },
  { time: 'Endoscopy CE', action: '"Annual endoscopic competency documentation — NASPGHAN endoscopy guidelines: EGD and colonoscopy case volume documentation for annual privileges review, advanced procedures competency (capsule endoscopy interpretation, dilation, polypectomy), 2 CE, Q1." Annual endoscopic competency documentation placed Q1 before institutional GI privileges review. Joint Commission procedural privileges renewal requires documented annual case volumes for endoscopic procedures — separate from ABP MOC. Volume thresholds vary by institution but typically require 50+ colonoscopies annually for privileges maintenance.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics MOC CME on pace? ABP pediatric GI subspecialty content satisfied? State medical license CME complete? DEA valid? ACLS current? PALS current? Annual IBD biologic CE documented? Endoscopic competency volumes documented? NASPGHAN membership active? Complete pediatric gastroenterologist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricGastroenterologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Gastroenterologists"
        title={
          <>
            ABP MOC and pediatric GI subspecialty maintained.
            <br />
            <em className="not-italic text-gold">IBD biologic CE current. Endoscopic competency tracked.</em>
          </>
        }
        lede="Pediatric gastroenterologists manage ABP general pediatrics continuous MOC with pediatric GI subspecialty content, ABP pediatric gastroenterology subspecialty certification on a separate cycle, state medical license biennial CME, DEA 3-year registration, ACLS and PALS 2-year renewals on potentially independent expiration dates, annual IBD biologic CE as upadacitinib and new approvals expand into pediatric indications, annual endoscopic case volume documentation for procedural privileges, and professional development at NASPGHAN and DDW. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Pediatric Gastroenterologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric gastroenterologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric gastroenterologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric gastroenterologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABP MOC cycles, pediatric GI subspecialty, and annual IBD biologic and endoscopic competency CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {PEDGI_WORKFLOW.map((step, i) => (
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
                &ldquo;ABP tracks my general pediatrics and my pediatric GI subspecialty separately — different content requirements, different renewal cycles. In pediatric IBD, the biologics landscape changes every year. Upadacitinib just got pediatric data and I needed CE before I started using it in my adolescent UC patients — that CE has a clinical urgency that doesn&apos;t wait for my board renewal. My institution requires annual documentation of endoscopic case volumes for my GI privileges — that&apos;s a Joint Commission requirement, not a board requirement. ACLS and PALS both expire every 2 years — mine expired 9 months apart. State license biennial. DEA 3-year. The IBD biologic CE is the one with a seasonal deadline because I update treatment plans before the school year — patients coming back for fall follow-ups need current treatment recommendations.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">F</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Fiona X., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric gastroenterologist and IBD program director, academic children&apos;s hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric gastroenterologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, GI content weighted',
                'ABP pediatric gastroenterology subspecialty — IBD, celiac, EoE, liver, motility domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal (independent expiration tracking)',
                'PALS certification — 2-year renewal (independent expiration tracking)',
                'Annual IBD biologic CE — ECCO-ESPGHAN guideline updates, new pediatric indications',
                'NASPGHAN and DDW conference CME planning by ABP primary and subspecialty applicability',
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
        title="ABP MOC and pediatric GI subspecialty maintained."
        subtitle="CME tracking for ABP dual certification, annual IBD biologic CE, endoscopic competency documentation, ACLS and PALS independent renewals, and pediatric GI professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
