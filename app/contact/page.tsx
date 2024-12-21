import { Metadata } from 'next'
import ContactContent from '@/components/ContactContent'

export const metadata: Metadata = {
  title: 'Contact Freshmark Foods - Get in Touch',
  description: 'Contact Freshmark Foods for inquiries about our products, services, or partnership opportunities. Were here to assist you with your fruit-based ingredient needs.',
}

export default function ContactPage() {
  return (
    <main>
      <ContactContent />
    </main>
  )
}

