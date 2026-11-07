import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Service } from '../data/services'

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <Link
      to={`/tjanster/${service.slug}`}
      className="card group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:ring-brand-500/30"
    >
      <div className="flex size-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
        <Icon className="size-6" strokeWidth={1.75} />
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-steel-400">
        {service.category}
      </p>
      <h3 className="mt-1 text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-500">{service.short}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
        Läs mer
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
