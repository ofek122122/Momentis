import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Nuclear Pharmacists — BCNP CE renewal, nuclear pharmacy credential management',
  description:
    'Nuclear pharmacists manage BPS BCNP certification 100CE/7yr renewal, state pharmacy biennial licensure CE, NRC radioactive materials license renewal, radiation safety officer designation renewal, annual radiation safety training, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full nuclear pharmacist credential calendar.',
  alternates: { canonical: '/for/nuclear-pharmacists' },
  openGraph: {
    title: 'Momenties for Nuclear Pharmacists',
    description: 'BCNP CE renewal, nuclear pharmacy credential management.',
    url: '/for/nuclear-pharmacists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for BCNP certification and state pharmacy licensure',
    desc: 'Board of Pharmacy Specialties Certified Nuclear Pharmacist (BCNP) requires 100 CE hours every 7 years. The 7-year cycle is the longest specialty pharmacy recertification period — making pace tracking critical since underpacing in early years creates a year-6 and year-7 scramble. State pharmacy licensure CE runs on a biennial cycle with ACPE credit requirements separate from BCNP content. BCNP 7-year counter and state biennial CE tracked independently.',
  },
  {
    icon: Clock,
    title: 'Nuclear pharmacist multi-credential renewal calendar',
    desc: '"BCNP — BPS, 100 CE/7 years." "State pharmacy license — biennial ACPE CE." "NRC radioactive materials license — specific license renewal, varies." "Radiation safety officer designation — institutional annual review." "Annual radiation safety training — NRC requirement." "DEA registration — 3-year renewal." "ACNP membership — annual." All nuclear pharmacist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'NRC radioactive materials license and radiation safety analytics',
    desc: 'Nuclear pharmacists operating under an NRC or Agreement State radioactive materials license face license-specific renewal and amendment timelines separate from BCNP CE. Radiation safety officer (RSO) designation requires annual institutional review and documented radiation safety training independent of BCNP hours. Annual radiation safety training documentation required by NRC for all authorized users. Each tracked as a separate mandatory requirement on independent cycles.',
  },
  {
    icon: Users,
    title: 'ACNP, SNM-MI, and nuclear pharmacy professional involvement',
    desc: '"ACNP Annual Meeting." "SNMMI Annual Meeting — june." "ACPE CE credit meetings — quarterly pharmacy association." "NRC regulatory update training." "PET radiopharmaceutical manufacturing updates — FDA cGMP." "New radiopharmaceutical approval CE — theranostics, PSMA, DOTATATE." "Radiopharmacy compounding USP <825> compliance CE." All nuclear pharmacy professional development on calendar. ACNP and SNMMI CE tagged by BCNP and state licensure applicability.',
  },
]

const NP_WORKFLOW = [
  { time: 'Annual planning', action: 'BCNP 7-year 100-CE pace (annualized to ~14.3 CE/year), state pharmacy biennial CE cycle, annual radiation safety training, radiation safety officer annual review, DEA 3-year cycle, NRC license review date, SNMMI Annual Meeting, and ACNP membership all loaded in January. BCNP cumulative counter and state pharmacy CE tracked independently.' },
  { time: 'CE completion', action: '"ACNP-approved — theranostics and targeted radionuclide therapy: Lu-177 DOTATATE preparation, quality control, and patient dosimetry coordination, 2 CE, BCNP applicable." Tagged by applicable certification. BCNP counter updates (cumulative toward 100/7yr target). State pharmacy CE updates if applicable. Radiopharmaceutical-specific CE logged with clinical relevance notes.' },
  { time: 'Radiation safety', action: '"Annual radiation safety training — NRC authorized user refresher, Q1." Annual radiation safety training placed as a mandatory NRC requirement for all authorized users under the radioactive materials license. Training documentation required for NRC license inspections. Annual institutional RSO review placed separately — RSO designation review is separate from authorized user training documentation.' },
  { time: 'NRC license', action: '"NRC radioactive materials license — specific license renewal review." NRC license renewal placed on schedule with 12-month advance alert — NRC recommends renewal applications submitted 30-60 days before expiration but 12-month visibility ensures no lapse in authorized operations. License amendments for new radiopharmaceuticals placed as separate milestones. DEA 3-year renewal placed independently.' },
  { time: 'Renewal audit', action: 'Analytics: BCNP CE on pace (cumulative toward 100/7yr)? Annual radiation safety training current? RSO designation review complete? NRC license status valid? State pharmacy CE adequate for biennial renewal? DEA current? ACNP membership active? Complete nuclear pharmacist credential audit 90 days before earliest renewal. BPS, state board, NRC, and institutional documentation maintained separately.' },
]

export default function ForNuclearPharmacistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Nuclear Pharmacists"
        title={
          <>
            BCNP certification and state licensure maintained.
            <br />
            <em className="not-italic text-gold">NRC compliance and radiation safety never lapsed.</em>
          </>
        }
        lede="Nuclear pharmacists manage BPS BCNP certification with 100 CE hours over 7 years — the longest specialty pharmacy cycle requiring disciplined year-1 pacing — state pharmacy biennial licensure on an independent cycle, NRC radioactive materials license renewal, annual radiation safety training as an NRC requirement, radiation safety officer designation annual review, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CE by nuclear pharmacy credential, surfaces renewal deadlines 90 days early, and manages the full nuclear pharmacist credential calendar in one view."
        crumbs={[{ label: 'For Nuclear Pharmacists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How nuclear pharmacists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for nuclear pharmacist credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Nuclear pharmacist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every BCNP cycle, NRC requirement, and radiation safety obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {NP_WORKFLOW.map((step, i) => (
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
                &ldquo;Seven years sounds like a long time until you&apos;re in year 4 and realize you&apos;ve only accumulated 28 hours toward 100. The long cycle creates a false sense of security — you think you have time, but the nuclear pharmacy CE market is smaller than general pharmacy so finding quality BCNP-specific content takes effort. My state license renews every 2 years completely independently. I also have the NRC annual radiation safety training that lives entirely outside the BPS system, and the RSO annual review that the hospital tracks separately. Momenties gives me the annualized pace indicator so I know exactly how far behind or ahead I am in year 3 or year 5.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">D</div>
                <div>
                  <div className="text-sm font-medium text-foreground">David K., PharmD, BCNP</div>
                  <div className="text-xs text-muted-foreground">Nuclear pharmacist, central radiopharmacy operation</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All nuclear pharmacist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'BPS BCNP certification CE — 100 hours/7 years',
                'State pharmacy licensure CE — biennial ACPE credits',
                'DEA registration renewal — 3-year',
                'NRC radioactive materials license renewal — specific license',
                'Annual radiation safety training — NRC authorized user requirement',
                'Radiation safety officer designation — annual institutional review',
                'ACNP membership renewal — annual',
                'SNMMI and ACNP conference CE planning by BCNP applicability',
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
        title="BCNP certification and state licensure maintained."
        subtitle="CE pace tracking for 7-year cycle, NRC radiation safety calendar, DEA tracking, and nuclear pharmacy professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
