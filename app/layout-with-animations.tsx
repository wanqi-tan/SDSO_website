"use client"

import type { ReactNode } from "react"
import SmoothScroll from "@/components/smooth-scroll"
import AnimatedBackground from "@/components/animated-background"

interface LayoutWithAnimationsProps {
  children: ReactNode
}

export default function LayoutWithAnimations({ children }: LayoutWithAnimationsProps) {
  return (
    <>
      <AnimatedBackground />
      <SmoothScroll />
      {children}
    </>
  )
}
