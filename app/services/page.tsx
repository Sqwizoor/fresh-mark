import { Metadata } from 'next'
import ServicesContent from '@/components/ServicesContent'

export const metadata: Metadata = {
  title: 'Freshmark Foods Services - Custom Solutions for Your Business',
  description: 'Explore our range of services including custom formulations, technical support, and quality assurance. Learn how Freshmark Foods can support your business needs.',
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesContent />
    </main>
  )
}

