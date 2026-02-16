// Types for section components
export type SectionType =
  | 'portada'
  | 'nosotros'
  | 'mensaje'
  | 'historia'
  | 'servicios'
  | 'equipo'
  | 'impacto'
  | 'reconocimientos'
  | 'diferenciadores';

export interface HistoryItem {
  year: string;
  title: string;
  desc: string;
}

export interface Certification {
  cert: string;
  desc: string;
}
