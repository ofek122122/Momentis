import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, BarChart3, Shield, Zap, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Graphic Designers — Project deadlines, client reviews, and design time analytics',
  description:
    'Graphic designers balance multiple project deadlines, client feedback rounds, revision cycles, and creative deep work. Momenties tracks deadlines per project, protects design time, and shows time per client so you know what work is actually profitable.',
  alternates: { canonical: '/for/graphic-designers' },
  openGraph: {
    title: 'Momenties for Graphic Designers',
    description: 'Project deadlines, creative time protection, and client analytics for graphic designers.',
    url: '/for/graphic-designers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'Creative blocks that hold',
    desc: 'Design requires focus. Block 2–3 hour creative sessions before client calls colonize the day. "Design block — rebrand concepts, tuesday 9-11am." The creative session is on the calendar before the brief arrives.',
  },
  {
    icon: Clock,
    title: 'Project deadlines per client',
    desc: '"Concepts due — Raven Co rebrand, thursday." "Logo revisions — Summit App, friday 3pm." "Final files — TechConf print, monday." Every deadline per project visible in one calendar. Nothing disappears into email.',
  },
  {
    icon: BarChart3,
    title: 'Time per project reveals margin',
    desc: 'Tag every design session, revision call, and client meeting by project. Analytics shows hours invested per deliverable. The logo that took 18 hours at a flat $600 rate? Now you see it — and quote the next one accurately.',
  },
  {
    icon: Zap,
    title: 'Revision rounds tracked on calendar',
    desc: '"Round 1 feedback call — Summit App, wednesday 2pm." "Round 2 delivery — Summit App, friday." Each revision round gets its own calendar entry. Nothing is "I thought that was handled in the last round."',
  },
]

const DESIGNER_WORKFLOW = [
  { time: 'Project start', action: '"Discovery call - Raven Co rebrand, monday 10am 60 mins." Concept delivery date added 10 days out. Revision round placeholders added. Client knows the timeline before the call ends.' },
  { time: 'Design days', action: '"Creative block - Raven Co concepts, 9-11am." Repeated across 3 days. No meetings before noon. Calendar signals focus time. Output compounds without interruption.' },
  { time: 'Concept delivery', action: '"Concept presentation - Raven Co, thursday 2pm." Prep block 30 mins before auto-added from template. Presentation is ready, not scrambled.' },
  { time: 'Revision rounds', action: '"Revisions due - Raven Co round 2, tuesday noon." Tagged to the project. Analytics updates hours on the project automatically.' },
  { time: 'Final delivery', action: '"Final files delivery - Raven Co, friday." Block the morning for file prep and packaging. Client gets files before end of week, every time.' },
]

export default function ForGraphicDesignersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Graphic Designers"
        title={
          <>
            Creative time protected.
            <br />
            <em className="not-italic text-gold">Deadlines always visible.</em>
          </>
        }
        lede="Graphic designers manage multiple project deadlines, feedback rounds, revision cycles, and deep creative work simultaneously. Momenties blocks creative time before calls fill the day, tracks every project deadline, and shows time per client so you understand which work is worth taking."
        crumbs={[{ label: 'For Graphic Designers' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How graphic designers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for creative practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Designer project rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Brief to final delivery with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {DESIGNER_WORKFLOW.map((step, i) => (
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
                &ldquo;I had no idea how many revision calls I was having for free. Analytics showed one client was getting an average of 4.5 revision rounds on every logo project — all unbilled. I added a revision cap to my contract. That one change added $800/month.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Alex T.</div>
                  <div className="text-xs text-muted-foreground">Freelance brand designer, 7+ years</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What designers track</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Design practice in analytics.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Hours per project and per client',
                'Creative time vs. meeting time ratio',
                'Revision rounds per deliverable',
                'Time per project type (brand, web, print)',
                'Deadline hit rate',
                'Effective hourly rate by client',
                'Active projects at any given time',
                'Focus blocks completed vs. planned',
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
        title="Creative time protected. Deadlines tracked. Work priced right."
        subtitle="Project deadline management, creative block scheduling, and client time analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Client analytics', href: '/features/analytics' }}
      />
    </>
  )
}
