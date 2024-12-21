import { Metadata } from 'next'
import SustainabilityContent from '@/components/SustainabilityContent'

export const metadata: Metadata = {
  title: 'Sustainability at Freshmark Foods - Our Commitment to the Environment',
  description: 'Learn about Freshmark Foods\' commitment to sustainability, our environmental initiatives, and how we\'re working towards a greener future in fruit processing and distribution.',
  keywords: 'sustainability, environmental initiatives, sustainable sourcing, eco-friendly practices, food industry sustainability',
}

export default function SustainabilityPage() {
  return (
    <main>
      <SustainabilityContent />
    </main>
  )
}

