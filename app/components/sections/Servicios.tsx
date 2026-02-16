import { memo } from 'react';

const Servicios = memo(() => (
  <div className="p-8 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-latam-blue-900">
      Nuestros Servicios
    </h2>

    <div className="space-y-12">
      <div className="bg-gradient-to-br from-latam-blue-50 to-latam-blue-100 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold mb-4 text-latam-blue-900">
          1. Consultoría en Tecnología e Innovación
        </h3>
        <p className="text-lg mb-6 leading-relaxed text-latam-gray-700">
          Alineamos la estrategia tecnológica con los objetivos reales del
          negocio, incorporando transformación digital, innovación e inteligencia
          artificial de forma estructurada, sensata y escalable.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg mb-3 text-latam-blue-800">
              ¿Cuándo nos necesitas?
            </h4>
            <ul className="space-y-2 text-latam-gray-700">
              <li>• Diagnóstico estratégico de TI</li>
              <li>• Problemas operativos o de ciberseguridad</li>
              <li>• Desalineación TI-Negocio</li>
              <li>• Iniciativas de IA sin retorno</li>
              <li>• Definición de prioridades de inversión</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3 text-latam-blue-800">
              Lo que obtienes
            </h4>
            <ul className="space-y-2 text-latam-gray-700">
              <li>• Claridad estratégica</li>
              <li>• Alineación TI-Negocio-Innovación</li>
              <li>• Certeza de inversión</li>
              <li>• Reducción de riesgos</li>
              <li>• Hoja de ruta realista hacia IA</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-latam-blue-50 to-latam-blue-100 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold mb-4 text-latam-blue-800">
          2. Gestión Digital 360
        </h3>
        <p className="text-lg mb-6 leading-relaxed text-latam-gray-700">
          Operamos tu ecosistema digital con estabilidad, seguridad y visión de
          negocio, actuando como un socio tecnológico de confianza que acompaña
          en el día a día.
        </p>

        <div className="bg-white p-6 rounded-lg mb-6">
          <p className="text-xl font-semibold text-latam-blue-800 mb-3">
            ¿Qué nos diferencia?
          </p>
          <p className="text-lg text-latam-gray-700">
            Nuestros clientes no nos ven como un proveedor más. Nos ven como
            parte de su equipo. Operamos con visión integral, priorizamos la
            continuidad del negocio y nos involucramos más allá de lo requerido.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Tranquilidad operativa',
            'Control y monitoreo profesional',
            'Seguridad ante amenazas',
            'Tecnología que rinde valor',
          ].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-latam-blue-700">✓ {item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-latam-blue-50 to-latam-blue-100 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold mb-4 text-latam-blue-700">
          3. Innovación Digital Aplicada
        </h3>
        <p className="text-lg mb-6 leading-relaxed text-latam-gray-700">
          Diseñamos, desarrollamos e implementamos soluciones digitales y de
          inteligencia artificial de alto nivel, cuando las herramientas
          estándar no son suficientes.
        </p>

        <div className="space-y-4">
          {[
            {
              title: 'Software a medida',
              desc: 'Para necesidades específicas del negocio',
            },
            {
              title: 'Inteligencia Artificial aplicada',
              desc: 'De forma práctica y segura',
            },
            {
              title: 'Automatización y analítica avanzada',
              desc: 'Para eficiencia operativa',
            },
            {
              title: 'Talento especializado en outsourcing',
              desc: 'Integrado directamente al negocio',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-latam-blue-700 mb-2">
                {item.title}
              </h4>
              <p className="text-latam-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-latam-orange-50 to-latam-orange-100 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold mb-4 text-latam-orange-900">
          Outsourcing Estratégico
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-2xl font-bold text-latam-orange-900 mb-3">
            El 95% de nuestro talento en outsourcing es internalizado por
            nuestros clientes en un promedio de 18 meses
          </p>
          <p className="text-lg text-latam-gray-700">
            No es una condición contractual. Es la consecuencia directa de un
            servicio sólido, cercano y alineado con los objetivos del negocio.
          </p>
        </div>
        <p className="text-lg leading-relaxed text-latam-gray-700">
          No nos limitamos a contratar recursos. Desarrollamos talento que las
          empresas deciden hacer suyo. Cuando el outsourcing funciona, deja de
          ser externo y se convierte en una extensión natural del equipo.
        </p>
      </div>
    </div>
  </div>
));

Servicios.displayName = 'Servicios';

export default Servicios;
