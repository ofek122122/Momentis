import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Veterinarians — CE tracking, license renewals, and non-clinical time management',
  description:
    'Veterinarians manage CE requirements across multiple state licenses, DEA registration, controlled substance training, professional meeting commitments, and non-clinical time simultaneously. Momenties tracks CE by RACE category, surfaces renewal deadlines early, and protects continuing education time.',
  alternates: { canonical: '/for/veterinarians' },
  openGraph: {
    title: 'Momenties for Veterinarians',
    description: 'CE tracking, license renewals, and professional time management for veterinarians.',
    url: '/for/veterinarians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE by RACE category',
    desc: 'Tag every CE event by AAVSB RACE category: clinical sciences, practice management, professional development. Analytics shows hours per category against state renewal requirements. Each state license cycle tracked separately.',
  },
  {
    icon: Clock,
    title: 'License and DEA renewal deadlines',
    desc: '"Veterinary license renewal — state board, june 30." "DEA registration renewal — october 31." "Controlled substance training — renewal required." All professional credential deadlines on calendar. 90-day advance visibility.',
  },
  {
    icon: BarChart3,
    title: 'Non-clinical time analytics',
    desc: 'Tag CE events, staff meetings, administrative blocks, and professional development separately from clinical time. Analytics shows how non-clinical hours are distributed. Protect the continuing education time that keeps skills current.',
  },
  {
    icon: Users,
    title: 'Professional meeting scheduling',
    desc: '"AVMA conference — july 12-16." "State VMA annual meeting — october." "Staff development day — first monday monthly." All professional commitments on calendar from the year\'s start.',
  },
]

const VET_WORKFLOW = [
  { time: 'Annual planning', action: 'All state license renewal dates on calendar. DEA registration renewal added. AVMA and state VMA conferences blocked. CE hours needed per state per cycle calculated.' },
  { time: 'CE events', action: '"Cardiology CE webinar, thursday 7pm 2 hours, clinical sciences." Tagged and added. CE counter updates immediately. State-specific CE bank fills through the year.' },
  { time: 'Conferences', action: '"AVMA annual conference, july 12-16." CE from the conference pre-tagged. Hotel and travel blocked. Staff coverage arrangements added as separate events.' },
  { time: 'CE audit', action: 'Analytics: CE hours per state per category. License renewal in 4 months — on pace? Which categories need more hours? Time to register for specialty symposia.' },
  { time: 'Renewal prep', action: 'Daily Brief surfaces license and DEA renewal 90 days out. CE documentation consolidated. Renewals submitted before the expiration window — never reactive.' },
]

export default function ForVeterinariansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Veterinarians"
        title={
          <>
            Every license current.
            <br />
            <em className="not-italic text-gold">CE always on track.</em>
          </>
        }
        lede="Veterinarians manage CE requirements across multiple state licenses, DEA registration renewals, controlled substance training, professional meeting commitments, and non-clinical obligations simultaneously. Momenties tracks CE by RACE category per state, surfaces renewal deadlines 90 days early, and protects continuing education time."
        crumbs={[{ label: 'For Veterinarians' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How veterinarians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for professional veterinary practice.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Professional calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and renewals through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {VET_WORKFLOW.map((step, i) => (
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
                &ldquo;I&apos;m licensed in two states with different CE categories and renewal cycles. Tracking both in my head while maintaining DEA registration was genuinely stressful. Momenties gave me one calendar where I can see both state CE requirements and know exactly where I stand on each license. No more end-of-year panic.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Dr. Jennifer C., DVM</div>
                  <div className="text-xs text-muted-foreground">Small animal veterinarian, licensed in 2 states</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Credentials tracked</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All veterinary credentials in one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'State veterinary license renewal (all states)',
                'DEA registration renewal (3-year cycle)',
                'Controlled substance training requirements',
                'AVMA membership renewal',
                'State VMA membership and events',
                'RACE CE by category per state',
                'Board specialty CE requirements',
                'First aid and emergency training',
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
        title="Every license current. CE always on track."
        subtitle="Multi-state CE analytics, DEA renewal tracking, and professional calendar management. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
