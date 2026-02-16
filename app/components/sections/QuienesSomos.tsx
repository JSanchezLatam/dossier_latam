import { memo } from 'react';
import { Zap, Target, Heart } from 'lucide-react';

const QuienesSomos = memo(() => (
  <div className="p-8 max-w-5xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-latam-blue animate-fade-in">
      Quiénes Somos
    </h2>

    <div className="prose prose-lg max-w-none">
      <p className="text-xl mb-6 leading-relaxed text-latam-gray animate-fade-in animation-delay-100">
        <strong className="text-latam-blue">Latam Digital</strong> es una empresa especializada en
        consultoría en tecnología e innovación, gestión de servicios digitales
        y desarrollo de soluciones de inteligencia artificial aplicada.
      </p>

      <p className="text-lg mb-6 leading-relaxed text-latam-gray-700 animate-fade-in animation-delay-200">
        Fundada en <strong className="text-latam-orange">enero de 2007</strong> por Johann Tello Meryk en la
        Ciudad de Panamá, operamos en Panamá, Latinoamérica y Estados Unidos,
        trabajando con organizaciones que buscan transformar su tecnología en
        un verdadero habilitador de negocio.
      </p>

      {/* Visión */}
      <div className="bg-gradient-to-br from-latam-blue-50 to-latam-blue-100 p-8 rounded-2xl my-8 border-l-4 border-latam-blue shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-fade-in animation-delay-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-latam-blue rounded-lg">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-latam-blue">Nuestra Visión</h3>
        </div>
        <p className="text-lg leading-relaxed text-latam-gray-700">
          Mantener un equipo altamente motivado en la investigación y
          desarrollo de nuevas tecnologías y en los servicios que ofrecemos
          para brindar soluciones innovadoras a los clientes y mantener
          nuestros servicios actuales competitivos.
        </p>
      </div>

      {/* Misión */}
      <div className="bg-gradient-to-br from-latam-orange-50 to-latam-orange-100 p-8 rounded-2xl my-8 border-l-4 border-latam-orange shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-fade-in animation-delay-400">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-latam-orange rounded-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-latam-orange-700">Nuestra Misión</h3>
        </div>
        <p className="text-lg leading-relaxed text-latam-gray-700">
          Diferenciarnos en la industria con propuestas innovadoras de
          servicios que permitan a nuestros clientes diferenciarse en sus
          mercados basándose no sólo en la innovación sino en la calidad del
          servicio, valor del negocio, optimización de sus recursos y gestionar
          los riesgos adecuadamente.
        </p>
      </div>

      {/* Enfoque */}
      <div className="mt-10 animate-fade-in animation-delay-500">
        <h3 className="text-3xl font-bold mb-6 text-latam-blue">
          Nuestro Enfoque
        </h3>
        <p className="text-lg mb-6 text-latam-gray-700">
          En Latam Digital combinamos:
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 card-hover group animate-slide-in-left animation-delay-600">
            <div className="p-3 bg-latam-orange-100 rounded-lg group-hover:bg-latam-orange-200 transition-colors duration-300">
              <Zap className="text-latam-orange w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <strong className="text-lg text-latam-blue block mb-2">
                Conocimiento académico de vanguardia
              </strong>
              <p className="text-latam-gray-700">
                Con formación especializada en inteligencia artificial, bioinformática
                y tecnologías emergentes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 card-hover group animate-slide-in-right animation-delay-700">
            <div className="p-3 bg-latam-blue-100 rounded-lg group-hover:bg-latam-blue-200 transition-colors duration-300">
              <Target className="text-latam-blue w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <strong className="text-lg text-latam-blue block mb-2">
                Experiencia real de ejecución
              </strong>
              <p className="text-latam-gray-700">
                En entornos corporativos y regulados de sectores críticos como finanzas,
                banca, seguros, salud y comercio.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 card-hover group animate-slide-in-left">
            <div className="p-3 bg-latam-orange-100 rounded-lg group-hover:bg-latam-orange-200 transition-colors duration-300">
              <Heart className="text-latam-orange w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <strong className="text-lg text-latam-blue block mb-2">
                Cultura de servicio excepcional
              </strong>
              <p className="text-latam-gray-700">
                Que nos convierte en socios tecnológicos de largo plazo, no en proveedores
                transaccionales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fórmula del éxito */}
      <div className="mt-10 p-8 bg-gradient-to-r from-latam-blue via-latam-blue-700 to-latam-blue-800 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 animate-scale-in animation-delay-600 overflow-hidden relative">
        <div className="absolute inset-0 shimmer opacity-20" />
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-latam-orange rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-latam-orange rounded-full animate-pulse animation-delay-200" />
            <div className="w-2 h-2 bg-latam-orange rounded-full animate-pulse animation-delay-400" />
          </div>
          <p className="text-2xl font-bold text-center leading-relaxed">
            Academia + Experiencia + Cultura de Servicio = Resultados Garantizados
          </p>
        </div>
      </div>
    </div>
  </div>
));

QuienesSomos.displayName = 'QuienesSomos';

export default QuienesSomos;
