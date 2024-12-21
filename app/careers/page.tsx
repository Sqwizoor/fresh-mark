import { Metadata } from 'next'
import CareersContent from '@/components/CareersContent'

export const metadata: Metadata = {
  title: 'Careers at Freshmark Foods - Join Our Team',
  description: 'Explore career opportunities at Freshmark Foods. Join our team and be part of a company committed to quality, innovation, and customer satisfaction.',
}

export default function CareersPage() {
  return (
    <main>
      <CareersContent />
    </main>
  )
}

