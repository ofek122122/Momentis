import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Work at Momenties',
  alternates: { canonical: '/careers' },
  robots: { index: false },
}

export default function HirePage() {
  redirect('/careers')
}
