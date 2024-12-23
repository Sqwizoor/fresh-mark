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
  className="flex flex-col items-center mx-auto px-6 py-12 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg"
>
  <h3 className="text-3xl font-bold mb-8 text-[#8DC63F] dark:text-gray-100">
    Discover What We Do
  </h3>
  <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
    At the heart of our operations, we bring precision, dedication, and innovation to meet your business needs. Explore our wide range of services designed to elevate your brand and ensure operational excellence.
  </p>
  <ul className="space-y-6">
    {[
      'Processing and Packaging - We ensure every product is handled with care, precision, and industry standards.',
      'Distribution and Logistics - Timely, efficient, and reliable delivery of your goods.',
      'Quality Control and Assurance - Strict adherence to quality benchmarks to exceed expectations.',
      'Contract Packing - Tailored solutions to suit your unique business requirements.',
      'Private Labelling - Helping your brand shine with customized labeling solutions.'
    ].map((service, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="flex items-start space-x-4"
      >
        <Image
          src="/manufacturing.png"
          alt="Service Icon"
          width={40}
          height={40}
          className="rounded-md shadow-md"
        />
        <span className="text-gray-800 dark:text-gray-200 text-lg">
          {service}
        </span>
      </motion.li>
    ))}
  </ul>
  <Link
    href="/services"
    className="mt-10 inline-flex items-center justify-center bg-[#8DC63F] text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 focus:outline-none transition duration-300"
  >
    Explore Our Services
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 ml-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25l4.5 4.5m0 0l-4.5 4.5m4.5-4.5H3"
      />
    </svg>
  </Link>
</motion.div>

    
    </section>
  )
}

