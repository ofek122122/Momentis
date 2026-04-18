import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Orthopedic Surgeons — ABOS MOC, CME tracking, and orthopedic surgery credential management',
  description:
    'Orthopedic surgeons manage ABOS (American Board of Orthopaedic Surgery) MOC with continuous CME requirements, state medical license biennial CME, DEA 3-year registration, robotic joint replacement credentialing, spine surgery credentialing, manufacturer-specific implant training, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full orthopedic surgery credential calendar.',
  alternates: { canonical: '/for/orthopedic-surgeons' },
  openGraph: {
    title: 'Momenties for Orthopedic Surgeons',
    description: 'ABOS MOC, CME tracking, and orthopedic surgery credential management.',
    url: '/for/orthopedic-surgeons',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABOS MOC and orthopedic board requirements',
    desc: 'Orthopedic surgeons certified by the American Board of Orthopaedic Surgery (ABOS) face continuous MOC with CME in orthopaedic surgery content. ABOS MOC requires CME in orthopaedic content areas including joint replacement, trauma, spine, and sports medicine. Subspecialty certificate holders (sports medicine, hand surgery, orthopedic trauma) may have additional subspecialty MOC requirements. Each ABOS subspecialty counter tracked independently from general ABOS MOC.',
  },
  {
    icon: Clock,
    title: 'Orthopedic surgeon multi-credential renewal calendar',
    desc: '"ABOS primary certificate MOC — continuous CME." "ABOS subspecialty certificates — additional MOC requirements." "State medical license — biennial CE." "DEA registration — 3-year." "Robotic joint replacement credentialing — institutional annual." "Implant training certifications — manufacturer-specific." "AAOS membership — annual." All orthopedic surgery credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Robotic surgery and implant training credentialing analytics',
    desc: 'Orthopedic surgeons using robotic-assisted joint replacement (Mako, ROSA, Navio) require institutional credentialing with manufacturer training. Robotic credentialing renewal is set by institutional policy — typically annual peer review with case minimums per platform. New implant system adoptions trigger mandatory manufacturer training requirements before use. Each robotic platform and implant system tracked independently on manufacturer and institutional schedules.',
  },
  {
    icon: Users,
    title: 'AAOS, AOSSM, and orthopedic surgery professional involvement',
    desc: '"AAOS Annual Meeting — february/march." "AOSSM Annual Meeting — july." "NASS Annual Meeting — october." "ORS Annual Meeting — february." "Arthroplasty Society annual education." "Spine surgery update courses." "Robotic orthopedic surgery simulation training." All orthopedic surgery professional development on calendar. AAOS Annual Meeting CME tagged by ABOS MOC applicability.',
  },
]

const ORTHO_WORKFLOW = [
  { time: 'Annual planning', action: 'ABOS MOC continuous CME pace, ABOS subspecialty certificate CE (if applicable), state medical license biennial CE cycle, DEA 3-year renewal, robotic joint replacement credentialing institutional renewal, implant training certification renewal dates, AAOS Annual Meeting, and AAOS membership all loaded in January. ABOS primary, subspecialty, and state CE paces tracked independently.' },
  { time: 'CME completion', action: '"AAOS-approved — total hip arthroplasty in patients with prior hip arthroscopy: technique modifications and outcomes, 3 CME, ABOS applicable." Tagged by applicable board. ABOS primary counter updates. If subspecialty certificate also applies, subspecialty counter updates. State license CE counter updates if state accepts orthopaedic CME. Each tracked independently.' },
  { time: 'Robotic credentialing', action: '"Mako robotic joint replacement credentialing renewal — institutional peer review, case minimum review, Q1." Robotic credentialing tracked on institutional renewal cycle independent of ABOS MOC. Stryker Mako, Zimmer Biomet ROSA, and Smith+Nephew Navio each have different training components — multiple robotic systems tracked on separate institutional schedules.' },
  { time: 'Implant training', action: '"DePuy Synthes ATTUNE revision system training — mandatory before first case." "Stryker Triathlon PS implant training — certification current." Manufacturer implant training certifications tracked individually. New implant systems require proctored training before independent use. Certification lapse means the specific implant system cannot be used. Each implant system tracked on manufacturer renewal schedule.' },
  { time: 'Renewal audit', action: 'Analytics: ABOS primary MOC CME on pace? Subspecialty CE adequate? State license CE complete? DEA valid? Robotic credentialing current? Implant training certifications active? AAOS membership active? Complete orthopedic surgery credential audit 90 days before earliest renewal. ABOS attestation and institutional credentialing documentation maintained separately.' },
]

export default function ForOrthopedicSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Orthopedic Surgeons"
        title={
          <>
            ABOS MOC and robotic credentialing maintained.
            <br />
            <em className="not-italic text-gold">Implant certifications and DEA never lapsed.</em>
          </>
        }
        lede="Orthopedic surgeons manage ABOS board MOC with continuous orthopaedic CME requirements, ABOS subspecialty certificate MOC on independent cycles, institutional robotic joint replacement credentialing on annual peer review, manufacturer-specific implant training certifications that lapse if not tracked, DEA 3-year registration, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full orthopedic surgery credential calendar in one view."
        crumbs={[{ label: 'For Orthopedic Surgeons' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How orthopedic surgeons use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for orthopedic surgery credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Orthopedic surgery credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across board, institutional, and manufacturer cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {ORTHO_WORKFLOW.map((step, i) => (
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
                &ldquo;I have ABOS primary certificate, a sports medicine subspecialty certificate, three robotic platforms at two different hospitals, and implant training certifications from four manufacturers. Each has a different renewal cycle. The robotic credentialing dates are set by the hospitals — not by a board — so there&apos;s no central notification system. One hospital renews credentialing in March, the other in September. I had a Mako certification lapse because the hospital changed the renewal date and I didn&apos;t update my tracking. Momenties is the only place where all of it lives together.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">C</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Craig A., MD, FAAOS</div>
                  <div className="text-xs text-muted-foreground">Orthopedic surgeon, sports medicine and arthroplasty, dual-hospital practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All orthopedic surgery credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABOS primary certificate MOC CME — continuous',
                'ABOS subspecialty certificates — independent MOC',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Robotic joint replacement credentialing — institutional annual',
                'Manufacturer implant training certifications — per system',
                'AAOS membership renewal — annual',
                'AAOS Annual Meeting CME planning by ABOS applicability',
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
        title="ABOS MOC and robotic credentialing maintained."
        subtitle="CME tracking by board and subspecialty, implant certification calendar, robotic credentialing, and orthopedic surgery professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
