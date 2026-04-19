import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Immunologists — ABAI MOC CME renewal, allergy and immunology credential management',
  description:
    'Immunologists manage ABAI allergy and immunology board certification MOC continuous CME, ABAI internal medicine or pediatrics primary certification independent cycle, state medical license biennial CME, DEA 3-year renewal, annual immunotherapy protocol compliance CE, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full immunologist credential calendar.',
  alternates: { canonical: '/for/immunologists' },
  openGraph: {
    title: 'Momenties for Immunologists',
    description: 'ABAI MOC CME renewal, allergy and immunology credential management.',
    url: '/for/immunologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABAI allergy-immunology and primary board certification independently',
    desc: 'Immunologists certified by ABAI hold a primary board certification — either ABIM internal medicine or ABP pediatrics — and an ABAI allergy and immunology subspecialty certification, each with separate continuous MOC requirements. ABIM primary MOC requires internal medicine CME; ABAI subspecialty requires allergy/immunology content including allergen immunotherapy, anaphylaxis management, immunodeficiency, and biologics for allergic disease. Immunologists who completed pediatric training maintain ABP pediatrics primary certification on yet a different cycle. State medical license biennial CME runs independently.',
  },
  {
    icon: Clock,
    title: 'Immunologist multi-credential renewal calendar',
    desc: '"ABAI allergy/immunology MOC — continuous CME, A/I content." "ABIM internal medicine primary MOC — general IM CME." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual immunotherapy protocol update CE." "AAAAI membership — annual." "ACAAI membership — annual." All immunologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Allergen immunotherapy protocol compliance and biologic therapy update CE analytics',
    desc: 'Immunologists administering subcutaneous allergen immunotherapy (SCIT) or sublingual immunotherapy (SLIT) must comply with AAAAI/ACAAI practice parameters that are updated periodically. Annual CE covering immunotherapy protocol updates, anaphylaxis emergency preparedness, and epinephrine administration is standard practice for practices administering SCIT. Biologic therapies for severe allergic disease (dupilumab, omalizumab, mepolizumab, benralizumab) have updated prescribing guidance and monitoring requirements each cycle — CE covering biologic selection and monitoring is a practice requirement for immunologists managing these therapies in a high-volume atopic practice.',
  },
  {
    icon: Users,
    title: 'AAAAI, ACAAI, and immunology professional involvement',
    desc: '"AAAAI Annual Meeting — february." "ACAAI Annual Scientific Meeting — november." "World Allergy Organization International Scientific Conference (biennial)." "CSACI Annual Scientific Meeting (Canada)." "Anaphylaxis and epinephrine protocol CE." "Primary immunodeficiency and PIDD management CE." "Food allergy desensitization protocols CE." "Asthma biologics and step-down therapy CE." All immunology professional development on calendar. AAAAI and ACAAI conference CME tagged by ABAI and primary board (ABIM/ABP) applicability.',
  },
]

