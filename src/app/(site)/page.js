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
            Diseño web
            <br />
            <span className="hero__title-accent">humano y cercano.</span>
          </h1>

          <p className="hero__slogan">
            Para que tu negocio se vea tan bien como tú lo cuidas cada día.
          </p>

          <p className="hero__lead">
            Ayudo a pequeños negocios
            a tener una web clara y útil,
            sin complicaciones ni tecnicismos.
            {/* Ayudo a pequeños negocios (tiendas, cafeterías, talleres, casas rurales y más)
            a tener una web clara y útil, sin complicaciones ni tecnicismos. */}
          </p>

          <div className="hero__cta">
            <Link className="btn" href="/contact">Cuéntame tu negocio</Link>
            <Link className="btn btn--ghost" href="/plans">Cómo te puedo ayudar</Link>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <Image
            className="hero__image"
            src="/assets/casita.png"
            alt=""
            width={1122}
            height={1002}
            priority
          />
        </div>
      </section>

      <section className="section" aria-labelledby="work-title">
        <h2 id="work-title">Cómo trabajo</h2>

        <ol className="workline">
          <li className="workline__item">
            <span className="workline__dot" aria-hidden="true"></span>
            <div className="workline__content">
              <h3>Me cuentas</h3>
              <p>Qué haces, para quién y qué necesitas.</p>
            </div>
          </li>

          <li className="workline__item">
            <span className="workline__dot" aria-hidden="true"></span>
            <div className="workline__content">
              <h3>Te propongo</h3>
              <p>Estructura + diseño + una primera versión lista para enseñar.</p>
            </div>
          </li>

          <li className="workline__item">
            <span className="workline__dot" aria-hidden="true"></span>
            <div className="workline__content">
              <h3>Lo dejamos vivo</h3>
              <p>Publicamos y te enseño a cuidarlo sin líos.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="manifest" aria-labelledby="manifest-title">
        <p className="manifest__kicker" id="manifest-title">
          ¿Qué hace Vecina Digital?
        </p>

        <p className="manifest__lead">Abre puertas.</p>

        <figure className="manifest__door" aria-hidden="true">
          <Image
            src="/assets/vecina-micro-mark.png"
            alt=""
            width={56}
            height={56}
          />
        </figure>

        <div className="manifest__lines">
          <p>A tu negocio local.</p>
          <p>A las personas.</p>
          <p>A que Internet sea más fácil.</p>
          <p>A quien te busca.</p>
          <p>A quien tiene miedo de la tecnología.</p>
          <p>A la confianza.</p>
        </div>
      </section>

      <section id="servicios" className="section paths-teaser" aria-labelledby="servicios-title">
        <h2 id="servicios-title">¿Cuál te encaja?</h2>

        <div className="paths-teaser__grid">
          <Link className="path-card" href="/plans">
            <h3 className="path-card__title">Quiero una web sencilla</h3>
            <p className="path-card__text">
              Para quien no tiene web o necesita una página clara para explicar qué hace
              y recibir contactos.
            </p>
          </Link>

          <Link className="path-card" href="/plans">
            <h3 className="path-card__title">Ya tengo web, pero…</h3>
            <p className="path-card__text">
              Para quien ya tiene web, pero no se entiende, se ve antigua, va lenta
              o no consigue contactos.
            </p>
          </Link>

          <Link className="path-card" href="/plans">
            <h3 className="path-card__title">Quiero que me acompañes cada mes</h3>
            <p className="path-card__text">
              Para negocios que necesitan pequeños cambios, mantenimiento
              o ayuda digital continua.
            </p>
          </Link>
        </div>

        <div className="paths-teaser__cta">
          <p className="paths-teaser__cta-text">
            ¿No sabes por dónde empezar?
          </p>
          <Link className="btn" href="/plans">
            Ver las opciones
          </Link>
        </div>
      </section>

      <section className="pro-band" aria-labelledby="pro-title">
        <h2 id="pro-title">Para proyectos más complejos</h2>

        <div className="pro-band__inner">
          <div className="pro-band__copy">
            <p className="pro-band__text">
              No todos los proyectos son iguales, hay proyectos que necesitan algo más.
              <br/>
              Algunos necesitan una base técnica sólida: estructura clara, que vaya bien de verdad y cero parches.
            </p>

            <p className="pro-band__text pro-band__text--soft">
              Aquí es donde aporto más experiencia. Te ayudo con un enfoque más avanzado,
              pero igual de humano. 
              Construimos bien desde abajo para que tu web sea 
              rápida, estable y fácil de mantener. 
            </p>

            <ul className="pro-band__list">
              <li>
                <strong>Que cargue rápido:</strong> una experiencia fluida, sin esperas innecesarias
              </li>

              <li>
                <strong>Para que te encuentren en Google:</strong> estructura clara, textos entendibles y una base sólida
              </li>

              <li>
                <strong>En el móvil y en el ordenador:</strong> se ve y se lee bien en cualquier pantalla
              </li>

              <li>
                <strong>Que sea fácil de entender y usar:</strong> flujos claros, jerarquía y decisiones cuidadas
              </li>

              <li>
                <strong>Funcionalidades avanzadas:</strong> formularios complejos, tienda online, áreas privadas o integraciones
              </li>

              <li>
                <strong>Calidad técnica:</strong> orden, accesibilidad y detalles bien rematados
              </li>

              <li>
                <strong>Mantenimiento sencillo:</strong> incluso en proyectos complejos, puedes actualizarla tú misma
              </li>
            </ul>

            <div className="pro-band__cta">
              <Link className="btn" href="/contact">Cuéntame tu caso</Link>
              <Link className="btn btn--ghost" href="/plans">
                Lo vemos juntos
              </Link>
            </div>

          </div>

          <div className="pro-band__aside" aria-hidden="true">
            <p className="pro-band__aside-title">¿Te suena?</p>

            <div className="worries">
              <span className="worry worry--left">“Mi web va lenta”</span>
              <span className="worry worry--right">“En el móvil se ve regular”</span>
              <span className="worry worry--left">“Google no me encuentra”</span>
              <span className="worry worry--right">“Mi web no me representa”</span>
              <span className="worry worry--left">“Me da miedo tocar algo y romperlo”</span>
              <span className="worry worry--right">“La tecnología no es para mí”</span>
            </div>

          </div>
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
          <img src="assets/door.png" alt="" />
        </div>
      </section>

    </main>
  </>
  );
}
