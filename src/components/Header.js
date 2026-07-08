"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef(null)
  const pathname = usePathname()

  const whatsappUrl = "https://wa.me/34622210151"

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
        className={`nav-toggle${isOpen ? " is-open" : ""}`}
        type="button"
        aria-controls="site-nav"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setIsOpen((v) => !v)}
      >
        <img
          className="nav-toggle__art"
          src="/assets/icons/icon-menu.png"
          alt=""
          aria-hidden="true"
        />
        <span className="nav-toggle__close" aria-hidden="true" />
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

          <li className="site-nav__item-wa">
            <a
              className="site-nav__wa"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <img
                className="site-nav__wa-icon"
                src="/assets/whatsapp-vecina.png"
                alt=""
                aria-hidden="true"
              />
              <span>Escríbeme por WhatsApp</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}