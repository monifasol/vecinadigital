import Image from "next/image"
import Link from "next/link";
import ContactForm from "./contact/ContactForm";

export const metadata = {
  title: "Vecina Digital",
  description:
    "Para que tu negocio se vea tan bien como lo cuidas cada día. Webs claras y humanas para pequeños negocios.",
}

export default function Home() {
  return (
  <>
    <main>

      <section className="hero">
        <div className="hero__content">

          <h1 className="hero__title">
            Tu puerta a internet,
            <br />
            <span className="hero__title-accent">humana y cercana.</span>
          </h1>

          <p className="hero__slogan">
            Para que tu negocio se vea tan bien como tú lo cuidas cada día.
          </p>

          <p className="hero__lead">
            Ayudo a pequeños negocios
            a tener una web clara y útil,
            sin complicaciones ni tecnicismos.
          </p>

          <p className="hero__lead">
            Webs, identidad digital y lo que tu negocio necesite para crecer.
          </p>

          <div className="hero__cta">
            <Link className="btn" href="/contact">Cuéntame tu negocio</Link>
            <Link className="btn btn--ghost" href="/servicios">Servicios</Link>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <Image
            className="hero__image"
            src="/assets/identidad-vecina-digital-acuarela/casa-acuarela.webp"
            alt=""
            width={1327}
            height={1185}
            priority
          />
        </div>
      </section>

      <section className="manifest" aria-labelledby="manifest-title">
        <h2 className="manifest__lead" id="manifest-title">
          No soy una agencia, soy tu vecina.
        </h2>

        <figure className="manifest__door" aria-hidden="true">
          <Image
            src="/assets/vecina-micro-mark.png"
            alt=""
            width={56}
            height={56}
          />
        </figure>

        <div className="manifest__body">
          <p>
            No vengo a vender sino a acompañar. Llevo más de veinte años
            creando aplicaciones y ahora las hago para quien abre la persiana
            cada mañana. Si tu negocio merece verse online y la tecnología te
            abruma, aquí estoy: te escucho y te lo explico en claro.
          </p>
          <p>
            Hay gente buscando lo que haces y no te ve. Hay negocios preciosos
            que parecen invisibles en Internet. Yo estoy para cambiar eso:
            una web clara, humana y hecha a tu medida, para que dejes de
            sentir que “esto no es para ti”.
          </p>
        </div>
      </section>

      <section id="servicios" className="section paths-teaser" aria-labelledby="servicios-title">
        <h2 id="servicios-title">¿Por dónde empezamos?</h2>

        <div className="paths-teaser__grid paths-teaser__grid--four">
          <Link className="path-card path-card--quick" href="/servicios#soluciones-rapidas">
            <figure className="path-card__art" aria-hidden="true">
              <Image
                src="/assets/iconos-servicios-vecina-digital/06-pagina-informativa-expres.webp"
                alt=""
                width={220}
                height={220}
                sizes="(max-width: 768px) 140px, 160px"
                quality={85}
              />
            </figure>
            <h3 className="path-card__title">Algo pequeño, ya</h3>
            <p className="path-card__text">
              Google, WhatsApp, carta con QR, página exprés…
              40–180 €. Sin necesidad de encargar una web completa.
            </p>
          </Link>

          <Link className="path-card" href="/servicios#quiero-web">
            <figure className="path-card__art" aria-hidden="true">
              <Image
                src="/assets/iconos-servicios-vecina-digital/07-tu-primera-web.webp"
                alt=""
                width={220}
                height={220}
                sizes="(max-width: 768px) 140px, 160px"
                quality={85}
              />
            </figure>
            <h3 className="path-card__title">Quiero una web</h3>
            <p className="path-card__text">
              Una página con secciones para explicar qué haces y que te contacten.
              450 €.
            </p>
          </Link>

          <Link className="path-card" href="/servicios#citas-online">
            <figure className="path-card__art" aria-hidden="true">
              <Image
                src="/assets/iconos-servicios-vecina-digital/citas-online.webp"
                alt=""
                width={220}
                height={220}
                sizes="(max-width: 768px) 140px, 160px"
                quality={85}
              />
            </figure>
            <h3 className="path-card__title">Web con citas online</h3>
            <p className="path-card__text">
              Que tus clientes puedan reservar mientras tú sigues atendiendo.
              550 € + 30 €/mes de mantenimiento.
            </p>
          </Link>

          <Link className="path-card" href="/servicios#acompanamiento">
            <figure className="path-card__art" aria-hidden="true">
              <Image
                src="/assets/iconos-servicios-vecina-digital/10-acompanamiento.webp"
                alt=""
                width={220}
                height={220}
                sizes="(max-width: 768px) 140px, 160px"
                quality={85}
              />
            </figure>
            <h3 className="path-card__title">Acompañamiento mensual</h3>
            <p className="path-card__text">
              Pequeños cambios, mantenimiento y ayuda digital continua.
              20–70 €/mes.
            </p>
          </Link>
        </div>

        <div className="paths-teaser__cta">
          <p className="paths-teaser__cta-text">
            ¿No sabes por dónde empezar?
          </p>
          <Link className="btn" href="/servicios">
            Ver todos los servicios
          </Link>
        </div>
      </section>

      <section id="contacto" className="section contact">
        <div className="contact__copy">
          <h2>Contacto</h2>

          <p className="contact__lead">
            Estás en casa. Escríbeme y lo vemos.
          </p>

          <div className="contact__aside">

            <a className="wa-link" href="https://wa.me/34622210151" target="_blank" rel="noopener">
              <span className="wa-link__icon" aria-hidden="true">
                <img src="/assets/icons/icon-whatsapp.png" alt="" />
              </span>
              <span className="wa-link__label">Escríbeme por WhatsApp</span>
            </a>
            <p className="contact__tiny">Si lo prefieres, también puedes usar el formulario.</p>
          </div>

          <ContactForm />

        </div>

        <div className="contact__art" aria-hidden="true">
          <img
            src="/assets/identidad-vecina-digital-acuarela/puerta-acuarela.webp"
            alt=""
          />
        </div>
      </section>

    </main>
  </>
  );
}
