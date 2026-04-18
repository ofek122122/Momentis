import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Massage Therapists — CE tracking, client scheduling, and license renewals',
  description:
    'Massage therapists manage NCBTMB CE requirements, state license renewals, client consultation scheduling, and continuing education. Momenties tracks CE hours by category and keeps every renewal deadline visible.',
  alternates: { canonical: '/for/massage-therapists' },
  openGraph: {
    title: 'Momenties for Massage Therapists',
    description: 'CE tracking and practice schedule management for massage therapists.',
    url: '/for/massage-therapists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE hours by NCBTMB category',
    desc: 'Tag every CE event by category: anatomy, pathology, ethics, technique, business. Analytics shows hours per category against your 2-year renewal requirement. No spreadsheet tracking.',
  },
  {
    icon: Clock,
    title: 'License and certification renewals',
    desc: '"NCBTMB renewal september 30." "State LMT license renewal march." "First aid certification april." Every compliance deadline on calendar. Visible 60 days before due.',
  },
  {
    icon: Users,
    title: 'Client consultation scheduling',
    desc: '"Intake consultation new client tuesday 3pm 30 mins." "Follow-up Sarah thursday 60 mins." Voice-added between sessions. On calendar before the next client arrives.',
  },
  {
    icon: BarChart3,
    title: 'Practice analytics',
    desc: 'Track CE courses, workshops, supervision, and admin separately from session time. See how many hours per month go to professional development. Know where the business time goes.',
  },
]

const MT_WORKFLOW = [
  { time: 'Year start', action: 'CE plan: audit current hours by category, identify gaps, add AMTA National and regional workshops to calendar for the year.' },
  { time: 'Monthly', action: 'Business admin block (templated). CE webinar or workshop (recurring monthly). Both on calendar for all 12 months.' },
  { time: 'CE event', action: '"Myofascial release workshop, saturday june 14, 8 hours, technique category." Tagged, added, CE counter updated.' },
  { time: 'Mid-cycle', action: 'Analytics: 12/24 hours accumulated, ethics still needs 2 hours. One webinar covers the gap before renewal.' },
  { time: 'Renewal', action: 'NCBTMB renewal visible in Daily Brief for 60 days prior. Application deadline blocked. CE documentation checklist on calendar.' },
]

export default function ForMassageTherapistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Massage Therapists"
        title={
          <>
            Every CE hour tracked.
            <br />
            <em className="not-italic text-gold">License renewed on time.</em>
          </>
        }
        lede="Massage therapists manage NCBTMB CE requirements, state license renewals, client scheduling, and practice administration. Momenties tracks CE by category, keeps renewal deadlines visible, and structures practice time without overhead."
        crumbs={[{ label: 'For Massage Therapists' }]}
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
            CE analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How massage therapists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for massage therapy practice.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Practice calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and licensing through the renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {MT_WORKFLOW.map((step, i) => (
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
                &ldquo;I always renewed at the last minute because I never knew how many CE hours I actually had. Now I tag every course when I add it, and the analytics tell me exactly where I stand. It changed my relationship with CE completely.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Nicole T., LMT</div>
                  <div className="text-xs text-muted-foreground">Licensed massage therapist, private practice</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="CE tracked. NCBTMB maintained. Practice scheduled."
        subtitle="CE category analytics, renewal deadline reminders, and client meeting templates. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
