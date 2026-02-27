import ContactForm from "./contact/ContactForm";

export const metadata = {
  title: "Sobre Vecina Digital",
  description:
    "Diseño y presencia digital humana y cercana",
}

export default function Home() {
  return (
  <>
    <main>

      <section className="hero">
        <div className="hero__content">
          <p className="kicker">Vecina Digital</p>


          <h1 className="hero__title">
            Diseño y presencia digital<br />
            <span className="hero__title-accent">humana y cercana</span><br />
          </h1>

          <p className="hero__subtitle">
            Para negocios con valores que quieren orden, claridad… y clientes.
          </p>

          <p className="hero__manifesto">
            Webs claras y humanas<br />
            Que crecen contigo<br />
            Y que cuidan tu marca digital.<br />
            Para que te entiendan en segundos y te contacten con confianza.
          </p>

          <div className="hero__cta">
            <a className="btn" href="contact.html">Cuéntame tu proyecto</a>
            <a className="btn btn--ghost" href="plans.html">¿Cómo te puedo ayudar?</a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <img
            className="hero__character"
            src="assets/avatar-pc.png"
            alt=""
            loading="eager"
            decoding="async"
          />
        </div>
      </section>

      <section className="section" aria-labelledby="work-title">
        <h2 className="h2-leaf" id="work-title">Cómo trabajo</h2>

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

      <section className="motto">
        <p className="motto__eyebrow">Lo importante · hecho con mimo</p>
        <h2 className="motto__title">Una web clara, segura y con resultados</h2>

        <p className="motto__text">
          Preparada para crecer contigo.<br />
          Pensada para cargar rápido.<br />
          Muy bonita en móvil.
        </p>
      </section>

      <section id="servicios" className="section" aria-labelledby="servicios-title">
        <h2 className="h2-leaf" id="servicios-title">Elige tu punto de partida</h2>

        <div className="services">
          <article className="service">
            <div className="service__meta" aria-hidden="true">
              <img src="assets/icon-empezar.png" alt="" className="service__icon"/>
              <span className="service__tag">Empezar</span>
            </div>

            <div className="service__body">
              <h3>Empezar en Internet</h3>
              <p>
                Para empezar a existir online. Te hago una página sencilla y bonita para que la gente sepa quién eres,
                qué haces y pueda contactarte en un clic.
              </p>
              <ul className="service__bullets">
                <li>Una página clara</li>
                <li>Textos fáciles</li>
                <li>Perfecta en el móvil</li>
                <li>Contacto via WhatsApp o email</li>
              </ul>
            </div>
          </article>

          <article className="service">
            <div className="service__meta" aria-hidden="true">
              <img src="assets/icon-ordenar.png" alt="" className="service__icon"/>
              <span className="service__tag">Ordenar</span>
            </div>

            <div className="service__body">
              <h3>Una web que explique bien lo que haces</h3>
              <p>
                Ordenamos tu web para que cualquier persona entienda en pocos segundos
                qué ofreces, cómo trabajas, y sepa qué hacer después.
              </p>
              <ul className="service__bullets">
                <li>Secciones, estructura clara</li>
                <li>Mejora de textos y contenido</li>
                <li>Servicios / precios / contacto</li>
                <li>SEO (posicionamiento en Google)</li>
                <li>Mobile perfecto</li>
              </ul>
            </div>
          </article>

          <article className="service">
            <div className="service__meta" aria-hidden="true">
              <img src="assets/icon-cuidar.png" alt="" className="service__icon"/>
              <span className="service__tag">Cuidar</span>
            </div>

            <div className="service__body">
              <h3>Que todo se vea cuidado</h3>
              <p>
                Ajustamos colores, tipografía y detalles para que tu negocio se vea bonito,
                coherente y con personalidad. Para que tu marca se sienta profesional sin perder alma.
              </p>
              <ul className="service__bullets">
                <li>Paleta de colores, estilo, tipografía</li>
                <li>Detalles visuales, iconos, ilustraciones</li>
                <li>Consistencia visual</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="services-cta">
          <p className="services-cta__text">
            ¿Cómo te puedo ayudar?
          </p>
          <a className="btn" href="plans.html">
            Ver los planes con calma
          </a>
        </div>

      </section>

      <section className="pro-band" aria-labelledby="pro-title">
        <div className="pro-band__inner">
          <div className="pro-band__copy">
            <p className="pro-band__badge">Vecina PRO</p>

            <h2 id="pro-title" className="pro-band__title">Para proyectos más complejos</h2>

            <p className="pro-band__text">
              No todos los proyectos son iguales, hay proyectos que necesitan algo más.
              <br/>
              Algunos necesitan una base técnica sólida:
              estructura clara, rendimiento real y cero parches.
            </p>

            <p className="pro-band__text pro-band__text--soft">
              Aquí entra mi perfil más senior. Te ayudo con un enfoque más avanzado,
              pero igual de humano. 
              Construimos bien desde abajo para que tu web sea 
              rápida, estable y fácil de mantener. 
            </p>

            <ul className="pro-band__list">
              <li>
                <strong>Rendimiento:</strong>
                carga rápida y una experiencia fluida
              </li>

              <li>
                <strong>SEO (que Google te entienda):</strong>
                estructura clara, textos entendibles y una base sólida
              </li>

              <li>
                <strong>Responsive:</strong>
                se ve y se lee bien en móvil, tablet y ordenador
              </li>

              <li>
                <strong>Arquitectura y UX complejas:</strong>
                flujos claros, jerarquía y decisiones cuidadas
              </li>

              <li>
                <strong>Funcionalidades avanzadas:</strong>
                formularios complejos, e-commerce, áreas privadas o integraciones
              </li>

              <li>
                <strong>Calidad técnica:</strong>
                orden, accesibilidad y detalles bien rematados
              </li>

              <li>
                <strong>Mantenimiento sencillo:</strong>
                incluso en proyectos complejos, puedes actualizarla tú misma
              </li>
            </ul>

            <div className="pro-band__cta">
              <a className="btn" href="contact.html">Cuéntame tu caso</a>
              <a className="btn" href="plans.html">
                Esto me encaja → Ver planes
              </a>
            </div>

          </div>

          <div className="pro-band__aside" aria-hidden="true">
            <p className="pro-band__aside-title">¿Te suena?</p>

            <div className="worries">
              <span className="worry worry--left">“Mi web va lenta”</span>
              <span className="worry worry--right">“En el móvil se ve regular”</span>

              <span className="worry worry--left">“Dependo siempre de alguien para cualquier cambio”</span>
              <span className="worry worry--right">“Google no me encuentra”</span>

              <span className="worry worry--left">“No sé por dónde empezar”</span>
              <span className="worry worry--right">“Cada cambio es un lío”</span>

              <span className="worry worry--left">“Me da miedo tocar algo y romperlo”</span>
              <span className="worry worry--right">“Sé que algo falla, pero no sé qué”</span>

              <span className="worry worry--left">“Mi web no crece conmigo, no me representa.”</span>
              <span className="worry worry--right">“No sé si estoy haciendo las cosas bien”</span>
            </div>

          </div>
        </div>
      </section>

      <section id="contacto" className="section contact">
        <div className="contact__copy">
          <h2>Contacto</h2>

          <p className="contact__lead">
            Estás en casa. Escríbeme y lo vemos juntas.
          </p>

          <div className="contact__aside">

            <a className="wa-link" href="https://wa.me/34622210151" target="_blank" rel="noopener">
              <span className="wa-link__icon" aria-hidden="true">
                <img src="assets/whatsapp-vecina-olive.png" alt="" />
              </span>
              <span className="wa-link__label">Escríbeme por WhatsApp</span>
            </a>
            <p className="contact__tiny">Si lo prefieres, también puedes usar el formulario.</p>
          </div>

          <ContactForm />

        </div>

        <div className="contact__art" aria-hidden="true">
          <img src="assets/casita.png" alt="" />
        </div>
      </section>

    </main>
  </>
  );
}
