import { useState, useEffect } from 'react'
import { X, Menu } from 'lucide-react'
import { NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const handleLink = () => setOpen(false)

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-4
          bg-[#0D1B2A]/85 backdrop-blur-md border-b border-cyan-brand/15
          transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.4)]' : ''}`}
      >
        <a href="#inicio" className="font-orbitron font-black text-xl tracking-widest">
          <span className="text-gradient">Team</span>
          <span className="text-green-brand">LP</span>
        </a>

        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="flex flex-col gap-[5px] p-1 group"
        >
          <Menu size={26} className="text-cyan-brand" />
        </button>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[150] bg-black/60 transition-opacity duration-300
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Offcanvas */}
      <aside
        role="dialog"
        aria-label="Menú de navegación"
        className={`fixed top-0 right-0 bottom-0 z-[200] w-[min(320px,85vw)]
          bg-[#0a1520] border-l border-cyan-brand/20 flex flex-col p-6 gap-0
          transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <span className="font-orbitron font-bold text-sm text-cyan-brand tracking-widest">
            Team<span className="text-green-brand">LP</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="w-9 h-9 rounded-full border border-cyan-brand/30 text-cyan-brand
              flex items-center justify-center hover:bg-cyan-brand hover:text-[#0D1B2A] transition-all"
          >
            <X size={16} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLink}
              className="relative py-4 text-[1.05rem] font-medium text-white border-b border-white/[0.06]
                transition-all duration-200 hover:text-cyan-brand hover:pl-4
                before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
                before:w-0 before:h-0.5 before:bg-cyan-brand before:transition-all
                hover:before:w-2.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social */}
        <div className="mt-auto pt-8 flex gap-3">
          {[
            { label: 'YouTube', icon: '▶' },
            { label: 'WhatsApp', icon: '💬' },
            { label: 'GitHub', icon: '⌨' },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="w-10 h-10 rounded-full border border-cyan-brand/30 text-cyan-brand
                flex items-center justify-center text-sm
                hover:bg-cyan-brand hover:text-[#0D1B2A] transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </aside>
    </>
  )
}
