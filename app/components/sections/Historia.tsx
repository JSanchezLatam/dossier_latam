import { memo } from 'react';
import { HISTORY_ITEMS } from './constants';

const Historia = memo(() => (
  <div className="p-8 max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-latam-blue-900">
      Nuestra Historia: 19 Años de Evolución Constante
    </h2>

    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-latam-blue-200" />

      <div className="space-y-8">
        {HISTORY_ITEMS.map((item, idx) => (
          <div key={item.year} className="relative pl-20">
            <div className="absolute left-0 w-16 h-16 bg-latam-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              {item.year}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-latam-blue-600">
              <h3 className="text-xl font-bold text-latam-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-latam-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-12 p-6 bg-gradient-to-r from-latam-blue-600 to-latam-blue-700 text-white rounded-lg">
      <p className="text-xl font-semibold text-center">
        De consultoría tradicional a pioneros en innovación digital, IA y bioinformática
      </p>
    </div>
  </div>
));

Historia.displayName = 'Historia';

export default Historia;
