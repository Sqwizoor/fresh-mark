"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ProductsHero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/fruit.jpg"
        alt="Freshmark Foods Products"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white max-w-4xl px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400"
        >
          Our Premium Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-10 text-gray-200"
        >
          Discover the Freshmark difference in every fruit solution
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#3B332E] to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="#product-range">Explore Our Range</a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

