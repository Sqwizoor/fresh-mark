"use client"

import HeroSection from '@/components/HeroSection'
import WelcomeSection from '@/components/WelcomeSection'
import FeaturedSection from '@/components/FeaturedSection'
import FAQSection from '@/components/FAQSection'
import FloatingIcons from './about/FixedButtons'
import ProductsContent from '@/components/ProductsContent'
import Footer from '@/components/Footer'


export default async function Home() {



  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <ProductsContent/>
      <FeaturedSection />
    <FloatingIcons/>
      <FAQSection />
      <Footer/>
    </main>
  )
}

