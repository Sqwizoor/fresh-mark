import { motion } from 'framer-motion'

export default function WelcomeSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl  text-[#8DC63F]  md:text-4xl font-bold text-center mb-8"
        >
          Welcome to Freshmark Foods
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-center mb-12"
        >
          At Freshmark Foods, we&apos;re passionate about delivering exceptional quality, freshness, and innovation in fruit processing and distribution.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Uncompromising Quality', description: 'We maintain the highest standards in every product we deliver.' },
            { title: 'Customized Solutions', description: 'Our solutions are tailored to meet your specific business needs.' },
            { title: 'Exceptional Service', description: 'We provide unparalleled customer support and service.' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

