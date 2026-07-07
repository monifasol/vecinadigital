"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef(null)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/plans", label: "Cómo te puedo ayudar" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contact", label: "Contacto" },
  ]

  useEffect(() => {
    document.body.classList.toggle("is-nav-open", isOpen)

    function onDocClick(e) {
      if (!isOpen) return
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    function onKeyDown(e) {
      if (e.key === "Escape") setIsOpen(false)
    }

    document.addEventListener("click", onDocClick)
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.removeEventListener("click", onDocClick)
      window.removeEventListener("keydown", onKeyDown)
      document.body.classList.remove("is-nav-open")
    }
  }, [isOpen])

  return (
    <header className="site-header" ref={headerRef}>

      <Link className="brand" href="/" onClick={() => setIsOpen(false)}>
        <img
          className="brand__logo"
          src="/assets/vecina-hero-logo.png"
          alt="Vecina Digital"
        />
      </Link>

      <button
        className="nav-toggle"
        type="button"
        aria-controls="site-nav"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className="nav-toggle__label">{isOpen ? "Cerrar" : "Menu"}</span>
        <span className="nav-toggle__icon" aria-hidden="true" />
      </button>

      <nav
        className="site-nav"
        id="site-nav"
        aria-label="Navegación principal"
        hidden={!isOpen && typeof window !== "undefined" && window.innerWidth <= 920}
      >
        <ul className="site-nav__list">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}