interface PageHeroProps {
  eyebrow?: string
  title: string
  lead?: string
}

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-steel-100 bg-gradient-to-b from-ice-100 to-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-20 -top-20 size-64 rounded-full bg-brand-100/60 blur-3xl md:hidden" />
        <div className="brand-slash absolute -right-24 top-0 hidden h-full w-[38%] bg-brand-100/60 md:block" />
        <div className="brand-slash absolute -right-52 top-0 hidden h-full w-[26%] bg-brand-200/50 md:block" />
      </div>
      <div className="container-x relative py-16 sm:py-20">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel-500">{lead}</p>}
      </div>
    </section>
  )
}
