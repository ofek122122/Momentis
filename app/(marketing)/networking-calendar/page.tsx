import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Clock, BarChart3, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Networking Calendar — How to schedule professional relationships so they compound over time',
  description:
    'A networking calendar schedules relationship maintenance before you need something — coffee chats weekly, follow-ups within 48 hours, and annual reconnects with dormant contacts. Most professional networks decay in 18 months without contact. A networking calendar prevents relationship decay and builds compound career value.',
  alternates: { canonical: '/networking-calendar' },
  openGraph: {
    title: 'Networking Calendar — Momenties',
    description: 'Schedule professional relationships before you need them.',
    url: '/networking-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Users,
    title: 'Weekly relationship maintenance blocks placed as standing events',
    desc: '"Relationship maintenance — standing, thursday 2pm, 45 minutes." Weekly relationship maintenance block placed as non-negotiable — not scheduled when it seems convenient. Block used for: one coffee outreach email, two follow-ups from recent conversations, one reconnect with a dormant contact. Professionals who schedule relationship maintenance weekly have larger active networks than those who network reactively when they need something.',
  },
  {
    icon: Clock,
    title: 'Follow-up sequences placed within 48 hours of every meaningful interaction',
    desc: '"Follow-up — [name], 24-48 hours after meeting." Follow-up placed immediately after a conference, event, or introduction — not scheduled when recalled. 48-hour follow-up is the window when the interaction is still fresh for the other person. A follow-up email at 48 hours has a different response rate than the same email at 2 weeks. Follow-up sequence placed at event registration, not after the event.',
  },
  {
    icon: BarChart3,
    title: 'Quarterly relationship audit placed at start of each quarter',
    desc: '"Quarterly network audit — who advanced, who went quiet, who needs reconnect." Quarterly audit placed at the start of each quarter. Audit: contacts who changed roles (new opportunities), contacts who went silent (reconnect before they forget you), and relationships that moved from warm to hot. Network audit placed as a standing quarterly event — not scheduled when a job search starts.',
  },
  {
    icon: TrendingUp,
    title: 'Annual conference and industry event calendar built in January',
    desc: '"Annual conference sequence — events placed in January for the full year." Conference calendar placed in January: event registration deadlines, travel blocks, pre-conference outreach to attendees, post-conference follow-up windows. Professionals who place conference follow-up windows before the conference attend differently — they approach conversations knowing a follow-up block exists.',
  },
]

const NET_STEPS = [
  {
    step: 'Build the annual conference and event calendar before January ends',
    detail: '"Q1: industry conference." "Q2: company summit." "Q3: alumni event." "Q4: holiday reconnects." Annual event calendar placed in January with registration deadlines, travel blocks, and pre-conference outreach dates. Professionals who plan conference attendance in January attend 40% more events than those who decide event-by-event, because the decision is made once — not repeated under time pressure.',
  },
  {
    step: 'Place the 48-hour follow-up sequence at event registration',
    detail: '"Follow-up block — 2 days after event, 45 minutes." Follow-up block placed at event registration — not the morning after. 48-hour follow-up placed in advance converts the block from intention to commitment. The follow-up block contains: personalized emails to 3-5 meaningful contacts, LinkedIn connection requests with context, and calendar invites for any committed next steps.',
  },
  {
    step: 'Schedule weekly relationship maintenance as a standing recurring event',
    detail: '"Weekly relationship maintenance — standing, thursday 2pm, 45 minutes." Agenda: one outreach to a contact who can help someone else (giving first), one follow-up from a recent introduction, one reconnect with a dormant contact who has been quiet for 3-6 months. Standing event placed at the start of the year — not scheduled when time allows. Relationship maintenance scheduled reactively is relationship maintenance that doesn\'t happen.',
  },
  {
    step: 'Place the quarterly relationship audit to identify who needs reconnect',
    detail: '"Q1/Q2/Q3/Q4 relationship audit — first week of each quarter, 60 minutes." Audit agenda: who changed roles (reach out with congratulations), who went silent for 90+ days (proactive reconnect), who provided value this quarter (express appreciation), and who you can introduce to someone in your network. Network audit placed as a quarterly event — not triggered by a job search or a favor request.',
  },
  {
    step: 'Build the annual dormant contact reconnect sequence',
    detail: '"Annual reconnect sequence — Q4, dormant contacts from 12-18 months ago." Annual reconnect placed in November-December when professional context is high: year-end reviews, holiday context for outreach, and natural transition periods. Contacts who haven\'t heard from you in 12-18 months are still warm — but 24+ months moves them to cold. Annual reconnect sequence placed as a standing Q4 event prevents the decay.',
  },
  {
    step: 'Schedule the post-job-change relationship leverage window',
    detail: '"New role announcement — outreach within 1 week." New role announcement window placed as a calendar block the week you start a new job. New role is the highest-response-rate outreach window: people congratulate, ask questions, and want to help. Outreach in week 1 of a new role is contextually natural. Same outreach at week 12 is just catching up. Leverage window placed at offer acceptance — not at start date.',
  },
]

