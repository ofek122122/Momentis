import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Tax Preparers — IRS deadlines, EA or CPA CE, and client season calendar',
  description:
    'Tax preparers manage IRS filing deadlines, Enrolled Agent or CPA continuing education requirements, PTIN renewal, client appointments, and extension calendars simultaneously. Momenties tracks CE credits, surfaces renewal deadlines early, and manages the tax season calendar.',
  alternates: { canonical: '/for/tax-preparers' },
  openGraph: {
    title: 'Momenties for Tax Preparers',
    description: 'IRS deadlines, CE credits, and tax season calendar management for tax preparers.',
    url: '/for/tax-preparers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'EA or CPA continuing education tracking',
    desc: 'Enrolled Agents: tag every IRS-approved CE by category — federal tax law, ethics, and other topics. 72 hours per 3-year cycle. 6 ethics hours required. CPAs: tag CE by NASBA field of study per state requirement. Both certification types tracked on separate cycles.',
  },
  {
    icon: Clock,
    title: 'IRS filing deadline calendar',
    desc: '"Individual returns — april 15." "Corporate returns — march 15." "S-corp returns — march 15." "Extension deadline — october 15." "Q1 estimated — april 15." "FBAR deadline — april 15." Every IRS and state filing deadline on calendar. Extension tracker per client.',
  },
  {
    icon: BarChart3,
    title: 'Tax season client time analytics',
    desc: 'Tag every client appointment, return preparation block, and review session. Analytics shows hours per client during busy season. Which clients take the most time relative to fee? Data for capacity planning, pricing, and which clients to onboard next year.',
  },
  {
    icon: Users,
    title: 'PTIN and credential renewal calendar',
    desc: '"PTIN renewal — december 31." "EA renewal — annual, by SSN last name cycle." "CPA license renewal — state-specific date." "EFIN annual attestation — december." All preparer credentials on calendar with 90-day advance alerts. No lapsed credentials during busy season.',
  },
]

const TAX_WORKFLOW = [
  { time: 'Off-season', action: 'CE credits completed during the quiet months — not scrambled for in November. PTIN renewed in October. EA or CPA license renewal dates confirmed. Client list reviewed: who to retain, who to offboard. Appointment blocks capacity-planned for busy season.' },
  { time: 'Tax season', action: '"Client appointment — Johnson family return, tuesday 2pm." "Preparation block — Chen LLC, wednesday 9-11am." "Extension decision — martin estate, thursday 3pm." Every client interaction tagged. Hours per client tracked automatically through the season.' },
  { time: 'Extension season', action: '"Extension filed — 47 clients, april 15." "Extended returns deadline — october 15." Extended client list tracked. Preparation timeline backwards-planned from October. No extension client forgotten or filed late.' },
  { time: 'CE completion', action: '"IRS-approved ethics course — EA requirement, tuesday 7pm, 2 hours, ethics CE." Tagged and added. Category counter updates. Annual ethics requirement tracked separately. 3-year cycle progress visible at any point.' },
  { time: 'Credential renewal', action: 'Daily Brief surfaces PTIN renewal 90 days before December 31. CE documentation confirmed: 72 hours logged, 6 ethics included. EA renewal submitted before the December rush — not competing with 650,000 other EAs in the final week.' },
]

export default function ForTaxPreparersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Tax Preparers"
        title={
          <>
            Tax season managed.
            <br />
            <em className="not-italic text-gold">Every credential current.</em>
          </>
        }
        lede="Tax preparers manage IRS filing deadlines, EA or CPA continuing education requirements, PTIN renewal, client appointments, and extension calendars simultaneously. Momenties tracks CE credits by category, surfaces credential renewal deadlines 90 days early, and manages the full tax season calendar — so busy season is managed, not survived."
        crumbs={[{ label: 'For Tax Preparers' }]}
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
            Client analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client tax data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How tax preparers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for tax preparation practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Tax calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Off-season prep to extension deadline with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {TAX_WORKFLOW.map((step, i) => (
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
                &ldquo;I prepared 312 returns last season and I track every client appointment, every extension, and every IRS deadline on Momenties. My PTIN renewal was in October, my EA CE was done by November, and I hit the April 15 deadline on every single client. I used to think tax season was inherently chaotic. Now I know it&apos;s only chaotic if your calendar is.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">F</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Frank D., EA</div>
                  <div className="text-xs text-muted-foreground">Enrolled Agent, individual and small business tax</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Deadlines tracked</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every tax preparer deadline on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'EA CE credits — 72 hrs per 3-year cycle, 6 ethics',
                'PTIN renewal — annual, december 31',
                'EA renewal — triennial cycle by SSN',
                'IRS filing deadlines — individual and business',
                'Extension deadlines — october 15',
                'Quarterly estimated payment dates',
                'State filing deadlines',
                'EFIN annual attestation',
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
        title="Tax season managed. CE current. Every client filed on time."
        subtitle="EA/CPA CE tracking, IRS deadline calendar, and client time analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Client analytics', href: '/features/analytics' }}
      />
    </>
  )
}
