"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ProductContent() {
    return (
        <div className="py-16">
            <div className="container mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold md:text-center mb-8"
                >
                    Quality and Safety
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-center mb-12 max-w-3xl mx-auto"
                >

                    At Freshmark Foods, we maintain the highest standards of quality and
                    safety. Our state-of-the-art facilities and rigorous quality control
                    processes ensure that every product meets our stringent standards.

                </motion.p>


                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-8">Certifications and Compliance</h2>
                    <p className="text-lg text-center mb-8">
                        We maintain various certifications and compliance standards
                         to ensure our commitment to sustainability and quality:
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>ISO 14001:2015</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Environmental Management System certification, 
                                    demonstrating our commitment to environmental responsibility.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>ISO 22000:2018</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Food Safety Management System certification,
                                     ensuring the highest standards in food safety.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>FSSC 22000</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Food Safety System Certification, recognized by
                                     the Global Food Safety Initiative (GFSI).</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>GAP (Good Agricultural Practices)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Ensuring that our sourcing practices 
                                    align with sustainable and responsible agricultural methods.</p>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
                    <p className="text-lg text-center mb-8">
                        Ready to learn more about our sustainability initiatives
                         or discuss how we can support your sustainability goals? Contact us today!
                    </p>
                    <div className="text-center">
                        <Button asChild>
                            <a href="/contact">Contact Us</a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

