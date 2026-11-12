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
            Ayudo a pequeños negocios y profesionales a tener una presencia
            digital clara, útil y cuidada, sin complicaciones ni tecnicismos.
          </p>

          <p className="hero__lead">
            Webs, tiendas online y soluciones adaptadas a lo que necesitas.
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

      <section className="pueblo" aria-labelledby="pueblo-title">
        <h2 className="pueblo__title" id="pueblo-title">
          La tecnología también puede hacer pueblo.
        </h2>

        <div className="pueblo__body">
          <p>
            Con Vecina Digital quiero ayudar a que los pequeños negocios de
            nuestros pueblos tengan más oportunidades, lleguen a más personas
            y puedan seguir creciendo, sin quedarse atrás en un mundo cada vez
            más digital.
          </p>
          <p>
            Es mi forma de contribuir al desarrollo rural y ayudar a mantener
            vivos nuestros pueblos.
          </p>
        </div>

        <div className="pueblo__mark" aria-hidden="true">
          <Image
            className="pueblo__plant"
            src="/assets/identidad-vecina-digital-acuarela/planta-mano.webp"
            alt=""
            width={304}
            height={351}
          />
        </div>
      </section>

      <section className="manifest" aria-labelledby="manifest-title">
        <h2 className="manifest__lead" id="manifest-title">
          No soy una agencia, soy tu vecina.
        </h2>

        <div className="manifest__body">
          <p>
            Soy Mónica. Vivo en Villablino y llevo casi veinte años creando
            webs y aplicaciones. Con Vecina Digital quiero acercar lo que sé
            hacer a los negocios que tengo cerca: sitios con personas detrás,
            mucho trabajo y una historia que merece contarse.
          </p>
          <p>
            <strong>Si trabajamos juntos, hablarás conmigo.</strong> Me ocuparé
            de entender qué necesitas, te explicaré las cosas con palabras
            normales y cuidaré tu web con las mismas ganas con las que tú
            cuidas lo tuyo.
          </p>
          <p className="manifest__sign">Mónica</p>
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
            <h3 className="path-card__title">Pequeñas soluciones digitales</h3>
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

          <a
            className="wa-link wa-link--button"
            href="https://wa.me/34622210151"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="wa-link__icon" aria-hidden="true">
              <img src="/assets/icons/icon-whatsapp.png" alt="" />
            </span>
            <span className="wa-link__label">Escríbeme por WhatsApp</span>
          </a>

          <p className="contact__switch">O déjame un mensaje por aquí:</p>

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
