'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

const services = [
  {
    title: 'Custom Formulations',
    description: 'We work closely with you to develop unique fruit-based solutions tailored to your specific needs.',
    features: [
      'Collaborative development process',
      'Expertise in flavor profiling',
      'Scalable from concept to production',
    ],
  },
  {
    title: 'Technical Support',
    description: 'Our team of experts is always ready to assist you with any technical queries or challenges.',
    features: [
      '24/7 support availability',
      'On-site troubleshooting',
      'Product optimization assistance',
    ],
  },
  {
    title: 'Quality Assurance',
    description: 'We maintain strict quality control measures to ensure the highest standards in all our products.',
    features: [
      'Rigorous testing protocols',
      'Compliance with international standards',
      'Traceability from source to delivery',
    ],
  },
  {
    title: 'Sustainable Sourcing',
    description: 'We are committed to environmentally friendly practices and responsible sourcing of our raw materials.',
    features: [
      'Partnerships with local farmers',
      'Eco-friendly packaging options',
      'Reduced carbon footprint initiatives',
    ],
  },
]

export default function ServicesContent() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Our Services
        </motion.h1>
        <p className="text-lg text-center mb-12">
          At Freshmark Foods, we offer a comprehensive range of services to support your business needs. From custom formulations to technical support, we're here to ensure your success.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

