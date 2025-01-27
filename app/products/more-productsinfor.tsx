"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Shield, Leaf, Award, Sprout } from "lucide-react"

const certifications = [
  {
    title: "ISO 14001:2015",
    description:
      "Environmental Management System certification, demonstrating our commitment to environmental responsibility.",
    icon: Leaf,
  },
  {
    title: "ISO 22000:2018",
    description: "Food Safety Management System certification, ensuring the highest standards in food safety.",
    icon: Shield,
  },
  {
    title: "FSSC 22000",
    description: "Food Safety System Certification, recognized by the Global Food Safety Initiative (GFSI).",
    icon: Award,
  },
  {
    title: "GAP (Good Agricultural Practices)",
    description: "Ensuring that our sourcing practices align with sustainable and responsible agricultural methods.",
    icon: Sprout,
  },
]

export default function ProductContent() {
  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900">
      <div className="container mx-auto px-2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 h-[350px]"
        >
          <Image
            src="/new/bb.png"
            alt="Quality and Safety"
            layout="fill"
            objectFit="cover"
            className="rounded-xl "
          />
           <div className="absolute inset-0 bg-black/70 rounded-xl" />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center p-4">
            <div className="">
              <h1 className="text-2xl md:text-6xl font-bold text-white mb-4">Quality and Safety</h1>
              <p className="text-xl text-white opacity-80 leading-8 w-full mx-auto">
                At Freshmark Foods, we maintain the highest standards of quality and safety. Our state-of-the-art
                facilities and rigorous quality control processes ensure that every product meets our stringent
                standards.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            Certifications and Compliance
          </h2>
          <p className="text-lg text-center mb-8 text-gray-700 dark:text-gray-300">
            We maintain various certifications and compliance standards to ensure our commitment to sustainability and
            quality:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 backdrop-filter backdrop-blur-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <cert.icon className="w-6 h-6 text-green-500" />
                      <span>{cert.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            Get in Touch
          </h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            Ready to learn more about our sustainability initiatives or discuss how we can support your sustainability
            goals? Contact us today!
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <a href="/contact">Contact Us</a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

