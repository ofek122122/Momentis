import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Clock, Zap, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Real Estate Investors — Deal pipeline, inspections, and closing deadlines',
  description:
    'Real estate investors manage acquisition timelines, inspection windows, closing deadlines, and contractor meetings across multiple properties simultaneously. Momenties templates every deal workflow and tracks time per property.',
  alternates: { canonical: '/for/real-estate-investors' },
  openGraph: {
    title: 'Momenties for Real Estate Investors',
    description: 'Deal pipeline management and closing deadline tracking for real estate investors.',
    url: '/for/real-estate-investors',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Zap,
    title: 'Deal milestone templates',
    desc: 'Acquisition template: offer, acceptance, inspection period, contingency removal, loan approval, closing. Apply to any property. All milestones on calendar in seconds. Deal stages visible from day one.',
  },
  {
    icon: Clock,
    title: 'Contingency and closing deadline tracking',
    desc: '"Inspection contingency expires march 15." "Loan approval deadline march 22." "Closing date april 1." Every contract deadline on calendar the moment the offer is accepted. Nothing expires silently.',
  },
  {
    icon: Users,
    title: 'Contractor and vendor scheduling',
    desc: '"Inspection thursday 9am, 123 Oak St." "Contractor walkthrough friday 2pm." "Appraiser monday 10am." Voice-added immediately. All property-related meetings tracked by address.',
  },
  {
    icon: BarChart3,
    title: 'Time per property analytics',
    desc: 'Tag every call, visit, and meeting by property. Analytics shows hours invested per deal. Compare time allocation across active acquisitions. Know which properties are consuming disproportionate bandwidth.',
  },
]

const INVESTOR_WORKFLOW = [
  { time: 'Offer accepted', action: 'Apply acquisition template. Inspection, contingency removal, loan approval, and closing all on calendar. Milestones visible for the entire deal.' },
  { time: 'Inspection', action: '"Inspection thursday 9am, 123 Oak St, John Smith inspector." Voice-added immediately after booking. Tagged to property.' },
  { time: 'Due diligence', action: 'Analytics: how many hours on this deal so far? Is the time investment proportional to the deal size? Early signal on whether to proceed.' },
  { time: 'Contingency dates', action: 'Daily Brief shows approaching contingency deadlines for 14 days prior. No expired options. No missed removal windows.' },
  { time: 'Closing', action: 'Closing day on calendar with prep blocks: final walkthrough, wire transfer window, signing appointment. Nothing rushed the morning of close.' },
]

export default function ForRealEstateInvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Real Estate Investors"
        title={
          <>
            Every deal milestone visible.
            <br />
            <em className="not-italic text-gold">No contingency missed.</em>
          </>
        }
        lede="Real estate investors manage multiple acquisitions simultaneously — each with inspection windows, contingency deadlines, loan timelines, and closing dates. Momenties templates every deal workflow, tracks time per property, and keeps every contract deadline visible before it expires."
        crumbs={[{ label: 'For Real Estate Investors' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/calendar-templates"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Deal templates
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How real estate investors use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for acquisition management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Deal lifecycle</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From offer to close with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {INVESTOR_WORKFLOW.map((step, i) => (
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
                &ldquo;Managing 4 acquisitions at once, the contingency dates were the thing I was most afraid of missing. Now I apply the deal template the moment an offer is accepted and every deadline is on my calendar automatically. The Daily Brief shows me what\'s coming every morning.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">B</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Brandon K.</div>
                  <div className="text-xs text-muted-foreground">Real estate investor, 12 units, 4 active acquisitions</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Every deal milestone tracked. Every deadline visible."
        subtitle="Acquisition templates, contingency deadline tracking, and deal time analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Deal templates', href: '/calendar-templates' }}
      />
    </>
  )
}
