"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronRight, Package, Truck, ShieldCheck, Box, Tag } from "lucide-react"

const services = [
  { name: "Processing and Packaging", Icon: Package },
  { name: "Distribution and Logistics", Icon: Truck },
  { name: "Quality Control and Assurance", Icon: ShieldCheck },
  { name: "Contract Packing", Icon: Box },
  { name: "Private Labelling", Icon: Tag },
]

export default function WhatWeDoSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <div className="relative py-20 px-6 overflow-hidden">
      <Image
        src="/background-fruits.jpg"
        alt="Fruits background"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h3 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
          What We Do
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {services.map(({ name, Icon }) => (
            <motion.li
              key={name}
              className="group relative bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/80"
              onHoverStart={() => setHoveredService(name)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <div className="flex items-center space-x-4">
                <Icon className="w-8 h-8 text-teal-400" />
                <span className="text-lg text-white group-hover:text-teal-400 transition-colors duration-300">
                  {name}
                </span>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredService === name ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute right-4 bottom-4"
                initial={{ scale: 0, rotate: -90 }}
                animate={{
                  scale: hoveredService === name ? 1 : 0,
                  rotate: hoveredService === name ? 0 : -90,
                }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="w-6 h-6 text-teal-400" />
              </motion.div>
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/services" className="inline-flex items-center space-x-2">
              <span>Explore Our Services</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

