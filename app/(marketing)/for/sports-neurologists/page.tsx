import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Sports Neurologists — ABPN MOC CME renewal, sports neurology credential management',
  description:
    'Sports neurologists manage ABPN neurology primary MOC with sports neurology content, CAQSM sports medicine certificate of added qualification, concussion management protocol CE, annual ImPACT or equivalent baseline testing certification renewal, state medical license biennial CME, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full sports neurologist credential calendar.',
  alternates: { canonical: '/for/sports-neurologists' },
  openGraph: {
    title: 'Momenties for Sports Neurologists',
    description: 'ABPN MOC CME renewal, sports neurology credential management.',
    url: '/for/sports-neurologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPN neurology MOC and CAQSM sports medicine subspecialty independently',
    desc: 'Sports neurologists hold ABPN neurology primary board certification under continuous MOC and may hold CAQSM (Certificate of Added Qualifications in Sports Medicine) from ABFM, ABIM, ABEM, or ABP depending on training pathway — a certificate from a different board than the primary neurology credential. ABPN neurology MOC requires neurology-specific content. CAQSM requires sports medicine content including musculoskeletal medicine, concussion management, return-to-play protocols, and sports cardiology — different content from ABPN neurology CME. State medical license biennial CME runs on a third independent cycle.',
  },
  {
    icon: Clock,
    title: 'Sports neurologist multi-credential renewal calendar',
    desc: '"ABPN neurology MOC — continuous CME, neurology content." "CAQSM sports medicine — sports medicine content (if dual-certified)." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual concussion management protocol CE — updated RTP criteria." "ImPACT/SCAT5 baseline testing certification — annual renewal." "AAN Sports Neurology Section membership — annual." "AMSSM membership — annual." All sports neurologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Concussion management protocol CE and baseline neurocognitive testing certification analytics',
    desc: 'Sports neurologists serving team medical staff or concussion program directors must maintain current CE on concussion management protocols — the Berlin Consensus Statement on concussion in sport, NCAA Sport Science Institute concussion management guidelines, and NFL, NHL, and MLS league-specific protocols are updated on different cycles. Annual CE on return-to-play protocol updates ensures compliance with governing body requirements for team physicians. ImPACT neurocognitive baseline testing certification renewal is an annual requirement for physicians administering and interpreting ImPACT testing in concussion programs — the certification is program-specific, not board-based.',
  },
  {
    icon: Users,
    title: 'AAN, AMSSM, and sports neurology professional involvement',
    desc: '"AAN Annual Meeting — april." "AMSSM Annual Meeting — april." "American Medical Society for Sports Medicine Annual Meeting." "CASEM Annual Symposium." "Concussion management CE — Berlin Statement 2024 update, sex-based differences in concussion recovery." "Return-to-play CE — progressive exertional protocols, cognitive return-to-learn sequencing in student athletes." "Neurological sports injury CE — stingers and burners, exertional headache, exercise-induced collapse evaluation." "CTE research CE — tau pathology, chronic traumatic encephalopathy clinical presentation." All sports neurology professional development on calendar. AAN and AMSSM conference CME tagged by ABPN and CAQSM applicability.',
  },
]

