"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNextSection = () => {
    const windowHeight = window.innerHeight
    window.scrollTo({
      top: windowHeight,
      behavior: "smooth",
    })
  }

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={scrollToNextSection}
        className="flex flex-col items-center text-white hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-sm mb-2 font-medium">Scroll</span>
        <motion.div
          animate={{
            y: [0, 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="bg-white/20 backdrop-blur-sm rounded-full p-2"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </button>
    </motion.div>
  )
}
