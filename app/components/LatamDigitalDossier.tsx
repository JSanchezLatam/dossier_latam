'use client';

import React, { useState } from 'react';
import { ChevronRight, Award, Users, Globe, Target, Zap, Shield, Heart } from 'lucide-react';

const LatamDigitalDossier = () => {
  const [activeSection, setActiveSection] = useState('portada');

  const sections = {
    portada: 'Portada',
    nosotros: 'Quiénes Somos',
    mensaje: 'Mensaje del Director',
    historia: 'Nuestra Historia',
    servicios: 'Servicios',
    equipo: 'Equipo y Capacidades',
    impacto: 'Nuestro Impacto',
    reconocimientos: 'Reconocimientos',
    diferenciadores: 'Por Qué Elegirnos'
  };

  const Portada = () => (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white p-8">
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl font-bold mb-6">Latam Digital</h1>
        <p className="text-2xl mb-8 text-blue-200">Consultoría en Tecnología e Innovación</p>
        <div className="space-y-4 text-xl text-blue-100">
          <p>Gestión Digital 360</p>
          <p>Innovación Digital Aplicada</p>
        </div>
        <div className="mt-12 text-lg text-blue-200">
          <p>Panamá | Latinoamérica | Estados Unidos</p>
        </div>
        <div className="mt-16 border-t border-blue-400 pt-8">
          <p className="text-xl italic">&quot;No vendemos tecnología. Construimos relaciones de confianza, ejecutamos con sensatez y hacemos que la tecnología genere valor real para el negocio.&quot;</p>
        </div>
      </div>
    </div>
  );

  const QuienesSomos = () => (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-blue-900">Quiénes Somos</h2>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl mb-6 leading-relaxed">
          <strong>Latam Digital</strong> es una empresa especializada en consultoría en tecnología e innovación, gestión de servicios digitales y desarrollo de soluciones de inteligencia artificial aplicada.
        </p>

        <p className="text-lg mb-6 leading-relaxed">
          Fundada en <strong>enero de 2007</strong> por Johann Tello Meryk en la Ciudad de Panamá, operamos en Panamá, Latinoamérica y Estados Unidos, trabajando con organizaciones que buscan transformar su tecnología en un verdadero habilitador de negocio.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">Nuestra Visión</h3>
          <p className="text-lg leading-relaxed">
            Mantener un equipo altamente motivado en la investigación y desarrollo de nuevas tecnologías y en los servicios que ofrecemos para brindar soluciones innovadoras a los clientes y mantener nuestros servicios actuales competitivos.
          </p>
        </div>

        <div className="bg-indigo-50 p-6 rounded-lg my-8">
          <h3 className="text-2xl font-bold mb-4 text-indigo-900">Nuestra Misión</h3>
          <p className="text-lg leading-relaxed">
            Diferenciarnos en la industria con propuestas innovadoras de servicios que permitan a nuestros clientes diferenciarse en sus mercados basándose no sólo en la innovación sino en la calidad del servicio, valor del negocio, optimización de sus recursos y gestionar los riesgos adecuadamente.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">Nuestro Enfoque</h3>
          <p className="text-lg mb-4">En Latam Digital combinamos:</p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Zap className="text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-lg"><strong>Conocimiento académico de vanguardia</strong> con formación especializada en inteligencia artificial, bioinformática y tecnologías emergentes.</p>
            </div>

            <div className="flex items-start gap-3">
              <Target className="text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-lg"><strong>Experiencia real de ejecución</strong> en entornos corporativos y regulados de sectores críticos como finanzas, banca, seguros, salud y comercio.</p>
            </div>

            <div className="flex items-start gap-3">
              <Heart className="text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-lg"><strong>Cultura de servicio excepcional</strong> que nos convierte en socios tecnológicos de largo plazo, no en proveedores transaccionales.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
          <p className="text-xl font-semibold text-center">
            Academia + Experiencia + Cultura de Servicio = Resultados Garantizados
          </p>
        </div>
      </div>
    </div>
  );

  const MensajeDirector = () => (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-blue-900">Mensaje del Director</h2>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg mb-8">
        <p className="text-sm text-gray-600 mb-4">Johann Tello Meryk | Fundador y Director</p>

        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg leading-relaxed">
            Cuando fundamos Latam Digital en 2007, lo hicimos con una convicción clara: ofrecer servicios que generaran valor real a nuestros clientes, diferenciándonos de lo que veíamos en el mercado.
          </p>

          <p className="text-lg leading-relaxed">
            La mayoría de las firmas consultoras tienen una desconexión entre la experiencia y la academia. Muchos conceptos, poca vivencia del mundo real. Todo basado en la teoría. Nosotros decidimos tomar un camino diferente.
          </p>

          <p className="text-lg leading-relaxed">
            Nuestro objetivo desde el primer día ha sido claro: <strong>Academia + Experiencia + Cultura de Servicio = Resultados Garantizados</strong>. Esta fórmula nos ha permitido no solo sobrevivir, sino evolucionar constantemente durante casi dos décadas.
          </p>

          <div className="bg-white p-6 rounded-lg my-6 border-l-4 border-blue-600">
            <p className="text-lg font-semibold mb-3">Un momento que marcó nuestro rumbo</p>
            <p className="text-lg leading-relaxed">
              La implementación de COBIT 2019 en Banistmo fue un punto de inflexión. Nos demostró que cuando combinamos conocimiento profundo, experiencia práctica y compromiso genuino, podemos resolver desafíos complejos en organizaciones de alto nivel.
            </p>
          </div>

          <p className="text-lg leading-relaxed">
            En nuestro ADN está la innovación. El mundo avanza en inteligencia artificial a un ritmo acelerado, y nosotros no solo lo seguimos, lo anticipamos. Por eso hemos evolucionado constantemente: de consultoría tradicional a servicios digitales, de ecosistemas digitales a soluciones de IA, y ahora, pioneros en soluciones médicas digitales y bioinformática.
          </p>

          <p className="text-lg leading-relaxed">
            Este 2026 marca otro momento decisivo con el desarrollo de <strong>Microbiome Radar</strong>, un proyecto que representa nuestra apuesta por la innovación que rompe esquemas. Es muy posible que nos especialicemos cada vez más en sectores que demanden alta innovación y que estén listos para transformarse.
          </p>

          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 rounded-lg my-6">
            <p className="text-lg font-semibold mb-3">Valores innegociables</p>
            <p className="text-lg leading-relaxed">
              En 19 años han intentado llevarnos al camino de la corrupción, y lo hemos rechazado. Nuestros valores éticos y morales son innegociables. Somos honestos con nuestros clientes, transparentes en nuestras relaciones y comprometidos con la excelencia.
            </p>
          </div>

          <p className="text-lg leading-relaxed">
            Lo que nos emociona del futuro de la tecnología aplicada es todo. Cada reconocimiento que hemos ganado —desde Microsoft Startup Founder Hub hasta el Premio Nacional de Innovación 2024, pasando por la distinción de la Universidad Técnica de Berlín— valida que estamos en el camino correcto.
          </p>

          <p className="text-lg leading-relaxed">
            Pero más que los premios, lo que realmente nos impulsa es ver cómo el 95% de nuestro talento en outsourcing es internalizado por nuestros clientes en promedio de 18 meses. No es una condición contractual. Es la consecuencia directa de un servicio sólido, cercano y alineado con los objetivos del negocio.
          </p>

          <div className="mt-8 pt-6 border-t-2 border-blue-200">
            <p className="text-xl font-bold text-blue-900 italic">
              &quot;En Latam Digital no vendemos tecnología. Construimos relaciones de confianza, ejecutamos con sensatez y hacemos que la tecnología genere valor real para el negocio.&quot;
            </p>
            <p className="text-right mt-4 text-gray-600">— Johann Tello Meryk</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Historia = () => (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-blue-900">Nuestra Historia: 19 Años de Evolución Constante</h2>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>

        <div className="space-y-8">
          {[
            { year: '2007', title: 'Fundación', desc: 'Inicio como empresa de consultoría especializada en gobernanza, riesgos, ciberseguridad, auditoría de sistemas y protección de datos.' },
            { year: '2013', title: 'Expansión de Servicios', desc: 'Incorporación de servicios de outsourcing estratégico.' },
            { year: '2016', title: 'Ampliación de Equipo', desc: 'Ampliación de equipo de consultoría.' },
            { year: '2017', title: 'Gestión Digital 360', desc: 'Lanzamiento del modelo de gestión digital integral.' },
            { year: '2020', title: 'Soluciones Digitales', desc: 'Consolidación como desarrolladores de soluciones digitales a medida.' },
            { year: '2021', title: 'Innovación Digital', desc: 'Enfoque estratégico en innovación digital aplicada.' },
            { year: '2022', title: 'Inteligencia Artificial', desc: 'Inicio de desarrollo de soluciones basadas en IA.' },
            { year: '2023', title: 'Soluciones Médicas Digitales', desc: 'Entrega de soluciones médicas innovadoras y entrada al sector salud.' },
            { year: '2024', title: 'Bioinformática', desc: 'Desarrollo de soluciones especializadas en bioinformática. Premio Nacional de Innovación - Tercer Lugar.' },
            { year: '2026', title: 'IA Sectorial', desc: 'Especialización en ecosistemas de IA para sectores financiero y salud. Desarrollo de Microbiome Radar.' }
          ].map((item, idx) => (
            <div key={idx} className="relative pl-20">
              <div className="absolute left-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                {item.year}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
        <p className="text-xl font-semibold text-center">
          De consultoría tradicional a pioneros en innovación digital, IA y bioinformática
        </p>
      </div>
    </div>
  );

  const Servicios = () => (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-blue-900">Nuestros Servicios</h2>

      <div className="space-y-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-4 text-blue-900">1. Consultoría en Tecnología e Innovación</h3>
          <p className="text-lg mb-6 leading-relaxed">
            Alineamos la estrategia tecnológica con los objetivos reales del negocio, incorporando transformación digital, innovación e inteligencia artificial de forma estructurada, sensata y escalable.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-blue-800">¿Cuándo nos necesitas?</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Diagnóstico estratégico de TI</li>
                <li>• Problemas operativos o de ciberseguridad</li>
                <li>• Desalineación TI-Negocio</li>
                <li>• Iniciativas de IA sin retorno</li>
                <li>• Definición de prioridades de inversión</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3 text-blue-800">Lo que obtienes</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Claridad estratégica</li>
                <li>• Alineación TI-Negocio-Innovación</li>
                <li>• Certeza de inversión</li>
                <li>• Reducción de riesgos</li>
                <li>• Hoja de ruta realista hacia IA</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-4 text-indigo-900">2. Gestión Digital 360</h3>
          <p className="text-lg mb-6 leading-relaxed">
            Operamos tu ecosistema digital con estabilidad, seguridad y visión de negocio, actuando como un socio tecnológico de confianza que acompaña en el día a día.
          </p>

          <div className="bg-white p-6 rounded-lg mb-6">
            <p className="text-xl font-semibold text-indigo-900 mb-3">¿Qué nos diferencia?</p>
            <p className="text-lg text-gray-700">
              Nuestros clientes no nos ven como un proveedor más. Nos ven como parte de su equipo. Operamos con visión integral, priorizamos la continuidad del negocio y nos involucramos más allá de lo requerido.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-indigo-800">✓ Tranquilidad operativa</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-indigo-800">✓ Control y monitoreo profesional</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-indigo-800">✓ Seguridad ante amenazas</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-indigo-800">✓ Tecnología que rinde valor</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-4 text-purple-900">3. Innovación Digital Aplicada</h3>
          <p className="text-lg mb-6 leading-relaxed">
            Diseñamos, desarrollamos e implementamos soluciones digitales y de inteligencia artificial de alto nivel, cuando las herramientas estándar no son suficientes.
          </p>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">Software a medida</h4>
              <p className="text-gray-700">Para necesidades específicas del negocio</p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">Inteligencia Artificial aplicada</h4>
              <p className="text-gray-700">De forma práctica y segura</p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">Automatización y analítica avanzada</h4>
              <p className="text-gray-700">Para eficiencia operativa</p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">Talento especializado en outsourcing</h4>
              <p className="text-gray-700">Integrado directamente al negocio</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-4 text-green-900">Outsourcing Estratégico</h3>
          <div className="bg-white p-6 rounded-lg mb-4">
            <p className="text-2xl font-bold text-green-900 mb-3">
              El 95% de nuestro talento en outsourcing es internalizado por nuestros clientes en un promedio de 18 meses
            </p>
            <p className="text-lg text-gray-700">
              No es una condición contractual. Es la consecuencia directa de un servicio sólido, cercano y alineado con los objetivos del negocio.
            </p>
          </div>
          <p className="text-lg leading-relaxed text-gray-700">
            No nos limitamos a contratar recursos. Desarrollamos talento que las empresas deciden hacer suyo. Cuando el outsourcing funciona, deja de ser externo y se convierte en una extensión natural del equipo.
          </p>
        </div>
      </div>
    </div>
  );

  const Equipo = () => (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-blue-900">Equipo y Capacidades</h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-blue-600 w-8 h-8" />
            <h3 className="text-2xl font-bold text-blue-900">Equipo</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600 mb-2">~20 personas</p>
          <p className="text-gray-700">Entre personal permanente y outsourcing</p>
        </div>

        <div className="bg-indigo-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-indigo-600 w-8 h-8" />
            <h3 className="text-2xl font-bold text-indigo-900">Modelo de Trabajo</h3>
          </div>
          <p className="text-xl font-bold text-indigo-600 mb-2">Híbrido con tendencia remota</p>
          <p className="text-gray-700">Sede en Ciudad de Panamá, Panamá</p>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-blue-900">Perfiles Profesionales</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            'Arquitectos Digitales',
            'Arquitectos en Ciberseguridad',
            'Bioinformáticos',
            'Especialistas Agile & Scrum',
            'Project Managers PMI',
            'Ingenieros Azure',
            'Especialistas M365',
            'Desarrolladores JavaScript',
            'Desarrolladores React',
            'Desarrolladores Python',
            'Especialistas Zero Code',
            'Expertos N8n',
            'Power Platform',
            'Power BI Desktop',
            'Azure ML',
            'Big ML',
            'Software Fabric',
            'Consultores COBIT',
            'Auditores de Sistemas',
            'Protección de Datos',
            'Machine Learning',
            'Ecosistemas de IA'
          ].map((perfil, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
              <p className="font-semibold text-gray-800">{perfil}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6 text-blue-900">Certificaciones del Equipo</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { cert: 'CISM', desc: 'Certified Information Security Manager' },
            { cert: 'CISA', desc: 'Certified Information Systems Auditor' },
            { cert: 'CRISC', desc: 'Certified in Risk and Information Systems Control' },
            { cert: 'CDPSE', desc: 'Certified Data Privacy Solutions Engineer' },
            { cert: 'COBIT Assessor', desc: 'Evaluación de Gobierno y Gestión de TI' },
            { cert: 'SMC Certification', desc: 'Scrum Master Certified' },
            { cert: 'Scrum Foundation', desc: 'Fundamentos de Scrum' },
            { cert: 'Professional Scrum Master', desc: 'Scrum Master Profesional' },
            { cert: 'PMI', desc: 'Project Management Institute' },
            { cert: 'SFPC', desc: 'Scrum Foundation Professional Certificate' },
            { cert: 'Agile Coach', desc: 'Coach Ágil Corporativo' },
            { cert: 'Corporate Coach U', desc: 'The Coaching Clinic' },
            { cert: 'Design & Visual Thinking', desc: 'Pensamiento de Diseño y Visual' }
          ].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 rounded-lg shadow-lg">
              <p className="text-xl font-bold mb-1">{item.cert}</p>
              <p className="text-sm text-blue-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Impacto = () => (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-blue-900">Nuestro Impacto</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-lg shadow-xl text-center">
          <p className="text-5xl font-bold mb-2">+100</p>
          <p className="text-xl">Clientes Atendidos</p>
        </div>

        <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white p-8 rounded-lg shadow-xl text-center">
          <p className="text-5xl font-bold mb-2">+10,000</p>
          <p className="text-xl">Horas de Consultoría</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-lg shadow-xl text-center">
          <p className="text-5xl font-bold mb-2">95%</p>
          <p className="text-xl">Talento Internalizado</p>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-blue-900">Presencia Internacional</h3>
        <p className="text-lg mb-4 text-gray-700">Hemos trabajado en múltiples países de América:</p>
        <div className="grid md:grid-cols-4 gap-3">
          {[
            'Estados Unidos',
            'Islas Caimán',
            'Panamá',
            'México',
            'El Salvador',
            'Nicaragua',
            'Costa Rica',
            'Colombia',
            'Ecuador',
            'Perú',
            'Brasil',
            'Argentina'
          ].map((pais, idx) => (
            <div key={idx} className="bg-blue-100 p-3 rounded-lg text-center">
              <p className="font-semibold text-blue-900">{pais}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6 text-blue-900">Sectores de Especialización</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
            <h4 className="text-xl font-bold text-green-900 mb-3">Sector Financiero</h4>
            <p className="text-gray-700">
              Nuestra mayor concentración de proyectos. Experiencia profunda en banca, seguros, valores y servicios financieros regulados.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-600">
            <h4 className="text-xl font-bold text-red-900 mb-3">Sector Salud</h4>
            <p className="text-gray-700">
              Iniciando presencia en los últimos tres años con soluciones médicas digitales, bioinformática e IA aplicada a la salud.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const Reconocimientos = () => (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-blue-900">Reconocimientos y Distinciones</h2>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-12 h-12" />
            <div>
              <h3 className="text-2xl font-bold">Microsoft Startup Founder Hub</h3>
              <p className="text-blue-100">Reconocimiento Internacional</p>
            </div>
          </div>
          <p className="text-lg">
            Reconocimiento internacional que distingue a Latam Digital como una empresa de innovación, excelencia y estándares de clase mundial.
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-8 rounded-lg shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-12 h-12" />
            <div>
              <h3 className="text-2xl font-bold">ISV Success Program de Microsoft</h3>
              <p className="text-indigo-100">Certificación de Excelencia</p>
            </div>
          </div>
          <p className="text-lg">
            Programa de Microsoft que certifica nuestra excelencia en el desarrollo de software con altos estándares de calidad y desempeño.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-lg shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-12 h-12" />
            <div>
              <h3 className="text-2xl font-bold">Premio Nacional de Innovación 2024</h3>
              <p className="text-green-100">Tercer Lugar - Panamá</p>
            </div>
          </div>
          <p className="text-lg">
            Reconocimiento nacional que valida nuestra excelencia, innovación y calidad en el desarrollo de soluciones digitales de alto impacto.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-lg shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-12 h-12" />
            <div>
              <h3 className="text-2xl font-bold">Universidad Técnica de Berlín</h3>
              <p className="text-purple-100">Innovate New! - Distinción Académica</p>
            </div>
          </div>
          <p className="text-lg">
            Distinción académica internacional que valida nuestro ADN de innovación, con procesos sólidos y una cultura empresarial orientada a la excelencia.
          </p>
        </div>
      </div>
    </div>
  );

  const Diferenciadores = () => (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-blue-900">Por Qué Elegirnos</h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Trayectoria Demostrada</h3>
          <p className="text-gray-700 leading-relaxed">
            19 años de experiencia en proyectos reales de transformación digital e inteligencia artificial en sectores críticos y regulados.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-indigo-900">Formación de Vanguardia</h3>
          <p className="text-gray-700 leading-relaxed">
            Maestrías especializadas en IA aplicada a la salud y bioinformática, combinando academia y ejecución práctica.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Cultura de Servicio Excepcional</h3>
          <p className="text-gray-700 leading-relaxed">
            Heredada de entornos corporativos, que se traduce en cercanía, disponibilidad y compromiso genuino con cada cliente.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-green-900">Innovación Aplicada</h3>
          <p className="text-gray-700 leading-relaxed">
            Proyectos pioneros como Microbiome Radar demuestran nuestra capacidad de crear soluciones que no existen en el mercado.
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-red-900">Relaciones de Largo Plazo</h3>
          <p className="text-gray-700 leading-relaxed">
            El 95% de nuestro talento en outsourcing es internalizado por nuestros clientes, evidenciando calidad y ajuste cultural.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-yellow-900">Valores Innegociables</h3>
          <p className="text-gray-700 leading-relaxed">
            19 años manteniendo principios éticos y morales, con transparencia y honestidad como pilares fundamentales.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white p-12 rounded-lg shadow-2xl">
        <h3 className="text-3xl font-bold mb-6 text-center">Nuestro Compromiso</h3>
        <p className="text-xl leading-relaxed mb-6 text-center italic">
          &quot;En Latam Digital no vendemos tecnología. Construimos relaciones de confianza, ejecutamos con sensatez y hacemos que la tecnología genere valor real para el negocio.&quot;
        </p>
        <p className="text-lg leading-relaxed text-blue-100">
          Actuamos como socios, no como proveedores. Nos involucramos en el éxito de nuestros clientes, aportamos criterio técnico con visión de negocio, y construimos soluciones que trascienden el proyecto para convertirse en activos estratégicos de la organización.
        </p>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-6 text-blue-900">Contacto</h3>
        <div className="space-y-2 text-lg text-gray-700">
          <p className="font-semibold text-2xl text-blue-900">Latam Digital</p>
          <p>Ciudad de Panamá, Panamá</p>
          <p>Panamá | Latinoamérica | Estados Unidos</p>
        </div>
        <div className="mt-8 text-gray-600 italic">
          <p>Construyendo el futuro digital de las organizaciones, un proyecto a la vez.</p>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'portada': return <Portada />;
      case 'nosotros': return <QuienesSomos />;
      case 'mensaje': return <MensajeDirector />;
      case 'historia': return <Historia />;
      case 'servicios': return <Servicios />;
      case 'equipo': return <Equipo />;
      case 'impacto': return <Impacto />;
      case 'reconocimientos': return <Reconocimientos />;
      case 'diferenciadores': return <Diferenciadores />;
      default: return <Portada />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {Object.entries(sections).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === key
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main>
        {renderContent()}
      </main>
    </div>
  );
};

export default LatamDigitalDossier;
