import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Servicios | Vecina Digital",
  description:
    "Soluciones digitales para tu negocio: microtrabajos, webs, tienda online y acompañamiento. Empieza por lo que necesites ahora.",
}

const ART = "/assets/iconos-servicios-vecina-digital"

const illustrations = {
  google: `${ART}/01-google-business.webp`,
  whatsapp: `${ART}/02-whatsapp-business.webp`,
  revision: `${ART}/03-revision-presencia-online.webp`,
  cambios: `${ART}/04-pequenos-cambios-web.webp`,
  "carta-qr": `${ART}/05-menu-carta-qr.webp`,
  "pagina-expres": `${ART}/06-pagina-informativa-expres.webp`,
  "quiero-web": `${ART}/07-tu-primera-web.webp`,
  "otro-aire": `${ART}/08-rediseno-web.webp`,
  "mejorar-web": `${ART}/09-mejorar-web.webp`,
  acompanamiento: `${ART}/10-acompanamiento.webp`,
  "tienda-completa": `${ART}/11-tienda-online.webp`,
  "tienda-ampliada": `${ART}/12-tienda-online-ampliada.webp`,
  "proyecto-a-medida": `${ART}/13-proyecto-a-medida.webp`,
}

const quickServices = [
  {
    id: "google",
    title: "Puesta a punto de Google",
    price: "60 €",
    description:
      "Revisar o crear tu ficha: horarios, teléfono, descripción, categorías, enlace, fotos básicas y WhatsApp.",
    illustration: illustrations.google,
  },
  {
    id: "whatsapp",
    title: "WhatsApp Business",
    price: "50 €",
    description:
      "Perfil, horarios, descripción, mensaje de bienvenida, respuestas rápidas y catálogo básico.",
    illustration: illustrations.whatsapp,
  },
  {
    id: "revision",
    title: "Revisión de presencia online",
    price: "45 €",
    description:
      "Te digo qué encuentra alguien cuando busca tu negocio y qué tres cosas cambiaría primero. Esos 45 € se descuentan si luego contratas otro servicio conmigo.",
    illustration: illustrations.revision,
  },
  {
    id: "cambios",
    title: "Pequeños cambios en tu web",
    price: "40 €",
    description:
      "Cambiar horarios, precios, fotografías, textos, botones, datos de contacto y lo que necesites actualizar.",
    illustration: illustrations.cambios,
  },
  {
    id: "carta-qr",
    title: "Menú o carta digital con QR",
    price: "80 €",
    description:
      "Una página sencilla con carta o servicios y un QR listo para imprimir.",
    illustration: illustrations["carta-qr"],
  },
]

const presenceServices = [
  {
    id: "pagina-expres",
    title: "Página informativa exprés",
    price: "180 €",
    description:
      "Para que te encuentren, entiendan qué haces y puedan contactar contigo fácilmente.",
    includes: [
      "Una página sencilla",
      "Horarios y ubicación",
      "Botón de WhatsApp",
      "Enlaces a redes",
      "Puesta a punto básica de Google Business",
    ],
    highlight: true,
    illustration: illustrations["pagina-expres"],
  },
]

function ServiceArt({ src, size = "card", priority = false }) {
  const dim = size === "plan" ? 440 : size === "band" ? 560 : 380

  return (
    <figure
      className={`service-art service-art--${size}`}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        width={dim}
        height={dim}
        sizes={
          size === "plan"
            ? "(max-width: 639px) 180px, 220px"
            : size === "band"
              ? "(max-width: 720px) 240px, 420px"
              : "(max-width: 639px) 112px, 140px"
        }
        quality={85}
        priority={priority}
        className="service-art__img"
      />
    </figure>
  )
}

