import { memo } from 'react';

const MensajeDirector = memo(() => (
  <div className="p-8 max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-6 text-latam-blue-900">
      Mensaje del Director
    </h2>

    <div className="bg-gradient-to-br from-latam-blue-50 to-latam-blue-100 p-8 rounded-lg mb-8">
      <p className="text-sm text-latam-gray-600 mb-4">
        Johann Tello Meryk | Fundador y Director
      </p>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-lg leading-relaxed text-latam-gray-700">
          Cuando fundamos Latam Digital en 2007, lo hicimos con una convicción
          clara: ofrecer servicios que generaran valor real a nuestros clientes,
          diferenciándonos de lo que veíamos en el mercado.
        </p>

        <p className="text-lg leading-relaxed text-latam-gray-700">
          La mayoría de las firmas consultoras tienen una desconexión entre la
          experiencia y la academia. Muchos conceptos, poca vivencia del mundo
          real. Todo basado en la teoría. Nosotros decidimos tomar un camino
          diferente.
        </p>

        <p className="text-lg leading-relaxed text-latam-gray-700">
          Nuestro objetivo desde el primer día ha sido claro:{' '}
          <strong>
            Academia + Experiencia + Cultura de Servicio = Resultados
            Garantizados
          </strong>
          . Esta fórmula nos ha permitido no solo sobrevivir, sino evolucionar
          constantemente durante casi dos décadas.
        </p>

        <div className="bg-white p-6 rounded-lg my-6 border-l-4 border-latam-blue-600">
          <p className="text-lg font-semibold mb-3 text-latam-blue-800">
            Un momento que marcó nuestro rumbo
          </p>
          <p className="text-lg leading-relaxed text-latam-gray-700">
            La implementación de COBIT 2019 en Banistmo fue un punto de
            inflexión. Nos demostró que cuando combinamos conocimiento profundo,
            experiencia práctica y compromiso genuino, podemos resolver desafíos
            complejos en organizaciones de alto nivel.
          </p>
        </div>

        <p className="text-lg leading-relaxed text-latam-gray-700">
          En nuestro ADN está la innovación. El mundo avanza en inteligencia
          artificial a un ritmo acelerado, y nosotros no solo lo seguimos, lo
          anticipamos. Por eso hemos evolucionado constantemente: de consultoría
          tradicional a servicios digitales, de ecosistemas digitales a
          soluciones de IA, y ahora, pioneros en soluciones médicas digitales y
          bioinformática.
        </p>

        <p className="text-lg leading-relaxed text-latam-gray-700">
          Este 2026 marca otro momento decisivo con el desarrollo de{' '}
          <strong>Microbiome Radar</strong>, un proyecto que representa nuestra
          apuesta por la innovación que rompe esquemas. Es muy posible que nos
          especialicemos cada vez más en sectores que demanden alta innovación y
          que estén listos para transformarse.
        </p>

        <div className="bg-gradient-to-r from-latam-blue-900 to-latam-blue-800 text-white p-6 rounded-lg my-6">
          <p className="text-lg font-semibold mb-3">Valores innegociables</p>
          <p className="text-lg leading-relaxed">
            En 19 años han intentado llevarnos al camino de la corrupción, y lo
            hemos rechazado. Nuestros valores éticos y morales son innegociables.
            Somos honestos con nuestros clientes, transparentes en nuestras
            relaciones y comprometidos con la excelencia.
          </p>
        </div>

        <p className="text-lg leading-relaxed text-latam-gray-700">
          Lo que nos emociona del futuro de la tecnología aplicada es todo. Cada
          reconocimiento que hemos ganado —desde Microsoft Startup Founder Hub
          hasta el Premio Nacional de Innovación 2024, pasando por la distinción
          de la Universidad Técnica de Berlín— valida que estamos en el camino
          correcto.
        </p>

        <p className="text-lg leading-relaxed text-latam-gray-700">
          Pero más que los premios, lo que realmente nos impulsa es ver cómo el
          95% de nuestro talento en outsourcing es internalizado por nuestros
          clientes en promedio de 18 meses. No es una condición contractual. Es
          la consecuencia directa de un servicio sólido, cercano y alineado con
          los objetivos del negocio.
        </p>

        <div className="mt-8 pt-6 border-t-2 border-latam-blue-200">
          <p className="text-xl font-bold text-latam-blue-900 italic">
            &quot;En Latam Digital no vendemos tecnología. Construimos relaciones
            de confianza, ejecutamos con sensatez y hacemos que la tecnología
            genere valor real para el negocio.&quot;
          </p>
          <p className="text-right mt-4 text-latam-gray-600">
            — Johann Tello Meryk
          </p>
        </div>
      </div>
    </div>
  </div>
));

MensajeDirector.displayName = 'MensajeDirector';

export default MensajeDirector;
