import { memo } from 'react';
import { Award, Shield, Trophy, Sparkles } from 'lucide-react';

const Reconocimientos = memo(() => (
  <div className="p-8 max-w-5xl mx-auto relative">
    {/* Efectos decorativos */}
    <div className="absolute top-20 right-10 w-64 h-64 bg-latam-blue-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
    <div className="absolute bottom-20 left-10 w-64 h-64 bg-latam-orange-100 rounded-full blur-3xl opacity-20 animate-pulse-slow animation-delay-400" />

    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-latam-blue-900 animate-fade-in relative z-10">
      Reconocimientos y Distinciones
    </h2>

    <div className="space-y-6 relative z-10">
      <div className="bg-gradient-to-r from-latam-blue-600 to-latam-blue-800 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 card-hover animate-slide-in-left animation-delay-100 group overflow-hidden relative">
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Award className="w-12 h-12" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Microsoft Startup Founder Hub</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-1 bg-white/20 text-xs font-bold rounded uppercase tracking-wide">
                  Internacional
                </span>
                <Sparkles className="w-4 h-4 text-latam-orange animate-pulse" />
              </div>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Reconocimiento internacional que distingue a Latam Digital como una
            empresa de innovación, excelencia y estándares de clase mundial.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-latam-blue-700 to-latam-blue-900 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 card-hover animate-slide-in-right animation-delay-200 group overflow-hidden relative">
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-12 h-12" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">ISV Success Program de Microsoft</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-1 bg-white/20 text-xs font-bold rounded uppercase tracking-wide">
                  Certificación
                </span>
                <Sparkles className="w-4 h-4 text-latam-orange animate-pulse animation-delay-200" />
              </div>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Programa de Microsoft que certifica nuestra excelencia en el desarrollo
            de software con altos estándares de calidad y desempeño.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-latam-orange-600 to-latam-orange-800 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 card-hover animate-slide-in-left animation-delay-300 group overflow-hidden relative">
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Trophy className="w-12 h-12" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                Premio Nacional de Innovación 2024
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-1 bg-white/20 text-xs font-bold rounded uppercase tracking-wide">
                  3er Lugar
                </span>
                <span className="px-2 py-1 bg-white/20 text-xs font-bold rounded uppercase tracking-wide">
                  Panamá
                </span>
                <Sparkles className="w-4 h-4 text-white animate-pulse animation-delay-400" />
              </div>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Reconocimiento nacional que valida nuestra excelencia, innovación y
            calidad en el desarrollo de soluciones digitales de alto impacto.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-latam-blue-800 to-latam-blue-900 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 card-hover animate-slide-in-right animation-delay-400 group overflow-hidden relative">
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Award className="w-12 h-12" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                Universidad Técnica de Berlín
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-1 bg-white/20 text-xs font-bold rounded uppercase tracking-wide">
                  Innovate New!
                </span>
                <span className="px-2 py-1 bg-white/20 text-xs font-bold rounded uppercase tracking-wide">
                  Académico
                </span>
                <Sparkles className="w-4 h-4 text-latam-orange animate-pulse animation-delay-600" />
              </div>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Distinción académica internacional que valida nuestro ADN de
            innovación, con procesos sólidos y una cultura empresarial orientada a
            la excelencia.
          </p>
        </div>
      </div>
    </div>
  </div>
));

Reconocimientos.displayName = 'Reconocimientos';

export default Reconocimientos;
