"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Package, Truck, ShieldCheck, Box, Tag } from "lucide-react"

const services = [
  {
    icon: Package,
    text: "Processing and Packaging - We ensure every product is handled with care, precision, and industry standards.",
  },
  {
    icon: Truck,
    text: "Distribution and Logistics - Timely, efficient, and reliable delivery of your goods.",
  },
  {
    icon: ShieldCheck,
    text: "Quality Control and Assurance - Strict adherence to quality benchmarks to exceed expectations.",
  },
  {
    icon: Box,
    text: "Contract Packing - Tailored solutions to suit your unique business requirements.",
  },
  {
    icon: Tag,
    text: "Private Labelling - Helping your brand shine with customized labeling solutions.",
  },
]

export default function ServiceSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/new/juice9.png"
        alt="Manufacturing Background"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        quality={100}
        priority
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto px-6 py-20 bg-black/30 backdrop-blur-sm rounded-xl"
      >
        <motion.h3
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-white text-center"
        >
          Discover What We Do
        </motion.h3>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-white max-w-3xl mx-auto mb-12 text-lg"
        >
          At the heart of our operations, we bring precision, dedication, and innovation to meet your business needs.
          Explore our wide range of services designed to elevate your brand and ensure operational excellence.
        </motion.p>
        <ul className="space-y-4 mb-12">
          {services.map((service, index) => (
            <motion.li
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg"
            >
              <div className="flex-shrink-0">
                <service.icon className="h-6 w-6 text-green-400" />
              </div>
              <span className="text-white text-base md:text-lg font-medium">{service.text}</span>
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 focus:outline-none transition duration-300"
          >
            Explore Our Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

