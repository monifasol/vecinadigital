import Link from "next/link"

export const metadata = {
  title: "Cómo te puedo ayudar | Vecina Digital",
  description:
    "Tres caminos claros para tu negocio: una web sencilla, arreglar la que ya tienes, o acompañamiento cada mes.",
}

export default function PlansPage() {
  return (
    <main>
      <section className="section plans" aria-labelledby="plans-title">
        <header className="plans__header">
          <h1 className="plans__title" id="plans-title">
            Cómo te puedo ayudar
          </h1>
          <p className="plans__intro">
            Elige el camino que más se parece a tu situación. Sin líos ni presión.
          </p>
        </header>

        <div className="plans__grid">
          <article className="plan plan--start" aria-labelledby="plan-simple-title">
            <div className="plan__top">
              <h2 className="plan__title" id="plan-simple-title">
                Quiero una web sencilla
              </h2>
              <p className="plan__lead">
                Para quien no tiene web o necesita una página clara para explicar qué hace y recibir contactos.
              </p>
            </div>

            <ul className="plan__list">
              <li>Una página clara y bonita</li>
              <li>Textos sencillos</li>
              <li>Adaptada a móvil</li>
              <li>Botón de WhatsApp o email</li>
              <li>Google básico</li>
            </ul>

            <p className="plan__price">Desde 600–900€</p>

            <div className="plan__cta">
              <Link className="btn" href="/contact">
                Cuéntame tu negocio
              </Link>
            </div>
          </article>

          <article
            className="plan plan--order plan--featured"
            aria-labelledby="plan-fix-title"
          >
            <span className="plan__badge">La más elegida</span>
            <div className="plan__top">
              <h2 className="plan__title" id="plan-fix-title">
                Ya tengo web, pero no me convence
              </h2>
              <p className="plan__lead">
                Para quien ya tiene web, pero no se entiende, se ve antigua, va lenta o no consigue contactos.
              </p>
            </div>

            <ul className="plan__list">
              <li>Revisión completa</li>
              <li>Mejorar estructura y textos</li>
              <li>Hacerla más clara en móvil</li>
              <li>Mejorar botones para que puedan llamarte o escribirte</li>
              <li>Para que te encuentren mejor en Google</li>
            </ul>

            <p className="plan__price">Desde 500–1.200€</p>

            <div className="plan__cta">
              <Link className="btn" href="/contact">
                Cuéntame qué necesitas
              </Link>
            </div>
          </article>

          <article className="plan plan--monthly" aria-labelledby="plan-monthly-title">
            <div className="plan__top">
              <h2 className="plan__title" id="plan-monthly-title">
                Quiero que me acompañes cada mes
              </h2>
              <p className="plan__lead">
                Para negocios que necesitan pequeños cambios, mantenimiento, campañas o ayuda digital continua.
              </p>
            </div>

            <ul className="plan__list">
              <li>Cambios pequeños cada mes</li>
              <li>Soporte cercano</li>
              <li>Revisión de textos, imágenes o secciones</li>
              <li>Tranquilidad técnica</li>
            </ul>

            <p className="plan__price">Desde 40–90€/mes</p>

            <div className="plan__cta">
              <Link className="btn" href="/contact">
                Lo vemos juntas
              </Link>
            </div>
          </article>
        </div>

        <section className="plans__bigger" aria-labelledby="plans-bigger-title">
          <h2 className="plans__bigger-title" id="plans-bigger-title">
            ¿Tu proyecto es más grande?
          </h2>
          <p className="plans__bigger-text">
            Si necesitas tienda online, reservas, varias páginas, idiomas, formularios complejos o algo más a medida, lo vemos juntas y te preparo un presupuesto claro.
          </p>
          <Link className="btn" href="/contact">
            Cuéntame tu caso
          </Link>
        </section>

        <aside className="plans__help" aria-labelledby="plans-help-title">
          <h2 className="plans__help-title" id="plans-help-title">
            Si no sabes cuál elegir
          </h2>
          <p className="plans__help-text">
            Es normal. Escríbeme dos líneas sobre tu negocio y te digo qué opción encaja mejor, sin compromiso.
          </p>

          <div className="plans__help-cta">
            <a
              className="wa-link"
              href="https://wa.me/34622210151"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="wa-link__icon" aria-hidden="true">
                <img src="/assets/whatsapp-vecina-olive.png" alt="" />
              </span>
              <span className="wa-link__label">Escríbeme por WhatsApp</span>
            </a>

            <Link className="btn" href="/contact">
              Lo vemos juntas
            </Link>
          </div>
        </aside>
      </section>
    </main>
  )
}
