import Link from "next/link"

export const metadata = {
  title: "Cómo te puedo ayudar | Vecina Digital",
  description: "Elige tu punto de partida. Yo me encargo de todo lo demás.",
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
            Elige tu punto de partida. Yo me encargo de todo lo demás.
          </p>
        </header>

        <div className="plans__grid">
          {/* Plan 1 */}
          <article className="plan plan--start" aria-labelledby="plan-start-title">
            <div className="plan__top">
              <p className="plan__kicker">Empezar</p>
              <h2 className="plan__title" id="plan-start-title">
                Empezar en Internet
              </h2>
              <p className="plan__lead">
                Para existir online con una página sencilla y preciosa. Sin líos.
              </p>
            </div>

            <ul className="plan__list">
              <li>1 página clara (landing)</li>
              <li>Diseño cuidado + móvil perfecto</li>
              <li>WhatsApp + email + SEO base</li>
            </ul>

            <div className="plan__cta">
              <Link className="btn" href="/contact">
                Me encaja
              </Link>
            </div>
          </article>

          {/* Plan 2 */}
          <article className="plan plan--order plan--featured" aria-labelledby="plan-order-title">
            <span className="plan__badge">La más elegida</span>
            <div className="plan__top">
              <p className="plan__kicker">Ordenar</p>
              <h2 className="plan__title" id="plan-order-title">
                Que se entienda lo que haces
              </h2>
              <p className="plan__lead">
                Para webs que existen… pero no explican bien. Lo ordenamos juntas.
              </p>
            </div>

            <ul className="plan__list">
              <li>Estructura y jerarquía (qué va primero)</li>
              <li>Mejora de textos (claridad y tono)</li>
              <li>CTAs (llamadas a la acción)</li>
              <li>SEO on-page + revisión móvil</li>
            </ul>

            <div className="plan__cta">
              <Link className="btn" href="/contact">
                Lo necesito
              </Link>
            </div>
          </article>

          {/* Plan 3 */}
          <article className="plan plan--care" aria-labelledby="plan-care-title">
            <div className="plan__top">
              <p className="plan__kicker">Cuidar</p>
              <h2 className="plan__title" id="plan-care-title">
                Que tu marca respire
              </h2>
              <p className="plan__lead">
                Para que todo se vea coherente, bonito y con personalidad.
              </p>
            </div>

            <ul className="plan__list">
              <li>Paleta, tipografías y estilo</li>
              <li>Consistencia visual + refinado UI</li>
              <li>Iconos/ilustraciones coherentes</li>
              <li>Sistema base para mantenerlo</li>
            </ul>

            <div className="plan__cta">
              <Link className="btn" href="/contact">
                Quiero esto
              </Link>
            </div>
          </article>

          {/* Plan 4 */}
          <article className="plan plan--pro" aria-labelledby="plan-pro-title">
            <div className="plan__top">
              <p className="plan__kicker">Vecina PRO</p>
              <h2 className="plan__title" id="plan-pro-title">
                Para proyectos más complejos
              </h2>
              <p className="plan__lead">
                Si necesitas base técnica sólida: rendimiento, SEO, estructura y cero parches.
              </p>
            </div>

            <ul className="plan__list">
              <li>Rendimiento + SEO técnico</li>
              <li>Arquitectura + estructura + accesibilidad</li>
              <li>Integraciones + formularios complejos</li>
            </ul>

            <div className="plan__cta">
              <Link className="btn" href="/contact">
                Hablemos
              </Link>
            </div>
          </article>
        </div>

        {/* Pricing */}
        <section className="plans__pricing" aria-labelledby="pricing-title">
          <h2 className="plans__pricing-title" id="pricing-title">Precios</h2>

          <p className="plans__pricing-intro">
            Precios orientativos (desde). Si tu caso necesita algo más (más páginas, idiomas,
            e-commerce, integraciones…), te paso un presupuesto claro antes de empezar.
          </p>

          <div className="pricing-table" role="region" aria-label="Tabla de precios">
            <table className="pricing-table__table">
              <thead>
                <tr>
                  <th scope="col">Plan</th>
                  <th scope="col">Ideal si...</th>
                  <th scope="col">Incluye (resumen)</th>
                  <th scope="col">Precio desde</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">Empezar</th>
                  <td>...quieres existir online con una página sencilla y preciosa.</td>
                  <td>1 landing + ajustes de copy + WhatsApp + SEO base</td>
                  <td>900€</td>
                </tr>

                <tr>
                  <th scope="row">Ordenar</th>
                  <td>...tu web existe, pero no explica bien lo que haces, no se entiende, o no convierte.</td>
                  <td>auditoría + reestructura + copy + SEO on-page</td>
                  <td>1.400€</td>
                </tr>

                <tr>
                  <th scope="row">Cuidar</th>
                  <td>... quieres que tu marca se vea profesional y coherente.</td>
                  <td>sistema visual + refinado UI + consistencia + assets</td>
                  <td>1.100€</td>
                </tr>

                <tr>
                  <th scope="row">Vecina PRO</th>
                  <td>...necesitas una base técnica sólida o funcionalidades más complejas.</td>
                  <td>arquitectura + performance + SEO técnico + integraciones</td>
                  <td>2.200€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="plans__maintenance" aria-labelledby="maintenance-title">
            <h3 className="plans__maintenance-title" id="maintenance-title">
              Mantenimiento (opcional)
            </h3>

            <p className="plans__maintenance-intro">
              Para que todo siga funcionando, esté al día y puedas pedir cambios sin líos.
            </p>

            <ul className="plans__maintenance-list">
              <li><strong>Empezar:</strong> desde 25€/mes</li>
              <li><strong>Ordenar / Cuidar:</strong> desde 60€/mes</li>
              <li><strong>Vecina PRO:</strong> desde 95€/mes</li>
            </ul>
          </div>
        </section>

        <aside className="plans__help" aria-labelledby="plans-help-title">
          <h2 className="plans__help-title" id="plans-help-title">
            Si no sabes cuál elegir
          </h2>
          <p className="plans__help-text">
            Escríbeme 2-3 líneas y te digo cuál encaja. Sin compromiso.
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
              O cuéntame tu caso aquí
            </Link>
          </div>
        </aside>
      </section>
    </main>
  )
}