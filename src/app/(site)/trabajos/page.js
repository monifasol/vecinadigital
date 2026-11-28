import Image from "next/image"
import Link from "next/link"
import { buildPageMetadata } from "@/lib/pageMetadata"

export const metadata = buildPageMetadata({
  title: "Trabajos | Vecina Digital",
  description:
    "Cada proyecto, una historia diferente. Brilla Books, Fotima, Phersaiz, Pielesia, Fred Hush y ¿Puedo ver la Luna hoy?",
  path: "/trabajos",
})

const trabajos = {
  brilla: {
    id: "work-brilla",
    name: "Brilla Books",
    text: "Una editorial infantil que invita a descubrir, imaginar y aprender. Una web para dar vida a sus libros y colecciones.",
    href: "https://www.brillabooks.com",
    label: "Visitar Brilla Books",
    shot: "/assets/trabajos/brillabooks-frame.webp",
    width: 1280,
    height: 820,
  },
  fotima: {
    id: "work-fotima",
    name: "Fotima",
    text: "Un lugar donde los fotógrafos comparten y venden su obra, y los visitantes descubren nuevas formas de mirar el mundo.",
    href: "https://www.fotima.art",
    label: "Visitar Fotima",
    shot: "/assets/trabajos/fotima-frame.webp",
    width: 1280,
    height: 780,
  },
  phersaiz: {
    id: "work-phersaiz",
    name: "Phersaiz",
    text: "El universo fotográfico de Fernando Saiz. Naturaleza, viajes y momentos que merecen ser observados.",
    href: "https://phersaiz.com",
    label: "Visitar Phersaiz",
    shot: "/assets/trabajos/phersaiz-frame.webp",
    width: 1280,
    height: 800,
  },
  pielesia: {
    id: "work-pielesia",
    name: "Pielesia",
    text: "Una herramienta para conocer mejor tu piel y tomar decisiones más informadas sobre su cuidado.",
    href: "https://www.pielesia.com",
    label: "Visitar Pielesia",
    shot: "/assets/trabajos/pielesia-wide.webp",
    width: 1280,
    height: 820,
  },
  fred: {
    id: "work-fred",
    name: "Fred Hush",
    text: "La casa digital de Fred Hush, DJ de la escena techno belga. Música, trayectoria y nuevos proyectos.",
    href: "https://www.fredhush.com",
    label: "Visitar Fred Hush",
    shot: "/assets/trabajos/fredhush-frame.webp",
    width: 1280,
    height: 720,
  },
  luna: {
    id: "work-luna",
    name: "¿Puedo ver la Luna hoy?",
    text: "Una pequeña herramienta para descubrir si esta noche podrás ver la Luna desde donde estás.",
    href: "https://caniseethemoontoday.com",
    label: "Visitar la Luna",
    shot: "/assets/trabajos/luna-wide.webp",
    width: 1280,
    height: 720,
  },
}

function WorkShot({ trabajo, sizes, priority = false }) {
  return (
    <a
      className="work__shot"
      href={trabajo.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${trabajo.label} (se abre en una pestaña nueva)`}
    >
      <Image
        src={trabajo.shot}
        alt=""
        width={trabajo.width}
        height={trabajo.height}
        sizes={sizes}
        priority={priority}
      />
    </a>
  )
}

function WorkCopy({ trabajo }) {
  return (
    <div className="work__copy">
      <h2 className="work__name" id={trabajo.id}>
        {trabajo.name}
      </h2>
      <p className="work__text">{trabajo.text}</p>
      <a
        className="work__link"
        href={trabajo.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {trabajo.label}
        <span className="work__link-arrow" aria-hidden="true">
          →
        </span>
        <span className="sr-only"> (se abre en una pestaña nueva)</span>
      </a>
    </div>
  )
}

export default function TrabajosPage() {
  return (
    <main>
      <article className="works">
        <header className="works__header">
          <p className="works__kicker">Trabajos</p>
          <h1 className="works__title">
            Cada proyecto, una historia diferente.
          </h1>
          <p className="works__lead">
            No hay dos personas ni dos negocios iguales. Por eso tampoco
            deberían serlo sus webs. Aquí puedes conocer algunas de las que he
            creado.
          </p>
        </header>

        <div className="works__stage">
          <section
            className="work work--feature"
            aria-labelledby={trabajos.brilla.id}
          >
            <WorkShot
              trabajo={trabajos.brilla}
              sizes="(max-width: 900px) calc(100vw - 48px), min(640px, 58vw)"
              priority
            />
            <WorkCopy trabajo={trabajos.brilla} />
          </section>

          <div className="works__pair">
            <section
              className="work work--pair"
              aria-labelledby={trabajos.fotima.id}
            >
              <WorkShot
                trabajo={trabajos.fotima}
                sizes="(max-width: 760px) calc(100vw - 48px), min(480px, 44vw)"
              />
              <WorkCopy trabajo={trabajos.fotima} />
            </section>

            <section
              className="work work--pair"
              aria-labelledby={trabajos.phersaiz.id}
            >
              <WorkShot
                trabajo={trabajos.phersaiz}
                sizes="(max-width: 760px) calc(100vw - 48px), min(480px, 44vw)"
              />
              <WorkCopy trabajo={trabajos.phersaiz} />
            </section>
          </div>

          <section
            className="work work--feature work--feature-reverse"
            aria-labelledby={trabajos.pielesia.id}
          >
            <WorkCopy trabajo={trabajos.pielesia} />
            <WorkShot
              trabajo={trabajos.pielesia}
              sizes="(max-width: 900px) calc(100vw - 48px), min(640px, 58vw)"
            />
          </section>

          <div className="works__pair">
            <section
              className="work work--pair"
              aria-labelledby={trabajos.fred.id}
            >
              <WorkShot
                trabajo={trabajos.fred}
                sizes="(max-width: 760px) calc(100vw - 48px), min(480px, 44vw)"
              />
              <WorkCopy trabajo={trabajos.fred} />
            </section>

            <section
              className="work work--pair"
              aria-labelledby={trabajos.luna.id}
            >
              <WorkShot
                trabajo={trabajos.luna}
                sizes="(max-width: 760px) calc(100vw - 48px), min(480px, 44vw)"
              />
              <WorkCopy trabajo={trabajos.luna} />
            </section>
          </div>
        </div>

        <aside className="works__invite" aria-labelledby="works-invite-title">
          <h2 className="works__invite-title" id="works-invite-title">
            ¿Y si el próximo proyecto fuera el tuyo?
          </h2>
          <p className="works__invite-text">
            Cuéntame qué tienes en mente. Podemos darle forma juntas.
          </p>
          <Link className="btn" href="/contact">
            Hablemos de tu idea
          </Link>
        </aside>
      </article>
    </main>
  )
}
