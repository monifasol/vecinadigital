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
          <h1 className="about-article__title">Una empresa de una persona.</h1>
        </header>

        <div className="about-article__content">

          <p>
            Vecina Digital es una empresa de una persona. Pero no es una empresa sin equipo.
          </p>

          <p>
            Soy ingeniera informática y trabajo con inteligencia artificial todos los días. La utilizo para investigar, 
            explorar posibilidades, programar, diseñar sistemas, probar soluciones y automatizar procesos. Tareas que hasta 
            hace muy poco habrían necesitado distintas personas, perfiles especializados y muchas horas de coordinación 
            hoy pueden reunirse en unas mismas manos. En este caso, las mías.
          </p>

          <p>
            La inteligencia artificial ha hecho posible algo extraordinario: que una sola persona pueda levantar proyectos 
            que antes exigían montar una empresa entera.
          </p>

          <p>
            No porque el trabajo haya desaparecido, sino porque nuestra capacidad para hacerlo se ha multiplicado.
          </p>

          <p>
            Para mí, la IA no es un atajo. Es una nueva forma de trabajar.
          </p>

          <p>
            Me permite desarrollar una idea desde el principio hasta el final sin dividirla entre departamentos. 
            Puedo pensar la estrategia, diseñar la experiencia, construir la tecnología y cuidar el resultado 
            manteniendo una misma mirada durante todo el proceso.
          </p>

          <p>
            Pero tener acceso a estas herramientas no basta.
          </p>

          <p>
            Se pueden utilizar de forma genérica para crear cosas genéricas. 
            O se pueden aprender a dirigir para hacer realidad algo singular, 
            coherente y profundamente propio.
          </p>

          <p>
            Ahí sigue estando la diferencia.
          </p>

          <p>
            La inteligencia artificial puede proponer, generar, analizar y acelerar. 
            Pero no tiene una visión que defender. No sabe qué merece existir, qué emoción 
            queremos provocar ni qué detalle convierte algo correcto en algo especial.
          </p>

          <p>
            Las herramientas no aportan gusto. Amplifican el que ya existe.
          </p>

          <p>
            Por eso creo que esta tecnología abre una posibilidad enorme para las personas creativas: 
            permite que quienes tienen buenas ideas, criterio y sensibilidad puedan llevarlas mucho más lejos. 
            Proyectos que antes habrían sido inviables (por tiempo, por presupuesto o por la estructura necesaria p
            ara realizarlos) ahora pueden hacerse realidad.
          </p>

          <p>
            Yo lo he vivido al crear 
            <a href="http://www.brillabooks.com" target="_blank">Brilla Books </a>, 
            mi editorial de libros.
          </p>

          <p>
            Una idea así habría requerido, no hace tanto, reunir un equipo completo antes incluso de poder empezar:
            dirección creativa, diseño, desarrollo, producción, comunicación y gestión.
            Hoy puedo dirigir todas esas piezas desde una empresa de una sola persona, apoyándome en la 
            inteligencia artificial allí donde amplía mis capacidades.
          </p>

          <p>
            La visión creativa sigue siendo humana.
          </p>

          <p>
            También lo son la intención, el criterio, la sensibilidad y la responsabilidad sobre el resultado. Ese alma artística no desaparece cuando aparece una herramienta nueva. Al contrario: encuentra más maneras de expresarse.
          </p>

          <p>
            En Vecina Digital no hay una cadena de personas pasándose un proyecto de unas manos a otras. Hay una conversación directa entre quien tiene una idea y quien se responsabiliza de convertirla en algo real.
          </p>

          <p>
            Soy quien escucha, quien hace las preguntas, quien marca la dirección, quien revisa, conecta y decide, y también quien responde por el resultado.
            Eso es Vecina Digital: Una empresa pequeña por fuera, y enorme en posibilidades.
          </p>

          <p>
            Hay una frase que resume bastante bien cómo vivo yo todo esto:
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
            Un pincel no decide ni tiene criterio.
            Las herramientas siguen necesitando una mirada que les dé dirección.
          </p>

          <p>
            Quizá esa sea la mayor diferencia que ha traído la IA.
            Durante años pensamos que el valor estaba en saber
            ejecutar. Hoy, ejecutar nunca había sido tan accesible.
            Eso significa que el verdadero valor se ha desplazado a otro lugar:
            las ideas, el criterio y la capacidad de entender a las personas.
          </p>

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
