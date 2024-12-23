// components/FloatingIcons.js
'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {  PhoneCall, MessageSquare } from "lucide-react";

const FloatingIcons = () => {
  const [showIndicators, setShowIndicators] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIndicators(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-1/4 right-4 flex flex-col space-y-4 z-50">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 flex justify-center items-center"
      >
        <Link href="https://wa.me/27683897638" target="_blank" rel="noopener noreferrer">
          <MessageSquare className="w-6 h-6" />
        </Link>
      </motion.div>
      {showIndicators && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-600 text-white text-xs rounded-full px-3 py-1 shadow-md"
        >
          Call us!
        </motion.div>
      )}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition duration-300 flex justify-center items-center"
      >
        <Link href="tel:+27105006454">
          <PhoneCall className="w-6 h-6" />
        </Link>
      </motion.div>
    </div>
  );
};

export default FloatingIcons;
