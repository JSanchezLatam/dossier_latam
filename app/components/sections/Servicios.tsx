import { memo } from 'react';
import { Lightbulb, Shield, Rocket, Users, CheckCircle2, Target } from 'lucide-react';

const Servicios = memo(() => (
  <div className="p-8 max-w-6xl mx-auto relative">
    {/* Efectos decorativos */}
    <div className="absolute top-20 right-10 w-64 h-64 bg-latam-blue-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
    <div className="absolute bottom-20 left-10 w-64 h-64 bg-latam-orange-100 rounded-full blur-3xl opacity-20 animate-pulse-slow animation-delay-400" />

    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-latam-blue-900 animate-fade-in relative z-10">
      Nuestros Servicios
    </h2>

    <div className="space-y-12 relative z-10">
      <div className="bg-gradient-to-br from-latam-blue-50 to-latam-blue-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 card-hover border-l-4 border-latam-blue-600 animate-fade-in animation-delay-100 overflow-hidden relative group">
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-latam-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-latam-blue-900">
            1. Consultoría en Tecnología e Innovación
          </h3>
        </div>

        <p className="text-lg mb-6 leading-relaxed text-latam-gray-700">
          Alineamos la estrategia tecnológica con los objetivos reales del
          negocio, incorporando transformación digital, innovación e inteligencia
          artificial de forma estructurada, sensata y escalable.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 card-hover">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-6 h-6 text-latam-orange" />
              <h4 className="font-bold text-lg text-latam-blue-800">
                ¿Cuándo nos necesitas?
              </h4>
            </div>
            <ul className="space-y-3 text-latam-gray-700">
              <li className="flex items-start gap-2 animate-slide-in-left animation-delay-200">
                <CheckCircle2 className="w-5 h-5 text-latam-blue-600 mt-0.5 flex-shrink-0" />
                <span>Diagnóstico estratégico de TI</span>
              </li>
              <li className="flex items-start gap-2 animate-slide-in-left animation-delay-300">
                <CheckCircle2 className="w-5 h-5 text-latam-blue-600 mt-0.5 flex-shrink-0" />
                <span>Problemas operativos o de ciberseguridad</span>
              </li>
              <li className="flex items-start gap-2 animate-slide-in-left animation-delay-400">
                <CheckCircle2 className="w-5 h-5 text-latam-blue-600 mt-0.5 flex-shrink-0" />
                <span>Desalineación TI-Negocio</span>
              </li>
              <li className="flex items-start gap-2 animate-slide-in-left animation-delay-500">
                <CheckCircle2 className="w-5 h-5 text-latam-blue-600 mt-0.5 flex-shrink-0" />
                <span>Iniciativas de IA sin retorno</span>
              </li>
              <li className="flex items-start gap-2 animate-slide-in-left animation-delay-600">
                <CheckCircle2 className="w-5 h-5 text-latam-blue-600 mt-0.5 flex-shrink-0" />
                <span>Definición de prioridades de inversión</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 card-hover">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-6 h-6 text-latam-orange" />
              <h4 className="font-bold text-lg text-latam-blue-800">
                Lo que obtienes
              </h4>
            </div>
            <ul className="space-y-3 text-latam-gray-700">
              <li className="flex items-start gap-2 animate-slide-in-right animation-delay-200">
                <CheckCircle2 className="w-5 h-5 text-latam-orange mt-0.5 flex-shrink-0" />
                <span>Claridad estratégica</span>
              </li>
              <li className="flex items-start gap-2 animate-slide-in-right animation-delay-300">
                <CheckCircle2 className="w-5 h-5 text-latam-orange mt-0.5 flex-shrink-0" />
                <span>Alineación TI-Negocio-Innovación</span>
              </li>
              <li className="flex items-start gap-2 animate-slide-in-right animation-delay-400">
                <CheckCircle2 className="w-5 h-5 text-latam-orange mt-0.5 flex-shrink-0" />
                <span>Certeza de inversión</span>
              </li>
              <li className="flex items-start gap-2 animate-slide-in-right animation-delay-500">
                <CheckCircle2 className="w-5 h-5 text-latam-orange mt-0.5 flex-shrink-0" />
                <span>Reducción de riesgos</span>
              </li>
              <li className="flex items-start gap-2 animate-slide-in-right animation-delay-600">
                <CheckCircle2 className="w-5 h-5 text-latam-orange mt-0.5 flex-shrink-0" />
                <span>Hoja de ruta realista hacia IA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-latam-blue-50 to-latam-blue-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 card-hover border-l-4 border-latam-blue-700 animate-fade-in animation-delay-200 overflow-hidden relative group">
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-latam-blue-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-latam-blue-800">
            2. Gestión Digital 360
          </h3>
        </div>

        <p className="text-lg mb-6 leading-relaxed text-latam-gray-700">
          Operamos tu ecosistema digital con estabilidad, seguridad y visión de
          negocio, actuando como un socio tecnológico de confianza que acompaña
          en el día a día.
        </p>

        <div className="bg-gradient-to-r from-white to-latam-blue-50 p-6 rounded-xl mb-6 shadow-md hover:shadow-lg transition-all duration-300 card-hover border border-latam-blue-200">
          <p className="text-xl font-semibold text-latam-blue-800 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-latam-orange rounded-full animate-pulse" />
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
            { text: 'Tranquilidad operativa', delay: '300' },
            { text: 'Control y monitoreo profesional', delay: '400' },
            { text: 'Seguridad ante amenazas', delay: '500' },
            { text: 'Tecnología que rinde valor', delay: '600' },
          ].map((item) => (
            <div
              key={item.text}
              className={`bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 card-hover group animate-scale-in animation-delay-${item.delay}`}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-latam-blue-700 group-hover:text-latam-orange transition-colors duration-300" />
                <p className="font-semibold text-latam-blue-700">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-latam-blue-50 to-latam-blue-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 card-hover border-l-4 border-latam-blue-800 animate-fade-in animation-delay-300 overflow-hidden relative group">
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-latam-blue-800 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-latam-blue-700">
            3. Innovación Digital Aplicada
          </h3>
        </div>

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
              delay: '400',
            },
            {
              title: 'Inteligencia Artificial aplicada',
              desc: 'De forma práctica y segura',
              delay: '500',
            },
            {
              title: 'Automatización y analítica avanzada',
              desc: 'Para eficiencia operativa',
              delay: '600',
            },
            {
              title: 'Talento especializado en outsourcing',
              desc: 'Integrado directamente al negocio',
              delay: '600',
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 card-hover group animate-slide-in-${index % 2 === 0 ? 'left' : 'right'} animation-delay-${item.delay} border-l-2 border-latam-orange`}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-latam-orange mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-bold text-latam-blue-700 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-latam-gray-700">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-latam-orange-50 to-latam-orange-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 card-hover border-l-4 border-latam-orange-600 animate-fade-in animation-delay-400 overflow-hidden relative group">
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-latam-orange-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-latam-orange-900">
            Outsourcing Estratégico
          </h3>
        </div>

        <div className="bg-gradient-to-r from-white to-latam-orange-50 p-6 rounded-xl mb-4 shadow-md hover:shadow-lg transition-all duration-300 card-hover border border-latam-orange-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-latam-orange-200 rounded-full blur-2xl opacity-30" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-latam-orange-600 text-white text-sm font-bold rounded-full animate-pulse">
                95%
              </span>
              <span className="text-xs text-latam-orange-700 font-semibold uppercase tracking-wide">
                Tasa de éxito
              </span>
            </div>

            <p className="text-2xl font-bold text-latam-orange-900 mb-3">
              El 95% de nuestro talento en outsourcing es internalizado por
              nuestros clientes en un promedio de 18 meses
            </p>
            <p className="text-lg text-latam-gray-700">
              No es una condición contractual. Es la consecuencia directa de un
              servicio sólido, cercano y alineado con los objetivos del negocio.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md animate-slide-in-left animation-delay-500">
          <p className="text-lg leading-relaxed text-latam-gray-700">
            No nos limitamos a contratar recursos. Desarrollamos talento que las
            empresas deciden hacer suyo. Cuando el outsourcing funciona, deja de
            ser externo y se convierte en una extensión natural del equipo.
          </p>
        </div>
      </div>
    </div>
  </div>
));

Servicios.displayName = 'Servicios';

export default Servicios;
