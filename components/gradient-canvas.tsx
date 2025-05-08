"use client"

import { useEffect, useRef } from "react"

interface GradientCanvasProps {
  colorA?: string
  colorB?: string
  colorC?: string
  speed?: number
}

const GradientCanvas = ({
  colorA = "rgba(0, 50, 65, 0.4)",
  colorB = "rgba(30, 30, 50, 0.4)",
  colorC = "rgba(50, 10, 60, 0.4)",
  speed = 0.002,
}: GradientCanvasProps) => {
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
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation variables
    let time = 0
    const points = [
      { x: 0.1, y: 0.2, vx: 0.0007, vy: 0.0005 },
      { x: 0.8, y: 0.3, vx: -0.0005, vy: 0.0009 },
      { x: 0.3, y: 0.7, vx: 0.0008, vy: -0.0006 },
    ]

    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update points
      time += speed
      points.forEach((point) => {
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges
        if (point.x <= 0 || point.x >= 1) point.vx *= -1
        if (point.y <= 0 || point.y >= 1) point.vy *= -1
      })

      // Create gradient
      const gradient = ctx.createRadialGradient(
        points[0].x * canvas.width,
        points[0].y * canvas.height,
        0,
        points[0].x * canvas.width,
        points[0].y * canvas.height,
        canvas.width * 0.8,
      )

      gradient.addColorStop(0, colorA)
      gradient.addColorStop(0.5, colorB)
      gradient.addColorStop(1, colorC)

      // Draw gradient
      ctx.globalAlpha = 0.7
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Create second gradient
      const gradient2 = ctx.createRadialGradient(
        points[1].x * canvas.width,
        points[1].y * canvas.height,
        0,
        points[1].x * canvas.width,
        points[1].y * canvas.height,
        canvas.width * 0.6,
      )

      gradient2.addColorStop(0, colorB)
      gradient2.addColorStop(0.5, colorC)
      gradient2.addColorStop(1, "rgba(0,0,0,0)")

      // Draw second gradient
      ctx.globalAlpha = 0.5
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Create third gradient
      const gradient3 = ctx.createRadialGradient(
        points[2].x * canvas.width,
        points[2].y * canvas.height,
        0,
        points[2].x * canvas.width,
        points[2].y * canvas.height,
        canvas.width * 0.4,
      )

      gradient3.addColorStop(0, colorC)
      gradient3.addColorStop(0.5, colorA)
      gradient3.addColorStop(1, "rgba(0,0,0,0)")

      // Draw third gradient
      ctx.globalAlpha = 0.3
      ctx.fillStyle = gradient3
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    // Start animation
    const animationId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [colorA, colorB, colorC, speed])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-black" />
}

export default GradientCanvas
