import SectionHeader from '../components/SectionHeader'
import { SERVICES } from '../data/content'
import { useFadeUp } from '../hooks/useFadeUp'

export default function Servicios() {
  const ref = useFadeUp()

  return (
    <section id="servicios" className="py-24 px-6 bg-[#0a1520]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Lo que ofrecemos"
          title="Nuestros"
          accent="Servicios"
          sub="Más allá de los cursos, ofrecemos acompañamiento integral para tu crecimiento como desarrollador."
        />

        <div ref={ref} className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="relative bg-[#111E2E] border border-green-brand/10 rounded-lg p-8 overflow-hidden
                hover:border-green-brand/30 hover:shadow-[0_0_30px_rgba(57,255,20,0.1)]
                hover:-translate-y-1 transition-all duration-300
                before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5
                before:bg-gradient-to-r before:from-cyan-brand before:to-green-brand
                before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-base text-white mb-2">{s.title}</h3>
              <p className="text-sm text-[#8A9BB0] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
