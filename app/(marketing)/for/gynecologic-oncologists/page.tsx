import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Gynecologic Oncologists — ABOG MOC CME renewal, gynecologic oncology credential management',
  description:
    'Gynecologic oncologists manage ABOG general obstetrics and gynecology primary MOC with gynecologic oncology subspecialty content, ABOG gynecologic oncology subspecialty certification on a 6-year examination cycle, annual chemotherapy administration CE, ACLS 2-year renewal, state medical license biennial CME, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full gynecologic oncologist credential calendar.',
  alternates: { canonical: '/for/gynecologic-oncologists' },
  openGraph: {
    title: 'Momenties for Gynecologic Oncologists',
    description: 'ABOG MOC CME renewal, gynecologic oncology credential management.',
    url: '/for/gynecologic-oncologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABOG OB/GYN MOC and gynecologic oncology subspecialty independently',
    desc: 'Gynecologic oncologists hold ABOG general obstetrics and gynecology primary certification under continuous MOC and ABOG gynecologic oncology subspecialty certification on a 6-year examination cycle — two ABOG credentials with different content requirements. ABOG gynecologic oncology subspecialty requires oncology-specific content including ovarian cancer surgical staging, cervical cancer management (radical hysterectomy, chemoradiation), endometrial cancer treatment algorithms, vulvar and vaginal malignancies, PARP inhibitor and checkpoint inhibitor therapy, and minimally invasive oncologic surgery. ABOG general OB/GYN MOC requires broader content.',
  },
  {
    icon: Clock,
    title: 'Gynecologic oncologist multi-credential renewal calendar',
    desc: '"ABOG OB/GYN MOC — continuous CME." "ABOG gynecologic oncology subspecialty — 6-year examination cycle, oncology content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "ACLS — 2-year renewal." "Annual chemotherapy administration and toxicity management CE." "Annual HIPAA and research compliance training (if clinical trials PI)." "SGO membership — annual." "ASCO membership — annual." All gynecologic oncologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ABOG 6-year examination countdown and annual chemotherapy CE analytics',
    desc: 'ABOG gynecologic oncology subspecialty certification requires examination every 6 years — a cycle that disappears from active planning between certification and year 4, then resurfaces as an urgent deadline. The ABOG gynecologic oncology subspecialty examination covers surgical oncology, medical oncology, and radiation oncology content — preparation requires 12-18 months. Annual chemotherapy administration CE is required by hospital credentialing programs and institutional pharmacy committees for physicians who prescribe or administer cytotoxic chemotherapy — chemotherapy ordering privileges at most cancer centers require documented annual chemotherapy CE separate from board MOC.',
  },
  {
    icon: Users,
    title: 'SGO, ASCO, and gynecologic oncology professional involvement',
    desc: '"SGO Annual Meeting — March." "ASCO Annual Meeting — june." "IGCS Biennial Meeting (International Gynecologic Cancer Society)." "ESGO Annual Meeting (European Society of Gynaecological Oncology)." "Ovarian cancer CE — PARP inhibitor maintenance therapy sequencing, BRCA/HRD testing algorithms, bevacizumab in frontline and recurrent settings." "Cervical cancer CE — pembrolizumab in persistent/recurrent cervical cancer, tisotumab vedotin approval." "Endometrial cancer CE — MSI-H/dMMR immune checkpoint inhibitor combinations, HER2 targeted therapy in serous histology." "Minimally invasive oncologic surgery CE — robotic radical hysterectomy, sentinel lymph node mapping." All gynecologic oncology professional development on calendar. SGO and ASCO conference CME tagged by ABOG primary and subspecialty applicability.',
  },
]

