import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Oral Medicine Specialists — ADA CE renewal, oral medicine credential management',
  description:
    'Oral medicine specialists manage state dental license biennial CE renewal, ABOM diplomate certification maintenance CE, academic faculty development requirements, AAOM membership obligations, orofacial pain board maintenance if dual-certified, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full oral medicine specialist credential calendar.',
  alternates: { canonical: '/for/oral-medicine-specialists' },
  openGraph: {
    title: 'Momenties for Oral Medicine Specialists',
    description: 'ADA CE renewal, oral medicine specialist credential management.',
    url: '/for/oral-medicine-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for state dental license and ABOM diplomate maintenance independently',
    desc: 'Oral medicine specialists hold state dental licensure requiring biennial CE — state CE requirements and approved provider standards vary by state. American Board of Oral Medicine (ABOM) diplomate certification maintenance requires separate CE with oral medicine-specific content in medical conditions affecting the oral cavity, oral mucosal diseases, and orofacial pain. Oral medicine specialists who also hold AAOP (American Academy of Orofacial Pain) board certification face a third independent CE cycle. Each state dental license and each specialty board tracked separately.',
  },
  {
    icon: Clock,
    title: 'Oral medicine specialist multi-credential renewal calendar',
    desc: '"State dental license — biennial CE, ADA CERP or AGDI-approved providers." "ABOM diplomate maintenance — oral medicine-specific CE." "AAOP orofacial pain board maintenance (if dual-certified)." "Academic faculty development requirements — institution-specific." "AAOM membership — annual." "DEA registration — 3-year (if prescribing controlled substances)." "BLS/CPR — 2-year renewal." All oral medicine credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ABOM content requirements and orofacial pain dual certification analytics',
    desc: 'ABOM diplomate maintenance requires CE content in oral medicine core domains — systemic disease manifestations in the oral cavity, oral mucosal disease management, salivary gland disorders, and burning mouth syndrome — general dental CE does not satisfy ABOM content requirements. Oral medicine specialists with dual ABOM and AAOP certification face independent CE requirements with some overlapping content (orofacial pain, TMD) and some non-overlapping content (oral mucosal disease for ABOM, sleep medicine for AAOP). Academic faculty at dental schools face institutional professional development obligations separate from specialty board CE.',
  },
  {
    icon: Users,
    title: 'AAOM, AAOP, and oral medicine professional involvement',
    desc: '"AAOM Annual Meeting — spring." "AAOP Annual Scientific Meeting." "IAOP World Congress (international)." "American Pain Society Annual Meeting." "Sjögren\'s syndrome and salivary gland disease CE." "Oral potentially malignant disorders and early detection CE." "Chronic orofacial pain and central sensitization CE." "Oral mucositis management in oncology patients CE." All oral medicine professional development on calendar. AAOM conference CE tagged by ABOM domain and state dental license applicability.',
  },
]

