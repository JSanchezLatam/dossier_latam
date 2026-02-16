import { memo } from 'react';
import { TrendingUp, GraduationCap, Heart, Lightbulb, Users, Shield, CheckCircle2 } from 'lucide-react';

const DIFERENCIADORES = [
  {
    title: 'Trayectoria Demostrada',
    desc: '19 años de experiencia en proyectos reales de transformación digital e inteligencia artificial en sectores críticos y regulados.',
    color: 'latam-blue',
    icon: TrendingUp,
  },
  {
    title: 'Formación de Vanguardia',
    desc: 'Maestrías especializadas en IA aplicada a la salud y bioinformática, combinando academia y ejecución práctica.',
    color: 'latam-blue',
    icon: GraduationCap,
  },
  {
    title: 'Cultura de Servicio Excepcional',
    desc: 'Heredada de entornos corporativos, que se traduce en cercanía, disponibilidad y compromiso genuino con cada cliente.',
    color: 'latam-blue',
    icon: Heart,
  },
  {
    title: 'Innovación Aplicada',
    desc: 'Proyectos pioneros como Microbiome Radar demuestran nuestra capacidad de crear soluciones que no existen en el mercado.',
    color: 'latam-orange',
    icon: Lightbulb,
  },
  {
    title: 'Relaciones de Largo Plazo',
    desc: 'El 95% de nuestro talento en outsourcing es internalizado por nuestros clientes, evidenciando calidad y ajuste cultural.',
    color: 'latam-orange',
    icon: Users,
  },
  {
    title: 'Valores Innegociables',
    desc: '19 años manteniendo principios éticos y morales, con transparencia y honestidad como pilares fundamentales.',
    color: 'latam-orange',
    icon: Shield,
  },
];

const Diferenciadores = memo(() => (
  <div className="p-8 max-w-6xl mx-auto relative">
    {/* Efectos decorativos */}
    <div className="absolute top-20 right-10 w-72 h-72 bg-latam-blue-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
    <div className="absolute bottom-20 left-10 w-72 h-72 bg-latam-orange-100 rounded-full blur-3xl opacity-20 animate-pulse-slow animation-delay-400" />

    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-latam-blue-900 animate-fade-in relative z-10">
      Por Qué Elegirnos
    </h2>

    <div className="grid md:grid-cols-2 gap-8 mb-12 relative z-10">
      {DIFERENCIADORES.map((item, index) => {
        const Icon = item.icon;
        const isOrange = item.color === 'latam-orange';
        const bgGradient = isOrange
          ? 'from-latam-orange-50 to-latam-orange-100'
          : 'from-latam-blue-50 to-latam-blue-100';
        const borderColor = isOrange ? 'border-latam-orange-500' : 'border-latam-blue-500';
        const textColor = isOrange ? 'text-latam-orange-900' : 'text-latam-blue-900';
        const iconBg = isOrange ? 'bg-latam-orange-500' : 'bg-latam-blue-500';

        return (
          <div
            key={item.title}
            className={`bg-gradient-to-br ${bgGradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 card-hover border-l-4 ${borderColor} group animate-scale-in animation-delay-${100 + index * 100} overflow-hidden relative`}
          >
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 ${iconBg} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${textColor}`}>
                  {item.title}
                </h3>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className={`w-5 h-5 ${isOrange ? 'text-latam-orange-600' : 'text-latam-blue-600'} mt-0.5 flex-shrink-0`} />
                <p className="text-latam-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    <div className="bg-gradient-to-br from-latam-blue-900 via-latam-blue-800 to-latam-blue-900 text-white p-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 animate-scale-in animation-delay-600 overflow-hidden relative group">
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-latam-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-latam-orange/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 bg-latam-orange rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-latam-orange rounded-full animate-pulse animation-delay-200" />
          <div className="w-2 h-2 bg-latam-orange rounded-full animate-pulse animation-delay-400" />
        </div>

        <h3 className="text-3xl font-bold mb-6 text-center">Nuestro Compromiso</h3>

        <div className="bg-white/10 p-6 rounded-xl mb-6 backdrop-blur-sm">
          <p className="text-xl leading-relaxed text-center italic">
            &quot;En Latam Digital no vendemos tecnología. Construimos relaciones de
            confianza, ejecutamos con sensatez y hacemos que la tecnología genere
            valor real para el negocio.&quot;
          </p>
        </div>

        <p className="text-lg leading-relaxed text-latam-blue-100">
          Actuamos como socios, no como proveedores. Nos involucramos en el éxito
          de nuestros clientes, aportamos criterio técnico con visión de negocio, y
          construimos soluciones que trascienden el proyecto para convertirse en
          activos estratégicos de la organización.
        </p>
      </div>
    </div>

    <div className="mt-12 text-center relative z-10 animate-fade-in">
      <div className="bg-gradient-to-br from-latam-blue-50 to-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Users className="w-8 h-8 text-latam-blue-600" />
          <h3 className="text-3xl font-bold text-latam-blue-900">Contacto</h3>
        </div>

        <div className="space-y-3 text-lg text-latam-gray-700 mb-6">
          <p className="font-bold text-3xl text-latam-blue-900 animate-fade-in animation-delay-100">
            Latam Digital
          </p>

          <div className="flex items-center justify-center gap-2 animate-fade-in animation-delay-200">
            <div className="w-2 h-2 bg-latam-orange rounded-full" />
            <p className="font-semibold">Ciudad de Panamá, Panamá</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-4 animate-fade-in animation-delay-300">
            <span className="px-4 py-2 bg-latam-blue-100 text-latam-blue-800 rounded-full font-semibold text-sm">
              Panamá
            </span>
            <span className="px-4 py-2 bg-latam-blue-100 text-latam-blue-800 rounded-full font-semibold text-sm">
              Latinoamérica
            </span>
            <span className="px-4 py-2 bg-latam-blue-100 text-latam-blue-800 rounded-full font-semibold text-sm">
              Estados Unidos
            </span>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-latam-blue-600 to-latam-blue-700 rounded-xl text-white animate-fade-in animation-delay-400 relative overflow-hidden group/footer">
          <div className="absolute inset-0 shimmer opacity-0 group-hover/footer:opacity-20 transition-opacity duration-500" />
          <p className="text-lg italic font-medium relative z-10">
            Construyendo el futuro digital de las organizaciones, un proyecto a la
            vez.
          </p>
        </div>
      </div>
    </div>
  </div>
));

Diferenciadores.displayName = 'Diferenciadores';

export default Diferenciadores;
