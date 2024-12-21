'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Emily R.',
    company: 'Food Manufacturing Co.',
    testimonial: 'Freshmark Foods has never let us down. Their produce is always fresh and their service is outstanding!',
  },
  {
    name: 'Michael B.',
    company: 'Beverage Innovations Ltd.',
    testimonial: 'I've been a customer for years, and I can confidently say that they are the best in the business.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <p className="text-lg mb-4">"{testimonial.testimonial}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

