'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProductsHero() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/fruit.jpg"
        alt="Freshmark Foods Products"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300" />
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Our Premium Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Discover the Freshmark difference in every fruit solution
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#product-range"
            className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300"
          >
            Explore Our Range
          </a>
        </motion.div>
      </div>
    </section>
  )
}

