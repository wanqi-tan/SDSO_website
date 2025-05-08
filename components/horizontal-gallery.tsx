"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface HorizontalGalleryProps {
  images: Array<{
    src: string
    alt: string
  }>
}

export default function HorizontalGallery({ images }: HorizontalGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setScrollPosition(scrollLeft)
      setMaxScroll(scrollWidth - clientWidth)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  // For demo, we'll use placeholder images if no images are provided
  const galleryImages = images.length > 0 ? images : Array(6).fill({ src: "", alt: "Gallery image" })

  return (
    <div className="relative w-full overflow-hidden py-6 my-6 group">
      {/* Left scroll button */}
      <button
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    ${scrollPosition <= 0 ? "invisible" : "visible"}`}
        onClick={scrollLeft}
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Gallery container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
        onScroll={handleScroll}
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="min-w-[280px] h-64 bg-secondary rounded-lg overflow-hidden snap-start flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {image.src ? (
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground">
                Image {index + 1}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Right scroll button */}
      <button
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    ${scrollPosition >= maxScroll ? "invisible" : "visible"}`}
        onClick={scrollRight}
        aria-label="Scroll right"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Add some custom styling for hiding the scrollbar while preserving functionality */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
