"use client"

import { useEffect, useRef, useState } from "react"

interface MatrixRainProps {
  color?: string
  density?: number
  speed?: number
  fontSize?: number
}

const MatrixRain = ({ color = "#00FF41", density = 0.05, speed = 50, fontSize = 14 }: MatrixRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [colorMode, setColorMode] = useState<string>(color)
  const [colorCycleEnabled, setColorCycleEnabled] = useState<boolean>(false)

  // Color cycle effect
  useEffect(() => {
    if (!colorCycleEnabled) return

    const colors = ["#00FF41", "#00BFFF", "#8A2BE2", "#FF00FF", "#00FFFF"]
    let colorIndex = 0

    const interval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length
      setColorMode(colors[colorIndex])
    }, 5000)

    return () => clearInterval(interval)
  }, [colorCycleEnabled])

  useEffect(() => {
    // Enable color cycling after 10 seconds
    const timer = setTimeout(() => {
      setColorCycleEnabled(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

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

    // Matrix rain characters - mix of Latin, Katakana, and symbols
    const characters =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,./<>?"
    const charArray = characters.split("")

    // Column settings
    const columns = Math.floor(canvas.width / fontSize)

    // Initialize drops at random positions
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    // Initialize colors for each column
    const columnColors: string[] = []
    const baseColors = ["#00FF41", "#00BFFF", "#8A2BE2", "#FF00FF", "#00FFFF"]

    for (let i = 0; i < columns; i++) {
      // Mostly use the main color, but occasionally use accent colors
      if (Math.random() > 0.8) {
        columnColors[i] = baseColors[Math.floor(Math.random() * baseColors.length)]
      } else {
        columnColors[i] = colorMode
      }
    }

    // Drawing function
    const draw = () => {
      // Add semi-transparent black rectangle on top of previous frame
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set font
      ctx.font = `${fontSize}px monospace`

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = charArray[Math.floor(Math.random() * charArray.length)]

        // x coordinate of the drop
        const x = i * fontSize

        // y coordinate of the drop
        const y = drops[i] * fontSize

        // Set color - use column color with varying opacity based on position
        const alpha = Math.random() * 0.5 + 0.5

        // Use either the column's assigned color or the current color mode
        const currentColor = colorCycleEnabled ? colorMode : columnColors[i]

        // Convert hex to rgba
        const hexToRgba = (hex: string, alpha: number) => {
          const r = Number.parseInt(hex.slice(1, 3), 16)
          const g = Number.parseInt(hex.slice(3, 5), 16)
          const b = Number.parseInt(hex.slice(5, 7), 16)
          return `rgba(${r}, ${g}, ${b}, ${alpha})`
        }

        ctx.fillStyle = hexToRgba(currentColor, alpha)

        // Draw the character
        ctx.fillText(text, x, y)

        // Randomly reset some drops to the top
        if (y > canvas.height && Math.random() > 1 - density) {
          drops[i] = 0
        }

        // Move drop down
        drops[i] += Math.random() * 0.5 + 0.5
      }
    }

    // Animation loop
    const interval = setInterval(draw, speed)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [colorMode, colorCycleEnabled, density, fontSize, speed])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

export default MatrixRain
