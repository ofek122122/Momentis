import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Rehabilitation Counselors — CRC CE renewal, rehabilitation counselor credential management',
  description:
    'Rehabilitation counselors manage CRCC CRC certification 100CE/5yr renewal, state licensure CE (LPC, LCPC, or rehabilitation counselor license), mandatory ethics CE, approved provider CE requirements, annual vocational rehabilitation competency, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full rehabilitation counselor credential calendar.',
  alternates: { canonical: '/for/rehabilitation-counselors' },
  openGraph: {
    title: 'Momenties for Rehabilitation Counselors',
    description: 'CRC CE renewal, rehabilitation counselor credential management.',
    url: '/for/rehabilitation-counselors',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CRC certification and state counseling licensure renewal',
    desc: 'CRCC Certified Rehabilitation Counselor (CRC) certification requires 100 CE hours every 5 years. CRC CE must come from approved providers — not all CE qualifies, and CE category distribution is tracked. State counseling licensure (LPC, LCPC, LPCC, or rehabilitation counselor license) runs on an independent biennial or triennial cycle with state-specific content requirements and approved provider restrictions. CRC 5-year counter and state licensure CE tracked independently with provider approval status.',
  },
  {
    icon: Clock,
    title: 'Rehabilitation counselor multi-credential renewal calendar',
    desc: '"CRC — CRCC, 100 CE/5 years." "State counseling license — biennial or triennial CE." "Ethics CE — CRC mandatory category, 10 CE within 5-year period." "Disability-specific CE — vocational rehabilitation, assistive technology, ADA." "Annual vocational rehabilitation competency update." "NRCA and CRCC membership — annual." All rehabilitation counselor credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Ethics mandatory category and approved provider analytics',
    desc: 'CRCC requires 10 CE hours in ethics during each 5-year CRC recertification period — tracked separately from total CE hours. CRC CE must come from CRCC-approved providers — CE from non-approved providers does not count toward CRC recertification. State licensure boards have independent approved provider lists that may or may not overlap with CRCC. Ethics CE must meet both CRCC content requirements and state licensure requirements. Each category and provider restriction tracked independently.',
  },
  {
    icon: Users,
    title: 'NRA, ARCA, and rehabilitation counseling professional involvement',
    desc: '"NRA Annual Conference." "ARCA Annual Conference." "NRCA Annual Conference." "CRCC continuing education webinar series." "State vocational rehabilitation agency professional development." "ADA, ADAAA, and reasonable accommodation updates CE." "Assistive technology and job accommodation CE." "Return-to-work and disability management CE." All rehabilitation counselor professional development on calendar. NRA and ARCA conference CE tagged by CRC and state licensure applicability.',
  },
]

const RC_WORKFLOW = [
  { time: 'Annual planning', action: 'CRC 5-year 100-CE pace (annualized to 20 CE/year), ethics mandatory 10-CE pace (annualized to 2/year), state licensure CE cycle, annual vocational rehabilitation competency update, NRA Annual Conference, and NRCA membership all loaded in January. CRC cumulative counter, ethics mandatory category counter, and state licensure CE tracked independently.' },
  { time: 'CE completion', action: '"CRCC-approved — assistive technology assessment and job accommodation planning: AT evaluation process, ADA interactive accommodation process, and employer consultation, 3 CE, CRC applicable — career and life planning domain." Tagged by applicable certification and CRC content category. If ethics also applicable, ethics counter updates. State licensure CE updates if state approves CRCC-approved providers.' },
  { time: 'Ethics CE', action: '"CRCC-approved ethics CE — ethical decision-making in rehabilitation counseling: dual relationships, informed consent in supported employment, and documentation integrity, 2 CE, CRC ethics mandatory." Ethics CE placed with separate tracking toward the 10-hour ethics mandatory category. Ethics CE must be specifically in professional ethics content — general rehabilitation CE does not satisfy the ethics mandatory requirement. Annual ethics CE ensures no year-5 shortfall.' },
  { time: 'Provider verification', action: '"CE provider verification — confirm CRCC approval status before registration." CE provider approval status verified before enrollment. CRCC maintains an approved provider registry — CE from non-approved providers does not count toward CRC recertification regardless of content quality. State licensure board approved provider list checked separately. Provider verification placed as a pre-enrollment step for any new CE source.' },
  { time: 'Renewal audit', action: 'Analytics: CRC CE on pace (cumulative toward 100/5yr)? Ethics mandatory 10-hour category satisfied? State licensure CE adequate? CE from approved providers only? Annual vocational rehabilitation competency documented? NRCA membership active? Complete rehabilitation counselor credential audit 90 days before CRC recertification deadline. CRCC and state board documentation maintained separately.' },
]

export default function ForRehabilitationCounselorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Rehabilitation Counselors"
        title={
          <>
            CRC certification and state licensure maintained.
            <br />
            <em className="not-italic text-gold">Ethics CE and approved provider requirements never short.</em>
          </>
        }
        lede="Rehabilitation counselors manage CRCC CRC certification with 100 CE hours over 5 years including a mandatory 10-hour ethics category and approved provider restrictions, state counseling licensure on an independent biennial or triennial cycle with separate approved provider requirements, annual vocational rehabilitation competency, and professional development simultaneously. Momenties tracks CE by rehabilitation counseling credential with mandatory category and provider analytics, surfaces renewal deadlines 90 days early, and manages the full rehabilitation counselor credential calendar in one view."
        crumbs={[{ label: 'For Rehabilitation Counselors' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How rehabilitation counselors use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for rehabilitation counselor credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Rehabilitation counselor credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every CRC cycle, ethics requirement, and approved provider obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {RC_WORKFLOW.map((step, i) => (
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
                &ldquo;CRC requires 100 hours over 5 years, but not all CE counts — it has to come from CRCC-approved providers. My state LPCC license requires CE from state board-approved providers, which is a different list. Some providers are on both lists; most are on one. I was accumulating CE without verifying the source, and near my CRC renewal I realized some of my hours wouldn&apos;t count because the provider wasn&apos;t on the CRCC-approved list. The ethics mandatory category is another separate tracking need — 10 hours of ethics within the 5 years, not just any 10 hours from any topic. I use Momenties to tag CE by provider approval status and by mandatory category. I&apos;ve never had a surprise at renewal since.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Tasha B., CRC, LPCC</div>
                  <div className="text-xs text-muted-foreground">Rehabilitation counselor, state vocational rehabilitation agency</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All rehabilitation counselor credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CRCC CRC certification CE — 100 hours/5 years, approved providers',
                'Ethics CE mandatory category — 10 hours within 5-year period',
                'State counseling licensure CE — biennial or triennial',
                'Annual vocational rehabilitation competency update',
                'CE provider approval status tracking — CRCC and state board lists',
                'ADA and disability law annual update CE',
                'NRCA membership renewal — annual',
                'NRA and ARCA conference CE planning by CRC and state applicability',
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
        title="CRC certification and state licensure maintained."
        subtitle="CE tracking with ethics mandatory category, approved provider verification, state licensure calendar, and rehabilitation counseling professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
