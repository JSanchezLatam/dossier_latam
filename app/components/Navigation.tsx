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

          {/* Botones de navegación */}
          <div className="flex gap-2 flex-wrap justify-center">
            {Object.entries(sections).map(([key, label], index) => (
              <button
                key={key}
                onClick={() => onSectionChange(key as SectionType)}
                className={`
                  px-4 py-2.5 rounded-lg text-sm font-medium
                  transition-all duration-300 ease-out
                  ${
                    activeSection === key
                      ? 'bg-latam-blue text-white shadow-lg'
                      : 'bg-gray-50 text-latam-gray-700 hover:bg-latam-blue hover:text-white hover:shadow-md'
                  }
                `}
                aria-label={`Navegar a ${label}`}
                aria-current={activeSection === key ? 'page' : undefined}
              >
                {label}
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
