
"use client"
import Image from 'next/image'
import ProductsContent from '@/components/ProductsContent'
import ProductContent from './more-productsinfor'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ProductsHero from '@/components/ProductsHero'



export default function ProductsPage() {
  return (
    <main>

<ProductsHero/>

      <div className="md:text-center  px-[1rem]">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl  font-bold md:text-center mb-8"
        >
          Quality Fruits Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-center mb-12 max-w-3xl mx-auto"
        >

          At Freshmark Foods, we are committed to
          delivering innovative, high-quality raw materials that meet the evolving needs of our customers. Our product portfolio
          is designed to provide flexible solutions for food manufacturers, private labels, and foodservices.
        </motion.p>
      </div>
      <ProductsContent />

<div>
<motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">What We Do</h3>
            <ul className="space-y-4">
              {['Processing and Packaging', 'Distribution and Logistics', 'Quality Control and Assurance', 'Contract Packing', 'Private Labelling'].map((service) => (
                <li key={service} className="flex items-center">
                  <Image src="/img/checkmark.svg" alt="Checkmark" width={20} height={20} className="mr-2" />
                  {service}
                </li>
              ))}
            </ul>
            <Link href="/services" className="inline-block mt-6 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
              Explore Our Services
            </Link>
          </motion.div>
</div>

      <ProductContent />
    </main>
  )
}

