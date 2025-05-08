"use client"

import { useEffect, useRef } from "react"

interface DigitalCircuitProps {
  color?: string
  density?: number
  speed?: number
  width?: number
  height?: number
}

const DigitalCircuit = ({
  color = "#00FF41",
  density = 0.5,
  speed = 1,
  width = 300,
  height = 300,
}: DigitalCircuitProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = width
    canvas.height = height

    // Circuit nodes
    interface Node {
      x: number
      y: number
      connections: number[]
      active: boolean
      pulseTime: number
    }

    // Create nodes
    const nodeCount = Math.floor(density * 50)
    const nodes: Node[] = []

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        connections: [],
        active: false,
        pulseTime: 0,
      })
    }

    // Create connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      const connectionCount = Math.floor(Math.random() * 3) + 1
      const possibleConnections = [...Array(nodes.length).keys()].filter((j) => j !== i)

      for (let c = 0; c < connectionCount && possibleConnections.length > 0; c++) {
        const randomIndex = Math.floor(Math.random() * possibleConnections.length)
        const targetIndex = possibleConnections[randomIndex]

        nodes[i].connections.push(targetIndex)
        possibleConnections.splice(randomIndex, 1)
      }
    }

    // Activate random nodes periodically
    const activateRandomNode = () => {
      const randomIndex = Math.floor(Math.random() * nodes.length)
      nodes[randomIndex].active = true
      nodes[randomIndex].pulseTime = 0
    }

    // Initial activation
    for (let i = 0; i < 3; i++) {
      activateRandomNode()
    }

    // Animation loop
    let lastTime = 0
    const animate = (time: number) => {
      const deltaTime = time - lastTime
      lastTime = time

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        for (const connectionIndex of node.connections) {
          const targetNode = nodes[connectionIndex]

          // Draw line
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(targetNode.x, targetNode.y)

          // Set line style based on active state
          if (node.active) {
            // Parse color to RGB
            const r = Number.parseInt(color.slice(1, 3), 16)
            const g = Number.parseInt(color.slice(3, 5), 16)
            const b = Number.parseInt(color.slice(5, 7), 16)

            // Calculate pulse position (0 to 1)
            const pulsePosition = node.pulseTime / 1000

            if (pulsePosition <= 1) {
              // Draw pulse
              const pulseX = node.x + (targetNode.x - node.x) * pulsePosition
              const pulseY = node.y + (targetNode.y - node.y) * pulsePosition

              // Gradient for the line
              const gradient = ctx.createLinearGradient(node.x, node.y, targetNode.x, targetNode.y)
              gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.8)`)
              gradient.addColorStop(pulsePosition, `rgba(${r}, ${g}, ${b}, 0.8)`)
              gradient.addColorStop(Math.min(pulsePosition + 0.1, 1), `rgba(${r}, ${g}, ${b}, 0.2)`)
              gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0.2)`)

              ctx.strokeStyle = gradient
              ctx.lineWidth = 2

              // Draw pulse glow
              ctx.beginPath()
              ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2)
              ctx.fillStyle = color
              ctx.fill()
            } else {
              ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.2)`
              ctx.lineWidth = 1
            }
          } else {
            ctx.strokeStyle = `${color}33` // 20% opacity
            ctx.lineWidth = 1
          }

          ctx.stroke()
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        ctx.beginPath()
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2)

        if (node.active) {
          ctx.fillStyle = color

          // Add glow effect
          ctx.shadowBlur = 10
          ctx.shadowColor = color
        } else {
          ctx.fillStyle = `${color}66` // 40% opacity
          ctx.shadowBlur = 0
        }

        ctx.fill()
        ctx.shadowBlur = 0 // Reset shadow
      }

      // Update node states
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        if (node.active) {
          // Update pulse time
          node.pulseTime += deltaTime * speed

          // If pulse reaches end of connection, activate connected nodes
          if (node.pulseTime >= 1000) {
            for (const connectionIndex of node.connections) {
              nodes[connectionIndex].active = true
              nodes[connectionIndex].pulseTime = 0
            }

            // Deactivate current node
            node.active = false
          }
        }
      }

      // Randomly activate new nodes
      if (Math.random() < 0.01 * speed) {
        activateRandomNode()
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [color, density, height, speed, width])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

export default DigitalCircuit
