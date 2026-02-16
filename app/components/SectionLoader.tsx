import { memo } from 'react';

const SectionLoader = memo(() => (
  <div
    className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
    role="status"
  >
    <div className="flex flex-col items-center gap-6">
      {/* Spinner mejorado con múltiples anillos */}
      <div className="relative w-20 h-20">
        {/* Anillo exterior */}
        <div className="absolute inset-0 border-4 border-latam-blue/20 rounded-full" />

        {/* Anillo animado principal */}
        <div className="absolute inset-0 border-4 border-transparent border-t-latam-blue border-r-latam-blue rounded-full animate-spin" />

        {/* Anillo interior */}
        <div className="absolute inset-2 border-4 border-transparent border-b-latam-orange border-l-latam-orange rounded-full animate-spin animation-delay-200"
          style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
        />

        {/* Centro pulsante */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-latam-orange rounded-full animate-pulse-slow" />
        </div>
      </div>

      {/* Texto de carga con animación */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-latam-gray-700 text-lg font-medium animate-pulse">
          Cargando...
        </p>

        {/* Puntos animados */}
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-latam-blue rounded-full animate-bounce" />
          <span className="w-2 h-2 bg-latam-blue rounded-full animate-bounce animation-delay-100" />
          <span className="w-2 h-2 bg-latam-orange rounded-full animate-bounce animation-delay-200" />
        </div>
      </div>
    </div>
    <span className="sr-only">Cargando contenido</span>
  </div>
));

SectionLoader.displayName = 'SectionLoader';

export default SectionLoader;
