import { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Freshmark Foods - Our Story and Mission',
  description: 'Learn about Freshmark Foods, our history, mission, and commitment to providing high-quality fruit products and services in South Africa.',
}

export default function AboutPage() {
  return (
    <main>
      <AboutContent />
      <Footer/>
    </main>
  )
}

