import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Board Meeting Calendar — How to structure board meetings so directors govern instead of receive updates',
  description:
    'A board meeting calendar places the consent agenda before the meeting, distributes materials 7 days in advance, separates governance decisions from operational updates, places the executive session at the end of every meeting, and schedules board development as a standing annual event — so board meetings produce governance instead of PowerPoint reviews.',
  alternates: { canonical: '/board-meeting-calendar' },
  openGraph: {
    title: 'Board Meeting Calendar — Momenties',
    description: 'Structure board meetings so directors govern instead of receive updates.',
    url: '/board-meeting-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Board materials distributed 7 days before the meeting, not the night before',
    desc: '"Board materials: [meeting date - 7 days]." Board materials distributed 7 days before the meeting. 7-day distribution gives directors time to read, formulate questions, and identify issues that require committee-level clarification before the meeting. Materials distributed the night before the meeting are read during the meeting — which converts the meeting from a governance session into a read-along. Directors who receive materials 7 days early attend a meeting where the reading has already happened; directors who receive materials the night before attend a meeting where reading and governing happen simultaneously.',
  },
  {
    icon: Clock,
    title: 'Consent agenda placed at the beginning of every board meeting',
    desc: '"Consent agenda: [meeting opening, 5 minutes]." Consent agenda placed as the first item at every board meeting. Consent agenda items: approval of minutes, routine financial reports within variance, committee reports with no action items. Consent agenda passed in one motion. Any director may remove an item from consent for separate discussion. Consent agenda that runs 5 minutes returns 30-45 minutes of meeting time to governance decisions. Board meetings without a consent agenda spend the first 40 minutes on items that require no deliberation.',
  },
  {
    icon: BarChart3,
    title: 'Executive session placed as a standing item at the end of every board meeting',
    desc: '"Executive session: [meeting end, 20 minutes]." Executive session placed as a standing agenda item at the end of every board meeting — not scheduled only when there is a known issue. Standing executive session creates the space for directors to discuss organizational concerns without staff present. Topics that require candor — CEO performance, board dynamics, sensitive personnel matters — require a standing private space. Executive sessions scheduled only when there is a known issue signal to the organization that a standing executive session is a warning sign. Standing executive session normalizes the practice.',
  },
  {
    icon: Shield,
    title: 'Board development placed as a standing annual event, not an ad hoc retreat',
    desc: '"Annual board development: [standing, Q1]." Board development placed as a standing annual event at the start of the governance year. Board development agenda: governance responsibilities review, board composition and skills gap assessment, committee structure review, and board-CEO relationship evaluation. Annual board development placed as a standing event converts board improvement from a reactive activity (prompted by a problem) into a proactive governance practice. Boards that develop annually identify composition gaps before they affect decision quality.',
  },
]

const BOARD_STEPS = [
  {
    step: 'Place all board meetings and materials deadlines at the start of the governance year',
    detail: '"Board meeting schedule: [all dates for the year]. Materials deadline: [each meeting date - 7 days]. Consent agenda due: [materials deadline - 2 days]." Full board calendar placed at the start of the governance year. All meeting dates, materials deadlines, and consent agenda assembly deadlines placed simultaneously. Materials deadline at minus-7 days creates a due date for the executive team to assemble board materials. Consent agenda assembly 2 days before the materials deadline allows the board chair to review the consent package before distribution. Board calendars placed in December for the following year allow directors to protect board meeting dates before other commitments fill.',
  },
  {
    step: 'Place committee meeting calendars before the full board meetings they inform',
    detail: '"Committee meetings: [full board - 2 weeks]." All committee meetings placed 2 weeks before the full board meeting they inform. Committee meetings 2 weeks before the board meeting give time for committee reports to be finalized and included in the board materials distributed at minus-7 days. Committees meeting the week before the board meeting produce reports that arrive with the board materials rather than informing them. Committee meeting minutes placed in the board materials allow directors who are not committee members to read committee deliberations before the meeting — reducing committee report time and improving cross-committee understanding.',
  },
  {
    step: 'Separate governance decisions from operational updates in the agenda',
    detail: '"Governance decisions: first. Operational updates: second." Board agenda structured with governance decisions first and operational updates second. Governance decisions require full director energy — strategic direction votes, major financial commitments, policy changes, executive performance evaluation. Operational updates require attention but not deliberation. Boards that structure operational updates first and governance decisions second run out of meeting time for deliberation. Boards that structure governance decisions first address the items requiring deliberation while energy is highest and reach operational updates as informational context.',
  },
  {
    step: 'Place the board chair and CEO alignment meeting 1 week before each board meeting',
    detail: '"Board chair-CEO alignment: [board meeting - 1 week]." Standing 30-minute board chair and CEO alignment meeting placed 1 week before each board meeting. Alignment agenda: review of consent agenda, preview of governance decisions requiring board deliberation, any emerging issues requiring executive session discussion, and board dynamics issues the chair needs to address. Board chair who arrives at the board meeting without a prior conversation with the CEO is either surprised during the meeting or learns about issues for the first time when the board does. Alignment meeting prevents surprises and positions the chair to facilitate effectively.',
  },
  {
    step: 'Place the annual board performance evaluation as a standing Q4 governance activity',
    detail: '"Annual board evaluation: [standing, Q4]." Annual board performance evaluation placed as a standing Q4 governance activity. Evaluation: full board self-assessment, individual director peer assessment (if the board has adopted this practice), committee effectiveness assessment, and board-CEO relationship assessment. Q4 placement gives the board time to incorporate evaluation findings into the following year\'s governance planning, composition decisions, and committee restructuring before the Q1 governance year opening. Annual evaluation results discussed in the Q1 board development session close the governance feedback loop.',
  },
  {
    step: 'Place director term end dates and nomination process milestones on the governance calendar',
    detail: '"Director term end: [expiration date]. Nomination process open: [expiration - 90 days]. Board vote on renewal/replacement: [expiration - 30 days]." Director term end dates placed on the governance calendar with 90-day nomination process lead time. Governance committee engagement at minus-90 days gives time to assess whether the director will be asked to renew, identify a replacement if not, conduct a recruitment process if new skills are needed, and complete a vote 30 days before the term lapses. Director terms that expire without a planned nomination process produce either automatic renewal without evaluation or an unplanned vacancy.',
  },
]

