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
            Hubo un momento en que sentí que iba demasiado deprisa.
            No quería dejar de trabajar en esto.
            Solo quería hacerlo con más calma, con más sentido,
            y de una forma que encajara mejor con mi vida.
          </p>

          <p>
            Vecina Digital no nació porque quisiera crear una empresa.
            Nació porque quería que los pequeños negocios del lugar donde vivo tuvieran la oportunidad de ser encontrados, crecer y seguir formando parte de la vida del pueblo.
          </p>


          <div className="about-reveal">
            <figure className="about-reveal__figure" aria-hidden="true">
              <Image
                src="/assets/monica-behind-door.png"
                alt=""
                width={320}
                height={400}
              />
            </figure>

            <div className="about-reveal__copy">
              <h2 className="about-article__subtitle">
                ¡Hola! Soy Mónica.
              </h2>

              <p className="about-article__intro">
                Vivo en Villablino y ayudo a pequeños negocios a tener
                una presencia online sencilla, bonita y útil, sin complicaciones ni tecnicismos.
              </p>
            </div>
          </div>

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
            Este proyecto nace de una forma de ser: de la sensibilidad, de la necesidad de
            conexiones humanas a pesar de lo técnico, y muy consciente de que,
            cuando hablamos de una web, en realidad hablamos de personas, 
            de sus vidas y de aquello que les importa.
          </p>

          <p>
            En todo este tiempo, he visto demasiadas webs hechas con prisa, y
            demasiado lenguaje que excluye, tecnología que complica, y
            gente pensando que Internet no es para ellas.
          </p>

          <p>
            Vecina Digital aparece justo desde ahí. Es una manera de decir:{" "}
            esto se puede hacer de otra manera, desde lo humano,
            de personas para personas, como una conversación con tu vecina.
          </p>

          <p>
            Trabajo con proyectos pequeños y medianos, donde las cosas
            importantes no van de tendencias sino de confianza. Me importa el
            proyecto, pero sobre todo me importa que quien está al otro lado se
            sienta acompañado.
          </p>
                      
          <h2 className="about-article__subtitle">
            El "para qué"
          </h2>

          <p>
            Quiero abrir puertas para que el talento de nuestros pueblos pueda ser encontrado.
          </p>
          <p>
            Así que estoy aquí para ayudarte a que tu negocio sea encontrado,
            crezca y siga formando parte de la vida de tu comunidad.
          </p>
          <p>
            ¡Y estoy deseando conocerte y conocer tu proyecto!
          </p>
        </div>
      </article>
    </main>
  )
}