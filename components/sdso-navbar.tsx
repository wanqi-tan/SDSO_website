"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "News", href: "/news" },
  { name: "Resources", href: "/resources" },
  { name: "Events", href: "/events" },
  { name: "Talent", href: "/talent" },
  { name: "Contact", href: "/contact" },
]

export function SDSONavbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-white shadow-sm`}>
      <nav className="container-sdso flex items-center justify-between py-4" aria-label="Global">
        <div className="flex items-center gap-x-4 sm:gap-x-6">
          <Link href="/" className="flex items-center gap-x-2">
            <span className="text-xl font-bold">A*STAR</span>
            <span className="hidden sm:inline-block text-sm text-muted-foreground">
              Scientific Data Strategy Office
            </span>
          </Link>
        </div>

        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`manufactur-link text-sm font-medium transition-colors ${
                pathname === item.href ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-x-4">
          <div className="hidden md:block">
            <Link href="/contact" className="manufactur-button bg-primary text-primary-foreground hover:bg-primary/90">
              Let's Work Together
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}`}>
        <div className="fixed inset-0 bg-background/80 backdrop-blur-md" />
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-x-2" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-xl font-bold">A*STAR</span>
            </Link>
            <button
              type="button"
              className="rounded-md p-2.5 text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium ${
                      pathname === item.href
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent/10 hover:text-accent-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="block w-full rounded-full bg-primary py-3 px-4 text-center font-medium text-primary-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let's Work Together
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
