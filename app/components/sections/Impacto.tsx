import { memo } from 'react';
import { COUNTRIES } from './constants';
import { TrendingUp, Clock, Users, Globe2, Briefcase, Heart } from 'lucide-react';

const Impacto = memo(() => (
  <div className="p-8 max-w-6xl mx-auto relative">
    {/* Efectos decorativos */}
    <div className="absolute top-20 right-10 w-72 h-72 bg-latam-blue-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
    <div className="absolute bottom-20 left-10 w-72 h-72 bg-latam-orange-100 rounded-full blur-3xl opacity-20 animate-pulse-slow animation-delay-400" />

    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-latam-blue-900 animate-fade-in relative z-10">
      Nuestro Impacto
    </h2>

    <div className="grid md:grid-cols-3 gap-6 mb-12 relative z-10">
      <div className="bg-gradient-to-br from-latam-blue-500 to-latam-blue-700 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center card-hover animate-scale-in animation-delay-100 group overflow-hidden relative">
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-10 h-10" />
            </div>
          </div>
          <p className="text-6xl font-bold mb-3 animate-pulse">+100</p>
          <p className="text-xl font-semibold">Clientes Atendidos</p>
          <div className="mt-4 flex justify-center gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-white rounded-full animate-pulse"
                style={{ animationDelay: `${i * 300}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-latam-blue-600 to-latam-blue-800 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center card-hover animate-scale-in animation-delay-200 group overflow-hidden relative">
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-10 h-10" />
            </div>
          </div>
          <p className="text-6xl font-bold mb-3 animate-pulse animation-delay-200">+10,000</p>
          <p className="text-xl font-semibold">Horas de Consultoría</p>
          <div className="mt-4 flex justify-center gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-white rounded-full animate-pulse"
                style={{ animationDelay: `${i * 300 + 100}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-latam-blue-700 to-latam-blue-900 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center card-hover animate-scale-in animation-delay-300 group overflow-hidden relative">
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-10 h-10" />
            </div>
          </div>
          <p className="text-6xl font-bold mb-3 animate-pulse animation-delay-400">95%</p>
          <p className="text-xl font-semibold">Talento Internalizado</p>
          <div className="mt-4 flex justify-center gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-white rounded-full animate-pulse"
                style={{ animationDelay: `${i * 300 + 200}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="mb-12 relative z-10 animate-fade-in animation-delay-300">
      <div className="flex items-center gap-3 mb-6">
        <Globe2 className="w-8 h-8 text-latam-blue-600" />
        <h3 className="text-3xl font-bold text-latam-blue-900">
          Presencia Internacional
        </h3>
      </div>

      <p className="text-lg mb-6 text-latam-gray-700 animate-slide-in-left animation-delay-400">
        Hemos trabajado en múltiples países de América:
      </p>

      <div className="grid md:grid-cols-4 gap-3">
        {COUNTRIES.map((pais, index) => (
          <div
            key={pais}
            className={`bg-gradient-to-br from-latam-blue-50 to-latam-blue-100 p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 card-hover border border-latam-blue-200 group animate-scale-in animation-delay-${400 + index * 50}`}
          >
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-latam-blue-600 rounded-full group-hover:bg-latam-orange transition-colors duration-300" />
              <p className="font-semibold text-latam-blue-900 group-hover:text-latam-blue-700 transition-colors duration-300">
                {pais}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="relative z-10 animate-fade-in animation-delay-500">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-8 h-8 text-latam-orange" />
        <h3 className="text-3xl font-bold text-latam-blue-900">
          Sectores de Especialización
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-latam-blue-50 to-latam-blue-100 p-8 rounded-2xl border-l-4 border-latam-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-slide-in-left animation-delay-600 group overflow-hidden relative">
          <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-latam-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-latam-blue-900">
                Sector Financiero
              </h4>
            </div>

            <div className="mb-3">
              <span className="px-3 py-1 bg-latam-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                Principal Sector
              </span>
            </div>

            <p className="text-latam-gray-700 leading-relaxed">
              Nuestra mayor concentración de proyectos. Experiencia profunda en
              banca, seguros, valores y servicios financieros regulados.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-latam-orange-50 to-latam-orange-100 p-8 rounded-2xl border-l-4 border-latam-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-slide-in-right animation-delay-600 group overflow-hidden relative">
          <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-latam-orange-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-latam-orange-900">
                Sector Salud
              </h4>
            </div>

            <div className="mb-3">
              <span className="px-3 py-1 bg-latam-orange-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                Sector Emergente
              </span>
            </div>

            <p className="text-latam-gray-700 leading-relaxed">
              Iniciando presencia en los últimos tres años con soluciones médicas
              digitales, bioinformática e IA aplicada a la salud.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
));

Impacto.displayName = 'Impacto';

export default Impacto;
