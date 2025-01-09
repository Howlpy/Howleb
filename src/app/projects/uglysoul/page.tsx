import Image from 'next/image';
import Link from 'next/link';

export default function Project1() {
  return (
    <div className="min-h-screen bg-gradient-dark text-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Uglysoul AI
        </h1>
        <div className="flex justify-center mb-8">
        <Image
          src="/uglysoul.webp?height=300&width=600"
          alt="Imagen del bot Uglysoul"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mb-8"
        />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl mb-4 text-center">
            Uglysoul es un bot de inteligencia artificial para Discord, diseñado para comprender y mejorar la interacción con los usuarios a través de análisis de sentimiento, detección de intenciones y procesamiento de lenguaje natural.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Características principales</h2>
          <ul className="list-disc space-y-2 pl-5  text-center list-none">
            <li>- Analiza emociones y adapta respuestas de manera empática.</li>
            <li>- Detecta intenciones y entidades usando NLP avanzado.</li>
            <li>- Realiza aprendizaje reflexivo con retroalimentación.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Tecnologías utilizadas</h2>
          <p className="text-center">
            Este proyecto fue desarrollado utilizando las siguientes tecnologías:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-center list-none">
            <li>- React y Next.js para la interfaz.</li>
            <li>- TypeScript para un tipado seguro.</li>
            <li>- Tailwind CSS para estilos modernos y eficientes.</li>
            <li>- spaCy y Transformers para PLN avanzado.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Impacto y Resultados</h2>
          <p className="text-center">
            Uglysoul mejora la experiencia en comunidades de Discord al ofrecer respuestas más humanas y comprensivas, aumentando la participación y la calidad de las conversaciones.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  )
}
