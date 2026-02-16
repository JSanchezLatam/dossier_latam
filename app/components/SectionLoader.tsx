import { memo } from 'react';

const SectionLoader = memo(() => (
  <div className="flex items-center justify-center min-h-screen" role="status">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-latam-blue" />
      <p className="text-latam-gray-700 text-lg">Cargando...</p>
    </div>
    <span className="sr-only">Cargando contenido</span>
  </div>
));

SectionLoader.displayName = 'SectionLoader';

export default SectionLoader;
