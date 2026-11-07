import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Phone, Users } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { QuoteForm } from '../components/QuoteForm'
import { ServiceCard } from '../components/ServiceCard'
import { company } from '../data/company'
import { getService, services } from '../data/services'
import { usePageTitle } from '../lib/utils'

export function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  usePageTitle(service?.title)

  if (!service) return <Navigate to="/tjanster" replace />

  const related = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3)
  const Icon = service.icon

  return (
    <>
      <PageHero eyebrow={service.category} title={service.title} lead={service.short} />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <article className="lg:col-span-7">
            <Link
              to="/tjanster"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-steel-500 hover:text-brand-600"
            >
              <ArrowLeft className="size-4" />
              Alla tjänster
            </Link>
            <div className="mt-6 flex size-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <Icon className="size-7" strokeWidth={1.75} />
            </div>
            <p className="mt-6 text-lg leading-relaxed text-steel-700">{service.intro}</p>

            <h2 className="mt-10 text-xl font-semibold">Det här hjälper vi dig med</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-navy-900">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-start gap-3 rounded-xl bg-ice-50 p-5 ring-1 ring-navy-900/[0.06]">
              <Users className="mt-0.5 size-5 shrink-0 text-brand-600" />
              <div>
                <div className="text-sm font-semibold">För vem?</div>
                <div className="text-sm text-steel-500">{service.audience}</div>
              </div>
            </div>

            <div className="card mt-10 p-6">
              <h3 className="font-semibold">Akut behov?</h3>
              <p className="mt-1 text-sm text-steel-500">
                Vid vattenläcka eller värmebortfall – ring vår jour direkt.
              </p>
              <a href={company.emergencyPhoneHref} className="btn-dark mt-4">
                <Phone className="size-4" />
                Jour {company.emergencyPhone}
              </a>
            </div>
          </article>

          <aside className="lg:col-span-5">
            <div className="card p-6 sm:p-8 lg:sticky lg:top-28">
              <p className="eyebrow">Kostnadsfri offert</p>
              <h2 className="mt-2 text-2xl font-bold">Begär offert på {service.title.toLowerCase()}</h2>
              <p className="mt-2 text-sm text-steel-500">Vi återkommer inom en arbetsdag.</p>
              <div className="mt-6">
                <QuoteForm defaultService={service.title} />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-ice-50 py-16">
          <div className="container-x">
            <h2 className="text-2xl font-bold">Relaterade tjänster</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
