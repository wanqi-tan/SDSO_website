"use client"

import { useEffect, useRef } from "react"

interface DataParticlesProps {
  count?: number
  speed?: number
  colors?: string[]
  size?: number
  connectDistance?: number
  mouseInteraction?: boolean
}

const DataParticles = ({
  count = 50,
  speed = 1,
  colors = ["#00FF41", "#00BFFF", "#8A2BE2", "#FF00FF"],
  size = 3,
  connectDistance = 150,
  mouseInteraction = true,
}: DataParticlesProps) => {
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

    // Mouse position
    let mouseX = 0
    let mouseY = 0
    const mouseRadius = 150

    if (mouseInteraction) {
      canvas.addEventListener("mousemove", (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
      })
    }

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * size + 1
        this.speedX = (Math.random() - 0.5) * speed
        this.speedY = (Math.random() - 0.5) * speed
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        // Move particles
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }

        // Mouse interaction
        if (mouseInteraction) {
          const dx = mouseX - this.x
          const dy = mouseY - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouseRadius) {
            const forceDirectionX = dx / distance
            const forceDirectionY = dy / distance
            const force = (mouseRadius - distance) / mouseRadius

            this.speedX += forceDirectionX * force * speed * 0.5
            this.speedY += forceDirectionY * force * speed * 0.5
          }
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    for (let i = 0; i < count; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `${particles[i].color}${Math.floor((1 - distance / connectDistance) * 255)
              .toString(16)
              .padStart(2, "0")}`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (mouseInteraction) {
        canvas.removeEventListener("mousemove", (e) => {
          mouseX = e.clientX
          mouseY = e.clientY
        })
      }
    }
  }, [colors, connectDistance, count, mouseInteraction, size, speed])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

export default DataParticles