const GYNCONC_WORKFLOW = [
  { time: 'Annual planning', action: 'ABOG OB/GYN MOC CME pace (gynecologic oncology content weighted), ABOG gynecologic oncology subspecialty CE pace with 6-year examination target tracked, state medical license biennial CME, DEA 3-year renewal, ACLS 2-year cycle, annual chemotherapy CE, annual research compliance training (if PI), SGO Annual Meeting, ASCO Annual Meeting, and SGO and ASCO memberships all loaded in January. ABOG primary counter, gynecologic oncology subspecialty counter, and state licensure CME tracked independently. 6-year examination countdown displayed with 18-month alert.' },
  { time: 'CE completion', action: '"ASCO-approved — PARP inhibitor maintenance therapy in ovarian cancer: olaparib versus niraparib versus rucaparib biomarker selection criteria, BRCA1/2 versus HRD-positive versus all-comers evidence review, duration of treatment in complete response, and cardiac toxicity monitoring protocols, 2 CME, AMA PRA Category 1, ABOG MOC applicable, ABOG gynecologic oncology applicable — ovarian cancer domain." ABOG primary counter updates. Gynecologic oncology subspecialty counter updates. State licensure CME updates.' },
  { time: 'Chemo CE', action: '"Annual chemotherapy administration CE — institutional pharmacy committee requirement: anti-emetic regimen update per ASCO/MASCC 2024 guidelines, carboplatin/paclitaxel extravasation management, bevacizumab thrombotic risk stratification and dose-holding criteria, 3 CME, Q1." Annual chemotherapy CE placed Q1 before institutional pharmacy committee annual credentialing review. Hospital chemotherapy prescribing privileges require documented annual CE — separate from ABOG MOC and required regardless of board renewal timing.' },
  { time: 'Clinical trials', action: '"Annual GCP and research compliance training — IRB requirement for clinical trials principal investigator: ICH E6 R3 Good Clinical Practice update, FDA investigational drug application safety reporting timeline requirements, informed consent documentation standards, 3 CE, Q1." Annual research compliance training placed for gynecologic oncologists serving as clinical trials PIs. IRB annual renewal for active clinical trials requires current GCP training — typically a 3-year certification that requires renewal and is separate from board credentials.' },
  { time: 'Renewal audit', action: 'Analytics: ABOG OB/GYN MOC CME on pace? ABOG gynecologic oncology subspecialty content current? State medical license CME complete? DEA valid? ACLS current? Annual chemotherapy CE documented? GCP training current (if PI)? SGO membership active? ABOG 6-year examination date tracked? Complete gynecologic oncologist credential audit 90 days before earliest renewal.' },
]

export default function ForGynecologicOncologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Gynecologic Oncologists"
        title={
          <>
            ABOG OB/GYN MOC and gynecologic oncology subspecialty maintained.
            <br />
            <em className="not-italic text-gold">6-year examination tracked. Chemotherapy CE documented.</em>
          </>
        }
        lede="Gynecologic oncologists manage ABOG general OB/GYN continuous MOC with gynecologic oncology subspecialty content, ABOG gynecologic oncology subspecialty certification on a 6-year examination cycle requiring an 18-month preparation window, state medical license biennial CME, DEA 3-year registration, ACLS 2-year renewal, annual chemotherapy administration CE for institutional prescribing privileges, GCP training for clinical trials PIs, and professional development at SGO and ASCO simultaneously. Momenties tracks CME by gynecologic oncologist credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar."
        crumbs={[{ label: 'For Gynecologic Oncologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How gynecologic oncologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for gynecologic oncologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Gynecologic oncologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABOG OB/GYN MOC, gynecologic oncology 6-year examination cycle, and annual institutional chemotherapy credentialing requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {GYNCONC_WORKFLOW.map((step, i) => (
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
                &ldquo;The ABOG gynecologic oncology subspecialty is a 6-year written examination. My ABOG OB/GYN continuous MOC runs alongside it with different content requirements. The 6-year subspecialty cycle is the one that people in my field consistently underestimate — you get certified, 3 years pass, and then suddenly you&apos;re 2 years out from the examination with no preparation. My institution requires annual chemotherapy CE for prescribing privileges — that&apos;s a pharmacy committee credentialing requirement that has nothing to do with my ABOG credentials. I run 4 active clinical trials so I need current GCP training for each active protocol. ACLS 2-year renewal. State license biennial. DEA 3-year. The SGO Annual Meeting gives me MFM subspecialty CE. Before Momenties I had 6 different places where I tracked credentials and every Q4 I would find one that had lapsed.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">P</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Patricia D., MD, PhD</div>
                  <div className="text-xs text-muted-foreground">Gynecologic oncologist and clinical trials principal investigator, NCI-designated cancer center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All gynecologic oncologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABOG OB/GYN MOC CME — continuous, gynecologic oncology content weighted',
                'ABOG gynecologic oncology subspecialty — 6-year examination cycle countdown',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal',
                'Annual chemotherapy administration CE — institutional pharmacy credentialing',
                'Annual GCP research compliance training — IRB requirement for clinical trials PIs',
                'SGO and ASCO conference CME planning by ABOG primary and subspecialty applicability',
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
        title="ABOG OB/GYN MOC and gynecologic oncology subspecialty maintained."
        subtitle="CME tracking for dual ABOG certification, 6-year examination countdown, chemotherapy credentialing CE, GCP training, and gynecologic oncology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
