"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
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

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(Math.floor(window.innerWidth / 20), 80)

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
      pulseSpeed: number
      pulseDirection: number
      maxSize: number
      minSize: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.maxSize = Math.random() * 3 + 1.5 // Larger size range
        this.minSize = this.maxSize * 0.5
        this.size = this.minSize
        this.speedX = (Math.random() - 0.5) * 0.6 // Faster movement
        this.speedY = (Math.random() - 0.5) * 0.6 // Faster movement
        this.opacity = Math.random() * 0.3 + 0.15 // Higher opacity
        this.pulseSpeed = Math.random() * 0.03 + 0.01
        this.pulseDirection = 1

        // Use a variety of more visible colors
        const colors = [
          "rgba(120, 120, 180, 0.4)",
          "rgba(100, 100, 160, 0.4)",
          "rgba(140, 140, 200, 0.4)",
          "rgba(80, 80, 140, 0.4)",
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Pulse size
        this.size += this.pulseDirection * this.pulseSpeed
        if (this.size > this.maxSize || this.size < this.minSize) {
          this.pulseDirection *= -1
        }

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create connections between particles
    function connect() {
      const maxDistance = 200 // Increased connection distance
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 0.2 * (1 - distance / maxDistance) // Increased opacity
            ctx.strokeStyle = `rgba(120, 120, 180, ${opacity})`
            ctx.lineWidth = 1.5 // Thicker lines
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Add a subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(30, 30, 50, 0.03)")
      gradient.addColorStop(0.5, "rgba(40, 40, 70, 0.03)")
      gradient.addColorStop(1, "rgba(30, 30, 50, 0.03)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      connect()
      requestAnimationFrame(animate)
    }

    init()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}
