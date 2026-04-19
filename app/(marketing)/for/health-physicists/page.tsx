import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Health Physicists — CHP CE renewal, health physicist credential management',
  description:
    'Health physicists manage ABHP CHP certification 30CE/3yr renewal, state radiation protection licensure CE, NRC license conditions annual review, annual radiation safety officer training, professional liability renewal, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full health physicist credential calendar.',
  alternates: { canonical: '/for/health-physicists' },
  openGraph: {
    title: 'Momenties for Health Physicists',
    description: 'CHP CE renewal, health physicist credential management.',
    url: '/for/health-physicists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CHP certification and state radiation protection licensure',
    desc: 'American Board of Health Physics (ABHP) Certified Health Physicist (CHP) requires 30 CE hours every 3 years in health physics content areas. CHP CE must be in health physics, radiation protection, or closely related technical content — general science CE does not automatically qualify. State radiation protection licensure or medical physicist licensure (where applicable) runs on an independent cycle. CHP 3-year counter and state licensure CE tracked independently.',
  },
  {
    icon: Clock,
    title: 'Health physicist multi-credential renewal calendar',
    desc: '"CHP — ABHP, 30 CE/3 years." "State radiation protection licensure CE — where required." "Annual radiation safety officer training — NRC and institutional requirement." "NRC license conditions review — annual." "Radioactive materials license amendment tracking." "HPS membership — annual." "IRPA congress participation." All health physicist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'NRC license conditions and radiation safety officer analytics',
    desc: 'Health physicists serving as Radiation Safety Officers (RSO) face NRC license conditions that require annual RSO training documentation — separate from CHP CE. NRC radioactive materials license conditions reviewed annually for compliance status — any conditions approaching review date placed with advance alerts. Agreement State license conditions tracked independently. Annual institutional radiation protection program effectiveness review placed as a separate milestone. Each tracked on independent cycles.',
  },
  {
    icon: Users,
    title: 'HPS, AAPM, and health physics professional involvement',
    desc: '"HPS Annual Meeting — july." "AAPM Annual Meeting — july." "IRPA Regional Symposium." "ANS Annual Meeting." "NRC regulatory updates CE." "EPA radiation protection guidance updates." "Occupational dose monitoring program updates." "Emergency response and FEMA radiological emergency training CE." All health physicist professional development on calendar. HPS and AAPM conference CE tagged by CHP applicability.',
  },
]

const HP_WORKFLOW = [
  { time: 'Annual planning', action: 'CHP 3-year 30-CE pace (annualized to 10 CE/year), state radiation protection licensure CE cycle, annual RSO training documentation, NRC license annual review date, HPS Annual Meeting, and HPS membership all loaded in January. CHP cumulative counter and state licensure CE tracked independently.' },
  { time: 'CE completion', action: '"HPS-approved — personnel dosimetry program management: OSL dosimeter performance specifications, dose algorithm updates, and occupational dose record management under 10 CFR 20, 2 CE, CHP applicable." CHP counter updates (cumulative toward 30/3yr target). State radiation protection CE updates if applicable. NRC-specific training CE tagged separately when regulatory content qualifies.' },
  { time: 'RSO training', action: '"Annual RSO training — NRC 10 CFR 35/30 regulatory updates, license condition compliance, and radiation protection program effectiveness review, Q1." Annual RSO training placed as a separate NRC requirement for Radiation Safety Officers listed on radioactive materials licenses. NRC license conditions require documented annual RSO training and program effectiveness review. Annual placement with Q1 target before NRC inspection cycle.' },
  { time: 'NRC license review', action: '"NRC radioactive materials license — annual conditions review, renewal date tracking." NRC license renewal placed with 12-month advance alert — NRC requires renewal applications submitted well before expiration. License conditions reviewed annually for compliance status. Any condition with upcoming review date placed as a separate milestone. Agreement State license conditions tracked independently if applicable.' },
  { time: 'Renewal audit', action: 'Analytics: CHP CE on pace (cumulative toward 30/3yr)? Annual RSO training documented? State radiation protection licensure CE adequate? NRC license conditions compliance current? HPS membership active? Complete health physicist credential audit 90 days before CHP renewal. ABHP, NRC, state, and institutional documentation maintained separately.' },
]

export default function ForHealthPhysicistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Health Physicists"
        title={
          <>
            CHP certification and state licensure maintained.
            <br />
            <em className="not-italic text-gold">NRC compliance and RSO training never lapsed.</em>
          </>
        }
        lede="Health physicists manage ABHP CHP certification with 30 CE hours every 3 years in health physics content, state radiation protection licensure on an independent cycle, annual Radiation Safety Officer training documentation as an NRC requirement, radioactive materials license conditions review, annual radiation protection program effectiveness reviews, and professional development simultaneously. Momenties tracks CE by health physics credential, surfaces renewal deadlines 90 days early, and manages the full health physicist credential calendar in one view."
        crumbs={[{ label: 'For Health Physicists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How health physicists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for health physicist credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Health physicist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every CHP cycle, NRC requirement, and radiation protection obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {HP_WORKFLOW.map((step, i) => (
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
                &ldquo;CHP is a 3-year cycle for 30 hours — shorter than most professional certifications, which is actually harder to manage because it comes around faster. I serve as RSO on our radioactive materials license, which has NRC-required annual documentation separate from CHP CE. The license itself has renewal and conditions that I need to track. My state has a separate radiation protection supervisor registration that renews independently. HPS membership is annual. At any given time I have 4 or 5 active credential obligations on different schedules. Momenties is the only calendar tool I&apos;ve used that lets me track NRC compliance requirements alongside professional CE as separate calendar items without them getting mixed together.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">W</div>
                <div>
                  <div className="text-sm font-medium text-foreground">William S., CHP, RSO</div>
                  <div className="text-xs text-muted-foreground">Health physicist, university research reactor and radioisotope laboratory</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All health physicist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABHP CHP certification CE — 30 hours/3 years',
                'State radiation protection licensure CE — where required',
                'Annual RSO training — NRC requirement for listed RSOs',
                'NRC radioactive materials license renewal and conditions review',
                'Annual radiation protection program effectiveness review',
                'Agreement State license conditions tracking — where applicable',
                'HPS membership renewal — annual',
                'HPS and AAPM conference CE planning by CHP applicability',
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
        title="CHP certification and state licensure maintained."
        subtitle="CE pace tracking, NRC compliance calendar, RSO annual training, and health physics professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
