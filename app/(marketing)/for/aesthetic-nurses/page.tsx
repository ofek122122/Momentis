import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Aesthetic Nurses — CANS CE renewal, aesthetic nursing credential management',
  description:
    'Aesthetic nurses manage state RN biennial CE renewal, CANS (Certified Aesthetic Nurse Specialist) certification CE maintenance, annual injectables training for new products, laser safety officer certification renewal, ASHA membership, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full aesthetic nurse credential calendar.',
  alternates: { canonical: '/for/aesthetic-nurses' },
  openGraph: {
    title: 'Momenties for Aesthetic Nurses',
    description: 'CANS CE renewal, aesthetic nursing credential management.',
    url: '/for/aesthetic-nurses',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for state RN license and CANS certification independently',
    desc: 'Aesthetic nurses hold state RN licensure requiring biennial CE — state CE content requirements and approved provider standards vary by state. CANS (Certified Aesthetic Nurse Specialist) from ISPAN requires separate CE with aesthetic nursing-specific content for maintenance. Aesthetic nurses who are also FNPs or other advanced practice providers carry additional ANCC or AANP certification on independent renewal cycles. Each credential tracked on its own timeline with its own approved provider requirements.',
  },
  {
    icon: Clock,
    title: 'Aesthetic nurse multi-credential renewal calendar',
    desc: '"State RN license — biennial CE, state board-approved providers." "CANS certification maintenance — ISPAN aesthetic nursing CE." "Laser Safety Officer certification — institutional/ASLMS renewal." "Annual injectables product training — botulinum toxin and HA filler updates." "ASHA membership — annual." "BLS/CPR — 2-year renewal." "Advanced practice CE (if NP) — ANCC/AANP biennial." All aesthetic nurse credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Injectables training currency and laser safety certification analytics',
    desc: 'Aesthetic nurses performing botulinum toxin and dermal filler injections maintain annual product-specific training as aesthetic practices adopt new formulations and techniques. New HA filler products (new brands, new crosslinking technologies), botulinum toxin product expansions, and biostimulator injectables require product-specific training documentation for risk management and scope-of-practice compliance. Laser Safety Officer certification required for operating Class 3B and 4 laser devices — renewed every 2-3 years, separate from RN CE. Vascular complication emergency management training logged separately.',
  },
  {
    icon: Users,
    title: 'ISPAN, ASHA, and aesthetic nursing professional involvement',
    desc: '"ISPAN Annual Conference." "ASHA Annual Meeting." "ASDS Annual Meeting." "AAD Annual Meeting." "Vegas Cosmetic Surgery (multidisciplinary)." "Botulinum toxin anatomy and injection technique CE." "Dermal filler vascular occlusion emergency management CE." "Skin resurfacing and energy device CE." "Thread lift and biostimulator CE." All aesthetic nursing professional development on calendar. ISPAN and ASHA conference CE tagged by state RN license and CANS maintenance applicability.',
  },
]

const AN_WORKFLOW = [
  { time: 'Annual planning', action: 'State RN biennial CE pace, CANS certification maintenance CE pace (aesthetic nursing content), LSO certification renewal cycle, annual injectables product training, BLS 2-year cycle, ISPAN conference, ASHA conference, and ASHA membership all loaded in January. State RN CE counter and CANS CE tracked independently. Annual injectables training placed as a Q1 requirement before high season.' },
  { time: 'CE completion', action: '"ISPAN-approved — lip anatomy for filler injection: anatomical danger zones, cannula versus needle technique selection, and safe injection planes for vermilion border enhancement, 2 CE, state nursing CE applicable, CANS applicable — aesthetic nursing domain." State RN CE counter updates. CANS CE updates. Aesthetic nursing-specific content confirmed at logging — general nursing CE logged separately without CANS credit.' },
  { time: 'Injectables training', action: '"Annual injectables training — new HA filler product introduction, new botulinum toxin product additions, and biostimulator technique updates, Q1." Annual product-specific injectables training placed as a risk management and scope-of-practice requirement separate from RN CE. New products require documented training before clinical use. Vascular complication emergency management training placed as an annual practice safety requirement with documentation maintained for the practice medical director.' },
  { time: 'LSO renewal', action: '"Laser Safety Officer recertification — ASLMS course, 2-3 year cycle, Q2." LSO certification tracked separately from state RN CE. Aesthetic nurses operating fractional lasers, IPL, RF microneedling, and HIFU devices may be required to maintain LSO certification under state radiation safety regulations and institutional policies. Practice liability insurance may require LSO documentation for nurses operating high-energy devices independently.' },
  { time: 'Renewal audit', action: 'Analytics: State RN CE on pace? CANS maintenance CE current? ANCC/AANP CE complete (if NP)? LSO certification valid? Annual injectables training documented? BLS current? ASHA membership active? Complete aesthetic nurse credential audit 90 days before earliest renewal. State board, ISPAN, ASLMS, and practice medical director documentation maintained separately.' },
]

export default function ForAestheticNursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Aesthetic Nurses"
        title={
          <>
            RN license and CANS certification maintained.
            <br />
            <em className="not-italic text-gold">Injectables training current. Laser safety documented.</em>
          </>
        }
        lede="Aesthetic nurses manage state RN licensure biennial CE with state board-approved providers, CANS certification maintenance CE with aesthetic nursing-specific content on an independent cycle, annual product-specific injectables training for new botulinum toxin and dermal filler formulations as a risk management requirement, Laser Safety Officer certification renewal for device operation, BLS 2-year renewal, and professional development at ISPAN and ASHA simultaneously. Momenties tracks CE by aesthetic nurse credential, surfaces renewal deadlines 90 days early, and manages the full aesthetic nurse credential calendar in one view."
        crumbs={[{ label: 'For Aesthetic Nurses' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How aesthetic nurses use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for aesthetic nurse credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Aesthetic nurse credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every RN renewal cycle, CANS maintenance window, and annual injectables training requirement.</h2>
          </Reveal>
          <div className="space-y-3">
            {AN_WORKFLOW.map((step, i) => (
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
                &ldquo;I have my state RN license, my CANS certification through ISPAN, and LSO certification for our laser suite. My RN license is biennial — different CE hours and approved providers than CANS. CANS requires aesthetic nursing content specifically, so not all my nursing CE counts. LSO is a separate certification entirely that renews on its own schedule. Every year I also do product training for any new injectables we add — our practice documents all of that for liability purposes. I also maintain my BLS. Five credential items on different timelines and I was tracking them across email reminders and a calendar I was maintaining manually. Momenties gave me one place where I can see all of it with alerts coming 90 days early.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">C</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Christina B., RN, CANS</div>
                  <div className="text-xs text-muted-foreground">Aesthetic nurse injector, medical aesthetics and cosmetic dermatology practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All aesthetic nurse credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'State RN license CE — biennial, state board-approved providers',
                'CANS certification maintenance CE — ISPAN aesthetic nursing content',
                'Laser Safety Officer certification — ASLMS or institutional renewal',
                'BLS/CPR certification — 2-year renewal',
                'Annual injectables product training — botulinum toxin and HA filler documentation',
                'Vascular complication emergency management — annual practice safety CE',
                'ASHA membership renewal — annual',
                'ISPAN and ASHA conference CE planning by state RN and CANS applicability',
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
        title="RN license and CANS certification maintained."
        subtitle="CE tracking by aesthetic domain, injectables training calendar, LSO renewal, and aesthetic nursing professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
