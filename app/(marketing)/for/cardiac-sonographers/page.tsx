import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Cardiac Sonographers — ARDMS RDCS/RCS CE renewal, echocardiography credential management',
  description:
    'Cardiac sonographers manage ARDMS RDCS or CCI RCS echocardiography certification renewal with 30 CE per 3 years, specialty credentials (FE, AE, PE) on independent cycles, advanced certification CE, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full cardiac sonographer credential calendar.',
  alternates: { canonical: '/for/cardiac-sonographers' },
  openGraph: {
    title: 'Momenties for Cardiac Sonographers',
    description: 'ARDMS RDCS/RCS CE renewal, echocardiography credential management.',
    url: '/for/cardiac-sonographers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for ARDMS RDCS and CCI RCS echocardiography credentials',
    desc: 'ARDMS RDCS (Registered Diagnostic Cardiac Sonographer) and CCI RCS (Registered Cardiac Sonographer) certifications each require 30 CE per 3-year cycle. Specialty credentials — FE (Fetal Echocardiography), AE (Adult Echocardiography), PE (Pediatric Echocardiography) — are ARDMS specialty modules with independent renewal requirements. CE must be in applicable cardiac sonography content. Each credential tracked independently.',
  },
  {
    icon: Clock,
    title: 'Cardiac sonographer multi-credential renewal calendar',
    desc: '"ARDMS RDCS — 3-year, 30 CE." "CCI RCS — 3-year, 30 CE (if held)." "ARDMS FE/AE/PE specialty — 3-year independent cycle." "Advanced cardiac imaging CE — structural heart disease, TEE." "ASE membership — annual." "ASCA annual meeting CE." All cardiac sonographer credentials with 90-day advance alerts. Echocardiography practice never interrupted.',
  },
  {
    icon: BarChart3,
    title: 'Advanced echo and structural heart disease CE analytics',
    desc: 'Cardiac sonographers who perform advanced procedures — transesophageal echocardiography (TEE), stress echo, intracardiac echo, or structural heart disease imaging — may have institutional credentialing CE requirements for each modality. Advanced procedure competency CE tracked separately from ARDMS renewal CE. Each modality confirmed independently before institutional credentialing review.',
  },
  {
    icon: Users,
    title: 'ASE, ASCA, and cardiac sonography professional involvement',
    desc: '"ASE Annual Scientific Sessions — june." "ASCA Annual Symposium — fall." "ACC Annual Scientific Session — march." "Regional echo society annual meeting." "Structural heart disease imaging symposium." "TAVR and TEER procedural echo training." All cardiac sonography professional development on calendar. Conference CE tagged by ARDMS and CCI applicability in advance.',
  },
]

const ECHO_WORKFLOW = [
  { time: 'Annual planning', action: 'ARDMS RDCS 3-year CE pace (10 per year), CCI RCS cycle (if applicable), ARDMS specialty module cycles (FE/AE/PE), advanced procedure competency reviews, ASE Annual Scientific Sessions, and ASE membership all loaded in January. CE pace: 10 CE per year toward ARDMS 3-year cycle.' },
  { time: 'CE completion', action: '"ASE-approved — diastolic dysfunction assessment: grading and clinical integration, 2 CE, RDCS AE applicable." Tagged by applicable certification. ARDMS RDCS counter updates. If CCI RCS also accepts the CE, CCI counter updates. AE specialty credit confirmed if content meets AE requirements. Each tracked independently.' },
  { time: 'Specialty modules', action: '"ARDMS FE (Fetal Echo) renewal — 3-year, 30 CE, separate from RDCS cycle." ARDMS specialty module certifications (FE, AE, PE) tracked on independent 3-year cycles. FE specialty may expire before RDCS if obtained at different times. FE renewal CE must be in fetal echocardiography content — cardiac CE does not automatically satisfy FE requirements.' },
  { time: 'Advanced procedures', action: '"TEE competency CE — transesophageal echo technique and image optimization, 2 CE, institutional credentialing." Advanced procedure CE tracked as institutional credentialing requirement, separate from ARDMS renewal CE. TEE, stress echo, and structural heart procedure competency documented independently. Institutional credentialing window placed 90 days before annual privilege review.' },
  { time: 'Renewal audit', action: 'Analytics: ARDMS RDCS CE on pace for 3-year cycle? CCI RCS CE adequate? ARDMS specialty module CE current? TEE and advanced procedure competency documented? ASE membership active? Complete cardiac sonographer credential audit 90 days before earliest ARDMS certification renewal. ARDMS and CCI documentation maintained separately.' },
]

export default function ForCardiacSonographersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Cardiac Sonographers"
        title={
          <>
            RDCS and RCS certifications maintained.
            <br />
            <em className="not-italic text-gold">Specialty modules and TEE CE never missed.</em>
          </>
        }
        lede="Cardiac sonographers manage ARDMS RDCS and CCI RCS echocardiography certifications with 30 CE per 3-year cycle, ARDMS specialty module credentials (FE, AE, PE) on independent 3-year cycles, advanced procedure competency CE for TEE and structural heart imaging, and professional development simultaneously. Momenties tracks CE by cardiac sonography certification, surfaces renewal deadlines 90 days early, and manages the full echo credential calendar in one view."
        crumbs={[{ label: 'For Cardiac Sonographers' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How cardiac sonographers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for cardiac sonography credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Cardiac sonographer credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every 3-year ARDMS cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {ECHO_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold ARDMS RDCS, CCI RCS, and ARDMS FE for fetal echo — three certifications, all on 3-year cycles but none of them aligned because I got them at different times. The FE specialty module is the one that catches people: it expires independently from RDCS and the fetal echo CE doesn&apos;t automatically satisfy general RDCS requirements. Momenties tracks all three counters separately. I can see instantly that my RDCS is current, my CCI RCS is 8 months out, and my FE is due before both — without running the calendar math manually.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">H</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Holly N., RDCS, RCS, FE</div>
                  <div className="text-xs text-muted-foreground">Cardiac sonographer, academic echocardiography laboratory</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All cardiac sonographer credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ARDMS RDCS certification CE — 3-year, 30 CE',
                'CCI RCS certification CE — 3-year, 30 CE',
                'ARDMS FE specialty module — 3-year independent',
                'ARDMS AE/PE specialty modules — 3-year independent',
                'TEE competency CE — institutional credentialing',
                'Structural heart imaging CE (TAVR, TEER)',
                'ASE membership renewal — annual',
                'ASE and ASCA conference CE planning',
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
        title="RDCS and RCS certifications maintained."
        subtitle="CE tracking by echocardiography credential, specialty module calendar, and cardiac sonography professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