function QuickCard({ service, priority = false }) {
  return (
    <article
      id={service.id}
      className={`quick-card${service.highlight ? " quick-card--bridge" : ""}`}
      aria-labelledby={`quick-${service.id}-title`}
    >
      {service.illustration ? (
        <ServiceArt
          src={service.illustration}
          size="card"
          priority={priority}
        />
      ) : null}
      <div className="quick-card__body">
        <div className="quick-card__top">
          <h3 className="quick-card__title" id={`quick-${service.id}-title`}>
            {service.title}
          </h3>
          <p className="quick-card__price">{service.price}</p>
        </div>
        <p className="quick-card__text">{service.description}</p>
        {service.includes ? (
          <ul className="quick-card__includes">
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}

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
            solucione el día a día. Empieza por lo que necesitas ahora.
          </p>
        </header>

        {/*
        <section className="glance" aria-labelledby="glance-title">
          <div className="glance__intro">
            <p className="glance__kicker">Precios orientativos</p>
            <h2 className="glance__title" id="glance-title">
              De un vistazo
            </h2>
          </div>

          <ul className="glance__list">
            <li>
              <a className="glance__row" href="#soluciones-rapidas">
                <span className="glance__label">Pequeñas soluciones</span>
                <span className="glance__price">40–250 €</span>
              </a>
            </li>
            <li>
              <a className="glance__row" href="#quiero-web">
                <span className="glance__label">Tu primera web</span>
                <span className="glance__price">500–900 €</span>
              </a>
            </li>
            <li>
              <a className="glance__row" href="#otro-aire">
                <span className="glance__label">Rediseño web</span>
                <span className="glance__price">350–500 €</span>
              </a>
            </li>
            <li>
              <a className="glance__row" href="#tienda-online">
                <span className="glance__label">Tu tienda online</span>
                <span className="glance__price">800–1.100 €</span>
              </a>
            </li>
            <li>
              <a className="glance__row" href="#acompanamiento">
                <span className="glance__label">Acompañamiento</span>
                <span className="glance__price">20–70 €/mes</span>
              </a>
            </li>
            <li>
              <a className="glance__row" href="#proyecto-a-medida">
                <span className="glance__label">Proyecto especial</span>
                <span className="glance__price">Presupuesto cerrado</span>
              </a>
            </li>
          </ul>
        </section>

        <p className="glance__vat">
          A estos precios solo hay que sumarles el IVA.
        </p>

        <p className="plans__explain">Te lo explico:</p>
        */}

        {/* 1. Soluciones rápidas */}
        <section
          className="plans__block"
          id="soluciones-rapidas"
          aria-labelledby="quick-title"
        >
          <header className="plans__block-header">
            <h2 className="plans__block-title" id="quick-title">
              Podemos empezar por algo pequeño
            </h2>
            <p className="plans__block-lead">
              Servicios cerrados, comprensibles y con precio. Para negocios que
              necesitan algo concreto ya — aunque no quieran una web todavía.
            </p>
          </header>

          <div className="quick-grid">
            {presenceServices.map((service) => (
              <QuickCard
                key={service.id}
                service={service}
                priority
              />
            ))}

            <aside className="plans__nudge" aria-labelledby="bridge-title">
              <p className="plans__nudge-kicker">Un apunte</p>
              <h3 className="plans__nudge-title" id="bridge-title">
                No hace falta empezar con una web de 900 €
              </h3>
              <p className="plans__nudge-text">
                Si ahora mismo solo necesitas que cuando alguien te busque
                encuentre horarios, qué haces y un botón de WhatsApp, podemos
                empezar por la página informativa exprés. Luego, cuando toque,
                la convertimos en algo más grande.
              </p>
            </aside>
          </div>

          <div className="quick-grid">
            {quickServices.map((service, index) => (
              <QuickCard
                key={service.id}
                service={service}
                priority={index < 2}
              />
            ))}
          </div>

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
              Si lo que buscas es una web
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
              <ServiceArt src={illustrations["quiero-web"]} size="plan" />
              <div className="plan__top">
                <p className="plan__eyebrow">Quiero una web</p>
                <h3 className="plan__title" id="plan-simple-title">
                  Tu primera web
                </h3>
                <p className="plan__lead">
                  Para quien no tiene web o necesita una página clara para
                  explicar qué hace y recibir contactos.
                </p>
              </div>

              <ul className="plan__list">
                <li>Una página clara y bonita</li>
                <li>Textos y contenidos necesarios para tu web</li>
                <li>Adaptada a móvil</li>
                <li>Contacto por WhatsApp o email</li>
                <li>Posicionamiento en Google</li>
              </ul>

              <p className="plan__price">500–900 €</p>

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
              <ServiceArt src={illustrations["otro-aire"]} size="plan" />
              <div className="plan__top">
                <p className="plan__eyebrow">Ya tengo web</p>
                <h3 className="plan__title" id="plan-refresh-title">
                  Rediseño web
                </h3>
                <p className="plan__lead">
                  Dale otro aire a tu web con un rediseño visual. No hace falta
                  tirar lo que ya tienes para volver a enamorarte de tu web.
                </p>
              </div>

              <ul className="plan__list">
                <li>Nuevo diseño visual</li>
                <li>Conservas textos y estructura</li>
                <li>Adaptada a móvil</li>
                <li>Misma web, otra cara</li>
                <li>Sin empezar de cero</li>
              </ul>

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
              <ServiceArt src={illustrations["mejorar-web"]} size="plan" />
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

              <p className="plan__price">500–1.200 €</p>

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
              <ServiceArt src={illustrations.acompanamiento} size="plan" />
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

              <p className="plan__price">20–70 €/mes</p>

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
            <p className="plans__block-kicker">Quiero vender online</p>
            <h2 className="plans__block-title" id="store-title">
              Tu tienda online
            </h2>
          </header>

          <div className="plans__grid plans__grid--store">
            <article
              className="plan plan--store"
              id="tienda-completa"
              aria-labelledby="plan-store-title"
            >
              <ServiceArt src={illustrations["tienda-completa"]} size="plan" />
              <div className="plan__top">
                <p className="plan__eyebrow">Hasta 25 productos</p>
                <h3 className="plan__title" id="plan-store-title">
                  Tu tienda online
                </h3>
                <p className="plan__lead">
                  Tienda clara, fácil de gestionar y lista para vender.
                </p>
              </div>

              <ul className="plan__list">
                <li>Diseño de la tienda</li>
                <li>Hasta 25 productos</li>
                <li>Pagos online</li>
                <li>Configuración básica de envíos</li>
                <li>Adaptada a móvil</li>
                <li>Formación para que puedas gestionarla tú</li>
              </ul>

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
              <ServiceArt src={illustrations["tienda-ampliada"]} size="plan" />
              <div className="plan__top">
                <p className="plan__eyebrow">Hasta 75 productos</p>
                <h3 className="plan__title" id="plan-store-plus-title">
                  Tienda online ampliada
                </h3>
                <p className="plan__lead">
                  Preparada para un catálogo más amplio.
                </p>
              </div>

              <ul className="plan__list">
                <li>Todo lo anterior</li>
                <li>Hasta 75 productos</li>
              </ul>

              <p className="plan__price">1.100 €</p>

              <div className="plan__cta">
                <Link className="btn" href="/contact">
                  Lo vemos juntos
                </Link>
              </div>
            </article>

            <aside className="store-intro" aria-label="Sobre la tienda online">
              <p className="store-intro__text">
                Si ahora vendes por Instagram o WhatsApp, podemos dar el{" "}
                <strong>siguiente paso</strong>.
              </p>
              <p className="store-intro__text">
                No necesitas montar Amazon. Necesitas una tienda{" "}
                <strong>sencilla</strong>, fácil de gestionar y preparada para
                que tus clientes puedan <strong>comprar directamente</strong>.
              </p>
              <p className="store-intro__text store-intro__text--soft">
                Para tiendas, artesanía, alimentación, regalos, productos
                locales y otros pequeños negocios.
              </p>
            </aside>
          </div>

          <p className="plans__also">
            Más de 75 productos — presupuesto cerrado.
          </p>
        </section>

        {/* Proyecto a medida */}
        <div className="plans__bigger-wrap" id="proyecto-a-medida">
          <section className="plans__bigger" aria-labelledby="plans-bigger-title">
            <div className="plans__bigger-copy">
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
            </div>
            <ServiceArt
              src={illustrations["proyecto-a-medida"]}
              size="band"
            />
          </section>

          {/*
          <figure className="plans__bigger-avatar" aria-hidden="true">
            <Image
              src="/assets/robots-vecina-digital/robot-corazon-version-2.webp"
              alt=""
              width={400}
              height={520}
            />
          </figure>
          */}
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
