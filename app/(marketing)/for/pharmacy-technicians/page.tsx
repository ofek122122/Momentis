import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pharmacy Technicians — PTCB CPhT renewal, CE tracking, and tech credential management',
  description:
    'Pharmacy technicians manage 20 CE hours per 2-year PTCB CPhT renewal cycle with mandatory pharmacy law and patient safety CE, state pharmacy technician registration renewals, immunization certification maintenance, and professional development simultaneously. Momenties tracks CE by category, surfaces renewal deadlines 90 days early, and manages the full pharmacy tech credential calendar.',
  alternates: { canonical: '/for/pharmacy-technicians' },
  openGraph: {
    title: 'Momenties for Pharmacy Technicians',
    description: 'PTCB CPhT renewal, CE tracking, and pharmacy technician credential management.',
    url: '/for/pharmacy-technicians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for PTCB CPhT renewal',
    desc: 'PTCB CPhT renewal requires 20 CE hours per 2-year cycle with 1 hour mandatory in pharmacy law and 1 hour in patient safety. ASHP ExamPrep and PTCB-approved CE providers accepted. Tag every CE activity by category: pharmacy law (mandatory), patient safety (mandatory), general pharmacy CE. Mandatory categories tracked separately from general hours.',
  },
  {
    icon: Clock,
    title: 'Pharmacy tech multi-credential renewal calendar',
    desc: '"CPhT — PTCB, 2-year renewal, october." "State pharmacy technician registration — renewal, varies." "Immunization certification — CPE hours, annual." "CPR/BLS — 2-year." "Sterile compounding certification — annual." All pharmacy technician credentials with 90-day advance alerts. State registration never lapses between shifts.',
  },
  {
    icon: BarChart3,
    title: 'State registration and CE analytics',
    desc: 'Many states have independent pharmacy technician registration requirements beyond PTCB certification, with their own CE requirements that may differ from PTCB standards. Track state registration CE separately from PTCB CPhT CE. Analytics shows both tracks simultaneously — no category confusion between state and national certification requirements.',
  },
  {
    icon: Users,
    title: 'Specialty certification and professional development',
    desc: '"ASHP Midyear Clinical Meeting — december." "PTCB specialty certification study — CSPT, oncology." "State pharmacy association meeting — annual." Specialty certifications (CSPT, CPHT-SC) tracked alongside general CPhT renewal. Professional development commitments on calendar from year start.',
  },
]

const PHARM_TECH_WORKFLOW = [
  { time: 'Annual planning', action: 'PTCB CPhT renewal date, state pharmacy tech registration deadline, immunization cert renewal, CPR/BLS recertification, and sterile compounding cert expiration all loaded in January. 90-day alerts on every credential. CE completion pace calculated — 10 hours per year satisfies the 2-year PTCB cycle with time for mandatory categories.' },
  { time: 'CE completion', action: '"PTCB-approved online module — pharmacy law update, tuesday 7pm, 1 hour, pharmacy law CE." Mandatory pharmacy law category marked complete. Patient safety CE tracked separately. General CE hours counted toward total. No end-of-cycle discovery that mandatory categories are missing.' },
  { time: 'State registration', action: '"State pharmacy technician registration renewal — september 30." State CE requirements documented separately from PTCB requirements. Some states accept PTCB CE; others have distinct approved providers. Both sets of requirements tracked without confusion.' },
  { time: 'Specialty cert', action: '"CSPT oncology specialty certification study — thursdays 7pm." PTCB specialty certifications (CSPT, CPHT-SC) require separate preparation and renewal. Specialty cert study schedule placed on calendar alongside general CPhT renewal cycle. Career development track visible.' },
  { time: 'Renewal audit', action: 'Analytics: CE progress by category. PTCB pharmacy law hour complete? Patient safety CE done? General hours on track? State registration CE satisfied? Immunization cert current? CPR valid? Sterile compounding cert maintained? Complete audit before any renewal deadline opens.' },
]

export default function ForPharmacyTechniciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pharmacy Technicians"
        title={
          <>
            CPhT maintained.
            <br />
            <em className="not-italic text-gold">Every CE requirement tracked.</em>
          </>
        }
        lede="Pharmacy technicians manage 20 CE hours per 2-year PTCB CPhT renewal with mandatory pharmacy law and patient safety categories, state pharmacy technician registration renewals, immunization certification, sterile compounding credentials, and professional development simultaneously. Momenties tracks CE by mandatory category, surfaces renewal deadlines 90 days early, and manages the full pharmacy tech credential calendar in one view."
        crumbs={[{ label: 'For Pharmacy Technicians' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pharmacy technicians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CPhT credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CPhT credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every 2-year renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {PHARM_TECH_WORKFLOW.map((step, i) => (
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
                &ldquo;I had completed 19 of my 20 required CE hours before my PTCB renewal — then found out I&apos;d never done the mandatory pharmacy law hour. I had to find and complete it in 3 days before my renewal deadline. Momenties fixed this completely. I track pharmacy law and patient safety as separate required categories. Both show as incomplete until I complete them — not hidden in a general CE total.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">K</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Kezia M., CPhT</div>
                  <div className="text-xs text-muted-foreground">Pharmacy technician, hospital inpatient pharmacy</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pharmacy tech credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CE by category — PTCB CPhT 2-year renewal',
                'Mandatory pharmacy law CE (1 hour)',
                'Mandatory patient safety CE (1 hour)',
                'State pharmacy technician registration',
                'CPR/BLS — 2-year recertification',
                'Immunization certification CE',
                'Sterile compounding certification renewal',
                'PTCB specialty cert (CSPT, CPHT-SC)',
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
        title="CPhT maintained. Every CE requirement tracked."
        subtitle="CE tracking by mandatory category, multi-credential renewal calendar, and pharmacy tech professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
