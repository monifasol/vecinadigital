import Image from "next/image"

export const metadata = {
  title: "Sobre Vecina Digital",
  description:
    "Quién soy, por qué existe Vecina Digital y desde dónde está hecho este proyecto.",
}

export default function SobrePage() {
  return (
    <main>
      <article className="about-article">
        <header className="about-article__header">
          <h1 className="about-article__title">
            Detrás de esta puerta
            <br />
            hay una persona.
          </h1>
        </header>

        <div className="about-article__content">
          <p>
            <strong>Vecina Digital no nació como una idea de negocio.</strong>
          </p>

          <p>
            Nació como una necesidad de bajar el ritmo.
            <br />
            De trabajar de otra manera.
            <br />
            De volver a sentir que lo que hago tiene sentido
            <br />
            y está conectado con la vida que quiero vivir.
          </p>

          <div className="about-illustration" aria-hidden="true">
            <Image
              src="/assets/monica-behind-door.png"
              alt=""
              width={320}
              height={320}
              aria-hidden="true"
            />
          </div>

          <h2 className="about-article__subtitle">
            Quién está detrás de esa puerta
          </h2>

          <p className="about-article__intro">
            Hola, soy Mónica. Vivo en Villablino y ayudo a pequeños negocios a tener
            una presencia online sencilla, bonita y útil, sin complicaciones ni tecnicismos.
          </p>

          <p>
            Mamá de Len y Dahlia. <br />
            Amante de la calma, del café, de la naturaleza, de las personas, de la
            diversidad, de escuchar y aprender, y de una forma más humana de
            estar en el mundo.
            <br />
          </p>

          <p>
            Sensible por naturaleza, neurodiversa y apasionada, 
            trabajo mejor cuando las cosas tienen sentido, 
            están bien pensadas y respetan a las personas que las usan.
          </p>

          <p>
            Trabajo en diseño y desarrollo web desde hace veinte años. 
            He trabajado en proyectos grandes y pequeños, 
            y si algo he aprendido es que lo más importante 
            casi nunca es lo visible, sino la estructura que lo sostiene.
            <br />
            La usabilidad, la accesibilidad, el rendimiento, 
            la sostenibilidad, lo emocional...{" "}
            <br />
            <em>El cuidado de los detalles</em>: todo eso que hace que una web
            funcione bien y sea un placer usarla.
          </p>

          <h2 className="about-article__subtitle">
            Por qué existe Vecina Digital
          </h2>

          <p>
            Este proyecto no nace solo de lo técnico.
            <br />
            Nace de una forma de ser: de la sensibilidad, de la necesidad de
            conexiones humanas a pesar de lo técnico, y muy consciente de que,
            cuando hablamos de una web, en realidad hablamos de personas. De
            sus vidas y de aquello que les importa.
          </p>

          <p>
            En todo este tiempo, he visto demasiadas webs hechas con prisa, y
            demasiado lenguaje que excluye, tecnología que complica, y
            gente pensando que Internet no es para ellas.
          </p>

          <p>
            Vecina Digital aparece justo desde ahí. Es una manera de decir:{" "}
            <em>esto se puede hacer de otra manera: desde lo humano</em>.
            De personas para personas, como una conversación con tu vecina.
          </p>

          <p>
            Trabajo con proyectos pequeños y medianos, donde las cosas
            importantes no van de tendencias sino de confianza. Me importa el
            proyecto, pero sobre todo me importa que quien está al otro lado se
            sienta acompañado.
          </p>

          <p className="about-article__closing">
            Vecina Digital es una forma muy consciente de estar en el mundo
            digital
            <br />
            sin perder lo humano.
            <br />
            Porque lo humano no es lo contrario de lo técnico.
            <br />
            Es hacerlo con criterio.

            <span>
              Esto es quién soy.
              <br />
              ¿Te quedas?
            </span>
          </p>
        </div>
      </article>
    </main>
  )
}