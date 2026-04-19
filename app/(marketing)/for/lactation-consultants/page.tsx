import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Lactation Consultants — IBCLC CE renewal, lactation consultant credential management',
  description:
    'International Board Certified Lactation Consultants manage IBCLC 75CE/5yr renewal including mandatory L-CERP category, state RN or other licensure CE on independent cycles, annual breastfeeding medicine competency, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full IBCLC credential calendar.',
  alternates: { canonical: '/for/lactation-consultants' },
  openGraph: {
    title: 'Momenties for Lactation Consultants',
    description: 'IBCLC CE renewal, lactation consultant credential management.',
    url: '/for/lactation-consultants',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for IBCLC certification and underlying licensure renewal',
    desc: 'IBLCE International Board Certified Lactation Consultant (IBCLC) recertification requires 75 CE hours every 5 years. IBCLC CE must include Lactation-Specific Continuing Education Recognition Points (L-CERPs) — a mandatory subcategory tracked separately from total CE hours. Underlying professional licensure (RN, dietitian, physician, or other) runs on an independent renewal cycle with content requirements separate from IBCLC CE. IBCLC 5-year counter with L-CERP tracking and underlying licensure tracked independently.',
  },
  {
    icon: Clock,
    title: 'Lactation consultant multi-credential renewal calendar',
    desc: '"IBCLC — IBLCE, 75 CE/5 years including L-CERPs." "Underlying licensure CE — RN biennial or profession-specific cycle." "L-CERP mandatory category — tracked within 75-hour total." "Annual breastfeeding medicine competency update." "International Code of Marketing training — IBLCE requirement." "ILCA membership — annual." All lactation consultant credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'L-CERP mandatory category and IBLCE ethics analytics',
    desc: 'IBCLC recertification requires L-CERPs within the 75-hour total — general nursing or healthcare CE does not automatically satisfy the L-CERP requirement. IBLCE also requires completion of specific ethics CE within each recertification period, tracked separately from L-CERP hours. IBCLCs must document familiarity with the International Code of Marketing of Breast-milk Substitutes — a separate IBLCE requirement. Each mandatory category tracked independently within the IBCLC CE framework.',
  },
  {
    icon: Users,
    title: 'ILCA, ABM, and lactation professional involvement',
    desc: '"ILCA Annual Conference — summer." "Academy of Breastfeeding Medicine Annual Meeting." "IBLCE exam prep CE." "Hospital-based lactation consultant competency updates." "Premature infant breastfeeding and NICU lactation CE." "Community health lactation and peer counselor training CE." "Donor human milk banking CE — HMBANA standards." All lactation professional development on calendar. ILCA and ABM conference CE tagged by IBCLC and L-CERP applicability.',
  },
]

const LC_WORKFLOW = [
  { time: 'Annual planning', action: 'IBCLC 5-year 75-CE pace (annualized to 15 CE/year), L-CERP mandatory category pace, underlying licensure CE cycle, ethics CE requirement, International Code of Marketing training, ILCA Annual Conference, and ILCA membership all loaded in January. IBCLC cumulative counter, L-CERP subcategory counter, and underlying licensure CE tracked independently.' },
  { time: 'CE completion', action: '"ILCA-approved L-CERP — late preterm infant feeding: readiness assessment, supplementation decision framework, and maternal milk volume support, 2 L-CERP." L-CERP category counter updates (cumulative toward mandatory requirement). IBCLC total CE counter also updates. Underlying licensure CE updates separately if the state accepts lactation-specific CE for that license type.' },
  { time: 'Ethics CE', action: '"IBLCE ethics CE — professional ethics in lactation consulting practice, 1 CE." IBLCE ethics CE placed as a separate mandatory requirement with independent tracking within the IBCLC 5-year recertification period. Ethics requirement completion tracked distinctly from total CE hours and L-CERP hours. Ethics CE placed with its own completion milestone separate from total CE accumulation.' },
  { time: 'Code training', action: '"International Code of Marketing of Breast-milk Substitutes — IBLCE familiarity documentation." International Code training placed as an IBLCE recertification requirement. IBCLC recertification requires documented familiarity with the WHO International Code of Marketing — separate from CE hours. Annual refresher placed as a reminder to verify compliance documentation is current and practice policies align with Code principles.' },
  { time: 'Renewal audit', action: 'Analytics: IBCLC CE on pace (cumulative toward 75/5yr)? L-CERP mandatory category satisfied? Ethics CE completed? International Code documentation current? Underlying licensure CE adequate? ILCA membership active? Complete lactation consultant credential audit 90 days before IBCLC recertification deadline. IBLCE, underlying licensure board, and institutional documentation maintained separately.' },
]

export default function ForLactationConsultantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Lactation Consultants"
        title={
          <>
            IBCLC certification and underlying licensure maintained.
            <br />
            <em className="not-italic text-gold">L-CERPs and ethics CE never short.</em>
          </>
        }
        lede="International Board Certified Lactation Consultants manage IBLCE IBCLC recertification with 75 CE hours over 5 years including mandatory L-CERP lactation-specific hours and separate ethics CE requirements, underlying professional licensure on an independent cycle, IBLCE International Code of Marketing familiarity documentation, and professional development simultaneously. Momenties tracks CE by lactation credential with mandatory category analytics, surfaces renewal deadlines 90 days early, and manages the full IBCLC credential calendar in one view."
        crumbs={[{ label: 'For Lactation Consultants' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How lactation consultants use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for lactation consultant credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Lactation consultant credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every IBCLC cycle, L-CERP requirement, and ethics obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {LC_WORKFLOW.map((step, i) => (
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
                &ldquo;IBCLC recertification looks like 75 hours over 5 years — manageable. What I didn&apos;t appreciate until my first renewal was that not all CE counts. I need L-CERPs specifically, not just any health CE. Then there&apos;s the ethics CE that tracks separately from the L-CERPs. And I&apos;m also an RN, so my state nursing license renews every 2 years completely independently. I was tracking my RN CE in the state portal and my IBCLC CE in the IBLCE system and my L-CERP category on a spreadsheet. Three separate systems for one job. Momenties gives me one view with separate counters — total CE, L-CERPs, ethics, and RN licensure all visible at once.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Jennifer W., RN, IBCLC</div>
                  <div className="text-xs text-muted-foreground">Lactation consultant, mother-baby unit and outpatient lactation clinic</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All lactation consultant credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'IBLCE IBCLC recertification CE — 75 hours/5 years',
                'L-CERP mandatory category — lactation-specific CE hours',
                'IBLCE ethics CE — separate mandatory requirement',
                'Underlying licensure CE — varies by profession (RN, RD, etc.)',
                'International Code of Marketing familiarity documentation',
                'Annual breastfeeding medicine competency update',
                'ILCA membership renewal — annual',
                'ILCA and ABM conference CE planning by IBCLC and L-CERP applicability',
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
        title="IBCLC certification and underlying licensure maintained."
        subtitle="CE tracking with L-CERP category analytics, ethics CE tracking, International Code documentation, and lactation professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
