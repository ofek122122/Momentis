import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Colon and Rectal Surgeons — ABCRS MOC CME renewal, colorectal surgeon credential management',
  description:
    'Colon and rectal surgeons manage ABCRS board certification MOC continuous CME with colorectal-specific content, ABS general surgery primary MOC on an independent cycle, state medical license biennial CME, ACLS 2-year renewal, DEA 3-year renewal, annual hospital colorectal surgery credentialing with minimum procedure volumes, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full colorectal surgeon credential calendar.',
  alternates: { canonical: '/for/colon-rectal-surgeons' },
  openGraph: {
    title: 'Momenties for Colon and Rectal Surgeons',
    description: 'ABCRS MOC CME renewal, colorectal surgeon credential management.',
    url: '/for/colon-rectal-surgeons',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABCRS and ABS general surgery MOC independently',
    desc: 'Colon and rectal surgeons hold ABS general surgery board certification and ABCRS colorectal surgery subspecialty certification — two separate boards with different MOC structures. ABCRS MOC requires colorectal-specific CE content including minimally invasive colorectal surgery, IBD management, colorectal cancer staging and surgical treatment, anorectal disorders, and pelvic floor disorders. ABS general surgery MOC requires general surgery CE on a separate content track. Both boards require continuous CME — the overlap between general surgery and colorectal surgery CME content is partial, not complete. State medical license biennial CME runs on a third independent cycle.',
  },
  {
    icon: Clock,
    title: 'Colorectal surgeon multi-credential renewal calendar',
    desc: '"ABCRS MOC — continuous CME, colorectal content." "ABS general surgery MOC — general surgery CME, independent cycle." "State medical license — biennial CME." "DEA registration — 3-year renewal." "ACLS — 2-year renewal." "Annual hospital colorectal surgery credentialing — laparoscopic/robotic colectomy, LAR, proctectomy volumes." "ASCRS membership — annual." All colorectal surgeon credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ABCRS and ABS dual MOC content overlap tracking and hospital credentialing analytics',
    desc: 'Colorectal surgery CME events often carry both ABCRS and ABS MOC credit — the dual credit applies when content falls in the intersection of general surgery and colorectal domains (intestinal surgery technique, laparoscopic approaches). CME that covers purely colorectal-specific content (sphincter-preserving rectal cancer surgery, transanal total mesorectal excision, IBD surgical decision-making) typically applies to ABCRS MOC but may not satisfy ABS general surgery content requirements. Hospital credentialing for colorectal surgical privileges reviews annual procedure volumes — minimum case thresholds for laparoscopic colectomy, low anterior resection, and IPAA vary by institution.',
  },
  {
    icon: Users,
    title: 'ASCRS, ACS, and colorectal surgery professional involvement',
    desc: '"ASCRS Annual Scientific Meeting — june." "ACS Clinical Congress — october." "United European Gastroenterology Week." "EAES Annual Congress." "Robotic and laparoscopic colorectal surgery CE." "IBD surgical decision-making and restorative proctocolectomy CE." "Colorectal cancer screening, staging, and neoadjuvant therapy CE." "Anorectal disorder and pelvic floor CE." All colorectal surgery professional development on calendar. ASCRS conference CME tagged by ABCRS and ABS applicability.',
  },
]

