import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for PTAs — CEU tracking, state license renewals, and clinical practice calendar',
  description:
    'Physical therapist assistants manage CEU requirements, state PTA license renewals, FSBPT continuing competence requirements, and clinical schedule planning simultaneously. Momenties tracks CEUs by category, surfaces renewal deadlines early, and manages the non-clinical calendar.',
  alternates: { canonical: '/for/physical-therapists-assistants' },
  openGraph: {
    title: 'Momenties for Physical Therapist Assistants',
    description: 'CEU tracking, PTA license renewals, and clinical practice calendar management.',
    url: '/for/physical-therapists-assistants',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CEU tracking by license category',
    desc: 'Tag every continuing education activity by CEU category: clinical skills, ethics, safety, documentation, patient communication. Track hours toward your state\'s PTA license renewal requirement. State-specific requirements vary — some mandate ethics hours or specialty topic minimums. All tracked separately.',
  },
  {
    icon: Clock,
    title: 'PTA license renewal calendar',
    desc: '"PTA license renewal — state board, october 31." "CPR recertification — 2-year, march." "Mandatory reporter training — annual, varies by state." "HIPAA refresher — annual." All PTA credentials with 90-day advance alerts. License never lapses due to missed deadline.',
  },
  {
    icon: BarChart3,
    title: 'Professional development time analytics',
    desc: 'Tag CEU events, professional conferences, mentorship sessions, and specialty training separately from patient treatment time. Analytics shows how professional development hours distribute. Track specialty certifications (oncology, sports, neuro) alongside general CEU requirements.',
  },
  {
    icon: Users,
    title: 'Professional meetings and specialty development',
    desc: '"APTA Combined Sections Meeting — february." "State APTA chapter meeting — annual." "Specialty certification study group — monthly." "Case conference — bi-weekly." Professional development and community commitments on calendar from the year\'s start.',
  },
]

const PTA_WORKFLOW = [
  { time: 'Annual planning', action: 'State PTA license renewal date, CPR recertification, any mandatory training requirements, and total CEU hours needed all on calendar in January. 90-day alerts set. CEU completion pace calculated — how many hours per month to finish before the deadline.' },
  { time: 'CEU events', action: '"APTA-approved online course — therapeutic exercise progressions, tuesday 7pm, 2 hours, clinical CEU." Tagged and added. State renewal counter updates. Ethics requirement tracked separately if mandated by state board.' },
  { time: 'Specialty development', action: '"Neurological rehabilitation workshop — saturday, 6 hours." "Vestibular rehabilitation intro course — 2-day, june." Specialty training tagged and logged. Career development track visible alongside renewal requirements.' },
  { time: 'Conference', action: '"APTA CSM — february 4-7." CEU sessions pre-selected for clinical relevance and renewal credit. Hotel and travel booked. Patient coverage confirmed for the conference days.' },
  { time: 'License audit', action: 'Analytics: CEU progress by category. State requirement on track? Mandatory topics complete? Total hours vs. renewal minimum? Time to complete remaining courses before the license renewal deadline.' },
]

export default function ForPhysicalTherapistsAssistantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Physical Therapist Assistants"
        title={
          <>
            License always current.
            <br />
            <em className="not-italic text-gold">CEUs never scrambled.</em>
          </>
        }
        lede="Physical therapist assistants manage CEU requirements with state-specific category mandates, PTA license renewal deadlines, CPR recertification, and professional development calendars simultaneously. Momenties tracks CEUs by category, surfaces renewal deadlines 90 days early, and manages the professional calendar in one view."
        crumbs={[{ label: 'For PTAs' }]}
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
            CEU analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How PTAs use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for PTA practice and license management.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CEU and license managed through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {PTA_WORKFLOW.map((step, i) => (
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
                &ldquo;My state requires 30 CEUs per 2-year renewal with 2 ethics hours required. The first time I renewed, I didn&apos;t realize about the ethics requirement until I was auditing my hours two weeks before the deadline. Momenties fixed this completely — I track ethics hours separately from general CEUs and I can see exactly where I stand at any point. No more category surprises.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">H</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Hannah L., PTA</div>
                  <div className="text-xs text-muted-foreground">Physical therapist assistant, outpatient orthopedics</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All PTA credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CEU credits by category — state-specific',
                'State PTA license renewal deadline',
                'CPR/BLS recertification — 2-year',
                'Mandatory reporter training',
                'HIPAA compliance refresher',
                'Specialty certification study and renewal',
                'APTA chapter and national events',
                'Professional development conferences',
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
        title="License current. CEUs on track. Career growing."
        subtitle="CEU tracking by category, license renewal management, and professional development calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CEU analytics', href: '/features/analytics' }}
      />
    </>
  )
}
