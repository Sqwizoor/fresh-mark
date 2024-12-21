'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          About Freshmark Foods
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-h-[450px]"
          >
            <Image
              src="/fc.jpg"
              alt="Freshmark Foods facility"
              width={200}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-4">
              At Freshmark Foods, we're passionate about delivering exceptional quality, freshness, and innovation in raw materials and distribution. With expertise in the new age of healthy foods in the industry, we've built a reputation for reliability, flexibility, and customer satisfaction.
            </p>
            <p className="text-lg mb-4">
              Our story began with a simple goal: to provide the best possible fruit products to our customers. Over the years, we've grown and evolved to meet the changing needs of our customers, but our commitment to quality and customer satisfaction has remained unwavering.
            </p>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p>To be the leading provider of high-quality fruit products and services, while building long-term relationships with our customers and contributing to the well-being of our community.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

