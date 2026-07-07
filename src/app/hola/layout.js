import Image from "next/image"
import Link from "next/link"
import HolaFooter from "@/components/HolaFooter"

export default function HolaLayout({ children }) {
  return (
    <>
      <Link className="hola-brand" href="/" aria-label="Vecina Digital — ir a la web">
        <Image
          src="/assets/vecina-hero-logo.png"
          alt=""
          width={120}
          height={40}
          priority
        />
      </Link>
      {children}
      <HolaFooter />
    </>
  )
}
