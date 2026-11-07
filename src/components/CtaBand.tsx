import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { company } from '../data/company'

export function CtaBand() {
  return (
    <section className="bg-ice-50 py-20 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 via-navy-800 to-brand-700 px-7 py-12 text-white shadow-glow sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="brand-slash absolute -right-20 top-0 h-full w-[34%] bg-white/[0.04]" />
            <div className="brand-slash absolute -right-44 top-0 h-full w-[24%] bg-brand-400/20" />
          </div>
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-brand-300">Kostnadsfri offert</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Redo att komma igång?
              </h2>
              <p className="mt-3 text-lg text-white/75">
                Beskriv vad du behöver hjälp med så återkommer vi inom en arbetsdag med ett tydligt
                prisförslag – utan förpliktelser.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/kontakt" className="btn bg-white text-navy-900 hover:bg-ice-100">
                Begär offert
                <ArrowRight className="size-4" />
              </Link>
              <a href={company.phoneHref} className="btn-ghost-light">
                <Phone className="size-4" />
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
