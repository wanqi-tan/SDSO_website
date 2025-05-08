"use client"

import { useEffect, useRef } from "react"

interface SubtleMatrixProps {
  opacity?: number
  speed?: number
  density?: number
}

const SubtleMatrix = ({ opacity = 0.05, speed = 50, density = 0.02 }: SubtleMatrixProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Matrix characters - simplified to just a few characters for subtlety
    const characters = "01"
    const charArray = characters.split("")

    // Column settings
    const fontSize = 10
    const columns = Math.floor(canvas.width / fontSize)

    // Initialize drops at random positions
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    // Drawing function
    const draw = () => {
      // Add semi-transparent black rectangle on top of previous frame
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set text color and font
      ctx.fillStyle = `rgba(0, 150, 65, ${opacity})` // Subtle green with configurable opacity
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Only draw some columns based on density
        if (Math.random() > 1 - density) {
          // Random character
          const text = charArray[Math.floor(Math.random() * charArray.length)]

          // x coordinate of the drop
          const x = i * fontSize

          // y coordinate of the drop
          const y = drops[i] * fontSize

          // Draw the character
          ctx.fillText(text, x, y)
        }

        // Randomly reset some drops to the top
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
          drops[i] = 0
        }

        // Move drop down
        drops[i] += 0.5
      }
    }

    // Animation loop
    const interval = setInterval(draw, speed)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [opacity, speed, density])

  return <canvas ref={canvasRef} className="w-full h-full opacity-30" />
}

export default SubtleMatrix
