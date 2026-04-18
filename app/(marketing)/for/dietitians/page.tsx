import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Registered Dietitians — CDR CPEUs, client scheduling, and renewal tracking',
  description:
    'Registered dietitians manage CDR CPEUs, state licensure CE, client consultations, and professional development. Momenties tracks CPEUs by learning need code, keeps renewal deadlines visible, and templates client session workflows.',
  alternates: { canonical: '/for/dietitians' },
  openGraph: {
    title: 'Momenties for Registered Dietitians',
    description: 'CDR CPEU tracking and RD practice calendar management.',
    url: '/for/dietitians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CDR CPEUs by learning need code',
    desc: 'Tag every CE event by CDR learning need code. Analytics shows CPEUs accumulated by code against your 5-year renewal requirement. PDR renewal without the last-year scramble.',
  },
  {
    icon: Clock,
    title: 'CDR and state license renewals',
    desc: '"CDR PDR renewal december 31." "State RD license renewal june." "RD exam eligibility deadline." All compliance and certification deadlines on calendar, visible 60 days out.',
  },
  {
    icon: Users,
    title: 'Client consultation scheduling',
    desc: '"Initial consultation Maya thursday 1pm 60 mins." "Follow-up call tuesday 30 mins." Voice-added between clients. On calendar before the next consultation begins. No scheduling gap.',
  },
  {
    icon: BarChart3,
    title: 'Professional development analytics',
    desc: 'Track FNCE attendance, webinars, and research time separately from client hours. See CPEU accumulation rate over the renewal cycle. Know if you\'re on pace without a spreadsheet.',
  },
]

const RD_WORKFLOW = [
  { time: 'Year 1 of PDR', action: 'CDR plan: identify professional development goals, add FNCE and regional events to calendar. CPEU tracking starts from day 1 of the cycle.' },
  { time: 'Monthly', action: 'CE webinar or journal club (recurring monthly). Client review meetings. All templated and set for the quarter.' },
  { time: 'CE event', action: '"Pediatric nutrition webinar, wednesday april 9, 2 CPEUs, learning need code 2090." Tagged and added. CPEU counter updates.' },
  { time: 'Year 3 check', action: 'Analytics: 28/75 CPEUs accumulated across learning need codes. Pace check: on track for 2 remaining years. Identify codes that need more focus.' },
  { time: 'Renewal year', action: 'PDR renewal visible in Daily Brief for 60 days prior. CPEU documentation and professional development plan submission deadline blocked.' },
]

export default function ForDietitiansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Registered Dietitians"
        title={
          <>
            CPEUs tracked.
            <br />
            <em className="not-italic text-gold">PDR renewed on time.</em>
          </>
        }
        lede="Registered dietitians manage CDR CPEU requirements across learning need codes, state licensure CE, client consultations, and professional development simultaneously. Momenties tracks CPEUs by code, surfaces renewal deadlines early, and keeps client and professional meetings structured."
        crumbs={[{ label: 'For Registered Dietitians' }]}
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
            CPEU analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How dietitians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for RD practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Professional calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CPEU and licensing through the renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {RD_WORKFLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-28 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
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
                &ldquo;I'm 3 years into my PDR cycle and I actually know exactly how many CPEUs I have in each learning need code. That's never been true before. The analytics are the part that made the difference.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Rachel S., RD, LD</div>
                  <div className="text-xs text-muted-foreground">Clinical dietitian, outpatient nutrition counseling</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="CPEUs tracked. PDR maintained. Clients scheduled."
        subtitle="CE learning need code analytics, renewal reminders, and client meeting templates. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CPEU analytics', href: '/features/analytics' }}
      />
    </>
  )
}
