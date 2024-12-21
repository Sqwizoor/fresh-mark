'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const products = [
  { title: 'Fruit Juices', image: '/img/fruit-juices.jpg', description: '100% natural and pure, with no added preservatives or flavorings.' },
  { title: 'Fruit Purees', image: '/img/fruit-purees.jpg', description: 'Made from 100% fresh fruit, with no added sugars or preservatives.' },
  { title: 'Fruit Sauces', image: '/img/fruit-sauces.jpg', description: 'Versatile fruit-based sauces for various culinary applications.' },
  { title: 'Dressings', image: '/img/dressings.jpg', description: 'Fresh and tasty ingredients with many health benefits for all your salad dressing needs.' },
]

export default function ProductsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Our Products
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <p>{product.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

