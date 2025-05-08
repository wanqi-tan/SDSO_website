"use client"

import { useState, useEffect } from "react"

interface ElegantTypewriterProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  cursorStyle?: "blink" | "solid" | "none"
}

const ElegantTypewriter = ({
  text,
  className = "",
  speed = 100,
  delay = 0,
  cursorStyle = "blink",
}: ElegantTypewriterProps) => {
  const [displayText, setDisplayText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Initial delay before starting
    timeout = setTimeout(() => {
      let currentIndex = 0

      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
          setIsComplete(true)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  // Blinking cursor effect
  useEffect(() => {
    if (cursorStyle === "none" || (isComplete && cursorStyle !== "solid")) return

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 400) // Slightly faster blink

    return () => clearInterval(cursorInterval)
  }, [isComplete, cursorStyle])

  const renderCursor = () => {
    if (cursorStyle === "none") return null
    if (cursorStyle === "solid" && isComplete) return null

    return (
      <span
        className={`${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
        style={{ color: "currentColor" }}
      >
        |
      </span>
    )
  }

  return (
    <span className={className}>
      {displayText}
      {renderCursor()}
    </span>
  )
}

export default ElegantTypewriter
