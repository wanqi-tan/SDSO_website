"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    // Check if the browser supports smooth scrolling
    if ("scrollBehavior" in document.documentElement.style) {
      document.documentElement.style.scrollBehavior = "smooth"
    } else {
      // Fallback for browsers that don't support smooth scrolling
      const smoothScroll = (target: string) => {
        const element = document.querySelector(target)
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.pageYOffset,
            behavior: "smooth",
          })
        }
      }

      // Add event listeners to all anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault()
          const href = anchor.getAttribute("href")
          if (href) {
            smoothScroll(href)
          }
        })
      })
    }

    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return null
}
