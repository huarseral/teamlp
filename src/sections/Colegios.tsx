import faceBannerImg from '../assets/images/face-banner.jpg'
import SectionHeader from '../components/SectionHeader'
import { COLEGIOS_LIST } from '../data/content'
import { useFadeUp } from '../hooks/useFadeUp'

export default function Colegios() {
  const ref = useFadeUp()

  return (
    <section id="colegios" className="py-24 px-6 bg-[#1A2940]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Educación presencial" title="Visitas a" accent="Colegios" />

        <div ref={ref} className="fade-up grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">

          {/* Columna 1: Foto */}
          <div
            className="rounded-2xl overflow-hidden border-2 border-cyan-brand/35
              shadow-[0_0_50px_rgba(0,212,255,0.2)]"
          >
            <img
              src={faceBannerImg}
              alt="Alexander Huarcaya en visita a colegio"
              className="w-full h-[440px] object-cover object-top
                contrast-105 brightness-[1.02]"
            />
          </div>

          {/* Columna 2: Contenido */}
          <div className="flex flex-col justify-center">
            <p className="text-[#8A9BB0] leading-relaxed mb-6">
              Llevamos la programación directamente a los estudiantes de secundaria. Creemos que la
              vocación por la tecnología se despierta antes, y queremos ser esa chispa para la
              próxima generación de developers peruanos y latinoamericanos.
            </p>

            <ul className="flex flex-col gap-3">
              {COLEGIOS_LIST.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#8A9BB0] text-sm leading-relaxed">
                  <span className="text-green-brand text-xs mt-1 flex-shrink-0">▶</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 mt-8 self-start
                text-white font-semibold text-sm px-6 py-3 rounded
                border border-cyan-brand/40
                hover:border-cyan-brand hover:text-cyan-brand
                transition-all duration-200"
            >
              Solicitar visita →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
