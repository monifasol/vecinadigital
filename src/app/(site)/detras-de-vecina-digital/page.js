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
            llego a lugares a los que sola habría tardado mucho más tiempo en llegar.
          </p>

          <p>Creo que esto merece contarse, porque explica bastante bien cómo puedo hacer lo que hago.</p>

          <p>
            Hasta hace muy poco, sacar adelante determinados proyectos significaba
            sí o sí reunir a varias personas alrededor de una mesa. Hacía falta
            alguien para pensar la estrategia, para diseñar, programar,
            escribir, comunicar, dirigir, planificar,... Hoy muchas de esas
            capacidades pueden reunirse en unas mismas manos 
            si detrás hay una persona que sabe qué quiere hacer con ellas. 
            En Vecina Digital, esas manos son las mías.</p>

          <p>
            Y esto es lo que más me fascina de la inteligencia artificial. 
            Que nos permite llegar mucho más lejos con
            lo que sabemos hacer, con lo que hemos aprendido durante años y también con esa parte
            menos fácil de poner en un currículum: la intuición, el gusto, la curiosidad,
            la obsesión por un detalle que quizá nadie más vea y esa sensación bastante
            física de saber cuándo algo todavía no está bien.
          </p>

          <h3>Pero tener las herramientas no basta. </h3>

          <p>Las herramientas no aportan gusto.
            Amplifican el que ya existe.
            Podemos pedirle a una 
            inteligencia artificial que haga mil cosas. 
            Lo hará, pero sin saber exactamente nuestro porqué o nuestro para qué.
            No conoce tanto a la persona que hay al otro lado como una misma.
            No sabe cuándo una palabra sobra, cuándo una página está
            técnicamente perfecta pero no transmite nada,
            cuándo una idea tiene algo especial,
            o merece la pena que tiremos del hilo un poco más.
          </p>

          <h3>Este año creé mi propia editorial</h3>

          <p>
            La IA amplifica nuestras capacidades. Lo he vivido 
            de una forma muy clara creando{" "}
            <a href="https://www.brillabooks.com" target="_blank" rel="noopener noreferrer">
              Brilla Books
            </a>.
            Hace no mucho, esa idea necesitaba contratar un
            equipo antes incluso de poder empezar. Diseño, producción, desarrollo,
            comunicación, gestión, publicidad,... y más.
            Hoy eso es posible en una empresa de una sola persona,
            gracias a poder acompañar todo el camino de mis libros desde 
            la primera idea hasta el último detalle, utilizando la inteligencia 
            artificial allí donde me ayuda a ampliar mis capacidades.
          </p>

          <p>Y eso, para alguien como yo,
            se siente como un sueño hecho realidad. 
            Poder acompañar una idea sin tener que partirla en pedazos 
            y repartirla entre departamentos, sino poder cuidarla entera de principio a fin.
          </p>

          <h3>Justo eso es Vecina Digital.</h3>

          <p>
            Si me cuentas una idea, soy yo quien te escucha.
            La que hace preguntas, 
            la que la que conecta con lo que necesitas de verdad,
            la que busca la manera de hacerlo posible,
            la que construye, revisa, cambia de opinión, 
            vuelve atrás si hace falta y responde
            por el resultado.
          </p>

          <p>
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
            <span>Una vecina escucha, conecta, y crea.</span>
          </p>

          <Link className="btn" href="/contact">
            Cuéntame tu idea
          </Link>
        </footer>
      </article>
    </main>
  )
}
