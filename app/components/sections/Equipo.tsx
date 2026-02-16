import { memo } from 'react';
import { Users, Globe, Award, Sparkles } from 'lucide-react';
import { PROFESSIONAL_PROFILES, CERTIFICATIONS } from './constants';

const Equipo = memo(() => (
  <div className="p-8 max-w-5xl mx-auto relative">
    {/* Efectos decorativos */}
    <div className="absolute top-20 right-10 w-64 h-64 bg-latam-blue-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
    <div className="absolute bottom-20 left-10 w-64 h-64 bg-latam-orange-100 rounded-full blur-3xl opacity-20 animate-pulse-slow animation-delay-400" />

    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-latam-blue-900 animate-fade-in relative z-10">
      Equipo y Capacidades
    </h2>

    <div className="grid md:grid-cols-2 gap-8 mb-12 relative z-10">
      <div className="bg-gradient-to-br from-latam-blue-50 to-latam-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-slide-in-left animation-delay-100 border-l-4 border-latam-blue-600 group overflow-hidden relative">
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-latam-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Users className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-latam-blue-900">Equipo</h3>
        </div>

        <div className="flex items-baseline gap-2 mb-2">
          <p className="text-4xl font-bold text-latam-blue-600">
            ~20
          </p>
          <span className="text-2xl text-latam-blue-600 font-semibold">personas</span>
        </div>

        <p className="text-latam-gray-700">
          Entre personal permanente y outsourcing
        </p>

        <div className="mt-4 flex items-center gap-2">
          <div className="flex -space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-latam-blue-300 border-2 border-white animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
          <Sparkles className="w-5 h-5 text-latam-orange animate-pulse" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-latam-orange-50 to-latam-orange-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-slide-in-right animation-delay-100 border-l-4 border-latam-orange-600 group overflow-hidden relative">
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-latam-orange-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Globe className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-latam-orange-900">
            Modelo de Trabajo
          </h3>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-latam-orange-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">
            Híbrido
          </span>
          <span className="text-latam-orange-700 font-semibold">con tendencia remota</span>
        </div>

        <p className="text-latam-gray-700 flex items-center gap-2 mt-4">
          <span className="w-2 h-2 bg-latam-orange rounded-full animate-pulse" />
          Sede en Ciudad de Panamá, Panamá
        </p>
      </div>
    </div>

    <div className="mb-12 relative z-10 animate-fade-in animation-delay-200">
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-8 h-8 text-latam-blue-600" />
        <h3 className="text-3xl font-bold text-latam-blue-900">
          Perfiles Profesionales
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {PROFESSIONAL_PROFILES.map((perfil, index) => (
          <div
            key={perfil}
            className={`bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 card-hover border-l-4 border-latam-blue-500 group animate-scale-in animation-delay-${300 + index * 100}`}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-latam-blue-500 rounded-full group-hover:bg-latam-orange transition-colors duration-300" />
              <p className="font-semibold text-latam-gray-800 group-hover:text-latam-blue-700 transition-colors duration-300">
                {perfil}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="relative z-10 animate-fade-in animation-delay-400">
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-8 h-8 text-latam-orange" />
        <h3 className="text-3xl font-bold text-latam-blue-900">
          Certificaciones del Equipo
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((item, index) => (
          <div
            key={item.cert}
            className={`bg-gradient-to-r from-latam-blue-600 to-latam-blue-700 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 card-hover group animate-slide-in-${index % 2 === 0 ? 'left' : 'right'} animation-delay-${500 + index * 100} overflow-hidden relative`}
          >
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-6 h-6 text-latam-orange group-hover:scale-110 transition-transform duration-300" />
                <span className="px-2 py-1 bg-latam-orange text-white text-xs font-bold rounded uppercase tracking-wide">
                  Certificado
                </span>
              </div>

              <p className="text-xl font-bold mb-2 group-hover:text-latam-orange-100 transition-colors duration-300">
                {item.cert}
              </p>
              <p className="text-sm text-latam-blue-100">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
));

Equipo.displayName = 'Equipo';

export default Equipo;
