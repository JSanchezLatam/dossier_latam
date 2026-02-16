import { memo } from 'react';

const Portada = memo(() => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-latam-blue-700 via-latam-blue-600 to-latam-blue-800 text-white p-8">
    <div className="text-center max-w-4xl">
      <h1 className="text-6xl font-bold mb-6">Latam Digital</h1>
      <p className="text-2xl mb-8 text-latam-orange-300">
        Consultoría en Tecnología e Innovación
      </p>
      <div className="space-y-4 text-xl text-gray-100">
        <p>Gestión Digital 360</p>
        <p>Innovación Digital Aplicada</p>
      </div>
      <div className="mt-12 text-lg text-gray-200">
        <p>Panamá | Latinoamérica | Estados Unidos</p>
      </div>
      <div className="mt-16 border-t border-latam-orange pt-8">
        <p className="text-xl italic">
          &quot;No vendemos tecnología. Construimos relaciones de confianza,
          ejecutamos con sensatez y hacemos que la tecnología genere valor
          real para el negocio.&quot;
        </p>
      </div>
    </div>
  </div>
));

Portada.displayName = 'Portada';

export default Portada;
