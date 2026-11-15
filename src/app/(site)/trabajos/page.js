import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Trabajos | Vecina Digital",
  description:
    "Historias de trabajos hechos juntos: Brilla Books, Fotima, Phersaiz, Fred Hush, Pielesia y ¿Puedo ver la Luna hoy?",
}

const trabajos = [
  {
    name: "Brilla Books",
    text: "Un sello editorial independiente: libros para descubrir, imaginar, aprender y crecer.",
    shot: "/assets/trabajos/brillabooks.webp",
  },
  {
    name: "Fotima",
    text: "Cada fotógrafo tiene su propio espacio. Para quedarse mirando, y para comprar la fotografía.",
    shot: "/assets/trabajos/fotima.webp",
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
    name: "Pielesia",
    text: "Una evaluación cosmética honesta: entender tu piel antes de comprar nada.",
    shot: "/assets/trabajos/pielesia.webp",
  },
  {
    name: "¿Puedo ver la Luna hoy?",
    text: "Para saber si la Luna se ve esta noche en tu cielo.",
    shot: "/assets/trabajos/luna.webp",
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
                  height={1600}
                  sizes="(max-width: 328px) calc(100vw - 48px), 280px"
                />
              </figure>
              <h2 className="work__name">{trabajo.name}</h2>
              <p className="work__text">{trabajo.text}</p>
            </li>
          ))}
        </ol>

        <p className="works__soon">
          Mucho más en camino. Se irá asomando por aquí, sin un orden.
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
