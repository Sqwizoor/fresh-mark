"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function SustainabilityContent() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Our Commitment to Sustainability
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-center mb-12 max-w-3xl mx-auto"
        >
          At Freshmark Foods, we&apos;re committed to reducing our environmental
           footprint and promoting sustainable practices throughout our operations.
            We believe that sustainability is essential to our business and our planet&apos;s future.
        </motion.p>

        <div className="grid md:px-[4rem] md:grid-cols-2 gap-4 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative "
          >
            <div className="relative max-h-[550px]">
              <Image
                src="/manufacturing.png"
                alt="Sustainable farming practices"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Sustainability Vision</h2>
            <p className="text-lg mb-4">
              Our vision is to be a leader in sustainable fruit processing and distribution. We&apos;re dedicated to minimizing our environmental impact, promoting eco-friendly practices, and supporting sustainable agriculture.
            </p>
            <Button asChild>
              <a href="#initiatives">Learn More About Our Initiatives</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          id="initiatives"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Environmental Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Water Conservation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We&apos;re implementing efficient irrigation systems and 
                  water-saving technologies to reduce our water usage and protect this precious resource.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Waste Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Through recycling, composting, and minimizing
                   packaging, we&apos;re significantly reducing waste across our operations.</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Sustainable Sourcing</h2>
          <p className="text-lg text-center mb-8">
            We&apos;re committed to sourcing our fruit from
             sustainable and responsible suppliers. We work 
             closely with our farmers and suppliers to promote
              environmentally friendly practices, fair labor 
              standards, and community development.
          </p>

          <div className="relative max-h-[550px]"> <Image
            src="/fruit.jpg"
            alt="Sustainable fruit sourcing"
            width={500}
            height={300}
            className="rounded-lg shadow-lg mx-auto"
          /></div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Social Responsibility</h2>
          <p className="text-lg text-center mb-8">
            We believe in giving back to our community and promoting social responsibility. We support local charities, sponsor community events, and encourage employee volunteerism.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Local Charities</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We actively support and contribute to local charities that align with our values and mission.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Community Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We sponsor and participate in community events to foster strong relationships with our local communities.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Employee Volunteerism</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We encourage and support our employees in their volunteer efforts, allowing them to make a positive impact.</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Certifications and Compliance</h2>
          <p className="text-lg text-center mb-8">
            We maintain various certifications and compliance standards to ensure our commitment to sustainability and quality:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>ISO 14001:2015</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Environmental Management System certification, demonstrating our commitment to environmental responsibility.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>ISO 22000:2018</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Food Safety Management System certification, ensuring the highest standards in food safety.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>FSSC 22000</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Food Safety System Certification, recognized by the Global Food Safety Initiative (GFSI).</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>GAP (Good Agricultural Practices)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Ensuring that our sourcing practices align with sustainable and responsible agricultural methods.</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <p className="text-lg text-center mb-8">
            Ready to learn more about our sustainability initiatives or discuss how we can support your sustainability goals? Contact us today!
          </p>
          <div className="text-center">
            <Button asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

