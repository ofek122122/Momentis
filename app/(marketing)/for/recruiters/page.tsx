import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, BarChart3, Zap, Clock, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Recruiters — Interview scheduling and pipeline time analytics',
  description:
    'Recruiters coordinate dozens of interviews daily across hiring managers, candidates, and panels. Momenties schedules every interview in seconds, tracks time per role, and keeps the pipeline moving without email chains.',
  alternates: { canonical: '/for/recruiters' },
  openGraph: {
    title: 'Momenties for Recruiters',
    description: 'Interview scheduling in seconds. Pipeline analytics built in.',
    url: '/for/recruiters',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Zap,
    title: 'Interview scheduling without back-and-forth',
    desc: '"Phone screen with Sarah Chen tuesday 10am 30 mins." "Final panel thursday 2pm, 4 interviewers." Voice-add from anywhere. On calendar before closing the LinkedIn tab.',
  },
  {
    icon: Users,
    title: 'Panel coordination across hiring managers',
    desc: 'Team overlay shows every interviewer\'s availability simultaneously. Find a 90-minute panel window for 4 people in seconds, not 4 back-and-forth emails.',
  },
  {
    icon: BarChart3,
    title: 'Time per role analytics',
    desc: 'Tag every interview and debrief by role. Analytics shows hours invested per open position. Know which roles are taking disproportionate interviewer time before the quarterly review.',
  },
  {
    icon: Clock,
    title: 'Interview loop templates',
    desc: 'Template your standard loops: phone screen → technical → hiring manager → panel → debrief. Apply to any candidate in 30 seconds. Every step on calendar, nothing missed.',
  },
]

const RECRUITER_WORKFLOW = [
  { time: 'Sourcing', action: '"Intro call Marcus Johnson friday 9am 20 mins." Voice-added while reviewing his profile. On calendar before the next profile loads.' },
  { time: 'Phone screen', action: 'Apply phone screen template. Prep block 20 mins before, call, debrief note block 15 mins after. All three created together.' },
  { time: 'Panel loop', action: 'Team overlay: find 90-minute window where all 4 panelists are free. Book once. Calendar invites to all.' },
  { time: 'Debrief', action: '"Debrief panel tuesday 30 mins, same group." Added immediately after panel confirmation. Debrief always happens while feedback is fresh.' },
  { time: 'Offer stage', action: 'Analytics: this role consumed 18 hours of interviewer time over 3 weeks. Calibrate for next headcount request.' },
]

export default function ForRecruitersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Recruiters"
        title={
          <>
            Every interview scheduled.
            <br />
            <em className="not-italic text-gold">Every loop completed.</em>
          </>
        }
        lede="Recruiters lose hours every week coordinating interview panels, chasing availability, and rescheduling. Momenties makes every interview instant to book, every loop traceable, and every pipeline stage visible — without becoming a scheduling assistant."
        crumbs={[{ label: 'For Recruiters' }]}
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
            Interview templates
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Team plan from $9/person/month</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How recruiters use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for talent acquisition.</h2>
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

      {/* Workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Recruiting workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Pipeline stage by stage.</h2>
          </Reveal>
          <div className="space-y-3">
            {RECRUITER_WORKFLOW.map((step, i) => (
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

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I was spending 45 minutes a day just coordinating interview panels. With Momenties I check availability in the overlay, book, and move on. The whole process takes under two minutes now.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Tanya R.</div>
                  <div className="text-xs text-muted-foreground">Senior technical recruiter, 12 open roles</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Every interview scheduled. Every loop tracked."
        subtitle="Interview templates, team availability overlay, and pipeline time analytics. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See templates', href: '/calendar-templates' }}
      />
    </>
  )
}
