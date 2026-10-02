import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Servicios | Vecina Digital",
  description:
    "Soluciones digitales para tu negocio: microtrabajos, webs, tienda online y acompañamiento. Empieza por lo que necesites ahora.",
}

const quickServices = [
  {
    id: "google",
    title: "Puesta a punto de Google",
    price: "Desde 60 €",
    description:
      "Revisar o crear tu ficha: horarios, teléfono, descripción, categorías, enlace, fotos básicas y WhatsApp.",
  },
  {
    id: "whatsapp",
    title: "WhatsApp Business bien montado",
    price: "Desde 50 €",
    description:
      "Perfil, horarios, descripción, mensaje de bienvenida, respuestas rápidas y catálogo básico.",
  },
  {
    id: "revision",
    title: "Revisión de presencia online",
    price: "45 €",
    description:
      "Te digo qué encuentra alguien cuando busca tu negocio y qué tres cosas cambiaría primero. Esos 45 € se descuentan si luego contratas otro servicio conmigo.",
  },
  {
    id: "cambios",
    title: "Pequeños cambios en tu web",
    price: "Desde 40 €",
    description:
      "Cambiar horarios, precios, fotografías, textos, botones, datos de contacto y lo que necesites actualizar.",
  },
  {
    id: "carta-qr",
    title: "Menú o carta digital con QR",
    price: "Desde 80 €",
    description:
      "Una página sencilla con carta o servicios y un QR listo para imprimir.",
  },
  {
    id: "pagina-expres",
    title: "Página informativa exprés",
    price: "180 €",
    description:
      "Quién eres, qué haces, horarios, ubicación, contacto y WhatsApp. Ideal si ahora solo tienes Facebook o Instagram.",
  },
  {
    id: "pack-encuentren",
    title: "Pack «Que me encuentren»",
    price: "220 €",
    description:
      "Miniweb + ficha de Google puesta a punto. Misma información, mismo enlace, misma claridad: que quien te busque te encuentre de verdad.",
    highlight: true,
  },
]

