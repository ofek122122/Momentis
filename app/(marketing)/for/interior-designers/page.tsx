import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, Users, BarChart3, Clock, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Interior Designers — Project timelines, client reviews, and vendor coordination',
  description:
    'Interior designers manage multiple project timelines, client presentations, contractor schedules, and procurement deadlines simultaneously. Momenties templates every project phase, tracks vendor meetings, and shows time per project.',
  alternates: { canonical: '/for/interior-designers' },
  openGraph: {
    title: 'Momenties for Interior Designers',
    description: 'Project timelines, vendor coordination, and client analytics for interior designers.',
    url: '/for/interior-designers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Calendar,
    title: 'Project phase templates',
    desc: 'Template: discovery, concept presentation, procurement, installation coordination, styling, final reveal. Apply to any project. All milestones on the calendar in 30 seconds. Every phase visible from day one.',
  },
  {
    icon: Users,
    title: 'Vendor and contractor coordination',
    desc: '"Furniture delivery - Miller residence, tuesday 10am." "Painter walkthrough - Chen project, thursday 2pm." "Lighting installation - Studio Loft, friday 9am." Every vendor touchpoint tagged to the project.',
  },
  {
    icon: Clock,
    title: 'Procurement and lead time deadlines',
    desc: '"Custom sofa order deadline - Benson project, must order by april 15 for june delivery." Procurement lead times on calendar before they sneak up. Nothing arrives late because the deadline was invisible.',
  },
  {
    icon: BarChart3,
    title: 'Time per project analytics',
    desc: 'Tag every design session, client meeting, site visit, and sourcing hour by project. Analytics shows actual time invested. Compare to fee. The renovation that ran 40% over budget in time? Now it\'s visible before the next proposal.',
  },
]

const DESIGNER_WORKFLOW = [
  { time: 'Kickoff', action: '"Discovery meeting - Sullivan residence, tuesday 2pm 90 mins." Template applied. Concept presentation date, procurement deadlines, and installation window all added to calendar immediately.' },
  { time: 'Concept phase', action: '"Design session - Sullivan concepts, monday 9-11am." Repeated across 4 days. Protected creative time before site visits fill the week.' },
  { time: 'Presentation', action: '"Concept presentation - Sullivan, thursday 3pm." Prep block 45 mins before auto-added. Materials ready before entering the client\'s home.' },
  { time: 'Procurement', action: 'All order deadlines on calendar 60+ days before needed delivery. "Order custom drapery - Sullivan by may 1." Never miss a lead time window.' },
  { time: 'Installation', action: '"Furniture delivery coordination - Sullivan, june 10-12." Each trade visit tagged. Day-of schedule visible to the whole studio team.' },
]

export default function ForInteriorDesignersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Interior Designers"
        title={
          <>
            Every project on schedule.
            <br />
            <em className="not-italic text-gold">Every vendor coordinated.</em>
          </>
        }
        lede="Interior designers manage multiple project timelines, client presentations, contractor schedules, and procurement lead times simultaneously. Momenties templates every project phase, puts procurement deadlines on calendar before they're urgent, and shows time per project so every fee is grounded in reality."
        crumbs={[{ label: 'For Interior Designers' }]}
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
            Project templates
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Team plan from $9/person/month</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How interior designers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for design studio management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Project calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Discovery to final reveal with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {DESIGNER_WORKFLOW.map((step, i) => (
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
                &ldquo;I was managing 5 projects last fall — all in different phases. I had procurement deadlines in my head, contractor visits scattered across emails, and no real view of how my time was split. Momenties gave me one calendar where I could see all 5 projects and where each one stood. I haven&apos;t missed an order deadline since.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">V</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Vivian L.</div>
                  <div className="text-xs text-muted-foreground">Interior designer, residential + commercial</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Design studio analytics in Momenties.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Hours per project and per client',
                'Design time vs. site visit vs. coordination',
                'Procurement deadlines and lead times',
                'Vendor meeting frequency per project',
                'Active project load at any time',
                'Client presentation turnaround',
                'Revenue per hour by project type',
                'Studio capacity and bandwidth',
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
        title="Projects on schedule. Vendors coordinated. Time accounted."
        subtitle="Project phase templates, procurement deadline tracking, and client time analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Project templates', href: '/calendar-templates' }}
      />
    </>
  )
}
