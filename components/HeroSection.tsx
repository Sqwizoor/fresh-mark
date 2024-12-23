'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    image: '/orange.jpg',
    headline: 'The Fresh Difference',
    subheading: 'Experience the best of nature, perfected by us.',
    cta: { text: 'Learn More', link: '/about' }
  },
  {
    image: '/ffd1.jpg',
    headline: 'Quality Products, Customized Solutions',
    subheading: 'From processing to packaging, weve got you covered.',
    cta: { text: 'Learn More', link: '/products' }
  },
  {
    image: '/cc2.webp',
    headline: 'Your Partner in Fruit Processing and Distribution',
    subheading: 'Trust us to deliver exceptional quality, freshness, and innovation.',
    cta: { text: 'Learn More', link: '/services' }
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[60vh]">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].headline}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-80" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slides[currentSlide].headline}</h1>
            <p className="text-xl md:text-2xl mb-8">{slides[currentSlide].subheading}</p>
            <Link href={slides[currentSlide].cta.link} className="bg-[#8DC63F] text-white px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300">
              {slides[currentSlide].cta.text}
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

