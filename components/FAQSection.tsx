"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What types of fruit products do you offer?',
    answer: 'We offer a wide range of fruit products including juices, purees, and sauces. Our products are available in various flavors and can be customized to meet your specific needs.'
  },
  {
    question: 'Do you offer private labeling services?',
    answer: 'Yes, we provide private labeling services. We can work with you to create custom packaging and branding solutions that align with your companys image and requirements.'
  },
  {
    question: 'What quality certifications do you have?',
    answer: 'We hold various certifications including HACCP, ISO 22000, and FSSC 22000. These certifications demonstrate our commitment to maintaining the highest standards of food safety and quality.'
  },
  {
    question: 'Can you handle large-scale orders?',
    answer: 'Absolutely. Our state-of-the-art facilities and efficient processes allow us to handle orders of various sizes, from small batches to large-scale production runs.'
  }
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition duration-300 rounded-lg"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-4 rounded-b-lg"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

