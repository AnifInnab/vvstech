import { useState } from 'react'
import { Section } from '../components/Section'
import { ServiceCard } from '../components/ServiceCard'
import { CtaBand } from '../components/CtaBand'
import { PageHero } from '../components/PageHero'
import { pillars, services, type ServiceCategory } from '../data/services'
import { usePageTitle } from '../lib/utils'

type Filter = 'Alla' | ServiceCategory
const filters: Filter[] = ['Alla', 'Värme', 'Vatten', 'Ventilation', 'Kyla', 'Entreprenad']

export function Services() {
  usePageTitle('Tjänster')
  const [active, setActive] = useState<Filter>('Alla')
  const visible = active === 'Alla' ? services : services.filter((s) => s.category === active)

  return (
    <>
      <PageHero
        eyebrow="Tjänster"
        title="Våra tjänster"
        lead="Vi erbjuder helhetslösningar inom värme, vatten, ventilation och kyla – för privatpersoner, bostadsrättsföreningar, förvaltare och byggföretag."
      />

      <section className="border-b border-steel-100 bg-white">
        <div className="container-x grid divide-y divide-steel-100 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {pillars.map((p) => {
            const Icon = p.icon
            const selected = active === p.title
            return (
              <button
                key={p.title}
                type="button"
                onClick={() => setActive(p.title)}
                className="group flex gap-4 py-7 text-left lg:px-8 lg:first:pl-0 lg:last:pr-0"
              >
                <div
                  className={`flex size-11 shrink-0 items-center justify-center rounded-lg ring-1 transition-colors ${
                    selected
                      ? 'bg-brand-600 text-white ring-brand-600'
                      : 'bg-brand-50 text-brand-600 ring-brand-100 group-hover:bg-brand-100'
                  }`}
                >
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className={`font-semibold transition-colors ${selected ? 'text-brand-600' : 'group-hover:text-brand-600'}`}>
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-steel-500">{p.text}</p>
                </div>
              </button>
            )
          })}
        </div>
      </section>

      <Section tone="ice">
        <div className="mb-10 flex flex-wrap items-center gap-2" role="tablist" aria-label="Filtrera tjänster">
          {filters.map((f) => {
            const selected = f === active
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selected
                    ? 'bg-navy-900 text-white shadow-soft'
                    : 'bg-white text-steel-700 ring-1 ring-navy-900/[0.08] hover:ring-brand-500/40'
                }`}
              >
                {f}
                {f === 'Alla' && <span className="ml-1.5 text-xs opacity-60">{services.length}</span>}
              </button>
            )
          })}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
