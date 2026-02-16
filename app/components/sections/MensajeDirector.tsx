import { memo } from 'react';

const MensajeDirector = memo(() => (
  <div className="p-8 max-w-5xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-latam-blue-900 animate-fade-in">
      Mensaje del Director
    </h2>

    <div className="bg-gradient-to-br from-latam-blue-50 via-white to-latam-blue-100 p-8 md:p-12 rounded-2xl mb-8 shadow-xl animate-scale-in relative overflow-hidden">
      {/* Efecto de fondo decorativo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-latam-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-latam-blue/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Encabezado del director */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in animation-delay-100">
          <div className="p-3 bg-gradient-to-br from-latam-blue to-latam-blue-700 rounded-xl shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-latam-gray-600 font-medium">Johann Tello Meryk</p>
            <p className="text-xs text-latam-orange font-semibold">Fundador y Director</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg leading-relaxed text-latam-gray-700 animate-fade-in animation-delay-200">
            Cuando fundamos Latam Digital en 2007, lo hicimos con una convicción
            clara: ofrecer servicios que generaran valor real a nuestros clientes,
            diferenciándonos de lo que veíamos en el mercado.
          </p>

          <p className="text-lg leading-relaxed text-latam-gray-700 animate-fade-in animation-delay-300">
            La mayoría de las firmas consultoras tienen una desconexión entre la
            experiencia y la academia. Muchos conceptos, poca vivencia del mundo
            real. Todo basado en la teoría. Nosotros decidimos tomar un camino
            diferente.
          </p>

          <p className="text-lg leading-relaxed text-latam-gray-700 animate-fade-in animation-delay-400">
            Nuestro objetivo desde el primer día ha sido claro:{' '}
            <strong className="text-latam-blue">
              Academia + Experiencia + Cultura de Servicio = Resultados
              Garantizados
            </strong>
            . Esta fórmula nos ha permitido no solo sobrevivir, sino evolucionar
            constantemente durante casi dos décadas.
          </p>

          {/* Momento destacado */}
          <div className="bg-white p-6 rounded-xl my-6 border-l-4 border-latam-blue-600 shadow-md hover:shadow-lg transition-all duration-300 card-hover animate-slide-in-left animation-delay-500">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-1 bg-latam-orange rounded-full" />
              <p className="text-lg font-semibold text-latam-blue-800">
                Un momento que marcó nuestro rumbo
              </p>
            </div>
            <p className="text-lg leading-relaxed text-latam-gray-700">
              La implementación de COBIT 2019 en Banistmo fue un punto de
              inflexión. Nos demostró que cuando combinamos conocimiento profundo,
              experiencia práctica y compromiso genuino, podemos resolver desafíos
              complejos en organizaciones de alto nivel.
            </p>
          </div>

          <p className="text-lg leading-relaxed text-latam-gray-700 animate-fade-in animation-delay-600">
            En nuestro ADN está la innovación. El mundo avanza en inteligencia
            artificial a un ritmo acelerado, y nosotros no solo lo seguimos, lo
            anticipamos. Por eso hemos evolucionado constantemente: de consultoría
            tradicional a servicios digitales, de ecosistemas digitales a
            soluciones de IA, y ahora, pioneros en soluciones médicas digitales y
            bioinformática.
          </p>

          <p className="text-lg leading-relaxed text-latam-gray-700 animate-fade-in animation-delay-700">
            Este 2026 marca otro momento decisivo con el desarrollo de{' '}
            <strong className="text-latam-orange">Microbiome Radar</strong>, un
            proyecto que representa nuestra apuesta por la innovación que rompe
            esquemas. Es muy posible que nos especialicemos cada vez más en
            sectores que demanden alta innovación y que estén listos para
            transformarse.
          </p>

          {/* Valores innegociables */}
          <div className="bg-gradient-to-r from-latam-blue-900 via-latam-blue-800 to-latam-blue-900 text-white p-8 rounded-xl my-8 shadow-2xl animate-scale-in relative overflow-hidden">
            <div className="absolute inset-0 shimmer opacity-10" />
            <div className="relative z-10">
              <p className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-latam-orange rounded-full animate-pulse" />
                Valores innegociables
              </p>
              <p className="text-lg leading-relaxed">
                En 19 años han intentado llevarnos al camino de la corrupción, y lo
                hemos rechazado. Nuestros valores éticos y morales son innegociables.
                Somos honestos con nuestros clientes, transparentes en nuestras
                relaciones y comprometidos con la excelencia.
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-latam-gray-700 animate-fade-in">
            Lo que nos emociona del futuro de la tecnología aplicada es todo. Cada
            reconocimiento que hemos ganado —desde Microsoft Startup Founder Hub
            hasta el Premio Nacional de Innovación 2024, pasando por la distinción
            de la Universidad Técnica de Berlín— valida que estamos en el camino
            correcto.
          </p>

          <p className="text-lg leading-relaxed text-latam-gray-700 animate-fade-in">
            Pero más que los premios, lo que realmente nos impulsa es ver cómo el
            95% de nuestro talento en outsourcing es internalizado por nuestros
            clientes en promedio de 18 meses. No es una condición contractual. Es
            la consecuencia directa de un servicio sólido, cercano y alineado con
            los objetivos del negocio.
          </p>

          {/* Cita final */}
          <div className="mt-10 pt-8 border-t-2 border-latam-blue-200 animate-fade-in">
            <div className="relative group">
              <span className="absolute -top-6 -left-2 text-5xl text-latam-orange/20 font-serif">"</span>
              <p className="text-2xl font-bold text-latam-blue-900 italic pl-4 group-hover:text-latam-orange transition-colors duration-300">
                En Latam Digital no vendemos tecnología. Construimos relaciones
                de confianza, ejecutamos con sensatez y hacemos que la tecnología
                genere valor real para el negocio.
              </p>
              <span className="absolute -bottom-6 -right-2 text-5xl text-latam-orange/20 font-serif">"</span>
            </div>
            <div className="flex items-center justify-end gap-3 mt-6">
              <div className="h-px w-16 bg-gradient-to-l from-latam-orange to-transparent" />
              <p className="text-right text-latam-gray-600 font-medium">— Johann Tello Meryk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

MensajeDirector.displayName = 'MensajeDirector';

export default MensajeDirector;
