import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Video, Users, Calendar, ArrowUpRight, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Webinars — Live sessions from the Calendro team',
  description: 'Monthly office hours, product tours, and deep dives with the Calendro team. Free to attend. Recordings posted within 48 hours.',
  alternates: { canonical: '/webinars' },
  openGraph: {
    title: 'Calendro Webinars',
    description: 'Live office hours, product tours, and deep dives.',
    url: '/webinars',
  },
}

type Session = {
  date: string
  time: string
  title: string
  speakers: string
  desc: string
  cta: string
  status: 'upcoming' | 'live' | 'recorded'
  tag: string
}

const SESSIONS: Session[] = [
  { date: 'May 1, 2026', time: '11:00 AM ET', title: 'Office hours with Iris & Oren', speakers: 'Iris Kwon & Oren Marlow, co-founders', desc: 'Our monthly open Q&A. Bring any question — product, company, craft. One hour, no slides.', cta: 'Reserve a seat', status: 'upcoming', tag: 'Office hours' },
  { date: 'May 15, 2026', time: '10:00 AM ET', title: 'Parser deep-dive: how Gemini meets chrono-node', speakers: 'Rafa Vieira, Founding AI', desc: 'An engineer-facing walk-through of Calendro\'s parsing pipeline. Two stages, fallback strategy, eval harness, prompt cache. 45 minutes + Q&A.', cta: 'Reserve a seat', status: 'upcoming', tag: 'Technical' },
  { date: 'May 22, 2026', time: '2:00 PM ET', title: 'Designing for the end of the day', speakers: 'Iris Kwon, co-founder', desc: 'A design-led tour of the aesthetic choices behind Calendro. Dark-first, typography, restraint — and the research we did to get there.', cta: 'Reserve a seat', status: 'upcoming', tag: 'Design' },
  { date: 'Jun 5, 2026', time: '11:00 AM ET', title: 'Office hours', speakers: 'Iris Kwon, Oren Marlow', desc: 'Monthly open Q&A. If you missed May\'s, catch this one.', cta: 'Reserve a seat', status: 'upcoming', tag: 'Office hours' },
  { date: 'Apr 3, 2026', time: '', title: 'The hardest part of calendar software', speakers: 'Sam Halverson, Founding Engineer', desc: 'Forty-five minutes on timezones, RRULEs, CalDAV quirks, and why calendar engineering is harder than you think.', cta: 'Watch recording', status: 'recorded', tag: 'Technical' },
  { date: 'Mar 11, 2026', time: '', title: 'Calendro for founders — an operator\'s tour', speakers: 'Lena Osei, Head of Product', desc: 'How VC partners and startup founders are using Calendro to run quieter weeks. 30 minutes + audience Q&A.', cta: 'Watch recording', status: 'recorded', tag: 'For operators' },
]

function StatusPill({ status }: { status: Session['status'] }) {
  const meta = {
    upcoming: { label: 'Upcoming', cls: 'text-emerald-300 border-emerald-400/30 bg-emerald-500/10' },
    live: { label: 'Live now', cls: 'text-rose-300 border-rose-400/30 bg-rose-500/10' },
    recorded: { label: 'Recorded', cls: 'text-muted-foreground border-border bg-white/5' },
  }[status]
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[10px] font-mono uppercase tracking-[0.15em] ${meta.cls}`}
    >
      {status === 'live' && <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mr-1.5 animate-pulse" />}
      {meta.label}
    </span>
  )
}

export default function WebinarsPage() {
  const upcoming = SESSIONS.filter((s) => s.status === 'upcoming' || s.status === 'live')
  const recorded = SESSIONS.filter((s) => s.status === 'recorded')

  return (
    <>
      <PageHero
        eyebrow="Webinars & events"
        title={
          <>
            Live with <em className="not-italic text-gold">the team</em>.
          </>
        }
        lede="Monthly office hours, product deep-dives, and design conversations. Always free. Recordings posted within 48 hours."
        crumbs={[{ label: 'Webinars' }]}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="#upcoming"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            <Calendar className="h-4 w-4" /> See upcoming
          </a>
          <a
            href="#archive"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
          >
            <Play className="h-4 w-4" /> Watch archive
          </a>
        </div>
      </PageHero>

      {/* Upcoming */}
      <section id="upcoming" className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                Upcoming sessions
              </h2>
              <span className="font-mono text-[11px] text-muted-foreground">
                All times shown · ET (Eastern)
              </span>
            </div>
          </Reveal>
          <div className="space-y-3">
            {upcoming.map((s, i) => (
              <Reveal key={s.title + s.date} delay={i * 60}>
                <article className="rounded-2xl border border-border lux-card p-6 md:p-7 grid md:grid-cols-[180px_1fr_auto] gap-5 items-start">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold/70">
                      {s.date}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">{s.time}</p>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <StatusPill status={s.status} />
                      <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-gold/70 px-2 py-0.5 rounded-full border border-gold/20">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">{s.speakers}</p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors shrink-0"
                  >
                    {s.cta} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How webinars work */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              What to expect
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Small rooms. Real people.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Users, title: 'Small audiences', desc: 'We cap live sessions at 100 attendees so the Q&A stays actually answerable.' },
              { icon: Video, title: 'No slides unless necessary', desc: 'Most of our sessions are screen-share + conversation, not slide decks. We want you to feel like you\'re in the room.' },
              { icon: Play, title: 'Recordings in 48 hours', desc: 'Miss one? All recordings are posted publicly within 2 business days. Chapters included.' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <f.icon className="h-5 w-5 text-gold mb-4" />
                  <h3 className="text-sm font-medium text-foreground mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section id="archive" className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
              Archive
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {recorded.map((s, i) => (
              <Reveal key={s.title + s.date} delay={(i % 2) * 80}>
                <Link href="#" className="group block rounded-xl border border-border lux-card p-5 h-full">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <StatusPill status={s.status} />
                    <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-gold/70 px-2 py-0.5 rounded-full border border-gold/20">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">{s.speakers}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
                  <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-muted-foreground">{s.date}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-gold opacity-70 group-hover:opacity-100 transition-opacity">
                      <Play className="h-3 w-3" /> Watch
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Propose a topic */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Propose a topic.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            We build the webinar calendar in response to what people actually want to hear. Suggest a topic and we&apos;ll see if we can line it up.
          </p>
          <a
            href="mailto:webinars@calendro.app"
            className="mt-8 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            webinars@calendro.app
          </a>
        </div>
      </section>

      <CTA
        title="Want to be notified?"
        subtitle="One email when new sessions are announced. Nothing else."
        primary={{ label: 'Subscribe to the newsletter', href: '/blog' }}
        secondary={{ label: 'Join our community', href: '/community' }}
      />
    </>
  )
}
