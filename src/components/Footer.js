export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer__signature" aria-label="Firma">
        <span>Tuve un sueño.</span>
        <span>Combinar tecnología + cuidado + diseño humano.</span>
        <span>Por eso nace Vecina Digital.</span>
      </p>

      <p className="site-footer__meta">
        © {new Date().getFullYear()} Vecina Digital
      </p>
    </footer>
  )
}