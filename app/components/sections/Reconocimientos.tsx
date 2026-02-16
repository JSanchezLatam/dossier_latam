import { memo } from 'react';
import { Award, Shield } from 'lucide-react';

const Reconocimientos = memo(() => (
  <div className="p-8 max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-latam-blue-900">
      Reconocimientos y Distinciones
    </h2>

    <div className="space-y-6">
      <div className="bg-gradient-to-r from-latam-blue-600 to-latam-blue-800 text-white p-8 rounded-lg shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <Award className="w-12 h-12" aria-hidden="true" />
          <div>
            <h3 className="text-2xl font-bold">Microsoft Startup Founder Hub</h3>
            <p className="text-latam-blue-100">Reconocimiento Internacional</p>
          </div>
        </div>
        <p className="text-lg">
          Reconocimiento internacional que distingue a Latam Digital como una
          empresa de innovación, excelencia y estándares de clase mundial.
        </p>
      </div>

      <div className="bg-gradient-to-r from-latam-blue-700 to-latam-blue-900 text-white p-8 rounded-lg shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <Shield className="w-12 h-12" aria-hidden="true" />
          <div>
            <h3 className="text-2xl font-bold">ISV Success Program de Microsoft</h3>
            <p className="text-latam-blue-100">Certificación de Excelencia</p>
          </div>
        </div>
        <p className="text-lg">
          Programa de Microsoft que certifica nuestra excelencia en el desarrollo
          de software con altos estándares de calidad y desempeño.
        </p>
      </div>

      <div className="bg-gradient-to-r from-latam-orange-600 to-latam-orange-800 text-white p-8 rounded-lg shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <Award className="w-12 h-12" aria-hidden="true" />
          <div>
            <h3 className="text-2xl font-bold">
              Premio Nacional de Innovación 2024
            </h3>
            <p className="text-latam-orange-100">Tercer Lugar - Panamá</p>
          </div>
        </div>
        <p className="text-lg">
          Reconocimiento nacional que valida nuestra excelencia, innovación y
          calidad en el desarrollo de soluciones digitales de alto impacto.
        </p>
      </div>

      <div className="bg-gradient-to-r from-latam-blue-800 to-latam-blue-900 text-white p-8 rounded-lg shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <Award className="w-12 h-12" aria-hidden="true" />
          <div>
            <h3 className="text-2xl font-bold">
              Universidad Técnica de Berlín
            </h3>
            <p className="text-latam-blue-100">
              Innovate New! - Distinción Académica
            </p>
          </div>
        </div>
        <p className="text-lg">
          Distinción académica internacional que valida nuestro ADN de
          innovación, con procesos sólidos y una cultura empresarial orientada a
          la excelencia.
        </p>
      </div>
    </div>
  </div>
));

Reconocimientos.displayName = 'Reconocimientos';

export default Reconocimientos;
