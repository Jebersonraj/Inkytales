import type React from "react"
import { Lora, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import "./globals.css"
import { Suspense } from "react"
import { Header } from "@/components/header" // Import Header component

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "InkyTales",
  description: "A platform for book lovers to share quotes",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body className={`font-inter antialiased`}>
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
