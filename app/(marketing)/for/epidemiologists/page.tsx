import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Epidemiologists — CPH/CEPH CE renewal, epidemiologist credential management',
  description:
    'Epidemiologists manage NBPHE CPH certification 50CE/2yr renewal, state public health or other licensure CE, mandatory epidemiology and biostatistics CE categories, IRB annual training, CITI annual recertification, human subjects research CE, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full epidemiologist credential calendar.',
  alternates: { canonical: '/for/epidemiologists' },
  openGraph: {
    title: 'Momenties for Epidemiologists',
    description: 'CPH CE renewal, epidemiologist credential management.',
    url: '/for/epidemiologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CPH certification and state public health licensure',
    desc: 'National Board of Public Health Examiners (NBPHE) Certified in Public Health (CPH) requires 50 CE hours every 2 years across public health competency domains. CPH CE must be in public health content — not all health or science CE qualifies. Epidemiologists with underlying professional licenses (MD, PhD, MPH via state credential) face independent renewal cycles. Mandatory CPH domain distribution tracked: epidemiology and biostatistics, environmental health, social and behavioral health, public health policy — each tracked within the 50-hour total.',
  },
  {
    icon: Clock,
    title: 'Epidemiologist multi-credential renewal calendar',
    desc: '"CPH — NBPHE, 50 CE/2 years." "State professional licensure — biennial (if applicable)." "CITI annual recertification — human subjects research." "IRB annual training — institutional requirement." "Ethics CE — research ethics within CPH domains." "APHA membership — annual." All epidemiologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'CITI annual recertification and human subjects research analytics',
    desc: 'Epidemiologists conducting human subjects research require CITI annual recertification for active protocols — most IRBs now require annual rather than biennial CITI renewal. Institutional IRB training tracked separately from CITI — institutional onboarding training and any protocol-specific training. CDC PHEP (Public Health Emergency Preparedness) training tracked for epidemiologists in public health practice settings. Data management and privacy training (HIPAA, FERPA for school-based research) placed as annual mandatory requirements.',
  },
  {
    icon: Users,
    title: 'APHA, SER, and epidemiology professional involvement',
    desc: '"APHA Annual Meeting — november." "SER Annual Meeting — june." "CSTE Annual Conference." "ASTHO Annual Meeting." "ISEE Annual Meeting (environmental epidemiology)." "IARC symposia CE." "Epi Info and STATA methods updates CE." "Novel outbreak investigation methodology CE." All epidemiologist professional development on calendar. APHA and SER conference CE tagged by CPH domain applicability.',
  },
]

const EPI_WORKFLOW = [
  { time: 'Annual planning', action: 'CPH 2-year 50-CE pace (annualized to 25 CE/year), CPH domain distribution pace, state licensure CE cycle (if applicable), CITI annual recertification, IRB annual training, APHA Annual Meeting, and APHA membership all loaded in January. CPH cumulative counter and domain distribution tracked independently.' },
  { time: 'CE completion', action: '"APHA-approved — COVID-19 outbreak investigation: genomic surveillance integration, exposure window estimation, and attack rate calculation for congregate settings, 3 CE, CPH applicable — epidemiology domain." CPH counter updates (cumulative toward 50/2yr). Epidemiology domain counter updates. State licensure CE updates if applicable. Ethics CE tracks to ethics domain if applicable.' },
  { time: 'CITI recertification', action: '"CITI annual recertification — human subjects research, biomedical focus, Q1." CITI annual recertification placed as a mandatory IRB requirement for any active research protocols. Most institutional IRBs require annual CITI recertification for investigators and research staff on active protocols — separate from the CITI initial training. Annual CITI renewal placed as Q1 event with completion target before February protocol review cycle.' },
  { time: 'Domain distribution', action: '"CPH domain check — epidemiology and biostatistics CE current pace?" Domain distribution review placed as a mid-cycle check at the 12-month mark of the 2-year CPH cycle. CPH domains reviewed: epidemiology/biostatistics, environmental health, social/behavioral health, public health policy, program planning. Domain shortfall identified at 12 months can be addressed with targeted CE in the second year. Shortfall identified at 22 months requires rapid targeted CE under time pressure.' },
  { time: 'Renewal audit', action: 'Analytics: CPH CE on pace (cumulative toward 50/2yr)? Domain distribution adequate across all CPH domains? CITI recertification current? IRB annual training complete? State licensure CE adequate? APHA membership active? Complete epidemiologist credential audit 90 days before CPH renewal. NBPHE and institutional documentation maintained separately.' },
]

export default function ForEpidemiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Epidemiologists"
        title={
          <>
            CPH certification and professional licensure maintained.
            <br />
            <em className="not-italic text-gold">CITI recertification and domain distribution never short.</em>
          </>
        }
        lede="Epidemiologists manage NBPHE CPH certification with 50 CE hours every 2 years distributed across mandatory public health competency domains, underlying professional licensure on independent cycles, CITI annual recertification requirements for active research protocols, institutional IRB annual training, and professional development simultaneously. Momenties tracks CE by epidemiology credential with domain distribution analytics, surfaces renewal deadlines 90 days early, and manages the full epidemiologist credential calendar in one view."
        crumbs={[{ label: 'For Epidemiologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How epidemiologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for epidemiologist credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Epidemiologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every CPH cycle, domain distribution, and research training obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {EPI_WORKFLOW.map((step, i) => (
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
                &ldquo;CPH is 50 hours every 2 years, which sounds manageable, but the domain distribution requirement is what makes it complicated. I can&apos;t just take 50 hours of epi CE — I need to cover all the CPH competency domains. If I&apos;m accumulating CE heavily in my specialty area and light in the policy domain, my total hours look fine but my renewal isn&apos;t. I also have CITI annual recertification because I have active research protocols — that&apos;s a separate IRB requirement that has nothing to do with CPH. And our institution has annual human subjects protection training on top of CITI. Three different tracking needs. Momenties shows me the domain breakdown, not just the total. That&apos;s what I needed.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Nadia K., PhD, CPH</div>
                  <div className="text-xs text-muted-foreground">Epidemiologist, state health department infectious disease unit</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All epidemiologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'NBPHE CPH certification CE — 50 hours/2 years',
                'CPH domain distribution — epidemiology/biostatistics, environmental, social/behavioral, policy',
                'CITI annual recertification — active research protocol requirement',
                'Institutional IRB annual training',
                'State professional licensure CE — biennial (if applicable)',
                'Annual data privacy and human subjects protection CE',
                'APHA membership renewal — annual',
                'APHA and SER conference CE planning by CPH domain applicability',
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
        title="CPH certification and professional licensure maintained."
        subtitle="CE tracking with domain distribution analytics, CITI recertification calendar, IRB training, and epidemiology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
