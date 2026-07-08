import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Caminos para tu negocio | Vecina Digital",
  description:
    "Tres caminos claros para tu negocio: una web sencilla, arreglar la que ya tienes, o acompañamiento cada mes.",
}

export default function PlansPage() {
  return (
    <main>
      <section className="section plans" aria-labelledby="plans-title">
        <header className="plans__header">
          <h1 className="plans__title" id="plans-title">
            Caminos para tu negocio
          </h1>
          <p className="plans__intro">
            Elige el que más se parece a tu situación.
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
              <li>Todo el texto y contenidos que necesites</li>
              <li>Adaptada a móvil</li>
              <li>Contacto por WhatsApp o email</li>
              <li>Posicionamiento en Google</li>
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
              <li>Mejorar estructura, textos, contenido</li>
              <li>Hacerla más clara y útil en móvil</li>
              <li>Mejorar contacto para que puedan llamarte o escribirte</li>
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
              <li>Soporte muy cercano</li>
              <li>Revisión de textos, secciones, contenido</li>
              <li>Mantenimiento siempre, tranquilidad técnica</li>
            </ul>

            <p className="plan__price">Desde 40–90€/mes</p>

            <div className="plan__cta">
              <Link className="btn" href="/contact">
                Lo vemos juntos
              </Link>
            </div>
          </article>
        </div>

        <div className="plans__bigger-wrap">
          <section className="plans__bigger" aria-labelledby="plans-bigger-title">
            <h2 className="plans__bigger-title" id="plans-bigger-title">
              ¿Tu proyecto es más grande?
            </h2>
            <p className="plans__bigger-text">
              Si necesitas tienda online, reservas, varias páginas, idiomas, formularios complejos o algo más a medida, lo vemos juntos y te preparo un presupuesto claro.
            </p>
            <Link className="btn" href="/contact">
              Cuéntame tu caso
            </Link>
          </section>

          <figure className="plans__bigger-avatar" aria-hidden="true">
            <Image
              src="/assets/robot.png"
              alt=""
              width={400}
              height={520}
            />
          </figure>
        </div>

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
                <img src="/assets/icons/icon-whatsapp.png" alt="" />
              </span>
              <span className="wa-link__label">Escríbeme por WhatsApp</span>
            </a>

            <Link className="btn" href="/contact">
              Lo vemos juntos
            </Link>
          </div>
        </aside>
      </section>
    </main>
  )
}
