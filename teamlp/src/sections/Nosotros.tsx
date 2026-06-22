import profileImg from '../assets/images/profile.jpg'
import SectionHeader from '../components/SectionHeader'
import { useFadeUp } from '../hooks/useFadeUp'

export default function Nosotros() {
  const ref = useFadeUp()

  return (
    <section id="nosotros" className="py-24 px-6 bg-[#1A2940]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Quiénes somos" title="Sobre" accent="TeamLP" />

        <div ref={ref} className="fade-up grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12">
          {/* Image */}
          <div className="flex justify-center relative">
            <div className="relative">
              <img
                src={profileImg}
                alt="Alexander Huarcaya Serrano"
                className="w-64 h-64 rounded-full object-cover object-top
                  border-2 border-cyan-brand
                  shadow-[0_0_0_8px_rgba(0,212,255,0.1),0_0_60px_rgba(0,212,255,0.3)]"
              />
              <div className="absolute -bottom-3 -right-4 bg-[#0a1520] border border-green-brand
                rounded px-3 py-1.5 font-orbitron text-[0.6rem] text-green-brand tracking-widest
                shadow-[0_0_20px_rgba(57,255,20,0.3)]">
                FULL STACK DEV
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-4 text-[#8A9BB0] leading-relaxed">
            <p>
              Somos <strong className="text-cyan-brand">TeamLP</strong>, plataforma de educación
              tecnológica enfocada en el mundo de habla hispana. Creemos que aprender a programar
              debe ser accesible, práctico y orientado al mercado laboral real.
            </p>
            <p>
              Nuestro equipo lleva más de 8 años formando desarrolladores desde cero, con
              metodología basada en proyectos y acompañamiento personalizado. Nos especializamos
              en integrar <strong className="text-cyan-brand">Inteligencia Artificial</strong> en
              el flujo de trabajo del desarrollador moderno.
            </p>
            <p>
              Con sede en Perú y alcance en toda Latinoamérica, hemos ayudado a cientos de
              personas a conseguir su primer trabajo en tecnología o a escalar profesionalmente.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 mt-4 bg-gradient-to-r from-cyan-brand to-[#0099bb]
                text-[#0D1B2A] font-bold text-sm px-6 py-3 rounded
                shadow-[0_0_24px_rgba(0,212,255,0.35)]
                hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] hover:-translate-y-0.5
                transition-all duration-200"
            >
              Únete ahora →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
