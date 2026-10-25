import localFont from "next/font/local"
import "./globals.css"

const sans = localFont({
  src: "../fonts/dm-sans-latin-wght-normal.woff2",
  weight: "100 1000",
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: "Arial",
})

const serif = localFont({
  src: [
    {
      path: "../fonts/cormorant-garamond-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/cormorant-garamond-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/cormorant-garamond-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-serif",
  display: "swap",
  adjustFontFallback: "Times New Roman",
})

export const metadata = {
  metadataBase: new URL("https://www.vecinadigital.com"),
  title: "Vecina Digital",
  description:
    "Para que tu negocio se vea tan bien como lo cuidas cada día. Webs claras y humanas para pequeños negocios.",
  icons: {
    icon: "/assets/vecina-micro-mark.png",
    apple: "/assets/vecina-micro-mark.png",
  },
  openGraph: {
    title: "Vecina Digital",
    description:
      "Para que tu negocio se vea tan bien como lo cuidas cada día. Webs claras y humanas para pequeños negocios.",
    url: "https://www.vecinadigital.com",
    siteName: "Vecina Digital",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/assets/identidad-vecina-digital-acuarela/logo-vecina-digital-acuarela.png",
        width: 1086,
        height: 1448,
        alt: "Vecina Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vecina Digital",
    description:
      "Para que tu negocio se vea tan bien como lo cuidas cada día. Webs claras y humanas para pequeños negocios.",
    images: [
      "/assets/identidad-vecina-digital-acuarela/logo-vecina-digital-acuarela.png",
    ],
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
