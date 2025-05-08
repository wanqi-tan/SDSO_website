import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SDSONavbar } from "@/components/sdso-navbar"
import { SDSOFooter } from "@/components/sdso-footer"
import LayoutWithAnimations from "./layout-with-animations"

// Load Inter font with next/font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Define as a CSS variable
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "A*STAR | Scientific Data Strategy Office",
  description: "Transforming data into strategic insights that drive innovation and evidence-based decision making.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
          <LayoutWithAnimations>
            <SDSONavbar />
            <main className="min-h-screen">{children}</main>
            <SDSOFooter />
          </LayoutWithAnimations>
        </ThemeProvider>
      </body>
    </html>
  )
}
