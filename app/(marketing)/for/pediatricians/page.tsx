import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatricians — CME tracking, ABP MOC, and license renewals',
  description:
    'Pediatricians manage ABP Maintenance of Certification requirements, multi-state medical licenses, DEA registrations, BLS/PALS/NRP certifications, and hospital privileges. Momenties tracks CME by ABP activity type, surfaces renewal deadlines early, and keeps every credential current.',
  alternates: { canonical: '/for/pediatricians' },
  openGraph: {
    title: 'Momenties for Pediatricians',
    description: 'CME tracking, ABP MOC, and credential renewal management for pediatricians.',
    url: '/for/pediatricians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'ABP Maintenance of Certification',
    desc: 'Tag every CME activity by ABP MOC activity type. Track Part 2 Self-Assessment, Part 4 Improvement in Medical Practice, and Part 3 Cognitive Expertise requirements. 5-year cycle tracked per sub-specialty. Annual requirements separated from cycle totals.',
  },
  {
    icon: Clock,
    title: 'Multi-credential renewal calendar',
    desc: '"ABP MOC deadline — cycle end, december." "Medical license — state A, june 30." "DEA registration — 3-year, september." "BLS — 2-year, march." "PALS recertification — 2-year, august." "NRP — 2-year, june." All on one calendar with 90-day alerts.',
  },
  {
    icon: BarChart3,
    title: 'Non-clinical time analytics',
    desc: 'Tag CME events, quality improvement activities, administrative meetings, and research separately from patient care time. Analytics shows how non-clinical hours distribute. Protect the continuing education and QI time that ABP Maintenance of Certification requires.',
  },
  {
    icon: Users,
    title: 'Professional meetings and society events',
    desc: '"AAP National Conference & Exhibition — october." "State chapter annual meeting — may." "Section on hospital medicine — quarterly." "Department QI meeting — monthly." All professional commitments on calendar from the year\'s start.',
  },
]

const PEDS_WORKFLOW = [
  { time: 'Annual planning', action: 'All medical license renewals, DEA registration, BLS/PALS/NRP recertification dates on calendar. ABP MOC requirements calculated: Self-Assessment modules needed, QI activity due, CME credits to complete per year for the 5-year cycle.' },
  { time: 'CME events', action: '"AAP self-assessment module — developmental pediatrics, monday 8pm, 2 hours, Part 2 MOC." Tagged and added. MOC credit type recorded. Annual self-assessment requirement tracked separately from general CME.' },
  { time: 'QI activity', action: '"Quality improvement — well-child visit completion rates, Q2." Part 4 MOC activity documented. ABP QI credit logged for the certification cycle. Department team members and timeline blocked on calendar.' },
  { time: 'Conference', action: '"AAP NCE — october 17-21." CME sessions tracked by MOC credit type. Hotel and travel blocked. Coverage for patient panel confirmed. Sub-specialty society sessions pre-tagged for relevant MOC credits.' },
  { time: 'MOC audit', action: 'Analytics: ABP MOC progress by activity type. Part 2 self-assessments complete? Part 4 QI activity on track? Cognitive exam registered? Time to plan remaining CME events to close gaps before the ABP cycle deadline.' },
]

export default function ForPediatriciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatricians"
        title={
          <>
            Every credential current.
            <br />
            <em className="not-italic text-gold">ABP certification on track.</em>
          </>
        }
        lede="Pediatricians manage ABP Maintenance of Certification requirements, multi-state medical licenses, DEA registrations, BLS/PALS/NRP recertifications, and hospital privileges simultaneously. Momenties tracks CME by ABP activity type, surfaces all renewal deadlines 90 days early, and manages the non-clinical calendar in one view."
        crumbs={[{ label: 'For Pediatricians' }]}
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
            CME analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatricians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Non-clinical calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {PEDS_WORKFLOW.map((step, i) => (
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
                &ldquo;Between BLS, PALS, NRP, DEA, my state license, hospital privileges at two hospitals, and ABP MOC — I had seven different renewal timelines to track. I&apos;d get a notice that something was expiring in 30 days and scramble to renew it. Now I have 90-day alerts on everything and I renew on my own schedule, not in a panic.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Dr. Marcus W., MD</div>
                  <div className="text-xs text-muted-foreground">General pediatrician, community practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatrician credentials in one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP MOC — Part 2, Part 3, Part 4 by cycle',
                'Medical license renewal (all states)',
                'DEA registration — 3-year renewal',
                'BLS — 2-year recertification',
                'PALS — 2-year recertification',
                'NRP — 2-year recertification',
                'Hospital privileges and credentialing',
                'AAP membership renewal',
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
        title="Every credential current. ABP certification on track."
        subtitle="ABP MOC tracking, multi-credential renewals, and professional calendar management. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
