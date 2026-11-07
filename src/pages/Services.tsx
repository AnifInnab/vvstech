import { Section } from '../components/Section'
import { ServiceCard } from '../components/ServiceCard'
import { CtaBand } from '../components/CtaBand'
import { PageHero } from '../components/PageHero'
import { services, type ServiceCategory } from '../data/services'
import { usePageTitle } from '../lib/utils'

const order: ServiceCategory[] = ['Värme', 'Vatten', 'Ventilation', 'Kyla', 'Entreprenad']

export function Services() {
  usePageTitle('Tjänster')
  return (
    <>
      <PageHero
        eyebrow="Tjänster"
        title="Våra tjänster"
        lead="Vi erbjuder helhetslösningar inom värme, vatten, ventilation och kyla – för privatpersoner, bostadsrättsföreningar, förvaltare och byggföretag."
      />
      {order.map((cat, i) => {
        const items = services.filter((s) => s.category === cat)
        if (!items.length) return null
        return (
          <Section key={cat} tone={i % 2 === 0 ? 'white' : 'gray'} className="!py-14" title={cat}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </Section>
        )
      })}
      <CtaBand />
    </>
  )
}
