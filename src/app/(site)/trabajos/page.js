import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Trabajos | Vecina Digital",
  description:
    "Historias de trabajos hechos juntos: Fotima, Brilla Books, Phersaiz, Fred Hush y Le Bon Samaritain.",
}

const trabajos = [
  {
    name: "Fotima",
    text: "Un espacio para fotógrafos y su obra. Una presencia digital cuidada, sin publicidad, pensada para mostrar el trabajo y que quien entra se quede mirando.",
    href: "https://fotima.art",
    label: "fotima.art",
    shot: "/assets/trabajos/fotima.webp",
    shotPosition: "center",
  },
  {
    name: "Brilla Books",
    text: "Un sello editorial independiente: libros para descubrir, imaginar, aprender y crecer.",
    href: "https://www.brillabooks.com",
    label: "brillabooks.com",
    shot: "/assets/trabajos/brillabooks.webp",
  },
  {
    name: "Phersaiz",
    text: "El espacio de Fernando Saiz, fotógrafo. Siempre observando la luz.",
    href: "https://phersaiz.com",
    label: "phersaiz.com",
    shot: "/assets/trabajos/phersaiz-colecciones.webp",
  },
  {
    name: "Fred Hush",
    text: "La web de Fred Hush, DJ de la escena techno belga.",
    href: "https://www.fredhush.com",
    label: "fredhush.com",
    shot: "/assets/trabajos/fredhush-portada.webp",
  },
  {
    name: "Le Bon Samaritain",
    text: "La web del complejo hospitalario y universitario Le Bon Samaritain, en Yamena.",
    href: "https://chu-lebonsamaritain.org",
    label: "chu-lebonsamaritain.org",
    shot: "/assets/trabajos/samaritain.webp",
  },
]

export default function TrabajosPage() {
  return (
    <main>
      <article className="works">
        <header className="works__header">
          <p className="works__kicker">Trabajos</p>
          <h1 className="works__title">
            Historias de trabajos
            <br />
            hechos juntos
          </h1>
          <p className="works__lead">
            Cada uno tiene a alguien detrás. Aquí están contados en corto:
            qué son, y dónde puedes entrar a verlos.
          </p>
        </header>

        <ol className="works__list">
          {trabajos.map((trabajo) => (
            <li className="work" key={trabajo.href}>
              <a
                className="work__shot"
                href={trabajo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver la portada de ${trabajo.name} (se abre en una pestaña nueva)`}
              >
                <Image
                  src={trabajo.shot}
                  alt=""
                  fill
                  sizes="(max-width: 799px) 100vw, 480px"
                  className={
                    trabajo.shotPosition === "center"
                      ? "work__shot-img work__shot-img--center"
                      : "work__shot-img"
                  }
                />
              </a>
              <h2 className="work__name">{trabajo.name}</h2>
              <p className="work__text">{trabajo.text}</p>
              <a
                className="work__link"
                href={trabajo.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {trabajo.label}
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
          ))}
        </ol>

        <p className="works__soon">
          Hay algo más en camino. Cuando esté listo para enseñarse,
          tendrá su sitio aquí.
        </p>

        <div className="works__cta">
          <Link className="btn" href="/contact">
            Cuéntame el tuyo
          </Link>
        </div>
      </article>
    </main>
  )
}
