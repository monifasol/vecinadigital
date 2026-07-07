import Link from "next/link"

export default function HolaFooter() {
  return (
    <footer className="hola-footer">
      <Link className="hola-footer__link" href="/">
        vecinadigital.com
      </Link>
      <p className="hola-footer__meta">
        © {new Date().getFullYear()} Vecina Digital
      </p>
    </footer>
  )
}
