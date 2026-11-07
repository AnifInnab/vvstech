import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { company } from '../data/company'
import { asset } from '../lib/utils'

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand-500 text-white">
      <img
        src={asset('mark-white.svg')}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-16 h-[160%] w-auto opacity-10"
      />
      <div className="container-x relative flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Redo att komma igång? Begär en kostnadsfri offert.
          </h2>
          <p className="mt-3 text-lg text-white/85">
            Beskriv vad du behöver hjälp med så återkommer vi inom en arbetsdag med ett tydligt
            prisförslag – utan förpliktelser.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/kontakt" className="btn bg-white text-navy-900 hover:bg-steel-100">
            Begär offert
          </Link>
          <a href={company.phoneHref} className="btn-ghost-light">
            <Phone className="size-4" />
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
