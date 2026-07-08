export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer__signature" aria-label="Firma">
        <span>Quiero que salgas con menos peso del que entraste.</span>
        <span>— Vecina Digital</span>
      </p>

      <p className="site-footer__meta">
        © {new Date().getFullYear()} Vecina Digital
      </p>
    </footer>
  )
}