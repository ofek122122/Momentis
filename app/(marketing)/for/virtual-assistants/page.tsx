import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Zap, Clock, BarChart3, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Virtual Assistants — Multi-client scheduling and calendar management at scale',
  description:
    'Virtual assistants manage calendars for multiple executives simultaneously. Momenties makes scheduling fast enough to stay ahead of every inbox, tracks time per client, and coordinates complex multi-party meetings in seconds.',
  alternates: { canonical: '/for/virtual-assistants' },
  openGraph: {
    title: 'Momenties for Virtual Assistants',
    description: 'Multi-client calendar management at VA speed.',
    url: '/for/virtual-assistants',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Zap,
    title: 'Schedule in seconds, not minutes',
    desc: '"Board meeting tuesday 10am 2 hours, David and Sarah." "Client dinner thursday 7pm, confirm venue." Voice-add from any device while processing emails. On calendar before the next message.',
  },
  {
    icon: Users,
    title: 'Multi-executive coordination',
    desc: 'Overlay calendars for all executives you support. Find meeting windows across 3 busy schedules without email chains. See conflicts before they happen. Reschedule proactively.',
  },
  {
    icon: BarChart3,
    title: 'Time per client for billing',
    desc: 'Tag all work by client. Monthly analytics shows hours per executive you support. Invoice accurately. Know which clients are most demanding before the next contract renewal.',
  },
  {
    icon: Clock,
    title: 'Travel and logistics blocking',
    desc: 'Flight, hotel, ground transport, check-in, airport arrival — all blocked as calendar events. The executive\'s travel days are fully structured. Nothing arrives as a surprise.',
  },
]

const VA_WORKFLOW = [
  { time: 'Morning', action: 'Daily Brief shows all clients\' key events for the day. Conflicts identified. Prep notes added to calendar events. Executives start informed.' },
  { time: 'Inbox', action: '"Schedule meeting with the Chicago team next week" → check overlay → find window → "Chicago team call tuesday 2pm CT, 45 mins." Done before the email reply.' },
  { time: 'Travel', action: '"Flight NY to LA wednesday, depart 7am, arrive 10am PT." "Hotel check-in wednesday noon." "Dinner with client wednesday 7pm LA time." All blocked. Executive sees it all.' },
  { time: 'Rescheduling', action: 'Conflict identified? Check overlay for alternative windows. Voice-add reschedule: "Move board meeting from tuesday to thursday 10am." Two events updated in 20 seconds.' },
  { time: 'Monthly', action: 'Hours per client reviewed. Client A: 42 hours. Client B: 18 hours. Time matches contract allocations. Invoice with data, not estimation.' },
]

export default function ForVirtualAssistantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Virtual Assistants"
        title={
          <>
            Faster scheduling.
            <br />
            <em className="not-italic text-gold">Multiple clients, one view.</em>
          </>
        }
        lede="Virtual assistants manage complex calendars for multiple executives simultaneously — coordinating across time zones, rescheduling conflicts, and booking travel without losing context. Momenties makes every scheduling action fast enough to keep pace with the most demanding inboxes."
        crumbs={[{ label: 'For Virtual Assistants' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/shared-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Team scheduling
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Team plan from $9/person/month</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How virtual assistants use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for VA calendar management.</h2>
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

      {/* VA workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">VA daily flow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A VA's day with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {VA_WORKFLOW.map((step, i) => (
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

      {/* What VAs manage */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What VAs schedule with Momenties.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Executive meetings and board sessions',
                'Travel itineraries with logistics blocks',
                'Multi-timezone recurring calls',
                'Client dinners and networking events',
                'Investor meetings and demos',
                'Personal appointments and family events',
                'Prep and debrief blocks before/after meetings',
                'Deadline countdowns for deliverables',
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

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I support three executives across two time zones. Momenties lets me check all three calendars at once, find meeting times instantly, and voice-add events while I'm processing their emails. The speed difference is not small.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Amara N.</div>
                  <div className="text-xs text-muted-foreground">Executive virtual assistant, 3 clients</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Support more executives with less friction."
        subtitle="Multi-client scheduling, voice input, team overlay, and time analytics. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Team scheduling', href: '/shared-calendar' }}
      />
    </>
  )
}
