import SectionHeader from '../components/SectionHeader'
import { COURSES } from '../data/content'
import { useFadeUp } from '../hooks/useFadeUp'

export default function Cursos() {
  const ref = useFadeUp()

  return (
    <section id="cursos" className="py-24 px-6 bg-[#0a1520]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Formación profesional"
          title="Nuestros"
          accent="Cursos"
          sub="Programas diseñados para llevarte de cero a empleable, integrando inteligencia artificial desde el primer día."
        />

        <div ref={ref} className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {COURSES.map((c) => (
            <div
              key={c.name}
              className="bg-[#111E2E] border border-cyan-brand/12 rounded-xl overflow-hidden
                flex flex-col
                hover:border-cyan-brand hover:shadow-[0_8px_40px_rgba(0,212,255,0.25)]
                hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              {/* Banner */}
              <div className={`h-28 flex items-center justify-center text-5xl
                bg-gradient-to-br ${c.color} relative`}>
                {c.emoji}
                <div className="absolute bottom-0 left-0 right-0 h-0.5
                  bg-gradient-to-r from-cyan-brand to-green-brand" />
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-[0.65rem] font-bold tracking-[2px] text-green-brand uppercase mb-2">
                  {c.tag}
                </span>
                <h3 className="font-bold text-sm text-white leading-snug mb-2">{c.name}</h3>
                <p className="text-xs text-[#8A9BB0] leading-relaxed flex-1">{c.desc}</p>
              </div>

              {/* Footer */}
              <div className="px-5 py-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-orbitron text-lg font-bold text-green-brand">{c.price}</span>
                <a
                  href="#contacto"
                  className="text-xs font-bold tracking-wide text-cyan-brand
                    border border-cyan-brand/30 px-3 py-1.5 rounded
                    hover:bg-cyan-brand hover:text-[#0D1B2A] transition-all"
                >
                  Inscribirse
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
