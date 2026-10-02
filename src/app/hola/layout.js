import Image from "next/image"
import Link from "next/link"
import HolaFooter from "@/components/HolaFooter"

export default function HolaLayout({ children }) {
  return (
    <>
      <Link className="hola-brand" href="/" aria-label="Vecina Digital — ir a la web">
        <Image
          src="/assets/identidad-vecina-digital-acuarela/logo-vecina-digital-acuarela.webp"
          alt=""
          width={1086}
          height={1448}
          priority
        />
      </Link>
      {children}
      <HolaFooter />
    </>
  )
}
