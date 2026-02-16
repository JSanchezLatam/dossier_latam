import { memo } from 'react';
import type { SectionType } from './sections/types';

interface NavigationProps {
  sections: Record<SectionType, string>;
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
}

const Navigation = memo<NavigationProps>(
  ({ sections, activeSection, onSectionChange }) => (
    <nav
      className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo animado */}
          <div className="flex items-center gap-2 animate-fade-in" aria-hidden="true">
            <div className="w-3 h-3 bg-latam-blue rounded-full animate-pulse-slow" />
            <div className="w-3 h-3 bg-latam-orange rounded-full animate-pulse-slow animation-delay-200" />
            <div className="w-3 h-3 bg-latam-blue-700 rounded-full animate-pulse-slow animation-delay-400" />
          </div>

          {/* Botones de navegación mejorados */}
          <div className="flex gap-2 flex-wrap justify-center">
            {Object.entries(sections).map(([key, label], index) => (
              <button
                key={key}
                onClick={() => onSectionChange(key as SectionType)}
                className={`
                  group relative px-4 py-2.5 rounded-lg text-sm font-medium
                  transition-all duration-300 ease-out
                  animate-fade-in
                  ${
                    activeSection === key
                      ? 'bg-latam-blue text-white shadow-lg shadow-latam-blue/30 scale-105'
                      : 'bg-gray-50 text-latam-gray-700 hover:bg-latam-orange-50 hover:text-latam-orange hover:shadow-md hover:scale-105'
                  }
                `}
                style={{ animationDelay: `${index * 50}ms` }}
                aria-label={`Navegar a ${label}`}
                aria-current={activeSection === key ? 'page' : undefined}
              >
                {/* Indicador activo animado */}
                {activeSection === key && (
                  <span
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-latam-blue to-latam-orange opacity-20 animate-pulse"
                    aria-hidden="true"
                  />
                )}

                {/* Texto del botón */}
                <span className="relative z-10">{label}</span>

                {/* Barra inferior animada en hover */}
                <span
                  className={`
                    absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-latam-orange
                    transition-all duration-300 ease-out
                    ${activeSection === key ? 'w-3/4' : 'w-0 group-hover:w-3/4'}
                  `}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
);

Navigation.displayName = 'Navigation';

export default Navigation;
