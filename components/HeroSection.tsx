"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const slides = [
  {
    image: "/orange.jpg",
    headline: "The Fresh Difference",
    subheading: "Experience the best of nature, perfected by us.",
    cta: { text: "Learn More", link: "/about" },
  },
  {
    image: "/ffd1.jpg",
    headline: "Quality Products, Customized Solutions",
    subheading: "From processing to packaging, we've got you covered.",
    cta: { text: "Explore Products", link: "/products" },
  },
  {
    image: "/cc2.webp",
    headline: "Your Partner in Fruit Processing",
    subheading: "Trust us to deliver exceptional quality, freshness, and innovation.",
    cta: { text: "Our Services", link: "/services" },
  },
]

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

export default function FuturisticHeroSection() {
  const [[page, direction], setPage] = useState([0, 0])
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const indexInBounds = useCallback((index: number) => {
    const length = slides.length
    return ((index % length) + length) % length
  }, [])

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([indexInBounds(page + newDirection), newDirection])
    },
    [page, indexInBounds],
  )

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      paginate(1)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying, paginate])

  return (
    <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={slides[indexInBounds(page)].image || "/placeholder.svg"}
            alt={slides[indexInBounds(page)].headline}
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/90" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 space-y-6">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              style={{
                background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 10px rgba(255,255,255,0.5)",
              }}
            >
              {slides[indexInBounds(page)].headline}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl mb-4 max-w-2xl"
            >
              {slides[indexInBounds(page)].subheading}
            </motion.p>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
              <Button
                asChild
                size="lg"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-lg px-8 py-4 rounded-full"
              >
                <Link href={slides[indexInBounds(page)].cta.link}>{slides[indexInBounds(page)].cta.text}</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false)
              setPage([index, index > page ? 1 : -1])
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === indexInBounds(page) ? "bg-white scale-125" : "bg-white/50 scale-100"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full"
        onClick={() => {
          setIsAutoPlaying(false)
          paginate(-1)
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full"
        onClick={() => {
          setIsAutoPlaying(false)
          paginate(1)
        }}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <Card className="absolute bottom-6 right-6 bg-black/50 text-white p-2 backdrop-blur-md rounded-full">
        <p className="text-sm font-medium">
          {indexInBounds(page) + 1} / {slides.length}
        </p>
      </Card>
    </section>
  )
}