const OM_WORKFLOW = [
  { time: 'Annual planning', action: 'State dental license biennial CE pace, ABOM diplomate maintenance CE pace (oral medicine domain content), AAOP maintenance CE (if dual-certified), DEA 3-year renewal, BLS 2-year cycle, AAOM Annual Meeting, and AAOM membership all loaded in January. State dental license CE counter and ABOM CE tracked independently with oral medicine content requirement monitored within ABOM counter.' },
  { time: 'CE completion', action: '"AAOM-approved — oral potentially malignant disorders: dysplasia grading criteria, malignant transformation risk stratification, and surveillance protocol design for leukoplakia and erythroplakia, 2 CE, ADA CERP, ABOM applicable — oral mucosal disease domain." State dental license CE counter updates (toward biennial requirement). ABOM maintenance CE updates (oral mucosal disease domain satisfied). CE provider credentials confirmed at logging.' },
  { time: 'Orofacial pain CE', action: '"AAOP-approved — temporomandibular joint disorders: classification criteria updates, imaging protocol selection, and conservative versus interventional treatment decision-making, 1.5 CE, ABOM applicable and AAOP applicable — orofacial pain domain." Orofacial pain CE counted toward both ABOM and AAOP maintenance where content overlaps. Non-overlapping ABOM content (oral mucosal disease, salivary disorders) and non-overlapping AAOP content (sleep bruxism, sleep-related breathing disorders) tracked separately.' },
  { time: 'Academic faculty', action: '"Annual faculty development — curriculum design for case-based oral medicine education, simulation assessment, and competency-based evaluation frameworks, Q2." Academic faculty development placed as an institutional requirement for oral medicine faculty in dental schools. Faculty development covers teaching methodology and educational assessment separate from clinical specialty CE. Institutional promotion and tenure requirements may specify annual faculty development hours separate from specialty board CE.' },
  { time: 'Renewal audit', action: 'Analytics: State dental license CE on pace? ABOM oral medicine domain coverage adequate? AAOP CE current (if dual-certified)? DEA valid? BLS current? Faculty development requirements met? AAOM membership active? Complete oral medicine specialist credential audit 90 days before earliest renewal. State dental board, ABOM, AAOP, and institutional documentation maintained separately.' },
]

export default function ForOralMedicineSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Oral Medicine Specialists"
        title={
          <>
            ABOM diplomate and state dental license maintained.
            <br />
            <em className="not-italic text-gold">Orofacial pain CE tracked. Faculty obligations current.</em>
          </>
        }
        lede="Oral medicine specialists manage state dental licensure biennial CE with ADA CERP or AGDI-approved providers, ABOM diplomate maintenance CE with oral medicine-specific content domain requirements, AAOP orofacial pain board maintenance on a third independent cycle if dual-certified, DEA registration for controlled substance prescribing, academic faculty development obligations at dental school institutions, BLS 2-year renewal, and professional development at AAOM and AAOP simultaneously. Momenties tracks CE by oral medicine credential, surfaces renewal deadlines 90 days early, and manages the full oral medicine specialist credential calendar in one view."
        crumbs={[{ label: 'For Oral Medicine Specialists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How oral medicine specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for oral medicine specialist credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Oral medicine specialist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every ABOM maintenance cycle, state dental license renewal, and academic faculty obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {OM_WORKFLOW.map((step, i) => (
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
                &ldquo;I have my state dental license, my ABOM diplomate, and my AAOP board certification. My state license is biennial. ABOM maintenance requires CE that specifically covers oral medicine content — general dental CE doesn&apos;t count. AAOP has its own CE requirement with orofacial pain content. Some CE counts for both ABOM and AAOP — orofacial pain topics — but oral mucosal disease CE counts only for ABOM and sleep medicine CE counts only for AAOP. I&apos;m also faculty which means I have institutional development requirements on top of everything else. Before Momenties I had three different renewal calendars and I was never sure which CE had checked which box. Now I see all of it in one view and I know exactly where each CE landed.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Natalie S., DDS, DABOM, DAAOP</div>
                  <div className="text-xs text-muted-foreground">Oral medicine specialist, academic dental school oral medicine and orofacial pain clinic</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All oral medicine specialist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'State dental license CE — biennial, ADA CERP or AGDI-approved providers',
                'ABOM diplomate maintenance CE — oral medicine domain content',
                'AAOP orofacial pain board maintenance CE — independent cycle (if dual-certified)',
                'DEA registration renewal — 3-year (if prescribing controlled substances)',
                'BLS/CPR certification — 2-year renewal',
                'Academic faculty development requirements — institutional annual obligations',
                'AAOM membership renewal — annual',
                'AAOM and AAOP conference CE planning by ABOM and state license applicability',
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
        title="ABOM diplomate and state dental license maintained."
        subtitle="CE tracking by oral medicine domain, dual board content overlap analysis, faculty development calendar, and professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
