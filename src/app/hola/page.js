import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "¡Hola! · Vecina Digital",
  description:
    "Qué alegría que hayas entrado. Gracias por guardar esta tarjeta.",
}

export default function HolaPage() {
  return (
    <main className="hola">
      <section className="hola-hero" aria-labelledby="hola-title">
        <div className="hola-hero__door" aria-hidden="true">
          <Image
            src="/assets/identidad-vecina-digital-acuarela/puerta-acuarela.webp"
            alt=""
            width={1332}
            height={1181}
            priority
          />
        </div>

        <h1 className="hola-hero__title" id="hola-title">
          ¡Hola!
        </h1>

        <p className="hola-hero__name">Soy Mónica.</p>

        <p className="hola-hero__aside">
          Si has llegado hasta aquí, probablemente nos hemos conocido en
          persona.
        </p>

        <p className="hola-hero__welcome">
          Gracias por guardar esta tarjeta.
          <br />
          ¡Qué alegría que hayas entrado!
        </p>
      </section>

      <section className="hola-body" aria-label="Unas palabras">
        <p>No creo que todos los negocios necesiten una web enorme.</p>
        <p>
          A veces lo que más hace falta es alguien que explique las cosas con
          claridad.
        </p>
        <p>
          Si crees que puedo ayudarte, me encantaría conocer tu negocio. No
          hace falta que sepas nada de páginas web. Solo cuéntame cómo es tu
          negocio.
        </p>
      </section>

      <section className="hola-cta" aria-label="Cómo contactar">
        <Link className="btn" href="/contact">
          Cuéntame tu proyecto
        </Link>
        <a
          className="btn btn--ghost"
          href="https://wa.me/34622210151"
          target="_blank"
          rel="noopener noreferrer"
        >
          Escribirme por WhatsApp
        </a>
      </section>

      <p className="hola-web-invite">
        Si te apetece, <Link href="/">echa un vistazo a la web</Link>.
      </p>

      {/* Guía de regalo — pendiente de contenido
      <section className="hola-gift" aria-labelledby="hola-gift-title">
        <h2 className="hola-gift__title" id="hola-gift-title">
          Un pequeño regalo
        </h2>
        <p className="hola-gift__text">
          He preparado una pequeña guía gratuita con algunas ideas para que tu
          negocio transmita mejor todo el cariño que ya pones en él.
        </p>
        <button className="btn btn--ghost" type="button">
          Descargar la guía
        </button>
      </section>
      */}

      <p className="hola-closing">Gracias por pasarte por aquí.</p>
    </main>
  )
}
