import SectionHeader from '../components/SectionHeader'
import { EXPERIENCE } from '../data/content'
import { useFadeUp } from '../hooks/useFadeUp'

export default function Experiencia() {
  const ref = useFadeUp()

  return (
    <section id="experiencia" className="py-24 px-6 bg-[#1A2940]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Trayectoria" title="Experiencia y" accent="logros" />

        <div ref={ref} className="fade-up grid grid-cols-2 md:grid-cols-3 gap-5 mt-12">
          {EXPERIENCE.map((item) => (
            <div
              key={item.desc}
              className="bg-[#111E2E] border border-cyan-brand/12 rounded-lg p-7 text-center
                hover:border-cyan-brand hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]
                hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="font-orbitron text-3xl font-bold text-cyan-brand">{item.num}</div>
              <div className="text-sm text-[#8A9BB0] mt-1.5 leading-snug">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
