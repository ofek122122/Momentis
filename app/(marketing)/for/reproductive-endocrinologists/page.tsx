import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Reproductive Endocrinologists — ABOG MOC CME renewal, REI credential management',
  description:
    'Reproductive endocrinologists manage ABOG general obstetrics and gynecology primary MOC with REI subspecialty content, ABOG REI subspecialty certification on a 6-year examination cycle, annual SART/CDC ART outcome reporting compliance, laboratory director CLIA requirements for embryology laboratory directors, state medical license biennial CME, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full REI credential calendar.',
  alternates: { canonical: '/for/reproductive-endocrinologists' },
  openGraph: {
    title: 'Momenties for Reproductive Endocrinologists',
    description: 'ABOG MOC CME renewal, REI credential management.',
    url: '/for/reproductive-endocrinologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABOG OB/GYN MOC and REI subspecialty independently',
    desc: 'Reproductive endocrinologists hold ABOG general obstetrics and gynecology primary certification under continuous MOC and ABOG reproductive endocrinology and infertility subspecialty certification on a 6-year examination cycle — two ABOG credentials with different content requirements. ABOG REI subspecialty requires subspecialty-specific content including controlled ovarian stimulation protocols, IVF embryo culture and transfer, recurrent pregnancy loss evaluation, reproductive surgery (myomectomy, septum resection, tubal surgery), male factor evaluation, and genetic aspects of infertility including PGT-A and PGT-M. ABOG primary MOC requires broader OB/GYN content.',
  },
  {
    icon: Clock,
    title: 'REI specialist multi-credential renewal calendar',
    desc: '"ABOG OB/GYN MOC — continuous CME." "ABOG REI subspecialty — 6-year examination cycle, REI content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual SART/CDC ART outcome data reporting." "CLIA laboratory director requirements (if embryology lab director)." "Annual IVF protocol and success rate CE." "ASRM membership — annual." All REI specialist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ABOG 6-year REI examination countdown and SART/CDC annual reporting compliance analytics',
    desc: 'ABOG REI subspecialty examination every 6 years requires 12-18 months of preparation — a preparation window that must be placed well in advance of the 6-year cycle. SART/CDC ART outcome reporting: every fertility clinic performing ART in the United States must submit annual outcome data to CDC/SART as required by the Fertility Clinic Success Rate and Certification Act — failure to submit complete annual data results in removal from the SART annual report and public clinic success rate website. Annual data submission window is Q1-Q2 of the following year. CLIA laboratory director certification for physicians directing embryology laboratories has its own CE and biennial renewal requirements separate from ABOG.',
  },
  {
    icon: Users,
    title: 'ASRM, SART, and reproductive endocrinology professional involvement',
    desc: '"ASRM Annual Meeting — october." "SART Annual Meeting — october (co-located with ASRM)." "ESHRE Annual Meeting — june (European Society of Human Reproduction and Embryology)." "PGT-A CE — euploidy-tested frozen embryo transfer outcomes, mosaic embryo transfer evidence." "IVF stimulation protocol CE — progestin-primed versus antagonist ovarian stimulation, OHSS prevention strategies." "Recurrent pregnancy loss CE — ACOG/ASRM evidence-based evaluation criteria 2024 update." "Fertility preservation CE — oocyte cryopreservation outcomes in oncofertility, sperm banking and testicular tissue cryopreservation." All REI professional development on calendar. ASRM conference CME tagged by ABOG primary and REI subspecialty applicability.',
  },
]

