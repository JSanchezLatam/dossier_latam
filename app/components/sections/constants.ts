import type { HistoryItem, Certification } from './types';

export const SECTIONS = {
  portada: 'Portada',
  nosotros: 'Quiénes Somos',
  mensaje: 'Mensaje del Director',
  historia: 'Nuestra Historia',
  servicios: 'Servicios',
  equipo: 'Equipo y Capacidades',
  impacto: 'Nuestro Impacto',
  reconocimientos: 'Reconocimientos',
  diferenciadores: 'Por Qué Elegirnos',
} as const;

export const HISTORY_ITEMS: HistoryItem[] = [
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
];

export const PROFESSIONAL_PROFILES = [
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
];

export const CERTIFICATIONS: Certification[] = [
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
];

export const COUNTRIES = [
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
];
