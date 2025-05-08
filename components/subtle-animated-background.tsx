"use client"

import { useEffect, useRef } from "react"

export default function SubtleAnimatedBackground() {
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

    // Create gradient points that will move slowly
    const gradientPoints = [
      { x: 0.2, y: 0.3, vx: 0.00007, vy: 0.00005, radius: 0.5 },
      { x: 0.8, y: 0.7, vx: -0.00005, vy: 0.00009, radius: 0.6 },
      { x: 0.5, y: 0.2, vx: 0.00008, vy: -0.00006, radius: 0.4 },
    ]

    // Animation function
    const animate = () => {
      // Clear canvas with very subtle fade effect
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update gradient points
      gradientPoints.forEach((point) => {
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges
        if (point.x <= 0 || point.x >= 1) point.vx *= -1
        if (point.y <= 0 || point.y >= 1) point.vy *= -1
      })

      // Draw gradients
      gradientPoints.forEach((point, index) => {
        const gradient = ctx.createRadialGradient(
          point.x * canvas.width,
          point.y * canvas.height,
          0,
          point.x * canvas.width,
          point.y * canvas.height,
          point.radius * canvas.width,
        )

        // Use very subtle dark colors based on index
        if (index === 0) {
          gradient.addColorStop(0, "rgba(30, 30, 40, 0.08)")
          gradient.addColorStop(1, "rgba(10, 10, 15, 0)")
        } else if (index === 1) {
          gradient.addColorStop(0, "rgba(40, 40, 50, 0.06)")
          gradient.addColorStop(1, "rgba(20, 20, 30, 0)")
        } else {
          gradient.addColorStop(0, "rgba(25, 25, 35, 0.07)")
          gradient.addColorStop(1, "rgba(15, 15, 25, 0)")
        }

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        background: "linear-gradient(to bottom, rgb(15, 15, 20), rgb(10, 10, 15))",
      }}
    />
  )
}
