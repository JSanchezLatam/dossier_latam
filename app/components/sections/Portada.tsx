import { memo } from 'react';

const Portada = memo(() => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-latam-blue-700 via-latam-blue-600 to-latam-blue-800 text-white p-8 overflow-hidden">
    {/* Efectos de fondo animados */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-latam-orange/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-latam-blue-400/10 rounded-full blur-3xl animate-pulse-slow animation-delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-latam-orange/5 rounded-full blur-3xl animate-pulse-slow animation-delay-600" />
    </div>

    {/* Contenido principal */}
    <div className="relative z-10 text-center max-w-4xl">
      {/* Título principal con animación */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
        <span className="inline-block animate-scale-in">Latam</span>{' '}
        <span className="inline-block animate-scale-in animation-delay-200 text-gradient bg-gradient-to-r from-white to-latam-orange-300">
          Digital
        </span>
      </h1>

      {/* Subtítulo */}
      <p className="text-2xl md:text-3xl mb-8 text-latam-orange-300 font-light animate-fade-in animation-delay-300">
        Consultoría en Tecnología e Innovación
      </p>

      {/* Servicios destacados */}
      <div className="space-y-4 text-xl md:text-2xl text-gray-100 mb-12">
        <p className="animate-slide-in-left animation-delay-400 hover:text-latam-orange-300 transition-colors duration-300">
          ✨ Gestión Digital 360
        </p>
        <p className="animate-slide-in-right animation-delay-500 hover:text-latam-orange-300 transition-colors duration-300">
          🚀 Innovación Digital Aplicada
        </p>
      </div>

      {/* Ubicaciones */}
      <div className="mt-12 text-lg md:text-xl text-gray-200 animate-fade-in animation-delay-600">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
          <span className="inline-block w-2 h-2 bg-latam-orange rounded-full animate-pulse" />
          <p>Panamá | Latinoamérica | Estados Unidos</p>
        </div>
      </div>

      {/* Cita inspiradora */}
      <div className="mt-16 animate-fade-in animation-delay-700">
        <div className="relative">
          {/* Borde decorativo animado */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-latam-orange to-transparent h-px top-0" />

          <div className="pt-8 px-4">
            <div className="relative group">
              {/* Comillas decorativas */}
              <span className="absolute -top-4 -left-2 text-6xl text-latam-orange/30 font-serif">"</span>

              <p className="text-xl md:text-2xl italic font-light leading-relaxed text-gray-100 group-hover:text-white transition-colors duration-300">
                No vendemos tecnología. Construimos relaciones de confianza,
                ejecutamos con sensatez y hacemos que la tecnología genere valor
                real para el negocio.
              </p>

              <span className="absolute -bottom-8 -right-2 text-6xl text-latam-orange/30 font-serif">"</span>
            </div>

            {/* Línea decorativa inferior */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-latam-orange" />
              <div className="w-2 h-2 bg-latam-orange rounded-full" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-latam-orange" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

Portada.displayName = 'Portada';

export default Portada;
