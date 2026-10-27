import Image from "next/image"
import PrintButton from "./PrintButton"
import styles from "./page.module.css"

/** Textos del vale. Para cambiar el regalo, edita aquí. */
const vale = {
  title: "Vale regalo",
  subtitle: "Una web para tu negocio",
  lead:
    "Un regalo para ese negocio que ya tienes, o esa idea pendiente.",
  includes:
    "Este vale incluye una página de presentación con la información de tu negocio, servicios y contacto.",
  valueLabel: "Valorado en",
  valueAmount: "180 €",
  passAlong: "¿No tienes negocio? ¡Puedes regalárselo a alguien!",
  dedication:
    "Con cariño, para la cesta de Navidad del Club de Balonmano de Caboalles de Abajo.",
  contactLabel: "Hablamos y le damos forma:",
  email: "hola@vecinadigital.com",
  web: "www.vecinadigital.com",
}

export const metadata = {
  title: "Vale regalo · Vecina Digital",
  description:
    "Un vale para una página de presentación: la información del negocio, los servicios y el contacto.",
  robots: { index: false, follow: false },
}

export default function ValePaginaSencillaPage() {
  return (
    <main className={styles.stage}>
      <div className={styles.toolbar}>
        <p className={styles.hint}>
          Orientación horizontal. En el cuadro de impresión, desactiva los
          encabezados y pies del navegador.
        </p>
        <PrintButton />
      </div>

      <article className={styles.sheet} aria-label="Vale regalo">
        <header className={styles.brand}>
          <Image
            className={styles.logo}
            src="/assets/identidad-vecina-digital-acuarela/logo-vecina-digital-horizontal.png"
            alt="Vecina Digital"
            width={1864}
            height={724}
            priority
          />
        </header>

        <div className={styles.main}>
          <div className={styles.copy}>
            <h1 className={styles.title}>{vale.title}</h1>
            <p className={styles.subtitle}>{vale.subtitle}</p>
            <hr className={styles.rule} />
            <p className={styles.lead}>{vale.lead}</p>
            <p className={styles.includes}>{vale.includes}</p>
            <p className={styles.value}>
              <span className={styles.valueLabel}>{vale.valueLabel}</span>
              <strong>{vale.valueAmount}</strong>
            </p>
            <p className={styles.pass}>{vale.passAlong}</p>
          </div>

          <div className={styles.side}>
            <figure className={styles.art} aria-hidden="true">
              <Image
                src="/assets/identidad-vecina-digital-acuarela/casa-acuarela.webp"
                alt=""
                width={1327}
                height={1185}
                priority
              />
            </figure>
            <div className={styles.contact}>
              <p className={styles.contactLabel}>{vale.contactLabel}</p>
              <p>
                <a href={`mailto:${vale.email}`}>{vale.email}</a>
              </p>
              <p>
                <a href={`https://${vale.web}`}>{vale.web}</a>
              </p>
            </div>
          </div>
        </div>

        <footer className={styles.foot}>
          <p className={styles.dedication}>{vale.dedication}</p>
        </footer>
      </article>
    </main>
  )
}
