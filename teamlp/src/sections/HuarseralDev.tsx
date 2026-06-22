import SectionHeader from '../components/SectionHeader'
import { TECH_PILLS } from '../data/content'
import { useFadeUp } from '../hooks/useFadeUp'

export default function HuarseralDev() {
  const ref = useFadeUp()

  return (
    <section id="huarseral" className="py-24 px-6 bg-[#0a1520]">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeader eyebrow="El instructor" title="Alexander" accent="Huarcaya Serrano" center />

        <div ref={ref} className="fade-up mt-2">
          <div className="font-orbitron font-black text-3xl md:text-4xl text-gradient mb-2">
            Huarseral Dev
          </div>

          <p className="text-[#8A9BB0] leading-relaxed mt-4">
            Developer Full Stack con experiencia en Python, Flutter, Laravel, React y más. Fundador
            de <strong className="text-cyan-brand">LAChirana Plat</strong>, apasionado por la
            enseñanza y la integración de IA en el desarrollo de software. Ha formado a más de
            500 desarrolladores en toda América Latina.
          </p>

          <div className="flex flex-wrap gap-2.5 justify-center mt-8">
            {TECH_PILLS.map((pill) => (
              <span
                key={pill}
                className="px-4 py-1.5 rounded-full text-[0.78rem] font-semibold tracking-wide
                  border border-cyan-brand/30 text-cyan-brand bg-cyan-brand/7
                  hover:bg-cyan-brand/15 hover:shadow-[0_0_16px_rgba(0,212,255,0.3)]
                  transition-all cursor-default"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