const SNEUROL_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPN neurology MOC CME pace (sports neurology content weighted), CAQSM sports medicine CE pace (if dual-certified), state medical license biennial CME, DEA 3-year renewal, annual concussion protocol CE, annual ImPACT certification renewal, AAN Annual Meeting, AMSSM Annual Meeting, and AAN and AMSSM memberships all loaded in January. ABPN counter, CAQSM counter (if applicable), and state licensure CME tracked independently. Concussion protocol CE placed as Q1 priority before spring sports season.' },
  { time: 'CE completion', action: '"AAN-approved — sport-related concussion recovery: sex and age as modifiers of concussion symptom duration, revised SCAT5 symptom cluster analysis, and updated return-to-sport clearance criteria in female collegiate athletes, 2 CME, AMA PRA Category 1, ABPN MOC applicable, CAQSM applicable — concussion domain." ABPN counter updates. CAQSM counter updates (if dual-certified). State licensure CME updates. Concussion content confirmed.' },
  { time: 'RTP protocol CE', action: '"Annual return-to-play protocol CE — NCAA and governing body updates: revised progressive exertional protocol for contact sports, sideline evaluation standardization using SCAT5, and same-day return-to-play prohibition policy implementation in youth sports, 2 CME, Q1." Annual RTP protocol CE placed before spring sports season. Governing body protocol updates (NCAA Sport Science Institute, NFL team physician recommendations, AAN sports neurology concussion management recommendations) published in Q4 of prior year — CE placed Q1 to ensure team physicians are current before preseason.' },
  { time: 'ImPACT renewal', action: '"Annual ImPACT neurocognitive testing certification renewal — ImPACT Concussion — physician administrator certification: baseline testing protocol, ImPACT normative data interpretation, post-injury score analysis and clinical integration with symptom evaluation, Q2." Annual ImPACT certification placed Q2 before the fall sports preseason baseline testing window. Physician ImPACT administrator certification is required for physicians directing concussion programs that use computerized neurocognitive testing — certification is program-specific and renewed annually through ImPACT Applications.' },
  { time: 'Renewal audit', action: 'Analytics: ABPN neurology MOC CME on pace and content-appropriate? CAQSM content requirements satisfied (if dual-certified)? State medical license CME complete? DEA valid? Annual concussion protocol CE current? ImPACT certification renewed? AAN and AMSSM memberships active? Complete sports neurologist credential audit 90 days before earliest renewal.' },
]

export default function ForSportsNeurologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Sports Neurologists"
        title={
          <>
            ABPN MOC and CAQSM sports medicine maintained.
            <br />
            <em className="not-italic text-gold">Concussion CE current. ImPACT certification tracked.</em>
          </>
        }
        lede="Sports neurologists manage ABPN neurology continuous MOC with sports neurology subspecialty content, CAQSM certificate of added qualifications from a separate certifying board (if dual-certified), state medical license biennial CME, DEA 3-year registration, annual concussion management protocol CE before each sports season, annual ImPACT neurocognitive testing certification renewal for concussion program directors, and professional development at AAN and AMSSM simultaneously. Momenties tracks CME by sports neurologist credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar in one view."
        crumbs={[{ label: 'For Sports Neurologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How sports neurologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for sports neurologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sports neurologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABPN neurology MOC, CAQSM sports medicine, and annual concussion season preparation requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {SNEUROL_WORKFLOW.map((step, i) => (
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
                &ldquo;My ABPN neurology MOC requires neurology content. My CAQSM was issued by ABFM — different board, different content requirements. I serve as the team neurologist for a university program, which means I need to be current on concussion protocols before every season — NCAA updates their concussion management guidelines annually and the AAN sports neurology section publishes updated concussion management recommendations. My ImPACT certification has to be renewed every year because I run the concussion program and supervise baseline testing. That&apos;s a separate certification that doesn&apos;t connect to either of my boards. State license biennial, DEA 3-year. The concussion management CE is the one that has a hard seasonal deadline — I need it before preseason baseline testing in August, not before my board renewal in December.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Marcus J., MD</div>
                  <div className="text-xs text-muted-foreground">Sports neurologist and university concussion program director, collegiate athletics medical staff</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All sports neurologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN neurology MOC CME — continuous, sports neurology content weighted',
                'CAQSM sports medicine certificate — concussion, RTP, sports cardiology domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual concussion management protocol CE — NCAA, AAN, Berlin Consensus updates',
                'Annual ImPACT neurocognitive testing certification — concussion program director',
                'AAN Sports Neurology Section membership — annual',
                'AAN and AMSSM conference CME planning by ABPN and CAQSM applicability',
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
        title="ABPN MOC and CAQSM sports medicine maintained."
        subtitle="CME tracking for dual-board certification, seasonal concussion protocol CE, ImPACT testing certification, and sports neurology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
