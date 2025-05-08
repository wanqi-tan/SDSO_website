"use client"

import type { ReactNode } from "react"

interface FullPageSectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: string
}

export default function FullPageSection({ children, className = "", id, background }: FullPageSectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen w-full flex flex-col justify-center relative ${className}`}
      style={background ? { background } : undefined}
    >
      {children}
    </section>
  )
}
