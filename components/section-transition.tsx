"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

interface SectionTransitionProps {
  children: ReactNode
  from?: "left" | "right" | "bottom" | "top"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  margin?: string
  fullPage?: boolean
  bgColor?: string
  id?: string
}

export default function SectionTransition({
  children,
  from = "bottom",
  delay = 0,
  duration = 0.8,
  className = "",
  once = true,
  margin = "-100px",
  fullPage = false,
  bgColor,
  id,
}: SectionTransitionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 0.5, 1], fullPage ? [100, 0, -100] : [0, 0, 0])

  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    bottom: { x: 0, y: 100 },
    top: { x: 0, y: -100 },
  }

  const initial = {
    opacity: 0,
    ...directions[from],
  }

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={initial}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              transition: {
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1.0], // Smooth easing function
              },
            }
          : initial
      }
      style={fullPage ? { y } : undefined}
      className={`${className} ${fullPage ? "relative" : ""}`}
    >
      {bgColor && fullPage && <div className="absolute inset-0 -z-10" style={{ backgroundColor: bgColor }} />}
      {children}
    </motion.div>
  )
}
