import { memo } from 'react';
import { HISTORY_ITEMS } from './constants';

const Historia = memo(() => (
  <div className="p-8 max-w-5xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-latam-blue-900 animate-fade-in">
      Nuestra Historia: 19 Años de Evolución Constante
    </h2>

    <div className="relative">
      {/* Línea temporal con gradiente */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-latam-blue-200 via-latam-orange to-latam-blue-200" />

      <div className="space-y-8">
        {HISTORY_ITEMS.map((item, idx) => (
          <div
            key={item.year}
            className="relative pl-20 animate-fade-in group"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Círculo del año con efecto hover */}
            <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-latam-blue-600 to-latam-blue-800 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
              <span className="text-sm">{item.year}</span>
            </div>

            {/* Contenedor del evento */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-latam-blue-600 hover:shadow-xl transition-all duration-300 card-hover">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-latam-blue-900 group-hover:text-latam-orange transition-colors duration-300">
                  {item.title}
                </h3>
                {idx === HISTORY_ITEMS.length - 1 && (
                  <span className="px-2 py-1 bg-latam-orange text-white text-xs rounded-full">
                    Actual
                  </span>
                )}
              </div>
              <p className="text-latam-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Banner de resumen */}
    <div className="mt-12 p-8 bg-gradient-to-r from-latam-blue-600 via-latam-orange to-latam-blue-700 text-white rounded-2xl shadow-2xl animate-scale-in overflow-hidden relative">
      <div className="absolute inset-0 shimmer opacity-10" />
      <div className="relative z-10 flex items-center justify-center gap-4">
        <div className="hidden md:flex gap-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" />
          <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-100" />
          <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-200" />
        </div>
        <p className="text-xl md:text-2xl font-semibold text-center">
          De consultoría tradicional a pioneros en innovación digital, IA y bioinformática
        </p>
        <div className="hidden md:flex gap-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-300" />
          <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-400" />
          <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-500" />
        </div>
      </div>
    </div>
  </div>
));

Historia.displayName = 'Historia';

export default Historia;
