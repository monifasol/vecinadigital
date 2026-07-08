import ContactForm from "./ContactForm"

export const metadata = {
  title: "Contacto · Vecina Digital",
  description: "Estás en casa. Escríbeme y lo vemos juntos.",
}

export default function ContactPage() {

  return (
    <main>
      <section id="contacto" className="section contact">
        <div className="contact__copy">

          <div className="contact__intro">
            <h1 className="hero__title">
              Estás en casa.
              <br />
              <span className="hero__title-accent">Escríbeme.</span>
            </h1>

            <p className="contact__lead">
              Si me cuentas en 2 o 3 líneas, te digo cuál es el mejor punto de partida.
              Te respondo con claridad y luego tú decides.
            </p>
          </div>

          <div className="contact__art" aria-hidden="true">
            <img src="/assets/casita.png" alt="" />
          </div>

          <div className="contact__actions">
            <div className="contact__aside">
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

              <p className="contact__tiny">
                Si lo prefieres, también puedes usar el formulario.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}