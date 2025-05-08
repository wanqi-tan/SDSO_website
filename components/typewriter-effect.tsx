"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

const TypewriterEffect = ({ text, className = "", speed = 100, delay = 0 }: TypewriterEffectProps) => {
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
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={className}>
      {displayText}
      <span
        className={`${cursorVisible ? "opacity-100" : "opacity-0"} ${isComplete ? "text-matrix-green-bright" : "text-matrix-green"} transition-opacity duration-100`}
      >
        _
      </span>
    </span>
  )
}

export default TypewriterEffect
