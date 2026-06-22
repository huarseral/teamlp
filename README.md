# TeamLP — Plataforma de Cursos Online

Sitio web oficial de **TeamLP / Huarseral Dev / LAChirana Plat**.

## Stack
- **React 18** + **TypeScript**
- **Vite 5**
- **Tailwind CSS 3**
- **Lucide React** (iconos)

## Instalación

```bash
npm install
npm run dev
```

## Build producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
├── assets/images/       # Fotos del instructor y visitas
├── components/          # Navbar, Footer, SectionHeader
├── sections/            # Hero, Nosotros, HuarseralDev, Experiencia,
│                        # Servicios, Colegios, Cursos, Contacto
├── hooks/               # useFadeUp (scroll reveal)
├── data/                # content.ts (todo el contenido editable)
├── App.tsx
├── main.tsx
└── index.css
```

## Personalización

Todo el contenido editable está en `src/data/content.ts`:
- Cursos, precios, descripciones
- Lista de servicios
- Experiencia / estadísticas
- Países del formulario
- Links de navegación
