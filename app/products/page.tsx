
"use client"
import Image from 'next/image'
import ProductsContent from '@/components/ProductsContent'
import ProductContent from './more-productsinfor'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ProductsHero from '@/components/ProductsHero'
import WhatWeDoSection from './WhatWheDo'
import Footer from '@/components/Footer'



export default function ProductsPage() {
  return (
    <main>

      <ProductsHero />

      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold  mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400"
          >
            Quality Fruits Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl  mb-12 text-gray-300"
          >
            At Freshmark Foods, we are committed to delivering innovative, high-quality raw materials that meet the
            evolving needs of our customers. Our product portfolio is designed to provide flexible solutions for food
            manufacturers, private labels, and foodservices.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full" />
          </motion.div>
        </div>
      </div>
      <ProductsContent />
      <WhatWeDoSection />

      <ProductContent />
      <Footer />
    </main>
  )
}

