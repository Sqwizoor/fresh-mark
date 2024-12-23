'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutContent() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center  text-[#8DC63F] mb-8"
        >
          About Freshmark Foods
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/jj1.jpg"
              alt="Freshmark Foods facility"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-lg mb-4">
              Freshmark Foods was founded on the principles of quality, integrity, and customer service. Our journey began with a simple goal: to provide the best possible fruit products to our customers. Over the years, we've grown and evolved to meet the changing needs of our customers, but our commitment to quality and customer satisfaction has remained unwavering.
            </p>
            <p className="text-lg">
              Today, we're proud to be a leading provider of fruit-based ingredient solutions, serving diverse industries across South Africa and beyond.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We're committed to delivering exceptional quality in every product and service we offer.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We operate with honesty, transparency, and ethics in all our business dealings.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We're constantly seeking new and better ways to serve our customers and stay ahead of the competition.</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-lg">
                Our mission is to be the leading provider of high-quality fruit products and services, while building long-term relationships with our customers and contributing to the well-being of our community.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

