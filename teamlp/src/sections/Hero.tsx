import heroImg from '../assets/images/profile.jpg'
import { STATS } from '../data/content'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0 grid-bg" />

      {/* Left content */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 pt-28 pb-16">
        <p className="font-orbitron text-[0.6rem] tracking-[4px] text-green-brand uppercase mb-5">
          LAChirana Plat · Tu Plataforma Elearning
        </p>

        <h1 className="font-orbitron font-black text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-5">
          Aprende a<br />
          <span className="text-gradient">Desarrollar</span>
          <br />con IA
        </h1>

        <p className="text-[#8A9BB0] leading-relaxed max-w-md mb-8">
          Cursos prácticos de programación con inteligencia artificial. Desde cero hasta nivel
          profesional, en español, con proyectos reales.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#cursos"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-brand to-[#0099bb]
              text-[#0D1B2A] font-bold text-sm px-7 py-3.5 rounded
              shadow-[0_0_24px_rgba(0,212,255,0.35)]
              hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] hover:-translate-y-0.5
              transition-all duration-200 tracking-wide"
          >
            Ver Cursos →
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-transparent text-white font-semibold
              text-sm px-7 py-3.5 rounded border border-cyan-brand/40
              hover:border-cyan-brand hover:text-cyan-brand
              transition-all duration-200 tracking-wide"
          >
            Más Info
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-12">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-orbitron text-3xl font-bold text-cyan-brand">{s.num}</span>
              <span className="text-[0.7rem] text-[#8A9BB0] tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right image */}
      <div className="relative hidden md:block overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          <img
            src={heroImg}
            alt="Alexander Huarcaya Serrano"
            className="w-full h-full object-cover object-top brightness-50 contrast-110"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-cyan-brand/15 to-green-brand/8"
            style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)' }}
          />
        </div>
        <div className="absolute bottom-8 left-[12%] font-orbitron text-xs text-white tracking-widest"
          style={{ textShadow: '0 0 20px #00D4FF' }}>
          Alexander Huarcaya Serrano · Full Stack Developer
        </div>
      </div>

      {/* Diagonal neon divider */}
      <div
        className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1.5 z-20 -skew-x-1"
        style={{
          background: 'linear-gradient(180deg, #00D4FF, #39FF14)',
          boxShadow: '0 0 30px rgba(0,212,255,0.8)',
        }}
      />
    </section>
  )
}
