"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    title: "Fruit Juices",
    image: "/new/juice3.png",
    description: "100% natural and pure, with no added preservatives or flavorings.",
    details: [
      "Available in various fruit flavors",
      "Suitable for beverages, smoothies, and culinary applications",
      "Rich in vitamins and antioxidants",
    ],
  },
  {
    title: "Fruit Purees",
    image: "/new/juice1.png",
    description: "Made from 100% fresh fruit, with no added sugars or preservatives.",
    details: [
      "Smooth consistency for easy incorporation",
      "Ideal for bakery, confectionery, and dairy products",
      "Retains natural fruit flavor and color",
    ],
  },
  {
    title: "Fruit Sauces",
    image: "/new/source.png",
    description: "Versatile fruit-based sauces for various culinary applications.",
    details: [
      "Perfect for dessert toppings and savory dishes",
      "Customizable sweetness and consistency",
      "Made with premium quality fruits",
    ],
  },
  {
    title: "Dressings",
    image: "/new/juice8.png",
    description: "Fresh and tasty ingredients with many health benefits for all your salad dressing needs.",
    details: [
      "Wide range of flavors available",
      "Made with natural ingredients",
      "Suitable for retail and food service industries",
    ],
  },
]

export default function ProductsContent() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          Our Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Discover our range of high-quality fruit products, designed to meet the diverse needs of food and beverage
          manufacturers.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-64">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.details.map((detail, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-200">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/products">
                    <Button className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

