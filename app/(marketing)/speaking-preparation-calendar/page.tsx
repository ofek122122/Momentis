import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Speaking Preparation Calendar — How to schedule talk preparation so delivery is confident, not reactive',
  description:
    'A speaking preparation calendar starts talk preparation 4 weeks before delivery, places a full dry run 1 week before, and builds post-talk follow-up within 48 hours. Most conference talk failures happen in the preparation window — insufficient rehearsal time, no dry run with feedback, and no plan for the conversations that happen after the talk.',
  alternates: { canonical: '/speaking-preparation-calendar' },
  openGraph: {
    title: 'Speaking Preparation Calendar — Momenties',
    description: 'Schedule talk preparation so delivery is confident, not reactive.',
    url: '/speaking-preparation-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Preparation timeline started 4 weeks before talk delivery',
    desc: '"Talk preparation start — T-4 weeks from delivery." Preparation started 4 weeks before delivery — not the week before. 4-week timeline: week 1 outline, week 2 draft, week 3 rehearsal, week 4 polish and dry run. Talks prepared in the final 7 days compress outline, drafting, and rehearsal into a single week — each stage receives less time than it requires. 4-week preparation produces a materially different talk than 7-day preparation.',
  },
  {
    icon: Clock,
    title: 'Full dress rehearsal placed exactly 1 week before delivery',
    desc: '"Full dry run — T-7 days from delivery." Full dry run placed 1 week before delivery — not the day before. T-7 dry run: full talk delivered end-to-end with feedback from a colleague or practice audience. Feedback from T-7 dry run can be incorporated and rehearsed. Feedback from T-1 day dry run can be noted but not absorbed. T-7 dry run produces a talk that has been practiced after improvement. T-1 day dry run produces a talk that has been noted as imperfect.',
  },
  {
    icon: BarChart3,
    title: 'Post-talk follow-up placed before travel to the event',
    desc: '"Post-talk follow-up block — within 48 hours of delivery." Post-talk follow-up placed before travel — not scheduled when you land. Post-talk follow-up window: the 48 hours after delivery when the audience remembers specific conversations and introductions made naturally. Slide deck shared, follow-up messages to meaningful connections, and LinkedIn post with key points. Post-talk sequence placed before travel converts the momentum into documented follow-up.',
  },
  {
    icon: Shield,
    title: 'Annual speaking calendar built in January with submission deadlines',
    desc: '"Annual speaking calendar — submission deadlines placed in January." Conference CFP (Call for Proposals) submission deadlines placed in January for the full year. CFP deadlines are typically 3-6 months before the conference — not available on the conference website during the conference. Annual speaking calendar placed in January ensures CFP windows are caught before they close. Speakers who plan conference appearances reactively submit to conferences they discover after CFP closes.',
  },
]

const SPEAK_STEPS = [
  {
    step: 'Build the annual speaking calendar in January with submission deadlines',
    detail: '"January: speaking calendar for full year — CFP deadlines, conference dates, submission windows." Annual speaking calendar placed in January: target conferences for the year, CFP submission deadlines (typically March-April for fall conferences), travel dates, and post-talk follow-up windows. Speakers who plan in January submit more talks than those who discover CFP windows when the conference is announced — CFP closes months before conference marketing peaks.',
  },
  {
    step: 'Start preparation 4 weeks before delivery with a structured weekly plan',
    detail: '"T-4 weeks: preparation start — outline draft." "T-3 weeks: full draft and slide draft." "T-2 weeks: rehearsal begins, peer feedback session." "T-1 week: dry run." "T-3 days: final polish." 4-week preparation plan placed at talk acceptance — not when preparation mood strikes. Weekly milestone placed at the start of each week in the preparation window. Preparation that begins reactively when anxiety surfaces typically begins at T-10 days.',
  },
  {
    step: 'Place the outline review milestone at T-4 weeks with a peer',
    detail: '"Outline review — T-4 weeks, with colleague who attended the event before." Outline review placed with a specific person — not "review the outline before drafting." T-4 week outline review catches structural problems before they become presentation problems. Structural changes made at T-4 weeks are free. Structural changes made at T-7 days require reworking content, examples, and transitions under time pressure.',
  },
  {
    step: 'Place the T-7 day full dress rehearsal with feedback',
    detail: '"Full dry run — T-7 days, delivered end-to-end, recorded, feedback from colleague." Full dry run placed with a specific person and a recording. Recording review surfaces verbal fillers, pacing issues, and transition problems that self-assessment misses. Feedback from a colleague at T-7 days produces specific revisions. Same feedback at T-2 days produces awareness of problems without time to fix them.',
  },
  {
    step: 'Plan the conference networking strategy before arrival',
    detail: '"Pre-conference outreach — T-2 weeks: connect with 5 speakers and attendees before the conference." Pre-conference outreach placed 2 weeks before the event. LinkedIn connections sent with context about shared panel or session. Speakers who arrive at a conference knowing 5 names have a different conference experience than speakers who arrive cold. Pre-conference outreach placed as a calendar milestone 2 weeks before travel.',
  },
  {
    step: 'Place the post-talk follow-up sequence before departure',
    detail: '"Post-talk +48 hours: slide deck shared, 3 follow-up messages sent, LinkedIn post published." Post-talk sequence placed before travel — not scheduled when you return. Slide deck shared with audience creates a touchpoint. Follow-up messages to meaningful conversations from the session have highest response rates in the 48-hour window. LinkedIn post with key points extends the talk\'s reach beyond the room.',
  },
]

