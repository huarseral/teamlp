import type { Course, Service, Stat, Country } from '../types'

export const COURSES: Course[] = [
  {
    id: 'ia',
    tag: '🔥 Más popular',
    emoji: '🤖',
    name: 'Desarrollo Asistido con IA',
    description: 'Aprende a usar Claude, ChatGPT y Copilot para acelerar tu desarrollo. Workflows modernos, prompting avanzado y arquitectura de proyectos con IA.',
    price: 'S/ 150',
    bannerClass: 'from-navy3 to-[#0d2540]',
  },
  {
    id: 'claude',
    tag: '🆕 Nuevo',
    emoji: '⚡',
    name: 'Claude Code',
    description: 'Domina Claude Code para automatizar tareas, generar código de calidad y trabajar con agentes de IA en proyectos reales de software.',
    price: 'S/ 120',
    bannerClass: 'from-navy3 to-[#1a0d2e]',
  },
  {
    id: 'android',
    tag: '📱 Mobile',
    emoji: '📱',
    name: 'Android Studio con IA',
    description: 'Desarrolla apps Android desde cero usando Android Studio e integrando modelos de IA para crear aplicaciones inteligentes y modernas.',
    price: 'S/ 180',
    bannerClass: 'from-navy3 to-[#0a2010]',
  },
  {
    id: 'laravel',
    tag: '🌐 Full Stack',
    emoji: '🌐',
    name: 'Laravel Full Stack con IA',
    description: 'Backend robusto con Laravel + frontend moderno. Integra IA para generar contenido, analizar datos y construir APIs inteligentes.',
    price: 'S/ 200',
    bannerClass: 'from-navy3 to-[#2e0d1a]',
  },
]

export const SERVICES: Service[] = [
  { icon: '📚', title: 'Cursos Online en Vivo', description: 'Clases en tiempo real con el instructor, sesiones grabadas y grupos reducidos para mejor aprendizaje.' },
  { icon: '🤖', title: 'Desarrollo Asistido con IA', description: 'Aprende a integrar herramientas de IA en tu flujo de trabajo para multiplicar tu productividad.' },
  { icon: '💼', title: 'Mentoría Personalizada', description: 'Sesiones 1 a 1 para resolver dudas, revisar tu código y orientarte en tu carrera como developer.' },
  { icon: '🏗️', title: 'Desarrollo de Software', description: 'Construcción de aplicaciones web y móviles para empresas con tecnologías modernas e IA.' },
  { icon: '🏫', title: 'Talleres en Colegios', description: 'Visitas presenciales para introducir a jóvenes al mundo del desarrollo de software.' },
  { icon: '🎯', title: 'Proyectos Prácticos', description: 'Cada curso incluye proyectos reales que puedes añadir a tu portafolio profesional.' },
]

export const STATS: Stat[] = [
  { num: '500+', label: 'Estudiantes', icon: '👨‍💻' },
  { num: '8+',   label: 'Años exp.',   icon: '🎓' },
  { num: '20+',  label: 'Colegios',    icon: '🏫' },
  { num: '30+',  label: 'Proyectos',   icon: '📦' },
  { num: '4',    label: 'Cursos IA',   icon: '🤖' },
  { num: '4.9',  label: 'Valoración',  icon: '⭐' },
]

export const TECH_PILLS = [
  'Python', 'Flutter / Dart', 'Laravel', 'React', 'Android Studio',
  'Claude AI', 'SQLite', 'FastAPI', 'Node.js', 'Docker', 'MySQL', 'Git / GitHub',
]

export const COUNTRIES: Country[] = [
  { code: 'PE', flag: '🇵🇪', name: 'Perú',              dialCode: '+51'  },
  { code: 'MX', flag: '🇲🇽', name: 'México',            dialCode: '+52'  },
  { code: 'AR', flag: '🇦🇷', name: 'Argentina',         dialCode: '+54'  },
  { code: 'CO', flag: '🇨🇴', name: 'Colombia',          dialCode: '+57'  },
  { code: 'CL', flag: '🇨🇱', name: 'Chile',             dialCode: '+56'  },
  { code: 'VE', flag: '🇻🇪', name: 'Venezuela',         dialCode: '+58'  },
  { code: 'EC', flag: '🇪🇨', name: 'Ecuador',           dialCode: '+593' },
  { code: 'BO', flag: '🇧🇴', name: 'Bolivia',           dialCode: '+591' },
  { code: 'PY', flag: '🇵🇾', name: 'Paraguay',          dialCode: '+595' },
  { code: 'UY', flag: '🇺🇾', name: 'Uruguay',           dialCode: '+598' },
  { code: 'SV', flag: '🇸🇻', name: 'El Salvador',       dialCode: '+503' },
  { code: 'GT', flag: '🇬🇹', name: 'Guatemala',         dialCode: '+502' },
  { code: 'HN', flag: '🇭🇳', name: 'Honduras',          dialCode: '+504' },
  { code: 'NI', flag: '🇳🇮', name: 'Nicaragua',         dialCode: '+505' },
  { code: 'CR', flag: '🇨🇷', name: 'Costa Rica',        dialCode: '+506' },
  { code: 'PA', flag: '🇵🇦', name: 'Panamá',            dialCode: '+507' },
  { code: 'DO', flag: '🇩🇴', name: 'Rep. Dominicana',   dialCode: '+1'   },
  { code: 'CU', flag: '🇨🇺', name: 'Cuba',              dialCode: '+53'  },
  { code: 'ES', flag: '🇪🇸', name: 'España',            dialCode: '+34'  },
]

export const NAV_LINKS = [
  { href: '#nosotros',    label: 'Nosotros'          },
  { href: '#huarseral',   label: 'Huarseral Dev'     },
  { href: '#experiencia', label: 'Experiencia'       },
  { href: '#servicios',   label: 'Servicios'         },
  { href: '#colegios',    label: 'Visitas a Colegios'},
  { href: '#cursos',      label: 'Cursos'            },
  { href: '#contacto',    label: 'Contacto'          },
]
