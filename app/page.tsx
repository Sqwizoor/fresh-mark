"use client"

import HeroSection from '@/components/HeroSection'
import WelcomeSection from '@/components/WelcomeSection'
import FeaturedSection from '@/components/FeaturedSection'
import NewsSection from '@/components/NewsSection'
import FAQSection from '@/components/FAQSection'
import FloatingIcons from './about/FixedButtons'


export default function Home() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <FeaturedSection />
      <NewsSection />
      <FloatingIcons/>
      <FAQSection />
    </main>
  )
}