export default function PlansPage() {
  return (
    <main>
      <section className="section plans" aria-labelledby="plans-title">
        <header className="plans__header">
          <h1 className="plans__title" id="plans-title">
            ¿Por dónde empezamos?
          </h1>
          <p className="plans__intro">
            Puedo ayudarte con una web completa… o con algo pequeño que te
            solucione el día a día. Elige lo que encaje ahora; luego ya veremos
            si quieres más.
          </p>
        </header>

        <section className="glance" aria-labelledby="glance-title">
          <h2 className="glance__title" id="glance-title">
            De un vistazo
          </h2>

          <ul className="glance__list">
            <li>
              <a className="glance__row" href="#soluciones-rapidas">
                <span className="glance__label">Pequeñas soluciones</span>
                <span className="glance__dots" aria-hidden="true" />
                <span className="glance__price">40–250 €</span>
              </a>
            </li>
            <li>
              <a className="glance__row" href="#quiero-web">
                <span className="glance__label">Tu web</span>
                <span className="glance__dots" aria-hidden="true" />
                <span className="glance__price">600–900 €</span>
              </a>
            </li>
            <li>
              <a className="glance__row" href="#otro-aire">
                <span className="glance__label">Rediseño web</span>
                <span className="glance__dots" aria-hidden="true" />
                <span className="glance__price">350–500 €</span>
              </a>
            </li>
            <li>
              <a className="glance__row" href="#tienda-online">
                <span className="glance__label">Tu tienda online</span>
                <span className="glance__dots" aria-hidden="true" />
                <span className="glance__price">800–1.100 €</span>
              </a>
            </li>
            <li>
              <a className="glance__row" href="#acompanamiento">
                <span className="glance__label">Acompañamiento</span>
                <span className="glance__dots" aria-hidden="true" />
                <span className="glance__price">20–70 €/mes</span>
              </a>
            </li>
            <li>
              <a className="glance__row" href="#proyecto-a-medida">
                <span className="glance__label">Proyecto especial</span>
                <span className="glance__dots" aria-hidden="true" />
                <span className="glance__price">Presupuesto cerrado</span>
              </a>
            </li>
          </ul>

          <p className="glance__vat">
            A estos precios solo hay que sumarles el IVA.
          </p>
        </section>

        <p className="plans__explain">Te lo explico:</p>

        {/* 1. Soluciones rápidas */}
        <section
          className="plans__block"
          id="soluciones-rapidas"
          aria-labelledby="quick-title"
        >
          <header className="plans__block-header">
            <p className="plans__block-kicker">1 · Desde 40 €</p>
            <h2 className="plans__block-title" id="quick-title">
              También podemos empezar por algo pequeño
            </h2>
            <p className="plans__block-lead">
              Servicios cerrados, comprensibles y con precio. Para negocios que
              necesitan algo concreto ya — aunque no quieran una web todavía.
            </p>
          </header>

          <div className="quick-grid">
            {quickServices.map((service) => (
              <article
                key={service.id}
                className={`quick-card${service.highlight ? " quick-card--bridge" : ""}`}
                aria-labelledby={`quick-${service.id}-title`}
              >
                <div className="quick-card__top">
                  <h3
                    className="quick-card__title"
                    id={`quick-${service.id}-title`}
                  >
                    {service.title}
                  </h3>
                  <p className="quick-card__price">{service.price}</p>
                </div>
                <p className="quick-card__text">{service.description}</p>
              </article>
            ))}
          </div>

          <aside className="plans__bridge" aria-labelledby="bridge-title">
            <h3 className="plans__bridge-title" id="bridge-title">
              No hace falta empezar con una web de 900 €
            </h3>
            <p className="plans__bridge-text">
              Si ahora mismo solo necesitas que cuando alguien te busque
              encuentre horarios, servicios, ubicación y un botón de WhatsApp,
              podemos empezar por el pack «Que me encuentren» (220 €): miniweb +
              Google. Luego, cuando toque, lo convertimos en algo más grande.
            </p>
          </aside>

          <p className="plans__also">
            También puedo ayudarte con correo profesional, carteles, fotografías
            del negocio o una pequeña identidad gráfica. Si lo necesitas, lo
            hablamos.
          </p>

          <div className="plans__block-cta">
            <Link className="btn" href="/contact">
              Cuéntame qué necesitas
            </Link>
          </div>
        </section>

        {/* 2–4. Caminos principales */}
        <section
          className="plans__block"
          id="caminos"
          aria-labelledby="paths-title"
        >
          <header className="plans__block-header">
            <p className="plans__block-kicker">Webs y cuidado</p>
            <h2 className="plans__block-title" id="paths-title">
              Si lo que buscas es una web (o cuidarla)
            </h2>
            <p className="plans__block-lead">
              Elige el que más se parece a tu situación.
            </p>
          </header>

          <div className="plans__grid plans__grid--four">
            <article
              className="plan plan--start"
              id="quiero-web"
              aria-labelledby="plan-simple-title"
            >
              <div className="plan__top">
                <p className="plan__eyebrow">Quiero una web</p>
                <h3 className="plan__title" id="plan-simple-title">
                  Una web sencilla y clara
                </h3>
                <p className="plan__lead">
                  Para quien no tiene web o necesita una página clara para
                  explicar qué hace y recibir contactos.
                </p>
              </div>

              <ul className="plan__list">
                <li>Una página clara y bonita</li>
                <li>Todo el texto y contenidos que necesites</li>
                <li>Adaptada a móvil</li>
                <li>Contacto por WhatsApp o email</li>
                <li>Posicionamiento en Google</li>
              </ul>

              <p className="plan__price">Desde 600–900 €</p>

              <div className="plan__cta">
                <Link className="btn" href="/contact">
                  Cuéntame tu negocio
                </Link>
              </div>
            </article>

            <article
              className="plan plan--refresh"
              id="otro-aire"
              aria-labelledby="plan-refresh-title"
            >
              <div className="plan__top">
                <p className="plan__eyebrow">Ya tengo web</p>
                <h3 className="plan__title" id="plan-refresh-title">
                  Rediseño
                </h3>
                <p className="plan__lead">
                  Dale otro aire a tu web con un rediseño visual de tu web
                  actual.
                </p>
              </div>

              <p className="plan__note">
                No hace falta tirar lo que ya tienes para volver a enamorarte de
                tu web.
              </p>

              <p className="plan__price">350–500 €</p>

              <div className="plan__cta">
                <Link className="btn" href="/contact">
                  Quiero ver cómo quedaría
                </Link>
              </div>
            </article>

            <article
              className="plan plan--order plan--featured"
              id="mejorar-web"
              aria-labelledby="plan-fix-title"
            >
              <span className="plan__badge">La más elegida</span>
              <div className="plan__top">
                <p className="plan__eyebrow">Ya tengo web</p>
                <h3 className="plan__title" id="plan-fix-title">
                  Quiero mejorarla
                </h3>
                <p className="plan__lead">
                  Para quien ya tiene web, pero no se entiende, se ve antigua, va
                  lenta o no consigue contactos.
                </p>
              </div>

              <ul className="plan__list">
                <li>Revisión completa</li>
                <li>Mejorar estructura, textos y contenido</li>
                <li>Hacerla más clara y útil en móvil</li>
                <li>Mejorar el contacto para que puedan llamarte</li>
                <li>Para que te encuentren mejor en Google</li>
              </ul>

              <p className="plan__price">Desde 500–1.200 €</p>

              <div className="plan__cta">
                <Link className="btn" href="/contact">
                  Cuéntame qué necesitas
                </Link>
              </div>
            </article>

            <article
              className="plan plan--monthly"
              id="acompanamiento"
              aria-labelledby="plan-monthly-title"
            >
              <div className="plan__top">
                <p className="plan__eyebrow">Cada mes</p>
                <h3 className="plan__title" id="plan-monthly-title">
                  Quiero acompañamiento
                </h3>
                <p className="plan__lead">
                  Para negocios que necesitan pequeños cambios, mantenimiento,
                  campañas o ayuda digital continua.
                </p>
              </div>

              <ul className="plan__list">
                <li>Cambios pequeños cada mes</li>
                <li>Soporte muy cercano</li>
                <li>Revisión de textos, secciones y contenido</li>
                <li>Mantenimiento y tranquilidad técnica</li>
              </ul>

              <p className="plan__price">Desde 20–70 €/mes</p>

              <div className="plan__cta">
                <Link className="btn" href="/contact">
                  Lo vemos juntos
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Tienda online */}
        <section
          className="plans__block"
          id="tienda-online"
          aria-labelledby="store-title"
        >
          <header className="plans__block-header">
            <p className="plans__block-kicker">Vender online</p>
            <h2 className="plans__block-title" id="store-title">
              Tu tienda online
            </h2>
            <p className="plans__block-lead">
              Para tiendas, artesanía, alimentación, regalos, productos locales,
              floristerías… Si ahora vendes por Instagram o WhatsApp, puedo
              dejarte una tienda sencilla para que la gente compre directamente.
            </p>
          </header>

          <div className="plans__grid plans__grid--two">
            <article
              className="plan plan--store"
              id="tienda-completa"
              aria-labelledby="plan-store-title"
            >
              <div className="plan__top">
                <p className="plan__eyebrow">Hasta 25 productos</p>
                <h3 className="plan__title" id="plan-store-title">
                  Tu tienda online
                </h3>
                <p className="plan__lead">
                  Diseño, carrito, pagos, envíos básicos, páginas esenciales y
                  puesta en marcha.
                </p>
              </div>

              <p className="plan__note">
                No necesitas montar Amazon. Necesitas una tienda que funcione,
                sea fácil de gestionar y ayude a vender tus productos.
              </p>

              <p className="plan__price">800 €</p>

              <div className="plan__cta">
                <Link className="btn" href="/contact">
                  Cuéntame qué vendes
                </Link>
              </div>
            </article>

            <article
              className="plan plan--store-mini"
              id="tienda-ampliada"
              aria-labelledby="plan-store-plus-title"
            >
              <div className="plan__top">
                <p className="plan__eyebrow">Hasta 75 productos</p>
                <h3 className="plan__title" id="plan-store-plus-title">
                  Tienda online ampliada
                </h3>
                <p className="plan__lead">
                  Misma base clara y fácil de gestionar, preparada para un
                  catálogo más amplio.
                </p>
              </div>

              <p className="plan__price">1.100 €</p>

              <div className="plan__cta">
                <Link className="btn" href="/contact">
                  Lo vemos juntos
                </Link>
              </div>
            </article>
          </div>

          <p className="plans__also">
            Más de 75 productos — presupuesto cerrado.
          </p>
        </section>

        {/* Proyecto a medida */}
        <div className="plans__bigger-wrap" id="proyecto-a-medida">
          <section className="plans__bigger" aria-labelledby="plans-bigger-title">
            <p className="plans__block-kicker">A medida</p>
            <h2 className="plans__bigger-title" id="plans-bigger-title">
              ¿Tu proyecto es más grande?
            </h2>
            <p className="plans__bigger-text">
              Si necesitas reservas, varias páginas, idiomas, formularios
              complejos, un catálogo muy amplio o algo más a medida, lo vemos
              juntos y te preparo un presupuesto claro.
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
            Si no sabes por dónde empezar
          </h2>
          <p className="plans__help-text">
            Es normal. Escríbeme dos líneas sobre tu negocio y te digo qué
            opción encaja mejor, sin compromiso.
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
