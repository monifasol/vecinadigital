import { DM_Sans, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

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
  metadataBase: new URL("https://www.vecinadigital.com"),
  title: "Vecina Digital",
  description: "Webs bonitas, profesionales y humanas para personas reales.",
  icons: {
    icon: "/assets/vecina-micro-mark.png",
    apple: "/assets/vecina-micro-mark.png",
  },
  openGraph: {
    title: "Vecina Digital",
    description: "Webs bonitas, profesionales y humanas para personas reales.",
    url: "https://www.vecinadigital.com",
    siteName: "Vecina Digital",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/assets/vecina-hero-logo.png",
        width: 774,
        height: 1032,
        alt: "Vecina Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vecina Digital",
    description: "Webs bonitas, profesionales y humanas para personas reales.",
    images: ["/assets/vecina-hero-logo.png"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${sans.variable} ${serif.variable}`}>
        {children}
      </body>
    </html>
  )
}
