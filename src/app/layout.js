import "./globals.css"

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
      <body>
        {children}
      </body>
    </html>
  )
}
