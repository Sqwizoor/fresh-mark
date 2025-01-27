"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const services = [
  {
    title: "Custom Formulations",
    description: "We work closely with you to develop unique fruit-based solutions tailored to your specific needs.",
    features: [
      "Collaborative development process",
      "Expertise in flavor profiling",
      "Scalable from concept to production",
    ],
  },
  {
    title: "Technical Support",
    description: "Our team of experts is always ready to assist you with any technical queries or challenges.",
    features: ["24/7 support availability", "On-site troubleshooting", "Product optimization assistance"],
  },
  {
    title: "Quality Assurance",
    description: "We maintain strict quality control measures to ensure the highest standards in all our products.",
    features: [
      "Rigorous testing protocols",
      "Compliance with international standards",
      "Traceability from source to delivery",
    ],
  },
  {
    title: "Sustainable Sourcing",
    description:
      "We are committed to environmentally friendly practices and responsible sourcing of our raw materials.",
    features: [
      "Partnerships with local farmers",
      "Eco-friendly packaging options",
      "Reduced carbon footprint initiatives",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export default function ServicesContent() {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl  mb-16 text-gray-300 max-w-3xl mx-auto"
        >
          At Freshmark Foods, we offer a comprehensive range of services to support your business needs. From custom
          formulations to technical support, we're here to ensure your success.
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-gray-300">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <CheckCircle className="text-teal-400 h-5 w-5" />
                        <span className="text-gray-200">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

