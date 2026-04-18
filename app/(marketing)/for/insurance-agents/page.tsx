import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, BarChart3, Shield, Clock, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Insurance Agents — Client renewals, prospecting, and CE tracking',
  description:
    'Insurance agents manage client policy renewals, prospecting calls, CE requirements, and license deadlines simultaneously. Momenties tracks renewal pipelines, CE hours by line of authority, and time per client.',
  alternates: { canonical: '/for/insurance-agents' },
  openGraph: {
    title: 'Momenties for Insurance Agents',
    description: 'Policy renewals, prospecting analytics, and CE tracking for insurance agents.',
    url: '/for/insurance-agents',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Users,
    title: 'Renewal pipeline on calendar',
    desc: 'Every client renewal date on calendar 90 days in advance. "Auto renewal - Martinez, november 15." "Life policy review - Chen family, Q4." Renewal conversations happen proactively, not reactively.',
  },
  {
    icon: BarChart3,
    title: 'Time per client analytics',
    desc: 'Tag every call, meeting, and follow-up by client. Analytics shows hours per client per quarter. Compare to premium volume. Identify which relationships deserve more attention.',
  },
  {
    icon: Shield,
    title: 'CE hours by line of authority',
    desc: 'Tag CE by line: life, health, property, casualty, ethics. Analytics shows hours per category against state renewal requirements. License renewal without the year-end scramble.',
  },
  {
    icon: Clock,
    title: 'License and appointment renewal deadlines',
    desc: '"Insurance license renewal june 30." "Carrier appointment renewal november." "E&O policy renewal october." All compliance deadlines on calendar. Visible 60 days before they\'re urgent.',
  },
]

const AGENT_WORKFLOW = [
  { time: 'Monday AM', action: 'Weekly planning: check upcoming renewals this month, block prospecting calls for the week, review analytics from last week.' },
  { time: 'Renewals', action: '"Auto renewal call Garcia, thursday 10am 30 mins." Voice-added 90 days before renewal date. Client gets a proactive call, not a lapse notice.' },
  { time: 'Prospecting', action: '"Prospecting block tuesday 9-11am." Dedicated time for outbound. Not scattered throughout the day. Tagged separately from client service.' },
  { time: 'CE course', action: '"Life insurance CE, webinar wednesday 2pm, 3 hours, life line." Tagged, added, CE counter updates.' },
  { time: 'Monthly', action: 'Analytics: prospecting hours vs. service hours. Renewal conversion rate visible. Which clients are consuming the most time relative to premium?' },
]

export default function ForInsuranceAgentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Insurance Agents"
        title={
          <>
            Renewals proactive.
            <br />
            <em className="not-italic text-gold">Every license current.</em>
          </>
        }
        lede="Insurance agents manage client renewal pipelines, prospecting activity, CE requirements, and carrier appointments simultaneously. Momenties puts every renewal on calendar 90 days out, tracks CE by line of authority, and shows where time goes across clients and business development."
        crumbs={[{ label: 'For Insurance Agents' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How insurance agents use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for insurance practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Agent practice rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A productive agent's week with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {AGENT_WORKFLOW.map((step, i) => (
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
                &ldquo;I was reactive about renewals — clients would call me to renew instead of me calling them first. I put every renewal date on my calendar 90 days out. Now I call before anyone else gets to them. Retention went up 18% in one year.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">G</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Greg H.</div>
                  <div className="text-xs text-muted-foreground">Independent insurance agent, life & P&C, 200+ clients</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Renewals proactive. CE current. Prospecting tracked."
        subtitle="Renewal pipeline, CE line-of-authority analytics, and client time tracking. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Client analytics', href: '/features/analytics' }}
      />
    </>
  )
}
