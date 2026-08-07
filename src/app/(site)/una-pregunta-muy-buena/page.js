import Link from "next/link"

export const metadata = {
  title: "Una pregunta muy buena | Vecina Digital",
  description:
    "Una reflexión sobre la inteligencia artificial, las ideas y el valor de escuchar antes de construir una página web.",
}

export default function UnaPreguntaMuyBuenaPage() {
  return (
    <main>
      <article className="about-article">
        <header className="about-article__header">
          <h1 className="about-article__title">Una pregunta muy buena.</h1>
        </header>

        <div className="about-article__content">
          <p>
            Hace unos días alguien me dijo una frase que, cuanto más la
            pienso, más convencida estoy de que merece una respuesta:
          </p>

          <p>
            <i>
            “¿Pero para qué contratar a alguien para hacer una web?
            <br/>Si la inteligencia artificial te la hace en un momento.”
            </i>
          </p>

          <p>
            Podría haber intentado convencerle de que estaba equivocada.
            Sin embargo, me fui a casa y le di vueltas. 
            No porque creyera que mi trabajo no tuviera sentido, 
            sino porque comprendí que probablemente muchas personas piensan
            lo mismo. Así que creo que merece la pena explicarlo.
          </p>

          <p>
            La IA puede hacer una página web.
            Puede escribir textos, generar imágenes, aplicaciones o
            resolver tareas que hace unos años costaban muchas más horas de
            trabajo. 
            Todos los desarrolladores la usamos todos los días,
            es una herramienta extraordinaria.
          </p>

          <p>
            En mi caso, lo curioso es que, desde que trabajo con ella,
            cada vez tengo más claro que mi profesión nunca consistió
            realmente en hacer páginas web.
            Pero durante muchos años pensé que sí.
          </p>

          <p>
            En realidad, eso era solo lo que se veía.
            Las páginas web eran el resultado, pero todo lo que pasaba
            antes era el propósito.
            Sentarse con alguien, escuchar, entender qué quiere contar…
            y convertirlo.
          </p>

          <p>
            La tecnología siempre ha sido el idioma con el que doy forma a las
            ideas.
            Antes ese idioma era casi exclusivamente el código.
            Hoy también incluye inteligencia artificial.
            Mañana incluirá herramientas que todavía ni conocemos.
            Lo importante es que el
            idioma cambia, pero la conversación sigue siendo la misma.
          </p>

          <p>
            Por eso creo que la IA ha venido a regalarnos algo muy valioso: tiempo.
            Tiempo que antes dedicabamos a ejecutar y que ahora podemos dedicar a pensar
            mejor, a hacer más preguntas, a cuidar más los detalles y a
            diseñar proyectos con mucha más intención.
          </p>

          <p>
            Hay una frase que resume bastante bien cómo vivo todo esto:
          </p>

          <blockquote className="about-article__pullquote">
            <p>
              “La inteligencia artificial es una herramienta maravillosa. La
              diferencia está en quién la utiliza, para quién y con qué
              criterio y propósito.”
            </p>
          </blockquote>

          <p>
            Siempre ha sido así.
            Un piano no compone una canción.
            Una cámara no cuenta una historia.
            Un pincel no decide qué merece ser pintado ni tiene criterio.
            Las herramientas amplían nuestras capacidades, pero siguen
            necesitando una mirada que les dé dirección.
          </p>

          <p>
            Quizá esa sea la mayor diferencia que ha traído la IA.
            Durante años pensamos que el valor estaba en saber
            ejecutar. Hoy, ejecutar nunca había sido tan accesible.
            Eso significa que el verdadero valor se ha desplazado a otro lugar:
            las ideas, el criterio y la capacidad de entender a las personas.
          </p>

          <div className="about-article__coda">
            <p>Nunca me enamoré de las páginas web.</p>
            <p>Me enamoré de las ideas y del propósito detrás de ellas.</p>
            <p>La tecnología es solo el idioma que utilizo para darles forma.</p>
          </div>
        </div>

        <footer className="about-article__footer">
          <p className="about-article__outro">
            La IA genera.
            <br />
            <span>Una vecina escucha.</span>
          </p>
          <Link className="btn" href="/contact">
            Cuéntame tu idea
          </Link>
        </footer>
      </article>
    </main>
  )
}