const NET_FAILURES = [
  { failure: 'Networking only happens before a job search', consequence: 'Professionals who only network during job searches contact people when they need something — the lowest-quality networking context. Contacts receive transactional outreach without relationship history. Networking calendars prevent this by making relationship maintenance a weekly recurring event — 50 weeks of ambient relationship value before the 2 weeks of job search outreach.' },
  { failure: 'Conference follow-ups scheduled "later" rather than placed in advance', consequence: 'Follow-ups intended for 48 hours after a conference that get scheduled "later" happen at 2-3 weeks — when the other person no longer remembers the specific conversation and the context is gone. The 48-hour window is a real deadline, not a preference. A follow-up block placed before the conference converts intention into commitment.' },
  { failure: 'Dormant contacts left dormant past 18 months', consequence: 'Professional relationships that go without contact for 18+ months require a "re-introduction" — the relationship has effectively reset to acquaintance level. Annual reconnect sequences placed in Q4 maintain warmth before the 18-month threshold. Contacts maintained at annual cadence remain at "warm contact" level; contacts left for 24+ months require cold-start effort.' },
  { failure: 'Relationship maintenance scheduled reactively when convenient', consequence: 'Relationship maintenance that happens "when there\'s time" doesn\'t happen at a consistent cadence — which means it doesn\'t compound. Compounding professional relationships require consistent low-amplitude contact: one meaningful touchpoint per quarter per contact. A standing weekly maintenance block placed as non-negotiable is the mechanism that produces consistent cadence.' },
]

export default function NetworkingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Networking Calendar"
        title={
          <>
            Relationships maintained. Follow-ups sent.
            <br />
            <em className="not-italic text-gold">Network compounds before you need it.</em>
          </>
        }
        lede="Most professional networks decay in 18 months without contact — but the professionals with the strongest networks aren't more extroverted, they're more systematic. A networking calendar places weekly relationship maintenance as a standing event, follow-up blocks within 48 hours of every meaningful interaction, quarterly relationship audits, and annual dormant contact reconnect sequences — so relationships compound over time rather than expiring when you need them most."
        crumbs={[{ label: 'Networking Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/founders"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for founders
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties prevents professional relationship decay.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Six steps</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a networking calendar that compounds professional relationships rather than transacting them.</h2>
          </Reveal>
          <div className="space-y-3">
            {NET_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-6 shrink-0 pt-0.5 text-center">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">{item.step}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Common failures</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four networking calendar patterns that produce relationship decay.</h2>
          </Reveal>
          <div className="space-y-3">
            {NET_FAILURES.map((item, i) => (
              <Reveal key={item.failure} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <h3 className="text-sm font-medium text-foreground mb-1">{item.failure}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.consequence}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Relationship analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for networking discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Weekly relationship maintenance completion rate',
                'Average days between interaction and follow-up',
                'Conference follow-up block completion rate',
                'Quarterly relationship audit completion date',
                'Dormant contact reconnect sequence start date',
                'Annual conference calendar completion in January',
                'New role announcement outreach window used',
                'Active vs. dormant contact ratio by quarter',
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
        title="Relationships maintained. Follow-ups sent."
        subtitle="Weekly maintenance blocks, 48-hour follow-up sequences, quarterly audits, and annual reconnect calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for founders', href: '/for/founders' }}
      />
    </>
  )
}
