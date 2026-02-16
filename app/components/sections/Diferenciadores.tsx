import { memo } from 'react';

const DIFERENCIADORES = [
  {
    title: 'Trayectoria Demostrada',
    desc: '19 años de experiencia en proyectos reales de transformación digital e inteligencia artificial en sectores críticos y regulados.',
    color: 'latam-blue',
  },
  {
    title: 'Formación de Vanguardia',
    desc: 'Maestrías especializadas en IA aplicada a la salud y bioinformática, combinando academia y ejecución práctica.',
    color: 'latam-blue',
  },
  {
    title: 'Cultura de Servicio Excepcional',
    desc: 'Heredada de entornos corporativos, que se traduce en cercanía, disponibilidad y compromiso genuino con cada cliente.',
    color: 'latam-blue',
  },
  {
    title: 'Innovación Aplicada',
    desc: 'Proyectos pioneros como Microbiome Radar demuestran nuestra capacidad de crear soluciones que no existen en el mercado.',
    color: 'latam-orange',
  },
  {
    title: 'Relaciones de Largo Plazo',
    desc: 'El 95% de nuestro talento en outsourcing es internalizado por nuestros clientes, evidenciando calidad y ajuste cultural.',
    color: 'latam-orange',
  },
  {
    title: 'Valores Innegociables',
    desc: '19 años manteniendo principios éticos y morales, con transparencia y honestidad como pilares fundamentales.',
    color: 'latam-orange',
  },
];

const Diferenciadores = memo(() => (
  <div className="p-8 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-latam-blue-900">
      Por Qué Elegirnos
    </h2>

    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {DIFERENCIADORES.map((item) => (
        <div
          key={item.title}
          className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 p-6 rounded-lg shadow-lg`}
        >
          <h3
            className={`text-xl font-bold mb-4 text-${
              item.color === 'latam-orange' ? 'latam-orange-900' : 'latam-blue-900'
            }`}
          >
            {item.title}
          </h3>
          <p className="text-latam-gray-700 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className="bg-gradient-to-br from-latam-blue-900 via-latam-blue-800 to-latam-blue-900 text-white p-12 rounded-lg shadow-2xl">
      <h3 className="text-3xl font-bold mb-6 text-center">Nuestro Compromiso</h3>
      <p className="text-xl leading-relaxed mb-6 text-center italic">
        &quot;En Latam Digital no vendemos tecnología. Construimos relaciones de
        confianza, ejecutamos con sensatez y hacemos que la tecnología genere
        valor real para el negocio.&quot;
      </p>
      <p className="text-lg leading-relaxed text-latam-blue-100">
        Actuamos como socios, no como proveedores. Nos involucramos en el éxito
        de nuestros clientes, aportamos criterio técnico con visión de negocio, y
        construimos soluciones que trascienden el proyecto para convertirse en
        activos estratégicos de la organización.
      </p>
    </div>

    <div className="mt-12 text-center">
      <h3 className="text-2xl font-bold mb-6 text-latam-blue-900">Contacto</h3>
      <div className="space-y-2 text-lg text-latam-gray-700">
        <p className="font-semibold text-2xl text-latam-blue-900">
          Latam Digital
        </p>
        <p>Ciudad de Panamá, Panamá</p>
        <p>Panamá | Latinoamérica | Estados Unidos</p>
      </div>
      <div className="mt-8 text-latam-gray-600 italic">
        <p>
          Construyendo el futuro digital de las organizaciones, un proyecto a la
          vez.
        </p>
      </div>
    </div>
  </div>
));

Diferenciadores.displayName = 'Diferenciadores';

export default Diferenciadores;
