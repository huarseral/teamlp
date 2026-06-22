import footerImg from '../assets/images/face-colegio.jpg'
import { NAV_LINKS, COURSES } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-brand/10 pt-12 pb-8 px-6">
      {/* Background photo */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${footerImg})`,
          backgroundSize: '550px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center right 2%',
          opacity: 0.22,
        }}
      />
      {/* Gradient overlay to fade photo left */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(10,21,32,1) 35%, rgba(10,21,32,0.55) 60%, rgba(10,21,32,0.1) 100%)',
        }}
      />

      <div className="relative z-[2] max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="font-orbitron font-black text-2xl tracking-widest mb-3">
              <span className="text-gradient">Team</span>
              <span className="text-green-brand">LP</span>
            </div>
            <p className="text-[#8A9BB0] text-sm leading-relaxed max-w-xs">
              Plataforma de educación tecnológica en español. Formamos developers listos para el
              mercado laboral, integrando inteligencia artificial desde el primer día.
            </p>
            <div className="flex gap-3 mt-5">
              {['YouTube', 'WhatsApp', 'GitHub'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-cyan-brand text-xs border border-cyan-brand/30 px-3 py-1.5
                    rounded hover:bg-cyan-brand hover:text-[#0D1B2A] transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-orbitron text-[0.65rem] tracking-[2px] text-cyan-brand mb-4 uppercase">
              Navegación
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[#8A9BB0] text-sm hover:text-cyan-brand transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cursos */}
          <div>
            <h4 className="font-orbitron text-[0.65rem] tracking-[2px] text-cyan-brand mb-4 uppercase">
              Cursos
            </h4>
            <ul className="flex flex-col gap-2">
              {COURSES.map((c) => (
                <li key={c.name}>
                  <a href="#cursos" className="text-[#8A9BB0] text-sm hover:text-cyan-brand transition-colors">
                    {c.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contacto" className="text-cyan-brand text-sm font-semibold hover:text-green-brand transition-colors">
                  Inscribirme →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row
          items-center justify-between gap-2 text-xs text-[#8A9BB0]">
          <span>
            © 2025 <strong className="text-cyan-brand">TeamLP · LAChirana Plat</strong>.
            Todos los derechos reservados.
          </span>
          <span>Hecho con ❤️ en Perú para toda Latinoamérica</span>
        </div>
      </div>
    </footer>
  )
}
