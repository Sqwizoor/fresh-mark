import { motion } from 'framer-motion'
import Link from 'next/link'

const newsItems = [
  {
    title: 'The Benefits of Private Labelling',
    excerpt: 'Discover how private labelling can help your business grow and stand out in the market.',
    link: '/news/benefits-of-private-labelling'
  },
  {
    title: 'The Importance of Quality Control in Fruit Processing',
    excerpt: 'Learn about our rigorous quality control measures and why they matter for your products.',
    link: '/news/quality-control-in-fruit-processing'
  },
  {
    title: 'Freshmark Foods Expands Contract Packing Services',
    excerpt: 'Were excited to announce the expansion of our contract packing capabilities.',
    link: '/news/expanded-contract-packing-services'
  }
]

export default function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          News and Updates
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="mb-4">{item.excerpt}</p>
              <Link href={item.link} className="text-blue-600 hover:underline">
                Read more
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/news" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Read More News and Updates
          </Link>
        </div>
      </div>
    </section>
  )
}

