import { DM_Sans, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  display: "swap",
})

export const metadata = {
  title: "Vecina Digital",
description: "Webs bonitas, profesionales y humanas para personas reales."
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${sans.variable} ${serif.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}