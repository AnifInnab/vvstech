interface PageHeroProps {
  eyebrow?: string
  title: string
  lead?: string
}

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="brand-slash absolute -right-32 top-0 h-full w-[40%] bg-navy-800/70" />
        <div className="brand-slash absolute -right-56 top-0 h-full w-[28%] bg-brand-500/90" />
      </div>
      <div className="container-x relative py-16 sm:py-20">
        {eyebrow && <p className="eyebrow text-brand-400">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{lead}</p>}
      </div>
    </section>
  )
}