const IMMUNO_WORKFLOW = [
  { time: 'Annual planning', action: 'ABAI allergy/immunology MOC CME pace (A/I content required), ABIM or ABP primary MOC CME pace (different content requirements), state medical license biennial CME, DEA 3-year renewal, annual immunotherapy protocol update CE, AAAAI Annual Meeting, ACAAI Annual Scientific Meeting, and AAAAI and ACAAI memberships all loaded in January. ABAI subspecialty CE counter, primary MOC counter, and state licensure CME tracked independently.' },
  { time: 'CME completion', action: '"AAAAI-approved — dupilumab in chronic rhinosinusitis with nasal polyps and severe atopic dermatitis: patient selection criteria, type 2 inflammation biomarkers, and response assessment at 16 and 52 weeks, 2 CME, AMA PRA Category 1, ABAI applicable — allergic disease and biologics domain, ABIM MOC applicable." ABAI counter updates. ABIM primary counter updates. State licensure CME updates. A/I subspecialty content confirmed.' },
  { time: 'Immunotherapy CE', action: '"Annual immunotherapy protocol CE — AAAAI/ACAAI subcutaneous immunotherapy practice parameters update, anaphylaxis emergency management with epinephrine auto-injector protocol, and modified rush protocol safety documentation, 2 CME, Q1." Annual immunotherapy protocol CE placed as a practice requirement for immunologists administering SCIT. Practices administering allergen immunotherapy should have documented annual staff and physician CE on anaphylaxis management and emergency response — placed as a standing Q1 requirement.' },
  { time: 'Biologic update', action: '"Annual biologic therapy CE — IL-4/IL-13 pathway inhibition: dupilumab patient selection for asthma, CRSwNP, and atopic dermatitis; omalizumab anti-IgE therapy in chronic spontaneous urticaria; tezepelumab TSLP inhibition in severe asthma, 2 CME, Q2." Annual biologic therapy CE placed for immunologists managing patients on type 2 inflammation biologics. FDA label updates, new indications, and monitoring guidance change annually — CE covering the current biologic landscape placed mid-year to capture approvals from the prior 12 months.' },
  { time: 'Renewal audit', action: 'Analytics: ABAI allergy/immunology MOC CME on pace? ABIM or ABP primary MOC current? State medical license CME complete? DEA valid? Immunotherapy protocol CE documented? AAAAI and ACAAI memberships active? Complete immunologist credential audit 90 days before earliest renewal. ABAI, primary board, state board, and DEA documentation maintained separately.' },
]

export default function ForImmunologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Immunologists"
        title={
          <>
            ABAI MOC and primary board maintained.
            <br />
            <em className="not-italic text-gold">Immunotherapy CE documented. Biologics update tracked.</em>
          </>
        }
        lede="Immunologists manage ABAI allergy and immunology subspecialty continuous MOC with A/I-specific content, ABIM internal medicine or ABP pediatrics primary board certification on a separate MOC cycle, state medical license biennial CME, DEA 3-year registration, annual allergen immunotherapy protocol compliance CE for SCIT practices, annual biologic therapy updates for patients on type 2 inflammation inhibitors, and professional development at AAAAI and ACAAI simultaneously. Momenties tracks CME by immunologist credential, surfaces renewal deadlines 90 days early, and manages the full immunologist credential calendar in one view."
        crumbs={[{ label: 'For Immunologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How immunologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for immunologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Immunologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABAI MOC cycle, primary board renewal, and annual immunotherapy protocol update.</h2>
          </Reveal>
          <div className="space-y-3">
            {IMMUNO_WORKFLOW.map((step, i) => (
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
                &ldquo;I have ABAI certification and ABIM internal medicine certification — two separate boards, two separate MOC requirements, two separate content tracks. ABAI wants allergy/immunology content; ABIM wants general internal medicine CME. The same educational event may count for one and not the other. I administer SCIT in my practice, which means I need documented annual training on anaphylaxis management and emergency protocols — that&apos;s separate from both boards. The biologic space in allergy is moving fast: three new FDA approvals in 24 months across four different cytokine pathways. I need annual CE just to stay current with prescribing. My state license is biennial. DEA is 3 years. Momenties is the first calendar that let me separate my ABAI CE from my ABIM CE and still see them both in one view.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">C</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Catherine L., MD</div>
                  <div className="text-xs text-muted-foreground">Allergist-immunologist, academic allergy, asthma, and clinical immunology program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All immunologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABAI allergy/immunology subspecialty MOC — A/I content domain tracking',
                'ABIM internal medicine or ABP pediatrics primary MOC — independent cycle',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual immunotherapy protocol CE — SCIT anaphylaxis management',
                'Annual biologic therapy update CE — type 2 inflammation pathway monitoring',
                'AAAAI and ACAAI membership renewal — annual',
                'AAAAI and ACAAI conference CME planning by ABAI and primary board applicability',
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
        title="ABAI MOC and primary board maintained."
        subtitle="CME tracking for dual ABAI and ABIM/ABP certification, immunotherapy protocol CE, biologic therapy updates, and professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
