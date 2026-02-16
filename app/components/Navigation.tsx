import { memo } from 'react';
import type { SectionType } from './sections/types';

interface NavigationProps {
  sections: Record<SectionType, string>;
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
}

const Navigation = memo<NavigationProps>(
  ({ sections, activeSection, onSectionChange }) => (
    <nav className="bg-white shadow-lg sticky top-0 z-50" role="navigation">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2" aria-hidden="true">
            <div className="w-3 h-3 bg-latam-blue rounded-full" />
            <div className="w-3 h-3 bg-latam-orange rounded-full" />
            <div className="w-3 h-3 bg-latam-blue-700 rounded-full" />
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {Object.entries(sections).map(([key, label]) => (
              <button
                key={key}
                onClick={() => onSectionChange(key as SectionType)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === key
                    ? 'bg-latam-blue text-white shadow-md'
                    : 'bg-gray-100 text-latam-gray-700 hover:bg-latam-orange-50 hover:text-latam-orange'
                }`}
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
