import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'

export const metadata: Metadata = {
  title: 'Terms of Service — Momenties',
  description: 'The terms that govern your use of Momenties. Plain language, not legal theatre.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service — Momenties',
    description: 'The rules of the road for using Momenties.',
    url: '/terms',
    type: 'website',
  },
}

const SECTIONS = [
  {
    id: 'acceptance',
    title: '1. Acceptance of terms',
    body: [
      'By accessing or using Momenties ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, you may not access the Service.',
      'These Terms apply to all visitors, users, and others who access or use the Service.',
    ],
  },
  {
    id: 'accounts',
    title: '2. Accounts',
    body: [
      'When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password you use to access the Service and for any activities under your account.',
      'You must notify us immediately upon becoming aware of any breach of security or unauthorised use of your account. We will not be liable for any loss resulting from someone else using your password, with or without your knowledge.',
    ],
  },
  {
    id: 'service',
    title: '3. The Service',
    body: [
      'Momenties provides an AI-powered calendar management service that allows you to create, manage, and sync calendar events using natural language, voice, and image inputs.',
      'The Service includes a free tier and paid subscription tiers ("Pro" and "Team"). Features available to you depend on your subscription plan. We reserve the right to modify the features included in each plan with reasonable notice.',
      'We reserve the right to withdraw or amend the Service, and any service or material we provide via the Service, in our sole discretion without notice. We will not be liable if, for any reason, all or any part of the Service is unavailable at any time.',
    ],
  },
  {
    id: 'payments',
    title: '4. Payments and subscriptions',
    body: [
      'Paid subscriptions are billed monthly or annually as selected at purchase. All payments are processed securely via Stripe. We do not store your payment card details.',
      'Subscriptions automatically renew unless cancelled before the renewal date. You may cancel at any time from your account settings or by contacting support. Cancellation takes effect at the end of the current billing period.',
      'We offer a 30-day money-back guarantee on all paid plans. To request a refund, contact support within 30 days of your payment. See our Refund Policy for details.',
    ],
  },
  {
    id: 'ip',
    title: '5. Intellectual property',
    body: [
      'The Service and its original content, features, and functionality are and will remain the exclusive property of Momenties, Inc. and its licensors. The Service is protected by copyright, trademark, and other laws.',
      'Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.',
      'You retain all rights to the data and content you input into the Service. You grant us a limited licence to process your content solely for the purpose of providing the Service to you.',
    ],
  },
  {
    id: 'prohibited',
    title: '6. Prohibited uses',
    body: [
      'You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:',
      '(a) In any way that violates any applicable national or international law or regulation. (b) To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material. (c) To impersonate any person or entity, or falsely state or misrepresent your affiliation with a person or entity. (d) To engage in any conduct that restricts or inhibits anyone\'s use or enjoyment of the Service. (e) To attempt to gain unauthorised access to, interfere with, damage, or disrupt any parts of the Service or any server, computer, or database connected to the Service.',
    ],
  },
  {
    id: 'thirdparty',
    title: '7. Third-party integrations',
    body: [
      'The Service integrates with third-party services including Google Calendar, Apple Calendar (CalDAV), Google Gemini AI, and Deepgram voice transcription. Your use of those services is governed by their respective terms and privacy policies.',
      'We are not responsible for the practices of those third-party services. We encourage you to read their terms before connecting them to Momenties.',
    ],
  },
  {
    id: 'disclaimer',
    title: '8. Disclaimer of warranties',
    body: [
      'THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.',
      'We do not warrant that the Service will be uninterrupted, timely, secure, or error-free, or that the results obtained from using the Service will be accurate or reliable.',
    ],
  },
  {
    id: 'liability',
    title: '9. Limitation of liability',
    body: [
      'TO THE MAXIMUM EXTENT PERMITTED BY LAW, MOMENTIES, INC. AND ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE.',
      'Our liability to you for any cause whatsoever, regardless of the form of the action, will at all times be limited to the amount you paid us for the Service in the 12 months preceding the claim.',
    ],
  },
  {
    id: 'governing',
    title: '10. Governing law',
    body: [
      'These Terms shall be governed and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions.',
      'Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will continue in force.',
    ],
  },
  {
    id: 'changes',
    title: '11. Changes to terms',
    body: [
      'We reserve the right to modify these Terms at any time. We will provide reasonable notice of changes by updating the "Last updated" date and, for material changes, sending an email notification to registered users.',
      'Your continued use of the Service after any changes constitutes acceptance of those changes.',
    ],
  },
  {
    id: 'contact',
    title: '12. Contact',
    body: [
      'If you have any questions about these Terms, please contact us at legal@momenties.app or through our Contact page.',
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Terms of Service
          </>
        }
        lede="The rules that govern your use of Momenties. We've written them to be readable, not impenetrable. Last updated April 12, 2026."
        crumbs={[{ label: 'Legal' }, { label: 'Terms' }]}
      />

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-12 pb-6 border-b border-border">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs font-mono text-muted-foreground hover:text-gold transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>

          <div className="space-y-12">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.id} delay={i * 20}>
                <div id={s.id} className="scroll-mt-24">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4">{s.title}</h2>
                  <div className="space-y-3">
                    {s.body.map((p, j) => (
                      <p key={j} className="text-sm text-muted-foreground leading-relaxed">{p}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-xs font-mono text-muted-foreground/60">Last updated: April 12, 2026</p>
            <div className="flex gap-5">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-gold transition-colors">Privacy policy →</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-gold transition-colors">Contact us →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
