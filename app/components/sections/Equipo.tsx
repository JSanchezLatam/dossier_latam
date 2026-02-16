import { memo } from 'react';
import { Users, Globe } from 'lucide-react';
import { PROFESSIONAL_PROFILES, CERTIFICATIONS } from './constants';

const Equipo = memo(() => (
  <div className="p-8 max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-latam-blue-900">
      Equipo y Capacidades
    </h2>

    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="bg-latam-blue-50 p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <Users className="text-latam-blue-600 w-8 h-8" />
          <h3 className="text-2xl font-bold text-latam-blue-900">Equipo</h3>
        </div>
        <p className="text-3xl font-bold text-latam-blue-600 mb-2">
          ~20 personas
        </p>
        <p className="text-latam-gray-700">
          Entre personal permanente y outsourcing
        </p>
      </div>

      <div className="bg-latam-blue-50 p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="text-latam-blue-600 w-8 h-8" />
          <h3 className="text-2xl font-bold text-latam-blue-900">
            Modelo de Trabajo
          </h3>
        </div>
        <p className="text-xl font-bold text-latam-blue-600 mb-2">
          Híbrido con tendencia remota
        </p>
        <p className="text-latam-gray-700">Sede en Ciudad de Panamá, Panamá</p>
      </div>
    </div>

    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-latam-blue-900">
        Perfiles Profesionales
      </h3>
      <div className="grid md:grid-cols-3 gap-4">
        {PROFESSIONAL_PROFILES.map((perfil) => (
          <div
            key={perfil}
            className="bg-white p-4 rounded-lg shadow border-l-4 border-latam-blue-500"
          >
            <p className="font-semibold text-latam-gray-800">{perfil}</p>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-2xl font-bold mb-6 text-latam-blue-900">
        Certificaciones del Equipo
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((item) => (
          <div
            key={item.cert}
            className="bg-gradient-to-r from-latam-blue-600 to-latam-blue-700 text-white p-5 rounded-lg shadow-lg"
          >
            <p className="text-xl font-bold mb-1">{item.cert}</p>
            <p className="text-sm text-latam-blue-100">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
));

Equipo.displayName = 'Equipo';

export default Equipo;
