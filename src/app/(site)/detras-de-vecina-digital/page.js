import Link from "next/link"

export const metadata = {
  title: "Detrás de Vecina Digital | Vecina Digital",
  description:
    "Cómo trabajo con inteligencia artificial en Vecina Digital: una empresa de una persona que escucha, crea y cuida cada proyecto.",
}

export default function DetrasDeVecinaDigitalPage() {
  return (
    <main>
      <article className="about-article">
        <header className="about-article__header">
          <h1 className="about-article__title">Una empresa de una persona.</h1>
        </header>

        <div className="about-article__content">
          <p><b>Vecina Digital es una empresa de una persona.</b> ¡Pero no es una empresa sin equipo!</p>

          <p>
            Soy <b>ingeniera informática</b> desde hace más de 20 años y desde hace 3 trabajo
             con inteligencia artificial todos los días.
            Investigo con ella, programo, pruebo ideas, busco caminos, diseño sistemas,
            automatizo cosas que no tiene ningún sentido hacer a mano y, muchas veces,
            llego a lugares a los que sola habría tardado semanas en llegar.
          </p>

          <p>Y creo que esto merece contarse, porque explica bastante bien cómo puedo hacer lo que hago.</p>

          <p>
            Hasta hace muy poco, sacar adelante determinados proyectos significaba
            sí o sí reunir a varias personas alrededor de una mesa. Hacía falta
            alguien para pensar la estrategia, alguien para diseñar, para programar,
            escribir, comunicaar, dirigir, planificar, decidir... Hoy muchas de esas
            capacidades pueden reunirse en unas mismas manos, si detrás hay una persona
            que sabe qué quiere hacer con ellas. 
            En Vecina Digital, esas manos son las mías.</p>

          <p>
            Y esto es lo que más me fascina de la inteligencia artificial. 
            No que haga el trabajo por mí, sino que me permite llegar mucho más lejos con
            lo que sé hacer, con lo que he aprendido durante años y también con esa parte
            menos fácil de poner en un currículum: la intuición, el gusto, la curiosidad,
            la obsesión por un detalle que quizá nadie más vea y esa sensación bastante
            física de saber cuándo algo todavía no está bien.
          </p>

          <p><b>Tener las herramientas no basta.</b> Podemos pedirle a una 
            inteligencia artificial que haga mil cosas. 
            Lo hará, pero sin saber exactamente nuestro porqué y para qué.
            No conoce tanto a la persona que hay al otro lado como una misma.
            No sabe cuándo una palabra sobra, cuándo una página está
            técnicamente perfecta pero no transmite nada,
            cuándo una idea tiene algo especial,
            o merece la pena que tiremos del hilo un poco más.
          </p>

          <p>¡Eso sigue siendo nuestro!
            Las herramientas no aportan gusto.
            Amplifican el que ya existe.
          </p>

          <h3>Brilla Books, mi editorial</h3>

          <p>
            Lo he vivido de una forma muy clara creando{" "}
            <a href="https://www.brillabooks.com" target="_blank" rel="noopener noreferrer">
              Brilla Books
            </a>. Hace no mucho, esa idea necesitaba contratar un
            equipo antes incluso de poder empezar. Diseño, producción, desarrollo,
            comunicación, gestión... y más. Hoy ese sueño se ha hecho realidad
            y yo acompaño todo el camino de mis libros desde la primera idea hasta 
            el último detalle, utilizando la inteligencia artificial solo allí donde
            me ayuda a ampliar mis capacidades,
            pero sin delegar nunca la dirección del proyecto, ni el criterio, ni la creatividad.
          </p>

          <p>Y eso, para alguien como yo, ¡es una barbaridad! 
            El poder acompañar una idea sin tener que partirla en pedazos 
            y repartirla entre departamentos, sino poder cuidarla entera de princpio a fin.
          </p>

          <p>Justo eso es Vecina Digital.</p>

          <p>
            Aquí no hay una cadena de personas pasándose un proyecto de unas manos a otras.
            Si me cuentas una idea, soy yo quien te escucha. La que hace preguntas, la que
            intenta entender qué necesitas de verdad (que no siempre es exactamente lo que
            pensabas al principio), la que busca la manera de hacerlo posible, la que
            construye, revisa, cambia de opinión, vuelve atrás si hace falta y responde
            por el resultado.
          </p>

          <p>
            Tengo herramientas extraordinarias a mi alrededor. Algunas, sinceramente,
            todavía me parecen ciencia ficción. Pero vuelvo a lo que dije antes: 
            tener las herramientas no basta. 
            Un piano no compone una canción porque alguien se siente delante. Una cámara
            maravillosa no convierte automáticamente una fotografía en algo que te emociona.
            Un pincel no sabe qué pintar. 
            <b> Hace falta alguien al otro lado.</b>
          </p>

          <p>
            Y quizás por eso, cuanto más capaz se vuelve la tecnología, más importante me
            parece todo lo que no puede poner ella: las ideas, el criterio, la sensibilidad
            y, sobre todo, la capacidad de mirar a otra persona y saber entender qué necesita.
          </p>
        </div>

        <footer className="about-article__footer">
          <p className="about-article__outro">
            La inteligencia artificial genera.
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