const BOARD_FAILURES = [
  { failure: 'Board materials distributed the night before — directors read during the meeting', consequence: 'Board materials distributed the night before the meeting convert the board meeting from a governance session into a combined reading and governing session. Directors who have not read the materials cannot deliberate on them effectively. Directors who are reading the materials during the meeting are not listening to the discussion. The result is a board meeting where the first 30 minutes are consumed by directors getting oriented to the materials, the subsequent 60 minutes are consumed by questions that would have been resolved by pre-reading, and the governance decisions are addressed in the final 15 minutes under time pressure. 7-day distribution converts the meeting time from a reading session to a deliberation session.' },
  { failure: 'No consent agenda — routine items consume 40 minutes of governance time', consequence: 'Board meetings without a consent agenda begin with the approval of minutes (15 minutes of discussion about minor edits), a detailed review of financial statements that fall within approved variance (15 minutes of explanation), and committee reports with no action items (10 minutes of summary reading). These 40 minutes produce no governance output — the outcomes would be identical without the discussion. A consent agenda passed in one motion at the opening of the meeting returns 40 minutes to governance decisions, executive session, and strategic deliberation. The 40 minutes returned by the consent agenda is more valuable than any governance agenda item it replaces.' },
  { failure: 'Executive session scheduled only when there is a known issue — signals crisis', consequence: 'Executive sessions scheduled only when there is a known issue create a signal problem: when the board schedules an executive session, the organization interprets it as a response to a crisis. Staff become anxious. The CEO is on guard. The executive session begins in an atmosphere shaped by the knowledge that something prompted it. Standing executive sessions at the end of every board meeting normalize the practice — staff know the board always meets in executive session, so a standing executive session signals nothing. The absence of standing executive session means that when the board finally needs to discuss something sensitive, the scheduling of the session is itself news.' },
  { failure: 'Board development not planned — governance capacity degrades without a mechanism for improvement', consequence: 'Boards that do not plan annual development activities let governance capacity degrade over time as director terms turn over, organizational complexity increases, and governance expectations evolve. Governance skills that were sufficient when the organization had a $2M budget may not be sufficient when the organization has a $20M budget and a complex earned revenue model. Annual board development provides the mechanism for the board to assess its own capacity, identify gaps, and address them before they affect decision quality. Boards that develop reactively (in response to a governance failure) develop from a deficit. Boards that develop proactively (on a standing annual calendar) develop from a baseline of functioning governance.' },
]

export default function BoardMeetingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Board Meeting Calendar"
        title={
          <>
            Materials 7 days before. Consent agenda at the opening.
            <br />
            <em className="not-italic text-gold">Executive session standing. Governance decisions first.</em>
          </>
        }
        lede="Most board meetings are efficient at presenting information and inefficient at producing governance. Materials arrive the night before. Routine items consume the first 40 minutes. Governance decisions are addressed in the final 15 minutes. A board meeting calendar places materials 7 days before the meeting, passes a consent agenda in the first 5 minutes, structures governance decisions before operational updates, places executive session as a standing item at the end of every meeting, and schedules board development annually — so board meetings produce governance instead of PowerPoint reviews."
        crumbs={[{ label: 'Board Meeting Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/nonprofit-directors"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for nonprofit directors
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures board meetings so deliberation happens before deadlines and governance is never squeezed to the end.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a board meeting calendar where every governance decision has preparation time and every meeting produces a clear record.</h2>
          </Reveal>
          <div className="space-y-3">
            {BOARD_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four board meeting patterns that produce attendance, not governance.</h2>
          </Reveal>
          <div className="space-y-3">
            {BOARD_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Governance analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for board governance discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Board materials distribution date vs. meeting date (days of lead time)',
                'Consent agenda usage rate (% of meetings with consent agenda)',
                'Time spent on consent agenda vs. governance deliberation (ratio)',
                'Executive session held at % of board meetings',
                'Committee meetings completed 2+ weeks before full board meeting',
                'Board chair-CEO alignment meeting completion rate before each board meeting',
                'Annual board development session completion (date vs. Q1 target)',
                'Director term end date vs. nomination process open date (days of lead)',
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
        title="Materials 7 days before. Consent agenda at the opening."
        subtitle="Board materials calendar, consent agenda placement, executive session as a standing item, and annual board development schedule. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for nonprofit directors', href: '/for/nonprofit-directors' }}
      />
    </>
  )
}
