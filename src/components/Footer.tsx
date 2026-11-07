import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { company } from '../data/company'
import { services } from '../data/services'
import { asset } from '../lib/utils'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <img src={asset('logo-white.svg')} alt="VVS tech" className="h-9 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            {company.tagline}. Vi är en auktoriserad VVS-firma som levererar värme, vatten, ventilation
            och kyla med hög kvalitet till privatpersoner, bostadsrättsföreningar och fastighetsägare i{' '}
            {company.serviceArea}.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Säker Vatten', 'ROT-avdrag', 'F-skatt', 'Jour 24/7'].map((b) => (
              <span
                key={b}
                className="rounded border border-white/15 px-2.5 py-1 text-xs font-medium text-white/80"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Tjänster</h3>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/tjanster/${s.slug}`} className="text-sm text-white/80 hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Företaget</h3>
          <ul className="mt-4 space-y-2.5">
            {[
              { to: '/om-oss', label: 'Om oss' },
              { to: '/tjanster', label: 'Alla tjänster' },
              { to: '/kontakt', label: 'Begär offert' },
              { to: '/kontakt', label: 'Kontakt' },
            ].map((l, i) => (
              <li key={i}>
                <Link to={l.to} className="text-sm text-white/80 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Kontakt</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-400" />
              <div>
                <a href={company.phoneHref} className="hover:text-white">
                  {company.phone}
                </a>
                <div className="text-xs text-white/50">
                  Jour:{' '}
                  <a href={company.emergencyPhoneHref} className="hover:text-white">
                    {company.emergencyPhone}
                  </a>
                </div>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand-400" />
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-400" />
              <span>
                {company.address.street}
                <br />
                {company.address.postalCode} {company.address.city}
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-brand-400" />
              <span>
                {company.hours.weekdays}
                <br />
                <span className="text-white/50">{company.hours.emergency}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {company.legalName} · Org.nr {company.orgNumber}
          </span>
          <span>Alla rättigheter förbehållna</span>
        </div>
      </div>
    </footer>
  )
}
