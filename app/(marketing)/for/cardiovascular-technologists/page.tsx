import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Cardiovascular Technologists — RCIS/RCES CE renewal, CVT credential management',
  description:
    'Cardiovascular technologists manage RCIS invasive and RCES echocardiography CCI certifications on independent cycles, state licensure CE where applicable, annual cardiac catheterization lab competency, BLS 2-year renewal, annual radiation safety CE, ACLS renewal, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full cardiovascular technologist credential calendar.',
  alternates: { canonical: '/for/cardiovascular-technologists' },
  openGraph: {
    title: 'Momenties for Cardiovascular Technologists',
    description: 'RCIS/RCES CE renewal, cardiovascular technologist credential management.',
    url: '/for/cardiovascular-technologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for RCIS, RCES, and cardiovascular technology certifications',
    desc: 'Cardiovascular Credentialing International (CCI) offers multiple cardiovascular certifications — Registered Cardiovascular Invasive Specialist (RCIS) and Registered Cardiac Electrophysiology Specialist (RCES) among them — each with independent CE requirements and renewal cycles. CCI RCIS and RCES are separate certifications with separate CE documentation. ARRT RT(R) or other imaging credentials held by cardiovascular technologists run on independent cycles. Each certification tracked on its own CE counter.',
  },
  {
    icon: Clock,
    title: 'Cardiovascular technologist multi-credential renewal calendar',
    desc: '"RCIS — CCI, 30 CE/2 years." "RCES — CCI, 30 CE/2 years (if applicable)." "State licensure CE — where required." "BLS — 2-year renewal." "ACLS — 2-year renewal." "Annual cardiac catheterization lab competency — institutional." "Annual radiation safety CE — fluoroscopy-guided procedures." "SICP or ACVP membership — annual." All cardiovascular technology credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Radiation safety and cath lab competency analytics',
    desc: 'Cardiovascular technologists performing fluoroscopy-guided cardiac catheterization procedures require annual radiation safety CE and documented competency — separate from CCI certification CE. Annual institutional cath lab competency covering hemodynamic monitoring, contrast administration, and emergency protocols tracked as a separate requirement. ACLS required for cath lab staff responding to emergent situations — biennial renewal on an independent cycle from RCIS. Each tracked separately.',
  },
  {
    icon: Users,
    title: 'SICP, ACVP, and cardiovascular technology professional involvement',
    desc: '"SICP Annual Meeting." "Heart Rhythm Society Annual Meeting — HRS, may." "ACC Annual Scientific Session — march." "SCAI Annual Meeting — may." "CCI annual CE renewal webinars." "Structural heart disease and TAVR assisting updates." "EP ablation technology updates — cryo, RF, pulsed field." "WATCHMAN/LAAC procedure competency CE." All cardiovascular technology professional development on calendar. SICP and HRS conference CE tagged by CCI applicability.',
  },
]

const CVT_WORKFLOW = [
  { time: 'Annual planning', action: 'RCIS 2-year 30-CE pace (annualized to 15 CE/year), RCES 2-year cycle (if applicable), ACLS 2-year cycle, BLS 2-year cycle, annual radiation safety CE, annual cath lab competency, HRS Annual Meeting, and SICP membership all loaded in January. RCIS and RCES CE counters tracked independently — CE that qualifies for one may not qualify for both.' },
  { time: 'CE completion', action: '"CCI-approved — transcatheter aortic valve replacement: patient selection, pre-procedure imaging interpretation, procedural assist techniques, and post-procedure monitoring, 3 CE, RCIS applicable." Tagged by applicable CCI certification. RCIS counter updates. If RCES also applicable, RCES counter updates separately. Institutional cath lab CE logged to competency documentation when eligible.' },
  { time: 'Radiation safety', action: '"Annual radiation safety CE — fluoroscopy dose optimization, radiation protection, and ALARA principles for cardiovascular interventional procedures, 2 CE, Q1." Annual radiation safety CE placed as an institutional requirement under CATH lab accreditation standards. CMS and state radiation requirements for fluoroscopy operators tracked separately from CCI certification CE. Annual placement with Q1 completion target.' },
  { time: 'Cath lab competency', action: '"Annual cath lab competency — hemodynamic monitoring, temporary pacemaker management, contrast reaction protocol, and emergency equipment, Q2." Annual institutional cath lab competency placed as a separate requirement from CCI certification. Cath lab competency assessment covers procedural skills and emergency protocols — not CE-based but clinical competency validated annually. Placed as Q2 institutional milestone.' },
  { time: 'Renewal audit', action: 'Analytics: RCIS CE on pace (toward 30/2yr)? RCES CE adequate (if applicable)? ACLS current? BLS current? Annual radiation safety CE documented? Annual cath lab competency validated? SICP membership active? Complete cardiovascular technologist credential audit 90 days before earliest CCI renewal. CCI, state, and institutional documentation maintained separately.' },
]

export default function ForCardiovascularTechnologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Cardiovascular Technologists"
        title={
          <>
            RCIS and RCES certifications maintained.
            <br />
            <em className="not-italic text-gold">Radiation safety and cath lab competency never lapsed.</em>
          </>
        }
        lede="Cardiovascular technologists manage CCI RCIS and RCES certifications on independent renewal cycles, ACLS and BLS biennial renewals on independent start dates, annual fluoroscopy radiation safety CE as a separate institutional requirement, annual cardiac catheterization lab competency assessments, state licensure CE where applicable, and professional development simultaneously. Momenties tracks CE by cardiovascular credential, surfaces renewal deadlines 90 days early, and manages the full cardiovascular technologist credential calendar in one view."
        crumbs={[{ label: 'For Cardiovascular Technologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How cardiovascular technologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for cardiovascular technologist credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Cardiovascular technologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every CCI cycle, radiation safety requirement, and cath lab competency.</h2>
          </Reveal>
          <div className="space-y-3">
            {CVT_WORKFLOW.map((step, i) => (
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
                &ldquo;I have RCIS and RCES because I work in both cath lab and EP lab. They&apos;re separate CCI certifications with separate CE requirements — CE that qualifies for RCIS doesn&apos;t automatically qualify for RCES. My ACLS and BLS renewals are both 2-year cycles but they started at different times so they don&apos;t renew in the same year. We also have a mandatory annual radiation safety CE requirement for cath lab staff and a separate annual competency the lab director signs off on. I had credential information in four different places. Momenties is the only tool I&apos;ve found that lets me track two CCI certifications as genuinely independent counters.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Andre P., CVT, RCIS, RCES</div>
                  <div className="text-xs text-muted-foreground">Cardiovascular technologist, interventional cardiology and electrophysiology lab</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All cardiovascular technologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CCI RCIS certification CE — 30 hours/2 years',
                'CCI RCES certification CE — 30 hours/2 years',
                'ACLS certification — 2-year renewal',
                'BLS certification — 2-year renewal',
                'Annual radiation safety CE — fluoroscopy operator requirement',
                'Annual cardiac catheterization lab competency assessment',
                'State cardiovascular technology licensure CE — where required',
                'SICP and HRS conference CE planning by CCI applicability',
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
        title="RCIS and RCES certifications maintained."
        subtitle="Independent CE tracking for multiple CCI certifications, radiation safety calendar, cath lab competency, and cardiovascular professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