const CRS_WORKFLOW = [
  { time: 'Annual planning', action: 'ABCRS MOC CME pace (colorectal content), ABS general surgery MOC CME pace (general surgery content, independent cycle), state medical license biennial CME, DEA 3-year renewal, ACLS 2-year cycle, annual hospital colorectal surgery credentialing, ASCRS Annual Scientific Meeting, ACS Clinical Congress, and ASCRS membership all loaded in January. ABCRS CME counter, ABS CME counter, and state licensure CME tracked independently. Dual-credit CME events tagged at time of logging.' },
  { time: 'CE completion', action: '"ASCRS-approved — transanal total mesorectal excision (TaTME): patient selection for low rectal cancer and high BMI, purse-string technique and trocar placement, and specimen extraction and anastomotic leak prevention, 2 CME, AMA PRA Category 1, ABCRS applicable — colorectal cancer and minimally invasive surgery domains, ABS applicable." ABCRS counter updates. ABS general surgery counter updates. State licensure CME updates. Dual-credit confirmed.' },
  { time: 'Robotic CE', action: '"Annual robotic colorectal surgery CE — robotic-assisted low anterior resection: robotic docking for pelvic dissection, nerve-sparing lateral dissection technique, and robotic intracorporeal anastomosis, 2 CME, ABCRS applicable — minimally invasive colorectal surgery domain, Q2." Annual robotic technique CE placed as practice maintenance for colorectal surgeons performing robotic-assisted surgery. Robotic colorectal surgery credentialing at many institutions requires documented annual CE on robotic technique in addition to case volume thresholds.' },
  { time: 'IBD CE', action: '"Annual IBD surgical CE — restorative proctocolectomy in ulcerative colitis: pouch configuration selection, leak testing and diverting ileostomy criteria, and pouchitis management, 2 CME, ABCRS applicable — IBD surgical management domain, Q3." Annual IBD surgical CE placed for colorectal surgeons managing inflammatory bowel disease patients. IBD medical management with biologics changes annually — CE covering the interface between biologic therapy failure and surgical indication placed to capture current guidelines.' },
  { time: 'Renewal audit', action: 'Analytics: ABCRS MOC CME on pace? ABS general surgery MOC current? State medical license CME complete? DEA valid? ACLS current? Annual hospital colorectal credentialing complete? ASCRS membership active? Complete colorectal surgeon credential audit 90 days before earliest renewal. ABCRS, ABS, state board, DEA, and institutional documentation maintained separately.' },
]

export default function ForColonRectalSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Colon and Rectal Surgeons"
        title={
          <>
            ABCRS MOC and ABS general surgery maintained.
            <br />
            <em className="not-italic text-gold">Dual-credit CME tracked. Hospital credentialing documented.</em>
          </>
        }
        lede="Colon and rectal surgeons manage ABCRS subspecialty continuous MOC with colorectal-specific content, ABS general surgery primary MOC on a separate cycle with different content requirements, state medical license biennial CME, DEA 3-year registration, ACLS 2-year renewal, annual hospital colorectal surgical credentialing with laparoscopic and robotic procedure volume requirements, and professional development at ASCRS and ACS simultaneously. Momenties tracks CME by colorectal surgeon credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar in one view."
        crumbs={[{ label: 'For Colon and Rectal Surgeons' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How colon and rectal surgeons use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for colorectal surgeon credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Colorectal surgeon credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABCRS and ABS MOC cycle, dual-credit CME tracking, and annual hospital credentialing.</h2>
          </Reveal>
          <div className="space-y-3">
            {CRS_WORKFLOW.map((step, i) => (
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
                &ldquo;I have ABS general surgery certification and ABCRS colorectal surgery certification — two separate boards with separate CME requirements. The trick is that some CME counts for both and some counts for one but not the other. A colorectal cancer surgery course clearly hits ABCRS domains. A general surgery technique course hits ABS but may not satisfy ABCRS content requirements. I need to track which hours apply to which board, and I was doing it in a spreadsheet. My state license is biennial on a different cycle from both boards. I administer robotic colorectal surgery and my hospital does annual credentialing that includes minimum case volumes for robotic-assisted LAR — that&apos;s a fourth system. Momenties let me enter CME once and assign it to ABCRS, ABS, or both, which was the feature I didn&apos;t know I needed until I had it.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Michael T., MD, FACS, FASCRS</div>
                  <div className="text-xs text-muted-foreground">Colon and rectal surgeon, academic colorectal surgery and IBD program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All colorectal surgeon credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABCRS MOC CME — continuous, colorectal surgery content domains',
                'ABS general surgery MOC — independent cycle, general surgery content',
                'Dual-credit CME event tracking (ABCRS + ABS applicability)',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal',
                'Annual hospital colorectal surgery credentialing — procedure volume review',
                'ASCRS and ACS conference CME planning by ABCRS and ABS applicability',
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
        title="ABCRS and ABS MOC maintained."
        subtitle="Dual-certification CME tracking, colorectal content domain requirements, hospital credentialing, and colorectal surgery professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
