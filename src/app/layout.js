import "./globals.css"
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  buildPageMetadata,
} from "@/lib/pageMetadata"

const share = buildPageMetadata({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  path: "/",
})

export const metadata = {
  metadataBase: new URL("https://www.vecinadigital.com"),
  ...share,
  icons: {
    icon: "/assets/vecina-micro-mark.png",
    apple: "/assets/vecina-micro-mark.png",
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
