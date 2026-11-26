"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const INSTAGRAM_HANDLE = "vecinadigital"
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`
const WHATSAPP_URL = "https://wa.me/34622210151"

function MenuOpenIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2 21.5V12a10 10 0 0 1 20 0v9.5" />
      <path d="M6.5 10.5h11M6.5 14.5h11M7.5 18.5h9" />
    </svg>
  )
}

function MenuCloseIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2 21.5V12a10 10 0 0 1 20 0v9.5" />
      <path d="m8.5 11 7 7m0-7-7 7" />
    </svg>
  )
}

function InstagramGlyph({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="5"
        ry="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.15"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.15"
      />
      <circle cx="17.15" cy="6.85" r="1.35" fill="currentColor" />
    </svg>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef(null)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/trabajos", label: "Trabajos" },
    { href: "/tu-vecina", label: "Tu vecina" },
    { href: "/detras-de-vecina-digital", label: "Por dentro" },
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

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1024px)")

    function onBreakpointChange(e) {
      if (!e.matches) setIsOpen(false)
    }

    mq.addEventListener("change", onBreakpointChange)
    return () => mq.removeEventListener("change", onBreakpointChange)
  }, [])

  return (
    <header className="site-header" ref={headerRef}>
      <Link className="brand" href="/" onClick={() => setIsOpen(false)}>
        <img
          className="brand__logo"
          src="/assets/identidad-vecina-digital-acuarela/logo-vecina-digital-acuarela.webp"
          alt="Vecina Digital"
        />
      </Link>

      <div className="site-header__end">
        <nav
          className="site-nav"
          id="site-nav"
          aria-label="Navegación principal"
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
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <img
                  className="site-nav__wa-icon"
                  src="/assets/icons/icon-whatsapp.png"
                  alt=""
                  aria-hidden="true"
                />
                <span>Escríbeme por WhatsApp</span>
              </a>
            </li>

            <li className="site-nav__item-ig">
              <a
                className="site-nav__ig"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <InstagramGlyph className="site-nav__ig-icon" />
                <span className="site-nav__ig-label site-nav__ig-label--desktop">
                  Instagram
                </span>
                <span className="site-nav__ig-label site-nav__ig-label--mobile">
                  @{INSTAGRAM_HANDLE}
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <button
          className={`nav-toggle${isOpen ? " is-open" : ""}`}
          type="button"
          aria-controls="site-nav"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="nav-toggle__slot" aria-hidden="true">
            <MenuOpenIcon className="nav-toggle__art nav-toggle__art--open" />
            <MenuCloseIcon className="nav-toggle__art nav-toggle__art--close" />
          </span>
        </button>
      </div>
    </header>
  )
}
