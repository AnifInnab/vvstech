import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Service } from '../data/services'

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <Link
      to={`/tjanster/${service.slug}`}
      className="group flex flex-col rounded-lg border border-steel-100 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-card-hover"
    >
      <div className="flex size-12 items-center justify-center rounded-md bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
        <Icon className="size-6" strokeWidth={1.75} />
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-steel-500">
        {service.category}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-navy-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-500">{service.short}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
        Läs mer
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
