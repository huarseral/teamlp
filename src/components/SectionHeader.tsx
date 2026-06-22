interface SectionHeaderProps {
  eyebrow: string
  title: string
  accent: string
  sub?: string
  center?: boolean
}

export default function SectionHeader({ eyebrow, title, accent, sub, center }: SectionHeaderProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      <p className="font-orbitron text-[0.6rem] tracking-[4px] text-cyan-brand uppercase mb-3">
        {eyebrow}
      </p>
      <h2 className="font-orbitron font-bold text-3xl md:text-4xl leading-tight mb-3">
        {title} <span className="text-gradient">{accent}</span>
      </h2>
      {sub && (
        <p className={`text-[#8A9BB0] leading-relaxed max-w-xl ${center ? 'mx-auto' : ''}`}>
          {sub}
        </p>
      )}
    </div>
  )
}