const SPEAK_FAILURES = [
  { failure: 'Talk preparation starts the week before delivery', consequence: 'Talks prepared in the final 7 days compress outline development, content drafting, slide production, and rehearsal into a single week — each receiving a fraction of the time required for quality. A 4-week preparation window allows each phase to complete before the next begins. The difference between a talk prepared over 4 weeks and one prepared over 7 days is structural clarity, not just rehearsal time.' },
  { failure: 'No dry run before delivery', consequence: 'Talks delivered without a full dry run before an audience are delivered in public for the first time at the conference. Problems discovered during delivery — transitions that don\'t work, examples that run long, Q&A that wasn\'t anticipated — could have been identified and addressed at T-7 days. A T-7 day dry run produces a version of the talk that has been practiced after its first public test, not during its first public delivery.' },
  { failure: 'Post-talk follow-up scheduled after return rather than before travel', consequence: 'Post-talk follow-up intended for "when I land" competes with re-entry email volume and meeting backlog. The 48-hour window after a talk — when audience members remember the specific conversation, the slide that resonated, or the introduction they promised — is the highest-response window. Post-talk sequence placed before travel as a calendar block ensures the window is used, not lost to re-entry.' },
  { failure: 'CFP submissions discovered after submission windows close', consequence: 'Conference CFP windows close 3-6 months before the conference date — long before conference marketing reaches peak visibility. Speakers who discover a conference through its promotional materials are typically reading about an event whose CFP closed 3-4 months earlier. Annual speaking calendar built in January with CFP deadlines catches submission windows that are open at the time of planning — not visible at the time of conference marketing.' },
]

export default function SpeakingPreparationCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Speaking Preparation Calendar"
        title={
          <>
            Talk prepared. Dry run done.
            <br />
            <em className="not-italic text-gold">Delivery confident, follow-up captured.</em>
          </>
        }
        lede="Most conference talk failures happen before the room — in the preparation window. A speaking preparation calendar starts preparation 4 weeks before delivery, places a full dry run with feedback 1 week before, schedules pre-conference networking outreach 2 weeks before travel, and places the post-talk follow-up sequence before departure — so every speaking engagement is prepared and leveraged, not just survived."
        crumbs={[{ label: 'Speaking Preparation Calendar' }]}
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties prevents talk preparation failures.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a speaking preparation calendar where preparation produces confident delivery and captured follow-up.</h2>
          </Reveal>
          <div className="space-y-3">
            {SPEAK_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four speaking calendar patterns that produce reactive delivery and lost follow-up.</h2>
          </Reveal>
          <div className="space-y-3">
            {SPEAK_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Speaking analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for speaking preparation discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Preparation start date vs. delivery date (lead time)',
                'Dry run completion rate at T-7 days',
                'Post-talk follow-up completion within 48 hours',
                'Annual CFP submission rate vs. targets',
                'Pre-conference outreach completion at T-2 weeks',
                'Outline review milestone completion at T-4 weeks',
                'Post-talk slide deck share rate',
                'LinkedIn post publication within 48 hours of delivery',
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
        title="Talk prepared. Dry run done."
        subtitle="4-week preparation timeline, T-7 dry run, pre-conference outreach, and post-talk follow-up sequence. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for founders', href: '/for/founders' }}
      />
    </>
  )
}
