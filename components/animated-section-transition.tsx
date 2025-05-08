"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface AnimatedSectionTransitionProps {
  children: ReactNode
  className?: string
  darkMode?: boolean
}

export default function AnimatedSectionTransition({
  children,
  className = "",
  darkMode = false,
}: AnimatedSectionTransitionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Create more pronounced parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  // Create opacity effect
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

  // Create scale effect
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }} className={`relative ${className}`}>
      {/* Add animated gradient border for dark mode sections */}
      {darkMode && (
        <motion.div
          className="absolute inset-0 -z-10 rounded-lg overflow-hidden"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(70,70,120,0.2) 0%, rgba(90,90,150,0.1) 50%, rgba(70,70,120,0.2) 100%)",
              "linear-gradient(45deg, rgba(90,90,150,0.1) 0%, rgba(70,70,120,0.2) 50%, rgba(90,90,150,0.1) 100%)",
              "linear-gradient(45deg, rgba(70,70,120,0.2) 0%, rgba(90,90,150,0.1) 50%, rgba(70,70,120,0.2) 100%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      )}
      {children}
    </motion.div>
  )
}
