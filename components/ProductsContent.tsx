'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const products = [
  {
    title: 'Fruit Juices',
    image: '/jf.jpg',
    description: '100% natural and pure, with no added preservatives or flavorings.',
    details: [
      'Available in various fruit flavors',
      'Suitable for beverages, smoothies, and culinary applications',
      'Rich in vitamins and antioxidants',
    ],
  },
  {
    title: 'Fruit Purees',
    image: '/pp2.jpg',
    description: 'Made from 100% fresh fruit, with no added sugars or preservatives.',
    details: [
      'Smooth consistency for easy incorporation',
      'Ideal for bakery, confectionery, and dairy products',
      'Retains natural fruit flavor and color',
    ],
  },
  {
    title: 'Fruit Sauces',
    image: '/fc1.jpg',
    description: 'Versatile fruit-based sauces for various culinary applications.',
    details: [
      'Perfect for dessert toppings and savory dishes',
      'Customizable sweetness and consistency',
      'Made with premium quality fruits',
    ],
  },
  {
    title: 'Dressings',
    image: '/cc.webp',
    description: 'Fresh and tasty ingredients with many health benefits for all your salad dressing needs.',
    details: [
      'Wide range of flavors available',
      'Made with natural ingredients',
      'Suitable for retail and food service industries',
    ],
  },
]

export default function ProductsContent() {
  return (
    <div className="py-16">
      <div className=" px-4 mx-auto ">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Our Products
        </motion.h1>
        <p className="text-lg text-center mb-12">
          Discover our range of high-quality fruit products, designed to meet the diverse needs of food and beverage manufacturers.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                  <p className="mb-4">{product.description}</p>
                  <ul className="list-disc list-inside mb-4">
                    {product.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <Button>Request Sample</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

