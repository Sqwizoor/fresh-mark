import { motion } from 'framer-motion'
import ProductsContent from './ProductsContent'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedSection() {
  return (
    <section className="py-16">
      <div className=" mx-auto ">
       
        <div className="grid gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
           
           <ProductsContent/>
          </motion.div>
         
        </div>
      </div>
      <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mx-auto px-[2rem]"
          >
            <h3 className="text-2xl font-semibold mb-6">What We Do</h3>
            <ul className="space-y-4">
              {['Processing and Packaging', 'Distribution and Logistics', 'Quality Control and Assurance', 'Contract Packing', 'Private Labelling'].map((service) => (
                <li key={service} className="flex items-center">
                  <Image src="/manufacturing.png" alt="Checkmark" width={30} height={30} className="mr-2 rounded-md" />
                  {service}
                </li>
              ))}
            </ul>
            <Link href="/services" className="inline-block mt-6 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
              Explore Our Services
            </Link>
          </motion.div>
    
    </section>
  )
}

