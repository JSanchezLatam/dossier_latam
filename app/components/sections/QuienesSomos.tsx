import { memo } from 'react';
import { Zap, Target, Heart } from 'lucide-react';

const QuienesSomos = memo(() => (
  <div className="p-8 max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-6 text-latam-blue">Quiénes Somos</h2>

    <div className="prose prose-lg max-w-none">
      <p className="text-xl mb-6 leading-relaxed text-latam-gray">
        <strong>Latam Digital</strong> es una empresa especializada en
        consultoría en tecnología e innovación, gestión de servicios digitales
        y desarrollo de soluciones de inteligencia artificial aplicada.
      </p>

      <p className="text-lg mb-6 leading-relaxed text-latam-gray-700">
        Fundada en <strong>enero de 2007</strong> por Johann Tello Meryk en la
        Ciudad de Panamá, operamos en Panamá, Latinoamérica y Estados Unidos,
        trabajando con organizaciones que buscan transformar su tecnología en
        un verdadero habilitador de negocio.
      </p>

      <div className="bg-latam-blue-50 p-6 rounded-lg my-8 border-l-4 border-latam-blue">
        <h3 className="text-2xl font-bold mb-4 text-latam-blue">
          Nuestra Visión
        </h3>
        <p className="text-lg leading-relaxed text-latam-gray-700">
          Mantener un equipo altamente motivado en la investigación y
          desarrollo de nuevas tecnologías y en los servicios que ofrecemos
          para brindar soluciones innovadoras a los clientes y mantener
          nuestros servicios actuales competitivos.
        </p>
      </div>

      <div className="bg-latam-orange-50 p-6 rounded-lg my-8 border-l-4 border-latam-orange">
        <h3 className="text-2xl font-bold mb-4 text-latam-orange-700">
          Nuestra Misión
        </h3>
        <p className="text-lg leading-relaxed text-latam-gray-700">
          Diferenciarnos en la industria con propuestas innovadoras de
          servicios que permitan a nuestros clientes diferenciarse en sus
          mercados basándose no sólo en la innovación sino en la calidad del
          servicio, valor del negocio, optimización de sus recursos y gestionar
          los riesgos adecuadamente.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4 text-latam-blue">
          Nuestro Enfoque
        </h3>
        <p className="text-lg mb-4 text-latam-gray-700">
          En Latam Digital combinamos:
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Zap className="text-latam-orange mt-1 flex-shrink-0" />
            <p className="text-lg text-latam-gray-700">
              <strong>Conocimiento académico de vanguardia</strong> con
              formación especializada en inteligencia artificial, bioinformática
              y tecnologías emergentes.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Target className="text-latam-orange mt-1 flex-shrink-0" />
            <p className="text-lg text-latam-gray-700">
              <strong>Experiencia real de ejecución</strong> en entornos
              corporativos y regulados de sectores críticos como finanzas,
              banca, seguros, salud y comercio.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Heart className="text-latam-orange mt-1 flex-shrink-0" />
            <p className="text-lg text-latam-gray-700">
              <strong>Cultura de servicio excepcional</strong> que nos convierte
              en socios tecnológicos de largo plazo, no en proveedores
              transaccionales.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-latam-blue via-latam-blue-700 to-latam-blue-800 text-white rounded-lg shadow-lg">
        <p className="text-xl font-semibold text-center">
          Academia + Experiencia + Cultura de Servicio = Resultados Garantizados
        </p>
      </div>
    </div>
  </div>
));

QuienesSomos.displayName = 'QuienesSomos';

export default QuienesSomos;
