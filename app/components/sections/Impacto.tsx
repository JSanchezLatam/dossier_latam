import { memo } from 'react';
import { COUNTRIES } from './constants';

const Impacto = memo(() => (
  <div className="p-8 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-latam-blue-900">
      Nuestro Impacto
    </h2>

    <div className="grid md:grid-cols-3 gap-6 mb-12">
      <div className="bg-gradient-to-br from-latam-blue-500 to-latam-blue-700 text-white p-8 rounded-lg shadow-xl text-center">
        <p className="text-5xl font-bold mb-2">+100</p>
        <p className="text-xl">Clientes Atendidos</p>
      </div>

      <div className="bg-gradient-to-br from-latam-blue-600 to-latam-blue-800 text-white p-8 rounded-lg shadow-xl text-center">
        <p className="text-5xl font-bold mb-2">+10,000</p>
        <p className="text-xl">Horas de Consultoría</p>
      </div>

      <div className="bg-gradient-to-br from-latam-blue-700 to-latam-blue-900 text-white p-8 rounded-lg shadow-xl text-center">
        <p className="text-5xl font-bold mb-2">95%</p>
        <p className="text-xl">Talento Internalizado</p>
      </div>
    </div>

    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-latam-blue-900">
        Presencia Internacional
      </h3>
      <p className="text-lg mb-4 text-latam-gray-700">
        Hemos trabajado en múltiples países de América:
      </p>
      <div className="grid md:grid-cols-4 gap-3">
        {COUNTRIES.map((pais) => (
          <div key={pais} className="bg-latam-blue-100 p-3 rounded-lg text-center">
            <p className="font-semibold text-latam-blue-900">{pais}</p>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-2xl font-bold mb-6 text-latam-blue-900">
        Sectores de Especialización
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-latam-blue-50 to-latam-blue-100 p-6 rounded-lg border-l-4 border-latam-blue-600">
          <h4 className="text-xl font-bold text-latam-blue-900 mb-3">
            Sector Financiero
          </h4>
          <p className="text-latam-gray-700">
            Nuestra mayor concentración de proyectos. Experiencia profunda en
            banca, seguros, valores y servicios financieros regulados.
          </p>
        </div>

        <div className="bg-gradient-to-br from-latam-orange-50 to-latam-orange-100 p-6 rounded-lg border-l-4 border-latam-orange-600">
          <h4 className="text-xl font-bold text-latam-orange-900 mb-3">
            Sector Salud
          </h4>
          <p className="text-latam-gray-700">
            Iniciando presencia en los últimos tres años con soluciones médicas
            digitales, bioinformática e IA aplicada a la salud.
          </p>
        </div>
      </div>
    </div>
  </div>
));

Impacto.displayName = 'Impacto';

export default Impacto;
