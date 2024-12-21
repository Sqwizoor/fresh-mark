import { Metadata } from 'next'
import TermsOfUseContent from '@/components/TermsOfUseContent'

export const metadata: Metadata = {
  title: 'Terms of Use - Freshmark Foods',
  description: 'Read about Freshmark Foods\' terms of use for our website and services.',
}

export default function TermsOfUsePage() {
  return (
    <main>
      <TermsOfUseContent />
    </main>
  )
}