const REI_WORKFLOW = [
  { time: 'Annual planning', action: 'ABOG OB/GYN MOC CME pace (REI content weighted), ABOG REI subspecialty CE pace with 6-year examination countdown, state medical license biennial CME, DEA 3-year renewal, SART/CDC annual data submission window (Q1-Q2), CLIA laboratory director renewal (if applicable), ASRM Annual Meeting, and ASRM membership all loaded in January. ABOG primary counter, REI subspecialty counter, and state licensure CME tracked independently. 6-year examination countdown displayed with 18-month alert.' },
  { time: 'CE completion', action: '"ASRM-approved — mosaic embryo transfer outcomes: grading scale validation, live birth rates versus euploid transfers, prenatal diagnosis recommendations, and patient counseling framework for mosaic results, 2 CME, AMA PRA Category 1, ABOG MOC applicable, ABOG REI applicable — preimplantation genetic testing domain." ABOG primary counter updates. REI subspecialty counter updates. State licensure CME updates. REI content confirmed.' },
  { time: 'SART/CDC reporting', action: '"Annual SART/CDC ART outcome data submission — Q1-Q2 window. Prior-year cycle data due [submission deadline]." Annual CDC/SART ART data submission placed as a hard calendar deadline. The Fertility Clinic Success Rate and Certification Act requires all ART clinics to submit annual cycle outcome data. Submission deadline typically June-August of the following year. Submission requires: cycle-level data including patient age, diagnosis, number of embryos transferred, and pregnancy outcomes. SART reporting coordinator and REI physician sign-off placed as joint calendar items with 30-day lead time before deadline.' },
  { time: 'CLIA renewal', action: '"CLIA laboratory director certificate renewal — biennial, [expiration date]. CE requirement: [specialty-specific laboratory CE]." CLIA laboratory director certificate renewal placed for REI physicians serving as the laboratory director of their embryology laboratory. CLIA laboratory director certificate is specialty-specific — high-complexity laboratory director certificate requires biennial renewal with CE in laboratory science. Certificate renewal separate from ABOG board credentials and state medical license. CLIA laboratory director lapse has immediate implications for laboratory operations and CMS compliance.' },
  { time: 'Renewal audit', action: 'Analytics: ABOG OB/GYN MOC CME on pace? ABOG REI subspecialty content satisfied? State medical license CME complete? DEA valid? Annual SART/CDC ART data submitted? CLIA laboratory director certificate current (if applicable)? ABOG 6-year examination date tracked? ASRM membership active? Complete REI specialist credential audit 90 days before earliest renewal.' },
]

export default function ForReproductiveEndocrinologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Reproductive Endocrinologists"
        title={
          <>
            ABOG OB/GYN MOC and REI subspecialty maintained.
            <br />
            <em className="not-italic text-gold">6-year examination tracked. SART/CDC annual reporting on calendar.</em>
          </>
        }
        lede="Reproductive endocrinologists manage ABOG general OB/GYN continuous MOC with REI subspecialty content, ABOG REI subspecialty certification on a 6-year examination cycle, state medical license biennial CME, DEA 3-year registration, annual SART/CDC ART outcome data reporting required by federal law, CLIA laboratory director certificate renewal at embryology laboratory directing physicians, and professional development at ASRM simultaneously. Momenties tracks CME by REI specialist credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar."
        crumbs={[{ label: 'For Reproductive Endocrinologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How reproductive endocrinologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for REI specialist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">REI specialist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABOG OB/GYN MOC, REI 6-year examination cycle, and annual SART/CDC federal ART reporting requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {REI_WORKFLOW.map((step, i) => (
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
                &ldquo;ABOG tracks my OB/GYN primary MOC and my REI subspecialty on a 6-year written examination cycle — separately, with different content requirements. The 6-year REI examination is the one that catches people because the cycle is so long that by year 4 you feel like you just got certified. I&apos;m the laboratory director for our embryology lab, which means I have a CLIA high-complexity laboratory director certificate with its own biennial renewal and CE requirements — completely separate from ABOG and from my state medical license. We submit SART/CDC ART outcome data annually as a federal requirement — that has a hard deadline that doesn&apos;t move. My state license is biennial. DEA is 3 years. Before Momenties I was tracking the CLIA renewal in a separate folder, the SART submission deadline on a sticky note on my monitor, and my ABOG credentials in the ABOG portal.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">E</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Elena K., MD</div>
                  <div className="text-xs text-muted-foreground">Reproductive endocrinologist and IVF program director, academic fertility center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All REI specialist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABOG OB/GYN MOC CME — continuous, REI content weighted',
                'ABOG REI subspecialty — 6-year examination cycle countdown with 18-month alert',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual SART/CDC ART outcome data submission — federal compliance deadline',
                'CLIA laboratory director certificate — biennial renewal (if embryology lab director)',
                'ASRM membership renewal — annual',
                'ASRM conference CME planning by ABOG primary and REI subspecialty applicability',
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
        title="ABOG OB/GYN MOC and REI subspecialty maintained."
        subtitle="CME tracking for dual ABOG certification, 6-year REI examination countdown, SART/CDC ART outcome reporting, CLIA laboratory director renewal, and REI professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
