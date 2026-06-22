import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { COUNTRIES, COURSES } from '../data/content'

interface FormState {
  nombres: string
  apellidos: string
  pais: string
  celular: string
  curso: string
}

const INITIAL: FormState = { nombres: '', apellidos: '', pais: '', celular: '', curso: '' }

export default function Contacto() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [sent, setSent] = useState(false)

  const selectedCountry = COUNTRIES.find((c) => c.code === form.pais)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="py-24 px-6 bg-[#1A2940]">
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          eyebrow="¿Listo para empezar?"
          title="Solicita"
          accent="más información"
          sub="Déjanos tus datos y te contactamos en menos de 24 horas con toda la información que necesitas."
          center
        />

        <div className="mt-10 bg-[#111E2E] border border-cyan-brand/15 rounded-xl p-8">
          {sent ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-orbitron text-green-brand text-xl mb-2">¡Mensaje enviado!</h3>
              <p className="text-[#8A9BB0]">
                Te contactaremos en menos de 24 horas por WhatsApp.
                ¡Pronto serás parte de TeamLP!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nombres */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nombres" className="text-xs font-semibold text-[#8A9BB0] tracking-wide">
                    Nombres *
                  </label>
                  <input
                    id="nombres" name="nombres" type="text"
                    placeholder="Tu nombre" required
                    value={form.nombres} onChange={handleChange}
                    className="bg-white/[0.04] border border-cyan-brand/20 rounded-md px-4 py-3
                      text-white text-sm placeholder-white/25 outline-none
                      focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/10
                      transition-all"
                  />
                </div>

                {/* Apellidos */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="apellidos" className="text-xs font-semibold text-[#8A9BB0] tracking-wide">
                    Apellidos *
                  </label>
                  <input
                    id="apellidos" name="apellidos" type="text"
                    placeholder="Tus apellidos" required
                    value={form.apellidos} onChange={handleChange}
                    className="bg-white/[0.04] border border-cyan-brand/20 rounded-md px-4 py-3
                      text-white text-sm placeholder-white/25 outline-none
                      focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/10
                      transition-all"
                  />
                </div>
              </div>

              {/* País */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="pais" className="text-xs font-semibold text-[#8A9BB0] tracking-wide">
                  País *
                </label>
                <select
                  id="pais" name="pais" required
                  value={form.pais} onChange={handleChange}
                  className="bg-[#0D1B2A] border border-cyan-brand/20 rounded-md px-4 py-3
                    text-white text-sm outline-none
                    focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/10
                    transition-all"
                >
                  <option value="">Selecciona tu país</option>
                  {COUNTRIES.map((c) => (
                    <option key={c.code + c.name} value={c.code}>
                      {c.flag} {c.name} ({c.code})
                    </option>
                  ))}
                </select>
              </div>

              {/* Celular */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="celular" className="text-xs font-semibold text-[#8A9BB0] tracking-wide">
                  Celular / WhatsApp *
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center px-3 bg-white/[0.04] border border-cyan-brand/20
                    rounded-md text-cyan-brand font-bold text-sm min-w-[90px] justify-center">
                    {selectedCountry ? `${selectedCountry.flag} ${selectedCountry.code}` : '—'}
                  </div>
                  <input
                    id="celular" name="celular" type="tel"
                    placeholder="987 654 321" required
                    value={form.celular} onChange={handleChange}
                    className="flex-1 bg-white/[0.04] border border-cyan-brand/20 rounded-md px-4 py-3
                      text-white text-sm placeholder-white/25 outline-none
                      focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/10
                      transition-all"
                  />
                </div>
              </div>

              {/* Curso */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="curso" className="text-xs font-semibold text-[#8A9BB0] tracking-wide">
                  Curso de interés
                </label>
                <select
                  id="curso" name="curso"
                  value={form.curso} onChange={handleChange}
                  className="bg-[#0D1B2A] border border-cyan-brand/20 rounded-md px-4 py-3
                    text-white text-sm outline-none
                    focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/10
                    transition-all"
                >
                  <option value="">Selecciona un curso</option>
                  {COURSES.map((c) => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                  <option value="Visita a colegio">Visita a mi colegio</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-brand to-[#009abc]
                  border-none text-[#0D1B2A] font-bold text-base py-4 rounded-md
                  shadow-[0_0_24px_rgba(0,212,255,0.3)]
                  hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] hover:-translate-y-0.5
                  transition-all duration-200 tracking-wide cursor-pointer"
              >
                Quiero más información →
              </button>

              <p className="text-center text-xs text-[#8A9BB0]">
                ✅ Sin spam. Te contactamos solo con info relevante sobre el curso seleccionado.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
