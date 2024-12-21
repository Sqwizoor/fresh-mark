'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from "@/hooks/use-toast"

const jobOpenings = [
  {
    title: 'Production Manager',
    department: 'Operations',
    location: 'Johannesburg, South Africa',
    description: 'We are seeking an experienced Production Manager to oversee our fruit processing operations.',
  },
  {
    title: 'Quality Assurance Specialist',
    department: 'Quality Control',
    location: 'Cape Town, South Africa',
    description: 'Join our quality control team to ensure the highest standards in our fruit products.',
  },
  {
    title: 'Sales Representative',
    department: 'Sales',
    location: 'Durban, South Africa',
    description: 'We are looking for a motivated Sales Representative to expand our client base and drive growth.',
  },
]

export default function CareersContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    coverLetter: '',
  })
  const { toast } = useToast()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData,})
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    toast({
      title: 'Application Submitted',
      description: 'Thank you for your interest. We will review your application and get back to you soon.',
    })
    setFormData({ name: '', email: '', resume: null, coverLetter: '' })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Join Our Team
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg text-center mb-12"
      >
        At Freshmark Foods, we're passionate about delivering exceptional quality, innovation, and customer satisfaction. We're always looking for talented and motivated individuals to join our team.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-4">Current Job Openings</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-2">{job.department} | {job.location}</p>
              <p className="mb-4">{job.description}</p>
              <Button>Apply Now</Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4">General Application</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="mb-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="file"
              name="resume"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              required
            />
          </div>
          <div className="mb-4">
            <Textarea
              name="coverLetter"
              placeholder="Cover Letter"
              value={formData.coverLetter}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit">Submit Application</Button>
        </form>
      </motion.div>
    </div>
  )
}

