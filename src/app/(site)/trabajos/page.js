import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Trabajos | Vecina Digital",
  description:
    "Historias de trabajos hechos juntos: Fotima, Brilla Books, Phersaiz, Fred Hush, Le Bon Samaritain y Pielesia.",
}

const trabajos = [
  {
    name: "Fotima",
    text: "Un espacio para fotógrafos y su obra. Una presencia digital cuidada, sin publicidad, pensada para mostrar el trabajo y que quien entra se quede mirando.",
    shot: "/assets/trabajos/fotima.webp",
  },
  {
    name: "Brilla Books",
    text: "Un sello editorial independiente: libros para descubrir, imaginar, aprender y crecer.",
    shot: "/assets/trabajos/brillabooks.webp",
  },
  {
    name: "Phersaiz",
    text: "El espacio de Fernando Saiz, fotógrafo. Siempre observando la luz.",
    shot: "/assets/trabajos/phersaiz.webp",
  },
  {
    name: "Fred Hush",
    text: "La web de Fred Hush, DJ de la escena techno belga.",
    shot: "/assets/trabajos/fredhush.webp",
  },
  {
    name: "Le Bon Samaritain",
    text: "La web del complejo hospitalario y universitario Le Bon Samaritain, en Yamena.",
    shot: "/assets/trabajos/samaritain.webp",
  },
  {
    name: "Pielesia",
    text: "Una evaluación cosmética honesta: entender tu piel antes de comprar nada.",
    shot: "/assets/trabajos/pielesia.webp",
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
            Cada uno tiene a alguien detrás. Aquí están, contados en corto.
          </p>
        </header>

        <ol className="works__list">
          {trabajos.map((trabajo) => (
            <li className="work" key={trabajo.shot}>
              <figure className="work__shot">
                <Image
                  src={trabajo.shot}
                  alt=""
                  width={1280}
                  height={1920}
                  sizes="(max-width: 799px) 100vw, 50vw"
                />
              </figure>
              <h2 className="work__name">{trabajo.name}</h2>
              <p className="work__text">{trabajo.text}</p>
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
