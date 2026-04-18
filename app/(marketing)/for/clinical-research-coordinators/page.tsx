import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Clinical Research Coordinators — CCRC/CCRP CE renewal, research credential management',
  description:
    'Clinical research coordinators manage ACRP CCRC or SOCRA CCRP certification renewal CE, ICH GCP training annual renewal, IATA dangerous goods certification biennial, CITI Program training annual, IRB protocol-specific training per study, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full clinical research coordinator credential calendar.',
  alternates: { canonical: '/for/clinical-research-coordinators' },
  openGraph: {
    title: 'Momenties for Clinical Research Coordinators',
    description: 'CCRC/CCRP CE renewal, research credential management.',
    url: '/for/clinical-research-coordinators',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CCRC, CCRP, and research certifications',
    desc: 'ACRP Certified Clinical Research Coordinator (CCRC) and SOCRA Certified Clinical Research Professional (CCRP) certifications require CE per renewal cycle in clinical research content. CCRC and CCRP are independent certifications from different organizations — coordinators holding both face independent CE requirements. ICH GCP training renewal (annual or per sponsor requirement) tracked as a separate mandatory category from CCRC and CCRP CE.',
  },
  {
    icon: Clock,
    title: 'Clinical research coordinator multi-credential renewal calendar',
    desc: '"CCRC — ACRP, renewal CE cycle." "CCRP — SOCRA, renewal CE cycle." "ICH GCP training — annual or per-sponsor." "CITI Program training — annual renewal." "IATA dangerous goods certification — biennial." "Institutional biosafety training — annual." "Protocol-specific training — per study activation." All research coordinator credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Regulatory and protocol training compliance analytics',
    desc: 'Clinical research coordinators managing multiple active studies face per-study protocol-specific training requirements set by sponsors and IRBs at each study activation. Protocol training is separate from CCRC or CCRP CE — a coordinator can be certified but not qualified for a specific study until protocol training is documented. Training tracked per study independently, with study-specific expiration dates when applicable.',
  },
  {
    icon: Users,
    title: 'ACRP, SOCRA, and clinical research professional involvement',
    desc: '"ACRP Annual Meeting — april." "SOCRA Annual Conference — october." "DIA Annual Meeting — june." "MAGI\'s Clinical Research Conference." "RAPS Regulatory Convergence." "IRB training and human subjects protection updates." "Sponsor-specific investigator training." All clinical research professional development on calendar. ACRP and SOCRA conference CE tagged by CCRC and CCRP applicability.',
  },
]

const CRC_WORKFLOW = [
  { time: 'Annual planning', action: 'CCRC renewal CE cycle, CCRP renewal CE cycle (if applicable), ICH GCP annual renewal, CITI annual renewal, IATA biennial dangerous goods cycle, annual biosafety training, ACRP Annual Meeting, and ACRP membership all loaded in January. CCRC, CCRP, and regulatory training paces tracked independently.' },
  { time: 'CE completion', action: '"ACRP-approved — decentralized clinical trials: remote monitoring and ePRO implementation for site coordinators, 3 CE, CCRC applicable." Tagged by applicable certification. CCRC counter updates. If CCRP also applies, CCRP counter updates. ICH GCP mandatory category does not update from this CE — GCP must be specific GCP training content. Each tracked independently.' },
  { time: 'GCP training', action: '"ICH GCP E6 R2/R3 training renewal — annual, sponsor requirement for all active studies." ICH GCP training tracked as a mandatory regulatory requirement separate from CCRC or CCRP CE. Many sponsors require annual GCP renewal as a condition of continued study participation — expired GCP training requires coordinator to be removed from active studies pending renewal. Annual renewal placed on calendar.' },
  { time: 'Protocol training', action: '"Protocol training — Study 2024-001, XYZ Pharma, Phase III oncology, activation date Q2." Protocol-specific training logged at study activation. IRB training requirements and sponsor protocol training placed on calendar with protocol-specific expiration dates. Protocol training lapse means the coordinator cannot perform study procedures for that study until retraining is documented.' },
  { time: 'Renewal audit', action: 'Analytics: CCRC CE on pace? CCRP CE adequate? ICH GCP current? CITI training current? IATA certification valid? Institutional biosafety done? Protocol training current for all active studies? ACRP membership active? Complete research coordinator credential audit 90 days before earliest certification renewal. ACRP, SOCRA, and sponsor training documentation maintained separately.' },
]

export default function ForClinicalResearchCoordinatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Clinical Research Coordinators"
        title={
          <>
            CCRC and CCRP certifications maintained.
            <br />
            <em className="not-italic text-gold">GCP training and protocol credentials never lapsed.</em>
          </>
        }
        lede="Clinical research coordinators manage ACRP CCRC and SOCRA CCRP certification CE renewal on independent cycles, annual ICH GCP training renewal required for all active study participation, per-study protocol-specific training at each study activation, CITI Program annual renewal, IATA dangerous goods biennial certification, and professional development simultaneously. Momenties tracks CE by research credential, surfaces renewal deadlines 90 days early, and manages the full clinical research coordinator credential calendar in one view."
        crumbs={[{ label: 'For Clinical Research Coordinators' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How clinical research coordinators use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for research coordination credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Research coordinator credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every certification, regulatory, and protocol training cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {CRC_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold CCRC and CCRP because different sponsors want different certifications on their delegation logs. The GCP training is the one that bites people — most sponsors now require annual renewal, not the old every-2-years schedule, and the renewal date is tied to when you took the training, not to a calendar year. I was also managing protocol-specific training for 11 active studies at one point, each activated at different times with different expiration windows. Momenties let me load every protocol training separately with its own due date. The GCP alert alone prevented a finding at one of our sponsor audits.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Nicole F., BS, CCRC, CCRP</div>
                  <div className="text-xs text-muted-foreground">Senior clinical research coordinator, academic oncology research program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All clinical research coordinator credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ACRP CCRC certification CE — renewal cycle',
                'SOCRA CCRP certification CE — renewal cycle',
                'ICH GCP training — annual renewal',
                'CITI Program training — annual renewal',
                'IATA dangerous goods certification — biennial',
                'Annual institutional biosafety training',
                'Protocol-specific training — per study activation',
                'ACRP and SOCRA conference CE planning',
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
        title="CCRC and CCRP certifications maintained."
        subtitle="CE tracking by certification, GCP and protocol training calendar, and clinical research professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
